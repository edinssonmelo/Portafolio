import { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CREDENTIALS } from '@/data/credentials';
import { CredentialBadge } from '@/sections/Stats/components/CredentialBadge';

const AUTO_SCROLL_MS = 2500;
const RESUME_AFTER_SCROLL_MS = 1200;
const BADGE_WIDTH_PX = 248;
const LOOP_SETS = 3;
const SCROLL_TRANSITION_MS = 650;

type CredentialsCarouselProps = {
    onOpenModal: (modalId: string) => void;
    isPaused?: boolean;
};

export const CredentialsCarousel = ({ onOpenModal, isPaused = false }: CredentialsCarouselProps) => {
    const { t } = useTranslation('stats');
    const carouselRef = useRef<HTMLUListElement>(null);
    const autoScrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const physicalIndexRef = useRef(0);
    const isAutoScrollingRef = useRef(false);
    const isPausedRef = useRef(isPaused);
    const itemCount = CREDENTIALS.length;
    const middleSetStart = itemCount;

    isPausedRef.current = isPaused;

    const loopItems = Array.from({ length: LOOP_SETS }, (_, setIndex) =>
        CREDENTIALS.map((credential) => ({
            credential,
            key: `${credential.id}-${setIndex}`,
        })),
    ).flat();

    const clearAutoScroll = useCallback(() => {
        if (autoScrollIntervalRef.current) {
            clearInterval(autoScrollIntervalRef.current);
            autoScrollIntervalRef.current = null;
        }
    }, []);

    const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const item = carousel.children[index] as HTMLElement | undefined;
        if (!item) return;

        const scrollLeft = item.offsetLeft - (carousel.clientWidth - item.clientWidth) / 2;

        isAutoScrollingRef.current = true;
        carousel.scrollTo({
            left: Math.max(0, scrollLeft),
            behavior,
        });
        physicalIndexRef.current = index;

        window.setTimeout(() => {
            isAutoScrollingRef.current = false;
        }, behavior === 'smooth' ? SCROLL_TRANSITION_MS : 80);
    }, []);

    const advanceCarousel = useCallback(() => {
        const nextPhysical = physicalIndexRef.current + 1;
        const loopResetAt = itemCount * 2;

        if (nextPhysical >= loopResetAt) {
            scrollToIndex(nextPhysical, 'smooth');
            window.setTimeout(() => {
                const normalized = middleSetStart + (nextPhysical % itemCount);
                scrollToIndex(normalized, 'auto');
                physicalIndexRef.current = normalized;
            }, SCROLL_TRANSITION_MS);
            return;
        }

        scrollToIndex(nextPhysical, 'smooth');
    }, [itemCount, middleSetStart, scrollToIndex]);

    const startAutoScroll = useCallback(() => {
        clearAutoScroll();
        if (isPausedRef.current) return;

        autoScrollIntervalRef.current = setInterval(advanceCarousel, AUTO_SCROLL_MS);
    }, [advanceCarousel, clearAutoScroll]);

    useEffect(() => {
        scrollToIndex(middleSetStart, 'auto');
    }, [middleSetStart, scrollToIndex]);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

        const handleScroll = () => {
            if (isAutoScrollingRef.current) return;

            const slides = Array.from(carousel.children) as HTMLElement[];
            if (slides.length === 0) return;

            const carouselRect = carousel.getBoundingClientRect();
            const carouselCenter = carouselRect.left + carouselRect.width / 2;
            let closestIndex = 0;
            let closestDistance = Infinity;

            slides.forEach((slide, index) => {
                const slideRect = slide.getBoundingClientRect();
                const slideCenter = slideRect.left + slideRect.width / 2;
                const distance = Math.abs(slideCenter - carouselCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            physicalIndexRef.current = closestIndex;
            clearAutoScroll();

            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            scrollTimeout = setTimeout(() => {
                startAutoScroll();
            }, RESUME_AFTER_SCROLL_MS);
        };

        carousel.addEventListener('scroll', handleScroll, { passive: true });
        startAutoScroll();

        return () => {
            carousel.removeEventListener('scroll', handleScroll);
            clearAutoScroll();
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, [clearAutoScroll, startAutoScroll]);

    useEffect(() => {
        if (isPaused) {
            clearAutoScroll();
            return;
        }

        startAutoScroll();
        return clearAutoScroll;
    }, [isPaused, clearAutoScroll, startAutoScroll]);

    return (
        <section className="relative w-full" aria-roledescription="carousel">
            <ul
                ref={carouselRef}
                data-show-scrollbar="false"
                className="credentials-carousel m-0 flex list-none items-start gap-8 overflow-x-auto overflow-y-hidden py-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x] px-[max(1.5rem,calc(50%-124px))] scroll-px-[max(1.5rem,calc(50%-124px))]"
                style={{ WebkitOverflowScrolling: 'touch' }}
            >
                {loopItems.map(({ credential, key }) => (
                    <li
                        key={key}
                        className="box-border shrink-0 snap-center snap-always"
                        style={{ width: `${BADGE_WIDTH_PX}px` }}
                    >
                        <CredentialBadge
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
                    </li>
                ))}
            </ul>

            <style>{`
                .credentials-carousel[data-show-scrollbar='false']::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }
            `}</style>
        </section>
    );
};
