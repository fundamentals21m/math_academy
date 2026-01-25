import { useState } from 'react';
import { motion } from 'framer-motion';

export function TensorProductDemo() {
  const [m, setM] = useState(3);
  const [n, setN] = useState(2);
  const [showComputation, setShowComputation] = useState(true);

  // Compute GCD for Z/mZ ⊗ Z/nZ
  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  };

  const tensorResult = gcd(m, n);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Tensor Product Explorer</h4>

      {/* Universal Property */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Universal Property</h5>
        <div className="text-center mb-4">
          <div className="font-mono text-sm">
            <span className="text-blue-400">M × N</span>
            <span className="text-dark-500 mx-2">→</span>
            <span className="text-purple-400">M ⊗ N</span>
            <span className="text-dark-500 mx-2">→</span>
            <span className="text-green-400">P</span>
          </div>
          <div className="text-dark-500 text-xs mt-2">
            Bilinear maps factor uniquely through the tensor product
          </div>
        </div>
        <div className="bg-dark-800 p-3 rounded">
          <div className="text-dark-300 text-sm">
            For any bilinear φ: M × N → P, there exists unique linear φ̃: M ⊗ N → P such that
            <span className="text-yellow-400 font-mono ml-1">φ̃(m ⊗ n) = φ(m, n)</span>
          </div>
        </div>
      </div>

      {/* Tensor Product Relations */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Tensor Relations</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-sm">
          <div className="bg-dark-800 p-2 rounded">
            <span className="text-blue-400">(m₁ + m₂)</span> ⊗ n = m₁ ⊗ n + m₂ ⊗ n
          </div>
          <div className="bg-dark-800 p-2 rounded">
            m ⊗ <span className="text-purple-400">(n₁ + n₂)</span> = m ⊗ n₁ + m ⊗ n₂
          </div>
          <div className="bg-dark-800 p-2 rounded">
            <span className="text-green-400">(rm)</span> ⊗ n = r(m ⊗ n) = m ⊗ (rn)
          </div>
          <div className="bg-dark-800 p-2 rounded">
            <span className="text-yellow-400">0</span> ⊗ n = 0 = m ⊗ <span className="text-yellow-400">0</span>
          </div>
        </div>
      </div>

      {/* Z/mZ ⊗ Z/nZ Calculator */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Z/mZ ⊗ Z/nZ = Z/gcd(m,n)Z</h5>
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <div>
            <label className="text-dark-400 text-sm block mb-1">m =</label>
            <input
              type="number"
              min={1}
              max={100}
              value={m}
              onChange={(e) => setM(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
            />
          </div>
          <span className="text-dark-500 mt-6">⊗</span>
          <div>
            <label className="text-dark-400 text-sm block mb-1">n =</label>
            <input
              type="number"
              min={1}
              max={100}
              value={n}
              onChange={(e) => setN(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
            />
          </div>
          <span className="text-dark-500 mt-6">=</span>
          <div className="mt-6">
            <span className="text-green-400 font-mono text-lg">
              {tensorResult === 1 ? '0' : `Z/${tensorResult}Z`}
            </span>
          </div>
        </div>
        <div className="text-dark-500 text-sm">
          gcd({m}, {n}) = {tensorResult}
          {tensorResult === 1 && (
            <span className="text-yellow-400 ml-2">
              (Coprime! Tensor product is zero)
            </span>
          )}
        </div>
      </div>

      {/* Key Examples */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Key Examples</h5>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-dark-400 font-mono">R ⊗ M</span>
            <span className="text-green-400 font-mono">≅ M</span>
          </div>
          <div className="flex justify-between">
            <span className="text-dark-400 font-mono">Rⁿ ⊗ Rᵐ</span>
            <span className="text-green-400 font-mono">≅ Rⁿᵐ</span>
          </div>
          <div className="flex justify-between">
            <span className="text-dark-400 font-mono">Z/2Z ⊗ Z/3Z</span>
            <span className="text-green-400 font-mono">= 0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-dark-400 font-mono">C ⊗_R V</span>
            <span className="text-green-400 font-mono">= complexification</span>
          </div>
        </div>
      </div>

      {/* Properties */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Tensor Product Properties</h5>
        <ul className="text-dark-400 text-sm space-y-1">
          <li>• <span className="text-blue-400">Commutative:</span> M ⊗ N ≅ N ⊗ M</li>
          <li>• <span className="text-green-400">Associative:</span> (L ⊗ M) ⊗ N ≅ L ⊗ (M ⊗ N)</li>
          <li>• <span className="text-purple-400">Distributive:</span> L ⊗ (M ⊕ N) ≅ (L ⊗ M) ⊕ (L ⊗ N)</li>
          <li>• <span className="text-yellow-400">Right Exact:</span> Preserves surjections (not injections!)</li>
        </ul>
      </div>
    </div>
  );
}
