import { BadgeCarousel } from "@/sections/Badges/components/BadgeCarousel";

export const Badges = () => {
    return (
        <section className="relative content-center items-center bg-white box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full py-4 md:py-6">
            <div className="w-full overflow-hidden">
                <BadgeCarousel />
            </div>
        </section>
    );
};

