#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 5
Atlas Shrugged - The Climax of the d'Anconias

Usage:
  export ELEVENLABS_API_KEY='your-api-key-here'
  python elevenlabs_generator_ep05.py

Requirements:
  pip install requests

Output:
  Creates episode_05_audio/ directory with MP3 files for each section.
"""

import os
import requests
import time
from pathlib import Path

# =============================================================================
# CONFIGURATION
# =============================================================================

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative

VOICE_SETTINGS = {
    "stability": 0.65,
    "similarity_boost": 0.80,
    "style": 0.35,
    "use_speaker_boost": True
}

# Episode metadata
EPISODE_NUMBER = 5
EPISODE_TITLE = "The Climax of the d'Anconias"
COURSE_NAME = "Atlas Shrugged"

# =============================================================================
# SCRIPT SECTIONS
# =============================================================================

SECTIONS = {
    "01_cold_open": """"So you think that money is the root of all evil? Have you ever asked what is the root of money?"

With those words, Francisco d'Anconia—a man everyone believes is a worthless playboy—drops his mask and delivers one of the most important philosophical arguments in literature.

This is the Money Speech. And it changes everything.""",

    "02_introduction": """Previously: Francisco d'Anconia—once the greatest industrialist of his generation—now squanders his fortune on scandals. His copper mines produce less each year. He seems to be deliberately destroying everything he built.

Why would a man of such ability choose destruction? What does he know that we don't?

Welcome back to Atlas Shrugged. In our last episode, we explored the prime movers—the industrialists and creators who keep the world running despite growing opposition.

Today, we're diving into Chapter 5: "The Climax of the d'Anconias." This chapter contains one of the most famous passages in the entire novel—Francisco d'Anconia's Money Speech.

By the end of this episode, you'll understand why Francisco argues that money is a tool of virtue, not evil. You'll see how the intellectuals at the party provide cover for looters. You'll witness the first real meeting between Rearden and Francisco. And you'll understand why this chapter marks a turning point in the novel.

Let's dive in.""",

    "03_party_scene": """The chapter centers on a party at the Rearden home, hosted by Lillian Rearden. This gathering brings together the novel's main characters in a social setting that exposes the conflicts between them.

At this party, intellectuals like Dr. Pritchett and Balph Eubank spout nihilistic philosophy, while businessmen like James Taggart scheme in corners. The cultural establishment is on full display—people who live off the wealth created by producers while despising the very act of production.

Here's what makes this scene so powerful: The intellectuals proclaim that man is worthless, that reason is a superstition, and that suffering is the essence of life. Meanwhile, they enjoy champagne, fine food, and all the products of the industrial civilization they claim to despise.

The party represents the cultural establishment that provides intellectual cover for the looters' assault on the producers. And it's into this environment that Francisco d'Anconia drops his philosophical bomb.""",

    "04_money_speech": """When someone at the party makes a casual comment that "money is the root of all evil," Francisco—who has been playing the role of idle playboy—suddenly drops his mask.

He responds: "So you think that money is the root of all evil? Have you ever asked what is the root of money?"

What follows is a detailed philosophical defense of money. This speech is one of the novel's most important passages, presenting Rand's view of money as a symbol of human achievement and free exchange.

Francisco's first point: Money is a tool of exchange, which can't exist unless there are goods produced and men able to produce them. Money doesn't create wealth—it represents wealth that has already been created through productive effort.

His second point: Money is made—before it can be looted or mooched—made by the effort of every honest man, each to the extent of his ability. An honest man is one who knows that he can't consume more than he has produced.

His third point: Money is the barometer of a society's virtue. When money ceases to be the tool by which men deal with one another, then men become the tools of men. This is the core of Francisco's argument—if not money, then force.

Here's an important note: Francisco argues that if money is not the medium of exchange, then force must be—men will have to obtain goods by seizing them from others. Money represents voluntary trade; its abolition means the rule of force.

Let me read you some of the key passages:

"Money is the material shape of the principle that men who wish to deal with one another must deal by trade and give value for value."

"Run for your life from any man who tells you that money is evil. That sentence is the leper's bell of an approaching looter."

"When you see that trading is done, not by consent, but by compulsion—when you see that in order to produce, you need to obtain permission from men who produce nothing—you may know that your society is doomed."

The core argument is this: Francisco argues that money is a tool that allows people to trade value for value. When people condemn money, they are really condemning the freedom to trade—and advocating for a system where goods are distributed by force rather than by voluntary exchange.""",

    "05_intellectuals": """Now let's look at the intellectuals at the party—the people who provide philosophical cover for the looters.

First, there's Dr. Simon Pritchett, a philosophy professor who preaches that reason is a superstition, that nothing can be known, and that man's purpose is to be "tractable." He supports the Equalization of Opportunity Bill.

Then there's Balph Eubank, a "literary leader" who believes suffering is the essence of life. He wants a law limiting book sales to 10,000 copies—to force people to read "better" literature. Notice the contradiction: he wants government force to promote his values.

Mort Liddy is a composer who writes old-fashioned scores for money and modern atonal music for prestige. He embodies the split between values and pretensions—he knows what's good but pretends otherwise for social acceptance.

Finally, there's Bertram Scudder, editor of "The Future" magazine, who wrote an article calling Rearden "The Octopus." He represents the media's hostility to business—attacking the producers while living off their creations.

These intellectuals share something in common: they preach nihilism and anti-reason philosophy while enjoying all the benefits of rational, productive civilization. Their ideas provide the moral cover that makes looting possible.""",

    "06_rearden_francisco": """At the party, Hank Rearden and Francisco d'Anconia have their first real conversation. Despite being told that Francisco is his enemy, Rearden finds himself intrigued by the man's unusual honesty and insight.

Francisco says: "Mr. Rearden, I came to this party solely in order to meet you. My motives cannot interest you at present. I want to learn to understand you."

Francisco's directness contrasts sharply with the evasiveness of everyone else at the party. Rearden senses that Francisco is unlike anyone he has ever met.

Then comes the mysterious statement: Francisco tells Rearden that he wants to understand him—and hints that he eventually wants Rearden to lose money.

Why would someone who clearly admires Rearden want him to lose money? This question will drive much of the novel's plot. Francisco understands something that Rearden doesn't yet see—and by the end of the book, we'll understand it too.""",

    "07_key_themes": """Let's synthesize the key themes developed in this chapter.

First, Money as Virtue. Francisco's speech presents money as a tool of achievement and free exchange. Hostility to money is hostility to human accomplishment itself.

Second, Intellectual Corruption. The intellectuals at the party provide philosophical cover for looting by preaching that nothing can be known, man is worthless, and suffering is noble.

Third, Social Masks. The party reveals the gap between people's social poses and their true values. Francisco drops his playboy mask to reveal unexpected depth.

Fourth, Recognition. Rearden and Dagny recognize each other as kindred spirits—different from everyone else at the gathering. They sense something important about each other, even before they fully understand it.

Be careful here: At the party, Dagny notices Lillian wearing the Rearden Metal bracelet—and wearing it as a symbol of contempt. In a later scene, Dagny will exchange one of her own valuable jewels for the bracelet, recognizing its true worth. This detail matters.""",

    "08_closing": """Let's recap what we learned today.

Francisco's Money Speech presents money as a tool of achievement and free exchange, not as a source of evil.

The party intellectuals preach nihilism and anti-reason philosophy, providing cover for the looters' assault on producers.

Rearden and Francisco meet for the first time, beginning a relationship that will prove central to the novel.

The social gathering exposes the conflict between producers who create value and parasites who consume it while despising its source.

And Francisco drops his mask briefly, revealing that he is far more than the idle playboy he pretends to be.

In the next episode, we'll explore Chapter 6: "The Non-Commercial"—the conflict between productive enterprise and those who despise commerce. We'll see how the philosophical ideas from the Money Speech play out in practical reality.

If you found this helpful, subscribe and hit the notification bell. Check out the interactive course in the description for discussion questions and deeper analysis.

See you in the next one."""
}

