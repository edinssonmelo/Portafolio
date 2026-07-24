import { layoutClasses } from "@/config/designTokens";
import { AboutImage } from "@/sections/About/components/AboutImage";
import { AboutContent } from "@/sections/About/components/AboutContent";

export const About = () => {
  return (
    <section
      id="about"
      className={`${layoutClasses.section} ${layoutClasses.sectionNeutral}`}
    >
      <div className={`${layoutClasses.sectionInner} relative`}>
        <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[420px] w-[min(100%,520px)] -translate-x-1/2 md:block md:left-[-6px] md:top-[-40px] md:translate-x-0">
          <svg
            className="pointer-events-none absolute -bottom-5 left-[-23px] h-[280px] w-[300px] blur-[100px] md:h-[340px] md:w-[377px]"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(220, 255, 49, 0.4)"
            />
          </svg>
          <svg
            className="pointer-events-none absolute left-[-23px] top-[-60px] h-[280px] w-[300px] blur-[100px] md:h-[340px] md:w-[377px]"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(127, 230, 217, 0.4)"
            />
          </svg>
        </div>
        <div className="relative flex w-full flex-col items-center gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
          <div className="relative w-full max-w-[260px] shrink-0 md:max-w-[380px] md:flex-1">
            <AboutImage />
          </div>
          <AboutContent />
        </div>
      </div>
    </section>
  );
};
