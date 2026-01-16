#!/usr/bin/env python3
"""Episode 29 - The Generator"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 29
EPISODE_TITLE = "The Generator"

SECTIONS = {
    "01_cold_open": """There's a motor in an abandoned factory. A motor that runs on static electricity drawn from the atmosphere—inexhaustible, revolutionary, impossible.

Dagny found it early in her search. A machine that could power the world, left to rust by someone who walked away.

Now she knows who built it. And she understands why he left it behind.

The generator tells us everything about the mind that created it—and the world that destroyed him.""",

    "02_introduction": """Previously: The egoist. Rational self-interest as virtue—not the petty grabbing of desires, but the systematic philosophy of self-value.

John Galt showed that selfishness, properly understood, is not a crime but the foundation of the good life.

Welcome back to Atlas Shrugged. In our last episode, we explored rational selfishness as the novel's core virtue.

Today we return to one of the book's most powerful symbols: the motor. The title "The Generator" has a double meaning. It refers to the revolutionary engine John Galt invented—and to Galt himself, the mind that generates the ideas and values driving the strike.

This chapter brings together the novel's themes of mind, achievement, and withdrawal.""",

    "03_the_motor": """John Galt built a motor that could transform civilization.

Free energy from the atmosphere. No fuel costs. No pollution. Unlimited power for everyone.

He built it at the Twentieth Century Motor Company, working in obscurity, driven by the pure joy of solving an impossible problem. He was young, brilliant, idealistic—a man who believed his achievement would be celebrated.

Then the factory's owners died, and their heirs took over. They implemented a new policy: from each according to his ability, to each according to his need. The harder you worked, the less you kept. The more capable you were, the more you owed.

Galt saw immediately what this meant. His motor—his creation, his achievement, his child—would be seized. Not purchased or traded for, but taken. Because he could create it and others couldn't, he owed it to them.

He refused. He quit on the spot, walked away from his invention, and left it to rust. If they wanted the products of ability, they could have them—without the ability that produced them.""",

    "04_the_meaning": """The motor represents what the world has lost by punishing achievement.

Think of what that technology could have meant. Cheap energy for everyone. An end to scarcity. Material prosperity beyond imagination.

All of it abandoned because the men who controlled it decided that creators don't deserve their creations. Because they taught the world that achievement is exploitation and ability is debt.

Galt didn't destroy the motor out of spite. He left it because he refused to be a slave. If his work belonged to others simply because they needed it, then he would stop working. Let them generate their own miracles.

The motor rusting in the factory is a monument to everything collectivism destroys. Not just the physical invention, but the spirit that created it—the joy of solving problems, the pride of achievement, the reward of success. Kill that spirit, and the motors stop.""",

    "05_closing": """The Generator—Galt's motor and Galt himself—represents the source of all human progress.

The mind that sees a problem and imagines a solution. The will that perseveres through failure after failure. The integrity that refuses to produce under compulsion.

This is what the world abandoned when it declared war on achievement. This is what the looters cannot replace no matter how many directives they issue. This is what makes civilization possible—and what makes its destruction certain once the generators withdraw.

The motor sits in the factory, proof of what could have been. A technology that would have changed everything, left to rot because its creator was told he didn't deserve to control it.

John Galt walks free in the valley, having chosen his own life over service to those who despise him. He could power the world—but only if the world acknowledges his right to exist.

Until then, the generator remains silent.

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
