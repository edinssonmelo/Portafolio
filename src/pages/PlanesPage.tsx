import { useTranslation } from 'react-i18next';
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

const handlePlanClick = (planName: string, t: (key: string, opts?: Record<string, unknown>) => string) => {
    window.open(
        getWhatsAppLink(t('whatsapp', { plan: planName })),
        "_blank",
        "noopener,noreferrer",
    );
};

const DEFAULT_SELECTED_PLAN_ID = "professional";

export const PlanesPage = () => {
    const { t } = useTranslation('planes');
    const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
    const [hoveredPlanId, setHoveredPlanId] = useState<string | null>(null);

    const plans = [
        {
            id: "essential" as const,
            image: "/planes/1.png",
            name: t('plans.essential.name'),
            price: "1000000",
            priceDisplay: t('plans.essential.priceDisplay'),
            description: t('plans.essential.description'),
            popular: false
        },
        {
            id: "professional" as const,
            image: "/planes/2.png",
            name: t('plans.professional.name'),
            price: "2300000",
            priceDisplay: t('plans.professional.priceDisplay'),
            description: t('plans.professional.description'),
            popular: true
        },
        {
            id: "premium" as const,
            image: "/planes/3.png",
            name: t('plans.premium.name'),
            price: "4400000",
            priceDisplay: t('plans.premium.priceDisplay'),
            description: t('plans.premium.description'),
            popular: false
        }
    ];

    const planDetails = {
        essential: t('details.essential', { returnObjects: true }) as Record<string, string>,
        professional: t('details.professional', { returnObjects: true }) as Record<string, string>,
        premium: t('details.premium', { returnObjects: true }) as Record<string, string>,
    };

    const showPreselected = selectedPlanId === null && hoveredPlanId === null;

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    const plansSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: t('schema.name'),
        description: t('schema.description'),
        itemListElement: plans.map((plan, index) => ({
            '@type': 'Product',
            position: index + 1,
            name: `Plan ${plan.name}`,
            description: planDetails[plan.id].usuarioIdeal,
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

    const onPlanCardClick = (planId: string, planName: string) => {
        setSelectedPlanId(planId);
        handlePlanClick(planName, t);
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
                        badge={t('page.badge')}
                        title={t('page.title')}
                        description={t('page.description')}
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
                                            <div className="most-popular-belt">{t('mostPopular')}</div>
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
                                <p className="comparison-table-hint">{t('tableHint')}</p>
                                <div className="comparison-table-wrapper">
                                    <table className="comparison-table">
                                        <thead>
                                            <tr>
                                                <th>{t('table.feature')}</th>
                                                <th>Essential</th>
                                                <th>Professional</th>
                                                <th>Premium</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>{t('table.price')}</strong></td>
                                                <td>{t('plans.essential.priceDisplay')}</td>
                                                <td>{t('plans.professional.priceDisplay')}</td>
                                                <td>{t('plans.premium.priceDisplay')}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.mainGoal')}</strong></td>
                                                <td>{t('plans.essential.description')}</td>
                                                <td>{t('plans.professional.description')}</td>
                                                <td>{t('plans.premium.description')}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.domainHosting')}</strong></td>
                                                <td>{planDetails.essential.dominioHosting}</td>
                                                <td>{planDetails.professional.dominioHosting}</td>
                                                <td>{planDetails.premium.dominioHosting}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.ssl')}</strong></td>
                                                <td>{planDetails.essential.certificadoSSL}</td>
                                                <td>{planDetails.professional.certificadoSSL}</td>
                                                <td>{planDetails.premium.certificadoSSL}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.pages')}</strong></td>
                                                <td>{planDetails.essential.paginas}</td>
                                                <td>{planDetails.professional.paginas}</td>
                                                <td>{planDetails.premium.paginas}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.design')}</strong></td>
                                                <td>{planDetails.essential.diseño}</td>
                                                <td>{planDetails.professional.diseño}</td>
                                                <td>{planDetails.premium.diseño}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.productUpload')}</strong></td>
                                                <td>{planDetails.essential.cargaProductos}</td>
                                                <td>{planDetails.professional.cargaProductos}</td>
                                                <td>{planDetails.premium.cargaProductos}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.socialMedia')}</strong></td>
                                                <td>{planDetails.essential.redesSociales}</td>
                                                <td>{planDetails.professional.redesSociales}</td>
                                                <td>{planDetails.premium.redesSociales}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.ordersWhatsapp')}</strong></td>
                                                <td>{planDetails.essential.pedidosWhatsApp}</td>
                                                <td>{planDetails.professional.pedidosWhatsApp}</td>
                                                <td>{planDetails.premium.pedidosWhatsApp}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.seo')}</strong></td>
                                                <td>{planDetails.essential.optimizacionSEO}</td>
                                                <td>{planDetails.professional.optimizacionSEO}</td>
                                                <td>{planDetails.premium.optimizacionSEO}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.onlinePayments')}</strong></td>
                                                <td>{planDetails.essential.pagosOnline}</td>
                                                <td>{planDetails.professional.pagosOnline}</td>
                                                <td>{planDetails.premium.pagosOnline}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.cart')}</strong></td>
                                                <td>{planDetails.essential.carritoCompras}</td>
                                                <td>{planDetails.professional.carritoCompras}</td>
                                                <td>{planDetails.premium.carritoCompras}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.adminPanel')}</strong></td>
                                                <td>{planDetails.essential.panelAdmin}</td>
                                                <td>{planDetails.professional.panelAdmin}</td>
                                                <td>{planDetails.premium.panelAdmin}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.paymentGateway')}</strong></td>
                                                <td>{planDetails.essential.pasarelaPago}</td>
                                                <td>{planDetails.professional.pasarelaPago}</td>
                                                <td>{planDetails.premium.pasarelaPago}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.chatbot')}</strong></td>
                                                <td>{planDetails.essential.chatbot}</td>
                                                <td>{planDetails.professional.chatbot}</td>
                                                <td>{planDetails.premium.chatbot}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.support')}</strong></td>
                                                <td>{planDetails.essential.soporteTecnico}</td>
                                                <td>{planDetails.professional.soporteTecnico}</td>
                                                <td>{planDetails.premium.soporteTecnico}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>{t('table.useCase')}</strong></td>
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
