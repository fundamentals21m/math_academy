import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export function VectorSpaceDemo() {
  const [vectors, setVectors] = useState<number[][]>([[1, 0], [0, 1], [1, 1]]);
  const [target, setTarget] = useState([2, 3]);

  // Check linear independence using row reduction (simplified 2D)
  const checkIndependence = (vecs: number[][]): { independent: boolean; pivot: number } => {
    if (vecs.length === 0) return { independent: true, pivot: 0 };
    if (vecs.length === 1) {
      const nonzero = vecs[0][0] !== 0 || vecs[0][1] !== 0;
      return { independent: nonzero, pivot: nonzero ? 1 : 0 };
    }

    // For 2D, check determinant for first two vectors
    const det = vecs[0][0] * vecs[1][1] - vecs[0][1] * vecs[1][0];
    if (vecs.length === 2) {
      return { independent: det !== 0, pivot: det !== 0 ? 2 : 1 };
    }

    // More than 2 vectors in 2D - always dependent
    return { independent: false, pivot: Math.min(2, det !== 0 ? 2 : 1) };
  };

  const { independent, pivot } = useMemo(() => checkIndependence(vectors), [vectors]);

  // Try to express target as linear combination
  const solveForTarget = (): { coeffs: number[] | null; message: string } => {
    if (vectors.length < 2 || vectors[0][0] * vectors[1][1] === vectors[0][1] * vectors[1][0]) {
      return { coeffs: null, message: 'Need 2 independent vectors to span R²' };
    }
    const det = vectors[0][0] * vectors[1][1] - vectors[0][1] * vectors[1][0];
    const c1 = (target[0] * vectors[1][1] - target[1] * vectors[1][0]) / det;
    const c2 = (vectors[0][0] * target[1] - vectors[0][1] * target[0]) / det;
    return { coeffs: [c1, c2], message: '' };
  };

  const solution = useMemo(() => solveForTarget(), [vectors, target]);

  const updateVector = (idx: number, component: number, value: number) => {
    const newVectors = [...vectors];
    newVectors[idx] = [...newVectors[idx]];
    newVectors[idx][component] = value;
    setVectors(newVectors);
  };

  const addVector = () => {
    setVectors([...vectors, [1, 0]]);
  };

  const removeVector = (idx: number) => {
    if (vectors.length > 1) {
      setVectors(vectors.filter((_, i) => i !== idx));
    }
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Vector Space Explorer (R²)</h4>

      {/* Vector Input */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-3">
          <h5 className="text-dark-200 font-medium">Vectors</h5>
          {vectors.length < 4 && (
            <button
              onClick={addVector}
              className="text-sm bg-dark-600 text-dark-300 px-3 py-1 rounded hover:bg-dark-500"
            >
              + Add
            </button>
          )}
        </div>
        <div className="space-y-3">
          {vectors.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <span className="text-dark-400 w-8">v{idx + 1}:</span>
              <span className="text-dark-500">(</span>
              <input
                type="number"
                value={v[0]}
                onChange={(e) => updateVector(idx, 0, parseFloat(e.target.value) || 0)}
                className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
              <span className="text-dark-500">,</span>
              <input
                type="number"
                value={v[1]}
                onChange={(e) => updateVector(idx, 1, parseFloat(e.target.value) || 0)}
                className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
              <span className="text-dark-500">)</span>
              {vectors.length > 1 && (
                <button
                  onClick={() => removeVector(idx)}
                  className="text-red-500 hover:text-red-400 text-sm"
                >
                  ×
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Independence Check */}
      <div className={`p-4 rounded-lg mb-6 ${independent ? 'bg-green-900/20' : 'bg-yellow-900/20'}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className={independent ? 'text-green-400' : 'text-yellow-400'} >
            {independent ? '✓' : '!'}
          </span>
          <span className="text-dark-200 font-medium">
            {independent ? 'Linearly Independent' : 'Linearly Dependent'}
          </span>
        </div>
        <div className="text-dark-400 text-sm">
          {pivot === 2
            ? 'These vectors form a basis for R² (dimension = 2)'
            : pivot === 1
            ? 'Span is a line (1-dimensional subspace)'
            : 'Span is {0}'
          }
        </div>
        {vectors.length > 2 && (
          <div className="text-yellow-400 text-sm mt-1">
            Note: Any set of {'>'} 2 vectors in R² is dependent
          </div>
        )}
      </div>

      {/* Span Computation */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Express Target as Linear Combination</h5>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-dark-400">Target:</span>
          <span className="text-dark-500">(</span>
          <input
            type="number"
            value={target[0]}
            onChange={(e) => setTarget([parseFloat(e.target.value) || 0, target[1]])}
            className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
          />
          <span className="text-dark-500">,</span>
          <input
            type="number"
            value={target[1]}
            onChange={(e) => setTarget([target[0], parseFloat(e.target.value) || 0])}
            className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
          />
          <span className="text-dark-500">)</span>
        </div>

        {solution.coeffs ? (
          <div className="bg-dark-800 p-3 rounded">
            <div className="font-mono text-sm">
              <span className="text-green-400">({target[0]}, {target[1]})</span>
              <span className="text-dark-500"> = </span>
              <span className="text-blue-400">{solution.coeffs[0].toFixed(2)}</span>
              <span className="text-dark-400">·v₁ + </span>
              <span className="text-purple-400">{solution.coeffs[1].toFixed(2)}</span>
              <span className="text-dark-400">·v₂</span>
            </div>
          </div>
        ) : (
          <div className="text-yellow-400 text-sm">{solution.message}</div>
        )}
      </div>

      {/* Dimension Formula */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Key Facts</h5>
        <ul className="text-dark-400 text-sm space-y-1">
          <li>• dim(U + W) = dim(U) + dim(W) - dim(U ∩ W)</li>
          <li>• dim(V) = n vectors form a basis iff they span V and are independent</li>
          <li>• Any n+1 vectors in n-dimensional space are dependent</li>
        </ul>
      </div>
    </div>
  );
}
