#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 10
Bitcoin for Institutions - Deferred Compensation

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep10.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 10
EPISODE_TITLE = "Deferred Compensation"

SECTIONS = {
    "01_cold_open": """"Holding a bitcoin treasury and using it in lieu of ETFs is a superior strategy that eliminates the counterparty credit risk entirely."

Deferred compensation is one of the most powerful tools for executives and highly compensated employees to gain bitcoin exposure through their employers.

This chapter explores how companies can use Non-Qualified Deferred Compensation plans to offer bitcoin benefits.""",

    "02_what_is_nqdc": """Non-Qualified Deferred Compensation plans—NQDC plans—allow highly compensated employees to defer a portion of their compensation to a future date.

Unlike 401(k) plans, NQDC plans are not subject to ERISA regulations and have no contribution limits.

This makes them ideal for significant bitcoin accumulation. Executives can defer unlimited amounts. Taxes are deferred until distribution, allowing bitcoin gains to compound without annual tax drag.

Companies have broad discretion over investment options—they can offer bitcoin when 401(k) plans cannot.

And deferred amounts typically vest over time, creating "golden handcuffs"—retention incentives for key employees.""",

    "03_erisa_tradeoff": """There's an important tradeoff to understand. NQDC plans are not protected by ERISA. Participants are unsecured creditors of the company.

If the company goes bankrupt, they may lose their deferred compensation. This is why it's called "riding the wave"—you're tied to the company's fate.

But for bitcoin, this creates a unique alignment of interests. The company and the executive both benefit from bitcoin's appreciation, creating shared incentives.""",

    "04_why_nqdc_works": """Why is NQDC perfect for bitcoin?

First, long time horizons. Executives typically defer for 10 to 20-plus years, aligning with bitcoin's optimal holding period.

Second, tax-deferred growth. Bitcoin's volatility becomes less relevant when gains compound tax-free for decades.

Third, no contribution limits. High earners can allocate significant amounts to bitcoin exposure.

Fourth, company alignment. It creates shared interest between company and executive in bitcoin's success.""",

    "05_implementation": """There are two main implementation options.

Option One: Use bitcoin ETFs like IBIT or FBTC. This is the easiest to implement—standard custody through the ETF provider. But it comes with counterparty risk from the ETF and custodian.

Option Two: Direct treasury. The company holds actual bitcoin. This eliminates ETF counterparty risk. It requires custody infrastructure to be built, but it's the superior long-term solution.

The recommended approach is to start with ETFs to get the program operational quickly. Then build internal bitcoin custody capability. Finally, transition to company-held bitcoin treasury to back the NQDC program, eliminating all counterparty risk.""",

    "06_hedging_challenge": """When a company offers bitcoin in its NQDC plan, it may need to hedge the exposure.

If an executive defers one million dollars into a bitcoin option and bitcoin triples, the company owes three million dollars. They need to have actually bought the bitcoin.

It may be that none of the available ETFs would satisfy robust due diligence. A golden opportunity exists for someone to create an ETF exclusively used for hedging bitcoin exposure, optimized for delivering price exposure as closely as possible, reducing custodial risk to an absolute minimum, and providing complete transparency with ongoing proof of digital signatures.""",

    "07_closing": """Let's recap what we learned in this chapter.

NQDC plans have no contribution limits and broad investment discretion, making them ideal for bitcoin exposure.

The ERISA tradeoff means participants are unsecured creditors—they're "riding the wave" with the company's fate.

Start with ETFs, evolve to treasury—use ETFs to launch quickly, then build toward company-held bitcoin.

Direct treasury eliminates counterparty risk—the superior long-term solution removes all ETF and custodian dependencies.

Long time horizons align perfectly—executives deferring for 10 to 20-plus years match bitcoin's optimal holding period.

In the next episode, we'll explore Mutual Funds and ETFs—how fund managers can integrate bitcoin to dramatically improve portfolio performance.

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
