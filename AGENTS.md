# Agent workflow — Portafolio

## After every meaningful task

1. **Memory bank** — Update `memory-bank/activeContext.md` and `progress.md` (and `learnedPatterns.md` / `systemPatterns.md` when patterns change).
2. **Commit + push** — Always commit and push to `main` when the task is complete. Do not leave finished work only in the working tree.
3. **Deploy** — Push to `main` triggers auto-deploy on ai-server via GitHub Actions (self-hosted runner).

## Commit protocol

- Run `git status` and `git diff` before committing.
- Stage only relevant files (no secrets, no accidental debug).
- Write a clear commit message (1–2 sentences, focus on *why*).
- Push with `git push origin main` after a successful commit.
- If the user explicitly says not to push, commit locally only.

## Project order

- **Design tokens**: `src/config/designTokens.ts` + `layoutClasses` for section rhythm.
- **Primitives**: `SurfaceCard`, `SectionBadge`, `TagChip`, `Field`, `GradientButton`.
- **Screenshots**: `public/screenshots/` + `src/config/screenshotMeta.ts` (native aspect, no forced stretch).
- **Sections**: `src/sections/` — home blocks; `src/pages/` — routes.
- **Memory bank**: single source of persistent context in `memory-bank/`.

## Must-know

- Identity: **AI Product Builder** / **AI Software Engineer**
- Logos: transparent PNG, `bg-transparent`, no background on `img`
- Deploy path on server: `/srv/apps/portafolio`
