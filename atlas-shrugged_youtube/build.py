#!/usr/bin/env python3
"""
Unified Build Script for Atlas Shrugged YouTube Series

Orchestrates all production tasks in the correct order:
1. Inject recaps into episode generators
2. Generate thumbnails
3. Generate audio (requires ELEVENLABS_API_KEY)
4. Generate captions (requires audio files + whisper)
5. Validate outputs

Usage:
    python build.py                     # Run all tasks (dry-run by default)
    python build.py --apply             # Actually apply changes
    python build.py --step recaps       # Run only recap injection
    python build.py --step thumbnails   # Run only thumbnail generation
    python build.py --step audio        # Run only audio generation
    python build.py --step captions     # Run only caption generation
    python build.py --step validate     # Run only validation
    python build.py --episode 5         # Process single episode
    python build.py --part 2            # Process Part 2 episodes (11-20)
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
EPISODE_COUNT = 30

# Directory paths
EPISODE_DIRS = [BASE_DIR / f"episode_{i:02d}_production" for i in range(1, 31)]
RECAPS_DIR = BASE_DIR / "recaps"
THUMBNAILS_DIR = BASE_DIR / "youtube_metadata" / "thumbnails"
AUDIO_ENHANCED_DIR = BASE_DIR / "audio_enhanced"
CAPTIONS_DIR = BASE_DIR / "captions"

# Script paths
INJECT_RECAPS_SCRIPT = RECAPS_DIR / "inject_recaps.py"
THUMBNAILS_SCRIPT = THUMBNAILS_DIR / "generate_thumbnails_v2.py"
BATCH_GENERATOR_SCRIPT = AUDIO_ENHANCED_DIR / "batch_generator.py"
CAPTIONS_SCRIPT = CAPTIONS_DIR / "generate_captions.py"

# Part definitions
PARTS = {
    1: range(1, 11),   # Episodes 1-10
    2: range(11, 21),  # Episodes 11-20
    3: range(21, 31),  # Episodes 21-30
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

def step_recaps(apply=False, episodes=None):
    """Step 1: Inject Previously On recaps into episode generators."""
    Logger.header("Step 1: Inject Recaps")

    if not INJECT_RECAPS_SCRIPT.exists():
        Logger.error(f"Recap injection script not found: {INJECT_RECAPS_SCRIPT}")
        return False

    cmd = [sys.executable, str(INJECT_RECAPS_SCRIPT)]
    if apply:
        cmd.append("--apply")

    Logger.step(f"Running: {' '.join(cmd)}")

    result = subprocess.run(cmd, cwd=RECAPS_DIR)

    if result.returncode == 0:
        Logger.success("Recap injection completed")
        return True
    else:
        Logger.error("Recap injection failed")
        return False


def step_thumbnails(apply=False, episodes=None):
    """Step 2: Generate enhanced thumbnails."""
    Logger.header("Step 2: Generate Thumbnails")

    if not THUMBNAILS_SCRIPT.exists():
        Logger.error(f"Thumbnail script not found: {THUMBNAILS_SCRIPT}")
        return False

    if not apply:
        Logger.info("Dry run - would generate thumbnails with:")
        Logger.info(f"  Script: {THUMBNAILS_SCRIPT}")
        Logger.info(f"  Output: {THUMBNAILS_DIR}")
        return True

    cmd = [sys.executable, str(THUMBNAILS_SCRIPT)]
    Logger.step(f"Running: {' '.join(cmd)}")

    result = subprocess.run(cmd, cwd=THUMBNAILS_DIR)

    if result.returncode == 0:
        Logger.success("Thumbnail generation completed")
        return True
    else:
        Logger.error("Thumbnail generation failed")
        return False


def step_audio(apply=False, episodes=None):
    """Step 3: Generate audio for episodes."""
    Logger.header("Step 3: Generate Audio")

    api_key = os.environ.get('ELEVENLABS_API_KEY')
    if not api_key:
        Logger.warn("ELEVENLABS_API_KEY not set")
        Logger.info("To generate audio, set the environment variable:")
        Logger.info("  export ELEVENLABS_API_KEY='your-key'")
        return True  # Not a failure, just skipped

    if episodes is None:
        episodes = range(1, 31)

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


def step_captions(apply=False, episodes=None):
    """Step 4: Generate SRT captions from audio."""
    Logger.header("Step 4: Generate Captions")

    if not CAPTIONS_SCRIPT.exists():
        Logger.error(f"Caption script not found: {CAPTIONS_SCRIPT}")
        return False

    # Check if whisper is available
    try:
        import whisper
        Logger.info("Whisper is available")
    except ImportError:
        Logger.warn("Whisper not installed. Run: pip install openai-whisper torch")
        return True  # Not a failure, just skipped

    if episodes is None:
        episodes = range(1, 31)

    if not apply:
        Logger.info(f"Dry run - would generate captions for episodes: {list(episodes)}")
        return True

    # Run caption generator
    cmd = [sys.executable, str(CAPTIONS_SCRIPT)]

    if len(episodes) == 1:
        cmd.extend(["--episode", str(list(episodes)[0])])

    Logger.step(f"Running: {' '.join(cmd)}")

    result = subprocess.run(cmd, cwd=CAPTIONS_DIR)

    if result.returncode == 0:
        Logger.success("Caption generation completed")
        return True
    else:
        Logger.error("Caption generation failed")
        return False


def step_validate(apply=False, episodes=None):
    """Step 5: Validate all outputs."""
    Logger.header("Step 5: Validate Outputs")

    if episodes is None:
        episodes = range(1, 31)

    issues = []

    for ep_num in episodes:
        ep_issues = []

        # Check generator exists
        generator = BASE_DIR / f"episode_{ep_num:02d}_production" / f"elevenlabs_generator_ep{ep_num:02d}.py"
        if not generator.exists():
            ep_issues.append("Missing generator")

        # Check thumbnail exists
        thumbnail = THUMBNAILS_DIR / f"ep{ep_num:02d}_thumbnail_v2.png"
        if not thumbnail.exists():
            ep_issues.append("Missing thumbnail (v2)")

        # Check audio directory
        audio_dir = BASE_DIR / f"episode_{ep_num:02d}_production" / f"episode_{ep_num:02d}_audio"
        if not audio_dir.exists():
            ep_issues.append("Missing audio directory")
        elif not list(audio_dir.glob("*.mp3")):
            ep_issues.append("No audio files")

        # Check production script (optional)
        script = BASE_DIR / f"episode_{ep_num:02d}_production" / f"episode_{ep_num:02d}_script.md"
        if not script.exists():
            ep_issues.append("Missing production script")

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
        description="Unified build script for Atlas Shrugged YouTube Series",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )

    parser.add_argument(
        "--apply", "-a",
        action="store_true",
        help="Actually apply changes (default is dry run)"
    )

    parser.add_argument(
        "--step", "-s",
        choices=["recaps", "thumbnails", "audio", "captions", "validate", "all"],
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
    print("Atlas Shrugged YouTube Series - Build Script")
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
        "recaps": step_recaps,
        "thumbnails": step_thumbnails,
        "audio": step_audio,
        "captions": step_captions,
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
