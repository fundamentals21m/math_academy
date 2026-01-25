import { useState } from 'react';
import { motion } from 'framer-motion';

interface GroupExample {
  name: string;
  order: number;
  numClasses: number;
  dimensions: number[];
  decomposition: string;
}

const GROUPS: GroupExample[] = [
  {
    name: 'Z/2',
    order: 2,
    numClasses: 2,
    dimensions: [1, 1],
    decomposition: 'C × C',
  },
  {
    name: 'Z/3',
    order: 3,
    numClasses: 3,
    dimensions: [1, 1, 1],
    decomposition: 'C × C × C',
  },
  {
    name: 'Z/2 × Z/2',
    order: 4,
    numClasses: 4,
    dimensions: [1, 1, 1, 1],
    decomposition: 'C × C × C × C',
  },
  {
    name: 'S₃',
    order: 6,
    numClasses: 3,
    dimensions: [1, 1, 2],
    decomposition: 'C × C × M₂(C)',
  },
  {
    name: 'D₄',
    order: 8,
    numClasses: 5,
    dimensions: [1, 1, 1, 1, 2],
    decomposition: 'C × C × C × C × M₂(C)',
  },
  {
    name: 'Q₈',
    order: 8,
    numClasses: 5,
    dimensions: [1, 1, 1, 1, 2],
    decomposition: 'C × C × C × C × M₂(C)',
  },
  {
    name: 'A₄',
    order: 12,
    numClasses: 4,
    dimensions: [1, 1, 1, 3],
    decomposition: 'C × C × C × M₃(C)',
  },
  {
    name: 'S₄',
    order: 24,
    numClasses: 5,
    dimensions: [1, 1, 2, 3, 3],
    decomposition: 'C × C × M₂(C) × M₃(C) × M₃(C)',
  },
];

export function WedderburnDemo() {
  const [selectedGroup, setSelectedGroup] = useState(3); // S₃

  const group = GROUPS[selectedGroup];
  const sumOfSquares = group.dimensions.reduce((sum, d) => sum + d * d, 0);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Wedderburn's Theorem
      </h4>

      {/* Group selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {GROUPS.map((g, i) => (
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

      {/* Main display */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-center mb-4">
          <span className="text-lg font-mono text-blue-400">C[{group.name}]</span>
          <span className="text-dark-400 mx-2">≅</span>
          <motion.span
            key={selectedGroup}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-lg font-mono text-primary-400"
          >
            {group.decomposition}
          </motion.span>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-xs text-dark-400">Order</div>
            <div className="text-xl font-mono text-emerald-400">{group.order}</div>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-xs text-dark-400">Conjugacy Classes</div>
            <div className="text-xl font-mono text-amber-400">{group.numClasses}</div>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-xs text-dark-400">Irreducible Reps</div>
            <div className="text-xl font-mono text-purple-400">{group.numClasses}</div>
          </div>
        </div>
      </div>

      {/* Dimension formula verification */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-sm text-dark-400 mb-3">Dimension formula: |G| = Σ nᵢ²</div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          {group.dimensions.map((d, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-1"
            >
              <span className="font-mono text-lg text-dark-100">{d}²</span>
              {i < group.dimensions.length - 1 && (
                <span className="text-dark-500 ml-1">+</span>
              )}
            </motion.div>
          ))}
          <span className="text-dark-400">=</span>
          <span className={`font-mono text-xl ${
            sumOfSquares === group.order ? 'text-emerald-400' : 'text-red-400'
          }`}>
            {sumOfSquares}
          </span>
          <span className={sumOfSquares === group.order ? 'text-emerald-400' : 'text-red-400'}>
            {sumOfSquares === group.order ? '✓' : '✗'}
          </span>
        </div>

        <div className="text-center text-sm text-dark-500 mt-2">
          {group.dimensions.map((d, i) => (
            <span key={i}>
              {i > 0 ? ' + ' : ''}
              {d * d}
            </span>
          ))} = {group.order}
        </div>
      </div>

      {/* Irrep dimensions */}
      <div className="bg-dark-900 rounded-lg p-4">
        <div className="text-sm text-dark-400 mb-3">Irreducible representation dimensions:</div>
        <div className="flex flex-wrap gap-2 justify-center">
          {group.dimensions.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`px-4 py-2 rounded ${
                d === 1 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                d === 2 ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                'bg-purple-500/20 text-purple-400 border border-purple-500/30'
              }`}
            >
              <span className="font-mono text-lg">{d}</span>
              <span className="text-xs ml-1">-dim</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-dark-500">
        Semisimple rings decompose as products of matrix rings over division rings.
      </div>
    </div>
  );
}
