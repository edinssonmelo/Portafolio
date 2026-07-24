#!/usr/bin/env bash
set -euo pipefail

# Uso en ai-server:
#   /srv/apps/portafolio/scripts/deploy.sh

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Pulling latest changes..."
git pull --ff-only

echo "Building and starting container (project: portafolio)..."
docker compose -p portafolio build --pull
docker compose -p portafolio up -d --remove-orphans

echo "Done. Verifica el hostname en Cloudflare Tunnel y Traefik."
