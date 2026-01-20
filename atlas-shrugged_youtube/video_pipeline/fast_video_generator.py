#!/usr/bin/env python3
"""
Fast Video Generator for Atlas Shrugged YouTube Series

Uses FFmpeg directly for fast encoding. A 6-minute video should encode in <1 minute.

Features:
- Ken Burns effect (subtle zoom/pan) on still images
- Fast H.264 encoding with stillimage tuning
- Concatenates audio segments with matching visuals
- Supports custom images per section or fallback to generated title cards

Usage:
    python fast_video_generator.py --episode 2
    python fast_video_generator.py --episode 2 --no-ken-burns
"""

import os
import sys
import argparse
import subprocess
import tempfile
import json
import logging
from pathlib import Path
from typing import List, Optional
import re

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from config import (
    PROJECT_DIR as BASE_DIR,
    OUTPUT_DIR,
    ASSETS_DIR,
    IMAGES_DIR,
    VIDEO_WIDTH,
    VIDEO_HEIGHT,
    FPS,
    EPISODES
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    datefmt='%H:%M:%S'
)
logger = logging.getLogger(__name__)

def get_system_font() -> str:
    """Get a cross-platform font path for FFmpeg drawtext."""
    import platform
    system = platform.system()

    font_candidates = []
    if system == "Darwin":  # macOS
        font_candidates = [
            "/System/Library/Fonts/Helvetica.ttc",
            "/System/Library/Fonts/HelveticaNeue.ttc",
            "/Library/Fonts/Arial.ttf",
        ]
    elif system == "Windows":
        font_candidates = [
            "C:/Windows/Fonts/arial.ttf",
            "C:/Windows/Fonts/calibri.ttf",
            "C:/Windows/Fonts/segoeui.ttf",
        ]
    else:  # Linux
        font_candidates = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
            "/usr/share/fonts/TTF/DejaVuSans.ttf",
            "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
            "/usr/share/fonts/liberation/LiberationSans-Regular.ttf",
        ]

    for font in font_candidates:
        if Path(font).exists():
            return font

    # Return empty string if no font found - FFmpeg will use default
    return ""


# Episode metadata is imported from config.py


def get_audio_duration(audio_path: Path) -> float:
    """Get duration of audio file in seconds using ffprobe."""
    cmd = [
        'ffprobe', '-v', 'quiet', '-print_format', 'json',
        '-show_format', str(audio_path)
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)

    if result.returncode != 0:
        raise RuntimeError(f"ffprobe failed for {audio_path}: {result.stderr}")

    try:
        data = json.loads(result.stdout)
        return float(data['format']['duration'])
    except (json.JSONDecodeError, KeyError, TypeError) as e:
        raise RuntimeError(f"Failed to parse ffprobe output for {audio_path}: {e}")


def get_section_name(filename: str) -> str:
    """Extract section name from audio filename."""
    match = re.search(r'Section_\d+_(.+)\.mp3', filename)
    if match:
        return match.group(1).replace('_', ' ').title()
    return "Section"


def get_audio_files(episode_num: int) -> List[Path]:
    """Get sorted list of audio files for an episode."""
    audio_dir = BASE_DIR / f"episode_{episode_num:02d}_production" / f"episode_{episode_num:02d}_audio"
    if not audio_dir.exists():
        raise FileNotFoundError(f"Audio directory not found: {audio_dir}")
    audio_files = sorted(audio_dir.glob("*.mp3"))
    if not audio_files:
        raise FileNotFoundError(f"No MP3 files found in: {audio_dir}")
    return audio_files


def get_image_for_section(episode_num: int, section_idx: int, section_name: str) -> Optional[Path]:
    """Find image for a specific section. Returns None if not found."""
    # Check for episode-specific images
    ep_images_dir = IMAGES_DIR / f"episode_{episode_num:02d}"

    # Try various naming patterns
    patterns = [
        f"section_{section_idx:02d}.png",
        f"section_{section_idx:02d}.jpg",
        f"{section_name.lower().replace(' ', '_')}.png",
        f"{section_name.lower().replace(' ', '_')}.jpg",
    ]

    for pattern in patterns:
        img_path = ep_images_dir / pattern
        if img_path.exists():
            return img_path

    # Check for shared/stock images
    stock_dir = ASSETS_DIR / "stock"
    if stock_dir.exists():
        # Could match by theme/keyword
        pass

    return None


