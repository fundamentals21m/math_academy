import { useState, useMemo } from 'react';

export function LeibnizNotation() {
  const [dx, setDx] = useState(0.5);
  const [xPoint, setXPoint] = useState(1.5);

  const width = 600;
  const height = 350;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Function: y = x²
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

  // Calculate dy and dy/dx
  const y1 = f(xPoint);
  const y2 = f(xPoint + dx);
  const dy = y2 - y1;
  const dydx = dy / dx;
  const exactDerivative = 2 * xPoint;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Leibniz's Infinitesimal Notation: dy/dx
      </h4>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label className="text-dark-300 text-sm whitespace-nowrap">x =</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={xPoint}
            onChange={(e) => setXPoint(parseFloat(e.target.value))}
            className="flex-1 accent-primary-500"
          />
          <span className="text-primary-400 font-mono w-10">{xPoint.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-4">
          <label className="text-dark-300 text-sm whitespace-nowrap">dx =</label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={dx}
            onChange={(e) => setDx(parseFloat(e.target.value))}
            className="flex-1 accent-emerald-500"
          />
          <span className="text-emerald-400 font-mono w-10">{dx.toFixed(1)}</span>
        </div>
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

        {/* Infinitesimal rectangle visualization */}
        <rect
          x={toSvgX(xPoint)}
          y={toSvgY(y2)}
          width={toSvgX(xPoint + dx) - toSvgX(xPoint)}
          height={toSvgY(y1) - toSvgY(y2)}
          fill="rgba(16, 185, 129, 0.2)"
          stroke="#10B981"
          strokeWidth={2}
        />

        {/* dx bracket */}
        <line
          x1={toSvgX(xPoint)}
          y1={toSvgY(0) + 10}
          x2={toSvgX(xPoint + dx)}
          y2={toSvgY(0) + 10}
          stroke="#10B981"
          strokeWidth={2}
        />
        <line
          x1={toSvgX(xPoint)}
          y1={toSvgY(0) + 5}
          x2={toSvgX(xPoint)}
          y2={toSvgY(0) + 15}
          stroke="#10B981"
          strokeWidth={2}
        />
        <line
          x1={toSvgX(xPoint + dx)}
          y1={toSvgY(0) + 5}
          x2={toSvgX(xPoint + dx)}
          y2={toSvgY(0) + 15}
          stroke="#10B981"
          strokeWidth={2}
        />
        <text
          x={(toSvgX(xPoint) + toSvgX(xPoint + dx)) / 2}
          y={toSvgY(0) + 28}
          textAnchor="middle"
          fill="#10B981"
          fontSize="14"
          fontWeight="bold"
        >
          dx
        </text>

        {/* dy bracket */}
        <line
          x1={toSvgX(xPoint + dx) + 10}
          y1={toSvgY(y1)}
          x2={toSvgX(xPoint + dx) + 10}
          y2={toSvgY(y2)}
          stroke="#F59E0B"
          strokeWidth={2}
        />
        <line
          x1={toSvgX(xPoint + dx) + 5}
          y1={toSvgY(y1)}
          x2={toSvgX(xPoint + dx) + 15}
          y2={toSvgY(y1)}
          stroke="#F59E0B"
          strokeWidth={2}
        />
        <line
          x1={toSvgX(xPoint + dx) + 5}
          y1={toSvgY(y2)}
          x2={toSvgX(xPoint + dx) + 15}
          y2={toSvgY(y2)}
          stroke="#F59E0B"
          strokeWidth={2}
        />
        <text
          x={toSvgX(xPoint + dx) + 28}
          y={(toSvgY(y1) + toSvgY(y2)) / 2 + 5}
          textAnchor="start"
          fill="#F59E0B"
          fontSize="14"
          fontWeight="bold"
        >
          dy
        </text>

        {/* Points on curve */}
        <circle cx={toSvgX(xPoint)} cy={toSvgY(y1)} r={5} fill="#3B82F6" />
        <circle cx={toSvgX(xPoint + dx)} cy={toSvgY(y2)} r={5} fill="#3B82F6" />

        {/* Secant line */}
        <line
          x1={toSvgX(xPoint - 0.3)}
          y1={toSvgY(y1 + dydx * (-0.3))}
          x2={toSvgX(xPoint + dx + 0.3)}
          y2={toSvgY(y1 + dydx * (dx + 0.3))}
          stroke="#F59E0B"
          strokeWidth={2}
          strokeDasharray="6,3"
        />

        {/* Labels */}
        <text x={width - margin.right - 10} y={toSvgY(9) + 20} fill="#60A5FA" fontSize="14" textAnchor="end">
          y = x²
        </text>
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-emerald-400 font-mono text-2xl">{dx.toFixed(2)}</div>
          <div className="text-dark-400 text-sm mt-1">dx</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-amber-400 font-mono text-2xl">{dy.toFixed(2)}</div>
          <div className="text-dark-400 text-sm mt-1">dy</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-primary-400 font-mono text-2xl">{dydx.toFixed(2)}</div>
          <div className="text-dark-400 text-sm mt-1">dy/dx</div>
        </div>
      </div>

      {/* Comparison */}
      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-dark-300">
            Approximate slope (dy/dx): <span className="text-primary-400 font-mono">{dydx.toFixed(4)}</span>
          </span>
          <span className="text-dark-300">
            True derivative (2x): <span className="text-emerald-400 font-mono">{exactDerivative.toFixed(4)}</span>
          </span>
          <span className="text-dark-300">
            Error: <span className="text-amber-400 font-mono">{Math.abs(dydx - exactDerivative).toFixed(4)}</span>
          </span>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">Leibniz's Insight:</span>{' '}
          The derivative is the ratio of infinitesimally small quantities: dy and dx. As dx → 0,
          the ratio dy/dx approaches the exact slope. This notation treats derivatives as
          actual fractions—remarkably useful for chain rule and integration.
        </p>
      </div>
    </div>
  );
}
