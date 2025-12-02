import { SOCIAL_ICON_BACKGROUND_COLOR } from "@/config/colors";

const SocialIcon = ({ href, iconSrc, iconAlt, name }: { href: string; iconSrc: string; iconAlt: string; name: string }) => {
  return (
    <div
      name={name}
      className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    >
      <a
        name={name}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline flex-row h-auto justify-normal gap-y-[normal] w-auto md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
      >
        <div
          className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto z-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-white md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-[38px] md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[42px] md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
          style={{
            backgroundColor: 'white',
          }}
        >
          <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[17px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[17px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img
                src={iconSrc}
                alt={iconAlt}
                className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-stone-900 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
        </div>
        <div
          className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-0 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] md:left-[0%] md:top-[5px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
          style={{ backgroundColor: SOCIAL_ICON_BACKGROUND_COLOR }}
        ></div>
      </a>
    </div>
  );
};

export const FooterSocial = () => {
  return (
    <nav className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <SocialIcon href="https://github.com/edinssonmelo" iconSrc="/assets/github-icon.png" iconAlt="GitHub" name="GitHub" />
      <SocialIcon href="https://www.instagram.com/edinssonmelo/" iconSrc="/assets/ig-icon.svg" iconAlt="Instagram" name="Instagram" />
      <SocialIcon href="https://www.linkedin.com/in/edinssonmelo/" iconSrc="/assets/linkedin-icon.png" iconAlt="LinkedIn" name="LinkedIn" />
    </nav>
  );
};
