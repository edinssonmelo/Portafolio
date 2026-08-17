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
