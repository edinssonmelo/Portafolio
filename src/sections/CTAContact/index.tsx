import { useTranslation } from 'react-i18next';
import { layoutClasses, typographyClasses } from "@/config/designTokens";
import { BlurEllipses } from "@/components/BlurEllipses";
import { ctaContactEllipses } from "@/config/blurEllipses";
import { CTACard } from "@/sections/CTA/components/CTACard";
import { ContactForm } from "@/sections/Contact/components/ContactForm";
import { SurfaceCard } from "@/components/SurfaceCard";
import { SectionBadge } from "@/components/SectionBadge";

const SECTION_ICON = "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg";

export const CTAContact = () => {
  const { t } = useTranslation('contact');

  return (
    <section
      id="contact"
      className={`${layoutClasses.section} ${layoutClasses.sectionNeutral} overflow-hidden`}
    >
      <div className="relative mx-auto w-full max-w-[1140px]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-[min(100%,560px)] w-[min(100%,660px)] -translate-x-1/2 -translate-y-1/2 sm:block">
          <BlurEllipses ellipses={ctaContactEllipses} />
        </div>

        <div className="relative z-[1] grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="flex min-w-0 w-full justify-center lg:justify-end">
            <CTACard className="w-full max-w-[520px]" />
          </div>

          <SurfaceCard className="min-w-0 w-full px-4 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8">
            <div className="flex w-full min-w-0 flex-col items-center gap-4 md:gap-5">
              <SectionBadge label={t('section.badge')} iconUrl={SECTION_ICON} />
              <h2 className={`w-full max-w-[440px] text-center ${typographyClasses.sectionTitle}`}>
                {t('section.title')}
              </h2>
              <ContactForm />
            </div>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
};
