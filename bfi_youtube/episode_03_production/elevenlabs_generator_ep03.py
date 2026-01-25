#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 3
Bitcoin for Institutions - Bitcoin Requires a Deflationary Mindset

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep03.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 3
EPISODE_TITLE = "Bitcoin Requires a Deflationary Mindset"

SECTIONS = {
    "01_cold_open": """An important feature that makes it unintuitive for both individuals and institutions to integrate bitcoin into their financial landscapes is its deflationary nature.

Bitcoin is the largest fixed-supply asset on Earth, programmed by its immutable protocol to cap out at 21 million whole units.

This creates a fundamental clash with how institutions think about money.""",

    "02_fixed_supply": """As of September 2025, bitcoin had a market capitalization of over 2 trillion dollars, making it the fifth-largest asset in the world behind a handful of stocks and gold.

Of the 21 million bitcoin that will ever exist, 95 percent has already been issued.

Current mining issuance is 3.125 bitcoin per block—roughly every 10 minutes. That's about 450 bitcoin per day, or approximately 165,000 bitcoin per year.

Bitcoin is already less inflationary than gold, which sees approximately 1.5% annual increase in supply. Bitcoin's supply is currently inflating at roughly 0.8%—half that rate. This issuance will continue to halve every four years until 2140, after which there will be no new bitcoin issued.

When inserted into a monetary landscape of vastly inflationary monies like fiat currencies, stocks, bonds, and real estate, the supply-capped bitcoin will continue to absorb the monetary energy of its peers.""",

    "03_problem_for_institutions": """Why is deflation—or even the lack of inflation—a problem for institutions?

Unlike annuity programs that provide for Cost of Living Adjustments by increasing annual payments, participants on the Bitcoin network will generally follow its reward schedule and require lower amounts over time.

Every accountant emphasizes Present Value as the common way to view streams of cash flows. Deflation is a foreign concept in this framework.

Consider hidden debasement: US dollars are being devalued in purchasing power by inflationary forces. Even at "2-3% CPI," one thousand dollars in ten years has a purchasing power of only about eight hundred dollars today.

Using Present Value as a benchmark masks the debasement of expected future payoffs and colors the incentives of debt issuers. Traditional valuation methods hide the significant counterparty risk that comes with debt-based financial instruments.""",

    "04_bitcoin_vs_dollar": """The discussion becomes clear when one compares a future payoff payable in bitcoin with a future payoff payable in US dollars.

Consider a thousand dollar payment in 10 years. Present Value at 10% discount rate is about 375 dollars. But that purchasing power is eroded by inflation. The real value is significantly less than 375 dollars, and it's subject to further currency debasements.

Now consider 0.01 bitcoin in 10 years. It at least retains purchasing power. Three halvings means it roughly doubles three times against the dollar. Expected Future Value: approximately 8,000 dollars in today's purchasing power. And there's no central issuer to debase it.

It is unacceptable to view a bitcoin payoff today as worth anything less than its current dollar equivalent on an apples-to-apples basis with a fiat-denominated bond. These estimates assume no further currency debasements, which is a highly unreasonable assumption.""",

    "05_future_value_pivot": """In order for individuals and institutions to utilize bitcoin intelligently, they will need different optics from those they use today.

Bitcoin's primary use case is to protect purchasing power.

The contrast in purchasing power will require institutions to focus more on Future Value as opposed to Present Value.

This pivot will be much more intuitive for individuals to adopt than institutions. Institutions will need to understand the time and risk preferences of individuals, and how bitcoin is already reshaping them.

All companies need to understand the impact of bitcoin on the value systems of individuals to continue offering competitive compensation to their employees.""",

    "06_implications": """Once these dynamics are understood, we can begin to look at how institutions can use their balance sheets to offer financial services to either retail individuals or other institutions.

The key insight is this: Bitcoin flips the traditional financial model upside down.

In fiat finance, a promise to pay tomorrow is worth less than cash today—because inflation erodes value.

In bitcoin finance, a promise to pay tomorrow may be worth more than bitcoin today—because deflation increases purchasing power.

This requires a complete rewiring of institutional thinking. And that rewiring must start with understanding why individuals are already making this shift.""",

    "07_closing": """Let's recap what we learned in this chapter.

Bitcoin is the largest fixed-supply asset on Earth with 21 million units capped by immutable protocol—95% already issued.

Bitcoin is already less inflationary than gold at approximately 0.8% annual supply increase, halving every four years until zero percent in 2140.

Present Value masks debasement—traditional financial valuation hides the erosion of purchasing power in fiat currencies.

Institutions must shift to Future Value thinking to properly understand bitcoin's role in protecting purchasing power.

Companies must understand bitcoin's impact on individuals to offer competitive compensation and financial services.

In the next episode, we'll explore Chapter Three: Bitcoin Custody Requires Higher Understanding. We'll examine the complex tradeoffs between security, accessibility, and control.

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
