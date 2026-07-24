import { Badge } from "@/components/Badge";
import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroButton } from "@/sections/Hero/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 py-4 md:items-start md:gap-6 md:py-0 lg:flex-1">
      <div className="flex w-full max-w-[700px] flex-col items-center gap-5 md:items-start md:gap-4">
        <Badge />
        <HeroText />
      </div>
      <HeroButton />
    </div>
  );
};
