import { typographyClasses } from "@/config/designTokens";

export type StatItemProps = {
  value: string;
  suffix?: string;
  description: React.ReactNode;
};

export const StatItem = (props: StatItemProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-1 text-center md:gap-1.5">
      <div className="flex items-baseline justify-center">
        <span className={typographyClasses.statValue}>
          {props.value}
        </span>
        {props.suffix ? (
          <span className={typographyClasses.statValue}>
            {props.suffix}
          </span>
        ) : null}
      </div>
      <p className="font-dm_sans text-sm leading-snug text-stone-900 md:text-base md:leading-relaxed">
        {props.description}
      </p>
    </div>
  );
};
