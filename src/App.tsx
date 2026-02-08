import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { About } from "@/sections/About";
import { Testimonials } from "@/sections/Testimonials";
import { Portfolio } from "@/sections/Portfolio";
import { Stats } from "@/sections/Stats";
import { PlansSection } from "@/sections/About/components/PlansSection";
// import { Badges } from "@/sections/Badges";
import { CTA } from "@/sections/CTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { CotizacionPage } from "@/pages/CotizacionPage";
import { PlanesPage } from "@/pages/PlanesPage";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData } from "@/components/SEO/StructuredData";

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
        <section id="plans" className="relative content-center items-center bg-neutral-100 box-border caret-transparent flex shrink-0 h-min justify-center w-full overflow-clip pt-[100px] pb-20 px-[30px] md:py-[150px]">
          <div className="relative content-center items-center box-border caret-transparent flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[70px] w-px">
            <PlansSection />
          </div>
        </section>
        {/* <Badges /> */}
        <CTA />
        <Contact />
      </div>
      <div className="box-border caret-transparent"></div>
      <div className="relative box-border caret-transparent grow h-0 w-0 bg-[position:0px_0px]"></div>
      <Footer />
    </>
  );
};

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App = () => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <SEOHead />
      <StructuredData />
      <div className="box-border caret-transparent">
        <ScrollToHash />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 flex flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-clip">
              <HomePage />
            </div>
          } />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/cotizacion/sistema-barber" element={<CotizacionPage />} />
          <Route path="/planes" element={<PlanesPage />} />
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
    </div>
  );
};
