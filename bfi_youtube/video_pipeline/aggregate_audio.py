#!/usr/bin/env python3
"""
Aggregate Audio Script for BFI (Bitcoin for Institutions) YouTube Series

Concatenates all section MP3 files for an episode into a single complete MP3.
Uses FFmpeg's concat demuxer for lossless concatenation (no re-encoding).

Usage:
    python aggregate_audio.py --episode 1        # Single episode
    python aggregate_audio.py --all              # All 15 episodes
    python aggregate_audio.py --episodes 1-10    # Range of episodes

Output:
    episode_NN_production/episode_NN_audio/Episode_NN_Complete.mp3
"""

import argparse
import subprocess
import sys
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from config import PROJECT_DIR as BASE_DIR, TOTAL_EPISODES


def get_audio_files(episode_num: int) -> list[Path]:
    """Get sorted list of section audio files for an episode.

    Returns MP3 files matching Episode_NN_Section_*.mp3 pattern,
    excluding any existing *_Complete.mp3 aggregated files.
    """
    audio_dir = BASE_DIR / f"episode_{episode_num:02d}_production" / f"episode_{episode_num:02d}_audio"
    if not audio_dir.exists():
        raise FileNotFoundError(f"Audio directory not found: {audio_dir}")

    # Get all section MP3s, exclude any existing Complete files
    audio_files = sorted([
        f for f in audio_dir.glob("Episode_*.mp3")
        if "_Complete.mp3" not in f.name
    ])

    return audio_files


def aggregate_episode_audio(episode_num: int, verbose: bool = True) -> Path:
    """Concatenate all section MP3s into a single episode MP3.

    Args:
        episode_num: Episode number (1-15)
        verbose: Whether to print progress

    Returns:
        Path to the generated aggregated MP3 file

    Raises:
        FileNotFoundError: If no audio files found for episode
        RuntimeError: If FFmpeg concatenation fails
    """
    audio_files = get_audio_files(episode_num)
    if not audio_files:
        raise FileNotFoundError(f"No audio files found for episode {episode_num}")

    if verbose:
        print(f"  Found {len(audio_files)} audio sections")

    # Output goes in the same directory as source files
    output_dir = audio_files[0].parent
    concat_list = output_dir / "concat_list.txt"
    output_file = output_dir / f"Episode_{episode_num:02d}_Complete.mp3"

    try:
        # Write concat list file for FFmpeg
        # Using relative filenames since we'll run FFmpeg from the audio directory
        with open(concat_list, 'w') as f:
            for audio in audio_files:
                f.write(f"file '{audio.name}'\n")

        # FFmpeg concat demuxer - lossless for same-codec files
        cmd = [
            'ffmpeg', '-y',           # Overwrite output
            '-f', 'concat',           # Use concat demuxer
            '-safe', '0',             # Allow any file paths
            '-i', str(concat_list),   # Input concat list
            '-c', 'copy',             # Copy codec (no re-encoding)
            str(output_file)
        ]

        if verbose:
            print(f"  Concatenating to: {output_file.name}")

        result = subprocess.run(
            cmd,
            cwd=output_dir,           # Run from audio directory
            capture_output=True,
            text=True
        )

        if result.returncode != 0:
            raise RuntimeError(f"FFmpeg failed: {result.stderr}")

        if verbose:
            file_size_mb = output_file.stat().st_size / (1024 * 1024)
            print(f"  Output: {output_file.name} ({file_size_mb:.1f} MB)")

        return output_file

    finally:
        # Always cleanup temp concat list
        if concat_list.exists():
            concat_list.unlink()


def parse_episode_range(range_str: str) -> list[int]:
    """Parse episode range string like '1-10' into list of episode numbers."""
    if '-' in range_str:
        start, end = range_str.split('-', 1)
        return list(range(int(start), int(end) + 1))
    return [int(range_str)]


def main():
    parser = argparse.ArgumentParser(
        description="Aggregate section audio files into complete episode MP3s"
    )

    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument(
        "--episode", "-e",
        type=int,
        help=f"Single episode number (1-{TOTAL_EPISODES})"
    )
    group.add_argument(
        "--all", "-a",
        action="store_true",
        help=f"Process all {TOTAL_EPISODES} episodes"
    )
    group.add_argument(
        "--episodes",
        type=str,
        help="Episode range (e.g., '1-10' or '5')"
    )

    args = parser.parse_args()

    # Determine episodes to process
    if args.episode:
        episodes = [args.episode]
    elif args.all:
        episodes = list(range(1, TOTAL_EPISODES + 1))
    else:
        episodes = parse_episode_range(args.episodes)

    print(f"Aggregating audio for {len(episodes)} episode(s)...")
    print()

    success_count = 0
    error_count = 0

    for ep_num in episodes:
        print(f"Episode {ep_num}:")
        try:
            output = aggregate_episode_audio(ep_num)
            print(f"  ✓ Success")
            success_count += 1
        except FileNotFoundError as e:
            print(f"  ✗ Not found: {e}")
            error_count += 1
        except RuntimeError as e:
            print(f"  ✗ Failed: {e}")
            error_count += 1
        print()

    # Summary
    print(f"{'='*40}")
    print(f"Complete: {success_count}/{len(episodes)} episodes")
    if error_count:
        print(f"Errors: {error_count}")
        sys.exit(1)


if __name__ == "__main__":
    main()
