import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TestResult = {
  method: string;
  applicable: boolean;
  result: 'irreducible' | 'reducible' | 'inconclusive';
  explanation: string;
};

function rationalRootTest(coeffs: number[]): TestResult {
  if (coeffs.length < 2) {
    return { method: 'Rational Root', applicable: false, result: 'inconclusive', explanation: 'Degree too low' };
  }

  const a0 = coeffs[0];
  const an = coeffs[coeffs.length - 1];

  if (a0 === 0 || an === 0) {
    return { method: 'Rational Root', applicable: true, result: 'reducible', explanation: 'Polynomial has factor x' };
  }

  const divisorsOf = (n: number): number[] => {
    const d: number[] = [];
    n = Math.abs(n);
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        d.push(i, -i);
        if (i !== n / i) d.push(n / i, -(n / i));
      }
    }
    return d;
  };

  const pValues = divisorsOf(a0);
  const qValues = divisorsOf(an).filter(q => q > 0);

  const candidates: string[] = [];
  const roots: number[] = [];

  for (const p of pValues) {
    for (const q of qValues) {
      const r = p / q;
      let val = 0;
      for (let i = coeffs.length - 1; i >= 0; i--) {
        val = val * r + coeffs[i];
      }
      if (Math.abs(val) < 1e-10 && !roots.some(x => Math.abs(x - r) < 1e-10)) {
        roots.push(r);
      }
    }
  }

  for (const p of [...new Set(pValues.map(Math.abs))]) {
    for (const q of qValues) {
      if (q !== 1) candidates.push(`±${p}/${q}`);
    }
    candidates.push(`±${p}`);
  }

  if (roots.length > 0) {
    return {
      method: 'Rational Root',
      applicable: true,
      result: 'reducible',
      explanation: `Found root(s): ${roots.map(r => r === Math.floor(r) ? r : r.toFixed(3)).join(', ')}`
    };
  }

  return {
    method: 'Rational Root',
    applicable: true,
    result: coeffs.length <= 4 ? 'irreducible' : 'inconclusive',
    explanation: coeffs.length <= 4
      ? `No rational roots among candidates. Degree ≤ 3, so irreducible over Q`
      : `No rational roots, but degree > 3. May still factor.`
  };
}

function eisensteinTest(coeffs: number[], p: number): TestResult {
  if (coeffs.length < 2) {
    return { method: `Eisenstein (p=${p})`, applicable: false, result: 'inconclusive', explanation: 'Degree too low' };
  }

  const an = coeffs[coeffs.length - 1];
  const a0 = coeffs[0];

  // Check conditions
  const cond1 = an % p !== 0;
  const cond2 = coeffs.slice(0, -1).every(c => c % p === 0);
  const cond3 = a0 % (p * p) !== 0;

  if (cond1 && cond2 && cond3) {
    return {
      method: `Eisenstein (p=${p})`,
      applicable: true,
      result: 'irreducible',
      explanation: `p=${p}: p∤a_n, p|a_i for i<n, p²∤a_0 ✓`
    };
  }

  const failures: string[] = [];
  if (!cond1) failures.push(`p|a_n`);
  if (!cond2) failures.push(`p∤a_i for some i<n`);
  if (!cond3) failures.push(`p²|a_0`);

  return {
    method: `Eisenstein (p=${p})`,
    applicable: false,
    result: 'inconclusive',
    explanation: `Conditions failed: ${failures.join(', ')}`
  };
}

function modPReductionTest(coeffs: number[], p: number): TestResult {
  // Reduce coefficients mod p
  const reduced = coeffs.map(c => ((c % p) + p) % p);

  // Check if leading coef becomes 0 (can't use)
  while (reduced.length > 1 && reduced[reduced.length - 1] === 0) {
    reduced.pop();
  }

  if (reduced.length !== coeffs.length) {
    return {
      method: `Reduction mod ${p}`,
      applicable: false,
      result: 'inconclusive',
      explanation: `Leading coefficient divisible by ${p}`
    };
  }

  // Check for roots in Z_p
  for (let x = 0; x < p; x++) {
    let val = 0;
    for (let i = reduced.length - 1; i >= 0; i--) {
      val = (val * x + reduced[i]) % p;
    }
    if (val === 0) {
      return {
        method: `Reduction mod ${p}`,
        applicable: true,
        result: 'inconclusive',
        explanation: `Has root ${x} in Z_${p}. May or may not be irreducible over Q.`
      };
    }
  }

  if (reduced.length <= 4) {
    return {
      method: `Reduction mod ${p}`,
      applicable: true,
      result: 'irreducible',
      explanation: `No roots in Z_${p}, degree ≤ 3. Irreducible mod ${p}, hence over Q.`
    };
  }

  return {
    method: `Reduction mod ${p}`,
    applicable: true,
    result: 'inconclusive',
    explanation: `No linear factors mod ${p}, but degree > 3. Need to check quadratic factors.`
  };
}

