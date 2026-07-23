export type ServiceCardProps = {
  iconUrl: string;
  iconAlt: string;
  iconVariant: string;
  title: string;
  description: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="w-full h-full">
      <div
        className="relative flex flex-row items-start gap-4 p-5 w-full rounded-[20px] md:gap-5 md:p-[30px]"
        style={{
          border: "2px solid rgb(29, 29, 29)",
          backgroundColor: "rgb(245, 245, 245)",
        }}
      >
        <div className="relative shrink-0 h-14 w-14 md:h-[74px] md:w-[74px]">
          <div
            className="relative flex items-center justify-center h-full w-full rounded-full"
            style={{
              border: "2px solid rgb(29, 29, 29)",
              backgroundColor: "rgb(255, 255, 255)",
            }}
          >
            <div
              className={`relative shrink-0 h-7 w-7 md:h-[34px] ${props.iconVariant || "md:w-[34px] w-7"}`}
            >
              <img
                src={props.iconUrl}
                alt={props.iconAlt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-start gap-2 flex-1 min-w-0 md:gap-[10px]">
          <h3 className="text-stone-900 text-lg font-bold tracking-[-0.5px] leading-snug font-cabinet_grotesk md:text-xl md:leading-[30px]">
            {props.title}
          </h3>
          <p className="text-stone-900 text-base leading-relaxed break-words font-dm_sans min-h-[6rem] md:text-lg md:leading-[30px] md:min-h-[120px]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
