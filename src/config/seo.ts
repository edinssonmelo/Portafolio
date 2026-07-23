/**
 * SEO Configuration
 * Centralized SEO settings for all routes
 */

export const SITE_CONFIG = {
    name: 'Edinsson Melo',
    title: 'Edinsson Melo | AI Software Engineer & CTO',
    description:
        'AI Software Engineer and CTO with 8+ years of experience. I build AI-powered SaaS, MVPs, and enterprise software from architecture to production.',
    url: 'https://edinssonmelo.com',
    image: 'https://edinssonmelo.com/assets/logo.png',
    locale: 'en_US',
    type: 'website',
    twitterHandle: '@edinssonmelo',
    email: 'edinssonadrian@gmail.com',
    keywords: [
        'AI Software Engineer',
        'CTO',
        'software architect',
        'AI SaaS',
        'MVP development',
        'fullstack developer',
        'LLM',
        'RAG',
        'Colombia',
        'Edinsson Melo',
    ].join(', '),
    location: {
        city: 'Cúcuta',
        country: 'Colombia',
    },
    social: {
        github: 'https://github.com/edinssonmelo',
        instagram: 'https://www.instagram.com/edinssonmelo/',
        linkedin: 'https://www.linkedin.com/in/edinssonmelo',
        workana: 'https://www.workana.com/freelancer/4ec35c01fc86a61b905efce11c420353',
        codeforces: 'https://codeforces.com/profile/Mackenzie',
        buymeacoffee: 'https://buymeacoffee.com/edinssonmelo',
    },
} as const;

export const WHATSAPP_NUMBER = '573202633111';

export const CONTACT_LINKS = {
    mailto: `mailto:${SITE_CONFIG.email}`,
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
    whatsappDefault: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola')}`,
} as const;

export const getWhatsAppLink = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export type SEOConfig = {
    title: string;
    description: string;
    path: string;
    image?: string;
    type?: string;
    noindex?: boolean;
};

export const seoConfig: Record<string, SEOConfig> = {
    '/': {
        title: 'Edinsson Melo | AI Software Engineer & CTO',
        description:
            'AI Software Engineer and CTO with 8+ years of experience. I help companies build AI-powered products, SaaS platforms, and MVPs from architecture to launch.',
        path: '/',
        type: 'website',
    },
    '/projects': {
        title: 'Projects | Edinsson Melo | AI SaaS and Product Portfolio',
        description:
            'Case studies: Declaramelo, OpenWhispr, Bernal Tech B2B, Wordjet.ai, Seguros SURA SuperApp, OverUP, and more. AI native apps, SaaS, and fullstack software.',
        path: '/projects',
        type: 'website',
    },
    '/cotizacion/sistema-barber': {
        title: 'Cotización Sistema Barber - Edinsson Melo',
        description:
            'Cotización detallada para el desarrollo del Sistema Barber. Incluye especificaciones técnicas, alcance del proyecto y propuesta de valor.',
        path: '/cotizacion/sistema-barber',
        type: 'website',
    },
    '/planes': {
        title: 'Planes de Desarrollo Web - Essential, Professional, Premium | Edinsson Melo',
        description:
            'Planes de desarrollo web y branding digital: Essential ($1.000.000 COP), Professional ($2.300.000 COP), Premium ($4.400.000 COP). Servicios incluyen dominio, hosting, SSL, SEO, e-commerce y más.',
        path: '/planes',
        type: 'website',
    },
};

export const projectSeoConfig: Record<string, SEOConfig> = {
    declaramelo: {
        title: 'Declaramelo | Edinsson Melo',
        description:
            'Online tax filing platform for Colombia with expert accountants, free tools, and a guided DIAN declaration flow.',
        path: '/projects/declaramelo',
        image: 'https://edinssonmelo.com/projects/declaramelo-hero.png',
    },
    openwhispr: {
        title: 'OpenWhispr | Edinsson Melo',
        description:
            'AI native macOS desktop app to transcribe meetings, save them, and analyze them with ease.',
        path: '/projects/openwhispr',
        image: 'https://edinssonmelo.com/projects/openwhispr-hero.png',
    },
    'bernal-tech-b2b': {
        title: 'Bernal Tech B2B | Edinsson Melo',
        description:
            'Wholesale B2B portal for a Colombian car mat manufacturer with catalog, quotes, orders, and admin dashboard.',
        path: '/projects/bernal-tech-b2b',
        image: 'https://edinssonmelo.com/projects/bernal-dashboard.png',
    },
    'wordjet-ai': {
        title: 'Wordjet.ai | Edinsson Melo',
        description:
            'AI writing workspace for marketing agencies to create briefs, articles, essays, and market research.',
        path: '/projects/wordjet-ai',
        image: 'https://edinssonmelo.com/projects/wordjet-landing.png',
    },
    'superapp-mobile': {
        title: 'Seguros SURA SuperApp | Edinsson Melo',
        description:
            'Mobile contribution to Seguros SURA SuperApp on iOS and Android across Health, Mobility, Home, Wallet, Refunds, and Claims.',
        path: '/projects/superapp-mobile',
        image: 'https://edinssonmelo.com/projects/sura-explora.png',
    },
    overup: {
        title: 'OverUP | Edinsson Melo',
        description:
            'Oversized streetwear e-commerce store with catalog, product pages, and checkout for OverUP in Colombia.',
        path: '/projects/overup',
        image: 'https://edinssonmelo.com/projects/overup-hero.png',
    },
};

export const getSEOConfig = (pathname: string): SEOConfig => {
    const projectMatch = pathname.match(/^\/projects\/([^/]+)$/);
    if (projectMatch) {
        const slug = projectMatch[1];
        const projectSeo = projectSeoConfig[slug];
        if (projectSeo) {
            return { ...projectSeo, path: pathname };
        }
    }

    const config = seoConfig[pathname] || seoConfig['/'];
    return {
        ...config,
        path: pathname === '/' ? '/' : pathname,
    };
};
