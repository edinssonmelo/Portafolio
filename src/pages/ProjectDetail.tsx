import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    mainImage: string;
    images: string[];
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
        thingsIDid: "I designed and implemented the website structure and layout using Framer's visual canvas and CMS features. I customized components for blog entries and testimonial displays and built responsive sections tailored for performance across devices. I was also responsible for integrating animations that improved user engagement without compromising performance. The final product was delivered on time with a lightweight, future-ready architecture — ready to scale as the brand evolves.",
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
        date: "Dec 10, 2024",
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
        subtitle: "AI-powered document editor for long-form writing. Rich editor with embedded AI for generating, revising, and reviewing content.",
        livePreviewUrl: "#",
        aboutText: "Wordjet.ai is an AI document editor focused on long-form writing. The product combines a rich document editor with deeply-embedded AI capabilities for generating, revising, and reviewing documents.",
        date: "Jan 2025",
        client: "WordJet.ai",
        services: ["Fullstack", "AI"],
        projectDetails: "Built and scaled the document editor and AI integration to support long-form writing workflows.",
        testimonial: {
            quote: "Outstanding execution on the AI editor. It changed how we approach long-form content.",
            author: "WordJet Team",
            role: "Product"
        },
        thingsIDid: "Developed the document editor and AI features for generating, revising, and reviewing content.",
        mainImage: "https://c.animaapp.com/mih2ldgveCT36V/assets/2.avif",
        images: [
            "https://c.animaapp.com/mih2ldgveCT36V/assets/2.avif",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/1.avif",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/7.png",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/10.png"
        ],
        nextProject: { slug: "overup", title: "OverUP", image: "https://c.animaapp.com/mih2ldgveCT36V/assets/1.avif" }
    },
    "overup": {
        title: "OverUP",
        subtitle: "E-commerce store for OverUP, a streetwear clothing brand. Full online shop with catalog and checkout.",
        livePreviewUrl: "#",
        aboutText: "E-commerce store for OverUP, a streetwear clothing brand. Full online shop with catalog, cart, and checkout.",
        date: "2024",
        client: "OverUP",
        services: ["E-commerce", "Web"],
        projectDetails: "Designed and built the e-commerce store for OverUP's streetwear brand.",
        testimonial: {
            quote: "Clean store that reflects our brand. Smooth checkout and catalog.",
            author: "OverUP",
            role: "Brand"
        },
        thingsIDid: "Developed the e-commerce store including catalog, cart, and checkout flow.",
        mainImage: "https://c.animaapp.com/mih2ldgveCT36V/assets/1.avif",
        images: [
            "https://c.animaapp.com/mih2ldgveCT36V/assets/1.avif",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/2.avif",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/7.png",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/10.png"
        ],
        previousProject: { slug: "wordjet-ai", title: "Wordjet.ai", image: "https://c.animaapp.com/mih2ldgveCT36V/assets/2.avif" },
        nextProject: { slug: "tarsix-ai", title: "Tarsix.ai", image: "https://c.animaapp.com/mih2ldgveCT36V/assets/7.png" }
    },
    "tarsix-ai": {
        title: "Tarsix.ai",
        subtitle: "WhatsApp integration platform for building and managing automated conversation flows and chatbots.",
        livePreviewUrl: "#",
        aboutText: "Tarsix.ai is a tool that allows effective integration with WhatsApp to create automated conversation flows and chatbots for businesses.",
        date: "2024",
        client: "Tarsix.ai",
        services: ["Backend", "Integrations", "Automation"],
        projectDetails: "Built the WhatsApp integration and flow engine for automated conversations.",
        testimonial: {
            quote: "Reliable WhatsApp automation. Our support flows run smoothly.",
            author: "Tarsix",
            role: "Product"
        },
        thingsIDid: "Developed the WhatsApp integration and conversation flow engine.",
        mainImage: "https://c.animaapp.com/mih2ldgveCT36V/assets/7.png",
        images: [
            "https://c.animaapp.com/mih2ldgveCT36V/assets/7.png",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/2.avif",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/1.avif",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/10.png"
        ],
        previousProject: { slug: "overup", title: "OverUP", image: "https://c.animaapp.com/mih2ldgveCT36V/assets/1.avif" },
        nextProject: { slug: "superapp-mobile", title: "SuperApp Mobile", image: "https://c.animaapp.com/mih2ldgveCT36V/assets/10.png" }
    },
    "superapp-mobile": {
        title: "SuperApp Mobile",
        subtitle: "Cross-platform iOS/Android app for Seguros SURA: benefits, insurance policies, and the Vivemás program (sports, wellness, points, fitness).",
        livePreviewUrl: "#",
        aboutText: "A multiplatform iOS/Android mobile app offering benefit services for acquiring products or insurance policies at Seguros SURA. Special participation in the Vivemás program for sports incentives, healthy diet, points redemption, and fitness coaching.",
        date: "2023 – 2025",
        client: "Seguros SURA",
        services: ["Mobile", "Flutter", "iOS", "Android"],
        projectDetails: "Developed key mobile features for SURA's SuperApp (Health, Life, Mobility, Home) and led operations and incident resolution for end users. Contributed to the Vivemás program (sports, wellness, points, fitness).",
        testimonial: {
            quote: "Critical role in delivering and maintaining the SuperApp experience for our users.",
            author: "Seguros SURA",
            role: "Mobile"
        },
        thingsIDid: "Developed key mobile features with Flutter; led operations and incident resolution; contributed to Vivemás (sports, wellness, points, fitness).",
        mainImage: "https://c.animaapp.com/mih2ldgveCT36V/assets/10.png",
        images: [
            "https://c.animaapp.com/mih2ldgveCT36V/assets/10.png",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/2.avif",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/1.avif",
            "https://c.animaapp.com/mih2ldgveCT36V/assets/7.png"
        ],
        previousProject: { slug: "tarsix-ai", title: "Tarsix.ai", image: "https://c.animaapp.com/mih2ldgveCT36V/assets/7.png" }
    }
};

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

