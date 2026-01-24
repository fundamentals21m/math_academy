import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Phishing & Social Engineering</h2>

      <p className="mb-4">
        Phishing attacks in the Bitcoin ecosystem exploit human psychology rather than technical
        vulnerabilities. Attackers impersonate trusted entities to trick victims into willingly
        sending funds to fraudulent addresses. These attacks are particularly effective because
        they bypass technical security measures by targeting the human element.
      </p>

      <Definition title="Phishing">
        A social engineering attack where attackers impersonate trusted entities (exchanges,
        wallets, merchants) to trick victims into revealing sensitive information or sending
        funds to attacker-controlled addresses.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Anatomy of a Phishing Attack</h3>

      <p className="mb-4">
        Bitcoin phishing attacks typically follow a predictable pattern:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Research</strong> - Attacker identifies target and studies the entity to impersonate</li>
        <li><strong>Setup</strong> - Create fake website, emails, or social media accounts</li>
        <li><strong>Lure</strong> - Contact victim with urgent or enticing message</li>
        <li><strong>Hook</strong> - Direct victim to fake site or payment address</li>
        <li><strong>Extraction</strong> - Victim sends funds or reveals credentials</li>
      </ol>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Common Phishing Techniques</h3>

      <Example title="Fake Exchange Login Pages">
        <p className="mb-2">
          Attackers create pixel-perfect copies of popular exchange login pages. Users who
          enter their credentials have their accounts compromised. These sites often appear
          as paid ads above organic search results.
        </p>
        <div className="font-mono text-sm mt-2 space-y-1">
          <p><span className="text-green-400">Legitimate:</span> coinbase.com</p>
          <p><span className="text-red-400">Phishing:</span> c0inbase.com, coinbase-secure.com, coinbase.io</p>
        </div>
      </Example>

      <Example title="Customer Support Impersonation">
        <p className="mb-2">
          Attackers monitor social media for users complaining about wallet or exchange issues.
          They respond posing as official support, directing victims to "verify their wallet"
          by sending a small amount or entering their seed phrase.
        </p>
        <ul className="list-disc list-inside text-dark-400 mt-2">
          <li>Often uses similar usernames with subtle differences</li>
          <li>May create fake support ticket systems</li>
          <li>Preys on frustrated users willing to try anything</li>
        </ul>
      </Example>

      <Example title="Giveaway Scams">
        <p className="mb-2">
          "Send 0.1 BTC to receive 1 BTC back" - a common scam format that promises
          outsized returns. Despite being obviously too good to be true, these scams
          continue to claim victims, especially during market euphoria.
        </p>
        <ul className="list-disc list-inside text-dark-400 mt-2">
          <li>Often impersonates celebrities or companies</li>
          <li>Uses fake social proof ("10,000 people already participated!")</li>
          <li>Creates artificial urgency ("Only 1 hour left!")</li>
        </ul>
      </Example>

      <Callout type="danger" title="The Twitter Bitcoin Hack">
        In July 2020, attackers compromised verified Twitter accounts including Elon Musk,
        Bill Gates, and Apple to promote a Bitcoin giveaway scam. Despite being an obvious
        scam, victims sent over $120,000 worth of Bitcoin within hours.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Social Engineering Tactics</h3>

      <Definition title="Urgency">
        Creating artificial time pressure to prevent victims from thinking critically.
        "Your account will be locked in 2 hours" or "Limited time offer expires soon."
      </Definition>

      <Definition title="Authority">
        Impersonating trusted figures or institutions. Using official logos, language,
        and formatting to appear legitimate.
      </Definition>

      <Definition title="Fear">
        Threatening negative consequences. "Suspicious activity detected" or "Your
        account has been compromised."
      </Definition>

      <Definition title="Greed">
        Promising unrealistic rewards. "Exclusive airdrop" or "Early investor opportunity."
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Business Email Compromise</h3>

      <p className="mb-4">
        One of the most dangerous phishing variants targets businesses through email:
      </p>

      <Example title="Invoice Fraud Scenario">
        <p className="mb-2">
          An attacker monitors communication between a business and their supplier. When a
          legitimate invoice is expected, they send a spoofed email:
        </p>
        <div className="bg-dark-800 p-4 rounded mt-2 font-mono text-sm">
          <p className="text-dark-400">From: accounting@supp1ier.com (note the '1' instead of 'l')</p>
          <p className="text-dark-400">Subject: RE: Invoice #4521 - Updated Payment Details</p>
          <p className="mt-2">Please note our Bitcoin address has changed for this payment.</p>
          <p>New address: bc1qattacker...</p>
        </div>
      </Example>

      <p className="mb-4">
        These attacks succeed because:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>The timing is realistic (coinciding with actual business)</li>
        <li>The context is appropriate (real invoice numbers, amounts)</li>
        <li>The request seems reasonable (businesses do change addresses)</li>
        <li>Verification adds friction that busy employees skip</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Traditional Defenses Fail</h3>

      <p className="mb-4">
        Standard anti-phishing measures have limited effectiveness against Bitcoin attacks:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Email filters</strong> - Can catch some phishing but not targeted BEC attacks</li>
        <li><strong>SSL certificates</strong> - Attackers can get valid certificates for their domains</li>
        <li><strong>Browser warnings</strong> - Often come after the damage is done</li>
        <li><strong>User training</strong> - Helps but cannot eliminate human error</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How Branta Defeats Phishing</h3>

      <p className="mb-4">
        Branta's verification system breaks the phishing attack chain at its core:
      </p>

      <Callout type="success" title="Verified Identity">
        Phishing relies on impersonation. Branta's registration system means legitimate
        businesses have their addresses on record. When you verify before sending, a
        phishing address will either not be registered or will show as belonging to
        someone else.
      </Callout>

      <p className="mb-4">
        Consider the business email compromise scenario with Branta:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>Attacker sends fake invoice with their address</li>
        <li>Before paying, employee queries Branta: "Does this address belong to SupplierCo?"</li>
        <li>Branta responds: "This address is not registered" or "This address belongs to UnknownEntity"</li>
        <li>Employee contacts supplier through known channels to verify</li>
        <li>Attack is thwarted</li>
      </ol>

      <p className="mb-4">
        The key difference: instead of trusting the address in the email, there's an
        independent source of truth. Attackers cannot register their addresses as
        belonging to legitimate businesses, so the verification fails.
      </p>

      <Callout type="info" title="Defense in Depth">
        Branta works alongside other security measures, not as a replacement. Good security
        practices like email filtering, employee training, and multi-factor authentication
        remain important. Branta adds the final verification layer that catches attacks
        that slip through other defenses.
      </Callout>
    </LessonLayout>
  );
}
