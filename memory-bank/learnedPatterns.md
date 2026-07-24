# Learned Patterns

Patterns discovered while building this project. Update when new conventions emerge.

## Design

### Colors

- **Navbar**: `bg-stone-900` (#1c1917 area) — dark header, white nav links
- **Accent**: neon lime `rgb(220, 255, 49)` / `#DCFF31` — theme-color, carousel buttons, gradients
- **Hero sections**: `rgba(75, 251, 186, 0.7)` mint overlay on project/about/blog heroes
- **Logo brand green**: `#DFFF00`–`#CCFF00` range in logo assets (white + lime on transparent)

### Typography

- Headings: `font-cabinet_grotesk`, bold, tight tracking
- Body: `font-dm_sans`, `text-lg leading-[30px]` for paragraphs
- Section badges: uppercase DM Sans, `text-[13px] font-black tracking-[0.65px]`

### Logo

- **Never** set `background`, `bg-*`, or `object-cover` on logo images
- Mobile (`< md`): `/assets/logo-mobile.png` — square EM initials
- Tablet/desktop (`md+`): `/assets/logo-full.png` — wide wordmark
- Use `object-contain`, `bg-transparent`, no border on wrapper

### Responsive

- Header height: `md:h-[100px]`
- Portfolio carousel arrows: yellow circle buttons outside image frame (match testimonials pattern)

## Content

- First person (`I`, `my`) — not "we" unless representing a client team
- Project images path: `/screenshots/*.png` in code and SEO OG URLs

## Deploy

- Push to `main` → auto deploy on ai-server (no manual `dist` upload)
- Do not commit `.env` (gitignored)

## SPA / static hosting

- `public/.htaccess` and `nginx/default.conf`: `try_files` to `index.html`
- Explicit rule: `/projects` route must not rewrite static screenshot paths
