/**
 * Schema.org Structured Data Configuration
 * JSON-LD schemas for better SEO and rich snippets
 */

import { SITE_CONFIG } from './seo';

export const PERSON_ID = `${SITE_CONFIG.url}/#person`;

export const getPersonSchema = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Edinsson Melo',
        jobTitle: 'AI Product Builder',
        description:
            'AI Software Engineer and AI Product Builder helping companies, startups, founders, and software engineers ship AI-powered SaaS, web, and mobile products.',
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
                name: 'AI Product Builder',
            },
            {
                '@type': 'Occupation',
                name: 'AI Software Engineer',
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

export const getProfilePageSchema = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `${SITE_CONFIG.url}/about#profile`,
        url: `${SITE_CONFIG.url}/about`,
        name: 'About Edinsson Melo',
        mainEntity: {
            '@id': PERSON_ID,
        },
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
            '@id': PERSON_ID,
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
        name: 'Edinsson Melo | AI Product Engineering',
        description:
            'AI product engineering, startup MVP development, technical leadership, and fullstack software for companies, founders, and product teams. Specializing in AI agents, SaaS, web/mobile apps, and enterprise integrations.',
        provider: {
            '@id': PERSON_ID,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Colombia',
        },
        serviceType: [
            'AI Product Engineering',
            'Technical Leadership',
            'Startup MVP Development',
            'Software Architecture',
            'Fullstack Development',
            'Mobile Development',
            'AI Integration',
            'SaaS Development',
            'AI Training',
        ],
        url: SITE_CONFIG.url,
    };
};

export const getBlogPostingSchema = (post: {
    title: string;
    description: string;
    slug: string;
    datePublished: string;
    dateModified: string;
}) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        url: `${SITE_CONFIG.url}/blog/${post.slug}`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: {
            '@id': PERSON_ID,
        },
        publisher: {
            '@id': PERSON_ID,
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_CONFIG.url}/blog/${post.slug}`,
        },
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
