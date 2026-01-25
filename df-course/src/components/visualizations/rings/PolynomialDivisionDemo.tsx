import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Polynomial = number[];

function parseSimplePoly(str: string): Polynomial {
  const coeffs: number[] = [];
  str = str.replace(/\s/g, '').replace(/-/g, '+-');
  const terms = str.split('+').filter(t => t);

  for (const term of terms) {
    if (term.includes('x')) {
      const [coefPart, powPart] = term.split('x');
      const coef = coefPart === '' || coefPart === '+' ? 1 : coefPart === '-' ? -1 : parseFloat(coefPart);
      const pow = powPart?.includes('^') ? parseInt(powPart.slice(1)) : 1;
      while (coeffs.length <= pow) coeffs.push(0);
      coeffs[pow] += coef;
    } else {
      const val = parseFloat(term);
      if (!isNaN(val)) {
        if (coeffs.length === 0) coeffs.push(0);
        coeffs[0] += val;
      }
    }
  }
  return coeffs.length ? coeffs : [0];
}

function formatPoly(p: Polynomial): string {
  if (p.every(c => c === 0)) return '0';
  const terms: string[] = [];
  for (let i = p.length - 1; i >= 0; i--) {
    const c = p[i];
    if (Math.abs(c) < 1e-10) continue;
    const absC = Math.abs(c);
    const sign = c < 0 ? '-' : (terms.length > 0 ? '+' : '');
    if (i === 0) terms.push(`${sign}${absC}`);
    else if (i === 1) terms.push(absC === 1 ? `${sign}x` : `${sign}${absC}x`);
    else terms.push(absC === 1 ? `${sign}x^${i}` : `${sign}${absC}x^${i}`);
  }
  return terms.join(' ') || '0';
}

function getDeg(p: Polynomial): number {
  for (let i = p.length - 1; i >= 0; i--) {
    if (Math.abs(p[i]) > 1e-10) return i;
  }
  return -1;
}

function getLC(p: Polynomial): number {
  const d = getDeg(p);
  return d >= 0 ? p[d] : 0;
}

type DivisionStep = {
  currentRemainder: Polynomial;
  divisorMultiple: Polynomial;
  quotientTerm: string;
  subtraction: string;
  newRemainder: Polynomial;
};

function polyDivision(dividend: Polynomial, divisor: Polynomial): { quotient: Polynomial; remainder: Polynomial; steps: DivisionStep[] } {
  const steps: DivisionStep[] = [];
  let remainder = [...dividend];
  const quotient: number[] = new Array(Math.max(0, getDeg(dividend) - getDeg(divisor) + 1)).fill(0);
  const divisorDeg = getDeg(divisor);
  const divisorLC = getLC(divisor);

  if (divisorDeg < 0) {
    return { quotient: [0], remainder: dividend, steps: [] };
  }

  while (getDeg(remainder) >= divisorDeg) {
    const remDeg = getDeg(remainder);
    const remLC = getLC(remainder);
    const quotCoef = remLC / divisorLC;
    const quotDeg = remDeg - divisorDeg;

    quotient[quotDeg] = quotCoef;

    const divisorMultiple = new Array(quotDeg + divisor.length).fill(0);
    for (let i = 0; i < divisor.length; i++) {
      divisorMultiple[i + quotDeg] = divisor[i] * quotCoef;
    }

    const newRemainder = [...remainder];
    for (let i = 0; i < divisorMultiple.length; i++) {
      if (i < newRemainder.length) {
        newRemainder[i] -= divisorMultiple[i];
      }
    }

    steps.push({
      currentRemainder: [...remainder],
      divisorMultiple,
      quotientTerm: quotCoef === 1 && quotDeg > 0 ? (quotDeg === 1 ? 'x' : `x^${quotDeg}`) :
                    quotCoef === -1 && quotDeg > 0 ? (quotDeg === 1 ? '-x' : `-x^${quotDeg}`) :
                    quotDeg === 0 ? `${quotCoef}` :
                    quotDeg === 1 ? `${quotCoef}x` : `${quotCoef}x^${quotDeg}`,
      subtraction: formatPoly(divisorMultiple),
      newRemainder: [...newRemainder],
    });

    remainder = newRemainder;
  }

  while (remainder.length > 1 && Math.abs(remainder[remainder.length - 1]) < 1e-10) {
    remainder.pop();
  }

  return { quotient, remainder, steps };
}

