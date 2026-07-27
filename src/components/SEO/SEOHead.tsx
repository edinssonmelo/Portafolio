import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getSEOConfig, SITE_CONFIG } from '@/config/seo';
import { profilePortraitPreloadHref, profilePortraitSrcSet } from '@/config/profilePortraitAssets';
import { useLocale } from '@/hooks/useLocale';
import type { AppLanguage } from '@/i18n';

export const SEOHead = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation('seo');
    const { lang } = useLocale();
    const seo = getSEOConfig(location.pathname, t);

    const segments = location.pathname.split('/').filter(Boolean);
    const subpath = `/${segments.slice(1).join('/')}`;
    const isHome = subpath === '/';

    const otherLang: AppLanguage = lang === 'es' ? 'en' : 'es';
    const canonicalUrl = `${SITE_CONFIG.url}/${lang}${subpath === '/' ? '' : subpath}`;
    const alternateUrl = `${SITE_CONFIG.url}/${otherLang}${subpath === '/' ? '' : subpath}`;
    const ogLocale = SITE_CONFIG.locale[lang];
    const alternateOgLocale = SITE_CONFIG.locale[otherLang];

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={t('site.keywords')} />
            <meta name="robots" content={seo.noindex ? 'noindex, nofollow' : 'index, follow'} />

            {/* Canonical + hreflang */}
            <link rel="canonical" href={canonicalUrl} />
            <link rel="alternate" hrefLang={lang} href={canonicalUrl} />
            <link rel="alternate" hrefLang={otherLang} href={alternateUrl} />
            <link
                rel="alternate"
                hrefLang="x-default"
                href={`${SITE_CONFIG.url}/en${subpath === '/' ? '' : subpath}`}
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={seo.type || SITE_CONFIG.type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image || SITE_CONFIG.image} />
            <meta property="og:site_name" content={SITE_CONFIG.name} />
            <meta property="og:locale" content={ogLocale} />
            <meta property="og:locale:alternate" content={alternateOgLocale} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image || SITE_CONFIG.image} />
            {SITE_CONFIG.twitterHandle && (
                <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
            )}

            {/* Additional Meta Tags */}
            <meta name="author" content={SITE_CONFIG.name} />
            <meta name="theme-color" content="#DCFF31" />

            {isHome && (
                <link
                    rel="preload"
                    as="image"
                    type="image/webp"
                    href={profilePortraitPreloadHref}
                    imageSrcSet={profilePortraitSrcSet.webp}
                    imageSizes="(max-width: 1103px) 200px, 246px"
                />
            )}

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" sizes="48x48" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        </Helmet>
    );
};
