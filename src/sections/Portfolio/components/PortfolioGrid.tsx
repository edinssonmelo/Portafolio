import { PortfolioCard } from "@/sections/Portfolio/components/PortfolioCard";

export const PortfolioGrid = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 auto-rows-[minmax(0px,1fr)] grid-cols-[repeat(2,minmax(50px,1fr))] h-min justify-start gap-y-[60px] w-full md:[align-items:normal] md:grid md:flex-row md:justify-center md:gap-y-[70px]">
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static self-auto box-content caret-black shrink h-auto justify-self-auto min-h-0 min-w-0 w-auto md:relative md:self-start md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-full md:justify-self-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <PortfolioCard
            href="/projects/wordjet-ai"
            imageUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/2.avif"
            imageSizes="max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)"
            imageVariant="md:aspect-[auto_1297_/_905]"
            title="Wordjet.ai"
            description="AI-powered document editor for long-form writing. Rich editor with embedded AI for generating, revising, and reviewing content."
            iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-19.svg"
          />
        </div>
      </div>
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static self-auto box-content caret-black shrink h-auto justify-self-auto min-h-0 min-w-0 w-auto md:relative md:self-start md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-full md:justify-self-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <PortfolioCard
            href="/projects/overup"
            imageUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/1.avif"
            imageSizes="max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)"
            imageVariant="md:aspect-[auto_1607_/_852]"
            title="OverUP"
            description="E-commerce store for OverUP, a streetwear clothing brand. Full online shop with catalog and checkout."
            iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-19.svg"
          />
        </div>
      </div>
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static self-auto box-content caret-black shrink h-auto justify-self-auto min-h-0 min-w-0 w-auto md:relative md:self-start md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-full md:justify-self-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <PortfolioCard
            href="/projects/tarsix-ai"
            imageUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/7.png"
            imageVariant="md:aspect-[auto_1277_/_872]"
            title="Tarsix.ai"
            description="WhatsApp integration platform for building and managing automated conversation flows and chatbots."
            iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-19.svg"
          />
        </div>
      </div>
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static self-auto box-content caret-black shrink h-auto justify-self-auto min-h-0 min-w-0 w-auto md:relative md:self-start md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-full md:justify-self-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <PortfolioCard
            href="/projects/superapp-mobile"
            imageUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/10.png"
            imageVariant="md:aspect-[auto_1019_/_747]"
            title="SuperApp Mobile"
            description="Cross-platform iOS/Android app for Seguros SURA: benefits, insurance policies, and the Vivemás program (sports, wellness, points, fitness)."
            iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-19.svg"
          />
        </div>
      </div>
    </div>
  );
};
