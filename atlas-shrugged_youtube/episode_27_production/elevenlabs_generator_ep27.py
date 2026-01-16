#!/usr/bin/env python3
"""Episode 27 - This Is John Galt Speaking"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 27
EPISODE_TITLE = "This Is John Galt Speaking"

SECTIONS = {
    "01_cold_open": """For years, people have asked: Who is John Galt?

Tonight, he tells them.

In a broadcast that interrupts every radio and television station in the country, a voice speaks. The voice of the man who stopped the motor of the world. The voice of the man who called the strike of the mind.

This is John Galt speaking. And the world will never be the same.""",

    "02_introduction": """Previously: The Concerto of Deliverance. Richard Halley's final masterwork, hidden from the world, finally heard in the valley. Music that captures the emotional meaning of liberation.

The sound of a mind freed from the need for permission, validation, approval.

Welcome back to Atlas Shrugged. This episode covers the novel's philosophical climax: John Galt's radio address.

In the book, this speech spans sixty pages. It lays out Rand's entire philosophy—metaphysics, epistemology, ethics, politics, aesthetics. It explains why the producers went on strike and what they demand for their return.

We can only touch on the highlights here. But even summarized, the speech contains ideas that challenge everything the outside world believes.""",

    "03_the_basic_premise": """Galt begins with a simple observation: the world is collapsing because its morality is wrong.

For centuries, you have been taught that your moral duty is to serve others. That selfishness is evil and sacrifice is good. That your life is not your own to live as you choose.

And you have obeyed. You have sacrificed your desires, your ambitions, your happiness to the demands of others. You have felt guilty for succeeding and virtuous for suffering.

The result is the world you see around you: a civilization built by the selfish producers and destroyed by the morality that condemns them.

I have called a strike, says Galt. Not against your bodies but against your morality. I have removed the men of ability who once served you. I have given you exactly what your morality demands: a world run by those who despise achievement. Now live in it.""",

    "04_the_new_morality": """Galt offers an alternative: a morality based on life.

The standard of value, he says, is not God, or society, or duty, but your own life. Actions are good if they serve your life, evil if they destroy it. And the means of serving your life is one thing: reason.

Think. That is the first commandment of this new morality. Use your mind to understand reality, to identify what you need to survive, to create the values that sustain your life.

Trade. That is the second commandment. Deal with others through voluntary exchange, giving value for value. Do not seek the unearned—not in wealth, not in love, not in admiration.

Produce. That is the third commandment. Create more than you consume. Add to the world rather than subtracting from it. Be a maker, not a taker.

This is the morality of the producers. It asks nothing of you except that you live—really live, using your mind, creating value, earning your happiness.""",

    "05_the_strike_and_the_choice": """The strike will continue, Galt declares, until you learn to respect the mind.

We are not fighting for material wealth. We are fighting for a principle: that the man who creates value has a right to keep it. That achievement is not a sin. That happiness is not a crime.

The choice is yours. You can continue with your morality of sacrifice—and watch your civilization die. Or you can accept that selfishness is a virtue, that the mind is noble, that life is good.

We will return when you are ready to say: we do not need you to sacrifice for us. We only need you to stop sacrificing us for others.

When you are ready to deal with us as traders—exchanging value for value, respecting our rights as we respect yours—we will rebuild the world. Until then, we will wait. And the lights will continue to go out.""",

    "06_closing": """This Is John Galt Speaking—the mystery revealed at last.

The man who asked the world's most haunting question has answered it. He is the man who refused to accept the morality of sacrifice. He is the mind on strike.

His speech is a challenge. It says: your philosophy doesn't work. Your morality is backward. Your world is dying because you've accepted premises that lead to death.

Here is a different philosophy. Here is a different morality. Here is a path to life.

Choose.

The speech ends, but its words echo. Some listeners are outraged. Some are bewildered. And some—a few—feel something they haven't felt in years. Hope. The recognition that they're not alone. That there's an alternative.

John Galt has spoken. Now the world must decide.

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
