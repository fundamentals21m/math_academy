#!/usr/bin/env python3
"""
Atlas Shrugged YouTube Thumbnail Generator v2

Enhanced with:
- Gradient backgrounds
- Episode-specific imagery/icons
- Key quote callouts
- Premium texture overlay
- Dramatic lighting effects

Requirements:
    pip install Pillow numpy

Usage:
    python generate_thumbnails_v2.py              # Generate all thumbnails
    python generate_thumbnails_v2.py --episode 5  # Generate specific episode
"""

import os
import math
import random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import argparse

# Thumbnail dimensions (YouTube recommended)
WIDTH = 1280
HEIGHT = 720

# Color schemes by part
COLORS = {
    1: {  # Part One: Non-Contradiction
        "gradient_start": "#0f0f1a",
        "gradient_end": "#1a1a2e",
        "accent": "#d4af37",
        "accent_dark": "#a08520",
        "title": "#ffffff",
        "subtitle": "#d4af37",
        "glow": "#d4af37",
        "part_name": "NON-CONTRADICTION"
    },
    2: {  # Part Two: Either-Or
        "gradient_start": "#1a0a0a",
        "gradient_end": "#1a1a2e",
        "accent": "#c41e3a",
        "accent_dark": "#8a1528",
        "title": "#ffffff",
        "subtitle": "#c41e3a",
        "glow": "#c41e3a",
        "part_name": "EITHER-OR"
    },
    3: {  # Part Three: A Is A
        "gradient_start": "#0a1520",
        "gradient_end": "#1a1a2e",
        "accent": "#4682b4",
        "accent_dark": "#2d5577",
        "title": "#ffffff",
        "subtitle": "#4682b4",
        "glow": "#4682b4",
        "part_name": "A IS A"
    }
}

# Episode data with quotes for featured episodes
EPISODES = {
    # Part One
    1: {"title": "The Theme", "subtitle": '"Who Is John Galt?"', "part": 1,
        "quote": "Who is John Galt?", "icon": "question_mark"},
    2: {"title": "The Chain", "subtitle": "Rearden Metal", "part": 1,
        "icon": "chain"},
    3: {"title": "The Top and the Bottom", "subtitle": "The Looters Conspire", "part": 1,
        "icon": "scales"},
    4: {"title": "The Immovable Movers", "subtitle": "Francisco's Secret", "part": 1,
        "icon": "mask"},
    5: {"title": "The Climax of the d'Anconias", "subtitle": "The Money Speech", "part": 1,
        "quote": "Money is the root of all good", "icon": "coins"},
    6: {"title": "The Non-Commercial", "subtitle": "Science Against Achievement", "part": 1,
        "icon": "flask"},
    7: {"title": "The Exploiters and the Exploited", "subtitle": "Wesley Mouch's Betrayal", "part": 1,
        "icon": "knife"},
    8: {"title": "The John Galt Line", "subtitle": "Triumph of Achievement", "part": 1,
        "quote": "The first train!", "icon": "train"},
    9: {"title": "The Sacred and the Profane", "subtitle": "Mind and Body", "part": 1,
        "icon": "infinity"},
    10: {"title": "Wyatt's Torch", "subtitle": "Part One Finale", "part": 1,
         "quote": "I am leaving it as I found it", "icon": "flame"},

    # Part Two
    11: {"title": "The Man Who Belonged on Earth", "subtitle": "Part Two Begins", "part": 2,
         "icon": "globe"},
    12: {"title": "The Aristocracy of Pull", "subtitle": "Connections Over Merit", "part": 2,
         "icon": "crown"},
    13: {"title": "White Blackmail", "subtitle": "Guilt as a Weapon", "part": 2,
         "icon": "shadow"},
    14: {"title": "The Sanction of the Victim", "subtitle": "Evil Needs Permission", "part": 2,
         "quote": "The victim's sanction", "icon": "handshake"},
    15: {"title": "Account Overdrawn", "subtitle": "When the Bill Comes Due", "part": 2,
         "icon": "ledger"},
    16: {"title": "Miracle Metal", "subtitle": "Government Seizure", "part": 2,
         "icon": "ingot"},
    17: {"title": "The Moratorium on Brains", "subtitle": "Outlawing Innovation", "part": 2,
         "quote": "Thinking is now illegal", "icon": "brain"},
    18: {"title": "By Our Love", "subtitle": "What Romance Reveals", "part": 2,
         "icon": "heart"},
    19: {"title": "The Face Without Pain or Fear or Guilt", "subtitle": "A Life Resolved", "part": 2,
         "icon": "face"},
    20: {"title": "The Sign of the Dollar", "subtitle": "Part Two Finale", "part": 2,
         "quote": "$", "icon": "dollar"},

    # Part Three
    21: {"title": "Atlantis", "subtitle": "The Hidden Valley", "part": 3,
         "quote": "Atlantis lives", "icon": "mountain"},
    22: {"title": "The Utopia of Greed", "subtitle": "Self-Interest Succeeds", "part": 3,
         "icon": "city"},
    23: {"title": "Anti-Greed", "subtitle": "Envy vs. Creation", "part": 3,
         "icon": "contrast"},
    24: {"title": "Anti-Life", "subtitle": "Death as Virtue", "part": 3,
         "icon": "skull"},
    25: {"title": "Their Brothers' Keepers", "subtitle": "Brotherhood as Slavery", "part": 3,
         "icon": "chains"},
    26: {"title": "The Concerto of Deliverance", "subtitle": "Art and Liberation", "part": 3,
         "icon": "music"},
    27: {"title": "This Is John Galt Speaking", "subtitle": "The Speech", "part": 3,
         "quote": "This is John Galt speaking", "icon": "microphone"},
    28: {"title": "The Egoist", "subtitle": "Selfishness as Virtue", "part": 3,
         "icon": "mirror"},
    29: {"title": "The Generator", "subtitle": "The Motor and the Mind", "part": 3,
         "icon": "motor"},
    30: {"title": "In the Name of the Best Within Us", "subtitle": "Series Finale", "part": 3,
         "quote": "The best within us", "icon": "sunrise"},
}


