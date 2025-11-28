# Proyecto React

## src/components/Badge.tsx

```
export const Badge = () => {
  return (
    <div className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-white md:box-border md:caret-transparent md:gap-x-1 md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[20px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
      <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-3 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[11px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <img
            src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-4.svg"
            alt="Icon"
            className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          />
        </div>
      </div>
      <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 normal-case text-wrap font-times md:text-stone-900 md:text-[13px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[0.65px] md:leading-[23px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:uppercase md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
          My Works
        </p>
      </div>
    </div>
  );
};

```

## src/components/Logo.tsx

```
export const Logo = () => {
  return (
    <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[57px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[188px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
        <img
          src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/3.png"
          alt=""
          className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_500_/_500] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
      </div>
    </div>
  );
};

```

## src/components/SocialIcon.tsx

```
export type SocialIconProps = {
  href: string;
  iconSrc: string;
  iconAlt?: string;
  name?: string;
};

export const SocialIcon = (props: SocialIconProps) => {
  return (
    <div
      name={props.name}
      className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    >
      <a
        name={props.name}
        href={props.href}
        className="static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline flex-row h-auto justify-normal gap-y-[normal] w-auto md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
      >
        <div className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto z-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-white md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-[38px] md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[42px] md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
          <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[17px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[17px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img
                src={props.iconSrc}
                alt={props.iconAlt || "Icon"}
                className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-stone-900 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
        </div>
        <div className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-yellow-300 md:box-border md:caret-transparent md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-0 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] md:left-[0%] md:top-[5px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
      </a>
    </div>
  );
};

```

## src/components/SocialLinks.tsx

```
import { SocialIcon } from "@/components/SocialIcon";

export const SocialLinks = () => {
  return (
    <nav className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <SocialIcon
        href="https://x.com/elemisthemes"
        iconSrc="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-1.svg"
        name="Social Icon"
      />
      <SocialIcon
        href="https://dribbble.com/elemis"
        iconSrc="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-2.svg"
      />
      <SocialIcon
        href="https://framer.link/a3IT8z9"
        iconSrc="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-3.svg"
      />
    </nav>
  );
};

```

## src/sections/Footer/components/FooterBottom.tsx

```
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";

export const FooterBottom = () => {
  return (
    <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <FooterCopyright />
      <FooterSocial />
    </div>
  );
};

```

## src/sections/Footer/components/FooterContent.tsx

```
import { FooterTop } from "@/sections/Footer/components/FooterTop";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const FooterContent = () => {
  return (
    <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[25px] md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[25px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <FooterTop />
        <FooterBottom />
      </div>
    </div>
  );
};

```

## src/sections/Footer/components/FooterCopyright.tsx

```
export const FooterCopyright = () => {
  return (
    <div className="static box-content caret-black block basis-auto flex-row grow-0 shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
        © Meelo by{" "}
        <a
          href="https://framer.link/a3IT8z9"
          className="box-content caret-black break-normal md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-yellow-300 hover:border-yellow-300"
        >
          elemis
        </a>
        . Made in{" "}
        <a
          href="https://framer.link/a3IT8z9"
          className="box-content caret-black break-normal md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-yellow-300 hover:border-yellow-300"
        >
          Framer
        </a>
        .
      </p>
    </div>
  );
};

```

## src/sections/Footer/components/FooterLogo.tsx

```
export const FooterLogo = () => {
  return (
    <a
      href="./"
      className="static text-black box-content caret-black inline fill-black shrink min-h-0 min-w-0 w-auto md:relative md:text-stone-900 md:aspect-[3.42308_/_1] md:box-border md:caret-transparent md:block md:fill-stone-900 md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[89px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    >
      <div className="box-content caret-black fill-black h-auto w-auto md:aspect-[3.42308_/_1] md:box-border md:caret-transparent md:fill-stone-900 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <img
          src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-6.svg"
          alt="Icon"
          className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
      </div>
    </a>
  );
};

```

## src/sections/Footer/components/FooterNav.tsx

```
export const FooterNav = () => {
  return (
    <nav className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[30px] md:flex md:shrink-0 md:h-min md:justify-end md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[30px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-stone-900 md:text-[19px] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:leading-[19px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
            <a
              href="./about"
              className="box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-yellow-300 hover:border-yellow-300"
            >
              About
            </a>
          </p>
        </div>
      </div>
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-stone-900 md:text-[19px] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:leading-[19px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
            <a
              href="./contact"
              className="box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-yellow-300 hover:border-yellow-300"
            >
              Contact
            </a>
          </p>
        </div>
      </div>
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-stone-900 md:text-[19px] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:leading-[19px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
            <a
              href="./projects"
              className="box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-yellow-300 hover:border-yellow-300"
            >
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </nav>
  );
};

```

## src/sections/Footer/components/FooterSocial.tsx

