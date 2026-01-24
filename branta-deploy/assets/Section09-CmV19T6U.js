import{j as e}from"./vendor-animation-0o8UKZ_1.js";import{r}from"./vendor-react-Drj8qL0h.js";import"./vendor-math-p018AHG0.js";import"./index-BVCiRvNU.js";import{L as w}from"./LessonLayout-CT1WdmGc.js";import{D as d,E as l,C as u}from"./Callout-4_WMx_B8.js";import"./vendor-firebase-core-BXWtuYvb.js";import"./quizMap-D6hrknZo.js";const y={add_payment:{method:"POST",endpoint:"/v1/spv",description:"Register a new payment address with Guardrail"},get_payment:{method:"GET",endpoint:"/v1/spv",description:"Verify if an address is registered"},verify_address:{method:"GET",endpoint:"/v1/verify/address",description:"Public verification endpoint"}};function T(){const[t,j]=r.useState("add_payment"),[x,b]=r.useState("staging"),[c,g]=r.useState("sk_test_your_api_key_here"),[a,f]=r.useState("bc1qmerchant7x8f5kvy5l643lydnw9re59gtzzwf5mdq"),[n,N]=r.useState(3600),[m,p]=r.useState(!1),h=x==="staging"?"https://staging.branta.pro":"https://guardrail.branta.pro",i=y[t],o=r.useMemo(()=>t==="add_payment"?{address:a,ttl:n}:null,[t,a,n]),v=r.useMemo(()=>{let s=`curl -X ${i.method} "${h}${i.endpoint}`;return(t==="get_payment"||t==="verify_address")&&(s+=`?address=${encodeURIComponent(a)}`),s+='"',t!=="verify_address"&&(s+=` \\
  -H "Authorization: Bearer ${c}"`),s+=` \\
  -H "Content-Type: application/json"`,o&&(s+=` \\
  -d '${JSON.stringify(o,null,2)}'`),s},[i,h,t,a,c,o]),k=r.useMemo(()=>{switch(t){case"add_payment":return{success:!0,data:{address:a,registered_at:new Date().toISOString(),expires_at:new Date(Date.now()+n*1e3).toISOString(),ttl:n}};case"get_payment":return{success:!0,data:{address:a,is_registered:!0,merchant:"Example Merchant",registered_at:new Date(Date.now()-36e5).toISOString(),expires_at:new Date(Date.now()+n*1e3).toISOString()}};case"verify_address":return{verified:!0,merchant:"Example Merchant",registered:!0};default:return{}}},[t,a,n]);return e.jsxs("div",{className:"demo-container",children:[e.jsx("h3",{className:"text-lg font-semibold text-dark-200 mb-4",children:"API Request Builder"}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:Object.keys(y).map(s=>e.jsx("button",{onClick:()=>{j(s),p(!1)},className:`px-4 py-2 rounded-lg font-medium transition-colors ${t===s?"bg-amber-600 text-white":"bg-dark-700 text-dark-300 hover:bg-dark-600"}`,children:s.replace("_"," ").toUpperCase()},s))}),e.jsx("p",{className:"text-dark-400 mb-6",children:i.description}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-dark-400 mb-1",children:"Environment"}),e.jsxs("select",{value:x,onChange:s=>b(s.target.value),className:"w-full bg-dark-700 text-dark-200 rounded-lg px-4 py-2 border border-dark-600 focus:border-amber-500 focus:outline-none",children:[e.jsx("option",{value:"staging",children:"Staging (staging.branta.pro)"}),e.jsx("option",{value:"production",children:"Production (guardrail.branta.pro)"})]})]}),t!=="verify_address"&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-dark-400 mb-1",children:"API Key"}),e.jsx("input",{type:"text",value:c,onChange:s=>g(s.target.value),className:"w-full bg-dark-700 text-dark-200 rounded-lg px-4 py-2 border border-dark-600 focus:border-amber-500 focus:outline-none font-mono text-sm",placeholder:"sk_test_..."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-dark-400 mb-1",children:"Bitcoin Address"}),e.jsx("input",{type:"text",value:a,onChange:s=>f(s.target.value),className:"w-full bg-dark-700 text-dark-200 rounded-lg px-4 py-2 border border-dark-600 focus:border-amber-500 focus:outline-none font-mono text-sm",placeholder:"bc1q..."})]}),t==="add_payment"&&e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm text-dark-400 mb-1",children:["TTL (seconds): ",n.toLocaleString()]}),e.jsx("input",{type:"range",min:"300",max:"2592000",step:"300",value:n,onChange:s=>N(parseInt(s.target.value)),className:"w-full accent-amber-500"}),e.jsxs("div",{className:"flex justify-between text-xs text-dark-500 mt-1",children:[e.jsx("span",{children:"5 min"}),e.jsx("span",{children:"30 days"})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("label",{className:"text-sm text-dark-400",children:"Request Preview"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`px-2 py-1 rounded text-xs font-bold ${i.method==="POST"?"bg-green-600":"bg-blue-600"} text-white`,children:i.method}),e.jsx("span",{className:"text-xs text-dark-500 font-mono",children:i.endpoint})]})]}),e.jsx("pre",{className:"bg-dark-900 rounded-lg p-4 text-sm font-mono text-dark-300 overflow-x-auto",children:v})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-sm text-dark-400 mb-2",children:"Request Headers"}),e.jsxs("div",{className:"bg-dark-800 rounded-lg p-4 font-mono text-sm space-y-1",children:[e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-amber-400 w-40",children:"Content-Type:"}),e.jsx("span",{className:"text-dark-300",children:"application/json"})]}),t!=="verify_address"&&e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-amber-400 w-40",children:"Authorization:"}),e.jsxs("span",{className:"text-dark-300",children:["Bearer ",c.slice(0,20),"..."]})]})]})]}),o&&e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-sm text-dark-400 mb-2",children:"Request Body"}),e.jsx("pre",{className:"bg-dark-800 rounded-lg p-4 text-sm font-mono text-dark-300",children:JSON.stringify(o,null,2)})]}),e.jsx("button",{onClick:()=>p(!m),className:"px-6 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700",children:m?"Hide Response":"▶ Simulate Request"}),m&&e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("label",{className:"text-sm text-dark-400",children:"Response"}),e.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600 text-white font-bold",children:"200 OK"})]}),e.jsx("pre",{className:"bg-dark-900 rounded-lg p-4 text-sm font-mono text-green-400 overflow-x-auto",children:JSON.stringify(k,null,2)})]})]})}function I(){return e.jsxs(w,{sectionId:9,children:[e.jsx("h2",{className:"text-2xl font-bold text-dark-100 mb-6",children:"Adding Payments"}),e.jsx("p",{className:"mb-4",children:"The Adding Payments endpoint allows merchants to register their Bitcoin addresses and Lightning invoices with Branta. Once registered, these payment methods can be verified by customers before they send funds."}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Endpoint"}),e.jsxs("div",{className:"bg-dark-800 p-4 rounded mb-6",children:[e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("span",{className:"text-green-400",children:"POST"})," /v1/payments"]}),e.jsx("p",{className:"text-dark-400 mt-2",children:"Staging: https://staging.branta.pro/v1/payments"}),e.jsx("p",{className:"text-dark-400",children:"Production: https://guardrail.branta.pro/v1/payments"})]}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Request Format"}),e.jsx("p",{className:"mb-4",children:"The request body contains a payment object with the following fields:"}),e.jsx(d,{title:"payment (required)",children:"The primary Bitcoin address or Lightning invoice to register. This is the payment method that customers will verify."}),e.jsx(d,{title:"ttl (required)",children:"Time-to-live in seconds. Branta will automatically remove the payment registration after this many seconds. Specified as a string."}),e.jsx(d,{title:"alt_payments (optional)",children:"An array of alternative payment methods. Customers verifying the primary payment will also see these alternatives as verified options."}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Example Requests"}),e.jsx(l,{title:"Basic Registration",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`POST /v1/payments HTTP/1.1
Host: guardrail.branta.pro
Authorization: Bearer sk_live_your_api_key
Content-Type: application/json

{
  "payment": {
    "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
    "ttl": "86400"
  }
}`})}),e.jsx(l,{title:"With Alternative Payments",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`{
  "payment": {
    "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
    "ttl": "86400",
    "alt_payments": [
      "lnbc10u1pjx...",
      "bc1p5cyxnuxmeuwuvkwfem96..."
    ]
  }
}`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"TTL Values"}),e.jsx("p",{className:"mb-4",children:"Choose an appropriate TTL based on your use case:"}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-dark-700",children:[e.jsx("th",{className:"text-left py-2 text-dark-200",children:"Duration"}),e.jsx("th",{className:"text-left py-2 text-dark-200",children:"Seconds"}),e.jsx("th",{className:"text-left py-2 text-dark-200",children:"Use Case"})]})}),e.jsxs("tbody",{className:"text-dark-300",children:[e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"15 minutes"}),e.jsx("td",{className:"py-2 font-mono",children:"900"}),e.jsx("td",{className:"py-2",children:"Quick checkout sessions"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"1 hour"}),e.jsx("td",{className:"py-2 font-mono",children:"3600"}),e.jsx("td",{className:"py-2",children:"Standard e-commerce checkout"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"1 day"}),e.jsx("td",{className:"py-2 font-mono",children:"86400"}),e.jsx("td",{className:"py-2",children:"Invoice-based payments"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"7 days"}),e.jsx("td",{className:"py-2 font-mono",children:"604800"}),e.jsx("td",{className:"py-2",children:"B2B invoices"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2",children:"30 days"}),e.jsx("td",{className:"py-2 font-mono",children:"2592000"}),e.jsx("td",{className:"py-2",children:"Extended payment terms"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2",children:"1 year"}),e.jsx("td",{className:"py-2 font-mono",children:"31536000"}),e.jsx("td",{className:"py-2",children:"Persistent addresses (maximum)"})]})]})]})}),e.jsx(u,{type:"info",title:"TTL Limits",children:e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Minimum TTL: 30 seconds"}),e.jsx("li",{children:"Maximum TTL: 31536000 seconds (1 year)"}),e.jsx("li",{children:"Invalid TTLs default to 7 days (604800 seconds)"})]})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Response Codes"}),e.jsx(d,{title:"201 Created",children:"The payment was successfully registered. The response body confirms the registered payment details."}),e.jsx(l,{title:"Success Response",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`HTTP/1.1 201 Created
Content-Type: application/json

