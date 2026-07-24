import { SurfaceCard } from "@/components/SurfaceCard";
import { StatItem } from "@/sections/Stats/components/StatItem";

export const StatsGrid = () => {
  return (
    <SurfaceCard className="relative z-[1] w-full max-w-[900px] p-6 md:p-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
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
    </SurfaceCard>
  );
};