```
export const FooterSocial = () => {
  return (
    <nav className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div
        name="Social Icon"
        className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
      >
        <a
          name="Social Icon"
          href="https://x.com/elemisthemes"
          className="static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline flex-row h-auto justify-normal gap-y-[normal] w-auto md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        >
          <div className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto z-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-white md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-[38px] md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[42px] md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
            <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[17px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[17px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <img
                  src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-1.svg"
                  alt="Icon"
                  className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-stone-900 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                />
              </div>
            </div>
          </div>
          <div className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-indigo-100 md:box-border md:caret-transparent md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-0 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] md:left-[0%] md:top-[5px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
        </a>
      </div>
      <div className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <a
          href="https://dribbble.com/elemis"
          className="static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline flex-row h-auto justify-normal gap-y-[normal] w-auto md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        >
          <div className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto z-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-white md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-[38px] md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[42px] md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
            <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[17px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[17px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <img
                  src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-2.svg"
                  alt="Icon"
                  className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-stone-900 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                />
              </div>
            </div>
          </div>
          <div className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-indigo-100 md:box-border md:caret-transparent md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-0 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] md:left-[0%] md:top-[5px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
        </a>
      </div>
      <div className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <a
          href="https://framer.link/a3IT8z9"
          className="static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline flex-row h-auto justify-normal gap-y-[normal] w-auto md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        >
          <div className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto z-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-white md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-[38px] md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[42px] md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
            <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[17px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[17px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <img
                  src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-3.svg"
                  alt="Icon"
                  className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-stone-900 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                />
              </div>
            </div>
          </div>
          <div className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-indigo-100 md:box-border md:caret-transparent md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-0 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] md:left-[0%] md:top-[5px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
        </a>
      </div>
    </nav>
  );
};

```

## src/sections/Footer/components/FooterTop.tsx

```
import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterNav } from "@/sections/Footer/components/FooterNav";

export const FooterTop = () => {
  return (
    <div className="static [align-items:normal] box-content caret-black block shrink h-auto justify-normal min-h-0 min-w-0 w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-min md:justify-between md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <FooterLogo />
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[30px] md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-center md:max-w-[500px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[30px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <FooterNav />
      </div>
    </div>
  );
};

```

## src/sections/Footer/index.tsx

```
import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="relative content-center items-center bg-[linear-gradient(rgba(221,255,48,0.7)_0%,rgba(75,250,186,0.7)_100%)] box-border caret-transparent gap-x-[70px] flex shrink-0 h-min justify-center order-[1002] gap-y-[70px] w-full px-[30px] py-[60px] md:py-[70px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:border-t-2 after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[70px] flex basis-0 grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[70px] w-px">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
};

```

## src/sections/Hero/components/HeroContent.tsx

```
import { Badge } from "@/components/Badge";
import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroImages } from "@/sections/Hero/components/HeroImages";

export const HeroContent = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-[100px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[100px] w-px md:gap-x-0 md:flex-row md:gap-y-0">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[25px] flex basis-auto flex-col grow-0 shrink-0 h-min justify-center max-w-[700px] gap-y-[25px] w-full md:basis-0 md:grow md:w-px">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black shrink min-h-0 min-w-0 z-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <Badge />
          </div>
        </div>
        <HeroText />
        <HeroImages />
      </div>
    </div>
  );
};

```

## src/sections/Hero/components/HeroImages.tsx

```
export const HeroImages = () => {
  return (
    <div className="absolute box-border caret-transparent shrink-0 h-[760px] left-[-26px] top-[-150px] w-[625px]">
      <img
        alt=""
        src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/image-1.svg"
        className="absolute aspect-[1.0935_/_1] bottom-[-282px] box-border caret-transparent blur-[100px] shrink-0 left-[-477px] w-[calc(100%_+_477px)] right-0 top-auto md:aspect-[1.09474_/_1] md:right-[-296px] md:top-[-60px] md:w-[624px] md:left-auto md:bottom-auto"
      />
      <img
        alt=""
        src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/image-2.svg"
        className="absolute aspect-[0.972141_/_1] bottom-[-210px] box-border caret-transparent blur-[100px] shrink-0 right-[-333px] w-[calc(100%_+_333px)] left-0 top-auto md:aspect-[0.949772_/_1] md:left-[-123px] md:top-[-58px] md:w-[624px] md:right-auto md:bottom-auto"
      />
    </div>
  );
};

```

## src/sections/Hero/components/HeroText.tsx

```
export const HeroText = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full">
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full z-[1]">
        <h2 className="text-stone-900 text-4xl font-bold box-border caret-transparent tracking-[-0.36px] leading-[42px] break-words text-center font-cabinet_grotesk md:text-[44px] md:tracking-[-0.44px] md:leading-[50px]">
          Smart, Creative &amp; Awesome.
        </h2>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[550px] break-words w-full">
        <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] break-words text-center font-dm_sans">
          Bringing ideas to life. Explore our work and see how creativity shapes
          meaningful, innovative solutions.
        </p>
      </div>
    </div>
  );
};

```

## src/sections/Hero/index.tsx

```
import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full overflow-clip pt-[180px] pb-[100px] px-[30px] md:pt-[220px] md:pb-[120px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:border-b-2 after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
      <HeroContent />
    </section>
  );
};

```

## src/sections/Navbar/components/DesktopNav.tsx

```
import { NavLink } from "@/sections/Navbar/components/NavLink";

export const DesktopNav = () => {
  return (
    <nav className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[35px] md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[35px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <NavLink href="./#home" label="Home" />
      <NavLink href="./#services" label="Services" />
      <NavLink href="./#:hYmrCCNQt" label="About" />
      <NavLink href="./#portfolio" label="Portfolio" />
      <NavLink href="./#:Uz02Q55nb" label="Process" />
      <NavLink href="./#pricing" label="Pricing" />
      <NavLink href="./#contact" label="Contact" />
    </nav>
  );
};

```

## src/sections/Navbar/components/NavbarContainer.tsx

```
import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { SocialLinks } from "@/components/SocialLinks";

export const NavbarContainer = () => {
  return (
    <header className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] transform-none w-auto px-0 md:relative md:content-center md:items-center md:aspect-auto md:bg-stone-900 md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:h-[100px] md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[0.068537px] md:w-full md:[mask-position:0%] md:bg-left-top md:px-[30px] md:scroll-m-0 md:scroll-p-[auto] md:scale-y-[1.00137px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:border-b-2 after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-0 md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-center md:max-w-[1140px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static [align-items:normal] box-content caret-black block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-between md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <Logo />
          </div>
          <DesktopNav />
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

```

