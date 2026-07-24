import { BlurEllipses } from "@/components/BlurEllipses";
import { heroEllipses } from "@/config/blurEllipses";

export const HeroImage = () => {
  return (
    <div className="relative mx-auto min-h-[260px] w-full max-w-[280px] shrink-0 overflow-visible md:aspect-[0.845455_/_1] md:min-h-0 md:max-w-none md:w-[480px] lg:w-[520px]">
      <BlurEllipses ellipses={heroEllipses} />
      <div className="absolute left-1/2 top-1/2 z-10 flex h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full md:h-[220px] md:w-[220px] md:translate-x-0 md:translate-y-0 md:rounded-[185px] md:left-[calc(50%_-_110px)] md:top-[calc(47%_-_110px)] after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border-2 after:border-neutral-800 md:after:rounded-[185px]">
        <div className="absolute inset-0 overflow-hidden rounded-full md:rounded-[185px]">
          <img
            sizes="(max-width: 768px) 180px, 220px"
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/11.png"
            alt="Edinsson Melo"
            className="h-full w-full rounded-full object-contain md:rounded-[185px]"
          />
        </div>
      </div>
      <div className="absolute left-[320px] top-[160px] hidden h-[42px] w-12 md:block lg:left-[360px]">
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-5.svg"
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="absolute left-[290px] top-[340px] hidden h-[36px] w-[90px] md:block lg:left-[330px] lg:top-[360px]">
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-6.svg"
          alt=""
          className="h-full w-full"
        />
      </div>
    </div>
  );
};
