import { Badge } from "@/components/Badge";
import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroButton } from "@/sections/Hero/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-[49px] flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-[49px] w-full py-[50px] md:content-start md:items-start md:gap-x-2.5 md:basis-0 md:grow md:gap-y-2.5 md:w-px md:py-0">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center gap-y-[25px] w-[700px] md:content-start md:items-start">
        <Badge />
        <HeroText />
      </div>
      <HeroButton />
    </div>
  );
};
