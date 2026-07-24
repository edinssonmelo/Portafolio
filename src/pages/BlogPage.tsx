import { Link } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { SurfaceCard } from '@/components/SurfaceCard';
import { TagChip } from '@/components/TagChip';
import { BLOG_POSTS, formatReadingTime } from '@/data/blog';

export const BlogPage = () => {
    return (
        <div className="min-h-screen bg-neutral-100 font-dm_sans">
            <Header />
            <main>
                <PageHeader
                    badge="Blog"
                    title="Writing on building software"
                    description="Notes on building software, AI products, and career lessons from more than a decade shipping in production."
                />

                <PageSection>
                    {BLOG_POSTS.length === 0 ? (
                        <SurfaceCard className="px-6 py-8 md:px-8">
                            <p className="font-dm_sans text-base leading-relaxed text-stone-700 md:text-lg">
                                Articles are on the way. Topics will cover AI-first MVPs, SaaS
                                architecture, and lessons from products I&apos;ve shipped.
                            </p>
                        </SurfaceCard>
                    ) : (
                        BLOG_POSTS.map((post) => (
                            <SurfaceCard
                                key={post.slug}
                                className="px-6 py-6 transition-shadow hover:shadow-[4px_4px_0_0_#1c1917] md:px-8 md:py-7"
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

                                <h2 className="mt-3 font-cabinet_grotesk text-xl font-bold leading-snug text-stone-900 md:text-2xl">
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="underline-offset-2 hover:underline"
                                    >
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="mt-3 font-dm_sans text-base leading-relaxed text-stone-800 md:text-lg">
                                    {post.description}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <TagChip key={tag} label={tag} />
                                    ))}
                                </div>

                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="mt-5 inline-flex font-cabinet_grotesk text-sm font-bold text-stone-900 underline-offset-2 hover:underline"
                                >
                                    Read article →
                                </Link>
                            </SurfaceCard>
                        ))
                    )}
                </PageSection>
            </main>
            <Footer />
        </div>
    );
};
