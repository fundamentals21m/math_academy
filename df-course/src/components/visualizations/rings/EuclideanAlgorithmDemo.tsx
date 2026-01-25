import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DomainType = 'integers' | 'polynomials' | 'gaussian';

type EuclideanStep = {
  dividend: string;
  divisor: string;
  quotient: string;
  remainder: string;
  norm?: number;
};

function euclideanZ(a: number, b: number): { gcd: number; steps: EuclideanStep[]; bezout: { s: number; t: number } } {
  const steps: EuclideanStep[] = [];
  let [x, y] = [Math.abs(a), Math.abs(b)];
  if (x < y) [x, y] = [y, x];

  // Extended Euclidean
  let [old_s, s] = [1, 0];
  let [old_t, t] = [0, 1];
  let [old_r, r] = [x, y];

  while (r !== 0) {
    const q = Math.floor(old_r / r);
    steps.push({
      dividend: old_r.toString(),
      divisor: r.toString(),
      quotient: q.toString(),
      remainder: (old_r - q * r).toString(),
      norm: Math.abs(old_r),
    });
    [old_r, r] = [r, old_r - q * r];
    [old_s, s] = [s, old_s - q * s];
    [old_t, t] = [t, old_t - q * t];
  }

  // Adjust signs
  const sign_a = a >= 0 ? 1 : -1;
  const sign_b = b >= 0 ? 1 : -1;
  const final_s = Math.abs(a) >= Math.abs(b) ? old_s * sign_a : old_t * sign_b;
  const final_t = Math.abs(a) >= Math.abs(b) ? old_t * sign_b : old_s * sign_a;

  return { gcd: old_r, steps, bezout: { s: final_s, t: final_t } };
}

export function EuclideanAlgorithmDemo() {
  const [domain, setDomain] = useState<DomainType>('integers');
  const [inputA, setInputA] = useState(48);
  const [inputB, setInputB] = useState(18);
  const [currentStep, setCurrentStep] = useState<number | null>(null);

  const result = useMemo(() => {
    if (domain === 'integers') {
      return euclideanZ(inputA, inputB);
    }
    return null;
  }, [domain, inputA, inputB]);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Euclidean Algorithm Visualizer</h4>

      {/* Domain Selector */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setDomain('integers')}
          className={`px-4 py-2 rounded ${
            domain === 'integers' ? 'bg-blue-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Integers Z
        </button>
        <button
          disabled
          className="px-4 py-2 rounded bg-dark-700 text-dark-500 cursor-not-allowed"
          title="Coming soon"
        >
          F[x]
        </button>
        <button
          disabled
          className="px-4 py-2 rounded bg-dark-700 text-dark-500 cursor-not-allowed"
          title="Coming soon"
        >
          Z[i]
        </button>
      </div>

      {/* Input */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div>
          <label className="text-dark-400 text-sm block mb-1">a =</label>
          <input
            type="number"
            value={inputA}
            onChange={(e) => setInputA(parseInt(e.target.value) || 0)}
            className="w-24 bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
          />
        </div>
        <div>
          <label className="text-dark-400 text-sm block mb-1">b =</label>
          <input
            type="number"
            value={inputB}
            onChange={(e) => setInputB(parseInt(e.target.value) || 0)}
            className="w-24 bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
          />
        </div>
        <div className="text-dark-400">
          Finding gcd({inputA}, {inputB})
        </div>
      </div>

      {/* Algorithm Steps */}
      {result && result.steps.length > 0 && (
        <div className="bg-dark-700 p-4 rounded-lg mb-6">
          <div className="text-dark-200 font-medium mb-3">Division Steps</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-dark-400">
                  <th className="text-left p-2">Step</th>
                  <th className="text-center p-2">Dividend</th>
                  <th className="text-center p-2">=</th>
                  <th className="text-center p-2">Divisor</th>
                  <th className="text-center p-2">×</th>
                  <th className="text-center p-2">Quotient</th>
                  <th className="text-center p-2">+</th>
                  <th className="text-center p-2">Remainder</th>
                </tr>
              </thead>
              <tbody>
                {result.steps.map((step, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`${
                      currentStep === idx ? 'bg-blue-900/30' : ''
                    } ${parseInt(step.remainder) === 0 ? 'bg-green-900/20' : ''}`}
                    onMouseEnter={() => setCurrentStep(idx)}
                    onMouseLeave={() => setCurrentStep(null)}
                  >
                    <td className="p-2 text-dark-500">{idx + 1}</td>
                    <td className="p-2 text-center font-mono text-blue-400">{step.dividend}</td>
                    <td className="p-2 text-center text-dark-500">=</td>
                    <td className="p-2 text-center font-mono text-purple-400">{step.divisor}</td>
                    <td className="p-2 text-center text-dark-500">×</td>
                    <td className="p-2 text-center font-mono text-dark-300">{step.quotient}</td>
                    <td className="p-2 text-center text-dark-500">+</td>
                    <td className={`p-2 text-center font-mono ${
                      parseInt(step.remainder) === 0 ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {step.remainder}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="bg-dark-700 p-4 rounded-lg mb-6">
          <div className="text-center mb-4">
            <span className="text-dark-400">gcd(</span>
            <span className="text-blue-400 font-mono">{inputA}</span>
            <span className="text-dark-400">, </span>
            <span className="text-purple-400 font-mono">{inputB}</span>
            <span className="text-dark-400">) = </span>
            <span className="text-green-400 font-mono text-xl">{result.gcd}</span>
          </div>

          {/* Bezout's Identity */}
          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-400 text-sm mb-2">Bezout's Identity:</div>
            <div className="text-center font-mono">
              <span className="text-green-400">{result.gcd}</span>
              <span className="text-dark-500"> = </span>
              <span className="text-blue-400">{inputA}</span>
              <span className="text-dark-500"> × </span>
              <span className="text-yellow-400">({result.bezout.s})</span>
              <span className="text-dark-500"> + </span>
              <span className="text-purple-400">{inputB}</span>
              <span className="text-dark-500"> × </span>
              <span className="text-yellow-400">({result.bezout.t})</span>
            </div>
            <div className="text-dark-500 text-xs text-center mt-2">
              Verify: {inputA} × {result.bezout.s} + {inputB} × {result.bezout.t} = {inputA * result.bezout.s + inputB * result.bezout.t}
            </div>
          </div>
        </div>
      )}

      {/* Norm Progression */}
      {result && result.steps.length > 0 && (
        <div className="p-4 bg-dark-700/50 rounded-lg">
          <h5 className="text-dark-200 font-medium mb-2">Norm Decrease</h5>
          <div className="flex items-end gap-1 h-20">
            {result.steps.map((step, idx) => {
              const maxNorm = Math.max(...result.steps.map(s => s.norm || 0));
              const height = ((step.norm || 0) / maxNorm) * 100;
              return (
                <motion.div
                  key={idx}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex-1 bg-blue-600 rounded-t"
                  title={`N(${step.divisor}) = ${step.norm}`}
                />
              );
            })}
          </div>
          <div className="text-dark-500 text-xs mt-2">
            The norm strictly decreases at each step, guaranteeing termination
          </div>
        </div>
      )}
    </div>
  );
}
