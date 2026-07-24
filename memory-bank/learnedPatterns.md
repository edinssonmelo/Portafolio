# Learned Patterns

Patterns discovered while building this project. Update when new conventions emerge.

## Design

### Colors

- **Navbar**: `bg-stone-900` (#1c1917 area): dark header, white nav links
- **Accent**: neon lime `rgb(220, 255, 49)` / `#DCFF31`: theme-color, carousel buttons, gradients
- **Hero sections**: `rgba(75, 251, 186, 0.7)` mint overlay on project/about/blog heroes
- **Logo brand green**: `#DFFF00`–`#CCFF00` range in logo assets (white + lime on transparent)

### Typography

- Headings: `font-cabinet_grotesk`, bold, tight tracking
- Body: `font-dm_sans`, `text-base md:text-lg leading-relaxed`
- Section badges: uppercase DM Sans, `text-[13px] font-black tracking-[0.65px]`
- **Scale** (`typographyClasses` in `designTokens.ts`):
  - Hero: `md:text-5xl` title, `md:text-xl` lead
  - Sections: `md:text-4xl` title (Cabinet), `md:text-lg` description
  - Cards: `md:text-2xl` / `md:text-xl` titles, body `md:text-lg`

### Design system primitives

- **Tokens**: [`src/config/designTokens.ts`](../src/config/designTokens.ts): ink, lime `#DCFF31`, mint `#4BFBBA`, radii, compact spacing
- **Tailwind**: `brand.lime`, `brand.mint`, `rounded-card`, `rounded-btn`
- **Components**:
  - `SurfaceCard`: white + `border-2 border-stone-900` + `rounded-[20px]`
  - `SectionBadge`: uppercase label pill (Contact, Case study)
  - `TagChip`: stack tags in case studies
  - `Field` / `TextAreaField`: compact underline inputs (~40px, textarea min 96px)
  - `GradientButton`: supports `type="submit"` for forms

### Density (compact UI)

- **Layout scale** (`layoutClasses` in `designTokens.ts`): sections `py-16 md:py-20`, inner `gap-10 md:gap-12`, `max-w-[1140px]`, `px-[30px]`
- **Section headers**: `text-2xl md:text-3xl` (was 44px+)
- **Navbar**: `md:h-[84px]`; scroll offset `84px`
- Contact card: `max-w-[600px]`, `px-6 py-7 md:px-9 md:py-9`
- Stats card: `p-6 md:p-8`, numbers `text-3xl md:text-4xl`
- Case study: `SurfaceCard` on `bg-neutral-100`, section labels uppercase 13px, Outcome in mint callout
- Secondary pages: `pageHero` / `pageContent` tokens for About, Blog, Projects

### Logo

- **Never** set `background`, `bg-*`, or `object-cover` on logo images
- Mobile (`< md`): `/assets/logo-mobile.png`: `h-12` / `h-14` (sm), aligned left (`object-left`, slight negative margin)
- Tablet/desktop (`md+`): `/assets/logo-full.png`: up to ~90px height, `object-left`
- Use `object-contain`, `bg-transparent`, no border on wrapper

### Responsive

- Header height: `md:h-[84px]`
- Portfolio carousel arrows: yellow circle buttons outside image frame (match testimonials pattern)

## Content

- First person (`I`, `my`), not "we" unless representing a client team
- **No em dashes (`—`)** in user-facing copy. Use periods, commas, colons, or parentheses instead
- Project images: use native aspect via `src/config/screenshotMeta.ts`; never force `aspect-[16/9]` on mismatched screenshots
- When replacing a screenshot file, bump `SCREENSHOT_CACHE_VERSION` in `screenshotMeta.ts` so production fetches the new image (nginx used to cache PNGs as `immutable` for 1 year)
- SURA mobile shots are 140×296px. Display at native width, centered (no upscale)

## Deploy

- Push to `main` → auto deploy on ai-server (no manual `dist` upload)
- Do not commit `.env` (gitignored)

## SPA / static hosting

- `public/.htaccess` and `nginx/default.conf`: `try_files` to `index.html`
- Explicit rule: `/projects` route must not rewrite static screenshot paths
