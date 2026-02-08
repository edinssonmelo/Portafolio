import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import { PortfolioGrid } from "@/sections/Portfolio/components/PortfolioGrid";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full px-[30px] py-[100px] scroll-mt-10 md:py-[150px] md:scroll-mt-0">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[50px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[50px] w-px">
        <SectionHeader
          iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
          label="My Works"
          title="Check out some of our awesome projects with creative ideas."
          variant="relative content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center max-w-[650px] gap-y-[25px] w-full overflow-hidden md:max-w-[700px]"
        />
        <div className="absolute box-border caret-transparent shrink-0 h-[760px] w-[625px] right-0 bottom-[15px]">
          {/* Yellow-green gradient ellipse with blur */}
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
          {/* Cyan/turquoise gradient ellipse with blur */}
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
        <PortfolioGrid />
        <div className="static box-content caret-black shrink h-auto pointer-events-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[83px] md:left-[-43px] md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[92px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:-top-1">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[81px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[89px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0.5 md:top-px">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-20.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
        </div>
        <div className="static box-content caret-black shrink h-auto pointer-events-auto w-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[41px] md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:right-[-5px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-46px] md:w-[39px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[37px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[35px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0.5 md:top-0.5">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-21.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-[70px] flex flex-col shrink-0 h-min justify-center gap-y-[70px] w-full pt-0 md:pt-2.5">
          <div className="relative box-border caret-transparent shrink-0">
            <button className="relative content-center items-center bg-transparent caret-transparent gap-x-2.5 flex flex-col h-min justify-center gap-y-2.5 text-center w-min p-0">
              <Link
                to="/projects"
                className="relative text-blue-700 content-center items-center bg-white box-border caret-transparent gap-x-[7px] flex shrink-0 h-min justify-center gap-y-[7px] w-min z-[5] px-[30px] py-[18px] rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif"
              >
                <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                  <p className="text-stone-900 text-lg font-semibold box-border caret-transparent tracking-[-0.72px] leading-[19px] text-left text-nowrap font-dm_sans">
                    See All Works
                  </p>
                </div>
              </Link>
              <div className="absolute bg-[conic-gradient(rgb(126,230,216)_0deg,rgb(220,255,49)_360deg)] box-border caret-transparent shrink-0 h-full w-full rounded-[10px] left-0 top-1.5 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
