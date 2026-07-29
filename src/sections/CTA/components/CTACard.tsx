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
      className={`flex w-full min-w-0 flex-col items-center gap-4 px-4 py-6 text-center sm:gap-5 sm:px-6 sm:py-7 md:gap-6 md:px-8 md:py-8 ${className}`}
    >
      <div className="flex w-full max-w-[520px] flex-col items-center gap-2 sm:gap-3">
        <h2 className={`w-full ${typographyClasses.sectionTitle}`}>
          {t('ctaCard.title')}
        </h2>
        <p className={`w-full ${typographyClasses.sectionDesc}`}>
          {t('ctaCard.description')}
        </p>
      </div>
      <div className="flex w-full justify-center">
        <GradientButton
          href="https://calendly.com/edinssonadrian/30min"
          external
          className="w-full max-w-[320px] sm:max-w-none sm:w-auto"
        >
          <span className="font-dm_sans text-base font-semibold leading-snug tracking-[-0.4px] text-stone-900 sm:text-lg sm:leading-[19px] sm:tracking-[-0.72px]">
            {t('ctaCard.button')}
          </span>
        </GradientButton>
      </div>
    </SurfaceCard>
  );
};
