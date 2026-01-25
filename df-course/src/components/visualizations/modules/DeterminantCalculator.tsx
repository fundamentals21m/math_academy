import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function DeterminantCalculator() {
  const [size, setSize] = useState(3);
  const [matrix, setMatrix] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);
  const [showCofactors, setShowCofactors] = useState(true);
  const [expansionRow, setExpansionRow] = useState(0);

  // Compute determinant recursively
  const computeDet = (m: number[][]): number => {
    const n = m.length;
    if (n === 1) return m[0][0];
    if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

    let det = 0;
    for (let j = 0; j < n; j++) {
      const minor = m.slice(1).map(row => [...row.slice(0, j), ...row.slice(j + 1)]);
      det += Math.pow(-1, j) * m[0][j] * computeDet(minor);
    }
    return det;
  };

  // Compute cofactor
  const getCofactor = (row: number, col: number): number => {
    const minor = matrix
      .filter((_, i) => i !== row)
      .map(r => r.filter((_, j) => j !== col));
    return Math.pow(-1, row + col) * computeDet(minor);
  };

  const determinant = useMemo(() => computeDet(matrix), [matrix]);

  // Cofactor expansion along selected row
  const cofactorExpansion = useMemo(() => {
    return matrix[expansionRow].map((val, col) => ({
      element: val,
      cofactor: getCofactor(expansionRow, col),
      sign: Math.pow(-1, expansionRow + col),
      product: val * getCofactor(expansionRow, col)
    }));
  }, [matrix, expansionRow]);

  const updateCell = (i: number, j: number, value: number) => {
    const newMatrix = matrix.map(row => [...row]);
    newMatrix[i][j] = value;
    setMatrix(newMatrix);
  };

  const resizeMatrix = (newSize: number) => {
    const newMatrix: number[][] = [];
    for (let i = 0; i < newSize; i++) {
      newMatrix[i] = [];
      for (let j = 0; j < newSize; j++) {
        newMatrix[i][j] = matrix[i]?.[j] ?? (i === j ? 1 : 0);
      }
    }
    setSize(newSize);
    setMatrix(newMatrix);
    setExpansionRow(Math.min(expansionRow, newSize - 1));
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Determinant Calculator</h4>

      {/* Size Selector */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-dark-400">Matrix size:</span>
        {[2, 3, 4].map(n => (
          <button
            key={n}
            onClick={() => resizeMatrix(n)}
            className={`px-4 py-2 rounded ${
              size === n ? 'bg-blue-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {n}×{n}
          </button>
        ))}
      </div>

      {/* Matrix Input */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="flex items-center justify-center">
          <span className="text-dark-500 text-4xl mr-2">[</span>
          <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}>
            {matrix.map((row, i) =>
              row.map((val, j) => (
                <input
                  key={`${i}-${j}`}
                  type="number"
                  value={val}
                  onChange={(e) => updateCell(i, j, parseFloat(e.target.value) || 0)}
                  className="w-14 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
                />
              ))
            )}
          </div>
          <span className="text-dark-500 text-4xl ml-2">]</span>
        </div>
      </div>

      {/* Determinant Result */}
      <motion.div
        key={determinant}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        className={`p-4 rounded-lg mb-6 text-center ${
          determinant !== 0 ? 'bg-green-900/20' : 'bg-red-900/20'
        }`}
      >
        <div className="text-dark-400 text-sm mb-1">det(A) =</div>
        <div className={`font-mono text-3xl ${determinant !== 0 ? 'text-green-400' : 'text-red-400'}`}>
          {determinant}
        </div>
        <div className="text-dark-500 text-sm mt-2">
          {determinant !== 0 ? 'Matrix is invertible' : 'Matrix is singular'}
        </div>
      </motion.div>

      {/* Cofactor Expansion */}
      <button
        onClick={() => setShowCofactors(!showCofactors)}
        className="text-sm text-blue-400 hover:text-blue-300 mb-4"
      >
        {showCofactors ? '▼' : '▶'} Cofactor Expansion
      </button>

      <AnimatePresence>
        {showCofactors && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-700 p-4 rounded-lg mb-6 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-dark-400 text-sm">Expand along row:</span>
              {matrix.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setExpansionRow(i)}
                  className={`px-3 py-1 rounded ${
                    expansionRow === i ? 'bg-purple-600 text-white' : 'bg-dark-600 text-dark-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {cofactorExpansion.map((item, j) => (
                <div key={j} className="flex items-center gap-2 font-mono text-sm flex-wrap">
                  <span className={item.sign > 0 ? 'text-green-400' : 'text-red-400'}>
                    {item.sign > 0 ? '+' : '-'}
                  </span>
                  <span className="text-blue-400">a{expansionRow + 1}{j + 1}={item.element}</span>
                  <span className="text-dark-500">×</span>
                  <span className="text-purple-400">C{expansionRow + 1}{j + 1}={item.cofactor}</span>
                  <span className="text-dark-500">=</span>
                  <span className="text-yellow-400">{item.product}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-dark-600">
                <span className="text-dark-400">Sum = </span>
                <span className="text-green-400 font-mono">{determinant}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Properties */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Determinant Properties</h5>
        <ul className="text-dark-400 text-sm space-y-1">
          <li>• det(AB) = det(A) · det(B)</li>
          <li>• det(Aᵀ) = det(A)</li>
          <li>• Swapping rows: multiply by -1</li>
          <li>• |det(A)| = volume scaling factor</li>
        </ul>
      </div>
    </div>
  );
}
