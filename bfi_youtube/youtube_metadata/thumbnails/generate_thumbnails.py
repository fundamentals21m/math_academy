#!/usr/bin/env python3
"""
Bitcoin for Institutions YouTube Thumbnail Generator

Creates professional thumbnails with:
- Bitcoin orange branding (#F7931A)
- Dark gradient backgrounds
- Episode-specific icons
- Part color coding

Requirements:
    pip install Pillow

Usage:
    python generate_thumbnails.py              # Generate all thumbnails
    python generate_thumbnails.py --episode 5  # Generate specific episode
"""

import os
import sys
import math
import random
import argparse
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Add parent directories for config import
sys.path.insert(0, str(Path(__file__).parent.parent.parent))
from config import EPISODES, TOTAL_EPISODES

# Thumbnail dimensions (YouTube recommended)
WIDTH = 1280
HEIGHT = 720

# Color schemes by part
COLORS = {
    1: {  # Part One: Bitcoin is for Individuals
        "gradient_start": "#0D1117",
        "gradient_end": "#1E2846",
        "accent": "#F7931A",
        "accent_dark": "#B36B00",
        "title": "#ffffff",
        "subtitle": "#F7931A",
        "glow": "#F7931A",
        "part_name": "BITCOIN IS FOR INDIVIDUALS"
    },
    2: {  # Part Two: Individuals Run Institutions
        "gradient_start": "#0D1117",
        "gradient_end": "#2D233C",
        "accent": "#F7931A",
        "accent_dark": "#B36B00",
        "title": "#ffffff",
        "subtitle": "#A78BFA",
        "glow": "#A78BFA",
        "part_name": "INDIVIDUALS RUN INSTITUTIONS"
    },
    3: {  # Part Three: Institutional Bitcoin
        "gradient_start": "#0D1117",
        "gradient_end": "#193241",
        "accent": "#F7931A",
        "accent_dark": "#B36B00",
        "title": "#ffffff",
        "subtitle": "#22D3EE",
        "glow": "#22D3EE",
        "part_name": "INSTITUTIONAL BITCOIN"
    }
}

# Episode data with icons
EPISODE_DATA = {
    1: {"icon": "bitcoin", "tagline": "The Foundation"},
    2: {"icon": "diamond", "tagline": "Rational Action"},
    3: {"icon": "coins", "tagline": "Hard Money Mindset"},
    4: {"icon": "key", "tagline": "Self-Custody"},
    5: {"icon": "hourglass", "tagline": "Low Time Preference"},
    6: {"icon": "shield", "tagline": "Bearer Instrument"},
    7: {"icon": "lock", "tagline": "Financial Privacy"},
    8: {"icon": "building", "tagline": "Strategy Case Study"},
    9: {"icon": "chart", "tagline": "BlackRock Case Study"},
    10: {"icon": "calendar", "tagline": "Deferred Comp"},
    11: {"icon": "layers", "tagline": "ETF Analysis"},
    12: {"icon": "vault", "tagline": "Treasury Management"},
    13: {"icon": "document", "tagline": "Credit Structures"},
    14: {"icon": "retirement", "tagline": "Pension Funds"},
    15: {"icon": "framework", "tagline": "Metrics & Models"},
}


def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def create_gradient(width, height, start_color, end_color, direction="diagonal"):
    """Create a gradient background."""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)

    start = hex_to_rgb(start_color)
    end = hex_to_rgb(end_color)

    if direction == "diagonal":
        for y in range(height):
            for x in range(width):
                # Diagonal gradient
                ratio = (x + y) / (width + height)
                r = int(start[0] + (end[0] - start[0]) * ratio)
                g = int(start[1] + (end[1] - start[1]) * ratio)
                b = int(start[2] + (end[2] - start[2]) * ratio)
                draw.point((x, y), fill=(r, g, b))
    else:
        for i in range(height):
            ratio = i / height
            r = int(start[0] + (end[0] - start[0]) * ratio)
            g = int(start[1] + (end[1] - start[1]) * ratio)
            b = int(start[2] + (end[2] - start[2]) * ratio)
            draw.line([(0, i), (width, i)], fill=(r, g, b))

    return img


