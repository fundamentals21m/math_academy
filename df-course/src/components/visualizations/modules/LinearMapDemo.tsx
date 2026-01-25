import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export function LinearMapDemo() {
  const [matrix, setMatrix] = useState([[1, 2], [3, 4]]);
  const [inputVector, setInputVector] = useState([1, 0]);

  // Compute matrix-vector product
  const outputVector = useMemo(() => {
    return [
      matrix[0][0] * inputVector[0] + matrix[0][1] * inputVector[1],
      matrix[1][0] * inputVector[0] + matrix[1][1] * inputVector[1]
    ];
  }, [matrix, inputVector]);

  // Compute determinant
  const det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

  // Compute rank
  const rank = det !== 0 ? 2 : (matrix.every(row => row.every(x => x === 0)) ? 0 : 1);
  const nullity = 2 - rank;

  // Compute kernel basis (for singular matrices)
  const kernelBasis = useMemo(() => {
    if (det !== 0) return null;
    if (matrix[0][0] === 0 && matrix[0][1] === 0 && matrix[1][0] === 0 && matrix[1][1] === 0) {
      return 'R² (entire space)';
    }
    // Find non-zero row
    const row = matrix[0][0] !== 0 || matrix[0][1] !== 0 ? matrix[0] : matrix[1];
    if (row[1] !== 0) return `span{(${row[1]}, ${-row[0]})}`;
    if (row[0] !== 0) return 'span{(0, 1)}';
    return '{0}';
  }, [matrix, det]);

  const updateMatrix = (i: number, j: number, value: number) => {
    const newMatrix = matrix.map(row => [...row]);
    newMatrix[i][j] = value;
    setMatrix(newMatrix);
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Linear Transformation Explorer</h4>

      {/* Matrix Input */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Matrix A (2×2)</h5>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-dark-500 text-4xl">[</span>
          <div className="grid grid-cols-2 gap-2">
            {matrix.map((row, i) =>
              row.map((val, j) => (
                <input
                  key={`${i}-${j}`}
                  type="number"
                  value={val}
                  onChange={(e) => updateMatrix(i, j, parseFloat(e.target.value) || 0)}
                  className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
                />
              ))
            )}
          </div>
          <span className="text-dark-500 text-4xl">]</span>
        </div>
      </div>

      {/* Matrix-Vector Multiplication */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">T(v) = Av</h5>
        <div className="flex items-center justify-center gap-4 flex-wrap font-mono">
          <div className="flex items-center gap-1">
            <span className="text-dark-500 text-3xl">[</span>
            <div className="flex flex-col gap-1">
              <input
                type="number"
                value={inputVector[0]}
                onChange={(e) => setInputVector([parseFloat(e.target.value) || 0, inputVector[1]])}
                className="w-14 bg-dark-800 text-blue-400 px-2 py-1 rounded border border-dark-600 text-center"
              />
              <input
                type="number"
                value={inputVector[1]}
                onChange={(e) => setInputVector([inputVector[0], parseFloat(e.target.value) || 0])}
                className="w-14 bg-dark-800 text-blue-400 px-2 py-1 rounded border border-dark-600 text-center"
              />
            </div>
            <span className="text-dark-500 text-3xl">]</span>
          </div>
          <span className="text-dark-500 text-xl">→</span>
          <div className="flex items-center gap-1">
            <span className="text-dark-500 text-3xl">[</span>
            <div className="flex flex-col gap-1">
              <span className="text-green-400 px-2 py-1">{outputVector[0]}</span>
              <span className="text-green-400 px-2 py-1">{outputVector[1]}</span>
            </div>
            <span className="text-dark-500 text-3xl">]</span>
          </div>
        </div>
      </div>

      {/* Rank-Nullity Theorem */}
      <motion.div
        key={det}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-dark-700 p-4 rounded-lg mb-6"
      >
        <h5 className="text-dark-200 font-medium mb-3">Rank-Nullity Theorem</h5>
        <div className="text-center font-mono mb-4">
          <span className="text-blue-400">dim(V)</span>
          <span className="text-dark-500 mx-2">=</span>
          <span className="text-green-400">rank(T)</span>
          <span className="text-dark-500 mx-2">+</span>
          <span className="text-red-400">nullity(T)</span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-500 text-sm">dim(R²)</div>
            <div className="text-blue-400 font-mono text-xl">2</div>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-500 text-sm">rank(A)</div>
            <div className="text-green-400 font-mono text-xl">{rank}</div>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-500 text-sm">nullity(A)</div>
            <div className="text-red-400 font-mono text-xl">{nullity}</div>
          </div>
        </div>
        <div className="text-center text-dark-400 mt-3 text-sm">
          2 = {rank} + {nullity} ✓
        </div>
      </motion.div>

      {/* Kernel and Image */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-700 p-4 rounded-lg">
          <h5 className="text-dark-200 font-medium mb-2">Kernel (Null Space)</h5>
          <div className="text-red-400 font-mono text-sm">
            {det !== 0 ? '{0}' : kernelBasis}
          </div>
          <div className="text-dark-500 text-xs mt-1">
            dim = {nullity}
          </div>
        </div>
        <div className="bg-dark-700 p-4 rounded-lg">
          <h5 className="text-dark-200 font-medium mb-2">Image (Column Space)</h5>
          <div className="text-green-400 font-mono text-sm">
            {rank === 2 ? 'R²' : rank === 1 ? 'Line in R²' : '{0}'}
          </div>
          <div className="text-dark-500 text-xs mt-1">
            dim = {rank}
          </div>
        </div>
      </div>

      {/* Invertibility */}
      <div className={`p-4 rounded-lg ${det !== 0 ? 'bg-green-900/20' : 'bg-red-900/20'}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className={det !== 0 ? 'text-green-400' : 'text-red-400'}>
            {det !== 0 ? '✓' : '✗'}
          </span>
          <span className="text-dark-200 font-medium">
            {det !== 0 ? 'Invertible' : 'Not Invertible'}
          </span>
        </div>
        <div className="text-dark-400 text-sm">
          det(A) = {det} {det !== 0 ? '≠ 0' : '= 0'}
        </div>
      </div>
    </div>
  );
}
