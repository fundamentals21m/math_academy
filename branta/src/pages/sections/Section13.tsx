import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BTCPay Server Plugin</h2>

      <p className="mb-4">
        BTCPay Server is a self-hosted, open-source Bitcoin payment processor used by thousands
        of merchants worldwide. Branta provides an official plugin that integrates Guardrail
        verification directly into BTCPay Server's checkout flow, allowing merchants to offer
        verified payment addresses to their customers.
      </p>

      <Definition title="BTCPay Server">
        A free, open-source Bitcoin payment processor that allows merchants to accept Bitcoin
        directly without relying on third-party processors. It supports on-chain payments,
        Lightning Network, and various e-commerce integrations.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Use the Plugin?</h3>

      <p className="mb-4">
        The Branta BTCPay plugin provides several benefits:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Automatic registration</strong> - Payment addresses are registered when invoices are created</li>
        <li><strong>No code changes</strong> - Plugin handles all Branta integration</li>
        <li><strong>Verification links</strong> - Checkout pages include verification URLs</li>
        <li><strong>Customer confidence</strong> - Buyers can verify before paying</li>
      </ul>

      <Callout type="success" title="Customer Quote">
        "With Branta, customers can easily verify that the payment destination in BTCPay
        checkouts truly belongs to the business they're trying to pay."
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Installation</h3>

      <p className="mb-4">
        The Branta plugin can be installed from the BTCPay Server plugin marketplace:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>Log into your BTCPay Server admin panel</li>
        <li>Navigate to Server Settings → Plugins</li>
        <li>Search for "Branta" in the plugin marketplace</li>
        <li>Click Install and restart BTCPay Server when prompted</li>
      </ol>

      <Example title="Manual Installation">
        <p className="mb-2">
          For advanced users, the plugin can also be installed from source:
        </p>
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`# Clone the plugin repository
git clone https://github.com/BrantaOps/btcpay.git

# Follow BTCPay's plugin installation process
# See BTCPay documentation for details`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Configuration</h3>

      <p className="mb-4">
        After installation, configure the plugin with your Branta credentials:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>Go to Store Settings → Branta</li>
        <li>Enter your Branta API key</li>
        <li>Select the environment (Staging or Production)</li>
        <li>Configure TTL settings for payment registrations</li>
        <li>Enable/disable verification display on checkout</li>
        <li>Save settings</li>
      </ol>

      <Example title="Configuration Options">
        <div className="space-y-4 text-sm">
          <div className="bg-dark-800 p-4 rounded">
            <p className="font-semibold text-dark-200">API Key</p>
            <p className="text-dark-400 mt-1">
              Your Branta API key (sk_live_... for production)
            </p>
          </div>
          <div className="bg-dark-800 p-4 rounded">
            <p className="font-semibold text-dark-200">Environment</p>
            <p className="text-dark-400 mt-1">
              Staging for testing, Production for live stores
            </p>
          </div>
          <div className="bg-dark-800 p-4 rounded">
            <p className="font-semibold text-dark-200">Default TTL</p>
            <p className="text-dark-400 mt-1">
              How long registrations should last (matches invoice expiry by default)
            </p>
          </div>
          <div className="bg-dark-800 p-4 rounded">
            <p className="font-semibold text-dark-200">Show Verification Link</p>
            <p className="text-dark-400 mt-1">
              Whether to display the verification URL on checkout pages
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How It Works</h3>

      <p className="mb-4">
        Once configured, the plugin automatically handles the integration:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Invoice Created</strong> - Customer initiates checkout</li>
        <li><strong>Address Generated</strong> - BTCPay generates payment address/invoice</li>
        <li><strong>Registration</strong> - Plugin registers address with Branta</li>
        <li><strong>Display</strong> - Checkout shows address and verification link</li>
        <li><strong>Verification</strong> - Customer can verify via link</li>
        <li><strong>Payment</strong> - Customer sends with confidence</li>
        <li><strong>Expiration</strong> - Registration expires with invoice</li>
      </ol>

      <Example title="Checkout Flow">
        <div className="bg-dark-800 p-4 rounded">
          <p className="text-dark-400">Customer sees on checkout:</p>
          <div className="mt-4 space-y-2">
            <p className="font-mono">Pay to: bc1qmerchant...</p>
            <p className="font-mono">Amount: 0.001 BTC</p>
            <p className="text-green-400 mt-4">✓ Verified by Branta</p>
            <p className="text-sm text-dark-400">
              Verify this address: guardrail.branta.pro/v1/verify/address
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning Network Support</h3>

      <p className="mb-4">
        The plugin supports both on-chain and Lightning payments:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>On-chain addresses</strong> - All formats (Legacy, SegWit, Taproot)</li>
        <li><strong>Lightning invoices</strong> - BOLT11 invoices registered automatically</li>
        <li><strong>Unified QR</strong> - Both can be verified from the same interface</li>
      </ul>

      <Callout type="info" title="Lightning Considerations">
        Lightning invoices are typically short-lived. The plugin uses the invoice expiry
        as the TTL by default, ensuring registration matches the payment window.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Troubleshooting</h3>

      <p className="mb-4">
        Common issues and solutions:
      </p>

      <Example title="Registration Not Working">
        <ul className="list-disc list-inside space-y-2">
          <li>Check API key is correct and for the right environment</li>
          <li>Verify your Branta account is active</li>
          <li>Check BTCPay logs for error messages</li>
          <li>Ensure BTCPay can reach Branta's API (firewall/network)</li>
        </ul>
      </Example>

      <Example title="Verification Link Not Showing">
        <ul className="list-disc list-inside space-y-2">
          <li>Ensure "Show Verification Link" is enabled in settings</li>
          <li>Check that the invoice was created after plugin configuration</li>
          <li>Older invoices won't have registrations</li>
        </ul>
      </Example>

      <Example title="Environment Mismatch">
        <ul className="list-disc list-inside space-y-2">
          <li>Ensure staging API key is used with staging environment</li>
          <li>Production keys only work with production environment</li>
          <li>Verification links point to the correct environment</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Best Practices</h3>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Test in staging first</strong> - Use staging environment during setup</li>
        <li><strong>Match TTL to invoice expiry</strong> - Prevents confusion from mismatched timeouts</li>
        <li><strong>Educate customers</strong> - Explain the verification feature on your site</li>
        <li><strong>Monitor registrations</strong> - Check Branta dashboard for usage</li>
      </ul>

      <Callout type="success" title="Ready to Go">
        Once configured, the plugin runs automatically. Every payment through your BTCPay
        Server is now verifiable through Branta, giving your customers confidence that
        they're paying the right address.
      </Callout>
    </LessonLayout>
  );
}
