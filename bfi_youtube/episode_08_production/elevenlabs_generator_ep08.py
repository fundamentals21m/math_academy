#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 8
Bitcoin for Institutions - Strategy (Balance Sheet Strength)

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep08.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 8
EPISODE_TITLE = "Strategy (Balance Sheet Strength)"

SECTIONS = {
    "01_cold_open": """"He described bitcoin as a 'dependable store of value and an attractive investment asset with more long-term appreciation potential than holding cash.'"

That was MicroStrategy's press release in August 2020. Today, the company—now simply called "Strategy"—holds over 500,000 bitcoin.

This is the one success story of an institution doing corporate bitcoin right. And it took one individual to make it happen.""",

    "02_michael_saylor": """Michael Saylor is the founder and chairman of Strategy. He is an MIT-trained engineer who founded the company with a $250,000 grant from DuPont.

He would seem to be the unlikeliest of characters to lead the world in buying bitcoin.

As an engineer, Saylor explained the properties of bitcoin from an engineering perspective in a way that is likely responsible for levelling up the understanding of bitcoin from "Magic Internet Money" to "Thermodynamically Sound Digital Real Estate."

This reframing was crucial. Bitcoin wasn't just code—it was digital energy, crystallized and preserved across time.""",

    "03_250_million_problem": """Saylor's worldview was simple. He had a $250 million pile of cash in 2020 and was looking at an epic monetary debasement of Western fiat currencies.

The US was on its way to printing $7 trillion over an M2 monetary base of $15 trillion. That's nearly a 50% expansion of the money supply in a short period.

Western cash holders were caught off guard, lulled into complacency by fifteen years of gaslighting about how printing money isn't inflationary.

Saylor drew the line. He refused to allow the US government to debase his company's cash and cash equivalents.

In August 2020, he converted $250 million into approximately 21,000 bitcoin. The rest is monetary history.""",

    "04_accumulation": """Strategy's bitcoin accumulation followed an aggressive pattern.

In 2020-2021, they accumulated approximately 125,000 bitcoin, buying at prices ranging from $10,000 to $60,000.

Through the 2022-2023 bear market, they continued buying, reaching approximately 190,000 bitcoin at prices between $16,000 and $30,000.

In 2024-2025, they pioneered the use of convertible debt to accelerate purchases, now holding over 500,000 bitcoin at prices ranging from $60,000 to $100,000.

Strategy's market capitalization has grown from approximately $1 billion to nearly $100 billion, driven primarily by their bitcoin holdings. They await S&P 500 entry despite meeting the criteria.""",

    "05_tesla_contrast": """Tesla also put bitcoin on their balance sheet in 2020, led by Elon Musk. However, the outcomes were dramatically different.

Strategy continued accumulating aggressively. They never sold during downturns. They transformed their company identity around bitcoin. Their market cap grew from $1 billion to nearly $100 billion.

Tesla initially purchased bitcoin for treasury. They exited their position shortly after S&P 500 inclusion. Bitcoin was peripheral to their business. Institutional pressure forced the exit.

This validates exactly what Chapter One predicted—institutional pressure will eventually force selling. Only a dominant individual like Saylor can resist this pressure.""",

    "06_convertible_debt": """Strategy pioneered the use of convertible debt to acquire more bitcoin.

This allows them to borrow at low interest rates and use the proceeds to buy bitcoin, betting that bitcoin's appreciation will exceed the cost of borrowing.

Convertible bonds often have near-zero coupon rates because investors want exposure to potential equity upside.

If bitcoin appreciates 30% or more annually—as history suggests—the cost of borrowing is negligible by comparison.

If the bonds convert to equity, shareholders are diluted—but the bitcoin holdings have grown proportionally more.

Strategy has turned corporate finance into a bitcoin accumulation vehicle that other companies are beginning to copy.""",

    "07_closing": """Let's recap what we learned in this chapter.

Strategy proves it can be done—a public company can successfully hold bitcoin long-term, but it requires a dominant individual.

Saylor's engineering mindset elevated bitcoin from "Magic Internet Money" to "Thermodynamically Sound Digital Real Estate."

Tesla's exit validates the theory—without a dominant individual, institutional pressure will force selling.

Cash is a melting ice cube—the new paradigm views bitcoin as superior to cash for corporate treasuries.

Convertible debt enables leverage—Strategy pioneered using corporate finance to accelerate bitcoin accumulation.

In the next episode, we'll explore BlackRock—how Larry Fink went from calling bitcoin "only useful to money launderers" to launching the most successful ETF in history.

See you in the next one."""
}


def main():
    generator = AudioGenerator(
        episode_number=EPISODE_NUMBER,
        episode_title=EPISODE_TITLE
    )

    generator.generate_all(SECTIONS)


if __name__ == "__main__":
    main()
