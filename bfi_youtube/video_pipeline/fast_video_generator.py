#!/usr/bin/env python3
"""
Fast Video Generator for BFI (Bitcoin for Institutions) YouTube Series

Uses FFmpeg directly for fast encoding. A 12-minute video should encode in <2 minutes.

Features:
- Ken Burns effect (subtle zoom/pan) on rendered slides
- Fast H.264 encoding with stillimage tuning
- Concatenates audio segments with matching visuals
- Uses pre-rendered HTML slides (from render_slides.py)

Usage:
    python fast_video_generator.py --episode 1
    python fast_video_generator.py --episode 1 --no-ken-burns
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
    EPISODES,
    TOTAL_EPISODES
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

    return ""


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
    match = re.search(r'Section_(\d+)_(.+)\.mp3', filename)
    if match:
        return match.group(2).replace('_', ' ').title()
    return "Section"


def get_section_number(filename: str) -> int:
    """Extract section number from audio filename."""
    match = re.search(r'Section_(\d+)_', filename)
    if match:
        return int(match.group(1))
    return 0


def get_audio_files(episode_num: int) -> List[Path]:
    """Get sorted list of audio files for an episode (excluding Complete.mp3)."""
    audio_dir = BASE_DIR / f"episode_{episode_num:02d}_production" / f"episode_{episode_num:02d}_audio"
    if not audio_dir.exists():
        raise FileNotFoundError(f"Audio directory not found: {audio_dir}")

    # Get all MP3 files except the complete aggregated file
    audio_files = sorted([
        f for f in audio_dir.glob("*.mp3")
        if "Complete" not in f.name
    ])

    if not audio_files:
        raise FileNotFoundError(f"No section MP3 files found in: {audio_dir}")
    return audio_files


def get_image_for_section(episode_num: int, section_idx: int) -> Optional[Path]:
    """Find rendered PNG for a specific section."""
    # Check for rendered slides from render_slides.py
    rendered_dir = IMAGES_DIR / f"episode_{episode_num:02d}"
    png_path = rendered_dir / f"section_{section_idx:02d}.png"

    if png_path.exists():
        return png_path

    return None


def create_segment_video(
    audio_path: Path,
    image_path: Path,
    output_path: Path,
    ken_burns: bool = True,
    zoom_direction: str = "in",
    use_hardware: bool = True,
    quality_preset: str = "balanced"  # "fast", "balanced", or "quality"
) -> bool:
    """
    Create a video segment from an image and audio using FFmpeg.
    Returns True on success.

    Args:
        quality_preset:
            - "fast": 3000px upscale, ~5x faster than original
            - "balanced": 4000px upscale, ~3x faster (recommended)
            - "quality": 8000px upscale, original slow method
    """
    duration = get_audio_duration(audio_path)

    # Upscale resolution based on quality preset
    upscale_map = {"fast": 3000, "balanced": 4000, "quality": 8000}
    upscale_res = upscale_map.get(quality_preset, 4000)

    if ken_burns:
        # Ken Burns effect: subtle zoom over the duration
        total_frames = int(duration * FPS) + 1

        if zoom_direction == "in":
            zoom_expr = f"z='1+0.08*on/{total_frames}'"
            x_expr = f"x='iw/2-(iw/zoom/2)'"
            y_expr = f"y='ih/2-(ih/zoom/2)'"
        elif zoom_direction == "out":
            zoom_expr = f"z='1.08-0.08*on/{total_frames}'"
            x_expr = f"x='iw/2-(iw/zoom/2)'"
            y_expr = f"y='ih/2-(ih/zoom/2)'"
        else:  # pan
            zoom_expr = "z='1.05'"
            x_expr = f"x='(iw-iw/zoom)*on/{total_frames}'"
            y_expr = f"y='ih/2-(ih/zoom/2)'"

        video_filter = (
            f"scale={upscale_res}:-1,"
            f"zoompan={zoom_expr}:{x_expr}:{y_expr}:d={total_frames}:s={VIDEO_WIDTH}x{VIDEO_HEIGHT}:fps={FPS}"
        )

        # Choose encoder: hardware (VideoToolbox on macOS) or software (libx264)
        if use_hardware:
            encoder_args = ['-c:v', 'h264_videotoolbox', '-q:v', '65']
        else:
            encoder_args = ['-c:v', 'libx264', '-preset', 'fast', '-crf', '23']

        cmd = [
            'ffmpeg', '-y',
            '-loop', '1',
            '-i', str(image_path),
            '-i', str(audio_path),
            '-vf', video_filter,
            '-t', str(duration),
            *encoder_args,
            '-c:a', 'aac',
            '-b:a', '192k',
            '-ar', '44100',
            '-ac', '2',
            '-movflags', '+faststart',
            str(output_path)
        ]
    else:
        # Static image, no movement - much faster
        if use_hardware:
            encoder_args = ['-c:v', 'h264_videotoolbox', '-q:v', '65']
        else:
            encoder_args = ['-c:v', 'libx264', '-tune', 'stillimage', '-preset', 'ultrafast', '-crf', '23']

        cmd = [
            'ffmpeg', '-y',
            '-loop', '1',
            '-i', str(image_path),
            '-i', str(audio_path),
            '-vf', f'scale={VIDEO_WIDTH}:{VIDEO_HEIGHT}:force_original_aspect_ratio=decrease,pad={VIDEO_WIDTH}:{VIDEO_HEIGHT}:(ow-iw)/2:(oh-ih)/2',
            '-t', str(duration),
            *encoder_args,
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


def create_placeholder_image(text: str, output_path: Path, bg_color: str = "#0D1117"):
    """Create a simple placeholder image using FFmpeg."""
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
    use_placeholders: bool = False,
    use_hardware: bool = True,
    quality_preset: str = "balanced"
) -> Path:
    """Generate complete episode video."""
    import time
    start_time = time.time()

    logger.info("=" * 60)
    logger.info(f"BFI Fast Video Generator - Episode {episode_num}")
    logger.info("=" * 60)

    meta = EPISODES.get(episode_num, {"title": f"Episode {episode_num}", "part": 1})
    logger.info(f"Title: {meta['title']}")
    logger.info(f"Part: {meta['part']} - {meta.get('part_name', '')}")

    # Show encoding settings
    encoder = "VideoToolbox (GPU)" if use_hardware else "libx264 (CPU)"
    motion = "Ken Burns" if ken_burns else "Static"
    logger.info(f"Encoder: {encoder} | Motion: {motion} | Quality: {quality_preset}")

    audio_files = get_audio_files(episode_num)
    logger.info(f"Found {len(audio_files)} audio sections")

    # Create temp directory for segments
    temp_dir = Path(tempfile.mkdtemp())
    segment_paths = []

    # Alternate zoom directions for visual variety
    zoom_directions = ["in", "out", "pan", "in", "out", "pan", "in", "out"]

    try:
        for idx, audio_file in enumerate(audio_files):
            section_num = get_section_number(audio_file.name)
            section_name = get_section_name(audio_file.name)

            # Find rendered PNG for this section
            image_path = get_image_for_section(episode_num, section_num)

            if image_path is None:
                if use_placeholders:
                    image_path = temp_dir / f"placeholder_{idx:02d}.png"
                    create_placeholder_image(section_name, image_path)
                    logger.warning(f"Using placeholder for section {section_num}")
                else:
                    logger.error(f"No image for section {section_num} ({section_name})")
                    logger.error(f"Expected at: {IMAGES_DIR}/episode_{episode_num:02d}/section_{section_num:02d}.png")
                    logger.error("Run: python video_pipeline/render_slides.py --episode {episode_num}")
                    logger.error("Or use --placeholders flag to generate placeholder images")
                    raise FileNotFoundError(f"Missing image for section {section_num}")

            # Create segment video
            segment_path = temp_dir / f"segment_{idx:02d}.mp4"
            zoom_dir = zoom_directions[idx % len(zoom_directions)]

            success = create_segment_video(
                audio_file,
                image_path,
                segment_path,
                ken_burns=ken_burns,
                zoom_direction=zoom_dir,
                use_hardware=use_hardware,
                quality_preset=quality_preset
            )

            if success:
                segment_paths.append(segment_path)
            else:
                logger.error(f"Failed to create segment for {section_name}")

        # Create output directory
        output_dir = OUTPUT_DIR / f"episode_{episode_num:02d}_video"
        output_dir.mkdir(parents=True, exist_ok=True)

        # Concatenate all segments
        safe_title = meta['title'].replace(' ', '_').replace('/', '-')
        output_path = output_dir / f"BFI_Episode_{episode_num:02d}_{safe_title}.mp4"

        if concatenate_segments(segment_paths, output_path):
            elapsed = time.time() - start_time
            file_size = output_path.stat().st_size / (1024 * 1024)

            # Calculate total duration
            total_duration = sum(get_audio_duration(f) for f in audio_files)

            logger.info("=" * 60)
            logger.info("SUCCESS!")
            logger.info(f"Output: {output_path}")
            logger.info(f"Duration: {total_duration/60:.1f} minutes")
            logger.info(f"Size: {file_size:.1f} MB")
            logger.info(f"Encoding time: {elapsed:.1f} seconds")
            logger.info("=" * 60)

            return output_path
        else:
            raise RuntimeError("Failed to concatenate segments")

    finally:
        # Cleanup temp files
        import shutil
        shutil.rmtree(temp_dir, ignore_errors=True)


def main():
    parser = argparse.ArgumentParser(
        description="Fast video generator using FFmpeg",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Quality presets (with Ken Burns enabled):
  --quality fast       3000px upscale, ~10-15 min encode (5x faster)
  --quality balanced   4000px upscale, ~15-20 min encode (3x faster) [default]
  --quality quality    8000px upscale, ~55 min encode (original)

Examples:
  python fast_video_generator.py -e 1                    # Balanced quality + hardware
  python fast_video_generator.py -e 1 --quality fast    # Fastest with Ken Burns
  python fast_video_generator.py -e 1 --no-ken-burns    # Static slides (~2 min)
  python fast_video_generator.py -e 1 --no-hardware     # Force CPU encoding
"""
    )
    parser.add_argument("--episode", "-e", type=int, required=True, help=f"Episode number (1-{TOTAL_EPISODES})")
    parser.add_argument("--no-ken-burns", action="store_true", help="Disable Ken Burns effect (fastest, static slides)")
    parser.add_argument("--placeholders", action="store_true", help="Use placeholder images for missing slides")
    parser.add_argument("--no-hardware", action="store_true", help="Disable hardware encoding (use CPU libx264)")
    parser.add_argument("--quality", "-q", choices=["fast", "balanced", "quality"], default="balanced",
                        help="Quality preset: fast (5x faster), balanced (3x faster), quality (original)")

    args = parser.parse_args()

    if args.episode < 1 or args.episode > TOTAL_EPISODES:
        logger.error(f"Episode must be between 1 and {TOTAL_EPISODES}")
        sys.exit(1)

    logger.info(f"Settings: ken_burns={not args.no_ken_burns}, hardware={not args.no_hardware}, quality={args.quality}")

    try:
        output_path = generate_video(
            args.episode,
            ken_burns=not args.no_ken_burns,
            use_placeholders=args.placeholders,
            use_hardware=not args.no_hardware,
            quality_preset=args.quality
        )
        logger.info(f"Video ready: {output_path}")
    except Exception as e:
        logger.exception(f"Video generation failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
