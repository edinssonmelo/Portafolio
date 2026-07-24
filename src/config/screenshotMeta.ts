/** Native dimensions for /screenshots assets. Keeps layout stable and avoids forced stretch. */

/** Bump when replacing files in public/screenshots/ so browsers/CDN fetch fresh assets. */
export const SCREENSHOT_CACHE_VERSION = "20260724";

export const screenshotSrc = (path: string) => {
    if (path.startsWith("http://") || path.startsWith("https://")) {
        try {
            const url = new URL(path);
            if (url.pathname.startsWith("/screenshots/")) {
                url.searchParams.set("v", SCREENSHOT_CACHE_VERSION);
                return url.toString();
            }
        } catch {
            return path;
        }
        return path;
    }

    const [base, query] = path.split("?");
    if (!base.startsWith("/screenshots/")) {
        return path;
    }
    const params = new URLSearchParams(query);
    params.set("v", SCREENSHOT_CACHE_VERSION);
    return `${base}?${params.toString()}`;
};

export const SCREENSHOT_META: Record<
    string,
    { width: number; height: number }
> = {
    "declaramelo-hero.png": { width: 1024, height: 580 },
    "declaramelo-features.png": { width: 1024, height: 580 },
    "declaramelo-process.png": { width: 1024, height: 580 },
    "openwhispr-hero.png": { width: 1024, height: 557 },
    "openwhispr-meetings.png": { width: 1024, height: 615 },
    "openwhispr-transcription.png": { width: 898, height: 464 },
    "bernal-dashboard.png": { width: 1024, height: 576 },
    "bernal-login.png": { width: 1024, height: 553 },
    "bernal-catalog.png": { width: 1024, height: 556 },
    "bernal-product.png": { width: 1024, height: 576 },
    "wordjet-landing.png": { width: 1024, height: 714 },
    "wordjet-editor.png": { width: 1024, height: 477 },
    "overup-hero.png": { width: 1024, height: 542 },
    "overup-catalog.png": { width: 1024, height: 516 },
    "overup-product.png": { width: 1024, height: 497 },
    "sura-explora.png": { width: 140, height: 296 },
    "sura-ingresa.png": { width: 140, height: 296 },
    "sura-resuelve.png": { width: 140, height: 296 },
    "sura-avanza.png": { width: 140, height: 296 },
};

export const getScreenshotMeta = (src: string) => {
    const filename = src.split("/").pop()?.split("?")[0] ?? "";
    return SCREENSHOT_META[filename];
};

export const isMobileScreenshot = (src: string) => {
    const meta = getScreenshotMeta(src);
    return meta ? meta.width <= 200 : false;
};
