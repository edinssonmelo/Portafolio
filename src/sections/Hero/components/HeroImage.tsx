import { BlurEllipses } from "@/components/BlurEllipses";
import { ProfilePortrait } from "@/components/ProfilePortrait";
import { heroEllipses } from "@/config/blurEllipses";

export const HeroImage = () => {
  return (
    <div className="relative mx-auto w-full max-w-[320px] shrink-0 min-h-[300px] overflow-visible min-[1104px]:mx-0 min-[1104px]:aspect-[0.845455_/_1] min-[1104px]:min-h-0 min-[1104px]:max-w-none min-[1104px]:w-[595px]">
      <BlurEllipses ellipses={heroEllipses} />
      <div className="absolute left-1/2 top-1/2 z-10 flex h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full min-[1104px]:left-[calc(50.084%_-_123px)] min-[1104px]:top-[calc(47.4432%_-_123px)] min-[1104px]:h-[246px] min-[1104px]:w-[246px] min-[1104px]:translate-x-0 min-[1104px]:translate-y-0 min-[1104px]:rounded-[185px] after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border-2 after:border-neutral-800 min-[1104px]:after:rounded-[185px]">
        <div className="absolute inset-0 overflow-hidden rounded-full min-[1104px]:rounded-[185px]">
          <ProfilePortrait
            sizes="(max-width: 1103px) 200px, 246px"
            className="rounded-full min-[1104px]:rounded-[185px]"
          />
        </div>
      </div>
      <div className="absolute left-[calc(50%+118px)] top-[calc(50%-125px)] hidden h-[51px] w-14 min-[1104px]:block">
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-5.svg"
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="absolute left-[calc(50%+88px)] top-[calc(50%+35px)] hidden h-[43px] w-[109px] min-[1104px]:block">
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-6.svg"
          alt=""
          className="h-full w-full"
        />
      </div>
    </div>
  );
};
