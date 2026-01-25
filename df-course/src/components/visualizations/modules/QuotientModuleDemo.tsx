import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type IsomorphismExample = {
  name: string;
  source: string;
  target: string;
  kernel: string;
  image: string;
  quotient: string;
};

const examples: IsomorphismExample[] = [
  {
    name: 'Z → Z/nZ',
    source: 'Z',
    target: 'Z/nZ',
    kernel: 'nZ',
    image: 'Z/nZ',
    quotient: 'Z/nZ ≅ Z/nZ',
  },
  {
    name: 'R[x] → R (eval at 0)',
    source: 'R[x]',
    target: 'R',
    kernel: '(x) = xR[x]',
    image: 'R',
    quotient: 'R[x]/(x) ≅ R',
  },
  {
    name: 'Z^2 → Z (projection)',
    source: 'Z^2',
    target: 'Z',
    kernel: 'Z × {0}',
    image: 'Z',
    quotient: 'Z^2/(Z×{0}) ≅ Z',
  },
];

export function QuotientModuleDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [n, setN] = useState(6);
  const [showCosets, setShowCosets] = useState(true);

  const ex = examples[selectedExample];

  // Generate cosets of nZ in Z
  const generateCosets = () => {
    const cosets = [];
    for (let i = 0; i < n; i++) {
      cosets.push({
        representative: i,
        elements: `{..., ${i - 2*n}, ${i - n}, ${i}, ${i + n}, ${i + 2*n}, ...}`,
      });
    }
    return cosets;
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Quotient Modules & Isomorphism Theorems</h4>

      {/* Example Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((e, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedExample(idx)}
            className={`px-4 py-2 rounded transition-all ${
              selectedExample === idx
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {e.name}
          </button>
        ))}
      </div>

      {/* First Isomorphism Theorem Display */}
      <motion.div
        key={selectedExample}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-700 p-4 rounded-lg mb-6"
      >
        <h5 className="text-dark-200 font-medium mb-3">First Isomorphism Theorem</h5>
        <div className="text-center font-mono mb-4">
          <span className="text-blue-400">{ex.source}</span>
          <span className="text-dark-500 mx-2">/</span>
          <span className="text-red-400">ker(φ)</span>
          <span className="text-dark-500 mx-2">≅</span>
          <span className="text-green-400">Im(φ)</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-500 text-sm">Source Module:</div>
            <div className="text-blue-400 font-mono">{ex.source}</div>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-500 text-sm">Target Module:</div>
            <div className="text-purple-400 font-mono">{ex.target}</div>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-500 text-sm">Kernel:</div>
            <div className="text-red-400 font-mono">{ex.kernel}</div>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-500 text-sm">Image:</div>
            <div className="text-green-400 font-mono">{ex.image}</div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <span className="text-dark-400">Result: </span>
          <span className="text-yellow-400 font-mono">{ex.quotient}</span>
        </div>
      </motion.div>

      {/* Coset Visualization for Z/nZ */}
      {selectedExample === 0 && (
        <>
          <div className="flex items-center gap-4 mb-4">
            <label className="text-dark-400">Modulus n =</label>
            <input
              type="number"
              min={2}
              max={12}
              value={n}
              onChange={(e) => setN(Math.max(2, Math.min(12, parseInt(e.target.value) || 2)))}
              className="w-20 bg-dark-700 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
            />
            <button
              onClick={() => setShowCosets(!showCosets)}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              {showCosets ? '▼' : '▶'} Show Cosets
            </button>
          </div>

          <AnimatePresence>
            {showCosets && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-dark-700 p-4 rounded-lg mb-6 overflow-hidden"
              >
                <h5 className="text-dark-200 font-medium mb-3">Cosets of {n}Z in Z</h5>
                <div className="space-y-2">
                  {generateCosets().map((coset, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded w-8 text-center font-mono">
                        {coset.representative}
                      </span>
                      <span className="text-dark-500">+</span>
                      <span className="text-purple-400">{n}Z</span>
                      <span className="text-dark-500">=</span>
                      <span className="text-dark-300 font-mono text-sm">{coset.elements}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-dark-500 text-sm">
                  Z/{n}Z has {n} cosets, each representing an equivalence class
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Key Theorems */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Isomorphism Theorems for Modules</h5>
        <ul className="text-dark-400 text-sm space-y-2">
          <li><span className="text-blue-400">1st:</span> M/ker(φ) ≅ Im(φ)</li>
          <li><span className="text-green-400">2nd:</span> A/(A ∩ B) ≅ (A + B)/B</li>
          <li><span className="text-purple-400">3rd:</span> (M/N)/(L/N) ≅ M/L for N ⊆ L</li>
          <li><span className="text-yellow-400">Correspondence:</span> Submodules of M/N ↔ Submodules of M containing N</li>
        </ul>
      </div>
    </div>
  );
}
