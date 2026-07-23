import { PortfolioCard } from "@/sections/Portfolio/components/PortfolioCard";

const PROJECTS = [
  {
    href: "/projects/declaramelo",
    imageUrl: "/projects/declaramelo-hero.png",
    imageSizes:
      "max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)",
    imageVariant: "",
    title: "Declaramelo",
    description:
      "Declaramelo helps individuals in Colombia file income tax online with confidence. It combines free self service tools, expert accountant review, and a clear step by step flow to declare before DIAN.",
  },
  {
    href: "/projects/openwhispr",
    imageUrl: "/projects/openwhispr-hero.png",
    imageSizes:
      "max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)",
    imageVariant: "",
    title: "OpenWhispr",
    description:
      "OpenWhispr is an AI native desktop app for Mac built around meeting transcription. It helps you capture conversations, keep them organized, and review or analyze what was said without breaking your flow during the meeting.",
  },
  {
    href: "/projects/bernal-tech-b2b",
    imageUrl: "/projects/bernal-dashboard.png",
    imageSizes:
      "max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)",
    imageVariant: "",
    title: "Bernal Tech B2B",
    description:
      "Bernal Tech B2B connects manufacturing operations with allied buyers in Colombia through secure login, a large product catalog, quotes, orders, analytics, and customer support workflows.",
  },
  {
    href: "/projects/wordjet-ai",
    imageUrl: "/projects/wordjet-landing.png",
    imageSizes:
      "max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)",
    imageVariant: "",
    title: "Wordjet.ai",
    description:
      "Wordjet is an AI assisted writing workspace for marketing teams and agencies. It helps move from research to publishable content with tools for briefs, articles, essays, content planning, and market study workflows.",
  },
  {
    href: "/projects/superapp-mobile",
    imageUrl: "/projects/sura-explora.png",
    imageVariant: "",
    title: "SuperApp Mobile",
    description:
      "I contributed to one of Colombia's largest insurance mobile products as part of the SuperApp team at Seguros SURA, building features across Health, Mobility, Home, Wallet, Refunds, and Claims while supporting live operations for end users.",
  },
  {
    href: "/projects/overup",
    imageUrl: "/projects/overup-hero.png",
    imageSizes:
      "max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)",
    imageVariant: "",
    title: "OverUP",
    description:
      "OverUP is an online store for oversized streetwear in Colombia. The shop brings together brand storytelling, product catalog, product detail pages, and a smooth purchase flow for customers.",
  },
] as const;

export const PortfolioGrid = () => {
  return (
    <div className="relative z-10 grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-[70px]">
      {PROJECTS.map((project) => (
        <PortfolioCard key={project.href} {...project} />
      ))}
    </div>
  );
};
