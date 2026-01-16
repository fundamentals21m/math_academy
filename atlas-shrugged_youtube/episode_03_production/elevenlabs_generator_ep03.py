#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 3
Atlas Shrugged - The Top and the Bottom
"""

import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 3
EPISODE_TITLE = "The Top and the Bottom"

SECTIONS = {
    "01_cold_open": """"We can't help it if the process of civilization is a process of destroying competition. The strong always win against the weak, and it isn't fair."

These words are spoken by James Taggart—not in public, but in a dingy bar, surrounded by fellow conspirators. Behind closed doors, the looters reveal their true philosophy: use government force to destroy anyone better than yourself.""",

    "02_introduction": """Previously: Hank Rearden watched the first pour of his revolutionary metal—ten years of work made real. But instead of celebration, his family met his triumph with contempt. His wife called it vulgar. His brother called it showing off.

Achievement, it seems, is something to feel guilty about.

Welcome back to Atlas Shrugged. In our last episode, we met Hank Rearden and witnessed the first pour of his revolutionary metal.

Today we expose the conspiracy of the looters. We'll see how James Taggart, Orren Boyle, and other political operators plot to use government regulation to destroy their more capable competitors. The title "The Top and the Bottom" contrasts those at the top of society—the productive achievers—with those at the bottom—the schemers who use political pull rather than ability to advance.""",

    "03_secret_meeting": """The chapter opens with James Taggart meeting secretly with Orren Boyle of Associated Steel, Wesley Mouch—Rearden's own Washington lobbyist—and Paul Larkin. They gather in a dingy bar, deliberately avoiding the respectable establishments where honest businessmen might see them.

Their conversation reveals their plan: use government regulation to destroy Hank Rearden and Dan Conway's Phoenix-Durango railroad. They speak in euphemisms about "fairness" and "the public good," but their actual goal is to eliminate competition they cannot match through honest means.

Notice how they never speak directly about their intentions. They cloak their plunder in language about equality, social responsibility, and protecting the weak. But the weak they claim to protect are themselves—men who cannot compete through productive merit.""",

    "04_anti_dog_eat_dog": """The chapter introduces the Anti-dog-eat-dog Rule—a regulation being pushed through the National Alliance of Railroads. This rule would force Dan Conway's Phoenix-Durango railroad to cease operations in Colorado, eliminating Taggart Transcontinental's main competitor in the region.

The rule is presented as protecting "the public interest" and preventing "destructive competition." In reality, it's designed to destroy a more efficient competitor that has been winning Colorado's freight business through better service.

This illustrates how looters use government force to accomplish what they cannot achieve through productive merit. Unable to compete honestly, they turn to political manipulation.""",

    "05_conspirators": """Let's examine the conspirators.

James Taggart—President of Taggart Transcontinental, who relies on political connections rather than competence. He resents his sister Dagny's abilities.

Orren Boyle—Owner of Associated Steel, an inefficient company that cannot compete with Rearden Steel. He wants government intervention to handicap his more capable competitor.

Wesley Mouch—Rearden's Washington lobbyist, secretly working against his employer. He serves as a double agent, feeding information to the conspirators.

Paul Larkin—A "friend" of Rearden who pretends loyalty while plotting against him. He represents the false friend who profits from betrayal.

Each conspirator shares a common trait: they cannot create value themselves, so they must seize it from those who can.""",

    "06_dagny_response": """When Dagny learns about the plot against Phoenix-Durango, she is horrified—not because Conway is a friend, but because she recognizes the injustice of destroying a better competitor through political means rather than market competition.

Dagny understands that the Anti-dog-eat-dog Rule, while benefiting Taggart Transcontinental in the short term, represents a fundamental corruption of the principles that make business and civilization possible.

This is a key insight: Dagny opposes looting even when it would benefit her. She understands that a system based on force rather than merit will ultimately destroy everyone—including those who benefit from it temporarily.""",

    "07_closing": """Let's recap what we learned today.

The looters' conspiracy is revealed: Taggart, Boyle, and others plan to use government regulation to destroy their competitors.

The Anti-dog-eat-dog Rule will force the efficient Phoenix-Durango railroad out of Colorado, rewarding incompetence and punishing success.

Wesley Mouch is betraying his employer Rearden, working secretly with the conspirators.

The rhetoric of looting uses noble-sounding language like "fairness" and "public good" to disguise plunder.

And pull replaces merit as the means of success in a society corrupted by political manipulation.

In the next episode, we'll meet the prime movers of industry and learn about Francisco d'Anconia's brilliant youth—deepening the mystery of why he seems to have abandoned his genius.

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
