import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Factor an integer into prime powers
function factorize(n: number): { prime: number; power: number }[] {
  if (n <= 1) return [];
  const factors: { prime: number; power: number }[] = [];
  let remaining = n;

  for (let p = 2; p * p <= remaining; p++) {
    let power = 0;
    while (remaining % p === 0) {
      power++;
      remaining /= p;
    }
    if (power > 0) factors.push({ prime: p, power });
  }
  if (remaining > 1) factors.push({ prime: remaining, power: 1 });

  return factors;
}

// Compute GCD
function gcd(a: number, b: number): number {
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

export function StructureTheoremDemo() {
  const [invariantFactors, setInvariantFactors] = useState([2, 6, 12]);
  const [newFactor, setNewFactor] = useState(4);

  // Validate divisibility chain
  const isValid = useMemo(() => {
    for (let i = 1; i < invariantFactors.length; i++) {
      if (invariantFactors[i] % invariantFactors[i-1] !== 0) return false;
    }
    return invariantFactors.every(f => f > 1);
  }, [invariantFactors]);

  // Compute elementary divisors from invariant factors
  const elementaryDivisors = useMemo(() => {
    const allFactors: { prime: number; power: number }[] = [];
    invariantFactors.forEach(f => {
      factorize(f).forEach(({ prime, power }) => {
        allFactors.push({ prime, power });
      });
    });
    return allFactors.sort((a, b) => a.prime - b.prime || a.power - b.power);
  }, [invariantFactors]);

  // Compute order of the group
  const order = invariantFactors.reduce((a, b) => a * b, 1);

  const addFactor = () => {
    if (newFactor > 1) {
      const sorted = [...invariantFactors, newFactor].sort((a, b) => a - b);
      setInvariantFactors(sorted);
    }
  };

  const removeFactor = (idx: number) => {
    if (invariantFactors.length > 1) {
      setInvariantFactors(invariantFactors.filter((_, i) => i !== idx));
    }
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Structure Theorem for Modules over PIDs</h4>

      {/* Invariant Factors Input */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Invariant Factors</h5>
        <div className="flex flex-wrap gap-2 mb-4">
          {invariantFactors.map((f, idx) => (
            <motion.div
              key={`${idx}-${f}`}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 bg-dark-800 px-3 py-1 rounded"
            >
              <span className="text-purple-400 font-mono">{f}</span>
              {invariantFactors.length > 1 && (
                <button
                  onClick={() => removeFactor(idx)}
                  className="text-red-500 hover:text-red-400 ml-1"
                >
                  ×
                </button>
              )}
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={2}
            value={newFactor}
            onChange={(e) => setNewFactor(parseInt(e.target.value) || 2)}
            className="w-20 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
          />
          <button
            onClick={addFactor}
            className="bg-dark-600 text-dark-300 px-3 py-1 rounded hover:bg-dark-500"
          >
            Add
          </button>
        </div>

        {!isValid && (
          <div className="text-red-400 text-sm mt-3">
            Invalid: Need d₁ | d₂ | ... | dₖ (each divides the next)
          </div>
        )}
        {isValid && (
          <div className="text-green-400 text-sm mt-3">
            Valid chain: {invariantFactors.join(' | ')}
          </div>
        )}
      </div>

      {/* Module Decomposition */}
      <motion.div
        key={invariantFactors.join(',')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-dark-700 p-4 rounded-lg mb-6"
      >
        <h5 className="text-dark-200 font-medium mb-3">Invariant Factor Form</h5>
        <div className="text-center font-mono mb-4">
          <span className="text-blue-400">M</span>
          <span className="text-dark-500"> ≅ </span>
          {invariantFactors.map((f, idx) => (
            <span key={idx}>
              <span className="text-purple-400">Z/{f}Z</span>
              {idx < invariantFactors.length - 1 && <span className="text-dark-500"> ⊕ </span>}
            </span>
          ))}
        </div>
        <div className="text-dark-400 text-sm text-center">
          Order = |M| = {invariantFactors.join(' × ')} = {order}
        </div>
      </motion.div>

      {/* Elementary Divisors */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Elementary Divisor Form</h5>
        <div className="text-center font-mono mb-4">
          <span className="text-blue-400">M</span>
          <span className="text-dark-500"> ≅ </span>
          {elementaryDivisors.length > 0 ? (
            elementaryDivisors.map((ed, idx) => (
              <span key={idx}>
                <span className="text-green-400">Z/{ed.prime}{ed.power > 1 && <sup>{ed.power}</sup>}Z</span>
                {idx < elementaryDivisors.length - 1 && <span className="text-dark-500"> ⊕ </span>}
              </span>
            ))
          ) : (
            <span className="text-dark-500">0</span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {elementaryDivisors.map((ed, idx) => (
            <span key={idx} className="bg-dark-800 px-2 py-1 rounded text-xs">
              <span className="text-green-400 font-mono">{ed.prime}^{ed.power}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Key Results */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Structure Theorem</h5>
        <div className="text-dark-400 text-sm space-y-2">
          <div>Every finitely generated module over a PID:</div>
          <div className="font-mono text-center py-2">
            M ≅ R^r ⊕ R/(a₁) ⊕ ... ⊕ R/(aₖ)
          </div>
          <div>where a₁ | a₂ | ... | aₖ (invariant factors)</div>
          <div className="text-purple-400 mt-2">
            For Z-modules: classifies all finitely generated abelian groups!
          </div>
        </div>
      </div>
    </div>
  );
}
