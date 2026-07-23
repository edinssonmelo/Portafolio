export type StatItemProps = {
  value: string;
  suffix?: string;
  description: React.ReactNode;
};

export const StatItem = (props: StatItemProps) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-[5px] md:grow md:basis-0 md:gap-2.5">
      <div className="flex items-baseline justify-center text-center">
        <span className="text-stone-900 text-[50px] font-bold leading-[50px] tracking-[-0.5px] text-nowrap font-cabinet_grotesk">
          {props.value}
        </span>
        {props.suffix ? (
          <span className="text-stone-900 text-[50px] font-bold leading-[50px] tracking-[-0.5px] text-nowrap font-cabinet_grotesk">
            {props.suffix}
          </span>
        ) : null}
      </div>
      <div className="relative flex w-full shrink-0 flex-col justify-start break-words">
        <p className="text-stone-900 text-lg leading-6 break-words text-center font-dm_sans">
          {props.description}
        </p>
      </div>
    </div>
  );
};
