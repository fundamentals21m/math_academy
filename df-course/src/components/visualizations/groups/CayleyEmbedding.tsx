/**
 * Interactive Cayley's Theorem Demonstration
 * Shows how every group embeds into a symmetric group
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface GroupData {
  name: string;
  elements: string[];
  operation: (a: number, b: number) => number;
}

// Z3 group
const Z3: GroupData = {
  name: 'ℤ/3ℤ',
  elements: ['0', '1', '2'],
  operation: (a, b) => (a + b) % 3,
};

// Z4 group
const Z4: GroupData = {
  name: 'ℤ/4ℤ',
  elements: ['0', '1', '2', '3'],
  operation: (a, b) => (a + b) % 4,
};

// Klein four-group
const V4: GroupData = {
  name: 'V₄',
  elements: ['e', 'a', 'b', 'c'],
  operation: (a, b) => {
    const table = [
      [0, 1, 2, 3],
      [1, 0, 3, 2],
      [2, 3, 0, 1],
      [3, 2, 1, 0],
    ];
    return table[a][b];
  },
};

// S3 group
const S3_TABLE = [
  [0, 1, 2, 3, 4, 5],
  [1, 0, 4, 5, 2, 3],
  [2, 5, 0, 4, 3, 1],
  [3, 4, 5, 0, 1, 2],
  [4, 3, 1, 2, 5, 0],
  [5, 2, 3, 1, 0, 4],
];
const S3: GroupData = {
  name: 'S₃',
  elements: ['e', '(12)', '(13)', '(23)', '(123)', '(132)'],
  operation: (a, b) => S3_TABLE[a][b],
};

const GROUPS: Record<string, GroupData> = { Z3, Z4, V4, S3 };

export function CayleyEmbedding() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof GROUPS>('Z3');
  const [selectedElement, setSelectedElement] = useState(1);

  const group = GROUPS[selectedGroup];
  const n = group.elements.length;

  // Compute the left regular representation (Cayley embedding)
  // For each g, compute the permutation λ_g: h → gh
  const cayleyPermutation = useMemo(() => {
    const perm: number[] = [];
    for (let h = 0; h < n; h++) {
      perm.push(group.operation(selectedElement, h));
    }
    return perm;
  }, [group, selectedElement, n]);

  // Get all permutations (the image of the embedding)
  const allPermutations = useMemo(() => {
    return Array.from({ length: n }, (_, g) => {
      const perm: number[] = [];
      for (let h = 0; h < n; h++) {
        perm.push(group.operation(g, h));
      }
      return perm;
    });
  }, [group, n]);

  // Convert permutation to cycle notation
  const toCycleNotation = (perm: number[]): string => {
    const visited = new Array(perm.length).fill(false);
    const cycles: number[][] = [];

    for (let i = 0; i < perm.length; i++) {
      if (visited[i] || perm[i] === i) {
        visited[i] = true;
        continue;
      }
      const cycle: number[] = [];
      let j = i;
      while (!visited[j]) {
        visited[j] = true;
        cycle.push(j + 1);
        j = perm[j];
      }
      if (cycle.length > 1) cycles.push(cycle);
    }
    if (cycles.length === 0) return 'e';
    return cycles.map(c => `(${c.join(' ')})`).join('');
  };

  // Colors
  const colors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#a855f7', '#ec4899'];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Cayley's Theorem: Embedding into S_n
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group G:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(GROUPS).map(([key, g]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedGroup(key as keyof typeof GROUPS);
                setSelectedElement(1);
              }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedGroup === key
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {g.name} (|G|={g.elements.length})
            </button>
          ))}
        </div>
      </div>

      {/* Theorem statement */}
      <div className="mb-4 p-3 bg-violet-500/10 rounded-lg border border-violet-500/30">
        <p className="text-sm text-violet-400 font-semibold">Cayley's Theorem</p>
        <p className="text-sm text-dark-200 mt-1">
          Every group G embeds into S_|G| via the <em>left regular representation</em>:
        </p>
        <p className="text-sm font-mono text-amber-400 mt-1">
          λ: G → S_|G|, where λ(g): h ↦ gh
        </p>
      </div>

      {/* Element selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">
          Select g ∈ G to see λ(g):
        </label>
        <div className="flex gap-2 flex-wrap">
          {group.elements.map((elem, i) => (
            <button
              key={i}
              onClick={() => setSelectedElement(i)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedElement === i
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {elem}
            </button>
          ))}
        </div>
      </div>

      {/* Permutation visualization */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-300 mb-2">
          λ({group.elements[selectedElement]}): G → G, where h ↦ {group.elements[selectedElement]} · h
        </p>

        <svg viewBox={`0 0 400 ${Math.max(120, n * 25)}`} className="w-full bg-dark-950 rounded-lg">
          {/* Top row: h */}
          {group.elements.map((elem, i) => (
            <g key={`top-${i}`}>
              <circle
                cx={50 + (i * 300) / Math.max(n - 1, 1)}
                cy={30}
                r={16}
                fill={colors[i % colors.length] + '40'}
                stroke={colors[i % colors.length]}
                strokeWidth={2}
              />
              <text
                x={50 + (i * 300) / Math.max(n - 1, 1)}
                y={35}
                textAnchor="middle"
                fill={colors[i % colors.length]}
                fontSize={12}
                fontWeight="bold"
              >
                {elem}
              </text>
            </g>
          ))}

          {/* Arrows */}
          {group.elements.map((_, i) => {
            const x1 = 50 + (i * 300) / Math.max(n - 1, 1);
            const x2 = 50 + (cayleyPermutation[i] * 300) / Math.max(n - 1, 1);
            return (
              <motion.path
                key={`arrow-${i}`}
                d={`M ${x1} 46 Q ${(x1 + x2) / 2} 65 ${x2} ${n * 25 - 16}`}
                fill="none"
                stroke={colors[i % colors.length]}
                strokeWidth={2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
            );
          })}

          {/* Bottom row: gh */}
          {group.elements.map((_, i) => (
            <g key={`bottom-${i}`}>
              <circle
                cx={50 + (i * 300) / Math.max(n - 1, 1)}
                cy={n * 25}
                r={16}
                fill="#1f293750"
                stroke="#4b5563"
                strokeWidth={2}
              />
              <text
                x={50 + (i * 300) / Math.max(n - 1, 1)}
                y={n * 25 + 5}
                textAnchor="middle"
                fill="#9ca3af"
                fontSize={12}
              >
                {group.elements[i]}
              </text>
            </g>
          ))}
        </svg>

        <p className="text-sm font-mono text-emerald-400 mt-2 text-center">
          λ({group.elements[selectedElement]}) = {toCycleNotation(cayleyPermutation)} ∈ S_{n}
        </p>
      </div>

      {/* Full embedding table */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-300 mb-2">
          Complete embedding λ: {group.name} → S_{n}
        </p>
        <div className="overflow-x-auto">
          <table className="text-sm">
            <thead>
              <tr>
                <th className="px-3 py-1 text-dark-400 text-left">g ∈ G</th>
                <th className="px-3 py-1 text-dark-400 text-left">λ(g) ∈ S_{n}</th>
              </tr>
            </thead>
            <tbody>
              {group.elements.map((elem, i) => (
                <tr
                  key={i}
                  className={selectedElement === i ? 'bg-emerald-500/20' : ''}
                >
                  <td className="px-3 py-1 font-mono text-indigo-400">{elem}</td>
                  <td className="px-3 py-1 font-mono text-emerald-400">
                    {toCycleNotation(allPermutations[i])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key insight */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Insight:</strong> Cayley's theorem shows every group of order n is isomorphic
          to a subgroup of S_n. The embedding λ is injective because λ(g)(e) = g, so different
          elements give different permutations. This gives a concrete representation of any abstract group.
        </p>
      </div>
    </div>
  );
}
