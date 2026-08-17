/**
 * SEO Configuration
 * Centralized SEO settings for all routes
 * Text content lives in i18n locale files (src/i18n/locales/{lang}/seo.json)
 */

import type { TFunction } from 'i18next';
import { getBlogPost } from '@/data/blog';
import type { AppLanguage } from '@/i18n';

export const SITE_CONFIG = {
    name: 'Edinsson Melo',
    url: 'https://edinssonmelo.com',
    image: 'https://edinssonmelo.com/assets/logo-full.png',
    locale: {
        es: 'es_CO',
        en: 'en_US',
    } as const,
    type: 'website',
    twitterHandle: '@edinssonmelo',
    email: 'edinssonadrian@gmail.com',
    location: {
        country: 'Colombia',
    },
    social: {
        github: 'https://github.com/edinssonmelo',
        instagram: 'https://www.instagram.com/edinssonmelo/',
        linkedin: 'https://www.linkedin.com/in/edinssonmelo',
        youtube: 'https://www.youtube.com/@EdinssonMelo',
        workana: 'https://www.workana.com/freelancer/4ec35c01fc86a61b905efce11c420353',
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

type RouteKey =
    | 'home'
    | 'about'
    | 'blog'
    | 'projects'
    | 'cotizacion-sistema-barber'
    | 'planes';

const ROUTE_KEYS: Record<string, RouteKey> = {
    '/': 'home',
    '/about': 'about',
    '/blog': 'blog',
    '/projects': 'projects',
    '/cotizacion/sistema-barber': 'cotizacion-sistema-barber',
    '/planes': 'planes',
};

const PROJECT_SLUGS = [
    'declaramelo',
    'openwhispr',
    'bernal-tech-b2b',
    'wordjet-ai',
    'superapp-mobile',
    'overup',
] as const;

const PROJECT_SCREENSHOTS: Record<(typeof PROJECT_SLUGS)[number], string> = {
    'declaramelo': 'https://edinssonmelo.com/screenshots/declaramelo-hero.png',
    'openwhispr': 'https://edinssonmelo.com/screenshots/openwhispr-hero.png',
    'bernal-tech-b2b': 'https://edinssonmelo.com/screenshots/bernal-dashboard.png',
    'wordjet-ai': 'https://edinssonmelo.com/screenshots/wordjet-landing.png',
    'superapp-mobile': 'https://edinssonmelo.com/screenshots/sura-explora.png',
    'overup': 'https://edinssonmelo.com/screenshots/overup-hero.png',
};

export const getSEOConfig = (
    pathname: string,
    t: TFunction<'seo'>,
): SEOConfig => {
    const segments = pathname.split('/').filter(Boolean);
    const subpath = `/${segments.slice(1).join('/')}`;

    const blogMatch = subpath.match(/^\/blog\/([^/]+)$/);
    if (blogMatch) {
        const slug = blogMatch[1];
        const blogPost = getBlogPost(slug);
        if (blogPost) {
            const lang = (segments[0] === 'es' || segments[0] === 'en'
                ? segments[0]
                : 'en') as AppLanguage;
            const title = blogPost.title[lang] ?? blogPost.title[blogPost.lang];
            const description =
                blogPost.description[lang] ?? blogPost.description[blogPost.lang];
            return {
                title: `${title} | Edinsson Melo`,
                description,
                path: pathname,
                type: 'article',
            };
        }
    }

    const projectMatch = subpath.match(/^\/projects\/([^/]+)$/);
    if (projectMatch) {
        const slug = projectMatch[1] as (typeof PROJECT_SLUGS)[number];
        if (PROJECT_SLUGS.includes(slug)) {
            const title = t(`projectSeo.${slug}.title`, { defaultValue: '' });
            const description = t(`projectSeo.${slug}.description`, { defaultValue: '' });
            if (title && description) {
                return {
                    title,
                    description,
                    path: pathname,
                    image: PROJECT_SCREENSHOTS[slug],
                };
            }
        }
    }

    const routeKey = ROUTE_KEYS[subpath] ?? 'home';
    return {
        title: t(`routes.${routeKey}.title`),
        description: t(`routes.${routeKey}.description`),
        path: pathname,
        type: 'website',
    };
};
