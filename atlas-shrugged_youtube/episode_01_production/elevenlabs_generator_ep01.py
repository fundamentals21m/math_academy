#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 1
Atlas Shrugged - The Theme

Usage:
  export ELEVENLABS_API_KEY='your-api-key-here'
  python elevenlabs_generator_ep01.py
"""

import os
import requests
import time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"  # Antoni

VOICE_SETTINGS = {
    "stability": 0.65,
    "similarity_boost": 0.80,
    "style": 0.35,
    "use_speaker_boost": True
}

EPISODE_NUMBER = 1
EPISODE_TITLE = "The Theme"
COURSE_NAME = "Atlas Shrugged"

SECTIONS = {
    "01_cold_open": """"Who is John Galt?"

A phrase of despair. A shrug of resignation. A question nobody expects to be answered.

This is the opening line of Atlas Shrugged—a novel that asks what would happen if the people who move the world simply stopped.

Welcome to the most ambitious philosophical novel ever written.""",

    "02_introduction": """I'm Brian, and this is Atlas Shrugged—an interactive video course exploring Ayn Rand's 1957 masterpiece.

Over the next 30 episodes, we'll work through all three parts of this epic novel: "Non-Contradiction," "Either-Or," and "A Is A." We'll explore the plot, analyze the characters, and wrestle with the philosophical ideas that have made this one of the most influential—and controversial—books of the twentieth century.

By the end of this series, you'll understand the central mystery of who John Galt is, the philosophy of Objectivism as Rand presents it, why this novel continues to spark debate decades later, and most importantly, you'll be equipped to form your own judgment.

Each episode includes plot summaries, character analysis, key themes, and discussion questions. The interactive course website has additional materials and quizzes.

A note before we begin: Atlas Shrugged presents a specific philosophical viewpoint. This course aims to help you understand Rand's ideas as she presented them. Whether you agree or disagree, engaging seriously with her arguments will sharpen your own thinking.

