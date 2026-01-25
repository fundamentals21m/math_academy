import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PGroupExample = {
  name: string;
  order: number;
  p: number;
  n: number;
  elements: string[];
  center: string[];
  centerSize: number;
  upperCentralSeries: string[][];
  nilpotencyClass: number;
  isAbelian: boolean;
  description: string;
  maximalSubgroups: { name: string; elements: string[] }[];
};

const pGroups: PGroupExample[] = [
  {
    name: 'Z/4Z',
    order: 4,
    p: 2,
    n: 2,
    elements: ['0', '1', '2', '3'],
    center: ['0', '1', '2', '3'],
    centerSize: 4,
    upperCentralSeries: [['0', '1', '2', '3']],
    nilpotencyClass: 1,
    isAbelian: true,
    description: 'Cyclic 2-group. Abelian, so center = whole group.',
    maximalSubgroups: [{ name: '⟨2⟩', elements: ['0', '2'] }],
  },
  {
    name: 'V₄ = Z₂ × Z₂',
    order: 4,
    p: 2,
    n: 2,
    elements: ['00', '01', '10', '11'],
    center: ['00', '01', '10', '11'],
    centerSize: 4,
    upperCentralSeries: [['00', '01', '10', '11']],
    nilpotencyClass: 1,
    isAbelian: true,
    description: 'Klein four-group. Elementary abelian 2-group.',
    maximalSubgroups: [
      { name: '⟨01⟩', elements: ['00', '01'] },
      { name: '⟨10⟩', elements: ['00', '10'] },
      { name: '⟨11⟩', elements: ['00', '11'] },
    ],
  },
  {
    name: 'Z/8Z',
    order: 8,
    p: 2,
    n: 3,
    elements: ['0', '1', '2', '3', '4', '5', '6', '7'],
    center: ['0', '1', '2', '3', '4', '5', '6', '7'],
    centerSize: 8,
    upperCentralSeries: [['0', '1', '2', '3', '4', '5', '6', '7']],
    nilpotencyClass: 1,
    isAbelian: true,
    description: 'Cyclic 2-group of order 8.',
    maximalSubgroups: [{ name: '⟨2⟩', elements: ['0', '2', '4', '6'] }],
  },
  {
    name: 'D₈',
    order: 8,
    p: 2,
    n: 3,
    elements: ['1', 'r', 'r²', 'r³', 's', 'sr', 'sr²', 'sr³'],
    center: ['1', 'r²'],
    centerSize: 2,
    upperCentralSeries: [
      ['1', 'r²'],
      ['1', 'r', 'r²', 'r³', 's', 'sr', 'sr²', 'sr³'],
    ],
    nilpotencyClass: 2,
    isAbelian: false,
    description: 'Dihedral group of order 8. Non-abelian p-group.',
    maximalSubgroups: [
      { name: '⟨r⟩', elements: ['1', 'r', 'r²', 'r³'] },
      { name: '⟨r², s⟩', elements: ['1', 'r²', 's', 'sr²'] },
      { name: '⟨r², sr⟩', elements: ['1', 'r²', 'sr', 'sr³'] },
    ],
  },
  {
    name: 'Q₈',
    order: 8,
    p: 2,
    n: 3,
    elements: ['1', '-1', 'i', '-i', 'j', '-j', 'k', '-k'],
    center: ['1', '-1'],
    centerSize: 2,
    upperCentralSeries: [
      ['1', '-1'],
      ['1', '-1', 'i', '-i', 'j', '-j', 'k', '-k'],
    ],
    nilpotencyClass: 2,
    isAbelian: false,
    description: 'Quaternion group. Non-abelian p-group with unique element of order 2.',
    maximalSubgroups: [
      { name: '⟨i⟩', elements: ['1', '-1', 'i', '-i'] },
      { name: '⟨j⟩', elements: ['1', '-1', 'j', '-j'] },
      { name: '⟨k⟩', elements: ['1', '-1', 'k', '-k'] },
    ],
  },
  {
    name: 'Z/9Z',
    order: 9,
    p: 3,
    n: 2,
    elements: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
    center: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
    centerSize: 9,
    upperCentralSeries: [['0', '1', '2', '3', '4', '5', '6', '7', '8']],
    nilpotencyClass: 1,
    isAbelian: true,
    description: 'Cyclic 3-group. Order p² implies abelian.',
    maximalSubgroups: [{ name: '⟨3⟩', elements: ['0', '3', '6'] }],
  },
  {
    name: 'Z₃ × Z₃',
    order: 9,
    p: 3,
    n: 2,
    elements: ['00', '01', '02', '10', '11', '12', '20', '21', '22'],
    center: ['00', '01', '02', '10', '11', '12', '20', '21', '22'],
    centerSize: 9,
    upperCentralSeries: [['00', '01', '02', '10', '11', '12', '20', '21', '22']],
    nilpotencyClass: 1,
    isAbelian: true,
    description: 'Elementary abelian 3-group. Order p² implies abelian.',
    maximalSubgroups: [
      { name: '⟨10⟩', elements: ['00', '10', '20'] },
      { name: '⟨01⟩', elements: ['00', '01', '02'] },
      { name: '⟨11⟩', elements: ['00', '11', '22'] },
      { name: '⟨12⟩', elements: ['00', '12', '21'] },
    ],
  },
];

