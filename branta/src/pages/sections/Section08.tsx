import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Authentication</h2>

      <p className="mb-4">
        All Branta API endpoints require authentication to ensure that only authorized
        clients can register and query payment information. Authentication is handled
        through API keys passed in HTTP headers.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">API Key Authentication</h3>

      <Definition title="API Key">
        A unique secret string that identifies and authenticates your application when
        making requests to the Branta API. Each client receives a unique API key that
        must be included in every request.
      </Definition>

      <p className="mb-4">
        API keys are passed in the <code>Authorization</code> header using the Bearer token scheme:
      </p>

      <Example title="Authorization Header">
        <div className="font-mono text-sm">
          <p>Authorization: Bearer {'{your_api_key}'}</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Making Authenticated Requests</h3>

      <p className="mb-4">
        Every API request must include the Authorization header:
      </p>

      <Example title="JavaScript Example">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`const response = await fetch('https://guardrail.branta.pro/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk_live_your_api_key_here',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    payment: {
      payment: 'bc1qmerchant...',
      ttl: '86400',
    },
  }),
});`}
        </pre>
      </Example>

      <Example title="Python Example">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`import requests

response = requests.post(
    'https://guardrail.branta.pro/v1/payments',
    headers={
        'Authorization': 'Bearer sk_live_your_api_key_here',
        'Content-Type': 'application/json',
    },
    json={
        'payment': {
            'payment': 'bc1qmerchant...',
            'ttl': '86400',
        },
    },
)`}
        </pre>
      </Example>

      <Example title="cURL Example">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`curl -X POST https://guardrail.branta.pro/v1/payments \\
  -H "Authorization: Bearer sk_live_your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{"payment": {"payment": "bc1qmerchant...", "ttl": "86400"}}'`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">API Key Security</h3>

      <Callout type="danger" title="Protect Your API Keys">
        API keys carry sensitive privileges and must be kept secure at all times. A leaked
        API key could allow attackers to register fraudulent addresses or query your
        payment information.
      </Callout>

      <p className="mb-4">
        Essential security practices for API keys:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Never commit to code</strong> - Use environment variables or secret managers</li>
        <li><strong>Never expose in frontend</strong> - Keep keys server-side only</li>
        <li><strong>Never share publicly</strong> - Treat keys like passwords</li>
        <li><strong>Rotate if compromised</strong> - Request new keys immediately if exposed</li>
        <li><strong>Use separate keys per environment</strong> - Different keys for staging and production</li>
      </ul>

      <Example title="Environment Variable Usage">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`// Good: Load key from environment
const apiKey = process.env.BRANTA_API_KEY;

// Bad: Hardcoded key
const apiKey = 'sk_live_abc123...';  // DON'T DO THIS`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Authentication Errors</h3>

      <p className="mb-4">
        The API returns specific error codes for authentication issues:
      </p>

      <Definition title="401 Unauthorized">
        The request lacks valid authentication credentials. This occurs when:
        <ul className="list-disc list-inside mt-2">
          <li>No Authorization header is provided</li>
          <li>The Authorization header format is incorrect</li>
          <li>The API key is invalid or revoked</li>
        </ul>
      </Definition>

      <Example title="401 Response">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded">
{`HTTP/1.1 401 Unauthorized
Content-Type: application/json

{
  "error": "Unauthorized",
  "message": "Invalid or missing API key"
}`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Management Best Practices</h3>

      <p className="mb-4">
        Implement proper key management in your infrastructure:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Use a secret manager</strong> - AWS Secrets Manager, HashiCorp Vault, etc.</li>
        <li><strong>Audit access</strong> - Log when and where keys are used</li>
        <li><strong>Limit scope</strong> - Only services that need the key should have access</li>
        <li><strong>Regular rotation</strong> - Rotate keys periodically as a precaution</li>
        <li><strong>Monitor for leaks</strong> - Set up alerts for key usage anomalies</li>
      </ol>

      <Example title="Secret Manager Pattern">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`// Using AWS Secrets Manager
import { SecretsManager } from 'aws-sdk';

const client = new SecretsManager();

async function getBrantaApiKey() {
  const secret = await client.getSecretValue({
    SecretId: 'branta/production/api-key',
  }).promise();

  return JSON.parse(secret.SecretString).apiKey;
}`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Client-Side Considerations</h3>

      <Callout type="warning" title="No Client-Side API Calls">
        Never make Branta API calls directly from browser JavaScript with your API key.
        This exposes your key to anyone who views page source or monitors network traffic.
      </Callout>

      <p className="mb-4">
        If you need client-side verification, use one of these patterns:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Proxy through your server</strong> - Client calls your API, your server calls Branta</li>
        <li><strong>Use web verification pages</strong> - Link users to guardrail.branta.pro for manual verification</li>
        <li><strong>Pre-fetch and cache</strong> - Server fetches verification data and sends to client</li>
      </ul>

      <Example title="Server Proxy Pattern">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`// Server endpoint (Express.js example)
app.get('/api/verify/:address', async (req, res) => {
  const response = await fetch(
    \`https://guardrail.branta.pro/v1/payments/\${req.params.address}\`,
    {
      headers: {
        'Authorization': \`Bearer \${process.env.BRANTA_API_KEY}\`,
      },
    }
  );

  const data = await response.json();
  res.json(data);
});

// Client code - calls your server, not Branta directly
const verification = await fetch(\`/api/verify/\${address}\`);`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Getting API Keys</h3>

      <p className="mb-4">
        To obtain API keys for your integration:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>Contact Branta through their website or developer portal</li>
        <li>Complete the merchant onboarding process</li>
        <li>Receive separate keys for staging and production</li>
        <li>Store keys securely and begin integration</li>
      </ol>

      <Callout type="info" title="Key Rotation">
        If you need to rotate your API key (due to suspected exposure or as part of
        regular security hygiene), contact Branta support. They can issue a new key
        while temporarily keeping the old key active for a transition period.
      </Callout>
    </LessonLayout>
  );
}