## src/sections/Navbar/components/NavLink.tsx

```
export type NavLinkProps = {
  href: string;
  label: string;
};

export const NavLink = (props: NavLinkProps) => {
  return (
    <div className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-white md:text-[19px] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:leading-[19px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
            <a
              href={props.href}
              className="box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-yellow-300 hover:border-yellow-300"
            >
              {props.label}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

```

## src/sections/Navbar/index.tsx

```
import { NavbarContainer } from "@/sections/Navbar/components/NavbarContainer";

export const Navbar = () => {
  return (
    <div className="fixed box-border caret-transparent shrink-0 order-[-1000] translate-x-[-50.0%] w-full z-10 left-2/4 top-0">
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <NavbarContainer />
      </div>
    </div>
  );
};

```

## src/sections/Portfolio/components/PortfolioGrid.tsx

```
import { ProjectImage } from "@/sections/Portfolio/components/ProjectImage";
import { ProjectCard } from "@/sections/Portfolio/components/ProjectCard";

export const PortfolioGrid = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 auto-rows-[minmax(0px,1fr)] grid-cols-[repeat(2,minmax(50px,1fr))] h-min justify-start gap-y-[60px] w-full md:[align-items:normal] md:grid md:flex-row md:justify-center md:gap-y-[70px]">
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static self-auto box-content caret-black shrink h-auto justify-self-auto min-h-0 min-w-0 w-auto md:relative md:self-start md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-full md:justify-self-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ProjectCard
            projectUrl="./projects/snowlake-social-media-website"
            imageVariant=""
            title=""
            description=""
            iconUrl=""
            useCustomImage={true}
            customImageComponent={<ProjectImage />}
          />
        </div>
      </div>
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static self-auto box-content caret-black shrink h-auto justify-self-auto min-h-0 min-w-0 w-auto md:relative md:self-start md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-full md:justify-self-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ProjectCard
            projectUrl="./projects/meeko-company-networking-website"
            imageUrl="https://c.animaapp.com/mii2lh2ySfDfMv/assets/1.avif"
            imageSizes="max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)"
            imageVariant="md:aspect-[auto_1607_/_852]"
            title="Meeko Company Networking Website"
            description="Meeko is a modern Framer-built site connecting professionals, designed for seamless networking."
            iconUrl="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-5.svg"
          />
        </div>
      </div>
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static self-auto box-content caret-black shrink h-auto justify-self-auto min-h-0 min-w-0 w-auto md:relative md:self-start md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-full md:justify-self-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ProjectCard
            projectUrl="./projects/sandbox-banking-application-website"
            imageUrl="https://c.animaapp.com/mii2lh2ySfDfMv/assets/5.png"
            imageVariant="md:aspect-[auto_1277_/_872]"
            title="Sandbox Banking Application Website"
            description="Sandbox is a next-gen fintech site built in Framer, spotlighting trust and innovation through a powerful CMS."
            iconUrl="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-5.svg"
          />
        </div>
      </div>
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static self-auto box-content caret-black shrink h-auto justify-self-auto min-h-0 min-w-0 w-auto md:relative md:self-start md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-full md:justify-self-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ProjectCard
            projectUrl="./projects/creatink-creative-agency-website"
            imageUrl="https://c.animaapp.com/mii2lh2ySfDfMv/assets/7.png"
            imageVariant="md:aspect-[auto_1019_/_747]"
            title="Creatink Website Portfolio Template"
            description="Creatink is a bold, modern agency site built on Framer CMS, designed to showcase strong visuals and smooth UX."
            iconUrl="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

```

## src/sections/Portfolio/components/ProjectCard.tsx

```
export type ProjectCardProps = {
  projectUrl: string;
  imageUrl?: string;
  imageSizes?: string;
  imageVariant: string;
  title: string;
  description: string;
  iconUrl: string;
  useCustomImage?: boolean;
  customImageComponent?: React.ReactNode;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <article className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-[30px] md:flex md:flex-col md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[30px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <a
        href={props.projectUrl}
        className="static text-black box-content caret-black inline shrink min-h-0 min-w-0 w-auto rounded-none md:relative md:text-blue-700 md:aspect-[1.34146_/_1] md:box-border md:caret-transparent md:block md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-teal-300 after:md:rounded-[20px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
      >
        {props.useCustomImage ? (
          props.customImageComponent
        ) : (
          <div className="static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] md:inset-0">
            <img
              sizes={props.imageSizes}
              src={props.imageUrl}
              alt=""
              className={`box-content caret-black h-auto object-fill object-[50%_50%] align-middle w-auto rounded-none md:box-border md:caret-transparent md:h-full md:object-cover md:object-[50%_0%] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] ${props.imageVariant}`}
            />
          </div>
        )}
      </a>
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-5 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <h3 className="text-black text-[18.72px] font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-2xl md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.12px] md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
              <a
                href={props.projectUrl}
                className="box-content caret-black break-normal md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-yellow-300 hover:border-yellow-300"
              >
                {props.title}
              </a>
            </h3>
          </div>
          <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
              {props.description}
            </p>
          </div>
        </div>
        <div className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <a
            href={props.projectUrl}
            className="static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline h-auto justify-normal gap-y-[normal] w-auto md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[7px] md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[7px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          >
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <h3 className="text-black text-[18.72px] font-bold box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-stone-900 md:text-[19px] md:aspect-auto md:box-border md:caret-transparent md:leading-[19px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
                View Case Study
              </h3>
            </div>
            <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[19px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[19px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <img
                  src={props.iconUrl}
                  alt="Icon"
                  className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </article>
  );
};

```

