import{j as e}from"./vendor-animation-0o8UKZ_1.js";import"./vendor-react-Drj8qL0h.js";import"./vendor-math-p018AHG0.js";import"./index-Dk3obfp0.js";import{L as a,D as t,E as r,C as s}from"./Callout-CtxvUU9J.js";import"./vendor-firebase-core-BXWtuYvb.js";import"./quizMap-C21tOVc_.js";function h(){return e.jsxs(a,{sectionId:10,children:[e.jsx("h2",{className:"text-2xl font-bold text-dark-100 mb-6",children:"Getting Payments"}),e.jsx("p",{className:"mb-4",children:"The Getting Payments endpoint allows anyone to verify whether a Bitcoin address or Lightning invoice is registered with Branta and retrieve information about the registered payment. This is the core verification mechanism used by customers before sending funds."}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Endpoint"}),e.jsxs("div",{className:"bg-dark-800 p-4 rounded mb-6",children:[e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("span",{className:"text-blue-400",children:"GET"})," /v1/payments/","{payment_string}"]}),e.jsxs("p",{className:"text-dark-400 mt-2",children:["Staging: https://staging.branta.pro/v1/payments/","{payment_string}"]}),e.jsxs("p",{className:"text-dark-400",children:["Production: https://guardrail.branta.pro/v1/payments/","{payment_string}"]})]}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Path Parameters"}),e.jsx(t,{title:"payment_string (required)",children:"The Bitcoin address or Lightning invoice to verify. This should be URL-encoded if it contains special characters (common in Lightning invoices)."}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Example Requests"}),e.jsx(r,{title:"Verify Bitcoin Address",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`GET /v1/payments/bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq HTTP/1.1
Host: guardrail.branta.pro
Authorization: Bearer sk_live_your_api_key`})}),e.jsxs(r,{title:"Verify Lightning Invoice",children:[e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`GET /v1/payments/lnbc10u1pjx... HTTP/1.1
Host: guardrail.branta.pro
Authorization: Bearer sk_live_your_api_key`}),e.jsx("p",{className:"text-dark-400 mt-2",children:"Note: Long Lightning invoices should be URL-encoded to handle special characters."})]}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Response Format"}),e.jsx("p",{className:"mb-4",children:"A successful response returns details about the registered payment:"}),e.jsx(t,{title:"payment",children:"The verified payment string (address or invoice)."}),e.jsx(t,{title:"platform",children:"The name of the platform or merchant that registered this payment."}),e.jsx(t,{title:"created_at",children:"Timestamp when the payment was registered (ISO 8601 format)."}),e.jsx(t,{title:"ttl",children:"Original time-to-live in seconds."}),e.jsx(r,{title:"Success Response (200)",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`HTTP/1.1 200 OK
Content-Type: application/json

{
  "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
  "created_at": "2024-09-02T12:34:56Z",
  "platform": "Example Merchant",
  "ttl": 86400
}`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Response Codes"}),e.jsx(t,{title:"200 OK",children:"The payment is registered and verified. The response includes details about the registration."}),e.jsx(t,{title:"401 Unauthorized",children:"The API key is missing or invalid. Note: Some verification endpoints may allow unauthenticated access for public verification."}),e.jsxs(t,{title:"404 Not Found",children:["The payment is NOT registered with Branta. This could mean:",e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"The address was never registered"}),e.jsx("li",{children:"The registration has expired (TTL elapsed)"}),e.jsx("li",{children:"You're querying the wrong environment (staging vs production)"})]})]}),e.jsx(r,{title:"Not Found Response (404)",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "error": "Not Found",
  "message": "Payment not registered"
}`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Code Examples"}),e.jsx(r,{title:"JavaScript/TypeScript",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`async function verifyPayment(paymentString: string) {
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
}`})}),e.jsx(r,{title:"Python",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`import os
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
    }`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Verification Patterns"}),e.jsx(s,{type:"success",title:"Pre-Send Verification",children:"Always verify before sending funds. Display the verification result clearly to the user and block the send if verification fails or returns unexpected results."}),e.jsx(r,{title:"Wallet Integration Pattern",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`async function sendPayment(address: string, amount: number) {
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
}`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Interpreting Results"}),e.jsx("p",{className:"mb-4",children:"Different verification results require different handling:"}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-dark-700",children:[e.jsx("th",{className:"text-left py-2 text-dark-200",children:"Result"}),e.jsx("th",{className:"text-left py-2 text-dark-200",children:"Meaning"}),e.jsx("th",{className:"text-left py-2 text-dark-200",children:"Action"})]})}),e.jsxs("tbody",{className:"text-dark-300",children:[e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"200 + Expected Platform"}),e.jsx("td",{className:"py-2",children:"Address verified, belongs to expected recipient"}),e.jsx("td",{className:"py-2 text-green-400",children:"Safe to proceed"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"200 + Unexpected Platform"}),e.jsx("td",{className:"py-2",children:"Address registered but not to who you expected"}),e.jsx("td",{className:"py-2 text-red-400",children:"Do NOT send - possible attack"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"404 Not Found"}),e.jsx("td",{className:"py-2",children:"Address not registered"}),e.jsx("td",{className:"py-2 text-yellow-400",children:"Warn user, verify through other means"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2",children:"Error"}),e.jsx("td",{className:"py-2",children:"API error or network issue"}),e.jsx("td",{className:"py-2 text-yellow-400",children:"Retry or warn user"})]})]})]})}),e.jsx(s,{type:"warning",title:"Platform Mismatch",children:"If verification succeeds but returns a different platform than expected, this is a strong indicator of an address swap attack. The attacker may have registered the address under their own name. Do NOT proceed with the payment."})]})}export{h as default};
