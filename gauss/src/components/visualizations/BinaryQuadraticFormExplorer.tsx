import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

export function BinaryQuadraticFormExplorer({ className = '' }: Props) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(1);
  const [maxValue, setMaxValue] = useState(50);

  const discriminant = b * b - 4 * a * c;

  const representedNumbers = useMemo(() => {
    const represented = new Map<number, { x: number; y: number }[]>();
    const limit = Math.ceil(Math.sqrt(maxValue / Math.min(Math.abs(a), Math.abs(c) || 1))) + 5;

    for (let x = -limit; x <= limit; x++) {
      for (let y = -limit; y <= limit; y++) {
        if (x === 0 && y === 0) continue;
        const value = a * x * x + b * x * y + c * y * y;
        if (value > 0 && value <= maxValue) {
          if (!represented.has(value)) {
            represented.set(value, []);
          }
          // Only add if we don't already have this representation (up to sign)
          const reps = represented.get(value)!;
          const isDuplicate = reps.some(
            (r) =>
              (r.x === x && r.y === y) ||
              (r.x === -x && r.y === -y) ||
              (r.x === x && r.y === -y) ||
              (r.x === -x && r.y === y)
          );
          if (!isDuplicate && reps.length < 3) {
            reps.push({ x: Math.abs(x), y: Math.abs(y) });
          }
        }
      }
    }

    return represented;
  }, [a, b, c, maxValue]);

  const isSumOfTwoSquares = (num: number): boolean => {
    // A number is a sum of two squares iff primes ≡ 3 (mod 4) appear to even powers
    let remaining = num;
    for (let prime = 2; prime * prime <= remaining; prime++) {
      if (remaining % prime === 0) {
        let count = 0;
        while (remaining % prime === 0) {
          remaining /= prime;
          count++;
        }
        if (prime % 4 === 3 && count % 2 === 1) {
          return false;
        }
      }
    }
    if (remaining > 1 && remaining % 4 === 3) {
      return false;
    }
    return true;
  };

  const formString = useMemo(() => {
    let str = '';
    if (a === 1) str += 'x²';
    else if (a === -1) str += '-x²';
    else str += `${a}x²`;

    if (b > 0) {
      if (b === 1) str += ' + xy';
      else str += ` + ${b}xy`;
    } else if (b < 0) {
      if (b === -1) str += ' - xy';
      else str += ` - ${Math.abs(b)}xy`;
    }

    if (c > 0) {
      if (c === 1) str += ' + y²';
      else str += ` + ${c}y²`;
    } else if (c < 0) {
      if (c === -1) str += ' - y²';
      else str += ` - ${Math.abs(c)}y²`;
    }

    return str;
  }, [a, b, c]);

  const isPositiveDefinite = a > 0 && discriminant < 0;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Binary Quadratic Form Explorer</h3>
      <p className="text-dark-400 text-sm mb-6">
        Explore which integers can be represented by a binary quadratic form ax² + bxy + cy².
      </p>

      {/* Form inputs */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">a</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">b</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">c</label>
          <input
            type="number"
            value={c}
            onChange={(e) => setC(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Form display */}
      <motion.div
        key={`${a}-${b}-${c}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-4 rounded-xl bg-dark-900/50 border border-dark-700 mb-6"
      >
        <div className="text-center mb-4">
          <span className="text-2xl font-mono text-primary-400">{formString}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-dark-400">Discriminant: </span>
            <span className={`font-mono ${discriminant < 0 ? 'text-emerald-400' : discriminant > 0 ? 'text-amber-400' : 'text-dark-300'}`}>
              D = {b}² - 4({a})({c}) = {discriminant}
            </span>
          </div>
          <div>
            <span className="text-dark-400">Type: </span>
            <span className={`font-semibold ${isPositiveDefinite ? 'text-emerald-400' : 'text-amber-400'}`}>
              {discriminant < 0
                ? a > 0
                  ? 'Positive Definite'
                  : 'Negative Definite'
                : discriminant > 0
                ? 'Indefinite'
                : 'Degenerate'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Preset forms */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-sm text-dark-400 mr-2">Presets:</span>
        <button
          onClick={() => { setA(1); setB(0); setC(1); }}
          className="px-3 py-1 rounded-lg text-xs bg-dark-700 text-dark-300 hover:bg-dark-600"
        >
          x² + y²
        </button>
        <button
          onClick={() => { setA(1); setB(0); setC(2); }}
          className="px-3 py-1 rounded-lg text-xs bg-dark-700 text-dark-300 hover:bg-dark-600"
        >
          x² + 2y²
        </button>
        <button
          onClick={() => { setA(1); setB(0); setC(3); }}
          className="px-3 py-1 rounded-lg text-xs bg-dark-700 text-dark-300 hover:bg-dark-600"
        >
          x² + 3y²
        </button>
        <button
          onClick={() => { setA(1); setB(1); setC(1); }}
          className="px-3 py-1 rounded-lg text-xs bg-dark-700 text-dark-300 hover:bg-dark-600"
        >
          x² + xy + y²
        </button>
        <button
          onClick={() => { setA(2); setB(2); setC(3); }}
          className="px-3 py-1 rounded-lg text-xs bg-dark-700 text-dark-300 hover:bg-dark-600"
        >
          2x² + 2xy + 3y²
        </button>
      </div>

      {/* Represented numbers grid */}
      {isPositiveDefinite && (
        <>
          <h4 className="text-sm font-semibold text-dark-300 mb-3">
            Integers represented (1 to {maxValue}):
          </h4>
          <div className="grid grid-cols-10 gap-1 mb-4">
            {Array.from({ length: maxValue }, (_, idx) => idx + 1).map((val) => {
              const isRepresented = representedNumbers.has(val);
              const reps = representedNumbers.get(val);
              return (
                <div
                  key={val}
                  className={`p-2 rounded text-center text-xs font-mono cursor-default transition-colors ${
                    isRepresented
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-dark-700/50 text-dark-500'
                  }`}
                  title={
                    isRepresented && reps
                      ? `${val} = ${reps.map((rep) => `${a}(${rep.x})² + ${b}(${rep.x})(${rep.y}) + ${c}(${rep.y})²`).join(' or ')}`
                      : `${val} not representable`
                  }
                >
                  {val}
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="p-3 rounded-lg bg-dark-700/30 text-sm text-dark-400">
            <strong className="text-emerald-400">{representedNumbers.size}</strong> integers
            representable out of {maxValue} ({((representedNumbers.size / maxValue) * 100).toFixed(1)}%)
          </div>
        </>
      )}

      {/* Sum of two squares checker for x² + y² */}
      {a === 1 && b === 0 && c === 1 && (
        <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
          <h4 className="text-sm font-semibold text-amber-400 mb-3">
            Two Squares Theorem
          </h4>
          <p className="text-dark-300 text-sm mb-3">
            n = x² + y² iff every prime p ≡ 3 (mod 4) appears to an even power in n.
          </p>
          <div className="flex flex-wrap gap-1">
            {[2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 18, 19, 21, 23, 25, 26, 29].map((testNum) => (
              <span
                key={testNum}
                className={`px-2 py-0.5 rounded text-xs font-mono ${
                  isSumOfTwoSquares(testNum)
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-rose-500/20 text-rose-300'
                }`}
              >
                {testNum}
              </span>
            ))}
          </div>
        </div>
      )}

      {!isPositiveDefinite && a !== 0 && c !== 0 && (
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm">
          For indefinite forms (D {'>'} 0), the representation question is more complex.
          Try a positive definite form (D {'<'} 0 with a {'>'} 0).
        </div>
      )}
    </div>
  );
}
