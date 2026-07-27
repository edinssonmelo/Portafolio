import { useTranslation } from 'react-i18next';
import { typographyClasses } from "@/config/designTokens";

export const HeroText = () => {
  const { t } = useTranslation('hero');

  return (
    <div className="relative flex w-full max-w-[570px] flex-col items-center justify-center gap-5 py-[15px] text-center min-[1104px]:max-w-[620px] min-[1104px]:items-start min-[1104px]:gap-4 min-[1104px]:text-left">
      <div className="w-full min-w-0">
        <h1 className={`${typographyClasses.heroTitle} sm:text-[34px] min-[1104px]:text-[3.35rem] min-[1104px]:leading-[1.1]`}>
          <span className="block min-[1104px]:whitespace-nowrap">{t('titleLine1')}</span>
          <span className="block min-[1104px]:whitespace-nowrap">{t('tagline')}</span>
        </h1>
      </div>
      <div className="w-full space-y-1">
        <p className={`${typographyClasses.heroLead} min-[1104px]:text-[1.35rem] min-[1104px]:leading-9`}>
          {t('introLine1')}
        </p>
        <p className={`${typographyClasses.heroLead} min-[1104px]:text-[1.35rem] min-[1104px]:leading-9`}>
          {t('introLine2')}
        </p>
      </div>
    </div>
  );
};
