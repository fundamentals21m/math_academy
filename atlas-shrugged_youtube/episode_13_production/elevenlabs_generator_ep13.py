#!/usr/bin/env python3
"""Episode 13 - White Blackmail"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 13
EPISODE_TITLE = "White Blackmail"

SECTIONS = {
    "01_cold_open": """Blackmail works by threatening to reveal something shameful. The victim pays to keep a secret hidden.

But what if the shameful thing isn't shameful at all? What if the victim is being made to feel guilty for something that is actually good?

This is white blackmail—the use of unearned guilt as a weapon against the productive. And it may be the looters' most powerful tool.""",

    "02_introduction": """Previously: The aristocracy of pull has replaced the aristocracy of ability. Wesley Mouch holds power—not through productive achievement, but through betrayal. James Taggart succeeds—not by running a railroad, but by having political allies.

These are the new lords of America. Their weapon is regulation.

Welcome back to Atlas Shrugged. In our last episode, we examined the aristocracy of pull that has replaced merit as the path to success.

Today we explore a more insidious weapon: guilt. The title "White Blackmail" refers to the manipulation of decent people through their own virtues. The looters cannot defeat the producers through ability—so they attack through morality, making the producers feel guilty for their own excellence.

This chapter shows how guilt becomes a chain stronger than any law.""",

    "03_guilt_as_weapon": """The producers have been taught to feel guilty for their virtues.

Are you successful? You should feel guilty—others are not. Are you intelligent? You should feel guilty—others are not. Are you productive? You should feel guilty—others are not.

This guilt has no basis in wrongdoing. The producer has harmed no one. But he has been taught that his success itself is an offense against those who have not succeeded, that his ability is an insult to those who lack it.

White blackmail exploits this manufactured guilt. The looters say: "You have more than others. You should share." The producer, feeling guilty for having more, shares. The looters say: "You are able while others are not. You should sacrifice." The producer, feeling guilty for his ability, sacrifices.

No threat is made. No force is used. The victim destroys himself through his own misplaced virtue.""",

    "04_the_mechanism": """Here's how white blackmail works in practice.

First, convince the producer that his success is somehow illegitimate—that he owes his achievements to society, to luck, to privilege, to anything except his own effort.

Second, convince him that his success harms others—that wealth is a zero-sum game, that his gain is someone else's loss, that his excellence makes others feel inferior.

Third, demand that he atone for this imaginary sin through sacrifice—giving up his wealth, his time, his judgment, his self-respect.

The producer, accepting the premise that his virtues are vices, complies. He doesn't see that he's being robbed. He thinks he's making amends.

This is more effective than force. Force creates resistance. Guilt creates surrender.""",

    "05_closing": """White blackmail—the use of unearned guilt as a weapon—may be the looters' most powerful tool.

They cannot match the producers in ability, so they attack through morality. They make excellence feel like sin, success feel like crime, achievement feel like exploitation.

The producers, accepting these false premises, bind themselves with chains no law could impose. They sacrifice voluntarily what the looters could never take by force.

But some producers are beginning to question the guilt. They're asking: Why should I feel bad for being good? Why should I apologize for my achievements? Why should I sacrifice to those who contribute nothing?

When enough producers ask these questions—and reject the answers they've been given—the system of white blackmail will collapse.

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
