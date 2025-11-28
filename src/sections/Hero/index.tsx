import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";

export const Hero = () => {
  return (
    <section className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full pt-20 px-[30px] scroll-mt-10 md:pt-[100px] md:scroll-mt-0 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:border-b-2 after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[100px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[100px] w-px md:gap-x-0 md:flex-row md:gap-y-0">
        <div className="relative content-center items-center box-border caret-transparent gap-x-1.5 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-1.5 w-full md:gap-x-20 md:basis-0 md:flex-row md:grow md:gap-y-20 md:w-px">
          <HeroContent />
          <HeroImage />
          <div className="static box-content caret-black shrink h-auto pointer-events-auto w-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[55px] md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:right-[-51px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[60px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-[101px]"></div>
        </div>
      </div>
    </section>
  );
};
