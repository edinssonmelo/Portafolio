import { Link } from "react-router-dom";
import { ServiceCard } from "@/sections/Services/components/ServiceCard";

export const ServiceGrid = () => {
  return (
    <div className="absolute content-center items-center box-border caret-transparent gap-x-[30px] flex flex-col shrink-0 h-min justify-center gap-y-[30px] translate-x-[-50.0%] translate-y-[-50.0%] w-full max-w-[1140px] left-2/4 top-2/4 px-4 md:gap-x-[69px] md:gap-y-[69px] md:px-0">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[20px] grid grid-cols-1 shrink-0 auto-rows-fr grid-rows-[repeat(4,auto)] h-min justify-items-center gap-y-[20px] w-full md:grid-cols-2 md:grid-rows-2 md:gap-x-[30px] md:gap-y-[30px] lg:gap-x-[35px] lg:gap-y-[35px]">
        {/* RESTAURADO DESDE ESTÁTICOS: descripciones de servicios */}
        <div className="box-content caret-black block w-full md:aspect-auto md:box-border md:caret-transparent md:flex md:h-full md:w-full md:max-w-[555px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-12.svg"
            iconAlt="Icon"
            iconVariant="md:w-[34px]"
            title="From Idea to MVP"
            description="I help you take your idea and turn it into a clear, functional MVP. I work with you to define what matters and build a first version you can show, test, and improve quickly."
          />
        </div>
        <div className="box-content caret-black block w-full md:aspect-auto md:box-border md:caret-transparent md:flex md:h-full md:w-full md:max-w-[555px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-13.svg"
            iconAlt="Icon"
            iconVariant=""
            title="UX / UI Design"
            description="I design clean, modern UI/UX interfaces so anyone can understand your product without friction. I focus on making everything look good and work even better."
          />
        </div>
        <div className="box-content caret-black block w-full md:aspect-auto md:box-border md:caret-transparent md:flex md:h-full md:w-full md:max-w-[555px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-14.svg"
            iconAlt="Icon"
            iconVariant="md:w-10"
            title="Fullstack Development (Web / Mobile)"
            description="I build fullstack software products (Web/Mobile). I use the best software engineering practices to deliver professional products that work great and look great."
          />
        </div>
        <div className="box-content caret-black block w-full md:aspect-auto md:box-border md:caret-transparent md:flex md:h-full md:w-full md:max-w-[555px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-15.svg"
            iconAlt="Icon"
            iconVariant=""
            title="AI Software Consulting"
            description="I provide E2E consulting throughout your entire product development journey. I guide you on AI integration, help you make the right decisions, and make it happen."
          />
        </div>
      </div>
      <div className="relative box-border caret-transparent shrink-0 z-0">
        <button className="relative content-center items-center bg-transparent caret-transparent gap-x-2.5 flex flex-col h-min justify-center gap-y-2.5 text-center w-min p-0">
          <Link
            to="/projects"
            className="relative text-blue-700 content-center items-center bg-white box-border caret-transparent gap-x-[7px] flex shrink-0 h-min justify-center gap-y-[7px] w-min z-10 px-[30px] py-[18px] rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif"
          >
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
              <p className="text-stone-900 text-lg font-semibold box-border caret-transparent tracking-[-0.72px] leading-[19px] text-left text-nowrap font-dm_sans">
                Check Portfolio
              </p>
            </div>
          </Link>
          <div className="absolute bg-[conic-gradient(rgb(126,230,216)_0deg,rgb(220,255,49)_360deg)] box-border caret-transparent shrink-0 h-full w-full rounded-[10px] left-0 top-1.5 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif"></div>
        </button>
      </div>
    </div>
  );
};
