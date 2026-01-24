import { useState, useMemo } from 'react';

// Simple hash simulation for demonstration
const simpleHash = (input: string): string => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  // Convert to hex-like string
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `0x${hex}${hex.split('').reverse().join('')}`;
};

const generateNonce = (): string => {
  return Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
};

export function ZeroKnowledgeDemo() {
  const [address, setAddress] = useState('bc1qmerchant7x8f5kvy5l643lydnw9re59gtzzwf5mdq');
  const [nonce, setNonce] = useState(generateNonce());
  const [showAddress, setShowAddress] = useState(true);
  const [step, setStep] = useState(0);

  const commitment = useMemo(() => {
    return simpleHash(address + nonce);
  }, [address, nonce]);

  // Simulated set of registered addresses (for demo)
  const registeredSet = useMemo(() => {
    return new Set([
      simpleHash('bc1qmerchant7x8f5kvy5l643lydnw9re59gtzzwf5mdq' + nonce),
      simpleHash('bc1qshop123abc' + nonce),
      simpleHash('bc1qstore456def' + nonce),
    ]);
  }, [nonce]);

  const isInSet = registeredSet.has(commitment);

  const handleNewNonce = () => {
    setNonce(generateNonce());
    setStep(0);
  };

  const steps = [
    {
      title: 'Create Commitment',
      description: 'Hash the address with a random nonce. This hides the address while allowing verification.',
      action: 'commitment = Hash(address + nonce)',
    },
    {
      title: 'Send Commitment',
      description: 'Send only the commitment (hash) to Branta. The actual address stays private.',
      action: 'POST commitment → Branta',
    },
    {
      title: 'Check Membership',
      description: 'Branta checks if any registered address produces this commitment with any known nonce pattern.',
      action: 'commitment ∈ RegisteredSet?',
    },
    {
      title: 'Receive Proof',
      description: 'Branta returns a cryptographic proof of membership (or non-membership).',
      action: 'proof ← Branta',
    },
  ];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">Zero-Knowledge Verification Demo</h3>

      <p className="text-dark-400 mb-6">
        Zero-knowledge proofs allow verification without revealing the address being checked.
        This demo shows the commitment scheme concept.
      </p>

      {/* Input section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">
            Your Secret Address
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="ml-2 text-amber-500 hover:text-amber-400"
            >
              {showAddress ? '👁️ Hide' : '👁️ Show'}
            </button>
          </label>
          <input
            type={showAddress ? 'text' : 'password'}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full bg-dark-700 text-dark-200 rounded-lg px-4 py-2 border border-dark-600 focus:border-amber-500 focus:outline-none font-mono text-sm"
          />
        </div>

        <div>
          <label className="block text-sm text-dark-400 mb-2">
            Random Nonce
            <button
              onClick={handleNewNonce}
              className="ml-2 text-amber-500 hover:text-amber-400"
            >
              🔄 Regenerate
            </button>
          </label>
          <input
            type="text"
            value={nonce}
            readOnly
            className="w-full bg-dark-700 text-dark-200 rounded-lg px-4 py-2 border border-dark-600 font-mono text-sm"
          />
        </div>
      </div>

      {/* Commitment visualization */}
      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <h4 className="text-dark-200 font-semibold mb-4">Commitment Scheme</h4>

        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Address (hidden) */}
          <div className="flex-1 bg-dark-700 rounded-lg p-4 text-center">
            <p className="text-dark-500 text-xs mb-2">Secret Address</p>
            <p className="font-mono text-sm break-all">
              {showAddress ? (
                <span className="text-green-400">{address}</span>
              ) : (
                <span className="text-dark-500">••••••••••••••••••••</span>
              )}
            </p>
          </div>

          <div className="text-2xl text-dark-500">+</div>

          {/* Nonce */}
          <div className="flex-1 bg-dark-700 rounded-lg p-4 text-center">
            <p className="text-dark-500 text-xs mb-2">Random Nonce</p>
            <p className="font-mono text-sm text-amber-400">{nonce}</p>
          </div>

          <div className="text-2xl text-dark-500">→</div>

          {/* Hash function */}
          <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center">
            <span className="text-2xl">🔐</span>
          </div>

          <div className="text-2xl text-dark-500">→</div>

          {/* Commitment */}
          <div className="flex-1 bg-dark-700 rounded-lg p-4 text-center">
            <p className="text-dark-500 text-xs mb-2">Commitment (Public)</p>
            <p className="font-mono text-sm text-cyan-400 break-all">{commitment}</p>
          </div>
        </div>

        <p className="mt-4 text-dark-400 text-sm text-center">
          The commitment reveals nothing about the address, but can be verified against the registered set.
        </p>
      </div>

      {/* Step-by-step process */}
      <div className="mb-6">
        <h4 className="text-dark-200 font-semibold mb-4">Verification Process</h4>

        <div className="flex gap-2 mb-4">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setStep(index)}
              className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                step === index
                  ? 'bg-amber-600 text-white'
                  : step > index
                  ? 'bg-green-600/30 text-green-400'
                  : 'bg-dark-700 text-dark-400'
              }`}
            >
              Step {index + 1}
            </button>
          ))}
        </div>

        <div className="bg-dark-800 rounded-xl p-6">
          <h5 className="text-lg font-semibold text-dark-100 mb-2">
            {steps[step].title}
          </h5>
          <p className="text-dark-400 mb-4">{steps[step].description}</p>
          <code className="block bg-dark-900 rounded-lg p-4 font-mono text-amber-400 text-sm">
            {steps[step].action}
          </code>
        </div>
      </div>

      {/* Result visualization */}
      <div className="bg-dark-800 rounded-xl p-6">
        <h4 className="text-dark-200 font-semibold mb-4">What Branta Learns</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional */}
          <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
            <h5 className="text-red-400 font-semibold mb-3">❌ Traditional Verification</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-red-400">✓</span>
                <span className="text-dark-300">Your actual address</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✓</span>
                <span className="text-dark-300">When you verified</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✓</span>
                <span className="text-dark-300">Which merchant you're paying</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✓</span>
                <span className="text-dark-300">Your IP address</span>
              </li>
            </ul>
          </div>

          {/* Zero-Knowledge */}
          <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
            <h5 className="text-green-400 font-semibold mb-3">✓ Zero-Knowledge Verification</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-dark-300">Someone made a query</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-dark-500">✗</span>
                <span className="text-dark-500">Which address was checked</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-dark-500">✗</span>
                <span className="text-dark-500">Who made the request</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-dark-500">✗</span>
                <span className="text-dark-500">Transaction patterns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demo result */}
      <div className={`mt-6 p-4 rounded-xl text-center ${
        isInSet
          ? 'bg-green-900/30 border border-green-600'
          : 'bg-yellow-900/30 border border-yellow-600'
      }`}>
        <p className={`font-semibold ${isInSet ? 'text-green-400' : 'text-yellow-400'}`}>
          {isInSet
            ? '✓ Address is in the registered set (verified without revealing it!)'
            : '⚠ Address not found in registered set'}
        </p>
      </div>
    </div>
  );
}
