import { FAQAccordion } from "@/sections/FAQ/components/FAQAccordion";

export const FAQ = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center max-w-[700px] gap-y-5 w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full z-[1]">
          <h3 className="text-stone-900 text-3xl font-bold box-border caret-transparent tracking-[-0.3px] leading-9 break-words text-center font-cabinet_grotesk md:text-[38px] md:tracking-[-0.38px] md:leading-[44px]">
            Have questions?
          </h3>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] break-words text-center font-dm_sans">
            I&#39;ve gathered common questions and their answers to make your
            experience smoother. If you can&#39;t find what you&#39;re looking
            for, feel free to reach out to me.
          </p>
        </div>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-[70px] flex shrink-0 h-min justify-center gap-y-[70px] w-full overflow-hidden">
        <div className="relative box-border caret-transparent basis-0 grow shrink-0 w-px z-[1]">
          <div className="box-border caret-transparent">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};
