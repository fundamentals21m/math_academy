/**
 * Interactive Lagrange's Theorem Demonstration
 * Shows coset partition and divisibility
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface GroupInfo {
  name: string;
  order: number;
  elements: string[];
  subgroups: { name: string; order: number; elements: number[] }[];
}

const GROUPS: Record<string, GroupInfo> = {
  Z12: {
    name: 'ℤ/12ℤ',
    order: 12,
    elements: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    subgroups: [
      { name: '{0}', order: 1, elements: [0] },
      { name: '⟨6⟩', order: 2, elements: [0, 6] },
      { name: '⟨4⟩', order: 3, elements: [0, 4, 8] },
      { name: '⟨3⟩', order: 4, elements: [0, 3, 6, 9] },
      { name: '⟨2⟩', order: 6, elements: [0, 2, 4, 6, 8, 10] },
      { name: 'ℤ/12ℤ', order: 12, elements: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    ],
  },
  S3: {
    name: 'S₃',
    order: 6,
    elements: ['e', '(12)', '(13)', '(23)', '(123)', '(132)'],
    subgroups: [
      { name: '{e}', order: 1, elements: [0] },
      { name: '⟨(12)⟩', order: 2, elements: [0, 1] },
      { name: '⟨(13)⟩', order: 2, elements: [0, 2] },
      { name: '⟨(23)⟩', order: 2, elements: [0, 3] },
      { name: 'A₃', order: 3, elements: [0, 4, 5] },
      { name: 'S₃', order: 6, elements: [0, 1, 2, 3, 4, 5] },
    ],
  },
  D4: {
    name: 'D₄',
    order: 8,
    elements: ['e', 'r', 'r²', 'r³', 's', 'sr', 'sr²', 'sr³'],
    subgroups: [
      { name: '{e}', order: 1, elements: [0] },
      { name: '⟨r²⟩', order: 2, elements: [0, 2] },
      { name: '⟨s⟩', order: 2, elements: [0, 4] },
      { name: '⟨r⟩', order: 4, elements: [0, 1, 2, 3] },
      { name: 'V₄', order: 4, elements: [0, 2, 4, 6] },
      { name: 'D₄', order: 8, elements: [0, 1, 2, 3, 4, 5, 6, 7] },
    ],
  },
};

export function LagrangeDemo() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof GROUPS>('Z12');
  const [selectedSubgroup, setSelectedSubgroup] = useState(2);

  const group = GROUPS[selectedGroup];
  const subgroup = group.subgroups[selectedSubgroup];

  // Compute cosets (for abelian groups, simple computation)
  const cosets = useMemo(() => {
    const H = new Set(subgroup.elements);
    const visited = new Set<number>();
    const result: number[][] = [];

    for (let g = 0; g < group.order; g++) {
      if (visited.has(g)) continue;

      const coset: number[] = [];
      for (const h of subgroup.elements) {
        const elem = (g + h) % group.order;
        coset.push(elem);
        visited.add(elem);
      }
      coset.sort((a, b) => a - b);
      result.push(coset);
    }
    return result;
  }, [group, subgroup]);

  // Divisors of |G|
  const divisors = useMemo(() => {
    const divs: number[] = [];
    for (let i = 1; i <= group.order; i++) {
      if (group.order % i === 0) divs.push(i);
    }
    return divs;
  }, [group.order]);

  // Colors for cosets
  const cosetColors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#a855f7', '#ec4899'];

  // Calculate grid dimensions for visualization
  const gridSize = Math.ceil(Math.sqrt(group.order));

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Lagrange's Theorem Demonstration
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group G:</label>
        <div className="flex gap-2">
          {Object.entries(GROUPS).map(([key, g]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedGroup(key as keyof typeof GROUPS);
                setSelectedSubgroup(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedGroup === key
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {g.name} (|G|={g.order})
            </button>
          ))}
        </div>
      </div>

      {/* Subgroup selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Subgroup H:</label>
        <div className="flex flex-wrap gap-2">
          {group.subgroups.map((sg, i) => (
            <button
              key={i}
              onClick={() => setSelectedSubgroup(i)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedSubgroup === i
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {sg.name} (|H|={sg.order})
            </button>
          ))}
        </div>
      </div>

      {/* Lagrange equation display */}
      <div className="mb-4 p-4 bg-violet-500/10 rounded-lg border border-violet-500/30">
        <div className="text-center">
          <p className="text-xl font-mono text-violet-400 mb-2">
            |G| = |H| × [G:H]
          </p>
          <p className="text-2xl font-bold">
            <span className="text-indigo-400">{group.order}</span>
            <span className="text-dark-400"> = </span>
            <span className="text-emerald-400">{subgroup.order}</span>
            <span className="text-dark-400"> × </span>
            <span className="text-amber-400">{cosets.length}</span>
          </p>
          <p className="text-sm text-dark-400 mt-2">
            ({group.order} elements) = ({subgroup.order} per coset) × ({cosets.length} cosets)
          </p>
        </div>
      </div>

      {/* Visual partition of G */}
      <div className="mb-4">
        <p className="text-sm text-dark-300 mb-2">G partitioned into cosets of H:</p>
        <svg viewBox="0 0 400 200" className="w-full bg-dark-950 rounded-lg">
          {/* Group elements arranged in a grid, colored by coset */}
          {group.elements.map((elem, idx) => {
            // Find which coset this element belongs to
            const cosetIdx = cosets.findIndex(coset => coset.includes(idx));
            const row = Math.floor(idx / gridSize);
            const col = idx % gridSize;
            const cellSize = 350 / gridSize;

            return (
              <motion.g
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.03 }}
              >
                <rect
                  x={25 + col * cellSize}
                  y={20 + row * cellSize}
                  width={cellSize - 4}
                  height={cellSize - 4}
                  rx={4}
                  fill={cosetColors[cosetIdx % cosetColors.length] + '40'}
                  stroke={cosetColors[cosetIdx % cosetColors.length]}
                  strokeWidth={2}
                />
                <text
                  x={25 + col * cellSize + (cellSize - 4) / 2}
                  y={20 + row * cellSize + (cellSize - 4) / 2 + 5}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize={Math.min(14, 100 / gridSize)}
                  fontWeight="bold"
                >
                  {elem}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Cosets legend */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-300 mb-2">Cosets:</p>
        <div className="flex flex-wrap gap-3">
          {cosets.map((coset, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: cosetColors[i % cosetColors.length] }}
              />
              <span className="text-xs font-mono text-dark-300">
                {'{'}{ coset.map(e => group.elements[e]).join(', ') }{'}'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divisors display */}
      <div className="mb-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-sm text-amber-400 mb-2">
          <strong>Possible subgroup orders</strong> (divisors of {group.order}):
        </p>
        <div className="flex gap-2 flex-wrap">
          {divisors.map(d => {
            const hasSubgroup = group.subgroups.some(sg => sg.order === d);
            return (
              <span
                key={d}
                className={`px-2 py-1 rounded text-sm font-mono ${
                  hasSubgroup
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-dark-700 text-dark-400'
                }`}
              >
                {d}
              </span>
            );
          })}
        </div>
        <p className="text-xs text-dark-400 mt-2">
          Green = subgroup exists with this order
        </p>
      </div>

      {/* Element order corollary */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Lagrange's Theorem:</strong> If H ≤ G, then |H| divides |G|.
        </p>
        <p className="text-sm text-indigo-200 mt-1">
          <strong>Corollary:</strong> For any g ∈ G, the order of g divides |G|.
          Thus g^|G| = e for all g ∈ G.
        </p>
      </div>
    </div>
  );
}
