#!/usr/bin/env python3
"""
Video Generator for Atlas Shrugged YouTube Series

Generates MP4 videos by combining:
- Audio narration (MP3 files from ElevenLabs)
- Visual backgrounds (AI-generated or placeholder)
- Text overlays (titles, section names)
- Transitions

Usage:
    python video_generator.py --episode 1
    python video_generator.py --episode 1 --use-placeholders
"""

import os
import sys
import argparse
from pathlib import Path
from typing import List, Dict, Tuple
import re

from moviepy import (
    AudioFileClip, ImageClip, TextClip, CompositeVideoClip,
    concatenate_videoclips, ColorClip, CompositeAudioClip
)
from PIL import Image, ImageDraw, ImageFont
import numpy as np

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from config import (
    PROJECT_DIR as BASE_DIR,
    OUTPUT_DIR,
    ASSETS_DIR,
    VIDEO_WIDTH,
    VIDEO_HEIGHT,
    FPS,
    EPISODES,
    PART_COLORS
)

# Section display names
SECTION_NAMES = {
    "cold_open": "Cold Open",
    "introduction": "Introduction",
    "chapter_summary": "Chapter Summary",
    "dagny_introduction": "Dagny Taggart",
    "key_themes": "Key Themes",
    "novel_structure": "Novel Structure",
    "characters": "Characters",
    "closing": "Closing",
    # Generic patterns
    "the_collapse": "The Collapse",
    "the_return": "The Return",
    "the_meaning": "The Meaning",
    "the_motor": "The Motor",
    "the_philosophy": "The Philosophy",
    "the_consequences": "The Consequences",
}


# =============================================================================
# HELPER FUNCTIONS
# =============================================================================

def get_section_display_name(section_filename: str) -> str:
    """Convert section filename to display name."""
    # Extract section name from filename like "Episode_01_Section_01_cold_open.mp3"
    match = re.search(r'Section_\d+_(.+)\.mp3', section_filename)
    if match:
        section_key = match.group(1)
        # Check known names first
        for key, name in SECTION_NAMES.items():
            if key in section_key:
                return name
        # Otherwise, convert underscores to spaces and title case
        return section_key.replace('_', ' ').title()
    return "Section"


def create_placeholder_image(
    width: int,
    height: int,
    bg_color: Tuple[int, int, int],
    text: str,
    subtitle: str = ""
) -> np.ndarray:
    """Create a placeholder image with text overlay."""
    # Create image with PIL
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)

    # Try to use a nice font, fall back to default
    font_candidates = [
        "/System/Library/Fonts/Helvetica.ttc",  # macOS
        "/System/Library/Fonts/HelveticaNeue.ttc",  # macOS alt
        "C:/Windows/Fonts/arial.ttf",  # Windows
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",  # Linux
        "/usr/share/fonts/TTF/DejaVuSans.ttf",  # Linux alt
    ]

    title_font = None
    for font_path in font_candidates:
        try:
            title_font = ImageFont.truetype(font_path, 72)
            subtitle_font = ImageFont.truetype(font_path, 36)
            break
        except OSError:
            continue

    if title_font is None:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()

    # Add gradient overlay effect (darker at edges)
    for i in range(50):
        alpha = int(255 * (1 - i / 50) * 0.3)
        draw.rectangle([0, i, width, i + 1], fill=(0, 0, 0, alpha))
        draw.rectangle([0, height - i - 1, width, height - i], fill=(0, 0, 0, alpha))

    # Draw main text
    text_bbox = draw.textbbox((0, 0), text, font=title_font)
    text_width = text_bbox[2] - text_bbox[0]
    text_x = (width - text_width) // 2
    text_y = height // 2 - 50

    # Text shadow
    draw.text((text_x + 3, text_y + 3), text, font=title_font, fill=(0, 0, 0))
    draw.text((text_x, text_y), text, font=title_font, fill=(255, 255, 255))

    # Draw subtitle
    if subtitle:
        sub_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
        sub_width = sub_bbox[2] - sub_bbox[0]
        sub_x = (width - sub_width) // 2
        sub_y = text_y + 100
        draw.text((sub_x + 2, sub_y + 2), subtitle, font=subtitle_font, fill=(0, 0, 0))
        draw.text((sub_x, sub_y), subtitle, font=subtitle_font, fill=(200, 200, 200))

    return np.array(img)


def create_title_card(
    episode_num: int,
    duration: float = 5.0
) -> ImageClip:
    """Create an opening title card."""
    meta = EPISODES.get(episode_num, {"title": f"Episode {episode_num}", "part": 1, "part_name": "Non-Contradiction"})
    bg_color = PART_COLORS[meta["part"]]

    title_text = f"Episode {episode_num}"
    subtitle = f"{meta['title']}\nPart {meta['part']}: {meta['part_name']}"

    img_array = create_placeholder_image(VIDEO_WIDTH, VIDEO_HEIGHT, bg_color, title_text, subtitle)
    return ImageClip(img_array).with_duration(duration)


