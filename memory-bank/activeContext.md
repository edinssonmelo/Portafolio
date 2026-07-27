# Active Context

## Current focus (Jul 2026)

- Identity: **A Sr. Software Engineer** (primary visual); AI/Fullstack/Mobile/CTO roles in `SITE_ROLE_KEYWORDS`, meta, and schema only (not shown in hero)
- First blog post published (Spanish, career/junior audience)
- Unified page layout: `PageHeader` + `PageSection` (white header, neutral content; no green heroes)
- Auto-deploy on push to `main` via self-hosted GitHub Actions runner on ai-server

## Recent changes

- Storytelling blog editorial system: `content/blog/`; `public/blog-assets/` for images (never `public/blog/`, SPA 403)
- Home: About section removed; Portfolio (My Works) follows Services; full bio on `/about` only
- YouTube channel (@EdinssonMelo) in header/footer social icons + schema `sameAs`
- PWA manifest `display: browser` so mobile browsers open the site normally (no install-app prompt)
- Blog post title: 8 años (not 10); AI callout on prompting with examples
- **Hero portrait perf**: `hero.png` was 9.2MB (5116×6400); `npm run optimize:images` generates WebP srcset (560w ~15KB). `ProfilePortrait` uses `<picture>` + preload on home LCP. Unused `hero1–7` drafts removed from `public/assets/`.
- SEO/manifest/schema/index.html aligned to Sr. Software Engineer primary + multi-role keywords for indexing
- `PageHeader` + `PageSection` on About, Projects, Plans, Blog, project detail
- Blog: `BlogBlock` model, first post, nav link, sitemap

## Agent workflow

- Always commit + push to `main` when a task is done. Do not ask the user if they want deploy.
- Skip push only if user explicitly says not to.

## Next steps (user-driven)

- First editorial session in ChatGPT (audio/idea → `content/blog/sessions/`) to refine `VOICE.md`
- Google Search Console / Bing sitemap submission (manual)
- Align LinkedIn/GitHub bio with site identity

## Open questions

- Use full legal name `Edinsson Adrián Melo Calvo` in About/schema? (not confirmed)
