#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 10
Atlas Shrugged - Wyatt's Torch
"""

import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 10
EPISODE_TITLE = "Wyatt's Torch"

SECTIONS = {
    "01_cold_open": """"I am leaving it as I found it. Take over. It's yours."

A pillar of fire rises from the oil fields of Colorado. Ellis Wyatt has set fire to his own creation and vanished—leaving behind a burning torch that will blaze for years. Rather than let the looters seize what he built, he chose to destroy it himself.

This is the end of Part One—and the beginning of something no one yet understands.""",

    "02_introduction": """Previously: Dagny and Rearden discovered something their world tries to deny: that the mind and body are not enemies. That the man who builds railroads can also experience joy without guilt. That achievement in business and happiness in living belong together.

The sacred and the profane are one.

Welcome back to Atlas Shrugged. In our last episode, we explored Rearden's internal conflict between the sacred and the profane.

Today, Part One concludes with a shocking image: Wyatt's Torch. Ellis Wyatt, the oil producer whose fields made Colorado's industrial boom possible, sets fire to everything he built and disappears into the night.

This act of destruction—the destruction of one's own creation rather than surrender it to looters—becomes a symbol of the producers' rebellion. But what does it mean? And who is taking these men?""",

    "03_new_legislation": """The chapter opens with the passage of new legislation designed to strangle the booming Colorado economy.

New directives would freeze wages and prices, preventing the market from functioning. Workers would be forbidden from quitting their jobs without permission. Businesses would be required to produce at least as much as the previous year—regardless of whether conditions make this possible.

And here's the most insidious provision: new inventions and new businesses would require government permission. Innovation itself would be controlled.

These are not regulations—they are chains. The looters have learned nothing from the success of the John Galt Line. Instead, they've decided that if achievement is possible, it must be made illegal.""",

    "04_wyatts_choice": """Ellis Wyatt is told he must operate under impossible restrictions. His oil fields—built through years of work, innovation, and determination—will be controlled by bureaucrats who know nothing about oil production.

He has two choices: comply and watch his creation be destroyed slowly by incompetent management, or...

Wyatt makes his choice. He sets fire to his own oil fields.

A pillar of fire rises from Colorado—the wells ablaze, burning with a fury that cannot be extinguished. The note pinned to his empty house says only: "I am leaving it as I found it. Take over. It's yours."

He has left them nothing but flames.""",

    "05_meaning_of_torch": """What does Wyatt's Torch mean?

On one level, it's an act of defiance. Wyatt refuses to let the looters benefit from his work. If they want his oil, they can try to pump it from burning wells. He has denied them the fruits of his labor.

On a deeper level, it's a message. The producers can leave. The mind can go on strike. The men who move the world can simply stop—and when they do, they will leave nothing behind for those who sought to enslave them.

But there's also a mystery. Where did Wyatt go? Who recruited him? The question "Who is John Galt?" takes on new meaning. Someone is taking these men. Someone is organizing this exodus.

Part One ends with fire—and with questions that will drive the rest of the novel.""",

    "06_closing": """Let's recap what we learned in this climactic conclusion to Part One.

New legislation threatens to freeze the economy and ban innovation—making achievement itself illegal.

Ellis Wyatt destroys his own oil fields rather than surrender them to the looters, creating "Wyatt's Torch."

The act of destruction is an act of defiance—and a message that the producers can withdraw their sanction.

And the question "Who is John Galt?" becomes urgent. Someone is recruiting the vanishing producers. Someone is leading them somewhere.

Part Two, "Either-Or," will intensify the conflict between producers and looters. We'll meet new characters, learn more about the mysterious destroyer, and watch as the world's contradictions reach their breaking point.

Thank you for joining me through Part One of Atlas Shrugged. If you've found this series valuable, subscribe and share it with others. The interactive course has additional materials, discussion questions, and quizzes.

See you in Part Two."""
}


def generate_audio(text, section_name, api_key, output_dir):
    headers = {"Accept": "audio/mpeg", "Content-Type": "application/json", "xi-api-key": api_key}
    data = {"text": text, "model_id": "eleven_multilingual_v2", "voice_settings": VOICE_SETTINGS}
    response = requests.post(f"{ELEVENLABS_API_URL}/{VOICE_ID}", json=data, headers=headers)
    if response.status_code == 200:
        path = output_dir / f"Episode_{EPISODE_NUMBER:02d}_Section_{section_name}.mp3"
        with open(path, 'wb') as f: f.write(response.content)
        print(f"  [OK] {path.name}")
        return path
    return None

def main():
    print(f"Episode {EPISODE_NUMBER}: {EPISODE_TITLE}")
    api_key = os.environ.get('ELEVENLABS_API_KEY')
    if not api_key: return print("ERROR: ELEVENLABS_API_KEY not set")
    output_dir = Path(f"episode_{EPISODE_NUMBER:02d}_audio")
    output_dir.mkdir(exist_ok=True)
    for i, (name, text) in enumerate(SECTIONS.items(), 1):
        generate_audio(text, name, api_key, output_dir)
        if i < len(SECTIONS): time.sleep(2)

if __name__ == "__main__": main()
