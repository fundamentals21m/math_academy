import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { VerificationFlowDiagram, BitcoinAddressExplorer } from '@/components/visualizations';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">What is Guardrail?</h2>

      <p className="mb-4">
        Guardrail is Branta's flagship product for Bitcoin transaction verification. It provides
        a simple yet powerful API that allows businesses to register their payment addresses
        and consumers to verify those addresses before sending funds.
      </p>

      <Definition title="Guardrail">
        A pre-payment verification system that lets merchants register their Bitcoin addresses
        and Lightning invoices, enabling customers to verify payment destinations before
        executing transactions. It operates entirely outside the transaction flow, providing
        verification without custody.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Core Concepts</h3>

      <p className="mb-4">
        Guardrail operates on a simple but powerful model:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Registration</strong> - Merchants register their payment addresses via API</li>
        <li><strong>Storage</strong> - Branta securely stores the address-to-merchant mapping</li>
        <li><strong>Verification</strong> - Customers query the API to verify addresses</li>
        <li><strong>Response</strong> - Branta confirms or denies the address registration</li>
      </ol>

      <Example title="The Verification Flow">
        <div className="space-y-2 font-mono text-sm">
          <p className="text-dark-400">// Merchant registers address</p>
          <p>POST /v1/payments</p>
          <p>{"{"} "payment": "bc1qmerchant...", "ttl": 86400 {"}"}</p>
          <p className="mt-4 text-dark-400">// Customer verifies before sending</p>
          <p>GET /v1/payments/bc1qmerchant...</p>
          <p className="mt-2 text-dark-400">// Response confirms registration</p>
          <p>{"{"} "payment": "bc1qmerchant...", "platform": "MerchantCo" {"}"}</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Supported Payment Types</h3>

      <p className="mb-4">
        Guardrail supports verification across multiple Bitcoin payment methods:
      </p>

      <Definition title="On-Chain Bitcoin Addresses">
        Standard Bitcoin addresses including Legacy (1...), SegWit (3...), Native SegWit (bc1q...),
        and Taproot (bc1p...). These are used for regular Bitcoin transactions that are
        confirmed on the blockchain.
      </Definition>

      <Definition title="Lightning Invoices">
        BOLT11-encoded payment requests for Lightning Network transactions. These enable instant,
        low-fee payments for smaller amounts and include payment metadata like amount, description,
        and expiry time.
      </Definition>

      <Definition title="Alternative Payments">
        Guardrail supports registering multiple addresses for a single payment, including
        alternative payment options. A merchant can register both an on-chain address and
        a Lightning invoice, giving customers choice.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Architecture</h3>

      <p className="mb-4">
        Guardrail is designed with security and reliability as core principles:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>RESTful API</strong> - Standard HTTP endpoints for easy integration</li>
        <li><strong>Bearer Authentication</strong> - API keys for secure merchant access</li>
        <li><strong>TTL-based Expiry</strong> - Payments automatically expire after set periods</li>
        <li><strong>No Custody</strong> - Branta never has access to private keys or funds</li>
        <li><strong>Environment Isolation</strong> - Staging and production are completely separate</li>
      </ul>

      <Callout type="info" title="Zero Custody Design">
        Guardrail is designed to never touch your keys, addresses, or transactions beyond
        storing the registration. This means there's no custody risk - Branta cannot move
        your funds even if compromised.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <Example title="OTC Desks & Exchanges">
        <p className="mb-2">
          High-volume trading desks use Guardrail to provide institutional-grade verification
          for client withdrawals. Clients can verify that the withdrawal address truly belongs
          to their destination before large transfers.
        </p>
        <ul className="list-disc list-inside text-dark-400 mt-2">
          <li>Eliminates address swap attacks</li>
          <li>Provides audit trails for compliance</li>
          <li>Builds client confidence for large transfers</li>
        </ul>
      </Example>

      <Example title="E-commerce Merchants">
        <p className="mb-2">
          Online stores accepting Bitcoin use Guardrail to let customers verify checkout
          addresses. This reduces fraud concerns and increases conversion rates from
          security-conscious customers.
        </p>
        <ul className="list-disc list-inside text-dark-400 mt-2">
          <li>Integrates with existing checkout flows</li>
          <li>Shows verified badge on payment pages</li>
          <li>Reduces customer support inquiries</li>
        </ul>
      </Example>

      <Example title="Wallet Providers">
        <p className="mb-2">
          Bitcoin wallets integrate Guardrail to automatically verify payment destinations.
          Before a user sends funds, the wallet queries Guardrail and displays verification
          status alongside the address.
        </p>
        <ul className="list-disc list-inside text-dark-400 mt-2">
          <li>Seamless user experience</li>
          <li>Warning for unverified addresses</li>
          <li>Confidence indicator for verified payments</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Integration Methods</h3>

      <p className="mb-4">
        Guardrail can be integrated in multiple ways depending on your needs:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Direct API</strong> - HTTP requests for maximum flexibility</li>
        <li><strong>SDKs</strong> - Libraries for JavaScript, Python, Ruby, Dart, and .NET</li>
        <li><strong>Plugins</strong> - Pre-built integrations for BTCPay Server and other platforms</li>
        <li><strong>Web Pages</strong> - Portable verification URLs for manual checking</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Web Verification</h3>

      <p className="mb-4">
        For users who don't have integrated wallets, Guardrail provides web-based verification:
      </p>

      <Callout type="success" title="Universal Access">
        Web verification pages at guardrail.branta.pro allow anyone to verify an address
        from any browser. No apps required, no login needed. Just paste an address and
        see if it's registered.
      </Callout>

      <p className="mb-4">
        The web verification interface is designed for:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Cross-device verification</strong> - Check on a separate device for extra security</li>
        <li><strong>Non-technical users</strong> - Simple interface that anyone can use</li>
        <li><strong>Quick checks</strong> - Verify in seconds without setup</li>
        <li><strong>Shareable links</strong> - Merchants can provide direct verification URLs</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What Guardrail Is Not</h3>

      <p className="mb-4">
        It's important to understand Guardrail's boundaries:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Not a wallet</strong> - Guardrail stores registrations, not keys</li>
        <li><strong>Not a payment processor</strong> - Guardrail verifies, it doesn't process payments</li>
        <li><strong>Not mandatory</strong> - Merchants must opt-in to registration</li>
        <li><strong>Not foolproof</strong> - Unregistered addresses can't be verified</li>
      </ul>

      <p className="mb-4">
        The system works best when widely adopted. The more merchants that register their
        addresses, the more valuable verification becomes for everyone.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Verification Flow</h3>

      <p className="mb-4">
        Watch the complete verification lifecycle unfold step by step:
      </p>

      <VerificationFlowDiagram />

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Bitcoin Address Explorer</h3>

      <p className="mb-4">
        Explore the different Bitcoin address formats that Guardrail supports:
      </p>

      <BitcoinAddressExplorer />
    </LessonLayout>
  );
}
