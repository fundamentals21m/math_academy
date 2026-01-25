/**
 * Interactive Symmetric Group Visualizer
 * Demonstrates permutations and cycle notation
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Permutation as array: perm[i] = where i goes
function composePermutations(sigma: number[], tau: number[]): number[] {
  // (sigma ∘ tau)(i) = sigma(tau(i))
  return tau.map((t) => sigma[t]);
}

function inversePerm(perm: number[]): number[] {
  const inv = new Array(perm.length);
  perm.forEach((p, i) => {
    inv[p] = i;
  });
  return inv;
}

function permToCycles(perm: number[]): number[][] {
  const n = perm.length;
  const visited = new Array(n).fill(false);
  const cycles: number[][] = [];

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    if (perm[i] === i) {
      visited[i] = true;
      continue; // Skip fixed points
    }

    const cycle: number[] = [];
    let j = i;
    while (!visited[j]) {
      visited[j] = true;
      cycle.push(j + 1); // 1-indexed for display
      j = perm[j];
    }

    if (cycle.length > 1) {
      cycles.push(cycle);
    }
  }

  return cycles;
}

function cyclesToString(cycles: number[][]): string {
  if (cycles.length === 0) return 'e';
  return cycles.map((c) => `(${c.join(' ')})`).join('');
}

export function SymmetricGroupVisualizer() {
  const [n, setN] = useState(4);
  const [permA, setPermA] = useState<number[]>([1, 2, 3, 0]); // (1 2 3 4) in 0-indexed
  const [permB, setPermB] = useState<number[]>([1, 0, 2, 3]); // (1 2) in 0-indexed
  const [showComposition, setShowComposition] = useState(false);

  // Initialize permutations when n changes
  const resetPerms = (newN: number) => {
    setPermA(Array.from({ length: newN }, (_, i) => (i + 1) % newN)); // Cycle
    setPermB(newN >= 2 ? [1, 0, ...Array.from({ length: newN - 2 }, (_, i) => i + 2)] : [0]); // Transposition
  };

  // Compute compositions
  const composition = useMemo(() => composePermutations(permA, permB), [permA, permB]);
  const reverseComposition = useMemo(() => composePermutations(permB, permA), [permA, permB]);

  // Cycle notations
  const cyclesA = useMemo(() => permToCycles(permA), [permA]);
  const cyclesB = useMemo(() => permToCycles(permB), [permB]);
  const cyclesAB = useMemo(() => permToCycles(composition), [composition]);
  const cyclesBA = useMemo(() => permToCycles(reverseComposition), [reverseComposition]);

  // Check commutativity
  const commutes = cyclesToString(cyclesAB) === cyclesToString(cyclesBA);

  // Update a single position in permutation
  const updatePerm = (
    setPerm: React.Dispatch<React.SetStateAction<number[]>>,
    index: number,
    value: number
  ) => {
    setPerm((prev) => {
      const newPerm = [...prev];
      newPerm[index] = value;
      return newPerm;
    });
  };

  // Color for element
  const colors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#a855f7', '#ec4899'];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Symmetric Group S_n Visualizer
      </h4>

      {/* N selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">
          S_n with n = <span className="text-indigo-400 font-mono">{n}</span>
          <span className="text-dark-500 ml-2">(|S_n| = {Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1)})</span>
        </label>
        <input
          type="range"
          min={2}
          max={5}
          value={n}
          onChange={(e) => {
            const newN = Number(e.target.value);
            setN(newN);
            resetPerms(newN);
          }}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
      </div>

      {/* Permutation editors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Permutation A */}
        <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
          <p className="text-sm text-emerald-400 mb-2 font-semibold">σ (sigma):</p>
          <div className="flex gap-1 mb-2">
            {Array.from({ length: n }, (_, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xs text-dark-500">{i + 1}</span>
                <span className="text-xs text-dark-500">↓</span>
                <select
                  value={permA[i]}
                  onChange={(e) => updatePerm(setPermA, i, Number(e.target.value))}
                  className="w-10 h-8 bg-dark-800 border border-dark-600 rounded text-center text-emerald-400 font-mono text-sm"
                >
                  {Array.from({ length: n }, (_, j) => (
                    <option key={j} value={j}>{j + 1}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <p className="text-sm font-mono text-emerald-400">
            σ = {cyclesToString(cyclesA)}
          </p>
        </div>

        {/* Permutation B */}
        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
          <p className="text-sm text-blue-400 mb-2 font-semibold">τ (tau):</p>
          <div className="flex gap-1 mb-2">
            {Array.from({ length: n }, (_, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xs text-dark-500">{i + 1}</span>
                <span className="text-xs text-dark-500">↓</span>
                <select
                  value={permB[i]}
                  onChange={(e) => updatePerm(setPermB, i, Number(e.target.value))}
                  className="w-10 h-8 bg-dark-800 border border-dark-600 rounded text-center text-blue-400 font-mono text-sm"
                >
                  {Array.from({ length: n }, (_, j) => (
                    <option key={j} value={j}>{j + 1}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <p className="text-sm font-mono text-blue-400">
            τ = {cyclesToString(cyclesB)}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowComposition(!showComposition)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showComposition
              ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
          }`}
        >
          Show Composition
        </button>
      </div>

      {/* Composition results */}
      {showComposition && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 space-y-3"
        >
          <div className="p-3 bg-violet-500/10 rounded-lg border border-violet-500/30">
            <p className="text-sm text-violet-400">
              <strong>στ</strong> (σ after τ):
            </p>
            <p className="font-mono text-lg text-violet-400">
              {cyclesToString(cyclesA)} ∘ {cyclesToString(cyclesB)} = <span className="text-amber-400">{cyclesToString(cyclesAB)}</span>
            </p>
          </div>

          <div className="p-3 bg-pink-500/10 rounded-lg border border-pink-500/30">
            <p className="text-sm text-pink-400">
              <strong>τσ</strong> (τ after σ):
            </p>
            <p className="font-mono text-lg text-pink-400">
              {cyclesToString(cyclesB)} ∘ {cyclesToString(cyclesA)} = <span className="text-amber-400">{cyclesToString(cyclesBA)}</span>
            </p>
          </div>

          <div className={`p-3 rounded-lg border ${
            commutes
              ? 'bg-emerald-500/10 border-emerald-500/30'
              : 'bg-red-500/10 border-red-500/30'
          }`}>
            <p className={`text-sm ${commutes ? 'text-emerald-400' : 'text-red-400'}`}>
              {commutes
                ? '✓ These permutations commute: στ = τσ'
                : `✗ These do NOT commute: στ ≠ τσ (S_n is non-abelian for n ≥ 3)`}
            </p>
          </div>
        </motion.div>
      )}

      {/* Visual representation */}
      <svg viewBox="0 0 400 150" className="w-full bg-dark-950 rounded-lg">
        {/* Top row: original positions */}
        {Array.from({ length: n }, (_, i) => (
          <g key={`top-${i}`}>
            <circle
              cx={50 + (i * 300) / Math.max(n - 1, 1)}
              cy={40}
              r={20}
              fill={colors[i % colors.length] + '40'}
              stroke={colors[i % colors.length]}
              strokeWidth={2}
            />
            <text
              x={50 + (i * 300) / Math.max(n - 1, 1)}
              y={45}
              textAnchor="middle"
              fill={colors[i % colors.length]}
              fontSize={16}
              fontWeight="bold"
            >
              {i + 1}
            </text>
          </g>
        ))}

        {/* Arrows showing permutation A */}
        {Array.from({ length: n }, (_, i) => {
          const x1 = 50 + (i * 300) / Math.max(n - 1, 1);
          const x2 = 50 + (permA[i] * 300) / Math.max(n - 1, 1);
          return (
            <motion.path
              key={`arrow-${i}`}
              d={`M ${x1} 60 Q ${(x1 + x2) / 2} 90 ${x2} 110`}
              fill="none"
              stroke="#10b981"
              strokeWidth={2}
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
            />
          );
        })}

        {/* Arrow marker */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
          </marker>
        </defs>

        {/* Bottom row: where elements go */}
        {Array.from({ length: n }, (_, i) => (
          <g key={`bottom-${i}`}>
            <circle
              cx={50 + (i * 300) / Math.max(n - 1, 1)}
              cy={130}
              r={20}
              fill="#1f293740"
              stroke="#4b5563"
              strokeWidth={2}
            />
            <text
              x={50 + (i * 300) / Math.max(n - 1, 1)}
              y={135}
              textAnchor="middle"
              fill="#9ca3af"
              fontSize={14}
            >
              {i + 1}
            </text>
          </g>
        ))}

        {/* Label */}
        <text x={200} y={95} textAnchor="middle" fill="#6b7280" fontSize={12}>
          σ maps each element
        </text>
      </svg>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Cycle Notation:</strong> A permutation is written as a product of disjoint cycles.
          The order of a permutation equals the LCM of its cycle lengths. S_n has n! elements and
          is non-abelian for n ≥ 3.
        </p>
      </div>
    </div>
  );
}
