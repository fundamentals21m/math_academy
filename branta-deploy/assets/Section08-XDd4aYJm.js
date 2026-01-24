import{j as e}from"./vendor-animation-0o8UKZ_1.js";import"./vendor-react-Drj8qL0h.js";import"./vendor-math-p018AHG0.js";import"./index-B8OzST0h.js";import{L as a,D as r,E as t,C as s}from"./Callout-B5e-uczc.js";import"./vendor-firebase-core-BXWtuYvb.js";import"./quizMap-D6hrknZo.js";function m(){return e.jsxs(a,{sectionId:8,children:[e.jsx("h2",{className:"text-2xl font-bold text-dark-100 mb-6",children:"Authentication"}),e.jsx("p",{className:"mb-4",children:"All Branta API endpoints require authentication to ensure that only authorized clients can register and query payment information. Authentication is handled through API keys passed in HTTP headers."}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"API Key Authentication"}),e.jsx(r,{title:"API Key",children:"A unique secret string that identifies and authenticates your application when making requests to the Branta API. Each client receives a unique API key that must be included in every request."}),e.jsxs("p",{className:"mb-4",children:["API keys are passed in the ",e.jsx("code",{children:"Authorization"})," header using the Bearer token scheme:"]}),e.jsx(t,{title:"Authorization Header",children:e.jsx("div",{className:"font-mono text-sm",children:e.jsxs("p",{children:["Authorization: Bearer ","{your_api_key}"]})})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Making Authenticated Requests"}),e.jsx("p",{className:"mb-4",children:"Every API request must include the Authorization header:"}),e.jsx(t,{title:"JavaScript Example",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`const response = await fetch('https://guardrail.branta.pro/v1/payments', {
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
});`})}),e.jsx(t,{title:"Python Example",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`import requests

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
)`})}),e.jsx(t,{title:"cURL Example",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`curl -X POST https://guardrail.branta.pro/v1/payments \\
  -H "Authorization: Bearer sk_live_your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{"payment": {"payment": "bc1qmerchant...", "ttl": "86400"}}'`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"API Key Security"}),e.jsx(s,{type:"danger",title:"Protect Your API Keys",children:"API keys carry sensitive privileges and must be kept secure at all times. A leaked API key could allow attackers to register fraudulent addresses or query your payment information."}),e.jsx("p",{className:"mb-4",children:"Essential security practices for API keys:"}),e.jsxs("ul",{className:"list-disc list-inside mb-6 space-y-2 text-dark-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Never commit to code"})," - Use environment variables or secret managers"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Never expose in frontend"})," - Keep keys server-side only"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Never share publicly"})," - Treat keys like passwords"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rotate if compromised"})," - Request new keys immediately if exposed"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use separate keys per environment"})," - Different keys for staging and production"]})]}),e.jsx(t,{title:"Environment Variable Usage",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`// Good: Load key from environment
const apiKey = process.env.BRANTA_API_KEY;

// Bad: Hardcoded key
const apiKey = 'sk_live_abc123...';  // DON'T DO THIS`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Authentication Errors"}),e.jsx("p",{className:"mb-4",children:"The API returns specific error codes for authentication issues:"}),e.jsxs(r,{title:"401 Unauthorized",children:["The request lacks valid authentication credentials. This occurs when:",e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"No Authorization header is provided"}),e.jsx("li",{children:"The Authorization header format is incorrect"}),e.jsx("li",{children:"The API key is invalid or revoked"})]})]}),e.jsx(t,{title:"401 Response",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded",children:`HTTP/1.1 401 Unauthorized
Content-Type: application/json

{
  "error": "Unauthorized",
  "message": "Invalid or missing API key"
}`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Key Management Best Practices"}),e.jsx("p",{className:"mb-4",children:"Implement proper key management in your infrastructure:"}),e.jsxs("ol",{className:"list-decimal list-inside mb-6 space-y-2 text-dark-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use a secret manager"})," - AWS Secrets Manager, HashiCorp Vault, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Audit access"})," - Log when and where keys are used"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Limit scope"})," - Only services that need the key should have access"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Regular rotation"})," - Rotate keys periodically as a precaution"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Monitor for leaks"})," - Set up alerts for key usage anomalies"]})]}),e.jsx(t,{title:"Secret Manager Pattern",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`// Using AWS Secrets Manager
import { SecretsManager } from 'aws-sdk';

const client = new SecretsManager();

async function getBrantaApiKey() {
  const secret = await client.getSecretValue({
    SecretId: 'branta/production/api-key',
  }).promise();

  return JSON.parse(secret.SecretString).apiKey;
}`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Client-Side Considerations"}),e.jsx(s,{type:"warning",title:"No Client-Side API Calls",children:"Never make Branta API calls directly from browser JavaScript with your API key. This exposes your key to anyone who views page source or monitors network traffic."}),e.jsx("p",{className:"mb-4",children:"If you need client-side verification, use one of these patterns:"}),e.jsxs("ul",{className:"list-disc list-inside mb-6 space-y-2 text-dark-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Proxy through your server"})," - Client calls your API, your server calls Branta"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use web verification pages"})," - Link users to guardrail.branta.pro for manual verification"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pre-fetch and cache"})," - Server fetches verification data and sends to client"]})]}),e.jsx(t,{title:"Server Proxy Pattern",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`// Server endpoint (Express.js example)
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
const verification = await fetch(\`/api/verify/\${address}\`);`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Getting API Keys"}),e.jsx("p",{className:"mb-4",children:"To obtain API keys for your integration:"}),e.jsxs("ol",{className:"list-decimal list-inside mb-6 space-y-2 text-dark-200",children:[e.jsx("li",{children:"Contact Branta through their website or developer portal"}),e.jsx("li",{children:"Complete the merchant onboarding process"}),e.jsx("li",{children:"Receive separate keys for staging and production"}),e.jsx("li",{children:"Store keys securely and begin integration"})]}),e.jsx(s,{type:"info",title:"Key Rotation",children:"If you need to rotate your API key (due to suspected exposure or as part of regular security hygiene), contact Branta support. They can issue a new key while temporarily keeping the old key active for a transition period."})]})}export{m as default};