## src/sections/Portfolio/components/ProjectImage.tsx

```
export const ProjectImage = () => {
  return (
    <div className="static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] md:inset-0">
      <img
        sizes="max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)"
        src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/2.avif"
        alt=""
        className="box-content caret-black h-auto object-fill object-[50%_50%] align-middle w-auto rounded-none md:aspect-[auto_1297_/_905] md:box-border md:caret-transparent md:h-full md:object-cover md:object-[50%_0%] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px]"
      />
    </div>
  );
};

```

## src/sections/Portfolio/components/ProjectInfo.tsx

```
export const ProjectInfo = () => {
  return (
    <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-5 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <h3 className="text-black text-[18.72px] font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-2xl md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.12px] md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
            <a
              href="./projects/snowlake-social-media-website"
              className="box-content caret-black break-normal md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-yellow-300 hover:border-yellow-300"
            >
              Snowlake Social Media Website
            </a>
          </h3>
        </div>
        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
            Snowlake is a sleek, product-driven site for a social media
            platform, built with clean UI and scalable Framer CMS.
          </p>
        </div>
      </div>
      <div className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <a
          href="./projects/snowlake-social-media-website"
          className="static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline h-auto justify-normal gap-y-[normal] w-auto md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[7px] md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[7px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        >
          <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <h3 className="text-black text-[18.72px] font-bold box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-stone-900 md:text-[19px] md:aspect-auto md:box-border md:caret-transparent md:leading-[19px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
              View Case Study
            </h3>
          </div>
          <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[19px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[19px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img
                src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-5.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

```

## src/sections/Portfolio/index.tsx

```
import { PortfolioGrid } from "@/sections/Portfolio/components/PortfolioGrid";

export const Portfolio = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden px-[30px] py-[100px] md:flex-row md:py-[150px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[50px] flex basis-auto flex-col grow-0 shrink-0 h-min justify-center max-w-[1140px] gap-y-[50px] w-full md:gap-x-[60px] md:basis-0 md:grow md:gap-y-[60px] md:w-px">
        <PortfolioGrid />
      </div>
    </section>
  );
};

```

## src/App.tsx

