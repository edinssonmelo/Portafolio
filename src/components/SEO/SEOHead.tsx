import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEOConfig, SITE_CONFIG } from '@/config/seo';

export const SEOHead = () => {
    const location = useLocation();
    const seo = getSEOConfig(location.pathname);
    const fullUrl = `${SITE_CONFIG.url}${seo.path === '/' ? '' : seo.path}`;
    const ogImage = seo.image || SITE_CONFIG.image;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={SITE_CONFIG.keywords} />
            <meta name="robots" content={seo.noindex ? 'noindex, nofollow' : 'index, follow'} />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={seo.type || SITE_CONFIG.type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={SITE_CONFIG.name} />
            <meta property="og:locale" content={SITE_CONFIG.locale} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={ogImage} />
            {SITE_CONFIG.twitterHandle && (
                <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
            )}

            {/* Additional Meta Tags */}
            <meta name="author" content={SITE_CONFIG.name} />
            <meta name="theme-color" content="#DCFF31" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" sizes="48x48" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        </Helmet>
    );
};

