import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { GradientButton } from "@/components/GradientButton";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { ProjectImageLightbox } from "@/components/ProjectImageLightbox";
import { ProjectStory, type ProjectStoryData } from "@/components/ProjectStory";
import { getScreenshotMeta, isMobileScreenshot } from "@/config/screenshotMeta";

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
        subtitle: "AI writing workspace for marketing agencies. Create briefs, articles, essays, and content calendars with research and market study tools built in.",
        livePreviewUrl: "#",
        aboutText: "Wordjet is an AI assisted writing workspace built for marketing teams and agencies. It helps teams move from research to publishable content faster with tools for briefs, articles, essays, content planning, and market study workflows inside one editor.",
        date: "Jan 2025",
        client: "WordJet.ai",
        services: ["AI", "SaaS", "Fullstack"],
        projectDetails: "Built the product landing, writing workspace, Jet AI assistant, project organization, and research oriented workflows for marketing content production.",
        outcome:
            "A focused writing product that helps marketing teams turn research into briefs, articles, and client-ready content faster.",
        testimonial: {
            quote: "A focused writing product that helps marketing teams turn research into briefs, articles, and client ready content much faster.",
            author: "WordJet Team",
            role: "Product"
        },
        thingsIDid: "Developed the AI writing workspace, embedded assistant, editor experience, and marketing research flows for briefs, articles, essays, and content production.",
        story: {
            hook: "An AI writing workspace for marketing teams: from market research to briefs, copy, and social-ready formats.",
            body: [
                "Wordjet was designed for agencies and marketers who live in documents: briefs, outlines, market research, articles, and the social formats that come from a solid base. One editor, AI-assisted workflows, and a path from research to publishable output.",
                "The vision was ambitious: consolidate research, writing, and repurposing in a single workspace. I built the landing, editor, Jet AI assistant, and content production flows before the partnership with a marketing specialist did not work out.",
                "The project is paused for now, not because the idea was weak, but because the product needed deep domain expertise on the business side. It remains a direction I may return to. It is a strong proof of building complex AI product surfaces for marketing teams.",
            ],
            stack: ["AI", "SaaS", "Fullstack"],
            pullQuote:
                "A focused writing product that helps marketing teams turn research into briefs, articles, and client-ready content much faster.",
        },
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
        subtitle: "E-commerce store for OverUP, a Colombian oversized streetwear brand with catalog, product pages, and checkout.",
        livePreviewUrl: "https://overup.store/",
        aboutText: "OverUP is an online store for oversized streetwear in Colombia. The shop brings together brand storytelling, product catalog, product detail pages, and a smooth purchase flow for customers.",
        date: "2024",
        client: "OverUP",
        services: ["E-commerce", "Web", "Shopify"],
        projectDetails: "Built the storefront experience with hero landing, featured products, product detail pages, size selection, and checkout flow for a streetwear brand.",
        testimonial: {
            quote: "A clean store that reflects the brand and makes shopping oversized streetwear feel simple.",
            author: "OverUP",
            role: "Brand"
        },
        thingsIDid: "Developed the e-commerce experience including landing page, catalog, product pages, cart, and checkout flow.",
        story: {
            hook: "An urban streetwear store born from entrepreneurship in Medellín, with brand, catalog, and checkout in one place.",
            body: [
                "OverUP started as a small venture with my wife and a friend from school: oversized streetwear with real brand energy, sold online and visible on Instagram as @overappoficial. I built the e-commerce experience: landing, catalog, product pages, and purchase flow.",
                "The brand had momentum in Medellín. After moving to Cúcuta, climate and inventory did not match the product we had produced, and the textile market grew tougher with global competition. We made the call to close the project with lessons learned rather than force something that no longer fit.",
                "It was not the outcome we hoped for, but the experience reinforced what I love building: products, brands, and software. OverUP is no longer active; the skills and judgment from that chapter carry into everything I ship today.",
            ],
            stack: ["E-commerce", "Web", "Shopify"],
        },
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
        subtitle: "Online income tax filing in Colombia with expert accountants, free tools, and a guided DIAN declaration flow.",
        livePreviewUrl: "https://www.declaramelo.com/",
        aboutText: "Declaramelo helps individuals in Colombia file their income tax return online with confidence. The platform combines free self service tools, expert accountant review, and a clear step by step flow to declare before DIAN.",
        date: "2025",
        client: "Declaramelo",
        services: ["Fullstack", "Web", "Product"],
        projectDetails: "Built the landing experience, filing deadline tools, onboarding flow, and core product surfaces for an online tax declaration service in Colombia.",
        testimonial: {
            quote: "A clear, trustworthy experience that makes a complex tax process feel simple and guided.",
            author: "Declaramelo",
            role: "Product"
        },
        thingsIDid: "Developed the web platform including hero, tools, onboarding, and declaration support flows for Colombian taxpayers.",
        story: {
            hook: "A financial ally for Colombians who need expert help filing income tax with DIAN.",
            body: [
                "Declaramelo was born from a simple need: people facing their annual income tax declaration in Colombia need more than a form. They need a trusted accountant who can answer questions, clarify their situation, and guide them through a process tied to the state.",
                "Every person's finances are different. The product treats each case with care, pairing modern technology with human expertise so a rigorous process feels approachable. Free tools, guided flows, and accountant support help users declare with confidence.",
                "It is a young startup still growing, focused today on individuals, with a path toward serving companies too. The goal has stayed the same: offer great service, keep the best talent available, and be the ally people trust with their declaration.",
            ],
            stack: ["Fullstack", "Web", "Product"],
            pullQuote:
                "A clear, trustworthy experience that makes a complex tax process feel simple and guided.",
        },
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
        subtitle: "Wholesale B2B portal for a Colombian car mat and automotive accessories manufacturer.",
        livePreviewUrl: "https://bernaltechtienda.com/pages/contact?view=portal-embed",
        aboutText: "Bernal Tech B2B is a wholesale portal for allied businesses in Colombia. It connects manufacturing operations with B2B buyers through secure login, a large product catalog, quotes, orders, analytics, and customer support workflows.",
        date: "2026",
        client: "Bernal Tech",
        services: ["B2B", "Web", "Fullstack"],
        projectDetails: "Built the wholesale portal with ally authentication, admin dashboard, catalog with filters across 3,000+ SKUs, product detail flows, quotes, orders, analytics, and PQRS support.",
        testimonial: {
            quote: "A professional B2B experience that makes wholesale ordering faster and easier for our allied clients.",
            author: "Bernal Tech",
            role: "Operations"
        },
        thingsIDid: "Developed the B2B portal including login, dashboard, catalog, product pages, quotes, and operational modules for wholesale clients.",
        story: {
            hook: "A wholesale portal that turns a decade-strong manufacturer's catalog into a guided B2B buying experience.",
            body: [
                "Bernal Tech manufactures automotive floor mats and accessories for every type of vehicle. Their wholesale allies needed more than a product list. They wanted a personalized flow: choose a product line, brand, and vehicle model across more than 4,000 SKUs.",
                "We built a robust platform with role-based admin, catalog management, analytics, quotations, and notifications, from quote through dispatch and delivery. The client invested heavily in product photography; the portal made that catalog searchable, organized, and easy to order from.",
                "Exclusive to wholesale clients, the system is live in production. Allies have welcomed the experience, and it has become a strong digital channel for a company with more than ten years in the market.",
            ],
            stack: ["B2B", "Web", "Fullstack"],
            pullQuote:
                "A professional B2B experience that makes wholesale ordering faster and easier for our allied clients.",
        },
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
        subtitle: "AI native macOS desktop app to transcribe meetings, save them, and analyze them while you stay focused on the conversation.",
        livePreviewUrl: "https://openwhispr.rootoz.com/",
        aboutText: "OpenWhispr is an AI native desktop app for Mac built around meeting transcription. It helps you capture conversations, keep them organized, and review or analyze what was said without breaking your flow during the meeting.",
        date: "2026",
        client: "OpenWhispr",
        services: ["AI", "Desktop", "Product"],
        projectDetails: "Built the product landing, beta download flow, waitlist, and feedback surfaces for an AI native macOS app focused on meeting transcription, storage, and analysis.",
        testimonial: {
            quote: "A focused AI native experience that makes meeting transcription, storage, and review feel simple from day one.",
            author: "OpenWhispr",
            role: "Product"
        },
        thingsIDid: "Developed the marketing site, beta onboarding, waitlist capture, and product messaging for an AI native macOS meeting transcription app.",
        story: {
            hook: "An AI meeting assistant built to keep context when planning, brainstorming, and shipping real work.",
            body: [
                "OpenWhispr started in my own workflow. Planning sessions and brainstorming meetings generate ideas fast, but details slip. I needed a way to capture conversations, keep them organized, and revisit them later for summaries, insights, and follow-ups.",
                "The app transcribes meetings, stores them by category, and helps surface what matters for the next conversation: anticipating questions, tracking decisions, and supporting leadership workflows from deep planning sessions to daily standups.",
                "It is in early beta on Mac, with Windows planned. I built it for myself first and plan to open-source it: a capable meeting assistant I wanted to exist and to share with others working in AI-heavy, context-rich environments.",
            ],
            stack: ["AI", "Desktop", "Product"],
            pullQuote:
                "A focused AI native experience that makes meeting transcription, storage, and review feel simple from day one.",
        },
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
        subtitle: "Part of the team behind Seguros SURA's enterprise SuperApp on iOS and Android, serving millions of insurance customers in Colombia.",
        livePreviewUrl: "https://play.google.com/store/apps/details?id=co.com.sura.seguros&hl=es_CO",
        aboutText: "I contributed to one of Colombia's largest insurance mobile products as part of the SuperApp team at Seguros SURA. It is a cross platform iOS and Android app used at scale for insurance services, benefits, and daily customer operations.",
        date: "2023 – 2025",
        client: "Seguros SURA",
        services: ["Mobile", "Flutter", "iOS", "Android"],
        projectDetails: "Developed mobile features for the SURA SuperApp across Health, Mobility, Home, Wallet, Refunds, and Claims. Supported live operations and incident resolution for end users to keep service continuity and quality high.",
        testimonial: {
            quote: "Strong contribution inside a large mobile product team, shipping features and keeping the live SuperApp stable for users.",
            author: "Seguros SURA",
            role: "Mobile"
        },
        thingsIDid: "Developed mobile features for the SURA SuperApp across Health, Mobility, Home, Wallet, Refunds, and Claims. Supported operations and incident resolution for end users, ensuring service continuity and quality.",
        story: {
            hook: "Shipping inside Seguros SURA's SuperApp, the main mobile surface for insurance businesses at scale.",
            body: [
                "At SURA I joined one of the strongest teams behind the SuperApp: the main channel where multiple insurance businesses connect with customers on iOS and Android. It was an environment with high engineering standards, modern tools, and real operational pressure.",
                "SURA offers many services across the company, and the SuperApp was the front door for customers. Coordinating with every area and business unit was a real challenge, and it demanded close collaboration every day. I was lucky to work with an excellent team, both on the human side and on the technical side.",
                "I also spent meaningful time close to production support and end users, resolving incidents and keeping service continuity when problems reached real people. I worked across several areas at SURA (architecture, mobile assistance, the SuperApp, DOCS/controls/OX, and bolsa), but the SuperApp remains the most memorable. I am grateful to Seguros SURA and to Ceiba Software, the consultancy that supported me through that growth.",
            ],
            stack: ["Mobile", "Flutter", "iOS", "Android"],
            pullQuote:
                "Strong contribution inside a large mobile product team, shipping features and keeping the live SuperApp stable for users.",
        },
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

