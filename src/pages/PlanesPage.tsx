import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { useEffect, useState } from "react";
import { PRIMARY_COLOR } from "@/config/colors";
import { getWhatsAppLink, SITE_CONFIG } from "@/config/seo";

const planesStyles = `
.planes-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
}

.planes-title {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 60px;
    color: #1e293b;
}

.planes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 40px;
}

.plan-image-wrapper {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
}

.plan-image-wrapper:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px ${PRIMARY_COLOR};
    border-color: ${PRIMARY_COLOR};
}

.plan-image-wrapper.popular {
    border-color: ${PRIMARY_COLOR};
    box-shadow: 0 0 0 3px rgba(220, 255, 49, 0.2), 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.plan-image-wrapper.popular:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px ${PRIMARY_COLOR};
}

.plan-image-wrapper.selected {
    border-color: ${PRIMARY_COLOR};
    box-shadow: 0 0 0 3px rgba(220, 255, 49, 0.2), 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.plan-image-wrapper.selected:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px ${PRIMARY_COLOR};
}

.plan-image-wrapper.default-hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px ${PRIMARY_COLOR};
}

.plan-image-wrapper.default-hover .plan-image {
    transform: scale(1.02);
}

.popular-badge {
    position: absolute;
    top: 20px;
    right: -35px;
    background: linear-gradient(135deg, #f59e0b, #f97316);
    color: white;
    padding: 6px 40px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    transform: rotate(45deg);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 10;
}

.most-popular-belt {
    position: absolute;
    top: 15px;
    right: -30px;
    background: linear-gradient(135deg, rgba(75,251,186,0.7), rgba(220,255,49,0.7));
    color: white;
    padding: 4px 30px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    z-index: 10;
    transform: rotate(45deg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    width: 120px;
}

.plan-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.plan-image-wrapper:hover .plan-image {
    transform: scale(1.02);
}

.seo-content {
    margin-top: 60px;
    padding: 40px;
    background: #f8fafc;
    border-radius: 20px;
}

.seo-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 30px;
    color: #1e293b;
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.comparison-table th {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 16px;
    text-align: left;
    font-weight: 600;
    font-size: 14px;
}

.comparison-table td {
    padding: 12px 16px;
    border-bottom: 1px solid #e2e8f0;
    font-size: 14px;
    color: #475569;
}

.comparison-table tr:last-child td {
    border-bottom: none;
}

.comparison-table tr:hover {
    background: #f8fafc;
}

.comparison-table-hint {
    display: none;
}

@media (max-width: 768px) {
    .planes-title {
        font-size: 32px;
    }

    .planes-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .plan-image-wrapper.popular {
        transform: scale(1);
    }

    .plan-image-wrapper.popular:hover {
        transform: scale(1.05);
    }

    .seo-content {
        padding: 24px 16px;
    }

    .comparison-table-hint {
        display: block;
        font-size: 13px;
        color: #64748b;
        margin-bottom: 12px;
        text-align: center;
    }

    .comparison-table-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin: 0 -4px;
        box-shadow: inset -8px 0 12px -8px rgba(0, 0, 0, 0.15);
        border-radius: 12px;
    }

    .comparison-table {
        font-size: 12px;
        min-width: 560px;
    }

    .comparison-table th,
    .comparison-table td {
        padding: 8px;
    }
}
`;

const plans = [
    {
        id: "essential",
        image: "/planes/1.png",
        name: "Essential",
        price: "1000000",
        priceDisplay: "$1.000.000 COP",
        description: "Presencia Digital",
        popular: false
    },
    {
        id: "professional",
        image: "/planes/2.png",
        name: "Professional",
        price: "2300000",
        priceDisplay: "$2.300.000 COP",
        description: "Potencia tu negocio",
        popular: true
    },
    {
        id: "premium",
        image: "/planes/3.png",
        name: "Premium",
        price: "4400000",
        priceDisplay: "$4.400.000 COP",
        description: "Vende sin límites",
        popular: false
    }
];

