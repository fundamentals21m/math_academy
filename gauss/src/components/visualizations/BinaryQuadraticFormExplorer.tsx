import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

export function BinaryQuadraticFormExplorer({ className = '' }: Props) {
  const [coeffA, setCoeffA] = useState(1);
  const [coeffB, setCoeffB] = useState(0);
  const [coeffC, setCoeffC] = useState(1);
  const [maxN, setMaxN] = useState(50);

  // Calculate discriminant
  const discriminant = coeffB * coeffB - 4 * coeffA * coeffC;

  // Find all integers representable by the form up to maxN
  const representedNumbers = useMemo(() => {
    const represented = new Map<number, { x: number; y: number }[]>();
    const limit = Math.ceil(Math.sqrt(maxN / Math.abs(coeffA || 1))) + 1;

    for (let xVal = -limit; xVal <= limit; xVal++) {
      for (let yVal = -limit; yVal <= limit; yVal++) {
        if (xVal === 0 && yVal === 0) continue;
        const value = coeffA * xVal * xVal + coeffB * xVal * yVal + coeffC * yVal * yVal;
        if (value > 0 && value <= maxN) {
          if (!represented.has(value)) {
            represented.set(value, []);
          }
          // Only store one representation per (|x|, |y|) pair
          const reps = represented.get(value)!;
          const exists = reps.some(
            (rep) => Math.abs(rep.x) === Math.abs(xVal) && Math.abs(rep.y) === Math.abs(yVal)
          );
          if (!exists) {
            reps.push({ x: xVal, y: yVal });
          }
        }
      }
    }

    return represented;
  }, [coeffA, coeffB, coeffC, maxN]);

  // Create grid of numbers 1 to maxN
  const numberGrid = useMemo(() => {
    const grid: { num: number; represented: boolean; reps: { x: number; y: number }[] }[] = [];
    for (let idx = 1; idx <= maxN; idx++) {
      const reps = representedNumbers.get(idx) || [];
      grid.push({
        num: idx,
        represented: reps.length > 0,
        reps,
      });
    }
    return grid;
  }, [representedNumbers, maxN]);

  const representedCount = numberGrid.filter((item) => item.represented).length;

  // Get form type description
  const formType = useMemo(() => {
    if (discriminant < 0) {
      if (coeffA > 0) return { type: 'Positive Definite', color: 'text-emerald-400' };
      if (coeffA < 0) return { type: 'Negative Definite', color: 'text-rose-400' };
    }
    if (discriminant > 0) return { type: 'Indefinite', color: 'text-amber-400' };
    return { type: 'Degenerate', color: 'text-dark-400' };
  }, [discriminant, coeffA]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Binary Quadratic Form Explorer</h3>
      <p className="text-dark-400 text-sm mb-6">
        Explore which integers can be represented by the form ax² + bxy + cy².
      </p>

      {/* Coefficient inputs */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">a</label>
          <input
            type="number"
            value={coeffA}
            onChange={(evt) => setCoeffA(parseInt(evt.target.value) || 0)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">b</label>
          <input
            type="number"
            value={coeffB}
            onChange={(evt) => setCoeffB(parseInt(evt.target.value) || 0)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">c</label>
          <input
            type="number"
            value={coeffC}
            onChange={(evt) => setCoeffC(parseInt(evt.target.value) || 0)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Max n</label>
          <input
            type="number"
            min="10"
            max="100"
            value={maxN}
            onChange={(evt) => setMaxN(Math.min(100, Math.max(10, parseInt(evt.target.value) || 50)))}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Form display */}
      <div className="p-4 rounded-xl bg-dark-900/50 border border-dark-700 mb-6">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="text-lg font-mono">
            <span className="text-primary-400">{coeffA}</span>x² +{' '}
            <span className="text-purple-400">{coeffB}</span>xy +{' '}
            <span className="text-amber-400">{coeffC}</span>y²
          </span>
          <span className="text-dark-500">|</span>
          <span className="text-sm">
            D = b² - 4ac ={' '}
            <span className={discriminant < 0 ? 'text-emerald-400' : discriminant > 0 ? 'text-amber-400' : 'text-dark-400'}>
              {discriminant}
            </span>
          </span>
          <span className="text-dark-500">|</span>
          <span className={`text-sm ${formType.color}`}>{formType.type}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4 mb-6 text-sm">
        <div className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400">
          Represented: {representedCount} of {maxN}
        </div>
        <div className="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-400">
          Not represented: {maxN - representedCount}
        </div>
      </div>

      {/* Number grid */}
      <div className="grid grid-cols-10 gap-1 mb-6">
        {numberGrid.map((item) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.num * 0.01 }}
            className={`aspect-square flex items-center justify-center text-sm font-mono rounded-lg cursor-default transition-colors ${
              item.represented
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
                : 'bg-dark-700/50 text-dark-500 border border-dark-700'
            }`}
            title={
              item.represented
                ? `${item.num} = ${item.reps.map((rep) => `${coeffA}(${rep.x})² + ${coeffB}(${rep.x})(${rep.y}) + ${coeffC}(${rep.y})²`).join(' or ')}`
                : `${item.num} is not representable`
            }
          >
            {item.num}
          </motion.div>
        ))}
      </div>

      {/* Preset forms */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-dark-400 mr-2">Presets:</span>
        <button
          onClick={() => { setCoeffA(1); setCoeffB(0); setCoeffC(1); }}
          className={`px-3 py-1 rounded-lg text-xs transition-colors ${
            coeffA === 1 && coeffB === 0 && coeffC === 1
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          x² + y² (sums of 2 squares)
        </button>
        <button
          onClick={() => { setCoeffA(1); setCoeffB(0); setCoeffC(2); }}
          className={`px-3 py-1 rounded-lg text-xs transition-colors ${
            coeffA === 1 && coeffB === 0 && coeffC === 2
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          x² + 2y²
        </button>
        <button
          onClick={() => { setCoeffA(1); setCoeffB(0); setCoeffC(3); }}
          className={`px-3 py-1 rounded-lg text-xs transition-colors ${
            coeffA === 1 && coeffB === 0 && coeffC === 3
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          x² + 3y²
        </button>
        <button
          onClick={() => { setCoeffA(1); setCoeffB(1); setCoeffC(1); }}
          className={`px-3 py-1 rounded-lg text-xs transition-colors ${
            coeffA === 1 && coeffB === 1 && coeffC === 1
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          x² + xy + y²
        </button>
        <button
          onClick={() => { setCoeffA(2); setCoeffB(1); setCoeffC(3); }}
          className={`px-3 py-1 rounded-lg text-xs transition-colors ${
            coeffA === 2 && coeffB === 1 && coeffC === 3
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          2x² + xy + 3y²
        </button>
      </div>

      {/* Legend */}
      <div className="mt-6 p-3 rounded-lg bg-dark-700/30 text-sm text-dark-400">
        <strong>Tip:</strong> Hover over a number to see its representation. Green numbers can be
        written as ax² + bxy + cy² for some integers x, y.
      </div>
    </div>
  );
}
