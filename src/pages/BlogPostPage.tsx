import { Link, useParams } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { getBlogPost } from '@/data/blog';

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
                <section className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[rgba(75,251,186,0.7)] px-[30px] pb-[80px] pt-[200px] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 after:border-stone-900">
                    <div className="relative z-[1] flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
                        <time
                            dateTime={post.datePublished}
                            className="text-sm text-stone-700"
                        >
                            {new Date(post.datePublished).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                        <h1 className="font-cabinet_grotesk text-4xl font-bold tracking-[-0.44px] text-stone-900 md:text-[48px] md:leading-[54px]">
                            {post.title}
                        </h1>
                        <p className="max-w-[650px] text-lg leading-[30px] text-stone-900">
                            {post.description}
                        </p>
                    </div>
                </section>

                <article className="bg-neutral-100 px-[30px] py-[100px] md:py-[120px]">
                    <div className="prose prose-stone mx-auto max-w-[800px] space-y-6">
                        {post.body.map((paragraph) => (
                            <p
                                key={paragraph.slice(0, 40)}
                                className="text-lg leading-[30px] text-stone-900"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};
