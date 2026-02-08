import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import { PRIMARY_COLOR } from "@/config/colors";

const plansHomeStyles = `
.plans-home-card {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
}
.plans-home-card:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px ${PRIMARY_COLOR};
    border-color: ${PRIMARY_COLOR};
}
.plans-home-card.popular {
    border-color: ${PRIMARY_COLOR};
    box-shadow: 0 0 0 3px rgba(220, 255, 49, 0.2), 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.plans-home-card.popular:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px ${PRIMARY_COLOR};
}
.plans-home-card.selected {
    border-color: ${PRIMARY_COLOR};
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px ${PRIMARY_COLOR};
    transform: scale(1.05);
}
.plans-home-card.selected:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px ${PRIMARY_COLOR};
}
.plans-home-card.selected img {
    transform: scale(1.02);
}
.plans-home-belt {
    position: absolute;
    top: 15px;
    right: -30px;
    background: linear-gradient(135deg, rgba(75,251,186,0.7), rgba(220,255,49,0.7));
    color: white;
    padding: 4px 30px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    z-index: 10;
    transform: rotate(45deg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    width: 120px;
}
.plans-home-card img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}
.plans-home-card:hover img {
    transform: scale(1.02);
}
`;

const PLANS = [
  { id: "essential", image: "/planes/1.png", name: "Essential", popular: false },
  { id: "professional", image: "/planes/2.png", name: "Professional", popular: true },
  { id: "premium", image: "/planes/3.png", name: "Premium", popular: false },
];

const openWhatsApp = (planName: string) => {
  const message = encodeURIComponent(`Hola, estoy interesad@ en el plan ${planName}`);
  window.open(`https://wa.me/573202633111?text=${message}`, "_blank");
};

export const PlansSection = () => {
  const [hoveredPlanId, setHoveredPlanId] = useState<string | null>(null);
  const showPreselected = hoveredPlanId === null;

  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-[15px] flex flex-col shrink-0 h-min justify-center gap-y-[15px] w-full overflow-hidden mt-10">
      <style>{plansHomeStyles}</style>
      <SectionHeader
        iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
        label="Plans"
        title="Web Development Plans"
        showBreak={true}
        variant="content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center max-w-[650px] gap-y-[25px] w-full md:max-w-[750px]"
      />
      <br />
      <br />
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              onClick={() => openWhatsApp(plan.name)}
              onMouseEnter={() => setHoveredPlanId(plan.id)}
              onMouseLeave={() => setHoveredPlanId(null)}
              className={`plans-home-card ${plan.popular ? "popular" : ""} ${showPreselected && plan.id === "professional" ? "selected" : ""}`}
            >
              {plan.popular && (
                <div className="plans-home-belt">Most Popular</div>
              )}
              <img
                src={plan.image}
                alt={`Plan ${plan.name}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 relative px-4 pb-4 md:px-6 md:pb-6">
          <div className="relative box-border caret-transparent shrink-0 z-0">
            <div className="relative content-center items-center bg-transparent caret-transparent gap-x-2.5 flex flex-col h-min justify-center gap-y-2.5 text-center w-min p-0">
              <Link
                to="/planes"
                className="static text-black [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] inline shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto z-auto p-0 rounded-none no-underline md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:bg-white md:box-border md:caret-transparent md:gap-x-[7px] md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[7px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:z-[5] md:[mask-position:0%] md:bg-left-top md:px-[30px] md:py-[18px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-center after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
              >
                <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-stone-900 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.72px] md:leading-[19px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-dm_sans">
                    View All Plans
                  </p>
                </div>
              </Link>
              <div className="static bg-none box-content caret-black shrink h-auto w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-[conic-gradient(rgb(126,230,216)_0deg,rgb(220,255,49)_360deg)] md:box-border md:caret-transparent md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] md:left-0 md:top-1.5 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-center after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[10px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
