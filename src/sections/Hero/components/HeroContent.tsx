import { Badge } from "@/components/Badge";
import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroButton } from "@/sections/Hero/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="relative z-10 flex w-full min-w-0 flex-col items-center gap-10 min-[1104px]:items-start min-[1104px]:gap-8 lg:gap-10">
      <div className="flex w-full min-w-0 max-w-[700px] flex-col items-center gap-6 min-[1104px]:items-start lg:max-w-[740px]">
        <Badge />
        <HeroText />
      </div>
      <HeroButton />
    </div>
  );
};
