/**
 * Design tokens — single source for brand UI primitives.
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
        sectionY: '100px',
        sectionYMd: '120px',
        cardPad: '1.5rem',
        cardPadMd: '2rem',
        formGap: '1.25rem',
    },
    typography: {
        badge: 'text-[13px] font-black uppercase tracking-[0.65px] leading-[23px]',
        body: 'text-base leading-relaxed',
        bodyLg: 'text-lg leading-[30px]',
        headingSection: 'text-3xl md:text-4xl font-bold tracking-tight',
    },
} as const;

export const brandBorderClass = 'border-2 border-stone-900';
export const brandCardClass = `rounded-[20px] bg-white ${brandBorderClass}`;
