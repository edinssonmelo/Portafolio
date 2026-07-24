# Agent workflow for Portafolio

## After every meaningful task

1. **Memory bank**: Update `memory-bank/activeContext.md` and `progress.md` (and `learnedPatterns.md` / `systemPatterns.md` when patterns change).
2. **Commit + push**: Always commit and push to `main` when the task is complete. Do not leave finished work only in the working tree.
3. **Deploy**: Push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on the self-hosted runner (`runs-on: [self-hosted, linux, portafolio]`). It runs `git pull`, `docker compose build`, and `docker compose up` in `/srv/apps/portafolio`.
4. **Verify deploy**: After every push, confirm `git push origin main` succeeded and check Actions: `gh run list --workflow=deploy.yml --limit 3`. Do not end a task with uncommitted files or unpushed commits.

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
- **Sections**: `src/sections/` for home blocks; `src/pages/` for routes.
- **Memory bank**: single source of persistent context in `memory-bank/`.

## Copy style

- **No em dashes (`—`)** in user-facing copy (hero, about, project stories, blog, CTAs, meta descriptions). They read as AI-generated.
- Use periods, commas, colons, or parentheses instead. Avoid joining clauses with an em dash (e.g. prefer "teams: from research" or two short sentences).
- Applies to new and edited site text. Internal docs should also avoid em dashes for consistency.

## Must-know

- Identity: **AI Product Builder** / **AI Software Engineer**
- Logos: transparent PNG, `bg-transparent`, no background on `img`
- Deploy path on server: `/srv/apps/portafolio`
