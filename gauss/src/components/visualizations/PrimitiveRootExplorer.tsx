import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

export function PrimitiveRootExplorer({ className = '' }: Props) {
  const [prime, setPrime] = useState(7);
  const [selectedBase, setSelectedBase] = useState(3);

  const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const modPow = (base: number, exp: number, mod: number): number => {
    if (mod === 1) return 0;
    let result = 1;
    base = base % mod;
    while (exp > 0) {
      if (exp % 2 === 1) result = (result * base) % mod;
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
    }
    return result;
  };

  const getOrder = (a: number, p: number): number => {
    if (a % p === 0) return 0;
    for (let k = 1; k < p; k++) {
      if (modPow(a, k, p) === 1) return k;
    }
    return p - 1;
  };

  const primeValid = isPrime(prime) && prime > 2 && prime <= 31;

  const analysis = useMemo(() => {
    if (!primeValid) return null;

    const primitiveRoots: number[] = [];
    const allOrders: { base: number; order: number; powers: number[]; isPrimitive: boolean }[] = [];

    for (let g = 2; g < prime; g++) {
      const order = getOrder(g, prime);
      const powers: number[] = [];
      for (let k = 1; k <= prime - 1; k++) {
        powers.push(modPow(g, k, prime));
      }
      const isPrimitive = order === prime - 1;
      if (isPrimitive) primitiveRoots.push(g);
      allOrders.push({ base: g, order, powers, isPrimitive });
    }

    return { primitiveRoots, allOrders };
  }, [prime, primeValid]);

  const selectedData = analysis?.allOrders.find((d) => d.base === selectedBase);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Primitive Root Explorer</h3>
      <p className="text-dark-400 text-sm mb-6">
        Explore which elements are primitive roots modulo a prime.
      </p>

      {/* Prime input */}
      <div className="mb-6">
        <label className="block text-sm text-dark-400 mb-2">Prime p (3-31)</label>
        <input
          type="number"
          min="3"
          max="31"
          value={prime}
          onChange={(e) => {
            const val = parseInt(e.target.value) || 3;
            setPrime(val);
            if (val > 2 && isPrime(val)) setSelectedBase(2);
          }}
          className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
        />
        {!primeValid && prime > 2 && (
          <p className="text-rose-400 text-sm mt-2">
            {prime} is not a valid prime in range 3-31
          </p>
        )}
      </div>

      {primeValid && analysis && (
        <>
          {/* Primitive roots summary */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-6">
            <h4 className="text-sm font-semibold text-emerald-400 mb-2">
              Primitive Roots mod {prime}:
            </h4>
            <div className="flex flex-wrap gap-2">
              {analysis.primitiveRoots.map((g) => (
                <span
                  key={g}
                  className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono cursor-pointer hover:bg-emerald-500/30"
                  onClick={() => setSelectedBase(g)}
                >
                  {g}
                </span>
              ))}
            </div>
            <p className="text-dark-400 text-xs mt-2">
              There are {analysis.primitiveRoots.length} primitive roots (φ({prime - 1}) = {analysis.primitiveRoots.length})
            </p>
          </div>

          {/* Base selector */}
          <div className="mb-6">
            <label className="block text-sm text-dark-400 mb-2">Select base to explore:</label>
            <div className="flex flex-wrap gap-2">
              {analysis.allOrders.map(({ base, isPrimitive }) => (
                <button
                  key={base}
                  onClick={() => setSelectedBase(base)}
                  className={`px-3 py-1 rounded-lg font-mono text-sm transition-colors ${
                    selectedBase === base
                      ? 'bg-primary-500 text-white'
                      : isPrimitive
                      ? 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                      : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                  }`}
                >
                  {base}
                </button>
              ))}
            </div>
          </div>

          {/* Powers table */}
          {selectedData && (
            <motion.div
              key={selectedBase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl bg-dark-900/50 border border-dark-700 overflow-hidden"
            >
              <div className={`p-4 ${selectedData.isPrimitive ? 'bg-emerald-500/10' : 'bg-dark-800/50'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-dark-100">
                      Powers of {selectedBase} mod {prime}
                    </span>
                    <span className={`ml-3 px-2 py-0.5 rounded text-xs font-semibold ${
                      selectedData.isPrimitive
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-dark-600 text-dark-300'
                    }`}>
                      Order = {selectedData.order}
                    </span>
                  </div>
                  {selectedData.isPrimitive && (
                    <span className="text-emerald-400 text-sm font-semibold">
                      Primitive Root!
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {selectedData.powers.map((power, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-lg text-center ${
                        power === 1 && idx === selectedData.order - 1
                          ? 'bg-amber-500/20 border border-amber-500/50'
                          : 'bg-dark-700/50'
                      }`}
                    >
                      <div className="text-xs text-dark-500 mb-1">
                        {selectedBase}^{idx + 1}
                      </div>
                      <div className={`font-mono font-bold ${
                        power === 1 ? 'text-amber-400' : 'text-dark-200'
                      }`}>
                        {power}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Explanation */}
                <div className="mt-4 p-3 rounded-lg bg-dark-700/30 text-sm text-dark-400">
                  {selectedData.isPrimitive ? (
                    <>
                      <span className="text-emerald-400">{selectedBase}</span> generates all {prime - 1} non-zero residues.
                      Order = {selectedData.order} = p - 1, so it's a primitive root.
                    </>
                  ) : (
                    <>
                      <span className="text-rose-400">{selectedBase}</span> has order {selectedData.order},
                      which is less than p - 1 = {prime - 1}. Not a primitive root.
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
