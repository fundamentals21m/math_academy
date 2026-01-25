import { useState } from 'react';
import { motion } from 'framer-motion';

interface Extension {
  name: string;
  A: string;
  E: string;
  G: string;
  split: boolean;
  description: string;
}

const EXTENSIONS: Extension[] = [
  {
    name: 'Z/2 × Z/2',
    A: 'Z/2',
    E: 'Z/2 × Z/2',
    G: 'Z/2',
    split: true,
    description: 'Direct product (Klein four-group)',
  },
  {
    name: 'Z/4',
    A: 'Z/2',
    E: 'Z/4',
    G: 'Z/2',
    split: false,
    description: 'Non-split extension',
  },
  {
    name: 'S₃',
    A: 'Z/3',
    E: 'S₃',
    G: 'Z/2',
    split: true,
    description: 'Semidirect product Z/3 ⋊ Z/2',
  },
  {
    name: 'Q₈',
    A: 'Z/2',
    E: 'Q₈',
    G: 'Z/2 × Z/2',
    split: false,
    description: 'Quaternion group (non-split)',
  },
  {
    name: 'Heisenberg',
    A: 'Z',
    E: 'H₃(Z)',
    G: 'Z²',
    split: false,
    description: 'Central extension (non-abelian)',
  },
];

export function GroupExtensionDemo() {
  const [selectedExt, setSelectedExt] = useState(0);
  const [showCocycle, setShowCocycle] = useState(false);
  const [showH2, setShowH2] = useState(false);

  const ext = EXTENSIONS[selectedExt];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Group Extensions and H²
      </h4>

      {/* Extension selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {EXTENSIONS.map((e, i) => (
          <button
            key={i}
            onClick={() => setSelectedExt(i)}
            className={`px-3 py-1 rounded text-sm ${
              selectedExt === i
                ? 'bg-blue-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {e.name}
          </button>
        ))}
      </div>

      {/* Extension diagram */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-sm text-dark-400 mb-3">Short exact sequence:</div>

        <motion.div
          key={selectedExt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-2 text-lg font-mono mb-4"
        >
          <span className="text-dark-500">1</span>
          <span className="text-dark-400">→</span>
          <span className="text-emerald-400 px-2 py-1 bg-emerald-500/10 rounded">{ext.A}</span>
          <span className="text-dark-400">→</span>
          <span className="text-primary-400 px-2 py-1 bg-primary-500/10 rounded">{ext.E}</span>
          <span className="text-dark-400">→</span>
          <span className="text-amber-400 px-2 py-1 bg-amber-500/10 rounded">{ext.G}</span>
          <span className="text-dark-400">→</span>
          <span className="text-dark-500">1</span>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          <div>
            <div className="text-xs text-dark-400">Normal subgroup</div>
            <div className="font-mono text-emerald-400">{ext.A}</div>
          </div>
          <div>
            <div className="text-xs text-dark-400">Extension</div>
            <div className="font-mono text-primary-400">{ext.E}</div>
          </div>
          <div>
            <div className="text-xs text-dark-400">Quotient</div>
            <div className="font-mono text-amber-400">{ext.G}</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <span className={`px-3 py-1 rounded text-sm font-medium ${
            ext.split
              ? 'bg-emerald-500/20 text-emerald-400'
              : 'bg-red-500/20 text-red-400'
          }`}>
            {ext.split ? 'Split' : 'Non-split'}
          </span>
          <span className="text-dark-300 text-sm">{ext.description}</span>
        </div>
      </div>

      {/* Visual representation */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-sm text-dark-400 mb-3">Group structure:</div>

        <div className="flex items-center justify-center">
          <motion.div
            key={selectedExt}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative"
          >
            {/* Outer circle - E */}
            <div className="w-48 h-48 rounded-full border-2 border-primary-500 flex items-center justify-center">
              {/* Inner circle - A */}
              <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center">
                <span className="text-emerald-400 font-mono">{ext.A}</span>
              </div>
            </div>
            {/* Label E */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <span className="text-primary-400 font-mono bg-dark-900 px-2">{ext.E}</span>
            </div>
            {/* Label quotient */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <span className="text-amber-400 font-mono bg-dark-900 px-2">E/{ext.A} ≅ {ext.G}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Factor sets / 2-cocycles */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <button
          onClick={() => setShowCocycle(!showCocycle)}
          className="text-sm text-dark-400 hover:text-dark-200 flex items-center gap-2"
        >
          <span>{showCocycle ? '▼' : '▶'}</span>
          Factor Sets (2-Cocycles)
        </button>

        {showCocycle && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 space-y-3"
          >
            <div className="text-sm text-dark-300">
              Given a section s: G → E (set-theoretic), define factor set f: G × G → A:
            </div>

            <div className="bg-dark-800 p-3 rounded font-mono text-center">
              s(g)·s(h) = f(g,h)·s(gh)
            </div>

            <div className="text-sm text-dark-400">
              The <strong className="text-amber-400">2-cocycle condition</strong> (from associativity):
            </div>

            <div className="bg-dark-800 p-3 rounded font-mono text-center text-sm">
              f(g,h) + g·f(h,k) = f(gh,k) + f(g,hk)
            </div>

            <div className="bg-emerald-500/10 p-3 rounded border border-emerald-500/30">
              <strong className="text-emerald-400">Split ⟺</strong>
              <span className="text-dark-300 ml-2">
                f is a coboundary (f(g,h) = g·c(h) - c(gh) + c(g) for some c)
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* H² classification */}
      <div className="bg-dark-900 rounded-lg p-4">
        <button
          onClick={() => setShowH2(!showH2)}
          className="text-sm text-dark-400 hover:text-dark-200 flex items-center gap-2"
        >
          <span>{showH2 ? '▼' : '▶'}</span>
          H² Classification
        </button>

        {showH2 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 space-y-3"
          >
            <div className="bg-primary-500/10 p-4 rounded border border-primary-500/30">
              <div className="font-mono text-center text-lg">
                H²(G, A) ↔ {'{'}Extensions with given action{'}'}
              </div>
              <div className="text-center text-sm text-dark-400 mt-2">
                0 ∈ H² corresponds to split extension A ⋊ G
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-dark-800 p-3 rounded">
                <div className="text-purple-400 font-semibold text-sm mb-1">Example: H²(Z/2, Z/2)</div>
                <div className="font-mono text-sm">= Z/2</div>
                <div className="text-xs text-dark-500 mt-1">
                  Two extensions: Z/2 × Z/2 and Z/4
                </div>
              </div>

              <div className="bg-dark-800 p-3 rounded">
                <div className="text-blue-400 font-semibold text-sm mb-1">Schur Multiplier</div>
                <div className="font-mono text-sm">M(G) = H²(G, C*)</div>
                <div className="text-xs text-dark-500 mt-1">
                  Controls projective representations
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 text-xs text-dark-500">
        H² classifies extensions up to equivalence. Zero = split. Non-zero = non-trivial extension.
      </div>
    </div>
  );
}
