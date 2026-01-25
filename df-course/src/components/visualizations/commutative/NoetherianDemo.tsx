import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IdealChain {
  ideals: string[];
  stabilizes: boolean;
  stabilizeIndex: number;
}

const EXAMPLE_CHAINS: { name: string; ring: string; chain: IdealChain; isNoetherian: boolean }[] = [
  {
    name: 'Z (integers)',
    ring: 'Z',
    chain: {
      ideals: ['(2)', '(4)', '(8)', '(16)', '(16)', '(16)'],
      stabilizes: true,
      stabilizeIndex: 3,
    },
    isNoetherian: true,
  },
  {
    name: 'k[x] (polynomials)',
    ring: 'k[x]',
    chain: {
      ideals: ['(x)', '(x,x²)', '(x)', '(x)', '(x)'],
      stabilizes: true,
      stabilizeIndex: 2,
    },
    isNoetherian: true,
  },
  {
    name: 'k[x₁,x₂,...] (infinite vars)',
    ring: 'k[x₁,x₂,...]',
    chain: {
      ideals: ['(x₁)', '(x₁,x₂)', '(x₁,x₂,x₃)', '(x₁,...,x₄)', '...'],
      stabilizes: false,
      stabilizeIndex: -1,
    },
    isNoetherian: false,
  },
];

const ALGEBRAIC_SETS = [
  { name: 'Circle', equation: 'x² + y² = 1', points: generateCircle() },
  { name: 'Parabola', equation: 'y = x²', points: generateParabola() },
  { name: 'Two Lines', equation: 'xy = 0', points: generateTwoLines() },
  { name: 'Hyperbola', equation: 'xy = 1', points: generateHyperbola() },
];

function generateCircle(): { x: number; y: number }[] {
  const points = [];
  for (let t = 0; t < Math.PI * 2; t += 0.1) {
    points.push({ x: Math.cos(t), y: Math.sin(t) });
  }
  return points;
}

function generateParabola(): { x: number; y: number }[] {
  const points = [];
  for (let x = -1.5; x <= 1.5; x += 0.1) {
    points.push({ x, y: x * x });
  }
  return points;
}

function generateTwoLines(): { x: number; y: number }[] {
  const points = [];
  for (let t = -1.5; t <= 1.5; t += 0.1) {
    points.push({ x: t, y: 0 });
    points.push({ x: 0, y: t });
  }
  return points;
}

function generateHyperbola(): { x: number; y: number }[] {
  const points = [];
  for (let x = 0.3; x <= 2; x += 0.1) {
    points.push({ x, y: 1 / x });
    points.push({ x: -x, y: -1 / x });
  }
  return points;
}

export function NoetherianDemo() {
  const [selectedChain, setSelectedChain] = useState(0);
  const [chainStep, setChainStep] = useState(0);
  const [selectedSet, setSelectedSet] = useState(0);
  const [mode, setMode] = useState<'chain' | 'variety'>('chain');

  const currentChain = EXAMPLE_CHAINS[selectedChain];
  const currentSet = ALGEBRAIC_SETS[selectedSet];

  const advanceChain = () => {
    if (chainStep < currentChain.chain.ideals.length - 1) {
      setChainStep(chainStep + 1);
    }
  };

  const resetChain = () => {
    setChainStep(0);
  };

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-primary-400">
          Noetherian Rings & Algebraic Sets
        </h4>
        <div className="flex gap-2">
          <button
            onClick={() => setMode('chain')}
            className={`px-3 py-1 rounded text-sm ${
              mode === 'chain'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            ACC Chains
          </button>
          <button
            onClick={() => setMode('variety')}
            className={`px-3 py-1 rounded text-sm ${
              mode === 'variety'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Algebraic Sets
          </button>
        </div>
      </div>

      {mode === 'chain' ? (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {EXAMPLE_CHAINS.map((chain, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedChain(i);
                  setChainStep(0);
                }}
                className={`px-3 py-1 rounded text-sm ${
                  selectedChain === i
                    ? 'bg-blue-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {chain.name}
              </button>
            ))}
          </div>

          <div className="bg-dark-900 rounded-lg p-4 mb-4">
            <div className="text-sm text-dark-400 mb-2">
              Ascending chain in {currentChain.ring}:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <AnimatePresence mode="popLayout">
                {currentChain.chain.ideals.slice(0, chainStep + 1).map((ideal, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center"
                  >
                    <span
                      className={`px-3 py-2 rounded font-mono ${
                        i >= currentChain.chain.stabilizeIndex && currentChain.chain.stabilizes
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                          : 'bg-dark-700 text-dark-200'
                      }`}
                    >
                      {ideal}
                    </span>
                    {i < chainStep && (
                      <span className="mx-2 text-dark-400">⊆</span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {chainStep >= currentChain.chain.stabilizeIndex && currentChain.chain.stabilizes && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-emerald-400 text-sm"
              >
                Chain stabilizes at step {currentChain.chain.stabilizeIndex + 1}
              </motion.div>
            )}

            {!currentChain.chain.stabilizes && chainStep === currentChain.chain.ideals.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-red-400 text-sm"
              >
                Chain never stabilizes (not Noetherian)
              </motion.div>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={advanceChain}
              disabled={chainStep >= currentChain.chain.ideals.length - 1}
              className="px-4 py-2 bg-primary-500 hover:bg-primary-600 disabled:bg-dark-600 disabled:text-dark-400 text-white rounded transition-colors"
            >
              Next Step
            </button>
            <button
              onClick={resetChain}
              className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded transition-colors"
            >
              Reset
            </button>
          </div>

          <div className={`mt-4 p-3 rounded ${
            currentChain.isNoetherian
              ? 'bg-emerald-500/10 border border-emerald-500/30'
              : 'bg-red-500/10 border border-red-500/30'
          }`}>
            <span className={currentChain.isNoetherian ? 'text-emerald-400' : 'text-red-400'}>
              {currentChain.ring} is {currentChain.isNoetherian ? '' : 'NOT '}Noetherian
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {ALGEBRAIC_SETS.map((set, i) => (
              <button
                key={i}
                onClick={() => setSelectedSet(i)}
                className={`px-3 py-1 rounded text-sm ${
                  selectedSet === i
                    ? 'bg-purple-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {set.name}
              </button>
            ))}
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <div className="text-center mb-2">
              <span className="text-dark-400">V(</span>
              <span className="text-purple-400 font-mono">{currentSet.equation}</span>
              <span className="text-dark-400">)</span>
            </div>

            <svg viewBox="-2 -2 4 4" className="w-full h-64 bg-dark-950 rounded">
              {/* Grid */}
              <line x1="-2" y1="0" x2="2" y2="0" stroke="#374151" strokeWidth="0.02" />
              <line x1="0" y1="-2" x2="0" y2="2" stroke="#374151" strokeWidth="0.02" />

              {/* Algebraic set */}
              {currentSet.points.map((p, i) => (
                <motion.circle
                  key={i}
                  cx={p.x}
                  cy={-p.y}
                  r="0.04"
                  fill="#a855f7"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.01 }}
                />
              ))}
            </svg>

            <div className="mt-3 text-sm text-dark-400 text-center">
              Algebraic set in k² defined by the polynomial
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-dark-500">
        Noetherian rings satisfy ACC: every ascending chain of ideals stabilizes.
        Algebraic sets V(S) are solution sets of polynomial systems.
      </div>
    </div>
  );
}