const planDetails = {
    essential: {
        dominioHosting: "1 año",
        certificadoSSL: "1 año",
        paginas: "3 páginas",
        diseño: "Diseño esencial de marca",
        cargaProductos: "Sí",
        redesSociales: "Sí",
        pedidosWhatsApp: "Sólo WhatsApp",
        optimizacionSEO: "SEO esencial",
        pagosOnline: "No",
        carritoCompras: "No",
        panelAdmin: "No",
        pasarelaPago: "No",
        chatbot: "No",
        soporteTecnico: "2 semanas",
        usuarioIdeal: "Negocios que necesitan una presencia digital básica"
    },
    professional: {
        dominioHosting: "2 años",
        certificadoSSL: "2 años",
        paginas: "5 páginas",
        diseño: "Diseño profesional + responsive",
        cargaProductos: "Sí",
        redesSociales: "Sí",
        pedidosWhatsApp: "Sí",
        optimizacionSEO: "SEO profesional",
        pagosOnline: "Sí",
        carritoCompras: "No",
        panelAdmin: "No",
        pasarelaPago: "No",
        chatbot: "No",
        soporteTecnico: "2 meses",
        usuarioIdeal: "Negocios en crecimiento que buscan mejorar su presencia y ventas online"
    },
    premium: {
        dominioHosting: "4 años",
        certificadoSSL: "4 años",
        paginas: "7 páginas",
        diseño: "Diseño premium personalizado",
        cargaProductos: "Sí",
        redesSociales: "Sí",
        pedidosWhatsApp: "Sí",
        optimizacionSEO: "SEO premium",
        pagosOnline: "Sí",
        carritoCompras: "Sí",
        panelAdmin: "Sí",
        pasarelaPago: "Sí",
        chatbot: "Sí",
        soporteTecnico: "6 meses",
        usuarioIdeal: "Empresas que requieren e-commerce completo y soporte avanzado"
    }
};

const handlePlanClick = (planName: string) => {
    window.open(
        getWhatsAppLink(`Hola, estoy interesad@ en el plan ${planName}`),
        "_blank",
        "noopener,noreferrer",
    );
};

// Generate Schema.org structured data for plans
const getPlansSchema = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Planes de Desarrollo Web',
        description: 'Planes de desarrollo web y branding digital para empresas y emprendedores',
        itemListElement: plans.map((plan, index) => ({
            '@type': 'Product',
            position: index + 1,
            name: `Plan ${plan.name}`,
            description: planDetails[plan.id as keyof typeof planDetails].usuarioIdeal,
            offers: {
                '@type': 'Offer',
                price: plan.price,
                priceCurrency: 'COP',
                availability: 'https://schema.org/InStock',
                url: `${SITE_CONFIG.url}/planes`
            },
            category: 'Web Development Service',
            brand: {
                '@type': 'Person',
                name: 'Edinsson Melo'
            }
        }))
    };
};

const DEFAULT_SELECTED_PLAN_ID = "professional";

