import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

type Operation = 'multiply' | 'add' | 'transpose' | 'inverse' | 'rref';

export function MatrixCalculator({ className = '' }: Props) {
  const [matrixA, setMatrixA] = useState<number[][]>([
    [1, 2],
    [3, 4],
  ]);
  const [matrixB, setMatrixB] = useState<number[][]>([
    [5, 6],
    [7, 8],
  ]);
  const [operation, setOperation] = useState<Operation>('multiply');
  const [result, setResult] = useState<number[][] | null>(null);
  const [steps, setSteps] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const multiplyMatrices = (a: number[][], b: number[][]): number[][] => {
    const m = a.length;
    const n = b[0].length;
    const p = a[0].length;
    
    const result: number[][] = [];
    for (let i = 0; i < m; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        let sum = 0;
        for (let k = 0; k < p; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  };

  const addMatrices = (a: number[][], b: number[][]): number[][] => {
    return a.map((row, i) => row.map((val, j) => val + b[i][j]));
  };

  const transposeMatrix = (a: number[][]): number[][] => {
    return a[0].map((_, j) => a.map((row) => row[j]));
  };

  const computeRREF = (matrix: number[][]): { result: number[][]; steps: string[] } => {
    const m = matrix.map((row) => [...row]);
    const rows = m.length;
    const cols = m[0].length;
    const steps: string[] = [];
    let pivotRow = 0;

    for (let col = 0; col < cols && pivotRow < rows; col++) {
      // Find pivot
      let maxRow = pivotRow;
      for (let row = pivotRow + 1; row < rows; row++) {
        if (Math.abs(m[row][col]) > Math.abs(m[maxRow][col])) {
          maxRow = row;
        }
      }

      if (Math.abs(m[maxRow][col]) < 1e-10) continue;

      // Swap rows if needed
      if (maxRow !== pivotRow) {
        [m[pivotRow], m[maxRow]] = [m[maxRow], m[pivotRow]];
        steps.push(`Swap R${pivotRow + 1} ↔ R${maxRow + 1}`);
      }

      // Scale pivot to 1
      const pivot = m[pivotRow][col];
      if (pivot !== 1) {
        for (let j = 0; j < cols; j++) {
          m[pivotRow][j] /= pivot;
        }
        steps.push(`R${pivotRow + 1} ← R${pivotRow + 1} / ${pivot.toFixed(2)}`);
      }

      // Eliminate other rows
      for (let row = 0; row < rows; row++) {
        if (row !== pivotRow && Math.abs(m[row][col]) > 1e-10) {
          const factor = m[row][col];
          for (let j = 0; j < cols; j++) {
            m[row][j] -= factor * m[pivotRow][j];
          }
          steps.push(`R${row + 1} ← R${row + 1} - ${factor.toFixed(2)} × R${pivotRow + 1}`);
        }
      }

      pivotRow++;
    }

    return { result: m, steps };
  };

  const computeInverse = (matrix: number[][]): { result: number[][] | null; steps: string[] } => {
    const n = matrix.length;
    if (n !== matrix[0].length) {
      return { result: null, steps: ['Matrix must be square'] };
    }

    // Augment with identity
    const augmented = matrix.map((row, i) => {
      const identity = new Array(n).fill(0);
      identity[i] = 1;
      return [...row, ...identity];
    });

    const { result: rref, steps } = computeRREF(augmented);

    // Check if left side is identity
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const expected = i === j ? 1 : 0;
        if (Math.abs(rref[i][j] - expected) > 1e-10) {
          return { result: null, steps: [...steps, 'Matrix is singular (not invertible)'] };
        }
      }
    }

    // Extract right side
    const inverse = rref.map((row) => row.slice(n));
    return { result: inverse, steps };
  };

  const calculate = () => {
    setError(null);
    setSteps([]);
    setResult(null);

    try {
      switch (operation) {
        case 'multiply': {
          if (matrixA[0].length !== matrixB.length) {
            setError('Cannot multiply: A columns ≠ B rows');
            return;
          }
          const res = multiplyMatrices(matrixA, matrixB);
          setResult(res);
          setSteps([
            `Matrix A is ${matrixA.length}×${matrixA[0].length}`,
            `Matrix B is ${matrixB.length}×${matrixB[0].length}`,
            `Result is ${res.length}×${res[0].length}`,
            'Each entry (i,j) = row i of A · column j of B',
          ]);
          break;
        }
        case 'add': {
          if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
            setError('Cannot add: matrices must have same dimensions');
            return;
          }
          setResult(addMatrices(matrixA, matrixB));
          setSteps(['Adding corresponding entries']);
          break;
        }
        case 'transpose': {
          setResult(transposeMatrix(matrixA));
          setSteps([
            `Original: ${matrixA.length}×${matrixA[0].length}`,
            `Transposed: ${matrixA[0].length}×${matrixA.length}`,
            'Rows become columns',
          ]);
          break;
        }
        case 'rref': {
          const { result: rref, steps: rrefSteps } = computeRREF(matrixA);
          setResult(rref);
          setSteps(rrefSteps);
          break;
        }
        case 'inverse': {
          const { result: inv, steps: invSteps } = computeInverse(matrixA);
          if (inv) {
            setResult(inv);
          } else {
            setError('Matrix is not invertible');
          }
          setSteps(invSteps);
          break;
        }
      }
    } catch {
      setError('Calculation error');
    }
  };

  const renderMatrix = (
    m: number[][],
    setter?: (m: number[][]) => void,
    label?: string
  ) => (
    <div className="space-y-2">
      {label && <div className="text-dark-400 text-sm font-medium">{label}</div>}
      <div className="inline-block">
        <div className="flex items-center">
          <span className="text-dark-400 text-2xl mr-1">[</span>
          <div className="space-y-1">
            {m.map((row, i) => (
              <div key={i} className="flex gap-1">
                {row.map((val, j) => (
                  setter ? (
                    <input
                      key={j}
                      type="number"
                      step="0.1"
                      value={val}
                      onChange={(e) => {
                        const newM = m.map((r) => [...r]);
                        newM[i][j] = parseFloat(e.target.value) || 0;
                        setter(newM);
                      }}
                      className="w-12 px-1 py-1 rounded bg-dark-600 border border-dark-500 text-dark-100 text-center text-sm"
                    />
                  ) : (
                    <span
                      key={j}
                      className="w-12 px-1 py-1 rounded bg-dark-700 text-dark-100 text-center text-sm"
                    >
                      {val.toFixed(2)}
                    </span>
                  )
                ))}
              </div>
            ))}
          </div>
          <span className="text-dark-400 text-2xl ml-1">]</span>
        </div>
      </div>
    </div>
  );

  const addRow = (setter: typeof setMatrixA, matrix: number[][]) => {
    setter([...matrix, new Array(matrix[0].length).fill(0)]);
  };

  const addCol = (setter: typeof setMatrixA, matrix: number[][]) => {
    setter(matrix.map((row) => [...row, 0]));
  };

  const removeRow = (setter: typeof setMatrixA, matrix: number[][]) => {
    if (matrix.length > 1) setter(matrix.slice(0, -1));
  };

  const removeCol = (setter: typeof setMatrixA, matrix: number[][]) => {
    if (matrix[0].length > 1) setter(matrix.map((row) => row.slice(0, -1)));
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Matrix Calculator</h3>
      
      <p className="text-dark-300 mb-6">
        Perform matrix operations with step-by-step explanations.
      </p>

      <div className="space-y-6">
        {/* Operation selector */}
        <div className="flex flex-wrap gap-2">
          {(['multiply', 'add', 'transpose', 'rref', 'inverse'] as Operation[]).map((op) => (
            <button
              key={op}
              onClick={() => {
                setOperation(op);
                setResult(null);
                setSteps([]);
                setError(null);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                operation === op
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {op === 'multiply' && 'A × B'}
              {op === 'add' && 'A + B'}
              {op === 'transpose' && 'Aᵀ'}
              {op === 'rref' && 'RREF(A)'}
              {op === 'inverse' && 'A⁻¹'}
            </button>
          ))}
        </div>

        {/* Matrix inputs */}
        <div className="flex flex-wrap gap-8">
          <div className="space-y-2">
            {renderMatrix(matrixA, setMatrixA, 'Matrix A')}
            <div className="flex gap-1">
              <button onClick={() => addRow(setMatrixA, matrixA)} className="text-xs px-2 py-1 bg-dark-600 rounded">+Row</button>
              <button onClick={() => removeRow(setMatrixA, matrixA)} className="text-xs px-2 py-1 bg-dark-600 rounded">-Row</button>
              <button onClick={() => addCol(setMatrixA, matrixA)} className="text-xs px-2 py-1 bg-dark-600 rounded">+Col</button>
              <button onClick={() => removeCol(setMatrixA, matrixA)} className="text-xs px-2 py-1 bg-dark-600 rounded">-Col</button>
            </div>
          </div>

          {(operation === 'multiply' || operation === 'add') && (
            <div className="space-y-2">
              {renderMatrix(matrixB, setMatrixB, 'Matrix B')}
              <div className="flex gap-1">
                <button onClick={() => addRow(setMatrixB, matrixB)} className="text-xs px-2 py-1 bg-dark-600 rounded">+Row</button>
                <button onClick={() => removeRow(setMatrixB, matrixB)} className="text-xs px-2 py-1 bg-dark-600 rounded">-Row</button>
                <button onClick={() => addCol(setMatrixB, matrixB)} className="text-xs px-2 py-1 bg-dark-600 rounded">+Col</button>
                <button onClick={() => removeCol(setMatrixB, matrixB)} className="text-xs px-2 py-1 bg-dark-600 rounded">-Col</button>
              </div>
            </div>
          )}
        </div>

        {/* Calculate button */}
        <button
          onClick={calculate}
          className="px-6 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
        >
          Calculate
        </button>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Steps */}
        <AnimatePresence>
          {steps.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 rounded-xl bg-dark-700/50 border border-dark-600"
            >
              <h4 className="text-dark-200 font-medium mb-2">Steps:</h4>
              <ul className="text-dark-400 text-sm space-y-1">
                {steps.map((step, i) => (
                  <li key={i} className="font-mono">{step}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
            >
              <h4 className="text-emerald-400 font-medium mb-3">Result:</h4>
              {renderMatrix(result)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
