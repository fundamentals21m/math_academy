import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type ConvergencePreset = {
  name: string;
  fn: (x: number, n: number) => number;
  limit: (x: number) => number;
  domain: [number, number];
  isUniform: boolean;
  label: string;
  note: string;
};

const PRESETS: ConvergencePreset[] = [
  {
    name: 'xⁿ on [0,1]',
    fn: (x, n) => Math.pow(x, n),
    limit: (x) => (x === 1 ? 1 : 0),
    domain: [0, 1],
    isUniform: false,
    label: 'fₙ(x) = xⁿ → 0 (x<1), 1 (x=1)',
    note: 'NOT uniform: supremum |fₙ(x) - f(x)| does not → 0',
  },
  {
    name: 'x/n on [0,1]',
    fn: (x, n) => x / n,
    limit: () => 0,
    domain: [0, 1],
    isUniform: true,
    label: 'fₙ(x) = x/n → 0 uniformly',
    note: 'Uniform: sup |fₙ(x) - 0| = 1/n → 0',
  },
  {
    name: 'sin(nx)/n',
    fn: (x, n) => Math.sin(n * x) / n,
    limit: () => 0,
    domain: [0, Math.PI],
    isUniform: true,
    label: 'fₙ(x) = sin(nx)/n → 0 uniformly',
    note: 'Uniform: |sin(nx)/n| ≤ 1/n for all x',
  },
  {
    name: 'nx·e^(-nx)',
    fn: (x, n) => n * x * Math.exp(-n * x),
    limit: () => 0,
    domain: [0, 2],
    isUniform: false,
    label: 'fₙ(x) = nx·e^(-nx) → 0',
    note: 'NOT uniform: max at x=1/n is always 1/e',
  },
  {
    name: '1/(1+nx²)',
    fn: (x, n) => 1 / (1 + n * x * x),
    limit: (x) => (x === 0 ? 1 : 0),
    domain: [-1, 1],
    isUniform: false,
    label: 'fₙ(x) = 1/(1+nx²) → 1_{x=0}',
    note: 'NOT uniform: limit is discontinuous but each fₙ is continuous',
  },
  {
    name: 'x^n·(1-x)',
    fn: (x, n) => Math.pow(x, n) * (1 - x),
    limit: () => 0,
    domain: [0, 1],
    isUniform: true,
    label: 'fₙ(x) = xⁿ(1-x) → 0 uniformly',
    note: 'Uniform: continuous limit, all fₙ continuous',
  },
];

