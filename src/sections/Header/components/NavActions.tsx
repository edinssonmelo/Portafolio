import { SOCIAL_ICON_BACKGROUND_COLOR } from "@/config/colors";

const SocialIcon = ({ href, iconSrc, iconAlt, name }: { href: string; iconSrc: string; iconAlt: string; name: string }) => {
  return (
    <div className="relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col items-center justify-center"
      >
        <div
          className="relative h-8 w-8 md:h-[38px] md:w-[42px] flex items-center justify-center bg-white rounded-[10px] overflow-hidden z-[1] border-2 border-stone-900"
        >
          <div className="h-4 w-4 md:h-[17px] md:w-[17px] flex items-center justify-center overflow-hidden">
            <img
              src={iconSrc}
              alt={iconAlt}
              className="h-full w-full object-contain max-w-full"
            />
          </div>
        </div>
        <div
          className="absolute h-full w-full rounded-[10px] border-2 border-stone-900 left-0 top-[3px] md:top-[5px] z-0"
          style={{ backgroundColor: SOCIAL_ICON_BACKGROUND_COLOR }}
        ></div>
      </a>
    </div>
  );
};

export const NavActions = ({ className = "" }: { className?: string }) => {
  return (
    <nav className={`flex items-center justify-center gap-3 ${className}`}>
      <SocialIcon href="https://github.com/edinssonmelo" iconSrc="/assets/github-icon.png" iconAlt="GitHub" name="GitHub" />
      <SocialIcon href="https://www.instagram.com/edinssonmelo/" iconSrc="/assets/ig-icon.svg" iconAlt="Instagram" name="Instagram" />
      <SocialIcon href="https://www.linkedin.com/in/edinssonmelo/" iconSrc="/assets/linkedin-icon.png" iconAlt="LinkedIn" name="LinkedIn" />
    </nav>
  );
};
