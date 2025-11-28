import { Routes, Route } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { About } from "@/sections/About";
import { Testimonials } from "@/sections/Testimonials";
import { Portfolio } from "@/sections/Portfolio";
import { Stats } from "@/sections/Stats";
import { CTA } from "@/sections/CTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { ProjectsPage } from "@/pages/ProjectsPage";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 contents flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-clip">
        <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-8 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-[100px]"></div>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Portfolio />
        <Stats />
        <CTA />
        <Contact />
      </div>
      <div className="box-border caret-transparent"></div>
      <div className="relative box-border caret-transparent grow h-0 w-0 bg-[position:0px_0px]"></div>
      <Footer />
    </>
  );
};

export const App = () => {
  return (
    <body className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <div className="box-border caret-transparent">
        <Routes>
          <Route path="/" element={
            <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 flex flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-clip">
              <HomePage />
            </div>
          } />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
        <div className="box-border caret-transparent"></div>
      </div>
      <div className="absolute box-border caret-transparent h-0 w-0 z-0 overflow-hidden left-0 bottom-0">
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-34.svg"
          alt="Icon"
          className="box-border caret-transparent"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-35.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-36.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-37.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-38.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-39.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-40.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-41.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-42.svg"
          alt="Icon"
          className="box-border caret-transparent"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-43.svg"
          alt="Icon"
          className="box-border caret-transparent"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-44.svg"
          alt="Icon"
          className="box-border caret-transparent"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-45.svg"
          alt="Icon"
          className="box-border caret-transparent"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-46.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-47.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-48.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-49.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-50.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-51.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-52.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-53.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-54.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-55.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-56.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-57.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-58.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-59.svg"
          alt="Icon"
          className="box-content caret-black block align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-60.svg"
          alt="Icon"
          className="box-border caret-transparent h-[26px] w-[89px]"
        />
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-61.svg"
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
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-62.svg"
            alt="Icon"
            className="box-border caret-transparent h-3.5 w-3.5"
          />
        </button>
      </div>
    </body>
  );
};
