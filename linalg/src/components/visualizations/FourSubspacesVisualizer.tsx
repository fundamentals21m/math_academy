import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

type Matrix = number[][];

function computeSubspaces(matrix: Matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Compute RREF
  const rref = matrix.map(r => [...r]);
  let pivotCols: number[] = [];
  let pivotRow = 0;

  for (let col = 0; col < cols && pivotRow < rows; col++) {
    // Find max in column
    let maxRow = pivotRow;
    for (let row = pivotRow + 1; row < rows; row++) {
      if (Math.abs(rref[row][col]) > Math.abs(rref[maxRow][col])) {
        maxRow = row;
      }
    }

    if (Math.abs(rref[maxRow][col]) < 1e-10) continue;

    // Swap rows
    [rref[pivotRow], rref[maxRow]] = [rref[maxRow], rref[pivotRow]];

    // Scale pivot to 1
    const scale = rref[pivotRow][col];
    for (let j = 0; j < cols; j++) {
      rref[pivotRow][j] /= scale;
    }

    // Eliminate
    for (let row = 0; row < rows; row++) {
      if (row !== pivotRow && Math.abs(rref[row][col]) > 1e-10) {
        const factor = rref[row][col];
        for (let j = 0; j < cols; j++) {
          rref[row][j] -= factor * rref[pivotRow][j];
        }
      }
    }

    pivotCols.push(col);
    pivotRow++;
  }

  const rank = pivotCols.length;
  const freeCols = [];
  for (let j = 0; j < cols; j++) {
    if (!pivotCols.includes(j)) freeCols.push(j);
  }

  // Compute nullspace basis
  const nullspaceBasis: number[][] = [];
  for (const freeCol of freeCols) {
    const vec = new Array(cols).fill(0);
    vec[freeCol] = 1;
    for (let i = 0; i < pivotCols.length; i++) {
      vec[pivotCols[i]] = -rref[i][freeCol];
    }
    nullspaceBasis.push(vec);
  }

  // Column space basis (pivot columns of original matrix)
  const colSpaceBasis = pivotCols.map(j => matrix.map(row => row[j]));

  // Row space basis (nonzero rows of RREF)
  const rowSpaceBasis = rref.slice(0, rank);

  return {
    rank,
    nullity: cols - rank,
    colSpaceBasis,
    rowSpaceBasis,
    nullspaceBasis,
    leftNullity: rows - rank,
    rref,
  };
}

const PRESETS = [
  {
    name: '3×3 Full Rank',
    matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 10]],
  },
  {
    name: '3×3 Rank 2',
    matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
  },
  {
    name: '2×3 Wide',
    matrix: [[1, 2, 1], [2, 4, 3]],
  },
  {
    name: '3×2 Tall',
    matrix: [[1, 2], [3, 4], [5, 6]],
  },
];

function VectorList({ vectors, color, label }: { vectors: number[][]; color: string; label: string }) {
  if (vectors.length === 0) {
    return (
      <div className="text-dark-400 text-sm">
        {label}: <span className="text-dark-500">only zero vector</span>
      </div>
    );
  }

  return (
    <div>
      <div className="text-dark-400 text-sm mb-1">{label}:</div>
      <div className="flex flex-wrap gap-2">
        {vectors.map((vec, i) => (
          <span key={i} className="font-mono text-sm px-2 py-1 rounded" style={{ color, backgroundColor: `${color}20` }}>
            [{vec.map(v => v.toFixed(1).replace(/\.0$/, '')).join(', ')}]
          </span>
        ))}
      </div>
    </div>
  );
}

export function FourSubspacesVisualizer({ className = '' }: Props) {
  const [selectedPreset, setSelectedPreset] = useState(0);

  const matrix = PRESETS[selectedPreset].matrix;
  const subspaces = useMemo(() => computeSubspaces(matrix), [selectedPreset]);

  const rows = matrix.length;
  const cols = matrix[0].length;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Four Fundamental Subspaces</h3>

      <p className="text-dark-300 mb-6">
        Every matrix A has four fundamental subspaces. The <span className="text-blue-400">column space</span> and{' '}
        <span className="text-emerald-400">row space</span> have dimension = rank. The{' '}
        <span className="text-purple-400">nullspace</span> and <span className="text-orange-400">left nullspace</span> are
        their orthogonal complements.
      </p>

      {/* Preset selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {PRESETS.map((preset, i) => (
          <button
            key={i}
            onClick={() => setSelectedPreset(i)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedPreset === i
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Matrix display */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <div className="text-center mb-2 text-dark-400 text-sm">Matrix A ({rows}×{cols})</div>
        <div className="flex justify-center">
          <div className="inline-flex items-center">
            <span className="text-dark-400 text-2xl">[</span>
            <div className="flex flex-col gap-1 px-2">
              {matrix.map((row, i) => (
                <div key={i} className="flex gap-4">
                  {row.map((val, j) => (
                    <span key={j} className="w-8 text-center font-mono text-dark-200">{val}</span>
                  ))}
                </div>
              ))}
            </div>
            <span className="text-dark-400 text-2xl">]</span>
          </div>
        </div>
      </div>

      {/* Dimension summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <motion.div
          className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <div className="text-blue-400 text-2xl font-bold">{subspaces.rank}</div>
          <div className="text-dark-400 text-xs">C(A) dim</div>
          <div className="text-blue-400 text-xs">in ℝ^{rows}</div>
        </motion.div>
        <motion.div
          className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-emerald-400 text-2xl font-bold">{subspaces.rank}</div>
          <div className="text-dark-400 text-xs">C(Aᵀ) dim</div>
          <div className="text-emerald-400 text-xs">in ℝ^{cols}</div>
        </motion.div>
        <motion.div
          className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-purple-400 text-2xl font-bold">{subspaces.nullity}</div>
          <div className="text-dark-400 text-xs">N(A) dim</div>
          <div className="text-purple-400 text-xs">in ℝ^{cols}</div>
        </motion.div>
        <motion.div
          className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-orange-400 text-2xl font-bold">{subspaces.leftNullity}</div>
          <div className="text-dark-400 text-xs">N(Aᵀ) dim</div>
          <div className="text-orange-400 text-xs">in ℝ^{rows}</div>
        </motion.div>
      </div>

      {/* Subspace bases */}
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <VectorList
            vectors={subspaces.colSpaceBasis}
            color="#3b82f6"
            label="Column Space C(A) basis"
          />
        </div>
        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <VectorList
            vectors={subspaces.rowSpaceBasis}
            color="#10b981"
            label="Row Space C(Aᵀ) basis"
          />
        </div>
        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <VectorList
            vectors={subspaces.nullspaceBasis}
            color="#a855f7"
            label="Nullspace N(A) basis"
          />
        </div>
      </div>

      {/* Key theorem */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30"
      >
        <p className="text-dark-300 text-sm">
          <strong className="text-yellow-400">Fundamental Theorem:</strong> For an m×n matrix of rank r:
          <br />• dim(C(A)) = dim(C(Aᵀ)) = r (rank)
          <br />• dim(N(A)) = n - r (nullity)
          <br />• dim(N(Aᵀ)) = m - r (left nullity)
          <br />• C(A) ⊥ N(Aᵀ) and C(Aᵀ) ⊥ N(A)
        </p>
      </motion.div>
    </div>
  );
}
