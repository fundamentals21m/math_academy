import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export function DualSpaceDemo() {
  const [vector, setVector] = useState([3, 4]);
  const [functional, setFunctional] = useState([1, 2]);

  // Dual pairing <f, v> = f(v)
  const pairing = functional[0] * vector[0] + functional[1] * vector[1];

  // Standard dual basis in R²: e1*(x,y) = x, e2*(x,y) = y
  const dualBasis = [
    { name: 'e₁*', formula: '(x,y) ↦ x', value: vector[0] },
    { name: 'e₂*', formula: '(x,y) ↦ y', value: vector[1] },
  ];

  // Express functional in dual basis
  const functionalInDualBasis = `${functional[0]}e₁* + ${functional[1]}e₂*`;

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Dual Space Explorer (R²)*</h4>

      {/* Dual Pairing */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Dual Pairing: ⟨f, v⟩ = f(v)</h5>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-dark-400 text-sm block mb-2">Vector v ∈ V:</label>
            <div className="flex items-center gap-2">
              <span className="text-dark-500">(</span>
              <input
                type="number"
                value={vector[0]}
                onChange={(e) => setVector([parseFloat(e.target.value) || 0, vector[1]])}
                className="w-16 bg-dark-800 text-blue-400 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
              <span className="text-dark-500">,</span>
              <input
                type="number"
                value={vector[1]}
                onChange={(e) => setVector([vector[0], parseFloat(e.target.value) || 0])}
                className="w-16 bg-dark-800 text-blue-400 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
              <span className="text-dark-500">)</span>
            </div>
          </div>
          <div>
            <label className="text-dark-400 text-sm block mb-2">Functional f ∈ V* (coefficients):</label>
            <div className="flex items-center gap-2">
              <span className="text-dark-500">[</span>
              <input
                type="number"
                value={functional[0]}
                onChange={(e) => setFunctional([parseFloat(e.target.value) || 0, functional[1]])}
                className="w-16 bg-dark-800 text-purple-400 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
              <span className="text-dark-500">,</span>
              <input
                type="number"
                value={functional[1]}
                onChange={(e) => setFunctional([functional[0], parseFloat(e.target.value) || 0])}
                className="w-16 bg-dark-800 text-purple-400 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
              <span className="text-dark-500">]</span>
            </div>
          </div>
        </div>

        <motion.div
          key={pairing}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          className="mt-4 bg-dark-800 p-4 rounded text-center"
        >
          <div className="text-dark-400 text-sm mb-2">
            f(v) = {functional[0]}·{vector[0]} + {functional[1]}·{vector[1]}
          </div>
          <div className="text-green-400 font-mono text-2xl">
            ⟨f, v⟩ = {pairing}
          </div>
        </motion.div>
      </div>

      {/* Dual Basis */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Dual Basis</h5>
        <div className="text-dark-400 text-sm mb-3">
          For standard basis {'{'}e₁, e₂{'}'}, the dual basis {'{'}e₁*, e₂*{'}'} satisfies:
          eᵢ*(eⱼ) = δᵢⱼ
        </div>
        <div className="grid grid-cols-2 gap-4">
          {dualBasis.map((db) => (
            <div key={db.name} className="bg-dark-800 p-3 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="text-purple-400 font-mono">{db.name}</span>
                <span className="text-dark-500 text-sm">{db.formula}</span>
              </div>
              <div className="text-dark-300 text-sm">
                {db.name}(v) = {db.value}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-dark-300 text-sm">
          Current functional: f = <span className="text-purple-400 font-mono">{functionalInDualBasis}</span>
        </div>
      </div>

      {/* Double Dual */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Double Dual V** ≅ V</h5>
        <div className="bg-dark-800 p-3 rounded">
          <div className="text-dark-400 text-sm mb-2">Canonical isomorphism Φ: V → V**</div>
          <div className="font-mono text-center">
            <span className="text-blue-400">Φ(v)</span>
            <span className="text-dark-500">(f) = </span>
            <span className="text-purple-400">f</span>
            <span className="text-dark-500">(</span>
            <span className="text-blue-400">v</span>
            <span className="text-dark-500">)</span>
          </div>
          <div className="text-dark-500 text-xs text-center mt-2">
            (Canonical = basis-independent!)
          </div>
        </div>
      </div>

      {/* Transpose */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Transpose (Dual Map)</h5>
        <div className="text-dark-400 text-sm space-y-2">
          <div>For T: V → W, the transpose T*: W* → V* is:</div>
          <div className="text-center font-mono text-purple-400">
            T*(g) = g ∘ T
          </div>
          <div>Matrix of T* = (Matrix of T)ᵀ (with dual bases)</div>
        </div>
      </div>
    </div>
  );
}
