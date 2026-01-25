#!/usr/bin/env python3
"""
Unified Build Script for BFI (Bitcoin for Institutions) YouTube Series

Orchestrates all production tasks in the correct order:
1. Generate audio (requires ELEVENLABS_API_KEY)
2. Aggregate audio into complete episode files
3. Generate thumbnails
4. Validate outputs

Usage:
    python build.py                     # Run all tasks (dry-run by default)
    python build.py --apply             # Actually apply changes
    python build.py --step audio        # Run only audio generation
    python build.py --step aggregate    # Run only audio aggregation
    python build.py --step thumbnails   # Run only thumbnail generation
    python build.py --step validate     # Run only validation
    python build.py --episode 5         # Process single episode
    python build.py --part 2            # Process Part 2 episodes
"""

import os
import sys
import subprocess
import argparse
from pathlib import Path
from datetime import datetime

# =============================================================================
# CONFIGURATION
# =============================================================================

BASE_DIR = Path(__file__).parent
TOTAL_EPISODES = 15

# Directory paths
EPISODE_DIRS = [BASE_DIR / f"episode_{i:02d}_production" for i in range(1, 16)]
THUMBNAILS_DIR = BASE_DIR / "youtube_metadata" / "thumbnails"

# Part definitions
PARTS = {
    1: range(1, 8),    # Episodes 1-7: Bitcoin is for Individuals
    2: range(8, 10),   # Episodes 8-9: Individuals Run Institutions
    3: range(10, 16),  # Episodes 10-15: Institutional Bitcoin
}


# =============================================================================
# LOGGING
# =============================================================================

class Logger:
    """Simple logger with colored output."""

    COLORS = {
        'header': '\033[95m',
        'blue': '\033[94m',
        'cyan': '\033[96m',
        'green': '\033[92m',
        'yellow': '\033[93m',
        'red': '\033[91m',
        'end': '\033[0m',
        'bold': '\033[1m',
    }

    @classmethod
    def header(cls, msg):
        print(f"\n{cls.COLORS['bold']}{cls.COLORS['header']}{'='*60}{cls.COLORS['end']}")
        print(f"{cls.COLORS['bold']}{cls.COLORS['header']}{msg}{cls.COLORS['end']}")
        print(f"{cls.COLORS['bold']}{cls.COLORS['header']}{'='*60}{cls.COLORS['end']}\n")

    @classmethod
    def step(cls, msg):
        print(f"{cls.COLORS['cyan']}[STEP]{cls.COLORS['end']} {msg}")

    @classmethod
    def info(cls, msg):
        print(f"{cls.COLORS['blue']}[INFO]{cls.COLORS['end']} {msg}")

    @classmethod
    def success(cls, msg):
        print(f"{cls.COLORS['green']}[OK]{cls.COLORS['end']} {msg}")

    @classmethod
    def warn(cls, msg):
        print(f"{cls.COLORS['yellow']}[WARN]{cls.COLORS['end']} {msg}")

    @classmethod
    def error(cls, msg):
        print(f"{cls.COLORS['red']}[ERROR]{cls.COLORS['end']} {msg}")


# =============================================================================
# BUILD STEPS
# =============================================================================

def step_audio(apply=False, episodes=None):
    """Step 1: Generate audio for episodes."""
    Logger.header("Step 1: Generate Audio")

    api_key = os.environ.get('ELEVENLABS_API_KEY')
    if not api_key:
        Logger.warn("ELEVENLABS_API_KEY not set")
        Logger.info("To generate audio, set the environment variable:")
        Logger.info("  export ELEVENLABS_API_KEY='your-key'")
        return True  # Not a failure, just skipped

    if episodes is None:
        episodes = range(1, TOTAL_EPISODES + 1)

    if not apply:
        Logger.info(f"Dry run - would generate audio for episodes: {list(episodes)}")
        return True

    success_count = 0
    error_count = 0

    for ep_num in episodes:
        ep_dir = BASE_DIR / f"episode_{ep_num:02d}_production"
        generator = ep_dir / f"elevenlabs_generator_ep{ep_num:02d}.py"

        if not generator.exists():
            Logger.warn(f"Episode {ep_num}: Generator not found")
            error_count += 1
            continue

        Logger.step(f"Episode {ep_num}: Generating audio...")

        result = subprocess.run(
            [sys.executable, str(generator)],
            cwd=ep_dir,
            env={**os.environ, 'ELEVENLABS_API_KEY': api_key}
        )

        if result.returncode == 0:
            Logger.success(f"Episode {ep_num}: Audio generated")
            success_count += 1
        else:
            Logger.error(f"Episode {ep_num}: Audio generation failed")
            error_count += 1

    Logger.info(f"Audio generation: {success_count} success, {error_count} errors")
    return error_count == 0


