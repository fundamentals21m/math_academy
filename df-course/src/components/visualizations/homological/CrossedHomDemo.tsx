import { useState } from 'react';
import { motion } from 'framer-motion';

export function CrossedHomDemo() {
  const [n, setN] = useState(4);
  const [m, setM] = useState(6);
  const [showHilbert, setShowHilbert] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'definition' | 'example' | 'h1'>('definition');

  function gcd(a: number, b: number): number {
    while (b !== 0) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  const g = gcd(n, m);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Crossed Homomorphisms and H¹
      </h4>

      {/* Tab selector */}
      <div className="flex gap-2 mb-4">
        {(['definition', 'example', 'h1'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded text-sm ${
              selectedTab === tab
                ? 'bg-blue-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {tab === 'definition' ? 'Definition' : tab === 'example' ? 'Examples' : 'Compute H¹'}
          </button>
        ))}
      </div>

      {selectedTab === 'definition' && (
        <div className="bg-dark-900 rounded-lg p-4 space-y-4">
          <div className="bg-dark-800 p-4 rounded">
            <h5 className="text-emerald-400 font-semibold mb-2">Crossed Homomorphism (1-cocycle)</h5>
            <p className="text-dark-300 mb-2">
              A function f: G → A satisfying:
            </p>
            <div className="bg-dark-700 p-3 rounded font-mono text-center">
              f(gh) = f(g) + g·f(h)
            </div>
            <p className="text-xs text-dark-500 mt-2">
              Set of all: Z¹(G, A)
            </p>
          </div>

          <div className="bg-dark-800 p-4 rounded">
            <h5 className="text-amber-400 font-semibold mb-2">Principal (1-coboundary)</h5>
            <p className="text-dark-300 mb-2">
              A crossed hom of the form:
            </p>
            <div className="bg-dark-700 p-3 rounded font-mono text-center">
              f(g) = g·a - a
            </div>
            <p className="text-xs text-dark-500 mt-2">
              Set of all: B¹(G, A)
            </p>
          </div>

          <div className="bg-primary-500/10 p-4 rounded border border-primary-500/30">
            <h5 className="text-primary-400 font-semibold mb-2">First Cohomology</h5>
            <div className="bg-dark-700 p-3 rounded font-mono text-center text-lg">
              H¹(G, A) = Z¹(G, A) / B¹(G, A)
            </div>
          </div>

          <div className="text-sm text-dark-400">
            <strong>Trivial action:</strong> If G acts trivially on A, then crossed homs
            are just group homs, and B¹ = 0, so H¹(G, A) = Hom(G, A).
          </div>
        </div>
      )}

      {selectedTab === 'example' && (
        <div className="bg-dark-900 rounded-lg p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark-800 p-4 rounded">
              <h5 className="text-blue-400 font-semibold mb-2">Trivial Action Example</h5>
              <p className="text-sm text-dark-300 mb-2">
                G = Z/n acting trivially on A = Z/m
              </p>
              <div className="bg-dark-700 p-2 rounded text-center">
                <span className="font-mono">H¹ = Hom(Z/n, Z/m)</span>
              </div>
              <div className="text-center mt-2">
                <span className="font-mono text-emerald-400">= Z/gcd(n,m)</span>
              </div>
            </div>

            <div className="bg-dark-800 p-4 rounded">
              <h5 className="text-purple-400 font-semibold mb-2">Non-trivial Action</h5>
              <p className="text-sm text-dark-300 mb-2">
                G = Z/2 acting on Z by σ·a = -a
              </p>
              <div className="bg-dark-700 p-2 rounded text-center">
                <span className="font-mono">H¹(Z/2, Z) = Z/2</span>
              </div>
              <div className="text-xs text-dark-500 mt-2">
                f(σ) can be any integer; f ~ f' if differ by even
              </div>
            </div>
          </div>

          <div className="bg-dark-800 p-4 rounded">
            <h5 className="text-amber-400 font-semibold mb-2">Worked Example: Z/2 on Z (sign action)</h5>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-dark-400">Cocycle condition:</span>
                <span className="font-mono text-dark-300">f(σ²) = f(σ) + σ·f(σ) = f(σ) - f(σ) = 0</span>
              </div>
              <div className="flex gap-2">
                <span className="text-dark-400">But σ² = 1, so:</span>
                <span className="font-mono text-dark-300">f(1) = 0 ✓</span>
              </div>
              <div className="flex gap-2">
                <span className="text-dark-400">Coboundary:</span>
                <span className="font-mono text-dark-300">f(σ) = σ·a - a = -a - a = -2a</span>
              </div>
              <div className="flex gap-2">
                <span className="text-dark-400">So:</span>
                <span className="font-mono text-emerald-400">H¹ = Z / 2Z = Z/2</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'h1' && (
        <div className="bg-dark-900 rounded-lg p-4 space-y-4">
          <div className="text-sm text-dark-400 mb-2">
            Compute H¹(Z/n, Z/m) with trivial action:
          </div>

          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-dark-300">n =</span>
              <input
                type="number"
                min="2"
                max="50"
                value={n}
                onChange={(e) => setN(Math.max(2, parseInt(e.target.value) || 2))}
                className="w-16 px-2 py-1 bg-dark-700 rounded text-center font-mono"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-dark-300">m =</span>
              <input
                type="number"
                min="2"
                max="50"
                value={m}
                onChange={(e) => setM(Math.max(2, parseInt(e.target.value) || 2))}
                className="w-16 px-2 py-1 bg-dark-700 rounded text-center font-mono"
              />
            </div>
          </div>

          <motion.div
            key={`${n}-${m}`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-primary-500/10 p-4 rounded border border-primary-500/30 text-center"
          >
            <div className="text-sm text-dark-400 mb-1">
              H¹(Z/{n}, Z/{m}) = Hom(Z/{n}, Z/{m})
            </div>
            <div className="font-mono text-2xl text-primary-400">
              Z/{g}
            </div>
            <div className="text-xs text-dark-500 mt-1">
              gcd({n}, {m}) = {g}
            </div>
          </motion.div>

          <div className="text-sm text-dark-400">
            <strong>Elements:</strong> The {g} elements correspond to homs sending 1 ↦ k·(m/g) for k = 0, 1, ..., {g-1}
          </div>
        </div>
      )}

      {/* Hilbert's Theorem 90 */}
      <div className="bg-dark-900 rounded-lg p-4 mt-4">
        <button
          onClick={() => setShowHilbert(!showHilbert)}
          className="text-sm text-dark-400 hover:text-dark-200 flex items-center gap-2"
        >
          <span>{showHilbert ? '▼' : '▶'}</span>
          Hilbert's Theorem 90
        </button>

        {showHilbert && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 space-y-3"
          >
            <div className="bg-amber-500/10 p-3 rounded border border-amber-500/30">
              <div className="text-amber-400 font-semibold mb-1">Additive Form</div>
              <div className="font-mono text-sm">H¹(Gal(L/K), L) = 0</div>
              <div className="text-xs text-dark-400 mt-1">
                Every crossed hom to L is principal
              </div>
            </div>

            <div className="bg-purple-500/10 p-3 rounded border border-purple-500/30">
              <div className="text-purple-400 font-semibold mb-1">Multiplicative Form</div>
              <div className="font-mono text-sm">H¹(Gal(L/K), L*) = 0</div>
              <div className="text-xs text-dark-400 mt-1">
                If N(β) = 1, then β = α/σ(α) for some α
              </div>
            </div>

            <div className="bg-dark-800 p-3 rounded text-sm">
              <strong className="text-emerald-400">Classical (cyclic L/K):</strong>
              <span className="text-dark-300 ml-2">
                β ∈ L* with norm 1 implies β = α/σ(α)
              </span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 text-xs text-dark-500">
        H¹ classifies crossed homomorphisms modulo principal ones. Hilbert 90 is fundamental in Galois cohomology.
      </div>
    </div>
  );
}
