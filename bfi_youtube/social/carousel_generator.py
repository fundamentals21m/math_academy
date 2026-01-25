#!/usr/bin/env python3
"""
LinkedIn Carousel Generator for Bitcoin for Institutions

Generates PDF carousel content from episode transcripts:
- 5-7 slides per carousel
- Optimized for LinkedIn's carousel format
- Includes "Swipe →" indicators
- Final slide: Call-to-action

Usage:
    python carousel_generator.py

Output:
    bfi_youtube/social/carousels/ep{N}_carousel.md (markdown for design)

Note: This generates markdown/text content. For actual PDF creation,
use a design tool like Canva, Figma, or the Python reportlab library.
"""

import os
from pathlib import Path
from dataclasses import dataclass
from typing import List

# Configuration
BASE_DIR = Path(__file__).parent.parent
OUTPUT_DIR = BASE_DIR / "social" / "carousels"
COURSE_URL = "https://bfi-liart.vercel.app"
BOOK_URL_AMAZON = "https://www.amazon.com/Bitcoin-Institutions-Brian-Hirschfield/dp/B0FCZHXFGS/"

# Carousel content per episode
# Each carousel has: hook slide, 4-5 content slides, CTA slide
CAROUSEL_CONTENT = {
    1: {
        "title": "Bitcoin for Institutions: The Fundamentals",
        "subtitle": "Why Bitcoin favors individuals—and what that means for institutions",
        "slides": [
            {
                "headline": "Bitcoin Is For Individuals",
                "body": "This course presents a thesis that Bitcoin is fundamentally designed for individuals, not institutions.",
                "footer": "Understanding this tension is critical for success."
            },
            {
                "headline": "Ownership Changes Properties",
                "body": "The power of Bitcoin as capital is fundamentally determined by its owner.",
                "bullet_points": [
                    "Individuals: full control, long time horizons",
                    "Institutions: intermediaries, quarterly pressure"
                ]
            },
            {
                "headline": "Hard Money Flows Upward",
                "body": "Under hard money, capital flows to those who make the best allocation decisions.",
                "footer": "Bitcoin rewards skill, not connections."
            },
            {
                "headline": "The Soft Money Trap",
                "body": "No group of humans with the power to print money has ever resisted the temptation to do so.",
                "footer": "Bitcoin frees individuals from this tyranny."
            },
            {
                "headline": "5 Key Concepts",
                "bullet_points": [
                    "1. Hard Money: Difficult to produce, easy to verify",
                    "2. Bearer Asset: Ownership by possession",
                    "3. Circular Economy: BTC-to-BTC exchange",
                    "4. Counterparty Risk: Third-party failure",
                    "5. Time Preference: Present vs future valuation"
                ]
            },
        ]
    },
    2: {
        "title": "Why HODL'ing Is Irrational",
        "subtitle": "And why that irrationality favors individuals over institutions",
        "slides": [
            {
                "headline": "The Graveyard of Bitcoin Institutions",
                "body": "FTX. Celsius. Mt. Gox. BlockFi.",
                "footer": "What do they have in common?"
            },
            {
                "headline": "Rationality Killed Them",
                "body": "Every corporate governance structure is built to prevent 'irrational' long-term holding.",
                "footer": "That's the problem."
            },
            {
                "headline": "HODL = Willful Irrationality",
                "body": "HODL'ing requires ignoring quarterly metrics, short-term volatility, and fiduciary 'best practices.'",
                "footer": "Institutions can't model this."
            },
            {
                "headline": "The Water/Diamond Paradox",
                "body": "Water is essential but cheap. Diamonds are useless but expensive.",
                "footer": "Value comes from marginal utility, not intrinsic worth."
            },
            {
                "headline": "Only Dominant Individuals Succeed",
                "body": "Saylor at Strategy. Fink at BlackRock.",
                "footer": "Individuals run institutions—or institutions fail at Bitcoin."
            },
        ]
    },
    3: {
        "title": "The Deflationary Mindset",
        "subtitle": "Why most institutions can't think in Bitcoin terms",
        "slides": [
            {
                "headline": "Inflationary Thinking Is Default",
                "body": "Every institutional framework assumes money loses value over time.",
                "footer": "Bitcoin requires the opposite."
            },
            {
                "headline": "Unit of Account Problem",
                "body": "Are you measuring in BTC or fiat?",
                "bullet_points": [
                    "Up 20% in USD = success?",
                    "Down 10% in BTC = failure?"
                ]
            },
            {
                "headline": "Quarterly Reporting Traps",
                "body": "Bitcoin's volatility spans years, not quarters.",
                "footer": "Quarterly reports create structural barriers."
            },
            {
                "headline": "The Long View",
                "body": "Bitcoin rewards those who can think in decades.",
                "footer": "Can your institution?"
            },
        ]
    },
    4: {
        "title": "Not Your Keys, Not Your Coins",
        "subtitle": "Why custody is the fundamental challenge",
        "slides": [
            {
                "headline": "Self-Custody Eliminates Risk",
                "body": "When you hold your own keys, there is no counterparty.",
                "footer": "Zero counterparty = zero counterparty risk."
            },
            {
                "headline": "Institutional Custody = Trust",
                "body": "The moment you add intermediaries, you've added risk.",
                "footer": "Every custodian can fail."
            },
            {
                "headline": "Multisig: The Middle Ground",
                "body": "Multiple signatures required = no single point of failure.",
                "footer": "But complexity has costs."
            },
            {
                "headline": "Every Solution Has Tradeoffs",
                "bullet_points": [
                    "Self-custody: Maximum security, operational burden",
                    "Custodian: Convenience, counterparty risk",
                    "Multisig: Balanced, complex"
                ]
            },
        ]
    },
    5: {
        "title": "Time Preference and Bitcoin",
        "subtitle": "Why patience is the ultimate competitive advantage",
        "slides": [
            {
                "headline": "What Is Time Preference?",
                "body": "The relative value you place on present vs future goods.",
                "footer": "Low = patient. High = impatient."
            },
            {
                "headline": "Institutional Time Horizons",
                "body": "Most executives have 3-5 year tenures.",
                "footer": "Bitcoin's halving cycle is 4 years."
            },
            {
                "headline": "Quarterly Pressure",
                "body": "Wall Street demands quarterly performance.",
                "footer": "Bitcoin rewards 10+ year holding."
            },
            {
                "headline": "Patience as Advantage",
                "body": "Low time preference individuals outperform in Bitcoin.",
                "footer": "Can institutions develop this trait?"
            },
        ]
    },
    6: {
        "title": "Bitcoin: The Digital Bearer Asset",
        "subtitle": "Why possession equals ownership",
        "slides": [
            {
                "headline": "What Is a Bearer Asset?",
                "body": "An asset that grants ownership to whoever possesses it.",
                "footer": "No registry. No intermediary. Just possession."
            },
            {
                "headline": "First Digital Bearer Asset",
                "body": "Before Bitcoin, digital assets required trusted third parties.",
                "footer": "Bitcoin changed everything."
            },
            {
                "headline": "Settlement Finality",
                "body": "Bitcoin transactions are final and irreversible.",
                "footer": "No chargebacks. No reversals. Done."
            },
            {
                "headline": "Implications for Institutions",
                "body": "Institutions are built on reversible transactions.",
                "footer": "Bitcoin's finality is a feature—and a challenge."
            },
        ]
    },
    7: {
        "title": "Privacy vs Transparency",
        "subtitle": "Part 1 concludes with an essential tension",
        "slides": [
            {
                "headline": "Privacy ≠ Secrecy",
                "body": "Privacy is selective disclosure.",
                "footer": "You choose what to reveal."
            },
            {
                "headline": "Bitcoin's Privacy Model",
                "body": "Pseudonymous, not anonymous.",
                "footer": "Transactions are public, identities are not."
            },
            {
                "headline": "Institutional Requirements",
                "body": "Regulators demand transparency.",
                "footer": "Bitcoin users value privacy."
            },
            {
                "headline": "Part 1 Conclusion",
                "body": "Bitcoin IS for individuals.",
                "footer": "Now: how do individuals run institutions?"
            },
        ]
    },
    8: {
        "title": "Strategy: The Saylor Playbook",
        "subtitle": "How one individual transformed corporate Bitcoin",
        "slides": [
            {
                "headline": "The 2020 Decision",
                "body": "MicroStrategy's cash was melting.",
                "footer": "Saylor saw Bitcoin as the solution."
            },
            {
                "headline": "Dominant Individual Required",
                "body": "Only Saylor's conviction could overcome board resistance.",
                "footer": "Corporate governance wanted 'safety.'"
            },
            {
                "headline": "Balance Sheet Transformation",
                "body": "From software company to Bitcoin treasury.",
                "footer": "Market cap: $1B → $100B+"
            },
            {
                "headline": "The Lesson",
                "body": "Individuals run institutions.",
                "footer": "Without Saylor, Strategy holds zero Bitcoin."
            },
        ]
    },
    9: {
        "title": "BlackRock: From Skeptic to Leader",
        "subtitle": "Larry Fink's Bitcoin evolution",
        "slides": [
            {
                "headline": "2017: 'Index of Money Laundering'",
                "body": "Larry Fink dismissed Bitcoin publicly.",
                "footer": "Fast forward 6 years..."
            },
            {
                "headline": "2024: IBIT Launch",
                "body": "Fastest-growing ETF in history.",
                "footer": "$10B+ in weeks."
            },
            {
                "headline": "What Changed?",
                "body": "Fink studied, understood, and adapted.",
                "footer": "Individuals evolve. Committees don't."
            },
            {
                "headline": "Making Bitcoin 'Invisible'",
                "body": "ETFs allow institutions to own Bitcoin without holding Bitcoin.",
                "footer": "That's the feature, not the bug."
            },
        ]
    },
    10: {
        "title": "Deferred Compensation & Bitcoin",
        "subtitle": "The individual path within institutions",
        "slides": [
            {
                "headline": "What Is Deferred Comp?",
                "body": "Compensation you receive later, not now.",
                "footer": "401(k), IRA, deferred bonuses."
            },
            {
                "headline": "Why It Works for Bitcoin",
                "body": "Long-term incentives align with Bitcoin's thesis.",
                "footer": "You're already patient with retirement."
            },
            {
                "headline": "Available Options",
                "bullet_points": [
                    "Self-directed 401(k) with Bitcoin",
                    "Bitcoin IRA providers",
                    "Deferred bonus in BTC exposure"
                ]
            },
            {
                "headline": "Start Today",
                "body": "Most people can add Bitcoin to retirement NOW.",
                "footer": "No corporate approval needed."
            },
        ]
    },
    11: {
        "title": "Bitcoin ETFs Explained",
        "subtitle": "The institutional on-ramp",
        "slides": [
            {
                "headline": "Spot vs Futures",
                "body": "Spot ETFs hold actual Bitcoin.",
                "footer": "Futures ETFs hold contracts about Bitcoin."
            },
            {
                "headline": "The Leaders",
                "bullet_points": [
                    "IBIT (BlackRock): Largest AUM",
                    "FBTC (Fidelity): Strong second",
                    "ARKB (Ark/21Shares): Innovation focus"
                ]
            },
            {
                "headline": "Fee Wars",
                "body": "Competition is driving fees to near-zero.",
                "footer": "Investors win."
            },
            {
                "headline": "'Invisible' Bitcoin",
                "body": "ETFs make Bitcoin a line item, not a project.",
                "footer": "No custody, no keys, no learning curve."
            },
        ]
    },
    12: {
        "title": "Corporate Treasury Bitcoin",
        "subtitle": "Beyond the Strategy playbook",
        "slides": [
            {
                "headline": "Treasury Basics",
                "body": "Corporate cash sits somewhere.",
                "footer": "Why not Bitcoin?"
            },
            {
                "headline": "Board Support Required",
                "body": "Treasury allocation isn't a finance decision.",
                "footer": "It's a strategic decision requiring board buy-in."
            },
            {
                "headline": "FASB 2023 Changes",
                "body": "New accounting rules allow fair value.",
                "footer": "Bitcoin can finally mark to market."
            },
            {
                "headline": "The Hard Truth",
                "body": "Strategy's approach isn't replicable for most.",
                "footer": "Most companies lack a Saylor."
            },
        ]
    },
    13: {
        "title": "Bitcoin Credit Products",
        "subtitle": "Lessons from failure",
        "slides": [
            {
                "headline": "The Yield Trap",
                "body": "Every Bitcoin yield product has failed.",
                "footer": "Celsius. BlockFi. Voyager."
            },
            {
                "headline": "Why They Failed",
                "body": "Yield requires lending. Lending requires counterparty.",
                "footer": "Counterparty + Bitcoin = Failure."
            },
            {
                "headline": "Overcollateralization Works",
                "body": "Borrow against Bitcoin with 2x+ collateral.",
                "footer": "No yield. Just leverage."
            },
            {
                "headline": "The Warning",
                "body": "If someone offers Bitcoin yield, run.",
                "footer": "There is no free lunch."
            },
        ]
    },
    14: {
        "title": "Pension Funds & Bitcoin",
        "subtitle": "The perfect match—with one problem",
        "slides": [
            {
                "headline": "Perfect Time Horizons",
                "body": "Pensions invest for 30+ years.",
                "footer": "Bitcoin rewards 10+ year holding."
            },
            {
                "headline": "Fiduciary Duty Problem",
                "body": "Fiduciaries must act 'prudently.'",
                "footer": "'Prudent' is defined by yesterday's rules."
            },
            {
                "headline": "Wisconsin Led the Way",
                "body": "Wisconsin Investment Board bought Bitcoin.",
                "footer": "Others are watching closely."
            },
            {
                "headline": "The Future",
                "body": "Pensions will hold Bitcoin.",
                "footer": "The only question is when."
            },
        ]
    },
    15: {
        "title": "Bitcoin for Institutions: The Framework",
        "subtitle": "Bringing it all together",
        "slides": [
            {
                "headline": "Part 1: Bitcoin Is For Individuals",
                "body": "Structural advantages: custody, time, privacy.",
                "footer": "Institutions face fundamental challenges."
            },
            {
                "headline": "Part 2: Individuals Run Institutions",
                "body": "Saylor. Fink. Conviction drives adoption.",
                "footer": "Committees don't buy Bitcoin."
            },
            {
                "headline": "Part 3: Institutional Vehicles",
                "body": "ETFs, deferred comp, treasury—options exist.",
                "footer": "But implementation requires care."
            },
            {
                "headline": "The Path Forward",
                "body": "Work with Bitcoin's nature, not against it.",
                "footer": "Thank you for watching."
            },
        ]
    },
}


