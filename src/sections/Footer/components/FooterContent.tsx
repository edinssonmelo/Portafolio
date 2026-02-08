import { FooterSocial } from "@/sections/Footer/components/FooterSocial";
import { FooterContact } from "@/sections/Footer/components/FooterContact";

export const FooterContent = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Top section: Contact and Social */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8">
        <FooterContact />
        <FooterSocial />
      </div>

      {/* Bottom section: Copyright */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pt-4 border-t border-black/10">
        <p className="text-black text-sm md:text-stone-900 md:text-base font-dm_sans">
          © 2024 Edinsson Melo. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-black text-sm md:text-stone-900 hidden md:inline">•</span>
          <a
            href="https://buymeacoffee.com/edinssonmelo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans hover:underline"
          >
            Buy me a Coffee
          </a>
        </div>
      </div>
    </div>
  );
};
