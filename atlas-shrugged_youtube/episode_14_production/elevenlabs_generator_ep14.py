#!/usr/bin/env python3
"""Episode 14 - The Sanction of the Victim"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 14
EPISODE_TITLE = "The Sanction of the Victim"

SECTIONS = {
    "01_cold_open": """The looters cannot survive without the producers. They cannot create wealth—only seize it. They cannot run businesses—only regulate them. They cannot invent—only ban invention.

So why do the producers submit? Why do the creators of value serve those who only destroy it?

Because the victims have granted their sanction. And the moment they withdraw it, the system collapses.""",

    "02_introduction": """Previously: We saw white blackmail in action—guilt as a weapon against the productive. Are you successful? Feel guilty. Are you intelligent? Feel guilty. The looters can't match the producers in ability, so they attack through morality.

They make excellence feel like sin.

Welcome back to Atlas Shrugged. In our last episode, we explored white blackmail—the use of guilt as a weapon against the productive.

Today we examine the deeper principle that makes such manipulation possible: the sanction of the victim. This is perhaps the novel's most important concept. It explains how a minority of looters can control a majority of producers, and why that control can be broken instantly—if the producers choose.

The sanction of the victim means that exploitation requires the victim's cooperation. No one can be enslaved without consent.""",

    "03_the_concept": """What is the sanction of the victim?

It's the idea that evil is powerless without the cooperation of the good. Looters cannot function without producers to loot. Parasites cannot survive without hosts to feed upon. The incompetent cannot maintain civilization without the competent to run it.

The looters know this. That's why they work so hard to convince producers that sacrifice is noble, that guilt is proper, that achievement is something to apologize for. If the producers ever stop believing these lies, the game is over.

Rearden grants his sanction every time he accepts guilt for his success. Every time he lets his family drain him without protest. Every time he obeys a regulation he knows is unjust. He is the looters' strength—without his compliance, they have nothing.

The moment he withdraws his sanction—refuses the guilt, rejects the obligations, stops cooperating—he is free. And they are powerless.""",

    "04_implications": """The sanction of the victim has profound implications.

First, it means that the producers are not truly victims—they are collaborators. They choose to accept the guilt, obey the regulations, serve the system. They could choose differently.

Second, it means the looters are not truly powerful—they depend entirely on the producers' cooperation. Their laws, their guns, their threats are meaningless if the producers refuse to comply.

Third, it means liberation is possible at any moment. Not through revolution or violence, but through simple refusal. Stop producing for those who punish production. Stop creating for those who destroy creation. Stop granting your sanction.

This is the strike. Not a strike for higher wages or better conditions, but a strike against the entire system that demands sacrifice from the able to the unable. The mind on strike.""",

    "05_closing": """The sanction of the victim is the key to understanding Atlas Shrugged.

The looters rule only because the producers let them. The system of sacrifice continues only because the victims cooperate. The moment the producers withdraw their sanction—stop accepting guilt, stop obeying unjust laws, stop serving those who despise them—the entire structure collapses.

This is what John Galt has discovered. This is what he offers the vanishing producers. Not a new ideology or political system, but a simple truth: you don't have to cooperate in your own destruction.

Stop granting your sanction. Let the looters try to run the world without you.

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
