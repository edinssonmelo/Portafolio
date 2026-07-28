import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { CREDENTIALS } from '@/data/credentials';
import { CredentialBadge } from '@/sections/Stats/components/CredentialBadge';

const BADGE_WIDTH_PX = 248;
const BADGE_GAP_PX = 32;
const LOOP_SETS = 2;

type CredentialsCarouselProps = {
    onOpenModal: (modalId: string) => void;
    isPaused?: boolean;
};

export const CredentialsCarousel = ({ onOpenModal, isPaused = false }: CredentialsCarouselProps) => {
    const { t } = useTranslation('stats');
    const itemCount = CREDENTIALS.length;
    const loopWidthPx = itemCount * BADGE_WIDTH_PX + itemCount * BADGE_GAP_PX;
    const durationSeconds = itemCount * 14;

    const items = Array.from({ length: LOOP_SETS }, (_, setIndex) =>
        CREDENTIALS.map((credential) => ({ credential, key: `${credential.id}-${setIndex}` })),
    ).flat();

    return (
        <div className="relative w-full overflow-hidden py-2">
            <div
                className={`credentials-marquee flex w-max items-start${isPaused ? ' credentials-marquee--paused' : ''}`}
                style={
                    {
                        gap: `${BADGE_GAP_PX}px`,
                        '--credentials-loop-width': `${loopWidthPx}px`,
                        '--credentials-duration': `${durationSeconds}s`,
                    } as CSSProperties
                }
            >
                {items.map(({ credential, key }) => (
                    <CredentialBadge
                        key={key}
                        title={t(credential.titleKey)}
                        subtitle={t(credential.subtitleKey)}
                        detail={credential.detailKey ? t(credential.detailKey) : undefined}
                        imageSrc={credential.imageSrc}
                        href={credential.modalId ? undefined : credential.href}
                        onOpen={
                            credential.modalId
                                ? () => onOpenModal(credential.modalId ?? '')
                                : undefined
                        }
                    />
                ))}
            </div>

            <style>{`
                @keyframes credentials-marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-1 * var(--credentials-loop-width)));
                    }
                }

                .credentials-marquee {
                    animation: credentials-marquee var(--credentials-duration) linear infinite;
                    will-change: transform;
                }

                .credentials-marquee:hover,
                .credentials-marquee--paused {
                    animation-play-state: paused;
                }

                @media (prefers-reduced-motion: reduce) {
                    .credentials-marquee {
                        animation: none;
                        flex-wrap: wrap;
                        justify-content: center;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};
