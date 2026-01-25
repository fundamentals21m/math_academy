#!/usr/bin/env python3
"""
Voice Testing Script for BFI YouTube Series

Generates the Episode 1 cold open with 5 different ElevenLabs voices
to help choose the best narrator voice for the series.

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python voice_test.py
"""

import os
import time
import requests
from pathlib import Path

# =============================================================================
# VOICE RECOMMENDATIONS
# =============================================================================
# These voices are well-suited for professional documentary/educational content

VOICES = {
    "Josh": {
        "id": "TxGEqnHWrfWFTfGW9XjX",
        "description": "Deep American male. News anchor quality. Confident and clear.",
        "style": "Corporate presenter"
    },
    "Arnold": {
        "id": "VR6AewLTigWG4xSOukaG",
        "description": "Crisp American male. Authoritative, boardroom presence.",
        "style": "Executive briefing"
    },
    "Sam": {
        "id": "yoZ06aMxZJJ28mfd3POQ",
        "description": "Professional American male. Warm but serious. Trustworthy.",
        "style": "Financial advisor"
    },
    "Patrick": {
        "id": "ODq5zmih8GrVes37Dizd",
        "description": "Mature American male. Measured pace. Thought leader style.",
        "style": "Industry expert"
    },
}

# Voice settings optimized for narration
VOICE_SETTINGS = {
    "stability": 0.65,
    "similarity_boost": 0.80,
    "style": 0.35,
    "use_speaker_boost": True
}

# The cold open text from Episode 1
COLD_OPEN_TEXT = """"When the money used by the world is hard to make and easy to validate, it becomes an exceptional tool for capital accumulation, coordination of trade, and generally aligning the incentives of spenders, savers, entrepreneurs, and planners."

This is the promise of Bitcoin. But can institutions capture this promise? That's the question this series will answer.

Welcome to Bitcoin for Institutions."""

# =============================================================================
# API CONFIGURATION
# =============================================================================

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
OUTPUT_DIR = Path(__file__).parent / "voice_samples"


def generate_audio(voice_name: str, voice_id: str, text: str) -> Path | None:
    """Generate audio for a single voice."""

    api_key = os.environ.get('ELEVENLABS_API_KEY')
    if not api_key:
        print("ERROR: ELEVENLABS_API_KEY not set")
        return None

    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": api_key
    }

    data = {
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": VOICE_SETTINGS
    }

    url = f"{ELEVENLABS_API_URL}/{voice_id}"

    try:
        print(f"  Generating with {voice_name}...")
        response = requests.post(url, json=data, headers=headers, timeout=60)

        if response.status_code == 200:
            output_path = OUTPUT_DIR / f"Episode_01_Section_01_cold_open_{voice_name}.mp3"
            with open(output_path, 'wb') as f:
                f.write(response.content)

            file_size = output_path.stat().st_size / 1024
            print(f"  ✓ {voice_name}: {output_path.name} ({file_size:.1f} KB)")
            return output_path

        elif response.status_code == 401:
            print(f"  ✗ {voice_name}: Invalid API key")
        elif response.status_code == 429:
            print(f"  ✗ {voice_name}: Rate limited - wait and try again")
        else:
            print(f"  ✗ {voice_name}: Error {response.status_code}")

    except Exception as e:
        print(f"  ✗ {voice_name}: {e}")

    return None


def main():
    print("=" * 60)
    print("BFI YouTube Series - Voice Testing")
    print("=" * 60)
    print()
    print("Generating Episode 1 cold open with 5 different voices...")
    print()

    # Show voice descriptions
    print("Voice Options:")
    print("-" * 60)
    for name, info in VOICES.items():
        print(f"  {name:10} - {info['style']}")
        print(f"             {info['description']}")
        print()
    print("-" * 60)
    print()

    # Create output directory
    OUTPUT_DIR.mkdir(exist_ok=True)

    # Generate samples
    print("Generating audio samples...")
    print()

    generated = []
    for voice_name, voice_info in VOICES.items():
        result = generate_audio(voice_name, voice_info["id"], COLD_OPEN_TEXT)
        if result:
            generated.append((voice_name, result))

        # Small delay between API calls
        time.sleep(1)

    # Summary
    print()
    print("=" * 60)
    print(f"Generated {len(generated)}/{len(VOICES)} voice samples")
    print("=" * 60)
    print()
    print(f"Output directory: {OUTPUT_DIR}")
    print()
    print("Files created:")
    for name, path in generated:
        print(f"  - {path.name}")
    print()
    print("Listen to each sample and choose your preferred voice!")
    print("Then update VOICE_ID in config.py and audio_generator.py")


if __name__ == "__main__":
    main()