@dataclass
class CarouselSlide:
    """Represents one slide in a carousel"""
    slide_number: int
    headline: str
    body: str = ""
    bullet_points: List[str] = None
    footer: str = ""


def generate_carousel_markdown(episode_num: int, content: dict) -> str:
    """Generate markdown content for a carousel"""
    utm_link = f"{COURSE_URL}?utm_source=linkedin&utm_medium=carousel&utm_campaign=ep{episode_num}"

    md = f"""# Episode {episode_num} Carousel

## {content['title']}
*{content['subtitle']}*

---

## Slide 1: Hook

**{content['slides'][0]['headline']}**

{content['slides'][0].get('body', '')}

{content['slides'][0].get('footer', '')}

*Swipe →*

---

"""

    for i, slide in enumerate(content['slides'][1:], start=2):
        md += f"## Slide {i}: Content\n\n"
        md += f"**{slide['headline']}**\n\n"

        if slide.get('body'):
            md += f"{slide['body']}\n\n"

        if slide.get('bullet_points'):
            for point in slide['bullet_points']:
                md += f"• {point}\n"
            md += "\n"

        if slide.get('footer'):
            md += f"*{slide['footer']}*\n\n"

        md += "*Swipe →*\n\n---\n\n"

    # Final CTA slide
    md += f"""## Final Slide: Call to Action

**Want the full breakdown?**

🎓 FREE Interactive Course
{utm_link}

📖 Get the Book
Amazon: {BOOK_URL_AMAZON}

🎬 Watch All 15 Episodes
[YouTube Playlist Link]

*Bitcoin for Institutions by Brian Hirschfield*

---

## Design Notes

- **Format:** 1080x1350px (4:5 ratio for LinkedIn)
- **Font:** Bold sans-serif for headlines, regular for body
- **Colors:** Dark background (#1a1a1a), orange accent (#f97316)
- **Branding:** BFI logo on each slide
- **Swipe indicator:** Arrow icon bottom-right

---

*Generated by carousel_generator.py*
"""

    return md


def main():
    """Generate all carousel content"""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    carousels_created = 0

    for ep_num, content in CAROUSEL_CONTENT.items():
        markdown = generate_carousel_markdown(ep_num, content)

        filename = f"ep{ep_num:02d}_carousel.md"
        filepath = OUTPUT_DIR / filename

        with open(filepath, 'w') as f:
            f.write(markdown)

        print(f"Created: {filename}")
        carousels_created += 1

    print(f"\n✅ Generated {carousels_created} carousel templates in {OUTPUT_DIR}")
    print(f"\nNext steps:")
    print(f"1. Use Canva or Figma to create visual carousels from these templates")
    print(f"2. Export as PDF for LinkedIn native carousel posts")
    print(f"3. Or export as images and combine into a single PDF")


if __name__ == "__main__":
    main()
