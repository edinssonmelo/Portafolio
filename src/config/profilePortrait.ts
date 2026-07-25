import type { CSSProperties } from 'react';

/** Portrait framing inside the circular mask (Hero + About). */
export const profilePortraitFrame = {
    scale: 1.07,
    translateX: -1,
    translateY: 3,
} as const;

export type ProfilePortraitFrame = {
    scale: number;
    translateX: number;
    translateY: number;
};

export function portraitFrameToStyle(frame: ProfilePortraitFrame): CSSProperties {
    return {
        objectFit: 'cover',
        transform: `translate(${frame.translateX}%, ${frame.translateY}%) scale(${frame.scale})`,
    };
}
