export const AboutText = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-[15px] flex flex-col shrink-0 h-min justify-center gap-y-[15px] w-full overflow-hidden">
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full z-[1]">
        <h2 className="text-stone-900 text-4xl font-bold box-border caret-transparent tracking-[-0.36px] leading-[42px] break-words text-left font-cabinet_grotesk md:text-[44px] md:tracking-[-0.44px] md:leading-[50px]">
          Biography
        </h2>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center gap-y-[25px] w-full overflow-hidden">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] break-words font-dm_sans">
            I&apos;m an AI Software Engineer and AI Product Builder with over 8
            years of experience. I work with companies, startups, founders, and
            software engineers to ship AI-powered SaaS, web, and mobile products.
          </p>
          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] break-words font-dm_sans mt-4">
            From MVP definition to production launch, I combine software
            architecture, AI integration, and product thinking to build tools
            that solve real business problems.
          </p>
        </div>
      </div>
    </div>
  );
};
