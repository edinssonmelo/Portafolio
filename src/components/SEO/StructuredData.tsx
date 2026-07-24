import { useLocation } from 'react-router-dom';
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

export const StructuredData = () => {
    const location = useLocation();

    const personSchema = getPersonSchema();
    const websiteSchema = getWebSiteSchema();
    const professionalServiceSchema = getProfessionalServiceSchema();

    const breadcrumbItems = [{ name: 'Home', url: SITE_CONFIG.url }];

    if (location.pathname === '/projects') {
        breadcrumbItems.push({
            name: 'Projects',
            url: `${SITE_CONFIG.url}/projects`,
        });
    }

    if (location.pathname === '/about') {
        breadcrumbItems.push({
            name: 'About',
            url: `${SITE_CONFIG.url}/about`,
        });
    }

    if (location.pathname === '/blog') {
        breadcrumbItems.push({
            name: 'Blog',
            url: `${SITE_CONFIG.url}/blog`,
        });
    }

    if (location.pathname === '/cotizacion/sistema-barber') {
        breadcrumbItems.push({
            name: 'Cotización Sistema Barber',
            url: `${SITE_CONFIG.url}/cotizacion/sistema-barber`,
        });
    }

    if (location.pathname === '/planes') {
        breadcrumbItems.push({
            name: 'Planes',
            url: `${SITE_CONFIG.url}/planes`,
        });
    }

    const projectMatch = location.pathname.match(/^\/projects\/([^/]+)$/);
    if (projectMatch) {
        breadcrumbItems.push(
            { name: 'Projects', url: `${SITE_CONFIG.url}/projects` },
            {
                name: 'Project',
                url: `${SITE_CONFIG.url}/projects/${projectMatch[1]}`,
            }
        );
    }

    const blogMatch = location.pathname.match(/^\/blog\/([^/]+)$/);
    const blogPost = blogMatch ? getBlogPost(blogMatch[1]) : undefined;
    if (blogPost) {
        breadcrumbItems.push(
            { name: 'Blog', url: `${SITE_CONFIG.url}/blog` },
            {
                name: blogPost.title,
                url: `${SITE_CONFIG.url}/blog/${blogPost.slug}`,
            }
        );
    }

    const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
    const profilePageSchema =
        location.pathname === '/about' ? getProfilePageSchema() : null;
    const blogPostingSchema = blogPost ? getBlogPostingSchema(blogPost) : null;

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
