import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { SurfaceCard } from '@/components/SurfaceCard';
import { SITE_CONFIG } from '@/config/seo';
import { ProfilePortrait } from '@/components/ProfilePortrait';
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
                />

                <PageSection>
                    <SurfaceCard className="px-6 py-8 md:px-10 md:py-10">
                        <div className="mb-8 flex justify-center">
                            <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-stone-900 md:h-[220px] md:w-[220px]">
                                <ProfilePortrait />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className={bodyText}>
                                Edinsson Adrian Melo Calvo es Software Engineer con trayectoria en el sector empresarial. Actualmente se especializa en desarrollo de software (AI-Native), Agentic AI y Workflows
                                automatizados.
                            </p>
                            <p className={bodyText}>
                                Para entender quién es en realidad, hay que volver al principio.
                            </p>
                            <p className={bodyText}>
                                Uno de los recuerdos que más marcó su camino fue la primera vez que
                                tuvo un computador frente a él. Vio el buscador de Google y
                                le pareció sencillamente intrigante: la casita del navegador, los
                                enlaces y todos los íconos que había ahí. Lo que hizo volar su imaginación, de todo lo que podía haber detrás de eso.
                            </p>
                            <p className={bodyText}>
                                Ese computador posteriormente se lo regaló su tía. Curiosamente tenía
                                instalados Stronghold Crusader y su primera Encarta. Se leyó la Encarta
                                entera. Le abrió una enciclopedia de cosas, juegos y contenido
                                didáctico que estimuló y abrió un mundo nuevo para él.
                            </p>
                            <p className={bodyText}>
                                Stronghold Crusader era un juego de estrategia que consistía en aprovechar los recursos disponibles para construir un imperio. Llegó a
                                jugar como Expert Player. Puedes ver un Gameplay en{' '}
                                <a
                                    href="https://www.youtube.com/watch?v=vb8bto2vaaA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-700"
                                >
                                    YouTube
                                </a>
                                .
                            </p>
                            <p className={bodyText}>
                                Esa curiosidad no se fue. Con el tiempo se convirtió en su obsesión,
                                conllevándolo a adentrarse profundamente en este campo. 
                            </p>
                            <p className={bodyText}>
                                Se identifica como una persona
                                que busca una vida con más propósito y servicio.
                            </p>
                        </div>
                    </SurfaceCard>
                </PageSection>
            </main>
            <Footer />
        </div>
    );
};
