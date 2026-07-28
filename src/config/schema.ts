/**
 * Schema.org Structured Data Configuration
 * JSON-LD schemas for better SEO and rich snippets
 * Text content lives in i18n locale files (src/i18n/locales/{lang}/seo.json)
 */

import type { TFunction } from 'i18next';
import { SITE_CONFIG } from './seo';

export const PERSON_ID = `${SITE_CONFIG.url}/#person`;

export const getPersonSchema = (t: TFunction<'seo'>) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Edinsson Melo',
        jobTitle: t('schema.jobTitle'),
        description: t('site.description'),
        email: SITE_CONFIG.email,
        url: SITE_CONFIG.url,
        image: SITE_CONFIG.image,
        address: {
            '@type': 'PostalAddress',
            addressCountry: SITE_CONFIG.location.country,
        },
        sameAs: [
            SITE_CONFIG.social.github,
            SITE_CONFIG.social.instagram,
            SITE_CONFIG.social.linkedin,
            SITE_CONFIG.social.youtube,
            SITE_CONFIG.social.workana,
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
            { '@type': 'Occupation', name: 'Sr. Software Engineer' },
            { '@type': 'Occupation', name: 'AI Software Engineer' },
            { '@type': 'Occupation', name: 'AI Product Engineer' },
            { '@type': 'Occupation', name: 'AI Engineer' },
            { '@type': 'Occupation', name: 'Forward Deployed Engineer' },
            { '@type': 'Occupation', name: 'Fullstack Engineer' },
            { '@type': 'Occupation', name: 'Mobile Engineer' },
            { '@type': 'Occupation', name: 'Frontend Engineer' },
            { '@type': 'Occupation', name: 'CTO' },
            { '@type': 'Occupation', name: 'Software Architect' },
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

export const getWebSiteSchema = (t: TFunction<'seo'>, lang: string) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        description: t('site.description'),
        inLanguage: lang,
        author: {
            '@id': PERSON_ID,
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_CONFIG.url}/${lang}/projects?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
};

export const getProfessionalServiceSchema = (t: TFunction<'seo'>) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: t('schema.professionalServiceName'),
        description: t('schema.professionalServiceDescription'),
        provider: {
            '@id': PERSON_ID,
        },
        areaServed: {
            '@type': 'Place',
            name: 'Worldwide',
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
}, lang: string) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        url: `${SITE_CONFIG.url}/${lang}/blog/${post.slug}`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: lang,
        author: {
            '@id': PERSON_ID,
        },
        publisher: {
            '@id': PERSON_ID,
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_CONFIG.url}/${lang}/blog/${post.slug}`,
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
