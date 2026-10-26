import { useEffect, useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { PRIMARY_COLOR } from "@/config/colors";
import { getWhatsAppLink } from "@/config/seo";
import { 
    Check, 
    Server, 
    ShieldCheck, 
    Zap, 
    Headphones, 
    ExternalLink, 
    Lock, 
    CreditCard, 
    PhoneCall, 
    Sparkles,
    Calendar,
    X,
    Loader2
} from "lucide-react";

type PlanType = 'mensual' | 'anual';

interface PlanInfo {
    tipo: PlanType;
    nombre: string;
    precioDisplay: string;
    montoCOP: number;
    periodoDisplay: string;
    diasVigencia: number;
    mpLink: string;
}

const PLANES_CONFIG: Record<PlanType, PlanInfo> = {
    mensual: {
        tipo: 'mensual',
        nombre: 'Plan Mensual',
        precioDisplay: '$60.000',
        montoCOP: 60000,
        periodoDisplay: 'COP / mes',
        diasVigencia: 30,
        mpLink: 'https://mpago.la/2p11wRE',
    },
    anual: {
        tipo: 'anual',
        nombre: 'Plan Anual',
        precioDisplay: '$690.000',
        montoCOP: 690000,
        periodoDisplay: 'COP / año',
        diasVigencia: 365,
        mpLink: 'https://mpago.la/13Dnx72',
    },
};

export const ServidorAsteriskPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Modal state
    const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [empresaProyecto, setEmpresaProyecto] = useState('');
    const [notas, setNotas] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successData, setSuccessData] = useState<{
        id: number;
        fechaFin: string;
        checkoutUrl: string;
    } | null>(null);

    const whatsappHelpLink = getWhatsAppLink("Hola Edinsson, tengo una consulta sobre la suscripción al servidor privado.");

    // Helper to calculate end date preview
    const calculateEndDate = (days: number): string => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + days);
        return targetDate.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleOpenModal = (plan: PlanType) => {
        setSelectedPlan(plan);
        setErrorMessage(null);
        setSuccessData(null);
    };

    const handleCloseModal = () => {
        if (isLoading) return;
        setSelectedPlan(null);
        setErrorMessage(null);
        setSuccessData(null);
    };

    const handleSubmitRegistration = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPlan) return;

        setIsLoading(true);
        setErrorMessage(null);

        try {
            const response = await fetch('/api/suscripciones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre,
                    email,
                    telefono,
                    empresa_proyecto: empresaProyecto,
                    plan: selectedPlan,
                    notas,
                }),
            });

            const result = await response.json();

            if (!response.ok || !result.ok) {
                throw new Error(result.error || 'Error registrando la suscripción.');
            }

            const record = result.data;
            const checkoutUrl = result.checkoutUrl;

            const fechaFinStr = record.fecha_fin ? new Date(record.fecha_fin).toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }) : calculateEndDate(PLANES_CONFIG[selectedPlan].diasVigencia);

            setSuccessData({
                id: record.id,
                fechaFin: fechaFinStr,
                checkoutUrl,
            });

            // Auto open Mercado Pago in a new tab
            window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'No se pudo conectar con el servidor. Inténtalo de nuevo.';
            setErrorMessage(message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50 text-stone-900 font-dm_sans">
            <Header />

            <main className="pt-28 pb-20">
                <PageSection width="wide">
                    {/* Header */}
                    <PageHeader
                        badge="Infraestructura Cloud & Servidores Privados"
                        title="Suscripción a Servidor Privado"
                        description="Servidor dedicado 24/7 con alta disponibilidad, monitoreo proactivo, actualizaciones continuas y soporte técnico especializado."
                    />

                    {/* Pricing Cards Grid */}
                    <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {/* Plan Mensual */}
                        <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold mb-4">
                                    <Server className="w-3.5 h-3.5" />
                                    Facturación Mes a Mes
                                </div>
                                <h3 className="text-2xl font-bold font-cabinet_grotesk text-stone-900">
                                    Plan Mensual
                                </h3>
                                <p className="text-stone-500 text-sm mt-2">
                                    Máxima flexibilidad para tu infraestructura sin cláusulas de permanencia.
                                </p>

                                <div className="mt-6 pb-6 border-b border-stone-100">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl md:text-5xl font-extrabold font-cabinet_grotesk text-stone-900">
                                            $60.000
                                        </span>
                                        <span className="text-stone-500 font-medium text-sm">
                                            COP / mes
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-stone-600">
                                        <Calendar className="w-3.5 h-3.5 text-stone-500" />
                                        <span><strong>Vigencia:</strong> 30 días renovable mes a mes</span>
                                    </div>
                                </div>

                                <ul className="mt-6 space-y-3.5 text-sm text-stone-700">
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Servidor privado dedicado:</strong> Recursos garantizados 24/7 en la nube para tu servicio o aplicación.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Monitoreo continuo de estabilidad:</strong> Supervisión de métricas, memoria y conectividad permanente.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Mantenimiento y seguridad:</strong> Parches periódicos del sistema operativo y firewall.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Soporte técnico directo:</strong> Atención vía WhatsApp ante cualquier eventualidad o ajuste técnico.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Sin permanencia:</strong> Cancela o reactiva cuando lo necesites.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-stone-100">
                                <button
                                    type="button"
                                    onClick={() => handleOpenModal('mensual')}
                                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-stone-900 text-white font-semibold text-sm hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
                                >
                                    <span>Suscribirme al Plan Mensual</span>
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                                <p className="text-center text-[11px] text-stone-600 mt-2.5 flex items-center justify-center gap-1.5">
                                    <Lock className="w-3 h-3 text-stone-500" />
                                    Registro y pago seguro procesado por Mercado Pago
                                </p>
                            </div>
                        </div>

                        {/* Plan Anual (Recomendado) */}
                        <div 
                            className="relative bg-white rounded-3xl p-8 md:p-10 border-2 shadow-xl flex flex-col justify-between"
                            style={{ borderColor: PRIMARY_COLOR }}
                        >
                            {/* Floating Badge */}
                            <div 
                                className="absolute -top-3.5 right-6 px-4 py-1 rounded-full text-stone-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                                style={{ backgroundColor: PRIMARY_COLOR }}
                            >
                                <Sparkles className="w-3.5 h-3.5" />
                                Recomendado • Ahorro Directo
                            </div>

                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-4">
                                    <Zap className="w-3.5 h-3.5" />
                                    Ahorra $30.000 COP al año
                                </div>
                                <h3 className="text-2xl font-bold font-cabinet_grotesk text-stone-900">
                                    Plan Anual
                                </h3>
                                <p className="text-stone-500 text-sm mt-2">
                                    Asegura estabilidad operativa continua durante todo el año con la tarifa más económica.
                                </p>

                                <div className="mt-6 pb-6 border-b border-stone-100">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl md:text-5xl font-extrabold font-cabinet_grotesk text-stone-900">
                                            $690.000
                                        </span>
                                        <span className="text-stone-500 font-medium text-sm">
                                            COP / año
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 mt-2">
                                        <span className="inline-block px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-semibold text-xs">
                                            Equivale a $57.500 COP / mes
                                        </span>
                                        <span className="text-emerald-800 text-xs font-medium">
                                            ($30.000 COP de ahorro)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-stone-600">
                                        <Calendar className="w-3.5 h-3.5 text-stone-500" />
                                        <span><strong>Vigencia:</strong> 365 días (1 año completo garantizado)</span>
                                    </div>
                                </div>

                                <ul className="mt-6 space-y-3.5 text-sm text-stone-700">
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Todo lo del plan mensual:</strong> Servidor privado, monitoreo continuo 24/7 y mantenimiento preventivo.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Vigencia extendida de 365 días:</strong> Cobertura ininterrumpida los 365 días del año.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Tarifa congelada por 12 meses:</strong> Protección ante variaciones de infraestructura o costos en la nube.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Ahorro inmediato de $30.000 COP:</strong> Paga el equivalente a 11.5 meses y recibe 12 meses de servicio.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Soporte técnico prioritario:</strong> Canal directo con atención preferencial.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-stone-100">
                                <button
                                    type="button"
                                    onClick={() => handleOpenModal('anual')}
                                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-stone-950 font-bold text-sm transition-all hover:scale-[1.02] shadow-md cursor-pointer"
                                    style={{ backgroundColor: PRIMARY_COLOR }}
                                >
                                    <span>Suscribirme al Plan Anual (Con Ahorro)</span>
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                                <p className="text-center text-[11px] text-stone-600 mt-2.5 flex items-center justify-center gap-1.5">
                                    <Lock className="w-3 h-3 text-stone-500" />
                                    Registro y pago seguro procesado por Mercado Pago
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges & Payment Methods */}
                    <div className="mt-14 max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-8 border border-stone-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
                                    <CreditCard className="w-5 h-5" />
                                </div>
                                <h5 className="font-semibold text-stone-900 text-sm">Medios de Pago Soportados</h5>
                                <p className="text-xs text-stone-500 mt-1">
                                    Tarjetas de Crédito, Débito, Transferencia PSE y efectivo vía Efecty.
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <h5 className="font-semibold text-stone-900 text-sm">Transacción 100% Segura</h5>
                                <p className="text-xs text-stone-500 mt-1">
                                    Encriptación SSL de 256 bits y respaldo antifraude directo de Mercado Pago.
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
                                    <Headphones className="w-5 h-5" />
                                </div>
                                <h5 className="font-semibold text-stone-900 text-sm">Soporte Directo</h5>
                                <p className="text-xs text-stone-500 mt-1">
                                    Atención personalizada con Edinsson Melo antes, durante y después del despliegue.
                                </p>
                            </div>
                        </div>
                    </div>
                </PageSection>
            </main>

            {/* Registration Modal */}
            {selectedPlan && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-stone-200 overflow-hidden max-h-[90vh] overflow-y-auto">
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            disabled={isLoading}
                            className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {!successData ? (
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
                                        {PLANES_CONFIG[selectedPlan].nombre}
                                    </div>
                                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                                        {PLANES_CONFIG[selectedPlan].precioDisplay} {PLANES_CONFIG[selectedPlan].periodoDisplay}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold font-cabinet_grotesk text-stone-900">
                                    Registro de Suscripción
                                </h3>
                                <p className="text-stone-500 text-xs mt-1">
                                    Ingresa tus datos para registrar tu servidor en nuestro sistema y calcular tu vigencia antes del pago.
                                </p>

                                {/* Validity Box Preview */}
                                <div className="mt-4 p-4 rounded-2xl bg-neutral-100 border border-neutral-200/80 text-xs text-stone-700 space-y-1">
                                    <div className="flex items-center justify-between font-medium">
                                        <span>Duración de la vigencia:</span>
                                        <span className="font-bold text-stone-900">{PLANES_CONFIG[selectedPlan].diasVigencia} días</span>
                                    </div>
                                    <div className="flex items-center justify-between text-stone-600">
                                        <span>Fecha de expiración / renovación:</span>
                                        <span className="font-semibold text-emerald-700">
                                            {calculateEndDate(PLANES_CONFIG[selectedPlan].diasVigencia)}
                                        </span>
                                    </div>
                                </div>

                                {errorMessage && (
                                    <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                                        {errorMessage}
                                    </div>
                                )}

                                <form onSubmit={handleSubmitRegistration} className="mt-5 space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                                            Nombre y Apellido *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            placeholder="Ej. Carlos Rodríguez"
                                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                                            Correo Electrónico *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="carlos@empresa.com"
                                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                                            Teléfono / WhatsApp *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                            placeholder="+57 300 123 4567"
                                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                                            Empresa o Identificador de Proyecto (Opcional)
                                        </label>
                                        <input
                                            type="text"
                                            value={empresaProyecto}
                                            onChange={(e) => setEmpresaProyecto(e.target.value)}
                                            placeholder="Ej. PBX Central / Mi Empresa SAS"
                                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                                            Notas o Requerimientos Adicionales (Opcional)
                                        </label>
                                        <textarea
                                            rows={2}
                                            value={notas}
                                            onChange={(e) => setNotas(e.target.value)}
                                            placeholder="Detalles sobre el servidor o requerimientos..."
                                            className="w-full px-4 py-2 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 resize-none"
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-stone-900 text-white font-semibold text-sm hover:bg-stone-800 transition-colors disabled:opacity-50 cursor-pointer shadow-md"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    <span>Registrando en el sistema...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Registrar y Proceder al Pago</span>
                                                    <ExternalLink className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center text-[11px] text-stone-500 mt-2 flex items-center justify-center gap-1">
                                            <Lock className="w-3 h-3" />
                                            Tus datos se registran y te redirigimos a Mercado Pago.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="text-center py-4">
                                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-7 h-7 stroke-[3]" />
                                </div>
                                <h3 className="text-2xl font-bold font-cabinet_grotesk text-stone-900">
                                    ¡Suscripción Registrada!
                                </h3>
                                <p className="text-stone-600 text-sm mt-2">
                                    Tu registro <strong>#{successData.id}</strong> ha sido guardado exitosamente en nuestra base de datos.
                                </p>

                                <div className="mt-5 p-4 rounded-2xl bg-neutral-100 text-left text-xs space-y-2 border border-neutral-200">
                                    <div className="flex justify-between">
                                        <span className="text-stone-500">Plan:</span>
                                        <span className="font-semibold text-stone-900 uppercase">{selectedPlan}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-stone-500">Cliente:</span>
                                        <span className="font-semibold text-stone-900">{nombre}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-stone-500">Vigencia activa hasta:</span>
                                        <span className="font-bold text-emerald-700">{successData.fechaFin}</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col gap-3">
                                    <a
                                        href={successData.checkoutUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-stone-900 text-white font-semibold text-sm hover:bg-stone-800 transition-colors shadow-md"
                                    >
                                        <span>Abrir Pasarela de Pago (Mercado Pago)</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>

                                    <a
                                        href={whatsappHelpLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-stone-100 text-stone-800 font-semibold text-xs hover:bg-stone-200 transition-colors"
                                    >
                                        <PhoneCall className="w-3.5 h-3.5" />
                                        <span>Notificar por WhatsApp a Edinsson</span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};
