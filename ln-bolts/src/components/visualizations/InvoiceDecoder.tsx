import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DecodedInvoice {
  prefix: string;
  network: string;
  amount?: { value: number; unit: string; sats: number };
  timestamp: number;
  paymentHash: string;
  description?: string;
  descriptionHash?: string;
  expiry: number;
  minFinalCltvExpiry: number;
  fallbackAddress?: string;
  routeHints: string[];
  features: string[];
  signature: string;
}

// Sample invoices for demonstration
const sampleInvoices = {
  simple: 'lnbc100n1pj9...',
  withDescription: 'lnbc1m1pjq...',
  withRouteHints: 'lnbc500u1pjr...',
};

const parseInvoice = (invoice: string): DecodedInvoice | null => {
  if (!invoice.toLowerCase().startsWith('ln')) return null;

  // Simulated parsing - in production this would be actual bech32 decoding
  const prefix = invoice.slice(0, 4).toLowerCase();
  let network = 'unknown';
  if (prefix.includes('bc')) network = 'mainnet';
  else if (prefix.includes('tb')) network = 'testnet';
  else if (prefix.includes('bcrt')) network = 'regtest';

  // Extract amount from prefix
  const amountMatch = invoice.match(/ln[a-z]+(\d+)([munp]?)/i);
  let amount;
  if (amountMatch) {
    const value = parseInt(amountMatch[1]);
    const unit = amountMatch[2] || '';
    let sats = value;
    let unitName = 'BTC';
    switch (unit.toLowerCase()) {
      case 'm': sats = value * 100000; unitName = 'mBTC'; break;
      case 'u': sats = value * 100; unitName = 'μBTC'; break;
      case 'n': sats = Math.floor(value / 10); unitName = 'nBTC'; break;
      case 'p': sats = Math.floor(value / 10000); unitName = 'pBTC'; break;
    }
    amount = { value, unit: unitName, sats };
  }

  return {
    prefix,
    network,
    amount,
    timestamp: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 3600),
    paymentHash: Array.from({ length: 64 }, () => '0123456789abcdef'[Math.floor(Math.random() * 16)]).join(''),
    description: 'Payment for coffee ☕',
    expiry: 3600,
    minFinalCltvExpiry: 18,
    routeHints: [],
    features: ['var_onion_optin', 'payment_secret'],
    signature: Array.from({ length: 64 }, () => '0123456789abcdef'[Math.floor(Math.random() * 16)]).join(''),
  };
};

const tagDescriptions: Record<string, { name: string; description: string }> = {
  paymentHash: { name: 'Payment Hash (p)', description: 'SHA256 hash of the preimage. Proves payment was made.' },
  description: { name: 'Description (d)', description: 'UTF-8 description of the purpose of payment.' },
  expiry: { name: 'Expiry (x)', description: 'Time in seconds until invoice expires.' },
  minFinalCltvExpiry: { name: 'Min CLTV (c)', description: 'Minimum blocks for final HTLC timelock.' },
  features: { name: 'Feature Bits (9)', description: 'Required and supported features for this payment.' },
  routeHints: { name: 'Route Hints (r)', description: 'Suggested route for reaching the destination.' },
  fallbackAddress: { name: 'Fallback (f)', description: 'On-chain address if Lightning payment fails.' },
};

