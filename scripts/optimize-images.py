#!/usr/bin/env python3
"""Generate web-optimized variants for static images in public/."""

from __future__ import annotations

import json
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
META_PATH = ROOT / "src" / "config" / "optimizedImages.json"

WEBP_QUALITY = 82
PNG_OPTIMIZE = True


@dataclass(frozen=True)
class ImageRecipe:
    source: Path
    widths: tuple[int, ...]
    max_bytes_warn: int = 250_000


RECIPES: tuple[ImageRecipe, ...] = (
    ImageRecipe(
        source=PUBLIC / "assets" / "hero.png",
        widths=(280, 560),
        max_bytes_warn=120_000,
    ),
)


def resize_cover_width(image: Image.Image, target_width: int) -> Image.Image:
    if image.width <= target_width:
        return image.copy()
    target_height = round(image.height * (target_width / image.width))
    return image.resize((target_width, target_height), Image.Resampling.LANCZOS)


def write_png(image: Image.Image, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    image.save(dest, format="PNG", optimize=PNG_OPTIMIZE)


def write_webp(image: Image.Image, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    image.save(dest, format="WEBP", quality=WEBP_QUALITY, method=6)


def write_avif(image: Image.Image, dest: Path) -> bool:
    try:
        dest.parent.mkdir(parents=True, exist_ok=True)
        image.save(dest, format="AVIF", quality=WEBP_QUALITY)
        return True
    except Exception:
        return False


def file_size(path: Path) -> int:
    return path.stat().st_size if path.exists() else 0


def optimize_recipe(recipe: ImageRecipe) -> dict:
    if not recipe.source.exists():
        raise FileNotFoundError(f"Missing source image: {recipe.source}")

    with Image.open(recipe.source) as opened:
        source = opened.convert("RGB")

    stem = recipe.source.stem
    parent = recipe.source.parent
    variants: list[dict] = []

    for width in recipe.widths:
        resized = resize_cover_width(source, width)
        png_path = parent / f"{stem}-{width}.png"
        webp_path = parent / f"{stem}-{width}.webp"
        avif_path = parent / f"{stem}-{width}.avif"

        write_png(resized, png_path)
        write_webp(resized, webp_path)
        has_avif = write_avif(resized, avif_path)

        png_bytes = file_size(png_path)
        webp_bytes = file_size(webp_path)
        if png_bytes > recipe.max_bytes_warn:
            print(
                f"  warn: {png_path.name} is {png_bytes // 1024}KB "
                f"(target <= {recipe.max_bytes_warn // 1024}KB)",
                file=sys.stderr,
            )

        variant = {
            "width": width,
            "height": resized.height,
            "png": f"/assets/{png_path.name}",
            "webp": f"/assets/{webp_path.name}",
        }
        if has_avif:
            variant["avif"] = f"/assets/{avif_path.name}"
        variants.append(variant)
        print(
            f"  {png_path.name}: {png_bytes // 1024}KB | "
            f"{webp_path.name}: {webp_bytes // 1024}KB"
        )

    largest = max(recipe.widths)
    default_png = parent / f"{stem}-{largest}.png"
    default_webp = parent / f"{stem}-{largest}.webp"
    write_png(resize_cover_width(source, largest), recipe.source)
    write_webp(resize_cover_width(source, largest), parent / f"{stem}.webp")

    return {
        "source": str(recipe.source.relative_to(ROOT)),
        "defaultPng": f"/assets/{recipe.source.name}",
        "defaultWebp": f"/assets/{stem}.webp",
        "variants": variants,
    }


def main() -> int:
    print("Optimizing static images...")
    manifest: dict[str, dict] = {}

    for recipe in RECIPES:
        print(f"\n{recipe.source.relative_to(ROOT)}")
        manifest[recipe.source.stem] = optimize_recipe(recipe)

    META_PATH.parent.mkdir(parents=True, exist_ok=True)
    META_PATH.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"\nWrote {META_PATH.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
