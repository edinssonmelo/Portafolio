import { Link } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { BLOG_POSTS } from '@/data/blog';

export const BlogPage = () => {
    return (
        <div className="text-black text-xs not-italic normal-nums font-normal bg-white min-h-screen font-dm_sans">
            <Header />
            <main>
                <section className="relative flex w-full flex-col items-center justify-center gap-12 overflow-hidden bg-[rgba(75,251,186,0.7)] px-[30px] pb-[120px] pt-[200px] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 after:border-stone-900">
                    <div className="relative z-[1] flex w-full max-w-[800px] flex-col items-center gap-6 text-center">
                        <div className="inline-flex items-center gap-2 rounded-[20px] border-2 border-stone-900 bg-white px-4 py-1.5">
                            <p className="text-[13px] font-black uppercase tracking-[0.65px] text-stone-900">
                                Blog
                            </p>
                        </div>
                        <h1 className="font-cabinet_grotesk text-4xl font-bold tracking-[-0.44px] text-stone-900 md:text-[52px] md:leading-[58px]">
                            Writing on AI products and software
                        </h1>
                        <p className="max-w-[650px] text-lg leading-[30px] text-stone-900">
                            Notes on building AI-first products, SaaS architecture, and shipping
                            software that works in production.
                        </p>
                    </div>
                </section>

                <section className="bg-neutral-100 px-[30px] py-[100px] md:py-[120px]">
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
                                    <time
                                        dateTime={post.datePublished}
                                        className="text-sm text-stone-600"
                                    >
                                        {new Date(post.datePublished).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </time>
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
