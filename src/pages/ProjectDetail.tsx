import { useTranslation } from 'react-i18next';
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { GradientButton } from "@/components/GradientButton";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { ProjectImageLightbox } from "@/components/ProjectImageLightbox";
import { ProjectStory, type ProjectStoryData } from "@/components/ProjectStory";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { getScreenshotMeta, isMobileScreenshot, screenshotSrc } from "@/config/screenshotMeta";
import { useLocale } from '@/hooks/useLocale';

// Project data - in a real app, this would come from an API or CMS
const projects: Record<string, {
    title: string;
    subtitle: string;
    livePreviewUrl: string;
    aboutText: string;
    date: string;
    client: string;
    services: string[];
    projectDetails: string;
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
    thingsIDid: string;
    outcome?: string;
    whatILearned?: string;
    story?: ProjectStoryData;
    mainImage: string;
    images: string[];
    imageAspect?: string;
    imageFrameClassName?: string;
    previousProject?: {
        slug: string;
        title: string;
        image: string;
    };
    nextProject?: {
        slug: string;
        title: string;
        image: string;
    };
}> = {
    "snowlake-social-media-website": {
        title: "Snowlake Social Media Website",
        subtitle: "Snowlake is a sleek, product-driven site for a social media platform, built with clean UI and scalable Framer CMS.",
        livePreviewUrl: "https://framer.link/bNQRBaO",
        aboutText: "This project was about building a marketing website for Snowlake, a modern social media tool. The goal was to create a strong first impression with a fast, clear, and trustworthy web experience. The site needed to convey reliability while also embracing a friendly tech aesthetic.",
        date: "Mar 9, 2025",
        client: "Snowlake Agency",
        services: ["UI/UX"],
        projectDetails: "Snowlake needed a promotional website that could speak to marketing managers, freelancers, and digital teams. The site had to communicate the features of the product with clarity while maintaining a polished and trustworthy tone. The design process centered on clean layouts, monochrome illustrations, and vibrant CTA placements. I structured the CMS for use with testimonials, feature updates, and blog content, giving the team tools to grow their digital content strategy with minimal friction.",
        testimonial: {
            quote: "From day one, Meelo was incredibly organized and intuitive. She helped us translate a pretty complex product into a website that feels light, fast, and incredibly user-friendly.",
            author: "Jonas Erikkson",
            role: "Head of Product, Snowlake Agency"
        },
        thingsIDid: "I designed and implemented the website structure and layout using Framer's visual canvas and CMS features. I customized components for blog entries and testimonial displays and built responsive sections tailored for performance across devices. I was also responsible for integrating animations that improved user engagement without compromising performance. The final product was delivered on time with a lightweight, future-ready architecture, ready to scale as the brand evolves.",
        mainImage: "https://framerusercontent.com/images/OaSyAHYFx1huHnJnTUs2WX3sJA.png?width=1297&height=905",
        images: [
            "https://framerusercontent.com/images/l3agFCrvI3KrXfMpLJohJ7ur9e0.png?width=2938&height=1722",
            "https://framerusercontent.com/images/u6yaNEw2DfBX7drCIIFGVK5BBYw.png?width=1358&height=889",
            "https://framerusercontent.com/images/ag4fRmpBrBcY3aP408zjyOZhO0Q.png?width=1466&height=886"
        ],
        previousProject: {
            slug: "meeko-company-networking-website",
            title: "Meeko Company Networking Website",
            image: "https://framerusercontent.com/images/7slPA3eMWAZam20MCpjKyd9Ub84.png?width=1607&height=852"
        }
    },
    "meeko-company-networking-website": {
        title: "Meeko Company Networking Website",
        subtitle: "Meeko is a modern Framer-built site connecting professionals, designed for seamless networking.",
        livePreviewUrl: "https://framer.link/bNQRBaO",
        aboutText: "This project focused on creating a networking platform website that connects professionals seamlessly.",
        date: "Feb 15, 2025",
        client: "Meeko Agency",
        services: ["UI/UX", "Web Design"],
        projectDetails: "Meeko needed a modern website to connect professionals and facilitate networking opportunities.",
        testimonial: {
            quote: "Excellent work on our networking platform. The design is clean and professional.",
            author: "Sarah Johnson",
            role: "CEO, Meeko Agency"
        },
        thingsIDid: "I designed and developed the networking platform website with a focus on user experience and professional aesthetics.",
        mainImage: "https://framerusercontent.com/images/7slPA3eMWAZam20MCpjKyd9Ub84.png?width=1607&height=852",
        images: [],
        nextProject: {
            slug: "snowlake-social-media-website",
            title: "Snowlake Social Media Website",
            image: "https://c.animaapp.com/mih2ldgveCT36V/assets/2.avif"
        }
    },
    "sandbox-banking-application-website": {
        title: "Sandbox Banking Application Website",
        subtitle: "Sandbox is a next-gen fintech site built in Framer, spotlighting trust and innovation through a powerful CMS.",
        livePreviewUrl: "https://framer.link/bNQRBaO",
        aboutText: "A modern fintech website showcasing trust and innovation.",
        date: "Jan 20, 2025",
        client: "Sandbox Financial",
        services: ["UI/UX", "Fintech"],
        projectDetails: "Sandbox needed a trustworthy and innovative website for their banking application.",
        testimonial: {
            quote: "The website perfectly captures our brand's trustworthiness and innovation.",
            author: "Michael Chen",
            role: "CTO, Sandbox Financial"
        },
        thingsIDid: "I created a modern fintech website with a focus on trust and user experience.",
        mainImage: "https://c.animaapp.com/mih2ldgveCT36V/assets/7.png",
        images: [],
    },
    "creatink-creative-agency-website": {
        title: "Creatink Website Portfolio Template",
        subtitle: "Creatink is a bold, modern agency site built on Framer CMS, designed to showcase strong visuals and smooth UX.",
        livePreviewUrl: "https://framer.link/bNQRBaO",
        aboutText: "A bold and modern agency website showcasing creative work.",
        date: "Dec 10, 2026",
        client: "Creatink Agency",
        services: ["UI/UX", "Branding"],
        projectDetails: "Creatink needed a portfolio website that showcases their creative work with strong visuals.",
        testimonial: {
            quote: "The website perfectly represents our creative agency's bold style.",
            author: "Emma Williams",
            role: "Creative Director, Creatink Agency"
        },
        thingsIDid: "I designed a bold and modern portfolio website for the creative agency.",
        mainImage: "https://c.animaapp.com/mih2ldgveCT36V/assets/10.png",
        images: [],
    },
    "wordjet-ai": {
        title: "Wordjet.ai",
        subtitle: "", // loaded from i18n
        livePreviewUrl: "#",
        aboutText: "",
        date: "Jan 2025",
        client: "WordJet.ai",
        services: ["AI", "SaaS", "Fullstack"],
        projectDetails: "",
        outcome: undefined,
        testimonial: {
            quote: "",
            author: "WordJet Team",
            role: "Product"
        },
        thingsIDid: "",
        story: undefined, // loaded from i18n
        mainImage: "/screenshots/wordjet-landing.png",
        images: [
            "/screenshots/wordjet-landing.png",
            "/screenshots/wordjet-editor.png"
        ],
        nextProject: { slug: "superapp-mobile", title: "SuperApp Mobile", image: "/screenshots/sura-explora.png" },
        previousProject: { slug: "bernal-tech-b2b", title: "Bernal Tech B2B", image: "/screenshots/bernal-dashboard.png" }
    },
    "overup": {
        title: "OverUP",
        subtitle: "",
        livePreviewUrl: "https://overup.store/",
        aboutText: "",
        date: "2024",
        client: "OverUP",
        services: ["E-commerce", "Web", "Shopify"],
        projectDetails: "",
        testimonial: {
            quote: "",
            author: "OverUP",
            role: "Brand"
        },
        thingsIDid: "",
        story: undefined,
        mainImage: "/screenshots/overup-hero.png",
        images: [
            "/screenshots/overup-hero.png",
            "/screenshots/overup-catalog.png",
            "/screenshots/overup-product.png"
        ],
        previousProject: { slug: "superapp-mobile", title: "SuperApp Mobile", image: "/screenshots/sura-explora.png" },
        nextProject: { slug: "declaramelo", title: "Declaramelo", image: "/screenshots/declaramelo-hero.png" }
    },
    declaramelo: {
        title: "Declaramelo",
        subtitle: "",
        livePreviewUrl: "https://www.declaramelo.com/",
        aboutText: "",
        date: "2025",
        client: "Declaramelo",
        services: ["Fullstack", "Web", "Product"],
        projectDetails: "",
        testimonial: {
            quote: "",
            author: "Declaramelo",
            role: "Product"
        },
        thingsIDid: "",
        story: undefined,
        mainImage: "/screenshots/declaramelo-hero.png",
        images: [
            "/screenshots/declaramelo-hero.png",
            "/screenshots/declaramelo-features.png",
            "/screenshots/declaramelo-process.png"
        ],
        previousProject: { slug: "overup", title: "OverUP", image: "/screenshots/overup-hero.png" },
        nextProject: { slug: "openwhispr", title: "OpenWhispr", image: "/screenshots/openwhispr-hero.png" }
    },
    "bernal-tech-b2b": {
        title: "Bernal Tech B2B",
        subtitle: "",
        livePreviewUrl: "https://bernaltechtienda.com/pages/contact?view=portal-embed",
        aboutText: "",
        date: "2026",
        client: "Bernal Tech",
        services: ["B2B", "Web", "Fullstack"],
        projectDetails: "",
        testimonial: {
            quote: "",
            author: "Bernal Tech",
            role: "Operations"
        },
        thingsIDid: "",
        story: undefined,
        mainImage: "/screenshots/bernal-dashboard.png",
        images: [
            "/screenshots/bernal-dashboard.png",
            "/screenshots/bernal-login.png",
            "/screenshots/bernal-catalog.png",
            "/screenshots/bernal-product.png"
        ],
        previousProject: { slug: "openwhispr", title: "OpenWhispr", image: "/screenshots/openwhispr-hero.png" },
        nextProject: { slug: "wordjet-ai", title: "Wordjet.ai", image: "/screenshots/wordjet-landing.png" }
    },
    openwhispr: {
        title: "OpenWhispr",
        subtitle: "",
        livePreviewUrl: "https://openwhispr.rootoz.com/",
        aboutText: "",
        date: "2026",
        client: "OpenWhispr",
        services: ["AI", "Desktop", "Product"],
        projectDetails: "",
        testimonial: {
            quote: "",
            author: "OpenWhispr",
            role: "Product"
        },
        thingsIDid: "",
        story: undefined,
        mainImage: "/screenshots/openwhispr-hero.png",
        images: [
            "/screenshots/openwhispr-hero.png",
            "/screenshots/openwhispr-meetings.png",
            "/screenshots/openwhispr-transcription.png",
        ],
        previousProject: { slug: "declaramelo", title: "Declaramelo", image: "/screenshots/declaramelo-hero.png" },
        nextProject: { slug: "bernal-tech-b2b", title: "Bernal Tech B2B", image: "/screenshots/bernal-dashboard.png" }
    },
    "superapp-mobile": {
        title: "SuperApp Mobile",
        subtitle: "",
        livePreviewUrl: "https://play.google.com/store/apps/details?id=co.com.sura.seguros&hl=es_CO",
        aboutText: "",
        date: "2022 – 2024",
        client: "Seguros SURA",
        services: ["Mobile", "Flutter", "iOS", "Android"],
        projectDetails: "",
        testimonial: {
            quote: "",
            author: "Seguros SURA",
            role: "Mobile"
        },
        thingsIDid: "",
        story: undefined,
        mainImage: "/screenshots/sura-explora.png",
        images: [
            "/screenshots/sura-ingresa.png",
            "/screenshots/sura-explora.png",
            "/screenshots/sura-resuelve.png",
            "/screenshots/sura-avanza.png"
        ],
        imageAspect: undefined,
        imageFrameClassName: undefined,
        previousProject: { slug: "wordjet-ai", title: "Wordjet.ai", image: "/screenshots/wordjet-landing.png" },
        nextProject: { slug: "overup", title: "OverUP", image: "/screenshots/overup-hero.png" }
    }
};

