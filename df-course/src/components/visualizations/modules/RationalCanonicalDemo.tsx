import { useState } from 'react';
import { motion } from 'framer-motion';

type Example = {
  name: string;
  charPoly: string;
  minPoly: string;
  invariantFactors: string[];
  rcf: number[][];
};

const examples: Example[] = [
  {
    name: 'Distinct eigenvalues',
    charPoly: '(x-1)(x-2)(x-3)',
    minPoly: '(x-1)(x-2)(x-3)',
    invariantFactors: ['(x-1)(x-2)(x-3)'],
    rcf: [
      [0, 0, 6],
      [1, 0, -11],
      [0, 1, 6]
    ]
  },
  {
    name: 'Repeated eigenvalue',
    charPoly: '(x-2)²(x-3)',
    minPoly: '(x-2)(x-3)',
    invariantFactors: ['(x-2)', '(x-2)(x-3)'],
    rcf: [
      [2, 0, 0],
      [0, 0, 6],
      [0, 1, -5]
    ]
  },
  {
    name: 'Single block',
    charPoly: '(x-1)³',
    minPoly: '(x-1)³',
    invariantFactors: ['(x-1)³'],
    rcf: [
      [0, 0, 1],
      [1, 0, -3],
      [0, 1, 3]
    ]
  }
];

export function RationalCanonicalDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [showCompanion, setShowCompanion] = useState(true);

  const ex = examples[selectedExample];

  // Companion matrix explanation
  const companionInfo = {
    polynomial: 'x³ - 6x² + 11x - 6 = (x-1)(x-2)(x-3)',
    matrix: 'C(f) puts -a₀, -a₁, ... in last column'
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Rational Canonical Form</h4>

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

      {/* Polynomials */}
      <motion.div
        key={selectedExample}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-700 p-4 rounded-lg mb-6"
      >
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-dark-500 text-sm mb-1">Characteristic Polynomial χ_T(x):</div>
            <div className="text-blue-400 font-mono">{ex.charPoly}</div>
          </div>
          <div>
            <div className="text-dark-500 text-sm mb-1">Minimal Polynomial μ_T(x):</div>
            <div className="text-purple-400 font-mono">{ex.minPoly}</div>
          </div>
        </div>
        <div>
          <div className="text-dark-500 text-sm mb-1">Invariant Factors (f₁ | f₂ | ...):</div>
          <div className="flex gap-3">
            {ex.invariantFactors.map((f, idx) => (
              <span key={idx} className="text-green-400 font-mono bg-dark-800 px-2 py-1 rounded">
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="text-dark-500 text-xs mt-3">
          Note: μ_T = largest invariant factor, χ_T = product of all invariant factors
        </div>
      </motion.div>

      {/* Rational Canonical Form Matrix */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Rational Canonical Form</h5>
        <div className="flex items-center justify-center">
          <span className="text-dark-500 text-4xl mr-2">[</span>
          <div className="grid grid-cols-3 gap-1">
            {ex.rcf.map((row, i) =>
              row.map((val, j) => (
                <div
                  key={`${i}-${j}`}
                  className={`w-10 h-10 flex items-center justify-center font-mono text-sm rounded ${
                    val !== 0 ? 'text-dark-100 bg-dark-800' : 'text-dark-600'
                  }`}
                >
                  {val}
                </div>
              ))
            )}
          </div>
          <span className="text-dark-500 text-4xl ml-2">]</span>
        </div>
        <div className="text-dark-500 text-sm text-center mt-3">
          Block diagonal of companion matrices C(fᵢ)
        </div>
      </div>

      {/* Companion Matrix Info */}
      <button
        onClick={() => setShowCompanion(!showCompanion)}
        className="text-sm text-blue-400 hover:text-blue-300 mb-4"
      >
        {showCompanion ? '▼' : '▶'} Companion Matrix Structure
      </button>

      {showCompanion && (
        <div className="bg-dark-700 p-4 rounded-lg mb-6">
          <h5 className="text-dark-200 font-medium mb-3">Companion Matrix C(f)</h5>
          <div className="text-dark-400 text-sm mb-3">
            For f(x) = xⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀:
          </div>
          <div className="bg-dark-800 p-3 rounded font-mono text-sm">
            <div className="text-center mb-2">
              C(f) = <br/>
              [0, 0, ..., 0, -a₀]<br/>
              [1, 0, ..., 0, -a₁]<br/>
              [0, 1, ..., 0, -a₂]<br/>
              [...        ...]<br/>
              [0, 0, ..., 1, -aₙ₋₁]
            </div>
          </div>
          <div className="text-dark-500 text-xs mt-2">
            The characteristic and minimal polynomial of C(f) both equal f.
          </div>
        </div>
      )}

      {/* Key Results */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Similarity Criterion</h5>
        <div className="text-dark-400 text-sm">
          Two matrices are similar ⟺ same invariant factors ⟺ same RCF
        </div>
      </div>
    </div>
  );
}
