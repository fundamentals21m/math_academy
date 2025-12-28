import { useState, useMemo } from 'react';

type SumType = 'left' | 'right' | 'midpoint';

export function RiemannSumExplorer() {
  const [n, setN] = useState(5);
  const [sumType, setSumType] = useState<SumType>('left');

  const width = 600;
  const height = 350;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Function: f(x) = x² from 0 to 1
  const f = (x: number) => x * x;
  const xMin = 0, xMax = 1;
  const yMin = 0, yMax = 1.2;

  // Coordinate transforms
  const toSvgX = (x: number) => margin.left + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => margin.top + plotHeight - ((y - yMin) / (yMax - yMin)) * plotHeight;

  // Generate curve points
  const curvePoints = useMemo(() => {
    const points: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.01) {
      points.push(`${toSvgX(x)},${toSvgY(f(x))}`);
    }
    return points.join(' ');
  }, []);

  // Calculate rectangles
  const rectangles = useMemo(() => {
    const dx = (xMax - xMin) / n;
    const rects = [];

    for (let i = 0; i < n; i++) {
      const left = xMin + i * dx;
      const right = left + dx;
      let sampleX: number;

      switch (sumType) {
        case 'left':
          sampleX = left;
          break;
        case 'right':
          sampleX = right;
          break;
        case 'midpoint':
          sampleX = (left + right) / 2;
          break;
      }

      const height = f(sampleX);
      rects.push({ left, right, height, sampleX });
    }

    return rects;
  }, [n, sumType]);

  // Calculate total area
  const dx = (xMax - xMin) / n;
  const riemannSum = rectangles.reduce((sum, r) => sum + r.height * dx, 0);
  const exactArea = 1 / 3; // ∫₀¹ x² dx = 1/3
  const error = Math.abs(riemannSum - exactArea);

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Riemann Sums: Approximating ∫₀¹ x² dx
      </h4>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-4 flex-1">
          <label className="text-dark-300 text-sm whitespace-nowrap">n =</label>
          <input
            type="range"
            min="1"
            max="50"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            className="flex-1 accent-primary-500"
          />
          <span className="text-primary-400 font-mono w-8">{n}</span>
        </div>

        <div className="flex gap-2">
          {(['left', 'midpoint', 'right'] as SumType[]).map((type) => (
            <button
              key={type}
              onClick={() => setSumType(type)}
              className={`px-3 py-1 rounded-lg text-sm font-medium capitalize ${
                sumType === type
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Quick n buttons */}
      <div className="flex gap-2 mb-4">
        {[1, 2, 5, 10, 20, 50].map((val) => (
          <button
            key={val}
            onClick={() => setN(val)}
            className={`px-3 py-1 rounded text-sm font-mono ${
              n === val
                ? 'bg-primary-500 text-white'
                : 'bg-dark-600 text-dark-300 hover:bg-dark-500'
            }`}
          >
            {val}
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* Grid */}
        {[0.25, 0.5, 0.75, 1].map((x) => (
          <line
            key={`vgrid-${x}`}
            x1={toSvgX(x)}
            y1={margin.top}
            x2={toSvgX(x)}
            y2={height - margin.bottom}
            stroke="#374151"
            strokeDasharray="4,4"
          />
        ))}
        {[0.25, 0.5, 0.75, 1].map((y) => (
          <line
            key={`hgrid-${y}`}
            x1={margin.left}
            y1={toSvgY(y)}
            x2={width - margin.right}
            y2={toSvgY(y)}
            stroke="#374151"
            strokeDasharray="4,4"
          />
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
          x1={toSvgX(0)}
          y1={margin.top}
          x2={toSvgX(0)}
          y2={height - margin.bottom}
          stroke="#9CA3AF"
          strokeWidth={2}
        />

        {/* Axis labels */}
        {[0.25, 0.5, 0.75, 1].map((x) => (
          <text
            key={`xlabel-${x}`}
            x={toSvgX(x)}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="11"
          >
            {x}
          </text>
        ))}
        {[0.25, 0.5, 0.75, 1].map((y) => (
          <text
            key={`ylabel-${y}`}
            x={margin.left - 10}
            y={toSvgY(y) + 4}
            textAnchor="end"
            fill="#9CA3AF"
            fontSize="11"
          >
            {y}
          </text>
        ))}

        {/* Rectangles */}
        {rectangles.map((rect, i) => (
          <g key={i}>
            <rect
              x={toSvgX(rect.left)}
              y={toSvgY(rect.height)}
              width={toSvgX(rect.right) - toSvgX(rect.left)}
              height={toSvgY(0) - toSvgY(rect.height)}
              fill="rgba(59, 130, 246, 0.3)"
              stroke="#3B82F6"
              strokeWidth={1}
            />
            {/* Sample point marker */}
            {n <= 10 && (
              <circle
                cx={toSvgX(rect.sampleX)}
                cy={toSvgY(rect.height)}
                r={3}
                fill="#F59E0B"
              />
            )}
          </g>
        ))}

        {/* Curve y = x² */}
        <polyline
          points={curvePoints}
          fill="none"
          stroke="#10B981"
          strokeWidth={3}
        />

        {/* Labels */}
        <text x={width - margin.right - 10} y={margin.top + 20} fill="#10B981" fontSize="12" textAnchor="end">
          y = x²
        </text>
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Riemann Sum</div>
          <div className="text-blue-400 font-mono text-xl">{riemannSum.toFixed(6)}</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Exact Integral</div>
          <div className="text-emerald-400 font-mono text-xl">{exactArea.toFixed(6)}</div>
          <div className="text-dark-500 text-xs mt-1">= 1/3</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Error</div>
          <div className="text-amber-400 font-mono text-xl">{error.toFixed(6)}</div>
          <div className="text-dark-500 text-xs mt-1">{(error / exactArea * 100).toFixed(2)}%</div>
        </div>
      </div>

      {/* Convergence indicator */}
      <div className="mt-4 h-4 bg-dark-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${Math.min(100, (1 - error / exactArea) * 100)}%` }}
        />
      </div>
      <p className="text-center text-dark-400 text-xs mt-1">
        Accuracy: {((1 - error / exactArea) * 100).toFixed(1)}%
      </p>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">Riemann's Idea:</span>{' '}
          Approximate the area under a curve by summing rectangles. As n → ∞, the sum
          approaches the true integral. For y = x² from 0 to 1, the exact area is 1/3.
          The {sumType} sum uses the {sumType === 'midpoint' ? 'middle' : sumType} edge of each rectangle.
        </p>
      </div>
    </div>
  );
}
