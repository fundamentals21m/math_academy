#!/usr/bin/env python3
"""Episode 18 - By Our Love"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 18
EPISODE_TITLE = "By Our Love"

SECTIONS = {
    "01_cold_open": """We're told that love means sacrifice. That to truly love someone, you must give up what you value for their sake. That the measure of love is what you're willing to lose.

But what if that's exactly backward?

What if real love means valuing someone for who they are—for their virtues, their achievements, their character? What if love is selfish in the deepest sense: the recognition that another person adds to your life?

This chapter explores love—and discovers that it reveals everything about what we truly value.""",

    "02_introduction": """Previously: The moratorium on brains. No new inventions. No new processes. No new products. Everything must stay as it is.

The official reason is stability. The real reason is fear—fear of anyone who might create something the looters can't control.

Welcome back to Atlas Shrugged. In our last episode, we saw the moratorium on brains—the ban on thinking itself.

Today we turn to something more personal: the nature of love. The title "By Our Love" suggests that we reveal ourselves through what we love. Our choices in romance expose our deepest values.

Do we love people for their weaknesses or their strengths? Do we love sacrifice or achievement? Do we love what diminishes us or what elevates us?

The answer tells us who we really are.""",

    "03_two_kinds_of_love": """The novel presents two contrasting visions of love.

One vision says love is sacrifice. You prove your love by giving up what you want. The ideal partner is someone who needs you, who can't survive without your support. Love means carrying someone else's burden.

The other vision says love is admiration. You love someone for their virtues—their intelligence, their courage, their integrity. The ideal partner is someone you look up to, someone who inspires you, someone who adds to your life rather than subtracting from it.

These aren't just different approaches—they're opposites. One makes love a duty. The other makes it a reward. One binds you to weakness. The other draws you to strength.""",

    "04_love_and_values": """Our romantic choices reveal our values more clearly than anything else we do.

Consider what it means to love someone for their weakness. It means valuing need over ability, dependence over independence, limitation over achievement. It means wanting a partner who makes you feel needed rather than one who makes you feel alive.

Now consider what it means to love someone for their strength. It means valuing ability, admiring achievement, respecting independence. It means wanting a partner who challenges you, who matches you, who makes you want to be better.

The characters in Atlas Shrugged are defined by their loves. Dagny loves achievers—Francisco, Rearden, and eventually the greatest achiever of all. James Taggart seeks partners who make him feel superior by being inferior.

By our love, we show who we are.""",

    "05_closing": """By Our Love—the title captures a profound truth.

We don't choose our values randomly, and we don't fall in love accidentally. Our romantic choices reflect our deepest beliefs about what matters, what's good, what's worth pursuing.

Those who believe in sacrifice seek partners they can sacrifice for—people who will always need them, always depend on them, always drain them. This is love as burden.

Those who believe in achievement seek partners they can admire—people who will challenge them, inspire them, match them. This is love as reward.

The tragedy of the novel's villains isn't just their political views—it's their inability to love what's good. They're attracted to weakness because strength threatens them. They seek dependents because equals challenge them.

The heroes love differently. They seek the best, admire the excellent, desire the strong. Their love is an affirmation of life, not a surrender to need.

By our love, we reveal everything.

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
