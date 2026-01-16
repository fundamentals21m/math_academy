#!/usr/bin/env python3
"""
SRT Caption Generator for Atlas Shrugged YouTube Series

Generates closed caption files from audio using OpenAI Whisper.
Supports batch processing of all episodes.

Requirements:
    pip install openai-whisper torch

Usage:
    python generate_captions.py                    # All episodes
    python generate_captions.py --episode 5        # Single episode
    python generate_captions.py --from-text        # Generate from script text (no audio needed)
"""

import os
import argparse
from pathlib import Path
from datetime import timedelta


def format_srt_timestamp(seconds):
    """Convert seconds to SRT timestamp format (HH:MM:SS,mmm)."""
    td = timedelta(seconds=seconds)
    hours = int(td.total_seconds() // 3600)
    minutes = int((td.total_seconds() % 3600) // 60)
    secs = int(td.total_seconds() % 60)
    millis = int((td.total_seconds() % 1) * 1000)
    return f"{hours:02d}:{minutes:02d}:{secs:02d},{millis:03d}"


def transcribe_audio_whisper(audio_path):
    """Transcribe audio file using Whisper."""
    try:
        import whisper

        print(f"  Loading Whisper model...")
        model = whisper.load_model("base")

        print(f"  Transcribing {audio_path.name}...")
        result = model.transcribe(str(audio_path), language="en")

        return result["segments"]

    except ImportError:
        print("ERROR: whisper not installed")
        print("Install with: pip install openai-whisper torch")
        return None


def segments_to_srt(segments):
    """Convert Whisper segments to SRT format."""
    srt_lines = []

    for i, segment in enumerate(segments, 1):
        start = format_srt_timestamp(segment["start"])
        end = format_srt_timestamp(segment["end"])
        text = segment["text"].strip()

        srt_lines.append(f"{i}")
        srt_lines.append(f"{start} --> {end}")
        srt_lines.append(text)
        srt_lines.append("")

    return "\n".join(srt_lines)


def text_to_estimated_srt(text, words_per_minute=150):
    """
    Generate estimated SRT from script text.
    Useful when audio hasn't been generated yet.
    """
    words = text.split()
    total_words = len(words)
    total_seconds = (total_words / words_per_minute) * 60

    # Split into ~5 second segments
    segment_duration = 5.0
    words_per_segment = int((words_per_minute / 60) * segment_duration)

    segments = []
    current_time = 0.0

    for i in range(0, len(words), words_per_segment):
        segment_words = words[i:i + words_per_segment]
        segment_text = " ".join(segment_words)

        segments.append({
            "start": current_time,
            "end": current_time + segment_duration,
            "text": segment_text
        })

        current_time += segment_duration

    return segments_to_srt(segments)


def generate_captions_for_episode(episode_num, audio_dir, output_dir):
    """Generate SRT files for all audio in an episode."""

    episode_audio_dir = audio_dir / f"episode_{episode_num:02d}_audio"

    if not episode_audio_dir.exists():
        # Try alternative naming
        episode_audio_dir = audio_dir / f"episode_{episode_num:02d}_production" / f"episode_{episode_num:02d}_audio"

    if not episode_audio_dir.exists():
        print(f"  No audio directory found for episode {episode_num}")
        return []

    episode_caption_dir = output_dir / f"episode_{episode_num:02d}"
    episode_caption_dir.mkdir(parents=True, exist_ok=True)

    generated = []
    audio_files = sorted(episode_audio_dir.glob("*.mp3"))

    if not audio_files:
        print(f"  No MP3 files found in {episode_audio_dir}")
        return []

    for audio_file in audio_files:
        print(f"  Processing: {audio_file.name}")

        segments = transcribe_audio_whisper(audio_file)

        if segments:
            srt_content = segments_to_srt(segments)
            srt_path = episode_caption_dir / f"{audio_file.stem}.srt"

            with open(srt_path, 'w', encoding='utf-8') as f:
                f.write(srt_content)

            print(f"    Created: {srt_path.name}")
            generated.append(srt_path)

    return generated


def generate_combined_srt(episode_num, audio_dir, output_dir):
    """Generate a single combined SRT for the full episode."""

    episode_audio_dir = audio_dir / f"episode_{episode_num:02d}_audio"

    if not episode_audio_dir.exists():
        episode_audio_dir = audio_dir / f"episode_{episode_num:02d}_production" / f"episode_{episode_num:02d}_audio"

    if not episode_audio_dir.exists():
        return None

    all_segments = []
    current_offset = 0.0

    audio_files = sorted(episode_audio_dir.glob("*.mp3"))

    for audio_file in audio_files:
        segments = transcribe_audio_whisper(audio_file)

        if segments:
            # Get duration of this audio file
            try:
                from mutagen.mp3 import MP3
                audio = MP3(str(audio_file))
                duration = audio.info.length
            except:
                # Estimate from last segment
                duration = segments[-1]["end"] if segments else 0

            # Offset segments
            for seg in segments:
                all_segments.append({
                    "start": seg["start"] + current_offset,
                    "end": seg["end"] + current_offset,
                    "text": seg["text"]
                })

            current_offset += duration + 0.5  # Small gap between sections

    if all_segments:
        srt_content = segments_to_srt(all_segments)
        output_dir.mkdir(parents=True, exist_ok=True)
        srt_path = output_dir / f"episode_{episode_num:02d}_full.srt"

        with open(srt_path, 'w', encoding='utf-8') as f:
            f.write(srt_content)

        print(f"  Created combined: {srt_path.name}")
        return srt_path

    return None


def main():
    parser = argparse.ArgumentParser(description="Generate SRT captions for Atlas Shrugged")
    parser.add_argument("--episode", "-e", type=int, help="Generate for specific episode")
    parser.add_argument("--part", "-p", type=int, choices=[1, 2, 3], help="Generate for all episodes in part")
    parser.add_argument("--combined", "-c", action="store_true", help="Create combined SRT per episode")
    parser.add_argument("--audio-dir", default="../", help="Base directory containing episode audio")
    parser.add_argument("--output-dir", default=".", help="Output directory for SRT files")

    args = parser.parse_args()

    audio_dir = Path(args.audio_dir)
    output_dir = Path(args.output_dir)

    # Determine episodes to process
    if args.episode:
        episodes = [args.episode]
    elif args.part:
        if args.part == 1:
            episodes = range(1, 11)
        elif args.part == 2:
            episodes = range(11, 21)
        else:
            episodes = range(21, 31)
    else:
        episodes = range(1, 31)

    print("=" * 60)
    print("Atlas Shrugged Caption Generator")
    print("=" * 60)
    print(f"Audio directory: {audio_dir.absolute()}")
    print(f"Output directory: {output_dir.absolute()}")
    print(f"Episodes: {list(episodes)}")
    print()

    total_generated = 0

    for ep_num in episodes:
        print(f"\nEpisode {ep_num}:")

        if args.combined:
            result = generate_combined_srt(ep_num, audio_dir, output_dir)
            if result:
                total_generated += 1
        else:
            results = generate_captions_for_episode(ep_num, audio_dir, output_dir)
            total_generated += len(results)

    print()
    print("=" * 60)
    print(f"Generated {total_generated} caption file(s)")
    print("=" * 60)


if __name__ == "__main__":
    main()
