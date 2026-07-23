export type SectionHeaderProps = {
  iconUrl: string;
  label: string;
  title?: string;
  showBreak?: boolean;
  variant: string;
};

const badgeClassName =
  "relative inline-flex items-center justify-center gap-1 rounded-[20px] border-2 border-stone-900 bg-white px-4 py-1.5";

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div
      className={`relative flex w-full flex-col items-center gap-6 overflow-visible ${props.variant}`}
    >
      <div className="relative z-[2] shrink-0">
        <div className={badgeClassName}>
          <div className="relative h-3 w-[11px] shrink-0">
            <img
              src={props.iconUrl}
              alt=""
              className="h-full w-full"
            />
          </div>
          <p className="text-stone-900 text-[13px] font-black tracking-[0.65px] leading-[23px] uppercase font-dm_sans whitespace-nowrap">
            {props.label}
          </p>
        </div>
      </div>
      {props.title && (
        <div className="relative z-[1] flex w-full flex-col justify-start">
          <h2 className="text-stone-900 text-4xl font-bold tracking-[-0.36px] leading-[42px] break-words text-center font-dm_sans md:text-[44px] md:tracking-[-0.44px] md:leading-[50px]">
            {props.showBreak ? (
              <>
                {props.title.split("<br />")[0]}
                <br />
                {props.title.split("<br />")[1]}
              </>
            ) : (
              props.title
            )}
          </h2>
        </div>
      )}
    </div>
  );
};
