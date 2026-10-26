import { useEffect } from "react";
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
    Download, 
    ExternalLink, 
    Lock, 
    CreditCard, 
    PhoneCall, 
    Sparkles 
} from "lucide-react";

export const ServidorAsteriskPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whatsappHelpLink = getWhatsAppLink("Hola Edinsson, tengo una duda sobre la suscripción del servidor Asterisk & Zoiper.");

    return (
        <div className="min-h-screen bg-neutral-50 text-stone-900 font-dm_sans">
            <Header />

            <main className="pt-28 pb-20">
                <PageSection width="wide">
                    {/* Header */}
                    <PageHeader
                        badge="Infraestructura Privada & Telefonía IP"
                        title="Suscripción Servidor Asterisk & Zoiper"
                        description="Servidor privado dedicado para enlace continuo de llamadas España ↔ Colombia. Monitoreo 24/7, estabilidad garantizada y soporte técnico directo."
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
                                    Ideal para máxima flexibilidad operativa sin compromiso de permanencia a largo plazo.
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
                                    <p className="text-xs text-stone-600 mt-2">
                                        Facturación recurrente mensual. Cancela en cualquier momento.
                                    </p>
                                </div>

                                <ul className="mt-6 space-y-3.5 text-sm text-stone-700">
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Servidor privado dedicado:</strong> Recursos garantizados 24/7 en la nube para tu central telefónica.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Enlace SIP optimizado para Zoiper:</strong> Baja latencia y códecs de voz configurados para recepción nítida.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Monitoreo continuo de enlace:</strong> Detección proactiva de desconexiones y reconexión automática.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Mantenimiento y parches de seguridad:</strong> Actualizaciones periódicas de la central Asterisk y sistema operativo.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Soporte técnico directo:</strong> Atención vía WhatsApp ante cualquier eventualidad o ajuste de red.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-stone-100">
                                <a
                                    href="https://mpago.la/2p11wRE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-stone-900 text-white font-semibold text-sm hover:bg-stone-800 transition-colors shadow-sm"
                                >
                                    <span>Pagar Suscripción Mensual</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <p className="text-center text-[11px] text-stone-600 mt-2.5 flex items-center justify-center gap-1.5">
                                    <Lock className="w-3 h-3 text-stone-500" />
                                    Pago seguro procesado por Mercado Pago
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
                                    La mejor opción para asegurar continuidad ininterrumpida todo el año con la tarifa más económica.
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
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="inline-block px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-semibold text-xs">
                                            Equivale a $57.500 COP / mes
                                        </span>
                                        <span className="text-emerald-800 text-xs font-medium">
                                            (Descuento aplicado)
                                        </span>
                                    </div>
                                </div>

                                <ul className="mt-6 space-y-3.5 text-sm text-stone-700">
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Todo lo del plan mensual:</strong> Servidor privado, Asterisk PBX, enlace Zoiper, monitoreo 24/7 y mantenimiento.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Tarifa congelada por 12 meses:</strong> Protección ante variaciones de tipo de cambio o costos de infraestructura.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Ahorro inmediato de $30.000 COP:</strong> Paga el equivalente a solo 11.5 meses y recibe 12 meses de servicio.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Soporte técnico prioritario:</strong> Canal directo con atención preferencial ante cualquier incidente.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 mt-0.5">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span><strong>Cero fricción administrativa:</strong> Olvídate de autorizar o gestionar pagos mes a mes.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-stone-100">
                                <a
                                    href="https://mpago.la/13Dnx72"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-stone-950 font-bold text-sm transition-all hover:scale-[1.02] shadow-md"
                                    style={{ backgroundColor: PRIMARY_COLOR }}
                                >
                                    <span>Pagar Suscripción Anual (Con Ahorro)</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <p className="text-center text-[11px] text-stone-600 mt-2.5 flex items-center justify-center gap-1.5">
                                    <Lock className="w-3 h-3 text-stone-500" />
                                    Pago seguro procesado por Mercado Pago
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Setup Information & PDF Download */}
                    <div className="mt-16 max-w-5xl mx-auto">
                        <div className="bg-stone-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                <div className="lg:col-span-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-medium mb-3">
                                        <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
                                        Implementación e Instalación Inicial
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-bold font-cabinet_grotesk">
                                        Configuración Integral del Enlace Asterisk
                                    </h4>
                                    <p className="text-stone-300 text-sm mt-3 leading-relaxed">
                                        El costo único por la implementación, aprovisionamiento del servidor, vinculación de pasarela física para la SIM de España, enrutamiento hacia Zoiper y calibración de audio bidireccional es de:
                                    </p>
                                    <div className="mt-4 flex flex-wrap items-baseline gap-3">
                                        <span className="text-3xl md:text-4xl font-extrabold font-cabinet_grotesk text-white">
                                            $900.000 COP
                                        </span>
                                        <span className="text-stone-400 text-xs">
                                            (50% al iniciar: $450.000 COP / 50% contra entrega verificada: $450.000 COP)
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 justify-center">
                                    <a
                                        href="/cotizaciones/cotizacion-asterisk-zoiper-espana-colombia.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download="cotizacion-asterisk-zoiper-espana-colombia.pdf"
                                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors border border-white/15"
                                    >
                                        <Download className="w-4 h-4" />
                                        <span>Descargar Cotización PDF</span>
                                    </a>

                                    <a
                                        href={whatsappHelpLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-stone-950 font-bold text-sm transition-all hover:scale-[1.02]"
                                        style={{ backgroundColor: PRIMARY_COLOR }}
                                    >
                                        <PhoneCall className="w-4 h-4" />
                                        <span>Consultar por WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges & Payment Methods */}
                    <div className="mt-12 max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-8 border border-stone-200">
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

            <Footer />
        </div>
    );
};
