#!/usr/bin/env python3
"""
Enhanced Batch Audio Generator for Atlas Shrugged YouTube Series

Features:
- SSML markup for dramatic pacing
- Section-specific voice settings
- "Previously On..." recaps for episodes 2-30
- Automatic SRT caption generation
- Batch processing with rate limiting

Requirements:
    pip install requests openai-whisper

Usage:
    export ELEVENLABS_API_KEY='your-key'
    python batch_generator.py                    # Generate all episodes
    python batch_generator.py --episode 5        # Single episode
    python batch_generator.py --part 2           # All Part 2 episodes
    python batch_generator.py --captions-only    # Generate captions from existing audio
"""

import os
import sys
import json
import time
import argparse
from pathlib import Path
import requests

# Add parent directory for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from ssml_helpers import (
    add_pause, emphasize, slow_pace, dramatic_quote,
    format_cold_open, format_section_transition, format_key_insight,
    get_voice_settings, wrap_ssml
)

# =============================================================================
# CONFIGURATION
# =============================================================================

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"  # Antoni

# Output directories
BASE_DIR = Path(__file__).parent.parent
AUDIO_DIR = BASE_DIR / "audio_output"
CAPTIONS_DIR = BASE_DIR / "captions"

# =============================================================================
# PREVIOUSLY ON... RECAPS
# =============================================================================

RECAPS = {
    2: """Previously on Atlas Shrugged: We entered a world where the lights are going out. We met Dagny Taggart, fighting to keep civilization running. And we heard the question that haunts everyone: Who is John Galt?""",

    3: """Previously: Hank Rearden watched the first pour of his revolutionary metal—ten years of work made real. But instead of celebration, his family met his triumph with contempt. Achievement, it seems, is something to feel guilty about.""",

    4: """Previously: We saw the looters' conspiracy take shape. The Anti-dog-eat-dog Rule destroyed Dan Conway's railroad—all in the name of fairness. The pattern is becoming clear: use the law to punish success.""",

    5: """Previously: Francisco d'Anconia, once the greatest industrialist of his generation, now squanders his fortune on scandals. But why would a man of such ability choose destruction? What does he know that we don't?""",

    6: """Previously: At the Rearden party, Francisco dropped his mask and delivered the Money Speech—a philosophical defense of money as the root of all good, not evil. The intellectuals were stunned. Rearden was intrigued.""",

    7: """Previously: The State Science Institute attacked Rearden Metal—not because it's dangerous, but because Rearden succeeded without their permission. Even Dr. Stadler, a brilliant physicist, signed off on the false report.""",

    8: """Previously: The Equalization of Opportunity Bill passed. Wesley Mouch betrayed Rearden. And the pattern becomes undeniable: in this new world, success is not earned through ability, but through political connection.""",

    9: """Previously: Against all predictions of disaster, the John Galt Line's first run was a triumph. Dagny and Rearden rode the rails at unprecedented speed, proving that achievement is still possible—for now.""",

    10: """Previously: Dagny and Rearden discovered something their world tries to deny: that the mind and body are not enemies. That achievement in business and joy in living can exist together, without guilt.""",

    11: """Previously: Wyatt's Torch. Rather than surrender his oil fields to the looters, Ellis Wyatt set fire to everything he built and vanished—leaving behind a pillar of flame that will burn for years. Part One has ended in fire.""",

    12: """Welcome to Part Two: Either-Or. The world has changed since Wyatt's Torch. Producers vanish faster. The economy spirals. And somewhere, someone is recruiting the best minds for a purpose no one yet understands.""",

    13: """Previously: The aristocracy of pull has replaced the aristocracy of ability. Wesley Mouch, James Taggart, Orren Boyle—their power comes not from what they can create, but from who they know.""",

    14: """Previously: We saw white blackmail in action—guilt as a weapon. Are you successful? Feel guilty. Are you productive? Feel guilty. The looters can't match the producers in ability, so they attack through morality.""",

    15: """Previously: The sanction of the victim. Evil is powerless without the cooperation of the good. The producers enable their own exploitation by accepting guilt, obeying unjust laws, granting their sanction.""",

    16: """Previously: The economic account is overdrawn. Trains stop running, factories close, crops rot—not from external disaster, but from the absence of the minds that made everything work.""",

    17: """Previously: Rearden Metal, the miracle that could transform civilization, has been seized by the government. Not purchased, not traded—taken by decree. Because a miracle is too important to belong to one man.""",

    18: """Previously: The moratorium on brains. No new inventions, no new processes, no new products. Everything must stay as it is. Innovation itself has become illegal.""",

    19: """Previously: We explored what love reveals about our values. Do we seek partners who need us or who inspire us? The heroes of this story love strength. The villains seek weakness.""",

    20: """Previously: Dagny glimpsed a face without pain or fear or guilt—someone who has solved the problem of living. Part Two draws toward its climax. The answer is close.""",

    21: """Previously: The dollar sign. Symbol of free trade. Emblem of voluntary exchange. The strikers have chosen it as their banner. Part Two ends with the lines clearly drawn.""",

    22: """Welcome to Part Three: A Is A. Dagny has discovered Atlantis—the hidden valley where the best minds have gathered. The vanishing producers weren't destroyed. They withdrew.""",

    23: """Previously: We saw the valley in action—the utopia of greed. No taxes, no regulations, just one rule: no force. When people can only acquire things through trade, everyone's self-interest serves everyone else.""",

    24: """Previously: The outside world continues its descent into anti-greed—policies driven not by love of the poor, but by hatred of the successful. Envy disguised as compassion.""",

    25: """Previously: Anti-life. The looters' philosophy treats sacrifice as virtue and life as something to be surrendered. Their policies consistently destroy because destruction is their hidden goal.""",

    26: """Previously: Their brothers' keepers. Unlimited obligation. Need as a claim on life. We saw brotherhood pushed to its logical conclusion—and it looked like slavery.""",

    27: """Previously: The Concerto of Deliverance. Richard Halley's music, hidden from the world, finally heard. Art as liberation—the sound of a mind that has claimed its right to exist.""",

    28: """Previously: This is John Galt speaking. In a broadcast that interrupted every station, Galt laid out his philosophy. The morality of sacrifice is wrong. The strike will continue until the mind is respected.""",

    29: """Previously: The egoist. Rational self-interest as virtue. John Galt showed that selfishness—properly understood—is not a crime but a foundation for the good life.""",

    30: """Previously: The generator. John Galt's motor, abandoned in a ruined factory. He could have powered the world—but not under compulsion. Not for those who despise creation. The story nears its end."""
}

