import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import { AboutText } from "@/sections/About/components/AboutText";

export const AboutContent = () => {
  return (
    <div className="relative flex w-full flex-col items-start gap-4 overflow-hidden md:gap-5 lg:flex-1">
      <SectionHeader
        iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
        label="About"
        align="start"
      />
      <AboutText />
      <Link
        to="/about"
        className="font-dm_sans text-base font-semibold text-stone-900 underline-offset-2 hover:underline"
      >
        Read full profile →
      </Link>
    </div>
  );
};
