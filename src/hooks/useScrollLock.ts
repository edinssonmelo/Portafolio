import { useEffect } from 'react';

/** Locks page scroll while a modal or overlay is open. */
export function useScrollLock(active: boolean) {
    useEffect(() => {
        if (!active) return;

        const scrollY = window.scrollY;
        const { style } = document.body;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        const previous = {
            bodyOverflow: style.overflow,
            bodyPosition: style.position,
            bodyTop: style.top,
            bodyWidth: style.width,
            bodyPaddingRight: style.paddingRight,
            htmlOverflow: document.documentElement.style.overflow,
        };

        document.documentElement.style.overflow = 'hidden';
        style.overflow = 'hidden';
        style.position = 'fixed';
        style.top = `-${scrollY}px`;
        style.width = '100%';

        if (scrollbarWidth > 0) {
            style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            document.documentElement.style.overflow = previous.htmlOverflow;
            style.overflow = previous.bodyOverflow;
            style.position = previous.bodyPosition;
            style.top = previous.bodyTop;
            style.width = previous.bodyWidth;
            style.paddingRight = previous.bodyPaddingRight;
            window.scrollTo(0, scrollY);
        };
    }, [active]);
}
