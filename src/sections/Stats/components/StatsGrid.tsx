import { StatItem } from "@/sections/Stats/components/StatItem";

export const StatsGrid = () => {
  return (
    <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-[30px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[600px] gap-y-[30px] w-px z-[1] p-[60px] rounded-[20px] md:gap-x-5 md:flex-row md:max-w-[900px] md:gap-y-5 md:p-[90px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[20px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif">
      <StatItem
        value="100"
        suffix="%"
        description="Satisfied happy customers"
      />
      <StatItem
        value="8"
        description={
          <>
            Years of work
            <br />
            experience
          </>
        }
      />
      <StatItem
        value="+50"
        description={
          <>
            Successful
            <br />
            projects done
          </>
        }
      />
      <StatItem
        value="+10"
        description={
          <>
            Software Awards
            <br />
            Received
          </>
        }
      />
    </div>
  );
};
