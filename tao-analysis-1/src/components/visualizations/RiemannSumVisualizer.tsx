/**
 * Riemann Sum Visualizer
 * Visualize upper and lower Darboux sums converging to the integral
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface FunctionOption {
  id: string;
  name: string;
  fn: (x: number) => number;
  integral: (a: number, b: number) => number;
  formula: string;
}

const functions: FunctionOption[] = [
  {
    id: 'x^2',
    name: 'x²',
    fn: (x) => x * x,
    integral: (a, b) => (b ** 3 - a ** 3) / 3,
    formula: '∫x² dx = x³/3',
  },
  {
    id: 'x',
    name: 'x',
    fn: (x) => x,
    integral: (a, b) => (b ** 2 - a ** 2) / 2,
    formula: '∫x dx = x²/2',
  },
  {
    id: 'sin',
    name: 'sin(x)',
    fn: (x) => Math.sin(x),
    integral: (a, b) => -Math.cos(b) + Math.cos(a),
    formula: '∫sin(x) dx = -cos(x)',
  },
  {
    id: 'sqrt',
    name: '√x',
    fn: (x) => Math.sqrt(Math.max(0, x)),
    integral: (a, b) => (2 / 3) * (b ** 1.5 - Math.max(0, a) ** 1.5),
    formula: '∫√x dx = (2/3)x^(3/2)',
  },
];

type SumType = 'upper' | 'lower' | 'both';

export function RiemannSumVisualizer() {
  const [selectedFn, setSelectedFn] = useState(functions[0]);
  const [numPartitions, setNumPartitions] = useState(4);
  const [sumType, setSumType] = useState<SumType>('both');

  const a = 0;
  const b = 2;

  // Calculate partition points and sums
  const { partitions, upperSum, lowerSum, trueIntegral } = useMemo(() => {
    const width = (b - a) / numPartitions;
    const partitions: {
      x1: number;
      x2: number;
      sup: number;
      inf: number;
    }[] = [];

    let upperSum = 0;
    let lowerSum = 0;

    for (let i = 0; i < numPartitions; i++) {
      const x1 = a + i * width;
      const x2 = a + (i + 1) * width;

      // Sample points to find sup and inf
      const samples = 20;
      let sup = -Infinity;
      let inf = Infinity;
      for (let j = 0; j <= samples; j++) {
        const x = x1 + (j / samples) * (x2 - x1);
        const y = selectedFn.fn(x);
        sup = Math.max(sup, y);
        inf = Math.min(inf, y);
      }

      partitions.push({ x1, x2, sup, inf });
      upperSum += sup * width;
      lowerSum += inf * width;
    }

    return {
      partitions,
      upperSum,
      lowerSum,
      trueIntegral: selectedFn.integral(a, b),
    };
  }, [selectedFn, numPartitions]);

  // SVG dimensions
  const width = 400;
  const height = 250;
  const padding = 40;

  // Generate curve points
  const curvePoints = useMemo(() => {
    const points: { x: number; y: number }[] = [];
    for (let i = 0; i <= 100; i++) {
      const x = a + (i / 100) * (b - a);
      points.push({ x, y: selectedFn.fn(x) });
    }
    return points;
  }, [selectedFn]);

  const yMin = 0;
  const yMax = Math.max(...curvePoints.map((p) => p.y), 1) * 1.1;

  const scaleX = (x: number) => padding + ((x - a) / (b - a)) * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);

  const curvePath = curvePoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)} ${scaleY(p.y)}`)
    .join(' ');

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">Riemann Sum Visualizer</h4>

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
            Partitions (n): {numPartitions}
          </label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={numPartitions}
            onChange={(e) => setNumPartitions(parseInt(e.target.value))}
            className="w-full accent-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Show:</label>
          <div className="flex gap-2">
            {(['upper', 'lower', 'both'] as SumType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSumType(type)}
                className={`px-3 py-1 rounded text-xs transition-colors ${
                  sumType === type
                    ? type === 'upper'
                      ? 'bg-amber-500 text-white'
                      : type === 'lower'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-indigo-500 text-white'
                    : 'bg-dark-800 text-dark-400'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="bg-dark-800/50 rounded-lg p-2 mb-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Axes */}
          <line
            x1={padding}
            y1={height - padding}
            x2={width - padding}
            y2={height - padding}
            stroke="#6b7280"
            strokeWidth="1"
          />
          <line
            x1={padding}
            y1={padding}
            x2={padding}
            y2={height - padding}
            stroke="#6b7280"
            strokeWidth="1"
          />

          {/* Axis labels */}
          <text x={scaleX(a)} y={height - padding + 15} textAnchor="middle" className="fill-dark-400 text-xs">
            {a}
          </text>
          <text x={scaleX(b)} y={height - padding + 15} textAnchor="middle" className="fill-dark-400 text-xs">
            {b}
          </text>

          {/* Partition rectangles */}
          {partitions.map((p, i) => (
            <g key={i}>
              {/* Upper sum rectangle */}
              {(sumType === 'upper' || sumType === 'both') && (
                <motion.rect
                  x={scaleX(p.x1)}
                  y={scaleY(p.sup)}
                  width={scaleX(p.x2) - scaleX(p.x1)}
                  height={scaleY(0) - scaleY(p.sup)}
                  fill="#f59e0b"
                  opacity={0.3}
                  stroke="#f59e0b"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: i * 0.05 }}
                />
              )}
              {/* Lower sum rectangle */}
              {(sumType === 'lower' || sumType === 'both') && (
                <motion.rect
                  x={scaleX(p.x1)}
                  y={scaleY(p.inf)}
                  width={scaleX(p.x2) - scaleX(p.x1)}
                  height={scaleY(0) - scaleY(p.inf)}
                  fill="#10b981"
                  opacity={sumType === 'both' ? 0.3 : 0.4}
                  stroke="#10b981"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: sumType === 'both' ? 0.3 : 0.4 }}
                  transition={{ delay: i * 0.05 }}
                />
              )}
            </g>
          ))}

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#818cf8" strokeWidth="2.5" />

          {/* Partition lines */}
          {partitions.map((p, i) => (
            <line
              key={`line-${i}`}
              x1={scaleX(p.x2)}
              y1={scaleY(0)}
              x2={scaleX(p.x2)}
              y2={scaleY(yMax)}
              stroke="#4b5563"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
          ))}
        </svg>
      </div>

      {/* Results */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
          <p className="text-xs text-dark-400">Upper Sum (U)</p>
          <p className="text-lg font-mono text-amber-400">{upperSum.toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
          <p className="text-xs text-dark-400">True Integral</p>
          <p className="text-lg font-mono text-indigo-400">{trueIntegral.toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-xs text-dark-400">Lower Sum (L)</p>
          <p className="text-lg font-mono text-emerald-400">{lowerSum.toFixed(4)}</p>
        </div>
      </div>

      {/* Inequality */}
      <div className="p-3 rounded-lg bg-dark-800/50 text-center">
        <p className="font-mono text-sm">
          <span className="text-emerald-400">{lowerSum.toFixed(4)}</span>
          <span className="text-dark-400"> ≤ </span>
          <span className="text-indigo-400">{trueIntegral.toFixed(4)}</span>
          <span className="text-dark-400"> ≤ </span>
          <span className="text-amber-400">{upperSum.toFixed(4)}</span>
        </p>
        <p className="text-xs text-dark-500 mt-2">
          L(P, f) ≤ ∫f ≤ U(P, f) — As n → ∞, both sums converge to the integral.
        </p>
        <p className="text-xs text-dark-500 mt-1">
          Gap: U - L = <span className="text-dark-300">{(upperSum - lowerSum).toFixed(4)}</span>
        </p>
      </div>
    </div>
  );
}
