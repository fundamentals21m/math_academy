import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { TTLTimeline } from '@/components/visualizations';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">TTL & Payment Lifecycle</h2>

      <p className="mb-4">
        Time-to-live (TTL) is a critical concept in Branta's payment registration system.
        It determines how long a payment address remains verifiable and ensures that stale
        registrations don't persist indefinitely.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Understanding TTL</h3>

      <Definition title="Time-to-Live (TTL)">
        The duration in seconds that a payment registration remains active in Branta's system.
        After the TTL expires, the registration is automatically removed and verification
        queries will return 404 Not Found.
      </Definition>

      <p className="mb-4">
        TTL serves several important purposes:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Security</strong> - Expired invoices shouldn't remain verifiable</li>
        <li><strong>Data hygiene</strong> - Prevents accumulation of stale registrations</li>
        <li><strong>Resource management</strong> - Keeps the verification database efficient</li>
        <li><strong>Business alignment</strong> - Matches payment windows with verification windows</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">TTL Limits</h3>

      <div className="bg-dark-800 p-4 rounded mb-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-dark-400">Minimum TTL</p>
            <p className="font-mono text-lg">30 seconds</p>
          </div>
          <div>
            <p className="text-dark-400">Maximum TTL</p>
            <p className="font-mono text-lg">31,536,000 seconds (1 year)</p>
          </div>
          <div>
            <p className="text-dark-400">Default (invalid values)</p>
            <p className="font-mono text-lg">604,800 seconds (7 days)</p>
          </div>
        </div>
      </div>

      <Callout type="info" title="Invalid TTL Handling">
        If you provide a TTL outside the valid range (less than 30 seconds or greater than
        1 year), Branta will automatically set it to 7 days. This prevents both accidentally
        short registrations and indefinite ones.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Payment Lifecycle</h3>

      <p className="mb-4">
        A registered payment goes through the following lifecycle:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Registration</strong> - Merchant calls POST /v1/payments with address and TTL</li>
        <li><strong>Active Period</strong> - Payment is verifiable via GET /v1/payments/{'{address}'}</li>
        <li><strong>Expiration</strong> - TTL elapses from registration time</li>
        <li><strong>Removal</strong> - Registration is deleted, verification returns 404</li>
      </ol>

      <Example title="Lifecycle Timeline">
        <div className="font-mono text-sm space-y-2">
          <p><span className="text-dark-400">T+0:</span> POST /v1/payments (ttl: 3600)</p>
          <p><span className="text-dark-400">T+0 to T+3600:</span> GET returns 200 (verified)</p>
          <p><span className="text-dark-400">T+3600+:</span> GET returns 404 (expired)</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Choosing the Right TTL</h3>

      <p className="mb-4">
        The optimal TTL depends on your use case:
      </p>

      <Example title="E-commerce Checkout (15-60 minutes)">
        <p className="mb-2">
          For typical online checkout flows, use a TTL that matches your cart timeout.
          This ensures the payment can be verified while the checkout is active but
          expires when the session ends.
        </p>
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded mt-2">
{`{
  "payment": {
    "payment": "bc1q...",
    "ttl": "3600"  // 1 hour
  }
}`}
        </pre>
      </Example>

      <Example title="Invoice Payments (1-7 days)">
        <p className="mb-2">
          For invoice-based payments where customers have more time to pay, use a longer
          TTL that matches your invoice terms.
        </p>
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded mt-2">
{`{
  "payment": {
    "payment": "bc1q...",
    "ttl": "604800"  // 7 days
  }
}`}
        </pre>
      </Example>

      <Example title="Donation Addresses (30 days - 1 year)">
        <p className="mb-2">
          For persistent donation addresses or long-term payment destinations, use the
          maximum TTL and re-register periodically.
        </p>
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded mt-2">
{`{
  "payment": {
    "payment": "bc1q...",
    "ttl": "31536000"  // 1 year
  }
}`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Re-registration</h3>

      <p className="mb-4">
        For payments that need to remain verifiable longer than the TTL allows, or to
        extend an existing registration, simply re-register the address:
      </p>

      <Callout type="success" title="Extending Registration">
        You can re-register an address at any time, even before it expires. The new
        registration replaces the old one with a fresh TTL starting from the new
        registration time.
      </Callout>

      <Example title="Automated Re-registration">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`// Re-register donation addresses weekly
async function maintainDonationAddress(address: string) {
  const TTL_DAYS = 30;
  const RENEW_DAYS_BEFORE = 7;

  // Check if needs renewal (pseudo-code)
  const registration = await getRegistration(address);
  const expiresIn = registration.expiresAt - Date.now();

  if (expiresIn < RENEW_DAYS_BEFORE * 24 * 60 * 60 * 1000) {
    await registerPayment(address, TTL_DAYS * 24 * 60 * 60);
    console.log('Registration renewed');
  }
}

// Run daily via cron
setInterval(() => maintainDonationAddress(DONATION_ADDRESS), 86400000);`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">TTL Best Practices</h3>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Match business logic</strong> - TTL should align with payment deadlines</li>
        <li><strong>Add buffer time</strong> - Account for timezone differences and processing delays</li>
        <li><strong>Don't over-extend</strong> - Expired invoices shouldn't remain verifiable</li>
        <li><strong>Automate renewal</strong> - For persistent addresses, set up automated re-registration</li>
        <li><strong>Log expiration</strong> - Track when registrations expire for debugging</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Handling Expiration</h3>

      <p className="mb-4">
        When a customer tries to verify an expired registration:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>They receive a 404 response</li>
        <li>Your application should interpret this as "unverifiable"</li>
        <li>Consider displaying: "This payment link may have expired. Contact the merchant for a new one."</li>
      </ul>

      <Callout type="warning" title="Expired vs. Never Registered">
        The API returns 404 for both expired and never-registered payments. Your
        application cannot distinguish between these cases from the API response alone.
        If context matters, track registrations on your side.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">TTL and Security</h3>

      <p className="mb-4">
        TTL is also a security feature. By ensuring registrations expire:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Reduces attack window</strong> - Compromised addresses can't stay registered forever</li>
        <li><strong>Limits damage</strong> - Old, potentially-insecure addresses auto-expire</li>
        <li><strong>Forces fresh registration</strong> - Encourages regular security review</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: TTL Timeline</h3>

      <p className="mb-4">
        Visualize how TTL affects registration lifecycle with time simulation:
      </p>

      <TTLTimeline />
    </LessonLayout>
  );
}
