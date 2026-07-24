import { layoutClasses } from "@/config/designTokens";
import { SectionHeader } from "@/components/SectionHeader";
import { BlurEllipses } from "@/components/BlurEllipses";
import { servicesEllipses } from "@/config/blurEllipses";
import { ServiceGrid } from "@/sections/Services/components/ServiceGrid";

export const Services = () => {
  return (
    <section
      id="services"
      className={`${layoutClasses.section} ${layoutClasses.sectionNeutral} after:absolute after:inset-x-0 after:top-0 after:h-full after:border-b-2 after:border-stone-900 after:content-['']`}
    >
      <div className={`${layoutClasses.sectionInner} relative z-10`}>
        <SectionHeader
          iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
          label="My Services"
          title="AI Product Engineering, <br />Startups &amp; Technical Leadership"
          showBreak={true}
          variant="max-w-[650px] md:max-w-[720px]"
        />
        <div className="relative w-full">
          <BlurEllipses ellipses={servicesEllipses} />
          <ServiceGrid />
        </div>
      </div>
    </section>
  );
};
