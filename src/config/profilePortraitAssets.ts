import { versionedSrc } from '@/config/publicAssets';

/** Intrinsic size of the largest portrait variant (see scripts/optimize-images.py). */
export const PROFILE_PORTRAIT_DISPLAY = {
    width: 560,
    height: 701,
} as const;

const portraitBase = '/assets/hero';

export const profilePortraitSources = {
    webp: {
        280: versionedSrc(`${portraitBase}-280.webp`),
        560: versionedSrc(`${portraitBase}-560.webp`),
    },
    png: {
        280: versionedSrc(`${portraitBase}-280.png`),
        560: versionedSrc(`${portraitBase}-560.png`),
    },
    fallback: versionedSrc(`${portraitBase}-560.png`),
} as const;

export const profilePortraitSrcSet = {
    webp: `${profilePortraitSources.webp[280]} 280w, ${profilePortraitSources.webp[560]} 560w`,
    png: `${profilePortraitSources.png[280]} 280w, ${profilePortraitSources.png[560]} 560w`,
} as const;

/** Preload URL for LCP (home hero). */
export const profilePortraitPreloadHref = profilePortraitSources.webp[560];
