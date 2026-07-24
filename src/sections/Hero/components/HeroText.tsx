import { typographyClasses } from "@/config/designTokens";

export const HeroText = () => {
  return (
    <div className="relative flex w-full max-w-[570px] flex-col items-center justify-center gap-5 py-[15px] text-center md:max-w-[640px] md:items-start md:gap-4 md:text-left">
      <div className="w-full">
        <h1 className={typographyClasses.heroTitle}>
          I&apos;m Edinsson Melo, an AI Product Builder
        </h1>
      </div>
      <div className="w-full space-y-1">
        <p className={typographyClasses.heroLead}>
          First and foremost, I thank God.
        </p>
        <p className={typographyClasses.heroLead}>
          All glory and honor belong to Him.
        </p>
      </div>
    </div>
  );
};
