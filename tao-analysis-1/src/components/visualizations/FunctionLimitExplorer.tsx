/**
 * Function Limit Explorer
 * Visualize the ε-δ definition of limits for functions
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface FunctionOption {
  id: string;
  name: string;
  fn: (x: number) => number;
  limitPoint: number;
  limitValue: number;
  formula: string;
  discontinuous?: boolean;
}

const functions: FunctionOption[] = [
  {
    id: 'x^2',
    name: 'x²',
    fn: (x) => x * x,
    limitPoint: 2,
    limitValue: 4,
    formula: 'f(x) = x²',
  },
  {
    id: 'sin/x',
    name: 'sin(x)/x',
    fn: (x) => (x === 0 ? 1 : Math.sin(x) / x),
    limitPoint: 0,
    limitValue: 1,
    formula: 'f(x) = sin(x)/x',
  },
  {
    id: '2x+1',
    name: '2x + 1',
    fn: (x) => 2 * x + 1,
    limitPoint: 1,
    limitValue: 3,
    formula: 'f(x) = 2x + 1',
  },
  {
    id: 'jump',
    name: 'Jump at 0',
    fn: (x) => (x < 0 ? -1 : x > 0 ? 1 : 0),
    limitPoint: 0,
    limitValue: 0, // No limit exists
    formula: 'f(x) = sign(x)',
    discontinuous: true,
  },
];

export function FunctionLimitExplorer() {
  const [selectedFn, setSelectedFn] = useState(functions[0]);
  const [epsilon, setEpsilon] = useState(0.5);
  const [delta, setDelta] = useState(0.3);

  const { limitPoint: x0, limitValue: L } = selectedFn;

  // Generate curve points
  const curvePoints = useMemo(() => {
    const points: { x: number; y: number }[] = [];
    const xMin = x0 - 2;
    const xMax = x0 + 2;
    for (let i = 0; i <= 100; i++) {
      const x = xMin + (i / 100) * (xMax - xMin);
      points.push({ x, y: selectedFn.fn(x) });
    }
    return points;
  }, [selectedFn, x0]);

  // Check if δ works for the given ε
  const checkDelta = useMemo(() => {
    // Sample many points in (x0 - δ, x0 + δ) \ {x0}
    const samples = 50;
    let allSatisfy = true;
    const violations: { x: number; fx: number; diff: number }[] = [];

    for (let i = 1; i <= samples; i++) {
      // Check left side
      const xLeft = x0 - (i / samples) * delta;
      const fxLeft = selectedFn.fn(xLeft);
      if (Math.abs(fxLeft - L) >= epsilon) {
        allSatisfy = false;
        violations.push({ x: xLeft, fx: fxLeft, diff: Math.abs(fxLeft - L) });
      }

      // Check right side
      const xRight = x0 + (i / samples) * delta;
      const fxRight = selectedFn.fn(xRight);
      if (Math.abs(fxRight - L) >= epsilon) {
        allSatisfy = false;
        violations.push({ x: xRight, fx: fxRight, diff: Math.abs(fxRight - L) });
      }
    }

    return { allSatisfy, violations: violations.slice(0, 3) };
  }, [selectedFn, x0, L, epsilon, delta]);

  // SVG dimensions
  const width = 400;
  const height = 300;
  const padding = 50;

  const xMin = x0 - 2;
  const xMax = x0 + 2;
  const yMin = Math.min(...curvePoints.map((p) => p.y), L - 1);
  const yMax = Math.max(...curvePoints.map((p) => p.y), L + 1);

  const scaleX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);

  const curvePath = curvePoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)} ${scaleY(p.y)}`)
    .join(' ');

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Function Limit Explorer (ε-δ Definition)
      </h4>

      {/* Function selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {functions.map((fn) => (
          <button
            key={fn.id}
            onClick={() => setSelectedFn(fn)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              selectedFn.id === fn.id
                ? 'bg-indigo-500 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
            }`}
          >
            {fn.name}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-400 mb-1">
            ε (epsilon): {epsilon.toFixed(3)}
          </label>
          <input
            type="range"
            min="0.05"
            max="1.5"
            step="0.01"
            value={epsilon}
            onChange={(e) => setEpsilon(parseFloat(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">
            δ (delta): {delta.toFixed(3)}
          </label>
          <input
            type="range"
            min="0.01"
            max="1.5"
            step="0.01"
            value={delta}
            onChange={(e) => setDelta(parseFloat(e.target.value))}
            className="w-full accent-emerald-500"
          />
        </div>
      </div>

      {/* Graph */}
      <div className="bg-dark-800/50 rounded-lg p-2 mb-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* ε-band (horizontal) */}
          <rect
            x={padding}
            y={scaleY(L + epsilon)}
            width={width - 2 * padding}
            height={scaleY(L - epsilon) - scaleY(L + epsilon)}
            fill="#f59e0b"
            opacity={0.15}
          />
          <line
            x1={padding}
            y1={scaleY(L + epsilon)}
            x2={width - padding}
            y2={scaleY(L + epsilon)}
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
          <line
            x1={padding}
            y1={scaleY(L - epsilon)}
            x2={width - padding}
            y2={scaleY(L - epsilon)}
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
          <text x={width - padding + 5} y={scaleY(L + epsilon)} className="fill-amber-400 text-xs">
            L+ε
          </text>
          <text x={width - padding + 5} y={scaleY(L - epsilon)} className="fill-amber-400 text-xs">
            L-ε
          </text>

          {/* δ-band (vertical) */}
          <rect
            x={scaleX(x0 - delta)}
            y={padding}
            width={scaleX(x0 + delta) - scaleX(x0 - delta)}
            height={height - 2 * padding}
            fill="#10b981"
            opacity={0.15}
          />
          <line
            x1={scaleX(x0 - delta)}
            y1={padding}
            x2={scaleX(x0 - delta)}
            y2={height - padding}
            stroke="#10b981"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
          <line
            x1={scaleX(x0 + delta)}
            y1={padding}
            x2={scaleX(x0 + delta)}
            y2={height - padding}
            stroke="#10b981"
            strokeWidth="1"
            strokeDasharray="4 2"
          />

          {/* Axes */}
          <line
            x1={padding}
            y1={scaleY(0)}
            x2={width - padding}
            y2={scaleY(0)}
            stroke="#6b7280"
            strokeWidth="1"
          />
          <line
            x1={scaleX(0)}
            y1={padding}
            x2={scaleX(0)}
            y2={height - padding}
            stroke="#6b7280"
            strokeWidth="1"
          />

          {/* Limit point vertical line */}
          <line
            x1={scaleX(x0)}
            y1={padding}
            x2={scaleX(x0)}
            y2={height - padding}
            stroke="#818cf8"
            strokeWidth="1"
            strokeDasharray="2 2"
            opacity={0.5}
          />

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#818cf8" strokeWidth="2" />

          {/* Limit value horizontal line */}
          <line
            x1={padding}
            y1={scaleY(L)}
            x2={width - padding}
            y2={scaleY(L)}
            stroke="#818cf8"
            strokeWidth="1"
            strokeDasharray="2 2"
            opacity={0.5}
          />

          {/* Point at (x0, L) - the limit point */}
          <circle
            cx={scaleX(x0)}
            cy={scaleY(L)}
            r="5"
            fill="none"
            stroke="#818cf8"
            strokeWidth="2"
          />

          {/* Labels */}
          <text x={scaleX(x0)} y={height - padding + 15} textAnchor="middle" className="fill-indigo-400 text-xs">
            x₀ = {x0}
          </text>
          <text x={padding - 5} y={scaleY(L)} textAnchor="end" className="fill-indigo-400 text-xs">
            L = {L}
          </text>
        </svg>
      </div>

      {/* Result */}
      <motion.div
        className={`p-3 rounded-lg ${
          checkDelta.allSatisfy
            ? 'bg-emerald-500/10 border border-emerald-500/30'
            : 'bg-red-500/10 border border-red-500/30'
        }`}
        animate={{
          backgroundColor: checkDelta.allSatisfy ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
        }}
      >
        <p className="text-sm">
          <strong>ε-δ Condition:</strong> For 0 {'<'} |x - x₀| {'<'} δ, is |f(x) - L| {'<'} ε?
        </p>
        <p className={`mt-2 font-semibold ${checkDelta.allSatisfy ? 'text-emerald-400' : 'text-red-400'}`}>
          {checkDelta.allSatisfy
            ? `✓ Yes! δ = ${delta.toFixed(3)} works for ε = ${epsilon.toFixed(3)}.`
            : `✗ No. This δ is too large for the given ε.`}
        </p>
        {selectedFn.discontinuous && (
          <p className="text-xs text-amber-400 mt-2">
            Note: This function has a jump discontinuity at x₀ = {x0}. No limit exists.
          </p>
        )}
      </motion.div>

      <p className="text-xs text-dark-500 mt-3">
        <strong>Definition:</strong> lim(x→x₀) f(x) = L means for every ε {'>'} 0, there exists δ {'>'} 0
        such that 0 {'<'} |x - x₀| {'<'} δ implies |f(x) - L| {'<'} ε.
      </p>
    </div>
  );
}
