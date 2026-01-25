/**
 * Interactive Composition Series Visualizer
 * Shows composition series and factor groups
 */
import { useState } from 'react';
import { motion } from 'framer-motion';

interface SeriesData {
  name: string;
  series: string[];
  factors: string[];
  isComposition: boolean;
  description: string;
}

const SERIES_EXAMPLES: Record<string, SeriesData> = {
  S3: {
    name: 'S₃',
    series: ['S₃', 'A₃', '{e}'],
    factors: ['ℤ/2ℤ', 'ℤ/3ℤ'],
    isComposition: true,
    description: 'S₃ has a unique composition series. The factors ℤ/2ℤ and ℤ/3ℤ are simple.',
  },
  S4: {
    name: 'S₄',
    series: ['S₄', 'A₄', 'V₄', '⟨(12)(34)⟩', '{e}'],
    factors: ['ℤ/2ℤ', 'ℤ/3ℤ', 'ℤ/2ℤ', 'ℤ/2ℤ'],
    isComposition: true,
    description: 'S₄ composition series passes through A₄ and the Klein four-group V₄.',
  },
  Z12: {
    name: 'ℤ/12ℤ',
    series: ['ℤ/12ℤ', '⟨2⟩', '⟨4⟩', '{0}'],
    factors: ['ℤ/2ℤ', 'ℤ/3ℤ', 'ℤ/2ℤ'],
    isComposition: true,
    description: 'Cyclic groups have composition factors that are cyclic of prime order.',
  },
  D8: {
    name: 'D₈',
    series: ['D₈', '⟨r⟩', '⟨r²⟩', '{e}'],
    factors: ['ℤ/2ℤ', 'ℤ/2ℤ', 'ℤ/2ℤ'],
    isComposition: true,
    description: 'D₈ (dihedral group of order 8) has composition factors all isomorphic to ℤ/2ℤ.',
  },
  A5: {
    name: 'A₅',
    series: ['A₅', '{e}'],
    factors: ['A₅'],
    isComposition: true,
    description: 'A₅ is simple! It has no proper normal subgroups, so the composition series is trivial.',
  },
};

export function CompositionSeriesVisualizer() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof SERIES_EXAMPLES>('S3');
  const [showFactors, setShowFactors] = useState(true);

  const data = SERIES_EXAMPLES[selectedGroup];

  // Colors for the chain
  const chainColors = ['#3b82f6', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#ef4444'];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Composition Series Visualizer
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(SERIES_EXAMPLES).map(([key, g]) => (
            <button
              key={key}
              onClick={() => setSelectedGroup(key as keyof typeof SERIES_EXAMPLES)}
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

      {/* Toggle factors */}
      <div className="mb-4">
        <button
          onClick={() => setShowFactors(!showFactors)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showFactors
              ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
          }`}
        >
          {showFactors ? 'Hide' : 'Show'} Factor Groups
        </button>
      </div>

      {/* Series visualization */}
      <div className="mb-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-300 mb-3">Composition Series:</p>

        <svg viewBox="0 0 400 300" className="w-full bg-dark-950 rounded-lg">
          {/* Draw the chain */}
          {data.series.map((group, i) => {
            const y = 30 + i * 60;
            const color = chainColors[i % chainColors.length];

            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Group node */}
                <rect
                  x={140}
                  y={y}
                  width={120}
                  height={40}
                  rx={8}
                  fill={color + '30'}
                  stroke={color}
                  strokeWidth={2}
                />
                <text
                  x={200}
                  y={y + 25}
                  textAnchor="middle"
                  fill={color}
                  fontSize={14}
                  fontWeight="bold"
                >
                  {group}
                </text>

                {/* Normal subgroup symbol */}
                {i < data.series.length - 1 && (
                  <>
                    <line
                      x1={200}
                      y1={y + 40}
                      x2={200}
                      y2={y + 60}
                      stroke="#6b7280"
                      strokeWidth={2}
                    />
                    <text
                      x={210}
                      y={y + 55}
                      fill="#6b7280"
                      fontSize={10}
                    >
                      ⊵
                    </text>
                  </>
                )}

                {/* Factor group */}
                {showFactors && i < data.factors.length && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 + 0.1 }}
                  >
                    <rect
                      x={280}
                      y={y + 25}
                      width={100}
                      height={30}
                      rx={6}
                      fill="#22c55e20"
                      stroke="#22c55e"
                      strokeWidth={1}
                    />
                    <text
                      x={330}
                      y={y + 45}
                      textAnchor="middle"
                      fill="#22c55e"
                      fontSize={12}
                    >
                      {data.factors[i]}
                    </text>
                    <line
                      x1={260}
                      y1={y + 40}
                      x2={280}
                      y2={y + 40}
                      stroke="#22c55e"
                      strokeWidth={1}
                      strokeDasharray="3,3"
                    />
                  </motion.g>
                )}
              </motion.g>
            );
          })}

          {/* Legend */}
          <text x={20} y={290} fill="#6b7280" fontSize={10}>
            ⊵ = normal subgroup
          </text>
          {showFactors && (
            <text x={150} y={290} fill="#22c55e" fontSize={10}>
              Green = simple factor groups
            </text>
          )}
        </svg>
      </div>

      {/* Jordan-Hölder info */}
      <div className="mb-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-sm text-amber-400 font-semibold mb-1">
          Jordan-Hölder Theorem
        </p>
        <p className="text-sm text-dark-300">
          The composition factors (up to reordering) are uniquely determined by G.
        </p>
        <p className="text-sm text-dark-400 mt-2">
          Factors for {data.name}: {data.factors.join(' × ')}
        </p>
      </div>

      {/* Description */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-300">{data.description}</p>
      </div>

      {/* Simple group note */}
      {selectedGroup === 'A5' && (
        <div className="mb-4 p-3 bg-red-500/10 rounded-lg border border-red-500/30">
          <p className="text-sm text-red-400">
            <strong>A₅ is Simple!</strong> The alternating group A₅ (order 60) is the smallest
            non-abelian simple group. It has no proper normal subgroups.
          </p>
        </div>
      )}

      {/* Key insight */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Insight:</strong> A composition series is a maximal chain of normal subgroups
          where each factor G_i/G_{'{i+1}'} is simple. The series reveals the "building blocks" of the group.
          Solvable groups have only abelian (cyclic of prime order) composition factors.
        </p>
      </div>
    </div>
  );
}
