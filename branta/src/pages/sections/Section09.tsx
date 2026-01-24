import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Adding Payments</h2>

      <p className="mb-4">
        The Adding Payments endpoint allows merchants to register their Bitcoin addresses
        and Lightning invoices with Branta. Once registered, these payment methods can be
        verified by customers before they send funds.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Endpoint</h3>

      <div className="bg-dark-800 p-4 rounded mb-6">
        <p className="font-mono text-sm">
          <span className="text-green-400">POST</span> /v1/payments
        </p>
        <p className="text-dark-400 mt-2">
          Staging: https://staging.branta.pro/v1/payments
        </p>
        <p className="text-dark-400">
          Production: https://guardrail.branta.pro/v1/payments
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Request Format</h3>

      <p className="mb-4">
        The request body contains a payment object with the following fields:
      </p>

      <Definition title="payment (required)">
        The primary Bitcoin address or Lightning invoice to register. This is the payment
        method that customers will verify.
      </Definition>

      <Definition title="ttl (required)">
        Time-to-live in seconds. Branta will automatically remove the payment registration
        after this many seconds. Specified as a string.
      </Definition>

      <Definition title="alt_payments (optional)">
        An array of alternative payment methods. Customers verifying the primary payment
        will also see these alternatives as verified options.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Example Requests</h3>

      <Example title="Basic Registration">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`POST /v1/payments HTTP/1.1
Host: guardrail.branta.pro
Authorization: Bearer sk_live_your_api_key
Content-Type: application/json

{
  "payment": {
    "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
    "ttl": "86400"
  }
}`}
        </pre>
      </Example>

      <Example title="With Alternative Payments">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`{
  "payment": {
    "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
    "ttl": "86400",
    "alt_payments": [
      "lnbc10u1pjx...",
      "bc1p5cyxnuxmeuwuvkwfem96..."
    ]
  }
}`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">TTL Values</h3>

      <p className="mb-4">
        Choose an appropriate TTL based on your use case:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 text-dark-200">Duration</th>
              <th className="text-left py-2 text-dark-200">Seconds</th>
              <th className="text-left py-2 text-dark-200">Use Case</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">15 minutes</td>
              <td className="py-2 font-mono">900</td>
              <td className="py-2">Quick checkout sessions</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">1 hour</td>
              <td className="py-2 font-mono">3600</td>
              <td className="py-2">Standard e-commerce checkout</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">1 day</td>
              <td className="py-2 font-mono">86400</td>
              <td className="py-2">Invoice-based payments</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">7 days</td>
              <td className="py-2 font-mono">604800</td>
              <td className="py-2">B2B invoices</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">30 days</td>
              <td className="py-2 font-mono">2592000</td>
              <td className="py-2">Extended payment terms</td>
            </tr>
            <tr>
              <td className="py-2">1 year</td>
              <td className="py-2 font-mono">31536000</td>
              <td className="py-2">Persistent addresses (maximum)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info" title="TTL Limits">
        <ul className="list-disc list-inside space-y-1">
          <li>Minimum TTL: 30 seconds</li>
          <li>Maximum TTL: 31536000 seconds (1 year)</li>
          <li>Invalid TTLs default to 7 days (604800 seconds)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Response Codes</h3>

      <Definition title="201 Created">
        The payment was successfully registered. The response body confirms the registered
        payment details.
      </Definition>

      <Example title="Success Response">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`HTTP/1.1 201 Created
Content-Type: application/json

{
  "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
  "ttl": 86400,
  "created_at": "2024-09-02T12:34:56Z"
}`}
        </pre>
      </Example>

      <Definition title="401 Unauthorized">
        The API key is missing, invalid, or revoked. Check your Authorization header.
      </Definition>

      <Definition title="422 Unprocessable Content">
        The request body is malformed or contains invalid data. Common causes:
        <ul className="list-disc list-inside mt-2">
          <li>Invalid Bitcoin address format</li>
          <li>Invalid Lightning invoice</li>
          <li>Missing required fields</li>
          <li>Invalid TTL value</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Code Examples</h3>

      <Example title="JavaScript/TypeScript">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`async function registerPayment(address: string, ttlSeconds: number) {
  const response = await fetch('https://guardrail.branta.pro/v1/payments', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${process.env.BRANTA_API_KEY}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      payment: {
        payment: address,
        ttl: ttlSeconds.toString(),
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(\`Registration failed: \${error.message}\`);
  }

  return response.json();
}`}
        </pre>
      </Example>

      <Example title="Python">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`import os
import requests

def register_payment(address: str, ttl_seconds: int):
    response = requests.post(
        'https://guardrail.branta.pro/v1/payments',
        headers={
            'Authorization': f'Bearer {os.environ["BRANTA_API_KEY"]}',
            'Content-Type': 'application/json',
        },
        json={
            'payment': {
                'payment': address,
                'ttl': str(ttl_seconds),
            },
        },
    )
    response.raise_for_status()
    return response.json()`}
        </pre>
      </Example>

      <Example title="Ruby">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`require 'net/http'
require 'json'

def register_payment(address, ttl_seconds)
  uri = URI('https://guardrail.branta.pro/v1/payments')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true

  request = Net::HTTP::Post.new(uri.path)
  request['Authorization'] = "Bearer #{ENV['BRANTA_API_KEY']}"
  request['Content-Type'] = 'application/json'
  request.body = {
    payment: {
      payment: address,
      ttl: ttl_seconds.to_s
    }
  }.to_json

  response = http.request(request)
  JSON.parse(response.body)
end`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Integration Patterns</h3>

      <Callout type="success" title="Checkout Integration">
        Register the payment address when generating a checkout or invoice. Use a TTL
        that matches your payment window. When the checkout expires, the Branta registration
        automatically expires too.
      </Callout>

      <p className="mb-4">
        Common integration patterns:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Sync with invoice creation</strong> - Register when creating the invoice</li>
        <li><strong>Match TTLs</strong> - Use the same expiry for invoice and Branta registration</li>
        <li><strong>Include in response</strong> - Return verification URL to customer</li>
        <li><strong>Handle failures gracefully</strong> - Don't block checkout if registration fails</li>
      </ul>
    </LessonLayout>
  );
}