```
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Portfolio } from "@/sections/Portfolio";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <div className="box-border caret-transparent">
        <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 flex flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-hidden">
          <Navbar />
          <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 contents flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-hidden">
            <div className="static box-content caret-black shrink h-auto z-auto top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-8 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-[100px] md:inset-x-0"></div>
            <Hero />
            <Portfolio />
          </div>
          <div className="box-border caret-transparent"></div>
          <div className="relative box-border caret-transparent grow h-0 w-0 bg-[position:0px_0px]"></div>
          <Footer />
        </div>
        <div className="box-border caret-transparent"></div>
      </div>
      <div className="fixed box-border caret-transparent flex justify-end pointer-events-none w-full z-[2147483647] p-5 bottom-0">
        <a
          href="https://www.framer.com/"
          title="Create a free website with Framer, the website builder loved by startups, designers and agencies."
          className="relative text-blue-700 box-border caret-transparent gap-x-2.5 block h-[38px] pointer-events-auto gap-y-2.5 w-[140px]"
        >
          <div className="absolute bg-white shadow-[rgba(0,0,0,0.17)_0px_0.602187px_1.56569px_-1.5px,rgba(0,0,0,0.14)_0px_2.28853px_5.95019px_-3px,rgba(0,0,0,0.02)_0px_10px_26px_-4.5px] box-border caret-transparent shrink-0 overflow-hidden rounded-[10px] inset-px"></div>
          <div className="absolute content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-start gap-y-2.5 translate-x-[-50.0%] translate-y-[-50.0%] w-min left-2/4 top-2/4">
            <div className="relative box-border caret-transparent shrink-0 h-4 w-3">
              <div className="[mask-image:url(data:image/svg+xml,<svg%20display=\%22block\%22%20role=\%22presentation\%22%20viewBox=\%220%200%2012%2020\%22%20xmlns=\%22http://www.w3.org/2000/svg\%22><path%20d=\%22M%200%200%20L%2012%200%20L%2012%206%20L%206%206%20Z%20M%200%206%20L%206%206%20L%2012%2012%20L%206%2012%20L%206%2018%20L%200%2012%20Z\%22%20fill=\%22var%28--1bd4d3i,%20rgb%280,%200,%200)] absolute aspect-[0.6_/_1] bg-black box-border caret-transparent shrink-0 [mask-clip:border-box,border-box] [mask-composite:add,add] [mask-mode:match-source,match-source] [mask-origin:border-box,border-box] [mask-repeat:no-repeat,no-repeat] [mask-size:auto,auto] translate-x-[-50.0%] w-3 [mask-position:50%,50%] left-2/4 -top-0.5"></div>
            </div>
            <p className="absolute box-border caret-transparent scale-[0.001px]">
              Create a free website with Framer, the website builder loved by
              startups, designers and agencies.
            </p>
            <div className="[mask-image:url(data:image/svg+xml,<svg%20display=\%22block\%22%20role=\%22presentation\%22%20viewBox=\%220%200%2097%2010\%22%20xmlns=\%22http://www.w3.org/2000/svg\%22><path%20d=\%22M%2091.736%209.781%20L%2091.736%202.818%20L%2093.316%202.818%20L%2093.316%203.98%20L%2093.374%203.98%20C%2093.501%203.577%2093.714%203.269%2094.014%203.053%20C%2094.328%202.833%2094.704%202.72%2095.087%202.729%20C%2095.185%202.729%2095.287%202.733%2095.392%202.742%20C%2095.498%202.75%2095.587%202.759%2095.659%202.767%20L%2095.659%204.253%20C%2095.552%204.23%2095.444%204.215%2095.335%204.209%20C%2095.188%204.192%2095.039%204.184%2094.891%204.184%20C%2094.603%204.184%2094.343%204.247%2094.11%204.374%20C%2093.882%204.497%2093.702%204.674%2093.57%204.907%20C%2093.434%205.16%2093.366%205.445%2093.374%205.732%20L%2093.374%209.782%20L%2091.736%209.782%20Z%20M%2087.286%209.927%20C%2086.588%209.927%2085.985%209.779%2085.477%209.483%20C%2084.969%209.183%2084.577%208.761%2084.303%208.22%20C%2084.032%207.678%2083.897%207.048%2083.897%206.328%20C%2083.897%205.618%2084.032%204.988%2084.303%204.443%20C%2084.56%203.917%2084.96%203.475%2085.458%203.167%20C%2085.953%202.858%2086.531%202.704%2087.191%202.704%20C%2087.64%202.704%2088.059%202.78%2088.448%202.932%20C%2088.841%203.08%2089.186%203.305%2089.482%203.605%20C%2089.779%203.901%2090.009%204.272%2090.174%204.715%20C%2090.344%205.155%2090.428%205.67%2090.428%206.258%20L%2090.428%206.748%20L%2084.627%206.748%20L%2084.627%205.629%20L%2089.609%205.629%20L%2088.86%205.946%20C%2088.868%205.594%2088.801%205.243%2088.664%204.918%20C%2088.549%204.641%2088.355%204.404%2088.105%204.238%20C%2087.86%204.074%2087.559%203.991%2087.204%203.991%20C%2086.852%203.991%2086.55%204.074%2086.296%204.239%20C%2086.042%204.404%2085.847%204.629%2085.712%204.912%20C%2085.576%205.213%2085.509%205.54%2085.515%205.87%20L%2085.515%206.62%20C%2085.515%207.047%2085.587%207.413%2085.731%207.717%20C%2085.879%208.017%2086.089%208.248%2086.359%208.409%20C%2086.63%208.566%2086.948%208.644%2087.312%208.644%20C%2087.562%208.644%2087.786%208.608%2087.984%208.536%20C%2088.177%208.467%2088.353%208.356%2088.499%208.212%20C%2088.642%208.072%2088.749%207.906%2088.816%207.711%20L%2090.326%207.921%20C%2090.228%208.313%2090.032%208.673%2089.756%208.968%20C%2089.476%209.268%2089.125%209.503%2088.702%209.672%20C%2088.282%209.842%2087.811%209.926%2087.286%209.926%20Z%20M%2072.643%209.781%20L%2072.643%202.818%20L%2074.191%202.818%20L%2074.235%204.443%20L%2074.115%204.443%20C%2074.225%204.041%2074.385%203.713%2074.597%203.459%20C%2074.798%203.212%2075.055%203.016%2075.347%202.888%20C%2075.63%202.761%2075.928%202.698%2076.241%202.698%20C%2076.753%202.698%2077.177%202.854%2077.511%203.167%20C%2077.849%203.48%2078.074%203.922%2078.184%204.494%20L%2077.987%204.494%20C%2078.066%204.132%2078.232%203.795%2078.469%203.51%20C%2078.691%203.248%2078.972%203.041%2079.289%202.907%20C%2079.615%202.766%2079.968%202.695%2080.323%202.697%20C%2080.746%202.697%2081.127%202.79%2081.465%202.977%20C%2081.808%203.159%2082.077%203.429%2082.272%203.789%20C%2082.47%204.149%2082.57%204.591%2082.57%205.116%20L%2082.57%209.781%20L%2080.939%209.781%20L%2080.939%205.363%20C%2080.939%204.923%2080.818%204.602%2080.577%204.398%20C%2080.333%204.19%2080.021%204.08%2079.701%204.088%20C%2079.434%204.088%2079.204%204.145%2079.009%204.258%20C%2078.816%204.371%2078.66%204.536%2078.559%204.735%20C%2078.449%204.953%2078.394%205.195%2078.399%205.439%20L%2078.399%209.781%20L%2076.813%209.781%20L%2076.813%205.287%20C%2076.813%204.923%2076.698%204.633%2076.47%204.417%20C%2076.246%204.197%2075.958%204.087%2075.606%204.087%20C%2075.366%204.087%2075.143%204.145%2074.94%204.259%20C%2074.737%204.374%2074.569%204.543%2074.458%204.748%20C%2074.339%204.963%2074.28%205.23%2074.28%205.548%20L%2074.28%209.781%20L%2072.642%209.781%20Z%20M%2067.291%209.915%20C%2066.724%209.915%2066.221%209.771%2065.781%209.483%20C%2065.344%209.191%2065%208.776%2064.746%208.239%20C%2064.496%207.701%2064.371%207.059%2064.371%206.309%20C%2064.371%205.552%2064.498%204.904%2064.752%204.367%20C%2065.01%203.829%2065.359%203.419%2065.799%203.135%20C%2066.244%202.851%2066.763%202.703%2067.291%202.71%20C%2067.668%202.71%2067.987%202.771%2068.25%202.894%20C%2068.516%203.013%2068.736%203.164%2068.91%203.351%20C%2069.083%203.533%2069.22%203.719%2069.322%203.91%20L%2069.38%203.91%20L%2069.38%202.818%20L%2070.998%202.818%20L%2070.998%209.781%20L%2069.38%209.781%20L%2069.38%208.696%20L%2069.322%208.696%20C%2069.211%208.908%2069.07%209.102%2068.903%209.273%20C%2068.726%209.46%2068.503%209.614%2068.237%209.737%20C%2067.938%209.863%2067.615%209.923%2067.291%209.915%20Z%20M%2067.723%208.563%20C%2068.078%208.563%2068.383%208.469%2068.637%208.283%20C%2068.901%208.079%2069.101%207.804%2069.215%207.49%20C%2069.35%207.147%2069.418%206.751%2069.418%206.303%20C%2069.418%205.85%2069.35%205.456%2069.214%205.123%20C%2069.103%204.811%2068.902%204.539%2068.637%204.341%20C%2068.387%204.155%2068.083%204.062%2067.723%204.062%20C%2067.363%204.062%2067.058%204.155%2066.809%204.342%20C%2066.559%204.528%2066.369%204.788%2066.237%205.122%20C%2066.107%205.456%2066.041%205.85%2066.041%206.302%20C%2066.041%206.752%2066.106%207.145%2066.237%207.483%20C%2066.369%207.822%2066.559%208.086%2066.809%208.277%20C%2067.063%208.467%2067.367%208.563%2067.723%208.563%20Z%20M%2059.909%209.781%20L%2059.909%202.818%20L%2061.489%202.818%20L%2061.489%203.98%20L%2061.546%203.98%20C%2061.673%203.577%2061.887%203.269%2062.188%203.053%20C%2062.488%202.837%2062.846%202.729%2063.26%202.729%20C%2063.358%202.729%2063.46%202.733%2063.565%202.742%20C%2063.671%202.75%2063.76%202.759%2063.832%202.767%20L%2063.832%204.253%20C%2063.725%204.23%2063.617%204.215%2063.508%204.209%20C%2063.361%204.192%2063.212%204.184%2063.064%204.184%20C%2062.776%204.184%2062.516%204.247%2062.283%204.374%20C%2062.054%204.497%2061.875%204.674%2061.743%204.907%20C%2061.607%205.16%2061.539%205.445%2061.546%205.732%20L%2061.546%209.782%20L%2059.909%209.782%20Z%20M%2052.647%209.781%20L%2052.647%200.323%20L%2058.804%200.323%20L%2058.804%201.758%20L%2054.336%201.758%20L%2054.336%204.513%20L%2058.411%204.513%20L%2058.411%205.928%20L%2054.336%205.928%20L%2054.336%209.781%20Z%20M%2043.265%205.744%20L%2043.265%209.781%20L%2041.628%209.781%20L%2041.628%202.818%20L%2043.195%202.818%20L%2043.215%204.551%20L%2043.024%204.551%20C%2043.223%203.946%2043.517%203.489%2043.906%203.18%20C%2044.296%202.867%2044.78%202.71%2045.36%202.71%20C%2045.842%202.71%2046.263%202.814%2046.623%203.021%20C%2046.987%203.228%2047.268%203.531%2047.467%203.929%20C%2047.67%204.322%2047.772%204.805%2047.772%205.376%20L%2047.772%209.781%20L%2046.141%209.781%20L%2046.141%205.63%20C%2046.141%205.147%2046.018%204.775%2045.773%204.513%20C%2045.531%204.246%2045.195%204.113%2044.763%204.113%20C%2044.475%204.113%2044.217%204.176%2043.989%204.303%20C%2043.762%204.429%2043.576%204.619%2043.456%204.849%20C%2043.329%205.09%2043.266%205.389%2043.266%205.744%20Z%20M%2038.353%209.781%20L%2038.353%202.818%20L%2039.99%202.818%20L%2039.99%209.781%20L%2038.352%209.781%20Z%20M%2039.171%201.815%20C%2038.919%201.821%2038.675%201.728%2038.491%201.555%20C%2038.31%201.389%2038.208%201.153%2038.212%200.907%20C%2038.208%200.663%2038.31%200.43%2038.492%200.267%20C%2038.674%200.091%2038.918%20-0.005%2039.171%200%20C%2039.438%200%2039.664%200.088%2039.851%200.266%20C%2040.041%200.44%2040.136%200.653%2040.136%200.907%20C%2040.136%201.161%2040.041%201.377%2039.85%201.555%20C%2039.667%201.728%2039.423%201.821%2039.171%201.815%20Z%20M%2030.741%209.927%20C%2030.043%209.927%2029.44%209.779%2028.932%209.483%20C%2028.426%209.185%2028.018%208.746%2027.758%208.22%20C%2027.488%207.678%2027.352%207.048%2027.352%206.328%20C%2027.352%205.618%2027.487%204.988%2027.758%204.443%20C%2028.015%203.917%2028.415%203.475%2028.913%203.167%20C%2029.408%202.858%2029.986%202.704%2030.646%202.704%20C%2031.095%202.704%2031.514%202.78%2031.903%202.932%20C%2032.293%203.079%2032.646%203.308%2032.938%203.605%20C%2033.234%203.901%2033.464%204.272%2033.629%204.715%20C%2033.799%205.155%2033.883%205.67%2033.883%206.258%20L%2033.883%206.748%20L%2028.083%206.748%20L%2028.083%205.629%20L%2033.066%205.629%20L%2032.316%205.946%20C%2032.316%205.553%2032.251%205.21%2032.12%204.918%20C%2032.005%204.641%2031.811%204.404%2031.561%204.238%20C%2031.316%204.074%2031.015%203.991%2030.66%203.991%20C%2030.34%203.983%2030.024%204.069%2029.752%204.239%20C%2029.498%204.404%2029.303%204.629%2029.168%204.912%20C%2029.032%205.213%2028.965%205.54%2028.971%205.87%20L%2028.971%206.62%20C%2028.971%207.047%2029.043%207.413%2029.187%207.717%20C%2029.335%208.017%2029.545%208.248%2029.816%208.409%20C%2030.086%208.566%2030.404%208.644%2030.768%208.644%20C%2031.018%208.644%2031.242%208.608%2031.441%208.536%20C%2031.634%208.467%2031.809%208.356%2031.955%208.212%20C%2032.099%208.072%2032.205%207.906%2032.272%207.711%20L%2033.782%207.921%20C%2033.684%208.313%2033.488%208.673%2033.212%208.968%20C%2032.932%209.268%2032.581%209.503%2032.158%209.672%20C%2031.707%209.847%2031.226%209.934%2030.742%209.926%20Z%20M%2022.312%209.915%20C%2021.777%209.924%2021.251%209.774%2020.801%209.483%20C%2020.361%209.191%2020.016%208.776%2019.766%208.239%20C%2019.516%207.701%2019.392%207.059%2019.392%206.309%20C%2019.392%205.552%2019.519%204.904%2019.772%204.367%20C%2020.027%203.829%2020.374%203.419%2020.814%203.135%20C%2021.254%202.852%2021.751%202.71%2022.305%202.71%20C%2022.682%202.71%2023.001%202.771%2023.264%202.894%20C%2023.53%203.013%2023.748%203.164%2023.918%203.351%20C%2024.091%203.533%2024.228%203.721%2024.33%203.916%20L%2024.381%203.916%20L%2024.381%200.323%20L%2026.019%200.323%20L%2026.019%209.781%20L%2024.413%209.781%20L%2024.413%208.689%20L%2024.343%208.689%20C%2024.233%208.904%2024.091%209.101%2023.923%209.273%20C%2023.734%209.468%2023.51%209.626%2023.263%209.737%20C%2023.001%209.855%2022.684%209.915%2022.312%209.915%20Z%20M%2022.737%208.563%20C%2023.092%208.563%2023.397%208.469%2023.651%208.283%20C%2023.915%208.079%2024.115%207.804%2024.229%207.49%20C%2024.364%207.147%2024.432%206.751%2024.432%206.303%20C%2024.432%205.85%2024.364%205.456%2024.229%205.123%20C%2024.118%204.811%2023.917%204.539%2023.651%204.341%20C%2023.385%204.151%2023.064%204.053%2022.737%204.062%20C%2022.41%204.053%2022.089%204.152%2021.823%204.342%20C%2021.573%204.528%2021.383%204.79%2021.252%205.128%20C%2021.118%205.505%2021.054%205.903%2021.062%206.303%20C%2021.062%206.751%2021.127%207.145%2021.258%207.483%20C%2021.389%207.822%2021.58%208.086%2021.829%208.277%20C%2022.079%208.467%2022.381%208.563%2022.737%208.563%20Z%20M%2014.352%209.915%20C%2013.817%209.924%2013.291%209.774%2012.841%209.483%20C%2012.405%209.191%2012.061%208.776%2011.806%208.239%20C%2011.556%207.701%2011.432%207.059%2011.432%206.309%20C%2011.432%205.552%2011.559%204.904%2011.812%204.367%20C%2012.071%203.829%2012.42%203.419%2012.86%203.135%20C%2013.3%202.852%2013.797%202.71%2014.352%202.71%20C%2014.728%202.71%2015.048%202.771%2015.31%202.894%20C%2015.577%203.013%2015.797%203.164%2015.97%203.351%20C%2016.144%203.533%2016.281%203.719%2016.383%203.91%20L%2016.44%203.91%20L%2016.44%202.818%20L%2018.059%202.818%20L%2018.059%209.781%20L%2016.44%209.781%20L%2016.44%208.696%20L%2016.383%208.696%20C%2016.272%208.908%2016.131%209.102%2015.964%209.273%20C%2015.786%209.46%2015.564%209.614%2015.298%209.737%20C%2014.999%209.863%2014.676%209.923%2014.352%209.915%20Z%20M%2014.783%208.563%20C%2015.139%208.563%2015.443%208.469%2015.697%208.283%20C%2015.951%208.093%2016.144%207.828%2016.275%207.49%20C%2016.41%207.147%2016.478%206.751%2016.478%206.303%20C%2016.478%205.85%2016.41%205.456%2016.275%205.123%20C%2016.164%204.811%2015.963%204.539%2015.697%204.341%20C%2015.447%204.155%2015.143%204.062%2014.783%204.062%20C%2014.423%204.062%2014.119%204.155%2013.869%204.342%20C%2013.608%204.543%2013.41%204.813%2013.298%205.122%20C%2013.167%205.456%2013.101%205.85%2013.101%206.302%20C%2013.101%206.752%2013.167%207.145%2013.298%207.483%20C%2013.429%207.822%2013.62%208.086%2013.869%208.277%20C%2014.123%208.467%2014.428%208.563%2014.783%208.563%20Z%20M%200%209.781%20L%200%200.323%20L%202.507%200.323%20L%204.322%205.236%20C%204.382%205.418%204.452%205.646%204.532%205.922%20C%204.612%206.197%204.695%206.493%204.779%206.811%20C%204.864%207.124%204.942%207.428%205.014%207.725%20C%205.09%208.017%205.154%208.273%205.204%208.493%20L%204.843%208.493%20C%205.045%207.633%205.267%206.778%205.509%205.928%20C%205.589%205.648%205.662%205.418%205.725%205.236%20L%207.509%200.323%20L%2010.023%200.323%20L%2010.023%209.781%20L%208.347%209.781%20L%208.347%204.989%20C%208.35%204.443%208.358%203.897%208.372%203.351%20L%208.398%202.38%20C%208.406%202.054%208.412%201.743%208.417%201.447%20L%208.563%201.447%20C%208.473%201.773%208.379%202.107%208.277%202.45%20L%207.979%203.446%20C%207.886%203.764%207.795%204.056%207.706%204.322%20C%207.636%204.546%207.561%204.768%207.483%204.989%20L%205.719%209.781%20L%204.303%209.781%20L%202.513%204.989%20L%202.291%204.329%20C%202.198%204.04%202.107%203.75%202.018%203.459%20L%201.713%202.469%20C%201.613%202.129%201.514%201.788%201.415%201.447%20L%201.593%201.447%20C%201.597%201.73%201.603%202.035%201.612%202.361%20C%201.62%202.682%201.627%203.006%201.631%203.332%20C%201.639%203.654%201.646%203.958%201.65%204.246%20C%201.658%204.534%201.663%204.781%201.663%204.989%20L%201.663%209.781%20Z\%22%20fill=\%22var%28--1bd4d3i,%20rgb%280,%200,%200)] relative aspect-[9.7_/_1] bg-black box-border caret-transparent shrink-0 [mask-clip:border-box,border-box] [mask-composite:add,add] [mask-mode:match-source,match-source] [mask-origin:border-box,border-box] [mask-repeat:no-repeat,no-repeat] [mask-size:auto,auto] w-[97px] [mask-position:50%,50%]"></div>
          </div>
          <div className="[mask-image:linear-gradient(rgba(0,0,0,0)_65%,rgb(0,0,0)_100%)] absolute shadow-[rgb(0,0,0)_0px_0px_0px_1px_inset] box-border caret-transparent shrink-0 opacity-[0.06] pointer-events-none rounded-[11px] inset-0"></div>
          <div className="absolute shadow-[rgb(0,0,0)_0px_0px_0px_1px_inset] box-border caret-transparent shrink-0 opacity-[0.04] pointer-events-none rounded-[11px] inset-0"></div>
        </a>
      </div>
      <div className="absolute box-border caret-transparent h-0 w-0 z-0 overflow-hidden left-0 bottom-0">
        <img
          src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-7.svg"
          alt="Icon"
          className="box-border caret-transparent"
        />
        <img
          src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-8.svg"
          alt="Icon"
          className="box-border caret-transparent h-[26px] w-[89px]"
        />
        <img
          src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-9.svg"
          alt="Icon"
          className="box-border caret-transparent"
        />
      </div>
      <div className="fixed items-center box-border caret-transparent gap-x-2 flex gap-y-2 translate-y-[50.0%] z-[2147483647] right-2.5 bottom-2/4">
        <button
          type="button"
          className="text-white items-center backdrop-blur-[10px] bg-neutral-800/80 shadow-[rgba(0,0,0,0.1)_0px_2px_4px_0px,rgba(0,0,0,0.05)_0px_1px_0px_0px,rgba(255,255,255,0.15)_0px_0px_0px_1px] caret-transparent flex h-[30px] justify-center w-[30px] p-0 rounded-[15px]"
        >
          <img
            src="https://c.animaapp.com/mii2lh2ySfDfMv/assets/icon-10.svg"
            alt="Icon"
            className="box-border caret-transparent h-3.5 w-3.5"
          />
        </button>
      </div>
      <iframe className="fixed box-border caret-transparent h-[1000px] w-screen z-[2147483646] left-0 top-0"></iframe>
    </body>
  );
};

```

