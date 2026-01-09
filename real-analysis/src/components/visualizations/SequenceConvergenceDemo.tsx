import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type SequencePreset = {
  name: string;
  a: (n: number) => number;
  limit: number;
  label: string;
  note?: string;
};

const PRESETS: SequencePreset[] = [
  {
    name: '1/n',
    a: (n) => 1 / n,
    limit: 0,
    label: 'aₙ = 1/n → 0',
    note: 'The classic example of convergence',
  },
  {
    name: '(n+1)/n',
    a: (n) => (n + 1) / n,
    limit: 1,
    label: 'aₙ = (n+1)/n → 1',
    note: 'Converges from above',
  },
  {
    name: '(-1)ⁿ/n',
    a: (n) => (Math.pow(-1, n)) / n,
    limit: 0,
    label: 'aₙ = (-1)ⁿ/n → 0',
    note: 'Alternating sequence',
  },
  {
    name: 'n/(n²+1)',
    a: (n) => n / (n * n + 1),
    limit: 0,
    label: 'aₙ = n/(n²+1) → 0',
  },
  {
    name: '(1+1/n)ⁿ',
    a: (n) => Math.pow(1 + 1 / n, n),
    limit: Math.E,
    label: 'aₙ = (1+1/n)ⁿ → e',
    note: 'Converges to Euler\'s number',
  },
  {
    name: 'sin(n)/n',
    a: (n) => Math.sin(n) / n,
    limit: 0,
    label: 'aₙ = sin(n)/n → 0',
    note: 'Bounded numerator, unbounded denominator',
  },
];

