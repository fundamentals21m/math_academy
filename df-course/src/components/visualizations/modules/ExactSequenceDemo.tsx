import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ModuleType = 'free' | 'projective' | 'injective' | 'flat' | 'none';

type ExampleSequence = {
  name: string;
  sequence: string[];
  maps: string[];
  splits: boolean;
  description: string;
};

const examples: ExampleSequence[] = [
  {
    name: 'Z ↪ Z ↠ Z/2Z',
    sequence: ['0', 'Z', 'Z', 'Z/2Z', '0'],
    maps: ['', '×2', 'mod 2', ''],
    splits: false,
    description: '2Z is not a direct summand of Z',
  },
  {
    name: 'Splitting sequence',
    sequence: ['0', 'Z', 'Z ⊕ Z/2Z', 'Z/2Z', '0'],
    maps: ['', 'n↦(n,0)', 'proj₂', ''],
    splits: true,
    description: 'Middle term is direct sum, so sequence splits',
  },
  {
    name: 'R-modules',
    sequence: ['0', 'I', 'R', 'R/I', '0'],
    maps: ['', 'inclusion', 'quotient', ''],
    splits: false,
    description: 'Ideal I in ring R (generally does not split)',
  },
];

const moduleHierarchy = [
  { type: 'free' as ModuleType, label: 'Free', color: 'bg-green-600', desc: 'Has a basis, M ≅ R^n' },
  { type: 'projective' as ModuleType, label: 'Projective', color: 'bg-blue-600', desc: 'Direct summand of free' },
  { type: 'flat' as ModuleType, label: 'Flat', color: 'bg-purple-600', desc: '- ⊗ M is exact' },
];

export function ExactSequenceDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [showHierarchy, setShowHierarchy] = useState(true);

  const ex = examples[selectedExample];

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Exact Sequences & Special Modules</h4>

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

      {/* Exact Sequence Display */}
      <motion.div
        key={selectedExample}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-700 p-4 rounded-lg mb-6"
      >
        <h5 className="text-dark-200 font-medium mb-4">Short Exact Sequence</h5>
        <div className="flex items-center justify-center gap-2 flex-wrap font-mono text-lg mb-4">
          {ex.sequence.map((term, idx) => (
            <div key={idx} className="flex items-center">
              <span className={`${idx === 0 || idx === 4 ? 'text-dark-500' : idx === 2 ? 'text-blue-400' : 'text-purple-400'}`}>
                {term}
              </span>
              {idx < ex.sequence.length - 1 && (
                <span className="mx-2 text-dark-500">
                  →
                  <span className="text-xs text-dark-600 ml-1">{ex.maps[idx]}</span>
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="bg-dark-800 p-3 rounded mb-3">
          <div className="text-dark-500 text-sm mb-1">Exactness means:</div>
          <div className="text-dark-300 text-sm">
            • First map is injective (ker = 0)
            <br />
            • Last map is surjective (coker = 0)
            <br />
            • Im(first) = Ker(second)
          </div>
        </div>

        <div className={`p-3 rounded ${ex.splits ? 'bg-green-900/20' : 'bg-yellow-900/20'}`}>
          <div className="flex items-center gap-2">
            <span className={ex.splits ? 'text-green-400' : 'text-yellow-400'}>
              {ex.splits ? '✓' : '!'}
            </span>
            <span className="text-dark-300">
              {ex.splits ? 'Sequence SPLITS: B ≅ A ⊕ C' : 'Sequence does NOT split'}
            </span>
          </div>
          <div className="text-dark-500 text-sm mt-1">{ex.description}</div>
        </div>
      </motion.div>

      {/* Module Hierarchy */}
      <button
        onClick={() => setShowHierarchy(!showHierarchy)}
        className="text-sm text-blue-400 hover:text-blue-300 mb-4"
      >
        {showHierarchy ? '▼' : '▶'} Module Hierarchy
      </button>

      <AnimatePresence>
        {showHierarchy && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-700 p-4 rounded-lg mb-6 overflow-hidden"
          >
            <div className="text-center mb-4 font-mono text-sm">
              <span className="text-green-400">Free</span>
              <span className="text-dark-500 mx-2">⟹</span>
              <span className="text-blue-400">Projective</span>
              <span className="text-dark-500 mx-2">⟹</span>
              <span className="text-purple-400">Flat</span>
            </div>
            <div className="space-y-3">
              {moduleHierarchy.map((m, idx) => (
                <div
                  key={m.type}
                  className={`p-3 rounded-lg ${m.color} bg-opacity-20`}
                  style={{ marginLeft: `${idx * 20}px` }}
                >
                  <div className={`font-medium ${m.color.replace('bg-', 'text-').replace('-600', '-400')}`}>
                    {m.label}
                  </div>
                  <div className="text-dark-400 text-sm">{m.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Special Module Properties */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Characterizations</h5>
        <ul className="text-dark-400 text-sm space-y-2">
          <li><span className="text-green-400">Projective:</span> Every surjection onto P splits (lifting property)</li>
          <li><span className="text-blue-400">Injective:</span> Every injection from I splits (extension property)</li>
          <li><span className="text-purple-400">Flat:</span> M ⊗ - preserves exact sequences</li>
        </ul>
      </div>
    </div>
  );
}
