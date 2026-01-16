#!/usr/bin/env python3
"""Episode 22 - The Utopia of Greed"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 22
EPISODE_TITLE = "The Utopia of Greed"

SECTIONS = {
    "01_cold_open": """They call it greed—wanting to keep what you've earned, wanting payment for your work, wanting to trade value for value.

But what if "greed" just means refusing to be sacrificed? What if it means insisting that your life belongs to you?

The valley shows what happens when "greedy" people build a society. And it looks nothing like what the looters predicted.""",

    "02_introduction": """Welcome to Part Three. Dagny has discovered Atlantis—the hidden valley where the best minds have gathered. The vanishing producers weren't destroyed. They withdrew.

Ellis Wyatt runs an oil operation. Richard Halley writes music. Midas Mulligan has built a bank. The best of a generation, waiting.

Welcome back to Atlas Shrugged. In our last episode, Dagny discovered the hidden valley where the producers have gathered.

Today we explore how that valley functions. The title "The Utopia of Greed" is ironic—it's what the looters would call this place. A society of selfish people, each pursuing their own interest, with no mandatory sacrifice to the collective.

According to conventional wisdom, such a society should be hell. In reality, it's paradise.""",

    "03_how_the_valley_works": """The valley has no government in the traditional sense. No taxes, no regulations, no bureaucracy. Just one rule: no one initiates force against another.

How does anything get done without coercion?

Through trade. The inhabitants exchange goods and services voluntarily. If you want something, you offer something in return. Prices are set by agreement between buyer and seller. There's no central authority determining who gets what.

The result isn't chaos—it's harmony. When people can only acquire things through trade, they must produce things others want. Everyone's self-interest aligns with everyone else's. Your "greed" motivates you to serve others, because serving others is how you get what you want.

This is the secret the looters never understood: free trade transforms self-interest into mutual benefit.""",

    "04_the_moral_dimension": """But the valley isn't just economically efficient—it's morally different.

In the outside world, achievement is punished. Success invites envy, regulation, confiscation. The message is clear: don't stand out, don't excel, don't try too hard.

In the valley, achievement is celebrated. When someone creates something valuable, others don't resent it—they admire it. They buy it, learn from it, try to match it. Success inspires more success.

This changes everything about how people feel. In the valley, there's no guilt about prosperity, no shame about ambition, no apology for excellence. People walk with their heads high because they know they've earned their place.

The utopia of greed is actually a utopia of pride—the proper pride of people who live by their own effort and owe nothing to anyone except what they've agreed to pay.""",

    "05_closing": """The Utopia of Greed reveals a profound truth about human society.

Greed—in the sense of wanting to benefit yourself—isn't the problem. It's the solution. When people are free to pursue their self-interest through trade, they create wealth, solve problems, and serve each other.

The real problem is force—the ability to take without trading, to benefit at others' expense, to acquire through politics what you couldn't earn through production.

The valley has eliminated force. What remains is greed—and greed builds paradise.

This is the model John Galt offers to the world. Not a system of perfect people, but a system that turns imperfect people toward productive ends. Not the abolition of self-interest, but its proper channeling through voluntary exchange.

The looters said it couldn't work. The valley proves them wrong.

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
