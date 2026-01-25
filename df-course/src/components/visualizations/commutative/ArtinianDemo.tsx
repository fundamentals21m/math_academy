import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChainExample {
  name: string;
  ring: string;
  chain: string[];
  stabilizes: boolean;
  isArtinian: boolean;
}

const DCC_EXAMPLES: ChainExample[] = [
  {
    name: 'Z (not Artinian)',
    ring: 'Z',
    chain: ['(2)', '(4)', '(8)', '(16)', '(32)', '...'],
    stabilizes: false,
    isArtinian: false,
  },
  {
    name: 'Z/8Z (Artinian)',
    ring: 'Z/8Z',
    chain: ['(2)', '(4)', '(0)', '(0)', '(0)'],
    stabilizes: true,
    isArtinian: true,
  },
  {
    name: 'k[x]/(x³)',
    ring: 'k[x]/(x³)',
    chain: ['(x)', '(x²)', '(0)', '(0)'],
    stabilizes: true,
    isArtinian: true,
  },
  {
    name: 'k (field)',
    ring: 'k',
    chain: ['(0)', '(0)', '(0)'],
    stabilizes: true,
    isArtinian: true,
  },
];

interface Decomposition {
  ring: string;
  factorization: string;
  factors: string[];
  isLocal: boolean[];
}

const DECOMPOSITIONS: Decomposition[] = [
  {
    ring: 'Z/6Z',
    factorization: '6 = 2 × 3',
    factors: ['Z/2Z', 'Z/3Z'],
    isLocal: [true, true],
  },
  {
    ring: 'Z/12Z',
    factorization: '12 = 4 × 3',
    factors: ['Z/4Z', 'Z/3Z'],
    isLocal: [true, true],
  },
  {
    ring: 'Z/60Z',
    factorization: '60 = 4 × 3 × 5',
    factors: ['Z/4Z', 'Z/3Z', 'Z/5Z'],
    isLocal: [true, true, true],
  },
];

export function ArtinianDemo() {
  const [selectedChain, setSelectedChain] = useState(1);
  const [chainStep, setChainStep] = useState(0);
  const [selectedDecomp, setSelectedDecomp] = useState(0);
  const [mode, setMode] = useState<'dcc' | 'decomp'>('dcc');

  const chain = DCC_EXAMPLES[selectedChain];
  const decomp = DECOMPOSITIONS[selectedDecomp];

  const advanceChain = () => {
    if (chainStep < chain.chain.length - 1) {
      setChainStep(chainStep + 1);
    }
  };

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-primary-400">
          Artinian Rings
        </h4>
        <div className="flex gap-2">
          <button
            onClick={() => setMode('dcc')}
            className={`px-3 py-1 rounded text-sm ${
              mode === 'dcc'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            DCC Chains
          </button>
          <button
            onClick={() => setMode('decomp')}
            className={`px-3 py-1 rounded text-sm ${
              mode === 'decomp'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Decomposition
          </button>
        </div>
      </div>

      {mode === 'dcc' ? (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {DCC_EXAMPLES.map((ex, i) => (
              <button
                key={i}
                onClick={() => { setSelectedChain(i); setChainStep(0); }}
                className={`px-3 py-1 rounded text-sm ${
                  selectedChain === i
                    ? 'bg-amber-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {ex.name}
              </button>
            ))}
          </div>

          <div className="bg-dark-900 rounded-lg p-4 mb-4">
            <div className="text-sm text-dark-400 mb-2">
              Descending chain in {chain.ring}:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <AnimatePresence mode="popLayout">
                {chain.chain.slice(0, chainStep + 1).map((ideal, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center"
                  >
                    <span
                      className={`px-3 py-2 rounded font-mono ${
                        ideal === '(0)' || (chain.stabilizes && i >= 2)
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                          : ideal === '...'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-dark-700 text-dark-200'
                      }`}
                    >
                      {ideal}
                    </span>
                    {i < chainStep && (
                      <span className="mx-2 text-dark-400">⊇</span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {chain.stabilizes && chainStep >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-emerald-400 text-sm"
              >
                Chain stabilizes (DCC satisfied)
              </motion.div>
            )}
          </div>

          <div className="flex gap-2 mb-4">
            <button
              onClick={advanceChain}
              disabled={chainStep >= chain.chain.length - 1}
              className="px-4 py-2 bg-primary-500 hover:bg-primary-600 disabled:bg-dark-600 disabled:text-dark-400 text-white rounded"
            >
              Next Step
            </button>
            <button
              onClick={() => setChainStep(0)}
              className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded"
            >
              Reset
            </button>
          </div>

          <div className={`p-3 rounded ${
            chain.isArtinian
              ? 'bg-emerald-500/10 border border-emerald-500/30'
              : 'bg-red-500/10 border border-red-500/30'
          }`}>
            <span className={chain.isArtinian ? 'text-emerald-400' : 'text-red-400'}>
              {chain.ring} is {chain.isArtinian ? '' : 'NOT '}Artinian
            </span>
            {chain.isArtinian && (
              <span className="text-dark-400 ml-2">(also Noetherian!)</span>
            )}
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
                {d.ring}
              </button>
            ))}
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <div className="text-center mb-4">
              <div className="text-sm text-dark-400 mb-1">{decomp.factorization}</div>
              <div className="text-xl font-mono">
                <span className="text-purple-400">{decomp.ring}</span>
                <span className="text-dark-400 mx-2">≅</span>
                {decomp.factors.map((f, i) => (
                  <span key={i}>
                    <span className="text-emerald-400">{f}</span>
                    {i < decomp.factors.length - 1 && (
                      <span className="text-dark-400 mx-1">×</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {decomp.factors.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-dark-700 p-3 rounded text-center"
                >
                  <div className="font-mono text-emerald-400">{f}</div>
                  <div className="text-xs text-amber-400 mt-1">Local</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 text-sm text-dark-400 text-center">
              Every Artinian ring decomposes as a product of local Artinian rings
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 p-3 bg-dark-900/50 rounded text-sm">
        <div className="text-dark-400 mb-2">Key Properties of Artinian Rings:</div>
        <ul className="space-y-1 text-dark-300">
          <li>• Artinian ⟹ Noetherian (for commutative rings)</li>
          <li>• Every prime ideal is maximal (dim = 0)</li>
          <li>• Only finitely many maximal ideals</li>
          <li>• Nilradical is nilpotent</li>
        </ul>
      </div>

      <div className="mt-4 text-xs text-dark-500">
        Artinian rings satisfy DCC on ideals. They are "zero-dimensional":
        Spec(R) is a finite discrete set of points.
      </div>
    </div>
  );
}
