import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type SeriesPreset = {
  name: string;
  a: (n: number) => number;
  sum: number | null; // null means divergent
  label: string;
  note?: string;
};

const PRESETS: SeriesPreset[] = [
  {
    name: '1/n² (Basel)',
    a: (n) => 1 / (n * n),
    sum: Math.PI * Math.PI / 6,
    label: 'Σ 1/n² = π²/6',
    note: 'Basel problem - Euler solved this in 1734',
  },
  {
    name: '1/2ⁿ',
    a: (n) => 1 / Math.pow(2, n),
    sum: 1,
    label: 'Σ 1/2ⁿ = 1 (geometric series)',
    note: 'Geometric series with r = 1/2',
  },
  {
    name: '1/n (Harmonic)',
    a: (n) => 1 / n,
    sum: null,
    label: 'Σ 1/n = ∞ (harmonic series)',
    note: 'Diverges, but very slowly',
  },
  {
    name: '(-1)ⁿ⁺¹/n',
    a: (n) => Math.pow(-1, n + 1) / n,
    sum: Math.log(2),
    label: 'Σ (-1)ⁿ⁺¹/n = ln(2)',
    note: 'Alternating harmonic series - conditionally convergent',
  },
  {
    name: '1/n!',
    a: (n) => 1 / factorial(n),
    sum: Math.E - 1,
    label: 'Σ 1/n! = e - 1',
    note: 'Converges very rapidly',
  },
  {
    name: '1/n³',
    a: (n) => 1 / (n * n * n),
    sum: 1.2020569, // Apéry's constant ζ(3)
    label: 'Σ 1/n³ ≈ 1.202 (Apéry\'s constant)',
    note: 'ζ(3) - proven irrational by Apéry in 1978',
  },
];

