# Active Context

## Current focus (Jul 2026)

- First blog post published (Spanish, career/junior audience)
- Design system primitives (SurfaceCard, tokens, compact Contact/Stats/Case study)
- Auto-deploy on push to `main` via self-hosted GitHub Actions runner on ai-server

## Recent changes

- Blog: `BlogBlock` model (`p`, `h2`, `h3`, `ul`, `ol`, `callout`), `BlogBody` renderer, reading time helpers
- First post: `como-conseguir-tu-primer-empleo-en-software-sin-experiencia` (ES, Jul 24 2026)
- Blog pages: `SectionBadge`, `TagChip`, reading time, tags; internal links to `/projects` and `/about`
- Header: Blog nav link (desktop + mobile) to `/blog`; sitemap entry for post slug
- Contact + Stats compacted; Case study panel with brand badges/callout
- UI bug fixes: Contact blur restored + centered submit; Stats gradient band (no white overlay); CTA compact + CTACard restored; Portfolio grid uniform `aspect-[16/9]` frames for alignment
- Global compact rhythm: `layoutClasses` in designTokens (`py-16 md:py-20`, `gap-10 md:gap-12`); SectionHeader `text-2xl md:text-3xl`; navbar `84px`; all home sections aligned
- Portfolio home shows 4 projects; SURA card uses uniform 16:9 frame; Bernal dashboard cover updated
- CTA + Contact combined side-by-side (`CTAContact`); portfolio hover gallery on home
- Hero: reverted to original layout (two-line title, original spacing/sizes/ellipses)
- Project detail: "Visit live site" beside carousel; narrative `ProjectStory` replaces rigid case study
- About page subtitle aligned with hero: An AI Product Builder

## Next steps (user-driven)

- Align LinkedIn/GitHub bio with site identity
- Google Search Console / Bing sitemap submission (manual)

## Open questions

- Use full legal name `Edinsson Adrián Melo Calvo` in About/schema? (not confirmed)
