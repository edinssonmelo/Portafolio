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
        jobTitle: 'AI Software Engineer',
        description:
            'AI Software Engineer and CTO with 8+ years of experience building AI powered SaaS, enterprise platforms, and mobile products across fintech, insurance, and consumer technology.',
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
            'Artificial Intelligence',
            'AI Product Engineering',
            'Large Language Models',
            'RAG',
            'Software Architecture',
            'Startup Building',
            'SaaS Development',
            'MVP Development',
            'Fullstack Development',
            'Mobile Development',
            'Fintech',
            'Cloud Computing',
            'AWS',
            'Python',
            'Node.js',
            'React',
            'TypeScript',
        ],
        hasOccupation: [
            {
                '@type': 'Occupation',
                name: 'AI Software Engineer',
            },
            {
                '@type': 'Occupation',
                name: 'CTO',
            },
            {
                '@type': 'Occupation',
                name: 'Software Architect',
            },
        ],
        alumniOf: [
            {
                '@type': 'CollegeOrUniversity',
                name: 'Universidad Francisco de Paula Santander (UFPS)',
            },
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
        inLanguage: 'en',
        author: {
            '@type': 'Person',
            name: 'Edinsson Melo',
            jobTitle: 'AI Software Engineer',
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
        name: 'Edinsson Melo | AI Product Engineering and Technical Leadership',
        description:
            'AI product engineering, startup MVP development, technical leadership, and fullstack software for founders and companies. Specializing in AI agents, SaaS, web/mobile apps, and enterprise integrations.',
        provider: {
            '@type': 'Person',
            name: 'Edinsson Melo',
            jobTitle: 'AI Software Engineer',
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
            'AI Product Engineering',
            'CTO Advisory',
            'Startup MVP Development',
            'Software Architecture',
            'Fullstack Development',
            'Mobile Development',
            'AI Integration',
            'SaaS Development',
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
