import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(rgba(75,251,186,0.7)_0%,rgba(220,255,49,0.7)_100%)] w-full py-8 px-6 md:py-10 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <FooterContent />
      </div>
    </footer>
  );
};
