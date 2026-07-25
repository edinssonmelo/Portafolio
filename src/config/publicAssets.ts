/**
 * Cache-bust query param for stable paths in /assets/ and /screenshots/.
 * __APP_BUILD_ID__ is injected at build time (new value every deploy).
 */
import { appBuildId } from './appBuildId';

/** Append ?v=<buildId> so replaced files with the same name refresh after deploy. */
export function versionedSrc(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        try {
            const url = new URL(path);
            if (
                url.pathname.startsWith('/assets/') ||
                url.pathname.startsWith('/screenshots/')
            ) {
                url.searchParams.set('v', appBuildId);
                return url.toString();
            }
        } catch {
            return path;
        }
        return path;
    }

    if (path.startsWith('/assets/') || path.startsWith('/screenshots/')) {
        const [base, query] = path.split('?');
        const params = new URLSearchParams(query);
        params.set('v', appBuildId);
        return `${base}?${params.toString()}`;
    }

    return path;
}

/** @deprecated Use versionedSrc */
export const publicAssetSrc = versionedSrc;