def add_noise_texture(img, intensity=8):
    """Add subtle noise texture for premium feel."""
    pixels = img.load()
    for y in range(img.height):
        for x in range(img.width):
            r, g, b = pixels[x, y]
            noise = random.randint(-intensity, intensity)
            pixels[x, y] = (
                max(0, min(255, r + noise)),
                max(0, min(255, g + noise)),
                max(0, min(255, b + noise))
            )
    return img


def get_font(size, bold=False):
    """Get a font, falling back to default if custom fonts unavailable."""
    font_paths = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
        "/System/Library/Fonts/SFNSDisplay.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]

    for font_path in font_paths:
        if os.path.exists(font_path):
            try:
                return ImageFont.truetype(font_path, size)
            except:
                continue
    return ImageFont.load_default()


def draw_bitcoin_logo(draw, x, y, size, color):
    """Draw a stylized Bitcoin 'B' symbol."""
    rgb = hex_to_rgb(color)

    # Draw circle background
    draw.ellipse([(x, y), (x + size, y + size)], outline=rgb, width=4)

    # Draw the B with vertical lines
    font = get_font(int(size * 0.6), bold=True)
    b_x = x + size // 3
    b_y = y + size // 5
    draw.text((b_x, b_y), "₿", fill=rgb, font=font)


