#!/usr/bin/env python3
"""Episode 23 - Anti-Greed"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 23
EPISODE_TITLE = "Anti-Greed"

SECTIONS = {
    "01_cold_open": """The opposite of greed is supposed to be generosity—giving without expecting return, sacrificing yourself for others.

But there's another opposite of greed. It's the desire to see others fail. The resentment of success. The hatred of anyone who has more than you.

This isn't generosity. It's envy. And envy, dressed up as compassion, is destroying the world outside the valley.""",

    "02_introduction": """Previously: We saw the valley in action—the so-called utopia of greed. No taxes, no regulations, no bureaucracy. Just one rule: no one initiates force against another.

When people can only acquire things through trade, everyone's self-interest serves everyone else. Greed builds paradise.

Welcome back to Atlas Shrugged. In our last episode, we saw how the valley's "greedy" inhabitants built a functional paradise.

Today we return to the outside world and see what "anti-greed" looks like in practice. The chapter shows us a society that has rejected self-interest—and what it's become.

Spoiler: it's not generous. It's not kind. It's not compassionate. It's a war of all against all, fought with the weapons of guilt and need.""",

    "03_the_outside_world": """While Dagny explores the valley, the outside world continues its collapse.

Factories are closing not because of lack of demand but because of lack of permission. Regulations have made it impossible to produce efficiently. Anyone who tries to innovate is crushed by bureaucracy.

The rhetoric is all about sharing and fairness. The reality is scarcity and favoritism. The "anti-greedy" society has less of everything—less food, less energy, less hope.

But the shortages aren't distributed equally. Those with political connections still eat well. Those who know the right people still get what they need. The anti-greed policies haven't eliminated greed—they've just made it criminal instead of productive.

Now, instead of earning wealth by creating value, people earn it by manipulating the system. The greedy producer has been replaced by the greedy bureaucrat.""",

    "04_the_psychology_of_envy": """Why do people support policies that make everyone poorer?

Because they're not trying to make themselves richer. They're trying to make others poorer.

This is the psychology of envy: it's not about having more, it's about others having less. If I can't be wealthy, no one should be. If I can't succeed, success should be banned. If I can't create, creation should be punished.

The anti-greed movement isn't motivated by love of the poor. It's motivated by hatred of the rich. It doesn't want to lift anyone up—it wants to tear everyone down.

That's why anti-greed policies fail. They're not designed to produce prosperity. They're designed to prevent it. Their goal isn't abundance—it's equality of misery.""",

    "05_closing": """Anti-Greed reveals the dark heart of the looters' philosophy.

They don't want to help the poor—they want to punish the successful. They don't love the masses—they hate the achievers. Their compassion is a mask for envy, their generosity a cover for theft.

The valley embodies honest greed—the desire to improve your own life through production and trade. The outside world embodies dishonest greed—the desire to improve your position by destroying others.

One creates wealth. The other destroys it. One leads to abundance. The other leads to the scenes we're witnessing: a civilization eating itself, calling its suicide a virtue.

The contrast could not be clearer. Greed that produces versus envy that destroys. The valley versus the ruins.

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
