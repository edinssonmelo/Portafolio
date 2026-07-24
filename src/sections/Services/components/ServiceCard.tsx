import { typographyClasses } from "@/config/designTokens";

export type ServiceCardProps = {
  iconUrl: string;
  iconAlt: string;
  iconVariant: string;
  title: string;
  description: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="h-full w-full">
      <div
        className="relative flex w-full flex-row items-start gap-3 rounded-[20px] border-2 border-stone-900 bg-neutral-100 p-4 md:gap-4 md:p-5"
      >
        <div className="relative h-12 w-12 shrink-0 md:h-14 md:w-14">
          <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-stone-900 bg-white">
            <div
              className={`relative h-6 w-6 shrink-0 md:h-7 md:w-7 ${props.iconVariant || "md:w-7"}`}
            >
              <img
                src={props.iconUrl}
                alt={props.iconAlt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col items-start gap-1.5 md:gap-2">
          <h3 className={typographyClasses.cardTitleSm}>
            {props.title}
          </h3>
          <p className={`break-words ${typographyClasses.body}`}>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