def create_section_card(
    section_name: str,
    part: int,
    duration: float
) -> ImageClip:
    """Create a section background with text overlay."""
    bg_color = PART_COLORS[part]

    # Slightly vary the background color for visual interest
    varied_color = tuple(min(255, c + 10) for c in bg_color)

    img_array = create_placeholder_image(VIDEO_WIDTH, VIDEO_HEIGHT, varied_color, section_name, "Atlas Shrugged")
    return ImageClip(img_array).with_duration(duration)


# =============================================================================
# VIDEO GENERATION
# =============================================================================

def get_audio_files(episode_num: int) -> List[Path]:
    """Get sorted list of audio files for an episode."""
    audio_dir = BASE_DIR / f"episode_{episode_num:02d}_production" / f"episode_{episode_num:02d}_audio"

    if not audio_dir.exists():
        raise FileNotFoundError(f"Audio directory not found: {audio_dir}")

    audio_files = sorted(audio_dir.glob("*.mp3"))
    if not audio_files:
        raise FileNotFoundError(f"No MP3 files found in: {audio_dir}")

    return audio_files


def generate_video(episode_num: int, use_placeholders: bool = True) -> Path:
    """Generate video for a single episode."""
    print(f"\n{'='*60}")
    print(f"Generating Video for Episode {episode_num}")
    print(f"{'='*60}\n")

    meta = EPISODES.get(episode_num, {"title": f"Episode {episode_num}", "part": 1, "part_name": "Non-Contradiction"})

    # Get audio files
    audio_files = get_audio_files(episode_num)
    print(f"Found {len(audio_files)} audio sections")

    # Build video clips
    video_clips = []
    audio_clips = []
    current_time = 0

    for audio_file in audio_files:
        section_name = get_section_display_name(audio_file.name)
        print(f"  Processing: {section_name}")

        # Load audio and get duration
        audio = AudioFileClip(str(audio_file))
        duration = audio.duration

        # Create visual for this section
        if use_placeholders:
            visual = create_section_card(section_name, meta["part"], duration)
        else:
            # TODO: Load AI-generated or stock images
            visual = create_section_card(section_name, meta["part"], duration)

        # Set timing
        visual = visual.with_start(current_time)
        audio = audio.with_start(current_time)

        video_clips.append(visual)
        audio_clips.append(audio)

        current_time += duration

    print(f"\nTotal duration: {current_time:.1f} seconds ({current_time/60:.1f} minutes)")

    # Combine all clips
    print("\nCompositing video...")

    # Stack all video clips
    final_video = concatenate_videoclips(video_clips, method="compose")

    # Combine all audio
    final_audio = CompositeAudioClip(audio_clips)

    # Set audio on video
    final_video = final_video.with_audio(final_audio)

    # Create output directory
    output_dir = OUTPUT_DIR / f"episode_{episode_num:02d}_video"
    output_dir.mkdir(parents=True, exist_ok=True)

    # Export
    output_path = output_dir / f"Episode_{episode_num:02d}_{meta['title'].replace(' ', '_')}.mp4"

    print(f"\nEncoding to: {output_path}")
    print("This may take a few minutes...")

    final_video.write_videofile(
        str(output_path),
        fps=FPS,
        codec='libx264',
        audio_codec='aac',
        threads=4,
        preset='medium',
        logger='bar'
    )

    # Cleanup
    final_video.close()
    final_audio.close()
    for clip in video_clips:
        clip.close()
    for clip in audio_clips:
        clip.close()

    print(f"\n✓ Video saved to: {output_path}")
    print(f"  File size: {output_path.stat().st_size / (1024*1024):.1f} MB")

    return output_path


# =============================================================================
# MAIN
# =============================================================================

def main():
    parser = argparse.ArgumentParser(description="Generate Atlas Shrugged episode videos")
    parser.add_argument("--episode", "-e", type=int, required=True, help="Episode number (1-30)")
    parser.add_argument("--use-placeholders", action="store_true", default=True,
                        help="Use placeholder images instead of AI-generated (default: True)")
    parser.add_argument("--use-dalle", action="store_true",
                        help="Use DALL-E to generate images (requires OPENAI_API_KEY)")

    args = parser.parse_args()

    if args.episode < 1 or args.episode > 30:
        print("Error: Episode must be between 1 and 30")
        sys.exit(1)

    use_placeholders = not args.use_dalle

    try:
        output_path = generate_video(args.episode, use_placeholders=use_placeholders)
        print(f"\n{'='*60}")
        print(f"SUCCESS: Video generated at {output_path}")
        print(f"{'='*60}")
    except Exception as e:
        print(f"\nERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()
