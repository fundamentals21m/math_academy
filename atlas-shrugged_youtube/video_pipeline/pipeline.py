#!/usr/bin/env python3
"""
YouTube Pipeline Manager

Enforces checkpoints and verification at each stage.
Prevents bulk operations without sample verification.

Usage:
    python pipeline.py status              # Show current state
    python pipeline.py render --episode 1  # Render single episode (required first)
    python pipeline.py render --all        # Render all (only after verification)
    python pipeline.py video --episode 1   # Generate single video (required first)
    python pipeline.py video --all         # Generate all (only after verification)
    python pipeline.py upload --episode 1  # Upload single episode (required first)
    python pipeline.py upload --all        # Upload all (only after verification)
    python pipeline.py verify              # Run verification checks
    python pipeline.py checkpoint          # Git commit current state
"""

import argparse
import subprocess
import sys
import json
from pathlib import Path
from datetime import datetime

# Paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
STATE_FILE = PROJECT_DIR / ".pipeline_state.json"
ASSETS_DIR = PROJECT_DIR / "assets" / "generated"
OUTPUT_DIR = PROJECT_DIR / "output"
SLIDES_DIR = SCRIPT_DIR / "slides"

# Expected dimensions
EXPECTED_WIDTH = 1920
EXPECTED_HEIGHT = 1080


def load_state():
    """Load pipeline state from file."""
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {
        "render_verified": False,
        "video_verified": False,
        "upload_verified": False,
        "last_checkpoint": None,
        "verified_episode": None
    }


def save_state(state):
    """Save pipeline state to file."""
    STATE_FILE.write_text(json.dumps(state, indent=2))


def run_command(cmd, capture=False):
    """Run a shell command."""
    print(f"Running: {' '.join(cmd)}")
    if capture:
        result = subprocess.run(cmd, capture_output=True, text=True)
        return result
    else:
        return subprocess.run(cmd)


