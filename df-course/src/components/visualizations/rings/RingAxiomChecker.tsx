import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type RingExample = {
  name: string;
  elements: string[];
  add: (a: number, b: number) => number;
  mul: (a: number, b: number) => number;
  zero: number;
  one: number | null; // null if no unity
  isCommutative: boolean;
  hasUnity: boolean;
  isIntegralDomain: boolean;
  isField: boolean;
  description: string;
};

const rings: RingExample[] = [
  {
    name: 'Z/6Z',
    elements: ['0', '1', '2', '3', '4', '5'],
    add: (a, b) => (a + b) % 6,
    mul: (a, b) => (a * b) % 6,
    zero: 0,
    one: 1,
    isCommutative: true,
    hasUnity: true,
    isIntegralDomain: false,
    isField: false,
    description: 'Commutative ring with unity. Has zero divisors: 2·3 = 0',
  },
  {
    name: 'Z/5Z',
    elements: ['0', '1', '2', '3', '4'],
    add: (a, b) => (a + b) % 5,
    mul: (a, b) => (a * b) % 5,
    zero: 0,
    one: 1,
    isCommutative: true,
    hasUnity: true,
    isIntegralDomain: true,
    isField: true,
    description: 'Field! Prime order means every nonzero element is a unit',
  },
  {
    name: 'Z/4Z',
    elements: ['0', '1', '2', '3'],
    add: (a, b) => (a + b) % 4,
    mul: (a, b) => (a * b) % 4,
    zero: 0,
    one: 1,
    isCommutative: true,
    hasUnity: true,
    isIntegralDomain: false,
    isField: false,
    description: 'Has zero divisor: 2·2 = 0. Also has nilpotent element: 2² = 0',
  },
  {
    name: '2Z',
    elements: ['...', '-4', '-2', '0', '2', '4', '...'],
    add: (a, b) => a + b,
    mul: (a, b) => a * b,
    zero: 0,
    one: null,
    isCommutative: true,
    hasUnity: false,
    isIntegralDomain: true,
    isField: false,
    description: 'Even integers. No unity (1 is not even), but no zero divisors',
  },
];

function findZeroDivisors(ring: RingExample): [number, number][] {
  const zeroDivisors: [number, number][] = [];
  for (let i = 1; i < ring.elements.length; i++) {
    for (let j = i; j < ring.elements.length; j++) {
      if (ring.mul(i, j) === ring.zero) {
        zeroDivisors.push([i, j]);
      }
    }
  }
  return zeroDivisors;
}

function findUnits(ring: RingExample): number[] {
  if (!ring.hasUnity || ring.one === null) return [];
  const units: number[] = [];
  for (let i = 0; i < ring.elements.length; i++) {
    for (let j = 0; j < ring.elements.length; j++) {
      if (ring.mul(i, j) === ring.one) {
        units.push(i);
        break;
      }
    }
  }
  return units;
}

