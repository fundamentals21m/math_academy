#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 2
Atlas Shrugged - The Chain
"""

import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 2
EPISODE_TITLE = "The Chain"

SECTIONS = {
    "01_cold_open": """The metal was greenish-blue. It had a slight shimmer, like the color of the sky in the early morning, when the sun is still below the horizon but about to rise.

This is Rearden Metal—ten years of work, experimentation, and determination made physical. And the man who created it is about to discover that his greatest achievement will bring him not celebration, but contempt.""",

    "02_introduction": """Previously on Atlas Shrugged: We entered a world where the lights are going out. We met Dagny Taggart, fighting to keep civilization running. And we heard the question that haunts everyone: "Who is John Galt?"

Now, in Episode 2...

Welcome back to Atlas Shrugged. In our last episode, we met Dagny Taggart and saw a world in decline, haunted by the question "Who is John Galt?"

Today we meet Hank Rearden—a self-made steel industrialist who has spent ten years developing a revolutionary new alloy. We'll witness the first pour of Rearden Metal and see the stark contrast between a man who creates value and those who merely consume it.

The chapter title "The Chain" refers to the interconnected relationships that bind characters together—both the productive chains of business and trade, and the parasitic chains of family obligation that drain the producers.""",

    "03_first_pour": """The chapter opens at the Rearden Steel mills in Pennsylvania. Hank Rearden watches the first heat of his new metal being poured. This moment represents the culmination of ten years of grueling work—experiments that failed, theories that had to be discarded, and the persistent belief that it could be done.

The metal glows with a greenish-blue color unlike anything seen before. It is stronger than steel, lighter, more resistant to heat and corrosion. Rearden has created something genuinely new—a material advance that could revolutionize industry.

After the pour, Rearden walks home through the cold night, carrying a bracelet made from the first batch of Rearden Metal. As he walks the seven miles to his house, he reflects on his journey—from working in the iron mines of Minnesota as a young man to becoming one of the most successful industrialists in America.

This walk represents the producer's experience: the long, solitary effort that precedes achievement, known only to himself.""",

    "04_rearden_family": """When Rearden arrives home, he finds his family waiting: his wife Lillian, his mother, and his brother Philip. He presents the bracelet to Lillian as a gift—the first object ever made from Rearden Metal.

Her response is devastating. She calls it "a chain"—"Appropriate, isn't it? It's the chain by which he holds us all."

The family scene introduces one of the novel's central conflicts: the relationship between creators and those who depend on them while simultaneously despising them.

Lillian married Rearden for his wealth and status but despises his work, finding his dedication to industry vulgar. Philip has never worked and lives off Hank's generosity, yet resents his brother's success. His mother plays the martyr, accusing Hank of neglecting his family despite the fact that he supports them all.

Each family member represents a different form of parasitism—and each uses guilt as a weapon to extract from Rearden while offering nothing in return.""",

    "05_bracelet_symbol": """The bracelet scene is crucial for understanding the novel's philosophy.

The bracelet represents everything Rearden has achieved—ten years of work, innovation, and the triumph of the human mind over matter. To Rearden, it is a gift of the highest value, the first fruit of his greatest creation.

To Lillian, it is worthless. She would have preferred diamonds—something valued by society, not by actual achievement. She cannot see value except in terms of social status and the opinions of others.

This scene foreshadows a later moment when Dagny will recognize the bracelet's true worth and exchange one of her own valuable jewels for it. Those who create value recognize it in others' creations. Those who don't create cannot perceive it at all.

Here's the key insight: Rearden accepts the guilt his family places on him because he has been taught that his dedication to work is selfish and therefore wrong. This is what Rand calls "the sanction of the victim"—the producer must consent to his own exploitation by accepting unearned guilt.""",

    "06_themes": """Let's identify the key themes in this chapter.

First, Creation versus Consumption. Rearden creates value; his family consumes it without gratitude or understanding. This dynamic illustrates the novel's distinction between producers and looters.

Second, The Nature of Achievement. Rearden's joy in creating Rearden Metal is presented as noble and proper, despite society's condemnation of such "selfish" pursuits.

Third, Guilt and Duty. The family exploits Rearden's sense of duty, using guilt as a weapon to extract his resources while offering nothing in return.

Fourth, Material and Spiritual. The chapter challenges the false dichotomy between material and spiritual value—Rearden's metal is both a physical achievement and a spiritual triumph. The material is the embodiment of the spiritual.""",

    "07_closing": """Let's recap what we learned today.

Hank Rearden is introduced as the archetypal creator—a self-made man who has spent ten years developing Rearden Metal.

The Rearden family represents the parasites who drain producers while resenting them for their success.

The bracelet scene symbolizes the conflict between those who understand value, the creators, and those who don't, the consumers.

Rearden's guilt illustrates the "sanction of the victim"—how producers are trained to accept responsibility for supporting parasites.

And the business connection between Rearden and Taggart Transcontinental is established through Dagny's order for Rearden Metal rail.

In the next episode, we'll expose the conspiracy of the looters—the secret meeting where James Taggart, Orren Boyle, and others plot to use government regulation to destroy their more capable competitors.

See you in the next one."""
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
    print(f"  [ERROR] {section_name}: {response.status_code}")
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
