import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type LimitPreset = {
  name: string;
  f: (x: number) => number;
  a: number;
  L: number;
  label: string;
  description: string;
};

const PRESETS: LimitPreset[] = [
  {
    name: 'x² at x=2',
    f: (x) => x * x,
    a: 2,
    L: 4,
    label: 'lim(x→2) x² = 4',
    description: 'As x gets closer to 2, x² gets closer to 4',
  },
  {
    name: '2x+1 at x=3',
    f: (x) => 2 * x + 1,
    a: 3,
    L: 7,
    label: 'lim(x→3) 2x+1 = 7',
    description: 'A simple linear function approaching its value',
  },
  {
    name: '(x²-1)/(x-1)',
    f: (x) => (x * x - 1) / (x - 1),
    a: 1,
    L: 2,
    label: 'lim(x→1) (x²-1)/(x-1) = 2',
    description: 'Has a "hole" at x=1, but the limit still exists!',
  },
  {
    name: 'sin(x)/x',
    f: (x) => x === 0 ? 1 : Math.sin(x) / x,
    a: 0,
    L: 1,
    label: 'lim(x→0) sin(x)/x = 1',
    description: 'A famous limit - 0/0 form but limit is 1',
  },
];

export function LimitVisualizer({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [approach, setApproach] = useState(0.5); // How close to approach (0 = far, 1 = very close)
  const [showFromBoth, setShowFromBoth] = useState(true);

  // SVG dimensions
  const width = 400;
  const height = 300;
  const padding = 50;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Dynamic scale
  const xMin = preset.a - 3;
  const xMax = preset.a + 3;
  const yMin = preset.L - 3;
  const yMax = preset.L + 3;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Calculate approaching points
  const distance = 2 * Math.pow(1 - approach, 2) + 0.01; // Exponential approach
  const leftX = preset.a - distance;
  const rightX = preset.a + distance;
  const leftY = preset.f(leftX);
  const rightY = preset.f(rightX);

  // Generate curve path
  const curvePath = useMemo(() => {
    const points: string[] = [];
    let lastValid = false;

    for (let i = 0; i <= 200; i++) {
      const x = xMin + (i / 200) * (xMax - xMin);
      if (Math.abs(x - preset.a) < 0.02) {
        lastValid = false;
        continue;
      }

      const y = preset.f(x);
      if (isFinite(y) && y >= yMin - 1 && y <= yMax + 1) {
        const svgX = toSvgX(x);
        const svgY = Math.max(padding - 5, Math.min(height - padding + 5, toSvgY(y)));
        points.push(`${!lastValid ? 'M' : 'L'} ${svgX} ${svgY}`);
        lastValid = true;
      } else {
        lastValid = false;
      }
    }
    return points.join(' ');
  }, [preset, xMin, xMax, yMin, yMax, toSvgX, toSvgY, height, padding]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">What Is a Limit?</h3>

      <p className="text-dark-300 mb-6">
        A <strong>limit</strong> describes what value a function approaches as the input gets
        closer and closer to some number. Drag the slider to approach the target!
      </p>

      {/* Presets */}
      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((p) => (
          <button
            key={p.name}
            onClick={() => {
              setPreset(p);
              setApproach(0.5);
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

      {/* Approach control */}
      <div className="mb-4">
        <label className="text-blue-400 text-sm">
          Approach x = {preset.a} (distance: {distance.toFixed(4)})
        </label>
        <input
          type="range"
          min="0"
          max="0.99"
          step="0.01"
          value={approach}
          onChange={(e) => setApproach(parseFloat(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>Far away</span>
          <span>Very close</span>
        </div>
      </div>

      {/* Toggle */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowFromBoth(!showFromBoth)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showFromBoth ? 'bg-purple-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Approach from Both Sides
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-2, -1, 0, 1, 2, 3, 4, 5, 6].map((i) => {
            const y = Math.round(yMin) + i;
            if (y < yMin || y > yMax) return null;
            return (
              <line
                key={`h${i}`}
                x1={toSvgX(xMin)}
                y1={toSvgY(y)}
                x2={toSvgX(xMax)}
                y2={toSvgY(y)}
                stroke={y === 0 ? '#4b5563' : '#374151'}
                strokeWidth={y === 0 ? 2 : 1}
              />
            );
          })}
          {[-2, -1, 0, 1, 2, 3, 4, 5].map((i) => {
            const x = Math.round(xMin) + i;
            if (x < xMin || x > xMax) return null;
            return (
              <line
                key={`v${i}`}
                x1={toSvgX(x)}
                y1={toSvgY(yMin)}
                x2={toSvgX(x)}
                y2={toSvgY(yMax)}
                stroke={x === 0 ? '#4b5563' : '#374151'}
                strokeWidth={x === 0 ? 2 : 1}
              />
            );
          })}

          {/* Limit line */}
          <line
            x1={toSvgX(xMin)}
            y1={toSvgY(preset.L)}
            x2={toSvgX(xMax)}
            y2={toSvgY(preset.L)}
            stroke="#f97316"
            strokeWidth={2}
            strokeDasharray="8 4"
          />
          <text x={width - padding + 5} y={toSvgY(preset.L) + 4} fill="#f97316" fontSize="11">
            L = {preset.L}
          </text>

          {/* Target x line */}
          <line
            x1={toSvgX(preset.a)}
            y1={toSvgY(yMin)}
            x2={toSvgX(preset.a)}
            y2={toSvgY(yMax)}
            stroke="#3b82f6"
            strokeWidth={2}
            strokeDasharray="8 4"
          />
          <text x={toSvgX(preset.a)} y={height - padding + 20} fill="#3b82f6" fontSize="11" textAnchor="middle">
            x = {preset.a}
          </text>

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#10b981" strokeWidth={3} />

          {/* Limit point (hollow circle if discontinuous) */}
          <circle
            cx={toSvgX(preset.a)}
            cy={toSvgY(preset.L)}
            r={6}
            fill="none"
            stroke="#f97316"
            strokeWidth={2}
          />

          {/* Approaching points */}
          {/* From left */}
          <circle cx={toSvgX(leftX)} cy={toSvgY(leftY)} r={8} fill="#ef4444" />
          <line
            x1={toSvgX(leftX)}
            y1={toSvgY(leftY)}
            x2={toSvgX(preset.a)}
            y2={toSvgY(preset.L)}
            stroke="#ef4444"
            strokeWidth={1}
            strokeDasharray="3 3"
            opacity={0.5}
          />

          {/* From right */}
          {showFromBoth && (
            <>
              <circle cx={toSvgX(rightX)} cy={toSvgY(rightY)} r={8} fill="#8b5cf6" />
              <line
                x1={toSvgX(rightX)}
                y1={toSvgY(rightY)}
                x2={toSvgX(preset.a)}
                y2={toSvgY(preset.L)}
                stroke="#8b5cf6"
                strokeWidth={1}
                strokeDasharray="3 3"
                opacity={0.5}
              />
            </>
          )}

          {/* Arrows showing direction */}
          <text x={toSvgX(leftX) - 15} y={toSvgY(leftY) + 4} fill="#ef4444" fontSize="16">→</text>
          {showFromBoth && (
            <text x={toSvgX(rightX) + 5} y={toSvgY(rightY) + 4} fill="#8b5cf6" fontSize="16">←</text>
          )}
        </svg>
      </div>

      {/* Values */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-dark-400 text-xs">From left (x = {leftX.toFixed(4)})</p>
          <p className="text-red-400 font-mono text-lg">f(x) = {leftY.toFixed(6)}</p>
        </div>
        {showFromBoth && (
          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
            <p className="text-dark-400 text-xs">From right (x = {rightX.toFixed(4)})</p>
            <p className="text-purple-400 font-mono text-lg">f(x) = {rightY.toFixed(6)}</p>
          </div>
        )}
      </div>

      {/* Result */}
      <div className="mt-4 p-4 rounded-xl bg-orange-500/20 border border-orange-500/50">
        <p className="text-center">
          <span className="text-dark-300">As x → {preset.a}, f(x) → </span>
          <span className="text-orange-400 font-bold text-xl">{preset.L}</span>
        </p>
      </div>

      {/* Description */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">{preset.label}</p>
        <p className="text-dark-400 text-sm mt-1">{preset.description}</p>
        <p className="text-dark-300 text-sm mt-2">
          Watch how the <span className="text-red-400">red</span> and{' '}
          <span className="text-purple-400">purple</span> points get closer to the{' '}
          <span className="text-orange-400">limit L</span> as you drag the slider!
        </p>
      </div>
    </div>
  );
}
