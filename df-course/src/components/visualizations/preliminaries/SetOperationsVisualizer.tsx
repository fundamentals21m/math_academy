/**
 * Interactive Set Operations Visualizer
 * Demonstrates union, intersection, difference, and complement operations
 */
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SetOperation = 'union' | 'intersection' | 'difference' | 'symmetric_difference' | 'complement';

interface SetElement {
  value: number;
  inA: boolean;
  inB: boolean;
}

export function SetOperationsVisualizer() {
  const [setA, setSetA] = useState<number[]>([1, 2, 3, 4, 5]);
  const [setB, setSetB] = useState<number[]>([3, 4, 5, 6, 7]);
  const [universe, setUniverse] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [operation, setOperation] = useState<SetOperation>('union');
  const [inputA, setInputA] = useState('1,2,3,4,5');
  const [inputB, setInputB] = useState('3,4,5,6,7');

  // Compute result based on operation
  const result = useMemo(() => {
    const a = new Set(setA);
    const b = new Set(setB);
    const u = new Set(universe);

    switch (operation) {
      case 'union':
        return [...new Set([...setA, ...setB])].sort((x, y) => x - y);
      case 'intersection':
        return setA.filter(x => b.has(x)).sort((x, y) => x - y);
      case 'difference':
        return setA.filter(x => !b.has(x)).sort((x, y) => x - y);
      case 'symmetric_difference':
        return [...setA.filter(x => !b.has(x)), ...setB.filter(x => !a.has(x))].sort((x, y) => x - y);
      case 'complement':
        return [...universe].filter(x => !a.has(x)).sort((x, y) => x - y);
      default:
        return [];
    }
  }, [setA, setB, universe, operation]);

  // Parse input strings to arrays
  const handleSetAChange = (value: string) => {
    setInputA(value);
    const nums = value.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    setSetA(nums);
  };

  const handleSetBChange = (value: string) => {
    setInputB(value);
    const nums = value.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    setSetB(nums);
  };

  // Operation symbols and names
  const operationInfo: Record<SetOperation, { symbol: string; name: string; formula: string }> = {
    union: { symbol: '∪', name: 'Union', formula: 'A ∪ B' },
    intersection: { symbol: '∩', name: 'Intersection', formula: 'A ∩ B' },
    difference: { symbol: '\\', name: 'Difference', formula: 'A \\ B' },
    symmetric_difference: { symbol: '△', name: 'Symmetric Difference', formula: 'A △ B' },
    complement: { symbol: "'", name: 'Complement', formula: "A'" },
  };

  // SVG Venn diagram dimensions
  const width = 400;
  const height = 300;
  const cx1 = 150;
  const cx2 = 250;
  const cy = 150;
  const r = 100;

  // Determine element positions for Venn diagram
  const getElementPosition = (value: number) => {
    const inA = setA.includes(value);
    const inB = setB.includes(value);
    const inResult = result.includes(value);

    if (inA && inB) {
      // In intersection - center
      const idx = setA.filter(x => setB.includes(x)).indexOf(value);
      return { x: 200 + (idx % 3 - 1) * 25, y: 130 + Math.floor(idx / 3) * 30 };
    } else if (inA) {
      // Only in A - left side
      const idx = setA.filter(x => !setB.includes(x)).indexOf(value);
      return { x: 110 + (idx % 2) * 30, y: 130 + Math.floor(idx / 2) * 30 };
    } else if (inB) {
      // Only in B - right side
      const idx = setB.filter(x => !setA.includes(x)).indexOf(value);
      return { x: 260 + (idx % 2) * 30, y: 130 + Math.floor(idx / 2) * 30 };
    }
    return { x: 0, y: 0 };
  };

  // Get highlight regions for current operation
  const getHighlightPath = () => {
    const overlap = `M ${cx1 + r * 0.5} ${cy - r * 0.866} A ${r} ${r} 0 0 1 ${cx1 + r * 0.5} ${cy + r * 0.866} A ${r} ${r} 0 0 1 ${cx1 + r * 0.5} ${cy - r * 0.866}`;

    switch (operation) {
      case 'union':
        return null; // Highlight both circles
      case 'intersection':
        return 'intersection';
      case 'difference':
        return 'left-only';
      case 'symmetric_difference':
        return 'outer';
      case 'complement':
        return 'outside-a';
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Set Operations Visualizer
      </h4>

      {/* Input controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">
            Set A = {'{'}{ setA.join(', ') }{'}'}
          </label>
          <input
            type="text"
            value={inputA}
            onChange={(e) => handleSetAChange(e.target.value)}
            className="w-full px-3 py-2 bg-dark-800 border border-dark-600 rounded-lg text-dark-100 text-sm"
            placeholder="Enter elements separated by commas"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-300 mb-1">
            Set B = {'{'}{ setB.join(', ') }{'}'}
          </label>
          <input
            type="text"
            value={inputB}
            onChange={(e) => handleSetBChange(e.target.value)}
            className="w-full px-3 py-2 bg-dark-800 border border-dark-600 rounded-lg text-dark-100 text-sm"
            placeholder="Enter elements separated by commas"
          />
        </div>
      </div>

      {/* Operation buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(operationInfo) as SetOperation[]).map((op) => (
          <button
            key={op}
            onClick={() => setOperation(op)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              operation === op
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
            }`}
          >
            {operationInfo[op].symbol} {operationInfo[op].name}
          </button>
        ))}
      </div>

      {/* SVG Venn Diagram */}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-950 rounded-lg" style={{ maxHeight: '300px' }}>
        {/* Universe background */}
        <rect x={10} y={10} width={width - 20} height={height - 20} fill="#1f2937" rx={8} />
        <text x={20} y={30} fill="#6b7280" fontSize={12}>U (Universe)</text>

        {/* Highlight region based on operation */}
        {operation === 'union' && (
          <>
            <circle cx={cx1} cy={cy} r={r} fill="#4f46e5" opacity={0.3} />
            <circle cx={cx2} cy={cy} r={r} fill="#4f46e5" opacity={0.3} />
          </>
        )}
        {operation === 'intersection' && (
          <clipPath id="clipA">
            <circle cx={cx1} cy={cy} r={r} />
          </clipPath>
        )}
        {operation === 'intersection' && (
          <circle cx={cx2} cy={cy} r={r} fill="#4f46e5" opacity={0.4} clipPath="url(#clipA)" />
        )}
        {operation === 'difference' && (
          <>
            <circle cx={cx1} cy={cy} r={r} fill="#4f46e5" opacity={0.3} />
            <circle cx={cx2} cy={cy} r={r} fill="#1f2937" />
          </>
        )}
        {operation === 'symmetric_difference' && (
          <>
            <circle cx={cx1} cy={cy} r={r} fill="#4f46e5" opacity={0.3} />
            <circle cx={cx2} cy={cy} r={r} fill="#4f46e5" opacity={0.3} />
            <clipPath id="clipB">
              <circle cx={cx1} cy={cy} r={r} />
            </clipPath>
            <circle cx={cx2} cy={cy} r={r} fill="#1f2937" clipPath="url(#clipB)" />
          </>
        )}
        {operation === 'complement' && (
          <>
            <rect x={10} y={10} width={width - 20} height={height - 20} fill="#4f46e5" opacity={0.2} rx={8} />
            <circle cx={cx1} cy={cy} r={r} fill="#1f2937" />
          </>
        )}

        {/* Circle outlines */}
        <circle cx={cx1} cy={cy} r={r} fill="none" stroke="#ef4444" strokeWidth={2} />
        <circle cx={cx2} cy={cy} r={r} fill="none" stroke="#3b82f6" strokeWidth={2} />

        {/* Labels */}
        <text x={cx1 - 60} y={cy - 70} fill="#ef4444" fontSize={16} fontWeight="bold">A</text>
        <text x={cx2 + 45} y={cy - 70} fill="#3b82f6" fontSize={16} fontWeight="bold">B</text>

        {/* Elements */}
        {[...new Set([...setA, ...setB])].map((value) => {
          const pos = getElementPosition(value);
          const inResult = result.includes(value);
          if (pos.x === 0 && pos.y === 0) return null;

          return (
            <motion.g
              key={value}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring' }}
            >
              <circle
                cx={pos.x}
                cy={pos.y}
                r={14}
                fill={inResult ? '#fbbf24' : '#374151'}
                stroke={inResult ? '#fef3c7' : '#4b5563'}
                strokeWidth={2}
              />
              <text
                x={pos.x}
                y={pos.y + 5}
                textAnchor="middle"
                fill={inResult ? '#1f2937' : '#9ca3af'}
                fontSize={12}
                fontWeight="bold"
              >
                {value}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Result display */}
      <div className="mt-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <div className="text-center">
          <p className="text-dark-300 mb-2">
            <span className="text-indigo-400 font-mono">{operationInfo[operation].formula}</span>
            {' = '}
          </p>
          <p className="text-xl font-bold text-amber-400">
            {'{'} {result.join(', ')} {'}'}
          </p>
          <p className="text-sm text-dark-400 mt-2">
            |{operationInfo[operation].formula}| = {result.length}
          </p>
        </div>
      </div>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Properties:</strong> Set operations satisfy important laws:
          A ∪ B = B ∪ A (commutative), A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) (distributive),
          and (A')' = A (double complement).
        </p>
      </div>
    </div>
  );
}
