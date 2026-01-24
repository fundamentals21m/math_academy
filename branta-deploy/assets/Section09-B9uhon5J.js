import{j as e}from"./vendor-animation-0o8UKZ_1.js";import"./vendor-react-Drj8qL0h.js";import"./vendor-math-p018AHG0.js";import"./index-Dk3obfp0.js";import{L as a,D as s,E as t,C as r}from"./Callout-CtxvUU9J.js";import"./vendor-firebase-core-BXWtuYvb.js";import"./quizMap-C21tOVc_.js";function h(){return e.jsxs(a,{sectionId:9,children:[e.jsx("h2",{className:"text-2xl font-bold text-dark-100 mb-6",children:"Adding Payments"}),e.jsx("p",{className:"mb-4",children:"The Adding Payments endpoint allows merchants to register their Bitcoin addresses and Lightning invoices with Branta. Once registered, these payment methods can be verified by customers before they send funds."}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Endpoint"}),e.jsxs("div",{className:"bg-dark-800 p-4 rounded mb-6",children:[e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("span",{className:"text-green-400",children:"POST"})," /v1/payments"]}),e.jsx("p",{className:"text-dark-400 mt-2",children:"Staging: https://staging.branta.pro/v1/payments"}),e.jsx("p",{className:"text-dark-400",children:"Production: https://guardrail.branta.pro/v1/payments"})]}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Request Format"}),e.jsx("p",{className:"mb-4",children:"The request body contains a payment object with the following fields:"}),e.jsx(s,{title:"payment (required)",children:"The primary Bitcoin address or Lightning invoice to register. This is the payment method that customers will verify."}),e.jsx(s,{title:"ttl (required)",children:"Time-to-live in seconds. Branta will automatically remove the payment registration after this many seconds. Specified as a string."}),e.jsx(s,{title:"alt_payments (optional)",children:"An array of alternative payment methods. Customers verifying the primary payment will also see these alternatives as verified options."}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Example Requests"}),e.jsx(t,{title:"Basic Registration",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`POST /v1/payments HTTP/1.1
Host: guardrail.branta.pro
Authorization: Bearer sk_live_your_api_key
Content-Type: application/json

{
  "payment": {
    "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
    "ttl": "86400"
  }
}`})}),e.jsx(t,{title:"With Alternative Payments",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`{
  "payment": {
    "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
    "ttl": "86400",
    "alt_payments": [
      "lnbc10u1pjx...",
      "bc1p5cyxnuxmeuwuvkwfem96..."
    ]
  }
}`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"TTL Values"}),e.jsx("p",{className:"mb-4",children:"Choose an appropriate TTL based on your use case:"}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-dark-700",children:[e.jsx("th",{className:"text-left py-2 text-dark-200",children:"Duration"}),e.jsx("th",{className:"text-left py-2 text-dark-200",children:"Seconds"}),e.jsx("th",{className:"text-left py-2 text-dark-200",children:"Use Case"})]})}),e.jsxs("tbody",{className:"text-dark-300",children:[e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"15 minutes"}),e.jsx("td",{className:"py-2 font-mono",children:"900"}),e.jsx("td",{className:"py-2",children:"Quick checkout sessions"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"1 hour"}),e.jsx("td",{className:"py-2 font-mono",children:"3600"}),e.jsx("td",{className:"py-2",children:"Standard e-commerce checkout"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"1 day"}),e.jsx("td",{className:"py-2 font-mono",children:"86400"}),e.jsx("td",{className:"py-2",children:"Invoice-based payments"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"7 days"}),e.jsx("td",{className:"py-2 font-mono",children:"604800"}),e.jsx("td",{className:"py-2",children:"B2B invoices"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"30 days"}),e.jsx("td",{className:"py-2 font-mono",children:"2592000"}),e.jsx("td",{className:"py-2",children:"Extended payment terms"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2",children:"1 year"}),e.jsx("td",{className:"py-2 font-mono",children:"31536000"}),e.jsx("td",{className:"py-2",children:"Persistent addresses (maximum)"})]})]})]})}),e.jsx(r,{type:"info",title:"TTL Limits",children:e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Minimum TTL: 30 seconds"}),e.jsx("li",{children:"Maximum TTL: 31536000 seconds (1 year)"}),e.jsx("li",{children:"Invalid TTLs default to 7 days (604800 seconds)"})]})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Response Codes"}),e.jsx(s,{title:"201 Created",children:"The payment was successfully registered. The response body confirms the registered payment details."}),e.jsx(t,{title:"Success Response",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`HTTP/1.1 201 Created
Content-Type: application/json

{
  "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
  "ttl": 86400,
  "created_at": "2024-09-02T12:34:56Z"
}`})}),e.jsx(s,{title:"401 Unauthorized",children:"The API key is missing, invalid, or revoked. Check your Authorization header."}),e.jsxs(s,{title:"422 Unprocessable Content",children:["The request body is malformed or contains invalid data. Common causes:",e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"Invalid Bitcoin address format"}),e.jsx("li",{children:"Invalid Lightning invoice"}),e.jsx("li",{children:"Missing required fields"}),e.jsx("li",{children:"Invalid TTL value"})]})]}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Code Examples"}),e.jsx(t,{title:"JavaScript/TypeScript",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`async function registerPayment(address: string, ttlSeconds: number) {
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
}`})}),e.jsx(t,{title:"Python",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`import os
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
    return response.json()`})}),e.jsx(t,{title:"Ruby",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`require 'net/http'
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
end`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Integration Patterns"}),e.jsx(r,{type:"success",title:"Checkout Integration",children:"Register the payment address when generating a checkout or invoice. Use a TTL that matches your payment window. When the checkout expires, the Branta registration automatically expires too."}),e.jsx("p",{className:"mb-4",children:"Common integration patterns:"}),e.jsxs("ul",{className:"list-disc list-inside mb-6 space-y-2 text-dark-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Sync with invoice creation"})," - Register when creating the invoice"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Match TTLs"})," - Use the same expiry for invoice and Branta registration"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Include in response"})," - Return verification URL to customer"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Handle failures gracefully"})," - Don't block checkout if registration fails"]})]})]})}export{h as default};