const buildProjectStory = (project: {
    subtitle: string;
    aboutText: string;
    thingsIDid: string;
    projectDetails: string;
    services: string[];
    outcome?: string;
    testimonial: { quote: string };
    story?: ProjectStoryData;
}): ProjectStoryData => {
    if (project.story) {
        return project.story;
    }

    const outcome = project.outcome ?? project.testimonial.quote;

    return {
        hook: project.subtitle,
        body: [project.aboutText, project.thingsIDid, project.projectDetails, outcome].filter(
            (p) => p.trim().length > 0
        ),
        stack: project.services,
        pullQuote: project.testimonial.quote,
    };
};

const getLiveLinkLabel = (url: string) => {
    try {
        if (new URL(url).hostname.includes("play.google.com")) {
            return "View on Google Play";
        }
    } catch {
        return "Visit live site";
    }
    return "Visit live site";
};

const ProjectLiveLink = ({ url }: { url: string }) => (
    <GradientButton href={url} external>
        <span className="text-base font-semibold leading-[19px] tracking-[-0.64px] text-stone-900 font-dm_sans md:text-lg md:tracking-[-0.72px]">
            {getLiveLinkLabel(url)}
        </span>
        <ExternalLink className="h-[17px] w-[17px] shrink-0 text-stone-900 md:h-[19px] md:w-[19px]" aria-hidden />
    </GradientButton>
);

