import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

/**
 * Interactive visualization comparing negligible functions (2^-λ) with polynomial functions (λ^k).
 * Helps students understand why negligible functions are "safe to ignore" in cryptographic security.
 */
export function FunctionGrowthComparison({ className = '' }: Props) {
  const [lambda, setLambda] = useState(20);
  const [polyDegree, setPolyDegree] = useState(3);
  const [showLogScale, setShowLogScale] = useState(true);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // SVG dimensions
  const width = 500;
  const height = 350;
  const padding = 50;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;

  // Compute data points
  const data = useMemo(() => {
    const points: { x: number; poly: number; negl: number }[] = [];
    const maxX = Math.min(lambda, 50);

    for (let x = 1; x <= maxX; x++) {
      const polyVal = Math.pow(x, polyDegree);
      const neglVal = Math.pow(2, -x);
      points.push({ x, poly: polyVal, negl: neglVal });
    }
    return points;
  }, [lambda, polyDegree]);

  // Scale functions
  const maxPoly = useMemo(() => Math.max(...data.map(d => d.poly)), [data]);

  const toSvgX = (x: number) => padding + (x / Math.max(lambda, 50)) * graphWidth;

  const toSvgY = (val: number, isNegl: boolean) => {
    if (showLogScale) {
      // Log scale: map -50 to 0 (for negl) or 0 to log(maxPoly) (for poly)
      if (isNegl) {
        const logVal = Math.log10(Math.max(val, 1e-50));
        const minLog = -50;
        const maxLog = 0;
        const normalized = (logVal - minLog) / (maxLog - minLog);
        return height - padding - normalized * graphHeight * 0.4;
      } else {
        const logVal = Math.log10(Math.max(val, 1));
        const maxLog = Math.log10(Math.max(maxPoly, 1));
        const normalized = logVal / Math.max(maxLog, 1);
        return height - padding - 0.5 * graphHeight - normalized * graphHeight * 0.4;
      }
    } else {
      // Linear scale (only useful for very small lambda)
      const normalized = val / Math.max(maxPoly, 1);
      return height - padding - normalized * graphHeight;
    }
  };

  // Generate path strings
  const polyPath = useMemo(() => {
    return data.map((d, i) => {
      const x = toSvgX(d.x);
      const y = toSvgY(d.poly, false);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  }, [data, lambda, showLogScale, maxPoly]);

  const neglPath = useMemo(() => {
    return data.map((d, i) => {
      const x = toSvgX(d.x);
      const y = toSvgY(d.negl, true);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  }, [data, lambda, showLogScale]);

  // Format large/small numbers
  const formatNumber = (n: number) => {
    if (n === 0) return '0';
    if (n >= 1e15) return n.toExponential(2);
    if (n < 1e-10) return n.toExponential(2);
    if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
    return n.toFixed(n < 1 ? 10 : 0);
  };

  const hoveredData = hoveredPoint !== null ? data.find(d => d.x === hoveredPoint) : null;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">
        Negligible vs Polynomial Growth
      </h3>
      <p className="text-dark-400 text-sm mb-4">
        Compare how negligible functions (2<sup>-λ</sup>) shrink exponentially while polynomial functions (λ<sup>k</sup>) grow.
      </p>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Security Parameter λ: <span className="text-primary-400 font-mono">{lambda}</span>
          </label>
          <input
            type="range"
            min="5"
            max="128"
            value={lambda}
            onChange={(e) => setLambda(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
          />
        </div>
        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Polynomial Degree k: <span className="text-emerald-400 font-mono">{polyDegree}</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={polyDegree}
            onChange={(e) => setPolyDegree(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Toggle */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setShowLogScale(!showLogScale)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            showLogScale
              ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
              : 'bg-dark-700 text-dark-400 border border-dark-600'
          }`}
        >
          Log Scale
        </button>
        <span className="text-dark-500 text-sm">
          {showLogScale ? 'Showing logarithmic scale' : 'Showing linear scale'}
        </span>
      </div>

      {/* SVG Chart */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto bg-dark-900/50 rounded-xl"
      >
        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((frac) => (
          <line
            key={frac}
            x1={padding}
            y1={height - padding - frac * graphHeight}
            x2={width - padding}
            y2={height - padding - frac * graphHeight}
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
        ))}

        {/* Axes */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#6b7280"
          strokeWidth="2"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#6b7280"
          strokeWidth="2"
        />

        {/* Axis labels */}
        <text x={width / 2} y={height - 10} fill="#9ca3af" fontSize="12" textAnchor="middle">
          Security Parameter λ
        </text>
        <text x={15} y={height / 2} fill="#9ca3af" fontSize="12" textAnchor="middle" transform={`rotate(-90, 15, ${height / 2})`}>
          Function Value
        </text>

        {/* Polynomial curve */}
        <motion.path
          d={polyPath}
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Negligible curve */}
        <motion.path
          d={neglPath}
          fill="none"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Interactive points */}
        {data.filter((_, i) => i % 5 === 0 || i === data.length - 1).map((d) => (
          <g key={d.x}>
            <circle
              cx={toSvgX(d.x)}
              cy={toSvgY(d.poly, false)}
              r={hoveredPoint === d.x ? 6 : 4}
              fill="#10b981"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint(d.x)}
              onMouseLeave={() => setHoveredPoint(null)}
            />
            <circle
              cx={toSvgX(d.x)}
              cy={toSvgY(d.negl, true)}
              r={hoveredPoint === d.x ? 6 : 4}
              fill="#ef4444"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint(d.x)}
              onMouseLeave={() => setHoveredPoint(null)}
            />
          </g>
        ))}

        {/* Legend */}
        <g transform={`translate(${width - 150}, 20)`}>
          <rect x="0" y="0" width="140" height="50" fill="#1f2937" rx="8" />
          <line x1="10" y1="18" x2="30" y2="18" stroke="#10b981" strokeWidth="3" />
          <text x="38" y="22" fill="#d1d5db" fontSize="11">λ^{polyDegree} (polynomial)</text>
          <line x1="10" y1="38" x2="30" y2="38" stroke="#ef4444" strokeWidth="3" />
          <text x="38" y="42" fill="#d1d5db" fontSize="11">2^-λ (negligible)</text>
        </g>
      </svg>

      {/* Hover info */}
      {hoveredData && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600/50"
        >
          <p className="text-dark-300 text-sm">
            At <span className="text-primary-400 font-mono">λ = {hoveredData.x}</span>:
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <span className="text-emerald-400 font-mono">λ^{polyDegree}</span>
              <span className="text-dark-400"> = </span>
              <span className="text-dark-100 font-mono">{formatNumber(hoveredData.poly)}</span>
            </div>
            <div>
              <span className="text-red-400 font-mono">2^-λ</span>
              <span className="text-dark-400"> = </span>
              <span className="text-dark-100 font-mono">{formatNumber(hoveredData.negl)}</span>
            </div>
          </div>
          <p className="text-dark-500 text-xs mt-2">
            Ratio: polynomial is {formatNumber(hoveredData.poly / hoveredData.negl)}× larger
          </p>
        </motion.div>
      )}

      {/* Insight callout */}
      <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
        <p className="text-amber-400 text-sm">
          <strong>Key Insight:</strong> Even at λ = {lambda}, the negligible function 2^-λ ≈ {formatNumber(Math.pow(2, -lambda))}
          is so tiny that an adversary would need more operations than atoms in the universe to succeed with meaningful probability.
        </p>
      </div>
    </div>
  );
}
