import { primerEmpleoSoftwarePost } from '@/data/posts/primer-empleo-software';

export type BlogBlock =
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'h3'; text: string }
    | { type: 'ul'; items: string[] }
    | { type: 'ol'; items: string[] }
    | { type: 'callout'; text: string };

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    datePublished: string;
    dateModified: string;
    tags: string[];
    lang: 'es' | 'en';
    body: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [primerEmpleoSoftwarePost];

export const getBlogPost = (slug: string) =>
    BLOG_POSTS.find((post) => post.slug === slug);

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
        default:
            return '';
    }
};

export const getReadingMinutes = (post: BlogPost): number => {
    const words = post.body
        .map(blockToPlainText)
        .join(' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;

    return Math.max(1, Math.ceil(words / 200));
};

export const formatReadingTime = (post: BlogPost): string => {
    const minutes = getReadingMinutes(post);
    return `${minutes} min read`;
};
