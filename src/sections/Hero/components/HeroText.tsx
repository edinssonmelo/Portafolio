export const HeroText = () => {
  return (
    <div className="relative flex w-full max-w-[570px] flex-col items-center justify-center gap-5 py-[15px] text-center md:max-w-[620px] md:items-start md:gap-3 md:text-left">
      <div className="w-full">
        <h1 className="text-[28px] font-bold leading-tight text-stone-900 font-cabinet_grotesk sm:text-[32px] md:text-[62px] md:tracking-[-0.62px] md:leading-[68px]">
          <span className="block md:whitespace-nowrap">I&apos;m Edinsson Melo.</span>
          <span className="block md:whitespace-nowrap">AI Product Builder</span>
        </h1>
      </div>
      <div className="w-full space-y-1 md:space-y-0">
        <p className="text-base leading-relaxed text-stone-900 font-dm_sans md:text-2xl md:leading-9">
          First and foremost, I thank God.
        </p>
        <p className="text-base leading-relaxed text-stone-900 font-dm_sans md:text-2xl md:leading-9">
          All glory and honor belong to Him.
        </p>
      </div>
    </div>
  );
};