# =============================================================================
# EPISODE CONTENT (Enhanced with SSML)
# =============================================================================

def enhance_cold_open(text, episode_num):
    """Apply SSML enhancements to cold open."""
    # Add dramatic pauses after sentences
    text = text.replace('. ', f'.{add_pause(0.6)} ')
    text = text.replace('? ', f'?{add_pause(0.8)} ')
    text = text.replace('— ', f'—{add_pause(0.4)} ')
    text = text.replace('...', f'{add_pause(0.5)}...')

    # Emphasize quoted text
    import re
    text = re.sub(r'"([^"]+)"', lambda m: dramatic_quote(m.group(1)), text)

    return wrap_ssml(text)


def enhance_introduction(text, episode_num, include_recap=True):
    """Apply enhancements to introduction, optionally including recap."""
    result = ""

    # Add Previously On recap if applicable
    if include_recap and episode_num in RECAPS:
        recap = RECAPS[episode_num]
        result += f'{add_pause(0.5)}{slow_pace(recap)}{add_pause(1.5)}'

    result += text
    return wrap_ssml(result)


def enhance_main_content(text):
    """Apply subtle enhancements to main content."""
    # Add slight pauses at paragraph breaks
    text = text.replace('\n\n', f'\n\n{add_pause(0.8)}')

    # Emphasize key phrases (simple pattern matching)
    key_phrases = [
        "This is the key point",
        "Here's what's important",
        "Notice",
        "The core argument",
        "This means",
    ]
    for phrase in key_phrases:
        text = text.replace(phrase, format_key_insight(phrase))

    return wrap_ssml(text)


def enhance_closing(text):
    """Apply warm pacing to closing."""
    text = text.replace('\n\n', f'\n\n{add_pause(0.6)}')
    return wrap_ssml(text)


# =============================================================================
# AUDIO GENERATION
# =============================================================================

def generate_audio(text, section_name, section_type, api_key, output_dir, episode_num):
    """Generate audio with section-specific voice settings."""

    voice_settings = get_voice_settings(section_type)

    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": api_key
    }

    data = {
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": voice_settings
    }

    url = f"{ELEVENLABS_API_URL}/{VOICE_ID}"

    try:
        response = requests.post(url, json=data, headers=headers)

        if response.status_code == 200:
            output_path = output_dir / f"Episode_{episode_num:02d}_{section_name}.mp3"
            with open(output_path, 'wb') as f:
                f.write(response.content)
            return output_path
        else:
            print(f"  [ERROR] {section_name}: {response.status_code}")
            return None

    except Exception as e:
        print(f"  [ERROR] {section_name}: {str(e)}")
        return None


