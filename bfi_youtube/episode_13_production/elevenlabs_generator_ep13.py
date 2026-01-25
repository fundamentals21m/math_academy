#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 13
Bitcoin for Institutions - Structured Credit

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep13.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 13
EPISODE_TITLE = "Structured Credit"

SECTIONS = {
    "01_cold_open": """"If a borrower posts bitcoin as collateral, this loan would automatically become the most senior loan. A person will let any other asset go before relinquishing their bitcoin to a lender."

Credit is one of the fundamental features of any high-functioning society. The ability to borrow and lend at a healthy equilibrium is what separates the highest functioning economies from the lowest ones.

Credit is built on trust and trustworthiness—characterized by its own term: creditworthiness.""",

    "02_fiat_debt_system": """A hallmark of a society built on inflationary money is that debt is ubiquitous.

It makes sense to borrow money now, use it for something valuable, and pay back your loan in the future with debased money. In a world without bitcoin, this is how people win in the fiat game—you want to be a borrower.

The US government has issued close to $40 trillion in debt—far in excess of GDP. There is zero likelihood of ever paying it back without significant dollar devaluation.

If we include unfunded liabilities—Social Security, Medicare, government pensions—we're looking at over $200 trillion.

Auto loans total $2 trillion. Student loans—irrevocable and immune to bankruptcy—another $2 trillion. Fannie Mae and Freddie Mac, government-backed mortgage lending, $7 trillion.""",

    "03_collateral_failures": """The story of virtually every market crash going back to Sumeria involves collateral becoming devalued significantly over a short period of time.

In 2008, the Global Financial Crisis—housing collateral plummeted, people walked away from underwater mortgages.

In 2022, the Bank of England Pension Bailout—UK Gilts rapidly devalued by Fed rate rises, triggering emergency intervention.

In 2023, the US Banking Crisis—five major banks failed when US Treasuries were devalued by an unprecedented 5% rate rise.

UK Gilts and US Treasuries were no longer reliable collateral. We seem to have reached the end of the line.

Enter bitcoin and a company called Battery Finance.""",

    "04_battery_finance": """Newmarket Capital and their subsidiary, Battery Finance, have developed a loan product that might possibly transform credit markets as we know them.

Battery Finance enables bitcoin to be used as 10 to 30 percent of the collateral for loans alongside traditional assets.

The key features: Bitcoin's market price won't factor into the loan-to-value ratio for a fixed period—minimum four years, aligned with bitcoin's halving cycle.

Lender and borrower share in bitcoin's appreciation over the loan life. Longer loan duration means greater share of appreciation for the borrower.

Using bitcoin as collateral reduces the interest rate on the loan. And the loan can be paid off at any time without penalty.

The loan carries a single-digit interest rate and has a maturity of 10 years.""",

    "05_subordination_redefined": """Credit markets operate around the concept of subordination—which loans get paid off first if a borrower has multiple loans.

This idea of seniority is about to be flipped on its head by Battery Finance's loan product.

If a borrower posts bitcoin as collateral, this loan would automatically become the most senior loan—not because of contractual priority, but because of behavioral priority.

A person will let any other asset go before relinquishing their bitcoin to a lender. This behavioral reality, combined with accumulated bitcoin gains over time, means borrowers have extreme incentive to honor bitcoin-collateralized loans first.

After four years, there will almost certainly be significant gains at stake. Default rates on these loans should approach Triple-A equivalent behavior. Traditional subordination structures become inverted.""",

    "06_two_borrower_types": """There are two types of bitcoin borrowers.

The Degen accumulated bitcoin through reckless borrowing. They're not afraid of debt or high yields. They would be considered a terrible borrower by traditional lenders. They view themselves as speculatively attacking the dollar. But they will absolutely prioritize the home loan if bitcoin gains are at stake. Battery can charge high yield with confidence they'll repay.

The Saver typically doesn't like debt and avoids it. They're considered a good risk to traditional lenders. Their bitcoin is everything to them—they will go to the ends of the world to protect their stack. Using bitcoin as collateral will strongly impact their behavior. They should exhibit essentially Triple-A equivalent behavior.

For bond portfolio managers, this creates a significant arbitrage opportunity: buying a package of Battery's loans over a similarly rated package without bitcoin as collateral.""",

    "07_closing": """Let's recap what we learned in this chapter.

Traditional collateral has failed—the 2008, 2022, and 2023 crises showed that housing, gilts, and treasuries can rapidly become unreliable.

Battery Finance enables bitcoin collateral without mark-to-market liquidation triggers, aligned with bitcoin's four-year cycle.

Bitcoin collateral redefines subordination—behaviorally, it becomes the most senior loan regardless of contractual priority.

Both degens and savers will prioritize bitcoin-collateralized loans, creating potential Triple-A equivalent credit quality.

Credit markets will be transformed—what creditworthiness actually means is being redefined by this innovation.

In the next episode, we'll explore Pensions—how pension managers can use bitcoin to "pull the goalie" and dramatically improve their odds of meeting obligations.

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