export function PolynomialDivisionDemo() {
  const [dividendStr, setDividendStr] = useState('x^3 + 2x^2 - x + 5');
  const [divisorStr, setDivisorStr] = useState('x + 1');
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const dividend = useMemo(() => parseSimplePoly(dividendStr), [dividendStr]);
  const divisor = useMemo(() => parseSimplePoly(divisorStr), [divisorStr]);
  const result = useMemo(() => polyDivision(dividend, divisor), [dividend, divisor]);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Polynomial Long Division</h4>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-dark-400 text-sm block mb-1">Dividend f(x) =</label>
          <input
            type="text"
            value={dividendStr}
            onChange={(e) => setDividendStr(e.target.value)}
            className="w-full bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
          />
        </div>
        <div>
          <label className="text-dark-400 text-sm block mb-1">Divisor g(x) =</label>
          <input
            type="text"
            value={divisorStr}
            onChange={(e) => setDivisorStr(e.target.value)}
            className="w-full bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
          />
        </div>
      </div>

      {/* Division Statement */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="text-center font-mono">
          <span className="text-blue-400">{formatPoly(dividend)}</span>
          <span className="text-dark-500 mx-2">=</span>
          <span className="text-dark-500">(</span>
          <span className="text-purple-400">{formatPoly(divisor)}</span>
          <span className="text-dark-500">)</span>
          <span className="text-dark-500"> · </span>
          <span className="text-dark-500">(</span>
          <span className="text-green-400">{formatPoly(result.quotient)}</span>
          <span className="text-dark-500">)</span>
          <span className="text-dark-500"> + </span>
          <span className="text-yellow-400">{formatPoly(result.remainder)}</span>
        </div>
        <div className="text-center text-dark-500 text-sm mt-2">
          f(x) = g(x) · q(x) + r(x), deg(r) {'<'} deg(g)
        </div>
      </div>

      {/* Step by Step */}
      {result.steps.length > 0 && (
        <div className="mb-6">
          <div className="text-dark-400 text-sm mb-3">Division Steps:</div>
          <div className="space-y-3">
            {result.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-dark-700 p-4 rounded-lg cursor-pointer transition-all ${
                  activeStep === idx ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveStep(activeStep === idx ? null : idx)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-dark-400 text-sm">Step {idx + 1}</span>
                  <span className="text-green-400 font-mono text-sm">
                    + {step.quotientTerm} to quotient
                  </span>
                </div>

                <div className="font-mono text-sm space-y-1">
                  <div className="text-dark-300">
                    <span className="text-dark-500">Current: </span>
                    {formatPoly(step.currentRemainder)}
                  </div>
                  <div className="text-red-400">
                    <span className="text-dark-500">Subtract: </span>
                    − ({step.subtraction})
                  </div>
                  <div className="border-t border-dark-600 pt-1 text-dark-300">
                    <span className="text-dark-500">Result: </span>
                    {formatPoly(step.newRemainder)}
                  </div>
                </div>

                <AnimatePresence>
                  {activeStep === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-dark-600 text-dark-500 text-xs"
                    >
                      Divide leading term {formatPoly([...new Array(getDeg(step.currentRemainder)).fill(0), getLC(step.currentRemainder)])} by
                      leading term {formatPoly([...new Array(getDeg(divisor)).fill(0), getLC(divisor)])} to get {step.quotientTerm}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Result Summary */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-900/20 p-4 rounded-lg">
          <div className="text-green-400 text-sm mb-1">Quotient q(x)</div>
          <div className="font-mono text-lg text-center text-green-400">
            {formatPoly(result.quotient)}
          </div>
          <div className="text-dark-500 text-xs text-center mt-1">
            deg(q) = {getDeg(result.quotient)}
          </div>
        </div>
        <div className="bg-yellow-900/20 p-4 rounded-lg">
          <div className="text-yellow-400 text-sm mb-1">Remainder r(x)</div>
          <div className="font-mono text-lg text-center text-yellow-400">
            {formatPoly(result.remainder)}
          </div>
          <div className="text-dark-500 text-xs text-center mt-1">
            deg(r) = {getDeg(result.remainder)} {'<'} {getDeg(divisor)} = deg(g)
          </div>
        </div>
      </div>
    </div>
  );
}
