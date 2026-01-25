import { useState } from 'react';
import { motion } from 'framer-motion';

interface GroupRingExample {
  group: string;
  ring: string;
  groupRing: string;
  decomposition: string;
  explanation: string;
}

const EXAMPLES: GroupRingExample[] = [
  {
    group: 'Z/2',
    ring: 'C',
    groupRing: 'C[Z/2]',
    decomposition: 'C × C',
    explanation: '1+g and 1-g are orthogonal idempotents',
  },
  {
    group: 'Z/3',
    ring: 'C',
    groupRing: 'C[Z/3]',
    decomposition: 'C × C × C',
    explanation: 'Three 1-dim irreps: trivial and two with ω, ω²',
  },
  {
    group: 'Z/4',
    ring: 'C',
    groupRing: 'C[Z/4]',
    decomposition: 'C × C × C × C',
    explanation: 'Four 1-dim irreps with eigenvalues 1, i, -1, -i',
  },
  {
    group: 'S₃',
    ring: 'C',
    groupRing: 'C[S₃]',
    decomposition: 'C × C × M₂(C)',
    explanation: 'Trivial + sign + 2-dim standard representation',
  },
  {
    group: 'Z/2',
    ring: 'R',
    groupRing: 'R[Z/2]',
    decomposition: 'R × R',
    explanation: 'Real case: same as complex for Z/2',
  },
  {
    group: 'Z/4',
    ring: 'R',
    groupRing: 'R[Z/4]',
    decomposition: 'R × R × C',
    explanation: 'Over R: complex irreps pair up',
  },
];

export function GroupRingDemo() {
  const [selectedExample, setSelectedExample] = useState(3); // S₃ by default
  const [showDictionary, setShowDictionary] = useState(false);

  const example = EXAMPLES[selectedExample];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Group Rings and Representations
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
            {ex.ring}[{ex.group}]
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
            <div className="text-xs text-dark-400 mb-1">Ring k</div>
            <div className="text-lg font-mono text-emerald-400">{example.ring}</div>
          </div>
          <div>
            <div className="text-xs text-dark-400 mb-1">Group Ring</div>
            <div className="text-lg font-mono text-amber-400">{example.groupRing}</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 my-4">
          <span className="font-mono text-amber-400">{example.groupRing}</span>
          <span className="text-dark-400">≅</span>
          <motion.span
            key={selectedExample}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="font-mono text-xl text-primary-400"
          >
            {example.decomposition}
          </motion.span>
        </div>

        <div className="text-center text-sm text-dark-400">
          {example.explanation}
        </div>
      </div>

      {/* Wedderburn dimension formula */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-sm text-dark-400 mb-2">Wedderburn dimension check:</div>
        <div className="bg-dark-800 p-3 rounded font-mono text-center">
          |G| = Σ nᵢ² (sum of squared irrep dimensions)
        </div>
        {selectedExample === 3 && (
          <div className="text-center text-sm text-dark-300 mt-2">
            |S₃| = 6 = 1² + 1² + 2² ✓
          </div>
        )}
      </div>

      {/* Representation ↔ Module dictionary */}
      <div className="bg-dark-900 rounded-lg p-4">
        <button
          onClick={() => setShowDictionary(!showDictionary)}
          className="text-sm text-dark-400 hover:text-dark-200 flex items-center gap-2"
        >
          <span>{showDictionary ? '▼' : '▶'}</span>
          Representation ↔ Module Dictionary
        </button>

        {showDictionary && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3"
          >
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-blue-500/10 p-2 rounded border border-blue-500/30">Representation</div>
              <div className="bg-emerald-500/10 p-2 rounded border border-emerald-500/30">k[G]-module</div>
              <div className="bg-dark-800 p-2 rounded">Subrepresentation</div>
              <div className="bg-dark-800 p-2 rounded">Submodule</div>
              <div className="bg-dark-800 p-2 rounded">Irreducible rep</div>
              <div className="bg-dark-800 p-2 rounded">Simple module</div>
              <div className="bg-dark-800 p-2 rounded">Intertwiner</div>
              <div className="bg-dark-800 p-2 rounded">Module homomorphism</div>
              <div className="bg-dark-800 p-2 rounded">Completely reducible</div>
              <div className="bg-dark-800 p-2 rounded">Semisimple module</div>
            </div>

            <div className="mt-3 p-2 bg-dark-800 rounded text-sm">
              <strong className="text-amber-400">Maschke:</strong>
              <span className="text-dark-300 ml-2">
                k[G] is semisimple when char(k) ∤ |G|
              </span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 text-xs text-dark-500">
        The group ring k[G] translates representation theory into module theory.
      </div>
    </div>
  );
}
