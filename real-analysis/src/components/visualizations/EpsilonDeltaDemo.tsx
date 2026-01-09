import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type FunctionPreset = {
  name: string;
  f: (x: number) => number;
  a: number;
  L: number;
  label: string;
  note?: string;
};

const PRESETS: FunctionPreset[] = [
  {
    name: 'x²',
    f: (x) => x * x,
    a: 2,
    L: 4,
    label: 'lim(x→2) x² = 4',
    note: 'Continuous - limit equals function value',
  },
  {
    name: '(x²-4)/(x-2)',
    f: (x) => (x * x - 4) / (x - 2),
    a: 2,
    L: 4,
    label: 'lim(x→2) (x²-4)/(x-2) = 4',
    note: 'Removable discontinuity - factor to (x+2)',
  },
  {
    name: 'sin(x)/x',
    f: (x) => x === 0 ? 1 : Math.sin(x) / x,
    a: 0,
    L: 1,
    label: 'lim(x→0) sin(x)/x = 1',
    note: 'Fundamental limit in calculus',
  },
  {
    name: '(eˣ-1)/x',
    f: (x) => x === 0 ? 1 : (Math.exp(x) - 1) / x,
    a: 0,
    L: 1,
    label: 'lim(x→0) (eˣ-1)/x = 1',
    note: 'Related to derivative of eˣ at 0',
  },
  {
    name: 'x·sin(1/x)',
    f: (x) => x === 0 ? 0 : x * Math.sin(1 / x),
    a: 0,
    L: 0,
    label: 'lim(x→0) x·sin(1/x) = 0',
    note: 'Squeeze theorem - bounded oscillation damped by x',
  },
];

