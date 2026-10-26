import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const { Pool } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL Connection Pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:bc49738e9a5c6ec173ed1606f97767a2fb67a58be4d9367b@postgres:5432/postgres',
    ssl: false,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint
app.get('/api/health', async (req, res) => {
    try {
        const dbRes = await pool.query('SELECT 1 as alive');
        res.json({ ok: true, status: 'healthy', db: dbRes.rows[0].alive === 1 });
    } catch (err) {
        res.status(500).json({ ok: false, status: 'degraded', error: err.message });
    }
});

// Subscription registration endpoint
app.post('/api/suscripciones', async (req, res) => {
    try {
        const { nombre, email, telefono, empresa_proyecto, plan, notas } = req.body;

        if (!nombre || !email || !plan) {
            return res.status(400).json({ 
                ok: false, 
                error: 'Nombre, correo electrónico y plan son campos obligatorios.' 
            });
        }

        const normalizedPlan = String(plan).toLowerCase().trim();
        let monto_cop = 60000;
        let dias_vigencia = 30;
        let mp_link = 'https://mpago.la/2p11wRE';

        if (normalizedPlan === 'anual') {
            monto_cop = 690000;
            dias_vigencia = 365;
            mp_link = 'https://mpago.la/13Dnx72';
        } else if (normalizedPlan !== 'mensual') {
            return res.status(400).json({ 
                ok: false, 
                error: 'El plan debe ser mensual o anual.' 
            });
        }

        // Insert subscription and calculate expiration (vigencia)
        const insertQuery = `
            INSERT INTO suscripciones_servidor (
                nombre, email, telefono, empresa_proyecto, plan, monto_cop,
                fecha_inicio, fecha_fin, dias_vigencia, estado, mp_link, notas
            ) VALUES (
                $1, $2, $3, $4, $5, $6,
                CURRENT_DATE, CURRENT_DATE + ($7 || ' days')::interval, $7, 'activo', $8, $9
            ) RETURNING 
                id, nombre, email, telefono, empresa_proyecto, plan, monto_cop, 
                fecha_inicio, fecha_fin, dias_vigencia, estado, mp_link, created_at;
        `;

        const values = [
            String(nombre).trim(),
            String(email).trim().toLowerCase(),
            telefono ? String(telefono).trim() : null,
            empresa_proyecto ? String(empresa_proyecto).trim() : null,
            normalizedPlan,
            monto_cop,
            dias_vigencia,
            mp_link,
            notas ? String(notas).trim() : null,
        ];

        const { rows } = await pool.query(insertQuery, values);
        const record = rows[0];

        res.status(201).json({
            ok: true,
            message: 'Suscripción registrada con éxito en base de datos.',
            data: record,
            checkoutUrl: mp_link,
        });
    } catch (error) {
        console.error('Error registrando suscripción:', error);
        res.status(500).json({ ok: false, error: 'Error interno registrando la suscripción.' });
    }
});

// Admin endpoint to view subscriptions and their validity
app.get('/api/suscripciones', async (req, res) => {
    try {
        const { key } = req.query;
        const validKey = process.env.ADMIN_SECRET || 'edinsson2026';
        if (key !== validKey) {
            return res.status(401).json({ 
                ok: false, 
                error: 'No autorizado. Proporciona la clave de administrador ?key=...' 
            });
        }

        const query = `
            SELECT 
                id, nombre, email, telefono, empresa_proyecto, plan, monto_cop,
                fecha_inicio, fecha_fin, dias_vigencia, estado, mp_link, notas, created_at,
                (fecha_fin >= CURRENT_DATE) AS vigente,
                (fecha_fin - CURRENT_DATE) AS dias_restantes
            FROM suscripciones_servidor
            ORDER BY created_at DESC;
        `;

        const { rows } = await pool.query(query);
        res.json({
            ok: true,
            total: rows.length,
            suscripciones: rows,
        });
    } catch (error) {
        console.error('Error consultando suscripciones:', error);
        res.status(500).json({ ok: false, error: error.message });
    }
});

// Email Configuration (Contact form legacy)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/api/send-email', async (req, res) => {
    const { Name, Email, Message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: ['edinssonadrian@gmail.com', process.env.EMAIL_USER],
        subject: `New Contact Form Submission from ${Name}`,
        text: `Name: ${Name}\nEmail: ${Email}\nMessage: ${Message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
});

// Serve React App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n✅ Portafolio API running on http://localhost:${PORT}`);
});
