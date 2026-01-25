import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Polynomial = number[]; // coefficients, index = power

function parsePolynomial(str: string): Polynomial {
  // Simple parser for polynomials like "2x^3 + 3x - 1"
  const coeffs: Polynomial = [];
  str = str.replace(/\s/g, '').replace(/-/g, '+-');
  const terms = str.split('+').filter(t => t);

  for (const term of terms) {
    if (term.includes('x')) {
      const [coefPart, powPart] = term.split('x');
      const coef = coefPart === '' || coefPart === '+' ? 1 : coefPart === '-' ? -1 : parseFloat(coefPart);
      const pow = powPart?.includes('^') ? parseInt(powPart.slice(1)) : (powPart === '' ? 1 : 1);
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

function formatPolynomial(p: Polynomial): string {
  if (p.length === 0 || p.every(c => c === 0)) return '0';

  const terms: string[] = [];
  for (let i = p.length - 1; i >= 0; i--) {
    const c = p[i];
    if (c === 0) continue;

    let term = '';
    const absC = Math.abs(c);
    const sign = c < 0 ? '-' : (terms.length > 0 ? '+' : '');

    if (i === 0) {
      term = `${sign}${absC}`;
    } else if (i === 1) {
      term = absC === 1 ? `${sign}x` : `${sign}${absC}x`;
    } else {
      term = absC === 1 ? `${sign}x^${i}` : `${sign}${absC}x^${i}`;
    }
    terms.push(term);
  }

  return terms.join(' ') || '0';
}

function addPolynomials(p1: Polynomial, p2: Polynomial): Polynomial {
  const result: Polynomial = [];
  const maxLen = Math.max(p1.length, p2.length);
  for (let i = 0; i < maxLen; i++) {
    result[i] = (p1[i] || 0) + (p2[i] || 0);
  }
  while (result.length > 1 && result[result.length - 1] === 0) result.pop();
  return result;
}

function multiplyPolynomials(p1: Polynomial, p2: Polynomial): Polynomial {
  if (p1.length === 0 || p2.length === 0) return [0];
  const result: Polynomial = new Array(p1.length + p2.length - 1).fill(0);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      result[i + j] += p1[i] * p2[j];
    }
  }
  return result;
}

function evaluatePolynomial(p: Polynomial, x: number): number {
  let result = 0;
  for (let i = p.length - 1; i >= 0; i--) {
    result = result * x + p[i];
  }
  return result;
}

function getDegree(p: Polynomial): number {
  for (let i = p.length - 1; i >= 0; i--) {
    if (p[i] !== 0) return i;
  }
  return -Infinity;
}

export function PolynomialCalculator() {
  const [poly1Str, setPoly1Str] = useState('x^2 + 2x + 1');
  const [poly2Str, setPoly2Str] = useState('x + 1');
  const [evalPoint, setEvalPoint] = useState(2);
  const [activeOp, setActiveOp] = useState<'add' | 'multiply' | 'evaluate'>('multiply');

  const poly1 = useMemo(() => parsePolynomial(poly1Str), [poly1Str]);
  const poly2 = useMemo(() => parsePolynomial(poly2Str), [poly2Str]);

  const sum = useMemo(() => addPolynomials(poly1, poly2), [poly1, poly2]);
  const product = useMemo(() => multiplyPolynomials(poly1, poly2), [poly1, poly2]);
  const eval1 = useMemo(() => evaluatePolynomial(poly1, evalPoint), [poly1, evalPoint]);
  const eval2 = useMemo(() => evaluatePolynomial(poly2, evalPoint), [poly2, evalPoint]);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Polynomial Calculator</h4>

      {/* Polynomial Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-dark-400 text-sm block mb-1">f(x) =</label>
          <input
            type="text"
            value={poly1Str}
            onChange={(e) => setPoly1Str(e.target.value)}
            className="w-full bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
            placeholder="x^2 + 2x + 1"
          />
          <div className="mt-1 text-dark-500 text-xs">
            deg(f) = {getDegree(poly1) === -Infinity ? '-∞' : getDegree(poly1)}
          </div>
        </div>
        <div>
          <label className="text-dark-400 text-sm block mb-1">g(x) =</label>
          <input
            type="text"
            value={poly2Str}
            onChange={(e) => setPoly2Str(e.target.value)}
            className="w-full bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
            placeholder="x + 1"
          />
          <div className="mt-1 text-dark-500 text-xs">
            deg(g) = {getDegree(poly2) === -Infinity ? '-∞' : getDegree(poly2)}
          </div>
        </div>
      </div>

      {/* Operation Selector */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveOp('add')}
          className={`px-4 py-2 rounded ${
            activeOp === 'add' ? 'bg-blue-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          f + g
        </button>
        <button
          onClick={() => setActiveOp('multiply')}
          className={`px-4 py-2 rounded ${
            activeOp === 'multiply' ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          f · g
        </button>
        <button
          onClick={() => setActiveOp('evaluate')}
          className={`px-4 py-2 rounded ${
            activeOp === 'evaluate' ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Evaluate
        </button>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {activeOp === 'add' && (
          <motion.div
            key="add"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-dark-700 p-4 rounded-lg"
          >
            <div className="text-dark-400 text-sm mb-2">Addition:</div>
            <div className="font-mono text-lg text-center">
              <span className="text-blue-400">{formatPolynomial(poly1)}</span>
              <span className="text-dark-500 mx-2">+</span>
              <span className="text-purple-400">{formatPolynomial(poly2)}</span>
            </div>
            <div className="text-center text-dark-500 my-2">=</div>
            <div className="text-center font-mono text-lg text-green-400">
              {formatPolynomial(sum)}
            </div>
            <div className="mt-3 text-dark-500 text-sm text-center">
              deg(f + g) = {getDegree(sum) === -Infinity ? '-∞' : getDegree(sum)} ≤ max({getDegree(poly1)}, {getDegree(poly2)}) = {Math.max(getDegree(poly1), getDegree(poly2))}
            </div>
          </motion.div>
        )}

        {activeOp === 'multiply' && (
          <motion.div
            key="multiply"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-dark-700 p-4 rounded-lg"
          >
            <div className="text-dark-400 text-sm mb-2">Multiplication:</div>
            <div className="font-mono text-lg text-center">
              <span className="text-blue-400">({formatPolynomial(poly1)})</span>
              <span className="text-dark-500 mx-2">·</span>
              <span className="text-purple-400">({formatPolynomial(poly2)})</span>
            </div>
            <div className="text-center text-dark-500 my-2">=</div>
            <div className="text-center font-mono text-lg text-green-400">
              {formatPolynomial(product)}
            </div>
            <div className="mt-3 text-dark-500 text-sm text-center">
              deg(fg) = {getDegree(product) === -Infinity ? '-∞' : getDegree(product)} = {getDegree(poly1)} + {getDegree(poly2)}
            </div>
          </motion.div>
        )}

        {activeOp === 'evaluate' && (
          <motion.div
            key="evaluate"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-dark-700 p-4 rounded-lg"
          >
            <div className="text-dark-400 text-sm mb-2">Evaluation:</div>
            <div className="flex items-center gap-4 mb-4">
              <label className="text-dark-400">x =</label>
              <input
                type="number"
                value={evalPoint}
                onChange={(e) => setEvalPoint(parseFloat(e.target.value) || 0)}
                className="w-20 bg-dark-800 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-dark-800 rounded">
                <span className="text-blue-400 font-mono">f({evalPoint})</span>
                <span className="text-green-400 font-mono text-lg">{eval1}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-dark-800 rounded">
                <span className="text-purple-400 font-mono">g({evalPoint})</span>
                <span className="text-green-400 font-mono text-lg">{eval2}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-dark-800 rounded">
                <span className="text-yellow-400 font-mono">f({evalPoint}) · g({evalPoint})</span>
                <span className="text-green-400 font-mono text-lg">{eval1 * eval2}</span>
              </div>
            </div>
            <div className="mt-3 text-dark-500 text-sm text-center">
              {eval1 === 0 && <span className="text-red-400">x = {evalPoint} is a root of f!</span>}
              {eval2 === 0 && <span className="text-red-400">x = {evalPoint} is a root of g!</span>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coefficient Display */}
      <div className="mt-6 p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Coefficient View</h5>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-blue-400 mb-1">f(x):</div>
            <div className="font-mono text-dark-400">
              [{poly1.map(c => c.toFixed(0)).join(', ')}]
            </div>
          </div>
          <div>
            <div className="text-purple-400 mb-1">g(x):</div>
            <div className="font-mono text-dark-400">
              [{poly2.map(c => c.toFixed(0)).join(', ')}]
            </div>
          </div>
        </div>
        <div className="mt-2 text-dark-500 text-xs">
          Index i represents coefficient of x^i
        </div>
      </div>
    </div>
  );
}
