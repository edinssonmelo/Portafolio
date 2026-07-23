#!/usr/bin/env python3
"""Generate favicon PNG/ICO assets from the brand gradient mark."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

INK = (28, 25, 23, 255)
MINT = (126, 230, 216)
LIME = (220, 255, 49)


def lerp_color(t: float) -> tuple[int, int, int]:
    t = max(0.0, min(1.0, t))
    return (
        int(MINT[0] + (LIME[0] - MINT[0]) * t),
        int(MINT[1] + (LIME[1] - MINT[1]) * t),
        int(MINT[2] + (LIME[2] - MINT[2]) * t),
    )


def gradient_at(x: float, y: float, size: int) -> tuple[int, int, int]:
  return lerp_color((x / size + (size - y) / size) / 2)


def inside_rounded_rect(x: int, y: int, x1: int, y1: int, x2: int, y2: int, r: int) -> bool:
    if x < x1 or x >= x2 or y < y1 or y >= y2:
        return False
    corners = (
        (x1 + r, y1 + r, x < x1 + r and y < y1 + r),
        (x2 - r, y1 + r, x >= x2 - r and y < y1 + r),
        (x1 + r, y2 - r, x < x1 + r and y >= y2 - r),
        (x2 - r, y2 - r, x >= x2 - r and y >= y2 - r),
    )
    for cx, cy, in_corner in corners:
        if in_corner and (x - cx) ** 2 + (y - cy) ** 2 > r ** 2:
            return False
    return True


def fill_gradient_round_rect(
    img: Image.Image,
    box: tuple[int, int, int, int],
    radius: int,
) -> None:
    x1, y1, x2, y2 = box
    size = img.size[0]
    for y in range(y1, y2):
        for x in range(x1, x2):
            if inside_rounded_rect(x, y, x1, y1, x2, y2, radius):
                img.putpixel((x, y), (*gradient_at(x, y, size), 255))


def draw_favicon(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    radius = round(size * 0.22)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=INK)

    cx = size / 2
    cy = size / 2
    outer_r = size * 0.31
    inner_r = size * 0.19
    core_r = size * 0.11

    # Gradient ring
    ring = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    for y in range(size):
        for x in range(size):
            dist = math.hypot(x - cx, y - cy)
            if inner_r <= dist <= outer_r:
                ring.putpixel((x, y), (*gradient_at(x, y, size), 255))
    img = Image.alpha_composite(img, ring)

    # Inner cutout
    cut = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    cut_draw = ImageDraw.Draw(cut)
    cut_draw.ellipse(
        (cx - inner_r, cy - inner_r, cx + inner_r, cy + inner_r),
        fill=INK,
    )
    img = Image.alpha_composite(img, cut)

    # Gradient core
    core = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    for y in range(size):
        for x in range(size):
            if math.hypot(x - cx, y - cy) <= core_r:
                core.putpixel((x, y), (*gradient_at(x, y, size), 255))
    img = Image.alpha_composite(img, core)

    return img


def main() -> None:
    sizes = {
        PUBLIC / "favicon-16x16.png": 16,
        PUBLIC / "favicon-32x32.png": 32,
        PUBLIC / "apple-touch-icon.png": 180,
        PUBLIC / "icon-192.png": 192,
        PUBLIC / "icon-512.png": 512,
    }

    icons: dict[int, Image.Image] = {}
    for path, icon_size in sizes.items():
        if icon_size not in icons:
            icons[icon_size] = draw_favicon(icon_size)
        icons[icon_size].save(path, format="PNG", optimize=True)

    ico_sizes = [16, 32, 48]
    ico_images = [draw_favicon(s) for s in ico_sizes]
    ico_images[0].save(
        PUBLIC / "favicon.ico",
        format="ICO",
        sizes=[(s, s) for s in ico_sizes],
        append_images=ico_images[1:],
    )

    print("Generated favicon assets:")
    for path in sorted(sizes):
        print(f"  - {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
