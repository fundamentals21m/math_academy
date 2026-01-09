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
  { name: '√x', f: (x) => x > 0 ? Math.sqrt(x) : 0, fPrime: (x) => x > 0 ? 1 / (2 * Math.sqrt(x)) : 0, label: 'f(x) = √x' },
  { name: 'sin(x)', f: Math.sin, fPrime: Math.cos, label: 'f(x) = sin(x)' },
];

export function TangentLineDemo({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [x0, setX0] = useState(1);

  // Calculate values
  const y0 = preset.f(x0);
  const slope = preset.fPrime(x0);

  // SVG dimensions
  const width = 400;
  const height = 300;
  const padding = 40;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Scale
  const xMin = -3;
  const xMax = 3;
  const yMin = -2;
  const yMax = 4;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Generate curve path
  const curvePath = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 100; i++) {
      const x = xMin + (i / 100) * (xMax - xMin);
      const y = preset.f(x);
      if (isFinite(y) && Math.abs(y) < 100 && y >= yMin - 1 && y <= yMax + 1) {
        const svgX = toSvgX(x);
        const svgY = Math.max(padding - 5, Math.min(height - padding + 5, toSvgY(y)));
        points.push(`${points.length === 0 ? 'M' : 'L'} ${svgX} ${svgY}`);
      }
    }
    return points.join(' ');
  }, [preset, toSvgX, toSvgY, xMin, xMax, yMin, yMax, height, padding]);

  // Tangent line endpoints
  const tangentX1 = xMin;
  const tangentX2 = xMax;
  const tangentY1 = y0 + slope * (tangentX1 - x0);
  const tangentY2 = y0 + slope * (tangentX2 - x0);

  // Slope visualization (rise/run triangle)
  const runLength = 1;
  const rise = slope * runLength;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Tangent Line</h3>

      <p className="text-dark-300 mb-6">
        The <strong>derivative</strong> at a point gives the slope of the tangent line.
        This slope tells you how fast the function is changing at that exact point!
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

      {/* Point control */}
      <div className="mb-4">
        <label className="text-orange-400 text-sm">Point: x = {x0.toFixed(2)}</label>
        <input
          type="range"
          min={preset.name === '√x' ? '0.1' : '-2'}
          max="2"
          step="0.1"
          value={x0}
          onChange={(e) => setX0(parseFloat(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-1, 0, 1, 2, 3].map((i) => (
            <g key={`h${i}`}>
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

          {/* Tangent line */}
          <line
            x1={toSvgX(tangentX1)}
            y1={toSvgY(tangentY1)}
            x2={toSvgX(tangentX2)}
            y2={toSvgY(tangentY2)}
            stroke="#3b82f6"
            strokeWidth={2}
          />

          {/* Rise/Run triangle */}
          {Math.abs(slope) < 10 && (
            <g opacity={0.7}>
              {/* Run (horizontal) */}
              <line
                x1={toSvgX(x0)}
                y1={toSvgY(y0)}
                x2={toSvgX(x0 + runLength)}
                y2={toSvgY(y0)}
                stroke="#10b981"
                strokeWidth={2}
              />
              {/* Rise (vertical) */}
              <line
                x1={toSvgX(x0 + runLength)}
                y1={toSvgY(y0)}
                x2={toSvgX(x0 + runLength)}
                y2={toSvgY(y0 + rise)}
                stroke="#ef4444"
                strokeWidth={2}
              />
              {/* Labels */}
              <text x={toSvgX(x0 + runLength / 2)} y={toSvgY(y0) + 15} fill="#10b981" fontSize="10" textAnchor="middle">
                run = 1
              </text>
              <text x={toSvgX(x0 + runLength) + 8} y={toSvgY(y0 + rise / 2)} fill="#ef4444" fontSize="10">
                rise = {rise.toFixed(2)}
              </text>
            </g>
          )}

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#f97316" strokeWidth={3} />

          {/* Point on curve */}
          <circle cx={toSvgX(x0)} cy={toSvgY(y0)} r={8} fill="#f97316" />
          <text x={toSvgX(x0) + 12} y={toSvgY(y0) - 10} fill="#f97316" fontSize="12" fontWeight="bold">
            ({x0.toFixed(1)}, {y0.toFixed(2)})
          </text>
        </svg>
      </div>

      {/* Results */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Point on curve</p>
          <p className="text-orange-400 font-mono text-lg">({x0.toFixed(2)}, {y0.toFixed(4)})</p>
        </div>
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Slope (derivative)</p>
          <p className="text-blue-400 font-mono text-lg">f'({x0.toFixed(2)}) = {slope.toFixed(4)}</p>
        </div>
      </div>

      {/* Interpretation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-100 font-medium">What the slope tells you:</p>
        <p className="text-dark-300 text-sm mt-2">
          {Math.abs(slope) < 0.1 ? (
            <span>The function is nearly <span className="text-yellow-400">flat</span> here — not changing much.</span>
          ) : slope > 0 ? (
            <span>The function is <span className="text-emerald-400">increasing</span> — going up as x increases.</span>
          ) : (
            <span>The function is <span className="text-red-400">decreasing</span> — going down as x increases.</span>
          )}
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Slope = rise/run = {slope.toFixed(4)} means for every 1 unit right, the function goes {slope > 0 ? 'up' : 'down'} {Math.abs(slope).toFixed(2)} units.
        </p>
      </div>
    </div>
  );
}
