import { useState } from 'react';
import { motion } from 'framer-motion';

interface Example {
  name: string;
  functor: 'Tor' | 'Ext';
  modules: [string, string];
  ring: string;
  result: string;
  resolution: string[];
  explanation: string;
}

const EXAMPLES: Example[] = [
  {
    name: 'Tor over Z',
    functor: 'Tor',
    modules: ['Z/m', 'Z/n'],
    ring: 'Z',
    result: 'Z/gcd(m,n)',
    resolution: ['0 → Z →×m Z → Z/m → 0'],
    explanation: 'Tensor with Z/n: kernel of ×m on Z/n is Z/gcd(m,n)',
  },
  {
    name: 'Ext over Z',
    functor: 'Ext',
    modules: ['Z/m', 'Z/n'],
    ring: 'Z',
    result: 'Z/gcd(m,n)',
    resolution: ['0 → Z →×m Z → Z/m → 0'],
    explanation: 'Apply Hom(−, Z/n): cokernel of ×m on Z/n is Z/gcd(m,n)',
  },
  {
    name: 'Tor with flat module',
    functor: 'Tor',
    modules: ['M', 'Q (flat)'],
    ring: 'Z',
    result: '0 for n ≥ 1',
    resolution: ['Any projective resolution'],
    explanation: 'Flat modules preserve exactness, so Tor vanishes',
  },
  {
    name: 'Ext with injective',
    functor: 'Ext',
    modules: ['M', 'I (injective)'],
    ring: 'R',
    result: '0 for n ≥ 1',
    resolution: ['Any projective resolution'],
    explanation: 'Hom into injective is exact, so Ext vanishes',
  },
];

export function ExtTorDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [m, setM] = useState(6);
  const [n, setN] = useState(4);
  const [showLES, setShowLES] = useState(false);

  const example = EXAMPLES[selectedExample];
  const gcd = computeGcd(m, n);

  function computeGcd(a: number, b: number): number {
    while (b !== 0) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Ext and Tor Functors
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
            {ex.name}
          </button>
        ))}
      </div>

      {/* Current example display */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-1 rounded text-sm font-bold ${
            example.functor === 'Tor' ? 'bg-amber-500/20 text-amber-400' : 'bg-purple-500/20 text-purple-400'
          }`}>
            {example.functor}
          </span>
          <span className="text-dark-300">over</span>
          <span className="font-mono text-blue-400">{example.ring}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-xs text-dark-400 mb-1">First Module</div>
            <div className="font-mono text-emerald-400">{example.modules[0]}</div>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-xs text-dark-400 mb-1">Second Module</div>
            <div className="font-mono text-emerald-400">{example.modules[1]}</div>
          </div>
        </div>

        <div className="bg-dark-800 p-3 rounded mb-3">
          <div className="text-xs text-dark-400 mb-1">Resolution</div>
          <div className="font-mono text-sm text-dark-300">
            {example.resolution.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-dark-400">Result:</span>
          <motion.span
            key={example.result}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="font-mono text-lg text-primary-400"
          >
            {example.functor}₁ = {example.result}
          </motion.span>
        </div>

        <div className="mt-3 text-sm text-dark-400">
          {example.explanation}
        </div>
      </div>

      {/* Interactive calculator for Z/m and Z/n */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-sm text-dark-400 mb-3">
          Compute Tor₁(Z/m, Z/n) and Ext¹(Z/m, Z/n) over Z:
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-dark-300">m =</span>
            <input
              type="number"
              min="2"
              max="100"
              value={m}
              onChange={(e) => setM(Math.max(2, parseInt(e.target.value) || 2))}
              className="w-16 px-2 py-1 bg-dark-700 rounded text-center font-mono"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-dark-300">n =</span>
            <input
              type="number"
              min="2"
              max="100"
              value={n}
              onChange={(e) => setN(Math.max(2, parseInt(e.target.value) || 2))}
              className="w-16 px-2 py-1 bg-dark-700 rounded text-center font-mono"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            key={`tor-${m}-${n}`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-amber-500/10 p-4 rounded border border-amber-500/30"
          >
            <div className="text-amber-400 font-semibold mb-1">
              Tor₁(Z/{m}, Z/{n})
            </div>
            <div className="font-mono text-xl text-dark-100">
              Z/{gcd}
            </div>
            <div className="text-xs text-dark-400 mt-1">
              gcd({m}, {n}) = {gcd}
            </div>
          </motion.div>

          <motion.div
            key={`ext-${m}-${n}`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-purple-500/10 p-4 rounded border border-purple-500/30"
          >
            <div className="text-purple-400 font-semibold mb-1">
              Ext¹(Z/{m}, Z/{n})
            </div>
            <div className="font-mono text-xl text-dark-100">
              Z/{gcd}
            </div>
            <div className="text-xs text-dark-400 mt-1">
              gcd({m}, {n}) = {gcd}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Long exact sequence */}
      <div className="bg-dark-900 rounded-lg p-4">
        <button
          onClick={() => setShowLES(!showLES)}
          className="text-sm text-dark-400 hover:text-dark-200 flex items-center gap-2"
        >
          <span>{showLES ? '▼' : '▶'}</span>
          Long Exact Sequences
        </button>

        {showLES && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3"
          >
            <div className="mb-4">
              <div className="text-sm text-amber-400 mb-2">For Tor (from 0 → A → B → C → 0):</div>
              <div className="bg-dark-800 p-2 rounded font-mono text-sm overflow-x-auto">
                ⋯ → Tor₁(C, N) → A⊗N → B⊗N → C⊗N → 0
              </div>
            </div>

            <div>
              <div className="text-sm text-purple-400 mb-2">For Ext (from 0 → A → B → C → 0):</div>
              <div className="bg-dark-800 p-2 rounded font-mono text-sm overflow-x-auto">
                0 → Hom(C,N) → Hom(B,N) → Hom(A,N) → Ext¹(C,N) → ⋯
              </div>
            </div>

            <div className="mt-3 p-2 bg-dark-800 rounded text-sm">
              <strong className="text-emerald-400">Key:</strong> Tor measures failure of ⊗ to be exact;
              Ext measures failure of Hom to be exact.
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 text-xs text-dark-500">
        Ext¹ classifies extensions; Tor₁ detects torsion. Both are computed via resolutions.
      </div>
    </div>
  );
}
