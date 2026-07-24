export const AboutText = () => {
  return (
    <div className="relative flex w-full flex-col gap-4 overflow-hidden">
      <h2 className="text-left font-cabinet_grotesk text-2xl font-bold leading-tight tracking-tight text-stone-900 md:text-3xl">
        Biography
      </h2>
      <div className="flex flex-col gap-3 md:gap-4">
        <p className="font-dm_sans text-base leading-relaxed text-stone-900 md:text-lg">
          I&apos;m an AI Software Engineer and AI Product Builder with over 8
          years of experience. I work with companies, startups, founders, and
          software engineers to ship AI-powered SaaS, web, and mobile products.
        </p>
        <p className="font-dm_sans text-base leading-relaxed text-stone-900 md:text-lg">
          From MVP definition to production launch, I combine software
          architecture, AI integration, and product thinking to build tools
          that solve real business problems.
        </p>
      </div>
    </div>
  );
};
