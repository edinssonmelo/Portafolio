import optimizedImages from '@/config/optimizedImages.json';
import { appBuildId } from './appBuildId';

const portraitBase = '/assets/hero';

const heroRevision = optimizedImages.hero.revision;

/** Cache-bust portrait assets when hero.png changes (revision from optimize-images). */
export function versionPortraitSrc(path: string): string {
    if (!path.startsWith(portraitBase)) {
        return path;
    }

    const [base, query] = path.split('?');
    const params = new URLSearchParams(query);
    params.set('v', `${appBuildId}-${heroRevision}`);
    return `${base}?${params.toString()}`;
}

/** Intrinsic size of the largest portrait variant (see scripts/optimize-images.py). */
export const PROFILE_PORTRAIT_DISPLAY = {
    width: 560,
    height: 701,
} as const;

export const profilePortraitSources = {
    webp: {
        280: versionPortraitSrc(`${portraitBase}-280.webp`),
        560: versionPortraitSrc(`${portraitBase}-560.webp`),
    },
    png: {
        280: versionPortraitSrc(`${portraitBase}-280.png`),
        560: versionPortraitSrc(`${portraitBase}-560.png`),
    },
    fallback: versionPortraitSrc(`${portraitBase}-560.png`),
} as const;

export const profilePortraitSrcSet = {
    webp: `${profilePortraitSources.webp[280]} 280w, ${profilePortraitSources.webp[560]} 560w`,
    png: `${profilePortraitSources.png[280]} 280w, ${profilePortraitSources.png[560]} 560w`,
} as const;

/** Preload URL for LCP (home hero). */
export const profilePortraitPreloadHref = profilePortraitSources.webp[560];
