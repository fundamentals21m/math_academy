#!/usr/bin/env python3
"""Episode 21 - Atlantis"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 21
EPISODE_TITLE = "Atlantis"

SECTIONS = {
    "01_cold_open": """Welcome to Part Three: A Is A.

There's an ancient legend about a perfect civilization that vanished beneath the waves. Atlantis—a society of wisdom and achievement that was lost to the world.

But what if Atlantis didn't sink? What if it withdrew? What if the best minds didn't perish but simply went somewhere else—somewhere the looters couldn't follow?

Dagny is about to discover that Atlantis is real. And it's hidden in the mountains of Colorado.""",

    "02_introduction": """Previously: The dollar sign. Symbol of free trade. Emblem of voluntary exchange. The strikers have chosen it as their banner—reclaiming what the looters despise.

Part Two ends with the lines clearly drawn. Welcome to Part Three: A Is A.

Part Three begins with a revelation.

Throughout the novel, Dagny has watched the best producers vanish. She's searched for them, chased rumors, followed traces. She's come closer and closer to the truth.

Now, through circumstances we'll explore, she finally arrives at the hidden valley where the strikers have built their refuge. The title "Atlantis" captures what she finds: a civilization of the mind, hidden from a world that would destroy it.

This is the answer to the mystery. This is where the vanishing producers have gone.""",

    "03_the_valley": """The valley is small—just a few square miles carved into the mountains. But what fills it is extraordinary.

Here are the people who disappeared. Ellis Wyatt, running an oil operation. The great composer Richard Halley, writing music. Midas Mulligan, the banker who vanished overnight. Dozens of others—scientists, artists, industrialists, philosophers—each the best in their field.

They live simply but not poorly. They've recreated, in miniature, everything a civilization needs: power, food, shelter, art. They trade with each other using gold, work for themselves, and answer to no one.

This is what the world lost. This is what the looters drove away. The best minds of a generation, gathered in one hidden place, waiting for the outside world to collapse.""",

    "04_the_principles": """Why do they stay hidden? Why not fight the looters directly?

Because fighting would mean using the same tools the looters use: force, coercion, political manipulation. The strikers have rejected those tools entirely. Their weapon is withdrawal—simply refusing to participate in a system designed to exploit them.

The valley operates on simple principles. No one may use force against another. No one may claim anything they haven't earned. No one may demand sacrifice from others.

These seem like minimal rules, but they create something remarkable: a society where achievement is rewarded, where excellence is admired, where the mind is free. The valley is what the outside world could be—if it chose to be.""",

    "05_closing": """Atlantis—the lost civilization—has been found.

It didn't sink beneath the waves. It rose above a drowning world. The best minds withdrew not in defeat but in refusal—refusing to serve those who despise them, refusing to create for those who only destroy.

Dagny has finally discovered what she's been seeking. The producers haven't perished. They've gathered. They're waiting. And they have a plan.

The man behind it all is here too. John Galt, no longer a question but an answer. In the episodes to come, she'll learn what he knows, understand what he's built, and face the hardest choice of her life.

Part Three is the revelation. Everything hidden will be made clear.

See you in the next episode."""
}

def generate_audio(text, section_name, api_key, output_dir):
    headers = {"Accept": "audio/mpeg", "Content-Type": "application/json", "xi-api-key": api_key}
    data = {"text": text, "model_id": "eleven_multilingual_v2", "voice_settings": VOICE_SETTINGS}
    response = requests.post(f"{ELEVENLABS_API_URL}/{VOICE_ID}", json=data, headers=headers)
    if response.status_code == 200:
        path = output_dir / f"Episode_{EPISODE_NUMBER:02d}_Section_{section_name}.mp3"
        with open(path, 'wb') as f: f.write(response.content)
        return path
    return None

def main():
    api_key = os.environ.get('ELEVENLABS_API_KEY')
    if not api_key: return print("ERROR: ELEVENLABS_API_KEY not set")
    output_dir = Path(f"episode_{EPISODE_NUMBER:02d}_audio")
    output_dir.mkdir(exist_ok=True)
    for i, (name, text) in enumerate(SECTIONS.items(), 1):
        generate_audio(text, name, api_key, output_dir)
        if i < len(SECTIONS): time.sleep(2)

if __name__ == "__main__": main()
