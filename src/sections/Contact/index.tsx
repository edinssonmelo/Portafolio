import { layoutClasses } from "@/config/designTokens";
import { ContactForm } from "@/sections/Contact/components/ContactForm";
import { SurfaceCard } from "@/components/SurfaceCard";
import { SectionBadge } from "@/components/SectionBadge";
import { BlurEllipses } from "@/components/BlurEllipses";
import { contactEllipses } from "@/config/blurEllipses";

const SECTION_ICON = "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg";

export const Contact = () => {
  return (
    <section
      id="contact"
      className={`${layoutClasses.section} ${layoutClasses.sectionNeutral}`}
    >
      <div className={`${layoutClasses.sectionInner} relative`}>
        <div className="pointer-events-none absolute bottom-[-80px] left-1/2 z-0 h-[360px] w-[min(100%,480px)] -translate-x-1/2">
          <BlurEllipses ellipses={contactEllipses} />
        </div>

        <SurfaceCard className="relative z-[1] w-full max-w-[600px] px-6 py-7 md:px-9 md:py-9">
          <div className="relative z-[1] flex flex-col items-center gap-4 md:gap-5">
            <SectionBadge label="Contact" iconUrl={SECTION_ICON} />
            <h2 className="max-w-[440px] text-center font-cabinet_grotesk text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
              Got a project in mind? Let&apos;s get in touch.
            </h2>
            <ContactForm />
          </div>
        </SurfaceCard>
      </div>
    </section>
  );
};
