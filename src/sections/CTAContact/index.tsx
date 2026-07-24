import { layoutClasses, typographyClasses } from "@/config/designTokens";
import { BlurEllipses } from "@/components/BlurEllipses";
import { ctaContactEllipses } from "@/config/blurEllipses";
import { CTACard } from "@/sections/CTA/components/CTACard";
import { ContactForm } from "@/sections/Contact/components/ContactForm";
import { SurfaceCard } from "@/components/SurfaceCard";
import { SectionBadge } from "@/components/SectionBadge";

const SECTION_ICON = "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg";

export const CTAContact = () => {
  return (
    <section
      id="contact"
      className={`${layoutClasses.section} ${layoutClasses.sectionNeutral} overflow-hidden`}
    >
      <div className="relative mx-auto w-full max-w-[1140px] px-[30px]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(100%,560px)] w-[min(100%,660px)] -translate-x-1/2 -translate-y-1/2">
          <BlurEllipses ellipses={ctaContactEllipses} />
        </div>

        <div className="relative z-[1] grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="flex w-full justify-center lg:justify-end">
            <CTACard className="w-full max-w-[520px]" />
          </div>

          <SurfaceCard className="w-full px-6 py-7 md:px-8 md:py-8">
            <div className="flex flex-col items-center gap-4 md:gap-5">
              <SectionBadge label="Contact" iconUrl={SECTION_ICON} />
              <h2 className={`max-w-[440px] text-center ${typographyClasses.sectionTitle}`}>
                Got a project in mind? Let&apos;s get in touch.
              </h2>
              <ContactForm />
            </div>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
};
