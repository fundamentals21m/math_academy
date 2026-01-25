/**
 * Derivative Explorer
 * Visualize the derivative as the limit of secant lines
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface FunctionOption {
  id: string;
  name: string;
  fn: (x: number) => number;
  derivative: (x: number) => number;
  formula: string;
  derivativeFormula: string;
}

const functions: FunctionOption[] = [
  {
    id: 'x^2',
    name: 'x²',
    fn: (x) => x * x,
    derivative: (x) => 2 * x,
    formula: 'f(x) = x²',
    derivativeFormula: "f'(x) = 2x",
  },
  {
    id: 'x^3',
    name: 'x³',
    fn: (x) => x * x * x,
    derivative: (x) => 3 * x * x,
    formula: 'f(x) = x³',
    derivativeFormula: "f'(x) = 3x²",
  },
  {
    id: 'sin',
    name: 'sin(x)',
    fn: (x) => Math.sin(x),
    derivative: (x) => Math.cos(x),
    formula: 'f(x) = sin(x)',
    derivativeFormula: "f'(x) = cos(x)",
  },
  {
    id: 'exp',
    name: 'eˣ',
    fn: (x) => Math.exp(x),
    derivative: (x) => Math.exp(x),
    formula: 'f(x) = eˣ',
    derivativeFormula: "f'(x) = eˣ",
  },
];

export function DerivativeExplorer() {
  const [selectedFn, setSelectedFn] = useState(functions[0]);
  const [x0, setX0] = useState(1);
  const [h, setH] = useState(1);

  const xMin = -2;
  const xMax = 3;
  const numPoints = 100;

  // Generate curve points
  const curvePoints = useMemo(() => {
    const points: { x: number; y: number }[] = [];
    for (let i = 0; i <= numPoints; i++) {
      const x = xMin + (i / numPoints) * (xMax - xMin);
      points.push({ x, y: selectedFn.fn(x) });
    }
    return points;
  }, [selectedFn]);

  // Calculate values at x0 and x0 + h
  const y0 = selectedFn.fn(x0);
  const y1 = selectedFn.fn(x0 + h);

  // Secant slope (difference quotient)
  const secantSlope = (y1 - y0) / h;

  // True derivative
  const trueDerivative = selectedFn.derivative(x0);

  // Error
  const error = Math.abs(secantSlope - trueDerivative);

  // SVG dimensions and scaling
  const width = 400;
  const height = 300;
  const padding = 40;

  const yMin = Math.min(...curvePoints.map((p) => p.y), -1);
  const yMax = Math.max(...curvePoints.map((p) => p.y), 3);

  const scaleX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);

  // Path for curve
  const curvePath = curvePoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)} ${scaleY(p.y)}`)
    .join(' ');

  // Secant line endpoints (extended)
  const secantY = (x: number) => y0 + secantSlope * (x - x0);
  const secantStart = { x: xMin, y: secantY(xMin) };
  const secantEnd = { x: xMax, y: secantY(xMax) };

  // Tangent line endpoints
  const tangentY = (x: number) => y0 + trueDerivative * (x - x0);
  const tangentStart = { x: xMin, y: tangentY(xMin) };
  const tangentEnd = { x: xMax, y: tangentY(xMax) };

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">Derivative Explorer</h4>

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
          <label className="block text-sm text-dark-400 mb-1">Point x₀: {x0.toFixed(2)}</label>
          <input
            type="range"
            min={xMin + 0.5}
            max={xMax - 0.5}
            step="0.1"
            value={x0}
            onChange={(e) => setX0(parseFloat(e.target.value))}
            className="w-full accent-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">h (step size): {h.toFixed(3)}</label>
          <input
            type="range"
            min="0.01"
            max="1.5"
            step="0.01"
            value={h}
            onChange={(e) => setH(parseFloat(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
      </div>

      {/* Graph */}
      <div className="bg-dark-800/50 rounded-lg p-2 mb-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width={width} height={height} fill="url(#grid)" opacity="0.3" />

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

          {/* Tangent line (true derivative) */}
          <motion.line
            x1={scaleX(tangentStart.x)}
            y1={scaleY(tangentStart.y)}
            x2={scaleX(tangentEnd.x)}
            y2={scaleY(tangentEnd.y)}
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity={0.7}
          />

          {/* Secant line */}
          <motion.line
            x1={scaleX(secantStart.x)}
            y1={scaleY(secantStart.y)}
            x2={scaleX(secantEnd.x)}
            y2={scaleY(secantEnd.y)}
            stroke="#f59e0b"
            strokeWidth="2"
            animate={{
              x1: scaleX(secantStart.x),
              y1: scaleY(secantStart.y),
              x2: scaleX(secantEnd.x),
              y2: scaleY(secantEnd.y),
            }}
          />

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#818cf8" strokeWidth="2" />

          {/* Point at x0 */}
          <circle cx={scaleX(x0)} cy={scaleY(y0)} r="6" fill="#818cf8" />

          {/* Point at x0 + h */}
          <motion.circle
            cx={scaleX(x0 + h)}
            cy={scaleY(y1)}
            r="5"
            fill="#f59e0b"
            animate={{ cx: scaleX(x0 + h), cy: scaleY(y1) }}
          />

          {/* Labels */}
          <text x={scaleX(x0)} y={scaleY(y0) + 20} textAnchor="middle" className="fill-indigo-400 text-xs">
            (x₀, f(x₀))
          </text>
          <text x={scaleX(x0 + h)} y={scaleY(y1) - 10} textAnchor="middle" className="fill-amber-400 text-xs">
            (x₀+h, f(x₀+h))
          </text>
        </svg>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
          <p className="text-xs text-dark-400">Secant slope (difference quotient)</p>
          <p className="text-lg font-mono text-amber-400">
            {secantSlope.toFixed(4)}
          </p>
          <p className="text-xs text-dark-500 mt-1">[f(x₀+h) - f(x₀)] / h</p>
        </div>
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-xs text-dark-400">True derivative f'(x₀)</p>
          <p className="text-lg font-mono text-emerald-400">
            {trueDerivative.toFixed(4)}
          </p>
          <p className="text-xs text-dark-500 mt-1">{selectedFn.derivativeFormula}</p>
        </div>
      </div>

      {/* Error display */}
      <div className="p-3 rounded-lg bg-dark-800/50">
        <div className="flex justify-between items-center">
          <span className="text-sm text-dark-400">Error:</span>
          <span className={`font-mono ${error < 0.01 ? 'text-emerald-400' : 'text-dark-300'}`}>
            {error.toFixed(6)}
          </span>
        </div>
        <div className="w-full bg-dark-700 rounded-full h-2 mt-2">
          <motion.div
            className="bg-gradient-to-r from-emerald-500 to-amber-500 h-2 rounded-full"
            animate={{ width: `${Math.max(0, 100 - error * 100)}%` }}
          />
        </div>
        <p className="text-xs text-dark-500 mt-2">
          As h → 0, the secant line approaches the tangent line. This limit defines the derivative.
        </p>
      </div>
    </div>
  );
}
