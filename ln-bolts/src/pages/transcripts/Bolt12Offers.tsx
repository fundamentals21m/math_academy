import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Bolt12Offers() {
  return (
    <TranscriptLayout transcriptId="bolt12-offers">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Offers enable static, reusable payment requests</li>
          <li>Invoice retrieval happens over the Lightning Network itself</li>
          <li>Built-in support for recurring payments and refunds</li>
          <li>Preserves privacy through blinded paths</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem with BOLT 11</h3>

      <p className="mb-4">
        Rusty Russell, who authored both BOLT 11 and BOLT 12, explains the limitation:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;BOLT 11 invoices are like a phone number you can only call once. You need
          a fresh invoice for every payment. Want a donation button? You need a server
          constantly generating invoices. That&apos;s ridiculous for a peer-to-peer system.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Rusty Russell</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How Offers Work</h3>

      <Definition title="Offer Format">
        <p>An offer is like a template for requesting invoices:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Starts with <code className="bg-dark-800 px-1 rounded">lno...</code> (instead of <code className="bg-dark-800 px-1 rounded">lnbc...</code>)</li>
          <li>Contains merchant info, pricing, and a node ID</li>
          <li>Can be printed as QR codes and reused indefinitely</li>
        </ul>
      </Definition>

      <Example title="Offer Flow">
        <ol className="list-decimal list-inside space-y-2">
          <li>Merchant creates offer with pricing and metadata</li>
          <li>Customer scans offer QR code</li>
          <li>Customer&apos;s wallet sends invoice_request through Lightning onion message</li>
          <li>Merchant&apos;s node auto-generates and returns a BOLT 12 invoice</li>
          <li>Customer pays the invoice normally</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Recurring Payments</h3>

      <p className="mb-4">
        Unlike traditional subscriptions, the customer stays in control:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;With BOLT 12 recurring payments, your wallet handles the subscription.
          Want to cancel? Just tell your wallet to stop. No calling customer service,
          no hunting for the cancel button buried in settings.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Rusty Russell</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Refunds with Invoice Requests</h3>

      <Definition title="Refund Flow">
        <p>BOLT 12 introduces <code className="bg-dark-800 px-1 rounded">lni...</code> for requesting invoices from buyers:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Buyer originally paid with offer-generated invoice</li>
          <li>Merchant decides to refund</li>
          <li>Merchant sends invoice_request to buyer (using blinded path from original payment)</li>
          <li>Buyer&apos;s wallet auto-generates refund invoice</li>
          <li>Merchant pays, completing the refund</li>
        </ol>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy with Blinded Paths</h3>

      <Callout type="info" title="Blinded Paths">
        <p>
          Offers can include blinded paths—pre-computed encrypted routes that hide
          the recipient&apos;s node ID. The payer can reach the recipient without knowing
          who they are or where they are in the network.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Merkle Tree Proofs</h3>

      <p className="mb-4">
        BOLT 12 includes cryptographic proofs for selective disclosure:
      </p>

      <Example title="Selective Disclosure">
        <p className="mb-2">A buyer can prove to a third party:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>&quot;I paid exactly 50,000 sats for this item&quot;</li>
          <li>&quot;My delivery address is included in this payment&quot;</li>
          <li>Without revealing other invoice details</li>
        </ul>
        <p className="mt-2 text-sm text-dark-500">
          This uses Merkle trees to commit to all fields while allowing individual proofs.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/21"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 21: BOLT #11 Invoice Encoding
          </p>
          <p className="text-sm text-dark-500">The original invoice format</p>
        </a>
        <a
          href="#/section/22"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 22: BOLT #12 Offers
          </p>
          <p className="text-sm text-dark-500">Static reusable payment requests</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
