import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

export function QuadraticResidueChecker({ className = '' }: Props) {
  const [prime, setPrime] = useState(13);
  const [checkValue, setCheckValue] = useState(3);

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
    base = ((base % mod) + mod) % mod;
    while (exp > 0) {
      if (exp % 2 === 1) result = (result * base) % mod;
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
    }
    return result;
  };

  const primeValid = isPrime(prime) && prime > 2 && prime <= 47;

  const analysis = useMemo(() => {
    if (!primeValid) return null;

    const squares: Map<number, number[]> = new Map();
    for (let x = 1; x < prime; x++) {
      const sq = (x * x) % prime;
      if (!squares.has(sq)) squares.set(sq, []);
      squares.get(sq)!.push(x);
    }

    const qr = [...squares.keys()].sort((a, b) => a - b);
    const nr: number[] = [];
    for (let a = 1; a < prime; a++) {
      if (!squares.has(a)) nr.push(a);
    }

    return { qr, nr, squares };
  }, [prime, primeValid]);

  const checkResult = useMemo(() => {
    if (!primeValid || !analysis) return null;

    const a = ((checkValue % prime) + prime) % prime;
    if (a === 0) return { isQR: false, eulerValue: 0, roots: [], message: 'Divisible by p' };

    const eulerValue = modPow(a, (prime - 1) / 2, prime);
    const isQR = eulerValue === 1;
    const roots = analysis.squares.get(a) || [];

    return { isQR, eulerValue, roots, a };
  }, [checkValue, prime, primeValid, analysis]);

  const legendreSymbol = checkResult?.isQR ? 1 : checkResult?.eulerValue === 0 ? 0 : -1;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Quadratic Residue Checker</h3>
      <p className="text-dark-400 text-sm mb-6">
        Check if a number is a quadratic residue modulo a prime using Euler's criterion.
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">Prime p (3-47)</label>
          <input
            type="number"
            min="3"
            max="47"
            value={prime}
            onChange={(e) => setPrime(parseInt(e.target.value) || 3)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Check value a</label>
          <input
            type="number"
            value={checkValue}
            onChange={(e) => setCheckValue(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
      </div>

      {!primeValid && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 mb-6">
          Please enter a valid odd prime between 3 and 47.
        </div>
      )}

      {primeValid && analysis && checkResult && (
        <>
          {/* Result */}
          <motion.div
            key={`${checkValue}-${prime}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-6 rounded-xl border mb-6 ${
              checkResult.isQR
                ? 'bg-emerald-500/10 border-emerald-500/30'
                : 'bg-rose-500/10 border-rose-500/30'
            }`}
          >
            <div className="text-center mb-4">
              <div className="text-3xl font-bold mb-2">
                <span className="text-dark-400">(</span>
                <span className="text-amber-400">{checkResult.a}</span>
                <span className="text-dark-400">/</span>
                <span className="text-blue-400">{prime}</span>
                <span className="text-dark-400">) = </span>
                <span className={checkResult.isQR ? 'text-emerald-400' : 'text-rose-400'}>
                  {legendreSymbol}
                </span>
              </div>
              <div className={`text-lg font-semibold ${checkResult.isQR ? 'text-emerald-400' : 'text-rose-400'}`}>
                {checkResult.a} is {checkResult.isQR ? 'a Quadratic Residue' : 'NOT a Quadratic Residue'} mod {prime}
              </div>
            </div>

            {/* Euler's criterion */}
            <div className="p-3 rounded-lg bg-dark-800/50 text-sm">
              <div className="text-dark-300">
                Euler's Criterion: {checkResult.a}^({prime - 1}/2) = {checkResult.a}^{(prime - 1) / 2} ≡{' '}
                <span className={checkResult.eulerValue === 1 ? 'text-emerald-400' : 'text-rose-400'}>
                  {checkResult.eulerValue}
                </span>{' '}
                (mod {prime})
              </div>
              {checkResult.isQR && checkResult.roots.length > 0 && (
                <div className="text-emerald-400 mt-2">
                  Square roots: x ≡ ±{checkResult.roots[0]} (mod {prime})
                  {checkResult.roots.length > 1 && ` → {${checkResult.roots.join(', ')}}`}
                </div>
              )}
            </div>
          </motion.div>

          {/* QR and NR lists */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                Quadratic Residues ({analysis.qr.length})
              </h4>
              <div className="flex flex-wrap gap-1">
                {analysis.qr.map((q) => (
                  <span
                    key={q}
                    onClick={() => setCheckValue(q)}
                    className={`px-2 py-0.5 rounded text-xs font-mono cursor-pointer transition-colors ${
                      checkResult.a === q
                        ? 'bg-emerald-500 text-white'
                        : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                    }`}
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
              <h4 className="text-sm font-semibold text-rose-400 mb-2">
                Non-Residues ({analysis.nr.length})
              </h4>
              <div className="flex flex-wrap gap-1">
                {analysis.nr.map((n) => (
                  <span
                    key={n}
                    onClick={() => setCheckValue(n)}
                    className={`px-2 py-0.5 rounded text-xs font-mono cursor-pointer transition-colors ${
                      checkResult.a === n
                        ? 'bg-rose-500 text-white'
                        : 'bg-rose-500/20 text-rose-300 hover:bg-rose-500/30'
                    }`}
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-4 p-3 rounded-lg bg-dark-700/30 text-sm text-dark-400">
            For prime p = {prime}, there are exactly (p-1)/2 = {(prime - 1) / 2} quadratic residues
            and {(prime - 1) / 2} non-residues among {'{1, 2, ..., p-1}'}.
          </div>
        </>
      )}
    </div>
  );
}
