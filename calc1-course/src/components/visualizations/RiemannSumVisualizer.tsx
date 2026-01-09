import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type FunctionPreset = {
  name: string;
  f: (x: number) => number;
  integral: (a: number, b: number) => number;
  label: string;
};

const PRESETS: FunctionPreset[] = [
  {
    name: 'x²',
    f: (x) => x * x,
    integral: (a, b) => (b * b * b - a * a * a) / 3,
    label: 'f(x) = x²'
  },
  {
    name: 'x',
    f: (x) => x,
    integral: (a, b) => (b * b - a * a) / 2,
    label: 'f(x) = x'
  },
  {
    name: 'sin(x)',
    f: Math.sin,
    integral: (a, b) => Math.cos(a) - Math.cos(b),
    label: 'f(x) = sin(x)'
  },
  {
    name: '1+x²',
    f: (x) => 1 + x * x,
    integral: (a, b) => (b - a) + (b * b * b - a * a * a) / 3,
    label: 'f(x) = 1 + x²'
  },
];

type SumType = 'left' | 'right' | 'midpoint' | 'upper' | 'lower';

export function RiemannSumVisualizer({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [n, setN] = useState(5);
  const [sumType, setSumType] = useState<SumType>('left');
  const [a, setA] = useState(0);
  const [b, setB] = useState(2);

  // SVG dimensions
  const width = 400;
  const height = 300;
  const padding = 40;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Scale
  const xMin = -0.5;
  const xMax = 3;
  const yMin = -0.5;
  const yMax = 5;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Calculate rectangles
  const rectangles = useMemo(() => {
    const dx = (b - a) / n;
    const rects: { x: number; width: number; height: number; y: number }[] = [];

    for (let i = 0; i < n; i++) {
      const xi = a + i * dx;
      let sampleX: number;
      let h: number;

      switch (sumType) {
        case 'left':
          sampleX = xi;
          h = preset.f(sampleX);
          break;
        case 'right':
          sampleX = xi + dx;
          h = preset.f(sampleX);
          break;
        case 'midpoint':
          sampleX = xi + dx / 2;
          h = preset.f(sampleX);
          break;
        case 'upper':
          // Find max on interval (sample multiple points)
          h = Math.max(
            preset.f(xi),
            preset.f(xi + dx / 4),
            preset.f(xi + dx / 2),
            preset.f(xi + 3 * dx / 4),
            preset.f(xi + dx)
          );
          break;
        case 'lower':
          // Find min on interval
          h = Math.min(
            preset.f(xi),
            preset.f(xi + dx / 4),
            preset.f(xi + dx / 2),
            preset.f(xi + 3 * dx / 4),
            preset.f(xi + dx)
          );
          break;
        default:
          h = preset.f(xi);
      }

      rects.push({ x: xi, width: dx, height: h, y: 0 });
    }

    return rects;
  }, [preset, n, a, b, sumType]);

  // Calculate sum
  const riemannSum = useMemo(() => {
    const dx = (b - a) / n;
    return rectangles.reduce((sum, rect) => sum + rect.height * dx, 0);
  }, [rectangles, a, b, n]);

  // Exact integral
  const exactIntegral = preset.integral(a, b);
  const error = Math.abs(riemannSum - exactIntegral);

  // Generate curve path
  const curvePath = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 100; i++) {
      const x = xMin + (i / 100) * (xMax - xMin);
      const y = preset.f(x);
      if (isFinite(y) && y >= yMin && y <= yMax) {
        const svgX = toSvgX(x);
        const svgY = toSvgY(y);
        points.push(`${i === 0 || points.length === 0 ? 'M' : 'L'} ${svgX} ${svgY}`);
      }
    }
    return points.join(' ');
  }, [preset, toSvgX, toSvgY, xMin, xMax, yMin, yMax]);

  const sumTypeColors: Record<SumType, string> = {
    left: '#3b82f6',
    right: '#8b5cf6',
    midpoint: '#f97316',
    upper: '#ef4444',
    lower: '#10b981',
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Riemann Sum Visualizer</h3>

      <p className="text-dark-300 mb-6">
        Approximate the integral using rectangles. As n increases, the sum
        approaches the exact area under the curve.
      </p>

      {/* Function presets */}
      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((p) => (
          <button
            key={p.name}
            onClick={() => setPreset(p)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              preset.name === p.name
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Sum type */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(['left', 'right', 'midpoint', 'upper', 'lower'] as SumType[]).map((type) => (
          <button
            key={type}
            onClick={() => setSumType(type)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              sumType === type
                ? `text-white`
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
            style={sumType === type ? { backgroundColor: sumTypeColors[type] } : {}}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-dark-300 text-sm">n = {n} rectangles</label>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm">a = {a.toFixed(1)}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm">b = {b.toFixed(1)}</label>
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <line
                x1={toSvgX(xMin)}
                y1={toSvgY(i)}
                x2={toSvgX(xMax)}
                y2={toSvgY(i)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={`v${i}`}
              x1={toSvgX(i)}
              y1={toSvgY(yMin)}
              x2={toSvgX(i)}
              y2={toSvgY(yMax)}
              stroke={i === 0 ? '#4b5563' : '#374151'}
              strokeWidth={i === 0 ? 2 : 1}
            />
          ))}

          {/* Rectangles */}
          {rectangles.map((rect, i) => (
            <rect
              key={i}
              x={toSvgX(rect.x)}
              y={rect.height >= 0 ? toSvgY(rect.height) : toSvgY(0)}
              width={(toSvgX(rect.x + rect.width) - toSvgX(rect.x))}
              height={Math.abs(toSvgY(0) - toSvgY(rect.height))}
              fill={sumTypeColors[sumType]}
              fillOpacity={0.3}
              stroke={sumTypeColors[sumType]}
              strokeWidth={1}
            />
          ))}

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#f97316" strokeWidth={3} />

          {/* Integration bounds */}
          <line
            x1={toSvgX(a)}
            y1={toSvgY(yMin)}
            x2={toSvgX(a)}
            y2={toSvgY(yMax)}
            stroke="#10b981"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <line
            x1={toSvgX(b)}
            y1={toSvgY(yMin)}
            x2={toSvgX(b)}
            y2={toSvgY(yMax)}
            stroke="#10b981"
            strokeWidth={2}
            strokeDasharray="5 5"
          />

          {/* Labels */}
          <text x={toSvgX(a) - 5} y={toSvgY(-0.3)} fill="#10b981" fontSize="12" textAnchor="middle">
            a
          </text>
          <text x={toSvgX(b) + 5} y={toSvgY(-0.3)} fill="#10b981" fontSize="12" textAnchor="middle">
            b
          </text>
        </svg>
      </div>

      {/* Results */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl border" style={{
          backgroundColor: `${sumTypeColors[sumType]}20`,
          borderColor: `${sumTypeColors[sumType]}50`
        }}>
          <p className="text-dark-400 text-xs">Riemann Sum</p>
          <p className="font-mono text-lg" style={{ color: sumTypeColors[sumType] }}>
            {riemannSum.toFixed(4)}
          </p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Exact Integral</p>
          <p className="text-orange-400 font-mono text-lg">{exactIntegral.toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-dark-400 text-xs">Error</p>
          <p className="text-red-400 font-mono text-lg">{error.toFixed(6)}</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          <strong className="text-orange-400">{sumType.charAt(0).toUpperCase() + sumType.slice(1)} sum:</strong>{' '}
          {sumType === 'left' && 'Uses left endpoint of each subinterval'}
          {sumType === 'right' && 'Uses right endpoint of each subinterval'}
          {sumType === 'midpoint' && 'Uses midpoint of each subinterval (often most accurate)'}
          {sumType === 'upper' && 'Uses maximum value on each subinterval (overestimate for increasing f)'}
          {sumType === 'lower' && 'Uses minimum value on each subinterval (underestimate for increasing f)'}
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Δx = (b-a)/n = {((b - a) / n).toFixed(4)}
        </p>
      </div>
    </div>
  );
}
