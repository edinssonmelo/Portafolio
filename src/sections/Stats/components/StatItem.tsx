export type StatItemProps = {
  value: string;
  suffix: string;
  description: React.ReactNode;
  variant: string;
};

export const StatItem = (props: StatItemProps) => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-[5px] flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-[5px] w-full overflow-hidden md:gap-x-2.5 md:basis-0 md:grow md:gap-y-2.5 md:w-px">
      <div className="relative box-border caret-transparent shrink-0">
        <div className={` ${props.variant}`}>
          {props.variant ===
            "items-center box-border caret-transparent gap-x-0 flex justify-center gap-y-0" ||
          props.variant === "box-border caret-transparent contents" ? (
            <>
              <span className=" text-white text-[50px] font-bold self-baseline caret-transparent block tracking-[-0.5px] leading-[50px] text-left text-nowrap font-cabinet_grotesk"></span>
              <span className=" text-stone-900 text-[50px] font-bold self-baseline caret-transparent block tracking-[-0.5px] leading-[50px] text-center text-nowrap font-cabinet_grotesk">
                {props.value}
              </span>
              <span className=" text-stone-900 text-[50px] font-bold self-baseline caret-transparent block tracking-[-0.5px] leading-[50px] text-left text-nowrap font-cabinet_grotesk">
                {props.suffix}
              </span>
            </>
          ) : (
            <div className=" [align-items:normal] box-content caret-black gap-x-[normal] block justify-normal gap-y-[normal] md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-0 md:flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <span className=" text-black text-base font-normal self-auto caret-black inline tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-white md:text-[50px] md:font-bold md:self-baseline md:aspect-auto md:caret-transparent md:block md:tracking-[-0.5px] md:leading-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk"></span>
              <span className=" text-black text-base font-normal self-auto caret-black inline tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-stone-900 md:text-[50px] md:font-bold md:self-baseline md:aspect-auto md:caret-transparent md:block md:tracking-[-0.5px] md:leading-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
                {props.value}
              </span>
              <span className=" text-black text-base font-normal self-auto caret-black inline tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-stone-900 md:text-[50px] md:font-bold md:self-baseline md:aspect-auto md:caret-transparent md:block md:tracking-[-0.5px] md:leading-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
                {props.suffix}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
        <p className="text-stone-900 text-lg box-border caret-transparent leading-6 break-words text-center font-dm_sans">
          {props.description}
        </p>
      </div>
    </div>
  );
};
