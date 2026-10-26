# Progress

## Completed

- [x] Docker deploy on ai-server (Traefik + Cloudflare Tunnel)
- [x] Screenshots moved to `/screenshots/` (SPA `/projects` fix)
- [x] Identity copy: AI Product Builder, Projects copy, `/about`, schema
- [x] Case study sections in project detail → narrative `ProjectStory` for all 6 real projects
- [x] Blog scaffold (`/blog`, empty `BLOG_POSTS`)
- [x] First blog post: rich `BlogBlock` model, `BlogBody`, Spanish career article published
- [x] Design system + compact Contact, Stats, Case study UI
- [x] Transparent logos (mobile + full)
- [x] Auto-deploy workflow + self-hosted runner on ai-server
- [x] Global compact layout (`layoutClasses`), navbar 84px
- [x] Portfolio: 4 projects on home, hover gallery, uniform card frames
- [x] CTA + Contact combined section; blur ellipses fixed
- [x] Screenshot updates: Declaramelo hero/features, Bernal dashboard
- [x] `AGENTS.md`: commit + push after every meaningful task
- [x] YouTube social link (@EdinssonMelo) in nav, footer, and schema
- [x] Storytelling blog editorial system (`content/blog/`, CHATGPT_CONTEXT bridge, Cursor rule)
- [x] Hero portrait image optimization (WebP srcset, preload LCP, `optimize:images` script)
- [x] Site fully bilingual ES/EN (react-i18next, locale-prefixed routes, hreflang, translated blog posts)

## Pending

- [ ] First ChatGPT editorial session + migrate primer post Markdown to `content/blog/published/`
- [ ] Search Console / Bing manual setup
- [ ] LinkedIn/GitHub bio alignment
- [ ] Optional: favicon refresh from new EM logo

## Known issues

- Logo black box on production if old assets cached: redeploy clears it; logos must stay `bg-transparent`
- SURA screenshots native resolution is small (140px wide): display uses native size, no upscale


## BotPlay showcase (2026-10-26)

- Added a bilingual static case study at /showcase/botplay/index.html (EN) and es.html (ES), linked first in the portfolio grid.
- Three actual BotPlay UI captures use built-in mock data. Existing validation warnings remain visible; no live gambling data or credentials included.
- Distinguishes existing sports monitoring, timeline and alert code from proposed Aviator and WhatsApp integrations. Browser-only synthetic round demo, no prediction claims.


## BotPlay portfolio revision (2026-10-26)

- Replaced the standalone marketing design with a native /en/projects/botplay and /es/projects/botplay page using existing portfolio primitives.
- Large real captures from June 21 historical BetPlay/Pinnacle snapshots, lightbox and optional animated screenshot walkthrough. Removed the unrelated Aviator simulation.
- Shows source integration, FastAPI, canonical data, rule-based analytics and frontend delivery as experience relevant to prediction APIs. Does not claim ML accuracy, predictive confidence, AWS latency or 90% coverage without validation.
- User explicitly requested publication in the latest message, superseding the earlier no-production restriction.