{
  "payment": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
  "ttl": 86400,
  "created_at": "2024-09-02T12:34:56Z"
}`})}),e.jsx(d,{title:"401 Unauthorized",children:"The API key is missing, invalid, or revoked. Check your Authorization header."}),e.jsxs(d,{title:"422 Unprocessable Content",children:["The request body is malformed or contains invalid data. Common causes:",e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"Invalid Bitcoin address format"}),e.jsx("li",{children:"Invalid Lightning invoice"}),e.jsx("li",{children:"Missing required fields"}),e.jsx("li",{children:"Invalid TTL value"})]})]}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Code Examples"}),e.jsx(l,{title:"JavaScript/TypeScript",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`async function registerPayment(address: string, ttlSeconds: number) {
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
}`})}),e.jsx(l,{title:"Python",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`import os
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
    return response.json()`})}),e.jsx(l,{title:"Ruby",children:e.jsx("pre",{className:"font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto",children:`require 'net/http'
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
end`})}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Integration Patterns"}),e.jsx(u,{type:"success",title:"Checkout Integration",children:"Register the payment address when generating a checkout or invoice. Use a TTL that matches your payment window. When the checkout expires, the Branta registration automatically expires too."}),e.jsx("p",{className:"mb-4",children:"Common integration patterns:"}),e.jsxs("ul",{className:"list-disc list-inside mb-6 space-y-2 text-dark-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Sync with invoice creation"})," - Register when creating the invoice"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Match TTLs"})," - Use the same expiry for invoice and Branta registration"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Include in response"})," - Return verification URL to customer"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Handle failures gracefully"})," - Don't block checkout if registration fails"]})]}),e.jsx("h3",{className:"text-xl font-semibold text-dark-100 mt-8 mb-4",children:"Interactive: API Request Builder"}),e.jsx("p",{className:"mb-4",children:"Build and explore Guardrail API requests interactively:"}),e.jsx(T,{})]})}export{I as default};
