import { useState, useMemo } from 'react';

export function AccumulationFunction() {
  const [xEnd, setXEnd] = useState(2);

  const width = 600;
  const height = 400;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = (height - margin.top - margin.bottom - 30) / 2;

  // f(t) = t (simple linear function)
  const f = (t: number) => t;

  // F(x) = ∫₀ˣ t dt = x²/2
  const F = (x: number) => (x * x) / 2;

  // Coordinate transforms for top panel (f(t))
  const xMin = 0, xMax = 4;
  const yMinF = 0, yMaxF = 4;
  const toSvgX = (x: number) => margin.left + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgYf = (y: number) => margin.top + plotHeight - ((y - yMinF) / (yMaxF - yMinF)) * plotHeight;

  // Coordinate transforms for bottom panel (F(x))
  const yMinA = 0, yMaxA = 8;
  const topOffset = margin.top + plotHeight + 30;
  const toSvgYa = (y: number) => topOffset + plotHeight - ((y - yMinA) / (yMaxA - yMinA)) * plotHeight;

  // Generate f(t) line
  const fLine = useMemo(() => {
    const points: string[] = [];
    for (let t = xMin; t <= xMax; t += 0.05) {
      points.push(`${toSvgX(t)},${toSvgYf(f(t))}`);
    }
    return points.join(' ');
  }, []);

  // Generate F(x) curve
  const FCurve = useMemo(() => {
    const points: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.05) {
      points.push(`${toSvgX(x)},${toSvgYa(F(x))}`);
    }
    return points.join(' ');
  }, []);

  // Shaded area for ∫₀ˣ f(t) dt
  const shadedArea = useMemo(() => {
    let path = `M ${toSvgX(0)} ${toSvgYf(0)}`;
    for (let t = 0; t <= xEnd; t += 0.05) {
      path += ` L ${toSvgX(t)} ${toSvgYf(f(t))}`;
    }
    path += ` L ${toSvgX(xEnd)} ${toSvgYf(0)} Z`;
    return path;
  }, [xEnd]);

  const currentF = F(xEnd);

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        The Accumulation Function: F(x) = ∫₀ˣ f(t) dt
      </h4>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-4">
        <label className="text-dark-300 text-sm">Upper limit x =</label>
        <input
          type="range"
          min="0"
          max="4"
          step="0.1"
          value={xEnd}
          onChange={(e) => setXEnd(parseFloat(e.target.value))}
          className="flex-1 accent-primary-500"
        />
        <span className="text-primary-400 font-mono w-12">{xEnd.toFixed(1)}</span>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* TOP PANEL: f(t) = t */}
        <text x={margin.left} y={margin.top - 10} fill="#9CA3AF" fontSize="12">
          f(t) = t
        </text>

        {/* Grid for top panel */}
        {[1, 2, 3, 4].map((x) => (
          <line
            key={`vtop-${x}`}
            x1={toSvgX(x)}
            y1={margin.top}
            x2={toSvgX(x)}
            y2={margin.top + plotHeight}
            stroke="#374151"
            strokeDasharray="4,4"
          />
        ))}
        {[1, 2, 3].map((y) => (
          <line
            key={`htop-${y}`}
            x1={margin.left}
            y1={toSvgYf(y)}
            x2={width - margin.right}
            y2={toSvgYf(y)}
            stroke="#374151"
            strokeDasharray="4,4"
          />
        ))}

        {/* Axes for top panel */}
        <line
          x1={margin.left}
          y1={toSvgYf(0)}
          x2={width - margin.right}
          y2={toSvgYf(0)}
          stroke="#9CA3AF"
          strokeWidth={2}
        />
        <line
          x1={toSvgX(0)}
          y1={margin.top}
          x2={toSvgX(0)}
          y2={margin.top + plotHeight}
          stroke="#9CA3AF"
          strokeWidth={2}
        />

        {/* Shaded area under f(t) */}
        <path d={shadedArea} fill="rgba(16, 185, 129, 0.3)" stroke="none" />

        {/* f(t) line */}
        <polyline points={fLine} fill="none" stroke="#3B82F6" strokeWidth={3} />

        {/* Vertical line at x */}
        <line
          x1={toSvgX(xEnd)}
          y1={toSvgYf(0)}
          x2={toSvgX(xEnd)}
          y2={toSvgYf(f(xEnd))}
          stroke="#10B981"
          strokeWidth={2}
          strokeDasharray="4,4"
        />

        {/* BOTTOM PANEL: F(x) = x²/2 */}
        <text x={margin.left} y={topOffset - 10} fill="#9CA3AF" fontSize="12">
          F(x) = ∫₀ˣ t dt = x²/2
        </text>

        {/* Grid for bottom panel */}
        {[1, 2, 3, 4].map((x) => (
          <line
            key={`vbot-${x}`}
            x1={toSvgX(x)}
            y1={topOffset}
            x2={toSvgX(x)}
            y2={topOffset + plotHeight}
            stroke="#374151"
            strokeDasharray="4,4"
          />
        ))}
        {[2, 4, 6, 8].map((y) => (
          <line
            key={`hbot-${y}`}
            x1={margin.left}
            y1={toSvgYa(y)}
            x2={width - margin.right}
            y2={toSvgYa(y)}
            stroke="#374151"
            strokeDasharray="4,4"
          />
        ))}

        {/* Axes for bottom panel */}
        <line
          x1={margin.left}
          y1={toSvgYa(0)}
          x2={width - margin.right}
          y2={toSvgYa(0)}
          stroke="#9CA3AF"
          strokeWidth={2}
        />
        <line
          x1={toSvgX(0)}
          y1={topOffset}
          x2={toSvgX(0)}
          y2={topOffset + plotHeight}
          stroke="#9CA3AF"
          strokeWidth={2}
        />

        {/* F(x) curve */}
        <polyline points={FCurve} fill="none" stroke="#10B981" strokeWidth={3} />

        {/* Current point on F(x) */}
        <circle cx={toSvgX(xEnd)} cy={toSvgYa(currentF)} r={6} fill="#10B981" />

        {/* Vertical line connecting to x-axis */}
        <line
          x1={toSvgX(xEnd)}
          y1={toSvgYa(0)}
          x2={toSvgX(xEnd)}
          y2={toSvgYa(currentF)}
          stroke="#F59E0B"
          strokeWidth={1}
          strokeDasharray="4,4"
        />

        {/* Axis labels */}
        {[1, 2, 3, 4].map((x) => (
          <text
            key={`xlabel-${x}`}
            x={toSvgX(x)}
            y={height - 10}
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="11"
          >
            {x}
          </text>
        ))}
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg">
          <div className="text-dark-400 text-sm mb-1">Shaded Area (top)</div>
          <div className="text-emerald-400 font-mono text-lg">
            ∫₀<sup>{xEnd.toFixed(1)}</sup> t dt = <span className="text-xl">{currentF.toFixed(3)}</span>
          </div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg">
          <div className="text-dark-400 text-sm mb-1">Accumulation F(x)</div>
          <div className="text-blue-400 font-mono text-lg">
            F({xEnd.toFixed(1)}) = ({xEnd.toFixed(1)})²/2 = <span className="text-xl">{currentF.toFixed(3)}</span>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">The Key Idea:</span>{' '}
          F(x) = ∫₀ˣ f(t) dt is an <em>accumulation function</em>. As x increases, F(x) accumulates
          more area. Notice: F'(x) = f(x)! The rate at which area accumulates equals the height
          of the function—this is the Fundamental Theorem of Calculus.
        </p>
      </div>
    </div>
  );
}
