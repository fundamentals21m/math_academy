import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">UI/UX Best Practices</h2>

      <p className="mb-4">
        Effective verification isn't just about API integration—it's about presenting
        verification in a way that users understand and trust. This section covers best
        practices for implementing Branta verification in your user interface.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Web Verification Pages</h3>

      <p className="mb-4">
        Branta provides hosted verification pages that allow users to verify addresses
        from any browser without requiring your application to build custom UI:
      </p>

      <Definition title="Verification URL">
        A portable web page where users can enter or view an address and see its verification
        status. No apps, login, or installation required.
        <div className="mt-2 font-mono text-sm">
          https://guardrail.branta.pro/v1/verify/address
        </div>
      </Definition>

      <p className="mb-4">
        Benefits of using Branta's hosted verification pages:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Universal access</strong> - Works on any device with a browser</li>
        <li><strong>Trusted domain</strong> - Users verify on branta.pro, not your site</li>
        <li><strong>Always current</strong> - Branta maintains the verification UI</li>
        <li><strong>Cross-device verification</strong> - Easy to open on a separate device</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Displaying Verification Status</h3>

      <p className="mb-4">
        When showing verification status in your application, follow these principles:
      </p>

      <Example title="Clear Visual Indicators">
        <div className="space-y-4">
          <div className="bg-dark-800 p-4 rounded flex items-center space-x-3">
            <span className="text-2xl">✓</span>
            <div>
              <p className="text-green-400 font-semibold">Verified</p>
              <p className="text-dark-400 text-sm">This address is registered to Example Merchant</p>
            </div>
          </div>
          <div className="bg-dark-800 p-4 rounded flex items-center space-x-3">
            <span className="text-2xl">⚠</span>
            <div>
              <p className="text-yellow-400 font-semibold">Unverified</p>
              <p className="text-dark-400 text-sm">This address is not registered with Branta</p>
            </div>
          </div>
          <div className="bg-dark-800 p-4 rounded flex items-center space-x-3">
            <span className="text-2xl">✗</span>
            <div>
              <p className="text-red-400 font-semibold">Warning</p>
              <p className="text-dark-400 text-sm">This address is registered to a different entity</p>
            </div>
          </div>
        </div>
      </Example>

      <Callout type="info" title="Color Consistency">
        Use consistent colors throughout your application: green for verified, yellow for
        unknown/unverified, and red for potential issues. Users learn to associate these
        colors with verification status.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Checkout Integration</h3>

      <p className="mb-4">
        When integrating verification into checkout flows:
      </p>

      <Example title="Recommended Checkout Layout">
        <div className="bg-dark-800 p-4 rounded">
          <div className="border-b border-dark-700 pb-4 mb-4">
            <p className="text-dark-400 text-sm">Pay to</p>
            <p className="font-mono">bc1qmerchant...</p>
          </div>
          <div className="border-b border-dark-700 pb-4 mb-4">
            <p className="text-dark-400 text-sm">Amount</p>
            <p className="font-semibold">0.001 BTC ($45.00)</p>
          </div>
          <div className="bg-green-900/20 border border-green-800 rounded p-3">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span className="text-green-400 font-semibold">Address Verified by Branta</span>
            </div>
            <p className="text-dark-400 text-sm mt-2">
              This address is confirmed to belong to Example Merchant
            </p>
            <a href="#" className="text-blue-400 text-sm mt-2 inline-block hover:underline">
              Verify independently →
            </a>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Handling Unverified Addresses</h3>

      <p className="mb-4">
        Not all addresses will be verified. Handle this gracefully:
      </p>

      <Example title="Unverified Address Warning">
        <div className="bg-dark-800 p-4 rounded">
          <div className="bg-yellow-900/20 border border-yellow-800 rounded p-3">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">⚠</span>
              <span className="text-yellow-400 font-semibold">Address Not Verified</span>
            </div>
            <p className="text-dark-400 text-sm mt-2">
              This address is not registered with Branta. This doesn't necessarily mean
              it's fraudulent, but we recommend verifying through other means.
            </p>
            <div className="mt-3 space-x-3">
              <button className="bg-dark-700 px-3 py-1 rounded text-sm">
                Contact Merchant
              </button>
              <button className="bg-yellow-700 px-3 py-1 rounded text-sm">
                Proceed Anyway
              </button>
            </div>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Cross-Device Verification</h3>

      <p className="mb-4">
        Encourage users to verify on a separate device for maximum security:
      </p>

      <Example title="QR Code for Mobile Verification">
        <div className="bg-dark-800 p-4 rounded">
          <p className="text-dark-400 text-sm mb-4">
            For extra security, verify this address from your phone:
          </p>
          <div className="bg-white p-4 rounded w-32 h-32 mx-auto mb-4">
            <p className="text-dark-900 text-xs text-center">[QR Code to verification URL]</p>
          </div>
          <p className="text-dark-400 text-sm text-center">
            Scan to verify on a separate device
          </p>
        </div>
      </Example>

      <Callout type="success" title="Defense in Depth">
        Cross-device verification is especially valuable because it requires an attacker
        to compromise multiple devices and networks to successfully fool the user.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Wallet Integration UI</h3>

      <p className="mb-4">
        For wallet developers integrating Branta:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Pre-send check</strong> - Query Branta before showing the send confirmation</li>
        <li><strong>Inline status</strong> - Show verification status next to the address field</li>
        <li><strong>Blocking option</strong> - Option to block sends to unverified addresses</li>
        <li><strong>History marking</strong> - Mark past transactions with their verification status</li>
      </ul>

      <Example title="Wallet Send Screen">
        <div className="bg-dark-800 p-4 rounded">
          <div className="mb-4">
            <label className="text-dark-400 text-sm">Send to</label>
            <div className="flex items-center mt-1">
              <input
                type="text"
                className="bg-dark-700 flex-1 p-2 rounded-l"
                placeholder="bc1q..."
                defaultValue="bc1qmerchant..."
              />
              <span className="bg-green-700 px-3 py-2 rounded-r">✓</span>
            </div>
            <p className="text-green-400 text-xs mt-1">Verified: Example Merchant</p>
          </div>
          <div className="mb-4">
            <label className="text-dark-400 text-sm">Amount</label>
            <input
              type="text"
              className="bg-dark-700 w-full p-2 rounded mt-1"
              placeholder="0.00"
              defaultValue="0.001"
            />
          </div>
          <button className="w-full bg-green-600 py-2 rounded font-semibold">
            Send
          </button>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Error States</h3>

      <p className="mb-4">
        Handle verification errors gracefully:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Network errors</strong> - "Unable to verify. Check your connection."</li>
        <li><strong>API errors</strong> - "Verification temporarily unavailable."</li>
        <li><strong>Timeout</strong> - "Verification taking too long. Retry?"</li>
      </ul>

      <Callout type="warning" title="Never Block on Errors">
        Don't prevent users from transacting when verification is unavailable. Show a
        warning and let them proceed with extra caution. Branta is an additional safety
        layer, not the sole gatekeeper.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Accessibility</h3>

      <p className="mb-4">
        Ensure verification UI is accessible:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Don't rely solely on color—use icons and text labels</li>
        <li>Support screen readers with proper ARIA labels</li>
        <li>Make verification links keyboard-navigable</li>
        <li>Provide sufficient color contrast</li>
      </ul>
    </LessonLayout>
  );
}
