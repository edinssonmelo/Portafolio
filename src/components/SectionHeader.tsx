import { typographyClasses } from "@/config/designTokens";

export type SectionHeaderProps = {
  iconUrl: string;
  label: string;
  title?: string;
  description?: string;
  showBreak?: boolean;
  align?: "center" | "start";
  variant?: string;
};

const badgeClassName =
  "relative inline-flex items-center justify-center gap-1 rounded-[20px] border-2 border-stone-900 bg-white px-4 py-1.5";

export const SectionHeader = (props: SectionHeaderProps) => {
  const align = props.align ?? "center";
  const alignClass =
    align === "start" ? "items-start text-left" : "items-center text-center";

  return (
    <div
      className={`relative flex w-full flex-col gap-4 overflow-visible md:gap-5 ${alignClass} ${props.variant ?? ""}`}
    >
      <div className="relative z-[2] shrink-0">
        <div className={badgeClassName}>
          <div className="relative h-3 w-[11px] shrink-0">
            <img src={props.iconUrl} alt="" className="h-full w-full" />
          </div>
          <p className="whitespace-nowrap font-dm_sans text-[13px] font-black uppercase leading-[23px] tracking-[0.65px] text-stone-900">
            {props.label}
          </p>
        </div>
      </div>
      {props.title && (
        <div className={`relative z-[1] flex w-full flex-col justify-start gap-3 md:gap-4 ${alignClass}`}>
          <h2
            className={`break-words ${typographyClasses.sectionTitle} ${align === "start" ? "text-left" : "text-center"}`}
          >
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
          {props.description ? (
            <p
              className={`${typographyClasses.sectionDesc} ${align === "start" ? "text-left" : "text-center"}`}
            >
              {props.description}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
};