Let's begin.""",

    "03_chapter_summary": """The novel opens on a dark street in New York City. Eddie Willers, a loyal employee of Taggart Transcontinental railroad, encounters a bum who asks him the question that haunts this world: "Who is John Galt?"

Eddie can't explain why this meaningless phrase fills him with such dread. It's become a slang expression—something people say when they mean "Don't ask questions nobody can answer" or "What's the use?"

As Eddie walks through the city, Rand shows us a world in decline. Buildings have cracks running down their facades. Gold leaf peels from spires. Every fourth storefront is dark and empty. A giant calendar hangs over the city, displaying "September 2"—time passing as civilization slowly crumbles.

Eddie arrives at the Taggart Transcontinental headquarters, one of the last great railroads still functioning. Here we learn that the railroad is in trouble. The Rio Norte Line in Colorado is failing. Suppliers aren't delivering. Something is wrong—something Eddie can sense but cannot name.

Here's an important point: Eddie's "causeless uneasiness" represents something deeper than personal anxiety. It's the subconscious awareness that something fundamental is wrong with the world—that the foundations are crumbling even though no one will admit it.""",

    "04_dagny_introduction": """Enter Dagny Taggart, the Vice President in Charge of Operations at Taggart Transcontinental. She is the novel's protagonist—a woman who refuses to give up on the world despite its decline.

Unlike her brother James, who is the nominal President, Dagny actually keeps the railroad running. James operates through political connections and evasions. Dagny operates through competence and determination.

Consider the contrast: James speaks in abstractions about "social responsibility" and "the public good." Dagny speaks in concrete terms about rail shipments, delivery schedules, and bridge repairs. James avoids problems. Dagny solves them.

The chapter establishes that Dagny has ordered new rail from Rearden Steel—from a man named Hank Rearden who has invented a revolutionary new metal. This connection will prove central to the story.

We also learn that capable people are mysteriously disappearing. Owen Kellogg, a promising engineer, has quit without explanation. He's just one of many. The best people are leaving, and no one knows why.""",

    "05_key_themes": """Let's identify the key themes Rand introduces in this opening chapter.

First, Competence versus Pull. Dagny achieves through ability. James operates through political connections. This contrast between merit and manipulation runs throughout the entire novel.

Second, The Unnamed Dread. Eddie's "causeless uneasiness" represents the subconscious awareness that something fundamental is wrong. The world is falling apart, but people either can't see it or won't admit it.

Third, Decay and Decline. The crumbling city infrastructure mirrors the intellectual and moral decay of society. Buildings crack, gold leaf peels, storefronts go dark—physical decay reflects spiritual decay.

Fourth, The Mystery. "Who is John Galt?" begins as a rhetorical expression of despair. But as we'll discover, it's actually the novel's central question—and it has a very concrete answer.

Here's an important point: The central premise of Atlas Shrugged is revealed gradually throughout the novel. What if the people who move the world—the thinkers, inventors, and producers—simply stopped? What if Atlas shrugged?""",

    "06_novel_structure": """Atlas Shrugged is organized into three parts, each named after a principle of Aristotelian logic.

Part One: "Non-Contradiction." The world begins to crumble as capable people mysteriously disappear. The law of non-contradiction states that something cannot be both true and false at the same time. This part shows a world full of contradictions that cannot be sustained.

Part Two: "Either-Or." The conflict intensifies between producers and looters. Characters must choose sides. Either you create value, or you consume it. Either you think, or you evade.

Part Three: "A Is A." The mystery is revealed and the philosophy of rational self-interest is presented in full. A is A—the law of identity. Things are what they are. Reality cannot be wished away.

At 1,168 pages in the first edition, this is an ambitious work. But the structure is clear, and we'll take it chapter by chapter.""",

    "07_characters": """Before we continue, let's meet the key players.

Dagny Taggart—Vice President of Operations, Taggart Transcontinental. A brilliant railroad executive who refuses to give up on the world despite its decline.

Hank Rearden—Industrialist, creator of Rearden Metal. A self-made steel magnate who invents a revolutionary new alloy stronger and lighter than steel.

John Galt—The mysterious figure. The man behind the question that haunts the world. His identity and purpose form the central mystery.

Francisco d'Anconia—Copper heir and industrialist. A brilliant aristocrat who seems to have abandoned his productive genius for a life of playboy frivolity. Why?

James Taggart—President, Taggart Transcontinental. Dagny's brother, who runs the railroad through political connections rather than competence.""",

    "08_closing": """Let's recap what we learned in this opening chapter.

"Who is John Galt?" opens the novel as a phrase of despair—but it will become the central mystery to be solved.

Dagny Taggart is introduced as a competent executive fighting to keep her railroad running in a world that punishes achievement.

The world is in decline—infrastructure crumbles, businesses fail, and capable people are mysteriously disappearing.

The contrast between producers and looters is established through Dagny versus James Taggart.

And the novel's three-part structure reflects principles of logic: Non-Contradiction, Either-Or, and A Is A.

In the next episode, we'll meet Hank Rearden—the steel industrialist who has spent ten years creating a revolutionary new metal. We'll witness the first pour of Rearden Metal and see the stark contrast between a man who creates value and those who merely consume it.

Before the next episode, think about this: "Who is John Galt?" is used as an expression of despair in this world. What does it tell us about a society when people adopt a meaningless phrase to express their hopelessness? Can you think of similar phrases in our own culture?

If you found this helpful, subscribe and check out the interactive course in the description.

See you in the next one."""
}


def generate_audio(text: str, section_name: str, api_key: str, output_dir: Path):
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": api_key
    }
    data = {
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": VOICE_SETTINGS
    }
    url = f"{ELEVENLABS_API_URL}/{VOICE_ID}"
    print(f"Generating audio for {section_name}...")
    try:
        response = requests.post(url, json=data, headers=headers)
        if response.status_code == 200:
            output_path = output_dir / f"Episode_{EPISODE_NUMBER:02d}_Section_{section_name}.mp3"
            with open(output_path, 'wb') as f:
                f.write(response.content)
            print(f"  [OK] Successfully generated: {output_path.name}")
            return output_path
        else:
            print(f"  [ERROR] Error generating {section_name}: {response.status_code}")
            return None
    except Exception as e:
        print(f"  [ERROR] Exception: {str(e)}")
        return None


def main():
    print("=" * 70)
    print(f"ElevenLabs Audio Generator - Episode {EPISODE_NUMBER}")
    print(f"{COURSE_NAME}: {EPISODE_TITLE}")
    print("=" * 70)

    api_key = os.environ.get('ELEVENLABS_API_KEY')
    if not api_key:
        print("ERROR: ELEVENLABS_API_KEY not set!")
        return

    output_dir = Path(f"episode_{EPISODE_NUMBER:02d}_audio")
    output_dir.mkdir(exist_ok=True)

    generated_files = []
    for i, (section_name, text) in enumerate(SECTIONS.items(), 1):
        print(f"[{i}/{len(SECTIONS)}] Processing {section_name}...")
        output_path = generate_audio(text, section_name, api_key, output_dir)
        if output_path:
            generated_files.append(output_path)
        if i < len(SECTIONS):
            time.sleep(2)

    print(f"\nGenerated: {len(generated_files)}/{len(SECTIONS)} sections")


if __name__ == "__main__":
    main()
