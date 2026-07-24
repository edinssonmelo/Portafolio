export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    datePublished: string;
    dateModified: string;
    tags: string[];
    body: string[];
};

/**
 * Blog posts are added here after outline approval.
 * Keep content original — no auto-generated filler posts.
 */
export const BLOG_POSTS: BlogPost[] = [];

export const getBlogPost = (slug: string) =>
    BLOG_POSTS.find((post) => post.slug === slug);
