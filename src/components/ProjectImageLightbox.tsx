import { useEffect, useState } from "react";
import { X } from "lucide-react";

const LIGHTBOX_BTN_CLASS =
    "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-none bg-yellow-300 cursor-pointer md:h-[50px] md:w-[50px]";

type ProjectImageLightboxProps = {
    images: string[];
    initialIndex: number;
    title: string;
    onClose: () => void;
};

export const ProjectImageLightbox = ({
    images,
    initialIndex,
    title,
    onClose,
}: ProjectImageLightboxProps) => {
    const [index, setIndex] = useState(initialIndex);
    const slideCount = images.length;

    useEffect(() => {
        setIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
                return;
            }
            if (slideCount <= 1) return;
            if (event.key === "ArrowLeft") {
                setIndex((current) => (current - 1 + slideCount) % slideCount);
            }
            if (event.key === "ArrowRight") {
                setIndex((current) => (current + 1) % slideCount);
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose, slideCount]);

    const goToPrevious = () => {
        setIndex((current) => (current - 1 + slideCount) % slideCount);
    };

    const goToNext = () => {
        setIndex((current) => (current + 1) % slideCount);
    };

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-stone-900/95 p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image preview`}
            onClick={onClose}
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close preview"
            >
                <X className="h-5 w-5" strokeWidth={2.25} />
            </button>

            <div
                className="flex w-full max-w-6xl items-center justify-center gap-3 md:gap-5"
                onClick={(event) => event.stopPropagation()}
            >
                {slideCount > 1 ? (
                    <button
                        type="button"
                        onClick={goToPrevious}
                        className={LIGHTBOX_BTN_CLASS}
                        aria-label="Previous image"
                    >
                        <img
                            alt=""
                            src="https://c.animaapp.com/mih2ldgveCT36V/assets/3.avif"
                            className="h-full w-full"
                        />
                    </button>
                ) : null}

                <figure className="flex min-w-0 flex-1 flex-col items-center gap-3">
                    <img
                        src={images[index]}
                        alt={`${title} - ${index + 1}`}
                        className="max-h-[80dvh] w-auto max-w-full object-contain"
                    />
                    {slideCount > 1 ? (
                        <figcaption className="text-sm text-white/80 font-dm_sans">
                            {index + 1} / {slideCount}
                        </figcaption>
                    ) : null}
                </figure>

                {slideCount > 1 ? (
                    <button
                        type="button"
                        onClick={goToNext}
                        className={LIGHTBOX_BTN_CLASS}
                        aria-label="Next image"
                    >
                        <img
                            alt=""
                            src="https://c.animaapp.com/mih2ldgveCT36V/assets/4.avif"
                            className="h-full w-full"
                        />
                    </button>
                ) : null}
            </div>
        </div>
    );
};
