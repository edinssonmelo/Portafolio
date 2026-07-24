# Product Context

## What the site communicates

- Edinsson builds and ships AI-powered SaaS, web, and mobile products
- Tone: first person, concrete, humble — not agency-style generic pitch
- Faith statement in Hero (intentional, do not remove without user request)

## Copy conventions

- Projects title: `Projects that were genuinely fun to build.`
- Projects description: `Apps and products I've shipped.`
- Avoid "I helped ship" — user ships products directly
- "CTO" only in verifiable project roles, not global site title

## Contact

- Email + WhatsApp in footer (`FooterContact.tsx`, `CONTACT_LINKS` in `seo.ts`)
- Location: Cúcuta, Colombia

## Assets

- Project screenshots: `/public/screenshots/` (NOT `/public/projects/` — conflicts with SPA route `/projects`)
- Logos: `logo-mobile.png` (EM initials, mobile), `logo-full.png` (full name, md+)
- Logos are **transparent PNG** — never add background color on logo wrapper or `img`
