import { StatsGrid } from "@/sections/Stats/components/StatsGrid";

export const Stats = () => {
  return (
    <div className="relative content-center items-center bg-[linear-gradient(rgba(220,255,49,0.7)_0%,rgba(75,251,186,0.7)_100%)] box-border caret-transparent gap-x-[70px] flex shrink-0 h-min justify-center gap-y-[70px] w-full px-[30px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[70px] flex basis-0 grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[70px] w-px">
        <StatsGrid />
      </div>
      <div className="absolute bg-white box-border caret-transparent shrink-0 h-3/6 w-full z-0 overflow-hidden left-[0%] top-0"></div>
    </div>
  );
};
