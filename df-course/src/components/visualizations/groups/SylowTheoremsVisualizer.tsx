/**
 * Interactive Sylow Theorems Visualizer
 * Demonstrates Sylow theorems and p-subgroup counting
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Factor a number into prime powers
function factorize(n: number): Map<number, number> {
  const factors = new Map<number, number>();
  let d = 2;
  while (d * d <= n) {
    while (n % d === 0) {
      factors.set(d, (factors.get(d) || 0) + 1);
      n /= d;
    }
    d++;
  }
  if (n > 1) factors.set(n, 1);
  return factors;
}

// Get divisors of n that are ≡ 1 (mod p)
function sylowDivisors(n: number, p: number): number[] {
  const divisors: number[] = [];
  for (let d = 1; d <= n; d++) {
    if (n % d === 0 && d % p === 1) {
      divisors.push(d);
    }
  }
  return divisors;
}

interface GroupExample {
  name: string;
  order: number;
  sylowData: { p: number; pk: number; np: number; subgroups: string[] }[];
}

const EXAMPLES: Record<string, GroupExample> = {
  S3: {
    name: 'S₃',
    order: 6,
    sylowData: [
      { p: 2, pk: 2, np: 3, subgroups: ['⟨(12)⟩', '⟨(13)⟩', '⟨(23)⟩'] },
      { p: 3, pk: 3, np: 1, subgroups: ['A₃ = ⟨(123)⟩'] },
    ],
  },
  A4: {
    name: 'A₄',
    order: 12,
    sylowData: [
      { p: 2, pk: 4, np: 1, subgroups: ['V₄ (Klein four-group)'] },
      { p: 3, pk: 3, np: 4, subgroups: ['⟨(123)⟩', '⟨(124)⟩', '⟨(134)⟩', '⟨(234)⟩'] },
    ],
  },
  S4: {
    name: 'S₄',
    order: 24,
    sylowData: [
      { p: 2, pk: 8, np: 3, subgroups: ['D₈ (3 copies, fixing vertices)'] },
      { p: 3, pk: 3, np: 4, subgroups: ['⟨(123)⟩', '⟨(124)⟩', '⟨(134)⟩', '⟨(234)⟩'] },
    ],
  },
  Z12: {
    name: 'ℤ/12ℤ',
    order: 12,
    sylowData: [
      { p: 2, pk: 4, np: 1, subgroups: ['⟨3⟩ = {0, 3, 6, 9}'] },
      { p: 3, pk: 3, np: 1, subgroups: ['⟨4⟩ = {0, 4, 8}'] },
    ],
  },
  D12: {
    name: 'D₁₂',
    order: 24,
    sylowData: [
      { p: 2, pk: 8, np: 3, subgroups: ['D₈ subgroups (3 total)'] },
      { p: 3, pk: 3, np: 1, subgroups: ['⟨r⁴⟩ (unique, hence normal)'] },
    ],
  },
};

export function SylowTheoremsVisualizer() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof EXAMPLES>('S3');
  const [selectedPrime, setSelectedPrime] = useState(0);

  const group = EXAMPLES[selectedGroup];
  const factors = factorize(group.order);
  const primes = Array.from(factors.keys());

  // Get Sylow data for selected prime
  const sylowInfo = group.sylowData[selectedPrime];
  const p = sylowInfo?.p || primes[0];

  // Compute allowed values of n_p
  const allowedNp = useMemo(() => {
    if (!sylowInfo) return [];
    const { p, pk } = sylowInfo;
    const m = group.order / pk;
    return sylowDivisors(m, p);
  }, [group.order, sylowInfo]);

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Sylow Theorems Visualizer
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group G:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(EXAMPLES).map(([key, g]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedGroup(key as keyof typeof EXAMPLES);
                setSelectedPrime(0);
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

      {/* Prime factorization */}
      <div className="mb-4 p-3 bg-violet-500/10 rounded-lg border border-violet-500/30">
        <p className="text-sm text-violet-400 font-semibold mb-1">Prime Factorization</p>
        <p className="text-lg font-mono text-dark-200">
          |{group.name}| = {group.order} = {
            Array.from(factors.entries())
              .map(([p, e]) => e === 1 ? `${p}` : `${p}^${e}`)
              .join(' × ')
          }
        </p>
      </div>

      {/* Prime selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Prime p:</label>
        <div className="flex gap-2">
          {group.sylowData.map((data, i) => (
            <button
              key={i}
              onClick={() => setSelectedPrime(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPrime === i
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              p = {data.p}
            </button>
          ))}
        </div>
      </div>

      {/* Sylow theorems display */}
      {sylowInfo && (
        <motion.div
          key={selectedPrime}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {/* Sylow 1 */}
          <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <p className="text-sm text-blue-400 font-semibold mb-1">Sylow 1 (Existence)</p>
            <p className="text-sm text-dark-200">
              G has a subgroup of order p^k = {sylowInfo.pk} where p^k || |G|
            </p>
            <p className="text-xs text-dark-400 mt-1">
              (p^k exactly divides |G|)
            </p>
          </div>

          {/* Sylow 2 */}
          <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
            <p className="text-sm text-amber-400 font-semibold mb-1">Sylow 2 (Conjugacy)</p>
            <p className="text-sm text-dark-200">
              All Sylow {sylowInfo.p}-subgroups are conjugate (form a single orbit under conjugation)
            </p>
          </div>

          {/* Sylow 3 */}
          <div className="p-3 bg-pink-500/10 rounded-lg border border-pink-500/30">
            <p className="text-sm text-pink-400 font-semibold mb-1">Sylow 3 (Counting)</p>
            <p className="text-sm text-dark-200">
              n_{sylowInfo.p} ≡ 1 (mod {sylowInfo.p}) and n_{sylowInfo.p} | {group.order / sylowInfo.pk}
            </p>
            <p className="text-sm text-dark-300 mt-2">
              Allowed values: n_{sylowInfo.p} ∈ {'{'}{ allowedNp.join(', ') }{'}'}
            </p>
            <p className="text-sm font-semibold text-emerald-400 mt-1">
              Actual: n_{sylowInfo.p} = {sylowInfo.np}
            </p>
          </div>

          {/* Sylow subgroups */}
          <div className="p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
            <p className="text-sm text-dark-300 mb-2">
              Sylow {sylowInfo.p}-subgroups (order {sylowInfo.pk}):
            </p>
            <div className="flex flex-wrap gap-2">
              {sylowInfo.subgroups.map((sg, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-3 py-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30"
                >
                  <p className="text-sm font-mono text-emerald-400">{sg}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Normal subgroup check */}
          <div className={`p-3 rounded-lg border ${
            sylowInfo.np === 1
              ? 'bg-emerald-500/10 border-emerald-500/30'
              : 'bg-orange-500/10 border-orange-500/30'
          }`}>
            <p className={`text-sm font-semibold ${sylowInfo.np === 1 ? 'text-emerald-400' : 'text-orange-400'}`}>
              {sylowInfo.np === 1
                ? `✓ n_${sylowInfo.p} = 1, so the Sylow ${sylowInfo.p}-subgroup is NORMAL`
                : `✗ n_${sylowInfo.p} > 1, so Sylow ${sylowInfo.p}-subgroups are NOT normal`}
            </p>
          </div>
        </motion.div>
      )}

      {/* Visual representation */}
      {sylowInfo && (
        <svg viewBox="0 0 400 150" className="w-full bg-dark-950 rounded-lg mt-4">
          {/* G circle */}
          <circle cx={200} cy={75} r={60} fill="#3b82f610" stroke="#3b82f6" strokeWidth={2} />
          <text x={200} y={20} textAnchor="middle" fill="#3b82f6" fontSize={14} fontWeight="bold">
            G = {group.name}
          </text>

          {/* Sylow subgroups */}
          {Array.from({ length: Math.min(sylowInfo.np, 5) }, (_, i) => {
            const angle = (i / sylowInfo.np) * 2 * Math.PI - Math.PI / 2;
            const cx = 200 + (sylowInfo.np > 1 ? 25 * Math.cos(angle) : 0);
            const cy = 75 + (sylowInfo.np > 1 ? 25 * Math.sin(angle) : 0);
            const r = sylowInfo.np === 1 ? 35 : 20;

            return (
              <motion.g
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="#10b98130"
                  stroke="#10b981"
                  strokeWidth={2}
                />
                <text
                  x={cx}
                  y={cy + 4}
                  textAnchor="middle"
                  fill="#10b981"
                  fontSize={10}
                >
                  P_{i + 1}
                </text>
              </motion.g>
            );
          })}

          {sylowInfo.np > 5 && (
            <text x={200} y={140} textAnchor="middle" fill="#6b7280" fontSize={10}>
              ({sylowInfo.np} Sylow {sylowInfo.p}-subgroups total)
            </text>
          )}

          {/* Label */}
          <text x={330} y={75} fill="#10b981" fontSize={11}>
            |P| = {sylowInfo.pk}
          </text>
          <text x={330} y={90} fill="#9ca3af" fontSize={10}>
            n_{sylowInfo.p} = {sylowInfo.np}
          </text>
        </svg>
      )}

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Application:</strong> If |G| = p^a·m with gcd(p,m)=1, and the only d | m
          with d ≡ 1 (mod p) is d=1, then n_p = 1 and G has a normal Sylow p-subgroup.
          This is a powerful tool for proving groups are not simple.
        </p>
      </div>
    </div>
  );
}
