import { SITE_CONFIG } from '@/config/seo';
import { typographyClasses } from "@/config/designTokens";

export const HeroText = () => {
  return (
    <div className="relative flex w-full max-w-[570px] flex-col items-center justify-center gap-5 py-[15px] text-center md:max-w-[620px] md:items-start md:gap-4 md:text-left">
      <div className="w-full">
        <h1 className={`${typographyClasses.heroTitle} sm:text-[34px] md:text-[3.35rem] md:leading-[1.1]`}>
          <span className="block md:whitespace-nowrap">I&apos;m Edinsson Melo</span>
          <span className="block md:whitespace-nowrap">{SITE_CONFIG.tagline}</span>
        </h1>
      </div>
      <div className="w-full space-y-1">
        <p className={`${typographyClasses.heroLead} md:text-[1.35rem] md:leading-9`}>
          First and foremost, I thank God.
        </p>
        <p className={`${typographyClasses.heroLead} md:text-[1.35rem] md:leading-9`}>
          All glory and honor belong to Him.
        </p>
      </div>
    </div>
  );
};