def draw_icon(draw, icon_type, x, y, size, color):
    """Draw episode-specific icons."""
    rgb = hex_to_rgb(color)

    if icon_type == "bitcoin":
        draw_bitcoin_logo(draw, x, y, size, color)

    elif icon_type == "diamond":
        # Diamond shape for "hard" money
        points = [
            (x + size//2, y),
            (x + size, y + size//3),
            (x + size//2, y + size),
            (x, y + size//3),
        ]
        draw.polygon(points, outline=rgb, width=4)

    elif icon_type == "coins":
        # Stacked coins
        for i in range(3):
            offset = i * 20
            draw.ellipse([(x + offset, y + offset), (x + size - offset, y + size//2 + offset)],
                        outline=rgb, width=3)

    elif icon_type == "key":
        # Key shape
        draw.ellipse([(x, y), (x + size//2, y + size//2)], outline=rgb, width=4)
        draw.rectangle([(x + size//4, y + size//3), (x + size, y + size//2)], fill=rgb)
        draw.rectangle([(x + size*3//4, y + size//2), (x + size*7//8, y + size*2//3)], fill=rgb)
        draw.rectangle([(x + size*5//8, y + size//2), (x + size*3//4, y + size*2//3)], fill=rgb)

    elif icon_type == "hourglass":
        # Hourglass shape
        points_top = [(x, y), (x + size, y), (x + size//2, y + size//2)]
        points_bottom = [(x, y + size), (x + size, y + size), (x + size//2, y + size//2)]
        draw.polygon(points_top, outline=rgb, width=3)
        draw.polygon(points_bottom, outline=rgb, width=3)

    elif icon_type == "shield":
        # Shield shape
        points = [
            (x + size//2, y),
            (x + size, y + size//4),
            (x + size, y + size*2//3),
            (x + size//2, y + size),
            (x, y + size*2//3),
            (x, y + size//4),
        ]
        draw.polygon(points, outline=rgb, width=4)

    elif icon_type == "lock":
        # Padlock
        draw.arc([(x + size//4, y), (x + size*3//4, y + size//2)], 180, 0, fill=rgb, width=4)
        draw.rectangle([(x, y + size//3), (x + size, y + size)], outline=rgb, width=4)

    elif icon_type == "building":
        # Building/skyscraper
        draw.rectangle([(x + size//3, y), (x + size*2//3, y + size)], outline=rgb, width=3)
        for i in range(4):
            row_y = y + size//6 + i * size//5
            draw.rectangle([(x + size//3 + 10, row_y), (x + size//2 - 5, row_y + 15)], fill=rgb)
            draw.rectangle([(x + size//2 + 5, row_y), (x + size*2//3 - 10, row_y + 15)], fill=rgb)

    elif icon_type == "chart":
        # Rising chart
        draw.line([(x, y + size), (x, y)], fill=rgb, width=3)
        draw.line([(x, y + size), (x + size, y + size)], fill=rgb, width=3)
        points = [(x + 10, y + size*3//4), (x + size//3, y + size//2),
                  (x + size*2//3, y + size*2//3), (x + size - 10, y + size//4)]
        draw.line(points, fill=rgb, width=4)

    elif icon_type == "calendar":
        # Calendar
        draw.rectangle([(x, y + size//6), (x + size, y + size)], outline=rgb, width=3)
        draw.rectangle([(x, y + size//6), (x + size, y + size//3)], fill=rgb)
        draw.line([(x + size//4, y), (x + size//4, y + size//4)], fill=rgb, width=4)
        draw.line([(x + size*3//4, y), (x + size*3//4, y + size//4)], fill=rgb, width=4)

    elif icon_type == "layers":
        # Stacked layers (ETF)
        for i in range(3):
            offset_y = i * size//4
            draw.polygon([
                (x + size//2, y + offset_y),
                (x + size, y + size//4 + offset_y),
                (x + size//2, y + size//2 + offset_y),
                (x, y + size//4 + offset_y),
            ], outline=rgb, width=3)

    elif icon_type == "vault":
        # Vault door
        draw.ellipse([(x, y), (x + size, y + size)], outline=rgb, width=4)
        draw.ellipse([(x + size//4, y + size//4), (x + size*3//4, y + size*3//4)], outline=rgb, width=3)
        draw.line([(x + size//2, y + size//3), (x + size//2, y + size*2//3)], fill=rgb, width=4)
        draw.line([(x + size//3, y + size//2), (x + size*2//3, y + size//2)], fill=rgb, width=4)

    elif icon_type == "document":
        # Document/contract
        draw.rectangle([(x + size//6, y), (x + size*5//6, y + size)], outline=rgb, width=3)
        for i in range(4):
            line_y = y + size//4 + i * size//6
            draw.line([(x + size//4, line_y), (x + size*3//4, line_y)], fill=rgb, width=2)

    elif icon_type == "retirement":
        # Umbrella/protection
        draw.arc([(x, y), (x + size, y + size*2//3)], 180, 0, fill=rgb, width=4)
        draw.line([(x + size//2, y + size//3), (x + size//2, y + size)], fill=rgb, width=4)
        draw.arc([(x + size//3, y + size*5//6), (x + size*2//3, y + size)], 0, 180, fill=rgb, width=4)

    elif icon_type == "framework":
        # Grid/framework
        for i in range(4):
            draw.line([(x + i * size//3, y), (x + i * size//3, y + size)], fill=rgb, width=2)
            draw.line([(x, y + i * size//3), (x + size, y + i * size//3)], fill=rgb, width=2)

    else:
        # Default: Bitcoin circle
        draw_bitcoin_logo(draw, x, y, size, color)


def create_thumbnail(episode_num, output_dir):
    """Create a thumbnail for a specific episode."""

    if episode_num not in EPISODES:
        print(f"Episode {episode_num} not found in config")
        return None

    ep_config = EPISODES[episode_num]
    ep_data = EPISODE_DATA.get(episode_num, {"icon": "bitcoin", "tagline": ""})
    colors = COLORS[ep_config["part"]]

    # Create gradient background (vertical for speed)
    img = create_gradient(WIDTH, HEIGHT, colors["gradient_start"], colors["gradient_end"], "vertical")

    # Add subtle noise
    add_noise_texture(img, intensity=5)

    draw = ImageDraw.Draw(img)

    # Load fonts
    font_title = get_font(58, bold=True)
    font_subtitle = get_font(36)
    font_episode = get_font(28, bold=True)
    font_series = get_font(32, bold=True)
    font_part = get_font(22)

    accent_rgb = hex_to_rgb(colors["accent"])

    # Top accent bar
    draw.rectangle([(0, 0), (WIDTH, 5)], fill=accent_rgb)

    # Bottom accent bar
    draw.rectangle([(0, HEIGHT-5), (WIDTH, HEIGHT)], fill=accent_rgb)

    # Left accent stripe with gradient
    for i in range(25):
        alpha = 1 - (i / 25)
        r = int(accent_rgb[0] * alpha)
        g = int(accent_rgb[1] * alpha)
        b = int(accent_rgb[2] * alpha)
        draw.line([(i, 0), (i, HEIGHT)], fill=(r, g, b))

    # Episode number badge
    badge_width = 180
    badge_height = 50
    badge_x = 50
    badge_y = 50

    # Badge shadow
    draw.rectangle(
        [(badge_x + 3, badge_y + 3), (badge_x + badge_width + 3, badge_y + badge_height + 3)],
        fill=(0, 0, 0)
    )
    draw.rectangle(
        [(badge_x, badge_y), (badge_x + badge_width, badge_y + badge_height)],
        fill=accent_rgb
    )

    ep_text = f"EPISODE {episode_num}"
    ep_bbox = draw.textbbox((0, 0), ep_text, font=font_episode)
    ep_width = ep_bbox[2] - ep_bbox[0]

    draw.text(
        (badge_x + (badge_width - ep_width) // 2, badge_y + 10),
        ep_text,
        fill=(13, 17, 23),  # Dark text on orange
        font=font_episode
    )

    # Part indicator (right side)
    part_text = f"PART {ep_config['part']}"
    draw.text((WIDTH - 150, 55), part_text, fill=accent_rgb, font=font_part)

    # Series title
    series_text = "BITCOIN FOR INSTITUTIONS"
    draw.text((50, 130), series_text, fill=accent_rgb, font=font_series)

    # Decorative line
    draw.rectangle([(50, 175), (400, 178)], fill=hex_to_rgb(colors["accent_dark"]))

    # Main title (episode title)
    title = ep_config["title"].upper()
    title_y = 210

    # Title shadow
    draw.text((52, title_y + 2), title, fill=(0, 0, 0), font=font_title)
    draw.text((50, title_y), title, fill=hex_to_rgb(colors["title"]), font=font_title)

    # Subtitle (part name)
    subtitle = ep_config["part_name"]
    subtitle_y = title_y + 75
    draw.text((50, subtitle_y), subtitle, fill=hex_to_rgb(colors["subtitle"]), font=font_subtitle)

    # Tagline if available
    if ep_data.get("tagline"):
        tagline_y = subtitle_y + 50
        draw.text((50, tagline_y), ep_data["tagline"], fill=(139, 148, 158), font=font_part)

    # Draw episode icon (right side)
    icon_type = ep_data.get("icon", "bitcoin")
    icon_x = WIDTH - 280
    icon_y = HEIGHT // 2 - 60
    icon_size = 160

    # Create glow effect
    glow_img = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_img)
    draw_icon(glow_draw, icon_type, icon_x, icon_y, icon_size, colors["glow"])
    glow_img = glow_img.filter(ImageFilter.GaussianBlur(radius=20))

    # Composite
    img = Image.alpha_composite(img.convert('RGBA'), glow_img)
    draw = ImageDraw.Draw(img)

    # Draw icon crisp on top
    draw_icon(draw, icon_type, icon_x, icon_y, icon_size, colors["accent"])

    # Bottom vignette
    for i in range(80):
        alpha = int(255 * (i / 80) * 0.4)
        draw.rectangle([(0, HEIGHT - i), (WIDTH, HEIGHT - i + 1)], fill=(0, 0, 0, alpha))

    # Convert to RGB and save
    img = img.convert('RGB')

    output_path = output_dir / f"ep{episode_num:02d}_thumbnail.png"
    img.save(output_path, "PNG", quality=95)
    print(f"Created: {output_path}")

    return output_path


def create_all_thumbnails(output_dir):
    """Create thumbnails for all episodes."""
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    for ep_num in range(1, TOTAL_EPISODES + 1):
        create_thumbnail(ep_num, output_dir)

    print(f"\nAll {TOTAL_EPISODES} thumbnails created in {output_dir}")


def main():
    parser = argparse.ArgumentParser(description="Generate BFI YouTube thumbnails")
    parser.add_argument("--episode", "-e", type=int, help="Generate thumbnail for specific episode")
    parser.add_argument("--output", "-o", default=".", help="Output directory")

    args = parser.parse_args()
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    if args.episode:
        create_thumbnail(args.episode, output_dir)
    else:
        create_all_thumbnails(output_dir)


if __name__ == "__main__":
    main()
