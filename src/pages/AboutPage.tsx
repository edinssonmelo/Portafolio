import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { SurfaceCard } from '@/components/SurfaceCard';
import { SITE_CONFIG } from '@/config/seo';
import { typographyClasses } from '@/config/designTokens';

const bodyText = `${typographyClasses.body} text-stone-800`;

export const AboutPage = () => {
    return (
        <div className="min-h-screen bg-neutral-100 font-dm_sans">
            <Header />
            <main>
                <PageHeader
                    badge="About"
                    title="Edinsson Melo"
                    kicker={SITE_CONFIG.tagline}
                    description={`Based in ${SITE_CONFIG.location.city}, ${SITE_CONFIG.location.country}.`}
                />

                <PageSection>
                    <SurfaceCard className="px-6 py-8 md:px-10 md:py-10">
                        <div className="mb-8 flex justify-center">
                            <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-stone-900 md:h-[220px] md:w-[220px]">
                                <img
                                    src="/assets/hero.png"
                                    alt="Edinsson Melo"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className={bodyText}>
                                Uno de los recuerdos que más marcó mi camino fue la primera vez que
                                tuve un computador frente a mí. Me quedé mirando los íconos, los
                                enlaces, la pequeña casa del navegador y las páginas que se abrían.
                                Sentía que estaba entrando a un mundo completamente nuevo.
                            </p>
                            <p className={bodyText}>
                                Esa curiosidad no se fue. Con el tiempo se convirtió en mi
                                profesión. Hoy soy AI Software Engineer en Colombia, y llevo más de
                                8 años desarrollando software, resolviendo problemas y construyendo
                                productos.
                            </p>
                            <p className={bodyText}>
                                También quiero conectar y compartir con personas que estén
                                construyendo, creciendo y buscando hacer un trabajo con propósito.
                            </p>
                        </div>

                        <blockquote className="mt-10 rounded-[12px] border-2 border-stone-900 bg-neutral-50 px-5 py-5">
                            <p className="font-dm_sans text-base font-semibold italic leading-relaxed text-stone-900 md:text-lg">
                                &ldquo;Y también que es don de Dios que todo hombre coma y beba, y
                                goce el bien de toda su labor.&rdquo;
                            </p>
                            <footer className="mt-3 font-dm_sans text-sm font-semibold text-stone-600">
                                Eclesiastés 3:13
                            </footer>
                        </blockquote>
                    </SurfaceCard>
                </PageSection>
            </main>
            <Footer />
        </div>
    );
};
