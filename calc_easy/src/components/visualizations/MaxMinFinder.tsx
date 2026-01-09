import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type FunctionPreset = {
  name: string;
  f: (x: number) => number;
  fPrime: (x: number) => number;
  criticalPoints: number[];
  label: string;
  description: string;
};

const PRESETS: FunctionPreset[] = [
  {
    name: 'x² - 4x + 3',
    f: (x) => x * x - 4 * x + 3,
    fPrime: (x) => 2 * x - 4,
    criticalPoints: [2],
    label: 'f(x) = x² - 4x + 3',
    description: 'A parabola with one minimum at x = 2',
  },
  {
    name: '-x² + 2x',
    f: (x) => -x * x + 2 * x,
    fPrime: (x) => -2 * x + 2,
    criticalPoints: [1],
    label: 'f(x) = -x² + 2x',
    description: 'An upside-down parabola with one maximum at x = 1',
  },
  {
    name: 'x³ - 3x',
    f: (x) => x * x * x - 3 * x,
    fPrime: (x) => 3 * x * x - 3,
    criticalPoints: [-1, 1],
    label: 'f(x) = x³ - 3x',
    description: 'A cubic with a local max at x = -1 and local min at x = 1',
  },
  {
    name: 'sin(x)',
    f: Math.sin,
    fPrime: Math.cos,
    criticalPoints: [-Math.PI / 2, Math.PI / 2],
    label: 'f(x) = sin(x)',
    description: 'Sine wave with max/min at odd multiples of π/2',
  },
];

export function MaxMinFinder({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [x0, setX0] = useState(0);

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
  const yMin = -3;
  const yMax = 3;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Generate curve path
  const curvePath = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 100; i++) {
      const x = xMin + (i / 100) * (xMax - xMin);
      const y = preset.f(x);
      if (isFinite(y) && y >= yMin - 1 && y <= yMax + 1) {
        const svgX = toSvgX(x);
        const svgY = Math.max(padding - 5, Math.min(height - padding + 5, toSvgY(y)));
        points.push(`${points.length === 0 ? 'M' : 'L'} ${svgX} ${svgY}`);
      }
    }
    return points.join(' ');
  }, [preset, xMin, xMax, yMin, yMax, toSvgX, toSvgY, height, padding]);

  // Tangent line at current point
  const tangentX1 = x0 - 1.5;
  const tangentX2 = x0 + 1.5;
  const tangentY1 = y0 + slope * (tangentX1 - x0);
  const tangentY2 = y0 + slope * (tangentX2 - x0);

  // Check if near a critical point
  const nearCritical = preset.criticalPoints.some(cp => Math.abs(x0 - cp) < 0.15);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Finding Maxima and Minima</h3>

      <p className="text-dark-300 mb-6">
        At a maximum or minimum, the tangent line is <strong>horizontal</strong> (slope = 0).
        Drag the point to find where f'(x) = 0!
      </p>

      {/* Function presets */}
      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((p) => (
          <button
            key={p.name}
            onClick={() => {
              setPreset(p);
              setX0(0);
            }}
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
        <label className="text-orange-400 text-sm">
          Move point: x = {x0.toFixed(2)}
          {nearCritical && <span className="text-emerald-400 ml-2">★ Near critical point!</span>}
        </label>
        <input
          type="range"
          min="-2.5"
          max="2.5"
          step="0.05"
          value={x0}
          onChange={(e) => setX0(parseFloat(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-2, -1, 0, 1, 2].map((i) => (
            <g key={`grid${i}`}>
              <line
                x1={toSvgX(xMin)}
                y1={toSvgY(i)}
                x2={toSvgX(xMax)}
                y2={toSvgY(i)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={toSvgX(i)}
                y1={toSvgY(yMin)}
                x2={toSvgX(i)}
                y2={toSvgY(yMax)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Critical points markers */}
          {preset.criticalPoints.map((cp, i) => {
            const cpY = preset.f(cp);
            if (cpY >= yMin && cpY <= yMax) {
              return (
                <g key={`cp${i}`}>
                  <circle
                    cx={toSvgX(cp)}
                    cy={toSvgY(cpY)}
                    r={12}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                  />
                  <text x={toSvgX(cp)} y={toSvgY(cpY) - 18} fill="#10b981" fontSize="10" textAnchor="middle">
                    {cpY > preset.f(cp + 0.1) && cpY > preset.f(cp - 0.1) ? 'MAX' : 'MIN'}
                  </text>
                </g>
              );
            }
            return null;
          })}

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#f97316" strokeWidth={3} />

          {/* Tangent line */}
          <line
            x1={toSvgX(tangentX1)}
            y1={toSvgY(tangentY1)}
            x2={toSvgX(tangentX2)}
            y2={toSvgY(tangentY2)}
            stroke={nearCritical ? '#10b981' : '#3b82f6'}
            strokeWidth={3}
          />

          {/* Current point */}
          <circle
            cx={toSvgX(x0)}
            cy={toSvgY(y0)}
            r={8}
            fill={nearCritical ? '#10b981' : '#f97316'}
          />
        </svg>
      </div>

      {/* Slope indicator */}
      <div className={`mt-4 p-4 rounded-xl border transition-colors ${
        nearCritical
          ? 'bg-emerald-500/20 border-emerald-500/50'
          : 'bg-dark-700/50 border-dark-600'
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-dark-400 text-xs">Derivative (slope)</p>
            <p className={`font-mono text-2xl ${nearCritical ? 'text-emerald-400' : 'text-blue-400'}`}>
              f'({x0.toFixed(2)}) = {slope.toFixed(4)}
            </p>
          </div>
          <div className="text-4xl">
            {nearCritical ? '✓' : slope > 0 ? '↗' : slope < 0 ? '↘' : '→'}
          </div>
        </div>
        {nearCritical && (
          <p className="text-emerald-400 text-sm mt-2">
            Slope ≈ 0! This is a critical point (max or min)!
          </p>
        )}
      </div>

      {/* Critical points list */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {preset.criticalPoints.map((cp, i) => {
          const cpY = preset.f(cp);
          const isMax = cpY > preset.f(cp + 0.1) && cpY > preset.f(cp - 0.1);
          return (
            <div
              key={i}
              className={`p-3 rounded-xl ${
                isMax ? 'bg-red-500/10 border border-red-500/30' : 'bg-blue-500/10 border border-blue-500/30'
              }`}
            >
              <p className="text-dark-400 text-xs">{isMax ? 'Local Maximum' : 'Local Minimum'}</p>
              <p className={`font-mono ${isMax ? 'text-red-400' : 'text-blue-400'}`}>
                x = {cp.toFixed(2)}, f(x) = {cpY.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">{preset.label}</p>
        <p className="text-dark-400 text-sm mt-1">{preset.description}</p>
        <p className="text-dark-300 text-sm mt-2">
          <strong>Rule:</strong> To find max/min, solve f'(x) = 0. The tangent line is horizontal at these points!
        </p>
      </div>
    </div>
  );
}
