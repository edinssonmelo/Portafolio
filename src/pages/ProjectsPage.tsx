import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { PortfolioGrid } from "@/sections/Portfolio/components/PortfolioGrid";

// Framer styles - matching exact HTML structure with provided styles
const framerStyles = `
  :root {
    --token-814ba147-a537-49ca-a749-ad001269441d: rgb(117, 117, 200);
    --token-f0f88879-8f97-453f-bf01-02c87f4fc7ed: rgb(227, 242, 255);
    --token-4905cbc5-920c-46e6-ae67-5eefd4b3b71a: rgb(255, 255, 255);
    --token-ed2b060b-ee47-41d7-a340-7b525d6c7baf: rgb(243, 255, 227);
    --token-ee207329-39a3-4a17-99c3-4781863062d4: rgb(253, 228, 249);
    --token-eef77100-1683-4cbd-9ffa-a8c479945e12: rgb(247, 247, 247);
    --token-0183e0f6-7c96-4dcf-b5fc-d9a1f40026d7: rgb(29, 29, 29);
    --token-643ba14e-b49b-4267-9bfa-aa898cbda716: rgb(227, 227, 255);
    --token-85af214e-eae7-42bb-a6d5-6905a52b7eaa: rgb(255, 238, 235);
    --token-c7ba0408-ba2b-4d66-9939-1d70cdff2b6d: rgb(255, 245, 201);
    --token-e44705fc-51fc-4159-8b83-1a4a26283e62: rgb(136, 136, 136);
    --token-e8928a8d-7029-4726-8878-c68ebe006343: rgb(142, 129, 156);
    --token-a2d77a64-b82f-4717-b46b-3a18ec822437: rgb(245, 245, 245);
    --token-c9c56729-ae5e-439e-8eee-0ead5040ae63: rgb(220, 255, 49);
    --token-a30aeec3-92fa-40d8-9154-48fec4ccbe01: rgb(75, 251, 186);
    --framer-aspect-ratio-supported: auto;
    --framer-will-change-override: none;
    --framer-will-change-filter-override: none;
    --border-bottom-width: 2px;
    --border-color: var(--token-0183e0f6-7c96-4dcf-b5fc-d9a1f40026d7, rgb(29, 29, 29));
    --border-left-width: 0px;
    --border-right-width: 0px;
    --border-style: solid;
    --border-top-width: 0px;
  }
  .framer-n10lk4 {
    font-size: 12px;
    font-family: sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: inherit;
    place-content: center;
    align-items: center;
    background-color: rgba(75, 251, 186, 0.7);
    display: flex;
    flex: 0 0 auto;
    flex-flow: row;
    gap: 10px;
    height: min-content;
    overflow: var(--overflow-clip-fallback, clip);
    padding: 200px 30px 120px;
    position: relative;
    width: 100%;
  }
  .framer-n10lk4::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 2px solid rgb(29, 29, 29);
    pointer-events: none;
  }
  .framer-1wp97un {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    gap: 50px;
    overflow: visible;
  }
  .framer-d2ccuk {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 25px;
    overflow: visible;
    z-index: 1;
  }
  .framer-4uqw1t-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .framer-E8dHw {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 5px 15px;
    background-color: var(--token-4905cbc5-920c-46e6-ae67-5eefd4b3b71a, rgb(255, 255, 255));
    border-radius: 20px;
    border-width: 2px;
    border-color: rgb(29, 29, 29);
    border-style: solid;
  }
  .framer-qawh19 {
    width: 11px;
    height: 12px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    image-rendering: pixelated;
    opacity: 1;
  }
  .framer-qawh19[style*="image-rendering"] {
    image-rendering: pixelated;
  }
  .framer-qawh19 .svgContainer {
    width: 100%;
    height: 100%;
    aspect-ratio: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .framer-qawh19 img {
    width: 100%;
    height: 100%;
  }
  .framer-1yta82o {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: nowrap;
  }
  .framer-1x5e60y {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 25px;
    z-index: 1;
  }
  .framer-1x3i7q5 {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
  .framer-l9isdh {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
  }
  .framer-vhn0pe {
    font-size: 12px;
    font-family: sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: inherit;
    place-content: center;
    align-items: center;
    background-color: var(--token-eef77100-1683-4cbd-9ffa-a8c479945e12, #f7f7f7);
    display: flex;
    flex: 0 0 auto;
    flex-flow: row;
    gap: 10px;
    height: min-content;
    overflow: hidden;
    padding: 150px 30px;
    position: relative;
    width: 100%;
  }
  .framer-1tzslfd {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    gap: 50px;
    overflow: visible;
  }
  .framer-12skgaa {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 60px;
    overflow: visible;
  }
  @media (min-width: 768px) {
    .framer-12skgaa {
      display: grid;
      grid-template-columns: repeat(2, minmax(50px, 1fr));
      gap: 70px;
    }
  }
  .framer-bq3x1l {
    position: absolute;
    width: 625px;
    height: 760px;
    left: -26px;
    top: -150px;
    pointer-events: none;
    overflow: visible;
    box-sizing: border-box;
    -webkit-font-smoothing: inherit;
    flex: 0 0 auto;
    z-index: -1;
  }
  .framer-text {
    margin: 0;
    padding: 0;
  }
  .framer-styles-preset-7ix8th {
    font-family: "Cabinet Grotesk", sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: -0.44px;
    color: rgb(29, 29, 29);
    text-align: center;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 767px) {
    .framer-styles-preset-7ix8th {
      font-size: 36px;
      line-height: 42px;
      letter-spacing: -0.36px;
    }
  }
  .framer-styles-preset-1tewpy5 {
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: rgb(29, 29, 29);
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .framer-1c4o49v-container {
    will-change: transform;
    opacity: 1;
    transform: none;
  }
  .framer-SH5bS {
    width: 100%;
    opacity: 1;
  }
  .framer-EbdTE,
  .framer-Z3lDx,
  .framer-6CPdp,
  .framer-gdei9x,
  .framer-v-gdei9x {
    /* Additional article classes */
  }
  .framer-15xo5zk {
    border-radius: 20px;
    opacity: 1;
    position: relative;
    display: block;
    width: 100%;
    overflow: hidden;
    border: 2px solid var(--token-a30aeec3-92fa-40d8-9154-48fec4ccbe01, rgb(75, 251, 186));
  }
  .framer-1nsrbbs {
    /* Link variant class */
  }
  [data-framer-background-image-wrapper="true"] {
    position: absolute;
    border-radius: inherit;
    inset: 0px;
  }
  .framer-1eggn5p {
    opacity: 1;
    position: relative;
  }
  .framer-1pcd6rq {
    opacity: 1;
    position: relative;
  }
  .framer-1lxnvfm {
    transform: none;
    opacity: 1;
    position: relative;
  }
  .framer-styles-preset-1ar9m74 {
    font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    color: rgb(29, 29, 29);
    margin: 0;
    padding: 0;
  }
  .framer-styles-preset-bvaekr {
    font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    color: rgb(29, 29, 29);
    text-decoration: none;
  }
  .framer-styles-preset-bvaekr:hover {
    text-decoration: underline;
  }
  .framer-litull {
    transform: none;
    opacity: 1;
    position: relative;
  }
  .framer-t7x7qq-container {
    opacity: 1;
    position: relative;
  }
  .framer-WDvTL {
    opacity: 1;
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
    text-decoration: none;
  }
  .framer-qk9i8v,
  .framer-v-qk9i8v,
  .framer-1llosy0 {
    /* Link variant classes */
  }
  .framer-nax1xm {
    transform: none;
    opacity: 1;
    will-change: auto;
    position: relative;
  }
  .framer-kyl9xd {
    image-rendering: pixelated;
    flex-shrink: 0;
    opacity: 1;
    width: 19px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .framer-kyl9xd .svgContainer {
    width: 100%;
    height: 100%;
    aspect-ratio: inherit;
  }
  .framer-kyl9xd svg {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectsPage = () => {
    return (
        <>
            <style>{framerStyles}</style>
            <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
                <div className="box-border caret-transparent">
                    <Header />

                    {/* Hero Section */}
                    <section className="framer-n10lk4 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:border-b-2 after:border-separate after:border-solid after:left-0 after:bottom-0 after:font-sans_serif" data-border="true" data-framer-name="Hero">
                        <div className="framer-1wp97un" data-framer-name="Container">
                            <div className="framer-d2ccuk" data-framer-name="Text Wrapper">
                                {/* Badge Container */}
                                <div className="framer-4uqw1t-container" style={{ willChange: 'transform', opacity: 1, transform: 'none' }}>
                                    <div
                                        className="framer-E8dHw framer-pb59gj framer-v-pb59gj"
                                        data-border="true"
                                        data-framer-name="Default"
                                        style={{
                                            '--border-bottom-width': '2px',
                                            '--border-color': 'var(--token-0183e0f6-7c96-4dcf-b5fc-d9a1f40026d7, rgb(29, 29, 29))',
                                            '--border-left-width': '2px',
                                            '--border-right-width': '2px',
                                            '--border-style': 'solid',
                                            '--border-top-width': '2px',
                                            backgroundColor: 'var(--token-4905cbc5-920c-46e6-ae67-5eefd4b3b71a, rgb(255, 255, 255))',
                                            borderRadius: '20px',
                                            opacity: 1,
                                            borderWidth: '2px',
                                            borderColor: 'rgb(29, 29, 29)',
                                            borderStyle: 'solid',
                                        } as React.CSSProperties & Record<string, any>}
                                    >
                                        {/* SVG Icon */}
                                        <div
                                            data-framer-component-type="SVG"
                                            data-framer-name="Icon"
                                            className="framer-qawh19"
                                            aria-hidden="true"
                                            style={{ imageRendering: 'pixelated', flexShrink: 0, opacity: 1 }}
                                        >
                                            <div className="svgContainer" style={{ width: '100%', height: '100%', aspectRatio: 'inherit' }}>
                                                <img
                                                    src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
                                                    alt="Icon"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        </div>
                                        {/* Badge Text */}
                                        <div
                                            className="framer-1yta82o"
                                            data-framer-name="HELLO!"
                                            data-framer-component-type="RichTextContainer"
                                            style={{
                                                '--extracted-r6o4lv': 'var(--token-0183e0f6-7c96-4dcf-b5fc-d9a1f40026d7, rgb(29, 29, 29))',
                                                '--framer-paragraph-spacing': '0px',
                                                transform: 'none',
                                                opacity: 1
                                            } as React.CSSProperties & Record<string, any>}
                                        >
                                            <p
                                                className="framer-text"
                                                style={{
                                                    '--font-selector': 'R0Y7RE0gU2Fucy05MDA=',
                                                    '--framer-font-family': '"DM Sans", sans-serif',
                                                    '--framer-font-size': '13px',
                                                    '--framer-font-weight': '900',
                                                    '--framer-letter-spacing': '0.05em',
                                                    '--framer-line-height': '23px',
                                                    '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-0183e0f6-7c96-4dcf-b5fc-d9a1f40026d7, rgb(29, 29, 29)))',
                                                    '--framer-text-transform': 'uppercase',
                                                    fontFamily: '"DM Sans", sans-serif',
                                                    fontSize: '13px',
                                                    fontWeight: '900',
                                                    letterSpacing: '0.05em',
                                                    lineHeight: '23px',
                                                    color: 'rgb(29, 29, 29)',
                                                    textTransform: 'uppercase',
                                                } as React.CSSProperties & Record<string, any>}
                                            >
                                                My Works
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Heading Wrapper */}
                                <div className="framer-1x5e60y" data-framer-name="Heading Wrapper">
                                    <div
                                        className="framer-1x3i7q5"
                                        data-framer-name="Title"
                                        data-framer-component-type="RichTextContainer"
                                        style={{ willChange: 'transform', opacity: 1, transform: 'none' }}
                                    >
                                        <h2 className="framer-text framer-styles-preset-7ix8th" data-styles-preset="jUzg5bhdC">
                                            Smart, Creative &amp; Awesome.
                                        </h2>
                                    </div>
                                    <div
                                        className="framer-l9isdh"
                                        data-framer-name="Text"
                                        data-framer-component-type="RichTextContainer"
                                        style={{ willChange: 'transform', opacity: 1, transform: 'none' }}
                                    >
                                        <p
                                            className="framer-text framer-styles-preset-1tewpy5"
                                            data-styles-preset="AiKfkrYFk"
                                            style={{ '--framer-text-alignment': 'center', textAlign: 'center' } as React.CSSProperties & Record<string, any>}
                                        >
                                            Bringing ideas to life. Explore our work and see how creativity shapes meaningful, innovative solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full px-[30px] py-[100px] scroll-mt-10 md:py-[150px] md:scroll-mt-0">
                        <div className="relative content-center items-center box-border caret-transparent gap-x-[50px] flex basis-0 flex-col grow shrink-0 h-min justify-center max-w-[1140px] gap-y-[50px] w-px">
                            <div className="absolute box-border caret-transparent shrink-0 h-[760px] w-[625px] right-0 bottom-[15px]">
                                {/* Yellow-green gradient ellipse with blur */}
                                <svg
                                    className="absolute bottom-[-282px] box-border caret-transparent blur-[100px] shrink-0 left-[-477px] w-[377px] h-[340px] right-0 top-auto pointer-events-none md:top-[-251px] md:left-[-306px] md:right-[328px] md:bottom-[383px] md:w-[603px] md:h-[628px]"
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
                                    className="absolute bottom-[-210px] box-border caret-transparent blur-[100px] shrink-0 right-[-333px] w-[377px] h-[340px] left-0 top-auto pointer-events-none md:top-[-202px] md:left-[126px] md:right-[-97px] md:bottom-[420px] md:w-[596px] md:h-[542px]"
                                    viewBox="0 0 377 340"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
                                        fill="rgba(127, 230, 217, 0.4)"
                                    />
                                </svg>
                            </div>
                            <PortfolioGrid />
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </>
    );
};