export const PlanesPage = () => {
    const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
    const [hoveredPlanId, setHoveredPlanId] = useState<string | null>(null);

    const showPreselected = selectedPlanId === null && hoveredPlanId === null;

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    const plansSchema = getPlansSchema();

    const onPlanCardClick = (planId: string, planName: string) => {
        setSelectedPlanId(planId);
        handlePlanClick(planName);
    };

    return (
        <>
            <style>{planesStyles}</style>
            <script type="application/ld+json">
                {JSON.stringify(plansSchema)}
            </script>
            <div className="min-h-screen bg-neutral-100 font-dm_sans">
                <Header />

                <main>
                    <PageHeader
                        badge="Plans"
                        title="Web Development Plans"
                        description="I offer comprehensive web development packages designed to help businesses establish and grow their digital presence."
                    />

                    <PageSection width="wide">
                        <div className="planes-container">
                            <div className="planes-grid">
                                {plans.map((plan) => (
                                    <div
                                        key={plan.id}
                                        className={`plan-image-wrapper ${plan.popular ? 'popular' : ''} ${(selectedPlanId ?? DEFAULT_SELECTED_PLAN_ID) === plan.id ? 'selected' : ''} ${showPreselected && plan.id === DEFAULT_SELECTED_PLAN_ID ? 'default-hover' : ''}`}
                                        onClick={() => onPlanCardClick(plan.id, plan.name)}
                                        onMouseEnter={() => setHoveredPlanId(plan.id)}
                                        onMouseLeave={() => setHoveredPlanId(null)}
                                    >
                                        {plan.popular && (
                                            <div className="most-popular-belt">Most Popular</div>
                                        )}
                                        <img
                                            src={plan.image}
                                            alt={`Plan ${plan.name} - ${plan.description} - ${plan.priceDisplay}`}
                                            className="plan-image"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* SEO Content - Structured Data for Google */}
                            <div className="seo-content">
                                <p className="comparison-table-hint">Desliza para ver todos los planes</p>
                                <div className="comparison-table-wrapper">
                                    <table className="comparison-table">
                                        <thead>
                                            <tr>
                                                <th>Característica</th>
                                                <th>Essential</th>
                                                <th>Professional</th>
                                                <th>Premium</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Precio</strong></td>
                                                <td>$1.000.000 COP</td>
                                                <td>$2.300.000 COP</td>
                                                <td>$4.400.000 COP</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Objetivo Principal</strong></td>
                                                <td>Presencia Digital</td>
                                                <td>Potencia tu negocio</td>
                                                <td>Vende sin límites</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Dominio + Hosting</strong></td>
                                                <td>{planDetails.essential.dominioHosting}</td>
                                                <td>{planDetails.professional.dominioHosting}</td>
                                                <td>{planDetails.premium.dominioHosting}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Certificado SSL</strong></td>
                                                <td>{planDetails.essential.certificadoSSL}</td>
                                                <td>{planDetails.professional.certificadoSSL}</td>
                                                <td>{planDetails.premium.certificadoSSL}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Número de Páginas</strong></td>
                                                <td>{planDetails.essential.paginas}</td>
                                                <td>{planDetails.professional.paginas}</td>
                                                <td>{planDetails.premium.paginas}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Diseño</strong></td>
                                                <td>{planDetails.essential.diseño}</td>
                                                <td>{planDetails.professional.diseño}</td>
                                                <td>{planDetails.premium.diseño}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Carga de Productos</strong></td>
                                                <td>{planDetails.essential.cargaProductos}</td>
                                                <td>{planDetails.professional.cargaProductos}</td>
                                                <td>{planDetails.premium.cargaProductos}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Redes Sociales</strong></td>
                                                <td>{planDetails.essential.redesSociales}</td>
                                                <td>{planDetails.professional.redesSociales}</td>
                                                <td>{planDetails.premium.redesSociales}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Pedidos vía WhatsApp & Web</strong></td>
                                                <td>{planDetails.essential.pedidosWhatsApp}</td>
                                                <td>{planDetails.professional.pedidosWhatsApp}</td>
                                                <td>{planDetails.premium.pedidosWhatsApp}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Optimización SEO</strong></td>
                                                <td>{planDetails.essential.optimizacionSEO}</td>
                                                <td>{planDetails.professional.optimizacionSEO}</td>
                                                <td>{planDetails.premium.optimizacionSEO}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Integración de Pagos</strong></td>
                                                <td>{planDetails.essential.pagosOnline}</td>
                                                <td>{planDetails.professional.pagosOnline}</td>
                                                <td>{planDetails.premium.pagosOnline}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Carrito de Compras</strong></td>
                                                <td>{planDetails.essential.carritoCompras}</td>
                                                <td>{planDetails.professional.carritoCompras}</td>
                                                <td>{planDetails.premium.carritoCompras}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Panel Administrativo</strong></td>
                                                <td>{planDetails.essential.panelAdmin}</td>
                                                <td>{planDetails.professional.panelAdmin}</td>
                                                <td>{planDetails.premium.panelAdmin}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Pasarela de Pago</strong></td>
                                                <td>{planDetails.essential.pasarelaPago}</td>
                                                <td>{planDetails.professional.pasarelaPago}</td>
                                                <td>{planDetails.premium.pasarelaPago}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Asistente Chatbot</strong></td>
                                                <td>{planDetails.essential.chatbot}</td>
                                                <td>{planDetails.professional.chatbot}</td>
                                                <td>{planDetails.premium.chatbot}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Soporte Técnico</strong></td>
                                                <td>{planDetails.essential.soporteTecnico}</td>
                                                <td>{planDetails.professional.soporteTecnico}</td>
                                                <td>{planDetails.premium.soporteTecnico}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Caso de Uso</strong></td>
                                                <td>{planDetails.essential.usuarioIdeal}</td>
                                                <td>{planDetails.professional.usuarioIdeal}</td>
                                                <td>{planDetails.premium.usuarioIdeal}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </PageSection>
                </main>

                <Footer />
            </div>
        </>
    );
};
