/**
 * Interactive Simple Group Checker
 * Demonstrates simplicity of An and classification of simple groups
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Factorial
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

interface GroupInfo {
  name: string;
  order: number;
  isSimple: boolean;
  reason: string;
  normalSubgroups: string[];
}

const GROUPS: Record<string, GroupInfo> = {
  A3: {
    name: 'A₃',
    order: 3,
    isSimple: true,
    reason: 'Cyclic of prime order',
    normalSubgroups: ['{e}', 'A₃'],
  },
  A4: {
    name: 'A₄',
    order: 12,
    isSimple: false,
    reason: 'V₄ (Klein four-group) is a normal subgroup',
    normalSubgroups: ['{e}', 'V₄', 'A₄'],
  },
  A5: {
    name: 'A₅',
    order: 60,
    isSimple: true,
    reason: 'Smallest non-abelian simple group. No proper normal subgroups.',
    normalSubgroups: ['{e}', 'A₅'],
  },
  A6: {
    name: 'A₆',
    order: 360,
    isSimple: true,
    reason: 'An is simple for all n ≥ 5',
    normalSubgroups: ['{e}', 'A₆'],
  },
  S3: {
    name: 'S₃',
    order: 6,
    isSimple: false,
    reason: 'A₃ is a normal subgroup (index 2)',
    normalSubgroups: ['{e}', 'A₃', 'S₃'],
  },
  S4: {
    name: 'S₄',
    order: 24,
    isSimple: false,
    reason: 'A₄ is normal (index 2), and V₄ ⊲ A₄ ⊲ S₄',
    normalSubgroups: ['{e}', 'V₄', 'A₄', 'S₄'],
  },
  Z5: {
    name: 'ℤ/5ℤ',
    order: 5,
    isSimple: true,
    reason: 'Cyclic of prime order (no proper subgroups at all)',
    normalSubgroups: ['{e}', 'ℤ/5ℤ'],
  },
  Z6: {
    name: 'ℤ/6ℤ',
    order: 6,
    isSimple: false,
    reason: 'Has proper subgroups ⟨2⟩ and ⟨3⟩ (all subgroups normal in abelian groups)',
    normalSubgroups: ['{0}', '⟨3⟩', '⟨2⟩', 'ℤ/6ℤ'],
  },
};

export function SimpleGroupChecker() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof GROUPS>('A5');
  const [showClassification, setShowClassification] = useState(false);

  const group = GROUPS[selectedGroup];

  // Compute An orders and simplicity
  const anData = useMemo(() => {
    return [3, 4, 5, 6, 7].map(n => ({
      n,
      order: factorial(n) / 2,
      isSimple: n >= 5 || n === 3,
    }));
  }, []);

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Simple Groups & Simplicity of Aₙ
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(GROUPS).map(([key, g]) => (
            <button
              key={key}
              onClick={() => setSelectedGroup(key as keyof typeof GROUPS)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedGroup === key
                  ? g.isSimple
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>
      </div>

      {/* Simplicity result */}
      <motion.div
        key={selectedGroup}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-4 p-4 rounded-lg border ${
          group.isSimple
            ? 'bg-emerald-500/10 border-emerald-500/30'
            : 'bg-orange-500/10 border-orange-500/30'
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-xl font-bold ${group.isSimple ? 'text-emerald-400' : 'text-orange-400'}`}>
              {group.name} is {group.isSimple ? 'SIMPLE' : 'NOT SIMPLE'}
            </p>
            <p className="text-sm text-dark-300 mt-1">|{group.name}| = {group.order}</p>
          </div>
          <div className={`text-5xl ${group.isSimple ? 'text-emerald-400' : 'text-orange-400'}`}>
            {group.isSimple ? '✓' : '✗'}
          </div>
        </div>
        <p className="text-sm text-dark-300 mt-3">{group.reason}</p>
      </motion.div>

      {/* Normal subgroups lattice */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-300 mb-2">Normal Subgroups:</p>
        <svg viewBox="0 0 400 120" className="w-full bg-dark-950 rounded-lg">
          {group.normalSubgroups.map((sg, i) => {
            const n = group.normalSubgroups.length;
            const y = 100 - (i / (n - 1)) * 80;
            const isProper = i > 0 && i < n - 1;

            return (
              <motion.g
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Node */}
                <rect
                  x={160}
                  y={y - 15}
                  width={80}
                  height={30}
                  rx={6}
                  fill={isProper ? '#f9730840' : '#6366f140'}
                  stroke={isProper ? '#f97308' : '#6366f1'}
                  strokeWidth={2}
                />
                <text
                  x={200}
                  y={y + 4}
                  textAnchor="middle"
                  fill={isProper ? '#f97308' : '#6366f1'}
                  fontSize={12}
                >
                  {sg}
                </text>

                {/* Connection line */}
                {i > 0 && (
                  <line
                    x1={200}
                    y1={y + 15}
                    x2={200}
                    y2={100 - ((i - 1) / (n - 1)) * 80 - 15}
                    stroke="#4b5563"
                    strokeWidth={1}
                  />
                )}
              </motion.g>
            );
          })}

          {/* Label for proper normal subgroups */}
          {group.normalSubgroups.length > 2 && (
            <text x={260} y={60} fill="#f97308" fontSize={10}>
              ← proper normal
            </text>
          )}
        </svg>
        <p className="text-xs text-dark-400 text-center mt-2">
          Simple iff only normal subgroups are {'{e}'} and G itself
        </p>
      </div>

      {/* An simplicity table */}
      <div className="mb-4">
        <button
          onClick={() => setShowClassification(!showClassification)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showClassification
              ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
          }`}
        >
          {showClassification ? 'Hide' : 'Show'} Aₙ Simplicity Table
        </button>
      </div>

      {showClassification && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 p-3 bg-violet-500/10 rounded-lg border border-violet-500/30"
        >
          <p className="text-sm text-violet-400 font-semibold mb-2">
            Alternating Groups Aₙ
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-dark-400">
                <th className="text-left py-1">n</th>
                <th className="text-left py-1">|Aₙ|</th>
                <th className="text-left py-1">Simple?</th>
                <th className="text-left py-1">Notes</th>
              </tr>
            </thead>
            <tbody>
              {anData.map(({ n, order, isSimple }) => (
                <tr key={n} className="border-t border-dark-700">
                  <td className="py-1 text-indigo-400">{n}</td>
                  <td className="py-1 text-dark-300">{order}</td>
                  <td className={`py-1 ${isSimple ? 'text-emerald-400' : 'text-orange-400'}`}>
                    {isSimple ? 'Yes' : 'No'}
                  </td>
                  <td className="py-1 text-xs text-dark-400">
                    {n === 3 && 'Cyclic of prime order'}
                    {n === 4 && 'V₄ is normal'}
                    {n >= 5 && 'Proven simple'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {/* Classification of finite simple groups teaser */}
      <div className="mb-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-sm text-amber-400 font-semibold mb-1">
          Classification of Finite Simple Groups
        </p>
        <p className="text-sm text-dark-300">
          Every finite simple group is one of:
        </p>
        <ul className="text-sm text-dark-300 mt-1 list-disc list-inside">
          <li>Cyclic groups ℤ/pℤ (p prime)</li>
          <li>Alternating groups Aₙ (n ≥ 5)</li>
          <li>Groups of Lie type (families of matrix groups)</li>
          <li>26 sporadic groups (including the Monster)</li>
        </ul>
      </div>

      {/* Key insight */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Proof Sketch (Aₙ simple for n ≥ 5):</strong> The key is that Aₙ is generated
          by 3-cycles, and all 3-cycles are conjugate in Aₙ. Any normal subgroup containing a
          3-cycle must contain all 3-cycles, hence equals Aₙ. For n ≥ 5, every element of Aₙ
          is a product of 3-cycles, so Aₙ has no proper normal subgroups.
        </p>
      </div>
    </div>
  );
}
