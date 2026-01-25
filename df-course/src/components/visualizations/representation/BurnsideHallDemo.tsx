import { useState } from 'react';
import { motion } from 'framer-motion';

function factorize(n: number): Map<number, number> {
  const factors = new Map<number, number>();
  let d = 2;
  let num = n;
  while (d * d <= num) {
    while (num % d === 0) {
      factors.set(d, (factors.get(d) || 0) + 1);
      num = num / d;
    }
    d++;
  }
  if (num > 1) factors.set(num, (factors.get(num) || 0) + 1);
  return factors;
}

function isPQsolvable(n: number): { result: boolean; primes: number[] } {
  const factors = factorize(n);
  const primes = Array.from(factors.keys());
  return { result: primes.length <= 2, primes };
}

export function BurnsideHallDemo() {
  const [n, setN] = useState(12);
  const [showHall, setShowHall] = useState(false);

  const { result: isBurnside, primes } = isPQsolvable(n);
  const factors = factorize(n);
  const factorStr = Array.from(factors.entries())
    .map(([p, e]) => e === 1 ? `${p}` : `${p}^${e}`)
    .join(' · ');

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Burnside's Theorem & Hall Subgroups
      </h4>

      {/* Burnside p^a q^b theorem */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-sm text-dark-400 mb-3">
          Burnside's Theorem: Groups of order p^a q^b are solvable
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-dark-300">|G| =</span>
          <input
            type="number"
            min="2"
            max="1000"
            value={n}
            onChange={(e) => setN(Math.max(2, parseInt(e.target.value) || 2))}
            className="w-24 px-3 py-2 bg-dark-700 rounded text-center font-mono"
          />
        </div>

        <div className="bg-dark-800 p-4 rounded">
          <div className="text-center mb-3">
            <span className="font-mono text-lg">{n} = {factorStr}</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-dark-400">Prime factors:</span>
            {primes.map((p, i) => (
              <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded font-mono">
                {p}
              </span>
            ))}
          </div>

          <motion.div
            key={`${n}-${isBurnside}`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className={`text-center p-3 rounded ${
              isBurnside
                ? 'bg-emerald-500/20 border border-emerald-500/30'
                : 'bg-amber-500/20 border border-amber-500/30'
            }`}
          >
            {isBurnside ? (
              <>
                <div className="text-emerald-400 font-semibold">
                  Burnside's Theorem Applies!
                </div>
                <div className="text-sm text-dark-300 mt-1">
                  Groups of order {n} = {factorStr} are solvable
                </div>
              </>
            ) : (
              <>
                <div className="text-amber-400 font-semibold">
                  Not p^a q^b form
                </div>
                <div className="text-sm text-dark-300 mt-1">
                  {primes.length} distinct prime factors - may or may not be solvable
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Hall's Theorem */}
      <div className="bg-dark-900 rounded-lg p-4">
        <button
          onClick={() => setShowHall(!showHall)}
          className="text-sm text-dark-400 hover:text-dark-200 flex items-center gap-2"
        >
          <span>{showHall ? '▼' : '▶'}</span>
          Hall's Theorem on π-Subgroups
        </button>

        {showHall && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 space-y-3"
          >
            <div className="bg-dark-800 p-3 rounded">
              <div className="text-purple-400 font-semibold mb-2">Hall Subgroup</div>
              <p className="text-sm text-dark-300">
                A subgroup H ≤ G is a <strong>Hall subgroup</strong> if gcd(|H|, [G:H]) = 1.
              </p>
            </div>

            <div className="bg-emerald-500/10 p-3 rounded border border-emerald-500/30">
              <div className="text-emerald-400 font-semibold mb-2">Hall's Theorem (1928)</div>
              <p className="text-sm text-dark-300 mb-2">
                For <strong>solvable</strong> groups G and any set of primes π:
              </p>
              <ol className="text-sm text-dark-300 space-y-1 list-decimal list-inside">
                <li>G has a Hall π-subgroup</li>
                <li>Any two Hall π-subgroups are conjugate</li>
                <li>Any π-subgroup is contained in a Hall π-subgroup</li>
              </ol>
            </div>

            <div className="bg-blue-500/10 p-3 rounded border border-blue-500/30">
              <div className="text-blue-400 font-semibold mb-2">Comparison with Sylow</div>
              <p className="text-sm text-dark-300">
                Hall's theorem generalizes Sylow theorems from single primes to sets of primes,
                but requires solvability.
              </p>
            </div>

            <div className="bg-amber-500/10 p-3 rounded border border-amber-500/30">
              <div className="text-amber-400 font-semibold mb-2">Counterexample</div>
              <p className="text-sm text-dark-300">
                A₅ (non-solvable, order 60) has no Hall {'{2,3}'}-subgroup (order 12).
              </p>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 text-xs text-dark-500">
        Character theory proves Burnside's theorem. Hall subgroups generalize Sylow for solvable groups.
      </div>
    </div>
  );
}
