import { useState } from 'react';
import { motion } from 'framer-motion';

interface RadicalExample {
  ideal: string;
  radical: string;
  ring: string;
  explanation: string;
  isPrime: boolean;
  isRadical: boolean;
}

const RADICAL_EXAMPLES: RadicalExample[] = [
  {
    ideal: '(x²)',
    radical: '(x)',
    ring: 'k[x]',
    explanation: 'x² ∈ (x²) and x·x = x² ∈ (x²), so x ∈ √(x²)',
    isPrime: false,
    isRadical: false,
  },
  {
    ideal: '(4)',
    radical: '(2)',
    ring: 'Z',
    explanation: '2² = 4 ∈ (4), so 2 ∈ √(4)',
    isPrime: false,
    isRadical: false,
  },
  {
    ideal: '(x², xy)',
    radical: '(x)',
    ring: 'k[x,y]',
    explanation: 'Both x² and xy are divisible by x',
    isPrime: false,
    isRadical: false,
  },
  {
    ideal: '(x)',
    radical: '(x)',
    ring: 'k[x]',
    explanation: '(x) is prime, hence radical: √(x) = (x)',
    isPrime: true,
    isRadical: true,
  },
  {
    ideal: '(xy)',
    radical: '(xy)',
    ring: 'k[x,y]',
    explanation: '(xy) = (x) ∩ (y), intersection of primes is radical',
    isPrime: false,
    isRadical: true,
  },
];

interface IrreducibleDecomp {
  variety: string;
  equation: string;
  components: string[];
  isIrreducible: boolean;
}

const DECOMPOSITIONS: IrreducibleDecomp[] = [
  {
    variety: 'V(xy)',
    equation: 'xy = 0',
    components: ['V(x) = y-axis', 'V(y) = x-axis'],
    isIrreducible: false,
  },
  {
    variety: 'V(x² - y²)',
    equation: 'x² = y²',
    components: ['V(x-y) = line y=x', 'V(x+y) = line y=-x'],
    isIrreducible: false,
  },
  {
    variety: 'V(y - x²)',
    equation: 'y = x²',
    components: ['V(y - x²) = parabola'],
    isIrreducible: true,
  },
  {
    variety: 'V(x² + y² - 1)',
    equation: 'x² + y² = 1',
    components: ['V(x² + y² - 1) = circle'],
    isIrreducible: true,
  },
];

export function RadicalDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [selectedDecomp, setSelectedDecomp] = useState(0);
  const [mode, setMode] = useState<'radical' | 'decomposition'>('radical');

  const example = RADICAL_EXAMPLES[selectedExample];
  const decomp = DECOMPOSITIONS[selectedDecomp];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-primary-400">
          Radicals & Irreducible Decomposition
        </h4>
        <div className="flex gap-2">
          <button
            onClick={() => setMode('radical')}
            className={`px-3 py-1 rounded text-sm ${
              mode === 'radical'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Radicals
          </button>
          <button
            onClick={() => setMode('decomposition')}
            className={`px-3 py-1 rounded text-sm ${
              mode === 'decomposition'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Decomposition
          </button>
        </div>
      </div>

      {mode === 'radical' ? (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {RADICAL_EXAMPLES.map((ex, i) => (
              <button
                key={i}
                onClick={() => setSelectedExample(i)}
                className={`px-3 py-1 rounded text-sm ${
                  selectedExample === i
                    ? 'bg-amber-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {ex.ideal}
              </button>
            ))}
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <div className="text-sm text-dark-400 mb-3">In {example.ring}:</div>

            <div className="flex items-center justify-center gap-4 text-2xl mb-4">
              <motion.div
                key={`ideal-${selectedExample}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-dark-700 px-4 py-2 rounded font-mono text-blue-400"
              >
                {example.ideal}
              </motion.div>
              <span className="text-dark-400">→</span>
              <motion.div
                key={`radical-${selectedExample}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-dark-700 px-4 py-2 rounded font-mono"
              >
                <span className="text-dark-400">√</span>
                <span className="text-amber-400">{example.radical}</span>
              </motion.div>
            </div>

            <div className="text-dark-300 text-sm mb-4">
              {example.explanation}
            </div>

            <div className="flex gap-3">
              <div className={`px-3 py-1 rounded text-sm ${
                example.isPrime
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-dark-700 text-dark-400'
              }`}>
                {example.isPrime ? '✓ Prime' : '✗ Not Prime'}
              </div>
              <div className={`px-3 py-1 rounded text-sm ${
                example.isRadical
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'bg-dark-700 text-dark-400'
              }`}>
                {example.isRadical ? '✓ Radical' : '✗ Not Radical'}
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-dark-900/50 rounded text-sm text-dark-400">
            <strong className="text-dark-200">Theorem:</strong> √I = ∩{'{P : P ⊇ I, P prime}'}
            <br />
            The radical is the intersection of all prime ideals containing I.
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {DECOMPOSITIONS.map((d, i) => (
              <button
                key={i}
                onClick={() => setSelectedDecomp(i)}
                className={`px-3 py-1 rounded text-sm ${
                  selectedDecomp === i
                    ? 'bg-purple-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {d.variety}
              </button>
            ))}
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <div className="text-center mb-4">
              <span className="text-xl font-mono text-purple-400">{decomp.variety}</span>
              <span className="text-dark-400 mx-2">=</span>
              <span className="text-dark-300">{'{(x,y) : '}{decomp.equation}{'}'}</span>
            </div>

            <div className="mb-4">
              <div className="text-sm text-dark-400 mb-2">Irreducible components:</div>
              <div className="space-y-2">
                {decomp.components.map((comp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-sm flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-dark-200">{comp}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={`px-4 py-2 rounded text-center ${
              decomp.isIrreducible
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-amber-500/20 text-amber-400'
            }`}>
              {decomp.isIrreducible
                ? 'Already irreducible (I(X) is prime)'
                : `Reducible: ${decomp.components.length} components`
              }
            </div>
          </div>

          <div className="mt-4 p-3 bg-dark-900/50 rounded text-sm text-dark-400">
            <strong className="text-dark-200">Key Correspondence:</strong>
            <br />
            X irreducible ⟺ I(X) is prime
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-dark-500">
        The radical captures "geometric content": V(I) = V(√I).
        Every variety decomposes uniquely into irreducible components.
      </div>
    </div>
  );
}
