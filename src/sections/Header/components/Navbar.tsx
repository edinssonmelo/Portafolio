import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { NavActions } from "@/sections/Header/components/NavActions";

export const Navbar = () => {
  return (
    <header className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto px-0 md:relative md:content-center md:items-center md:aspect-auto md:bg-stone-900 md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:h-[100px] md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[30px] md:scroll-m-0 md:scroll-p-[auto] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:border-b-2 after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-0 md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-center md:max-w-[1140px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static [align-items:normal] box-content caret-black block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-between md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <Logo />
          </div>
          <DesktopNav />
          <NavActions />
        </div>
      </div>
    </header>
  );
};
