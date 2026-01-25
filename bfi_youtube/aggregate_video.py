#!/usr/bin/env python3
"""
BFI Aggregated Video Generator

Creates a single aggregated video from all 15 BFI episodes by:
1. Trimming cold opens (except Episode 1) and "next episode" outros
2. Adding part title cards between major sections
3. Concatenating everything into one ~75-minute video

Usage:
    python aggregate_video.py [--dry-run] [--preview]

Options:
    --dry-run   Show commands without executing
    --preview   Generate 10-second preview clips instead of full video

Requirements:
    - FFmpeg installed (brew install ffmpeg)
    - All 15 episode MP4 files in output/episode_XX_video/
"""

import os
import subprocess
import json
import argparse
from pathlib import Path
from dataclasses import dataclass
from typing import List, Optional

# Configuration
BASE_DIR = Path(__file__).parent
OUTPUT_DIR = BASE_DIR / "output"
AGGREGATED_DIR = OUTPUT_DIR / "aggregated"

# Video settings
VIDEO_WIDTH = 1920
VIDEO_HEIGHT = 1080
FPS = 30
FONT_PATH = "/System/Library/Fonts/Helvetica.ttc"  # macOS default

# Episode metadata with trim points (in seconds)
# Format: (cold_open_end, outro_start, title)
# - cold_open_end: Where the cold open ends (trim 0 to this for eps 2-15)
# - outro_start: Where the "next episode" preview starts (trim from here to end)

@dataclass
class Episode:
    num: int
    title: str
    cold_open_end: float  # Seconds - where cold open ends
    outro_start: float    # Seconds - where outro begins
    duration: float       # Total duration
    part: int             # Which part (1, 2, or 3)

    @property
    def video_path(self) -> Path:
        """Find the video file for this episode"""
        video_dir = OUTPUT_DIR / f"episode_{self.num:02d}_video"
        for f in video_dir.glob("*.mp4"):
            return f
        return None

    @property
    def keep_cold_open(self) -> bool:
        """Only Episode 1 keeps its cold open"""
        return self.num == 1

    @property
    def trim_start(self) -> float:
        """Start time after trimming cold open"""
        return 0.0 if self.keep_cold_open else self.cold_open_end

    @property
    def trim_end(self) -> float:
        """End time before outro"""
        return self.outro_start

    @property
    def trimmed_duration(self) -> float:
        """Duration after trimming"""
        return self.trim_end - self.trim_start


# Episode definitions with trim points
# These are based on SRT analysis - adjust as needed after preview
EPISODES = [
    # Part 1: Bitcoin is for Individuals (Ep 1-7)
    Episode(1,  "Introduction", 0, 399, 421.9, 1),                    # Keep cold open, trim at 6:39
    Episode(2,  "HODL'ing is Irrational", 20, 353, 378.1, 1),         # Trim 0:20, end at 5:53
    Episode(3,  "Deflationary Mindset", 18, 323, 349.0, 1),           # Trim 0:18, end at 5:23
    Episode(4,  "Custody Requirements", 20, 358, 386.8, 1),           # Trim 0:20, end at 5:58
    Episode(5,  "Patience and Time", 18, 330, 358.0, 1),              # Trim 0:18, end at 5:30
    Episode(6,  "Bearer Asset", 20, 402, 432.7, 1),                   # Trim 0:20, end at 6:42
    Episode(7,  "Privacy", 18, 300, 326.2, 1),                        # Trim 0:18, end at 5:00

    # Part 2: Individuals Run Institutions (Ep 8-9)
    Episode(8,  "Strategy", 18, 275, 301.0, 2),                       # Trim 0:18, end at 4:35
    Episode(9,  "BlackRock", 20, 300, 326.4, 2),                      # Trim 0:20, end at 5:00

    # Part 3: Institutional Bitcoin (Ep 10-15)
    Episode(10, "Deferred Compensation", 15, 245, 269.1, 3),          # Trim 0:15, end at 4:05
    Episode(11, "Mutual Funds / ETFs", 15, 242, 267.7, 3),            # Trim 0:15, end at 4:02
    Episode(12, "Treasury / Balance Sheet", 15, 263, 288.5, 3),       # Trim 0:15, end at 4:23
    Episode(13, "Structured Credit", 18, 310, 339.0, 3),              # Trim 0:18, end at 5:10
    Episode(14, "Pensions", 18, 300, 328.5, 3),                       # Trim 0:18, end at 5:00
    Episode(15, "Epilogue", 10, 386, 385.8, 3),                       # Trim 0:10, keep full outro (series finale)
]

