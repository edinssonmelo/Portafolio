import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex w-full shrink-0 justify-center overflow-hidden border-b-2 border-stone-900 bg-neutral-100 px-[30px] pt-20 scroll-mt-10 md:pt-[100px] md:scroll-mt-0"
    >
      <div className="flex w-full max-w-[1140px] flex-col items-center gap-10 py-8 min-[1104px]:flex-row min-[1104px]:items-center min-[1104px]:justify-between min-[1104px]:gap-x-10 min-[1104px]:py-12 lg:gap-x-14">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};