def create_segment_video(
    audio_path: Path,
    image_path: Path,
    output_path: Path,
    ken_burns: bool = True,
    zoom_direction: str = "in"  # "in", "out", or "pan"
) -> bool:
    """
    Create a video segment from an image and audio using FFmpeg.
    Returns True on success.

    Uses a two-pass approach to avoid audio sync issues:
    1. Generate video stream with zoompan
    2. Mux with audio using explicit duration
    """
    duration = get_audio_duration(audio_path)

    if ken_burns:
        # Ken Burns effect: subtle zoom over the duration
        # Add 1 extra frame to ensure video covers full audio duration
        total_frames = int(duration * FPS) + 1

        if zoom_direction == "in":
            # Slow zoom in, centered
            zoom_expr = f"z='1+0.1*on/{total_frames}'"
            x_expr = f"x='iw/2-(iw/zoom/2)'"
            y_expr = f"y='ih/2-(ih/zoom/2)'"
        elif zoom_direction == "out":
            # Slow zoom out
            zoom_expr = f"z='1.1-0.1*on/{total_frames}'"
            x_expr = f"x='iw/2-(iw/zoom/2)'"
            y_expr = f"y='ih/2-(ih/zoom/2)'"
        else:  # pan
            # Slow pan from left to right
            zoom_expr = "z='1.1'"
            x_expr = f"x='(iw-iw/zoom)*on/{total_frames}'"
            y_expr = f"y='ih/2-(ih/zoom/2)'"

        video_filter = (
            f"scale=8000:-1,"  # Scale up for smooth zoom
            f"zoompan={zoom_expr}:{x_expr}:{y_expr}:d={total_frames}:s={VIDEO_WIDTH}x{VIDEO_HEIGHT}:fps={FPS}"
        )

        cmd = [
            'ffmpeg', '-y',
            '-loop', '1',
            '-i', str(image_path),
            '-i', str(audio_path),
            '-vf', video_filter,
            '-t', str(duration),  # Explicit duration from audio
            '-c:v', 'libx264',
            '-preset', 'fast',
            '-crf', '23',
            '-c:a', 'aac',
            '-b:a', '192k',
            '-ar', '44100',  # Ensure consistent sample rate
            '-ac', '2',  # Convert to stereo for better compatibility
            '-movflags', '+faststart',
            str(output_path)
        ]
    else:
        # Static image, no movement - much faster
        cmd = [
            'ffmpeg', '-y',
            '-loop', '1',
            '-i', str(image_path),
            '-i', str(audio_path),
            '-vf', f'scale={VIDEO_WIDTH}:{VIDEO_HEIGHT}:force_original_aspect_ratio=decrease,pad={VIDEO_WIDTH}:{VIDEO_HEIGHT}:(ow-iw)/2:(oh-ih)/2',
            '-t', str(duration),
            '-c:v', 'libx264',
            '-tune', 'stillimage',
            '-preset', 'ultrafast',
            '-crf', '23',
            '-c:a', 'aac',
            '-b:a', '192k',
            '-ar', '44100',
            '-ac', '2',
            '-movflags', '+faststart',
            str(output_path)
        ]

    logger.info(f"Encoding: {audio_path.name} ({duration:.1f}s)")
    result = subprocess.run(cmd, capture_output=True, text=True)

    if result.returncode != 0:
        logger.error(f"FFmpeg failed: {result.stderr[-500:]}")
        return False

    return True


def concatenate_segments(segment_paths: List[Path], output_path: Path) -> bool:
    """Concatenate video segments using FFmpeg concat demuxer."""
    # Create concat list file
    with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f:
        for seg in segment_paths:
            f.write(f"file '{seg}'\n")
        concat_list = f.name

    try:
        cmd = [
            'ffmpeg', '-y',
            '-f', 'concat',
            '-safe', '0',
            '-i', concat_list,
            '-c', 'copy',
            '-movflags', '+faststart',
            str(output_path)
        ]

        logger.info(f"Concatenating {len(segment_paths)} segments...")
        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.returncode != 0:
            logger.error(f"Concatenation failed: {result.stderr[-500:]}")
            return False

        return True
    finally:
        os.unlink(concat_list)


