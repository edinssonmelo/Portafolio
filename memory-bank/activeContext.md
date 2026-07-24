# Active Context

## Current focus (Jul 2026)

- Identity: **An AI Software Engineer** (`SITE_CONFIG.tagline` drives hero, About, SEO, schema)
- First blog post published (Spanish, career/junior audience)
- Unified page layout: `PageHeader` + `PageSection` (white header, neutral content; no green heroes)
- Auto-deploy on push to `main` via self-hosted GitHub Actions runner on ai-server

## Recent changes

- About: story-first bio (first PC, Encarta, Stronghold + YouTube link, Chilean mentor → AI Software Engineer); hero photo; 8 years
- YouTube channel (@EdinssonMelo) in header/footer social icons + schema `sameAs`
- PWA manifest `display: browser` so mobile browsers open the site normally (no install-app prompt)
- Blog post title: 8 años (not 10); AI callout on prompting with examples
- SEO/manifest/schema/index.html aligned to AI Software Engineer identity
- `PageHeader` + `PageSection` on About, Projects, Plans, Blog, project detail
- Blog: `BlogBlock` model, first post, nav link, sitemap

## Agent workflow

- Always commit + push to `main` when a task is done. Do not ask the user if they want deploy.
- Skip push only if user explicitly says not to.

## Next steps (user-driven)

- Google Search Console / Bing sitemap submission (manual)
- Align LinkedIn/GitHub bio with site identity

## Open questions

- Use full legal name `Edinsson Adrián Melo Calvo` in About/schema? (not confirmed)