def step_aggregate_audio(apply=False, episodes=None):
    """Step 2: Aggregate section audio into complete episode MP3."""
    Logger.header("Step 2: Aggregate Episode Audio")

    if episodes is None:
        episodes = range(1, TOTAL_EPISODES + 1)

    if not apply:
        Logger.info(f"Dry run - would aggregate audio for episodes: {list(episodes)}")
        return True

    # Import here to avoid circular imports
    from video_pipeline.aggregate_audio import aggregate_episode_audio

    success_count = 0
    error_count = 0

    for ep_num in episodes:
        try:
            output = aggregate_episode_audio(ep_num, verbose=False)
            Logger.success(f"Episode {ep_num}: {output.name}")
            success_count += 1
        except FileNotFoundError as e:
            Logger.warn(f"Episode {ep_num}: {e}")
            error_count += 1
        except Exception as e:
            Logger.error(f"Episode {ep_num}: {e}")
            error_count += 1

    Logger.info(f"Audio aggregation: {success_count}/{len(list(episodes))} episodes")
    return error_count == 0


def step_thumbnails(apply=False, episodes=None):
    """Step 3: Generate thumbnails."""
    Logger.header("Step 3: Generate Thumbnails")

    thumbnail_script = THUMBNAILS_DIR / "generate_thumbnails.py"

    if not thumbnail_script.exists():
        Logger.info(f"Thumbnail script not found: {thumbnail_script}")
        Logger.info("Create a thumbnail generation script to enable this step.")
        return True

    if not apply:
        Logger.info("Dry run - would generate thumbnails")
        return True

    cmd = [sys.executable, str(thumbnail_script)]
    Logger.step(f"Running: {' '.join(cmd)}")

    result = subprocess.run(cmd, cwd=THUMBNAILS_DIR)

    if result.returncode == 0:
        Logger.success("Thumbnail generation completed")
        return True
    else:
        Logger.error("Thumbnail generation failed")
        return False


def step_validate(apply=False, episodes=None):
    """Step 4: Validate all outputs."""
    Logger.header("Step 4: Validate Outputs")

    if episodes is None:
        episodes = range(1, TOTAL_EPISODES + 1)

    issues = []

    for ep_num in episodes:
        ep_issues = []

        # Check generator exists
        generator = BASE_DIR / f"episode_{ep_num:02d}_production" / f"elevenlabs_generator_ep{ep_num:02d}.py"
        if not generator.exists():
            ep_issues.append("Missing generator")

        # Check audio directory
        audio_dir = BASE_DIR / f"episode_{ep_num:02d}_production" / f"episode_{ep_num:02d}_audio"
        if not audio_dir.exists():
            ep_issues.append("Missing audio directory")
        elif not list(audio_dir.glob("*.mp3")):
            ep_issues.append("No audio files")

        # Check thumbnail (optional)
        thumbnail = THUMBNAILS_DIR / f"ep{ep_num:02d}_thumbnail.png"
        if not thumbnail.exists():
            ep_issues.append("Missing thumbnail")

        if ep_issues:
            issues.append((ep_num, ep_issues))
            Logger.warn(f"Episode {ep_num}: {', '.join(ep_issues)}")
        else:
            Logger.success(f"Episode {ep_num}: All files present")

    # Summary
    print()
    Logger.info(f"Validation complete: {len(episodes) - len(issues)}/{len(episodes)} episodes fully complete")

    if issues:
        Logger.warn(f"{len(issues)} episodes have issues")
        return False

    return True


# =============================================================================
# MAIN
# =============================================================================

def main():
    parser = argparse.ArgumentParser(
        description="Unified build script for BFI YouTube Series",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )

    parser.add_argument(
        "--apply", "-a",
        action="store_true",
        help="Actually apply changes (default is dry run)"
    )

    parser.add_argument(
        "--step", "-s",
        choices=["audio", "aggregate", "thumbnails", "validate", "all"],
        default="all",
        help="Run specific build step"
    )

    parser.add_argument(
        "--episode", "-e",
        type=int,
        help="Process single episode"
    )

    parser.add_argument(
        "--part", "-p",
        type=int,
        choices=[1, 2, 3],
        help="Process all episodes in a part"
    )

    args = parser.parse_args()

    # Determine episodes to process
    if args.episode:
        episodes = [args.episode]
    elif args.part:
        episodes = list(PARTS[args.part])
    else:
        episodes = None  # All episodes

    # Print header
    print()
    print(f"{'='*60}")
    print("Bitcoin for Institutions YouTube Series - Build Script")
    print(f"{'='*60}")
    print(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Mode: {'APPLY' if args.apply else 'DRY RUN'}")
    print(f"Step: {args.step}")
    if episodes:
        print(f"Episodes: {episodes}")
    print()

    if not args.apply:
        Logger.warn("DRY RUN MODE - No changes will be made")
        Logger.info("Use --apply to make actual changes")
        print()

    # Define build steps
    steps = {
        "audio": step_audio,
        "aggregate": step_aggregate_audio,
        "thumbnails": step_thumbnails,
        "validate": step_validate,
    }

    # Run steps
    results = {}

    if args.step == "all":
        for name, func in steps.items():
            results[name] = func(apply=args.apply, episodes=episodes)
    else:
        results[args.step] = steps[args.step](apply=args.apply, episodes=episodes)

    # Summary
    print()
    print(f"{'='*60}")
    print("Build Summary")
    print(f"{'='*60}")

    for name, success in results.items():
        status = "PASS" if success else "FAIL"
        color = Logger.COLORS['green'] if success else Logger.COLORS['red']
        print(f"  {color}{status}{Logger.COLORS['end']} - {name}")

    print()

    # Return exit code
    all_passed = all(results.values())
    sys.exit(0 if all_passed else 1)


if __name__ == "__main__":
    main()
