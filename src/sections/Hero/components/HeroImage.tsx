import { BlurEllipses } from "@/components/BlurEllipses";
import { heroEllipses } from "@/config/blurEllipses";

export const HeroImage = () => {
  return (
    <div className="relative shrink-0 w-full max-w-[320px] mx-auto min-h-[300px] overflow-visible md:aspect-[0.845455_/_1] md:min-h-0 md:max-w-none md:mx-0 md:w-[595px]">
      <BlurEllipses ellipses={heroEllipses} />
      <div className="absolute z-10 content-center items-center flex shrink-0 h-[200px] justify-center left-1/2 -translate-x-1/2 w-[200px] rounded-full top-1/2 -translate-y-1/2 md:h-[246px] md:w-[246px] md:rounded-[185px] md:left-[calc(50.084%_-_123px)] md:top-[calc(47.4432%_-_123px)] md:translate-x-0 md:translate-y-0 after:absolute after:inset-0 after:rounded-full md:after:rounded-[185px] after:border-2 after:border-neutral-800 after:pointer-events-none">
        <div className="absolute inset-0 rounded-full md:rounded-[185px] overflow-hidden">
          <img
            sizes="(max-width: 768px) 200px, 246px"
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/11.png"
            alt="Edinsson Melo"
            className="h-full w-full object-contain rounded-full md:rounded-[185px]"
          />
        </div>
      </div>
      <div className="hidden md:absolute md:h-[51px] md:w-14 md:left-[394px] md:top-[180px]">
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-5.svg"
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="hidden md:absolute md:h-[43px] md:w-[109px] md:left-[359px] md:top-[397px]">
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-6.svg"
          alt=""
          className="h-full w-full"
        />
      </div>
    </div>
  );
};
