import { GradientButton } from "@/components/GradientButton";
import { SurfaceCard } from "@/components/SurfaceCard";

type CTACardProps = {
  className?: string;
};

export const CTACard = ({ className = "" }: CTACardProps) => {
  return (
    <SurfaceCard
      className={`flex w-full flex-col items-center justify-center gap-5 px-6 py-7 text-center md:gap-6 md:px-8 md:py-8 ${className}`}
    >
      <div className="flex max-w-[520px] flex-col items-center gap-3">
        <h2 className="font-cabinet_grotesk text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
          Let&apos;s Talk
        </h2>
        <p className="font-dm_sans text-base leading-relaxed text-stone-900 md:text-lg md:leading-7">
          If you&apos;d like to talk about your product, startup idea, or how AI
          can accelerate your roadmap, book a short call.
        </p>
      </div>
      <GradientButton href="https://calendly.com/edinssonadrian/30min" external>
        <span className="font-dm_sans text-lg font-semibold leading-[19px] tracking-[-0.72px] text-stone-900">
          Schedule a Call
        </span>
      </GradientButton>
    </SurfaceCard>
  );
};