def generate_episode(episode_num, sections, api_key, include_recap=True):
    """Generate all audio for an episode."""

    output_dir = AUDIO_DIR / f"episode_{episode_num:02d}"
    output_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n{'='*60}")
    print(f"Episode {episode_num}")
    print(f"{'='*60}")

    generated_files = []

    for i, (section_name, text) in enumerate(sections.items()):
        # Determine section type and apply enhancements
        if "cold_open" in section_name:
            section_type = "cold_open"
            text = enhance_cold_open(text, episode_num)
        elif "introduction" in section_name:
            section_type = "introduction"
            text = enhance_introduction(text, episode_num, include_recap)
        elif "closing" in section_name:
            section_type = "closing"
            text = enhance_closing(text)
        else:
            section_type = "main_content"
            text = enhance_main_content(text)

        print(f"  Generating {section_name} ({section_type})...")

        output_path = generate_audio(
            text, section_name, section_type,
            api_key, output_dir, episode_num
        )

        if output_path:
            generated_files.append(output_path)
            print(f"    [OK] {output_path.name}")

        # Rate limiting
        if i < len(sections) - 1:
            time.sleep(2)

    return generated_files


# =============================================================================
# CAPTION GENERATION
# =============================================================================

def generate_srt_from_audio(audio_path, output_path):
    """Generate SRT captions from audio using Whisper."""
    try:
        import whisper

        model = whisper.load_model("base")
        result = model.transcribe(str(audio_path))

        # Convert to SRT format
        srt_content = ""
        for i, segment in enumerate(result["segments"], 1):
            start = format_timestamp(segment["start"])
            end = format_timestamp(segment["end"])
            text = segment["text"].strip()

            srt_content += f"{i}\n"
            srt_content += f"{start} --> {end}\n"
            srt_content += f"{text}\n\n"

        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'w') as f:
            f.write(srt_content)

        return output_path

    except ImportError:
        print("  [WARN] whisper not installed. Run: pip install openai-whisper")
        return None
    except Exception as e:
        print(f"  [ERROR] Caption generation failed: {e}")
        return None


def format_timestamp(seconds):
    """Convert seconds to SRT timestamp format."""
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    millis = int((seconds % 1) * 1000)
    return f"{hours:02d}:{minutes:02d}:{secs:02d},{millis:03d}"


def generate_captions_for_episode(episode_num):
    """Generate SRT captions for all audio files in an episode."""
    audio_dir = AUDIO_DIR / f"episode_{episode_num:02d}"

    if not audio_dir.exists():
        print(f"No audio found for episode {episode_num}")
        return []

    caption_dir = CAPTIONS_DIR / f"episode_{episode_num:02d}"
    caption_dir.mkdir(parents=True, exist_ok=True)

    generated = []
    for audio_file in sorted(audio_dir.glob("*.mp3")):
        srt_path = caption_dir / f"{audio_file.stem}.srt"
        print(f"  Generating captions for {audio_file.name}...")

        result = generate_srt_from_audio(audio_file, srt_path)
        if result:
            generated.append(result)
            print(f"    [OK] {srt_path.name}")

    return generated


# =============================================================================
# MAIN
# =============================================================================

def main():
    parser = argparse.ArgumentParser(description="Enhanced audio generator for Atlas Shrugged")
    parser.add_argument("--episode", "-e", type=int, help="Generate specific episode")
    parser.add_argument("--part", "-p", type=int, choices=[1, 2, 3], help="Generate all episodes in part")
    parser.add_argument("--captions-only", action="store_true", help="Only generate captions from existing audio")
    parser.add_argument("--no-recap", action="store_true", help="Skip Previously On recaps")

    args = parser.parse_args()

    # Determine which episodes to process
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

    if args.captions_only:
        print("Generating captions from existing audio...")
        for ep in episodes:
            print(f"\nEpisode {ep}:")
            generate_captions_for_episode(ep)
        return

    # Check for API key
    api_key = os.environ.get('ELEVENLABS_API_KEY')
    if not api_key:
        print("ERROR: ELEVENLABS_API_KEY environment variable not set")
        print("Usage: export ELEVENLABS_API_KEY='your-key' && python batch_generator.py")
        return

    print("="*60)
    print("Atlas Shrugged Enhanced Audio Generator")
    print("="*60)
    print(f"Episodes to generate: {list(episodes)}")
    print(f"Include recaps: {not args.no_recap}")
    print()

    # Note: This script needs the SECTIONS data from individual episode generators
    # In production, you would import or load these from the episode_XX_production folders
    print("NOTE: This batch generator requires episode section data.")
    print("Import sections from individual episode generators or provide section data.")
    print()
    print("Example usage for single episode with existing generator:")
    print("  1. Run individual episode generator: python elevenlabs_generator_epXX.py")
    print("  2. Then generate captions: python batch_generator.py --captions-only --episode XX")


if __name__ == "__main__":
    main()
