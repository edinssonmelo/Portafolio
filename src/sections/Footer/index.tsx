import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="relative content-center items-center bg-[linear-gradient(rgba(75,251,186,0.7)_0%,rgba(220,255,49,0.7)_100%)] box-border caret-transparent gap-x-[70px] flex flex-col shrink-0 h-min justify-center order-[1002] gap-y-[70px] w-full pt-[70px] pb-[120px] px-[30px] md:flex-row">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[70px] flex basis-auto grow-0 shrink-0 h-min justify-center max-w-[900px] gap-y-[70px] w-full md:basis-0 md:grow md:w-px">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <FooterContent />
          </div>
        </div>
      </div>
    </footer>
  );
};
