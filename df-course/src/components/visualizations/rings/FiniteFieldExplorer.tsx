import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function findGenerator(p: number): number | null {
  // Find a primitive root mod p
  const phi = p - 1;
  const factors: number[] = [];
  let n = phi;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
      while (n % i === 0) n /= i;
    }
  }
  if (n > 1) factors.push(n);

  for (let g = 2; g < p; g++) {
    let isGenerator = true;
    for (const f of factors) {
      let pow = phi / f;
      let val = 1;
      let base = g;
      while (pow > 0) {
        if (pow % 2 === 1) val = (val * base) % p;
        base = (base * base) % p;
        pow = Math.floor(pow / 2);
      }
      if (val === 1) {
        isGenerator = false;
        break;
      }
    }
    if (isGenerator) return g;
  }
  return null;
}

function pow(base: number, exp: number, m: number): number {
  let result = 1;
  base = mod(base, m);
  while (exp > 0) {
    if (exp % 2 === 1) result = mod(result * base, m);
    exp = Math.floor(exp / 2);
    base = mod(base * base, m);
  }
  return result;
}

export function FiniteFieldExplorer() {
  const [prime, setPrime] = useState(7);
  const [showOperations, setShowOperations] = useState(false);
  const [selectedA, setSelectedA] = useState<number | null>(null);
  const [selectedB, setSelectedB] = useState<number | null>(null);

  const isValidPrime = isPrime(prime);
  const generator = useMemo(() => isValidPrime ? findGenerator(prime) : null, [prime, isValidPrime]);

  const elements = useMemo(() => {
    if (!isValidPrime) return [];
    return Array.from({ length: prime }, (_, i) => i);
  }, [prime, isValidPrime]);

  const units = useMemo(() => elements.filter(x => x !== 0), [elements]);

  const generatorPowers = useMemo(() => {
    if (!generator) return [];
    const powers: { exp: number; value: number }[] = [];
    for (let i = 0; i < prime - 1; i++) {
      powers.push({ exp: i, value: pow(generator, i, prime) });
    }
    return powers;
  }, [generator, prime]);

  const inverses = useMemo(() => {
    const inv: Record<number, number> = {};
    for (const a of units) {
      for (const b of units) {
        if (mod(a * b, prime) === 1) {
          inv[a] = b;
          break;
        }
      }
    }
    return inv;
  }, [units, prime]);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Finite Field Explorer</h4>

      {/* Field Selection */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div>
          <label className="text-dark-400 text-sm block mb-1">Prime p =</label>
          <input
            type="number"
            min={2}
            max={31}
            value={prime}
            onChange={(e) => setPrime(Math.max(2, Math.min(31, parseInt(e.target.value) || 2)))}
            className="w-20 bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
          />
        </div>

        <div className="flex gap-2">
          {[2, 3, 5, 7, 11, 13].map(p => (
            <button
              key={p}
              onClick={() => setPrime(p)}
              className={`px-3 py-2 rounded ${
                prime === p ? 'bg-blue-600 text-white' : 'bg-dark-700 text-dark-300'
              }`}
            >
              F_{p}
            </button>
          ))}
        </div>
      </div>

      {!isValidPrime && (
        <div className="bg-red-900/30 p-4 rounded-lg mb-6 text-red-400">
          {prime} is not prime! F_n only exists when n is a prime power.
        </div>
      )}

      {isValidPrime && (
        <>
          {/* Field Info */}
          <div className="bg-dark-700 p-4 rounded-lg mb-6">
            <div className="text-dark-200 font-medium mb-2">
              F_{prime} = Z/{prime}Z
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-dark-400">
                |F_{prime}| = <span className="text-blue-400">{prime}</span>
              </span>
              <span className="text-dark-400">
                |F_{prime}*| = <span className="text-purple-400">{prime - 1}</span>
              </span>
              {generator && (
                <span className="text-dark-400">
                  Generator: <span className="text-green-400">{generator}</span>
                </span>
              )}
            </div>
          </div>

          {/* Elements */}
          <div className="mb-6">
            <div className="text-dark-400 text-sm mb-2">Elements of F_{prime}:</div>
            <div className="flex flex-wrap gap-2">
              {elements.map(el => (
                <motion.button
                  key={el}
                  onClick={() => {
                    if (selectedA === null) setSelectedA(el);
                    else if (selectedB === null) setSelectedB(el);
                    else {
                      setSelectedA(el);
                      setSelectedB(null);
                    }
                  }}
                  className={`w-10 h-10 rounded flex items-center justify-center font-mono ${
                    selectedA === el ? 'bg-blue-600 text-white ring-2 ring-blue-400' :
                    selectedB === el ? 'bg-purple-600 text-white ring-2 ring-purple-400' :
                    el === 0 ? 'bg-dark-600 text-dark-400' :
                    'bg-dark-700 text-dark-300 hover:bg-dark-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {el}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Selected Operation */}
          <AnimatePresence>
            {selectedA !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-dark-700 p-4 rounded-lg mb-6"
              >
                {selectedB !== null ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-4 font-mono">
                      <span className="text-blue-400">{selectedA}</span>
                      <span className="text-dark-500">+</span>
                      <span className="text-purple-400">{selectedB}</span>
                      <span className="text-dark-500">=</span>
                      <span className="text-green-400">{mod(selectedA + selectedB, prime)}</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 font-mono">
                      <span className="text-blue-400">{selectedA}</span>
                      <span className="text-dark-500">·</span>
                      <span className="text-purple-400">{selectedB}</span>
                      <span className="text-dark-500">=</span>
                      <span className="text-green-400">{mod(selectedA * selectedB, prime)}</span>
                    </div>
                    {selectedA !== 0 && selectedB !== 0 && (
                      <div className="flex items-center justify-center gap-4 font-mono">
                        <span className="text-blue-400">{selectedA}</span>
                        <span className="text-dark-500">/</span>
                        <span className="text-purple-400">{selectedB}</span>
                        <span className="text-dark-500">=</span>
                        <span className="text-yellow-400">
                          {mod(selectedA * inverses[selectedB], prime)}
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-dark-400 mb-2">
                      Selected: <span className="text-blue-400 font-mono">{selectedA}</span>
                    </div>
                    {selectedA !== 0 && (
                      <div className="text-dark-400">
                        Inverse: <span className="text-green-400 font-mono">{inverses[selectedA]}</span>
                        <span className="text-dark-500 ml-2">
                          ({selectedA} × {inverses[selectedA]} = {mod(selectedA * inverses[selectedA], prime)})
                        </span>
                      </div>
                    )}
                    <div className="text-dark-500 text-sm mt-2">
                      Select another element for operations
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Generator Powers */}
          {generator && (
            <div className="mb-6">
              <button
                onClick={() => setShowOperations(!showOperations)}
                className="text-sm text-blue-400 hover:text-blue-300 mb-2"
              >
                {showOperations ? '▼' : '▶'} Powers of generator g = {generator}
              </button>

              <AnimatePresence>
                {showOperations && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-dark-700 p-4 rounded-lg overflow-hidden"
                  >
                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                      {generatorPowers.map(({ exp, value }) => (
                        <div key={exp} className="text-center p-2 bg-dark-800 rounded">
                          <div className="text-dark-500 text-xs">
                            {generator}^{exp}
                          </div>
                          <div className="text-green-400 font-mono">{value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-dark-500 text-xs mt-3">
                      F_{prime}* = ⟨{generator}⟩ is cyclic of order {prime - 1}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Inverses Table */}
          <div className="p-4 bg-dark-700/50 rounded-lg">
            <h5 className="text-dark-200 font-medium mb-2">Multiplicative Inverses</h5>
            <div className="flex flex-wrap gap-2">
              {units.map(a => (
                <span key={a} className="bg-dark-700 px-2 py-1 rounded text-sm font-mono">
                  <span className="text-dark-400">{a}^-1 = </span>
                  <span className="text-green-400">{inverses[a]}</span>
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