const projectDetailStyles = `
.project-detail-hero {
  font-size: 12px;
  box-sizing: border-box;
  place-content: center;
  align-items: center;
  background-color: rgba(75, 251, 186, 0.7);
  display: flex;
  flex: 0 0 auto;
  flex-flow: row;
  gap: 10px;
  height: min-content;
  overflow: clip;
  padding: 200px 30px 120px;
  position: relative;
  width: 100%;
}
.project-detail-hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid rgb(29, 29, 29);
  pointer-events: none;
}
.project-detail-hero-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  gap: 50px;
  overflow: visible;
}
.project-detail-hero-text {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 25px;
  overflow: visible;
  z-index: 1;
}
.project-detail-hero-badge {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 5px 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  border: 2px solid rgb(29, 29, 29);
}
.project-detail-hero-title {
  font-family: "Cabinet Grotesk", sans-serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -0.44px;
  color: rgb(29, 29, 29);
  text-align: center;
  margin: 0;
  padding: 0;
}
@media (max-width: 767px) {
  .project-detail-hero-title {
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -0.36px;
  }
}
.project-detail-hero-subtitle {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: rgb(29, 29, 29);
  text-align: center;
  margin: 0;
  padding: 0;
  max-width: 650px;
  width: 100%;
}
`;

