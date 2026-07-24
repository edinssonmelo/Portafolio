import { layoutClasses } from "@/config/designTokens";
import { SectionHeader } from "@/components/SectionHeader";
import { GradientButton } from "@/components/GradientButton";
import { BlurEllipses } from "@/components/BlurEllipses";
import { portfolioEllipses } from "@/config/blurEllipses";
import { PortfolioGrid } from "@/sections/Portfolio/components/PortfolioGrid";

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className={`${layoutClasses.section} ${layoutClasses.sectionNeutral} overflow-hidden`}
    >
      <div className={`${layoutClasses.sectionInner} relative`}>
        <SectionHeader
          iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
          label="My Works"
          title="Projects that were genuinely fun to build."
          variant="max-w-[650px] md:max-w-[700px]"
        />
        <div className="relative w-full">
          <div className="pointer-events-none absolute right-0 top-1/2 z-0 hidden h-[700px] w-[700px] -translate-y-1/2 md:block">
            <BlurEllipses ellipses={portfolioEllipses} />
          </div>
          <div className="pointer-events-none absolute bottom-[-120px] left-1/2 z-0 h-[420px] w-[min(100%,520px)] -translate-x-1/2 md:hidden">
            <BlurEllipses ellipses={portfolioEllipses} />
          </div>
          <div className="relative z-10 flex flex-col items-center gap-10 md:gap-12">
            <PortfolioGrid limit={4} enableHoverGallery />
            <GradientButton to="/projects">
              <span className="font-dm_sans text-lg font-semibold leading-[19px] tracking-[-0.72px] text-stone-900">
                See All Works
              </span>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};
