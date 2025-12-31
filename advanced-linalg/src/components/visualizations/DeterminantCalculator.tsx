import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

interface Step {
  description: string;
  value?: number;
  highlight?: string;
}

export function DeterminantCalculator({ className = '' }: Props) {
  const [matrix, setMatrix] = useState<number[][]>([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [determinant, setDeterminant] = useState<number | null>(null);
  const [method, setMethod] = useState<'cofactor' | 'properties'>('cofactor');

  const computeDeterminant2x2 = (m: number[][]): number => {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  };

  const getMinor = (m: number[][], row: number, col: number): number[][] => {
    return m
      .filter((_, i) => i !== row)
      .map((r) => r.filter((_, j) => j !== col));
  };

  const getCofactor = (m: number[][], row: number, col: number): number => {
    const minor = getMinor(m, row, col);
    const sign = (row + col) % 2 === 0 ? 1 : -1;
    
    if (minor.length === 1) return sign * minor[0][0];
    if (minor.length === 2) return sign * computeDeterminant2x2(minor);
    
    // Recursive for larger matrices
    let det = 0;
    for (let j = 0; j < minor.length; j++) {
      det += minor[0][j] * getCofactor(minor, 0, j);
    }
    return sign * det;
  };

  const calculateCofactorExpansion = () => {
    const n = matrix.length;
    const newSteps: Step[] = [];
    
    newSteps.push({
      description: `Computing ${n}×${n} determinant using cofactor expansion along row 1`,
    });

    if (n === 2) {
      const det = computeDeterminant2x2(matrix);
      newSteps.push({
        description: `det = a₁₁a₂₂ - a₁₂a₂₁ = (${matrix[0][0]})(${matrix[1][1]}) - (${matrix[0][1]})(${matrix[1][0]})`,
        value: det,
      });
      setDeterminant(det);
      setSteps(newSteps);
      return;
    }

    let det = 0;
    const terms: string[] = [];

    for (let j = 0; j < n; j++) {
      const sign = j % 2 === 0 ? '+' : '-';
      const cofactor = getCofactor(matrix, 0, j);
      const term = matrix[0][j] * cofactor;
      det += term;

      const signStr = j === 0 ? '' : (term >= 0 ? ' + ' : ' - ');
      terms.push(`${signStr}${Math.abs(term).toFixed(2)}`);

      newSteps.push({
        description: `C₁${j + 1} = ${sign === '+' ? '' : '-'}${matrix[0][j]} × M₁${j + 1} = ${term.toFixed(2)}`,
        highlight: `a₁${j + 1} = ${matrix[0][j]}`,
      });
    }

    newSteps.push({
      description: `det(A) = ${terms.join('')}`,
      value: det,
    });

    setDeterminant(det);
    setSteps(newSteps);
  };

  const calculateWithProperties = () => {
    const n = matrix.length;
    const m = matrix.map((row) => [...row]); // Copy
    const newSteps: Step[] = [];
    let det = 1;
    let swaps = 0;

    newSteps.push({
      description: 'Using row reduction to triangularize the matrix',
    });

    for (let col = 0; col < n; col++) {
      // Find pivot
      let pivotRow = col;
      for (let row = col + 1; row < n; row++) {
        if (Math.abs(m[row][col]) > Math.abs(m[pivotRow][col])) {
          pivotRow = row;
        }
      }

      if (Math.abs(m[pivotRow][col]) < 1e-10) {
        newSteps.push({
          description: `Column ${col + 1} has no pivot - determinant is 0`,
          value: 0,
        });
        setDeterminant(0);
        setSteps(newSteps);
        return;
      }

      if (pivotRow !== col) {
        [m[col], m[pivotRow]] = [m[pivotRow], m[col]];
        swaps++;
        newSteps.push({
          description: `Swap R${col + 1} ↔ R${pivotRow + 1} (flips sign)`,
        });
      }

      // Eliminate below
      for (let row = col + 1; row < n; row++) {
        if (Math.abs(m[row][col]) > 1e-10) {
          const factor = m[row][col] / m[col][col];
          for (let j = col; j < n; j++) {
            m[row][j] -= factor * m[col][j];
          }
          newSteps.push({
            description: `R${row + 1} ← R${row + 1} - ${factor.toFixed(2)} × R${col + 1}`,
          });
        }
      }
    }

    // Compute determinant from diagonal
    for (let i = 0; i < n; i++) {
      det *= m[i][i];
    }
    det *= Math.pow(-1, swaps);

    newSteps.push({
      description: `Diagonal product: ${m.map((row, i) => row[i].toFixed(2)).join(' × ')}`,
    });
    newSteps.push({
      description: `With ${swaps} row swaps: det = ${swaps % 2 === 0 ? '' : '-'}(${Math.abs(det).toFixed(2)})`,
      value: det,
    });

    setDeterminant(det);
    setSteps(newSteps);
  };

  const calculate = () => {
    if (method === 'cofactor') {
      calculateCofactorExpansion();
    } else {
      calculateWithProperties();
    }
  };

  const addDimension = () => {
    const n = matrix.length;
    setMatrix([
      ...matrix.map((row) => [...row, 0]),
      new Array(n + 1).fill(0),
    ]);
    setSteps([]);
    setDeterminant(null);
  };

  const removeDimension = () => {
    if (matrix.length > 2) {
      setMatrix(matrix.slice(0, -1).map((row) => row.slice(0, -1)));
      setSteps([]);
      setDeterminant(null);
    }
  };

  const renderMatrix = () => (
    <div className="inline-block">
      <div className="flex items-center">
        <span className="text-dark-400 text-3xl mr-1">|</span>
        <div className="space-y-1">
          {matrix.map((row, i) => (
            <div key={i} className="flex gap-1">
              {row.map((val, j) => (
                <input
                  key={j}
                  type="number"
                  step="1"
                  value={val}
                  onChange={(e) => {
                    const newM = matrix.map((r) => [...r]);
                    newM[i][j] = parseFloat(e.target.value) || 0;
                    setMatrix(newM);
                    setSteps([]);
                    setDeterminant(null);
                  }}
                  className="w-12 px-1 py-1 rounded bg-dark-600 border border-dark-500 text-dark-100 text-center text-sm"
                />
              ))}
            </div>
          ))}
        </div>
        <span className="text-dark-400 text-3xl ml-1">|</span>
      </div>
    </div>
  );

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Determinant Calculator</h3>
      
      <p className="text-dark-300 mb-6">
        Compute the determinant step-by-step using cofactor expansion or row reduction.
      </p>

      <div className="space-y-6">
        {/* Method selector */}
        <div className="flex gap-4">
          <button
            onClick={() => {
              setMethod('cofactor');
              setSteps([]);
              setDeterminant(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              method === 'cofactor'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Cofactor Expansion
          </button>
          <button
            onClick={() => {
              setMethod('properties');
              setSteps([]);
              setDeterminant(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              method === 'properties'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Row Reduction
          </button>
        </div>

        {/* Matrix input */}
        <div className="space-y-3">
          <div className="text-dark-400 text-sm">
            {matrix.length}×{matrix.length} Matrix
          </div>
          {renderMatrix()}
          <div className="flex gap-2">
            <button
              onClick={addDimension}
              className="text-xs px-3 py-1 bg-dark-600 hover:bg-dark-500 rounded text-dark-300"
            >
              + Dimension
            </button>
            <button
              onClick={removeDimension}
              disabled={matrix.length <= 2}
              className="text-xs px-3 py-1 bg-dark-600 hover:bg-dark-500 rounded text-dark-300 disabled:opacity-50"
            >
              - Dimension
            </button>
          </div>
        </div>

        {/* Calculate button */}
        <button
          onClick={calculate}
          className="px-6 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
        >
          Calculate Determinant
        </button>

        {/* Steps */}
        <AnimatePresence>
          {steps.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-2"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-3 rounded-xl ${
                    step.value !== undefined
                      ? 'bg-emerald-500/10 border border-emerald-500/30'
                      : 'bg-dark-700/50 border border-dark-600'
                  }`}
                >
                  <p className="text-dark-300 text-sm font-mono">{step.description}</p>
                  {step.highlight && (
                    <p className="text-primary-400 text-xs mt-1">{step.highlight}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result */}
        <AnimatePresence>
          {determinant !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-xl bg-gradient-to-r from-emerald-500/20 to-primary-500/20 border border-emerald-500/50"
            >
              <div className="text-center">
                <p className="text-dark-300 mb-2">Determinant:</p>
                <p className="text-4xl font-bold text-emerald-400">
                  det(A) = {determinant.toFixed(4)}
                </p>
                <p className="text-dark-400 text-sm mt-4">
                  {determinant === 0
                    ? 'The matrix is singular (not invertible)'
                    : `The matrix scales area/volume by a factor of ${Math.abs(determinant).toFixed(4)}${determinant < 0 ? ' (with orientation flip)' : ''}`}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info */}
        <div className="p-4 rounded-xl bg-dark-700/30 border border-dark-600/50">
          <h4 className="text-dark-200 font-medium mb-2">Determinant Properties</h4>
          <ul className="text-dark-400 text-sm space-y-1 list-disc list-inside">
            <li>det(AB) = det(A) × det(B)</li>
            <li>det(Aᵀ) = det(A)</li>
            <li>det(cA) = cⁿ × det(A) for n×n matrix</li>
            <li>Swapping rows flips the sign</li>
            <li>det = 0 ⟺ matrix is singular</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
