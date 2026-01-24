import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Slp611() {
  return (
    <TranscriptLayout transcriptId="slp-611">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Address swap attacks are becoming more sophisticated and harder to detect</li>
          <li>Branta's Guardrail provides pre-payment verification without touching your keys</li>
          <li>The system supports both on-chain Bitcoin and Lightning Network payments</li>
          <li>Privacy is preserved—Branta doesn't need to know your transaction details</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Growing Threat of Bitcoin Scams</h3>

      <p className="mb-4">
        Keith Gardner opens by describing the evolving landscape of Bitcoin security threats.
        As Bitcoin adoption grows, so do the sophistication of attacks targeting users:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "When you're sending Bitcoin, there's this moment of vulnerability—you've copied an address,
          you're about to paste it, and you trust that what you're pasting is what you copied. That
          trust is being exploited."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Keith Gardner</cite>
      </blockquote>

      <Definition title="Address Swap Attack">
        <p>
          An attack where malware on the user's device monitors the clipboard for Bitcoin addresses
          and replaces them with an attacker's address. The user unknowingly sends funds to the
          wrong destination.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How Guardrail Works</h3>

      <p className="mb-4">
        Stephan asks Keith to explain how Branta's verification system operates without
        requiring access to private keys or transaction data:
      </p>

      <Example title="The Verification Flow">
        <ol className="list-decimal list-inside space-y-2">
          <li>Merchant registers their payment address with Branta</li>
          <li>Customer receives the address and wants to verify it</li>
          <li>Customer queries Branta: "Is this address registered to MerchantCo?"</li>
          <li>Branta confirms or denies the registration</li>
          <li>Customer proceeds with confidence (or stops if something's wrong)</li>
        </ol>
      </Example>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "We never see your keys. We never see how much you're sending. All we know is that
          someone asked 'is this address registered?' That's it. The verification happens
          entirely outside your transaction flow."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Keith Gardner</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Real-World Attack Scenarios</h3>

      <p className="mb-4">
        Keith describes several attack vectors that Guardrail helps prevent:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-red-400 font-bold mb-2">Clipboard Hijacking</p>
          <p className="text-sm text-dark-300">
            Malware silently monitors for Bitcoin addresses and replaces them with attacker addresses
            before the user can paste.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-red-400 font-bold mb-2">Phishing Sites</p>
          <p className="text-sm text-dark-300">
            Fake merchant websites display attacker addresses instead of legitimate payment destinations.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-red-400 font-bold mb-2">Man-in-the-Middle</p>
          <p className="text-sm text-dark-300">
            Network-level attacks intercept and modify payment pages to substitute addresses.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-red-400 font-bold mb-2">Supply Chain Attacks</p>
          <p className="text-sm text-dark-300">
            Compromised libraries or dependencies inject address-swapping code into applications.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning Network Support</h3>

      <p className="mb-4">
        The conversation turns to how Guardrail handles Lightning Network payments:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Lightning invoices are interesting because they're inherently time-limited. We match
          our registration TTL to the invoice expiry, so verification stays in sync with when
          the payment can actually be made."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Keith Gardner</cite>
      </blockquote>

      <Example title="Lightning Invoice Verification">
        <p className="mb-2">
          A BOLT-11 invoice contains encoded payment details. Branta registers the invoice
          and allows verification without exposing:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>The payment amount</li>
          <li>The destination node's identity (beyond what's registered)</li>
          <li>The payment hash or preimage</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Considerations</h3>

      <p className="mb-4">
        Stephan raises concerns about privacy implications of address verification:
      </p>

      <Callout type="info" title="Privacy-Preserving Design">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Branta sees verification queries, not transactions</li>
          <li>No correlation between queries and actual payments</li>
          <li>Zero-knowledge verification options in development</li>
          <li>Users can verify from separate devices for additional privacy</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mobile Integration Plans</h3>

      <p className="mb-4">
        Keith discusses the roadmap for mobile wallet integration:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "We're working with wallet developers to integrate verification directly into the
          send flow. When you scan a QR code, the wallet can automatically check if that
          address is registered before you even see the confirmation screen."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Keith Gardner</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Cold Storage and Multi-Signature</h3>

      <p className="mb-4">
        The discussion extends to how Branta fits into more sophisticated custody setups:
      </p>

      <Example title="Multi-Sig Workflow">
        <p className="mb-2">
          For businesses using multi-signature custody:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Payment request created with destination address</li>
          <li>First signer verifies address with Branta before signing</li>
          <li>Verification result logged as part of approval chain</li>
          <li>Subsequent signers see prior verification</li>
          <li>Transaction proceeds only after full quorum</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Friction Trade-Off</h3>

      <p className="mb-4">
        Stephan asks about the balance between security and user experience:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Some friction is actually good. If it takes you an extra 5 seconds to verify an
          address, but that 5 seconds saves you from losing everything—that's friction worth
          having. The goal isn't zero friction, it's the right amount of friction."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Keith Gardner</cite>
      </blockquote>

      <Callout type="success" title="Key Insight">
        Security measures that add slight friction can prevent catastrophic losses. The brief
        moment of verification is worth the protection against irreversible theft.
      </Callout>
    </TranscriptLayout>
  );
}
