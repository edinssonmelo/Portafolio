/**
 * SEO Configuration
 * Centralized SEO settings for all routes
 */

export const SITE_CONFIG = {
    name: 'Edinsson Melo',
    title: 'Edinsson Melo - AI-First Software Engineer',
    description: 'AI-First Software Engineer and Fullstack Developer based in Colombia. Building software products that solve real problems with an AI approach.',
    url: 'https://edinssonmelo.com',
    image: 'https://edinssonmelo.com/og-image.jpg', // TODO: Create and upload OG image
    locale: 'en_US',
    type: 'website',
    twitterHandle: '@edinssonmelo',
    email: 'contacto@edinssonmelo.com',
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
        title: 'Edinsson Melo - AI-First Software Engineer | Fullstack Developer',
        description: 'AI-First Software Engineer and Fullstack Developer based in Cúcuta, Colombia. Specializing in building software products that solve real problems with an AI approach. Services include MVP development, Fullstack Development, and AI integration.',
        path: '/',
        type: 'website',
    },
    '/projects': {
        title: 'Projects - Edinsson Melo | Portfolio',
        description: 'View my portfolio of software projects including web applications, AI-powered solutions, and fullstack development work. See how I build products that solve real problems.',
        path: '/projects',
        type: 'website',
    },
    '/cotizacion/sistema-barber': {
        title: 'Cotización Sistema Barber - Edinsson Melo',
        description: 'Cotización detallada para el desarrollo del Sistema Barber. Incluye especificaciones técnicas, alcance del proyecto y propuesta de valor.',
        path: '/cotizacion/sistema-barber',
        type: 'website',
    },
    '/planes': {
        title: 'Planes de Desarrollo Web - Essential, Professional, Premium | Edinsson Melo',
        description: 'Planes de desarrollo web y branding digital: Essential ($1.000.000 COP), Professional ($2.300.000 COP), Premium ($4.400.000 COP). Servicios incluyen dominio, hosting, SSL, SEO, e-commerce y más.',
        path: '/planes',
        type: 'website',
    },
};

export const getSEOConfig = (pathname: string): SEOConfig => {
    const config = seoConfig[pathname] || seoConfig['/'];
    return {
        ...config,
        path: pathname === '/' ? '/' : pathname,
    };
};

