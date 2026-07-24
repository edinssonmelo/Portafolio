import { ContactForm } from "@/sections/Contact/components/ContactForm";
import { SurfaceCard } from "@/components/SurfaceCard";
import { SectionBadge } from "@/components/SectionBadge";

const SECTION_ICON = "https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex w-full shrink-0 scroll-mt-10 justify-center overflow-hidden bg-neutral-100 px-[30px] pt-[100px] md:scroll-mt-0 md:pt-[120px]"
    >
      <div className="relative flex w-full max-w-[1140px] flex-col items-center justify-end gap-y-10">
        <SurfaceCard className="relative z-[1] w-full max-w-[640px] overflow-hidden px-6 py-8 md:px-10 md:py-10">
          <div className="pointer-events-none absolute bottom-[-120px] left-6 h-[280px] w-[280px] opacity-60">
            <svg
              className="absolute bottom-0 left-0 h-[200px] w-[200px] blur-[80px]"
              viewBox="0 0 377 340"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
                fill="rgba(220, 255, 49, 0.35)"
              />
            </svg>
          </div>
          <div className="relative z-[1] flex flex-col items-center gap-5 md:gap-6">
            <SectionBadge label="Contact" iconUrl={SECTION_ICON} />
            <h2 className="max-w-[480px] text-center text-3xl font-bold tracking-tight text-stone-900 font-cabinet_grotesk md:text-4xl">
              Got a project in mind? Let&apos;s get in touch.
            </h2>
            <ContactForm />
          </div>
        </SurfaceCard>
        <div className="absolute left-0 top-0 z-0 h-2/5 w-full border-b-2 border-stone-900 bg-white" />
      </div>
    </section>
  );
};
