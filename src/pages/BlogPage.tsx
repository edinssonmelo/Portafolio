import { Link } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { SectionBadge } from '@/components/SectionBadge';
import { SurfaceCard } from '@/components/SurfaceCard';
import { TagChip } from '@/components/TagChip';
import { BLOG_POSTS, formatReadingTime } from '@/data/blog';

export const BlogPage = () => {
    return (
        <div className="min-h-screen bg-neutral-100 font-dm_sans">
            <Header />
            <main>
                <header className="border-b-2 border-stone-900 bg-white px-[30px] pb-10 pt-32 md:pb-12 md:pt-36">
                    <div className="mx-auto flex max-w-[800px] flex-col items-center gap-5 text-center md:gap-6">
                        <SectionBadge label="Blog" />
                        <h1 className="font-cabinet_grotesk text-3xl font-bold tracking-tight text-stone-900 md:text-5xl md:leading-tight">
                            Writing on building software
                        </h1>
                        <p className="max-w-[640px] font-dm_sans text-base leading-relaxed text-stone-700 md:text-lg">
                            Notes on building software, AI products, and career lessons from more
                            than a decade shipping in production.
                        </p>
                    </div>
                </header>

                <section className="px-[30px] py-10 md:py-12">
                    <div className="mx-auto flex max-w-[800px] flex-col gap-6">
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
                                            {new Date(post.datePublished).toLocaleDateString(
                                                'en-US',
                                                {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                }
                                            )}
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
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
