import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

interface Step {
  a: number;
  b: number;
  q: number;
  r: number;
}

export function EuclideanAlgorithmDemo({ className = '' }: Props) {
  const [a, setA] = useState(252);
  const [b, setB] = useState(105);
  const [currentStep, setCurrentStep] = useState(0);
  const [showExtended, setShowExtended] = useState(false);

  // Calculate Euclidean algorithm steps
  const steps = useMemo(() => {
    const result: Step[] = [];
    let x = Math.abs(a);
    let y = Math.abs(b);
    if (y === 0) return [{ a: x, b: 0, q: 0, r: x }];
    if (x < y) [x, y] = [y, x];

    while (y > 0) {
      const q = Math.floor(x / y);
      const r = x % y;
      result.push({ a: x, b: y, q, r });
      x = y;
      y = r;
    }
    return result;
  }, [a, b]);

  const gcd = steps.length > 0 ? steps[steps.length - 1].b : Math.abs(a);

  // Bezout coefficients
  const bezout = useMemo(() => {
    let x = Math.abs(a);
    let y = Math.abs(b);
    if (y === 0) return { s: 1, t: 0 };
    if (x < y) [x, y] = [y, x];

    let s0 = 1, s1 = 0;
    let t0 = 0, t1 = 1;

    while (y > 0) {
      const q = Math.floor(x / y);
      const r = x % y;
      const s2 = s0 - q * s1;
      const t2 = t0 - q * t1;

      x = y;
      y = r;
      s0 = s1;
      s1 = s2;
      t0 = t1;
      t1 = t2;
    }

    return { s: s0, t: t0 };
  }, [a, b]);

  const displayedSteps = steps.slice(0, currentStep + 1);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Euclidean Algorithm</h3>

      <p className="text-dark-300 mb-6">
        Find gcd(a, b) by repeatedly dividing: a = bq + r, then gcd(a, b) = gcd(b, r).
        Continue until the remainder is 0.
      </p>

      {/* Input controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-blue-400 text-sm">a = {a}</label>
          <input
            type="range"
            min="1"
            max="500"
            step="1"
            value={a}
            onChange={(e) => {
              setA(parseInt(e.target.value));
              setCurrentStep(0);
            }}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-emerald-400 text-sm">b = {b}</label>
          <input
            type="range"
            min="1"
            max="500"
            step="1"
            value={b}
            onChange={(e) => {
              setB(parseInt(e.target.value));
              setCurrentStep(0);
            }}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Direct input */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="number"
          value={a}
          onChange={(e) => {
            const val = parseInt(e.target.value) || 1;
            setA(Math.max(1, Math.min(9999, val)));
            setCurrentStep(0);
          }}
          className="px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 text-center"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => {
            const val = parseInt(e.target.value) || 1;
            setB(Math.max(1, Math.min(9999, val)));
            setCurrentStep(0);
          }}
          className="px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 text-center"
        />
      </div>

      {/* Step control */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 disabled:opacity-50"
        >
          ← Prev
        </button>
        <span className="text-dark-300">
          Step {currentStep + 1} of {steps.length}
        </span>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 disabled:opacity-50"
        >
          Next →
        </button>
        <button
          onClick={() => setShowExtended(!showExtended)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showExtended ? 'bg-purple-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Extended
        </button>
      </div>

      {/* Algorithm steps table */}
      <div className="bg-dark-900 rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-700">
              <th className="py-2 px-3 text-left">#</th>
              <th className="py-2 px-3 text-right">a</th>
              <th className="py-2 px-3 text-center">=</th>
              <th className="py-2 px-3 text-right">b</th>
              <th className="py-2 px-3 text-center">×</th>
              <th className="py-2 px-3 text-right">q</th>
              <th className="py-2 px-3 text-center">+</th>
              <th className="py-2 px-3 text-right">r</th>
            </tr>
          </thead>
          <tbody>
            {displayedSteps.map((step, i) => (
              <tr
                key={i}
                className={`${
                  i === currentStep
                    ? 'bg-primary-500/20 text-dark-100'
                    : 'text-dark-300'
                } ${i === steps.length - 1 ? 'font-bold' : ''}`}
              >
                <td className="py-2 px-3 text-dark-500">{i + 1}</td>
                <td className="py-2 px-3 text-right text-blue-400">{step.a}</td>
                <td className="py-2 px-3 text-center">=</td>
                <td className="py-2 px-3 text-right text-emerald-400">{step.b}</td>
                <td className="py-2 px-3 text-center">×</td>
                <td className="py-2 px-3 text-right text-orange-400">{step.q}</td>
                <td className="py-2 px-3 text-center">+</td>
                <td className="py-2 px-3 text-right text-purple-400">{step.r}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Result */}
      <div className="mt-4 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50">
        <p className="text-center">
          <span className="text-emerald-400 font-bold text-xl">
            gcd({a}, {b}) = {gcd}
          </span>
        </p>
      </div>

      {/* Extended Euclidean */}
      {showExtended && (
        <div className="mt-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
          <p className="text-purple-400 font-medium mb-2">Bézout's Identity:</p>
          <p className="text-dark-100 font-mono text-lg text-center">
            {bezout.s} × {Math.max(a, b)} + {bezout.t} × {Math.min(a, b)} = {gcd}
          </p>
          <p className="text-dark-400 text-sm mt-2 text-center">
            There exist integers s, t such that sa + tb = gcd(a, b)
          </p>
        </div>
      )}

      {/* Info */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          The Euclidean algorithm runs in O(log(min(a,b))) divisions.
          It's fundamental to number theory and cryptography (e.g., computing modular inverses).
        </p>
      </div>
    </div>
  );
}