export function UniformConvergenceDemo({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [n, setN] = useState(5);
  const [showLimit, setShowLimit] = useState(true);
  const [showEpsilonTube, setShowEpsilonTube] = useState(true);
  const [epsilon, setEpsilon] = useState(0.2);

  // SVG dimensions
  const width = 450;
  const height = 320;
  const padding = 50;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Calculate y range
  const yRange = useMemo(() => {
    let minVal = 0;
    let maxVal = 1;
    const samples = 50;

    for (let i = 0; i <= samples; i++) {
      const x = preset.domain[0] + (i / samples) * (preset.domain[1] - preset.domain[0]);
      const fnVal = preset.fn(x, n);
      const limVal = preset.limit(x);
      if (isFinite(fnVal)) {
        minVal = Math.min(minVal, fnVal);
        maxVal = Math.max(maxVal, fnVal);
      }
      if (isFinite(limVal)) {
        minVal = Math.min(minVal, limVal);
        maxVal = Math.max(maxVal, limVal);
      }
    }

    const padding = (maxVal - minVal) * 0.15;
    return { min: minVal - padding, max: maxVal + padding };
  }, [preset, n]);

  const toSvgX = (x: number) =>
    padding + ((x - preset.domain[0]) / (preset.domain[1] - preset.domain[0])) * plotWidth;
  const toSvgY = (y: number) =>
    padding + ((yRange.max - y) / (yRange.max - yRange.min)) * plotHeight;

  // Generate paths
  const { fnPath, limitPath, upperBound, lowerBound } = useMemo(() => {
    const fnPoints: string[] = [];
    const limitPoints: string[] = [];
    const upperPoints: string[] = [];
    const lowerPoints: string[] = [];
    const samples = 150;

    for (let i = 0; i <= samples; i++) {
      const x = preset.domain[0] + (i / samples) * (preset.domain[1] - preset.domain[0]);
      const fnVal = preset.fn(x, n);
      const limVal = preset.limit(x);

      if (isFinite(fnVal)) {
        fnPoints.push(`${fnPoints.length === 0 ? 'M' : 'L'} ${toSvgX(x)} ${toSvgY(fnVal)}`);
      }
      if (isFinite(limVal)) {
        limitPoints.push(`${limitPoints.length === 0 ? 'M' : 'L'} ${toSvgX(x)} ${toSvgY(limVal)}`);
        upperPoints.push(`${upperPoints.length === 0 ? 'M' : 'L'} ${toSvgX(x)} ${toSvgY(limVal + epsilon)}`);
        lowerPoints.push(`${lowerPoints.length === 0 ? 'M' : 'L'} ${toSvgX(x)} ${toSvgY(limVal - epsilon)}`);
      }
    }

    return {
      fnPath: fnPoints.join(' '),
      limitPath: limitPoints.join(' '),
      upperBound: upperPoints.join(' '),
      lowerBound: lowerPoints.join(' '),
    };
  }, [preset, n, epsilon, toSvgX, toSvgY]);

  // Calculate supremum of |fₙ(x) - f(x)|
  const supremum = useMemo(() => {
    let sup = 0;
    const samples = 200;
    for (let i = 0; i <= samples; i++) {
      const x = preset.domain[0] + (i / samples) * (preset.domain[1] - preset.domain[0]);
      const diff = Math.abs(preset.fn(x, n) - preset.limit(x));
      if (isFinite(diff)) {
        sup = Math.max(sup, diff);
      }
    }
    return sup;
  }, [preset, n]);

  // Check if within epsilon tube
  const withinTube = supremum < epsilon;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Uniform vs Pointwise Convergence</h3>

      <p className="text-dark-300 mb-6">
        fₙ → f <strong>uniformly</strong> if sup|fₙ(x) - f(x)| → 0.
        This is stronger than pointwise convergence (where each fixed x converges).
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
          <label className="text-blue-400 text-sm">n = {n}</label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-emerald-400 text-sm">ε = {epsilon.toFixed(2)}</label>
          <input
            type="range"
            min="0.05"
            max="0.5"
            step="0.05"
            value={epsilon}
            onChange={(e) => setEpsilon(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Toggle buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowLimit(!showLimit)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showLimit ? 'bg-orange-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Limit Function
        </button>
        <button
          onClick={() => setShowEpsilonTube(!showEpsilonTube)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showEpsilonTube ? 'bg-emerald-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          ε-tube
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[...Array(5)].map((_, i) => {
            const y = yRange.min + (i / 4) * (yRange.max - yRange.min);
            return (
              <g key={`h${i}`}>
                <line
                  x1={padding}
                  y1={toSvgY(y)}
                  x2={width - padding}
                  y2={toSvgY(y)}
                  stroke={Math.abs(y) < 0.01 ? '#4b5563' : '#374151'}
                  strokeWidth={Math.abs(y) < 0.01 ? 2 : 1}
                />
                <text x={padding - 8} y={toSvgY(y) + 4} fill="#6b7280" fontSize="10" textAnchor="end">
                  {y.toFixed(1)}
                </text>
              </g>
            );
          })}
          {[...Array(5)].map((_, i) => {
            const x = preset.domain[0] + (i / 4) * (preset.domain[1] - preset.domain[0]);
            return (
              <g key={`v${i}`}>
                <line
                  x1={toSvgX(x)}
                  y1={padding}
                  x2={toSvgX(x)}
                  y2={height - padding}
                  stroke="#374151"
                  strokeWidth={1}
                />
                <text x={toSvgX(x)} y={height - padding + 15} fill="#6b7280" fontSize="10" textAnchor="middle">
                  {x.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Epsilon tube around limit */}
          {showEpsilonTube && showLimit && (
            <>
              <path d={upperBound} fill="none" stroke="#10b981" strokeWidth={1} strokeDasharray="3 3" opacity={0.5} />
              <path d={lowerBound} fill="none" stroke="#10b981" strokeWidth={1} strokeDasharray="3 3" opacity={0.5} />
            </>
          )}

          {/* Limit function */}
          {showLimit && (
            <path d={limitPath} fill="none" stroke="#f97316" strokeWidth={2} strokeDasharray="5 5" />
          )}

          {/* fₙ curve */}
          <path d={fnPath} fill="none" stroke="#3b82f6" strokeWidth={3} />

          {/* Legend */}
          <g transform={`translate(${width - padding - 80}, ${padding + 10})`}>
            <line x1="0" y1="0" x2="20" y2="0" stroke="#3b82f6" strokeWidth={3} />
            <text x="25" y="4" fill="#3b82f6" fontSize="10">fₙ(x)</text>
            {showLimit && (
              <>
                <line x1="0" y1="15" x2="20" y2="15" stroke="#f97316" strokeWidth={2} strokeDasharray="5 5" />
                <text x="25" y="19" fill="#f97316" fontSize="10">f(x)</text>
              </>
            )}
          </g>
        </svg>
      </div>

      {/* Status */}
      <div className={`mt-4 p-4 rounded-xl border ${
        preset.isUniform
          ? 'bg-emerald-500/20 border-emerald-500/50'
          : 'bg-yellow-500/20 border-yellow-500/50'
      }`}>
        <p className={`text-center font-medium ${preset.isUniform ? 'text-emerald-400' : 'text-yellow-400'}`}>
          {preset.isUniform
            ? '✓ This sequence converges UNIFORMLY'
            : '⚠ This sequence converges only POINTWISE (not uniformly)'
          }
        </p>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">n</p>
          <p className="text-blue-400 font-mono text-lg">{n}</p>
        </div>
        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
          <p className="text-dark-400 text-xs">sup |fₙ - f|</p>
          <p className="text-purple-400 font-mono text-lg">{supremum.toFixed(4)}</p>
        </div>
        <div className={`p-3 rounded-xl ${
          withinTube
            ? 'bg-emerald-500/10 border border-emerald-500/30'
            : 'bg-red-500/10 border border-red-500/30'
        }`}>
          <p className="text-dark-400 text-xs">sup {'<'} ε?</p>
          <p className={`font-mono text-lg ${withinTube ? 'text-emerald-400' : 'text-red-400'}`}>
            {withinTube ? 'Yes' : 'No'}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-orange-400 font-medium">{preset.label}</p>
        <p className="text-dark-400 text-sm mt-1">{preset.note}</p>
        <p className="text-dark-300 text-sm mt-2">
          <span className="text-blue-400">Blue curve</span> is fₙ(x).
          <span className="text-orange-400"> Orange dashed</span> is the limit f(x).
          For uniform convergence, the <span className="text-purple-400">supremum</span> must → 0 as n → ∞.
        </p>
      </div>
    </div>
  );
}
