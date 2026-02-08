import { TestimonialCarousel } from "@/sections/Testimonials/components/TestimonialCarousel";

export const Testimonials = () => {
  return (
    <section className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full px-[30px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex basis-0 grow shrink-0 h-min justify-center max-w-[1140px] gap-y-0 w-px z-[1]">
        <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-[25px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[600px] gap-y-[25px] w-px z-[1] rounded-[20px] md:max-w-[900px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[20px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif">
          <div className="relative box-border caret-transparent shrink-0 w-full">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-neutral-100 box-border caret-transparent shrink-0 h-3/6 w-full z-0 overflow-hidden left-[0%] top-0 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:border-b-2 after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif"></div>
    </section>
  );
};
