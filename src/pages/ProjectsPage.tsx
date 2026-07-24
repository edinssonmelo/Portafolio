import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { PortfolioGrid } from '@/sections/Portfolio/components/PortfolioGrid';

export const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-neutral-100 font-dm_sans">
            <Header />
            <main>
                <PageHeader
                    badge="My Works"
                    title="Projects that were genuinely fun to build."
                    description="Apps and products I've shipped."
                />

                <PageSection width="wide">
                    <PortfolioGrid />
                </PageSection>
            </main>
            <Footer />
        </div>
    );
};
