# Tech Context

## Stack

| Layer | Tech |
|-------|------|
| Build | Vite 6, TypeScript |
| UI | React, Tailwind CSS 3 |
| Routing | react-router-dom |
| Icons | lucide-react |
| Fonts | DM Sans, Cabinet Grotesk (Google / assets) |

## Local dev

```bash
npm install
npm run dev
npm run build   # output: dist/
```

## Docker

- `Dockerfile`: node build → nginx alpine
- `nginx/default.conf`: SPA `try_files`
- `docker-compose.yml`: Traefik labels for `edinssonmelo.com`, `www.edinssonmelo.com`

## Server (ai-server)

- Host: `192.168.1.42`, user `edsun`
- App path: `/srv/apps/portafolio`
- Runner: `~/actions-runner-portafolio` (labels: `self-hosted`, `linux`, `portafolio`)
- Service: `actions.runner.edinssonmelo-Portafolio.ai-server-portafolio.service`

## CI/CD

| Workflow | Trigger | Runner |
|----------|---------|--------|
| `deploy.yml` | push `main` | self-hosted portafolio |
| `docker.yml` | PR only | ubuntu (build verify) |

## SEO / crawl

- `public/robots.txt` — allows `OAI-SearchBot`, `GPTBot`
- `public/sitemap.xml` — includes `/`, `/about`, `/blog`, `/projects`, project slugs
- Schema: `Person` `#person`, `ProfilePage` on `/about`