def create_placeholder_image(text: str, output_path: Path, bg_color: str = "#1a1a2e"):
    """Create a simple placeholder image using FFmpeg."""
    # Escape special characters in text for FFmpeg filter
    escaped_text = text.replace("'", r"\'").replace(":", r"\:")

    font_path = get_system_font()
    font_arg = f":fontfile={font_path}" if font_path else ""

    cmd = [
        'ffmpeg', '-y',
        '-f', 'lavfi',
        '-i', f'color=c={bg_color}:s={VIDEO_WIDTH}x{VIDEO_HEIGHT}:d=1',
        '-vf', f"drawtext=text='{escaped_text}':fontsize=72:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2{font_arg}",
        '-frames:v', '1',
        str(output_path)
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        logger.warning(f"Failed to create placeholder image: {result.stderr[:200]}")


def generate_video(
    episode_num: int,
    ken_burns: bool = True,
    use_placeholders: bool = False
) -> Path:
    """Generate complete episode video."""
    import time
    start_time = time.time()

    logger.info("=" * 60)
    logger.info(f"Fast Video Generator - Episode {episode_num}")
    logger.info("=" * 60)

    meta = EPISODES.get(episode_num, {"title": f"Episode {episode_num}", "part": 1})
    audio_files = get_audio_files(episode_num)
    logger.info(f"Found {len(audio_files)} audio sections")

    # Create temp directory for segments
    temp_dir = Path(tempfile.mkdtemp())
    segment_paths = []

    # Alternate zoom directions for visual variety
    zoom_directions = ["in", "out", "pan", "in", "out", "pan", "in"]

    try:
        for idx, audio_file in enumerate(audio_files):
            section_name = get_section_name(audio_file.name)

            # Find or create image for this section
            image_path = get_image_for_section(episode_num, idx + 1, section_name)

            if image_path is None:
                if use_placeholders:
                    # Create a placeholder
                    image_path = temp_dir / f"placeholder_{idx:02d}.png"
                    create_placeholder_image(section_name, image_path)
                else:
                    logger.error(f"No image for section {idx+1} ({section_name})")
                    logger.error(f"Expected at: {IMAGES_DIR}/episode_{episode_num:02d}/section_{idx+1:02d}.png")
                    logger.error("Use --placeholders flag to generate placeholder images")
                    raise FileNotFoundError(f"Missing image for section {idx+1}")

            # Create segment video
            segment_path = temp_dir / f"segment_{idx:02d}.mp4"
            zoom_dir = zoom_directions[idx % len(zoom_directions)]

            success = create_segment_video(
                audio_file,
                image_path,
                segment_path,
                ken_burns=ken_burns,
                zoom_direction=zoom_dir
            )

            if success:
                segment_paths.append(segment_path)
            else:
                logger.error(f"Failed to create segment for {section_name}")

        # Create output directory
        output_dir = OUTPUT_DIR / f"episode_{episode_num:02d}_video"
        output_dir.mkdir(parents=True, exist_ok=True)

        # Concatenate all segments
        output_path = output_dir / f"Episode_{episode_num:02d}_{meta['title'].replace(' ', '_')}.mp4"

        if concatenate_segments(segment_paths, output_path):
            elapsed = time.time() - start_time
            file_size = output_path.stat().st_size / (1024 * 1024)

            logger.info("=" * 60)
            logger.info("SUCCESS!")
            logger.info(f"Output: {output_path}")
            logger.info(f"Size: {file_size:.1f} MB")
            logger.info(f"Time: {elapsed:.1f} seconds")
            logger.info("=" * 60)

            return output_path
        else:
            raise RuntimeError("Failed to concatenate segments")

    finally:
        # Cleanup temp files
        import shutil
        shutil.rmtree(temp_dir, ignore_errors=True)


def main():
    parser = argparse.ArgumentParser(description="Fast video generator using FFmpeg")
    parser.add_argument("--episode", "-e", type=int, required=True, help="Episode number (1-30)")
    parser.add_argument("--no-ken-burns", action="store_true", help="Disable Ken Burns effect (faster)")
    parser.add_argument("--placeholders", action="store_true", help="Use placeholder images")

    args = parser.parse_args()

    if args.episode < 1 or args.episode > 30:
        logger.error("Episode must be between 1 and 30")
        sys.exit(1)

    try:
        output_path = generate_video(
            args.episode,
            ken_burns=not args.no_ken_burns,
            use_placeholders=args.placeholders
        )
        logger.info(f"Video ready: {output_path}")
    except Exception as e:
        logger.exception(f"Video generation failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
