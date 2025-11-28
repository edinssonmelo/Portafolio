import { Link } from "react-router-dom";

export const FooterLogo = () => {
  return (
    <Link
      to="/"
      className="static text-black box-content caret-black inline fill-black shrink min-h-0 min-w-0 w-auto md:relative md:text-stone-900 md:aspect-[3.42308_/_1] md:box-border md:caret-transparent md:block md:fill-stone-900 md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[89px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    >
      <div className="box-content caret-black fill-black h-auto w-auto md:aspect-[3.42308_/_1] md:box-border md:caret-transparent md:fill-stone-900 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-33.svg"
          alt="Icon"
          className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
      </div>
    </Link>
  );
};
