import { StatItem } from "@/sections/Stats/components/StatItem";

export const StatsGrid = () => {
  return (
    <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-[30px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[600px] gap-y-[30px] w-px z-[1] p-[60px] rounded-[20px] md:gap-x-5 md:flex-row md:max-w-[900px] md:gap-y-5 md:p-[90px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[20px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif">
      <StatItem
        value="100"
        suffix="%"
        description="Satisfied happy customers"
        variant="items-center box-border caret-transparent gap-x-0 flex justify-center gap-y-0"
      />
      <StatItem
        value="7"
        suffix=""
        description={
          <>
            Years of work
            <br className="box-border caret-transparent break-words" />
            experience
          </>
        }
        variant="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
      />
      <StatItem
        value="+50"
        suffix=""
        description={
          <>
            Successful
            <br className="box-border caret-transparent break-words" />
            projects done
          </>
        }
        variant="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
      />
      <StatItem
        value="+10"
        suffix=""
        description={
          <>
            Software Awards
            <br className="box-border caret-transparent break-words" />
            Received
          </>
        }
        variant="box-border caret-transparent contents"
      />
    </div>
  );
};
