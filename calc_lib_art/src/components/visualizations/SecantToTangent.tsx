import { useState, useMemo } from 'react';

export function SecantToTangent() {
  const [h, setH] = useState(1.0);
  const [xPoint] = useState(1.5);

  const width = 600;
  const height = 350;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Function: f(x) = x²
  const f = (x: number) => x * x;

  // Coordinate transforms
  const xMin = 0, xMax = 3;
  const yMin = 0, yMax = 9;
  const toSvgX = (x: number) => margin.left + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => margin.top + plotHeight - ((y - yMin) / (yMax - yMin)) * plotHeight;

  // Generate curve points
  const curvePoints = useMemo(() => {
    const points: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.05) {
      points.push(`${toSvgX(x)},${toSvgY(f(x))}`);
    }
    return points.join(' ');
  }, []);

  // Calculate secant/tangent slope
  const y1 = f(xPoint);
  const y2 = f(xPoint + h);
  const secantSlope = (y2 - y1) / h;
  const tangentSlope = 2 * xPoint; // True derivative

  // Extend the secant line for visibility
  const lineExtend = 1;
  const x1Line = xPoint - lineExtend;
  const x2Line = xPoint + h + lineExtend;
  const y1Line = y1 + secantSlope * (x1Line - xPoint);
  const y2Line = y1 + secantSlope * (x2Line - xPoint);

  // Determine if h is small enough to call it a tangent
  const isTangent = h <= 0.05;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        From Secant to Tangent: The Limit Process
      </h4>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-4">
        <label className="text-dark-300 text-sm whitespace-nowrap">h =</label>
        <input
          type="range"
          min="0.01"
          max="1.5"
          step="0.01"
          value={h}
          onChange={(e) => setH(parseFloat(e.target.value))}
          className="flex-1 accent-primary-500"
        />
        <span className="text-primary-400 font-mono w-16">{h.toFixed(2)}</span>
      </div>

      {/* Quick buttons */}
      <div className="flex gap-2 mb-4">
        {[1.5, 1.0, 0.5, 0.25, 0.1, 0.05, 0.01].map((val) => (
          <button
            key={val}
            onClick={() => setH(val)}
            className={`px-3 py-1 rounded text-sm font-mono ${
              Math.abs(h - val) < 0.001
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
        {[1, 2, 3].map((x) => (
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
        {[3, 6, 9].map((y) => (
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
        {[1, 2, 3].map((x) => (
          <text
            key={`xlabel-${x}`}
            x={toSvgX(x)}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="12"
          >
            {x}
          </text>
        ))}
        {[3, 6, 9].map((y) => (
          <text
            key={`ylabel-${y}`}
            x={margin.left - 10}
            y={toSvgY(y) + 4}
            textAnchor="end"
            fill="#9CA3AF"
            fontSize="12"
          >
            {y}
          </text>
        ))}

        {/* Curve y = x² */}
        <polyline
          points={curvePoints}
          fill="none"
          stroke="#60A5FA"
          strokeWidth={3}
        />

        {/* Secant/Tangent line */}
        <line
          x1={toSvgX(x1Line)}
          y1={toSvgY(y1Line)}
          x2={toSvgX(x2Line)}
          y2={toSvgY(y2Line)}
          stroke={isTangent ? '#10B981' : '#F59E0B'}
          strokeWidth={2}
        />

        {/* Point at x */}
        <circle cx={toSvgX(xPoint)} cy={toSvgY(y1)} r={6} fill="#3B82F6" />

        {/* Point at x + h (only show if not tangent) */}
        {!isTangent && (
          <circle cx={toSvgX(xPoint + h)} cy={toSvgY(y2)} r={6} fill="#F59E0B" />
        )}

        {/* h bracket */}
        {!isTangent && (
          <g>
            <line
              x1={toSvgX(xPoint)}
              y1={toSvgY(0) + 15}
              x2={toSvgX(xPoint + h)}
              y2={toSvgY(0) + 15}
              stroke="#9CA3AF"
              strokeWidth={1}
            />
            <line
              x1={toSvgX(xPoint)}
              y1={toSvgY(0) + 10}
              x2={toSvgX(xPoint)}
              y2={toSvgY(0) + 20}
              stroke="#9CA3AF"
              strokeWidth={1}
            />
            <line
              x1={toSvgX(xPoint + h)}
              y1={toSvgY(0) + 10}
              x2={toSvgX(xPoint + h)}
              y2={toSvgY(0) + 20}
              stroke="#9CA3AF"
              strokeWidth={1}
            />
            <text
              x={(toSvgX(xPoint) + toSvgX(xPoint + h)) / 2}
              y={toSvgY(0) + 32}
              textAnchor="middle"
              fill="#9CA3AF"
              fontSize="12"
            >
              h = {h.toFixed(2)}
            </text>
          </g>
        )}

        {/* Labels */}
        <text x={toSvgX(xPoint) - 10} y={toSvgY(y1) - 10} fill="#3B82F6" fontSize="12">
          (x, x²)
        </text>
        {!isTangent && (
          <text x={toSvgX(xPoint + h) + 5} y={toSvgY(y2) - 10} fill="#F59E0B" fontSize="12">
            (x+h, (x+h)²)
          </text>
        )}

        {/* Line type label */}
        <text
          x={width - margin.right - 10}
          y={margin.top + 20}
          textAnchor="end"
          fill={isTangent ? '#10B981' : '#F59E0B'}
          fontSize="14"
          fontWeight="bold"
        >
          {isTangent ? 'Tangent Line' : 'Secant Line'}
        </text>
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Secant Slope</div>
          <div className="text-amber-400 font-mono text-xl">{secantSlope.toFixed(4)}</div>
          <div className="text-dark-500 text-xs mt-1">[f(x+h) - f(x)] / h</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">True Derivative</div>
          <div className="text-emerald-400 font-mono text-xl">{tangentSlope.toFixed(4)}</div>
          <div className="text-dark-500 text-xs mt-1">f'(x) = 2x</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Error</div>
          <div className="text-primary-400 font-mono text-xl">
            {Math.abs(secantSlope - tangentSlope).toFixed(4)}
          </div>
          <div className="text-dark-500 text-xs mt-1">|slope - f'(x)|</div>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">The Key Insight:</span>{' '}
          As h → 0, the secant line (connecting two points) rotates to become the tangent line
          (touching at one point). The slope of this limiting tangent line is the derivative.
          {isTangent && (
            <span className="text-emerald-400"> The secant has become the tangent!</span>
          )}
        </p>
      </div>
    </div>
  );
}
