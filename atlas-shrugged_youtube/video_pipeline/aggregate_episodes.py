#!/usr/bin/env python3
"""
Aggregate Episodes - Atlas Shrugged Complete Series

Combines all 30 episodes into a single video with part and episode title cards.

Features:
- Part title cards (3) before Episodes 1, 11, 21
- Episode title cards (30) before each episode
- YouTube chapter timestamps generation
- Ken Burns effect on title cards

Usage:
    python aggregate_episodes.py                    # Full generation
    python aggregate_episodes.py --skip-render      # Skip PNG rendering (if already done)
    python aggregate_episodes.py --skip-title-videos # Skip title card video generation
    python aggregate_episodes.py --chapters-only    # Only generate chapter timestamps
"""

import os
import sys
import argparse
import subprocess
import tempfile
import json
import logging
import shutil
from pathlib import Path
from typing import List, Dict, Tuple, Optional
import time
import re

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from config import (
    PROJECT_DIR,
    OUTPUT_DIR,
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

# Paths
SCRIPT_DIR = Path(__file__).parent
SLIDES_DIR = SCRIPT_DIR / "slides"
TITLE_CARDS_DIR = SLIDES_DIR / "title_cards"
GENERATED_CARDS_DIR = PROJECT_DIR / "assets" / "generated" / "title_cards"
COMPLETE_SERIES_DIR = OUTPUT_DIR / "complete_series"

# Title card durations (seconds)
PART_CARD_DURATION = 5.0
EPISODE_CARD_DURATION = 3.0

# Part metadata
PARTS = {
    1: {"name": "Non-Contradiction", "episodes": range(1, 11), "label": "Part One"},
    2: {"name": "Either-Or", "episodes": range(11, 21), "label": "Part Two"},
    3: {"name": "A Is A", "episodes": range(21, 31), "label": "Part Three"},
}


def get_video_duration(video_path: Path) -> float:
    """Get duration of video file in seconds using ffprobe."""
    cmd = [
        'ffprobe', '-v', 'quiet', '-print_format', 'json',
        '-show_format', str(video_path)
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)

    if result.returncode != 0:
        raise RuntimeError(f"ffprobe failed for {video_path}: {result.stderr}")

    try:
        data = json.loads(result.stdout)
        return float(data['format']['duration'])
    except (json.JSONDecodeError, KeyError, TypeError) as e:
        raise RuntimeError(f"Failed to parse ffprobe output for {video_path}: {e}")


def find_episode_video(episode_num: int) -> Optional[Path]:
    """Find the video file for a given episode number."""
    ep_dir = OUTPUT_DIR / f"episode_{episode_num:02d}_video"
    if not ep_dir.exists():
        return None

    # Find the MP4 file
    mp4_files = list(ep_dir.glob("Episode_*.mp4"))
    if mp4_files:
        return mp4_files[0]
    return None


def generate_part_card_html(part_num: int, output_path: Path):
    """Generate HTML file for a part title card."""
    part = PARTS[part_num]
    ep_start = part["episodes"].start
    ep_end = part["episodes"].stop - 1

    html = f'''<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    :root {{
      --accent-color: #d4a84b;
      --accent-rgb: 212, 168, 75;
      --bg-color: #0a0908;
      --text-primary: #f5f0e6;
      --text-secondary: #a09080;
      --slide-width: 1920px;
      --slide-height: 1080px;
    }}

    * {{ margin: 0; padding: 0; box-sizing: border-box; }}

    body {{
      width: var(--slide-width);
      height: var(--slide-height);
      background: var(--bg-color);
      font-family: Georgia, 'Times New Roman', serif;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }}

    body::after {{
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%);
      pointer-events: none;
    }}

    .frame {{
      position: absolute;
      top: 50px; left: 50px; right: 50px; bottom: 50px;
      border: 2px solid rgba(var(--accent-rgb), 0.4);
    }}

    .frame::before, .frame::after {{
      content: '';
      position: absolute;
      width: 30px; height: 30px;
      border: 3px solid var(--accent-color);
    }}

    .frame::before {{ top: -3px; left: -3px; border-right: none; border-bottom: none; }}
    .frame::after {{ bottom: -3px; right: -3px; border-left: none; border-top: none; }}

    .corner-tl, .corner-br {{
      position: absolute;
      width: 30px; height: 30px;
      border: 3px solid var(--accent-color);
    }}

    .corner-tl {{ top: 47px; right: 47px; border-left: none; border-bottom: none; }}
    .corner-br {{ bottom: 47px; left: 47px; border-right: none; border-top: none; }}

    .glow {{
      position: absolute;
      top: 50%; left: 50%;
      width: 900px; height: 600px;
      background: radial-gradient(ellipse at center, rgba(var(--accent-rgb), 0.12) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }}

    .content {{
      text-align: center;
      z-index: 10;
    }}

    .series-tag {{
      color: var(--text-secondary);
      font-size: 22px;
      letter-spacing: 0.5em;
      text-transform: uppercase;
      margin-bottom: 60px;
    }}

    .part-label {{
      color: var(--accent-color);
      font-size: 32px;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      margin-bottom: 25px;
    }}

    .part-name {{
      color: var(--text-primary);
      font-size: 120px;
      font-style: italic;
      line-height: 1.1;
      margin-bottom: 70px;
      text-shadow: 0 4px 30px rgba(var(--accent-rgb), 0.3);
    }}

    .episodes-range {{
      color: var(--text-secondary);
      font-size: 26px;
      letter-spacing: 0.2em;
    }}

    body.part-1 {{ --accent-color: #d4a84b; --accent-rgb: 212, 168, 75; }}
    body.part-2 {{ --accent-color: #8b4545; --accent-rgb: 139, 69, 69; }}
    body.part-3 {{ --accent-color: #4a6fa5; --accent-rgb: 74, 111, 165; }}
  </style>
</head>
<body class="part-{part_num}">
  <div class="glow"></div>
  <div class="frame"></div>
  <div class="corner-tl"></div>
  <div class="corner-br"></div>
  <div class="content">
    <div class="series-tag">Atlas Shrugged</div>
    <div class="part-label">{part["label"]}</div>
    <div class="part-name">{part["name"]}</div>
    <div class="episodes-range">Episodes {ep_start}-{ep_end}</div>
  </div>
</body>
</html>'''

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(html)


def generate_episode_card_html(episode_num: int, output_path: Path):
    """Generate HTML file for an episode title card."""
    ep = EPISODES.get(episode_num, {"title": f"Episode {episode_num}", "part": 1, "part_name": "Unknown"})
    part_num = ep["part"]

    html = f'''<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    :root {{
      --accent-color: #d4a84b;
      --accent-rgb: 212, 168, 75;
      --bg-color: #0a0908;
      --text-primary: #f5f0e6;
      --text-secondary: #a09080;
      --slide-width: 1920px;
      --slide-height: 1080px;
    }}

    * {{ margin: 0; padding: 0; box-sizing: border-box; }}

    body {{
      width: var(--slide-width);
      height: var(--slide-height);
      background: var(--bg-color);
      font-family: Georgia, 'Times New Roman', serif;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }}

    body::after {{
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(ellipse at center, transparent 35%, rgba(0, 0, 0, 0.65) 100%);
      pointer-events: none;
    }}

    .frame {{
      position: absolute;
      top: 40px; left: 40px; right: 40px; bottom: 40px;
      border: 1px solid rgba(var(--accent-rgb), 0.3);
    }}

    .frame::before, .frame::after {{
      content: '';
      position: absolute;
      width: 20px; height: 20px;
      border: 2px solid var(--accent-color);
    }}

    .frame::before {{ top: -2px; left: -2px; border-right: none; border-bottom: none; }}
    .frame::after {{ bottom: -2px; right: -2px; border-left: none; border-top: none; }}

    .corner-tl, .corner-br {{
      position: absolute;
      width: 20px; height: 20px;
      border: 2px solid var(--accent-color);
    }}

    .corner-tl {{ top: 38px; right: 38px; border-left: none; border-bottom: none; }}
    .corner-br {{ bottom: 38px; left: 38px; border-right: none; border-top: none; }}

    .glow {{
      position: absolute;
      top: 50%; left: 50%;
      width: 700px; height: 500px;
      background: radial-gradient(ellipse at center, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }}

    .content {{
      text-align: center;
      z-index: 10;
    }}

    .episode-label {{
      color: var(--accent-color);
      font-size: 28px;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      margin-bottom: 30px;
    }}

    .episode-title {{
      color: var(--text-primary);
      font-size: 84px;
      font-style: italic;
      line-height: 1.15;
      margin-bottom: 60px;
      text-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
      max-width: 1400px;
    }}

    .part-info {{
      color: var(--text-secondary);
      font-size: 22px;
      letter-spacing: 0.15em;
    }}

    .part-info .separator {{
      color: var(--accent-color);
      margin: 0 15px;
    }}

    body.part-1 {{ --accent-color: #d4a84b; --accent-rgb: 212, 168, 75; }}
    body.part-2 {{ --accent-color: #8b4545; --accent-rgb: 139, 69, 69; }}
    body.part-3 {{ --accent-color: #4a6fa5; --accent-rgb: 74, 111, 165; }}
  </style>
</head>
<body class="part-{part_num}">
  <div class="glow"></div>
  <div class="frame"></div>
  <div class="corner-tl"></div>
  <div class="corner-br"></div>
  <div class="content">
    <div class="episode-label">Episode {episode_num}</div>
    <div class="episode-title">{ep["title"]}</div>
    <div class="part-info">Part {part_num} <span class="separator">&bull;</span> {ep["part_name"]}</div>
  </div>
</body>
</html>'''

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(html)


def render_html_to_png(html_path: Path, png_path: Path, driver=None) -> bool:
    """Render HTML file to PNG using Selenium Chrome driver."""
    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options
    from selenium.common.exceptions import WebDriverException

    own_driver = driver is None
    if own_driver:
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument(f"--window-size={VIDEO_WIDTH},{VIDEO_HEIGHT}")
        chrome_options.add_argument("--hide-scrollbars")
        chrome_options.add_argument("--force-device-scale-factor=1")
        driver = webdriver.Chrome(options=chrome_options)
        driver.set_page_load_timeout(30)

    try:
        file_url = f"file://{html_path.absolute()}"
        driver.get(file_url)
        time.sleep(0.5)  # Wait for render

        png_path.parent.mkdir(parents=True, exist_ok=True)
        driver.save_screenshot(str(png_path))
        logger.info(f"  Rendered: {png_path.name}")
        return True
    except WebDriverException as e:
        logger.error(f"  ERROR rendering {html_path.name}: {e}")
        return False
    finally:
        if own_driver:
            driver.quit()


def create_title_card_video(
    image_path: Path,
    output_path: Path,
    duration: float,
    ken_burns: bool = True
) -> bool:
    """Create a video from a title card image with optional Ken Burns effect."""
    output_path.parent.mkdir(parents=True, exist_ok=True)

    if ken_burns:
        # Subtle zoom-in effect
        total_frames = int(duration * FPS) + 1
        zoom_expr = f"z='1+0.08*on/{total_frames}'"
        x_expr = f"x='iw/2-(iw/zoom/2)'"
        y_expr = f"y='ih/2-(ih/zoom/2)'"

        video_filter = (
            f"scale=8000:-1,"
            f"zoompan={zoom_expr}:{x_expr}:{y_expr}:d={total_frames}:s={VIDEO_WIDTH}x{VIDEO_HEIGHT}:fps={FPS}"
        )

        cmd = [
            'ffmpeg', '-y',
            '-loop', '1',
            '-i', str(image_path),
            '-vf', video_filter,
            '-t', str(duration),
            '-c:v', 'libx264',
            '-preset', 'fast',
            '-crf', '23',
            '-pix_fmt', 'yuv420p',
            '-an',  # No audio
            '-movflags', '+faststart',
            str(output_path)
        ]
    else:
        cmd = [
            'ffmpeg', '-y',
            '-loop', '1',
            '-i', str(image_path),
            '-vf', f'scale={VIDEO_WIDTH}:{VIDEO_HEIGHT}',
            '-t', str(duration),
            '-c:v', 'libx264',
            '-tune', 'stillimage',
            '-preset', 'ultrafast',
            '-crf', '23',
            '-pix_fmt', 'yuv420p',
            '-an',
            '-movflags', '+faststart',
            str(output_path)
        ]

    result = subprocess.run(cmd, capture_output=True, text=True)

    if result.returncode != 0:
        logger.error(f"FFmpeg failed for {output_path.name}: {result.stderr[-300:]}")
        return False

    return True


def generate_all_title_cards(skip_render: bool = False, skip_videos: bool = False):
    """Generate all title card PNGs and videos."""
    html_dir = GENERATED_CARDS_DIR / "html"
    png_dir = GENERATED_CARDS_DIR / "png"
    video_dir = GENERATED_CARDS_DIR / "video"

    html_dir.mkdir(parents=True, exist_ok=True)
    png_dir.mkdir(parents=True, exist_ok=True)
    video_dir.mkdir(parents=True, exist_ok=True)

    # Generate HTML files
    logger.info("Generating title card HTML files...")

    for part_num in [1, 2, 3]:
        html_path = html_dir / f"part_{part_num}_title.html"
        generate_part_card_html(part_num, html_path)
        logger.info(f"  Created: part_{part_num}_title.html")

    for ep_num in range(1, 31):
        html_path = html_dir / f"episode_{ep_num:02d}_title.html"
        generate_episode_card_html(ep_num, html_path)
        logger.info(f"  Created: episode_{ep_num:02d}_title.html")

    if skip_render:
        logger.info("Skipping PNG rendering (--skip-render)")
    else:
        # Render HTML to PNG using Selenium
        logger.info("\nRendering title cards to PNG...")

        from selenium import webdriver
        from selenium.webdriver.chrome.options import Options

        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument(f"--window-size={VIDEO_WIDTH},{VIDEO_HEIGHT}")
        chrome_options.add_argument("--hide-scrollbars")
        chrome_options.add_argument("--force-device-scale-factor=1")

        driver = webdriver.Chrome(options=chrome_options)
        driver.set_page_load_timeout(30)

        try:
            for part_num in [1, 2, 3]:
                html_path = html_dir / f"part_{part_num}_title.html"
                png_path = png_dir / f"part_{part_num}_title.png"
                render_html_to_png(html_path, png_path, driver)

            for ep_num in range(1, 31):
                html_path = html_dir / f"episode_{ep_num:02d}_title.html"
                png_path = png_dir / f"episode_{ep_num:02d}_title.png"
                render_html_to_png(html_path, png_path, driver)
        finally:
            driver.quit()

    if skip_videos:
        logger.info("Skipping title card video generation (--skip-title-videos)")
    else:
        # Create videos from PNGs
        logger.info("\nCreating title card videos...")

        for part_num in [1, 2, 3]:
            png_path = png_dir / f"part_{part_num}_title.png"
            video_path = video_dir / f"part_{part_num}_title.mp4"
            if png_path.exists():
                logger.info(f"  Creating video: part_{part_num}_title.mp4 ({PART_CARD_DURATION}s)")
                create_title_card_video(png_path, video_path, PART_CARD_DURATION)

        for ep_num in range(1, 31):
            png_path = png_dir / f"episode_{ep_num:02d}_title.png"
            video_path = video_dir / f"episode_{ep_num:02d}_title.mp4"
            if png_path.exists():
                logger.info(f"  Creating video: episode_{ep_num:02d}_title.mp4 ({EPISODE_CARD_DURATION}s)")
                create_title_card_video(png_path, video_path, EPISODE_CARD_DURATION)


def get_part_for_episode(episode_num: int) -> int:
    """Get the part number for a given episode."""
    if episode_num <= 10:
        return 1
    elif episode_num <= 20:
        return 2
    else:
        return 3


def build_concat_list() -> Tuple[List[Dict], Path]:
    """
    Build the ordered list of videos to concatenate.

    Returns:
        Tuple of (list of video entries with metadata, path to concat list file)
    """
    video_dir = GENERATED_CARDS_DIR / "video"
    concat_list = []

    for ep_num in range(1, 31):
        # Add part title card at the start of each part
        if ep_num in [1, 11, 21]:
            part_num = get_part_for_episode(ep_num)
            part_video = video_dir / f"part_{part_num}_title.mp4"
            if part_video.exists():
                concat_list.append({
                    "type": "part_title",
                    "part": part_num,
                    "path": part_video,
                    "duration": PART_CARD_DURATION
                })

        # Add episode title card
        ep_title_video = video_dir / f"episode_{ep_num:02d}_title.mp4"
        if ep_title_video.exists():
            concat_list.append({
                "type": "episode_title",
                "episode": ep_num,
                "path": ep_title_video,
                "duration": EPISODE_CARD_DURATION
            })

        # Add episode video
        ep_video = find_episode_video(ep_num)
        if ep_video and ep_video.exists():
            duration = get_video_duration(ep_video)
            concat_list.append({
                "type": "episode",
                "episode": ep_num,
                "path": ep_video,
                "duration": duration
            })
        else:
            logger.warning(f"Episode {ep_num} video not found!")

    # Write concat list file for FFmpeg
    COMPLETE_SERIES_DIR.mkdir(parents=True, exist_ok=True)
    concat_file = COMPLETE_SERIES_DIR / "concat_list.txt"

    with open(concat_file, 'w') as f:
        for entry in concat_list:
            # Escape single quotes in file paths for FFmpeg concat format
            # Replace ' with '\'' (end quote, escaped quote, start quote)
            escaped_path = str(entry['path']).replace("'", "'\\''")
            f.write(f"file '{escaped_path}'\n")

    return concat_list, concat_file


def generate_chapters(concat_list: List[Dict]) -> str:
    """Generate YouTube chapter timestamps from the concat list."""
    chapters = []
    current_time = 0.0

    chapters.append("ATLAS SHRUGGED - COMPLETE SERIES\n")

    current_part = 0
    for entry in concat_list:
        if entry["type"] == "part_title":
            current_part = entry["part"]
            part_info = PARTS[current_part]
            chapters.append(f"\nPART {current_part}: {part_info['name'].upper()}")

        elif entry["type"] == "episode_title":
            # The episode starts after this title card
            pass

        elif entry["type"] == "episode":
            ep_num = entry["episode"]
            ep_info = EPISODES.get(ep_num, {"title": f"Episode {ep_num}"})

            # Format timestamp
            hours = int(current_time // 3600)
            minutes = int((current_time % 3600) // 60)
            seconds = int(current_time % 60)

            if hours > 0:
                timestamp = f"{hours}:{minutes:02d}:{seconds:02d}"
            else:
                timestamp = f"{minutes}:{seconds:02d}"

            chapters.append(f"{timestamp} Episode {ep_num}: {ep_info['title']}")

        current_time += entry["duration"]

    return "\n".join(chapters)


def concatenate_videos(concat_file: Path, output_path: Path) -> bool:
    """
    Concatenate all videos using FFmpeg.

    Since we're mixing title cards (no audio) with episodes (with audio),
    we need to re-encode.
    """
    logger.info(f"\nConcatenating videos to: {output_path}")
    logger.info("This will re-encode all videos (mixing audio/no-audio sources)...")

    # Use the concat demuxer with re-encoding
    cmd = [
        'ffmpeg', '-y',
        '-f', 'concat',
        '-safe', '0',
        '-i', str(concat_file),
        '-c:v', 'libx264',
        '-preset', 'medium',
        '-crf', '20',
        '-c:a', 'aac',
        '-b:a', '192k',
        '-ar', '44100',
        '-ac', '2',
        '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart',
        str(output_path)
    ]

    logger.info("Running FFmpeg concatenation...")
    result = subprocess.run(cmd, capture_output=True, text=True)

    if result.returncode != 0:
        logger.error(f"Concatenation failed: {result.stderr[-1000:]}")
        return False

    return True


def main():
    parser = argparse.ArgumentParser(
        description="Aggregate all Atlas Shrugged episodes into a complete series video"
    )
    parser.add_argument(
        "--skip-render", action="store_true",
        help="Skip PNG rendering (use existing PNGs)"
    )
    parser.add_argument(
        "--skip-title-videos", action="store_true",
        help="Skip title card video generation (use existing videos)"
    )
    parser.add_argument(
        "--chapters-only", action="store_true",
        help="Only generate chapter timestamps (no video processing)"
    )
    parser.add_argument(
        "--output", "-o", type=str,
        default="Atlas_Shrugged_Complete_Series.mp4",
        help="Output filename"
    )

    args = parser.parse_args()

    start_time = time.time()

    logger.info("=" * 70)
    logger.info("ATLAS SHRUGGED - COMPLETE SERIES AGGREGATOR")
    logger.info("=" * 70)

    # Step 1: Verify all episode videos exist
    logger.info("\nStep 1: Verifying episode videos...")
    missing_episodes = []
    total_duration = 0.0

    for ep_num in range(1, 31):
        ep_video = find_episode_video(ep_num)
        if ep_video and ep_video.exists():
            duration = get_video_duration(ep_video)
            total_duration += duration
            logger.info(f"  Episode {ep_num:2d}: {ep_video.name} ({duration/60:.1f} min)")
        else:
            missing_episodes.append(ep_num)
            logger.warning(f"  Episode {ep_num:2d}: MISSING!")

    if missing_episodes:
        logger.error(f"\nMissing episodes: {missing_episodes}")
        logger.error("Cannot proceed without all episodes.")
        sys.exit(1)

    logger.info(f"\nTotal episode duration: {total_duration/60:.1f} minutes ({total_duration/3600:.2f} hours)")

    if args.chapters_only:
        # Just generate chapters from existing videos
        logger.info("\nGenerating chapters only...")
        concat_list, _ = build_concat_list()
        chapters = generate_chapters(concat_list)

        chapters_file = COMPLETE_SERIES_DIR / "complete_series_chapters.txt"
        chapters_file.parent.mkdir(parents=True, exist_ok=True)
        chapters_file.write_text(chapters)

        logger.info(f"\nChapters saved to: {chapters_file}")
        print("\n" + chapters)
        return

    # Step 2: Generate title cards
    logger.info("\nStep 2: Generating title cards...")
    generate_all_title_cards(
        skip_render=args.skip_render,
        skip_videos=args.skip_title_videos
    )

    # Step 3: Build concat list
    logger.info("\nStep 3: Building concatenation list...")
    concat_list, concat_file = build_concat_list()

    logger.info(f"  Total items to concatenate: {len(concat_list)}")

    part_cards = sum(1 for e in concat_list if e["type"] == "part_title")
    ep_cards = sum(1 for e in concat_list if e["type"] == "episode_title")
    episodes = sum(1 for e in concat_list if e["type"] == "episode")

    logger.info(f"    - Part title cards: {part_cards}")
    logger.info(f"    - Episode title cards: {ep_cards}")
    logger.info(f"    - Episode videos: {episodes}")

    # Step 4: Generate chapter timestamps
    logger.info("\nStep 4: Generating chapter timestamps...")
    chapters = generate_chapters(concat_list)

    chapters_file = COMPLETE_SERIES_DIR / "complete_series_chapters.txt"
    chapters_file.write_text(chapters)
    logger.info(f"  Chapters saved to: {chapters_file}")

    # Step 5: Concatenate videos
    logger.info("\nStep 5: Concatenating videos...")
    output_path = OUTPUT_DIR / args.output

    if concatenate_videos(concat_file, output_path):
        elapsed = time.time() - start_time
        file_size = output_path.stat().st_size / (1024 * 1024)
        final_duration = get_video_duration(output_path)

        logger.info("\n" + "=" * 70)
        logger.info("SUCCESS!")
        logger.info("=" * 70)
        logger.info(f"Output: {output_path}")
        logger.info(f"Size: {file_size:.1f} MB")
        logger.info(f"Duration: {final_duration/60:.1f} minutes ({final_duration/3600:.2f} hours)")
        logger.info(f"Processing time: {elapsed/60:.1f} minutes")
        logger.info(f"\nChapter timestamps: {chapters_file}")
        logger.info("\n" + "=" * 70)

        # Print chapters
        print("\n" + chapters)
    else:
        logger.error("\nFailed to create complete series video!")
        sys.exit(1)


if __name__ == "__main__":
    main()
