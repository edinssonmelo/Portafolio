import { NavLink } from "@/sections/Header/components/NavLink";

export const DesktopNav = () => {
  return (
    <nav className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[35px] md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[35px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <NavLink href="./#home" text="Home" isActive={true} />
      <NavLink href="./#services" text="Services" isActive={false} />
      <NavLink href="./#:hYmrCCNQt" text="About" isActive={false} />
      <NavLink href="./#portfolio" text="Portfolio" isActive={false} />
      <NavLink href="./#:Uz02Q55nb" text="Process" isActive={false} />
      <NavLink href="./#pricing" text="Pricing" isActive={false} />
      <NavLink href="./#contact" text="Contact" isActive={false} />
    </nav>
  );
};