export function IrreducibilityTester() {
  const [polyStr, setPolyStr] = useState('x^4 + x + 1');
  const [testPrime, setTestPrime] = useState(2);

  const coeffs = useMemo(() => {
    const c: number[] = [];
    const str = polyStr.replace(/\s/g, '').replace(/-/g, '+-');
    const terms = str.split('+').filter(t => t);

    for (const term of terms) {
      if (term.includes('x')) {
        const [coefPart, powPart] = term.split('x');
        const coef = coefPart === '' || coefPart === '+' ? 1 : coefPart === '-' ? -1 : parseInt(coefPart);
        const pow = powPart?.includes('^') ? parseInt(powPart.slice(1)) : 1;
        while (c.length <= pow) c.push(0);
        c[pow] += coef;
      } else {
        const val = parseInt(term);
        if (!isNaN(val)) {
          if (c.length === 0) c.push(0);
          c[0] += val;
        }
      }
    }
    return c.length ? c : [0];
  }, [polyStr]);

  const tests = useMemo(() => {
    const results: TestResult[] = [];
    results.push(rationalRootTest(coeffs));
    results.push(eisensteinTest(coeffs, testPrime));
    results.push(modPReductionTest(coeffs, testPrime));
    return results;
  }, [coeffs, testPrime]);

  const conclusiveResult = tests.find(t => t.result !== 'inconclusive');

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Irreducibility Tester</h4>

      {/* Input */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="text-dark-400 text-sm block mb-1">Polynomial f(x) =</label>
          <input
            type="text"
            value={polyStr}
            onChange={(e) => setPolyStr(e.target.value)}
            className="w-full bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
            placeholder="x^4 + x + 1"
          />
        </div>
        <div>
          <label className="text-dark-400 text-sm block mb-1">Test prime p =</label>
          <input
            type="number"
            min={2}
            value={testPrime}
            onChange={(e) => setTestPrime(Math.max(2, parseInt(e.target.value) || 2))}
            className="w-20 bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
          />
        </div>
      </div>

      {/* Quick Prime Buttons */}
      <div className="flex gap-2 mb-6">
        {[2, 3, 5, 7, 11].map(p => (
          <button
            key={p}
            onClick={() => setTestPrime(p)}
            className={`px-3 py-1 rounded text-sm ${
              testPrime === p ? 'bg-blue-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            p = {p}
          </button>
        ))}
      </div>

      {/* Overall Verdict */}
      {conclusiveResult && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg mb-6 ${
            conclusiveResult.result === 'irreducible'
              ? 'bg-green-900/30 border border-green-600'
              : 'bg-red-900/30 border border-red-600'
          }`}
        >
          <div className={`font-semibold ${
            conclusiveResult.result === 'irreducible' ? 'text-green-400' : 'text-red-400'
          }`}>
            {conclusiveResult.result === 'irreducible' ? 'IRREDUCIBLE' : 'REDUCIBLE'} over Q
          </div>
          <div className="text-dark-300 text-sm mt-1">
            Determined by: {conclusiveResult.method}
          </div>
        </motion.div>
      )}

      {/* Test Results */}
      <div className="space-y-3">
        {tests.map((test, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-4 rounded-lg ${
              test.result === 'irreducible' ? 'bg-green-900/20' :
              test.result === 'reducible' ? 'bg-red-900/20' :
              'bg-dark-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-dark-200 font-medium">{test.method}</span>
              <span className={`px-2 py-1 rounded text-xs ${
                test.result === 'irreducible' ? 'bg-green-900/50 text-green-400' :
                test.result === 'reducible' ? 'bg-red-900/50 text-red-400' :
                'bg-dark-600 text-dark-400'
              }`}>
                {test.result === 'irreducible' ? '✓ Irreducible' :
                 test.result === 'reducible' ? '✗ Reducible' : '? Inconclusive'}
              </span>
            </div>
            <div className="text-dark-400 text-sm">{test.explanation}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Reference */}
      <div className="mt-6 p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Method Summary</h5>
        <ul className="text-dark-400 text-sm space-y-1">
          <li>• <span className="text-blue-400">Rational Root:</span> If deg ≤ 3 and no rational roots, irreducible</li>
          <li>• <span className="text-purple-400">Eisenstein:</span> p∤a_n, p|a_i (i{'<'}n), p²∤a_0 ⟹ irreducible</li>
          <li>• <span className="text-green-400">Mod p:</span> Irreducible mod p ⟹ irreducible over Q</li>
        </ul>
      </div>
    </div>
  );
}