type I18nProjectData = {
    subtitle: string;
    aboutText: string;
    thingsIDid: string;
    projectDetails: string;
    outcome?: string;
    story?: {
        hook: string;
        body: string[];
        pullQuote?: string;
    };
};

const getI18nProjectData = (
    slug: string,
    t: (key: string, opts?: Record<string, unknown>) => unknown,
): I18nProjectData | null => {
    if (!['declaramelo', 'openwhispr', 'bernal-tech-b2b', 'wordjet-ai', 'superapp-mobile', 'overup'].includes(slug)) {
        return null;
    }
    const story = t(`data.${slug}.story`, { returnObjects: true }) as I18nProjectData['story'] | undefined;
    return {
        subtitle: t(`data.${slug}.subtitle`) as string,
        aboutText: t(`data.${slug}.aboutText`) as string,
        thingsIDid: t(`data.${slug}.thingsIDid`) as string,
        projectDetails: t(`data.${slug}.projectDetails`) as string,
        outcome: (t(`data.${slug}.outcome`, { defaultValue: undefined }) as string | undefined),
        story: story && typeof story === 'object' && Array.isArray(story.body) ? story : undefined,
    };
};

const buildProjectStory = (
    project: {
        title: string;
        subtitle: string;
        aboutText: string;
        thingsIDid: string;
        projectDetails: string;
        services: string[];
        outcome?: string;
        testimonial: { quote: string };
        story?: ProjectStoryData;
    },
    i18nData: I18nProjectData | null,
): ProjectStoryData => {
    if (i18nData?.story) {
        return {
            hook: i18nData.story.hook,
            body: i18nData.story.body,
            stack: project.services,
            pullQuote: i18nData.story.pullQuote,
        };
    }
    if (project.story) {
        return project.story;
    }

    const outcome = project.outcome ?? i18nData?.outcome ?? project.testimonial.quote;
    const hook = i18nData?.subtitle ?? project.subtitle;
    const body = [
        i18nData?.aboutText ?? project.aboutText,
        i18nData?.thingsIDid ?? project.thingsIDid,
        i18nData?.projectDetails ?? project.projectDetails,
        outcome,
    ].filter((p) => p.trim().length > 0);

    return {
        hook,
        body,
        stack: project.services,
        pullQuote: project.testimonial.quote || undefined,
    };
};