export function InvoiceDecoder({ className = '' }: { className?: string }) {
  const [invoiceInput, setInvoiceInput] = useState('');
  const [decoded, setDecoded] = useState<DecodedInvoice | null>(null);
  const [error, setError] = useState('');
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const handleDecode = () => {
    if (!invoiceInput.trim()) {
      setError('Please enter a Lightning invoice');
      setDecoded(null);
      return;
    }

    const result = parseInvoice(invoiceInput.trim());
    if (result) {
      setDecoded(result);
      setError('');
    } else {
      setError('Invalid invoice format. Must start with "ln"');
      setDecoded(null);
    }
  };

  const loadSample = (key: keyof typeof sampleInvoices) => {
    // Generate a realistic-looking invoice
    const prefixes = { simple: 'lnbc100n', withDescription: 'lnbc1m', withRouteHints: 'lnbc500u' };
    const fakeInvoice = prefixes[key] + '1' + Array.from({ length: 200 }, () =>
      '0123456789abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 36)]
    ).join('');
    setInvoiceInput(fakeInvoice);
    const result = parseInvoice(fakeInvoice);
    if (result) {
      if (key === 'withRouteHints') {
        result.routeHints = ['03abc...→03def...', '03ghi...→03jkl...'];
      }
      setDecoded(result);
      setError('');
    }
  };

  const formatTimestamp = (ts: number) => {
    return new Date(ts * 1000).toLocaleString();
  };

  return (
    <div className={`bg-dark-900 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-dark-100">BOLT #11 Invoice Decoder</h3>
      </div>

      {/* Input */}
      <div className="mb-6">
        <label className="block text-dark-400 text-sm mb-2">Paste a Lightning Invoice</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={invoiceInput}
            onChange={(e) => setInvoiceInput(e.target.value)}
            placeholder="lnbc..."
            className="flex-1 bg-dark-800 border border-dark-700 rounded-lg px-4 py-2 text-dark-200 font-mono text-sm focus:outline-none focus:border-amber-500"
          />
          <button
            onClick={handleDecode}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-dark-900 font-medium rounded-lg transition-colors"
          >
            Decode
          </button>
        </div>
        {error && (
          <p className="text-red-400 text-sm mt-2">{error}</p>
        )}
      </div>

      {/* Sample Invoices */}
      <div className="flex gap-2 mb-6">
        <span className="text-dark-500 text-sm">Try sample:</span>
        <button
          onClick={() => loadSample('simple')}
          className="px-2 py-1 text-xs bg-dark-800 hover:bg-dark-700 text-dark-300 rounded transition-colors"
        >
          Simple
        </button>
        <button
          onClick={() => loadSample('withDescription')}
          className="px-2 py-1 text-xs bg-dark-800 hover:bg-dark-700 text-dark-300 rounded transition-colors"
        >
          With Memo
        </button>
        <button
          onClick={() => loadSample('withRouteHints')}
          className="px-2 py-1 text-xs bg-dark-800 hover:bg-dark-700 text-dark-300 rounded transition-colors"
        >
          Route Hints
        </button>
      </div>

      {/* Decoded Result */}
      <AnimatePresence mode="wait">
        {decoded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Header Info */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-dark-800 rounded-xl p-4 text-center">
                <div className="text-dark-500 text-xs mb-1">Network</div>
                <div className={`text-lg font-bold ${
                  decoded.network === 'mainnet' ? 'text-amber-400' :
                  decoded.network === 'testnet' ? 'text-blue-400' :
                  'text-dark-300'
                }`}>
                  {decoded.network}
                </div>
              </div>
              <div className="bg-dark-800 rounded-xl p-4 text-center">
                <div className="text-dark-500 text-xs mb-1">Amount</div>
                <div className="text-lg font-bold text-green-400">
                  {decoded.amount ? `${decoded.amount.sats.toLocaleString()} sats` : 'Any'}
                </div>
              </div>
              <div className="bg-dark-800 rounded-xl p-4 text-center">
                <div className="text-dark-500 text-xs mb-1">Expires In</div>
                <div className="text-lg font-bold text-dark-200">
                  {Math.floor(decoded.expiry / 60)} min
                </div>
              </div>
            </div>

            {/* Tagged Fields */}
            <div className="space-y-3">
              {/* Payment Hash */}
              <div
                className={`bg-dark-800 rounded-xl p-4 cursor-pointer transition-colors ${
                  selectedField === 'paymentHash' ? 'ring-2 ring-amber-500' : 'hover:bg-dark-750'
                }`}
                onClick={() => setSelectedField(selectedField === 'paymentHash' ? null : 'paymentHash')}
              >
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold text-sm">Payment Hash (p)</span>
                  <span className="text-dark-500 text-xs">32 bytes</span>
                </div>
                <div className="font-mono text-xs text-dark-300 mt-1 break-all">
                  {decoded.paymentHash}
                </div>
                {selectedField === 'paymentHash' && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-dark-400 text-xs mt-2"
                  >
                    {tagDescriptions.paymentHash.description}
                  </motion.p>
                )}
              </div>

              {/* Description */}
              {decoded.description && (
                <div
                  className={`bg-dark-800 rounded-xl p-4 cursor-pointer transition-colors ${
                    selectedField === 'description' ? 'ring-2 ring-amber-500' : 'hover:bg-dark-750'
                  }`}
                  onClick={() => setSelectedField(selectedField === 'description' ? null : 'description')}
                >
                  <span className="text-blue-400 font-semibold text-sm">Description (d)</span>
                  <div className="text-dark-200 mt-1">{decoded.description}</div>
                  {selectedField === 'description' && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-dark-400 text-xs mt-2"
                    >
                      {tagDescriptions.description.description}
                    </motion.p>
                  )}
                </div>
              )}

              {/* Timestamp */}
              <div className="bg-dark-800 rounded-xl p-4">
                <span className="text-green-400 font-semibold text-sm">Timestamp</span>
                <div className="text-dark-300 mt-1 text-sm">
                  {formatTimestamp(decoded.timestamp)} (Unix: {decoded.timestamp})
                </div>
              </div>

              {/* Features */}
              <div
                className={`bg-dark-800 rounded-xl p-4 cursor-pointer transition-colors ${
                  selectedField === 'features' ? 'ring-2 ring-amber-500' : 'hover:bg-dark-750'
                }`}
                onClick={() => setSelectedField(selectedField === 'features' ? null : 'features')}
              >
                <span className="text-amber-400 font-semibold text-sm">Feature Bits (9)</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {decoded.features.map((f, i) => (
                    <span key={i} className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded">
                      {f}
                    </span>
                  ))}
                </div>
                {selectedField === 'features' && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-dark-400 text-xs mt-2"
                  >
                    {tagDescriptions.features.description}
                  </motion.p>
                )}
              </div>

              {/* Route Hints */}
              {decoded.routeHints.length > 0 && (
                <div className="bg-dark-800 rounded-xl p-4">
                  <span className="text-orange-400 font-semibold text-sm">Route Hints (r)</span>
                  <div className="space-y-1 mt-2">
                    {decoded.routeHints.map((hint, i) => (
                      <div key={i} className="font-mono text-xs text-dark-300 bg-dark-700 rounded p-2">
                        {hint}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Signature */}
              <div className="bg-dark-800 rounded-xl p-4">
                <span className="text-red-400 font-semibold text-sm">Signature</span>
                <div className="font-mono text-xs text-dark-300 mt-1 break-all">
                  {decoded.signature}
                </div>
                <p className="text-dark-500 text-xs mt-2">
                  65-byte signature (recovery flag + r + s) over the invoice data
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!decoded && !error && (
        <div className="text-center py-12 text-dark-500">
          <div className="text-4xl mb-4">🧾</div>
          <p>Enter a Lightning invoice to decode its contents</p>
        </div>
      )}

      {/* BOLT #11 Structure */}
      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
        <div className="text-blue-400 text-sm font-semibold mb-1">📋 BOLT #11 Structure</div>
        <p className="text-dark-300 text-sm">
          Invoices use Bech32 encoding: <code className="bg-dark-800 px-1 rounded">ln</code> + network + amount +
          <code className="bg-dark-800 px-1 rounded">1</code> + tagged fields + signature
        </p>
      </div>
    </div>
  );
}

export default InvoiceDecoder;
