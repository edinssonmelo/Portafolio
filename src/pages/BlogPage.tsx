import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { SurfaceCard } from '@/components/SurfaceCard';
import { TagChip } from '@/components/TagChip';
import { BLOG_POSTS, formatBlogDate, formatReadingTime, getLocalizedPost } from '@/data/blog';
import { useLocale } from '@/hooks/useLocale';

export const BlogPage = () => {
    const { t } = useTranslation('blog');
    const { lang, to } = useLocale();

    return (
        <div className="min-h-screen bg-neutral-100 font-dm_sans">
            <Header />
            <main>
                <PageHeader
                    badge={t('page.badge')}
                    title={t('page.title')}
                    description={t('page.description')}
                />

                <PageSection>
                    {BLOG_POSTS.length === 0 ? (
                        <SurfaceCard className="px-6 py-8 md:px-8">
                            <p className="font-dm_sans text-base leading-relaxed text-stone-700 md:text-lg">
                                {t('page.emptyState')}
                            </p>
                        </SurfaceCard>
                    ) : (
                        BLOG_POSTS.map((rawPost) => {
                            const post = getLocalizedPost(rawPost.slug, lang) ?? rawPost;
                            return (
                                <SurfaceCard
                                    key={post.slug}
                                    className="px-6 py-6 transition-shadow hover:shadow-[4px_4px_0_0_#1c1917] md:px-8 md:py-7"
                                >
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
                                        <time dateTime={post.datePublished}>
                                            {formatBlogDate(post.datePublished, lang === 'es' ? 'es-CO' : 'en-US')}
                                        </time>
                                        <span aria-hidden="true">·</span>
                                        <span>{formatReadingTime(post.body, lang)}</span>
                                        <span aria-hidden="true">·</span>
                                        <span className="uppercase tracking-wide">
                                            {post.displayLang === 'es' ? 'Español' : 'English'}
                                        </span>
                                    </div>

                                    <h2 className="mt-3 font-cabinet_grotesk text-xl font-bold leading-snug text-stone-900 md:text-2xl">
                                        <Link
                                            to={to(`/blog/${post.slug}`)}
                                            className="underline-offset-2 hover:underline"
                                        >
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="mt-3 font-dm_sans text-base leading-relaxed text-stone-800 md:text-lg">
                                        {post.description}
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {post.tags.map((tag) => (
                                            <TagChip key={tag} label={tag} variant="muted" />
                                        ))}
                                    </div>

                                    <Link
                                        to={to(`/blog/${post.slug}`)}
                                        className="mt-5 inline-flex font-cabinet_grotesk text-sm font-bold text-stone-900 underline-offset-2 hover:underline"
                                    >
                                        {t('common:buttons.readArticle')} →
                                    </Link>
                                </SurfaceCard>
                            );
                        })
                    )}
                </PageSection>
            </main>
            <Footer />
        </div>
    );
};
