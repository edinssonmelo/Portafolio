import { BadgeCard } from "@/sections/Badges/components/BadgeCard";

const WorkanaIcon = () => (
    <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#CD7F32"
            stroke="#CD7F32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CodeforcesIcon = () => (
    <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="#1F8ACB"
        />
        <path
            d="M7 7L12 12L17 7M7 17L12 12L17 17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="1.5" fill="white" />
    </svg>
);

export const BadgeCarousel = () => {
    const badges = [
        {
            title: "Workana",
            subtitle: "Bronze Rank #162 Colombia",
            href: "https://www.workana.com/freelancer/4ec35c01fc86a61b905efce11c420353",
            icon: <WorkanaIcon />,
        },
        {
            title: "Codeforces",
            subtitle: "Specialist Rank #15 Colombia",
            href: "https://codeforces.com/profile/Mackenzie",
            icon: <CodeforcesIcon />,
        },
    ];

    // Duplicar badges múltiples veces para efecto infinito suave
    const duplicatedBadges = [...badges, ...badges, ...badges];

    return (
        <div className="relative w-full overflow-hidden py-2">
            <div className="flex animate-scroll" style={{ gap: "1.5rem" }}>
                {duplicatedBadges.map((badge, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: "320px" }}
                    >
                        <BadgeCard
                            title={badge.title}
                            subtitle={badge.subtitle}
                            href={badge.href}
                            icon={badge.icon}
                        />
                    </div>
                ))}
            </div>
            <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * ${badges.length} - 1.5rem * ${badges.length}));
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll ${20 * badges.length}s linear infinite;
          will-change: transform;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};
