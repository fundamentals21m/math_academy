import { useState } from 'react';
import { motion } from 'framer-motion';

interface GroupInfo {
  name: string;
  order: number;
  isAbelian: boolean;
  numIrreps: number;
  dimensions: number[];
  notes: string;
}

const SMALL_GROUPS: GroupInfo[] = [
  { name: 'Z/2', order: 2, isAbelian: true, numIrreps: 2, dimensions: [1, 1], notes: 'All irreps 1-dim' },
  { name: 'Z/3', order: 3, isAbelian: true, numIrreps: 3, dimensions: [1, 1, 1], notes: 'Uses ω = e^(2πi/3)' },
  { name: 'Z/4', order: 4, isAbelian: true, numIrreps: 4, dimensions: [1, 1, 1, 1], notes: 'Uses i = e^(πi/2)' },
  { name: 'Z/2 × Z/2', order: 4, isAbelian: true, numIrreps: 4, dimensions: [1, 1, 1, 1], notes: 'Klein four-group' },
  { name: 'Z/5', order: 5, isAbelian: true, numIrreps: 5, dimensions: [1, 1, 1, 1, 1], notes: 'Uses ζ = e^(2πi/5)' },
  { name: 'S₃ = D₃', order: 6, isAbelian: false, numIrreps: 3, dimensions: [1, 1, 2], notes: 'First non-abelian' },
  { name: 'Z/6', order: 6, isAbelian: true, numIrreps: 6, dimensions: [1, 1, 1, 1, 1, 1], notes: 'Z/2 × Z/3' },
  { name: 'D₄', order: 8, isAbelian: false, numIrreps: 5, dimensions: [1, 1, 1, 1, 2], notes: 'Dihedral of square' },
  { name: 'Q₈', order: 8, isAbelian: false, numIrreps: 5, dimensions: [1, 1, 1, 1, 2], notes: 'Same table shape as D₄' },
  { name: 'A₄', order: 12, isAbelian: false, numIrreps: 4, dimensions: [1, 1, 1, 3], notes: 'Has 3-dim irrep' },
  { name: 'S₄', order: 24, isAbelian: false, numIrreps: 5, dimensions: [1, 1, 2, 3, 3], notes: 'Two 3-dim irreps' },
  { name: 'A₅', order: 60, isAbelian: false, numIrreps: 5, dimensions: [1, 3, 3, 4, 5], notes: 'Simple group' },
];

export function SmallGroupCharDemo() {
  const [selectedGroup, setSelectedGroup] = useState(5); // S₃

  const group = SMALL_GROUPS[selectedGroup];
  const sumSq = group.dimensions.reduce((s, d) => s + d * d, 0);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Characters of Small Groups
      </h4>

      {/* Group selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {SMALL_GROUPS.map((g, i) => (
          <button
            key={i}
            onClick={() => setSelectedGroup(i)}
            className={`px-3 py-1 rounded text-sm ${
              selectedGroup === i
                ? 'bg-blue-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {g.name}
          </button>
        ))}
      </div>

      {/* Group info */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <motion.div
          key={selectedGroup}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-center mb-4">
            <span className="text-2xl font-mono text-primary-400">{group.name}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="bg-dark-800 p-3 rounded">
              <div className="text-xs text-dark-400">Order</div>
              <div className="text-xl font-mono text-emerald-400">{group.order}</div>
            </div>
            <div className="bg-dark-800 p-3 rounded">
              <div className="text-xs text-dark-400">Type</div>
              <div className={`text-sm font-medium ${group.isAbelian ? 'text-blue-400' : 'text-amber-400'}`}>
                {group.isAbelian ? 'Abelian' : 'Non-abelian'}
              </div>
            </div>
            <div className="bg-dark-800 p-3 rounded">
              <div className="text-xs text-dark-400"># Irreps</div>
              <div className="text-xl font-mono text-purple-400">{group.numIrreps}</div>
            </div>
            <div className="bg-dark-800 p-3 rounded">
              <div className="text-xs text-dark-400">Σnᵢ²</div>
              <div className="text-xl font-mono text-emerald-400">{sumSq}</div>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-dark-400">
            {group.notes}
          </div>
        </motion.div>
      </div>

      {/* Dimension visualization */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-sm text-dark-400 mb-3">Irreducible representation dimensions:</div>
        <div className="flex items-end justify-center gap-2 h-24">
          {group.dimensions.map((d, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: d * 20 }}
              transition={{ delay: i * 0.1 }}
              className={`w-12 rounded-t flex items-end justify-center pb-1 ${
                d === 1 ? 'bg-emerald-500' :
                d === 2 ? 'bg-blue-500' :
                d === 3 ? 'bg-purple-500' :
                d === 4 ? 'bg-amber-500' :
                'bg-red-500'
              }`}
            >
              <span className="text-white text-sm font-bold">{d}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-2 text-xs text-dark-500">
          Dimension formula: {group.dimensions.map((d, i) => (
            <span key={i}>{i > 0 ? ' + ' : ''}{d}²</span>
          ))} = {sumSq}
        </div>
      </div>

      {/* Pattern observations */}
      <div className="bg-dark-900 rounded-lg p-4">
        <div className="text-sm text-dark-400 mb-2">Patterns:</div>
        <ul className="text-sm text-dark-300 space-y-1">
          <li className="flex items-center gap-2">
            <span className="text-blue-400">•</span>
            Abelian groups: all irreps are 1-dimensional
          </li>
          <li className="flex items-center gap-2">
            <span className="text-amber-400">•</span>
            Non-abelian: at least one irrep with dim {">"} 1
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-400">•</span>
            # irreps = # conjugacy classes
          </li>
        </ul>
      </div>

      <div className="mt-4 text-xs text-dark-500">
        Character theory reveals deep structure in small groups. D₄ and Q₈ have isomorphic character tables!
      </div>
    </div>
  );
}
