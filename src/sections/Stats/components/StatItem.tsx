export type StatItemProps = {
  value: string;
  suffix?: string;
  description: React.ReactNode;
};

export const StatItem = (props: StatItemProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-1 text-center md:gap-1.5">
      <div className="flex items-baseline justify-center">
        <span className="text-3xl font-bold leading-none tracking-tight text-stone-900 font-cabinet_grotesk md:text-4xl">
          {props.value}
        </span>
        {props.suffix ? (
          <span className="text-3xl font-bold leading-none tracking-tight text-stone-900 font-cabinet_grotesk md:text-4xl">
            {props.suffix}
          </span>
        ) : null}
      </div>
      <p className="text-sm leading-snug text-stone-900 font-dm_sans md:text-base">
        {props.description}
      </p>
    </div>
  );
};
