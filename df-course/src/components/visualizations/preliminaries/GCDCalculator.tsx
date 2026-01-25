/**
 * Interactive GCD Calculator using Euclidean Algorithm
 * Shows step-by-step computation with animated visualization
 */
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EuclideanStep {
  a: number;
  b: number;
  quotient: number;
  remainder: number;
}

function euclideanAlgorithm(a: number, b: number): EuclideanStep[] {
  const steps: EuclideanStep[] = [];
  let x = Math.abs(a);
  let y = Math.abs(b);

  if (y > x) [x, y] = [y, x];

  while (y > 0) {
    const quotient = Math.floor(x / y);
    const remainder = x % y;
    steps.push({ a: x, b: y, quotient, remainder });
    x = y;
    y = remainder;
  }

  return steps;
}

function extendedEuclidean(a: number, b: number): { gcd: number; x: number; y: number } {
  if (b === 0) {
    return { gcd: a, x: 1, y: 0 };
  }
  const result = extendedEuclidean(b, a % b);
  return {
    gcd: result.gcd,
    x: result.y,
    y: result.x - Math.floor(a / b) * result.y,
  };
}

export function GCDCalculator() {
  const [inputA, setInputA] = useState(252);
  const [inputB, setInputB] = useState(105);
  const [currentStep, setCurrentStep] = useState(0);
  const [showExtended, setShowExtended] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = useMemo(() => euclideanAlgorithm(inputA, inputB), [inputA, inputB]);
  const gcd = steps.length > 0 ? steps[steps.length - 1].b || steps[steps.length - 1].a : Math.max(inputA, inputB);

  const extended = useMemo(() => {
    const result = extendedEuclidean(Math.abs(inputA), Math.abs(inputB));
    return result;
  }, [inputA, inputB]);

  const runAnimation = () => {
    setCurrentStep(0);
    setIsAnimating(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentStep(step);
      if (step >= steps.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 1000);
  };

  const reset = () => {
    setCurrentStep(0);
    setIsAnimating(false);
  };

  // Visual bar representation
  const maxVal = Math.max(inputA, inputB);
  const barWidth = 300;

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Euclidean Algorithm Calculator
      </h4>

      {/* Input controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">
            a = <span className="text-emerald-400 font-mono">{inputA}</span>
          </label>
          <input
            type="range"
            min={1}
            max={500}
            value={inputA}
            onChange={(e) => { setInputA(Number(e.target.value)); reset(); }}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <input
            type="number"
            min={1}
            value={inputA}
            onChange={(e) => { setInputA(Number(e.target.value) || 1); reset(); }}
            className="w-full mt-2 px-3 py-1 bg-dark-800 border border-dark-600 rounded text-dark-100 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-300 mb-1">
            b = <span className="text-blue-400 font-mono">{inputB}</span>
          </label>
          <input
            type="range"
            min={1}
            max={500}
            value={inputB}
            onChange={(e) => { setInputB(Number(e.target.value)); reset(); }}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <input
            type="number"
            min={1}
            value={inputB}
            onChange={(e) => { setInputB(Number(e.target.value) || 1); reset(); }}
            className="w-full mt-2 px-3 py-1 bg-dark-800 border border-dark-600 rounded text-dark-100 text-sm"
          />
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={runAnimation}
          disabled={isAnimating}
          className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-500/30 transition-colors border border-indigo-500/50 disabled:opacity-50"
        >
          {isAnimating ? 'Running...' : 'Run Algorithm'}
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-dark-800 text-dark-300 rounded-lg text-sm font-medium hover:bg-dark-700 transition-colors border border-dark-700"
        >
          Reset
        </button>
        <button
          onClick={() => setShowExtended(!showExtended)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showExtended
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700'
          }`}
        >
          Extended GCD
        </button>
      </div>

      {/* Visual bars */}
      <div className="mb-4 p-4 bg-dark-800/50 rounded-lg">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 text-emerald-400 font-mono">a</span>
            <div className="flex-1 h-6 bg-dark-700 rounded overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${(inputA / maxVal) * 100}%` }}
              />
            </div>
            <span className="w-12 text-right text-dark-300 text-sm">{inputA}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 text-blue-400 font-mono">b</span>
            <div className="flex-1 h-6 bg-dark-700 rounded overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${(inputB / maxVal) * 100}%` }}
              />
            </div>
            <span className="w-12 text-right text-dark-300 text-sm">{inputB}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 text-amber-400 font-mono">gcd</span>
            <div className="flex-1 h-6 bg-dark-700 rounded overflow-hidden">
              <motion.div
                className="h-full bg-amber-500"
                initial={{ width: 0 }}
                animate={{ width: `${(gcd / maxVal) * 100}%` }}
                transition={{ delay: 0.5 }}
              />
            </div>
            <span className="w-12 text-right text-dark-300 text-sm">{gcd}</span>
          </div>
        </div>
      </div>

      {/* Algorithm steps */}
      <div className="mb-4">
        <h5 className="text-sm font-semibold text-dark-200 mb-2">Algorithm Steps:</h5>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          <AnimatePresence>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: currentStep > idx ? 1 : 0.3,
                  x: 0,
                }}
                className={`p-3 rounded-lg border ${
                  currentStep === idx + 1
                    ? 'bg-indigo-500/20 border-indigo-500/50'
                    : currentStep > idx
                      ? 'bg-dark-800/50 border-dark-700/50'
                      : 'bg-dark-900/50 border-dark-800/50'
                }`}
              >
                <div className="font-mono text-sm">
                  <span className="text-emerald-400">{step.a}</span>
                  {' = '}
                  <span className="text-violet-400">{step.quotient}</span>
                  {' × '}
                  <span className="text-blue-400">{step.b}</span>
                  {' + '}
                  <span className="text-amber-400">{step.remainder}</span>
                </div>
                <div className="text-xs text-dark-400 mt-1">
                  Step {idx + 1}: {step.a} = {step.quotient} · {step.b} + {step.remainder}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Result */}
      <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <div className="text-center">
          <p className="text-dark-300 mb-1">Greatest Common Divisor:</p>
          <p className="text-3xl font-bold text-amber-400">
            gcd({inputA}, {inputB}) = {gcd}
          </p>
        </div>
      </div>

      {/* Extended Euclidean */}
      <AnimatePresence>
        {showExtended && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-violet-500/10 rounded-lg border border-violet-500/30"
          >
            <h5 className="text-sm font-semibold text-violet-400 mb-2">Extended Euclidean Algorithm:</h5>
            <p className="text-dark-200 font-mono">
              <span className="text-emerald-400">{inputA}</span>x +
              <span className="text-blue-400">{inputB}</span>y =
              <span className="text-amber-400">{gcd}</span>
            </p>
            <p className="text-dark-200 font-mono mt-2">
              Solution: x = <span className="text-emerald-400">{extended.x}</span>,
              y = <span className="text-blue-400">{extended.y}</span>
            </p>
            <p className="text-xs text-dark-400 mt-2">
              Verification: {inputA} × ({extended.x}) + {inputB} × ({extended.y}) = {inputA * extended.x + inputB * extended.y}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Bezout's Identity:</strong> For any integers a, b with gcd(a,b) = d,
          there exist integers x, y such that ax + by = d. The extended Euclidean
          algorithm finds these coefficients.
        </p>
      </div>
    </div>
  );
}
