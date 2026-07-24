import { Link, useParams } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { BlogBody } from '@/components/BlogBody';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { SurfaceCard } from '@/components/SurfaceCard';
import { TagChip } from '@/components/TagChip';
import { formatReadingTime, getBlogPost } from '@/data/blog';

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
                        className="font-semibold text-stone-900 underline-offset-2 hover:underline"
                    >
                        ← Back to Blog
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-100 font-dm_sans">
            <Header />
            <main>
                <PageHeader
                    badge="Blog"
                    title={post.title}
                    description={post.description}
                    align="left"
                    backLink={
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-stone-600 underline-offset-2 transition-colors hover:text-stone-900 hover:underline"
                        >
                            ← Blog
                        </Link>
                    }
                    footer={
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <TagChip key={tag} label={tag} />
                            ))}
                        </div>
                    }
                >
                    <div className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
                        <time dateTime={post.datePublished}>
                            {new Date(post.datePublished).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                        <span aria-hidden="true">·</span>
                        <span>{formatReadingTime(post)}</span>
                        <span aria-hidden="true">·</span>
                        <span className="uppercase tracking-wide">
                            {post.lang === 'es' ? 'Español' : 'English'}
                        </span>
                    </div>
                </PageHeader>

                <PageSection>
                    <article lang={post.lang}>
                        <SurfaceCard className="px-6 py-8 md:px-10 md:py-10">
                        <BlogBody blocks={post.body} />

                        <div className="mt-12 space-y-4 border-t border-stone-200 pt-8">
                            <p className="font-dm_sans text-base leading-relaxed text-stone-800 md:text-lg">
                                Si estás construyendo tu portafolio, puedes ver cómo lo hice yo en{' '}
                                <Link
                                    to="/projects"
                                    className="font-semibold text-stone-900 underline-offset-2 hover:underline"
                                >
                                    Projects
                                </Link>{' '}
                                y leer más sobre mi trayectoria en{' '}
                                <Link
                                    to="/about"
                                    className="font-semibold text-stone-900 underline-offset-2 hover:underline"
                                >
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
                        </SurfaceCard>
                    </article>
                </PageSection>
            </main>
            <Footer />
        </div>
    );
};
