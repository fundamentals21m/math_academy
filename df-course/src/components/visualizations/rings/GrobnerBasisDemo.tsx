import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Monomial = { x: number; y: number };
type Term = { coef: number; mon: Monomial };
type Poly = Term[];

function formatMon(m: Monomial): string {
  if (m.x === 0 && m.y === 0) return '1';
  let s = '';
  if (m.x > 0) s += m.x === 1 ? 'x' : `x^${m.x}`;
  if (m.y > 0) s += m.y === 1 ? 'y' : `y^${m.y}`;
  return s;
}

function formatPoly(p: Poly): string {
  if (p.length === 0) return '0';
  const terms: string[] = [];
  for (const t of p) {
    if (t.coef === 0) continue;
    const sign = t.coef < 0 ? '-' : (terms.length > 0 ? '+' : '');
    const absCoef = Math.abs(t.coef);
    const mon = formatMon(t.mon);
    if (mon === '1') {
      terms.push(`${sign}${absCoef}`);
    } else if (absCoef === 1) {
      terms.push(`${sign}${mon}`);
    } else {
      terms.push(`${sign}${absCoef}${mon}`);
    }
  }
  return terms.join(' ') || '0';
}

function compareLex(a: Monomial, b: Monomial): number {
  if (a.x !== b.x) return b.x - a.x;
  return b.y - a.y;
}

function compareGrlex(a: Monomial, b: Monomial): number {
  const degA = a.x + a.y;
  const degB = b.x + b.y;
  if (degA !== degB) return degB - degA;
  return compareLex(a, b);
}

function compareGrevlex(a: Monomial, b: Monomial): number {
  const degA = a.x + a.y;
  const degB = b.x + b.y;
  if (degA !== degB) return degB - degA;
  // For grevlex, compare last variable first, opposite sign
  if (a.y !== b.y) return a.y - b.y;
  return b.x - a.x;
}

type OrderType = 'lex' | 'grlex' | 'grevlex';

const orderFns: Record<OrderType, (a: Monomial, b: Monomial) => number> = {
  lex: compareLex,
  grlex: compareGrlex,
  grevlex: compareGrevlex,
};

type Example = {
  name: string;
  f1: Poly;
  f2: Poly;
  description: string;
};

const examples: Example[] = [
  {
    name: 'Circle and Parabola',
    f1: [
      { coef: 1, mon: { x: 2, y: 0 } },
      { coef: 1, mon: { x: 0, y: 2 } },
      { coef: -1, mon: { x: 0, y: 0 } },
    ],
    f2: [
      { coef: 1, mon: { x: 2, y: 0 } },
      { coef: -1, mon: { x: 0, y: 1 } },
    ],
    description: 'x² + y² - 1 = 0 and x² - y = 0',
  },
  {
    name: 'Two Lines',
    f1: [
      { coef: 1, mon: { x: 1, y: 0 } },
      { coef: 1, mon: { x: 0, y: 1 } },
      { coef: -1, mon: { x: 0, y: 0 } },
    ],
    f2: [
      { coef: 1, mon: { x: 1, y: 0 } },
      { coef: -1, mon: { x: 0, y: 1 } },
    ],
    description: 'x + y - 1 = 0 and x - y = 0',
  },
  {
    name: 'Cubic System',
    f1: [
      { coef: 1, mon: { x: 2, y: 1 } },
      { coef: -1, mon: { x: 0, y: 0 } },
    ],
    f2: [
      { coef: 1, mon: { x: 1, y: 2 } },
      { coef: -1, mon: { x: 1, y: 0 } },
    ],
    description: 'x²y - 1 = 0 and xy² - x = 0',
  },
];

