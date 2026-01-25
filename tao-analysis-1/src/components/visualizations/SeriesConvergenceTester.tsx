/**
 * Series Convergence Tester
 * Visualize partial sums and test convergence using root/ratio tests
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface SeriesOption {
  id: string;
  name: string;
  term: (n: number) => number;
  formula: string;
  converges: boolean;
  sumTo?: number; // Known sum if convergent
  convergenceType: string;
}

const series: SeriesOption[] = [
  {
    id: 'geometric-half',
    name: 'Σ (1/2)ⁿ',
    term: (n) => Math.pow(0.5, n),
    formula: 'Σ (1/2)ⁿ',
    converges: true,
    sumTo: 2,
    convergenceType: 'Ratio test: r = 1/2 < 1',
  },
  {
    id: 'harmonic',
    name: 'Σ 1/n',
    term: (n) => 1 / n,
    formula: 'Σ 1/n',
    converges: false,
    convergenceType: 'Diverges (harmonic series)',
  },
  {
    id: 'p-series-2',
    name: 'Σ 1/n²',
    term: (n) => 1 / (n * n),
    formula: 'Σ 1/n²',
    converges: true,
    sumTo: Math.PI * Math.PI / 6,
    convergenceType: 'p-series: p = 2 > 1',
  },
  {
    id: 'alternating',
    name: 'Σ (-1)ⁿ/n',
    term: (n) => Math.pow(-1, n) / n,
    formula: 'Σ (-1)ⁿ/n',
    converges: true,
    sumTo: -Math.log(2),
    convergenceType: 'Alternating series test',
  },
  {
    id: 'factorial',
    name: 'Σ 1/n!',
    term: (n) => {
      let fact = 1;
      for (let i = 2; i <= n; i++) fact *= i;
      return 1 / fact;
    },
    formula: 'Σ 1/n!',
    converges: true,
    sumTo: Math.E - 1,
    convergenceType: 'Ratio test: aₙ₊₁/aₙ → 0',
  },
  {
    id: 'geometric-2',
    name: 'Σ 2ⁿ/n!',
    term: (n) => {
      let fact = 1;
      for (let i = 2; i <= n; i++) fact *= i;
      return Math.pow(2, n) / fact;
    },
    formula: 'Σ 2ⁿ/n!',
    converges: true,
    sumTo: Math.exp(2) - 1,
    convergenceType: 'Ratio test: 2/(n+1) → 0',
  },
];

export function SeriesConvergenceTester() {
  const [selectedSeries, setSelectedSeries] = useState(series[0]);
  const [numTerms, setNumTerms] = useState(15);
  const [showTests, setShowTests] = useState(true);

  // Calculate partial sums
  const { partialSums, ratios, roots } = useMemo(() => {
    const sums: { n: number; sum: number; term: number }[] = [];
    const ratios: { n: number; ratio: number }[] = [];
    const roots: { n: number; root: number }[] = [];

    let sum = 0;
    for (let n = 1; n <= numTerms; n++) {
      const term = selectedSeries.term(n);
      sum += term;
      sums.push({ n, sum, term: Math.abs(term) });

      // Ratio test: |a_{n+1} / a_n|
      if (n > 1) {
        const prevTerm = selectedSeries.term(n - 1);
        if (prevTerm !== 0) {
          ratios.push({
            n: n - 1,
            ratio: Math.abs(term / prevTerm),
          });
        }
      }

      // Root test: |a_n|^{1/n}
      roots.push({
        n,
        root: Math.pow(Math.abs(term), 1 / n),
      });
    }

    return { partialSums: sums, ratios, roots };
  }, [selectedSeries, numTerms]);

  // Detect convergence trend
  const latestRatio = ratios.length > 0 ? ratios[ratios.length - 1].ratio : null;
  const latestRoot = roots.length > 0 ? roots[roots.length - 1].root : null;

  // SVG dimensions
  const width = 400;
  const height = 200;
  const padding = 45;

  const yMin = Math.min(...partialSums.map((s) => s.sum), 0);
  const yMax = Math.max(...partialSums.map((s) => s.sum), 1);
  const yRange = yMax - yMin || 1;

  const scaleX = (n: number) => padding + ((n - 1) / (numTerms - 1)) * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - ((y - yMin) / yRange) * (height - 2 * padding);

  // Path for partial sums
  const sumPath = partialSums
    .map((s, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(s.n)} ${scaleY(s.sum)}`)
    .join(' ');

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-indigo-400">Series Convergence Tester</h4>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            selectedSeries.converges
              ? 'bg-emerald-500/20 text-emerald-400'
              : 'bg-red-500/20 text-red-400'
          }`}
        >
          {selectedSeries.converges ? 'Converges' : 'Diverges'}
        </span>
      </div>

      {/* Series selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {series.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedSeries(s)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              selectedSeries.id === s.id
                ? 'bg-indigo-500 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm text-dark-400 mb-1">
            Number of terms: {numTerms}
          </label>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={numTerms}
            onChange={(e) => setNumTerms(parseInt(e.target.value))}
            className="w-full accent-indigo-500"
          />
        </div>
        <button
          onClick={() => setShowTests(!showTests)}
          className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
            showTests ? 'bg-amber-500 text-white' : 'bg-dark-800 text-dark-300'
          }`}
        >
          {showTests ? 'Hide Tests' : 'Show Tests'}
        </button>
      </div>

      {/* Partial sums graph */}
      <div className="bg-dark-800/50 rounded-lg p-2 mb-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Axes */}
          <line
            x1={padding}
            y1={scaleY(0)}
            x2={width - padding}
            y2={scaleY(0)}
            stroke="#6b7280"
            strokeWidth="1"
          />
          <line
            x1={padding}
            y1={padding}
            x2={padding}
            y2={height - padding}
            stroke="#6b7280"
            strokeWidth="1"
          />

          {/* Target line if known sum */}
          {selectedSeries.sumTo !== undefined && (
            <>
              <line
                x1={padding}
                y1={scaleY(selectedSeries.sumTo)}
                x2={width - padding}
                y2={scaleY(selectedSeries.sumTo)}
                stroke="#10b981"
                strokeWidth="1"
                strokeDasharray="4 2"
              />
              <text
                x={width - padding + 5}
                y={scaleY(selectedSeries.sumTo)}
                className="fill-emerald-400 text-xs"
              >
                S = {selectedSeries.sumTo.toFixed(3)}
              </text>
            </>
          )}

          {/* Partial sums line */}
          <path d={sumPath} fill="none" stroke="#818cf8" strokeWidth="2" />

          {/* Partial sum points */}
          {partialSums.map((s) => (
            <motion.circle
              key={s.n}
              cx={scaleX(s.n)}
              cy={scaleY(s.sum)}
              r="3"
              fill="#818cf8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: s.n * 0.02 }}
            />
          ))}

          {/* Labels */}
          <text x={padding - 5} y={scaleY(yMax)} textAnchor="end" className="fill-dark-400 text-xs">
            {yMax.toFixed(2)}
          </text>
          <text x={padding - 5} y={scaleY(yMin)} textAnchor="end" className="fill-dark-400 text-xs">
            {yMin.toFixed(2)}
          </text>
          <text x={scaleX(numTerms)} y={height - padding + 15} textAnchor="middle" className="fill-dark-400 text-xs">
            n = {numTerms}
          </text>
        </svg>
      </div>

      {/* Current values */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
          <p className="text-xs text-dark-400">Partial Sum S_{numTerms}</p>
          <p className="text-lg font-mono text-indigo-400">
            {partialSums[partialSums.length - 1]?.sum.toFixed(6) || '—'}
          </p>
        </div>
        <div className="p-3 rounded-lg bg-dark-800/50">
          <p className="text-xs text-dark-400">Last term a_{numTerms}</p>
          <p className="text-lg font-mono text-dark-300">
            {selectedSeries.term(numTerms).toFixed(6)}
          </p>
        </div>
        {selectedSeries.sumTo !== undefined && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
            <p className="text-xs text-dark-400">Error</p>
            <p className="text-lg font-mono text-emerald-400">
              {Math.abs(partialSums[partialSums.length - 1]?.sum - selectedSeries.sumTo).toFixed(6)}
            </p>
          </div>
        )}
      </div>

      {/* Convergence tests */}
      {showTests && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-sm font-medium text-dark-300 mb-2">Ratio Test</p>
            <p className="text-xs text-dark-400 mb-1">|aₙ₊₁/aₙ| →</p>
            <p
              className={`text-lg font-mono ${
                latestRatio !== null && latestRatio < 1
                  ? 'text-emerald-400'
                  : latestRatio !== null && latestRatio > 1
                    ? 'text-red-400'
                    : 'text-amber-400'
              }`}
            >
              {latestRatio !== null ? latestRatio.toFixed(4) : '—'}
            </p>
            <p className="text-xs text-dark-500 mt-1">
              {latestRatio !== null && latestRatio < 1
                ? '< 1: Converges'
                : latestRatio !== null && latestRatio > 1
                  ? '> 1: Diverges'
                  : '= 1: Inconclusive'}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-sm font-medium text-dark-300 mb-2">Root Test</p>
            <p className="text-xs text-dark-400 mb-1">|aₙ|^(1/n) →</p>
            <p
              className={`text-lg font-mono ${
                latestRoot !== null && latestRoot < 1
                  ? 'text-emerald-400'
                  : latestRoot !== null && latestRoot > 1
                    ? 'text-red-400'
                    : 'text-amber-400'
              }`}
            >
              {latestRoot !== null ? latestRoot.toFixed(4) : '—'}
            </p>
            <p className="text-xs text-dark-500 mt-1">
              {latestRoot !== null && latestRoot < 1
                ? '< 1: Converges'
                : latestRoot !== null && latestRoot > 1
                  ? '> 1: Diverges'
                  : '= 1: Inconclusive'}
            </p>
          </div>
        </div>
      )}

      {/* Convergence reason */}
      <div className="p-3 rounded-lg bg-dark-800/50">
        <p className="text-sm text-dark-300">
          <strong>Why {selectedSeries.converges ? 'converges' : 'diverges'}:</strong>{' '}
          {selectedSeries.convergenceType}
        </p>
        {selectedSeries.sumTo !== undefined && (
          <p className="text-xs text-dark-500 mt-1">
            Known sum: S = {selectedSeries.sumTo.toFixed(6)}
          </p>
        )}
      </div>
    </div>
  );
}
