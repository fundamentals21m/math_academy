import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type ODEPreset = {
  name: string;
  f: (x: number, y: number) => number; // dy/dx = f(x, y)
  label: string;
  description: string;
};

const PRESETS: ODEPreset[] = [
  {
    name: 'y\' = y',
    f: (x, y) => y,
    label: 'dy/dx = y',
    description: 'Exponential growth/decay'
  },
  {
    name: 'y\' = -y',
    f: (x, y) => -y,
    label: 'dy/dx = -y',
    description: 'Exponential decay'
  },
  {
    name: 'y\' = x',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    f: (x, y) => x,
    label: 'dy/dx = x',
    description: 'Solutions: y = x²/2 + C'
  },
  {
    name: 'y\' = x + y',
    f: (x, y) => x + y,
    label: 'dy/dx = x + y',
    description: 'Linear first-order'
  },
  {
    name: 'y\' = x² - y',
    f: (x, y) => x * x - y,
    label: 'dy/dx = x² - y',
    description: 'Non-homogeneous'
  },
  {
    name: 'y\' = y(1-y)',
    f: (x, y) => y * (1 - y),
    label: 'dy/dx = y(1-y)',
    description: 'Logistic equation'
  },
  {
    name: 'y\' = sin(x)',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    f: (x, y) => Math.sin(x),
    label: 'dy/dx = sin(x)',
    description: 'Solutions: y = -cos(x) + C'
  },
];

export function DirectionFieldVisualizer({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [gridDensity, setGridDensity] = useState(15);
  const [showSolution, setShowSolution] = useState(true);
  const [initialY, setInitialY] = useState(0.5);

  // SVG dimensions
  const width = 400;
  const height = 400;
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

  // Generate direction field
  const arrows = useMemo(() => {
    const result: { x: number; y: number; angle: number }[] = [];
    const step = (xMax - xMin) / gridDensity;

    for (let xi = xMin; xi <= xMax; xi += step) {
      for (let yi = yMin; yi <= yMax; yi += step) {
        const slope = preset.f(xi, yi);
        if (isFinite(slope) && Math.abs(slope) < 100) {
          const angle = Math.atan(slope);
          result.push({ x: xi, y: yi, angle });
        }
      }
    }

    return result;
  }, [preset, gridDensity, xMin, xMax, yMin, yMax]);

  // Euler's method solution curve
  const solutionCurve = useMemo(() => {
    if (!showSolution) return [];

    const points: { x: number; y: number }[] = [];
    const dt = 0.02;

    // Forward integration
    let x = 0;
    let y = initialY;
    for (let i = 0; i < 300 && x <= xMax && Math.abs(y) < 10; i++) {
      points.push({ x, y });
      const slope = preset.f(x, y);
      if (!isFinite(slope)) break;
      y += slope * dt;
      x += dt;
    }

    // Backward integration
    x = 0;
    y = initialY;
    const backPoints: { x: number; y: number }[] = [];
    for (let i = 0; i < 300 && x >= xMin && Math.abs(y) < 10; i++) {
      backPoints.push({ x, y });
      const slope = preset.f(x, y);
      if (!isFinite(slope)) break;
      y -= slope * dt;
      x -= dt;
    }

    return [...backPoints.reverse(), ...points];
  }, [preset, initialY, showSolution, xMin, xMax]);

  // Arrow component
  const arrowLength = (plotWidth / gridDensity) * 0.4;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Direction Field Visualizer</h3>

      <p className="text-dark-300 mb-6">
        Visualize the slope field of a differential equation.
        Each arrow shows the direction of the solution curve at that point.
      </p>

      {/* ODE presets */}
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
          <label className="text-dark-300 text-sm">Grid Density: {gridDensity}</label>
          <input
            type="range"
            min="8"
            max="25"
            step="1"
            value={gridDensity}
            onChange={(e) => setGridDensity(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-dark-300 text-sm">Initial y(0) = {initialY.toFixed(2)}</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.1"
            value={initialY}
            onChange={(e) => setInitialY(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showSolution ? 'bg-emerald-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Show Solution Curve
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-2, -1, 0, 1, 2].map((i) => (
            <g key={i}>
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

          {/* Direction field arrows */}
          {arrows.map((arrow, i) => {
            const cx = toSvgX(arrow.x);
            const cy = toSvgY(arrow.y);
            const dx = arrowLength * Math.cos(arrow.angle);
            const dy = -arrowLength * Math.sin(arrow.angle); // Flip for SVG coords

            return (
              <g key={i}>
                <line
                  x1={cx - dx / 2}
                  y1={cy - dy / 2}
                  x2={cx + dx / 2}
                  y2={cy + dy / 2}
                  stroke="#3b82f6"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
                {/* Arrow head */}
                <circle
                  cx={cx + dx / 2}
                  cy={cy + dy / 2}
                  r={2}
                  fill="#3b82f6"
                />
              </g>
            );
          })}

          {/* Solution curve */}
          {showSolution && solutionCurve.length > 1 && (
            <path
              d={solutionCurve
                .map((p, i) => {
                  const sx = toSvgX(p.x);
                  const sy = toSvgY(p.y);
                  return `${i === 0 ? 'M' : 'L'} ${sx} ${sy}`;
                })
                .join(' ')}
              fill="none"
              stroke="#10b981"
              strokeWidth={3}
            />
          )}

          {/* Initial point */}
          {showSolution && (
            <circle
              cx={toSvgX(0)}
              cy={toSvgY(initialY)}
              r={6}
              fill="#f97316"
              stroke="#fff"
              strokeWidth={2}
            />
          )}

          {/* Axis labels */}
          <text x={toSvgX(xMax) - 10} y={toSvgY(0) - 10} fill="#6b7280" fontSize="12">
            x
          </text>
          <text x={toSvgX(0) + 10} y={toSvgY(yMax) + 15} fill="#6b7280" fontSize="12">
            y
          </text>
        </svg>
      </div>

      {/* Info */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-400 text-sm font-medium">{preset.label}</p>
          <p className="text-dark-400 text-xs mt-1">{preset.description}</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-emerald-400 text-sm">Solution through (0, {initialY.toFixed(2)})</p>
          <p className="text-dark-400 text-xs mt-1">Computed via Euler's method</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          The <strong className="text-blue-400">direction field</strong> shows the slope
          dy/dx at each point. Solution curves (integral curves) are paths that
          follow these slopes. Different initial conditions give different solutions
          that never cross each other.
        </p>
      </div>
    </div>
  );
}