const getLiveLinkLabel = (url: string, t: (key: string) => string) => {
    try {
        if (new URL(url).hostname.includes("play.google.com")) {
            return t('detail.viewOnGooglePlay');
        }
    } catch {
        return t('detail.viewLive');
    }
    return t('detail.viewLive');
};

const ProjectLiveLink = ({ url, t }: { url: string; t: (key: string) => string }) => (
    <GradientButton href={url} external>
        <span className="text-base font-semibold leading-[19px] tracking-[-0.64px] text-stone-900 font-dm_sans md:text-lg md:tracking-[-0.72px]">
            {getLiveLinkLabel(url, t)}
        </span>
        <ExternalLink className="h-[17px] w-[17px] shrink-0 text-stone-900 md:h-[19px] md:w-[19px]" aria-hidden />
    </GradientButton>
);


const PROJECT_CAROUSEL_BTN_CLASS =
    "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-none bg-yellow-300 cursor-pointer md:h-[50px] md:w-[50px]";

const ProjectDetailContent = ({
    project,
    livePreviewUrl,
    t,
}: {
    project: {
        title: string;
        subtitle: string;
        mainImage: string;
        images?: string[];
        imageAspect?: string;
        imageFrameClassName?: string;
    };
    livePreviewUrl?: string;
    t: ReturnType<typeof useTranslation>['t'];
}) => {
    const slides =
        project.images && project.images.length > 0
            ? project.images
            : [project.mainImage];
    const [index, setIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const slideCount = slides.length;

    const goToSlide = (nextIndex: number) => {
        setAutoPlay(false);
        setIndex(nextIndex);
    };

    useEffect(() => {
        setIndex(0);
        setAutoPlay(true);
    }, [project.title]);

    useEffect(() => {
        if (!autoPlay || slideCount <= 1) return;
        const t = setInterval(
            () => setIndex((i) => (i + 1) % slideCount),
            4000
        );
        return () => clearInterval(t);
    }, [autoPlay, slideCount]);

    useEffect(() => {
        slides.forEach((src) => {
            const img = new Image();
            img.src = screenshotSrc(src);
        });
    }, [slides]);

    const slidePadding = "p-2 md:p-4";

    const openLightbox = (slideIndex: number) => {
        setAutoPlay(false);
        setIndex(slideIndex);
        setLightboxIndex(slideIndex);
    };

    const hasLivePreview = Boolean(livePreviewUrl && livePreviewUrl !== "#");

    return (
        <section className="relative bg-neutral-100 w-full px-4 sm:px-6 md:px-8 py-12 md:py-16">
            {lightboxIndex !== null ? (
                <ProjectImageLightbox
                    images={slides}
                    initialIndex={lightboxIndex}
                    title={project.title}
                    onClose={() => setLightboxIndex(null)}
                />
            ) : null}
            <div className="relative mx-auto w-full max-w-[800px]">
                {hasLivePreview ? (
                    <div className="mb-3 flex justify-end md:absolute md:left-full md:top-0 md:z-10 md:mb-0 md:ml-3">
                        <ProjectLiveLink url={livePreviewUrl!} t={t} />
                    </div>
                ) : null}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex w-full items-center justify-center gap-3 md:gap-5">
                        {slideCount > 1 ? (
                            <button
                                type="button"
                                onClick={() =>
                                    goToSlide((index - 1 + slideCount) % slideCount)
                                }
                                className={PROJECT_CAROUSEL_BTN_CLASS}
                                aria-label="Anterior"
                            >
                                <img
                                    alt=""
                                    src="https://c.animaapp.com/mih2ldgveCT36V/assets/3.avif"
                                    className="h-full w-full"
                                />
                            </button>
                        ) : null}

                        <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border-2 border-stone-900 bg-neutral-100">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{
                                    width: `${slideCount * 100}%`,
                                    transform: `translateX(-${(index / slideCount) * 100}%)`,
                                }}
                            >
                                {slides.map((image, i) => {
                                    const meta = getScreenshotMeta(image);
                                    const mobileShot = isMobileScreenshot(image);
                                    const aspectRatio =
                                        meta && !mobileShot
                                            ? `${meta.width} / ${meta.height}`
                                            : undefined;

                                    return (
                                    <button
                                        key={image}
                                        type="button"
                                        onClick={() => openLightbox(i)}
                                        className={`flex h-full shrink-0 cursor-zoom-in items-center justify-center ${slidePadding} ${
                                            mobileShot ? "min-h-[320px] md:min-h-[420px]" : ""
                                        }`}
                                        style={{
                                            width: `${100 / slideCount}%`,
                                            aspectRatio: aspectRatio,
                                        }}
                                        aria-label={`View ${project.title} image ${i + 1} in full size`}
                                    >
                                        <img
                                            src={screenshotSrc(image)}
                                            alt={`${project.title} - ${i + 1}`}
                                            loading={i === 0 ? "eager" : "lazy"}
                                            decoding="async"
                                            width={meta?.width}
                                            height={meta?.height}
                                            className={
                                                mobileShot
                                                    ? "pointer-events-none h-auto w-[140px] max-w-[38%] object-contain object-center"
                                                    : "pointer-events-none block h-auto w-full max-h-[min(70vh,720px)] object-contain object-center"
                                            }
                                        />
                                    </button>
                                    );
                                })}
                            </div>
                        </div>

                        {slideCount > 1 ? (
                            <button
                                type="button"
                                onClick={() => goToSlide((index + 1) % slideCount)}
                                className={PROJECT_CAROUSEL_BTN_CLASS}
                                aria-label="Siguiente"
                            >
                                <img
                                    alt=""
                                    src="https://c.animaapp.com/mih2ldgveCT36V/assets/4.avif"
                                    className="h-full w-full"
                                />
                            </button>
                        ) : null}
                    </div>

                    <p className="text-sm text-stone-600 font-dm_sans">
                        {slideCount > 1
                            ? t('detail.tapToView.plural')
                            : t('detail.tapToView.single')}
                    </p>

                    {slideCount > 1 ? (
                        <div className="flex gap-2">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => goToSlide(i)}
                                    className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-stone-900" : "bg-white/80 border border-stone-900"}`}
                                    aria-label={`Ir a slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t } = useTranslation('projects');
    const { to } = useLocale();
    const project = slug != null && slug !== "" ? projects[slug] : null;
    const hasLivePreview = Boolean(project?.livePreviewUrl && project.livePreviewUrl !== "#");

    if (!project) {
        return (
            <div className="text-black text-xs font-sans_serif min-h-screen flex items-center justify-center bg-neutral-100">
                <div className="box-border caret-transparent">
                    <Header />
                    <div className="flex flex-col items-center justify-center gap-6 px-6 py-20">
                        <h1 className="text-stone-900 text-3xl font-bold font-cabinet_grotesk">{t('detail.notFoundTitle')}</h1>
                        <p className="text-stone-700 text-lg font-dm_sans">{t('detail.notFoundMessage')}</p>
                        <Link to={to('/projects')} className="text-blue-700 font-dm_sans font-semibold hover:underline">{t('detail.backToProjects')}</Link>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }

    const i18nData = slug ? getI18nProjectData(slug, t as (key: string, opts?: Record<string, unknown>) => unknown) : null;
    const localizedSubtitle = i18nData?.subtitle ?? project.subtitle;

    return (
        <>
            <div className="min-h-screen bg-neutral-100 font-dm_sans">
                <Header />

                <main>
                    <PageHeader
                        badge={t('detail.badge')}
                        title={project.title}
                        description={localizedSubtitle}
                    />

                    {/* Image carousel */}
                    <ProjectDetailContent
                        project={{ ...project, subtitle: localizedSubtitle }}
                        livePreviewUrl={hasLivePreview ? project.livePreviewUrl : undefined}
                        t={t}
                    />

                    <ProjectStory story={buildProjectStory(project, i18nData)} />
                </main>

                <Footer />
            </div>
        </>
    );
};

