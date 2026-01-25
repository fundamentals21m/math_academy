/**
 * Cantor Diagonal Argument Demo
 * Interactive demonstration of why ℝ is uncountable
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export function CantorDiagonalDemo() {
  const [step, setStep] = useState(0);
  const gridSize = 8;

  // Generate random decimal digits for the "enumeration"
  const grid = useMemo(() => {
    return Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => Math.floor(Math.random() * 10))
    );
  }, []);

  // The diagonal elements
  const diagonal = useMemo(() => {
    return grid.map((row, i) => row[i]);
  }, [grid]);

  // The anti-diagonal (constructed to differ from each row)
  const antiDiagonal = useMemo(() => {
    return diagonal.map((d) => (d + 1) % 10);
  }, [diagonal]);

  const regenerate = () => {
    window.location.reload(); // Simple way to regenerate
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const stepDescriptions = [
    {
      title: 'Step 1: Assume ℝ is Countable',
      description:
        'Suppose we could list all real numbers in (0,1). Each row represents a real number as its decimal expansion: 0.d₁d₂d₃...',
    },
    {
      title: 'Step 2: Identify the Diagonal',
      description:
        'Look at the diagonal elements: the 1st digit of the 1st number, 2nd digit of the 2nd number, etc.',
    },
    {
      title: 'Step 3: Construct the Anti-Diagonal',
      description:
        'Create a new number by changing each diagonal digit. Here we add 1 (mod 10) to each diagonal digit.',
    },
    {
      title: 'Step 4: The Contradiction',
      description:
        'This new number differs from row n in the nth digit. So it cannot be any row in our list!',
    },
    {
      title: 'Conclusion',
      description:
        'Since any attempted enumeration misses at least one real number, ℝ is uncountable. This is Cantor\'s Diagonal Argument.',
    },
  ];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Cantor's Diagonal Argument
      </h4>

      {/* Step indicator */}
      <div className="flex gap-2 mb-4">
        {stepDescriptions.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
              step === i
                ? 'bg-indigo-500 text-white'
                : step > i
                  ? 'bg-emerald-500/30 text-emerald-400'
                  : 'bg-dark-800 text-dark-400'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Current step description */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg">
        <h5 className="font-semibold text-dark-200">{stepDescriptions[step].title}</h5>
        <p className="text-sm text-dark-400 mt-1">{stepDescriptions[step].description}</p>
      </div>

      {/* Grid visualization */}
      <div className="bg-dark-800/30 rounded-lg p-4 mb-4 overflow-x-auto">
        <table className="mx-auto">
          <thead>
            <tr>
              <th className="w-12 text-xs text-dark-500 pb-2"></th>
              {Array.from({ length: gridSize }, (_, i) => (
                <th key={i} className="w-8 text-xs text-dark-500 pb-2">
                  d_{i + 1}
                </th>
              ))}
              {step >= 3 && <th className="w-8 text-xs text-dark-500 pb-2 pl-2">≠</th>}
            </tr>
          </thead>
          <tbody>
            {grid.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.1 }}
              >
                <td className="text-xs text-dark-500 pr-2">r_{rowIndex + 1}</td>
                {row.map((digit, colIndex) => {
                  const isDiagonal = rowIndex === colIndex;
                  const showDiagonal = step >= 1 && isDiagonal;
                  const showAntiDiagonal = step >= 2 && isDiagonal;

                  return (
                    <td
                      key={colIndex}
                      className={`w-8 h-8 text-center text-sm font-mono transition-colors ${
                        showDiagonal
                          ? 'bg-amber-500/20 text-amber-400 font-bold'
                          : 'text-dark-300'
                      }`}
                    >
                      {digit}
                    </td>
                  );
                })}
                {step >= 3 && (
                  <td className="w-8 h-8 text-center text-sm font-mono text-red-400 pl-2">
                    {step >= 4 ? (
                      <span title={`Different from r_${rowIndex + 1}'s diagonal digit ${diagonal[rowIndex]}`}>
                        ✗
                      </span>
                    ) : null}
                  </td>
                )}
              </motion.tr>
            ))}
          </tbody>
        </table>

        {/* Anti-diagonal number */}
        {step >= 2 && (
          <motion.div
            className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm text-emerald-400 font-semibold">New number:</span>
              <span className="font-mono text-lg">
                0.
                {antiDiagonal.map((d, i) => (
                  <span
                    key={i}
                    className={`${step >= 3 ? 'text-emerald-400 font-bold' : 'text-dark-300'}`}
                  >
                    {d}
                  </span>
                ))}
                ...
              </span>
            </div>
            {step >= 2 && step < 4 && (
              <p className="text-xs text-dark-400 mt-2">
                Each digit is the diagonal digit + 1 (mod 10)
              </p>
            )}
            {step >= 4 && (
              <p className="text-xs text-red-400 mt-2 font-medium">
                This number is NOT in our list - it differs from every row!
              </p>
            )}
          </motion.div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevStep}
          disabled={step === 0}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            step === 0
              ? 'bg-dark-800 text-dark-600 cursor-not-allowed'
              : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
          }`}
        >
          ← Previous
        </button>
        <button
          onClick={nextStep}
          disabled={step === 4}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            step === 4
              ? 'bg-dark-800 text-dark-600 cursor-not-allowed'
              : 'bg-indigo-500 text-white hover:bg-indigo-600'
          }`}
        >
          Next →
        </button>
      </div>

      {/* Conclusion box */}
      {step === 4 && (
        <motion.div
          className="mt-4 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-sm text-indigo-300">
            <strong>Theorem 8.3.1:</strong> The set ℝ of real numbers is uncountable.
            This is one of the most profound results in mathematics, showing that
            some infinities are "larger" than others.
          </p>
        </motion.div>
      )}
    </div>
  );
}
