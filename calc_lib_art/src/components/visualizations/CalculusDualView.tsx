import { useState, useMemo } from 'react';

export function CalculusDualView() {
  const [view, setView] = useState<'derivative' | 'integral'>('derivative');
  const [xPoint, setXPoint] = useState(1.5);

  const width = 600;
  const height = 350;
  const margin = { top: 30, right: 30, bottom: 40, left: 50 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Function: f(x) = x^2
  const f = (x: number) => x * x;
  const fPrime = (x: number) => 2 * x; // Derivative

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

  // Tangent line at xPoint
  const tangentData = useMemo(() => {
    const slope = fPrime(xPoint);
    const yAtPoint = f(xPoint);
    const x1 = xPoint - 0.8;
    const x2 = xPoint + 0.8;
    const y1 = yAtPoint + slope * (x1 - xPoint);
    const y2 = yAtPoint + slope * (x2 - xPoint);
    return { x1, y1, x2, y2, slope, yAtPoint };
  }, [xPoint]);

  // Area rectangles for integral view
  const rectangles = useMemo(() => {
    const rects = [];
    const n = 20;
    const dx = xPoint / n;
    for (let i = 0; i < n; i++) {
      const x = i * dx;
      const rectHeight = f(x + dx / 2);
      rects.push({ x, width: dx, height: rectHeight });
    }
    return rects;
  }, [xPoint]);

  // Integral value: ∫₀ˣ t² dt = x³/3
  const integralValue = (xPoint * xPoint * xPoint) / 3;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        The Two Faces of Calculus
      </h4>

      {/* View Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setView('derivative')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'derivative'
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Derivative View
        </button>
        <button
          onClick={() => setView('integral')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'integral'
              ? 'bg-emerald-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Integral View
        </button>
      </div>

      {/* Slider */}
      <div className="flex items-center gap-4 mb-4">
        <label className="text-dark-300 text-sm">x =</label>
        <input
          type="range"
          min="0.5"
          max="2.5"
          step="0.1"
          value={xPoint}
          onChange={(e) => setXPoint(parseFloat(e.target.value))}
          className="flex-1 accent-primary-500"
        />
        <span className="text-primary-400 font-mono w-12">{xPoint.toFixed(1)}</span>
      </div>

      {/* SVG Canvas */}
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

        {/* Integral view: shaded area */}
        {view === 'integral' && (
          <>
            {rectangles.map((rect, i) => (
              <rect
                key={i}
                x={toSvgX(rect.x)}
                y={toSvgY(rect.height)}
                width={(plotWidth / (xMax - xMin)) * rect.width}
                height={toSvgY(0) - toSvgY(rect.height)}
                fill="rgba(16, 185, 129, 0.3)"
                stroke="rgba(16, 185, 129, 0.6)"
                strokeWidth={0.5}
              />
            ))}
          </>
        )}

        {/* Curve: y = x² */}
        <polyline
          points={curvePoints}
          fill="none"
          stroke="#60A5FA"
          strokeWidth={3}
        />

        {/* Derivative view: tangent line */}
        {view === 'derivative' && (
          <>
            <line
              x1={toSvgX(tangentData.x1)}
              y1={toSvgY(tangentData.y1)}
              x2={toSvgX(tangentData.x2)}
              y2={toSvgY(tangentData.y2)}
              stroke="#F59E0B"
              strokeWidth={2}
            />
            <circle
              cx={toSvgX(xPoint)}
              cy={toSvgY(tangentData.yAtPoint)}
              r={6}
              fill="#F59E0B"
            />
          </>
        )}

        {/* Integral view: endpoint marker */}
        {view === 'integral' && (
          <line
            x1={toSvgX(xPoint)}
            y1={toSvgY(0)}
            x2={toSvgX(xPoint)}
            y2={toSvgY(f(xPoint))}
            stroke="#10B981"
            strokeWidth={2}
            strokeDasharray="4,4"
          />
        )}

        {/* Labels */}
        <text x={width - margin.right - 10} y={toSvgY(9) + 20} fill="#60A5FA" fontSize="14">
          y = x²
        </text>
      </svg>

      {/* Info panel */}
      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        {view === 'derivative' ? (
          <div className="text-dark-200">
            <span className="text-amber-400 font-semibold">Derivative:</span>{' '}
            At x = {xPoint.toFixed(1)}, the slope of the tangent line is{' '}
            <span className="text-primary-400 font-mono">
              f'({xPoint.toFixed(1)}) = {tangentData.slope.toFixed(1)}
            </span>
          </div>
        ) : (
          <div className="text-dark-200">
            <span className="text-emerald-400 font-semibold">Integral:</span>{' '}
            The area under the curve from 0 to {xPoint.toFixed(1)} is{' '}
            <span className="text-primary-400 font-mono">
              ∫₀^{xPoint.toFixed(1)} x² dx = {integralValue.toFixed(3)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
