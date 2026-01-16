#!/usr/bin/env python3
"""Episode 25 - Their Brothers' Keepers"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 25
EPISODE_TITLE = "Their Brothers' Keepers"

SECTIONS = {
    "01_cold_open": """Am I my brother's keeper?

The question is ancient, asked by Cain after murdering Abel. The expected answer is yes—we are responsible for each other, obligated to care for one another.

But what does that obligation mean in practice? And what happens when "keeping" your brother means sacrificing yourself?

This chapter shows us brotherhood pushed to its logical conclusion—and it's not pretty.""",

    "02_introduction": """Previously: Anti-life. The looters' philosophy treats sacrifice as virtue and life as something to be surrendered. Suffering is redemptive. Happiness is suspicious.

Their policies consistently destroy because destruction—sacrifice—is their hidden goal.

Welcome back to Atlas Shrugged. In our last episode, we examined the anti-life philosophy underlying the looters' worldview.

Today we see that philosophy in action through the concept of brotherhood. The title "Their Brothers' Keepers" refers to the idea that we owe an unlimited obligation to others—that their needs are claims on our lives.

Sounds compassionate. In practice, it's slavery.""",

    "03_the_obligation": """The looters have elevated brotherhood to a moral absolute.

You are responsible for your brother's welfare. Not because you choose to be, not because you've agreed to be, but because he exists and has needs. His need is your obligation.

This sounds noble until you think it through. If his need creates your obligation, then the needier he is, the more you owe him. The more helpless, the greater the claim. The more irresponsible, the larger the debt.

And what about your needs? They create obligations for others. So you owe everything to everyone, and everyone owes everything to you. The result is a web of infinite mutual obligation where no one has a right to their own life.

This is brotherhood taken seriously. And it's a nightmare.""",

    "04_the_reality": """Watch what happens when "brotherhood" becomes law.

The able are enslaved to the unable. You cannot quit your job—your brothers need you working. You cannot keep your earnings—your brothers need them more. You cannot live for yourself—your brothers' needs take priority.

But the unable aren't freed either. They're humiliated. They're made permanent dependents, defined by their needs, stripped of any chance to become capable. The system doesn't help them—it traps them in helplessness.

And the whole structure depends on a dwindling number of "keepers"—the productive people who haven't yet been ground down. As more producers vanish, fewer shoulders bear the weight. Until there's no one left to keep anyone.

This is the tragedy of enforced brotherhood: it destroys the keepers and the kept alike.""",

    "05_closing": """Their Brothers' Keepers exposes the lie at the heart of collectivism.

Brotherhood sounds like love, but enforced brotherhood is chains. Obligation sounds like connection, but unlimited obligation is slavery. Keeping your brother sounds like kindness, but being forced to keep him is servitude.

Real brotherhood—the kind that matters—is voluntary. It's chosen, not imposed. It's between people who value each other as individuals, not because one has needs and the other has ability.

The valley's inhabitants help each other constantly. But they do it through trade, through voluntary exchange, through genuine mutual benefit. No one is forced. No one is enslaved. No one is permanently dependent.

That's what brotherhood looks like when it's based on respect rather than obligation, on trade rather than sacrifice, on choice rather than chains.

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
