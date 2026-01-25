import { useState } from 'react';
import { motion } from 'framer-motion';

export function DirectSumDemo() {
  const [v1, setV1] = useState([1, 2]);
  const [v2, setV2] = useState([3, 1]);
  const [c1, setC1] = useState(1);
  const [c2, setC2] = useState(1);
  const [showBasis, setShowBasis] = useState(true);

  // Standard basis vectors
  const e1 = [1, 0];
  const e2 = [0, 1];

  // Compute linear combination
  const result = [c1 * v1[0] + c2 * v2[0], c1 * v1[1] + c2 * v2[1]];

  // Check if vectors are linearly independent (for 2D)
  const det = v1[0] * v2[1] - v1[1] * v2[0];
  const areIndependent = det !== 0;

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Direct Sums & Free Modules</h4>

      {/* R^2 as Direct Sum */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">R² = R ⊕ R as a Direct Sum</h5>
        <div className="text-center font-mono mb-4">
          <span className="text-blue-400">R²</span>
          <span className="text-dark-500 mx-2">=</span>
          <span className="text-purple-400">R</span>
          <span className="text-dark-500 mx-1">⊕</span>
          <span className="text-green-400">R</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-500 text-sm mb-1">First component (R × {'{0}'})</div>
            <div className="text-purple-400 font-mono">{'{(r, 0) : r ∈ R}'}</div>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-500 text-sm mb-1">Second component ({'{0}'} × R)</div>
            <div className="text-green-400 font-mono">{'{(0, r) : r ∈ R}'}</div>
          </div>
        </div>

        <div className="text-dark-300 text-sm">
          Every (a, b) ∈ R² can be <em>uniquely</em> written as (a, 0) + (0, b)
        </div>
      </div>

      {/* Linear Independence Checker */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Basis & Linear Independence</h5>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-dark-400 text-sm block mb-1">Vector v₁:</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={v1[0]}
                onChange={(e) => setV1([parseInt(e.target.value) || 0, v1[1]])}
                className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
              <input
                type="number"
                value={v1[1]}
                onChange={(e) => setV1([v1[0], parseInt(e.target.value) || 0])}
                className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
            </div>
          </div>
          <div>
            <label className="text-dark-400 text-sm block mb-1">Vector v₂:</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={v2[0]}
                onChange={(e) => setV2([parseInt(e.target.value) || 0, v2[1]])}
                className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
              <input
                type="number"
                value={v2[1]}
                onChange={(e) => setV2([v2[0], parseInt(e.target.value) || 0])}
                className="w-16 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
            </div>
          </div>
        </div>

        <div className={`p-3 rounded mb-4 ${areIndependent ? 'bg-green-900/20' : 'bg-red-900/20'}`}>
          <div className="flex items-center gap-2">
            <span className={areIndependent ? 'text-green-400' : 'text-red-400'}>
              {areIndependent ? '✓' : '✗'}
            </span>
            <span className="text-dark-300">
              {areIndependent
                ? `Linearly Independent (det = ${det} ≠ 0)`
                : `Linearly Dependent (det = ${det} = 0)`
              }
            </span>
          </div>
          {areIndependent && (
            <div className="text-green-400 text-sm mt-1">
              {'{'}v₁, v₂{'}'} forms a basis for R²
            </div>
          )}
        </div>

        {/* Linear Combination */}
        <div className="bg-dark-800 p-3 rounded">
          <div className="text-dark-400 text-sm mb-2">Linear Combination:</div>
          <div className="flex items-center gap-2 flex-wrap">
            <input
              type="number"
              value={c1}
              onChange={(e) => setC1(parseFloat(e.target.value) || 0)}
              className="w-16 bg-dark-700 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
            />
            <span className="text-blue-400 font-mono">({v1[0]}, {v1[1]})</span>
            <span className="text-dark-500">+</span>
            <input
              type="number"
              value={c2}
              onChange={(e) => setC2(parseFloat(e.target.value) || 0)}
              className="w-16 bg-dark-700 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
            />
            <span className="text-purple-400 font-mono">({v2[0]}, {v2[1]})</span>
            <span className="text-dark-500">=</span>
            <span className="text-green-400 font-mono">({result[0]}, {result[1]})</span>
          </div>
        </div>
      </div>

      {/* Free Module Properties */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Free Module Properties</h5>
        <ul className="text-dark-400 text-sm space-y-1">
          <li>• Free module ≅ direct sum of copies of R: M ≅ ⊕ R</li>
          <li>• Every element has <em>unique</em> representation as R-linear combination of basis</li>
          <li>• Rank = number of basis elements (well-defined for commutative rings)</li>
          <li>• <span className="text-yellow-400">Warning:</span> Not all modules are free!</li>
        </ul>
      </div>
    </div>
  );
}