export function RingAxiomChecker() {
  const [selectedRing, setSelectedRing] = useState(0);
  const [showTable, setShowTable] = useState<'add' | 'mul' | null>(null);
  const [operandA, setOperandA] = useState<number | null>(null);
  const [operandB, setOperandB] = useState<number | null>(null);

  const ring = rings[selectedRing];
  const zeroDivisors = useMemo(() => findZeroDivisors(ring), [ring]);
  const units = useMemo(() => findUnits(ring), [ring]);

  const isSimpleRing = ring.elements.length <= 10 && !ring.elements.includes('...');

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Ring Axiom Explorer</h4>

      {/* Ring Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {rings.map((r, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedRing(idx);
              setOperandA(null);
              setOperandB(null);
              setShowTable(null);
            }}
            className={`px-4 py-2 rounded transition-all ${
              selectedRing === idx
                ? r.isField ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      {/* Ring Info */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`px-3 py-1 rounded text-sm ${
            ring.isCommutative ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
          }`}>
            {ring.isCommutative ? 'Commutative' : 'Non-Commutative'}
          </span>
          <span className={`px-3 py-1 rounded text-sm ${
            ring.hasUnity ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'
          }`}>
            {ring.hasUnity ? `Unity: ${ring.one}` : 'No Unity'}
          </span>
          <span className={`px-3 py-1 rounded text-sm ${
            ring.isIntegralDomain ? 'bg-blue-900/50 text-blue-400' : 'bg-red-900/50 text-red-400'
          }`}>
            {ring.isIntegralDomain ? 'Integral Domain' : 'Has Zero Divisors'}
          </span>
          {ring.isField && (
            <span className="px-3 py-1 rounded text-sm bg-purple-900/50 text-purple-400">
              Field
            </span>
          )}
        </div>
        <div className="text-dark-300 text-sm">{ring.description}</div>
      </div>

      {/* Table Toggle */}
      {isSimpleRing && (
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setShowTable(showTable === 'add' ? null : 'add')}
            className={`px-4 py-2 rounded ${
              showTable === 'add' ? 'bg-blue-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            Addition Table
          </button>
          <button
            onClick={() => setShowTable(showTable === 'mul' ? null : 'mul')}
            className={`px-4 py-2 rounded ${
              showTable === 'mul' ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            Multiplication Table
          </button>
        </div>
      )}

      {/* Operation Tables */}
      <AnimatePresence>
        {showTable && isSimpleRing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 overflow-hidden"
          >
            <div className="bg-dark-700 p-4 rounded-lg overflow-x-auto">
              <table className="text-sm">
                <thead>
                  <tr>
                    <th className={`p-2 ${showTable === 'add' ? 'text-blue-400' : 'text-purple-400'}`}>
                      {showTable === 'add' ? '+' : '·'}
                    </th>
                    {ring.elements.filter(e => e !== '...').map((el, idx) => (
                      <th key={idx} className="p-2 text-dark-400">{el}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ring.elements.filter(e => e !== '...').map((rowEl, rowIdx) => (
                    <tr key={rowIdx}>
                      <td className="p-2 text-dark-400 font-medium">{rowEl}</td>
                      {ring.elements.filter(e => e !== '...').map((colEl, colIdx) => {
                        const result = showTable === 'add'
                          ? ring.add(rowIdx, colIdx)
                          : ring.mul(rowIdx, colIdx);
                        const isZeroProduct = showTable === 'mul' && result === ring.zero && rowIdx !== 0 && colIdx !== 0;
                        return (
                          <td
                            key={colIdx}
                            className={`p-2 text-center font-mono ${
                              isZeroProduct ? 'text-red-400 bg-red-900/20' : 'text-dark-300'
                            }`}
                          >
                            {ring.elements[result]}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zero Divisors and Units */}
      {isSimpleRing && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h5 className="text-dark-200 font-medium mb-2">Zero Divisors</h5>
            {zeroDivisors.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {zeroDivisors.map(([a, b], idx) => (
                  <span key={idx} className="bg-red-900/30 text-red-400 px-2 py-1 rounded text-sm font-mono">
                    {ring.elements[a]}·{ring.elements[b]} = 0
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-green-400 text-sm">None! (Integral domain)</span>
            )}
          </div>

          <div className="bg-dark-700 p-4 rounded-lg">
            <h5 className="text-dark-200 font-medium mb-2">Units</h5>
            {units.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {units.map((u, idx) => (
                  <span key={idx} className="bg-green-900/30 text-green-400 px-2 py-1 rounded text-sm font-mono">
                    {ring.elements[u]}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-yellow-400 text-sm">No unity, no units</span>
            )}
          </div>
        </div>
      )}

      {/* Ring Hierarchy */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Ring Hierarchy</h5>
        <div className="text-dark-400 text-sm space-y-1">
          <div className="flex items-center gap-2">
            <span className={`w-4 h-4 rounded ${ring.isField ? 'bg-green-600' : 'bg-dark-600'}`}></span>
            <span className={ring.isField ? 'text-green-400' : ''}>Field</span>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span className={`w-4 h-4 rounded ${ring.isIntegralDomain ? 'bg-blue-600' : 'bg-dark-600'}`}></span>
            <span className={ring.isIntegralDomain ? 'text-blue-400' : ''}>Integral Domain</span>
          </div>
          <div className="flex items-center gap-2 ml-8">
            <span className={`w-4 h-4 rounded ${ring.hasUnity ? 'bg-purple-600' : 'bg-dark-600'}`}></span>
            <span className={ring.hasUnity ? 'text-purple-400' : ''}>Ring with Unity</span>
          </div>
          <div className="flex items-center gap-2 ml-12">
            <span className="w-4 h-4 rounded bg-gray-600"></span>
            <span>Commutative Ring</span>
          </div>
        </div>
      </div>
    </div>
  );
}
