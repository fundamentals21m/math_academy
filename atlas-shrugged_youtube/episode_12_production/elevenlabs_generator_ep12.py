#!/usr/bin/env python3
"""Episode 12 - The Aristocracy of Pull"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 12
EPISODE_TITLE = "The Aristocracy of Pull"

SECTIONS = {
    "01_cold_open": """In every society, there is an aristocracy—a ruling class that holds power. The question is: what determines membership?

In a free society, the aristocracy consists of those who produce the most value. The best rise through merit.

In a society of looters, the aristocracy consists of those with the most political connections. The best at manipulation rise through pull.

This chapter shows the new American aristocracy—and it has nothing to do with ability.""",

    "02_introduction": """Welcome to Part Two. The world has changed since Wyatt's Torch. Producers are vanishing faster now. The economy spirals downward.

And somewhere, someone is recruiting the best minds for a purpose no one yet understands.

Welcome back to Atlas Shrugged. In our last episode, we began Part Two with the fundamental choice facing everyone: produce or loot, think or evade.

Today we examine how political connections have replaced merit as the path to success. The title "The Aristocracy of Pull" describes the new ruling class—people who achieve position not through ability but through knowing the right people, making the right donations, and saying the right things.

In this world, it's not what you can do that matters. It's who you know.""",

    "03_pull_vs_merit": """Merit means earning your position through demonstrated ability. You rise because you can do the job better than others. The best surgeon gets patients because she saves lives. The best engineer gets contracts because his bridges stand.

Pull means getting your position through political connection. You rise because you know someone, or because you've contributed to the right campaign, or because you've said the right things to the right people. The connected surgeon gets patients regardless of skill. The connected engineer gets contracts regardless of competence.

When pull replaces merit, the consequences are predictable. Bridges collapse. Patients die. Quality disappears. But the aristocracy of pull doesn't care—they're insulated from consequences by their connections.""",

    "04_the_new_aristocracy": """The chapter shows us this new aristocracy in action.

Wesley Mouch has risen to power—not through any productive achievement, but through betraying his employer and serving the looters. James Taggart holds his position not because he can run a railroad, but because he has political allies. Orren Boyle competes not by making better steel, but by getting laws passed against his competitors.

These are the new lords of America. Their castles are government offices. Their armies are bureaucrats with regulatory power. Their weapons are laws and directives that can destroy anyone who threatens their position.

And like all aristocracies based on something other than merit, this one is fundamentally unstable. It can seize wealth, but it cannot create it. It can destroy producers, but it cannot replace them.""",

    "05_closing": """The aristocracy of pull has replaced the aristocracy of ability.

In the old America, you rose by being good at something. In the new America, you rise by knowing someone.

The consequences are everywhere: failing businesses run by connected incompetents, crumbling infrastructure maintained by political appointees, innovations banned because they threaten the wrong people.

The producers see what's happening. Some submit and try to play the game. Some fight and lose. And some—a growing number—simply disappear. They refuse to serve an aristocracy that punishes their virtues and rewards their enemies' vices.

The question "Who is John Galt?" grows more urgent. Someone is offering the producers an alternative to the aristocracy of pull.

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
