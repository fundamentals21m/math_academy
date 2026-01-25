import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type LocalizationExample = {
  name: string;
  ring: string;
  multSet: string;
  result: string;
  elements: string;
  description: string;
  isField: boolean;
};

const examples: LocalizationExample[] = [
  {
    name: 'Z → Q',
    ring: 'Z',
    multSet: 'Z \\ {0}',
    result: 'Q',
    elements: '{a/b : a ∈ Z, b ∈ Z \\ {0}}',
    description: 'Field of fractions: invert all nonzero elements',
    isField: true,
  },
  {
    name: 'Z localized at (p)',
    ring: 'Z',
    multSet: 'Z \\ (p)',
    result: 'Z_(p)',
    elements: '{a/b : p ∤ b}',
    description: 'Local ring with unique maximal ideal pZ_(p)',
    isField: false,
  },
  {
    name: 'k[x] → k(x)',
    ring: 'k[x]',
    multSet: 'k[x] \\ {0}',
    result: 'k(x)',
    elements: '{f/g : f,g ∈ k[x], g ≠ 0}',
    description: 'Field of rational functions',
    isField: true,
  },
  {
    name: 'Z[1/2]',
    ring: 'Z',
    multSet: '{2^n : n ≥ 0}',
    result: 'Z[1/2]',
    elements: '{a/2^n : a ∈ Z, n ≥ 0}',
    description: 'Inverting powers of 2 only',
    isField: false,
  },
];

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

export function LocalizationDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [num1, setNum1] = useState(3);
  const [den1, setDen1] = useState(4);
  const [num2, setNum2] = useState(5);
  const [den2, setDen2] = useState(6);
  const [showOperations, setShowOperations] = useState(true);

  const ex = examples[selectedExample];

  // Compute sum and product
  const sumNum = num1 * den2 + num2 * den1;
  const sumDen = den1 * den2;
  const sumGcd = gcd(sumNum, sumDen);

  const prodNum = num1 * num2;
  const prodDen = den1 * den2;
  const prodGcd = gcd(prodNum, prodDen);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Localization & Fraction Fields</h4>

      {/* Example Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((e, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedExample(idx)}
            className={`px-4 py-2 rounded transition-all ${
              selectedExample === idx
                ? e.isField ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {e.name}
          </button>
        ))}
      </div>

      {/* Localization Info */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-blue-400 font-mono">{ex.ring}</span>
          <span className="text-dark-500">→</span>
          <span className="text-dark-500">S⁻¹{ex.ring}</span>
          <span className="text-dark-500">=</span>
          <span className="text-green-400 font-mono">{ex.result}</span>
          {ex.isField && (
            <span className="px-2 py-1 bg-green-900/50 text-green-400 text-xs rounded">Field</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <div><span className="text-dark-500">S = </span><span className="text-purple-400">{ex.multSet}</span></div>
          <div><span className="text-dark-500">Elements: </span><span className="text-dark-300">{ex.elements}</span></div>
        </div>
        <div className="text-dark-400 text-sm mt-3">{ex.description}</div>
      </div>

      {/* Equivalence Relation */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-2">Equivalence Relation</h5>
        <div className="text-dark-300 text-sm">
          <span className="font-mono">a/b ~ c/d</span> iff there exists <span className="font-mono">s ∈ S</span> such that:
        </div>
        <div className="text-center font-mono text-lg mt-2 text-yellow-400">
          s(ad - bc) = 0
        </div>
        <div className="text-dark-500 text-xs mt-2">
          In an integral domain, this simplifies to ad = bc.
        </div>
      </div>

      {/* Arithmetic in Q */}
      <button
        onClick={() => setShowOperations(!showOperations)}
        className="text-sm text-blue-400 hover:text-blue-300 mb-4"
      >
        {showOperations ? '▼' : '▶'} Arithmetic Example (in Q)
      </button>

      <AnimatePresence>
        {showOperations && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-700 p-4 rounded-lg overflow-hidden mb-6"
          >
            {/* Fraction Inputs */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-dark-400 text-sm mb-1">First fraction:</div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(parseInt(e.target.value) || 0)}
                    className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
                  />
                  <span className="text-dark-500">/</span>
                  <input
                    type="number"
                    value={den1}
                    onChange={(e) => setDen1(parseInt(e.target.value) || 1)}
                    className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
                  />
                </div>
              </div>
              <div>
                <div className="text-dark-400 text-sm mb-1">Second fraction:</div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(parseInt(e.target.value) || 0)}
                    className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
                  />
                  <span className="text-dark-500">/</span>
                  <input
                    type="number"
                    value={den2}
                    onChange={(e) => setDen2(parseInt(e.target.value) || 1)}
                    className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
                  />
                </div>
              </div>
            </div>

            {/* Operations */}
            <div className="space-y-3 font-mono text-sm">
              <div className="p-2 bg-dark-800 rounded">
                <span className="text-blue-400">{num1}/{den1}</span>
                <span className="text-dark-500 mx-2">+</span>
                <span className="text-purple-400">{num2}/{den2}</span>
                <span className="text-dark-500 mx-2">=</span>
                <span className="text-dark-400">({num1}·{den2} + {num2}·{den1})/({den1}·{den2})</span>
                <span className="text-dark-500 mx-2">=</span>
                <span className="text-dark-400">{sumNum}/{sumDen}</span>
                <span className="text-dark-500 mx-2">=</span>
                <span className="text-green-400">{sumNum/sumGcd}/{sumDen/sumGcd}</span>
              </div>
              <div className="p-2 bg-dark-800 rounded">
                <span className="text-blue-400">{num1}/{den1}</span>
                <span className="text-dark-500 mx-2">·</span>
                <span className="text-purple-400">{num2}/{den2}</span>
                <span className="text-dark-500 mx-2">=</span>
                <span className="text-dark-400">{prodNum}/{prodDen}</span>
                <span className="text-dark-500 mx-2">=</span>
                <span className="text-green-400">{prodNum/prodGcd}/{prodDen/prodGcd}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key Properties */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Universal Property</h5>
        <div className="text-dark-400 text-sm">
          For any ring homomorphism φ: R → T where φ(s) is a unit for all s ∈ S,
          there exists a unique φ̃: S⁻¹R → T such that φ̃ ∘ ι = φ.
        </div>
        <div className="text-center font-mono text-xs mt-3 text-dark-500">
          R —ι→ S⁻¹R<br/>
          ↘ φ ↙ φ̃<br/>
          T
        </div>
      </div>
    </div>
  );
}
