import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Step {
  a: number;
  b: number;
  quotient: number;
  remainder: number;
  equation: string;
}

interface Props {
  className?: string;
}

export function EuclideanAlgorithmVisualizer({ className = '' }: Props) {
  const [numA, setNumA] = useState(48);
  const [numB, setNumB] = useState(18);
  const [steps, setSteps] = useState<Step[]>([]);
  const [gcd, setGcd] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);

  const calculateGCD = () => {
    if (numA <= 0 || numB <= 0) return;

    setIsCalculating(true);
    setSteps([]);
    setGcd(null);
    setCurrentStep(-1);

    const newSteps: Step[] = [];
    let x = Math.max(numA, numB);
    let y = Math.min(numA, numB);

    while (y !== 0) {
      const quotient = Math.floor(x / y);
      const remainder = x % y;
      newSteps.push({
        a: x,
        b: y,
        quotient,
        remainder,
        equation: `${x} = ${quotient} × ${y} + ${remainder}`,
      });
      x = y;
      y = remainder;
    }

    // Animate step by step
    let stepIndex = 0;
    const interval = setInterval(() => {
      setCurrentStep(stepIndex);
      setSteps(newSteps.slice(0, stepIndex + 1));
      stepIndex++;

      if (stepIndex >= newSteps.length) {
        clearInterval(interval);
        setGcd(x);
        setIsCalculating(false);
      }
    }, 600);
  };

  const reset = () => {
    setSteps([]);
    setGcd(null);
    setCurrentStep(-1);
    setIsCalculating(false);
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Euclidean Algorithm</h3>
      <p className="text-dark-400 text-sm mb-6">
        Watch the Euclidean algorithm find the GCD step by step.
      </p>

      {/* Input controls */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">First number (a)</label>
          <input
            type="number"
            min="1"
            value={numA}
            onChange={(e) => {
              setNumA(Math.max(1, parseInt(e.target.value) || 1));
              reset();
            }}
            disabled={isCalculating}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none disabled:opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Second number (b)</label>
          <input
            type="number"
            min="1"
            value={numB}
            onChange={(e) => {
              setNumB(Math.max(1, parseInt(e.target.value) || 1));
              reset();
            }}
            disabled={isCalculating}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none disabled:opacity-50"
          />
        </div>
      </div>

      {/* Calculate button */}
      <button
        onClick={calculateGCD}
        disabled={isCalculating}
        className="w-full px-4 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-6"
      >
        {isCalculating ? 'Calculating...' : 'Calculate GCD'}
      </button>

      {/* Steps display */}
      <AnimatePresence>
        {steps.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2 mb-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className={`p-4 rounded-xl border transition-colors ${
                  index === currentStep && isCalculating
                    ? 'bg-primary-500/20 border-primary-500'
                    : step.remainder === 0
                    ? 'bg-emerald-500/10 border-emerald-500/50'
                    : 'bg-dark-700/50 border-dark-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-dark-200">
                    <span className="text-amber-400">{step.a}</span>
                    {' = '}
                    <span className="text-purple-400">{step.quotient}</span>
                    {' × '}
                    <span className="text-blue-400">{step.b}</span>
                    {' + '}
                    <span className={step.remainder === 0 ? 'text-emerald-400 font-bold' : 'text-rose-400'}>
                      {step.remainder}
                    </span>
                  </div>
                  <div className="text-xs text-dark-500">
                    Step {index + 1}
                  </div>
                </div>
                {step.remainder === 0 && (
                  <div className="text-xs text-emerald-400 mt-2">
                    Remainder is 0 - algorithm complete!
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result */}
      <AnimatePresence>
        {gcd !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-xl bg-gradient-to-r from-emerald-500/20 to-primary-500/20 border border-emerald-500/30"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                gcd({numA}, {numB}) = {gcd}
              </div>
              <div className="text-dark-400 text-sm">
                The greatest common divisor is <span className="text-emerald-400 font-semibold">{gcd}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="mt-6 p-4 rounded-xl bg-dark-700/30 border border-dark-600">
        <h4 className="text-sm font-semibold text-dark-300 mb-2">The Algorithm:</h4>
        <p className="text-sm text-dark-400">
          At each step, divide the larger number by the smaller and keep the remainder.
          The GCD is the last non-zero remainder.
        </p>
      </div>
    </div>
  );
}