export function GrobnerBasisDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [order, setOrder] = useState<OrderType>('grlex');
  const [showDetails, setShowDetails] = useState(false);

  const example = examples[selectedExample];
  const compare = orderFns[order];

  // Sort polynomials by chosen order
  const sortPoly = (p: Poly): Poly => {
    return [...p].sort((a, b) => compare(a.mon, b.mon));
  };

  const f1Sorted = sortPoly(example.f1);
  const f2Sorted = sortPoly(example.f2);

  const lt1 = f1Sorted[0];
  const lt2 = f2Sorted[0];

  // Compute LCM of leading monomials
  const lcmMon: Monomial = {
    x: Math.max(lt1.mon.x, lt2.mon.x),
    y: Math.max(lt1.mon.y, lt2.mon.y),
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Grobner Basis Explorer</h4>

      {/* Example Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((ex, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedExample(idx)}
            className={`px-4 py-2 rounded transition-all ${
              selectedExample === idx
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {ex.name}
          </button>
        ))}
      </div>

      {/* Order Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-dark-400 py-2">Monomial Order:</span>
        {(['lex', 'grlex', 'grevlex'] as OrderType[]).map(o => (
          <button
            key={o}
            onClick={() => setOrder(o)}
            className={`px-4 py-2 rounded ${
              order === o ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {o}
          </button>
        ))}
      </div>

      {/* System Display */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="text-dark-400 text-sm mb-2">{example.description}</div>
        <div className="space-y-2 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-blue-400">f₁ =</span>
            <span className="text-dark-200">{formatPoly(f1Sorted)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-400">f₂ =</span>
            <span className="text-dark-200">{formatPoly(f2Sorted)}</span>
          </div>
        </div>
      </div>

      {/* Leading Terms */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="text-dark-200 font-medium mb-3">Leading Terms (under {order})</div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-dark-500 text-sm">LT(f₁) = </span>
            <span className="text-blue-400 font-mono">{formatPoly([lt1])}</span>
          </div>
          <div>
            <span className="text-dark-500 text-sm">LT(f₂) = </span>
            <span className="text-purple-400 font-mono">{formatPoly([lt2])}</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-dark-600">
          <span className="text-dark-500 text-sm">lcm(LM(f₁), LM(f₂)) = </span>
          <span className="text-yellow-400 font-mono">{formatMon(lcmMon)}</span>
        </div>
      </div>

      {/* S-polynomial */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="text-dark-200 font-medium mb-3">S-polynomial</div>
        <div className="font-mono text-sm space-y-2">
          <div>
            <span className="text-dark-400">S(f₁, f₂) = </span>
            <span className="text-dark-500">
              ({formatMon(lcmMon)}/{formatPoly([lt1])})·f₁ − ({formatMon(lcmMon)}/{formatPoly([lt2])})·f₂
            </span>
          </div>
          <div className="text-dark-400 text-xs mt-2">
            The S-polynomial is designed to cancel the leading terms.
          </div>
        </div>
      </div>

      {/* Details Toggle */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mb-4 text-sm text-blue-400 hover:text-blue-300"
      >
        {showDetails ? '▼' : '▶'} Monomial Order Details
      </button>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-700 p-4 rounded-lg overflow-hidden mb-6"
          >
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-blue-400 font-medium">Lex (x {'>'} y):</span>
                <span className="text-dark-400 ml-2">
                  Compare x-exponents first. x² {'>'} xy {'>'} y²
                </span>
              </div>
              <div>
                <span className="text-purple-400 font-medium">Grlex:</span>
                <span className="text-dark-400 ml-2">
                  Total degree first, then lex. x²y {'>'} xy² (both deg 3, x-exp wins)
                </span>
              </div>
              <div>
                <span className="text-green-400 font-medium">Grevlex:</span>
                <span className="text-dark-400 ml-2">
                  Total degree first, then reverse lex. Most efficient for computation.
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key Concepts */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Buchberger's Algorithm</h5>
        <ol className="text-dark-400 text-sm space-y-1 list-decimal list-inside">
          <li>Start with generators {'{'}f₁, f₂, ...{'}'}</li>
          <li>Compute S-polynomials S(fᵢ, fⱼ) for all pairs</li>
          <li>Reduce each S-polynomial by the current basis</li>
          <li>If remainder ≠ 0, add it to the basis</li>
          <li>Repeat until all S-polynomials reduce to 0</li>
        </ol>
        <div className="mt-3 text-dark-500 text-xs">
          The algorithm terminates because the leading ideal is Noetherian.
        </div>
      </div>
    </div>
  );
}
