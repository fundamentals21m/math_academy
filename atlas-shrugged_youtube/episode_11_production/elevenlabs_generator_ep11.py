#!/usr/bin/env python3
"""Episode 11 - The Man Who Belonged on Earth"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 11
EPISODE_TITLE = "The Man Who Belonged on Earth"

SECTIONS = {
    "01_cold_open": """Welcome to Part Two: Either-Or.

The world has changed since Wyatt's Torch. The producers are disappearing faster now. The economy spirals downward. And somewhere, someone is recruiting the best minds for a purpose no one yet understands.

Today we meet a scientist who creates revolutionary technology—and face the choice that confronts everyone in this world: either produce, or loot. Either think, or evade. There is no middle ground.""",

    "02_introduction": """Previously: Wyatt's Torch. Rather than surrender his oil fields to the looters, Ellis Wyatt set fire to everything he built and vanished. He left behind a pillar of flame that will burn for years, and a note: "I am leaving it as I found it. Take over. It's yours."

Part One has ended in fire. Welcome to Part Two: Either-Or.

In Part One, we watched the world decline as capable people vanished. We saw the John Galt Line's triumph and Wyatt's fiery departure.

Part Two, "Either-Or," intensifies the conflict. The title comes from the law of excluded middle—a thing is either A or not-A. In this section, characters must choose sides. Either you stand with the producers or with the looters. Either you use your mind or you surrender it.

The opening chapter introduces revolutionary technology and asks: who truly belongs on earth—those who create, or those who consume?""",

    "03_the_scientist": """We meet a brilliant scientist whose work could transform the world—technology that seems almost impossible, yet functions.

This man represents what human achievement can accomplish when the mind is free. His inventions work not by magic but by the application of reason to reality. He has discovered principles that others said were impossible, built machines that others said could not exist.

But in a world that punishes achievement, what happens to such a man? Where does genius go when genius itself becomes a crime?""",

    "04_the_choice": """The chapter presents the fundamental choice facing everyone in this world.

The looters offer safety through submission. Surrender your judgment, follow the collective, ask permission for every action—and you can survive. Perhaps.

The producers offer something else: freedom and its consequences. Use your mind, create value, live by your own judgment—and face the full force of a system designed to destroy you.

There is no compromise. You cannot half-think. You cannot partially produce. Either you are a creator or a parasite. Either you move the world or you cling to it.

This is the meaning of "Either-Or."  """,

    "05_closing": """Part Two begins with a question: Who belongs on earth?

The scientist who creates revolutionary technology belongs here—his mind shaped the world to serve human purposes. The looters who seize his work without understanding it are aliens on their own planet, unable to survive without those they despise.

As the novel progresses, we'll see more characters face the fundamental choice. We'll watch the aristocracy of pull replace the aristocracy of ability. We'll see guilt used as a weapon and victims grant sanction to their destroyers.

The producers are learning a new response: withdrawal. If society will not let them create, they will stop creating—and let the looters discover what that means.

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
