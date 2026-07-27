import { Link, useParams } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { BlogBody } from '@/components/BlogBody';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { SurfaceCard } from '@/components/SurfaceCard';
import { TagChip } from '@/components/TagChip';
import { formatBlogDate, formatReadingTime, getLocalizedPost } from '@/data/blog';
import { useLocale } from '@/hooks/useLocale';

export const BlogPostPage = () => {
    const { t } = useTranslation('blog');
    const { lang, to } = useLocale();
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getLocalizedPost(slug, lang) : undefined;

    if (!post) {
        return (
            <div className="min-h-screen bg-neutral-100 font-dm_sans">
                <Header />
                <div className="flex flex-col items-center justify-center gap-6 px-6 py-20">
                    <h1 className="font-cabinet_grotesk text-3xl font-bold text-stone-900">
                        {t('post.notFound')}
                    </h1>
                    <Link
                        to={to('/blog')}
                        className="font-semibold text-stone-900 underline-offset-2 hover:underline"
                    >
                        {t('post.backToBlog')}
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
                    badge={t('post.badge')}
                    title={post.title}
                    description={post.description}
                    align="left"
                    backLink={
                        <Link
                            to={to('/blog')}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-stone-600 underline-offset-2 transition-colors hover:text-stone-900 hover:underline"
                        >
                            ← {t('post.badge')}
                        </Link>
                    }
                    footer={
                        <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((tag) => (
                                <TagChip key={tag} label={tag} variant="muted" />
                            ))}
                        </div>
                    }
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
                </PageHeader>

                <PageSection>
                    <article lang={post.displayLang}>
                        <SurfaceCard className="px-6 py-8 md:px-10 md:py-10">
                        <BlogBody blocks={post.body} />

                        <div className="mt-12 space-y-4 border-t border-stone-200 pt-8">
                            <p className="font-dm_sans text-base leading-relaxed text-stone-800 md:text-lg">
                                <Trans
                                    i18nKey="post.relatedLinks"
                                    ns="blog"
                                    components={{
                                        projectsLink: (
                                            <Link
                                                to={to('/projects')}
                                                className="font-semibold text-stone-900 underline-offset-2 hover:underline"
                                            />
                                        ),
                                        aboutLink: (
                                            <Link
                                                to={to('/about')}
                                                className="font-semibold text-stone-900 underline-offset-2 hover:underline"
                                            />
                                        ),
                                    }}
                                />
                            </p>
                            <Link
                                to={to('/blog')}
                                className="inline-flex font-cabinet_grotesk text-base font-bold text-stone-900 underline-offset-2 hover:underline"
                            >
                                {t('post.backToBlog')}
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
