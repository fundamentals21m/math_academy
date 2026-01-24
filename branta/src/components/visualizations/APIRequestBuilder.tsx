import { useState, useMemo } from 'react';

type RequestType = 'add_payment' | 'get_payment' | 'verify_address';

interface RequestConfig {
  method: string;
  endpoint: string;
  description: string;
}

const REQUEST_TYPES: Record<RequestType, RequestConfig> = {
  add_payment: {
    method: 'POST',
    endpoint: '/v1/spv',
    description: 'Register a new payment address with Guardrail',
  },
  get_payment: {
    method: 'GET',
    endpoint: '/v1/spv',
    description: 'Verify if an address is registered',
  },
  verify_address: {
    method: 'GET',
    endpoint: '/v1/verify/address',
    description: 'Public verification endpoint',
  },
};

export function APIRequestBuilder() {
  const [requestType, setRequestType] = useState<RequestType>('add_payment');
  const [environment, setEnvironment] = useState<'staging' | 'production'>('staging');
  const [apiKey, setApiKey] = useState('sk_test_your_api_key_here');
  const [address, setAddress] = useState('bc1qmerchant7x8f5kvy5l643lydnw9re59gtzzwf5mdq');
  const [ttl, setTtl] = useState(3600);
  const [showResponse, setShowResponse] = useState(false);

  const baseUrl = environment === 'staging'
    ? 'https://staging.branta.pro'
    : 'https://guardrail.branta.pro';

  const config = REQUEST_TYPES[requestType];

  const requestBody = useMemo(() => {
    if (requestType === 'add_payment') {
      return {
        address,
        ttl,
      };
    }
    return null;
  }, [requestType, address, ttl]);

  const curlCommand = useMemo(() => {
    let cmd = `curl -X ${config.method} "${baseUrl}${config.endpoint}`;

    if (requestType === 'get_payment' || requestType === 'verify_address') {
      cmd += `?address=${encodeURIComponent(address)}`;
    }
    cmd += '"';

    if (requestType !== 'verify_address') {
      cmd += ` \\\n  -H "Authorization: Bearer ${apiKey}"`;
    }
    cmd += ` \\\n  -H "Content-Type: application/json"`;

    if (requestBody) {
      cmd += ` \\\n  -d '${JSON.stringify(requestBody, null, 2)}'`;
    }

    return cmd;
  }, [config, baseUrl, requestType, address, apiKey, requestBody]);

  const sampleResponse = useMemo(() => {
    switch (requestType) {
      case 'add_payment':
        return {
          success: true,
          data: {
            address,
            registered_at: new Date().toISOString(),
            expires_at: new Date(Date.now() + ttl * 1000).toISOString(),
            ttl,
          },
        };
      case 'get_payment':
        return {
          success: true,
          data: {
            address,
            is_registered: true,
            merchant: 'Example Merchant',
            registered_at: new Date(Date.now() - 3600000).toISOString(),
            expires_at: new Date(Date.now() + ttl * 1000).toISOString(),
          },
        };
      case 'verify_address':
        return {
          verified: true,
          merchant: 'Example Merchant',
          registered: true,
        };
      default:
        return {};
    }
  }, [requestType, address, ttl]);

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">API Request Builder</h3>

      {/* Request type selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(Object.keys(REQUEST_TYPES) as RequestType[]).map((type) => (
          <button
            key={type}
            onClick={() => {
              setRequestType(type);
              setShowResponse(false);
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              requestType === type
                ? 'bg-amber-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {type.replace('_', ' ').toUpperCase()}
          </button>
        ))}
      </div>

      <p className="text-dark-400 mb-6">{config.description}</p>

      {/* Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Left column - inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Environment</label>
            <select
              value={environment}
              onChange={(e) => setEnvironment(e.target.value as 'staging' | 'production')}
              className="w-full bg-dark-700 text-dark-200 rounded-lg px-4 py-2 border border-dark-600 focus:border-amber-500 focus:outline-none"
            >
              <option value="staging">Staging (staging.branta.pro)</option>
              <option value="production">Production (guardrail.branta.pro)</option>
            </select>
          </div>

          {requestType !== 'verify_address' && (
            <div>
              <label className="block text-sm text-dark-400 mb-1">API Key</label>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full bg-dark-700 text-dark-200 rounded-lg px-4 py-2 border border-dark-600 focus:border-amber-500 focus:outline-none font-mono text-sm"
                placeholder="sk_test_..."
              />
            </div>
          )}

          <div>
            <label className="block text-sm text-dark-400 mb-1">Bitcoin Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-dark-700 text-dark-200 rounded-lg px-4 py-2 border border-dark-600 focus:border-amber-500 focus:outline-none font-mono text-sm"
              placeholder="bc1q..."
            />
          </div>

          {requestType === 'add_payment' && (
            <div>
              <label className="block text-sm text-dark-400 mb-1">
                TTL (seconds): {ttl.toLocaleString()}
              </label>
              <input
                type="range"
                min="300"
                max="2592000"
                step="300"
                value={ttl}
                onChange={(e) => setTtl(parseInt(e.target.value))}
                className="w-full accent-amber-500"
              />
              <div className="flex justify-between text-xs text-dark-500 mt-1">
                <span>5 min</span>
                <span>30 days</span>
              </div>
            </div>
          )}
        </div>

        {/* Right column - request preview */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-dark-400">Request Preview</label>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded text-xs font-bold ${
                config.method === 'POST' ? 'bg-green-600' : 'bg-blue-600'
              } text-white`}>
                {config.method}
              </span>
              <span className="text-xs text-dark-500 font-mono">{config.endpoint}</span>
            </div>
          </div>
          <pre className="bg-dark-900 rounded-lg p-4 text-sm font-mono text-dark-300 overflow-x-auto">
            {curlCommand}
          </pre>
        </div>
      </div>

      {/* Headers display */}
      <div className="mb-6">
        <label className="block text-sm text-dark-400 mb-2">Request Headers</label>
        <div className="bg-dark-800 rounded-lg p-4 font-mono text-sm space-y-1">
          <div className="flex">
            <span className="text-amber-400 w-40">Content-Type:</span>
            <span className="text-dark-300">application/json</span>
          </div>
          {requestType !== 'verify_address' && (
            <div className="flex">
              <span className="text-amber-400 w-40">Authorization:</span>
              <span className="text-dark-300">Bearer {apiKey.slice(0, 20)}...</span>
            </div>
          )}
        </div>
      </div>

      {/* Request body (for POST) */}
      {requestBody && (
        <div className="mb-6">
          <label className="block text-sm text-dark-400 mb-2">Request Body</label>
          <pre className="bg-dark-800 rounded-lg p-4 text-sm font-mono text-dark-300">
            {JSON.stringify(requestBody, null, 2)}
          </pre>
        </div>
      )}

      {/* Simulate button */}
      <button
        onClick={() => setShowResponse(!showResponse)}
        className="px-6 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700"
      >
        {showResponse ? 'Hide Response' : '▶ Simulate Request'}
      </button>

      {/* Response */}
      {showResponse && (
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-dark-400">Response</label>
            <span className="px-2 py-1 rounded text-xs bg-green-600 text-white font-bold">
              200 OK
            </span>
          </div>
          <pre className="bg-dark-900 rounded-lg p-4 text-sm font-mono text-green-400 overflow-x-auto">
            {JSON.stringify(sampleResponse, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
