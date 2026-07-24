import { Link } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
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
        <div className="text-black text-xs not-italic normal-nums font-normal bg-white min-h-screen font-dm_sans">
            <Header />
            <main>
                <section className="relative flex w-full flex-col items-center justify-center gap-12 overflow-hidden bg-[rgba(75,251,186,0.7)] px-[30px] pb-[120px] pt-[200px] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 after:border-stone-900">
                    <div className="relative z-[1] flex w-full max-w-[800px] flex-col items-center gap-6 text-center">
                        <div className="inline-flex items-center gap-2 rounded-[20px] border-2 border-stone-900 bg-white px-4 py-1.5">
                            <p className="text-[13px] font-black uppercase tracking-[0.65px] text-stone-900">
                                About
                            </p>
                        </div>
                        <h1 className="font-cabinet_grotesk text-4xl font-bold tracking-[-0.44px] text-stone-900 md:text-[52px] md:leading-[58px]">
                            Edinsson Melo
                        </h1>
                        <p className="text-xl font-semibold text-stone-900 md:text-2xl">
                            AI Product Builder
                        </p>
                        <p className="max-w-[650px] text-lg leading-[30px] text-stone-900">
                            AI Software Engineer based in {SITE_CONFIG.location.city},{' '}
                            {SITE_CONFIG.location.country}.
                        </p>
                    </div>
                </section>

                <section className="bg-neutral-100 px-[30px] py-[100px] md:py-[120px]">
                    <div className="mx-auto flex max-w-[800px] flex-col gap-12">
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
                                sacrificing quality — integrating LLMs, RAG, agents, and automation
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
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
