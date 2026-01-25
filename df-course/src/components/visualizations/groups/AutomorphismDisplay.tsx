/**
 * Interactive Automorphism Group Visualizer
 * Shows Aut(G), Inn(G), and Out(G) for various groups
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface AutomorphismData {
  groupName: string;
  groupOrder: number;
  autOrder: number;
  innOrder: number;
  outOrder: number;
  autDescription: string;
  innDescription: string;
  elements: string[];
  automorphisms: { name: string; mapping: number[]; isInner: boolean }[];
}

const AUT_DATA: Record<string, AutomorphismData> = {
  Z6: {
    groupName: 'ℤ/6ℤ',
    groupOrder: 6,
    autOrder: 2,
    innOrder: 1,
    outOrder: 2,
    autDescription: 'Aut(ℤ/6ℤ) ≅ (ℤ/6ℤ)* ≅ ℤ/2ℤ',
    innDescription: 'Inn(ℤ/6ℤ) = {id} (abelian group)',
    elements: ['0', '1', '2', '3', '4', '5'],
    automorphisms: [
      { name: 'id', mapping: [0, 1, 2, 3, 4, 5], isInner: true },
      { name: 'φ₅', mapping: [0, 5, 4, 3, 2, 1], isInner: false },
    ],
  },
  Z2xZ2: {
    groupName: 'ℤ/2ℤ × ℤ/2ℤ',
    groupOrder: 4,
    autOrder: 6,
    innOrder: 1,
    outOrder: 6,
    autDescription: 'Aut(V₄) ≅ S₃ (permutes 3 non-identity elements)',
    innDescription: 'Inn(V₄) = {id} (abelian group)',
    elements: ['(0,0)', '(1,0)', '(0,1)', '(1,1)'],
    automorphisms: [
      { name: 'id', mapping: [0, 1, 2, 3], isInner: true },
      { name: '(12)', mapping: [0, 2, 1, 3], isInner: false },
      { name: '(13)', mapping: [0, 3, 2, 1], isInner: false },
      { name: '(23)', mapping: [0, 1, 3, 2], isInner: false },
      { name: '(123)', mapping: [0, 2, 3, 1], isInner: false },
      { name: '(132)', mapping: [0, 3, 1, 2], isInner: false },
    ],
  },
  S3: {
    groupName: 'S₃',
    groupOrder: 6,
    autOrder: 6,
    innOrder: 6,
    outOrder: 1,
    autDescription: 'Aut(S₃) ≅ S₃ (all automorphisms are inner)',
    innDescription: 'Inn(S₃) ≅ S₃/Z(S₃) = S₃/{e} ≅ S₃',
    elements: ['e', '(12)', '(13)', '(23)', '(123)', '(132)'],
    automorphisms: [
      { name: 'conj by e', mapping: [0, 1, 2, 3, 4, 5], isInner: true },
      { name: 'conj by (12)', mapping: [0, 1, 3, 2, 5, 4], isInner: true },
      { name: 'conj by (13)', mapping: [0, 2, 1, 3, 5, 4], isInner: true },
      { name: 'conj by (23)', mapping: [0, 3, 2, 1, 4, 5], isInner: true },
      { name: 'conj by (123)', mapping: [0, 2, 3, 1, 4, 5], isInner: true },
      { name: 'conj by (132)', mapping: [0, 3, 1, 2, 4, 5], isInner: true },
    ],
  },
  Z: {
    groupName: 'ℤ',
    groupOrder: Infinity,
    autOrder: 2,
    innOrder: 1,
    outOrder: 2,
    autDescription: 'Aut(ℤ) = {id, -id} ≅ ℤ/2ℤ',
    innDescription: 'Inn(ℤ) = {id} (abelian group)',
    elements: ['...', '-2', '-1', '0', '1', '2', '...'],
    automorphisms: [
      { name: 'id', mapping: [0, 1, 2, 3, 4, 5, 6], isInner: true },
      { name: '-id', mapping: [6, 5, 4, 3, 2, 1, 0], isInner: false },
    ],
  },
};

export function AutomorphismDisplay() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof AUT_DATA>('Z6');
  const [selectedAut, setSelectedAut] = useState(0);

  const data = AUT_DATA[selectedGroup];
  const automorphism = data.automorphisms[selectedAut];

  // Count inner vs outer automorphisms
  const innerCount = data.automorphisms.filter(a => a.isInner).length;
  const outerCount = data.automorphisms.length - innerCount;

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Automorphism Groups: Aut(G), Inn(G), Out(G)
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group G:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(AUT_DATA).map(([key, d]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedGroup(key as keyof typeof AUT_DATA);
                setSelectedAut(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedGroup === key
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {d.groupName}
            </button>
          ))}
        </div>
      </div>

      {/* Group info */}
      <div className="mb-4 grid grid-cols-3 gap-3">
        <div className="p-3 bg-violet-500/10 rounded-lg border border-violet-500/30 text-center">
          <p className="text-xs text-dark-400">|Aut(G)|</p>
          <p className="text-2xl font-bold text-violet-400">{data.autOrder}</p>
        </div>
        <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30 text-center">
          <p className="text-xs text-dark-400">|Inn(G)|</p>
          <p className="text-2xl font-bold text-emerald-400">{data.innOrder}</p>
        </div>
        <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30 text-center">
          <p className="text-xs text-dark-400">|Out(G)|</p>
          <p className="text-2xl font-bold text-amber-400">{data.outOrder}</p>
        </div>
      </div>

      {/* Descriptions */}
      <div className="mb-4 space-y-2">
        <div className="p-2 bg-dark-800/50 rounded border border-dark-700/50">
          <p className="text-sm text-violet-400">{data.autDescription}</p>
        </div>
        <div className="p-2 bg-dark-800/50 rounded border border-dark-700/50">
          <p className="text-sm text-emerald-400">{data.innDescription}</p>
        </div>
      </div>

      {/* Automorphism selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Automorphism:</label>
        <div className="flex flex-wrap gap-2">
          {data.automorphisms.map((aut, i) => (
            <button
              key={i}
              onClick={() => setSelectedAut(i)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedAut === i
                  ? aut.isInner
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {aut.name}
              {aut.isInner && <span className="ml-1 text-xs text-emerald-400">(Inn)</span>}
              {!aut.isInner && <span className="ml-1 text-xs text-amber-400">(Out)</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Automorphism visualization */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-300 mb-2">
          {automorphism.name}: {data.groupName} → {data.groupName}
        </p>

        <svg viewBox="0 0 400 120" className="w-full bg-dark-950 rounded-lg">
          {/* Elements */}
          {data.elements.map((elem, i) => {
            const mappedIdx = automorphism.mapping[i];
            const x1 = 30 + (i * 340) / Math.max(data.elements.length - 1, 1);
            const x2 = 30 + (mappedIdx * 340) / Math.max(data.elements.length - 1, 1);

            return (
              <g key={i}>
                {/* Original element */}
                <circle
                  cx={x1}
                  cy={30}
                  r={14}
                  fill={automorphism.isInner ? '#10b98130' : '#fbbf2430'}
                  stroke={automorphism.isInner ? '#10b981' : '#fbbf24'}
                  strokeWidth={2}
                />
                <text
                  x={x1}
                  y={35}
                  textAnchor="middle"
                  fill={automorphism.isInner ? '#10b981' : '#fbbf24'}
                  fontSize={10}
                >
                  {elem}
                </text>

                {/* Arrow */}
                <motion.path
                  d={`M ${x1} 44 Q ${(x1 + x2) / 2} 65 ${x2} 76`}
                  fill="none"
                  stroke={automorphism.isInner ? '#10b981' : '#fbbf24'}
                  strokeWidth={1.5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                />

                {/* Target element */}
                <circle
                  cx={x1}
                  cy={90}
                  r={14}
                  fill="#1f293750"
                  stroke="#4b5563"
                  strokeWidth={2}
                />
                <text
                  x={x1}
                  y={95}
                  textAnchor="middle"
                  fill="#9ca3af"
                  fontSize={10}
                >
                  {data.elements[mappedIdx]}
                </text>
              </g>
            );
          })}
        </svg>

        <p className={`text-sm text-center mt-2 ${automorphism.isInner ? 'text-emerald-400' : 'text-amber-400'}`}>
          {automorphism.isInner ? '✓ Inner automorphism (conjugation)' : '✗ Outer automorphism'}
        </p>
      </div>

      {/* Exact sequence */}
      <div className="mb-4 p-3 bg-pink-500/10 rounded-lg border border-pink-500/30">
        <p className="text-sm text-pink-400 font-semibold mb-1">Short Exact Sequence</p>
        <p className="text-sm font-mono text-dark-200 text-center">
          1 → Inn(G) → Aut(G) → Out(G) → 1
        </p>
        <p className="text-xs text-dark-400 text-center mt-1">
          Out(G) = Aut(G) / Inn(G)
        </p>
      </div>

      {/* Key insight */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Facts:</strong> An automorphism is a bijective homomorphism G → G.
          Inner automorphisms come from conjugation: φ_g(x) = g⁻¹xg.
          Inn(G) ≅ G/Z(G). For cyclic groups, Aut(ℤ/nℤ) ≅ (ℤ/nℤ)*.
          A complete group has trivial center and no outer automorphisms.
        </p>
      </div>
    </div>
  );
}
