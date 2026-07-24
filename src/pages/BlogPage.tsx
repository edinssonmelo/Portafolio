import { Link } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { SectionBadge } from '@/components/SectionBadge';
import { TagChip } from '@/components/TagChip';
import { BLOG_POSTS, formatReadingTime } from '@/data/blog';
import { layoutClasses } from '@/config/designTokens';

export const BlogPage = () => {
    return (
        <div className="text-black text-xs not-italic normal-nums font-normal bg-white min-h-screen font-dm_sans">
            <Header />
            <main>
                <section className={layoutClasses.pageHero}>
                    <div className="relative z-[1] flex w-full max-w-[800px] flex-col items-center gap-5 text-center md:gap-6">
                        <SectionBadge label="Blog" />
                        <h1 className="font-cabinet_grotesk text-3xl font-bold tracking-tight text-stone-900 md:text-5xl md:leading-tight">
                            Writing on building software
                        </h1>
                        <p className="max-w-[650px] text-lg leading-[30px] text-stone-900">
                            Notes on building software, AI products, and career lessons from more
                            than a decade shipping in production.
                        </p>
                    </div>
                </section>

                <section className={layoutClasses.pageContent}>
                    <div className="mx-auto flex max-w-[800px] flex-col gap-8">
                        {BLOG_POSTS.length === 0 ? (
                            <p className="text-lg leading-[30px] text-stone-700">
                                Articles are on the way. Topics will cover AI-first MVPs, SaaS
                                architecture, and lessons from products I&apos;ve shipped.
                            </p>
                        ) : (
                            BLOG_POSTS.map((post) => (
                                <article
                                    key={post.slug}
                                    className="border-b border-stone-900/10 pb-8 last:border-b-0"
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
                                    </div>
                                    <h2 className="mt-2 font-cabinet_grotesk text-2xl font-bold text-stone-900">
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="underline-offset-2 hover:underline"
                                        >
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="mt-2 text-lg leading-[30px] text-stone-900">
                                        {post.description}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <TagChip key={tag} label={tag} />
                                        ))}
                                    </div>
                                </article>
                            ))
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
