import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Parent Platforms</h2>

      <p className="mb-4">
        Parent platforms are a special type of Branta integration designed for businesses
        that facilitate other businesses in accepting Bitcoin. Payment processors, marketplace
        platforms, and white-label solutions can use parent platform features to manage
        verifications on behalf of their merchants.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What is a Parent Platform?</h3>

      <Definition title="Parent Platform">
        A business that provides Bitcoin payment infrastructure to other businesses. Examples
        include payment processors, e-commerce platforms, and POS systems. Parent platforms
        register payments on behalf of their child merchants.
      </Definition>

      <p className="mb-4">
        Parent platforms have additional capabilities and responsibilities:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Multi-merchant management</strong> - Register payments for many businesses</li>
        <li><strong>HMAC authentication</strong> - Enhanced security for sensitive operations</li>
        <li><strong>Platform attribution</strong> - Payments show which merchant they belong to</li>
        <li><strong>Aggregated analytics</strong> - View metrics across all child merchants</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HMAC Authentication</h3>

      <p className="mb-4">
        When an API key has parent platform privileges, requests must include an HMAC
        signature for additional security. This ensures that even if an API key is
        compromised, requests cannot be forged without the secret.
      </p>

      <Definition title="HMAC (Hash-based Message Authentication Code)">
        A cryptographic signature that proves a message was created by someone with
        knowledge of a shared secret. Branta uses HMAC-SHA256 for parent platform
        authentication.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Creating the HMAC Signature</h3>

      <p className="mb-4">
        The HMAC signature is computed from the following components:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>HTTP Method</strong> - POST, GET, etc.</li>
        <li><strong>URL</strong> - Full request URL</li>
        <li><strong>Request Body</strong> - JSON body (empty string for GET requests)</li>
        <li><strong>Timestamp</strong> - Unix timestamp in seconds</li>
      </ol>

      <Example title="HMAC Message Format">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`message = METHOD + "\\n" + URL + "\\n" + BODY + "\\n" + TIMESTAMP

// Example for POST request:
message = "POST\\nhttps://guardrail.branta.pro/v1/payments\\n{\\"payment\\":...}\\n1704067200"

// Example for GET request:
message = "GET\\nhttps://guardrail.branta.pro/v1/payments/bc1q...\\n\\n1704067200"`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Including the Signature</h3>

      <p className="mb-4">
        The HMAC signature and timestamp are included in request headers:
      </p>

      <Example title="Required Headers">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded">
{`Authorization: Bearer sk_live_your_api_key
X-Branta-Signature: <hmac_signature>
X-Branta-Timestamp: <unix_timestamp>`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Code Examples</h3>

      <Example title="JavaScript HMAC Implementation">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`import crypto from 'crypto';

function createHmacSignature(
  method: string,
  url: string,
  body: string,
  timestamp: number,
  secret: string
): string {
  const message = \`\${method}\\n\${url}\\n\${body}\\n\${timestamp}\`;

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(message);
  return hmac.digest('hex');
}

async function makeParentPlatformRequest(
  method: string,
  url: string,
  body?: object
) {
  const timestamp = Math.floor(Date.now() / 1000);
  const bodyString = body ? JSON.stringify(body) : '';

  const signature = createHmacSignature(
    method,
    url,
    bodyString,
    timestamp,
    process.env.BRANTA_API_SECRET!
  );

  const response = await fetch(url, {
    method,
    headers: {
      'Authorization': \`Bearer \${process.env.BRANTA_API_KEY}\`,
      'X-Branta-Signature': signature,
      'X-Branta-Timestamp': timestamp.toString(),
      'Content-Type': 'application/json',
    },
    body: bodyString || undefined,
  });

  return response.json();
}`}
        </pre>
      </Example>

      <Example title="Python HMAC Implementation">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`import hmac
import hashlib
import time
import json
import requests
import os

def create_hmac_signature(method, url, body, timestamp, secret):
    message = f"{method}\\n{url}\\n{body}\\n{timestamp}"
    signature = hmac.new(
        secret.encode('utf-8'),
        message.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    return signature

def make_parent_platform_request(method, url, body=None):
    timestamp = int(time.time())
    body_string = json.dumps(body) if body else ''

    signature = create_hmac_signature(
        method,
        url,
        body_string,
        timestamp,
        os.environ['BRANTA_API_SECRET']
    )

    headers = {
        'Authorization': f'Bearer {os.environ["BRANTA_API_KEY"]}',
        'X-Branta-Signature': signature,
        'X-Branta-Timestamp': str(timestamp),
        'Content-Type': 'application/json',
    }

    if method == 'POST':
        return requests.post(url, headers=headers, data=body_string).json()
    else:
        return requests.get(url, headers=headers).json()`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Timestamp Validation</h3>

      <Callout type="warning" title="Timestamp Window">
        The timestamp must be within a few minutes of the server's current time. Requests
        with timestamps too far in the past or future will be rejected to prevent replay
        attacks.
      </Callout>

      <p className="mb-4">
        To avoid timestamp issues:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Use NTP to keep your server clock synchronized</li>
        <li>Generate the timestamp immediately before sending the request</li>
        <li>Don't cache signed requests for later use</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <Example title="Payment Processor">
        <p className="mb-2">
          A payment processor like BTCPay Server hosts multiple merchants. When a merchant
          receives a payment, the processor registers it with Branta using their parent
          platform credentials, attributing the registration to the specific merchant.
        </p>
      </Example>

      <Example title="E-commerce Platform">
        <p className="mb-2">
          A Shopify-like platform that enables Bitcoin payments. The platform manages
          Branta integration centrally, so individual merchants don't need their own
          Branta accounts.
        </p>
      </Example>

      <Example title="POS System Provider">
        <p className="mb-2">
          A point-of-sale system for Bitcoin payments at retail locations. Each location
          is a child merchant under the parent platform's account.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Becoming a Parent Platform</h3>

      <p className="mb-4">
        To become a parent platform:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>Contact Branta to discuss your use case</li>
        <li>Complete the parent platform agreement</li>
        <li>Receive your API key and secret for HMAC signing</li>
        <li>Implement the HMAC authentication in your integration</li>
        <li>Test in staging before going live</li>
      </ol>

      <Callout type="info" title="Security Note">
        The HMAC secret is separate from your API key and must be protected with even
        greater care. Never log it, commit it to code, or expose it to client-side code.
        Store it in a secure secret manager with restricted access.
      </Callout>
    </LessonLayout>
  );
}
