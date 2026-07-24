import { layoutClasses } from "@/config/designTokens";
import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";

export const Hero = () => {
  return (
    <section
      id="home"
      className={`${layoutClasses.section} ${layoutClasses.sectionNeutral} pb-12 md:pb-16 after:absolute after:inset-x-0 after:top-0 after:h-full after:border-b-2 after:border-stone-900 after:content-['']`}
    >
      <div className={`${layoutClasses.sectionInner} md:flex-row md:items-center md:justify-between md:gap-10`}>
        <div className="relative flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-12 lg:gap-16">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};
