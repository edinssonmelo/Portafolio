import { typographyClasses } from "@/config/designTokens";

export const AboutText = () => {
  return (
    <div className="relative flex w-full flex-col gap-4 overflow-hidden">
      <h2 className={`text-left ${typographyClasses.sectionTitle}`}>Biography</h2>
      <div className="flex flex-col gap-3 md:gap-4">
        <p className={typographyClasses.body}>
          I&apos;m an AI Software Engineer with more than 10 years of experience.
          I work with companies, startups, founders, and software engineers to ship
          AI-powered SaaS, web, and mobile products.
        </p>
        <p className={typographyClasses.body}>
          From MVP definition to production launch, I combine software
          architecture, AI integration, and product thinking to build tools
          that solve real business problems.
        </p>
      </div>
    </div>
  );
};
