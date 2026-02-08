/**
 * Schema.org Structured Data Configuration
 * JSON-LD schemas for better SEO and rich snippets
 */

import { SITE_CONFIG } from './seo';

export const getPersonSchema = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Edinsson Melo',
        jobTitle: 'AI-First Software Engineer',
        description: 'AI-First Software Engineer and Fullstack Developer specializing in building software products that solve real problems with an AI approach.',
        email: SITE_CONFIG.email,
        url: SITE_CONFIG.url,
        image: SITE_CONFIG.image,
        address: {
            '@type': 'PostalAddress',
            addressLocality: SITE_CONFIG.location.city,
            addressCountry: SITE_CONFIG.location.country,
        },
        sameAs: [
            SITE_CONFIG.social.github,
            SITE_CONFIG.social.instagram,
            SITE_CONFIG.social.linkedin,
            SITE_CONFIG.social.workana,
            SITE_CONFIG.social.codeforces,
            SITE_CONFIG.social.buymeacoffee,
        ],
        knowsAbout: [
            'Software Engineering',
            'Artificial Intelligence',
            'Fullstack Development',
            'Web Development',
            'Mobile Development',
            'Machine Learning',
            'React',
            'TypeScript',
            'Python',
            'Node.js',
        ],
    };
};

export const getWebSiteSchema = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        author: {
            '@type': 'Person',
            name: 'Edinsson Melo',
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_CONFIG.url}/projects?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
};

export const getProfessionalServiceSchema = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Edinsson Melo - Software Engineering Services',
        description: 'AI-First Software Engineering and Fullstack Development services including MVP development, web applications, mobile apps, and AI integration.',
        provider: {
            '@type': 'Person',
            name: 'Edinsson Melo',
            email: SITE_CONFIG.email,
            address: {
                '@type': 'PostalAddress',
                addressLocality: SITE_CONFIG.location.city,
                addressCountry: SITE_CONFIG.location.country,
            },
        },
        areaServed: {
            '@type': 'Country',
            name: 'Colombia',
        },
        serviceType: [
            'Software Development',
            'Fullstack Development',
            'MVP Development',
            'AI Integration',
            'Web Development',
            'Mobile Development',
        ],
        url: SITE_CONFIG.url,
    };
};

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
};