# Part title cards
PART_TITLES = {
    1: ("PART ONE", "Bitcoin is for Individuals", "Episodes 1-7"),
    2: ("PART TWO", "Individuals Run Institutions", "Episodes 8-9"),
    3: ("PART THREE", "Institutional Bitcoin", "Episodes 10-15"),
}


def run_command(cmd: List[str], dry_run: bool = False) -> bool:
    """Run a shell command"""
    cmd_str = ' '.join(cmd)
    print(f"  Running: {cmd_str[:100]}...")

    if dry_run:
        print(f"  [DRY RUN] Would execute: {cmd_str}")
        return True

    try:
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"  Error: {result.stderr}")
            return False
        return True
    except Exception as e:
        print(f"  Exception: {e}")
        return False


def create_title_card(part_num: int, output_path: Path, duration: float = 4.0, dry_run: bool = False) -> bool:
    """Create a part title card video"""
    title, subtitle, episodes = PART_TITLES[part_num]

    # FFmpeg command to create title card
    # Black background with white text
    cmd = [
        "ffmpeg", "-y",
        "-f", "lavfi",
        "-i", f"color=c=black:s={VIDEO_WIDTH}x{VIDEO_HEIGHT}:d={duration}:r={FPS}",
        "-f", "lavfi",
        "-i", f"anullsrc=channel_layout=stereo:sample_rate=48000",
        "-t", str(duration),
        "-vf", (
            f"drawtext=fontfile={FONT_PATH}:text='{title}':"
            f"fontcolor=white:fontsize=72:x=(w-text_w)/2:y=(h-text_h)/2-80,"
            f"drawtext=fontfile={FONT_PATH}:text='{subtitle}':"
            f"fontcolor=#f97316:fontsize=48:x=(w-text_w)/2:y=(h-text_h)/2+20,"
            f"drawtext=fontfile={FONT_PATH}:text='{episodes}':"
            f"fontcolor=#888888:fontsize=32:x=(w-text_w)/2:y=(h-text_h)/2+100"
        ),
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-crf", "23",
        "-c:a", "aac",
        "-b:a", "128k",
        str(output_path)
    ]

    return run_command(cmd, dry_run)


def trim_episode(episode: Episode, output_path: Path, dry_run: bool = False, preview: bool = False) -> bool:
    """Trim an episode to remove cold open and outro"""
    video_path = episode.video_path

    if not video_path or not video_path.exists():
        print(f"  Error: Video not found for Episode {episode.num}")
        return False

    start = episode.trim_start
    duration = episode.trimmed_duration

    if preview:
        # For preview, just take 10 seconds from the middle
        start = episode.trim_start + 30
        duration = 10

    cmd = [
        "ffmpeg", "-y",
        "-ss", str(start),
        "-i", str(video_path),
        "-t", str(duration),
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-crf", "23",
        "-c:a", "aac",
        "-b:a", "128k",
        str(output_path)
    ]

    return run_command(cmd, dry_run)


def create_concat_file(clips: List[Path], concat_file: Path) -> None:
    """Create FFmpeg concat demuxer file"""
    with open(concat_file, 'w') as f:
        for clip in clips:
            f.write(f"file '{clip}'\n")


def concatenate_videos(clips: List[Path], output_path: Path, dry_run: bool = False) -> bool:
    """Concatenate all clips into final video"""
    concat_file = AGGREGATED_DIR / "concat_list.txt"
    create_concat_file(clips, concat_file)

    cmd = [
        "ffmpeg", "-y",
        "-f", "concat",
        "-safe", "0",
        "-i", str(concat_file),
        "-c", "copy",
        str(output_path)
    ]

    return run_command(cmd, dry_run)