def get_png_dimensions(png_path):
    """Get dimensions of a PNG file."""
    result = subprocess.run(
        ["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(png_path)],
        capture_output=True, text=True
    )
    width = height = None
    for line in result.stdout.split("\n"):
        if "pixelWidth" in line:
            width = int(line.split(":")[-1].strip())
        if "pixelHeight" in line:
            height = int(line.split(":")[-1].strip())
    return width, height


def get_video_dimensions(video_path):
    """Get dimensions of a video file."""
    result = subprocess.run([
        "ffprobe", "-v", "error",
        "-select_streams", "v:0",
        "-show_entries", "stream=width,height",
        "-of", "csv=p=0",
        str(video_path)
    ], capture_output=True, text=True)
    if result.stdout.strip():
        parts = result.stdout.strip().split(",")
        return int(parts[0]), int(parts[1])
    return None, None


def cmd_status(args):
    """Show current pipeline state."""
    state = load_state()

    print("\n" + "=" * 60)
    print("PIPELINE STATUS")
    print("=" * 60)

    # Git status
    result = run_command(["git", "status", "--porcelain"], capture=True)
    git_clean = len(result.stdout.strip()) == 0
    print(f"\nGit Status: {'✓ Clean' if git_clean else '✗ Uncommitted changes'}")
    print(f"Last Checkpoint: {state.get('last_checkpoint', 'Never')}")

    # Slide count
    slides = list(SLIDES_DIR.glob("ep*_section_*.html"))
    print(f"\nSlides: {len(slides)} HTML files")

    # Rendered count
    rendered = list(ASSETS_DIR.glob("episode_*/section_*.png"))
    print(f"Rendered PNGs: {len(rendered)} files")

    # Check sample dimensions
    sample_png = ASSETS_DIR / "episode_01" / "section_01.png"
    if sample_png.exists():
        w, h = get_png_dimensions(sample_png)
        dim_ok = w == EXPECTED_WIDTH and h == EXPECTED_HEIGHT
        print(f"Sample PNG Dimensions: {w}x{h} {'✓' if dim_ok else '✗ (expected 1920x1080)'}")

    # Video count
    videos = list(OUTPUT_DIR.glob("episode_*_video/*.mp4"))
    print(f"Generated Videos: {len(videos)} files")

    # Verification state
    print(f"\nVerification State:")
    print(f"  Render Verified: {'✓' if state.get('render_verified') else '✗'}")
    print(f"  Video Verified: {'✓' if state.get('video_verified') else '✗'}")
    print(f"  Upload Verified: {'✓' if state.get('upload_verified') else '✗'}")
    print(f"  Verified Episode: {state.get('verified_episode', 'None')}")

    print("=" * 60 + "\n")


def cmd_checkpoint(args):
    """Create git checkpoint."""
    # Check for changes
    result = run_command(["git", "status", "--porcelain"], capture=True)
    if not result.stdout.strip():
        print("No changes to commit.")
        return

    # Commit
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    message = args.message or f"Pipeline checkpoint {timestamp}"

    run_command(["git", "add", "-A"])
    run_command(["git", "commit", "-m", message])

    # Update state
    state = load_state()
    state["last_checkpoint"] = timestamp
    save_state(state)

    print(f"\n✓ Checkpoint created: {message}")


def cmd_render(args):
    """Render slides to PNG."""
    state = load_state()

    if args.all:
        # Check if single episode was verified first
        if not state.get("render_verified"):
            print("\n✗ ERROR: Must verify single episode render before bulk operation.")
            print("  Run: python pipeline.py render --episode 1")
            print("  Then: python pipeline.py verify --render")
            sys.exit(1)

        print("\n✓ Render verification passed. Proceeding with bulk render...")
        run_command(["python3", str(SCRIPT_DIR / "render_slides.py"), "--all"])
    else:
        episode = args.episode
        if not episode:
            print("ERROR: Specify --episode N or --all")
            sys.exit(1)

        run_command(["python3", str(SCRIPT_DIR / "render_slides.py"), "--episode", str(episode)])

        # Prompt for verification
        print(f"\n→ Episode {episode} rendered.")
        print(f"  Verify with: open {ASSETS_DIR}/episode_{episode:02d}/section_01.png")
        print(f"  Then run: python pipeline.py verify --render --episode {episode}")


def cmd_video(args):
    """Generate videos."""
    state = load_state()

    if args.all:
        if not state.get("video_verified"):
            print("\n✗ ERROR: Must verify single episode video before bulk operation.")
            print("  Run: python pipeline.py video --episode 1")
            print("  Then: python pipeline.py verify --video")
            sys.exit(1)

        print("\n✓ Video verification passed. Proceeding with bulk generation...")
        print("  This will take several hours.")

        for ep in range(1, 31):
            run_command(["python3", str(SCRIPT_DIR / "fast_video_generator.py"), "--episode", str(ep)])
    else:
        episode = args.episode
        if not episode:
            print("ERROR: Specify --episode N or --all")
            sys.exit(1)

        run_command(["python3", str(SCRIPT_DIR / "fast_video_generator.py"), "--episode", str(episode)])

        print(f"\n→ Episode {episode} video generated.")
        print(f"  Watch it: open {OUTPUT_DIR}/episode_{episode:02d}_video/*.mp4")
        print(f"  Then run: python pipeline.py verify --video --episode {episode}")


def cmd_upload(args):
    """Upload to YouTube."""
    state = load_state()

    if args.all:
        if not state.get("upload_verified"):
            print("\n✗ ERROR: Must verify single episode upload before bulk operation.")
            print("  Run: python pipeline.py upload --episode 1")
            print("  Then: python pipeline.py verify --upload")
            sys.exit(1)

        print("\n✓ Upload verification passed.")
        print("  WARNING: This will use significant YouTube API quota.")
        print("  Maximum ~5-6 uploads per day.")

        confirm = input("  Continue? [y/N]: ")
        if confirm.lower() != 'y':
            print("  Aborted.")
            return

        run_command(["python3", str(SCRIPT_DIR / "youtube_uploader.py"), "--all", "--force"])
    else:
        episode = args.episode
        if not episode:
            print("ERROR: Specify --episode N or --all")
            sys.exit(1)

        run_command(["python3", str(SCRIPT_DIR / "youtube_uploader.py"), "--episode", str(episode)])

        print(f"\n→ Episode {episode} uploaded.")
        print(f"  Check it on YouTube, then run: python pipeline.py verify --upload --episode {episode}")


def cmd_verify(args):
    """Verify a stage passed."""
    state = load_state()
    episode = args.episode or 1

    if args.render:
        # Check PNG dimensions
        png_path = ASSETS_DIR / f"episode_{episode:02d}" / "section_01.png"
        if not png_path.exists():
            print(f"✗ PNG not found: {png_path}")
            sys.exit(1)

        w, h = get_png_dimensions(png_path)
        print(f"PNG Dimensions: {w}x{h}")

        if w != EXPECTED_WIDTH or h != EXPECTED_HEIGHT:
            print(f"✗ Dimensions incorrect. Expected {EXPECTED_WIDTH}x{EXPECTED_HEIGHT}")
            print("  The render script needs to be fixed for proper viewport sizing.")

            confirm = input("  Accept anyway? [y/N]: ")
            if confirm.lower() != 'y':
                sys.exit(1)

        # Visual confirmation
        confirm = input("Did the slide look correct visually? [y/N]: ")
        if confirm.lower() != 'y':
            print("✗ Verification failed.")
            sys.exit(1)

        state["render_verified"] = True
        state["verified_episode"] = episode
        save_state(state)
        print("✓ Render verification passed.")

    elif args.video:
        video_dir = OUTPUT_DIR / f"episode_{episode:02d}_video"
        videos = list(video_dir.glob("*.mp4"))
        if not videos:
            print(f"✗ No video found in {video_dir}")
            sys.exit(1)

        video_path = videos[0]
        w, h = get_video_dimensions(video_path)
        print(f"Video Dimensions: {w}x{h}")

        confirm = input("Did the video look and sound correct? [y/N]: ")
        if confirm.lower() != 'y':
            print("✗ Verification failed.")
            sys.exit(1)

        state["video_verified"] = True
        state["verified_episode"] = episode
        save_state(state)
        print("✓ Video verification passed.")

    elif args.upload:
        confirm = input("Did the YouTube video look correct (quality, thumbnail, description)? [y/N]: ")
        if confirm.lower() != 'y':
            print("✗ Verification failed.")
            sys.exit(1)

        state["upload_verified"] = True
        state["verified_episode"] = episode
        save_state(state)
        print("✓ Upload verification passed.")

    else:
        print("Specify --render, --video, or --upload")


def cmd_reset(args):
    """Reset verification state."""
    state = load_state()

    if args.render:
        state["render_verified"] = False
    elif args.video:
        state["video_verified"] = False
    elif args.upload:
        state["upload_verified"] = False
    elif args.all_flags:
        state["render_verified"] = False
        state["video_verified"] = False
        state["upload_verified"] = False
        state["verified_episode"] = None

    save_state(state)
    print("✓ Verification state reset.")


def main():
    parser = argparse.ArgumentParser(description="YouTube Pipeline Manager")
    subparsers = parser.add_subparsers(dest="command", help="Commands")

    # Status
    subparsers.add_parser("status", help="Show pipeline status")

    # Checkpoint
    cp = subparsers.add_parser("checkpoint", help="Create git checkpoint")
    cp.add_argument("-m", "--message", help="Commit message")

    # Render
    render = subparsers.add_parser("render", help="Render slides to PNG")
    render.add_argument("--episode", "-e", type=int, help="Episode number")
    render.add_argument("--all", "-a", action="store_true", help="Render all")

    # Video
    video = subparsers.add_parser("video", help="Generate videos")
    video.add_argument("--episode", "-e", type=int, help="Episode number")
    video.add_argument("--all", "-a", action="store_true", help="Generate all")

    # Upload
    upload = subparsers.add_parser("upload", help="Upload to YouTube")
    upload.add_argument("--episode", "-e", type=int, help="Episode number")
    upload.add_argument("--all", "-a", action="store_true", help="Upload all")

    # Verify
    verify = subparsers.add_parser("verify", help="Verify stage passed")
    verify.add_argument("--render", action="store_true", help="Verify render")
    verify.add_argument("--video", action="store_true", help="Verify video")
    verify.add_argument("--upload", action="store_true", help="Verify upload")
    verify.add_argument("--episode", "-e", type=int, help="Episode verified")

    # Reset
    reset = subparsers.add_parser("reset", help="Reset verification state")
    reset.add_argument("--render", action="store_true")
    reset.add_argument("--video", action="store_true")
    reset.add_argument("--upload", action="store_true")
    reset.add_argument("--all", dest="all_flags", action="store_true")

    args = parser.parse_args()

    if args.command == "status":
        cmd_status(args)
    elif args.command == "checkpoint":
        cmd_checkpoint(args)
    elif args.command == "render":
        cmd_render(args)
    elif args.command == "video":
        cmd_video(args)
    elif args.command == "upload":
        cmd_upload(args)
    elif args.command == "verify":
        cmd_verify(args)
    elif args.command == "reset":
        cmd_reset(args)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
