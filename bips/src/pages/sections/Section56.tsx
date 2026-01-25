import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-47: Reusable Payment Codes</h2>

      <p className="mb-4">
        BIP-47 defines reusable payment codes—a way to receive payments to unique addresses
        without interactive address exchange. Payment codes enable address reuse avoidance
        while maintaining a single, shareable identifier.
      </p>

      <Callout type="info" title="Also Known As">
        <p>
          BIP-47 payment codes are sometimes called "PayNyms" (Samourai Wallet's branding)
          or "stealth addresses" (though technically distinct from other stealth schemes).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Static addresses have a privacy vs. usability tradeoff:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Reusing Addresses</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Easy to share one address</li>
            <li>All payments visible together</li>
            <li>Transaction history exposed</li>
            <li>Terrible for privacy</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Fresh Addresses</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Great privacy</li>
            <li>Requires interaction each time</li>
            <li>Can't put in email signature</li>
            <li>Inconvenient for recurring payments</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Payment Codes</h3>

      <Definition title="BIP-47 Payment Code">
        <p>
          A payment code is derived from an extended public key (like BIP-32) and can be
          shared publicly. Anyone with your payment code can derive unique addresses for
          you without further interaction.
        </p>
        <div className="font-mono text-xs text-amber-400 mt-3 break-all">
          PM8TJTLJbPRGxSbc8EJi42Wrr6QbNSaSSVJ5Y3E4pbCYiTHUskHg13935...
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How It Works</h3>

      <Example title="Payment Code Flow">
        <div className="space-y-3 text-dark-300">
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              <strong>Alice:</strong> Shares her payment code publicly (website, social media)
            </li>
            <li>
              <strong>Bob:</strong> Wants to pay Alice for the first time
            </li>
            <li>
              <strong>Notification TX:</strong> Bob sends a special "notification" transaction
              to Alice's notification address
            </li>
            <li>
              <strong>Shared Secret:</strong> Both derive a shared secret from ECDH
            </li>
            <li>
              <strong>Payments:</strong> Bob derives unique addresses for Alice using
              the shared secret
            </li>
            <li>
              <strong>Alice scans:</strong> Alice checks for payments using the same derivation
            </li>
          </ol>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Notification Transaction</h3>

      <p className="mb-4">
        The notification transaction establishes a payment channel:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Notification transaction output:</p>
        <p className="text-dark-300">OP_RETURN &lt;blinded_payment_code&gt;</p>
        <p className="text-dark-400 mt-3 mb-2"># Or using designated notification address:</p>
        <p className="text-dark-300">Output to Alice's notification address (derived from payment code)</p>
        <p className="text-dark-500 mt-3">
          Alice monitors her notification address to discover new payers
        </p>
      </div>

      <Callout type="warning" title="Notification Drawback">
        <p>
          The notification transaction is a privacy leak—it's a visible on-chain link
          between sender and receiver. This is BIP-47's main criticism compared to
          Silent Payments (BIP-352) which requires no notification.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Derivation</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Shared secret derivation:</p>
        <p className="text-dark-300">S = bob_private × Alice_pubkey</p>
        <p className="text-dark-300">  = alice_private × Bob_pubkey  (same point!)</p>
        <p className="text-dark-400 mt-3 mb-2"># Payment address derivation:</p>
        <p className="text-dark-300">secret_n = SHA256(S || n)  // n = payment counter</p>
        <p className="text-amber-400">address_n = Alice_address + secret_n × G</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Payment Code Structure</h3>

      <p className="mb-4">
        A version 1 payment code contains:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Version byte:</strong> 0x01 for version 1</li>
          <li><strong>Features byte:</strong> Capabilities bitfield</li>
          <li><strong>Sign byte:</strong> Public key Y coordinate parity</li>
          <li><strong>Public key X:</strong> 32 bytes</li>
          <li><strong>Chain code:</strong> 32 bytes (for HD derivation)</li>
          <li><strong>Reserved:</strong> 13 bytes for future use</li>
        </ul>
        <p className="text-dark-500 text-sm mt-3">
          Total: 80 bytes, Base58Check encoded with version 0x47
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Version 3: SegWit</h3>

      <p className="mb-4">
        BIP-47 version 3 adds SegWit support:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Native SegWit (P2WPKH)</p>
          <p className="text-sm text-dark-300">
            Derived addresses are bc1q... format, reducing fees and improving privacy
            through the SegWit anonymity set.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Notification via OP_RETURN</p>
          <p className="text-sm text-dark-300">
            Blinded payment code in OP_RETURN avoids revealing notification address.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Comparison to Alternatives</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Feature</th>
              <th className="text-left py-3 text-dark-300">BIP-47</th>
              <th className="text-left py-3 text-dark-300">Silent Payments</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Notification TX</td>
              <td className="text-rose-400">Required</td>
              <td className="text-emerald-400">Not needed</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Scanning cost</td>
              <td>Monitor notification address</td>
              <td>Scan all transactions</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">On-chain link</td>
              <td className="text-rose-400">Notification visible</td>
              <td className="text-emerald-400">No link</td>
            </tr>
            <tr>
              <td className="py-3">Wallet support</td>
              <td>Samourai, Sparrow</td>
              <td>Newer, growing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Practical Privacy Tool">
        <p>
          Despite the notification transaction drawback, BIP-47 payment codes are widely
          used and provide real privacy benefits. They're particularly useful for recurring
          payments between parties who have already established a relationship.
        </p>
      </Callout>
    </LessonLayout>
  );
}
