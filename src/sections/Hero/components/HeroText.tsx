export const HeroText = () => {
  return (
    <div className="relative flex w-full max-w-[570px] flex-col items-center justify-center gap-4 py-2 text-center md:max-w-[560px] md:items-start md:gap-3 md:text-left">
      <div className="w-full">
        <h1 className="font-cabinet_grotesk text-[28px] font-bold leading-tight text-stone-900 sm:text-[32px] md:text-5xl md:leading-[1.1]">
          <span className="block md:whitespace-nowrap">I&apos;m Edinsson Melo.</span>
          <span className="block md:whitespace-nowrap">AI Product Builder</span>
        </h1>
      </div>
      <div className="w-full space-y-1">
        <p className="font-dm_sans text-base leading-relaxed text-stone-900 md:text-xl md:leading-8">
          First and foremost, I thank God.
        </p>
        <p className="font-dm_sans text-base leading-relaxed text-stone-900 md:text-xl md:leading-8">
          All glory and honor belong to Him.
        </p>
      </div>
    </div>
  );
};
