/**
 * Interactive Quaternion Group Visualizer
 * Demonstrates the quaternion group Q8 with multiplication table and structure
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Q8 elements
const Q8_ELEMENTS = ['1', '-1', 'i', '-i', 'j', '-j', 'k', '-k'];

// Q8 multiplication table (row * col)
const Q8_TABLE: Record<string, Record<string, string>> = {
  '1': { '1': '1', '-1': '-1', 'i': 'i', '-i': '-i', 'j': 'j', '-j': '-j', 'k': 'k', '-k': '-k' },
  '-1': { '1': '-1', '-1': '1', 'i': '-i', '-i': 'i', 'j': '-j', '-j': 'j', 'k': '-k', '-k': 'k' },
  'i': { '1': 'i', '-1': '-i', 'i': '-1', '-i': '1', 'j': 'k', '-j': '-k', 'k': '-j', '-k': 'j' },
  '-i': { '1': '-i', '-1': 'i', 'i': '1', '-i': '-1', 'j': '-k', '-j': 'k', 'k': 'j', '-k': '-j' },
  'j': { '1': 'j', '-1': '-j', 'i': '-k', '-i': 'k', 'j': '-1', '-j': '1', 'k': 'i', '-k': '-i' },
  '-j': { '1': '-j', '-1': 'j', 'i': 'k', '-i': '-k', 'j': '1', '-j': '-1', 'k': '-i', '-k': 'i' },
  'k': { '1': 'k', '-1': '-k', 'i': 'j', '-i': '-j', 'j': '-i', '-j': 'i', 'k': '-1', '-k': '1' },
  '-k': { '1': '-k', '-1': 'k', 'i': '-j', '-i': 'j', 'j': 'i', '-j': '-i', 'k': '1', '-k': '-1' },
};

function getColor(el: string): string {
  if (el === '1' || el === '-1') return '#9ca3af';
  if (el === 'i' || el === '-i') return '#f87171';
  if (el === 'j' || el === '-j') return '#4ade80';
  return '#60a5fa';
}

export function QuaternionVisualizer() {
  const [selectedA, setSelectedA] = useState('i');
  const [selectedB, setSelectedB] = useState('j');
  const [showSubgroups, setShowSubgroups] = useState(false);
  const [highlightCell, setHighlightCell] = useState<[string, string] | null>(null);

  const product = Q8_TABLE[selectedA][selectedB];
  const commutatorTest = Q8_TABLE[selectedA][selectedB] !== Q8_TABLE[selectedB][selectedA];

  // Subgroups of Q8
  const subgroups = useMemo(() => [
    { name: '{1}', elements: ['1'], order: 1 },
    { name: '{1, -1}', elements: ['1', '-1'], order: 2 },
    { name: '⟨i⟩', elements: ['1', '-1', 'i', '-i'], order: 4 },
    { name: '⟨j⟩', elements: ['1', '-1', 'j', '-j'], order: 4 },
    { name: '⟨k⟩', elements: ['1', '-1', 'k', '-k'], order: 4 },
    { name: 'Q8', elements: Q8_ELEMENTS, order: 8 },
  ], []);

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Quaternion Group Q₈
      </h4>

      {/* Element selectors */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-2">Select a:</label>
          <div className="flex flex-wrap gap-1">
            {Q8_ELEMENTS.map(el => (
              <button
                key={el}
                onClick={() => setSelectedA(el)}
                className={`w-10 h-10 rounded-lg font-mono font-bold transition-all ${
                  selectedA === el
                    ? 'ring-2 ring-white scale-110'
                    : 'hover:scale-105'
                }`}
                style={{
                  backgroundColor: getColor(el) + '40',
                  color: getColor(el),
                  borderColor: getColor(el),
                  borderWidth: 2,
                }}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm text-dark-300 mb-2">Select b:</label>
          <div className="flex flex-wrap gap-1">
            {Q8_ELEMENTS.map(el => (
              <button
                key={el}
                onClick={() => setSelectedB(el)}
                className={`w-10 h-10 rounded-lg font-mono font-bold transition-all ${
                  selectedB === el
                    ? 'ring-2 ring-white scale-110'
                    : 'hover:scale-105'
                }`}
                style={{
                  backgroundColor: getColor(el) + '40',
                  color: getColor(el),
                  borderColor: getColor(el),
                  borderWidth: 2,
                }}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product display */}
      <div className="mb-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <div className="text-center font-mono text-xl">
          <span style={{ color: getColor(selectedA) }}>{selectedA}</span>
          {' · '}
          <span style={{ color: getColor(selectedB) }}>{selectedB}</span>
          {' = '}
          <motion.span
            key={product}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ color: getColor(product) }}
            className="font-bold"
          >
            {product}
          </motion.span>
        </div>
        {commutatorTest && (
          <p className="text-center text-amber-400 text-sm mt-2">
            ⚠ Non-commutative: {selectedA}·{selectedB} ≠ {selectedB}·{selectedA} = {Q8_TABLE[selectedB][selectedA]}
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowSubgroups(!showSubgroups)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showSubgroups
              ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
          }`}
        >
          Show Subgroups
        </button>
      </div>

      {/* Multiplication table */}
      <div className="mb-4 overflow-x-auto">
        <table className="border-collapse mx-auto">
          <thead>
            <tr>
              <th className="w-10 h-10 bg-dark-800 border border-dark-600 text-indigo-400 font-bold">
                ·
              </th>
              {Q8_ELEMENTS.map(el => (
                <th
                  key={el}
                  className="w-10 h-10 bg-dark-800 border border-dark-600 font-mono"
                  style={{ color: getColor(el) }}
                >
                  {el}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Q8_ELEMENTS.map(rowEl => (
              <tr key={rowEl}>
                <td
                  className="w-10 h-10 bg-dark-800 border border-dark-600 text-center font-mono"
                  style={{ color: getColor(rowEl) }}
                >
                  {rowEl}
                </td>
                {Q8_ELEMENTS.map(colEl => {
                  const result = Q8_TABLE[rowEl][colEl];
                  const isHighlighted = highlightCell && highlightCell[0] === rowEl && highlightCell[1] === colEl;
                  const isSelected = rowEl === selectedA && colEl === selectedB;
                  return (
                    <td
                      key={colEl}
                      className={`w-10 h-10 border border-dark-600 text-center font-mono transition-all ${
                        isSelected ? 'ring-2 ring-amber-400' : ''
                      }`}
                      style={{
                        backgroundColor: isHighlighted || isSelected
                          ? getColor(result) + '40'
                          : 'transparent',
                        color: getColor(result),
                      }}
                      onMouseEnter={() => setHighlightCell([rowEl, colEl])}
                      onMouseLeave={() => setHighlightCell(null)}
                      onClick={() => { setSelectedA(rowEl); setSelectedB(colEl); }}
                    >
                      {result}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Subgroups */}
      {showSubgroups && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4"
        >
          <h5 className="text-sm font-semibold text-violet-400 mb-2">Subgroups of Q₈:</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {subgroups.map(sg => (
              <div
                key={sg.name}
                className="p-2 bg-violet-500/10 rounded-lg border border-violet-500/30"
              >
                <p className="font-mono text-violet-400">{sg.name}</p>
                <p className="text-xs text-dark-400">Order: {sg.order}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {sg.elements.map(el => (
                    <span
                      key={el}
                      className="text-xs font-mono px-1 rounded"
                      style={{ color: getColor(el), backgroundColor: getColor(el) + '20' }}
                    >
                      {el}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Defining relations */}
      <div className="p-3 bg-dark-800/50 rounded-lg border border-dark-700/50 mb-4">
        <h5 className="text-sm font-semibold text-dark-200 mb-2">Defining Relations:</h5>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-sm">
          <div>
            <span className="text-red-400">i</span>² = <span className="text-gray-400">-1</span>
          </div>
          <div>
            <span className="text-green-400">j</span>² = <span className="text-gray-400">-1</span>
          </div>
          <div>
            <span className="text-blue-400">k</span>² = <span className="text-gray-400">-1</span>
          </div>
          <div>
            <span className="text-red-400">i</span><span className="text-green-400">j</span><span className="text-blue-400">k</span> = <span className="text-gray-400">-1</span>
          </div>
        </div>
      </div>

      {/* Key insight */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Quaternion Group:</strong> Q₈ = ⟨i, j, k | i² = j² = k² = ijk = -1⟩ is the smallest
          non-abelian group with every subgroup normal. It has a unique element of order 2 (namely -1),
          and every non-identity element has order 4.
        </p>
      </div>
    </div>
  );
}
