import { CTACard } from "@/sections/CTA/components/CTACard";

export const CTA = () => {
  return (
    <section className="relative content-center items-center bg-white box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full pt-[100px] pb-[30px] px-[30px] scroll-mt-10 md:pt-[150px] md:pb-[50px] md:scroll-mt-0">
      <div className="relative content-center items-center box-border caret-transparent gap-x-20 flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-20 w-px md:gap-x-[100px] md:gap-y-[100px]">
        <div className="absolute bottom-[-206px] box-border caret-transparent shrink-0 h-[760px] left-[-103px] w-[625px]">
          {/* Yellow-green gradient ellipse with blur */}
          <svg
            className="absolute aspect-[1.108_/_1] bottom-[-282px] box-border caret-transparent blur-[100px] shrink-0 left-[-477px] w-[377px] h-[340px] right-0 top-auto md:aspect-[1.108_/_1] md:right-[-594px] md:top-[-473px] md:w-[377px] md:h-[340px] md:left-auto md:bottom-auto pointer-events-none"
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
            className="absolute aspect-[1.108_/_1] bottom-[-210px] box-border caret-transparent blur-[100px] shrink-0 right-[-333px] w-[377px] h-[340px] left-0 top-auto md:aspect-[1.108_/_1] md:right-[-135px] md:top-[-473px] md:w-[377px] md:h-[340px] md:left-auto md:bottom-auto pointer-events-none"
            viewBox="0 0 377 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
              fill="rgba(127, 230, 217, 0.4)"
            />
          </svg>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-[50px] flex flex-col shrink-0 h-min justify-center gap-y-[50px] w-full">
          <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center max-w-[600px] gap-y-10 w-full md:flex-row md:max-w-[800px]">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black basis-auto grow-0 shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:basis-0 md:grow md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <CTACard />
              </div>
            </div>
          </div>
        </div>
        <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-9 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[33px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-3 md:top-[68px]">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[33px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[29px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0.5 md:top-0.5">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-22.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
        </div>
        <div className="static box-content caret-black shrink h-auto w-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-11 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[31px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:-right-5 md:top-[25px]">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[21px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0.5 md:top-[9px]">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-23.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[11px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2.5 md:top-0.5">
            <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img
                src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-24.svg"
                alt="Icon"
                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center max-w-[700px] gap-y-5 w-full">
          <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full z-[1]">
              <h3 className="text-stone-900 text-3xl font-bold box-border caret-transparent tracking-[-0.3px] leading-9 break-words text-center font-cabinet_grotesk md:text-[38px] md:tracking-[-0.38px] md:leading-[44px]">
                Have questions?
              </h3>
            </div>
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] break-words text-center font-dm_sans">
                I&#39;ve gathered common questions and their answers to make
                your experience smoother. If you can&#39;t find what you&#39;re
                looking for, feel free to reach out to me.
              </p>
            </div>
          </div>
          <div className="relative content-center items-center box-border caret-transparent gap-x-[70px] flex shrink-0 h-min justify-center gap-y-[70px] w-full overflow-hidden">
            <div className="relative box-border caret-transparent basis-0 grow shrink-0 w-px z-[1]">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent w-full">
                  <div className="box-border caret-transparent border-stone-900 overflow-hidden border-b-2 border-solid">
                    <div className="items-center bg-transparent box-border caret-transparent flex justify-between py-[26px]">
                      <div className="items-center box-border caret-transparent flex">
                        <span className="text-stone-900 text-xl font-bold box-border caret-transparent block tracking-[-0.1px] leading-[26px] text-left font-cabinet_grotesk">
                          Do you charge hourly or on spec?
                        </span>
                      </div>
                      <img
                        src="https://c.animaapp.com/mih2ldgveCT36V/assets/LLNGTQJwvYCj5LIs9LlGQGZwWQ.svg"
                        alt="icon"
                        className="box-border caret-transparent h-[22px] w-[22px] ml-[22px]"
                      />
                    </div>
                    <div className="box-border caret-transparent h-0 overflow-hidden">
                      <div className="box-border caret-transparent">
                        <div className="items-start box-border caret-transparent flex pb-[26px]">
                          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] text-left font-dm_sans">
                            I typically work on a flat-rate or per-project basis
                            to keep things transparent and simple for both
                            sides. This means you’ll know exactly what you’re
                            paying for upfront. For larger or ongoing work, I’m
                            also open to discussing flexible pricing models.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent border-stone-900 overflow-hidden border-b-2 border-solid">
                    <div className="items-center bg-transparent box-border caret-transparent flex justify-between py-[26px]">
                      <div className="items-center box-border caret-transparent flex">
                        <span className="text-stone-900 text-xl font-bold box-border caret-transparent block tracking-[-0.1px] leading-[26px] text-left font-cabinet_grotesk">
                          How long have you been doing design?
                        </span>
                      </div>
                      <img
                        src="https://c.animaapp.com/mih2ldgveCT36V/assets/LLNGTQJwvYCj5LIs9LlGQGZwWQ.svg"
                        alt="icon"
                        className="box-border caret-transparent h-[22px] w-[22px] ml-[22px]"
                      />
                    </div>
                    <div className="box-border caret-transparent h-0 overflow-hidden">
                      <div className="box-border caret-transparent">
                        <div className="items-start box-border caret-transparent flex pb-[26px]">
                          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] text-left font-dm_sans">
                            I’ve been designing professionally for several
                            years, working with clients across different
                            industries. It’s a craft I’ve refined with both
                            passion and experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent border-stone-900 overflow-hidden border-b-2 border-solid">
                    <div className="items-center bg-transparent box-border caret-transparent flex justify-between py-[26px]">
                      <div className="items-center box-border caret-transparent flex">
                        <span className="text-stone-900 text-xl font-bold box-border caret-transparent block tracking-[-0.1px] leading-[26px] text-left font-cabinet_grotesk">
                          Can you do a couple of designs to see if I like what
                          you do?
                        </span>
                      </div>
                      <img
                        src="https://c.animaapp.com/mih2ldgveCT36V/assets/LLNGTQJwvYCj5LIs9LlGQGZwWQ.svg"
                        alt="icon"
                        className="box-border caret-transparent h-[22px] w-[22px] ml-[22px]"
                      />
                    </div>
                    <div className="box-border caret-transparent h-0 overflow-hidden">
                      <div className="box-border caret-transparent">
                        <div className="items-start box-border caret-transparent flex pb-[26px]">
                          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] text-left font-dm_sans">
                            I don’t offer free trial designs, but you can review
                            my past work to get a strong sense of my style and
                            quality. I’m happy to walk you through my process
                            too.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent border-stone-900 overflow-hidden border-b-2 border-solid">
                    <div className="items-center bg-transparent box-border caret-transparent flex justify-between py-[26px]">
                      <div className="items-center box-border caret-transparent flex">
                        <span className="text-stone-900 text-xl font-bold box-border caret-transparent block tracking-[-0.1px] leading-[26px] text-left font-cabinet_grotesk">
                          What is the process and how long does it take?
                        </span>
                      </div>
                      <img
                        src="https://c.animaapp.com/mih2ldgveCT36V/assets/LLNGTQJwvYCj5LIs9LlGQGZwWQ.svg"
                        alt="icon"
                        className="box-border caret-transparent h-[22px] w-[22px] ml-[22px]"
                      />
                    </div>
                    <div className="box-border caret-transparent h-0 overflow-hidden">
                      <div className="box-border caret-transparent">
                        <div className="items-start box-border caret-transparent flex pb-[26px]">
                          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] text-left font-dm_sans">
                            I start with a discovery call or brief to understand
                            your needs. From concept to final delivery, it
                            usually takes 1–3 weeks depending on the project’s
                            scope.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
