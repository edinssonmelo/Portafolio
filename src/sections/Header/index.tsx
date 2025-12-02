import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <div className="fixed box-border caret-transparent shrink-0 order-[-1000] translate-x-[-50.0%] w-full z-[20] left-2/4 top-0">
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <Navbar />
      </div>
    </div>
  );
};
