import { useLocation } from 'react-router-dom';
import {
    getPersonSchema,
    getWebSiteSchema,
    getProfessionalServiceSchema,
    getBreadcrumbSchema,
} from '@/config/schema';
import { SITE_CONFIG } from '@/config/seo';

export const StructuredData = () => {
    const location = useLocation();

    // Person schema - always included
    const personSchema = getPersonSchema();

    // Website schema - always included
    const websiteSchema = getWebSiteSchema();

    // Professional Service schema - always included
    const professionalServiceSchema = getProfessionalServiceSchema();

    // Breadcrumb schema - dynamic based on route
    const breadcrumbItems = [
        { name: 'Home', url: SITE_CONFIG.url },
    ];

    if (location.pathname === '/projects') {
        breadcrumbItems.push({
            name: 'Projects',
            url: `${SITE_CONFIG.url}/projects`,
        });
    }

    const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

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
            {breadcrumbItems.length > 1 && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
        </>
    );
};

