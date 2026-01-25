import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

function primeFactorization(n: number): Map<number, number> {
  const factors = new Map<number, number>();
  let num = Math.abs(n);
  for (let p = 2; p * p <= num; p++) {
    while (num % p === 0) {
      factors.set(p, (factors.get(p) || 0) + 1);
      num /= p;
    }
  }
  if (num > 1) {
    factors.set(num, 1);
  }
  return factors;
}

function formatFactorization(factors: Map<number, number>): string {
  if (factors.size === 0) return '1';
  const parts: string[] = [];
  for (const [p, e] of factors.entries()) {
    parts.push(e === 1 ? `${p}` : `${p}^${e}`);
  }
  return parts.join(' · ');
}

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

function computeGcdFromFactors(f1: Map<number, number>, f2: Map<number, number>): Map<number, number> {
  const result = new Map<number, number>();
  const allPrimes = new Set([...f1.keys(), ...f2.keys()]);
  for (const p of allPrimes) {
    const exp = Math.min(f1.get(p) || 0, f2.get(p) || 0);
    if (exp > 0) result.set(p, exp);
  }
  return result;
}

function computeLcmFromFactors(f1: Map<number, number>, f2: Map<number, number>): Map<number, number> {
  const result = new Map<number, number>();
  const allPrimes = new Set([...f1.keys(), ...f2.keys()]);
  for (const p of allPrimes) {
    const exp = Math.max(f1.get(p) || 0, f2.get(p) || 0);
    if (exp > 0) result.set(p, exp);
  }
  return result;
}

export function FactorizationExplorer() {
  const [num1, setNum1] = useState(60);
  const [num2, setNum2] = useState(84);

  const factors1 = useMemo(() => primeFactorization(num1), [num1]);
  const factors2 = useMemo(() => primeFactorization(num2), [num2]);
  const gcdFactors = useMemo(() => computeGcdFromFactors(factors1, factors2), [factors1, factors2]);
  const lcmFactors = useMemo(() => computeLcmFromFactors(factors1, factors2), [factors1, factors2]);

  const gcdValue = gcd(num1, num2);
  const lcmValue = lcm(num1, num2);

  const allPrimes = useMemo(() => {
    const primes = new Set([...factors1.keys(), ...factors2.keys()]);
    return Array.from(primes).sort((a, b) => a - b);
  }, [factors1, factors2]);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Factorization Explorer</h4>

      {/* Number Inputs */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div>
          <label className="text-dark-400 text-sm block mb-1">a =</label>
          <input
            type="number"
            min={1}
            value={num1}
            onChange={(e) => setNum1(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-24 bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
          />
        </div>
        <div>
          <label className="text-dark-400 text-sm block mb-1">b =</label>
          <input
            type="number"
            min={1}
            value={num2}
            onChange={(e) => setNum2(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-24 bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
          />
        </div>
      </div>

      {/* Factorizations */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono w-16">{num1} =</span>
            <span className="text-dark-200 font-mono">{formatFactorization(factors1)}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-purple-400 font-mono w-16">{num2} =</span>
            <span className="text-dark-200 font-mono">{formatFactorization(factors2)}</span>
          </div>
        </div>
      </div>

      {/* Prime Exponent Comparison */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Prime Exponent Comparison</h5>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-dark-400">
                <th className="text-left p-2">Prime p</th>
                {allPrimes.map(p => (
                  <th key={p} className="text-center p-2 font-mono">{p}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-blue-400">exp in {num1}</td>
                {allPrimes.map(p => (
                  <td key={p} className="p-2 text-center font-mono text-blue-400">
                    {factors1.get(p) || 0}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-2 text-purple-400">exp in {num2}</td>
                {allPrimes.map(p => (
                  <td key={p} className="p-2 text-center font-mono text-purple-400">
                    {factors2.get(p) || 0}
                  </td>
                ))}
              </tr>
              <tr className="bg-green-900/20">
                <td className="p-2 text-green-400">min (gcd)</td>
                {allPrimes.map(p => (
                  <td key={p} className="p-2 text-center font-mono text-green-400">
                    {Math.min(factors1.get(p) || 0, factors2.get(p) || 0)}
                  </td>
                ))}
              </tr>
              <tr className="bg-yellow-900/20">
                <td className="p-2 text-yellow-400">max (lcm)</td>
                {allPrimes.map(p => (
                  <td key={p} className="p-2 text-center font-mono text-yellow-400">
                    {Math.max(factors1.get(p) || 0, factors2.get(p) || 0)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* GCD and LCM Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-green-900/20 p-4 rounded-lg"
        >
          <div className="text-green-400 font-medium mb-2">GCD (min of exponents)</div>
          <div className="font-mono text-lg text-center mb-2">
            gcd({num1}, {num2}) = <span className="text-green-400">{gcdValue}</span>
          </div>
          <div className="text-dark-400 text-sm text-center">
            = {formatFactorization(gcdFactors)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-yellow-900/20 p-4 rounded-lg"
        >
          <div className="text-yellow-400 font-medium mb-2">LCM (max of exponents)</div>
          <div className="font-mono text-lg text-center mb-2">
            lcm({num1}, {num2}) = <span className="text-yellow-400">{lcmValue}</span>
          </div>
          <div className="text-dark-400 text-sm text-center">
            = {formatFactorization(lcmFactors)}
          </div>
        </motion.div>
      </div>

      {/* GCD-LCM Relationship */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">GCD-LCM Relationship</h5>
        <div className="font-mono text-center mb-2">
          <span className="text-green-400">gcd({num1}, {num2})</span>
          <span className="text-dark-500"> × </span>
          <span className="text-yellow-400">lcm({num1}, {num2})</span>
          <span className="text-dark-500"> = </span>
          <span className="text-blue-400">{num1}</span>
          <span className="text-dark-500"> × </span>
          <span className="text-purple-400">{num2}</span>
        </div>
        <div className="font-mono text-center text-dark-400">
          <span className="text-green-400">{gcdValue}</span>
          <span className="text-dark-500"> × </span>
          <span className="text-yellow-400">{lcmValue}</span>
          <span className="text-dark-500"> = </span>
          <span className="text-dark-200">{gcdValue * lcmValue}</span>
          <span className="text-dark-500"> = </span>
          <span className="text-dark-200">{num1 * num2}</span>
          <span className={gcdValue * lcmValue === num1 * num2 ? 'text-green-400' : 'text-red-400'}>
            {gcdValue * lcmValue === num1 * num2 ? ' ✓' : ' ✗'}
          </span>
        </div>
      </div>
    </div>
  );
}
