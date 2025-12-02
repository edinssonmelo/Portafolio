import { BlurEllipses } from "@/components/BlurEllipses";
import { heroEllipses } from "@/config/blurEllipses";

export const HeroImage = () => {
  return (
    <div className="relative aspect-[0.845455_/_1] bg-neutral-100 box-border caret-transparent shrink-0 order-1 w-full md:order-none md:w-[595px]">
      <BlurEllipses ellipses={heroEllipses} />
      <div className="box-border caret-transparent contents">
        <div className="absolute content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-[246px] justify-center left-[calc(50%_-_123px)] gap-y-2.5 w-[246px] rounded-[185px] top-9 md:left-[calc(50.084%_-_123px)] md:top-[calc(47.4432%_-_123px)] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-neutral-800 after:rounded-[185px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif">
          <div className="absolute box-border caret-transparent rounded-[185px] inset-0">
            <img
              sizes="246px"
              src="https://c.animaapp.com/mih2ldgveCT36V/assets/11.png"
              alt="Edinsson Melo - AI-First Software Engineer"
              className="aspect-[auto_1024_/_1024] box-border caret-transparent h-full object-contain w-full rounded-[185px]"
            />
          </div>
        </div>
      </div>
      <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[51px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-14 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[394px] md:top-[180px]">
        <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <img
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-5.svg"
            alt="Icon"
            className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          />
        </div>
      </div>
      <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[43px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[109px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[359px] md:top-[397px]">
        <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <img
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-6.svg"
            alt="Icon"
            className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          />
        </div>
      </div>
    </div>
  );
};