def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def create_gradient(width, height, start_color, end_color, direction="vertical"):
    """Create a gradient background."""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)

    start = hex_to_rgb(start_color)
    end = hex_to_rgb(end_color)

    for i in range(height if direction == "vertical" else width):
        ratio = i / (height if direction == "vertical" else width)
        r = int(start[0] + (end[0] - start[0]) * ratio)
        g = int(start[1] + (end[1] - start[1]) * ratio)
        b = int(start[2] + (end[2] - start[2]) * ratio)

        if direction == "vertical":
            draw.line([(0, i), (width, i)], fill=(r, g, b))
        else:
            draw.line([(i, 0), (i, height)], fill=(r, g, b))

    return img


def add_noise_texture(img, intensity=10):
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


def draw_glow(draw, x, y, radius, color, intensity=0.3):
    """Draw a soft glow effect."""
    rgb = hex_to_rgb(color)
    for r in range(radius, 0, -5):
        alpha = int(255 * intensity * (r / radius))
        glow_color = (*rgb, alpha)
        # Draw concentric circles with decreasing opacity
        for offset in range(-2, 3):
            draw.ellipse(
                [(x - r + offset, y - r), (x + r + offset, y + r)],
                fill=None,
                outline=rgb
            )


def draw_icon(draw, icon_type, x, y, size, color):
    """Draw episode-specific icons."""
    rgb = hex_to_rgb(color)

    if icon_type == "question_mark":
        # Draw stylized question mark
        font = get_font(size, bold=True)
        draw.text((x, y), "?", fill=rgb, font=font)

    elif icon_type == "flame":
        # Draw flame shape
        points = [
            (x, y + size),
            (x + size//4, y + size//2),
            (x + size//2, y),
            (x + size*3//4, y + size//2),
            (x + size, y + size),
            (x + size//2, y + size*3//4),
        ]
        draw.polygon(points, fill=rgb)

    elif icon_type == "train":
        # Draw train front silhouette
        draw.rectangle([(x, y + size//3), (x + size, y + size)], fill=rgb)
        draw.ellipse([(x + size//6, y), (x + size*5//6, y + size*2//3)], fill=rgb)

    elif icon_type == "coins":
        # Draw stacked coins
        for i in range(3):
            offset = i * 15
            draw.ellipse([(x + offset, y + offset), (x + size - offset, y + size//3 + offset)], fill=rgb)

    elif icon_type == "dollar":
        # Large dollar sign
        font = get_font(size + 50, bold=True)
        draw.text((x, y - 30), "$", fill=rgb, font=font)

    elif icon_type == "microphone":
        # Vintage microphone
        draw.ellipse([(x + size//4, y), (x + size*3//4, y + size//2)], fill=rgb)
        draw.rectangle([(x + size*3//8, y + size//2), (x + size*5//8, y + size)], fill=rgb)

    elif icon_type == "mountain":
        # Mountain peaks
        points = [
            (x, y + size),
            (x + size//3, y),
            (x + size*2//3, y + size//2),
            (x + size, y + size//4),
            (x + size, y + size),
        ]
        draw.polygon(points, fill=rgb)

    elif icon_type == "sunrise":
        # Sun rising over horizon
        draw.arc([(x, y), (x + size, y + size)], 180, 360, fill=rgb, width=8)
        for angle in range(0, 180, 30):
            rad = math.radians(angle)
            x1 = x + size//2 + int((size//2 + 20) * math.cos(rad))
            y1 = y + size//2 - int((size//2 + 20) * math.sin(rad))
            x2 = x + size//2 + int((size//2 + 40) * math.cos(rad))
            y2 = y + size//2 - int((size//2 + 40) * math.sin(rad))
            draw.line([(x1, y1), (x2, y2)], fill=rgb, width=3)
        draw.rectangle([(x - 20, y + size//2), (x + size + 20, y + size)], fill=hex_to_rgb("#0a1520"))

    elif icon_type == "chain":
        # Chain links
        for i in range(3):
            offset = i * size//3
            draw.ellipse([(x + offset, y), (x + size//3 + offset, y + size//2)], outline=rgb, width=5)

    elif icon_type == "skull":
        # Simple skull silhouette
        draw.ellipse([(x, y), (x + size, y + size*2//3)], fill=rgb)
        draw.rectangle([(x + size//4, y + size*2//3), (x + size*3//4, y + size)], fill=rgb)

    elif icon_type == "music":
        # Musical notes
        draw.ellipse([(x, y + size*2//3), (x + size//3, y + size)], fill=rgb)
        draw.rectangle([(x + size//4, y), (x + size//3, y + size*2//3)], fill=rgb)
        draw.ellipse([(x + size//2, y + size//2), (x + size*5//6, y + size*5//6)], fill=rgb)
        draw.rectangle([(x + size*3//4, y + size//4), (x + size*5//6, y + size//2)], fill=rgb)

    else:
        # Default: draw a circle
        draw.ellipse([(x, y), (x + size, y + size)], outline=rgb, width=4)


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


def create_thumbnail_v2(episode_num, output_dir):
    """Create an enhanced thumbnail for a specific episode."""

    if episode_num not in EPISODES:
        print(f"Episode {episode_num} not found")
        return None

    ep = EPISODES[episode_num]
    colors = COLORS[ep["part"]]

    # Create gradient background
    img = create_gradient(WIDTH, HEIGHT, colors["gradient_start"], colors["gradient_end"])

    # Add subtle noise texture
    add_noise_texture(img, intensity=5)

    draw = ImageDraw.Draw(img)

    # Load fonts
    font_title = get_font(68, bold=True)
    font_subtitle = get_font(38)
    font_episode = get_font(32, bold=True)
    font_series = get_font(28)
    font_part = get_font(24)
    font_quote = get_font(32)

    accent_rgb = hex_to_rgb(colors["accent"])
    accent_dark_rgb = hex_to_rgb(colors["accent_dark"])

    # Draw decorative accent bars
    draw.rectangle([(0, 0), (WIDTH, 6)], fill=accent_rgb)
    draw.rectangle([(0, HEIGHT-6), (WIDTH, HEIGHT)], fill=accent_rgb)

    # Gradient left stripe
    for i in range(20):
        alpha = 1 - (i / 20)
        r = int(accent_rgb[0] * alpha)
        g = int(accent_rgb[1] * alpha)
        b = int(accent_rgb[2] * alpha)
        draw.line([(i, 0), (i, HEIGHT)], fill=(r, g, b))

    # Episode number badge with gradient effect
    badge_width = 200
    badge_height = 60
    badge_x = 50
    badge_y = 50

    # Badge shadow
    draw.rectangle(
        [(badge_x + 3, badge_y + 3), (badge_x + badge_width + 3, badge_y + badge_height + 3)],
        fill=hex_to_rgb("#000000")
    )
    draw.rectangle(
        [(badge_x, badge_y), (badge_x + badge_width, badge_y + badge_height)],
        fill=accent_rgb
    )

    ep_text = f"EPISODE {episode_num}"
    ep_bbox = draw.textbbox((0, 0), ep_text, font=font_episode)
    ep_width = ep_bbox[2] - ep_bbox[0]

    badge_text_color = hex_to_rgb("#1a1a2e") if ep["part"] == 1 else hex_to_rgb("#ffffff")
    draw.text(
        (badge_x + (badge_width - ep_width) // 2, badge_y + 12),
        ep_text,
        fill=badge_text_color,
        font=font_episode
    )

    # Part indicator with glow
    part_text = f"PART {ep['part']}: {colors['part_name']}"
    part_bbox = draw.textbbox((0, 0), part_text, font=font_part)
    part_width = part_bbox[2] - part_bbox[0]

    draw.text(
        (WIDTH - part_width - 50, 55),
        part_text,
        fill=accent_rgb,
        font=font_part
    )

    # Series title
    series_text = "ATLAS SHRUGGED"
    draw.text((50, 140), series_text, fill=hex_to_rgb(colors["title"]), font=font_series)

    # Decorative line
    draw.rectangle([(50, 180), (300, 182)], fill=accent_dark_rgb)

    # Main title
    title_y = 220
    title = ep["title"].upper()

    # Title shadow
    draw.text((52, title_y + 2), title, fill=hex_to_rgb("#000000"), font=font_title)
    draw.text((50, title_y), title, fill=hex_to_rgb(colors["title"]), font=font_title)

    # Subtitle
    subtitle_y = title_y + 85
    draw.text(
        (50, subtitle_y),
        ep["subtitle"],
        fill=hex_to_rgb(colors["subtitle"]),
        font=font_subtitle
    )

    # Quote callout (if present)
    if "quote" in ep and ep["quote"]:
        quote_y = subtitle_y + 60
        quote_text = f'"{ep["quote"]}"'

        # Quote box background
        quote_bbox = draw.textbbox((0, 0), quote_text, font=font_quote)
        quote_width = quote_bbox[2] - quote_bbox[0]

        draw.rectangle(
            [(45, quote_y - 5), (65 + quote_width, quote_y + 45)],
            fill=(*accent_dark_rgb, 128)
        )
        draw.rectangle(
            [(45, quote_y - 5), (50, quote_y + 45)],
            fill=accent_rgb
        )

        draw.text(
            (60, quote_y),
            quote_text,
            fill=hex_to_rgb("#ffffff"),
            font=font_quote
        )

    # Draw episode-specific icon
    icon_type = ep.get("icon", "circle")
    icon_x = WIDTH - 300
    icon_y = HEIGHT // 2 - 80
    icon_size = 180

    # Icon with glow effect
    glow_img = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_img)

    # Draw icon on glow layer
    draw_icon(glow_draw, icon_type, icon_x, icon_y, icon_size, colors["accent"])

    # Apply blur for glow
    glow_img = glow_img.filter(ImageFilter.GaussianBlur(radius=15))

    # Composite glow onto main image
    img = Image.alpha_composite(img.convert('RGBA'), glow_img)
    draw = ImageDraw.Draw(img)

    # Draw icon again on top (crisp)
    draw_icon(draw, icon_type, icon_x, icon_y, icon_size, colors["accent"])

    # Bottom vignette effect
    for i in range(100):
        alpha = int(255 * (i / 100) * 0.3)
        draw.rectangle(
            [(0, HEIGHT - i), (WIDTH, HEIGHT - i + 1)],
            fill=(0, 0, 0, alpha)
        )

    # Convert back to RGB for saving
    img = img.convert('RGB')

    # Save thumbnail
    output_path = output_dir / f"ep{episode_num:02d}_thumbnail_v2.png"
    img.save(output_path, "PNG", quality=95)
    print(f"Created: {output_path}")

    return output_path


def create_all_thumbnails(output_dir):
    """Create enhanced thumbnails for all episodes."""
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    for ep_num in range(1, 31):
        create_thumbnail_v2(ep_num, output_dir)

    print(f"\nAll 30 enhanced thumbnails created in {output_dir}")


def main():
    parser = argparse.ArgumentParser(description="Generate enhanced Atlas Shrugged YouTube thumbnails")
    parser.add_argument("--episode", "-e", type=int, help="Generate thumbnail for specific episode")
    parser.add_argument("--part", "-p", type=int, choices=[1, 2, 3], help="Generate thumbnails for specific part")
    parser.add_argument("--output", "-o", default=".", help="Output directory")

    args = parser.parse_args()
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    if args.episode:
        create_thumbnail_v2(args.episode, output_dir)
    elif args.part:
        if args.part == 1:
            episodes = range(1, 11)
        elif args.part == 2:
            episodes = range(11, 21)
        else:
            episodes = range(21, 31)

        for ep in episodes:
            create_thumbnail_v2(ep, output_dir)
    else:
        create_all_thumbnails(output_dir)


if __name__ == "__main__":
    main()
