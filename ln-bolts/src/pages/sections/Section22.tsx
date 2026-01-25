import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BOLT #12: Offers</h2>

      <p className="mb-4">
        BOLT #12 introduces "offers"—a more flexible payment protocol that enables reusable
        payment codes, payer/payee negotiation, and improved privacy through blinded paths.
        Offers are designed to replace many use cases of BOLT #11 invoices.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Offer Flow</h3>

      <p className="mb-4">
        Unlike BOLT #11 where invoices are generated out-of-band, BOLT #12 uses an in-band
        negotiation protocol:
      </p>

      <Example title="Offer Payment Flow">
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Merchant publishes offer:</strong> Static, reusable payment code</li>
          <li><strong>Payer sends invoice_request:</strong> Over onion message to merchant</li>
          <li><strong>Merchant sends invoice:</strong> Generated for this specific request</li>
          <li><strong>Payer makes payment:</strong> Using the received invoice</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Offer Format</h3>

      <Definition title="Offer Structure">
        Offers use the "lno" prefix and TLV encoding:
        <div className="font-mono text-xs bg-dark-800 p-3 rounded mt-2 break-all">
          lno1pqps7sjqpgtyzm3qv4uxzmtsd3jjqer9wd3hy6tsw35k7msjzfpy7nz5yqcnygrfdej82um5wf5k2uckyypwa3eyt44h6txtxquqh7lz5djge4afgfjn7k4rgrkuag0jsd5xvxg
        </div>
      </Definition>

      <Example title="Key Offer Fields">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Field</th>
              <th className="text-left py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">offer_chains</td>
              <td className="py-2">Which blockchains are accepted</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">offer_amount</td>
              <td className="py-2">Price (optional—payer can specify)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">offer_description</td>
              <td className="py-2">What's being paid for</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">offer_issuer</td>
              <td className="py-2">Human-readable merchant name</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">offer_issuer_id</td>
              <td className="py-2">Merchant's node ID (or blinded)</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">offer_paths</td>
              <td className="py-2">Blinded paths to reach merchant</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Invoice Request</h3>

      <p className="mb-4">
        The payer sends an invoice_request to obtain a specific invoice:
      </p>

      <Definition title="Invoice Request Fields">
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>invreq_chain:</strong> Which blockchain to use</li>
          <li><strong>invreq_amount:</strong> Amount to pay (if not in offer)</li>
          <li><strong>invreq_payer_id:</strong> Payer's ephemeral key (for privacy)</li>
          <li><strong>invreq_payer_note:</strong> Optional message to merchant</li>
          <li><strong>invreq_quantity:</strong> Number of items (if applicable)</li>
        </ul>
      </Definition>

      <Callout type="info" title="Onion Messages">
        Invoice requests are sent via onion messages (BOLT #4 extension), not through
        regular Lightning payments. This allows communication without channels.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BOLT #12 Invoice</h3>

      <p className="mb-4">
        The merchant responds with a BOLT #12 invoice (different from BOLT #11):
      </p>

      <Example title="BOLT #12 Invoice Fields">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Field</th>
              <th className="text-left py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">invoice_paths</td>
              <td className="py-2">Blinded paths for payment</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">invoice_payment_hash</td>
              <td className="py-2">The payment hash</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">invoice_amount</td>
              <td className="py-2">Exact amount to pay</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">invoice_created_at</td>
              <td className="py-2">Unix timestamp</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">invoice_relative_expiry</td>
              <td className="py-2">Seconds until expiry</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Refunds (Merchant-Pays-User)</h3>

      <p className="mb-4">
        BOLT #12 also supports the reverse flow where merchants pay users:
      </p>

      <Theorem title="Refund Flow">
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>User creates an offer for receiving funds</li>
          <li>Merchant sends invoice_request to user's offer</li>
          <li>User responds with invoice</li>
          <li>Merchant pays the invoice</li>
        </ol>
        This enables refunds, withdrawals, and pull payments.
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantages Over BOLT #11</h3>

      <Example title="BOLT #12 Benefits">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Feature</th>
              <th className="text-left py-2">BOLT #11</th>
              <th className="text-left py-2">BOLT #12</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">Reusability</td>
              <td className="py-2">Single use</td>
              <td className="py-2">Reusable offers</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Privacy</td>
              <td className="py-2">Reveals node ID</td>
              <td className="py-2">Blinded paths</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Refunds</td>
              <td className="py-2">Not supported</td>
              <td className="py-2">Native support</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Amount</td>
              <td className="py-2">Fixed or zero</td>
              <td className="py-2">Negotiable</td>
            </tr>
            <tr>
              <td className="py-2">Currency</td>
              <td className="py-2">BTC only</td>
              <td className="py-2">Multi-currency</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Encoding</h3>

      <p className="mb-4">
        BOLT #12 uses a modified bech32 encoding:
      </p>

      <Definition title="BOLT #12 Encoding">
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Offers:</strong> "lno" prefix</li>
          <li><strong>Invoice requests:</strong> "lnr" prefix</li>
          <li><strong>Invoices:</strong> "lni" prefix</li>
          <li><strong>No checksum:</strong> QR codes have built-in error correction</li>
          <li><strong>+ separator:</strong> Allowed for breaking long strings</li>
        </ul>
      </Definition>

      <Callout type="success" title="QR Code Friendly">
        BOLT #12 is optimized for QR codes:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Offers are static—print once, use forever</li>
          <li>Shorter than equivalent BOLT #11 invoices</li>
          <li>+ separators for multi-line display</li>
          <li>No checksum overhead (QR provides it)</li>
        </ul>
      </Callout>

      <Callout type="warning" title="Current Status">
        BOLT #12 is still being adopted. Check your wallet/node implementation for support.
        Some features like recurring payments are planned but not yet specified.
      </Callout>
    </LessonLayout>
  );
}
