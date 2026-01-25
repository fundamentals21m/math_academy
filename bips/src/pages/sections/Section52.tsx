import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-72: Payment Protocol URIs</h2>

      <p className="mb-4">
        BIP-72 extended BIP-21 URIs with a parameter for BIP-70 payment request URLs. It
        allowed merchants to include both a fallback address and a payment protocol endpoint
        in a single URI. Like BIP-70/71, it's now deprecated.
      </p>

      <Callout type="warning" title="Deprecated with BIP-70">
        <p>
          BIP-72 is deprecated along with BIP-70. The "r" parameter it defined is no
          longer recommended for use.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Extension</h3>

      <Definition title="The 'r' Parameter">
        <p>
          BIP-72 added a single parameter to BIP-21 URIs: the "r" parameter pointing to
          a payment request URL where wallets could fetch a BIP-70 PaymentRequest.
        </p>
        <div className="font-mono text-sm text-amber-400 mt-3">
          bitcoin:address?r=https://merchant.com/pay/invoice123
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">URI Format</h3>

      <Example title="BIP-72 URI Examples">
        <div className="space-y-4 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Payment request URL only:</p>
            <p className="text-dark-300 break-all">
              bitcoin:?r=https://merchant.com/pay/123
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># With fallback address:</p>
            <p className="text-dark-300 break-all">
              bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?r=https://merchant.com/pay/123
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># With amount and request URL:</p>
            <p className="text-dark-300 break-all">
              bitcoin:1A1zP1...?amount=0.001&r=https://merchant.com/pay/123
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Processing Flow</h3>

      <p className="mb-4">
        Wallets processed BIP-72 URIs with specific precedence:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Wallet behavior:</p>
        <p className="text-dark-300">1. If "r" parameter present:</p>
        <p className="text-dark-500 ml-4">a. Fetch PaymentRequest from URL</p>
        <p className="text-dark-500 ml-4">b. Validate signatures and certificates</p>
        <p className="text-dark-500 ml-4">c. Use PaymentRequest details (ignore URI params)</p>
        <p className="text-dark-300 mt-2">2. If fetch fails or "r" absent:</p>
        <p className="text-dark-500 ml-4">Fall back to address/amount from URI</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Backward Compatibility</h3>

      <p className="mb-4">
        BIP-72's design ensured backward compatibility:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">BIP-72 Wallet</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Fetches PaymentRequest from "r" URL</li>
            <li>Gets verified merchant details</li>
            <li>Uses signed payment instructions</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">BIP-21-Only Wallet</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Ignores unknown "r" parameter</li>
            <li>Uses address from URI</li>
            <li>Payment still works (less info)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Considerations</h3>

      <Callout type="warning" title="HTTPS Required">
        <p>
          BIP-72 required the "r" parameter URL to use HTTPS to prevent man-in-the-middle
          attacks. An attacker intercepting HTTP could substitute malicious PaymentRequests.
        </p>
        <div className="font-mono text-sm mt-3">
          <p className="text-emerald-400">✓ r=https://merchant.com/pay</p>
          <p className="text-rose-400">✗ r=http://merchant.com/pay</p>
        </div>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Problems Inherited</h3>

      <p className="mb-4">
        BIP-72 inherited all of BIP-70's problems:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Privacy leak:</strong> Wallet contacts merchant server before paying
          </li>
          <li>
            <strong>Availability dependency:</strong> Payment fails if server is down
          </li>
          <li>
            <strong>Complexity:</strong> Simple URI now requires HTTP fetching, cert validation
          </li>
          <li>
            <strong>CA trust:</strong> Still depends on X.509 certificate infrastructure
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Alternatives</h3>

      <p className="mb-4">
        The same goals can be achieved with simpler approaches:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">BIP-21 + Lightning</p>
          <p className="text-sm text-dark-300">
            Include Lightning invoice in URI: <code>bitcoin:addr?lightning=lnbc...</code>
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">BIP-78 Payjoin</p>
          <p className="text-sm text-dark-300">
            Uses "pj" parameter: <code>bitcoin:addr?pj=https://...</code> for privacy-enhancing
            interactive payments.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Static QR + Invoice Server</p>
          <p className="text-sm text-dark-300">
            Dynamic invoice generation without BIP-70 complexity—used by BTCPay Server and others.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Legacy Usage</h3>

      <Example title="How BIP-72 Was Used">
        <div className="space-y-3 text-dark-300">
          <p className="text-dark-400 mb-2">Typical merchant checkout flow:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Customer clicks "Pay with Bitcoin" button</li>
            <li>Merchant generates unique payment request URL</li>
            <li>QR code shown with BIP-72 URI</li>
            <li>Wallet scans, fetches PaymentRequest from "r" URL</li>
            <li>Wallet displays verified merchant name and amount</li>
            <li>Customer confirms, wallet sends Payment to merchant</li>
            <li>Merchant broadcasts transaction, sends PaymentACK</li>
          </ol>
        </div>
      </Example>

      <Callout type="success" title="Design Insight">
        <p>
          BIP-72 shows good backward-compatible design: wallets that didn't support it
          could still process the URI. This pattern—adding optional enhancement parameters
          to existing standards—is widely used in Bitcoin development (see: Lightning
          parameter in BIP-21, Payjoin parameter in BIP-78).
        </p>
      </Callout>
    </LessonLayout>
  );
}
