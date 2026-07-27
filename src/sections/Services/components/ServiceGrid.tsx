import { useTranslation } from 'react-i18next';
import { GradientButton } from "@/components/GradientButton";
import { ServiceCard } from "@/sections/Services/components/ServiceCard";
import { useLocale } from '@/hooks/useLocale';

export const ServiceGrid = () => {
  const { t } = useTranslation('services');
  const { to } = useLocale();

  const SERVICES = [
    {
      iconUrl: "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-12.svg",
      iconVariant: "md:w-[34px]",
      title: t('items.ideaToMvp.title'),
      description: t('items.ideaToMvp.description'),
    },
    {
      iconUrl: "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-13.svg",
      iconVariant: "",
      title: t('items.technicalLeadership.title'),
      description: t('items.technicalLeadership.description'),
    },
    {
      iconUrl: "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-14.svg",
      iconVariant: "md:w-10",
      title: t('items.fullstack.title'),
      description: t('items.fullstack.description'),
    },
    {
      iconUrl: "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-15.svg",
      iconVariant: "",
      title: t('items.aiProduct.title'),
      description: t('items.aiProduct.description'),
    },
  ];

  return (
    <div className="relative flex w-full max-w-[1140px] flex-col items-center gap-8 md:gap-10">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            iconUrl={service.iconUrl}
            iconAlt="Icon"
            iconVariant={service.iconVariant}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <GradientButton to={to('/projects')}>
        <span className="font-dm_sans text-lg font-semibold leading-[19px] tracking-[-0.72px] text-stone-900">
          {t('ctaPortfolio')}
        </span>
      </GradientButton>
    </div>
  );
};
