import { AboutImage } from "@/sections/About/components/AboutImage";
import { AboutContent } from "@/sections/About/components/AboutContent";

export const About = () => {
  return (
    <section id="about" className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden pt-[100px] pb-20 px-[30px] md:py-[150px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[70px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[70px] w-full">
        <div className="relative box-border caret-transparent shrink-0 w-full max-w-[280px] mx-auto md:absolute md:h-[760px] md:left-[-26px] md:top-[-150px] md:w-[625px] md:max-w-none">
          {/* Yellow-green gradient ellipse with blur */}
          <svg
            className="hidden md:block absolute aspect-[1.108_/_1] bottom-[-282px] box-border caret-transparent blur-[100px] shrink-0 left-[-477px] w-[377px] h-[340px] right-0 md:aspect-[1.108_/_1] md:left-[-23px] md:w-[377px] md:h-[340px] md:right-auto md:-bottom-5 pointer-events-none"
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
            className="hidden md:block absolute aspect-[1.108_/_1] bottom-[-210px] box-border caret-transparent blur-[100px] shrink-0 right-[-333px] w-[377px] h-[340px] left-0 top-auto md:aspect-[1.108_/_1] md:left-[-23px] md:top-[-98px] md:w-[377px] md:h-[340px] md:right-auto md:bottom-auto pointer-events-none"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(127, 230, 217, 0.4)"
            />
          </svg>
          <AboutImage />
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-[50px] flex flex-col shrink-0 h-min justify-center gap-y-[50px] w-full md:gap-x-[70px] md:flex-row md:gap-y-[70px]">
          <div className="hidden md:block relative aspect-square box-border caret-transparent shrink-0 w-[540px] overflow-clip">
            <div className="absolute aspect-square box-border caret-transparent shrink-0 overflow-clip -left-2.5 top-0 bottom-auto md:bottom-0"></div>
          </div>
          <AboutContent />
          <div className="hidden md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[57px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-29px] md:w-8 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-0"></div>
        </div>
        <div className="hidden md:absolute md:aspect-auto md:bottom-[-91px] md:box-border md:caret-transparent md:shrink-0 md:h-[132px] md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[-14.99999492786973deg] md:w-[81px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[295px]">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[130px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[79px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-px md:top-0.5">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-16.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
