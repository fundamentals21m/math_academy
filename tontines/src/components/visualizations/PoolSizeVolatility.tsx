import { useState, useCallback, useMemo } from 'react';

interface SimulationResult {
  payouts: number[];
  mean: number;
  stdDev: number;
  cv: number;
}

// Pool size options
const POOL_SIZES = [10, 50, 100, 500, 1000];

// Recommendation thresholds
const CV_THRESHOLDS = {
  good: 0.02,    // 2%
  marginal: 0.05 // 5%
};

/**
 * Generates a binomial random variable using the inverse transform method
 * Returns the number of "successes" (deaths) out of n trials with probability p
 */
function binomialRandom(n: number, p: number): number {
  let successes = 0;
  for (let i = 0; i < n; i++) {
    if (Math.random() < p) {
      successes++;
    }
  }
  return successes;
}

/**
 * Calculate statistics from an array of values
 */
function calculateStats(values: number[]): { mean: number; stdDev: number; cv: number } {
  const n = values.length;
  if (n === 0) return { mean: 0, stdDev: 0, cv: 0 };

  const mean = values.reduce((a, b) => a + b, 0) / n;
  const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / n;
  const stdDev = Math.sqrt(variance);
  const cv = mean > 0 ? stdDev / mean : 0;

  return { mean, stdDev, cv };
}

/**
 * Get stability color based on CV
 */
function getStabilityColor(cv: number): { bg: string; text: string; label: string } {
  if (cv < CV_THRESHOLDS.good) {
    return { bg: 'bg-emerald-500/20', text: 'text-emerald-400', label: 'Stable' };
  } else if (cv < CV_THRESHOLDS.marginal) {
    return { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'Marginal' };
  } else {
    return { bg: 'bg-red-500/20', text: 'text-red-400', label: 'Volatile' };
  }
}

/**
 * Get recommendation based on CV
 */
function getRecommendation(cv: number): { text: string; color: string } {
  if (cv < CV_THRESHOLDS.good) {
    return { text: 'Yes', color: 'text-emerald-400' };
  } else if (cv < CV_THRESHOLDS.marginal) {
    return { text: 'Marginal', color: 'text-yellow-400' };
  } else {
    return { text: 'No', color: 'text-red-400' };
  }
}

/**
 * Interactive visualization demonstrating how pool size affects payment volatility
 * through Monte Carlo simulation of tontine payouts
 */
