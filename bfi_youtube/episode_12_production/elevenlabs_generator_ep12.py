#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 12
Bitcoin for Institutions - Treasury / Balance Sheet

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep12.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 12
EPISODE_TITLE = "Treasury / Balance Sheet"

SECTIONS = {
    "01_cold_open": """"A company that holds bitcoin in its treasury has a significant optionality advantage over one that does not."

We have covered the story of Strategy—formerly MicroStrategy—solving their existential problem of how to protect their cash from government debasement.

That problem was so relatable that many individuals adopted that strategy for themselves to great success. So many people have started their own bitcoin treasuries, but very few companies have followed suit.""",

    "02_accounting_barrier": """For the most part, only bitcoin mining companies like RIOT and MARA are holding bitcoin in their treasury. Most mining companies eventually sell off their treasury to pay employees or debt.

One of the large barriers for companies was that until 2024, FASB had no guidance for how to account for bitcoin.

Under the old interpretation, the value of bitcoin was held constant and written down when there was a drawdown, but never written back up.

This made it very difficult to explain to investors why they were holding bitcoin if they never benefited from price increases but always suffered from decreases.""",

    "03_fasb_fix": """The accounting problem was fixed when FASB issued Accounting Standards Update 2023-08.

This clarified the accounting treatment as a full mark-to-market approach where the account value of bitcoin would be carried and reported according to the prevailing market price.

Companies can now report their bitcoin holdings at current market value, reflecting both gains and losses in real-time. This is expected to pave the way for much more widespread bitcoin treasury adoption.""",

    "04_operating_profitability": """Bitcoin can be uniquely used by companies to lower their operating costs.

This is of interest to CFOs and management teams because operating profitability is typically how they are judged by their boards and what their incentive compensation payouts depend on.

A company that holds bitcoin in its treasury can either hold it and let it accumulate gains that investors will view as extraordinary, or they can deploy that treasury by regularly selling a portion into rising markets and getting accountants to include those gains in operating revenue.

Assume a forward-looking return of bitcoin as an actuarial assumption—30% or 40% a year is reasonable based on historical data. Establish a clearly defined program that actually sells a certain amount of bitcoin regularly. Classify a percentage of treasury gains as operating income instead of capital gains.""",

    "05_example": """Let me give you a real-world example.

Consider a large bitcoin mining company. With their current strategy, they have revenue of about 77 million dollars and operating expenses of 88 million—a net operating loss of 11 million dollars and a negative 15% margin.

With the proposed strategy—deploying just 16% of their bitcoin treasury with a 35% assumed return—they lower their costs below their revenue and produce a positive Net Operating Income.

The company goes from a negative 15% margin to a positive margin.

If actual bitcoin performance differs from 35%, the difference can be amortized outside of Operating Income—below the line.""",

    "06_not_a_trick": """This is not a corporate finance trick.

It may appear that a company can use bitcoin cosmetically to fool investors into thinking it's profitable when it isn't. That is far from what is being suggested here.

Bitcoin is money—the hardest money the world has ever seen—not a return-bearing asset. It protects purchasing power from monetary debasement. It protects against censorship and confiscation. It lowers costs over time relative to USD. And it has always increased over periods exceeding five years.

There is no free lunch, though. Bitcoin is scarce. Deploying it incurs significant opportunity cost. You sacrifice long-term price potential. You sacrifice superior monetary properties.""",

    "07_closing": """Let's recap what we learned in this chapter.

FASB ASU 2023-08 enables mark-to-market accounting for bitcoin, removing a major barrier to corporate adoption.

Bitcoin treasuries provide optionality—companies can hold for appreciation or deploy to lower operating costs.

Operating profitability can be improved by systematically selling bitcoin gains and including them in operating revenue.

This isn't accounting trickery—bitcoin genuinely lowers costs over time because USD underperforms bitcoin by design.

But there is no free lunch—deploying bitcoin means sacrificing its long-term potential and superior monetary properties.

In the next episode, we'll explore Structured Credit—how bitcoin as collateral is transforming the creditworthiness of loans.

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
