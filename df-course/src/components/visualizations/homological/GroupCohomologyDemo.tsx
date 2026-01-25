import { useState } from 'react';
import { motion } from 'framer-motion';

interface CohomologyExample {
  group: string;
  module: string;
  action: string;
  results: { degree: number; value: string; interpretation: string }[];
}

const EXAMPLES: CohomologyExample[] = [
  {
    group: 'Z/n',
    module: 'Z',
    action: 'trivial',
    results: [
      { degree: 0, value: 'Z', interpretation: 'Invariants = Z' },
      { degree: 1, value: '0', interpretation: 'No crossed homs (Hom(Z/n, Z) = 0)' },
      { degree: 2, value: 'Z/n', interpretation: 'Central extensions classified' },
    ],
  },
  {
    group: 'Z/n',
    module: 'Z/m',
    action: 'trivial',
    results: [
      { degree: 0, value: 'Z/m', interpretation: 'Invariants = Z/m' },
      { degree: 1, value: 'Z/gcd(n,m)', interpretation: 'Hom(Z/n, Z/m)' },
      { degree: 2, value: 'Z/gcd(n,m)', interpretation: 'Extensions by Z/m' },
    ],
  },
  {
    group: 'Z/2',
    module: 'Z with sign',
    action: 'σ·a = -a',
    results: [
      { degree: 0, value: '0', interpretation: 'No fixed points' },
      { degree: 1, value: 'Z/2', interpretation: 'Crossed homs mod principal' },
      { degree: 2, value: '0', interpretation: 'Extensions are split' },
    ],
  },
  {
    group: 'Z × Z',
    module: 'Z',
    action: 'trivial',
    results: [
      { degree: 0, value: 'Z', interpretation: 'Invariants' },
      { degree: 1, value: 'Z²', interpretation: 'Hom(Z², Z) = Z²' },
      { degree: 2, value: 'Z', interpretation: 'Central extensions (Heisenberg)' },
    ],
  },
];

export function GroupCohomologyDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [n, setN] = useState(4);
  const [showCochain, setShowCochain] = useState(false);

  const example = EXAMPLES[selectedExample];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Group Cohomology
      </h4>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {EXAMPLES.map((ex, i) => (
          <button
            key={i}
            onClick={() => setSelectedExample(i)}
            className={`px-3 py-1 rounded text-sm ${
              selectedExample === i
                ? 'bg-blue-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            H*(G={ex.group}, {ex.module})
          </button>
        ))}
      </div>

      {/* Current example */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <div className="text-xs text-dark-400 mb-1">Group G</div>
            <div className="text-lg font-mono text-blue-400">{example.group}</div>
          </div>
          <div>
            <div className="text-xs text-dark-400 mb-1">G-module A</div>
            <div className="text-lg font-mono text-emerald-400">{example.module}</div>
          </div>
          <div>
            <div className="text-xs text-dark-400 mb-1">Action</div>
            <div className="text-sm font-mono text-amber-400">{example.action}</div>
          </div>
        </div>

        <div className="space-y-3">
          {example.results.map((res) => (
            <motion.div
              key={res.degree}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: res.degree * 0.1 }}
              className="flex items-center gap-4 bg-dark-800 p-3 rounded"
            >
              <div className="w-16 text-center">
                <span className="font-mono text-primary-400">H^{res.degree}</span>
              </div>
              <div className="w-20 text-center font-mono text-lg text-dark-100">
                {res.value}
              </div>
              <div className="text-sm text-dark-400 flex-1">
                {res.interpretation}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cyclic group calculator */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-sm text-dark-400 mb-3">
          Cohomology of Z/n with trivial coefficients:
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-dark-300">n =</span>
          <input
            type="number"
            min="2"
            max="20"
            value={n}
            onChange={(e) => setN(Math.max(2, parseInt(e.target.value) || 2))}
            className="w-16 px-2 py-1 bg-dark-700 rounded text-center font-mono"
          />
        </div>

        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-dark-800 p-2 rounded">
            <div className="text-xs text-dark-400">H⁰</div>
            <div className="font-mono text-emerald-400">Z</div>
          </div>
          <div className="bg-dark-800 p-2 rounded">
            <div className="text-xs text-dark-400">H¹</div>
            <div className="font-mono text-emerald-400">0</div>
          </div>
          <div className="bg-dark-800 p-2 rounded">
            <div className="text-xs text-dark-400">H²</div>
            <div className="font-mono text-emerald-400">Z/{n}</div>
          </div>
          <div className="bg-dark-800 p-2 rounded">
            <div className="text-xs text-dark-400">H³</div>
            <div className="font-mono text-emerald-400">0</div>
          </div>
        </div>

        <div className="mt-3 text-xs text-dark-500">
          Pattern: H^k(Z/n, Z) = Z if k=0, Z/n if k even &gt; 0, 0 if k odd
        </div>
      </div>

      {/* Cochain complex */}
      <div className="bg-dark-900 rounded-lg p-4">
        <button
          onClick={() => setShowCochain(!showCochain)}
          className="text-sm text-dark-400 hover:text-dark-200 flex items-center gap-2"
        >
          <span>{showCochain ? '▼' : '▶'}</span>
          Cochain Complex
        </button>

        {showCochain && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 space-y-3"
          >
            <div className="text-sm mb-2">
              For <span className="text-blue-400">G</span>-module <span className="text-emerald-400">A</span>:
            </div>

            <div className="bg-dark-800 p-3 rounded font-mono text-sm overflow-x-auto">
              C⁰ = A → C¹ = Map(G,A) → C² = Map(G²,A) → ⋯
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-dark-800 p-3 rounded">
                <div className="text-purple-400 font-semibold mb-1">0-cocycles</div>
                <div className="text-sm text-dark-300">
                  a ∈ A with g·a = a for all g
                </div>
                <div className="text-xs text-dark-500 mt-1">
                  → H⁰ = A^G (invariants)
                </div>
              </div>

              <div className="bg-dark-800 p-3 rounded">
                <div className="text-blue-400 font-semibold mb-1">1-cocycles</div>
                <div className="text-sm text-dark-300">
                  f: G → A with f(gh) = f(g) + g·f(h)
                </div>
                <div className="text-xs text-dark-500 mt-1">
                  → Crossed homomorphisms
                </div>
              </div>
            </div>

            <div className="p-2 bg-dark-800 rounded text-sm">
              <strong className="text-amber-400">Coboundary:</strong>
              <span className="text-dark-300 ml-2">(df)(g₁,...,g_{n+1}) involves alternating sum with action</span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 text-xs text-dark-500">
        H^n(G, A) = Ext^n_{Z[G]}(Z, A). Computed via bar resolution or explicit cochains.
      </div>
    </div>
  );
}
