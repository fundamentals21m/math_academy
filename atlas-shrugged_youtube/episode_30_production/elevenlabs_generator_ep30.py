#!/usr/bin/env python3
"""Episode 30 - In the Name of the Best Within Us"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 30
EPISODE_TITLE = "In the Name of the Best Within Us"

SECTIONS = {
    "01_cold_open": """The lights have gone out. The last power plant has failed. The roads are empty. The cities are dark.

The world the looters built has collapsed—not from external attack, but from internal contradiction. A society that punishes production cannot produce. A civilization that wars against the mind cannot think.

In the darkness, a small group waits. The producers. The creators. The minds on strike.

They're ready to return. But only to build something new.""",

    "02_introduction": """Previously: The generator. John Galt's motor sits in an abandoned factory—technology that could power the world, left to rust.

He could have transformed civilization. But not under compulsion. Not for those who despise creation. The story nears its end.

Welcome to the final episode of Atlas Shrugged.

Throughout this series, we've watched a civilization destroy itself by attacking its best members. We've seen the producers withdraw, the economy collapse, and the looters' philosophy reach its logical conclusion.

Now comes the resolution. The title "In the Name of the Best Within Us" captures the novel's ultimate message: we must build our lives and our society on the highest possibilities of human nature, not the lowest.""",

    "03_the_collapse": """The outside world has finally fallen.

Not conquered, not invaded—simply stopped. The system that punished production has no production left to punish. The regulations that strangled innovation have nothing left to strangle. The bureaucracy that managed distribution has nothing left to distribute.

The looters are bewildered. They did everything right. They followed their principles. They sacrificed the capable to the needy, the productive to the unproductive, the mind to the collective. And it stopped working.

They never understood that it was working only because the producers let it work. That the wealth they redistributed had to be created first. That the minds they punished were the minds that kept everything running.

Now those minds are gone. And the looters discover what a world without them looks like.""",

    "04_the_return": """As the collapse completes, John Galt speaks again.

The strike is over. Not because the strikers have surrendered, but because they've won. The old world is dead. The morality of sacrifice has been tried and has failed. There's nothing left to exploit.

Now comes the rebuilding. But on different terms.

The producers will return, but only to a world that respects their rights. They will create, but only where creation is honored. They will trade, but only with those who understand that trade requires two values, freely exchanged.

They don't ask for gratitude or worship. They ask only for freedom—the freedom to think, to produce, to keep what they've earned. They ask to be left alone to do what they do best: create the values that make human life possible.

This is their condition for return. Meet it, and civilization rises again. Reject it, and the darkness continues.""",

    "05_the_meaning": """What does Atlas Shrugged mean?

At its simplest, it's a warning: if you punish achievement, achievers will stop achieving. If you attack the mind, the mind will withdraw. If you treat your best people as servants to be exploited, they will leave you to see how well you manage without them.

But it's also an affirmation. It says that human achievement is possible and good. That the mind is powerful and noble. That life can be a joy, not a burden.

The novel's heroes aren't perfect. They struggle, doubt, make mistakes. But they share one quality: they refuse to apologize for being good at what they do. They refuse to feel guilty for their abilities. They refuse to sacrifice their lives to those who contribute nothing.

This is what "the best within us" means: the capacity for reason, for achievement, for happiness. The producers of Atlas Shrugged build their lives on that capacity. They ask only for the freedom to use it.""",

    "06_closing": """In the Name of the Best Within Us—that's the standard by which Rand asks us to judge our lives and our society.

Are we building on human excellence or punishing it? Are we celebrating achievement or condemning it? Are we freeing the mind or enslaving it?

Atlas Shrugged is over a thousand pages long and contains a complete philosophy. We've only touched the surface in these thirty episodes. But the core message is simple:

The mind is humanity's means of survival. Achievement is humanity's glory. Freedom is humanity's requirement.

Violate these truths, and civilization falls. Honor them, and there's no limit to what we can build.

The novel ends with John Galt tracing the sign of the dollar in the air over the desolate earth. The symbol of free trade. The emblem of voluntary exchange. The mark of a society built on the best within us.

A new world is about to be born.

Thank you for joining me for Atlas Shrugged."""
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
