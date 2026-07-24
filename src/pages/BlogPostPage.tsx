import { Link, useParams } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { BlogBody } from '@/components/BlogBody';
import { SectionBadge } from '@/components/SectionBadge';
import { TagChip } from '@/components/TagChip';
import { formatReadingTime, getBlogPost } from '@/data/blog';
import { layoutClasses } from '@/config/designTokens';

export const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getBlogPost(slug) : undefined;

    if (!post) {
        return (
            <div className="min-h-screen bg-neutral-100 font-dm_sans">
                <Header />
                <div className="flex flex-col items-center justify-center gap-6 px-6 py-20">
                    <h1 className="font-cabinet_grotesk text-3xl font-bold text-stone-900">
                        Article not found
                    </h1>
                    <Link
                        to="/blog"
                        className="font-semibold text-blue-700 hover:underline"
                    >
                        ← Back to Blog
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="text-black text-xs not-italic normal-nums font-normal bg-white min-h-screen font-dm_sans">
            <Header />
            <main>
                <section className={layoutClasses.pageHero}>
                    <div className="relative z-[1] flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
                        <SectionBadge label="Blog" />
                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-stone-700">
                            <time dateTime={post.datePublished}>
                                {new Date(post.datePublished).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                            <span aria-hidden="true">·</span>
                            <span>{formatReadingTime(post)}</span>
                        </div>
                        <h1 className="font-cabinet_grotesk text-3xl font-bold tracking-tight text-stone-900 md:text-4xl md:leading-tight">
                            {post.title}
                        </h1>
                        <p className="max-w-[650px] text-lg leading-[30px] text-stone-900">
                            {post.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 pt-1">
                            {post.tags.map((tag) => (
                                <TagChip key={tag} label={tag} />
                            ))}
                        </div>
                    </div>
                </section>

                <article lang={post.lang} className={layoutClasses.pageContent}>
                    <BlogBody blocks={post.body} />

                    <div className="mx-auto mt-12 max-w-[720px] space-y-4 border-t border-stone-900/10 pt-8">
                        <p className="font-dm_sans text-base leading-relaxed text-stone-800 md:text-lg">
                            Si estás construyendo tu portafolio, puedes ver cómo lo hice yo en{' '}
                            <Link to="/projects" className="font-semibold underline-offset-2 hover:underline">
                                Projects
                            </Link>{' '}
                            y leer más sobre mi trayectoria en{' '}
                            <Link to="/about" className="font-semibold underline-offset-2 hover:underline">
                                About
                            </Link>
                            .
                        </p>
                        <Link
                            to="/blog"
                            className="inline-flex font-cabinet_grotesk text-base font-bold text-stone-900 underline-offset-2 hover:underline"
                        >
                            ← Back to Blog
                        </Link>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};
