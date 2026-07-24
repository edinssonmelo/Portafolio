import { StatsGrid } from "@/sections/Stats/components/StatsGrid";

export const Stats = () => {
  return (
    <div className="relative flex w-full shrink-0 justify-center overflow-hidden bg-[linear-gradient(rgba(220,255,49,0.7)_0%,rgba(75,251,186,0.7)_100%)] px-[30px] py-12 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-1/2 bg-neutral-100" />
      <div className="relative z-[1] flex w-full max-w-[1140px] items-center justify-center">
        <StatsGrid />
      </div>
    </div>
  );
};
