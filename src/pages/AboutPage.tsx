import { Trans, useTranslation } from 'react-i18next';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { SurfaceCard } from '@/components/SurfaceCard';
import { ProfilePortrait } from '@/components/ProfilePortrait';
import { typographyClasses } from '@/config/designTokens';

const bodyText = `${typographyClasses.body} text-stone-800`;

export const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div className="min-h-screen bg-neutral-100 font-dm_sans">
            <Header />
            <main>
                <PageHeader
                    badge={t('badge')}
                    title={t('title')}
                    kicker={t('site.tagline', { ns: 'seo' })}
                />

                <PageSection>
                    <SurfaceCard className="px-6 py-8 md:px-10 md:py-10">
                        <div className="mb-8 flex justify-center">
                            <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-stone-900 md:h-[220px] md:w-[220px]">
                                <ProfilePortrait />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className={bodyText}>{t('bio.p1')}</p>
                            <p className={bodyText}>{t('bio.p2')}</p>
                            <p className={bodyText}>{t('bio.p3')}</p>
                            <p className={bodyText}>{t('bio.p4')}</p>
                            <p className={bodyText}>
                                <Trans
                                    i18nKey="bio.p5"
                                    ns="about"
                                    components={{
                                        link: (
                                            <a
                                                href="https://www.youtube.com/watch?v=vb8bto2vaaA"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-700"
                                            />
                                        ),
                                    }}
                                />
                            </p>
                            <p className={bodyText}>{t('bio.p6')}</p>
                            <p className={bodyText}>{t('bio.p7')}</p>
                        </div>
                    </SurfaceCard>
                </PageSection>
            </main>
            <Footer />
        </div>
    );
};