## src/index.tsx

```
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

```

## .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

## index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Anima Project - Automatically generated by Anima</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link href="tailwind.css" rel="stylesheet" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./src/index.tsx"></script>
  </body>
</html>

```

## package.json

```
{
  "version": "1.0.0",
  "source": "./index.html",
  "type": "module",
  "name": "anima-project",
  "description": "A React project automatically generated by Anima",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "lucide-react": "^0.453.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "@radix-ui/react-slot": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-toggle": "^1.1.0"
  },
  "devDependencies": {
    "@types/react": "18.2.0",
    "@types/react-dom": "18.2.0",
    "@vitejs/plugin-react": "4.3.4",
    "esbuild": "0.25.5",
    "globals": "15.12.0",
    "tailwindcss": "3.4.16",
    "vite": "6.3.5"
  },
  "alias": {
    "@/*": "./src/components/ui/$1"
  }
}

```

## tailwind.config.js

```
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        "dm_sans": ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        "inter": ["Inter", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        "cabinet_grotesk": ["Cabinet Grotesk", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};

```

## tailwind.css

```
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'DM Sans';
  src: url('https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2') format("woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'DM Sans';
  src: url('https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2') format("woff2");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'DM Sans';
  src: url('https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2') format("woff2");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'DM Sans';
  src: url('https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2') format("woff2");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'DM Sans';
  src: url('https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAC5tRSW32.woff2') format("woff2");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2') format("woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  /* This font could not be included automatically because of legal reasons. Please add it manually or switch to another font */
  font-family: 'Cabinet Grotesk';
  font-weight: 700;
  font-style: normal;
}

@tailwind base;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --card: transparent;
    --card-foreground: 222.2 47.4% 11.2%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --card: transparent;
    --card-foreground: 213 31% 91%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

```

## tsconfig.app.json

```
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": [
    "src"
  ]
}

```

## tsconfig.json

```
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ]
}

```

## tsconfig.node.json

```
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": [
      "ES2023"
    ],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": [
    "vite.config.ts"
  ]
}

```

## vite.config.ts

```
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

```

