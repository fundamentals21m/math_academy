import { useState, useMemo } from 'react';

export function InfiniteSeriesVisualizer() {
  const [terms, setTerms] = useState(5);

  const width = 600;
  const height = 300;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Geometric series: 1/2 + 1/4 + 1/8 + ...
  const seriesData = useMemo(() => {
    const data = [];
    let partialSum = 0;
    for (let n = 1; n <= 20; n++) {
      const term = 1 / Math.pow(2, n);
      partialSum += term;
      data.push({
        n,
        term,
        partialSum,
        remaining: 1 - partialSum,
      });
    }
    return data;
  }, []);

  // Visual representation using rectangles
  const rectangles = useMemo(() => {
    const rects = [];
    let xPos = 0;
    const totalWidth = plotWidth;

    for (let i = 0; i < terms; i++) {
      const width = totalWidth / Math.pow(2, i + 1);
      rects.push({
        x: xPos,
        width,
        fraction: `1/${Math.pow(2, i + 1)}`,
        value: 1 / Math.pow(2, i + 1),
      });
      xPos += width;
    }
    return rects;
  }, [terms, plotWidth]);

  const currentSum = seriesData[terms - 1]?.partialSum || 0;

  // Coordinate transforms for partial sums graph
  const toSvgX = (n: number) => margin.left + ((n - 0.5) / 10) * plotWidth;
  const toSvgY = (y: number) => margin.top + plotHeight - y * plotHeight;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Infinite Series: 1/2 + 1/4 + 1/8 + ...
      </h4>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-4">
        <label className="text-dark-300 text-sm">Number of terms:</label>
        <input
          type="range"
          min="1"
          max="10"
          value={terms}
          onChange={(e) => setTerms(parseInt(e.target.value))}
          className="flex-1 accent-primary-500"
        />
        <span className="text-primary-400 font-mono w-8">{terms}</span>
      </div>

      {/* Visual area representation */}
      <div className="mb-6">
        <p className="text-dark-400 text-sm mb-2">Visual representation (filling up to 1):</p>
        <div className="relative h-16 bg-dark-900 rounded-lg overflow-hidden">
          {rectangles.map((rect, i) => (
            <div
              key={i}
              className="absolute h-full border-r border-dark-700 flex items-center justify-center text-xs font-mono"
              style={{
                left: `${(rect.x / plotWidth) * 100}%`,
                width: `${(rect.width / plotWidth) * 100}%`,
                backgroundColor: `hsl(${200 + i * 15}, 70%, ${45 - i * 3}%)`,
              }}
            >
              {rect.width > 40 && rect.fraction}
            </div>
          ))}
          {/* Remaining gap */}
          <div
            className="absolute h-full bg-dark-700/50 flex items-center justify-center text-xs text-dark-400"
            style={{
              left: `${currentSum * 100}%`,
              width: `${(1 - currentSum) * 100}%`,
            }}
          >
            {1 - currentSum > 0.05 && `Gap: ${(1 - currentSum).toFixed(4)}`}
          </div>
        </div>
      </div>

      {/* Partial sums graph */}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* Grid lines */}
        {[0.25, 0.5, 0.75, 1].map((y) => (
          <g key={y}>
            <line
              x1={margin.left}
              y1={toSvgY(y)}
              x2={width - margin.right}
              y2={toSvgY(y)}
              stroke="#374151"
              strokeDasharray="4,4"
            />
            <text
              x={margin.left - 10}
              y={toSvgY(y) + 4}
              textAnchor="end"
              fill="#9CA3AF"
              fontSize="11"
            >
              {y}
            </text>
          </g>
        ))}

        {/* Axes */}
        <line
          x1={margin.left}
          y1={toSvgY(0)}
          x2={width - margin.right}
          y2={toSvgY(0)}
          stroke="#9CA3AF"
          strokeWidth={2}
        />
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={height - margin.bottom}
          stroke="#9CA3AF"
          strokeWidth={2}
        />

        {/* Limit line at y = 1 */}
        <line
          x1={margin.left}
          y1={toSvgY(1)}
          x2={width - margin.right}
          y2={toSvgY(1)}
          stroke="#10B981"
          strokeWidth={2}
          strokeDasharray="6,3"
        />
        <text
          x={width - margin.right + 5}
          y={toSvgY(1) + 4}
          fill="#10B981"
          fontSize="12"
        >
          Limit = 1
        </text>

        {/* X-axis labels */}
        {[2, 4, 6, 8, 10].map((n) => (
          <text
            key={n}
            x={toSvgX(n)}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="11"
          >
            {n}
          </text>
        ))}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          fill="#9CA3AF"
          fontSize="12"
        >
          Number of terms (n)
        </text>

        {/* Partial sums as bars */}
        {seriesData.slice(0, 10).map((d, i) => (
          <rect
            key={d.n}
            x={toSvgX(d.n) - 15}
            y={toSvgY(d.partialSum)}
            width={30}
            height={toSvgY(0) - toSvgY(d.partialSum)}
            fill={i < terms ? '#3B82F6' : '#374151'}
            opacity={i < terms ? 1 : 0.3}
          />
        ))}

        {/* Current sum marker */}
        <circle
          cx={toSvgX(terms)}
          cy={toSvgY(currentSum)}
          r={6}
          fill="#F59E0B"
        />
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg">
          <div className="text-dark-400 text-sm mb-1">Current Sum</div>
          <div className="text-primary-400 font-mono text-lg">
            S<sub>{terms}</sub> = {currentSum.toFixed(6)}
          </div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg">
          <div className="text-dark-400 text-sm mb-1">Distance from Limit</div>
          <div className="text-emerald-400 font-mono text-lg">
            1 - S<sub>{terms}</sub> = {(1 - currentSum).toFixed(6)}
          </div>
        </div>
      </div>

      {/* Formula */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">Formula:</span>{' '}
          <span className="font-mono">
            1/2 + 1/4 + 1/8 + ... = Σ(1/2)<sup>n</sup> = 1/(1 - 1/2) = 1
          </span>
        </p>
        <p className="text-dark-400 text-xs mt-2">
          As n → ∞, the partial sums approach 1 but never exceed it. Each term fills half the remaining gap.
        </p>
      </div>
    </div>
  );
}
