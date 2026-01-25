#!/usr/bin/env python3
"""
Caption Generator for BFI YouTube Series

Uses OpenAI Whisper to transcribe audio and generate SRT subtitle files.

Requirements:
    pip install openai-whisper

Usage:
    python generate_captions.py --episode 1     # Generate for specific episode
    python generate_captions.py --all           # Generate for all episodes
"""

import argparse
import sys
from pathlib import Path
from datetime import timedelta

# Add parent directory to path for config import
sys.path.insert(0, str(Path(__file__).parent.parent))

from config import EPISODES, OUTPUT_DIR, PROJECT_DIR, TOTAL_EPISODES

# Paths
CAPTIONS_DIR = PROJECT_DIR / "captions"


def format_timestamp(seconds: float) -> str:
    """Convert seconds to SRT timestamp format (HH:MM:SS,mmm)."""
    td = timedelta(seconds=seconds)
    hours, remainder = divmod(td.total_seconds(), 3600)
    minutes, secs = divmod(remainder, 60)
    milliseconds = int((secs % 1) * 1000)
    return f"{int(hours):02d}:{int(minutes):02d}:{int(secs):02d},{milliseconds:03d}"


def transcribe_audio(audio_path: Path, model_name: str = "base") -> dict:
    """
    Transcribe audio file using Whisper.

    Args:
        audio_path: Path to audio file
        model_name: Whisper model size (tiny, base, small, medium, large)

    Returns:
        Whisper result dict with segments
    """
    try:
        import whisper
    except ImportError:
        print("ERROR: whisper not installed. Run: pip install openai-whisper")
        sys.exit(1)

    print(f"Loading Whisper model '{model_name}'...")
    model = whisper.load_model(model_name)

    print(f"Transcribing: {audio_path.name}")
    result = model.transcribe(
        str(audio_path),
        language="en",
        verbose=False
    )

    return result


def generate_srt(segments: list, output_path: Path):
    """
    Generate SRT file from Whisper segments.

    Args:
        segments: List of segment dicts with 'start', 'end', 'text'
        output_path: Path to write SRT file
    """
    with open(output_path, 'w', encoding='utf-8') as f:
        for i, segment in enumerate(segments, 1):
            start = format_timestamp(segment['start'])
            end = format_timestamp(segment['end'])
            text = segment['text'].strip()

            f.write(f"{i}\n")
            f.write(f"{start} --> {end}\n")
            f.write(f"{text}\n")
            f.write("\n")

    print(f"Generated: {output_path}")


def generate_episode_captions(episode_num: int, model_name: str = "base"):
    """
    Generate captions for a specific episode.

    Args:
        episode_num: Episode number
        model_name: Whisper model to use
    """
    if episode_num not in EPISODES:
        print(f"Episode {episode_num} not found in config")
        return None

    # Find the complete audio file
    audio_dir = PROJECT_DIR / f"episode_{episode_num:02d}_production" / f"episode_{episode_num:02d}_audio"
    complete_audio = audio_dir / f"Episode_{episode_num:02d}_Complete.mp3"

    if not complete_audio.exists():
        # Try to find any complete audio
        candidates = list(audio_dir.glob("*Complete*.mp3"))
        if candidates:
            complete_audio = candidates[0]
        else:
            print(f"ERROR: No complete audio found for Episode {episode_num}")
            print(f"Expected: {complete_audio}")
            return None

    # Create captions directory
    CAPTIONS_DIR.mkdir(parents=True, exist_ok=True)

    # Transcribe
    result = transcribe_audio(complete_audio, model_name)

    # Generate SRT
    output_path = CAPTIONS_DIR / f"episode_{episode_num:02d}.srt"
    generate_srt(result['segments'], output_path)

    # Also save full transcript as text
    transcript_path = CAPTIONS_DIR / f"episode_{episode_num:02d}_transcript.txt"
    with open(transcript_path, 'w', encoding='utf-8') as f:
        f.write(result['text'])
    print(f"Transcript: {transcript_path}")

    return output_path


def generate_all_captions(model_name: str = "base"):
    """Generate captions for all episodes."""
    CAPTIONS_DIR.mkdir(parents=True, exist_ok=True)

    for ep_num in range(1, TOTAL_EPISODES + 1):
        print(f"\n{'='*50}")
        print(f"Episode {ep_num}/{TOTAL_EPISODES}")
        print(f"{'='*50}")

        try:
            generate_episode_captions(ep_num, model_name)
        except Exception as e:
            print(f"ERROR: Failed to generate captions for Episode {ep_num}: {e}")

    print(f"\nAll captions saved to: {CAPTIONS_DIR}")


def main():
    parser = argparse.ArgumentParser(
        description="Generate SRT captions using Whisper",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Whisper models (larger = more accurate, slower):
  --model tiny      Fastest, least accurate (~1GB VRAM)
  --model base      Good balance (default)
  --model small     Better accuracy
  --model medium    High accuracy
  --model large     Best accuracy (~10GB VRAM)

Examples:
  python generate_captions.py --episode 1
  python generate_captions.py --episode 1 --model medium
  python generate_captions.py --all
"""
    )

    parser.add_argument("--episode", "-e", type=int, help="Generate for specific episode")
    parser.add_argument("--all", "-a", action="store_true", help="Generate for all episodes")
    parser.add_argument("--model", "-m", default="base",
                        choices=["tiny", "base", "small", "medium", "large"],
                        help="Whisper model size (default: base)")

    args = parser.parse_args()

    if args.episode:
        generate_episode_captions(args.episode, args.model)
    elif args.all:
        generate_all_captions(args.model)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
