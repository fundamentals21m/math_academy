import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

type Matrix = number[][];

function formatNumber(n: number): string {
  if (Number.isInteger(n)) return n.toString();
  return n.toFixed(2).replace(/\.?0+$/, '');
}

function MatrixDisplay({ matrix, highlight, label }: {
  matrix: Matrix;
  highlight?: { row: number; col: number }[];
  label?: string;
}) {
  return (
    <div className="inline-block">
      {label && <div className="text-xs text-dark-400 mb-1 text-center">{label}</div>}
      <div className="flex items-center">
        <span className="text-dark-400 text-2xl">[</span>
        <div className="flex flex-col gap-1 px-2">
          {matrix.map((row, i) => (
            <div key={i} className="flex gap-3">
              {row.map((val, j) => {
                const isHighlight = highlight?.some(h => h.row === i && h.col === j);
                return (
                  <motion.span
                    key={j}
                    className={`w-10 text-center font-mono ${
                      isHighlight ? 'text-yellow-400 font-bold' : 'text-dark-200'
                    }`}
                    animate={isHighlight ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {formatNumber(val)}
                  </motion.span>
                );
              })}
            </div>
          ))}
        </div>
        <span className="text-dark-400 text-2xl">]</span>
      </div>
    </div>
  );
}

interface Step {
  matrix: Matrix;
  operation: string;
  highlight: { row: number; col: number }[];
}

function computeEliminationSteps(initial: Matrix): Step[] {
  const steps: Step[] = [];
  const m = initial.map(row => [...row]); // Deep copy
  const rows = m.length;
  const cols = m[0].length;

  steps.push({
    matrix: m.map(r => [...r]),
    operation: 'Start with augmented matrix [A | b]',
    highlight: [],
  });

  let pivotCol = 0;

  for (let row = 0; row < rows && pivotCol < cols - 1; row++) {
    // Find pivot
    let maxRow = row;
    for (let i = row + 1; i < rows; i++) {
      if (Math.abs(m[i][pivotCol]) > Math.abs(m[maxRow][pivotCol])) {
        maxRow = i;
      }
    }

    if (Math.abs(m[maxRow][pivotCol]) < 1e-10) {
      pivotCol++;
      row--;
      continue;
    }

    // Swap rows if needed
    if (maxRow !== row) {
      [m[row], m[maxRow]] = [m[maxRow], m[row]];
      steps.push({
        matrix: m.map(r => [...r]),
        operation: `Swap R${row + 1} ↔ R${maxRow + 1}`,
        highlight: m[row].map((_, j) => ({ row, col: j })),
      });
    }

    // Eliminate below
    for (let i = row + 1; i < rows; i++) {
      if (Math.abs(m[i][pivotCol]) > 1e-10) {
        const factor = m[i][pivotCol] / m[row][pivotCol];
        for (let j = pivotCol; j < cols; j++) {
          m[i][j] -= factor * m[row][j];
        }
        steps.push({
          matrix: m.map(r => [...r]),
          operation: `R${i + 1} ← R${i + 1} - (${formatNumber(factor)})R${row + 1}`,
          highlight: m[i].map((_, j) => ({ row: i, col: j })),
        });
      }
    }

    pivotCol++;
  }

  steps.push({
    matrix: m.map(r => [...r]),
    operation: 'Row echelon form achieved!',
    highlight: [],
  });

  return steps;
}

const PRESETS = [
  {
    name: '3×3 System',
    matrix: [[2, 1, -1, 8], [-3, -1, 2, -11], [-2, 1, 2, -3]],
  },
  {
    name: 'Simple 2×2',
    matrix: [[2, 1, 5], [4, -1, 1]],
  },
  {
    name: 'No pivot swap',
    matrix: [[1, 2, 3, 6], [2, 5, 3, 9], [1, 0, 8, 11]],
  },
  {
    name: 'Needs row swap',
    matrix: [[0, 1, 2, 3], [2, 3, 4, 9], [1, 2, 1, 4]],
  },
];

export function GaussianEliminationVisualizer({ className = '' }: Props) {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = useMemo(() =>
    computeEliminationSteps(PRESETS[selectedPreset].matrix),
    [selectedPreset]
  );

  const handlePresetChange = (index: number) => {
    setSelectedPreset(index);
    setCurrentStep(0);
    setIsAnimating(false);
  };

  const handleAnimate = () => {
    setIsAnimating(true);
    setCurrentStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= steps.length) {
        clearInterval(interval);
        setIsAnimating(false);
      } else {
        setCurrentStep(step);
      }
    }, 1200);
  };

  const step = steps[currentStep];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Gaussian Elimination</h3>

      <p className="text-dark-300 mb-6">
        Watch how row operations transform a matrix into <span className="text-emerald-400">row echelon form</span>.
        Each step eliminates entries below pivot positions.
      </p>

      {/* Preset selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {PRESETS.map((preset, i) => (
          <button
            key={i}
            onClick={() => handlePresetChange(i)}
            disabled={isAnimating}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedPreset === i
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            } disabled:opacity-50`}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0 || isAnimating}
          className="px-4 py-2 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 disabled:opacity-50"
        >
          ← Prev
        </button>
        <button
          onClick={handleAnimate}
          disabled={isAnimating}
          className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 disabled:opacity-50"
        >
          {isAnimating ? 'Animating...' : '▶ Animate'}
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1 || isAnimating}
          className="px-4 py-2 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 disabled:opacity-50"
        >
          Next →
        </button>
        <span className="text-dark-400 text-sm ml-auto">
          Step {currentStep + 1} / {steps.length}
        </span>
      </div>

      {/* Matrix display */}
      <div className="bg-dark-900 rounded-lg p-6 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <MatrixDisplay
              matrix={step.matrix}
              highlight={step.highlight}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Operation description */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-center"
      >
        <p className="text-yellow-400 font-mono">{step.operation}</p>
      </motion.div>

      {/* Progress bar */}
      <div className="mt-4 h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500"
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600"
      >
        <p className="text-dark-300 text-sm">
          <strong className="text-emerald-400">Gaussian elimination</strong> systematically creates zeros
          below each pivot. The three allowed row operations are: (1) swap rows, (2) multiply a row by
          a nonzero scalar, (3) add a multiple of one row to another.
        </p>
      </motion.div>
    </div>
  );
}
