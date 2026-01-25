import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

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

function extendedGcd(a: number, b: number): [number, number, number] {
  if (b === 0) return [a, 1, 0];
  const [g, x, y] = extendedGcd(b, a % b);
  return [g, y, x - Math.floor(a / b) * y];
}

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function solveCRT(congruences: { a: number; m: number }[]): { solution: number; modulus: number; steps: string[] } | null {
  const steps: string[] = [];

  // Check pairwise coprimality
  for (let i = 0; i < congruences.length; i++) {
    for (let j = i + 1; j < congruences.length; j++) {
      const g = gcd(congruences[i].m, congruences[j].m);
      if (g !== 1) {
        steps.push(`gcd(${congruences[i].m}, ${congruences[j].m}) = ${g} ≠ 1, not coprime!`);
        return null;
      }
    }
  }
  steps.push('All moduli are pairwise coprime ✓');

  const M = congruences.reduce((acc, c) => acc * c.m, 1);
  steps.push(`Product of moduli: M = ${congruences.map(c => c.m).join(' × ')} = ${M}`);

  let x = 0;
  for (const { a, m } of congruences) {
    const Mi = M / m;
    const [, yi] = extendedGcd(Mi, m);
    const term = a * Mi * yi;
    steps.push(`For x ≡ ${a} (mod ${m}): M_i = ${Mi}, y_i = ${mod(yi, m)}, term = ${a} × ${Mi} × ${mod(yi, m)} = ${mod(term, M)}`);
    x += term;
  }

  x = mod(x, M);
  steps.push(`Solution: x ≡ ${x} (mod ${M})`);

  return { solution: x, modulus: M, steps };
}

export function CRTCalculator() {
  const [congruences, setCongruences] = useState([
    { a: 2, m: 3 },
    { a: 3, m: 5 },
  ]);

  const addCongruence = () => {
    setCongruences([...congruences, { a: 0, m: 7 }]);
  };

  const removeCongruence = (idx: number) => {
    if (congruences.length > 2) {
      setCongruences(congruences.filter((_, i) => i !== idx));
    }
  };

  const updateCongruence = (idx: number, field: 'a' | 'm', value: number) => {
    const newCongruences = [...congruences];
    newCongruences[idx][field] = value;
    setCongruences(newCongruences);
  };

  const result = useMemo(() => solveCRT(congruences), [congruences]);

  const verifyResult = (x: number) => {
    return congruences.map(({ a, m }) => ({
      expected: a,
      actual: mod(x, m),
      m,
      matches: mod(x, m) === mod(a, m),
    }));
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Chinese Remainder Theorem Calculator</h4>

      {/* Congruence Inputs */}
      <div className="space-y-3 mb-6">
        <div className="text-dark-400 text-sm">System of congruences:</div>
        {congruences.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="text-dark-300 font-mono">x ≡</span>
            <input
              type="number"
              value={c.a}
              onChange={(e) => updateCongruence(idx, 'a', parseInt(e.target.value) || 0)}
              className="w-16 bg-dark-700 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
            />
            <span className="text-dark-300 font-mono">(mod</span>
            <input
              type="number"
              min={2}
              value={c.m}
              onChange={(e) => updateCongruence(idx, 'm', Math.max(2, parseInt(e.target.value) || 2))}
              className="w-16 bg-dark-700 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
            />
            <span className="text-dark-300 font-mono">)</span>
            {congruences.length > 2 && (
              <button
                onClick={() => removeCongruence(idx)}
                className="text-red-400 hover:text-red-300 px-2"
              >
                ×
              </button>
            )}
          </motion.div>
        ))}
        <button
          onClick={addCongruence}
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          + Add congruence
        </button>
      </div>

      {/* Solution */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        {result ? (
          <>
            <div className="text-dark-200 font-medium mb-3">Solution</div>
            <div className="text-center font-mono text-xl mb-4">
              <span className="text-green-400">x ≡ {result.solution}</span>
              <span className="text-dark-500 mx-2">(mod</span>
              <span className="text-blue-400">{result.modulus}</span>
              <span className="text-dark-500">)</span>
            </div>

            {/* Verification */}
            <div className="text-dark-400 text-sm mb-2">Verification:</div>
            <div className="space-y-1">
              {verifyResult(result.solution).map((v, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-mono">
                  <span className={v.matches ? 'text-green-400' : 'text-red-400'}>
                    {v.matches ? '✓' : '✗'}
                  </span>
                  <span className="text-dark-300">
                    {result.solution} mod {v.m} = {v.actual}
                    {v.matches ? ` = ${v.expected}` : ` ≠ ${v.expected}`}
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-red-400 text-center">
            Moduli are not pairwise coprime! CRT does not apply.
          </div>
        )}
      </div>

      {/* Steps */}
      {result && (
        <div className="bg-dark-700/50 p-4 rounded-lg mb-6">
          <h5 className="text-dark-200 font-medium mb-2">Solution Steps</h5>
          <div className="space-y-1 text-sm">
            {result.steps.map((step, idx) => (
              <div key={idx} className="text-dark-400 font-mono">{idx + 1}. {step}</div>
            ))}
          </div>
        </div>
      )}

      {/* Ring Isomorphism */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Ring Isomorphism</h5>
        <div className="font-mono text-center text-sm">
          <span className="text-blue-400">Z/{result?.modulus || '?'}Z</span>
          <span className="text-dark-500 mx-2">≅</span>
          <span className="text-purple-400">
            {congruences.map(c => `Z/${c.m}Z`).join(' × ')}
          </span>
        </div>
        <div className="text-dark-500 text-xs text-center mt-2">
          The CRT gives an explicit ring isomorphism when moduli are coprime
        </div>
      </div>
    </div>
  );
}
