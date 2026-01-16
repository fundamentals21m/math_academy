#!/usr/bin/env python3
"""
Atlas Shrugged YouTube Thumbnail Generator

Creates professional thumbnails for all 30 episodes with:
- Consistent branding and color scheme
- Part-specific color coding (gold, crimson, steel blue)
- Episode numbers and titles
- Series logo and styling

Requirements:
    pip install Pillow

Usage:
    python generate_thumbnails.py              # Generate all thumbnails
    python generate_thumbnails.py --episode 5  # Generate specific episode
    python generate_thumbnails.py --part 2     # Generate all Part 2 thumbnails
"""

import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import argparse

# Thumbnail dimensions (YouTube recommended)
WIDTH = 1280
HEIGHT = 720

# Color schemes by part
COLORS = {
    1: {  # Part One: Non-Contradiction
        "background": "#1a1a2e",      # Deep navy
        "accent": "#d4af37",          # Gold
        "title": "#ffffff",
        "subtitle": "#d4af37",
        "episode_bg": "#d4af37",
        "episode_text": "#1a1a2e",
        "part_name": "NON-CONTRADICTION"
    },
    2: {  # Part Two: Either-Or
        "background": "#1a1a2e",
        "accent": "#c41e3a",          # Crimson
        "title": "#ffffff",
        "subtitle": "#c41e3a",
        "episode_bg": "#c41e3a",
        "episode_text": "#ffffff",
        "part_name": "EITHER-OR"
    },
    3: {  # Part Three: A Is A
        "background": "#1a1a2e",
        "accent": "#4682b4",          # Steel blue
        "title": "#ffffff",
        "subtitle": "#4682b4",
        "episode_bg": "#4682b4",
        "episode_text": "#ffffff",
        "part_name": "A IS A"
    }
}

# Episode data
EPISODES = {
    # Part One: Non-Contradiction (1-10)
    1: {"title": "The Theme", "subtitle": '"Who Is John Galt?"', "part": 1},
    2: {"title": "The Chain", "subtitle": "Rearden Metal", "part": 1},
    3: {"title": "The Top and the Bottom", "subtitle": "The Looters Conspire", "part": 1},
    4: {"title": "The Immovable Movers", "subtitle": "Francisco's Secret", "part": 1},
    5: {"title": "The Climax of the d'Anconias", "subtitle": "The Money Speech", "part": 1},
    6: {"title": "The Non-Commercial", "subtitle": "Science Against Achievement", "part": 1},
    7: {"title": "The Exploiters and the Exploited", "subtitle": "Wesley Mouch's Betrayal", "part": 1},
    8: {"title": "The John Galt Line", "subtitle": "Triumph of Achievement", "part": 1},
    9: {"title": "The Sacred and the Profane", "subtitle": "Mind and Body", "part": 1},
    10: {"title": "Wyatt's Torch", "subtitle": "Part One Finale", "part": 1},

    # Part Two: Either-Or (11-20)
    11: {"title": "The Man Who Belonged on Earth", "subtitle": "Part Two Begins", "part": 2},
    12: {"title": "The Aristocracy of Pull", "subtitle": "Connections Over Merit", "part": 2},
    13: {"title": "White Blackmail", "subtitle": "Guilt as a Weapon", "part": 2},
    14: {"title": "The Sanction of the Victim", "subtitle": "Evil Needs Permission", "part": 2},
    15: {"title": "Account Overdrawn", "subtitle": "When the Bill Comes Due", "part": 2},
    16: {"title": "Miracle Metal", "subtitle": "Government Seizure", "part": 2},
    17: {"title": "The Moratorium on Brains", "subtitle": "Outlawing Innovation", "part": 2},
    18: {"title": "By Our Love", "subtitle": "What Romance Reveals", "part": 2},
    19: {"title": "The Face Without Pain or Fear or Guilt", "subtitle": "A Life Resolved", "part": 2},
    20: {"title": "The Sign of the Dollar", "subtitle": "Part Two Finale", "part": 2},

    # Part Three: A Is A (21-30)
    21: {"title": "Atlantis", "subtitle": "The Hidden Valley", "part": 3},
    22: {"title": "The Utopia of Greed", "subtitle": "Self-Interest Succeeds", "part": 3},
    23: {"title": "Anti-Greed", "subtitle": "Envy vs. Creation", "part": 3},
    24: {"title": "Anti-Life", "subtitle": "Death as Virtue", "part": 3},
    25: {"title": "Their Brothers' Keepers", "subtitle": "Brotherhood as Slavery", "part": 3},
    26: {"title": "The Concerto of Deliverance", "subtitle": "Art and Liberation", "part": 3},
    27: {"title": "This Is John Galt Speaking", "subtitle": "The Speech", "part": 3},
    28: {"title": "The Egoist", "subtitle": "Selfishness as Virtue", "part": 3},
    29: {"title": "The Generator", "subtitle": "The Motor and the Mind", "part": 3},
    30: {"title": "In the Name of the Best Within Us", "subtitle": "Series Finale", "part": 3},
}


