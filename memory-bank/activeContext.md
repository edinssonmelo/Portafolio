# Active Context

## Current focus (Jul 2026)

- Identity: **A Sr. Software Engineer** (primary visual); AI/Fullstack/Mobile/CTO roles in `SITE_ROLE_KEYWORDS`, meta, and schema only (not shown in hero)
- First blog post published (Spanish, career/junior audience)
- Unified page layout: `PageHeader` + `PageSection` (white header, neutral content; no green heroes)
- Auto-deploy on push to `main` via self-hosted GitHub Actions runner on ai-server

## Recent changes

- Meta Business domain verification: `facebook-domain-verification` meta tag in `index.html` (static `<head>`, not React/Helmet) for www.edinssonmelo.com
- Storytelling blog editorial system: `content/blog/`; `public/blog-assets/` for images (never `public/blog/`, SPA 403)
- Home: About section removed; Portfolio (My Works) follows Services; full bio on `/about` only
- YouTube channel (@EdinssonMelo) in header/footer social icons + schema `sameAs`
- PWA manifest `display: browser` so mobile browsers open the site normally (no install-app prompt)
- Blog post title: 8 años (not 10); AI callout on prompting with examples
- **Hero portrait perf**: `hero.png` was 9.2MB (5116×6400); `npm run optimize:images` generates WebP srcset (560w ~15KB). `ProfilePortrait` uses `<picture>` + preload on home LCP. Unused `hero1–7` drafts removed from `public/assets/`.
- SEO/manifest/schema/index.html aligned to Sr. Software Engineer primary + multi-role keywords for indexing
- `PageHeader` + `PageSection` on About, Projects, Plans, Blog, project detail
- **Site fully bilingual ES/EN** (react-i18next): browser-language detection, routes under `/es/` and `/en/`, LanguageSwitcher in header/footer, hreflang + locale-prefixed canonicals, nginx 301 for legacy unprefixed URLs, sitemap with `xhtml:link` alternates. Blog posts are `{es,en}` localized and both posts translated to English. Technical terms (Software Engineer, SaaS, MVP, Fullstack, CTO, LLM, RAG) stay in English in both locales.
- **SEO prerender (build-time)**: `scripts/prerender-seo.mjs` runs after `vite build` and writes `dist/{lang}/{path}/index.html` with route-specific title, description, canonical, hreflang, og:image. Fixes SPA issue where Google saw home meta on all URLs (e.g. wordjet-ai showed stale "AI Software Engineer and Fullstack Developer..." from old index). `getSEOConfig` now reads blog post meta from `getBlogPost()` instead of unused `blogPostMeta` i18n key.

## Agent workflow

- Always commit + push to `main` when a task is done. Do not ask the user if they want deploy.
- Skip push only if user explicitly says not to.

## SEO / indexing

- **SPA meta gap (fixed Jul 2026)**: crawlers received the same `index.html` (home title + canonical `/`) for every route. Build now prerenders per-route HTML shells via `scripts/prerender-seo.mjs`.
- **Stale Google snippets**: old description ("AI Software Engineer and Fullstack Developer based in Colombia...") was from pre-i18n `index.html`; not in current repo. Re-crawl needed after deploy (Search Console → URL Inspection → Request indexing).

- First editorial session in ChatGPT (audio/idea → `content/blog/sessions/`) to refine `VOICE.md`
- Google Search Console / Bing sitemap submission (manual)
- Align LinkedIn/GitHub bio with site identity

## Open questions

- Use full legal name `Edinsson Adrián Melo Calvo` in About/schema? (not confirmed)


## BotPlay showcase (2026-10-26)

- Added a bilingual static case study at /showcase/botplay/index.html (EN) and es.html (ES), linked first in the portfolio grid.
- Three actual BotPlay UI captures use built-in mock data. Existing validation warnings remain visible; no live gambling data or credentials included.
- Distinguishes existing sports monitoring, timeline and alert code from proposed Aviator and WhatsApp integrations. Browser-only synthetic round demo, no prediction claims.


