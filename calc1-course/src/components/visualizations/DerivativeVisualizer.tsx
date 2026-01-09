import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type FunctionPreset = {
  name: string;
  f: (x: number) => number;
  fPrime: (x: number) => number;
  label: string;
};

const PRESETS: FunctionPreset[] = [
  { name: 'x²', f: (x) => x * x, fPrime: (x) => 2 * x, label: 'f(x) = x²' },
  { name: 'x³', f: (x) => x * x * x, fPrime: (x) => 3 * x * x, label: 'f(x) = x³' },
  { name: 'sin(x)', f: Math.sin, fPrime: Math.cos, label: 'f(x) = sin(x)' },
  { name: '1/x', f: (x) => 1 / x, fPrime: (x) => -1 / (x * x), label: 'f(x) = 1/x' },
  { name: 'eˣ', f: Math.exp, fPrime: Math.exp, label: 'f(x) = eˣ' },
];

export function DerivativeVisualizer({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [x0, setX0] = useState(1);
  const [h, setH] = useState(1);
  const [showSecant, setShowSecant] = useState(true);
  const [showTangent, setShowTangent] = useState(true);

  // Calculate values
  const y0 = preset.f(x0);
  const y1 = preset.f(x0 + h);
  const secantSlope = h !== 0 ? (y1 - y0) / h : 0;
  const tangentSlope = preset.fPrime(x0);

  // SVG dimensions
  const width = 400;
  const height = 300;
  const padding = 40;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Scale for viewing
  const xMin = -3;
  const xMax = 3;
  const yMin = -2;
  const yMax = 4;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Generate curve points
  const curvePath = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 100; i++) {
      const x = xMin + (i / 100) * (xMax - xMin);
      const y = preset.f(x);
      if (isFinite(y) && Math.abs(y) < 100) {
        const svgX = toSvgX(x);
        const svgY = toSvgY(y);
        points.push(`${i === 0 ? 'M' : 'L'} ${svgX} ${svgY}`);
      }
    }
    return points.join(' ');
  }, [preset, toSvgX, toSvgY, xMin, xMax]);

  // Line from slope at point
  const getLinePoints = (px: number, py: number, slope: number) => {
    const dx = 2;
    const x1 = px - dx;
    const x2 = px + dx;
    const y1 = py - slope * dx;
    const y2 = py + slope * dx;
    return { x1: toSvgX(x1), y1: toSvgY(y1), x2: toSvgX(x2), y2: toSvgY(y2) };
  };

  const tangentLine = getLinePoints(x0, y0, tangentSlope);
  const secantLine = h !== 0 ? getLinePoints(x0 + h / 2, (y0 + y1) / 2, secantSlope) : null;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Derivative Visualizer</h3>

      <p className="text-dark-300 mb-6">
        The derivative is the limit of the secant slope as h → 0.
        Watch the <span className="text-blue-400">secant line</span> approach
        the <span className="text-emerald-400">tangent line</span>.
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

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-dark-300 text-sm">Point x₀ = {x0.toFixed(2)}</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.1"
            value={x0}
            onChange={(e) => setX0(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm">Step h = {h.toFixed(2)}</label>
          <input
            type="range"
            min="0.01"
            max="2"
            step="0.01"
            value={h}
            onChange={(e) => setH(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Toggle buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowSecant(!showSecant)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showSecant ? 'bg-blue-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Secant Line
        </button>
        <button
          onClick={() => setShowTangent(!showTangent)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showTangent ? 'bg-emerald-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Tangent Line
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-2, -1, 0, 1, 2, 3].map((i) => (
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
          {[-2, -1, 0, 1, 2].map((i) => (
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

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#f97316" strokeWidth={3} />

          {/* Tangent line */}
          {showTangent && (
            <line
              x1={tangentLine.x1}
              y1={tangentLine.y1}
              x2={tangentLine.x2}
              y2={tangentLine.y2}
              stroke="#10b981"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          )}

          {/* Secant line */}
          {showSecant && secantLine && (
            <line
              x1={secantLine.x1}
              y1={secantLine.y1}
              x2={secantLine.x2}
              y2={secantLine.y2}
              stroke="#3b82f6"
              strokeWidth={2}
            />
          )}

          {/* Points */}
          <circle cx={toSvgX(x0)} cy={toSvgY(y0)} r={6} fill="#f97316" />
          {showSecant && h !== 0 && (
            <circle cx={toSvgX(x0 + h)} cy={toSvgY(y1)} r={5} fill="#3b82f6" />
          )}

          {/* Labels */}
          <text x={toSvgX(x0) + 10} y={toSvgY(y0) - 10} fill="#f97316" fontSize="12">
            (x₀, f(x₀))
          </text>
          {showSecant && h !== 0 && (
            <text x={toSvgX(x0 + h) + 10} y={toSvgY(y1) - 10} fill="#3b82f6" fontSize="12">
              (x₀+h, f(x₀+h))
            </text>
          )}
        </svg>
      </div>

      {/* Results */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-400 text-sm">Secant Slope (Δy/Δx)</p>
          <p className="text-blue-300 font-mono text-lg">{secantSlope.toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-emerald-400 text-sm">Tangent Slope (f'(x₀))</p>
          <p className="text-emerald-300 font-mono text-lg">{tangentSlope.toFixed(4)}</p>
        </div>
      </div>

      {/* Formula */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600 text-center">
        <p className="text-dark-300">
          <span className="text-blue-400">Secant:</span> [f(x₀+h) - f(x₀)] / h = {secantSlope.toFixed(4)}
        </p>
        <p className="text-dark-300 mt-2">
          As h → 0, this approaches <span className="text-emerald-400 font-bold">f'(x₀) = {tangentSlope.toFixed(4)}</span>
        </p>
        <p className="text-dark-500 text-sm mt-2">
          Error: |secant - tangent| = {Math.abs(secantSlope - tangentSlope).toFixed(6)}
        </p>
      </div>
    </div>
  );
}