def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def get_font(size, bold=False):
    """Get a font, falling back to default if custom fonts unavailable."""
    # Try common system fonts
    font_paths = [
        # macOS
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
        "/System/Library/Fonts/SFNSDisplay.ttf",
        # Linux
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        # Windows
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]

    for font_path in font_paths:
        if os.path.exists(font_path):
            try:
                return ImageFont.truetype(font_path, size)
            except:
                continue

    # Fallback to default
    return ImageFont.load_default()


def create_thumbnail(episode_num, output_dir):
    """Create a thumbnail for a specific episode."""

    if episode_num not in EPISODES:
        print(f"Episode {episode_num} not found")
        return None

    ep = EPISODES[episode_num]
    colors = COLORS[ep["part"]]

    # Create image
    img = Image.new('RGB', (WIDTH, HEIGHT), hex_to_rgb(colors["background"]))
    draw = ImageDraw.Draw(img)

    # Load fonts
    font_title = get_font(72, bold=True)
    font_subtitle = get_font(42)
    font_episode = get_font(36, bold=True)
    font_series = get_font(32)
    font_part = get_font(28)

    # Draw decorative elements
    accent_rgb = hex_to_rgb(colors["accent"])

    # Top accent bar
    draw.rectangle([(0, 0), (WIDTH, 8)], fill=accent_rgb)

    # Bottom accent bar
    draw.rectangle([(0, HEIGHT-8), (WIDTH, HEIGHT)], fill=accent_rgb)

    # Left accent stripe
    draw.rectangle([(0, 0), (12, HEIGHT)], fill=accent_rgb)

    # Episode number badge (top left)
    badge_width = 180
    badge_height = 70
    badge_x = 50
    badge_y = 50

    draw.rectangle(
        [(badge_x, badge_y), (badge_x + badge_width, badge_y + badge_height)],
        fill=hex_to_rgb(colors["episode_bg"])
    )

    ep_text = f"EPISODE {episode_num}"
    ep_bbox = draw.textbbox((0, 0), ep_text, font=font_episode)
    ep_width = ep_bbox[2] - ep_bbox[0]
    ep_height = ep_bbox[3] - ep_bbox[1]

    draw.text(
        (badge_x + (badge_width - ep_width) // 2, badge_y + (badge_height - ep_height) // 2 - 5),
        ep_text,
        fill=hex_to_rgb(colors["episode_text"]),
        font=font_episode
    )

    # Part indicator (top right)
    part_text = f"PART {ep['part']}: {colors['part_name']}"
    part_bbox = draw.textbbox((0, 0), part_text, font=font_part)
    part_width = part_bbox[2] - part_bbox[0]

    draw.text(
        (WIDTH - part_width - 50, 60),
        part_text,
        fill=accent_rgb,
        font=font_part
    )

    # Series title
    series_text = "ATLAS SHRUGGED"
    draw.text(
        (50, 160),
        series_text,
        fill=hex_to_rgb(colors["title"]),
        font=font_series
    )

    # Main title - centered vertically
    title_y = 280

    # Handle long titles
    title = ep["title"].upper()
    if len(title) > 25:
        # Split into two lines
        words = title.split()
        mid = len(words) // 2
        line1 = " ".join(words[:mid])
        line2 = " ".join(words[mid:])

        draw.text((50, title_y), line1, fill=hex_to_rgb(colors["title"]), font=font_title)
        draw.text((50, title_y + 85), line2, fill=hex_to_rgb(colors["title"]), font=font_title)
        subtitle_y = title_y + 190
    else:
        draw.text((50, title_y), title, fill=hex_to_rgb(colors["title"]), font=font_title)
        subtitle_y = title_y + 100

    # Subtitle
    subtitle = ep["subtitle"]
    draw.text(
        (50, subtitle_y),
        subtitle,
        fill=hex_to_rgb(colors["subtitle"]),
        font=font_subtitle
    )

    # Decorative line under subtitle
    line_y = subtitle_y + 60
    draw.rectangle([(50, line_y), (400, line_y + 4)], fill=accent_rgb)

    # Large decorative element (abstract)
    # Dollar sign silhouette for thematic relevance
    dollar_x = WIDTH - 300
    dollar_y = HEIGHT // 2 - 100

    # Draw stylized $ symbol
    draw.text(
        (dollar_x, dollar_y - 50),
        "$",
        fill=(*accent_rgb, 40),  # Semi-transparent
        font=get_font(350, bold=True)
    )

    # Save thumbnail
    output_path = output_dir / f"ep{episode_num:02d}_thumbnail.png"
    img.save(output_path, "PNG", quality=95)
    print(f"Created: {output_path}")

    return output_path


def create_all_thumbnails(output_dir):
    """Create thumbnails for all episodes."""
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    for ep_num in range(1, 31):
        create_thumbnail(ep_num, output_dir)

    print(f"\nAll 30 thumbnails created in {output_dir}")


def create_series_thumbnail(output_dir):
    """Create a thumbnail for the series playlist."""
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    # Create image
    img = Image.new('RGB', (WIDTH, HEIGHT), hex_to_rgb("#1a1a2e"))
    draw = ImageDraw.Draw(img)

    # Load fonts
    font_title = get_font(100, bold=True)
    font_subtitle = get_font(48)
    font_info = get_font(36)

    # Draw all three part colors as stripes
    stripe_height = 8
    draw.rectangle([(0, 0), (WIDTH//3, stripe_height)], fill=hex_to_rgb("#d4af37"))
    draw.rectangle([(WIDTH//3, 0), (2*WIDTH//3, stripe_height)], fill=hex_to_rgb("#c41e3a"))
    draw.rectangle([(2*WIDTH//3, 0), (WIDTH, stripe_height)], fill=hex_to_rgb("#4682b4"))

    draw.rectangle([(0, HEIGHT-stripe_height), (WIDTH//3, HEIGHT)], fill=hex_to_rgb("#d4af37"))
    draw.rectangle([(WIDTH//3, HEIGHT-stripe_height), (2*WIDTH//3, HEIGHT)], fill=hex_to_rgb("#c41e3a"))
    draw.rectangle([(2*WIDTH//3, HEIGHT-stripe_height), (WIDTH, HEIGHT)], fill=hex_to_rgb("#4682b4"))

    # Title
    title = "ATLAS SHRUGGED"
    title_bbox = draw.textbbox((0, 0), title, font=font_title)
    title_width = title_bbox[2] - title_bbox[0]

    draw.text(
        ((WIDTH - title_width) // 2, 200),
        title,
        fill="#ffffff",
        font=font_title
    )

    # Subtitle
    subtitle = "Complete Video Series"
    sub_bbox = draw.textbbox((0, 0), subtitle, font=font_subtitle)
    sub_width = sub_bbox[2] - sub_bbox[0]

    draw.text(
        ((WIDTH - sub_width) // 2, 330),
        subtitle,
        fill="#d4af37",
        font=font_subtitle
    )

    # Part info
    parts = [
        ("Part One:", "Non-Contradiction", "#d4af37"),
        ("Part Two:", "Either-Or", "#c41e3a"),
        ("Part Three:", "A Is A", "#4682b4"),
    ]

    y_offset = 450
    for part_label, part_name, color in parts:
        text = f"{part_label} {part_name}"
        text_bbox = draw.textbbox((0, 0), text, font=font_info)
        text_width = text_bbox[2] - text_bbox[0]

        draw.text(
            ((WIDTH - text_width) // 2, y_offset),
            text,
            fill=color,
            font=font_info
        )
        y_offset += 50

    # Episode count
    count_text = "30 Episodes"
    count_bbox = draw.textbbox((0, 0), count_text, font=font_info)
    count_width = count_bbox[2] - count_bbox[0]

    draw.text(
        ((WIDTH - count_width) // 2, 620),
        count_text,
        fill="#888888",
        font=font_info
    )

    # Save
    output_path = output_dir / "series_thumbnail.png"
    img.save(output_path, "PNG", quality=95)
    print(f"Created: {output_path}")

    return output_path


def main():
    parser = argparse.ArgumentParser(description="Generate Atlas Shrugged YouTube thumbnails")
    parser.add_argument("--episode", "-e", type=int, help="Generate thumbnail for specific episode")
    parser.add_argument("--part", "-p", type=int, choices=[1, 2, 3], help="Generate thumbnails for specific part")
    parser.add_argument("--series", "-s", action="store_true", help="Generate series playlist thumbnail")
    parser.add_argument("--output", "-o", default=".", help="Output directory")

    args = parser.parse_args()
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    if args.episode:
        create_thumbnail(args.episode, output_dir)
    elif args.part:
        if args.part == 1:
            episodes = range(1, 11)
        elif args.part == 2:
            episodes = range(11, 21)
        else:
            episodes = range(21, 31)

        for ep in episodes:
            create_thumbnail(ep, output_dir)
    elif args.series:
        create_series_thumbnail(output_dir)
    else:
        create_all_thumbnails(output_dir)
        create_series_thumbnail(output_dir)


if __name__ == "__main__":
    main()