## BotPlay portfolio revision (2026-10-26)

- Replaced the standalone marketing design with a native /en/projects/botplay and /es/projects/botplay page using existing portfolio primitives.
- Large real captures from June 21 historical BetPlay/Pinnacle snapshots, lightbox and optional animated screenshot walkthrough. Removed the unrelated Aviator simulation.
- Shows source integration, FastAPI, canonical data, rule-based analytics and frontend delivery as experience relevant to prediction APIs. Does not claim ML accuracy, predictive confidence, AWS latency or 90% coverage without validation.
- User explicitly requested publication in the latest message, superseding the earlier no-production restriction.


## Simplified BotPlay interactive showcase (2026-10-26)

- Replaced long screenshot sections with one responsive interactive dashboard: matched events, opposite-outcome odds and calculated illustrative margins.
- Fictional data is explicit, updates every 3.5 seconds, with pause/reset, sport filters and selected-opportunity detail. No network calls, betting, live access or prediction claims.
- Three short workflow captions replace the previous detailed explanation. ES/EN parity preserved.


## Actual application captures (2026-10-26)

- Fixed BotPlay home/project cover and social image: actual original app screenshot, no portfolio header.
- Ran original BotPlay FastAPI/matching/opportunity engine with labeled synthetic tennis fixtures. Captured populated live/prematch radar and cross-platform matching. No source changes to BotPlay, live accounts or credentials.
- Two-image gallery is primary, with enlargement; redesigned interactive concept is optional and collapsed. Real app UI and test data are distinguished explicitly.


## Standard BotPlay project template (2026-10-26)

- Latest user correction: use exactly the same project detail format as other projects. BotPlay now uses the existing ProjectDetail, PageHeader, image carousel/lightbox and ProjectStory components.
- Removed the bespoke page, dashboard simulation and special stylesheet. Two original app screenshots remain, with concise bilingual description, pipeline and stack. Home cover stays the actual populated original radar screenshot.


## OpenWhispr screenshots refreshed (2026-10-26)

- Captured the current openwhispr.rootoz.com landing and its transcription/local-AI interface simulation.
- Product simulation is now the card, detail and social preview image; gallery also includes the landing and user-supplied desktop session-history screenshot. Original attachment preserved without edits.
- Shared project template unchanged. Native image dimensions registered, new asset filenames avoid stale cached images.


## PCStore portfolio project (2026-10-26)

- Added /es/projects/pcstore and /en/projects/pcstore using the shared project detail template.
- Three original user screenshots: landing cover, setup catalog and Profesional component configurator. Native dimensions preserved.
- Featured after OpenWhispr so it appears on the home grid; added bilingual copy, live link, SEO/social image, prerender routes and sitemap entries.
- Reviewed live PCStore landing and Profesional detail to ground copy in visible functionality. No new claims about implementation stack or checkout/payment support.


## PCStore cover framing (2026-10-26)

- Configurator screenshot is now the home card, project first slide and social preview. Its native aspect ratio is close to the shared 16:9 card, reducing empty framing.
- Added the new user-supplied Ultra image as slide 2; setups remain slide 3. Shared card/template unchanged.


## PCStore gallery reduced (2026-10-26)

- Replaced the setups gallery image with the latest user attachment, without the site header. Removed Ultra from detail and hover galleries.
- Final gallery: configurator cover, then updated three-setups capture. New filename avoids stale cached image.


## Home project selection (2026-10-26)

- Home now shows six projects: BotPlay, OpenWhispr, PCStore, Bernal Tech B2B, Wordjet.ai, then Declaramelo.
- Added the two requested existing projects to the visible home selection and placed Declaramelo last in that selection.


## Bernal Tech cover (2026-10-26)

- Promoted the catalog screenshot (previously third) to home card, project first slide, related-project previews and social metadata. Other gallery images retained.