const CAROUSEL_SLIDES = 3;

const ProjectDetailContent = ({ project }: { project: { title: string; subtitle: string; mainImage: string } }) => {
    const [index, setIndex] = useState(0);
    const image = project.mainImage;

    useEffect(() => {
        const t = setInterval(() => setIndex((i) => (i + 1) % CAROUSEL_SLIDES), 4000);
        return () => clearInterval(t);
    }, []);

    return (
        <section className="relative bg-neutral-100 w-full overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-16">
            <div className="max-w-[800px] mx-auto">
                <div className="relative w-full overflow-hidden rounded-2xl border-2 border-stone-900 bg-stone-200 aspect-[16/10]">
                    {Array.from({ length: CAROUSEL_SLIDES }, (_, i) => (
                        <div
                            key={i}
                            className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(${(i - index) * 100}%)`,
                            }}
                        >
                            <img
                                src={image}
                                alt={`${project.title} - ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => setIndex((i) => (i - 1 + CAROUSEL_SLIDES) % CAROUSEL_SLIDES)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border-2 border-stone-900 flex items-center justify-center hover:bg-white transition-colors"
                        aria-label="Anterior"
                    >
                        <span className="text-stone-900 text-xl font-bold">‹</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setIndex((i) => (i + 1) % CAROUSEL_SLIDES)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border-2 border-stone-900 flex items-center justify-center hover:bg-white transition-colors"
                        aria-label="Siguiente"
                    >
                        <span className="text-stone-900 text-xl font-bold">›</span>
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {Array.from({ length: CAROUSEL_SLIDES }, (_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-stone-900" : "bg-white/80 border border-stone-900"}`}
                                aria-label={`Ir a slide ${i + 1}`}
                            />
                        ))}
                    </div>
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
                                    {hasLivePreview && (
                                        <a
                                            href={project.livePreviewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative z-10 inline-flex items-center justify-center px-6 py-3 rounded-[10px] border-2 border-solid border-stone-900 bg-white text-stone-900 text-base font-semibold font-dm_sans hover:bg-stone-100 transition-colors"
                                        >
                                            Ver proyecto en vivo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Descripción + carrusel (misma imagen 2-3 veces) */}
                    <ProjectDetailContent project={project} />

                    <Footer />
                </div>
            </div>
        </>
    );
};

