/**
 * Interactive Matrix Group Visualizer
 * Demonstrates GL_n, SL_n, and other matrix groups
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

type Matrix2x2 = [[number, number], [number, number]];

function matrixMultiply(A: Matrix2x2, B: Matrix2x2): Matrix2x2 {
  return [
    [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
    [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]],
  ];
}

function determinant(M: Matrix2x2): number {
  return M[0][0] * M[1][1] - M[0][1] * M[1][0];
}

function inverse(M: Matrix2x2): Matrix2x2 | null {
  const det = determinant(M);
  if (Math.abs(det) < 0.0001) return null;
  return [
    [M[1][1] / det, -M[0][1] / det],
    [-M[1][0] / det, M[0][0] / det],
  ];
}

function formatNumber(n: number): string {
  if (Math.abs(n - Math.round(n)) < 0.01) return Math.round(n).toString();
  return n.toFixed(2);
}

// Standard basis vectors
const e1 = [1, 0];
const e2 = [0, 1];

export function MatrixGroupVisualizer() {
  const [matrixA, setMatrixA] = useState<Matrix2x2>([[1, 1], [0, 1]]);
  const [matrixB, setMatrixB] = useState<Matrix2x2>([[0, -1], [1, 0]]);
  const [showProduct, setShowProduct] = useState(false);
  const [showInverse, setShowInverse] = useState(false);
  const [showTransformation, setShowTransformation] = useState(true);

  const product = useMemo(() => matrixMultiply(matrixA, matrixB), [matrixA, matrixB]);
  const inverseA = useMemo(() => inverse(matrixA), [matrixA]);
  const detA = useMemo(() => determinant(matrixA), [matrixA]);
  const detB = useMemo(() => determinant(matrixB), [matrixB]);

  // Transform vectors
  const transformVector = (M: Matrix2x2, v: number[]) => [
    M[0][0] * v[0] + M[0][1] * v[1],
    M[1][0] * v[0] + M[1][1] * v[1],
  ];

  const transformedE1 = transformVector(matrixA, e1);
  const transformedE2 = transformVector(matrixA, e2);

  // Update matrix entry
  const updateEntry = (matrix: 'A' | 'B', row: number, col: number, value: number) => {
    if (matrix === 'A') {
      setMatrixA(prev => {
        const newMatrix: Matrix2x2 = [[...prev[0]], [...prev[1]]];
        newMatrix[row][col] = value;
        return newMatrix;
      });
    } else {
      setMatrixB(prev => {
        const newMatrix: Matrix2x2 = [[...prev[0]], [...prev[1]]];
        newMatrix[row][col] = value;
        return newMatrix;
      });
    }
  };

  // SVG dimensions
  const width = 400;
  const height = 300;
  const cx = width / 2;
  const cy = height / 2;
  const scale = 40;

  const toSVG = (v: number[]) => ({
    x: cx + v[0] * scale,
    y: cy - v[1] * scale, // SVG y is inverted
  });

  // Matrix groups info
  const inGL2 = Math.abs(detA) > 0.0001;
  const inSL2 = Math.abs(detA - 1) < 0.01;
  const isOrthogonal =
    Math.abs(matrixA[0][0] * matrixA[0][0] + matrixA[1][0] * matrixA[1][0] - 1) < 0.01 &&
    Math.abs(matrixA[0][1] * matrixA[0][1] + matrixA[1][1] * matrixA[1][1] - 1) < 0.01 &&
    Math.abs(matrixA[0][0] * matrixA[0][1] + matrixA[1][0] * matrixA[1][1]) < 0.01;

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Matrix Group Explorer
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Matrix input */}
        <div>
          <div className="mb-4">
            <label className="block text-sm text-dark-300 mb-2">Matrix A:</label>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-dark-500">[</span>
              <div className="grid grid-cols-2 gap-1">
                {[0, 1].map(row => (
                  [0, 1].map(col => (
                    <input
                      key={`${row}-${col}`}
                      type="number"
                      step="0.5"
                      value={matrixA[row][col]}
                      onChange={(e) => updateEntry('A', row, col, parseFloat(e.target.value) || 0)}
                      className="w-16 px-2 py-1 bg-dark-800 border border-dark-600 rounded text-center text-emerald-400 font-mono"
                    />
                  ))
                ))}
              </div>
              <span className="text-2xl text-dark-500">]</span>
            </div>
            <p className="text-sm text-dark-400 mt-1">
              det(A) = <span className={detA !== 0 ? 'text-emerald-400' : 'text-red-400'}>{formatNumber(detA)}</span>
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-dark-300 mb-2">Matrix B:</label>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-dark-500">[</span>
              <div className="grid grid-cols-2 gap-1">
                {[0, 1].map(row => (
                  [0, 1].map(col => (
                    <input
                      key={`${row}-${col}`}
                      type="number"
                      step="0.5"
                      value={matrixB[row][col]}
                      onChange={(e) => updateEntry('B', row, col, parseFloat(e.target.value) || 0)}
                      className="w-16 px-2 py-1 bg-dark-800 border border-dark-600 rounded text-center text-blue-400 font-mono"
                    />
                  ))
                ))}
              </div>
              <span className="text-2xl text-dark-500">]</span>
            </div>
            <p className="text-sm text-dark-400 mt-1">
              det(B) = <span className={detB !== 0 ? 'text-emerald-400' : 'text-red-400'}>{formatNumber(detB)}</span>
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setShowProduct(!showProduct)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                showProduct
                  ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              AB Product
            </button>
            <button
              onClick={() => setShowInverse(!showInverse)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                showInverse
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              A⁻¹ Inverse
            </button>
            <button
              onClick={() => setShowTransformation(!showTransformation)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                showTransformation
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              Visualize
            </button>
          </div>

          {/* Product display */}
          {showProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-3 bg-violet-500/10 rounded-lg border border-violet-500/30 mb-4"
            >
              <p className="text-sm text-dark-300 mb-2">AB =</p>
              <div className="flex items-center gap-2">
                <span className="text-xl text-dark-500">[</span>
                <div className="grid grid-cols-2 gap-2 font-mono text-violet-400">
                  <span>{formatNumber(product[0][0])}</span>
                  <span>{formatNumber(product[0][1])}</span>
                  <span>{formatNumber(product[1][0])}</span>
                  <span>{formatNumber(product[1][1])}</span>
                </div>
                <span className="text-xl text-dark-500">]</span>
              </div>
              <p className="text-xs text-dark-400 mt-2">
                det(AB) = det(A)·det(B) = {formatNumber(detA * detB)}
              </p>
            </motion.div>
          )}

          {/* Inverse display */}
          {showInverse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30 mb-4"
            >
              {inverseA ? (
                <>
                  <p className="text-sm text-dark-300 mb-2">A⁻¹ =</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-dark-500">[</span>
                    <div className="grid grid-cols-2 gap-2 font-mono text-amber-400">
                      <span>{formatNumber(inverseA[0][0])}</span>
                      <span>{formatNumber(inverseA[0][1])}</span>
                      <span>{formatNumber(inverseA[1][0])}</span>
                      <span>{formatNumber(inverseA[1][1])}</span>
                    </div>
                    <span className="text-xl text-dark-500">]</span>
                  </div>
                </>
              ) : (
                <p className="text-red-400">A is not invertible (det = 0)</p>
              )}
            </motion.div>
          )}

          {/* Group membership */}
          <div className="space-y-2">
            <div className={`p-2 rounded-lg ${inGL2 ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
              <span className={inGL2 ? 'text-emerald-400' : 'text-red-400'}>
                {inGL2 ? '✓' : '✗'} GL₂(ℝ)
              </span>
              <span className="text-dark-400 text-sm ml-2">
                (det ≠ 0)
              </span>
            </div>
            <div className={`p-2 rounded-lg ${inSL2 ? 'bg-emerald-500/10' : 'bg-dark-800/50'}`}>
              <span className={inSL2 ? 'text-emerald-400' : 'text-dark-400'}>
                {inSL2 ? '✓' : '✗'} SL₂(ℝ)
              </span>
              <span className="text-dark-400 text-sm ml-2">
                (det = 1)
              </span>
            </div>
            <div className={`p-2 rounded-lg ${isOrthogonal ? 'bg-emerald-500/10' : 'bg-dark-800/50'}`}>
              <span className={isOrthogonal ? 'text-emerald-400' : 'text-dark-400'}>
                {isOrthogonal ? '✓' : '✗'} O₂(ℝ)
              </span>
              <span className="text-dark-400 text-sm ml-2">
                (orthogonal)
              </span>
            </div>
          </div>
        </div>

        {/* Visualization */}
        {showTransformation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-950 rounded-lg">
              {/* Grid */}
              {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map(i => (
                <g key={i}>
                  <line
                    x1={cx + i * scale}
                    y1={0}
                    x2={cx + i * scale}
                    y2={height}
                    stroke="#1f2937"
                    strokeWidth={i === 0 ? 2 : 1}
                  />
                  <line
                    x1={0}
                    y1={cy + i * scale}
                    x2={width}
                    y2={cy + i * scale}
                    stroke="#1f2937"
                    strokeWidth={i === 0 ? 2 : 1}
                  />
                </g>
              ))}

              {/* Original basis vectors (faded) */}
              <line
                x1={cx}
                y1={cy}
                x2={toSVG(e1).x}
                y2={toSVG(e1).y}
                stroke="#374151"
                strokeWidth={2}
                strokeDasharray="4,4"
              />
              <line
                x1={cx}
                y1={cy}
                x2={toSVG(e2).x}
                y2={toSVG(e2).y}
                stroke="#374151"
                strokeWidth={2}
                strokeDasharray="4,4"
              />

              {/* Transformed basis vectors */}
              <motion.line
                x1={cx}
                y1={cy}
                x2={toSVG(transformedE1).x}
                y2={toSVG(transformedE1).y}
                stroke="#10b981"
                strokeWidth={3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                key={`e1-${transformedE1.join(',')}`}
              />
              <motion.line
                x1={cx}
                y1={cy}
                x2={toSVG(transformedE2).x}
                y2={toSVG(transformedE2).y}
                stroke="#3b82f6"
                strokeWidth={3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                key={`e2-${transformedE2.join(',')}`}
              />

              {/* Parallelogram showing transformed unit square */}
              <motion.path
                d={`M ${cx} ${cy} L ${toSVG(transformedE1).x} ${toSVG(transformedE1).y} L ${toSVG([transformedE1[0] + transformedE2[0], transformedE1[1] + transformedE2[1]]).x} ${toSVG([transformedE1[0] + transformedE2[0], transformedE1[1] + transformedE2[1]]).y} L ${toSVG(transformedE2).x} ${toSVG(transformedE2).y} Z`}
                fill="rgba(99, 102, 241, 0.2)"
                stroke="#6366f1"
                strokeWidth={1}
              />

              {/* Labels */}
              <text x={toSVG(transformedE1).x + 10} y={toSVG(transformedE1).y} fill="#10b981" fontSize={12}>
                Ae₁
              </text>
              <text x={toSVG(transformedE2).x + 10} y={toSVG(transformedE2).y} fill="#3b82f6" fontSize={12}>
                Ae₂
              </text>
            </svg>
            <p className="text-xs text-dark-400 text-center mt-2">
              Parallelogram area = |det(A)| = {formatNumber(Math.abs(detA))}
            </p>
          </motion.div>
        )}
      </div>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Matrix Groups:</strong> GL_n(F) is the group of n×n invertible matrices over field F.
          Important subgroups include SL_n (det=1), O_n (orthogonal), and SO_n (special orthogonal).
          The determinant is a group homomorphism: det(AB) = det(A)·det(B).
        </p>
      </div>
    </div>
  );
}
