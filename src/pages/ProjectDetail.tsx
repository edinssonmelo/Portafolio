import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { useParams, Link } from "react-router-dom";

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
    }
};

export const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? projects[slug] : null;

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:underline">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
            <div className="box-border caret-transparent">
                <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 flex flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-clip">
                    <Header />

                    {/* Hero Section */}
                    <section className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 flex flex-col h-min justify-start gap-y-0 w-full px-[30px] py-[100px] md:py-[150px]">
                        <div className="relative content-center items-center box-border caret-transparent gap-x-[50px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[50px] w-px">
                            <div className="relative content-center items-center box-border caret-transparent gap-x-[50px] flex flex-col shrink-0 h-min justify-start gap-y-[50px] w-full">
                                {/* Text Wrapper */}
                                <div className="relative content-center items-start box-border caret-transparent gap-x-[30px] flex flex-col shrink-0 h-min justify-start gap-y-[30px] w-full">
                                    <div className="relative content-center items-start box-border caret-transparent gap-x-[20px] flex flex-col shrink-0 h-min justify-start gap-y-[20px] w-full">
                                        <h2 className="text-black text-4xl md:text-5xl font-bold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-left font-cabinet_grotesk">
                                            {project.title}
                                        </h2>
                                        <p className="text-black text-lg md:text-xl box-border caret-transparent leading-[30px] text-left font-dm_sans">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <div className="relative box-border caret-transparent shrink-0">
                                        <button className="relative content-center items-center bg-transparent caret-transparent gap-x-2.5 flex flex-col h-min justify-center gap-y-2.5 text-center w-min p-0">
                                            <a
                                                href={project.livePreviewUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative text-blue-700 content-center items-center bg-white box-border caret-transparent gap-x-[7px] flex shrink-0 h-min justify-center gap-y-[7px] w-min z-10 px-[30px] py-[18px] rounded-[10px] border-2 border-solid border-stone-900"
                                            >
                                                <p className="text-stone-900 text-lg font-semibold box-border caret-transparent tracking-[-0.72px] leading-[19px] text-left font-dm_sans">
                                                    Live Preview
                                                </p>
                                            </a>
                                            <div className="absolute bg-[conic-gradient(rgb(126,230,216)_0deg,rgb(220,255,49)_360deg)] box-border caret-transparent shrink-0 h-full w-full rounded-[10px] left-0 top-1.5"></div>
                                        </button>
                                    </div>
                                </div>

                                {/* About Section */}
                                <div className="relative content-center items-start box-border caret-transparent gap-x-[30px] flex flex-col shrink-0 h-min justify-start gap-y-[30px] w-full">
                                    <div className="relative content-center items-start box-border caret-transparent gap-x-[20px] flex flex-col shrink-0 h-min justify-start gap-y-[20px] w-full">
                                        <h2 className="text-black text-3xl md:text-4xl font-bold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-left font-cabinet_grotesk">
                                            About the project
                                        </h2>
                                        <p className="text-black text-lg box-border caret-transparent leading-[30px] text-left font-dm_sans">
                                            {project.aboutText}
                                        </p>
                                    </div>

                                    {/* Details */}
                                    <div className="relative content-center items-start box-border caret-transparent gap-x-[40px] flex flex-col shrink-0 h-min justify-start gap-y-[40px] w-full md:flex-row md:gap-x-[60px]">
                                        <div className="relative content-center items-start box-border caret-transparent gap-x-[10px] flex flex-col shrink-0 h-min justify-start gap-y-[10px] w-full">
                                            <h4 className="text-black text-lg font-bold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-left font-cabinet_grotesk">
                                                Date:
                                            </h4>
                                            <p className="text-black text-lg box-border caret-transparent leading-[30px] text-left font-dm_sans">
                                                {project.date}
                                            </p>
                                        </div>
                                        <div className="relative content-center items-start box-border caret-transparent gap-x-[10px] flex flex-col shrink-0 h-min justify-start gap-y-[10px] w-full">
                                            <h4 className="text-black text-lg font-bold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-left font-cabinet_grotesk">
                                                Client:
                                            </h4>
                                            <p className="text-black text-lg box-border caret-transparent leading-[30px] text-left font-dm_sans">
                                                {project.client}
                                            </p>
                                        </div>
                                        <div className="relative content-center items-start box-border caret-transparent gap-x-[10px] flex flex-col shrink-0 h-min justify-start gap-y-[10px] w-full">
                                            <h4 className="text-black text-lg font-bold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-left font-cabinet_grotesk">
                                                Services:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.services.map((service, index) => (
                                                    <span key={index} className="text-black text-lg box-border caret-transparent leading-[30px] font-dm_sans">
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Post Wrapper Section */}
                    <section className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 flex flex-col h-min justify-start gap-y-0 w-full px-[30px] pb-[100px]">
                        <div className="relative content-center items-center box-border caret-transparent gap-x-[50px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[50px] w-px">
                            <div className="relative content-center items-start box-border caret-transparent gap-x-[50px] flex flex-col shrink-0 h-min justify-start gap-y-[50px] w-full">
                                {/* Main Image */}
                                <div className="relative aspect-[1297/905] box-border caret-transparent shrink-0 h-auto w-full overflow-hidden rounded-[20px] border-2 border-solid border-stone-900">
                                    <img
                                        src={project.mainImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>

                                {/* Post Inner Content */}
                                <div className="relative content-center items-start box-border caret-transparent gap-x-[40px] flex flex-col shrink-0 h-min justify-start gap-y-[40px] w-full">
                                    {/* Project Details */}
                                    <div className="relative content-center items-start box-border caret-transparent gap-x-[20px] flex flex-col shrink-0 h-min justify-start gap-y-[20px] w-full">
                                        <h2 className="text-black text-3xl md:text-4xl font-bold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-left font-cabinet_grotesk">
                                            Project Details
                                        </h2>
                                        <p className="text-black text-lg box-border caret-transparent leading-[30px] text-left font-dm_sans">
                                            {project.projectDetails}
                                        </p>
                                    </div>

                                    {/* Testimonial */}
                                    <div className="relative content-center items-center box-border caret-transparent gap-x-[20px] flex flex-col shrink-0 h-min justify-center gap-y-[20px] w-full px-[30px] py-[40px] bg-neutral-50 rounded-[20px] border-2 border-solid border-stone-900">
                                        <div className="relative box-border caret-transparent shrink-0 w-12 h-12">
                                            <svg viewBox="0 0 50 50" className="w-full h-full fill-stone-900">
                                                <path d="M10 20c0-5.5 4.5-10 10-10s10 4.5 10 10c0 5.5-4.5 10-10 10-1.1 0-2.1-.2-3-.5l-5 5 2-5c-2-1-3-3-3-5zm20 0c0-5.5 4.5-10 10-10s10 4.5 10 10c0 5.5-4.5 10-10 10-1.1 0-2.1-.2-3-.5l-5 5 2-5c-2-1-3-3-3-5z" />
                                            </svg>
                                        </div>
                                        <p className="text-black text-lg box-border caret-transparent leading-[30px] text-center font-dm_sans">
                                            "{project.testimonial.quote}"
                                        </p>
                                        <div className="relative content-center items-center box-border caret-transparent gap-x-[10px] flex flex-col shrink-0 h-min justify-center gap-y-[10px] w-full">
                                            <h3 className="text-black text-xl font-bold box-border caret-transparent tracking-[-0.04em] leading-[27px] text-center font-cabinet_grotesk">
                                                {project.testimonial.author}
                                            </h3>
                                            <p className="text-black text-lg box-border caret-transparent leading-[30px] text-center font-dm_sans">
                                                {project.testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Things I Did */}
                                    <div className="relative content-center items-start box-border caret-transparent gap-x-[20px] flex flex-col shrink-0 h-min justify-start gap-y-[20px] w-full">
                                        <h2 className="text-black text-3xl md:text-4xl font-bold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-left font-cabinet_grotesk">
                                            Things I Did
                                        </h2>
                                        <p className="text-black text-lg box-border caret-transparent leading-[30px] text-left font-dm_sans">
                                            {project.thingsIDid}
                                        </p>
                                    </div>
                                </div>

                                {/* Additional Images */}
                                {project.images.length > 0 && (
                                    <div className="relative content-center items-start box-border caret-transparent gap-x-[30px] flex flex-col shrink-0 h-min justify-start gap-y-[30px] w-full">
                                        {project.images.map((image, index) => (
                                            <div key={index} className="relative box-border caret-transparent shrink-0 h-auto w-full overflow-hidden rounded-[20px] border-2 border-solid border-stone-900">
                                                <img
                                                    src={image}
                                                    alt={`${project.title} - Image ${index + 1}`}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Page Navigation */}
                                <div className="relative content-center items-center box-border caret-transparent gap-x-[30px] flex flex-row shrink-0 h-min justify-between gap-y-[30px] w-full pt-[50px] border-t-2 border-solid border-stone-900">
                                    {project.previousProject ? (
                                        <div className="relative content-center items-start box-border caret-transparent gap-x-[20px] flex flex-row shrink-0 h-min justify-start gap-y-[20px] w-full max-w-[300px]">
                                            <Link
                                                to={`/projects/${project.previousProject.slug}`}
                                                className="relative content-center items-center box-border caret-transparent gap-x-[15px] flex flex-row shrink-0 h-min justify-start gap-y-[15px] w-full group"
                                            >
                                                <div className="relative aspect-[1607/852] box-border caret-transparent shrink-0 w-[140px] h-auto overflow-hidden rounded-[10px] border-2 border-solid border-stone-900">
                                                    <img
                                                        src={project.previousProject.image}
                                                        alt={project.previousProject.title}
                                                        className="w-full h-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="relative content-center items-start box-border caret-transparent gap-x-[5px] flex flex-col shrink-0 h-min justify-center gap-y-[5px] w-full">
                                                    <h4 className="text-black text-sm font-semibold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-left font-cabinet_grotesk group-hover:text-yellow-300 transition-colors">
                                                        ← Previous Post
                                                    </h4>
                                                    <h4 className="text-black text-lg font-bold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-left font-cabinet_grotesk group-hover:text-yellow-300 transition-colors">
                                                        {project.previousProject.title}
                                                    </h4>
                                                </div>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                    {project.nextProject ? (
                                        <div className="relative content-center items-end box-border caret-transparent gap-x-[20px] flex flex-row shrink-0 h-min justify-end gap-y-[20px] w-full max-w-[300px] ml-auto">
                                            <Link
                                                to={`/projects/${project.nextProject.slug}`}
                                                className="relative content-center items-center box-border caret-transparent gap-x-[15px] flex flex-row shrink-0 h-min justify-end gap-y-[15px] w-full group"
                                            >
                                                <div className="relative content-center items-end box-border caret-transparent gap-x-[5px] flex flex-col shrink-0 h-min justify-center gap-y-[5px] w-full">
                                                    <h4 className="text-black text-sm font-semibold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-right font-cabinet_grotesk group-hover:text-yellow-300 transition-colors">
                                                        Next Post →
                                                    </h4>
                                                    <h4 className="text-black text-lg font-bold box-border caret-transparent tracking-[-0.04em] leading-[normal] text-right font-cabinet_grotesk group-hover:text-yellow-300 transition-colors">
                                                        {project.nextProject.title}
                                                    </h4>
                                                </div>
                                                <div className="relative aspect-[1607/852] box-border caret-transparent shrink-0 w-[140px] h-auto overflow-hidden rounded-[10px] border-2 border-solid border-stone-900">
                                                    <img
                                                        src={project.nextProject.image}
                                                        alt={project.nextProject.title}
                                                        className="w-full h-full object-cover object-center"
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