export function PGroupAnalyzer() {
  const [selectedGroup, setSelectedGroup] = useState(0);
  const [showSeries, setShowSeries] = useState(false);

  const group = pGroups[selectedGroup];

  const centerPercentage = (group.centerSize / group.order) * 100;

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">p-Group Analyzer</h4>

      {/* Group Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {pGroups.map((g, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedGroup(idx)}
            className={`px-4 py-2 rounded transition-all ${
              selectedGroup === idx
                ? g.isAbelian ? 'bg-green-600 text-white' : 'bg-purple-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {g.name}
          </button>
        ))}
      </div>

      {/* Group Info */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <div className="text-dark-200 font-medium text-lg">{group.name}</div>
          <span className={`px-3 py-1 rounded text-sm ${
            group.isAbelian
              ? 'bg-green-900/50 text-green-300'
              : 'bg-purple-900/50 text-purple-300'
          }`}>
            {group.isAbelian ? 'Abelian' : 'Non-Abelian'}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-dark-500">Order:</span>
            <span className="text-blue-400 ml-2 font-mono">
              {group.p}^{group.n} = {group.order}
            </span>
          </div>
          <div>
            <span className="text-dark-500">Prime p:</span>
            <span className="text-green-400 ml-2 font-mono">{group.p}</span>
          </div>
          <div>
            <span className="text-dark-500">Nilpotency class:</span>
            <span className="text-yellow-400 ml-2 font-mono">{group.nilpotencyClass}</span>
          </div>
          <div>
            <span className="text-dark-500">|Z(G)|:</span>
            <span className="text-purple-400 ml-2 font-mono">{group.centerSize}</span>
          </div>
        </div>

        <div className="text-dark-400 text-sm mt-3">{group.description}</div>
      </div>

      {/* Center Visualization */}
      <div className="mb-6">
        <div className="text-dark-400 text-sm mb-2">Center Z(G):</div>
        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="flex flex-wrap gap-2 mb-3">
            {group.elements.map((el, idx) => {
              const isInCenter = group.center.includes(el);
              return (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded font-mono text-sm ${
                    isInCenter
                      ? 'bg-purple-600 text-white'
                      : 'bg-dark-600 text-dark-400'
                  }`}
                >
                  {el}
                </span>
              );
            })}
          </div>

          {/* Center size bar */}
          <div className="relative h-4 bg-dark-600 rounded overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${centerPercentage}%` }}
              transition={{ duration: 0.5 }}
              className="absolute h-full bg-purple-600"
            />
          </div>
          <div className="flex justify-between text-xs text-dark-500 mt-1">
            <span>|Z(G)| = {group.centerSize}</span>
            <span>{centerPercentage.toFixed(0)}% of G</span>
          </div>

          <div className="mt-3 p-2 bg-dark-800 rounded text-sm">
            <span className="text-green-400">✓ p | |Z(G)|</span>
            <span className="text-dark-500 ml-2">
              ({group.p} divides {group.centerSize} = {group.centerSize / group.p} × {group.p})
            </span>
          </div>
        </div>
      </div>

      {/* Upper Central Series */}
      <button
        onClick={() => setShowSeries(!showSeries)}
        className="mb-4 text-sm text-blue-400 hover:text-blue-300"
      >
        {showSeries ? '▼' : '▶'} Upper Central Series
      </button>

      <AnimatePresence>
        {showSeries && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-700 p-4 rounded-lg mb-6 overflow-hidden"
          >
            <div className="text-dark-400 text-sm mb-3">
              {'{'}1{'}'} = Z₀ ⊴ Z₁ ⊴ Z₂ ⊴ ··· ⊴ Z_c = G
            </div>
            <div className="space-y-3">
              {group.upperCentralSeries.map((level, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-yellow-400 font-mono w-8">Z_{idx + 1}</span>
                  <div className="flex-1 flex flex-wrap gap-1">
                    {level.map((el, elIdx) => (
                      <span key={elIdx} className="bg-dark-600 text-dark-300 px-2 py-1 rounded text-sm font-mono">
                        {el}
                      </span>
                    ))}
                  </div>
                  <span className="text-dark-500 text-sm">|Z_{idx + 1}| = {level.length}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-dark-600 text-dark-400 text-sm">
              Nilpotency class = {group.nilpotencyClass} (number of steps to reach G)
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Maximal Subgroups */}
      <div className="mb-6">
        <div className="text-dark-400 text-sm mb-2">Maximal Subgroups (index p = {group.p}):</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {group.maximalSubgroups.map((sub, idx) => (
            <div key={idx} className="bg-dark-700 p-3 rounded-lg">
              <div className="text-dark-200 font-medium mb-2">{sub.name}</div>
              <div className="flex flex-wrap gap-1">
                {sub.elements.map((el, elIdx) => (
                  <span key={elIdx} className="bg-dark-600 text-dark-300 px-2 py-0.5 rounded text-xs font-mono">
                    {el}
                  </span>
                ))}
              </div>
              <div className="text-dark-500 text-xs mt-2">
                |{sub.name}| = {sub.elements.length}, [G : {sub.name}] = {group.p}
              </div>
            </div>
          ))}
        </div>
        <div className="text-dark-500 text-xs mt-2">
          All maximal subgroups are normal with index p
        </div>
      </div>

      {/* Key Theorems */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Key Theorems for p-Groups</h5>
        <ul className="text-dark-400 text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Z(G) ≠ {'{'}e{'}'} — p-groups have non-trivial center</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>p | |Z(G)| — the center size is divisible by p</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>|G| = p² ⟹ G is abelian</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Every maximal subgroup is normal with index p</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Every p-group is nilpotent</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
