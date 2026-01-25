import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Modular exponentiation
function modPow(base: number, exp: number, mod: number): number {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * base) % mod;
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
}

// Find primitive root modulo p
function findPrimitiveRoot(p: number): number {
  for (let g = 2; g < p; g++) {
    const seen = new Set<number>();
    let valid = true;
    for (let i = 1; i < p; i++) {
      const val = modPow(g, i, p);
      if (seen.has(val)) {
        valid = false;
        break;
      }
      seen.add(val);
    }
    if (valid && seen.size === p - 1) return g;
  }
  return 2;
}

// Get all divisors
function getDivisors(n: number): number[] {
  const divisors: number[] = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) divisors.push(n / i);
    }
  }
  return divisors.sort((a, b) => a - b);
}

export function FiniteFieldDemo() {
  const [p, setP] = useState(7);
  const [showMultTable, setShowMultTable] = useState(false);

  const primes = [2, 3, 5, 7, 11, 13];

  const elements = useMemo(() => {
    return Array.from({ length: p }, (_, i) => i);
  }, [p]);

  const nonzeroElements = useMemo(() => {
    return Array.from({ length: p - 1 }, (_, i) => i + 1);
  }, [p]);

  const primitiveRoot = useMemo(() => findPrimitiveRoot(p), [p]);

  const powers = useMemo(() => {
    const result: number[] = [];
    for (let i = 0; i < p - 1; i++) {
      result.push(modPow(primitiveRoot, i, p));
    }
    return result;
  }, [p, primitiveRoot]);

  const subfields = useMemo(() => {
    // F_p only has F_p as subfield
    return [{ size: p, generator: `F_${p}` }];
  }, [p]);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Finite Field F_p Explorer
      </h3>

      {/* Prime selector */}
      <div className="mb-6">
        <label className="text-dark-300 text-sm mr-2">p =</label>
        {primes.map((prime) => (
          <button
            key={prime}
            onClick={() => setP(prime)}
            className={`px-3 py-1 mx-1 rounded transition-all ${
              p === prime
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {prime}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Field info */}
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              F_{p} = Z/{p}Z
            </h4>
            <div className="text-dark-300 text-sm">
              Elements: {'{'}
              {elements.join(', ')}
              {'}'}
            </div>
            <div className="text-dark-300 text-sm mt-1">
              Order: |F_{p}| = {p}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Multiplicative Group F_{p}*
            </h4>
            <div className="text-dark-300 text-sm">
              Elements: {'{'}
              {nonzeroElements.join(', ')}
              {'}'}
            </div>
            <div className="text-dark-300 text-sm mt-1">
              Order: |F_{p}*| = {p - 1}
            </div>
            <div className="text-amber-400 text-sm mt-2">
              F_{p}* is cyclic!
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Primitive Root: g = {primitiveRoot}
            </h4>
            <div className="text-dark-300 text-sm">
              Powers of {primitiveRoot}:
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {powers.map((val, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-dark-700 rounded text-xs font-mono"
                >
                  {primitiveRoot}^{i} = {val}
                </span>
              ))}
            </div>
            <div className="text-emerald-400 text-sm mt-2">
              F_{p}* = ⟨{primitiveRoot}⟩ ≅ Z/{p - 1}Z
            </div>
          </div>
        </div>

        {/* Frobenius and structure */}
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Frobenius Automorphism
            </h4>
            <div className="text-dark-300 text-sm">
              φ: x ↦ x^{p}
            </div>
            <div className="text-dark-400 text-xs mt-2">
              For F_p, Frobenius is the identity (every element satisfies x^p = x)
            </div>
            <div className="mt-3 text-sm">
              <span className="text-dark-400">Gal(F_{p}/F_{p}) = </span>
              <span className="text-white">{'{id}'}</span>
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Extension Fields
            </h4>
            <div className="text-dark-300 text-sm">
              F_{p} ⊂ F_{p}² ⊂ F_{p}³ ⊂ ...
            </div>
            <div className="mt-2 text-xs text-dark-400">
              F_{p}^n contains F_{p}^m iff m | n
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {[1, 2, 3, 4, 6].map((n) => (
                <span
                  key={n}
                  className="px-2 py-1 bg-dark-700 rounded text-xs"
                >
                  |F_{p}^{n}| = {Math.pow(p, n)}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowMultTable(!showMultTable)}
            className="w-full px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            {showMultTable ? 'Hide' : 'Show'} Multiplication Table
          </button>

          {showMultTable && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-dark-900 rounded-lg p-4 overflow-auto"
            >
              <table className="text-xs font-mono">
                <thead>
                  <tr>
                    <th className="px-2 py-1 text-primary-400">×</th>
                    {nonzeroElements.map((a) => (
                      <th key={a} className="px-2 py-1 text-primary-400">
                        {a}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {nonzeroElements.map((a) => (
                    <tr key={a}>
                      <td className="px-2 py-1 text-primary-400">{a}</td>
                      {nonzeroElements.map((b) => (
                        <td key={b} className="px-2 py-1 text-dark-300">
                          {(a * b) % p}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        Finite fields F_q exist exactly when q = p^n is a prime power.
        The multiplicative group F_q* is always cyclic of order q-1.
      </p>
    </div>
  );
}
