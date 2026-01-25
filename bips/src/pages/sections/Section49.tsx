import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-21: URI Scheme</h2>

      <p className="mb-4">
        BIP-21 defines a standard URI scheme for Bitcoin payments. These "bitcoin:" URIs
        enable clickable links that open wallet applications with payment details pre-filled,
        improving user experience and reducing errors.
      </p>

      <Callout type="info" title="Universal Standard">
        <p>
          BIP-21 URIs are supported by virtually every Bitcoin wallet. When you click a
          payment link or scan a QR code, you're likely interacting with a BIP-21 URI.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">URI Format</h3>

      <Definition title="Bitcoin URI Structure">
        <p>
          A Bitcoin URI starts with "bitcoin:" followed by an address and optional
          query parameters for amount, label, and message.
        </p>
        <div className="font-mono text-sm text-amber-400 mt-3">
          bitcoin:&lt;address&gt;[?param1=value1&amp;param2=value2]
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Standard Parameters</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Parameter</th>
              <th className="text-left py-3 text-dark-300">Type</th>
              <th className="text-left py-3 text-dark-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">amount</td>
              <td>Decimal BTC</td>
              <td>Requested amount (e.g., "0.001")</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">label</td>
              <td>String</td>
              <td>Label for address (recipient name)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">message</td>
              <td>String</td>
              <td>Description of payment purpose</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">req-*</td>
              <td>Various</td>
              <td>Required custom parameters</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Examples</h3>

      <Example title="BIP-21 URI Examples">
        <div className="space-y-4 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Simple address only:</p>
            <p className="text-dark-300 break-all">bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># With amount:</p>
            <p className="text-dark-300 break-all">bitcoin:1A1zP1...?amount=0.001</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># With label and message:</p>
            <p className="text-dark-300 break-all">
              bitcoin:1A1zP1...?amount=0.001&amp;label=Satoshi&amp;message=Pizza%20fund
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Native SegWit address:</p>
            <p className="text-dark-300 break-all">
              bitcoin:bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq?amount=1
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">URL Encoding</h3>

      <p className="mb-4">
        Parameter values must be URL-encoded (percent-encoded):
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Spaces:</strong> Encode as <code className="text-amber-400">%20</code></li>
          <li><strong>Ampersand:</strong> Encode as <code className="text-amber-400">%26</code></li>
          <li><strong>Question mark:</strong> Encode as <code className="text-amber-400">%3F</code></li>
          <li><strong>Unicode:</strong> UTF-8 percent-encoded</li>
        </ul>
      </div>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># URL encoding examples:</p>
        <p className="text-dark-300">message=Donation for website</p>
        <p className="text-dark-500">→ message=Donation%20for%20website</p>
        <p className="text-dark-300 mt-2">label=Bob's Wallet</p>
        <p className="text-dark-500">→ label=Bob%27s%20Wallet</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Required Parameters</h3>

      <p className="mb-4">
        Parameters prefixed with "req-" are required:
      </p>

      <Callout type="warning" title="req- Parameters">
        <p>
          If a wallet doesn't understand a req- parameter, it should refuse to proceed
          with the payment. This ensures critical information isn't ignored.
        </p>
        <div className="font-mono text-sm mt-3">
          bitcoin:addr?req-someparam=value
        </div>
        <p className="text-dark-400 text-sm mt-2">
          Unknown req- parameters should cause the wallet to show an error.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Extensions</h3>

      <p className="mb-4">
        BIP-21 has been extended by other BIPs:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">BIP-70/72: Payment Protocol</p>
          <p className="text-sm text-dark-300">
            Added "r" parameter for payment request URLs (now deprecated).
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Lightning (BOLT-11)</p>
          <p className="text-sm text-dark-300">
            Added "lightning" parameter for including a Lightning invoice alongside
            on-chain address.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Payjoin (BIP-78)</p>
          <p className="text-sm text-dark-300">
            Added "pj" parameter for Payjoin endpoint URLs.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">QR Codes</h3>

      <p className="mb-4">
        BIP-21 URIs are ideal for QR codes:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Self-contained payment instructions</li>
          <li>Mobile wallets register for bitcoin: URI scheme</li>
          <li>Scanning QR opens wallet with details pre-filled</li>
          <li>Reduces transcription errors</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Wallet Integration</h3>

      <Example title="Operating System Integration">
        <div className="space-y-3 text-dark-300">
          <p>When a bitcoin: URI is clicked:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4 mt-3">
            <li>OS checks registered handlers for "bitcoin" scheme</li>
            <li>Registered wallet application opens</li>
            <li>Wallet parses URI, validates address</li>
            <li>Send screen opens with amount/label pre-filled</li>
            <li>User confirms and signs transaction</li>
          </ol>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Best Practices</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Do</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Always include the address</li>
            <li>Use amount for fixed payments</li>
            <li>URL-encode parameter values</li>
            <li>Test URIs before deploying</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Don't</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Omit the address entirely</li>
            <li>Use req- for optional params</li>
            <li>Include sensitive data in URIs</li>
            <li>Assume all wallets support extensions</li>
          </ul>
        </div>
      </div>

      <Callout type="success" title="Universal Interoperability">
        <p>
          BIP-21 is one of Bitcoin's most successful standards. Its simplicity and
          universal adoption make it the foundation for user-friendly Bitcoin payments,
          whether via website links, QR codes, or payment buttons.
        </p>
      </Callout>
    </LessonLayout>
  );
}
