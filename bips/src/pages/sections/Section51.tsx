import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-71: Payment Protocol MIME Types</h2>

      <p className="mb-4">
        BIP-71 defined MIME (content) types for BIP-70 payment protocol messages. While
        deprecated along with BIP-70, it provides insight into how application protocols
        integrate with web infrastructure.
      </p>

      <Callout type="warning" title="Deprecated with BIP-70">
        <p>
          Since BIP-70 is deprecated, BIP-71's MIME types are no longer in use. This
          section is included for historical completeness.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What are MIME Types?</h3>

      <Definition title="MIME Type">
        <p>
          MIME (Multipurpose Internet Mail Extensions) types identify the format of data
          transmitted over the internet. They tell browsers and applications how to
          handle received content.
        </p>
        <div className="font-mono text-sm text-amber-400 mt-3">
          type/subtype (e.g., application/json, image/png)
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-71 MIME Types</h3>

      <p className="mb-4">
        BIP-71 registered three MIME types for Bitcoin payment messages:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">MIME Type</th>
              <th className="text-left py-3 text-dark-300">Message</th>
              <th className="text-left py-3 text-dark-300">Extension</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-xs text-amber-400">
                application/bitcoin-paymentrequest
              </td>
              <td>PaymentRequest</td>
              <td>.bitcoinpaymentrequest</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-xs text-amber-400">
                application/bitcoin-payment
              </td>
              <td>Payment</td>
              <td>.bitcoinpayment</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-xs text-amber-400">
                application/bitcoin-paymentack
              </td>
              <td>PaymentACK</td>
              <td>.bitcoinpaymentack</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTTP Usage</h3>

      <Example title="HTTP Headers with BIP-71">
        <div className="space-y-4 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Merchant sends PaymentRequest:</p>
            <p className="text-dark-300">Content-Type: application/bitcoin-paymentrequest</p>
            <p className="text-dark-300">Content-Transfer-Encoding: binary</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Wallet requests PaymentRequest:</p>
            <p className="text-dark-300">Accept: application/bitcoin-paymentrequest</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Wallet sends Payment:</p>
            <p className="text-dark-300">Content-Type: application/bitcoin-payment</p>
            <p className="text-dark-300">Accept: application/bitcoin-paymentack</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">File Extensions</h3>

      <p className="mb-4">
        BIP-71 also defined file extensions for saving payment messages:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <code className="text-amber-400">.bitcoinpaymentrequest</code> - Saved payment requests
          </li>
          <li>
            <code className="text-amber-400">.bitcoinpayment</code> - Saved payment messages
          </li>
          <li>
            <code className="text-amber-400">.bitcoinpaymentack</code> - Saved acknowledgments
          </li>
        </ul>
        <p className="text-dark-500 text-sm mt-3">
          These extensions allowed operating systems to associate files with Bitcoin wallets.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Interaction</h3>

      <p className="mb-4">
        The MIME types enabled content negotiation between wallets and servers:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Full HTTP request flow:</p>
        <p className="text-dark-300">1. Wallet: GET /pay?order=123</p>
        <p className="text-dark-500 ml-4">Accept: application/bitcoin-paymentrequest</p>
        <p className="text-dark-300 mt-2">2. Server: 200 OK</p>
        <p className="text-dark-500 ml-4">Content-Type: application/bitcoin-paymentrequest</p>
        <p className="text-dark-500 ml-4">[serialized PaymentRequest]</p>
        <p className="text-dark-300 mt-2">3. Wallet: POST /pay</p>
        <p className="text-dark-500 ml-4">Content-Type: application/bitcoin-payment</p>
        <p className="text-dark-500 ml-4">Accept: application/bitcoin-paymentack</p>
        <p className="text-dark-300 mt-2">4. Server: 200 OK</p>
        <p className="text-dark-500 ml-4">Content-Type: application/bitcoin-paymentack</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">IANA Registration</h3>

      <p className="mb-4">
        BIP-71 specified IANA (Internet Assigned Numbers Authority) registration:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Formal registration with IANA media types registry</li>
          <li>Reference to BIP-70 for message format specification</li>
          <li>Binary encoding (not text-based)</li>
          <li>No additional parameters defined</li>
        </ul>
      </div>

      <Callout type="info" title="Standards Process">
        <p>
          Registering MIME types with IANA ensures interoperability across different
          implementations. It's an example of how Bitcoin protocols can integrate with
          existing internet standards infrastructure.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Parallels</h3>

      <p className="mb-4">
        While BIP-71 is deprecated, the concept of content types persists:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Lightning Invoices</p>
          <p className="text-sm text-dark-300">
            BOLT-11 invoices are text-based (no MIME type needed), but could theoretically
            use <code>application/lightning-invoice</code>.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">PSBT</p>
          <p className="text-sm text-dark-300">
            Partially Signed Bitcoin Transactions use Base64 encoding over standard
            text transport—no special MIME type required.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">JSON APIs</p>
          <p className="text-sm text-dark-300">
            Modern Bitcoin services typically use <code>application/json</code> for
            all communication.
          </p>
        </div>
      </div>

      <Callout type="success" title="Design Lesson">
        <p>
          BIP-71 shows thoughtful protocol design—defining MIME types for proper web
          integration. However, its complexity (binary protobuf over HTTP) contributed
          to BIP-70's failure. Modern Bitcoin protocols favor simpler, text-based formats
          that work without special content type negotiation.
        </p>
      </Callout>
    </LessonLayout>
  );
}
