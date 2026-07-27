import { useTranslation } from 'react-i18next';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { PortfolioGrid } from '@/sections/Portfolio/components/PortfolioGrid';

export const ProjectsPage = () => {
    const { t } = useTranslation('projects');

    return (
        <div className="min-h-screen bg-neutral-100 font-dm_sans">
            <Header />
            <main>
                <PageHeader
                    badge={t('page.badge')}
                    title={t('page.title')}
                    description={t('page.description')}
                />

                <PageSection width="wide">
                    <PortfolioGrid />
                </PageSection>
            </main>
            <Footer />
        </div>
    );
};
