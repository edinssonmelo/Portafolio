import { typographyClasses } from "@/config/designTokens";

export const AboutText = () => {
  return (
    <div className="relative flex w-full flex-col gap-4 overflow-hidden">
      <div className="flex flex-col gap-3 md:gap-4">
        <p className={typographyClasses.body}>
          Software Engineer with more than 8 years in technology. Today I focus on
          agents, AI-native apps, and automated workflows.
        </p>
        <p className={`${typographyClasses.body} text-stone-600`}>
          The story of how I got here starts with an old PC and a lot of curiosity.
        </p>
      </div>
    </div>
  );
};