def main():
    parser = argparse.ArgumentParser(description='Generate aggregated BFI video')
    parser.add_argument('--dry-run', action='store_true', help='Show commands without executing')
    parser.add_argument('--preview', action='store_true', help='Generate short preview clips')
    parser.add_argument('--skip-trim', action='store_true', help='Skip trimming, use existing clips')
    args = parser.parse_args()

    print("=" * 70)
    print("BFI Aggregated Video Generator")
    print("=" * 70)

    # Create output directory
    AGGREGATED_DIR.mkdir(parents=True, exist_ok=True)
    clips_dir = AGGREGATED_DIR / "clips"
    clips_dir.mkdir(exist_ok=True)

    all_clips = []
    current_part = 0
    total_duration = 0

    for episode in EPISODES:
        # Add part title card when entering a new part
        if episode.part != current_part:
            current_part = episode.part
            print(f"\n{'='*50}")
            print(f"PART {current_part}: {PART_TITLES[current_part][1]}")
            print(f"{'='*50}")

            title_card_path = clips_dir / f"part_{current_part}_title.mp4"

            if not args.skip_trim:
                print(f"\n📝 Creating Part {current_part} title card...")
                if not create_title_card(current_part, title_card_path, dry_run=args.dry_run):
                    print(f"  Failed to create title card for Part {current_part}")
                    continue

            all_clips.append(title_card_path)
            total_duration += 4  # Title card duration

        # Trim episode
        clip_path = clips_dir / f"ep{episode.num:02d}_trimmed.mp4"

        print(f"\n🎬 Episode {episode.num}: {episode.title}")
        print(f"   Original: {episode.duration:.1f}s")
        print(f"   Trim: {episode.trim_start:.1f}s - {episode.trim_end:.1f}s")
        print(f"   Result: {episode.trimmed_duration:.1f}s")

        if not args.skip_trim:
            if not trim_episode(episode, clip_path, dry_run=args.dry_run, preview=args.preview):
                print(f"  Failed to trim Episode {episode.num}")
                continue

        all_clips.append(clip_path)
        total_duration += episode.trimmed_duration if not args.preview else 10

    # Concatenate all clips
    print(f"\n{'='*50}")
    print("CONCATENATING ALL CLIPS")
    print(f"{'='*50}")

    output_filename = "BFI_Complete_Course_PREVIEW.mp4" if args.preview else "BFI_Complete_Course.mp4"
    final_output = AGGREGATED_DIR / output_filename

    print(f"\n📼 Creating final video...")
    print(f"   Clips: {len(all_clips)}")
    print(f"   Estimated duration: {total_duration/60:.1f} minutes")

    if not args.dry_run:
        if concatenate_videos(all_clips, final_output, dry_run=args.dry_run):
            print(f"\n✅ SUCCESS!")
            print(f"   Output: {final_output}")

            # Get actual duration
            result = subprocess.run(
                ["ffprobe", "-v", "error", "-show_entries", "format=duration",
                 "-of", "default=noprint_wrappers=1:nokey=1", str(final_output)],
                capture_output=True, text=True
            )
            if result.returncode == 0:
                actual_duration = float(result.stdout.strip())
                print(f"   Duration: {actual_duration/60:.1f} minutes ({actual_duration:.0f}s)")
        else:
            print(f"\n❌ FAILED to create final video")
    else:
        print(f"\n[DRY RUN] Would create: {final_output}")

    # Summary
    print(f"\n{'='*50}")
    print("TRIM POINTS SUMMARY")
    print(f"{'='*50}")
    print("\nIf cuts feel wrong, adjust these values in EPISODES list:\n")
    print(f"{'Ep':<4} {'Title':<30} {'Cold Open':<12} {'Outro Start':<12} {'Duration':<10}")
    print("-" * 70)
    for ep in EPISODES:
        cold = f"0:{ep.cold_open_end:04.1f}" if ep.num > 1 else "KEEP"
        outro = f"{int(ep.outro_start//60)}:{ep.outro_start%60:04.1f}"
        dur = f"{ep.trimmed_duration:.0f}s"
        print(f"{ep.num:<4} {ep.title:<30} {cold:<12} {outro:<12} {dur:<10}")


if __name__ == "__main__":
    main()
