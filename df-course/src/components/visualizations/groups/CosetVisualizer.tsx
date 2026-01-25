/**
 * Interactive Coset Visualizer
 * Shows left/right cosets and normal subgroup detection
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface GroupData {
  name: string;
  elements: string[];
  operation: (a: number, b: number) => number;
  subgroups: { name: string; elements: number[]; isNormal: boolean }[];
}

// S3 group
const S3_ELEMENTS = ['e', '(12)', '(13)', '(23)', '(123)', '(132)'];
const S3_TABLE = [
  [0, 1, 2, 3, 4, 5],
  [1, 0, 4, 5, 2, 3],
  [2, 5, 0, 4, 3, 1],
  [3, 4, 5, 0, 1, 2],
  [4, 3, 1, 2, 5, 0],
  [5, 2, 3, 1, 0, 4],
];

// D4 group (dihedral group of order 8)
const D4_ELEMENTS = ['e', 'r', 'r²', 'r³', 's', 'sr', 'sr²', 'sr³'];
const D4_TABLE = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 0, 7, 4, 5, 6],
  [2, 3, 0, 1, 6, 7, 4, 5],
  [3, 0, 1, 2, 5, 6, 7, 4],
  [4, 5, 6, 7, 0, 1, 2, 3],
  [5, 6, 7, 4, 3, 0, 1, 2],
  [6, 7, 4, 5, 2, 3, 0, 1],
  [7, 4, 5, 6, 1, 2, 3, 0],
];

const GROUPS: Record<string, GroupData> = {
  S3: {
    name: 'S₃',
    elements: S3_ELEMENTS,
    operation: (a, b) => S3_TABLE[a][b],
    subgroups: [
      { name: '{e}', elements: [0], isNormal: true },
      { name: '⟨(12)⟩', elements: [0, 1], isNormal: false },
      { name: '⟨(13)⟩', elements: [0, 2], isNormal: false },
      { name: '⟨(23)⟩', elements: [0, 3], isNormal: false },
      { name: 'A₃', elements: [0, 4, 5], isNormal: true },
    ],
  },
  D4: {
    name: 'D₄',
    elements: D4_ELEMENTS,
    operation: (a, b) => D4_TABLE[a][b],
    subgroups: [
      { name: '{e}', elements: [0], isNormal: true },
      { name: '⟨r²⟩', elements: [0, 2], isNormal: true },
      { name: '⟨s⟩', elements: [0, 4], isNormal: false },
      { name: '⟨sr⟩', elements: [0, 5], isNormal: false },
      { name: '⟨r⟩', elements: [0, 1, 2, 3], isNormal: true },
      { name: 'V₄', elements: [0, 2, 4, 6], isNormal: true },
    ],
  },
};

export function CosetVisualizer() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof GROUPS>('S3');
  const [selectedSubgroup, setSelectedSubgroup] = useState(0);
  const [cosetType, setCosetType] = useState<'left' | 'right'>('left');

  const group = GROUPS[selectedGroup];
  const subgroup = group.subgroups[selectedSubgroup];

  // Compute cosets
  const cosets = useMemo(() => {
    const n = group.elements.length;
    const H = new Set(subgroup.elements);
    const visited = new Set<string>();
    const result: { representative: number; elements: number[] }[] = [];

    for (let g = 0; g < n; g++) {
      const cosetElements: number[] = [];
      for (const h of subgroup.elements) {
        const elem = cosetType === 'left'
          ? group.operation(g, h)
          : group.operation(h, g);
        cosetElements.push(elem);
      }
      cosetElements.sort((a, b) => a - b);
      const key = cosetElements.join(',');

      if (!visited.has(key)) {
        visited.add(key);
        result.push({ representative: g, elements: cosetElements });
      }
    }
    return result;
  }, [group, subgroup, cosetType]);

  // Check if left cosets equal right cosets (normal subgroup test)
  const leftCosets = useMemo(() => {
    const n = group.elements.length;
    const visited = new Set<string>();
    const result: string[] = [];
    for (let g = 0; g < n; g++) {
      const cosetElements = subgroup.elements.map(h => group.operation(g, h)).sort((a, b) => a - b);
      const key = cosetElements.join(',');
      if (!visited.has(key)) {
        visited.add(key);
        result.push(key);
      }
    }
    return result.sort();
  }, [group, subgroup]);

  const rightCosets = useMemo(() => {
    const n = group.elements.length;
    const visited = new Set<string>();
    const result: string[] = [];
    for (let g = 0; g < n; g++) {
      const cosetElements = subgroup.elements.map(h => group.operation(h, g)).sort((a, b) => a - b);
      const key = cosetElements.join(',');
      if (!visited.has(key)) {
        visited.add(key);
        result.push(key);
      }
    }
    return result.sort();
  }, [group, subgroup]);

  const isNormalByCosets = JSON.stringify(leftCosets) === JSON.stringify(rightCosets);

  // Colors for cosets
  const cosetColors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#a855f7', '#ec4899', '#14b8a6', '#f97316'];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Coset Visualizer
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group:</label>
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
              {g.name}
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
              {sg.name}
              {sg.isNormal && <span className="ml-1 text-xs text-amber-400">⊲</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Coset type toggle */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Coset Type:</label>
        <div className="flex gap-2">
          <button
            onClick={() => setCosetType('left')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              cosetType === 'left'
                ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
            }`}
          >
            Left Cosets (gH)
          </button>
          <button
            onClick={() => setCosetType('right')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              cosetType === 'right'
                ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
            }`}
          >
            Right Cosets (Hg)
          </button>
        </div>
      </div>

      {/* Coset display */}
      <div className="mb-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-300 mb-3">
          {cosetType === 'left' ? 'Left' : 'Right'} cosets of {subgroup.name} in {group.name}:
        </p>
        <div className="space-y-2">
          {cosets.map((coset, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: cosetColors[i % cosetColors.length] }}
              />
              <span className="text-sm font-mono text-dark-400">
                {group.elements[coset.representative]}{cosetType === 'left' ? 'H' : 'H'} =
              </span>
              <span className="text-sm font-mono" style={{ color: cosetColors[i % cosetColors.length] }}>
                {'{'}{ coset.elements.map(e => group.elements[e]).join(', ') }{'}'}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual representation */}
      <svg viewBox="0 0 400 200" className="w-full bg-dark-950 rounded-lg mb-4">
        {/* Draw cosets as colored groups */}
        {cosets.map((coset, cosetIdx) => {
          const elementsPerRow = Math.ceil(Math.sqrt(coset.elements.length));
          const cosetWidth = 80;
          const startX = 20 + cosetIdx * 95;

          return (
            <g key={cosetIdx}>
              {/* Coset background */}
              <rect
                x={startX - 5}
                y={30}
                width={cosetWidth}
                height={140}
                rx={8}
                fill={cosetColors[cosetIdx % cosetColors.length] + '20'}
                stroke={cosetColors[cosetIdx % cosetColors.length]}
                strokeWidth={2}
              />

              {/* Coset label */}
              <text
                x={startX + cosetWidth / 2 - 5}
                y={20}
                textAnchor="middle"
                fill={cosetColors[cosetIdx % cosetColors.length]}
                fontSize={12}
                fontWeight="bold"
              >
                {group.elements[coset.representative]}{cosetType === 'left' ? 'H' : 'H'}
              </text>

              {/* Elements */}
              {coset.elements.map((elem, elemIdx) => {
                const row = Math.floor(elemIdx / 2);
                const col = elemIdx % 2;
                return (
                  <motion.g
                    key={elemIdx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: cosetIdx * 0.1 + elemIdx * 0.05 }}
                  >
                    <circle
                      cx={startX + 20 + col * 35}
                      cy={55 + row * 30}
                      r={12}
                      fill={cosetColors[cosetIdx % cosetColors.length] + '60'}
                      stroke={cosetColors[cosetIdx % cosetColors.length]}
                      strokeWidth={1}
                    />
                    <text
                      x={startX + 20 + col * 35}
                      y={59 + row * 30}
                      textAnchor="middle"
                      fill="#fff"
                      fontSize={9}
                    >
                      {group.elements[elem]}
                    </text>
                  </motion.g>
                );
              })}
            </g>
          );
        })}
      </svg>

      {/* Normal subgroup check */}
      <div className={`p-3 rounded-lg border ${
        isNormalByCosets
          ? 'bg-emerald-500/10 border-emerald-500/30'
          : 'bg-orange-500/10 border-orange-500/30'
      }`}>
        <p className={`text-sm font-semibold ${isNormalByCosets ? 'text-emerald-400' : 'text-orange-400'}`}>
          {isNormalByCosets
            ? '✓ H is normal: Left cosets = Right cosets'
            : '✗ H is NOT normal: Left cosets ≠ Right cosets'}
        </p>
        <p className="text-xs text-dark-400 mt-1">
          Index [G:H] = {cosets.length} (number of cosets)
        </p>
      </div>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Facts:</strong> Left cosets gH partition G. H is normal iff gH = Hg for all g.
          The index [G:H] = |G|/|H| counts cosets. Normal subgroups give well-defined quotient groups G/H.
        </p>
      </div>
    </div>
  );
}
