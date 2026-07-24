import { Link } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { SITE_CONFIG } from '@/config/seo';

const FEATURED_PROJECTS = [
    { slug: 'declaramelo', title: 'Declaramelo' },
    { slug: 'openwhispr', title: 'OpenWhispr' },
    { slug: 'wordjet-ai', title: 'Wordjet.ai' },
    { slug: 'superapp-mobile', title: 'Seguros SURA SuperApp' },
    { slug: 'bernal-tech-b2b', title: 'Bernal Tech B2B' },
    { slug: 'overup', title: 'OverUP' },
] as const;

const SPECIALTIES = [
    'AI Product Engineering',
    'SaaS Development',
    'Fullstack & Mobile Development',
    'Software Architecture',
    'MVP Definition & Launch',
    'AI Training & Mentorship',
] as const;

const LAST_UPDATED = 'July 2026';

export const AboutPage = () => {
    return (
        <div className="min-h-screen bg-neutral-100 font-dm_sans">
            <Header />
            <main>
                <PageHeader
                    badge="About"
                    title="Edinsson Melo"
                    kicker="An AI Product Builder"
                    description={`AI Software Engineer based in ${SITE_CONFIG.location.city}, ${SITE_CONFIG.location.country}.`}
                />

                <PageSection innerClassName="gap-10 md:gap-12">
                        <div className="space-y-4">
                            <h2 className="font-cabinet_grotesk text-3xl font-bold text-stone-900">
                                Short bio
                            </h2>
                            <p className="text-lg leading-[30px] text-stone-900">
                                I&apos;m an AI Software Engineer and AI Product Builder with over 8
                                years of experience shipping SaaS, web, and mobile products. I work
                                with companies, startups, founders, and software engineers on
                                AI-powered products, technical leadership, and AI training.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="font-cabinet_grotesk text-3xl font-bold text-stone-900">
                                Background
                            </h2>
                            <p className="text-lg leading-[30px] text-stone-900">
                                I build products end to end: from MVP definition and architecture to
                                production launch and iteration. My work spans AI-native apps,
                                enterprise platforms, and mobile products across fintech, insurance,
                                e-commerce, and consumer technology.
                            </p>
                            <p className="text-lg leading-[30px] text-stone-900">
                                I apply AI-assisted and agentic engineering to move faster without
                                sacrificing quality while integrating LLMs, RAG, agents, and automation
                                into products that solve real business problems.
                            </p>
                            <p className="text-lg leading-[30px] text-stone-900">
                                Edinsson Melo is a Colombian AI Software Engineer and AI Product
                                Builder who helps companies and product teams design, build, and ship
                                digital products with artificial intelligence, automation, and
                                scalable software architecture.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="font-cabinet_grotesk text-3xl font-bold text-stone-900">
                                Specialties
                            </h2>
                            <ul className="grid gap-2 sm:grid-cols-2">
                                {SPECIALTIES.map((item) => (
                                    <li
                                        key={item}
                                        className="text-lg leading-[30px] text-stone-900 before:mr-2 before:content-['•']"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="font-cabinet_grotesk text-3xl font-bold text-stone-900">
                                Selected projects
                            </h2>
                            <ul className="flex flex-col gap-2">
                                {FEATURED_PROJECTS.map((project) => (
                                    <li key={project.slug}>
                                        <Link
                                            to={`/projects/${project.slug}`}
                                            className="text-lg font-semibold text-stone-900 underline-offset-2 hover:underline"
                                        >
                                            {project.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="font-cabinet_grotesk text-3xl font-bold text-stone-900">
                                Profiles
                            </h2>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a
                                        href={SITE_CONFIG.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-stone-900 underline-offset-2 hover:underline"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={SITE_CONFIG.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-stone-900 underline-offset-2 hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={SITE_CONFIG.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-stone-900 underline-offset-2 hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <p className="border-t border-stone-900/10 pt-6 text-sm text-stone-600">
                            Last updated: {LAST_UPDATED}
                        </p>
                </PageSection>
            </main>
            <Footer />
        </div>
    );
};
