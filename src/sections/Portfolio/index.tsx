import { layoutClasses } from "@/config/designTokens";
import { SectionHeader } from "@/components/SectionHeader";
import { GradientButton } from "@/components/GradientButton";
import { PortfolioGrid } from "@/sections/Portfolio/components/PortfolioGrid";

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className={`${layoutClasses.section} ${layoutClasses.sectionNeutral}`}
    >
      <div className={`${layoutClasses.sectionInner} relative`}>
        <SectionHeader
          iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
          label="My Works"
          title="Projects that were genuinely fun to build."
          description="Apps and products I've shipped."
          variant="max-w-[650px] md:max-w-[700px]"
        />
        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[400px] w-[400px] md:block">
          <svg
            className="absolute left-0 top-0 h-[280px] w-[300px] blur-[100px] md:h-[340px] md:w-[377px]"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(220, 255, 49, 0.4)"
            />
          </svg>
          <svg
            className="absolute right-0 top-0 h-[280px] w-[300px] blur-[100px] md:h-[340px] md:w-[377px]"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(127, 230, 217, 0.4)"
            />
          </svg>
        </div>
        <PortfolioGrid limit={4} enableHoverGallery />
        <div className="relative z-10 flex w-full flex-col items-center">
          <GradientButton to="/projects">
            <span className="font-dm_sans text-lg font-semibold leading-[19px] tracking-[-0.72px] text-stone-900">
              See All Works
            </span>
          </GradientButton>
        </div>
      </div>
    </section>
  );
};
