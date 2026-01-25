/**
 * Interactive Parity Checker for Permutations
 * Shows even/odd permutations and the alternating group
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Count inversions to determine parity
function countInversions(perm: number[]): number {
  let count = 0;
  for (let i = 0; i < perm.length; i++) {
    for (let j = i + 1; j < perm.length; j++) {
      if (perm[i] > perm[j]) count++;
    }
  }
  return count;
}

// Convert permutation to transposition decomposition
function toTranspositions(perm: number[]): [number, number][] {
  const n = perm.length;
  const result: [number, number][] = [];
  const working = [...perm];

  for (let i = 0; i < n; i++) {
    if (working[i] !== i) {
      // Find where i is
      const j = working.indexOf(i);
      // Swap
      [working[i], working[j]] = [working[j], working[i]];
      result.push([i, j]);
    }
  }
  return result;
}

// Get cycle notation
function toCycleNotation(perm: number[]): string {
  const n = perm.length;
  const visited = new Array(n).fill(false);
  const cycles: number[][] = [];

  for (let i = 0; i < n; i++) {
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
    if (cycle.length > 1) {
      cycles.push(cycle);
    }
  }

  if (cycles.length === 0) return 'e';
  return cycles.map(c => `(${c.join(' ')})`).join('');
}

export function ParityChecker() {
  const [n, setN] = useState(4);
  const [perm, setPerm] = useState<number[]>([1, 0, 3, 2]); // (12)(34)
  const [showAll, setShowAll] = useState(false);

  // Reset permutation when n changes
  const resetPerm = (newN: number) => {
    setPerm(Array.from({ length: newN }, (_, i) => i));
  };

  // Calculate parity
  const inversions = countInversions(perm);
  const isEven = inversions % 2 === 0;
  const transpositions = toTranspositions(perm);
  const cycleNotation = toCycleNotation(perm);

  // Generate all permutations of Sn (for small n)
  const allPerms = useMemo(() => {
    if (n > 4 || !showAll) return [];

    const perms: number[][] = [];
    const generate = (arr: number[], k: number) => {
      if (k === 1) {
        perms.push([...arr]);
        return;
      }
      for (let i = 0; i < k; i++) {
        generate(arr, k - 1);
        if (k % 2 === 0) {
          [arr[i], arr[k - 1]] = [arr[k - 1], arr[i]];
        } else {
          [arr[0], arr[k - 1]] = [arr[k - 1], arr[0]];
        }
      }
    };
    generate(Array.from({ length: n }, (_, i) => i), n);
    return perms;
  }, [n, showAll]);

  const evenPerms = allPerms.filter(p => countInversions(p) % 2 === 0);
  const oddPerms = allPerms.filter(p => countInversions(p) % 2 === 1);

  // Colors for elements
  const colors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#a855f7'];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Permutation Parity Checker
      </h4>

      {/* N selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">
          S_n with n = <span className="text-indigo-400 font-mono">{n}</span>
        </label>
        <input
          type="range"
          min={2}
          max={5}
          value={n}
          onChange={(e) => {
            const newN = Number(e.target.value);
            setN(newN);
            resetPerm(newN);
          }}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
      </div>

      {/* Permutation input */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-300 mb-2">Define permutation σ: i → σ(i)</p>
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: n }, (_, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-xs text-dark-500">{i + 1}</span>
              <span className="text-xs text-dark-500">↓</span>
              <select
                value={perm[i]}
                onChange={(e) => {
                  const newPerm = [...perm];
                  newPerm[i] = Number(e.target.value);
                  setPerm(newPerm);
                }}
                className="w-12 h-8 bg-dark-800 border border-dark-600 rounded text-center text-indigo-400 font-mono text-sm"
              >
                {Array.from({ length: n }, (_, j) => (
                  <option key={j} value={j}>{j + 1}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <p className="text-sm font-mono text-violet-400 mt-2">
          σ = {cycleNotation}
        </p>
      </div>

      {/* Visual representation */}
      <svg viewBox="0 0 400 120" className="w-full bg-dark-950 rounded-lg mb-4">
        {/* Top row: inputs */}
        {Array.from({ length: n }, (_, i) => (
          <g key={`top-${i}`}>
            <circle
              cx={50 + (i * 300) / Math.max(n - 1, 1)}
              cy={30}
              r={18}
              fill={colors[i % colors.length] + '40'}
              stroke={colors[i % colors.length]}
              strokeWidth={2}
            />
            <text
              x={50 + (i * 300) / Math.max(n - 1, 1)}
              y={35}
              textAnchor="middle"
              fill={colors[i % colors.length]}
              fontSize={14}
              fontWeight="bold"
            >
              {i + 1}
            </text>
          </g>
        ))}

        {/* Arrows */}
        {Array.from({ length: n }, (_, i) => {
          const x1 = 50 + (i * 300) / Math.max(n - 1, 1);
          const x2 = 50 + (perm[i] * 300) / Math.max(n - 1, 1);
          return (
            <motion.path
              key={`arrow-${i}`}
              d={`M ${x1} 48 Q ${(x1 + x2) / 2} 70 ${x2} 72`}
              fill="none"
              stroke={colors[i % colors.length]}
              strokeWidth={2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}

        {/* Bottom row: outputs */}
        {Array.from({ length: n }, (_, i) => (
          <g key={`bottom-${i}`}>
            <circle
              cx={50 + (i * 300) / Math.max(n - 1, 1)}
              cy={90}
              r={18}
              fill="#1f293750"
              stroke="#4b5563"
              strokeWidth={2}
            />
            <text
              x={50 + (i * 300) / Math.max(n - 1, 1)}
              y={95}
              textAnchor="middle"
              fill="#9ca3af"
              fontSize={14}
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>

      {/* Parity result */}
      <div className={`mb-4 p-4 rounded-lg border ${
        isEven
          ? 'bg-emerald-500/10 border-emerald-500/30'
          : 'bg-orange-500/10 border-orange-500/30'
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-lg font-bold ${isEven ? 'text-emerald-400' : 'text-orange-400'}`}>
              {isEven ? 'EVEN' : 'ODD'} Permutation
            </p>
            <p className="text-sm text-dark-300 mt-1">
              {isEven ? 'σ ∈ Aₙ (Alternating Group)' : 'σ ∉ Aₙ'}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-dark-400">Inversions: {inversions}</p>
            <p className="text-sm text-dark-400">Sign: {isEven ? '+1' : '-1'}</p>
          </div>
        </div>
      </div>

      {/* Transposition decomposition */}
      <div className="mb-4 p-3 bg-violet-500/10 rounded-lg border border-violet-500/30">
        <p className="text-sm text-violet-400 font-semibold mb-1">
          Transposition Decomposition:
        </p>
        <p className="text-sm font-mono text-dark-200">
          {transpositions.length === 0
            ? 'σ = e (identity, 0 transpositions)'
            : `σ = ${transpositions.map(([a, b]) => `(${a+1} ${b+1})`).join(' ')}`}
        </p>
        <p className="text-xs text-dark-400 mt-1">
          {transpositions.length} transposition{transpositions.length !== 1 ? 's' : ''} → {isEven ? 'even' : 'odd'}
        </p>
      </div>

      {/* Show all permutations toggle */}
      {n <= 4 && (
        <div className="mb-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              showAll
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
            }`}
          >
            {showAll ? 'Hide' : 'Show'} All Permutations
          </button>
        </div>
      )}

      {/* All permutations display */}
      {showAll && n <= 4 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 grid grid-cols-2 gap-3"
        >
          <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
            <p className="text-sm text-emerald-400 font-semibold mb-2">
              A_{n} (Even) - {evenPerms.length} elements
            </p>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {evenPerms.map((p, i) => (
                <p
                  key={i}
                  className={`text-xs font-mono cursor-pointer hover:bg-emerald-500/20 rounded px-1 ${
                    JSON.stringify(p) === JSON.stringify(perm) ? 'bg-emerald-500/30 text-emerald-300' : 'text-dark-300'
                  }`}
                  onClick={() => setPerm([...p])}
                >
                  {toCycleNotation(p)}
                </p>
              ))}
            </div>
          </div>
          <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/30">
            <p className="text-sm text-orange-400 font-semibold mb-2">
              S_{n} \ A_{n} (Odd) - {oddPerms.length} elements
            </p>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {oddPerms.map((p, i) => (
                <p
                  key={i}
                  className={`text-xs font-mono cursor-pointer hover:bg-orange-500/20 rounded px-1 ${
                    JSON.stringify(p) === JSON.stringify(perm) ? 'bg-orange-500/30 text-orange-300' : 'text-dark-300'
                  }`}
                  onClick={() => setPerm([...p])}
                >
                  {toCycleNotation(p)}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Key insight */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Facts:</strong> The sign homomorphism sgn: S_n → {'{±1}'} is well-defined.
          A_n = ker(sgn) has index 2 in S_n, so |A_n| = n!/2. Every permutation decomposes
          uniquely into disjoint cycles, and the parity equals the parity of (n - #cycles).
        </p>
      </div>
    </div>
  );
}
