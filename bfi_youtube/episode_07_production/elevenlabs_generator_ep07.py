#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 7
Bitcoin for Institutions - Bitcoin Users Value Privacy

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep07.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 7
EPISODE_TITLE = "Bitcoin Users Value Privacy"

SECTIONS = {
    "01_cold_open": """A byproduct of being responsible for one's own private keys is a natural desire for privacy.

This is a thorny issue because most people are conditioned to be willing to give up their privacy around money.

But as we'll see in this chapter, the freedom to transact without surveillance may be one of bitcoin's most important properties.""",

    "02_cbdc_nightmare": """China is already using a CBDC—a Central Bank Digital Currency—and that has given Western society a preview of the nightmare we will experience if we allow our governments to implement a totalitarian panopticon around money and spending.

Most people using bitcoin are doing so strictly for price exposure and don't care about maintaining privacy. But they should. They will be looking for more and more solutions to regain their privacy as the central banks tighten their grip further.

There are many people that believe that the freedom to transact is a natural right and a natural extension of freedom of speech. In the digital world, monetary transactions are little more than messages—not different from texts or emails.

Like with speech, there cannot be truly free markets without the total freedom to transact.""",

    "03_dollar_surveillance": """The US uses its status as the central issuer of the world's current reserve currency—the US dollar—and the world's reserve asset—US government bonds—to maintain its status as the dominant leader in the world.

The US uses SWIFT payment network access to provide oversight over seemingly every transaction in the global financial system.

"Know Your Customer" and "Anti-Money Laundering" regulations claim that nobody transacting has any right to privacy.

The reality is that the majority of criminal activity in the world happens in US dollars—a much preferred network for crime than an unencrypted public ledger.

These regulations have strangled innovation and made it untenable for companies to operate honestly, causing many to leave the US for friendlier jurisdictions.""",

    "04_freedom_convoy": """The Canadian Freedom Convoy in January of 2022 brought this privacy issue to light when it comes to personal spending.

Whether you agree or not with what the truckers were protesting, many people in Canada and the US appreciated their fight and wanted to support them by donating money for clothing and firewood.

Several methods of donating were established that raised millions of dollars for these truckers—which never saw their way into their hands as a result of direct intervention by the Trudeau government.

GoFundMe raised 10 million Canadian dollars. Only about 1 million was released before the platform was forced to take action by the government.

After GoFundMe was blocked, supporters turned to GiveSendGo. They collected 9.58 million dollars—44% from the United States. Over 109,000 donations. The Canadian government worked to block protesters' access to these funds as well.""",

    "05_emergencies_act": """But the intervention didn't end at the blockade.

The Trudeau government invoked the "Emergencies Act" in order to freeze the bank accounts of the individuals who donated to the protests.

Banks were told they can't provide "any financial or related services" to people associated with the protests—a move that resulted in frozen accounts, stranded money, and cancelled credit cards.

Most people have likely never heard of a GoFundMe campaign being hijacked and redirected by a government. This was an unprecedented display of financial surveillance and control over peaceful citizens.

The Canadian Freedom Convoy demonstrated exactly why bitcoin users value privacy. When governments can block crowdfunding platforms, freeze bank accounts for political views, cancel credit cards for donating to legal causes, and track and punish donors to political movements—then the need for a censorship-resistant, permissionless money becomes self-evident.""",

    "06_bitcoin_solution": """Bitcoin, held in self-custody, could not have been blocked, frozen, or redirected by any government.

Bitcoin users will increasingly demand privacy-preserving solutions. Institutions that don't understand this fundamental value proposition will find themselves offering products that sophisticated bitcoin users don't want.

The current idea most individuals and institutions have about using bitcoin is solely for its price exposure, with very little to do with the powerful property of it as a digital bearer asset.

This just underscores how early we all are and how little the majority of the world understands bitcoin.""",

    "07_closing": """Let's recap what we learned in this chapter.

CBDCs threaten financial privacy—China's CBDC is a preview of the totalitarian panopticon Western governments could implement.

Freedom to transact is an extension of free speech—monetary transactions in the digital world are just messages.

The Freedom Convoy showed government power over money—crowdfunding was blocked, bank accounts were frozen, and credit cards were cancelled.

KYC/AML regulations are weaponized—while most crime happens in dollars, these regulations strangle innovation and honest business.

Bitcoin in self-custody is censorship-resistant—it could not have been blocked, frozen, or redirected by any government.

This concludes Part One: Bitcoin is for Individuals. In the next episode, we begin Part Two: Individuals Run Institutions, starting with Strategy—the company formerly known as MicroStrategy—and how Michael Saylor proved that one individual can make institutional bitcoin work.

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
