/**
 * Design tokens: single source for brand UI primitives.
 * Sync with tailwind.config.js `brand` colors and memory-bank/learnedPatterns.md
 */

export const designTokens = {
    colors: {
        ink: '#1c1917',
        lime: '#DCFF31',
        mint: '#4BFBBA',
        surface: '#f5f5f5',
        surfaceCard: '#ffffff',
    },
    radius: {
        card: '20px',
        button: '10px',
        badge: '20px',
    },
    border: {
        width: '2px',
        color: '#1c1917',
    },
    spacing: {
        /** Compact vertical rhythm. Use across all home sections */
        sectionY: '4rem',
        sectionYMd: '5rem',
        sectionGap: '2.5rem',
        sectionGapMd: '3rem',
        cardPad: '1.5rem',
        cardPadMd: '2rem',
        formGap: '1.25rem',
    },
    typography: {
        badge: 'text-[13px] font-black uppercase tracking-[0.65px] leading-[23px]',
        body: 'text-base leading-relaxed md:text-lg md:leading-7',
        bodyLg: 'text-lg leading-7',
        headingSection: 'text-[26px] font-bold tracking-tight md:text-4xl',
        headingHero: 'text-[28px] font-bold leading-tight sm:text-[32px] md:text-5xl md:leading-[1.12]',
    },
} as const;

/** Tailwind class strings. Use for consistent type scale sitewide */
export const typographyClasses = {
    heroTitle:
        'font-cabinet_grotesk text-[28px] font-bold leading-tight tracking-tight text-stone-900 sm:text-[32px] md:text-5xl md:leading-[1.12]',
    heroLead:
        'font-dm_sans text-base leading-relaxed text-stone-900 md:text-xl md:leading-8',
    sectionTitle:
        'font-cabinet_grotesk text-[26px] font-bold leading-tight tracking-tight text-stone-900 md:text-4xl md:leading-tight',
    sectionDesc:
        'font-dm_sans text-base leading-relaxed text-stone-900 md:text-lg md:leading-7',
    cardTitle:
        'font-cabinet_grotesk text-xl font-bold leading-snug text-stone-900 md:text-2xl',
    cardTitleSm:
        'font-cabinet_grotesk text-lg font-bold leading-snug text-stone-900 md:text-xl',
    body: 'font-dm_sans text-base leading-relaxed text-stone-900 md:text-lg md:leading-7',
    statValue:
        'font-cabinet_grotesk text-3xl font-bold leading-none tracking-tight text-stone-900 md:text-[2.25rem]',
} as const;

/** Shared layout classes for proportional, compact sections */
export const layoutClasses = {
    section:
        'relative flex w-full shrink-0 scroll-mt-[84px] justify-center overflow-hidden px-[30px] py-16 md:scroll-mt-0 md:py-20',
    sectionInner:
        'relative flex w-full max-w-[1140px] flex-col items-center gap-10 md:gap-12',
    sectionNeutral: 'bg-neutral-100',
    sectionWhite: 'bg-white',
    pageHero:
        'relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[rgba(75,251,186,0.7)] px-[30px] pb-16 pt-32 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 after:border-stone-900 md:gap-10 md:pb-20 md:pt-36',
    pageContent: 'bg-neutral-100 px-[30px] py-16 md:py-20',
} as const;

export const brandBorderClass = 'border-2 border-stone-900';
export const brandCardClass = `rounded-[20px] bg-white ${brandBorderClass}`;
