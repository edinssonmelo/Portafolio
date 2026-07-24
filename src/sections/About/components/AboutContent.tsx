import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import { AboutText } from "@/sections/About/components/AboutText";

export const AboutContent = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-[25px] flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-[25px] w-full overflow-hidden md:basis-0 md:grow md:w-px">
      <SectionHeader
        iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
        label="About"
        variant=""
      />
      <AboutText />
      <Link
        to="/about"
        className="text-stone-900 text-base font-semibold underline-offset-2 hover:underline font-dm_sans"
      >
        Read full profile →
      </Link>
    </div>
  );
};