const PROJECT_CAROUSEL_BTN_CLASS =
    "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-none bg-yellow-300 cursor-pointer md:h-[50px] md:w-[50px]";

const ProjectDetailContent = ({
    project,
    livePreviewUrl,
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
            img.src = src;
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
                        <ProjectLiveLink url={livePreviewUrl!} />
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
                                            src={image}
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
                            ? "Tap an image to view it in full size"
                            : "Tap the image to view it in full size"}
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
    const project = slug != null && slug !== "" ? projects[slug] : null;
    const hasLivePreview = Boolean(project?.livePreviewUrl && project.livePreviewUrl !== "#");

    if (!project) {
        return (
            <div className="text-black text-xs font-sans_serif min-h-screen flex items-center justify-center bg-neutral-100">
                <div className="box-border caret-transparent">
                    <Header />
                    <div className="flex flex-col items-center justify-center gap-6 px-6 py-20">
                        <h1 className="text-stone-900 text-3xl font-bold font-cabinet_grotesk">Project Not Found</h1>
                        <p className="text-stone-700 text-lg font-dm_sans">The project you're looking for doesn't exist.</p>
                        <Link to="/projects" className="text-blue-700 font-dm_sans font-semibold hover:underline">← Back to Projects</Link>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }

    return (
        <>
            <style>{projectDetailStyles}</style>
            <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
                <div className="box-border caret-transparent">
                    <Header />

                    {/* Hero Section - same design as /projects and /planes */}
                    <section className="project-detail-hero" data-border="true">
                        <div className="project-detail-hero-container">
                            <div className="project-detail-hero-text">
                                <div className="project-detail-hero-badge">
                                    <div className="w-[11px] h-3 flex-shrink-0 flex items-center justify-center">
                                        <img src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg" alt="" className="w-full h-full" />
                                    </div>
                                    <p className="font-dm_sans text-[13px] font-black tracking-widest uppercase text-stone-900">
                                        Project
                                    </p>
                                </div>
                                <div className="relative flex flex-col items-center justify-start w-full gap-6">
                                    <h1 className="project-detail-hero-title">{project.title}</h1>
                                    <p className="project-detail-hero-subtitle">{project.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Image carousel */}
                    <ProjectDetailContent
                        project={project}
                        livePreviewUrl={hasLivePreview ? project.livePreviewUrl : undefined}
                    />

                    <ProjectStory story={buildProjectStory(project)} />

                    <Footer />
                </div>
            </div>
        </>
    );
};