export function EpsilonDeltaDemo({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [epsilon, setEpsilon] = useState(0.5);
  const [delta, setDelta] = useState(0.3);
  const [showEpsilon, setShowEpsilon] = useState(true);
  const [showDelta, setShowDelta] = useState(true);

  // SVG dimensions
  const width = 450;
  const height = 320;
  const padding = 50;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Dynamic scale based on the preset
  const xMin = preset.a - 3;
  const xMax = preset.a + 3;
  const yMin = preset.L - 3;
  const yMax = preset.L + 3;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Generate function path
  const funcPath = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 200; i++) {
      const x = xMin + (i / 200) * (xMax - xMin);
      // Skip very close to the point if there's a discontinuity
      if (Math.abs(x - preset.a) < 0.02) continue;

      const y = preset.f(x);
      if (isFinite(y) && y >= yMin - 1 && y <= yMax + 1) {
        const svgX = toSvgX(x);
        const svgY = Math.max(padding - 5, Math.min(height - padding + 5, toSvgY(y)));
        points.push(`${points.length === 0 ? 'M' : 'L'} ${svgX} ${svgY}`);
      }
    }
    return points.join(' ');
  }, [preset, xMin, xMax, yMin, yMax, toSvgX, toSvgY, height, padding]);

  // Sample test points within delta neighborhood
  const testPoints = useMemo(() => {
    const points: { x: number; y: number; inBand: boolean }[] = [];
    const numSamples = 15;

    for (let i = 1; i <= numSamples; i++) {
      // Points approaching from left and right
      const xLeft = preset.a - (delta * i) / numSamples;
      const xRight = preset.a + (delta * i) / numSamples;

      const yLeft = preset.f(xLeft);
      const yRight = preset.f(xRight);

      if (isFinite(yLeft)) {
        points.push({
          x: xLeft,
          y: yLeft,
          inBand: Math.abs(yLeft - preset.L) < epsilon,
        });
      }
      if (isFinite(yRight)) {
        points.push({
          x: xRight,
          y: yRight,
          inBand: Math.abs(yRight - preset.L) < epsilon,
        });
      }
    }

    return points;
  }, [preset, epsilon, delta]);

  // Check if delta-epsilon condition is satisfied
  const conditionMet = testPoints.every((p) => p.inBand);
  const inBandCount = testPoints.filter((p) => p.inBand).length;
  const outBandCount = testPoints.length - inBandCount;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">ε-δ Definition of Limits</h3>

      <p className="text-dark-300 mb-6">
        lim(x→a) f(x) = L means: for every ε {'>'} 0, there exists δ {'>'} 0 such that
        |f(x) - L| {'<'} ε whenever 0 {'<'} |x - a| {'<'} δ.
      </p>

      {/* Presets */}
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
          <label className="text-emerald-400 text-sm">ε (epsilon) = {epsilon.toFixed(2)}</label>
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.05"
            value={epsilon}
            onChange={(e) => setEpsilon(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div>
          <label className="text-blue-400 text-sm">δ (delta) = {delta.toFixed(2)}</label>
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.05"
            value={delta}
            onChange={(e) => setDelta(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Toggle buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowEpsilon(!showEpsilon)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showEpsilon ? 'bg-emerald-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          ε-band (y)
        </button>
        <button
          onClick={() => setShowDelta(!showDelta)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showDelta ? 'bg-blue-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          δ-neighborhood (x)
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

          {/* Epsilon band (horizontal) */}
          {showEpsilon && (
            <rect
              x={toSvgX(xMin)}
              y={toSvgY(preset.L + epsilon)}
              width={plotWidth}
              height={toSvgY(preset.L - epsilon) - toSvgY(preset.L + epsilon)}
              fill="#10b981"
              fillOpacity={0.15}
              stroke="#10b981"
              strokeWidth={1}
              strokeDasharray="5 5"
            />
          )}

          {/* Delta neighborhood (vertical) */}
          {showDelta && (
            <rect
              x={toSvgX(preset.a - delta)}
              y={toSvgY(yMax)}
              width={toSvgX(preset.a + delta) - toSvgX(preset.a - delta)}
              height={plotHeight}
              fill="#3b82f6"
              fillOpacity={0.15}
              stroke="#3b82f6"
              strokeWidth={1}
              strokeDasharray="5 5"
            />
          )}

          {/* Function curve */}
          <path d={funcPath} fill="none" stroke="#f97316" strokeWidth={3} />

          {/* Test points */}
          {testPoints.map((p, i) => (
            <circle
              key={i}
              cx={toSvgX(p.x)}
              cy={toSvgY(p.y)}
              r={4}
              fill={p.inBand ? '#10b981' : '#ef4444'}
            />
          ))}

          {/* Limit point and lines */}
          <line
            x1={toSvgX(preset.a)}
            y1={toSvgY(yMin)}
            x2={toSvgX(preset.a)}
            y2={toSvgY(yMax)}
            stroke="#f97316"
            strokeWidth={1}
            strokeDasharray="3 3"
            opacity={0.5}
          />
          <line
            x1={toSvgX(xMin)}
            y1={toSvgY(preset.L)}
            x2={toSvgX(xMax)}
            y2={toSvgY(preset.L)}
            stroke="#10b981"
            strokeWidth={2}
            strokeDasharray="3 3"
          />
          <circle
            cx={toSvgX(preset.a)}
            cy={toSvgY(preset.L)}
            r={6}
            fill="none"
            stroke="#f97316"
            strokeWidth={2}
          />

          {/* Labels */}
          <text x={toSvgX(preset.a)} y={toSvgY(yMin) + 15} fill="#f97316" fontSize="11" textAnchor="middle">
            a = {preset.a}
          </text>
          <text x={toSvgX(xMax) - 5} y={toSvgY(preset.L) - 5} fill="#10b981" fontSize="11" textAnchor="end">
            L = {preset.L}
          </text>
        </svg>
      </div>

      {/* Status */}
      <div className={`mt-4 p-4 rounded-xl border ${
        conditionMet
          ? 'bg-emerald-500/20 border-emerald-500/50'
          : 'bg-red-500/20 border-red-500/50'
      }`}>
        <p className={`text-center font-medium ${conditionMet ? 'text-emerald-400' : 'text-red-400'}`}>
          {conditionMet
            ? `✓ For this δ = ${delta.toFixed(2)}, all points in (a-δ, a+δ) have |f(x)-L| < ε`
            : `✗ Some points escape the ε-band. Try increasing ε or decreasing δ.`
          }
        </p>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">In ε-band</p>
          <p className="text-emerald-400 font-mono text-lg">{inBandCount}</p>
        </div>
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-dark-400 text-xs">Outside ε-band</p>
          <p className="text-red-400 font-mono text-lg">{outBandCount}</p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">δ/ε ratio</p>
          <p className="text-orange-400 font-mono text-lg">{(delta / epsilon).toFixed(2)}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-orange-400 font-medium">{preset.label}</p>
        {preset.note && <p className="text-dark-400 text-sm mt-1">{preset.note}</p>}
        <p className="text-dark-300 text-sm mt-2">
          The <span className="text-emerald-400">green band</span> shows L ± ε (output constraint).
          The <span className="text-blue-400">blue region</span> shows a ± δ (input constraint).
          If all sampled points in the blue region land in the green band, the condition holds.
        </p>
      </div>
    </div>
  );
}
