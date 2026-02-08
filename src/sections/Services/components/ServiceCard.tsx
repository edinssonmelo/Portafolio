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
      {/* Card Container - matches HTML exactly */}
      <div
        className="relative flex flex-row items-start gap-[20px] p-[30px] w-full rounded-[20px] overflow-hidden"
        style={{
          border: '2px solid rgb(29, 29, 29)',
          backgroundColor: 'rgb(245, 245, 245)',
        }}
      >
        {/* Icon Container */}
        <div className="relative shrink-0 h-[74px] w-[74px]">
          <div
            className="relative flex items-center justify-center h-full w-full rounded-[50px]"
            style={{
              border: '2px solid rgb(29, 29, 29)',
              backgroundColor: 'rgb(255, 255, 255)',
            }}
          >
            <div className={`relative shrink-0 h-[34px] ${props.iconVariant || 'w-[34px]'}`}>
              <img
                src={props.iconUrl}
                alt={props.iconAlt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Text Wrapper */}
        <div className="relative flex flex-col items-start gap-[10px] flex-1 min-w-0">
          {/* Title */}
          <div className="relative w-full">
            <h3 className="text-stone-900 text-xl font-bold tracking-[-0.5px] leading-[30px] whitespace-nowrap font-cabinet_grotesk">
              {props.title}
            </h3>
          </div>

          {/* Description */}
          <div className="relative w-full">
            <p className="text-stone-900 text-lg leading-[30px] break-words font-dm_sans">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