export function PoolSizeVolatility() {
  // State for inputs
  const [poolSize, setPoolSize] = useState(100);
  const [numSimulations, setNumSimulations] = useState(500);
  const [mortalityRate, setMortalityRate] = useState(0.02); // 2%

  // State for results
  const [results, setResults] = useState<SimulationResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  // Run Monte Carlo simulation
  const runSimulation = useCallback(() => {
    setIsRunning(true);

    // Use setTimeout to allow UI to update before heavy computation
    setTimeout(() => {
      const basePayment = 100; // Arbitrary base payment
      const payouts: number[] = [];

      for (let sim = 0; sim < numSimulations; sim++) {
        // Sample number of deaths using binomial distribution
        const deaths = binomialRandom(poolSize, mortalityRate);
        const survivors = poolSize - deaths;

        // Calculate payout (divide pool among survivors)
        // If everyone dies, payout is 0 (edge case)
        const payout = survivors > 0
          ? basePayment * (poolSize / survivors)
          : 0;

        payouts.push(payout);
      }

      const stats = calculateStats(payouts);

      setResults({
        payouts,
        mean: stats.mean,
        stdDev: stats.stdDev,
        cv: stats.cv
      });

      setIsRunning(false);
    }, 10);
  }, [poolSize, numSimulations, mortalityRate]);

  // Calculate histogram bins
  const histogram = useMemo(() => {
    if (!results) return null;

    const { payouts } = results;
    const min = Math.min(...payouts);
    const max = Math.max(...payouts);
    const numBins = 20;
    const binWidth = (max - min) / numBins || 1;

    const bins: { start: number; end: number; count: number }[] = [];

    for (let i = 0; i < numBins; i++) {
      bins.push({
        start: min + i * binWidth,
        end: min + (i + 1) * binWidth,
        count: 0
      });
    }

    payouts.forEach(payout => {
      const binIndex = Math.min(
        Math.floor((payout - min) / binWidth),
        numBins - 1
      );
      if (binIndex >= 0 && binIndex < numBins) {
        bins[binIndex].count++;
      }
    });

    const maxCount = Math.max(...bins.map(b => b.count));

    return { bins, maxCount, min, max };
  }, [results]);

  // Theoretical CV calculation for comparison table
  const theoreticalCV = useCallback((n: number, q: number) => {
    // CV = sqrt(q(1-q)) / sqrt(n) * (1 / (1-q))
    // Simplified approximation: CV approx sqrt(q) / sqrt(n) for small q
    return Math.sqrt(q) / Math.sqrt(n);
  }, []);

  // Stability colors for current result
  const stability = results ? getStabilityColor(results.cv) : null;

  return (
    <div className="rounded-2xl bg-dark-800/50 border border-dark-700/50 p-6">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">
        Pool Size vs Payment Volatility
      </h3>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Pool Size Selector */}
        <div>
          <label className="block text-sm text-dark-400 mb-2">
            Pool Size (N): <span className="text-emerald-400 font-mono">{poolSize}</span>
          </label>
          <input
            type="range"
            min="0"
            max={POOL_SIZES.length - 1}
            value={POOL_SIZES.indexOf(poolSize)}
            onChange={(e) => setPoolSize(POOL_SIZES[parseInt(e.target.value)])}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-xs text-dark-500 mt-1">
            {POOL_SIZES.map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>
        </div>

        {/* Number of Simulations */}
        <div>
          <label className="block text-sm text-dark-400 mb-2">
            Simulations: <span className="text-emerald-400 font-mono">{numSimulations}</span>
          </label>
          <input
            type="range"
            min="100"
            max="1000"
            step="100"
            value={numSimulations}
            onChange={(e) => setNumSimulations(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-xs text-dark-500 mt-1">
            <span>100</span>
            <span>500</span>
            <span>1000</span>
          </div>
        </div>

        {/* Mortality Rate */}
        <div>
          <label className="block text-sm text-dark-400 mb-2">
            Mortality Rate (q): <span className="text-emerald-400 font-mono">{(mortalityRate * 100).toFixed(1)}%</span>
          </label>
          <input
            type="range"
            min="0.005"
            max="0.05"
            step="0.005"
            value={mortalityRate}
            onChange={(e) => setMortalityRate(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-xs text-dark-500 mt-1">
            <span>0.5%</span>
            <span>2.5%</span>
            <span>5%</span>
          </div>
        </div>
      </div>

      {/* Run Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={runSimulation}
          disabled={isRunning}
          className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-dark-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
        >
          {isRunning ? 'Running...' : 'Run Simulation'}
        </button>
      </div>

      {/* Results Display */}
      {results && (
        <div className="space-y-6">
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-dark-700/50 rounded-lg p-4 text-center">
              <div className="text-sm text-dark-400 mb-1">Mean Payout</div>
              <div className="text-xl font-mono text-dark-100">
                {results.mean.toFixed(2)}
              </div>
            </div>
            <div className="bg-dark-700/50 rounded-lg p-4 text-center">
              <div className="text-sm text-dark-400 mb-1">Std Deviation</div>
              <div className="text-xl font-mono text-dark-100">
                {results.stdDev.toFixed(2)}
              </div>
            </div>
            <div className={`${stability?.bg} rounded-lg p-4 text-center`}>
              <div className="text-sm text-dark-400 mb-1">CV (Volatility)</div>
              <div className={`text-xl font-mono ${stability?.text}`}>
                {(results.cv * 100).toFixed(2)}%
              </div>
            </div>
            <div className={`${stability?.bg} rounded-lg p-4 text-center`}>
              <div className="text-sm text-dark-400 mb-1">Stability</div>
              <div className={`text-xl font-semibold ${stability?.text}`}>
                {stability?.label}
              </div>
            </div>
          </div>

          {/* Rule of Thumb */}
          <div className="bg-dark-700/30 border border-dark-600/50 rounded-lg p-4">
            <div className="text-sm text-dark-400 mb-2">Rule of Thumb</div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-mono text-emerald-400 text-lg">
                CV = sqrt(q) / sqrt(N) = sqrt({(mortalityRate * 100).toFixed(1)}%) / sqrt({poolSize}) = {(theoreticalCV(poolSize, mortalityRate) * 100).toFixed(2)}%
              </span>
              <span className="text-dark-400 text-sm">
                (Simulated: {(results.cv * 100).toFixed(2)}%)
              </span>
            </div>
          </div>

          {/* Histogram */}
          {histogram && (
            <div>
              <div className="text-sm text-dark-400 mb-3">Payout Distribution</div>
              <div className="bg-dark-700/30 rounded-lg p-4">
                <svg
                  viewBox="0 0 400 200"
                  className="w-full h-48"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Y-axis */}
                  <line x1="40" y1="10" x2="40" y2="170" stroke="#475569" strokeWidth="1" />

                  {/* X-axis */}
                  <line x1="40" y1="170" x2="390" y2="170" stroke="#475569" strokeWidth="1" />

                  {/* Y-axis label */}
                  <text x="15" y="90" fill="#94a3b8" fontSize="10" transform="rotate(-90, 15, 90)">
                    Frequency
                  </text>

                  {/* X-axis label */}
                  <text x="215" y="195" fill="#94a3b8" fontSize="10" textAnchor="middle">
                    Payout
                  </text>

                  {/* Bars */}
                  {histogram.bins.map((bin, i) => {
                    const barWidth = 350 / histogram.bins.length - 2;
                    const barHeight = (bin.count / histogram.maxCount) * 150;
                    const x = 42 + i * (350 / histogram.bins.length);
                    const y = 170 - barHeight;

                    return (
                      <rect
                        key={i}
                        x={x}
                        y={y}
                        width={barWidth}
                        height={barHeight}
                        fill="#10b981"
                        opacity={0.7}
                        rx="2"
                      />
                    );
                  })}

                  {/* X-axis tick labels */}
                  <text x="45" y="185" fill="#94a3b8" fontSize="9">
                    {histogram.min.toFixed(0)}
                  </text>
                  <text x="385" y="185" fill="#94a3b8" fontSize="9" textAnchor="end">
                    {histogram.max.toFixed(0)}
                  </text>

                  {/* Mean line */}
                  {(() => {
                    const meanX = 42 + ((results.mean - histogram.min) / (histogram.max - histogram.min)) * 345;
                    return (
                      <>
                        <line
                          x1={meanX}
                          y1="10"
                          x2={meanX}
                          y2="170"
                          stroke="#fbbf24"
                          strokeWidth="2"
                          strokeDasharray="4"
                        />
                        <text x={meanX} y="8" fill="#fbbf24" fontSize="9" textAnchor="middle">
                          Mean
                        </text>
                      </>
                    );
                  })()}
                </svg>
              </div>
            </div>
          )}

          {/* Comparison Table */}
          <div>
            <div className="text-sm text-dark-400 mb-3">Pool Size Comparison (at q = {(mortalityRate * 100).toFixed(1)}%)</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="text-left py-2 px-3 text-dark-400 font-medium">Pool Size</th>
                    <th className="text-left py-2 px-3 text-dark-400 font-medium">Expected CV</th>
                    <th className="text-left py-2 px-3 text-dark-400 font-medium">Recommended?</th>
                  </tr>
                </thead>
                <tbody>
                  {POOL_SIZES.map((size) => {
                    const expectedCV = theoreticalCV(size, mortalityRate);
                    const rec = getRecommendation(expectedCV);
                    const isCurrentSize = size === poolSize;

                    return (
                      <tr
                        key={size}
                        className={`border-b border-dark-700/50 ${isCurrentSize ? 'bg-emerald-500/10' : ''}`}
                      >
                        <td className="py-2 px-3 font-mono text-dark-200">
                          {size}
                          {isCurrentSize && <span className="ml-2 text-emerald-400 text-xs">(selected)</span>}
                        </td>
                        <td className="py-2 px-3 font-mono text-dark-200">
                          ~{(expectedCV * 100).toFixed(1)}%
                        </td>
                        <td className={`py-2 px-3 font-medium ${rec.color}`}>
                          {rec.text}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Initial prompt when no results */}
      {!results && (
        <div className="text-center py-12 text-dark-400">
          <p className="mb-2">Configure the parameters above and click "Run Simulation"</p>
          <p className="text-sm">to see how pool size affects payment volatility</p>
        </div>
      )}
    </div>
  );
}

export default PoolSizeVolatility;
