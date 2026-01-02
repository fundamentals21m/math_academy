import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

interface PellSolution {
  x: bigint;
  y: bigint;
  n: number;
}

export function PellEquationSolver({ className = '' }: Props) {
  const [D, setD] = useState(2);
  const [numSolutions, setNumSolutions] = useState(5);

  const isSquare = (n: number): boolean => {
    const sqrt = Math.floor(Math.sqrt(n));
    return sqrt * sqrt === n;
  };

  const validD = D > 0 && !isSquare(D) && D <= 100;

  // Find fundamental solution using continued fraction expansion
  const fundamentalSolution = useMemo((): { x: bigint; y: bigint } | null => {
    if (!validD) return null;

    // Continued fraction expansion of sqrt(D)
    const a0 = Math.floor(Math.sqrt(D));

    // Use convergents to find fundamental solution
    let pPrev = BigInt(1);
    let pCurr = BigInt(a0);
    let qPrev = BigInt(0);
    let qCurr = BigInt(1);

    // Check if a0 is already a solution (only for D = 1, but D=1 is a square)
    if (pCurr * pCurr - BigInt(D) * qCurr * qCurr === BigInt(1)) {
      return { x: pCurr, y: qCurr };
    }

    // Generate continued fraction terms and convergents
    let cfM = 0;
    let cfD = 1;
    let cfA = a0;

    for (let iter = 0; iter < 1000; iter++) {
      cfM = cfD * cfA - cfM;
      cfD = Math.floor((D - cfM * cfM) / cfD);
      cfA = Math.floor((a0 + cfM) / cfD);

      const pNext = BigInt(cfA) * pCurr + pPrev;
      const qNext = BigInt(cfA) * qCurr + qPrev;

      // Check if this convergent is a solution
      if (pNext * pNext - BigInt(D) * qNext * qNext === BigInt(1)) {
        return { x: pNext, y: qNext };
      }

      pPrev = pCurr;
      pCurr = pNext;
      qPrev = qCurr;
      qCurr = qNext;

      // Period ends when cfA = 2*a0
      if (cfA === 2 * a0 && iter > 0) {
        // If period length is odd, we need to double it
        // Continue for another period
      }
    }

    return null;
  }, [D, validD]);

  // Generate solutions from fundamental solution
  const solutions = useMemo((): PellSolution[] => {
    if (!fundamentalSolution) return [];

    const sols: PellSolution[] = [];
    const { x: x1, y: y1 } = fundamentalSolution;

    let xCurr = x1;
    let yCurr = y1;

    for (let solIdx = 1; solIdx <= numSolutions; solIdx++) {
      sols.push({ x: xCurr, y: yCurr, n: solIdx });

      // (x_{n+1}, y_{n+1}) from (x_n + y_n * sqrt(D)) * (x_1 + y_1 * sqrt(D))
      const xNext = xCurr * x1 + yCurr * y1 * BigInt(D);
      const yNext = xCurr * y1 + yCurr * x1;
      xCurr = xNext;
      yCurr = yNext;
    }

    return sols;
  }, [fundamentalSolution, numSolutions, D]);

  const formatBigInt = (bigNum: bigint): string => {
    const str = bigNum.toString();
    if (str.length <= 15) return str;
    return str.slice(0, 6) + '...' + str.slice(-6) + ` (${str.length} digits)`;
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Pell Equation Solver</h3>
      <p className="text-dark-400 text-sm mb-6">
        Find solutions to x² - Dy² = 1 using continued fractions.
      </p>

      {/* Input */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">D (non-square, 2-100)</label>
          <input
            type="number"
            min="2"
            max="100"
            value={D}
            onChange={(e) => setD(parseInt(e.target.value) || 2)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Number of solutions</label>
          <input
            type="number"
            min="1"
            max="10"
            value={numSolutions}
            onChange={(e) => setNumSolutions(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Equation display */}
      <div className="p-4 rounded-xl bg-dark-900/50 border border-dark-700 mb-6 text-center">
        <span className="text-2xl font-mono">
          <span className="text-primary-400">x²</span>
          <span className="text-dark-400"> - </span>
          <span className="text-amber-400">{D}</span>
          <span className="text-primary-400">y²</span>
          <span className="text-dark-400"> = </span>
          <span className="text-emerald-400">1</span>
        </span>
      </div>

      {!validD && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 mb-6">
          {isSquare(D)
            ? `${D} is a perfect square. D must be a non-square positive integer.`
            : D <= 0
            ? 'D must be a positive integer.'
            : 'D must be between 2 and 100.'}
        </div>
      )}

      {validD && fundamentalSolution && (
        <>
          {/* Fundamental solution */}
          <motion.div
            key={D}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-6"
          >
            <h4 className="text-sm font-semibold text-emerald-400 mb-2">
              Fundamental Solution (smallest positive)
            </h4>
            <div className="font-mono text-lg">
              <span className="text-primary-400">x₁ = {formatBigInt(fundamentalSolution.x)}</span>
              <span className="text-dark-400 mx-3">,</span>
              <span className="text-primary-400">y₁ = {formatBigInt(fundamentalSolution.y)}</span>
            </div>
            <p className="text-dark-400 text-sm mt-2">
              Verify: {formatBigInt(fundamentalSolution.x)}² - {D} × {formatBigInt(fundamentalSolution.y)}² = 1
            </p>
          </motion.div>

          {/* Recurrence formula */}
          <div className="p-4 rounded-xl bg-dark-700/30 mb-6">
            <h4 className="text-sm font-semibold text-dark-300 mb-2">
              Generating More Solutions
            </h4>
            <p className="text-dark-400 text-sm font-mono">
              xₙ₊₁ + yₙ₊₁√{D} = (x₁ + y₁√{D})ⁿ
            </p>
          </div>

          {/* Solutions table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="p-3 text-dark-300">n</th>
                  <th className="p-3 text-dark-300">xₙ</th>
                  <th className="p-3 text-dark-300">yₙ</th>
                  <th className="p-3 text-dark-300">Verification</th>
                </tr>
              </thead>
              <tbody>
                {solutions.map((sol) => {
                  const verification = sol.x * sol.x - BigInt(D) * sol.y * sol.y;
                  return (
                    <motion.tr
                      key={sol.n}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: sol.n * 0.1 }}
                      className="border-b border-dark-700"
                    >
                      <td className="p-3 font-mono text-amber-400">{sol.n}</td>
                      <td className="p-3 font-mono text-dark-200 text-sm">
                        {formatBigInt(sol.x)}
                      </td>
                      <td className="p-3 font-mono text-dark-200 text-sm">
                        {formatBigInt(sol.y)}
                      </td>
                      <td className="p-3">
                        <span className={verification === BigInt(1) ? 'text-emerald-400' : 'text-rose-400'}>
                          {verification === BigInt(1) ? '= 1 ✓' : `= ${verification.toString()}`}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Quick D presets */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-sm text-dark-400 mr-2">Try D =</span>
            {[2, 3, 5, 7, 11, 13, 61].map((presetD) => (
              <button
                key={presetD}
                onClick={() => setD(presetD)}
                className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                  D === presetD
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {presetD}
              </button>
            ))}
          </div>

          {/* Fun fact for D=61 */}
          {D === 61 && (
            <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-sm text-amber-300">
              <strong>Historical Note:</strong> The equation x² - 61y² = 1 was proposed by Fermat
              as a challenge. The smallest solution has x = 1,766,319,049 and y = 226,153,980!
            </div>
          )}
        </>
      )}
    </div>
  );
}