export function SequenceConvergenceDemo({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [epsilon, setEpsilon] = useState(0.3);
  const [numTerms, setNumTerms] = useState(20);
  const [showEpsilonBand, setShowEpsilonBand] = useState(true);

  // SVG dimensions
  const width = 450;
  const height = 300;
  const padding = 50;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Calculate sequence terms
  const terms = useMemo(() => {
    const result: { n: number; value: number }[] = [];
    for (let n = 1; n <= numTerms; n++) {
      const value = preset.a(n);
      if (isFinite(value)) {
        result.push({ n, value });
      }
    }
    return result;
  }, [preset, numTerms]);

  // Determine y-axis range based on terms and limit
  const yRange = useMemo(() => {
    if (terms.length === 0) return { min: -1, max: 1 };
    const values = terms.map(t => t.value);
    const minVal = Math.min(...values, preset.limit - 0.5);
    const maxVal = Math.max(...values, preset.limit + 0.5);
    const padding = (maxVal - minVal) * 0.15;
    return { min: minVal - padding, max: maxVal + padding };
  }, [terms, preset.limit]);

  const toSvgX = (n: number) => padding + ((n - 1) / (numTerms - 1)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yRange.max - y) / (yRange.max - yRange.min)) * plotHeight;

  // Find N such that |aₙ - L| < ε for all n > N
  const findN = useMemo(() => {
    for (let N = 1; N <= numTerms; N++) {
      let allInBand = true;
      for (let n = N; n <= numTerms; n++) {
        const value = preset.a(n);
        if (Math.abs(value - preset.limit) >= epsilon) {
          allInBand = false;
          break;
        }
      }
      if (allInBand) return N;
    }
    return null;
  }, [preset, epsilon, numTerms]);

  // Count terms in/out of epsilon band
  const inBandCount = terms.filter(t => Math.abs(t.value - preset.limit) < epsilon).length;
  const outBandCount = terms.length - inBandCount;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Sequence Convergence (ε-N Definition)</h3>

      <p className="text-dark-300 mb-6">
        A sequence (aₙ) converges to L if for every ε {'>'} 0, there exists N such that
        |aₙ - L| {'<'} ε for all n {'>'} N. The terms eventually stay within the ε-band.
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
            min="0.05"
            max="1"
            step="0.05"
            value={epsilon}
            onChange={(e) => setEpsilon(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div>
          <label className="text-blue-400 text-sm">Terms: {numTerms}</label>
          <input
            type="range"
            min="10"
            max="50"
            step="5"
            value={numTerms}
            onChange={(e) => setNumTerms(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Toggle */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowEpsilonBand(!showEpsilonBand)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showEpsilonBand ? 'bg-emerald-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          ε-band
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid lines */}
          {[...Array(5)].map((_, i) => {
            const y = yRange.min + (i / 4) * (yRange.max - yRange.min);
            return (
              <g key={`h${i}`}>
                <line
                  x1={padding}
                  y1={toSvgY(y)}
                  x2={width - padding}
                  y2={toSvgY(y)}
                  stroke="#374151"
                  strokeWidth={1}
                />
                <text x={padding - 8} y={toSvgY(y) + 4} fill="#6b7280" fontSize="10" textAnchor="end">
                  {y.toFixed(2)}
                </text>
              </g>
            );
          })}

          {/* Epsilon band around limit */}
          {showEpsilonBand && (
            <rect
              x={padding}
              y={toSvgY(preset.limit + epsilon)}
              width={plotWidth}
              height={toSvgY(preset.limit - epsilon) - toSvgY(preset.limit + epsilon)}
              fill="#10b981"
              fillOpacity={0.15}
              stroke="#10b981"
              strokeWidth={1}
              strokeDasharray="5 5"
            />
          )}

          {/* Limit line */}
          <line
            x1={padding}
            y1={toSvgY(preset.limit)}
            x2={width - padding}
            y2={toSvgY(preset.limit)}
            stroke="#f97316"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <text x={width - padding + 5} y={toSvgY(preset.limit) + 4} fill="#f97316" fontSize="11">
            L = {preset.limit.toFixed(3)}
          </text>

          {/* N threshold line */}
          {findN && findN > 1 && (
            <>
              <line
                x1={toSvgX(findN)}
                y1={padding}
                x2={toSvgX(findN)}
                y2={height - padding}
                stroke="#3b82f6"
                strokeWidth={2}
                strokeDasharray="3 3"
              />
              <text x={toSvgX(findN)} y={height - padding + 15} fill="#3b82f6" fontSize="11" textAnchor="middle">
                N = {findN}
              </text>
            </>
          )}

          {/* Sequence points */}
          {terms.map((term) => {
            const inBand = Math.abs(term.value - preset.limit) < epsilon;
            return (
              <circle
                key={term.n}
                cx={toSvgX(term.n)}
                cy={toSvgY(term.value)}
                r={4}
                fill={inBand ? '#10b981' : '#ef4444'}
              />
            );
          })}

          {/* X-axis labels */}
          {[1, Math.floor(numTerms / 2), numTerms].map((n) => (
            <text key={`x${n}`} x={toSvgX(n)} y={height - padding + 15} fill="#6b7280" fontSize="10" textAnchor="middle">
              {n}
            </text>
          ))}
          <text x={width / 2} y={height - 10} fill="#9ca3af" fontSize="11" textAnchor="middle">
            n
          </text>
        </svg>
      </div>

      {/* Status */}
      <div className={`mt-4 p-4 rounded-xl border ${
        findN !== null
          ? 'bg-emerald-500/20 border-emerald-500/50'
          : 'bg-yellow-500/20 border-yellow-500/50'
      }`}>
        <p className={`text-center font-medium ${findN !== null ? 'text-emerald-400' : 'text-yellow-400'}`}>
          {findN !== null
            ? `✓ For ε = ${epsilon.toFixed(2)}, N = ${findN} works: all terms after N are within ε of L`
            : `Need more terms or larger ε to find suitable N`
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
          <p className="text-dark-400 text-xs">Limit L</p>
          <p className="text-orange-400 font-mono text-lg">{preset.limit.toFixed(4)}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-orange-400 font-medium">{preset.label}</p>
        {preset.note && <p className="text-dark-400 text-sm mt-1">{preset.note}</p>}
        <p className="text-dark-300 text-sm mt-2">
          <span className="text-emerald-400">Green points</span> are within ε of L.
          <span className="text-red-400"> Red points</span> are outside the band.
          As n increases, all points eventually stay green.
        </p>
      </div>
    </div>
  );
}
