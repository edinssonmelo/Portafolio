import { GradientButton } from "@/components/GradientButton";
import { ServiceCard } from "@/sections/Services/components/ServiceCard";

const SERVICES = [
  {
    iconUrl: "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-12.svg",
    iconVariant: "md:w-[34px]",
    title: "From Idea to MVP",
    description:
      "I help turn ideas into clear, testable MVPs. We define what matters, build fast, and learn from real users early in the process.",
  },
  {
    iconUrl: "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-13.svg",
    iconVariant: "",
    title: "CTO & Technical Leadership",
    description:
      "Architecture, alignment, and delivery for growing products. Enterprise judgment and startup speed to support sound technical decisions.",
  },
  {
    iconUrl: "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-14.svg",
    iconVariant: "md:w-10",
    title: "Fullstack Development (Web / Mobile)",
    description:
      "Fullstack development with Node.js, React, Python, and cloud. Built to launch fast, test with users, and iterate toward production.",
  },
  {
    iconUrl: "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-15.svg",
    iconVariant: "",
    title: "AI Product Engineering",
    description:
      "LLMs, RAG, agents, and workflow automation inside real products. I design and ship AI features that deliver measurable value.",
  },
] as const;

export const ServiceGrid = () => {
  return (
    <div className="relative flex flex-col items-center gap-8 w-full max-w-[1140px] md:gap-[69px]">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px] lg:gap-[35px]">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            iconUrl={service.iconUrl}
            iconAlt="Icon"
            iconVariant={service.iconVariant}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <GradientButton to="/projects">
        <span className="text-lg font-semibold tracking-[-0.72px] leading-[19px] text-stone-900 font-dm_sans">
          Check Portfolio
        </span>
      </GradientButton>
    </div>
  );
};
