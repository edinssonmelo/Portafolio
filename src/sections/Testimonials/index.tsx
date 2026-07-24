import { layoutClasses } from "@/config/designTokens";
import { SurfaceCard } from "@/components/SurfaceCard";
import { TestimonialCarousel } from "@/sections/Testimonials/components/TestimonialCarousel";

export const Testimonials = () => {
  return (
    <section className={`${layoutClasses.section} ${layoutClasses.sectionNeutral}`}>
      <div className={layoutClasses.sectionInner}>
        <SurfaceCard className="relative z-[1] w-full max-w-[900px] overflow-hidden">
          <TestimonialCarousel />
        </SurfaceCard>
      </div>
    </section>
  );
};
