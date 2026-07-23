import { GradientButton } from "@/components/GradientButton";

export const CTACard = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-8 overflow-hidden rounded-[20px] border-2 border-stone-900 bg-white p-8 md:gap-10 md:p-[60px]">
      <div className="flex w-full flex-col items-center gap-6 text-center md:gap-[35px]">
        <div className="flex w-full flex-col items-center gap-4 md:gap-6">
          <h2 className="text-stone-900 text-3xl font-bold tracking-[-0.4px] leading-tight font-cabinet_grotesk md:text-[40px] md:leading-[46px]">
            Let&apos;s Talk
          </h2>
          <p className="text-stone-900 text-base leading-relaxed font-dm_sans md:text-lg md:leading-[30px]">
            If you&apos;d like to talk about your product, startup idea, or how
            AI can accelerate your roadmap, book a short call.
          </p>
        </div>
      </div>
      <GradientButton href="https://calendly.com/edinssonadrian/30min" external>
        <span className="text-lg font-semibold tracking-[-0.72px] leading-[19px] text-stone-900 font-dm_sans">
          Schedule a Call
        </span>
      </GradientButton>
    </div>
  );
};
