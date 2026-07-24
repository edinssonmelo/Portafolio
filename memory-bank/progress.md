# Progress

## Completed

- [x] Docker deploy on ai-server (Traefik + Cloudflare Tunnel)
- [x] Screenshots moved to `/screenshots/` (SPA `/projects` fix)
- [x] Identity copy: AI Product Builder, Projects copy, `/about`, schema
- [x] Case study sections in project detail
- [x] Blog scaffold (`/blog`, empty `BLOG_POSTS`)
- [x] Design system + compact Contact, Stats, Case study UI
- [x] Transparent logos (mobile + full)
- [x] Auto-deploy workflow + self-hosted runner on ai-server

## Pending

- [ ] First blog post (awaiting user outline)
- [ ] Search Console / Bing manual setup
- [ ] LinkedIn/GitHub bio alignment
- [ ] Optional: favicon refresh from new EM logo

## Known issues

- Logo black box on production if old assets cached — redeploy clears it; logos must stay `bg-transparent`
- SURA screenshots native resolution is small (140px wide) — display uses native size, no upscale
