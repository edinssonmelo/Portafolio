import { AboutImage } from "@/sections/About/components/AboutImage";
import { AboutContent } from "@/sections/About/components/AboutContent";

export const About = () => {
  return (
    <section className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full overflow-clip pt-[100px] pb-20 px-[30px] md:py-[150px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-[70px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[70px] w-px">
        <div className="absolute box-border caret-transparent shrink-0 h-[760px] left-[-26px] top-[-150px] w-[625px]">
          {/* Yellow-green gradient ellipse with blur */}
          <svg
            className="absolute aspect-[1.108_/_1] bottom-[-282px] box-border caret-transparent blur-[100px] shrink-0 left-[-477px] w-[377px] h-[340px] right-0 md:aspect-[1.108_/_1] md:left-[-23px] md:w-[377px] md:h-[340px] md:right-auto md:-bottom-5 pointer-events-none"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(220, 255, 49, 0.4)"
            />
          </svg>
          {/* Cyan/turquoise gradient ellipse with blur */}
          <svg
            className="absolute aspect-[1.108_/_1] bottom-[-210px] box-border caret-transparent blur-[100px] shrink-0 right-[-333px] w-[377px] h-[340px] left-0 top-auto md:aspect-[1.108_/_1] md:left-[-23px] md:top-[-98px] md:w-[377px] md:h-[340px] md:right-auto md:bottom-auto pointer-events-none"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(127, 230, 217, 0.4)"
            />
          </svg>
          <AboutImage />
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-[50px] flex flex-col shrink-0 h-min justify-center gap-y-[50px] w-full md:gap-x-[70px] md:flex-row md:gap-y-[70px]">
          <div className="relative aspect-square box-border caret-transparent shrink-0 w-[540px] overflow-clip">
            <div className="absolute aspect-square box-border caret-transparent shrink-0 overflow-clip -left-2.5 top-0 bottom-auto md:bottom-0"></div>
          </div>
          <AboutContent />
          <div className="static box-content caret-black shrink h-auto w-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[57px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-29px] md:w-8 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-0"></div>
        </div>
        <div className="relative content-start items-start box-border caret-transparent gap-x-[70px] flex flex-col shrink-0 h-min justify-center gap-y-[70px] w-full md:gap-x-20 md:flex-row md:gap-y-20">
          <div className="relative content-start items-start box-border caret-transparent gap-x-[30px] flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-[30px] w-full md:basis-0 md:grow md:w-px">
            <div className="relative content-center items-center box-border caret-transparent gap-x-[15px] flex flex-col shrink-0 h-min justify-center gap-y-[15px] w-full">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                <h3 className="text-stone-900 text-3xl font-bold box-border caret-transparent tracking-[-0.3px] leading-9 break-words font-cabinet_grotesk md:text-[38px] md:tracking-[-0.38px] md:leading-[44px]">
                  My experiences
                </h3>
              </div>
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] break-words font-dm_sans">
                  I have had the pleasure to work with companies across a
                  variety of industries. I&#39;m always interested in new,
                  exciting and challenging adventures.
                </p>
              </div>
            </div>
            <div className="relative box-border caret-transparent shrink-0 z-0">
              <button className="relative content-center items-center bg-transparent caret-transparent gap-x-2.5 flex flex-col h-min justify-center gap-y-2.5 text-center w-min p-0">
                <a
                  href="./about"
                  className="relative text-blue-700 content-center items-center bg-white box-border caret-transparent gap-x-[7px] flex shrink-0 h-min justify-center gap-y-[7px] w-min z-10 px-[30px] py-[18px] rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif"
                >
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                    <p className="text-stone-900 text-lg font-semibold box-border caret-transparent tracking-[-0.72px] leading-[19px] text-left text-nowrap font-dm_sans">
                      More About Me
                    </p>
                  </div>
                </a>
                <div className="absolute bg-[conic-gradient(rgb(126,230,216)_0deg,rgb(220,255,49)_360deg)] box-border caret-transparent shrink-0 h-full w-full rounded-[10px] left-0 top-1.5 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif"></div>
              </button>
            </div>
          </div>
          <div className="relative content-center items-center box-border caret-transparent gap-x-[15px] flex flex-col shrink-0 h-min justify-start gap-y-[15px] w-full overflow-visible md:gap-x-0.5 md:gap-y-0.5 md:w-[700px] md:overflow-hidden">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-[30px] md:flex md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[30px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto pt-0 md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-end md:min-h-[auto] md:min-w-[170px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:pt-[5px] md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <h4 className="text-black text-base font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start normal-case text-wrap font-times md:text-stone-900 md:text-sm md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[0.7px] md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:uppercase md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
                        NOV 2017 - PRESENT
                      </h4>
                    </div>
                  </div>
                  <div className="static [align-items:normal] self-auto box-content caret-black gap-x-[normal] block flex-row shrink justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:self-stretch md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0.5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-yellow-300 md:box-border md:caret-transparent md:shrink-0 md:h-5 md:left-[calc(50%_-_10px)] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-5 md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[15px] md:top-1 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[15px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
                    <div className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:bg-stone-900 md:box-border md:caret-transparent md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[0%] md:top-[30px]"></div>
                  </div>
                  <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto pb-0 md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:pb-[30px] md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <h3 className="text-black text-[18.72px] font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-2xl md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.12px] md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
                        Creative Director at Malory House
                      </h3>
                    </div>
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
                        Led a talented team in crafting compelling brand
                        experiences. Focused on innovation, creative direction,
                        and delivering impactful digital solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-[30px] md:flex md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[30px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto pt-0 md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-end md:min-h-[auto] md:min-w-[170px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:pt-[5px] md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <h4 className="text-black text-base font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start normal-case text-wrap font-times md:text-stone-900 md:text-sm md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[0.7px] md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:uppercase md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
                        SEP 2015 - APR 2017
                      </h4>
                    </div>
                  </div>
                  <div className="static [align-items:normal] self-auto box-content caret-black gap-x-[normal] block flex-row shrink justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:self-stretch md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0.5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-yellow-300 md:box-border md:caret-transparent md:shrink-0 md:h-5 md:left-[calc(50%_-_10px)] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-5 md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[15px] md:top-1 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[15px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
                    <div className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:bg-stone-900 md:box-border md:caret-transparent md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[0%] md:top-[30px]"></div>
                  </div>
                  <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto pb-0 md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:pb-[30px] md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <h3 className="text-black text-[18.72px] font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-2xl md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.12px] md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
                        Senior Developer at Longwave Studio
                      </h3>
                    </div>
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
                        Collaborated with cross-functional teams to optimize
                        performance and enhance user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-[30px] md:flex md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[30px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto pt-0 md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-end md:min-h-[auto] md:min-w-[170px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:pt-[5px] md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <h4 className="text-black text-base font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start normal-case text-wrap font-times md:text-stone-900 md:text-sm md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[0.7px] md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:uppercase md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
                        MAY 2015 - SEP 2015
                      </h4>
                    </div>
                  </div>
                  <div className="static [align-items:normal] self-auto box-content caret-black gap-x-[normal] block flex-row shrink justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:self-stretch md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0.5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-yellow-300 md:box-border md:caret-transparent md:shrink-0 md:h-5 md:left-[calc(50%_-_10px)] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-5 md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[15px] md:top-1 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[15px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
                    <div className="static bg-transparent box-content caret-black shrink h-auto w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:bg-stone-900 md:box-border md:caret-transparent md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[0%] md:top-[30px]"></div>
                  </div>
                  <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto pb-0 md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:pb-[30px] md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <h3 className="text-black text-[18.72px] font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-2xl md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.12px] md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk">
                        Junior Developer at Webpaint Media
                      </h3>
                    </div>
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-900 md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
                        Assisted in front-end development and UI enhancements.
                        Contributed to coding, debugging and refining
                        interactive website elements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="static box-content caret-black shrink h-auto pointer-events-auto transform-none w-auto left-auto bottom-auto md:absolute md:aspect-auto md:bottom-[-91px] md:box-border md:caret-transparent md:shrink-0 md:h-[132px] md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[-14.99999492786973deg] md:w-[81px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[295px]">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[130px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[79px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-px md:top-0.5">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-16.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
