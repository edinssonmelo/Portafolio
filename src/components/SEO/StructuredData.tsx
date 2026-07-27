import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    getPersonSchema,
    getProfilePageSchema,
    getWebSiteSchema,
    getProfessionalServiceSchema,
    getBreadcrumbSchema,
    getBlogPostingSchema,
} from '@/config/schema';
import { SITE_CONFIG } from '@/config/seo';
import { getBlogPost } from '@/data/blog';
import { useLocale } from '@/hooks/useLocale';

export const StructuredData = () => {
    const location = useLocation();
    const { t } = useTranslation('seo');
    const { lang } = useLocale();

    const segments = location.pathname.split('/').filter(Boolean);
    const subpath = `/${segments.slice(1).join('/')}`;

    const personSchema = getPersonSchema(t);
    const websiteSchema = getWebSiteSchema(t, lang);
    const professionalServiceSchema = getProfessionalServiceSchema(t);

    const breadcrumbItems = [{ name: 'Home', url: SITE_CONFIG.url }];

    if (subpath === '/projects') {
        breadcrumbItems.push({
            name: t('breadcrumb.projects', { defaultValue: 'Projects' }),
            url: `${SITE_CONFIG.url}/${lang}/projects`,
        });
    }

    if (subpath === '/about') {
        breadcrumbItems.push({
            name: t('breadcrumb.about', { defaultValue: 'About' }),
            url: `${SITE_CONFIG.url}/${lang}/about`,
        });
    }

    if (subpath === '/blog') {
        breadcrumbItems.push({
            name: 'Blog',
            url: `${SITE_CONFIG.url}/${lang}/blog`,
        });
    }

    if (subpath === '/cotizacion/sistema-barber') {
        breadcrumbItems.push({
            name: t('breadcrumb.cotizacion', { defaultValue: 'Barber System Quote' }),
            url: `${SITE_CONFIG.url}/${lang}/cotizacion/sistema-barber`,
        });
    }

    if (subpath === '/planes') {
        breadcrumbItems.push({
            name: t('breadcrumb.planes', { defaultValue: 'Plans' }),
            url: `${SITE_CONFIG.url}/${lang}/planes`,
        });
    }

    const projectMatch = subpath.match(/^\/projects\/([^/]+)$/);
    if (projectMatch) {
        breadcrumbItems.push(
            {
                name: t('breadcrumb.projects', { defaultValue: 'Projects' }),
                url: `${SITE_CONFIG.url}/${lang}/projects`,
            },
            {
                name: t('breadcrumb.project', { defaultValue: 'Project' }),
                url: `${SITE_CONFIG.url}/${lang}/projects/${projectMatch[1]}`,
            }
        );
    }

    const blogMatch = subpath.match(/^\/blog\/([^/]+)$/);
    const blogPost = blogMatch ? getBlogPost(blogMatch[1]) : undefined;
    if (blogPost) {
        breadcrumbItems.push(
            { name: 'Blog', url: `${SITE_CONFIG.url}/${lang}/blog` },
            {
                name: blogPost.title[lang] ?? blogPost.title[blogPost.lang],
                url: `${SITE_CONFIG.url}/${lang}/blog/${blogPost.slug}`,
            }
        );
    }

    const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
    const profilePageSchema = subpath === '/about' ? getProfilePageSchema() : null;
    const blogPostingSchema = blogPost
        ? getBlogPostingSchema(
              {
                  title: blogPost.title[lang] ?? blogPost.title[blogPost.lang],
                  description: blogPost.description[lang] ?? blogPost.description[blogPost.lang],
                  slug: blogPost.slug,
                  datePublished: blogPost.datePublished,
                  dateModified: blogPost.dateModified,
              },
              lang,
          )
        : null;

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(professionalServiceSchema)}
            </script>
            {profilePageSchema ? (
                <script type="application/ld+json">
                    {JSON.stringify(profilePageSchema)}
                </script>
            ) : null}
            {blogPostingSchema ? (
                <script type="application/ld+json">
                    {JSON.stringify(blogPostingSchema)}
                </script>
            ) : null}
            {breadcrumbItems.length > 1 && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
        </>
    );
};
