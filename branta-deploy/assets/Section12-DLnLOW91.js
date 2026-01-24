import{j as e}from"./vendor-animation-0o8UKZ_1.js";import"./vendor-react-Drj8qL0h.js";import"./vendor-math-p018AHG0.js";import"./index-BVCiRvNU.js";import{L as a}from"./LessonLayout-CT1WdmGc.js";import{D as s,E as t,C as r}from"./Callout-4_WMx_B8.js";import"./vendor-firebase-core-BXWtuYvb.js";import"./quizMap-D6hrknZo.js";function p(){return e.jsxs(a,{sectionId:12,children:[e.jsx("h2",{className:"text-2xl font-bold text-dark-100 mb-6",children:"Parent Platforms"}),e.jsx("p",{className:"mb-4",children:"Parent platforms are a special type of Branta integration designed for businesses that facilitate other businesses in accepting Bitcoin. Payment processors, marketplace platforms, and white-label solutions can use parent platform features to manage verifications on behalf of their merchants."}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"What is a Parent Platform?"}),e.jsx(s,{title:"Parent Platform",children:"A business that provides Bitcoin payment infrastructure to other businesses. Examples include payment processors, e-commerce platforms, and POS systems. Parent platforms register payments on behalf of their child merchants."}),e.jsx("p",{className:"mb-4",children:"Parent platforms have additional capabilities and responsibilities:"}),e.jsxs("ul",{className:"list-disc list-inside mb-6 space-y-2 text-dark-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Multi-merchant management"})," - Register payments for many businesses"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HMAC authentication"})," - Enhanced security for sensitive operations"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Platform attribution"})," - Payments show which merchant they belong to"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Aggregated analytics"})," - View metrics across all child merchants"]})]}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"HMAC Authentication"}),e.jsx("p",{className:"mb-4",children:"When an API key has parent platform privileges, requests must include an HMAC signature for additional security. This ensures that even if an API key is compromised, requests cannot be forged without the secret."}),e.jsx(s,{title:"HMAC (Hash-based Message Authentication Code)",children:"A cryptographic signature that proves a message was created by someone with knowledge of a shared secret. Branta uses HMAC-SHA256 for parent platform authentication."}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Creating the HMAC Signature"}),e.jsx("p",{className:"mb-4",children:"The HMAC signature is computed from the following components:"}),e.jsxs("ol",{className:"list-decimal list-inside mb-6 space-y-2 text-dark-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"HTTP Method"})," - POST, GET, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"URL"})," - Full request URL"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Request Body"})," - JSON body (empty string for GET requests)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Timestamp"})," - Unix timestamp in seconds"]})]}),e.jsx(t,{title:"HMAC Message Format",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`message = METHOD + "\\n" + URL + "\\n" + BODY + "\\n" + TIMESTAMP

// Example for POST request:
message = "POST\\nhttps://guardrail.branta.pro/v1/payments\\n{\\"payment\\":...}\\n1704067200"

// Example for GET request:
message = "GET\\nhttps://guardrail.branta.pro/v1/payments/bc1q...\\n\\n1704067200"`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Including the Signature"}),e.jsx("p",{className:"mb-4",children:"The HMAC signature and timestamp are included in request headers:"}),e.jsx(t,{title:"Required Headers",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded",children:`Authorization: Bearer sk_live_your_api_key
X-Branta-Signature: <hmac_signature>
X-Branta-Timestamp: <unix_timestamp>`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Code Examples"}),e.jsx(t,{title:"JavaScript HMAC Implementation",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`import crypto from 'crypto';

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
}`})}),e.jsx(t,{title:"Python HMAC Implementation",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`import hmac
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
        return requests.get(url, headers=headers).json()`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Timestamp Validation"}),e.jsx(r,{type:"warning",title:"Timestamp Window",children:"The timestamp must be within a few minutes of the server's current time. Requests with timestamps too far in the past or future will be rejected to prevent replay attacks."}),e.jsx("p",{className:"mb-4",children:"To avoid timestamp issues:"}),e.jsxs("ul",{className:"list-disc list-inside mb-6 space-y-2 text-dark-200",children:[e.jsx("li",{children:"Use NTP to keep your server clock synchronized"}),e.jsx("li",{children:"Generate the timestamp immediately before sending the request"}),e.jsx("li",{children:"Don't cache signed requests for later use"})]}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Use Cases"}),e.jsx(t,{title:"Payment Processor",children:e.jsx("p",{className:"mb-2",children:"A payment processor like BTCPay Server hosts multiple merchants. When a merchant receives a payment, the processor registers it with Branta using their parent platform credentials, attributing the registration to the specific merchant."})}),e.jsx(t,{title:"E-commerce Platform",children:e.jsx("p",{className:"mb-2",children:"A Shopify-like platform that enables Bitcoin payments. The platform manages Branta integration centrally, so individual merchants don't need their own Branta accounts."})}),e.jsx(t,{title:"POS System Provider",children:e.jsx("p",{className:"mb-2",children:"A point-of-sale system for Bitcoin payments at retail locations. Each location is a child merchant under the parent platform's account."})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Becoming a Parent Platform"}),e.jsx("p",{className:"mb-4",children:"To become a parent platform:"}),e.jsxs("ol",{className:"list-decimal list-inside mb-6 space-y-2 text-dark-200",children:[e.jsx("li",{children:"Contact Branta to discuss your use case"}),e.jsx("li",{children:"Complete the parent platform agreement"}),e.jsx("li",{children:"Receive your API key and secret for HMAC signing"}),e.jsx("li",{children:"Implement the HMAC authentication in your integration"}),e.jsx("li",{children:"Test in staging before going live"})]}),e.jsx(r,{type:"info",title:"Security Note",children:"The HMAC secret is separate from your API key and must be protected with even greater care. Never log it, commit it to code, or expose it to client-side code. Store it in a secure secret manager with restricted access."})]})}export{p as default};
