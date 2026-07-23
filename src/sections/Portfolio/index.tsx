import { SectionHeader } from "@/components/SectionHeader";
import { GradientButton } from "@/components/GradientButton";
import { PortfolioGrid } from "@/sections/Portfolio/components/PortfolioGrid";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden px-[30px] py-[100px] scroll-mt-10 md:py-[150px] md:scroll-mt-0">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[50px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[50px] w-full">
        <SectionHeader
          iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
          label="My Works"
          title="Projects that inspired me and were genuinely fun to build."
          variant="relative content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center max-w-[650px] gap-y-[25px] w-full overflow-hidden md:max-w-[700px]"
        />
        <div className="hidden md:block absolute z-0 box-border caret-transparent shrink-0 h-[760px] w-[625px] right-0 bottom-[15px] pointer-events-none">
          <svg
            className="absolute bottom-[-282px] box-border caret-transparent blur-[100px] shrink-0 left-[-477px] w-[377px] h-[340px] right-0 top-auto pointer-events-none md:top-[-251px] md:left-[-306px] md:right-[328px] md:bottom-[383px] md:w-[603px] md:h-[628px]"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(220, 255, 49, 0.4)"
            />
          </svg>
          <svg
            className="absolute bottom-[-210px] box-border caret-transparent blur-[100px] shrink-0 right-[-333px] w-[377px] h-[340px] left-0 top-auto pointer-events-none md:top-[-202px] md:left-[126px] md:right-[-97px] md:bottom-[420px] md:w-[596px] md:h-[542px]"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(127, 230, 217, 0.4)"
            />
          </svg>
        </div>
        <div className="hidden md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[83px] md:left-[-43px] md:pointer-events-none md:w-[92px] md:-top-1">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[81px] md:w-[89px] md:left-0.5 md:top-px">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:w-full">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-20.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:w-full md:align-baseline"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[41px] md:pointer-events-none md:right-[-5px] md:top-[-46px] md:w-[39px]">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[37px] md:w-[35px] md:left-0.5 md:top-0.5">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:w-full">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-21.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:w-full md:align-baseline"
              />
            </div>
          </div>
        </div>
        <PortfolioGrid />
        <div className="relative z-10 flex w-full flex-col items-center pt-0 md:pt-2.5">
          <GradientButton to="/projects">
            <span className="text-lg font-semibold tracking-[-0.72px] leading-[19px] text-stone-900 font-dm_sans">
              See All Works
            </span>
          </GradientButton>
        </div>
      </div>
    </section>
  );
};
