import { useTranslation } from 'react-i18next';
import { GradientButton } from "@/components/GradientButton";
import { SurfaceCard } from "@/components/SurfaceCard";
import { typographyClasses } from "@/config/designTokens";

type CTACardProps = {
  className?: string;
};

export const CTACard = ({ className = "" }: CTACardProps) => {
  const { t } = useTranslation('contact');

  return (
    <SurfaceCard
      className={`flex w-full flex-col items-center gap-5 px-6 py-7 text-center md:gap-6 md:px-8 md:py-8 ${className}`}
    >
      <div className="flex max-w-[520px] flex-col items-center gap-3">
        <h2 className={typographyClasses.sectionTitle}>{t('ctaCard.title')}</h2>
        <p className={typographyClasses.sectionDesc}>{t('ctaCard.description')}</p>
      </div>
      <GradientButton href="https://calendly.com/edinssonadrian/30min" external>
        <span className="font-dm_sans text-lg font-semibold leading-[19px] tracking-[-0.72px] text-stone-900">
          {t('ctaCard.button')}
        </span>
      </GradientButton>
    </SurfaceCard>
  );
};
