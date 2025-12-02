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
            {seo.noindex && <meta name="robots" content="noindex, nofollow" />}

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
        </Helmet>
    );
};