function factorial(n: number): number {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function SeriesConvergenceDemo({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [numTerms, setNumTerms] = useState(20);
  const [showPartialSums, setShowPartialSums] = useState(true);
  const [showTerms, setShowTerms] = useState(true);

  // SVG dimensions
  const width = 450;
  const height = 350;
  const padding = 50;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Calculate terms and partial sums
  const data = useMemo(() => {
    const terms: { n: number; term: number; partialSum: number }[] = [];
    let sum = 0;
    for (let n = 1; n <= numTerms; n++) {
      const term = preset.a(n);
      sum += term;
      terms.push({ n, term, partialSum: sum });
    }
    return terms;
  }, [preset, numTerms]);

  // Determine y-axis range
  const yRange = useMemo(() => {
    if (data.length === 0) return { min: 0, max: 2 };
    const sums = data.map(d => d.partialSum);
    const terms = data.map(d => d.term);
    const allValues = [...sums, ...terms, preset.sum ?? 0];
    const minVal = Math.min(...allValues, 0);
    const maxVal = Math.max(...allValues);
    const padding = (maxVal - minVal) * 0.15;
    return { min: minVal - padding, max: maxVal + padding };
  }, [data, preset.sum]);

  const toSvgX = (n: number) => padding + ((n - 1) / (numTerms - 1)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yRange.max - y) / (yRange.max - yRange.min)) * plotHeight;

  // Current partial sum and error
  const currentSum = data.length > 0 ? data[data.length - 1].partialSum : 0;
  const error = preset.sum !== null ? Math.abs(currentSum - preset.sum) : null;

  // Generate partial sum path
  const partialSumPath = useMemo(() => {
    if (data.length === 0) return '';
    return data.map((d, i) =>
      `${i === 0 ? 'M' : 'L'} ${toSvgX(d.n)} ${toSvgY(d.partialSum)}`
    ).join(' ');
  }, [data, toSvgX, toSvgY]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Series Convergence</h3>

      <p className="text-dark-300 mb-6">
        A series Σaₙ converges if the sequence of partial sums Sₙ = a₁ + a₂ + ... + aₙ
        has a finite limit. Watch the partial sums approach (or fail to approach) the sum.
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
      <div className="mb-4">
        <label className="text-blue-400 text-sm">Number of terms: {numTerms}</label>
        <input
          type="range"
          min="5"
          max="50"
          step="1"
          value={numTerms}
          onChange={(e) => setNumTerms(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Toggle buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowPartialSums(!showPartialSums)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showPartialSums ? 'bg-emerald-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Partial Sums
        </button>
        <button
          onClick={() => setShowTerms(!showTerms)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showTerms ? 'bg-blue-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Individual Terms
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid lines */}
          {[...Array(6)].map((_, i) => {
            const y = yRange.min + (i / 5) * (yRange.max - yRange.min);
            return (
              <g key={`h${i}`}>
                <line
                  x1={padding}
                  y1={toSvgY(y)}
                  x2={width - padding}
                  y2={toSvgY(y)}
                  stroke={Math.abs(y) < 0.001 ? '#4b5563' : '#374151'}
                  strokeWidth={Math.abs(y) < 0.001 ? 2 : 1}
                />
                <text x={padding - 8} y={toSvgY(y) + 4} fill="#6b7280" fontSize="10" textAnchor="end">
                  {y.toFixed(2)}
                </text>
              </g>
            );
          })}

          {/* Limit line (if convergent) */}
          {preset.sum !== null && (
            <>
              <line
                x1={padding}
                y1={toSvgY(preset.sum)}
                x2={width - padding}
                y2={toSvgY(preset.sum)}
                stroke="#f97316"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              <text x={width - padding + 5} y={toSvgY(preset.sum) + 4} fill="#f97316" fontSize="11">
                S = {preset.sum.toFixed(4)}
              </text>
            </>
          )}

          {/* Partial sums line */}
          {showPartialSums && partialSumPath && (
            <path d={partialSumPath} fill="none" stroke="#10b981" strokeWidth={2} />
          )}

          {/* Partial sum points */}
          {showPartialSums && data.map((d) => (
            <circle
              key={`sum-${d.n}`}
              cx={toSvgX(d.n)}
              cy={toSvgY(d.partialSum)}
              r={3}
              fill="#10b981"
            />
          ))}

          {/* Individual terms as bars */}
          {showTerms && data.map((d) => {
            const barHeight = Math.abs(toSvgY(0) - toSvgY(d.term));
            const barY = d.term >= 0 ? toSvgY(d.term) : toSvgY(0);
            return (
              <rect
                key={`term-${d.n}`}
                x={toSvgX(d.n) - 3}
                y={barY}
                width={6}
                height={barHeight}
                fill="#3b82f6"
                fillOpacity={0.5}
              />
            );
          })}

          {/* X-axis labels */}
          {[1, Math.floor(numTerms / 2), numTerms].map((n) => (
            <text key={`x${n}`} x={toSvgX(n)} y={height - padding + 20} fill="#6b7280" fontSize="10" textAnchor="middle">
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
        preset.sum !== null
          ? 'bg-emerald-500/20 border-emerald-500/50'
          : 'bg-red-500/20 border-red-500/50'
      }`}>
        <p className={`text-center font-medium ${preset.sum !== null ? 'text-emerald-400' : 'text-red-400'}`}>
          {preset.sum !== null
            ? `✓ Convergent: Sₙ → ${preset.sum.toFixed(6)}`
            : `✗ Divergent: Partial sums grow without bound`
          }
        </p>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Partial Sum S{numTerms}</p>
          <p className="text-emerald-400 font-mono text-lg">{currentSum.toFixed(6)}</p>
        </div>
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Last Term a{numTerms}</p>
          <p className="text-blue-400 font-mono text-lg">
            {data.length > 0 ? data[data.length - 1].term.toFixed(6) : '0'}
          </p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Error |Sₙ - S|</p>
          <p className="text-orange-400 font-mono text-lg">
            {error !== null ? error.toFixed(6) : '∞'}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-orange-400 font-medium">{preset.label}</p>
        {preset.note && <p className="text-dark-400 text-sm mt-1">{preset.note}</p>}
        <p className="text-dark-300 text-sm mt-2">
          <span className="text-emerald-400">Green line/dots</span> show partial sums Sₙ.
          <span className="text-blue-400"> Blue bars</span> show individual terms aₙ.
          The <span className="text-orange-400">orange line</span> is the limit (if it exists).
        </p>
      </div>
    </div>
  );
}
