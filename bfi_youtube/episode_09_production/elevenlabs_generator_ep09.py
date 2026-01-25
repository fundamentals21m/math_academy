#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 9
Bitcoin for Institutions - BlackRock (Redefining Portfolio Construction)

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep09.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 9
EPISODE_TITLE = "BlackRock (Redefining Portfolio Construction)"

SECTIONS = {
    "01_cold_open": """"The world came to the realization that there does not exist a risk-free asset, and at the same time, they would grapple with the question of where bitcoin belongs in an investment portfolio."

BlackRock was the largest investment manager of pension schemes utilizing a strategy called "Liability Driven Investments."

Understanding their history with LDI is crucial to understanding why they pivoted so dramatically to bitcoin.""",

    "02_ldi_explained": """The idea behind Liability Driven Investing is that the return on pension assets isn't as important as the return relative to the liability.

If the S&P 500 goes down by 20%, but your investment manager only goes down by 19%, they would be lauded as heroes—even though the plan now has a large hole to fill.

If interest rates decrease by 100 basis points, pension liabilities increase by around 12%. So the plan should want either an investment or a hedge that pays off that 12%.

Long-duration bonds were one of the greatest-performing asset classes from 2004 through 2022. Rates went straight down. If you forgot they were tracking a liability, you might confuse pension assets with gains available for company operations.

Companies were accessing their gains without selling assets by borrowing against them. They posted bonds with unrealized gains as collateral for loans to fund operations.

This practice took place without incident as long as interest rates continued to decrease or stay the same. But if rates change direction, the collateral backing the loans decreases in value.""",

    "03_2022_crisis": """In 2022, the time bomb went off.

The Fed raised rates. Long-duration bonds lost 30 to 50 percent of value.

The UK Gilt Crisis in September 2022 required a Bank of England emergency bailout.

In 2023, five major US banks failed—Silicon Valley Bank, Signature Bank, and others.

The structural underpinning of virtually every investment portfolio in the world is the idea of a "risk-free asset" and high-quality government bonds.

This was devastated in 2022 because those "risk-free" assets performed horribly.

The Capital Asset Pricing Model and Modern Portfolio Theory are built on a foundation of a risk-free asset. When that foundation crumbles, everything must be rethought.""",

    "04_blackrock_pivot": """Larry Fink famously called bitcoin "only useful to money launderers."

Yet in 2023, BlackRock filed for a spot bitcoin ETF and has become one of bitcoin's most significant institutional advocates. What changed?

The IBIT ETF launched in January 2024. It reached over $50 billion in assets under management in its first year.

It broke every ETF record—fastest to $10 billion, $20 billion, $30 billion, $40 billion, and $50 billion in AUM.

This validated bitcoin as an institutional asset class in a way nothing else could have.""",

    "05_mutual_fund_integration": """BlackRock's entrance into bitcoin is significant not just because of IBIT, but because of what they will do next: integrating bitcoin into their mutual fund complex.

BlackRock manages trillions in target date funds for 401(k)s. Adding even 1-2% bitcoin allocation would create massive demand.

Investors might get bitcoin exposure without explicitly knowing it—which is likely what it will take for mass adoption.

This is the ultimate Trojan horse. BlackRock's mutual fund complex is the vehicle that finally brings institutional bitcoin exposure to pensions and retirement accounts—by making it indirect and almost invisible.""",

    "06_new_portfolio_construction": """BlackRock's research has suggested that a small allocation to bitcoin—1 to 5 percent—can significantly improve portfolio risk-adjusted returns due to bitcoin's low correlation with traditional assets.

With bonds no longer "risk-free," portfolio construction must be rethought.

Bitcoin offers low correlation to stocks and bonds, superior long-term returns historically, inflation hedge properties, 24/7 liquidity, and no counterparty risk in self-custody.

If there's no risk-free asset, where does bitcoin belong in an investment portfolio?

Bitcoin may be the new foundation—not risk-free, but with different risks than traditional assets and superior long-term returns.""",

    "07_closing": """Let's recap what we learned in this chapter.

LDI strategies failed spectacularly when rates reversed in 2022, requiring Bank of England emergency intervention.

"Risk-free" assets proved to be an illusion—government bonds lost 30 to 50 percent of value, shattering Modern Portfolio Theory.

BlackRock pivoted dramatically from calling bitcoin "only useful to money launderers" to launching the largest bitcoin ETF.

IBIT broke every ETF record—fastest to $10 billion, $20 billion, $30 billion, $40 billion, and $50 billion in assets under management.

The mutual fund integration will be the Trojan horse that brings bitcoin to retirement accounts worldwide.

This concludes Part Two. In the next episode, we begin Part Three: Institutional Bitcoin, starting with Deferred Compensation—how executives can use NQDC plans to gain bitcoin exposure.

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
