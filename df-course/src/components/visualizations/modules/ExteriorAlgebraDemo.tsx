import { useState } from 'react';
import { motion } from 'framer-motion';

export function ExteriorAlgebraDemo() {
  const [v1, setV1] = useState([1, 0, 0]);
  const [v2, setV2] = useState([0, 1, 0]);
  const [v3, setV3] = useState([0, 0, 1]);

  // Compute v1 ∧ v2 (cross product in R³ corresponds to ∧² R³)
  const wedge12 = [
    v1[1] * v2[2] - v1[2] * v2[1],
    v1[2] * v2[0] - v1[0] * v2[2],
    v1[0] * v2[1] - v1[1] * v2[0]
  ];

  // Compute v1 ∧ v2 ∧ v3 (determinant)
  const wedge123 =
    v1[0] * (v2[1] * v3[2] - v2[2] * v3[1]) -
    v1[1] * (v2[0] * v3[2] - v2[2] * v3[0]) +
    v1[2] * (v2[0] * v3[1] - v2[1] * v3[0]);

  const updateVector = (setter: (v: number[]) => void, idx: number, value: number, vec: number[]) => {
    const newVec = [...vec];
    newVec[idx] = value;
    setter(newVec);
  };

  // Check linear independence
  const areIndependent12 = wedge12.some(x => x !== 0);
  const areIndependent123 = wedge123 !== 0;

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Exterior Algebra of R³</h4>

      {/* Dimension Table */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Λ(R³) Dimensions</h5>
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { power: 0, dim: 1, basis: '1' },
            { power: 1, dim: 3, basis: 'e₁, e₂, e₃' },
            { power: 2, dim: 3, basis: 'e₁∧e₂, e₁∧e₃, e₂∧e₃' },
            { power: 3, dim: 1, basis: 'e₁∧e₂∧e₃' }
          ].map(item => (
            <div key={item.power} className="bg-dark-800 p-3 rounded">
              <div className="text-purple-400 font-mono">Λ^{item.power}</div>
              <div className="text-dark-300 text-lg">{item.dim}</div>
              <div className="text-dark-500 text-xs">{item.basis}</div>
            </div>
          ))}
        </div>
        <div className="text-dark-500 text-sm text-center mt-3">
          Total: 1 + 3 + 3 + 1 = 8 = 2³
        </div>
      </div>

      {/* Vector Inputs */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Input Vectors</h5>
        <div className="space-y-3">
          {[
            { name: 'v₁', vec: v1, setter: setV1, color: 'text-blue-400' },
            { name: 'v₂', vec: v2, setter: setV2, color: 'text-green-400' },
            { name: 'v₃', vec: v3, setter: setV3, color: 'text-purple-400' }
          ].map(({ name, vec, setter, color }) => (
            <div key={name} className="flex items-center gap-3">
              <span className={`w-8 ${color}`}>{name}:</span>
              <span className="text-dark-500">(</span>
              {vec.map((val, i) => (
                <span key={i} className="flex items-center">
                  <input
                    type="number"
                    value={val}
                    onChange={(e) => updateVector(setter, i, parseFloat(e.target.value) || 0, vec)}
                    className="w-14 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
                  />
                  {i < 2 && <span className="text-dark-500 mx-1">,</span>}
                </span>
              ))}
              <span className="text-dark-500">)</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wedge Products */}
      <div className="space-y-4 mb-6">
        {/* v1 ∧ v2 */}
        <motion.div
          key={wedge12.join(',')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`bg-dark-700 p-4 rounded-lg ${areIndependent12 ? 'border-l-4 border-green-500' : ''}`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-400">v₁</span>
            <span className="text-yellow-400">∧</span>
            <span className="text-green-400">v₂</span>
            <span className="text-dark-500">=</span>
          </div>
          <div className="font-mono">
            {areIndependent12 ? (
              <span className="text-dark-200">
                ({wedge12[0]})e₁∧e₂ + ({wedge12[1]})e₁∧e₃ + ({wedge12[2]})e₂∧e₃
              </span>
            ) : (
              <span className="text-red-400">0 (vectors are dependent)</span>
            )}
          </div>
          {areIndependent12 && (
            <div className="text-dark-500 text-sm mt-1">
              ≅ cross product ({wedge12[0]}, {wedge12[1]}, {wedge12[2]}) in R³
            </div>
          )}
        </motion.div>

        {/* v1 ∧ v2 ∧ v3 */}
        <motion.div
          key={wedge123}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`bg-dark-700 p-4 rounded-lg ${areIndependent123 ? 'border-l-4 border-green-500' : ''}`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-400">v₁</span>
            <span className="text-yellow-400">∧</span>
            <span className="text-green-400">v₂</span>
            <span className="text-yellow-400">∧</span>
            <span className="text-purple-400">v₃</span>
            <span className="text-dark-500">=</span>
          </div>
          <div className="font-mono">
            <span className={areIndependent123 ? 'text-dark-200' : 'text-red-400'}>
              {wedge123} e₁∧e₂∧e₃
            </span>
          </div>
          <div className="text-dark-500 text-sm mt-1">
            = det([v₁ | v₂ | v₃]) = signed volume of parallelepiped
          </div>
        </motion.div>
      </div>

      {/* Properties */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Wedge Product Properties</h5>
        <ul className="text-dark-400 text-sm space-y-1">
          <li>• <span className="text-yellow-400">v ∧ v = 0</span> (alternating)</li>
          <li>• v ∧ w = -w ∧ v (anticommutative)</li>
          <li>• v₁ ∧ ... ∧ vₖ = 0 iff vectors are dependent</li>
          <li>• dim Λᵏ(V) = C(n,k) for dim V = n</li>
        </ul>
      </div>
    </div>
  );
}
