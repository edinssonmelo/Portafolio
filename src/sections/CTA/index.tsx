import { layoutClasses } from "@/config/designTokens";
import { CTACard } from "@/sections/CTA/components/CTACard";

export const CTA = () => {
  return (
    <section className={`${layoutClasses.section} ${layoutClasses.sectionWhite}`}>
      <div className={`${layoutClasses.sectionInner} relative`}>
        <div className="pointer-events-none absolute bottom-[-120px] left-[-60px] hidden h-[400px] w-[400px] md:block">
          <svg
            className="absolute left-0 top-0 h-[280px] w-[300px] blur-[100px] md:h-[340px] md:w-[377px]"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(220, 255, 49, 0.4)"
            />
          </svg>
          <svg
            className="absolute right-0 top-0 h-[280px] w-[300px] blur-[100px] md:h-[340px] md:w-[377px]"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(127, 230, 217, 0.4)"
            />
          </svg>
        </div>
        <div className="relative z-[1] w-full max-w-[600px]">
          <CTACard />
        </div>
      </div>
    </section>
  );
};
