import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Getting Payments</h2>

      <p className="mb-4">
        The Getting Payments endpoint allows anyone to verify whether a Bitcoin address
        or Lightning invoice is registered with Branta and retrieve information about the
        registered payment. This is the core verification mechanism used by customers
        before sending funds.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Endpoint</h3>

      <div className="bg-dark-800 p-4 rounded mb-6">
        <p className="font-mono text-sm">
          <span className="text-blue-400">GET</span> /v1/payments/{'{payment_string}'}
        </p>
        <p className="text-dark-400 mt-2">
          Staging: https://staging.branta.pro/v1/payments/{'{payment_string}'}
        </p>
        <p className="text-dark-400">
          Production: https://guardrail.branta.pro/v1/payments/{'{payment_string}'}
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Path Parameters</h3>

      <Definition title="payment_string (required)">
        The Bitcoin address or Lightning invoice to verify. This should be URL-encoded if
        it contains special characters (common in Lightning invoices).
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Example Requests</h3>

      <Example title="Verify Bitcoin Address">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`GET /v1/payments/bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq HTTP/1.1
Host: guardrail.branta.pro
Authorization: Bearer sk_live_your_api_key`}
        </pre>
      </Example>

      <Example title="Verify Lightning Invoice">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`GET /v1/payments/lnbc10u1pjx... HTTP/1.1
Host: guardrail.branta.pro
Authorization: Bearer sk_live_your_api_key`}
        </pre>
        <p className="text-dark-400 mt-2">
          Note: Long Lightning invoices should be URL-encoded to handle special characters.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Response Format</h3>

      <p className="mb-4">
        A successful response returns details about the registered payment:
      </p>

      <Definition title="payment">
        The verified payment string (address or invoice).
      </Definition>

      <Definition title="platform">
        The name of the platform or merchant that registered this payment.
      </Definition>

      <Definition title="created_at">
        Timestamp when the payment was registered (ISO 8601 format).
      </Definition>

      <Definition title="ttl">
        Original time-to-live in seconds.
      </Definition>

      <Example title="Success Response (200)">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`HTTP/1.1 200 OK
Content-Type: application/json

{
  "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
  "created_at": "2024-09-02T12:34:56Z",
  "platform": "Example Merchant",
  "ttl": 86400
}`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Response Codes</h3>

      <Definition title="200 OK">
        The payment is registered and verified. The response includes details about the
        registration.
      </Definition>

      <Definition title="401 Unauthorized">
        The API key is missing or invalid. Note: Some verification endpoints may allow
        unauthenticated access for public verification.
      </Definition>

      <Definition title="404 Not Found">
        The payment is NOT registered with Branta. This could mean:
        <ul className="list-disc list-inside mt-2">
          <li>The address was never registered</li>
          <li>The registration has expired (TTL elapsed)</li>
          <li>You're querying the wrong environment (staging vs production)</li>
        </ul>
      </Definition>

      <Example title="Not Found Response (404)">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "error": "Not Found",
  "message": "Payment not registered"
}`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Code Examples</h3>

      <Example title="JavaScript/TypeScript">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`async function verifyPayment(paymentString: string) {
  const encoded = encodeURIComponent(paymentString);
  const response = await fetch(
    \`https://guardrail.branta.pro/v1/payments/\${encoded}\`,
    {
      headers: {
        'Authorization': \`Bearer \${process.env.BRANTA_API_KEY}\`,
      },
    }
  );

  if (response.status === 404) {
    return { verified: false, reason: 'not_registered' };
  }

  if (!response.ok) {
    throw new Error(\`Verification failed: \${response.status}\`);
  }

  const data = await response.json();
  return {
    verified: true,
    platform: data.platform,
    createdAt: data.created_at,
  };
}`}
        </pre>
      </Example>

      <Example title="Python">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`import os
import requests
from urllib.parse import quote

def verify_payment(payment_string: str):
    encoded = quote(payment_string, safe='')
    response = requests.get(
        f'https://guardrail.branta.pro/v1/payments/{encoded}',
        headers={
            'Authorization': f'Bearer {os.environ["BRANTA_API_KEY"]}',
        },
    )

    if response.status_code == 404:
        return {'verified': False, 'reason': 'not_registered'}

    response.raise_for_status()
    data = response.json()

    return {
        'verified': True,
        'platform': data['platform'],
        'created_at': data['created_at'],
    }`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Verification Patterns</h3>

      <Callout type="success" title="Pre-Send Verification">
        Always verify before sending funds. Display the verification result clearly to
        the user and block the send if verification fails or returns unexpected results.
      </Callout>

      <Example title="Wallet Integration Pattern">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`async function sendPayment(address: string, amount: number) {
  // Step 1: Verify with Branta
  const verification = await verifyPayment(address);

  if (!verification.verified) {
    // Show warning to user
    const proceed = await showWarning(
      'This address is not registered with Branta. ' +
      'Proceed with caution.'
    );
    if (!proceed) return;
  } else {
    // Show verification to user
    await showVerification(
      \`Verified: This address belongs to \${verification.platform}\`
    );
  }

  // Step 2: Proceed with payment
  return executePayment(address, amount);
}`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interpreting Results</h3>

      <p className="mb-4">
        Different verification results require different handling:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 text-dark-200">Result</th>
              <th className="text-left py-2 text-dark-200">Meaning</th>
              <th className="text-left py-2 text-dark-200">Action</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">200 + Expected Platform</td>
              <td className="py-2">Address verified, belongs to expected recipient</td>
              <td className="py-2 text-green-400">Safe to proceed</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">200 + Unexpected Platform</td>
              <td className="py-2">Address registered but not to who you expected</td>
              <td className="py-2 text-red-400">Do NOT send - possible attack</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">404 Not Found</td>
              <td className="py-2">Address not registered</td>
              <td className="py-2 text-yellow-400">Warn user, verify through other means</td>
            </tr>
            <tr>
              <td className="py-2">Error</td>
              <td className="py-2">API error or network issue</td>
              <td className="py-2 text-yellow-400">Retry or warn user</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning" title="Platform Mismatch">
        If verification succeeds but returns a different platform than expected, this is
        a strong indicator of an address swap attack. The attacker may have registered
        the address under their own name. Do NOT proceed with the payment.
      </Callout>
    </LessonLayout>
  );
}
