import { CTACard } from "@/sections/CTA/components/CTACard";

export const CTA = () => {
  return (
    <section className="relative content-center items-center bg-white box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden pt-[100px] pb-[30px] px-[30px] scroll-mt-10 md:pt-[150px] md:pb-[50px] md:scroll-mt-0">
      <div className="relative content-center items-center box-border caret-transparent gap-x-20 flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-20 w-full md:gap-x-[100px] md:gap-y-[100px]">
        <div className="hidden md:block absolute bottom-[-206px] box-border caret-transparent shrink-0 h-[760px] left-[-103px] w-[625px] pointer-events-none">
          <svg
            className="absolute aspect-[1.108_/_1] bottom-[-282px] box-border caret-transparent blur-[100px] shrink-0 left-[-477px] w-[377px] h-[340px] right-0 top-auto md:aspect-[1.108_/_1] md:right-[-594px] md:top-[-473px] md:w-[377px] md:h-[340px] md:left-auto md:bottom-auto pointer-events-none"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(220, 255, 49, 0.4)"
            />
          </svg>
          <svg
            className="absolute aspect-[1.108_/_1] bottom-[-210px] box-border caret-transparent blur-[100px] shrink-0 right-[-333px] w-[377px] h-[340px] left-0 top-auto md:aspect-[1.108_/_1] md:right-[-135px] md:top-[-473px] md:w-[377px] md:h-[340px] md:left-auto md:bottom-auto pointer-events-none"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(127, 230, 217, 0.4)"
            />
          </svg>
        </div>
        <div className="relative flex w-full flex-col items-center gap-[50px]">
          <div className="relative w-full max-w-[800px]">
            <CTACard />
          </div>
        </div>
        <div className="hidden md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-9 md:pointer-events-none md:w-[33px] md:overflow-hidden md:left-3 md:top-[68px]">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[33px] md:w-[29px] md:left-0.5 md:top-0.5">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:w-full">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-22.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:w-full md:align-baseline"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-11 md:pointer-events-none md:w-[31px] md:overflow-hidden md:-right-5 md:top-[25px]">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[21px] md:w-7 md:left-0.5 md:top-[9px]">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:w-full">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-23.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:w-full md:align-baseline"
              />
            </div>
          </div>
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-10 md:w-[11px] md:left-2.5 md:top-0.5">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:w-full">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-24.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:w-full md:align-baseline"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
