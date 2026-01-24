import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InvoiceDecoder } from '@/components/visualizations';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BOLT #11: Invoice Encoding</h2>

      <InvoiceDecoder className="mb-8" />

      <p className="mb-4">
        BOLT #11 defines the format for Lightning invoices (payment requests). These invoices
        encode all the information a payer needs to make a payment, including the payment hash,
        amount, and routing hints.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Invoice Structure</h3>

      <p className="mb-4">
        A BOLT #11 invoice consists of three main parts:
      </p>

      <Definition title="Invoice Components">
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li><strong>Human-Readable Part:</strong> Prefix + optional amount</li>
          <li><strong>Data Part:</strong> Timestamp + tagged fields</li>
          <li><strong>Signature:</strong> 65-byte secp256k1 signature</li>
        </ol>
      </Definition>

      <Example title="Invoice Example">
        <div className="font-mono text-xs bg-dark-800 p-3 rounded break-all">
          lnbc2500u1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq5xysxxatsyp3k7enxv4jsxqzpuaztrnwngzn3kdzw5hydlzf03qdgm2hdq27cqv3agm2awhz5se903vruatfhq77w3ls4evs3ch9zw97j25emudupq63nyw24cg27h2rspfj9srp
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Human-Readable Part</h3>

      <Definition title="Prefix Format">
        The prefix indicates the network and optionally the amount:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>lnbc:</strong> Bitcoin mainnet</li>
          <li><strong>lntb:</strong> Bitcoin testnet</li>
          <li><strong>lnbcrt:</strong> Bitcoin regtest</li>
          <li><strong>lnsb:</strong> Bitcoin signet</li>
        </ul>
      </Definition>

      <Definition title="Amount Encoding">
        After the prefix, an optional amount with multiplier:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>m:</strong> milli (0.001 BTC)</li>
          <li><strong>u:</strong> micro (0.000001 BTC)</li>
          <li><strong>n:</strong> nano (0.000000001 BTC)</li>
          <li><strong>p:</strong> pico (0.000000000001 BTC)</li>
        </ul>
        Example: lnbc2500u = 2500 microsatoshis = 0.0025 BTC = 250,000 sats
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Data Part</h3>

      <p className="mb-4">
        The data part uses bech32 encoding and contains:
      </p>

      <Example title="Data Part Structure">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Field</th>
              <th className="text-left py-2">Size</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">Timestamp</td>
              <td className="py-2">35 bits (seconds since 1970)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Tagged fields</td>
              <td className="py-2">Variable</td>
            </tr>
            <tr>
              <td className="py-2">Signature</td>
              <td className="py-2">520 bits (104 bech32 chars)</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Tagged Fields</h3>

      <p className="mb-4">
        Tagged fields encode payment details using a type-length-value format:
      </p>

      <Example title="Essential Tagged Fields">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Tag</th>
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">p</td>
              <td className="py-2">payment_hash</td>
              <td className="py-2">32-byte payment hash (required)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">s</td>
              <td className="py-2">payment_secret</td>
              <td className="py-2">32-byte secret for MPP (required)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">d</td>
              <td className="py-2">description</td>
              <td className="py-2">Short UTF-8 description</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">h</td>
              <td className="py-2">description_hash</td>
              <td className="py-2">SHA256 of long description</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">x</td>
              <td className="py-2">expiry</td>
              <td className="py-2">Seconds until invoice expires</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">c</td>
              <td className="py-2">min_final_cltv_expiry_delta</td>
              <td className="py-2">Minimum CLTV for final hop</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">n</td>
              <td className="py-2">payee_pubkey</td>
              <td className="py-2">Recipient's node ID (if not in signature)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">r</td>
              <td className="py-2">routing_hints</td>
              <td className="py-2">Private channel routing info</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">f</td>
              <td className="py-2">fallback_address</td>
              <td className="py-2">On-chain fallback address</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="Required Fields">
        Every invoice MUST include:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Exactly one payment_hash (p)</li>
          <li>Exactly one payment_secret (s)</li>
          <li>Either description (d) OR description_hash (h)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Routing Hints</h3>

      <p className="mb-4">
        For recipients with only private channels, routing hints tell the payer how to reach them:
      </p>

      <Definition title="Routing Hint Structure">
        Each routing hint contains:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>pubkey:</strong> Node ID of the channel partner</li>
          <li><strong>short_channel_id:</strong> The private channel ID</li>
          <li><strong>fee_base_msat:</strong> Base routing fee</li>
          <li><strong>fee_proportional_millionths:</strong> Proportional fee</li>
          <li><strong>cltv_expiry_delta:</strong> Timelock delta</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Feature Bits</h3>

      <p className="mb-4">
        Invoices can specify required payment features:
      </p>

      <Theorem title="Invoice Feature Rules">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Feature bits follow the "odd = optional, even = required" rule</li>
          <li>Payers MUST reject invoices with unknown even feature bits</li>
          <li>Payers MAY ignore unknown odd feature bits</li>
          <li>Common features: payment_secret, basic_mpp, var_onion_optin</li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signature</h3>

      <p className="mb-4">
        The invoice is signed using the recipient's node key:
      </p>

      <Definition title="Signature Format">
        The 520-bit signature consists of:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>r value:</strong> 256 bits</li>
          <li><strong>s value:</strong> 256 bits</li>
          <li><strong>recovery flag:</strong> 8 bits (for pubkey recovery)</li>
        </ul>
        The public key can be recovered from the signature, so the n field is optional.
      </Definition>

      <Callout type="warning" title="Invoice Security">
        <ul className="list-disc list-inside space-y-1">
          <li>Invoices should be single-use (unique payment_hash)</li>
          <li>Set reasonable expiry times (default: 1 hour)</li>
          <li>Sanitize description to prevent injection attacks</li>
          <li>Payment secrets prevent probing attacks</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
