import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

interface Step {
  a: number;
  b: number;
  quotient: number;
  remainder: number;
  equation: string;
}

export function GCDCalculator({ className = '' }: Props) {
  const [numA, setNumA] = useState(48);
  const [numB, setNumB] = useState(18);
  const [steps, setSteps] = useState<Step[]>([]);
  const [gcd, setGcd] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);

  const calculateGCD = () => {
    const a = Math.abs(numA);
    const b = Math.abs(numB);
    
    if (a === 0 && b === 0) {
      setGcd(null);
      setSteps([]);
      return;
    }

    setIsCalculating(true);
    setSteps([]);
    setGcd(null);
    setCurrentStep(-1);

    const newSteps: Step[] = [];
    let x = Math.max(a, b);
    let y = Math.min(a, b);

    if (y === 0) {
      setGcd(x);
      setIsCalculating(false);
      return;
    }

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

    // Animate through steps
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
    }, 500);
  };

  const reset = () => {
    setSteps([]);
    setGcd(null);
    setCurrentStep(-1);
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Euclidean Algorithm (GCD Calculator)</h3>
      
      <p className="text-dark-300 mb-6">
        The Euclidean algorithm finds the Greatest Common Divisor (GCD) of two numbers. 
        It repeatedly divides the larger number by the smaller and takes the remainder, 
        until the remainder is zero.
      </p>

      <div className="space-y-6">
        {/* Inputs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-dark-300 text-sm mb-2">First Number (a)</label>
            <input
              type="number"
              min="0"
              value={numA}
              onChange={(e) => {
                setNumA(parseInt(e.target.value) || 0);
                reset();
              }}
              className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-dark-300 text-sm mb-2">Second Number (b)</label>
            <input
              type="number"
              min="0"
              value={numB}
              onChange={(e) => {
                setNumB(parseInt(e.target.value) || 0);
                reset();
              }}
              className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500"
            />
          </div>
        </div>

        <button
          onClick={calculateGCD}
          disabled={isCalculating}
          className="w-full px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isCalculating ? 'Calculating...' : 'Calculate GCD'}
        </button>

        {/* Steps Display */}
        <AnimatePresence>
          {steps.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              <h4 className="text-dark-200 font-medium">Steps:</h4>
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`p-4 rounded-xl border ${
                      index === currentStep && isCalculating
                        ? 'bg-primary-500/20 border-primary-500'
                        : step.remainder === 0
                        ? 'bg-emerald-500/10 border-emerald-500/50'
                        : 'bg-dark-700/50 border-dark-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-dark-400 text-sm">Step {index + 1}</span>
                      {step.remainder === 0 && (
                        <span className="text-emerald-400 text-sm font-medium">Final step!</span>
                      )}
                    </div>
                    <div className="mt-2">
                      <code className="text-lg text-dark-100">{step.equation}</code>
                    </div>
                    <div className="mt-2 text-dark-400 text-sm">
                      {step.a} divided by {step.b} gives quotient {step.quotient} with remainder{' '}
                      <span className={step.remainder === 0 ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
                        {step.remainder}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result */}
        <AnimatePresence>
          {gcd !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-xl bg-gradient-to-r from-emerald-500/20 to-primary-500/20 border border-emerald-500/50"
            >
              <div className="text-center">
                <p className="text-dark-300 mb-2">Greatest Common Divisor:</p>
                <p className="text-4xl font-bold text-emerald-400">GCD({numA}, {numB}) = {gcd}</p>
                <p className="text-dark-400 text-sm mt-4">
                  This means {gcd} is the largest number that divides both {numA} and {numB} evenly.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explanation */}
        <div className="p-4 rounded-xl bg-dark-700/30 border border-dark-600/50">
          <h4 className="text-dark-200 font-medium mb-2">The Algorithm:</h4>
          <ol className="text-dark-400 text-sm space-y-1 list-decimal list-inside">
            <li>Divide the larger number by the smaller number</li>
            <li>Take the remainder from this division</li>
            <li>Replace the larger number with the smaller, and the smaller with the remainder</li>
            <li>Repeat until the remainder is 0</li>
            <li>The last non-zero remainder is the GCD</li>
          </ol>
        </div>

        {/* Why it matters */}
        <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30">
          <h4 className="text-primary-400 font-medium mb-2">Why is GCD important in cryptography?</h4>
          <p className="text-dark-400 text-sm">
            The GCD is fundamental to RSA encryption. Two numbers are "coprime" when their GCD is 1, 
            which is essential for finding modular multiplicative inverses used in encryption and decryption.
          </p>
        </div>
      </div>
    </div>
  );
}