# =============================================================================
# AUDIO GENERATION
# =============================================================================

def generate_audio(text: str, section_name: str, api_key: str, output_dir: Path):
    """
    Generate audio for a text section using ElevenLabs API.

    Args:
        text: The narration text to convert to speech
        section_name: Name identifier for the section (e.g., "01_cold_open")
        api_key: ElevenLabs API key
        output_dir: Directory to save the MP3 file

    Returns:
        Path to the generated MP3 file, or None if generation failed
    """
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
            print(f"  Response: {response.text[:200]}...")
            return None

    except requests.exceptions.RequestException as e:
        print(f"  [ERROR] Network error generating {section_name}: {str(e)}")
        return None
    except Exception as e:
        print(f"  [ERROR] Exception generating {section_name}: {str(e)}")
        return None


def main():
    """Main function to generate all audio sections."""

    print("=" * 70)
    print(f"ElevenLabs Audio Generator - Episode {EPISODE_NUMBER}")
    print(f"{COURSE_NAME}: {EPISODE_TITLE}")
    print("=" * 70)
    print()

    # Check for API key
    api_key = os.environ.get('ELEVENLABS_API_KEY')

    if not api_key:
        print("ERROR: ELEVENLABS_API_KEY environment variable not set!")
        print()
        print("Please set your API key:")
        print("  export ELEVENLABS_API_KEY='your-api-key-here'")
        print()
        print("Get your API key from: https://elevenlabs.io/")
        return

    # Create output directory
    output_dir = Path(f"episode_{EPISODE_NUMBER:02d}_audio")
    output_dir.mkdir(exist_ok=True)
    print(f"Output directory: {output_dir.absolute()}")
    print()

    # Generate audio for each section
    generated_files = []
    total_sections = len(SECTIONS)

    for i, (section_name, text) in enumerate(SECTIONS.items(), 1):
        print(f"[{i}/{total_sections}] Processing {section_name}...")

        output_path = generate_audio(text, section_name, api_key, output_dir)

        if output_path:
            generated_files.append(output_path)

        # Rate limiting - wait between API calls
        if i < total_sections:
            print("  Waiting 2 seconds...")
            time.sleep(2)

        print()

    # Summary
    print("=" * 70)
    print("GENERATION COMPLETE")
    print("=" * 70)
    print(f"Successfully generated: {len(generated_files)}/{total_sections} sections")
    print()

    if generated_files:
        print("Generated files:")
        for filepath in generated_files:
            print(f"  [OK] {filepath.name}")
        print()
        print("NEXT STEPS:")
        print("1. Listen to each file to verify quality")
        print("2. Import into your video editor or Audacity")
        print("3. Arrange sections in order")
        print("4. Sync with visuals from the production script")
        print("5. Add background music if desired")
        print("6. Export final video")

    if len(generated_files) < total_sections:
        print()
        print("WARNING: Some sections failed to generate.")
        print("Check your API key and quota, then re-run the script.")


if __name__ == "__main__":
    main()
