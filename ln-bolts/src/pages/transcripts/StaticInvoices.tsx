import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function StaticInvoices() {
  return (
    <TranscriptLayout transcriptId="static-invoices">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>LNURL uses HTTP servers for dynamic invoice generation</li>
          <li>BOLT 12 Offers use onion messages—no external server needed</li>
          <li>AMP allows spontaneous payments but lacks proof-of-payment</li>
          <li>Each solution has distinct privacy and UX tradeoffs</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Lightning Needs Static Invoices</h3>

      <p className="mb-4">
        Elle Mouton explains the fundamental problem:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Every BOLT 11 invoice contains a unique payment hash. If you reuse an invoice,
          you&apos;re revealing the preimage multiple times, which breaks the security model.
          So we need something static that can generate fresh invoices on demand.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Elle Mouton</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Solution 1: LNURL</h3>

      <Definition title="LNURL-pay">
        <p>Uses an HTTP server to generate invoices:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>User encodes a URL as <code className="bg-dark-800 px-1 rounded">lnurl...</code></li>
          <li>Payer&apos;s wallet fetches the URL</li>
          <li>Server returns payment parameters</li>
          <li>Wallet requests invoice with amount</li>
          <li>Server generates fresh BOLT 11 invoice</li>
        </ol>
      </Definition>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-green-400 font-bold mb-2">LNURL Pros</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Works today with all wallets</li>
            <li>Can include rich metadata</li>
            <li>Supports comments/notes</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-red-400 font-bold mb-2">LNURL Cons</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Requires running an HTTP server</li>
            <li>Server knows all payment requests</li>
            <li>Not native to Lightning protocol</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Solution 2: BOLT 12 Offers</h3>

      <p className="mb-4">
        Offers move invoice retrieval into the Lightning Network itself:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;With Offers, your Lightning node IS the server. Invoice requests come through
          onion messages, so there&apos;s no separate infrastructure to maintain. And you get
          better privacy through blinded paths.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Elle Mouton</cite>
      </blockquote>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-green-400 font-bold mb-2">Offers Pros</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>No external server needed</li>
            <li>Built-in privacy (blinded paths)</li>
            <li>Native protocol integration</li>
            <li>Stronger proof-of-payment</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-red-400 font-bold mb-2">Offers Cons</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Requires onion message support</li>
            <li>Node must be online to respond</li>
            <li>Limited wallet support (improving)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Solution 3: AMP (Atomic Multipath Payments)</h3>

      <Definition title="AMP for Spontaneous Payments">
        <p>AMP allows payments without any invoice:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Sender generates a &quot;root seed&quot; and derives payment parts</li>
          <li>Each part uses a different hash, preventing correlation</li>
          <li>Recipient can only claim when all parts arrive</li>
        </ul>
        <p className="mt-2 text-amber-400">
          <strong>Limitation:</strong> No proof-of-payment since recipient doesn&apos;t provide a preimage.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Comparison Summary</h3>

      <Example title="Static Invoice Solutions">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Feature</th>
              <th className="text-center py-2">LNURL</th>
              <th className="text-center py-2">Offers</th>
              <th className="text-center py-2">AMP</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">External server</td>
              <td className="text-center">Required</td>
              <td className="text-center">No</td>
              <td className="text-center">No</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Proof-of-payment</td>
              <td className="text-center">Yes</td>
              <td className="text-center">Yes</td>
              <td className="text-center">No</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Privacy</td>
              <td className="text-center">Low</td>
              <td className="text-center">High</td>
              <td className="text-center">Medium</td>
            </tr>
            <tr>
              <td className="py-2">Wallet support</td>
              <td className="text-center">Excellent</td>
              <td className="text-center">Growing</td>
              <td className="text-center">LND only</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="Elle&apos;s Recommendation">
        <p>
          &quot;If you&apos;re building today and need broad compatibility, LNURL works.
          If you&apos;re building for the future and care about privacy, invest in Offers support.
          AMP is great for tipping where proof-of-payment doesn&apos;t matter.&quot;
        </p>
      </Callout>
    </TranscriptLayout>
  );
}
