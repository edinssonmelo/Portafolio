import { primerEmpleoSoftwarePost } from '@/data/posts/primer-empleo-software';
import { lanzarAppSinSuscripcionesPost } from '@/data/posts/lanzar-app-sin-suscripciones';
import type { AppLanguage } from '@/i18n';

export type BlogBlock =
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'h3'; text: string }
    | { type: 'ul'; items: string[] }
    | { type: 'ol'; items: string[] }
    | { type: 'callout'; text: string }
    | { type: 'image'; src: string; alt: string; caption?: string };

export type Localized<T> = {
    es: T;
    en: T;
};

export type BlogPost = {
    slug: string;
    datePublished: string;
    dateModified: string;
    tags: Localized<string[]>;
    lang: 'es' | 'en'; // primary/original language
    title: Localized<string>;
    description: Localized<string>;
    body: Localized<BlogBlock[]>;
};

export const BLOG_POSTS: BlogPost[] = [
    lanzarAppSinSuscripcionesPost,
    primerEmpleoSoftwarePost,
];

export const getBlogPost = (slug: string) =>
    BLOG_POSTS.find((post) => post.slug === slug);

export const getLocalizedPost = (slug: string, lang: AppLanguage) => {
    const post = getBlogPost(slug);
    if (!post) return undefined;
    return {
        ...post,
        title: post.title[lang] ?? post.title[post.lang],
        description: post.description[lang] ?? post.description[post.lang],
        tags: post.tags[lang] ?? post.tags[post.lang],
        body: post.body[lang] ?? post.body[post.lang],
        displayLang: (post.body[lang] ? lang : post.lang) as AppLanguage,
    };
};

/** Parse YYYY-MM-DD as local calendar date (avoids UTC off-by-one in Americas). */
export const formatBlogDate = (
    date: string,
    locale = 'en-US',
    options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    },
): string => {
    const [year, month, day] = date.split('-').map(Number);
    return new Date(year, month - 1, day).toLocaleDateString(locale, options);
};

const blockToPlainText = (block: BlogBlock): string => {
    switch (block.type) {
        case 'p':
        case 'h2':
        case 'h3':
        case 'callout':
            return block.text;
        case 'ul':
        case 'ol':
            return block.items.join(' ');
        case 'image':
            return [block.alt, block.caption].filter(Boolean).join(' ');
        default:
            return '';
    }
};

export const getReadingMinutes = (body: BlogBlock[]): number => {
    const words = body
        .map(blockToPlainText)
        .join(' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;

    return Math.max(1, Math.ceil(words / 200));
};

export const formatReadingTime = (body: BlogBlock[], lang: AppLanguage = 'en'): string => {
    const minutes = getReadingMinutes(body);
    return lang === 'es' ? `${minutes} min de lectura` : `${minutes} min read`;
};
