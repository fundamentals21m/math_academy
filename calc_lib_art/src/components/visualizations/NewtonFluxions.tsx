import { useState, useEffect, useMemo } from 'react';

export function NewtonFluxions() {
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFluxion, setShowFluxion] = useState(true);

  const width = 600;
  const height = 350;
  const margin = { top: 40, right: 40, bottom: 50, left: 60 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Fluent: x(t) = t² (position as function of time)
  // Fluxion: ẋ(t) = 2t (velocity - rate of flow)
  const fluent = (t: number) => t * t;
  const fluxion = (t: number) => 2 * t;

  // Animation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTime((t) => {
          if (t >= 3) {
            setIsPlaying(false);
            return 3;
          }
          return t + 0.02;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Coordinate transforms
  const tMin = 0, tMax = 3;
  const yMin = 0, yMax = 10;
  const toSvgX = (t: number) => margin.left + ((t - tMin) / (tMax - tMin)) * plotWidth;
  const toSvgY = (y: number) => margin.top + plotHeight - ((y - yMin) / (yMax - yMin)) * plotHeight;

  // Generate curve points
  const fluentCurve = useMemo(() => {
    const points: string[] = [];
    for (let t = tMin; t <= tMax; t += 0.05) {
      points.push(`${toSvgX(t)},${toSvgY(fluent(t))}`);
    }
    return points.join(' ');
  }, []);

  const fluxionCurve = useMemo(() => {
    const points: string[] = [];
    for (let t = tMin; t <= tMax; t += 0.05) {
      points.push(`${toSvgX(t)},${toSvgY(fluxion(t))}`);
    }
    return points.join(' ');
  }, []);

  const currentFluent = fluent(time);
  const currentFluxion = fluxion(time);

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Newton's Fluents and Fluxions
      </h4>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {
            if (time >= 3) setTime(0);
            setIsPlaying(!isPlaying);
          }}
          className="px-4 py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600"
        >
          {isPlaying ? 'Pause' : time >= 3 ? 'Restart' : 'Play'}
        </button>
        <button
          onClick={() => {
            setTime(0);
            setIsPlaying(false);
          }}
          className="px-4 py-2 rounded-lg bg-dark-600 text-dark-200 font-medium hover:bg-dark-500"
        >
          Reset
        </button>
        <label className="flex items-center gap-2 ml-4">
          <input
            type="checkbox"
            checked={showFluxion}
            onChange={(e) => setShowFluxion(e.target.checked)}
            className="accent-emerald-500"
          />
          <span className="text-dark-300 text-sm">Show Fluxion (ẋ)</span>
        </label>
      </div>

      {/* Time slider */}
      <div className="flex items-center gap-4 mb-4">
        <label className="text-dark-300 text-sm">Time t =</label>
        <input
          type="range"
          min="0"
          max="3"
          step="0.1"
          value={time}
          onChange={(e) => {
            setTime(parseFloat(e.target.value));
            setIsPlaying(false);
          }}
          className="flex-1 accent-primary-500"
        />
        <span className="text-primary-400 font-mono w-12">{time.toFixed(2)}</span>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* Grid */}
        {[1, 2, 3].map((t) => (
          <line
            key={`vgrid-${t}`}
            x1={toSvgX(t)}
            y1={margin.top}
            x2={toSvgX(t)}
            y2={height - margin.bottom}
            stroke="#374151"
            strokeDasharray="4,4"
          />
        ))}
        {[2, 4, 6, 8].map((y) => (
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
        {[1, 2, 3].map((t) => (
          <text
            key={`tlabel-${t}`}
            x={toSvgX(t)}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="12"
          >
            {t}
          </text>
        ))}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          fill="#9CA3AF"
          fontSize="12"
        >
          Time (t)
        </text>
        {[2, 4, 6, 8].map((y) => (
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

        {/* Fluent curve x(t) = t² */}
        <polyline
          points={fluentCurve}
          fill="none"
          stroke="#3B82F6"
          strokeWidth={3}
        />

        {/* Fluxion curve ẋ(t) = 2t */}
        {showFluxion && (
          <polyline
            points={fluxionCurve}
            fill="none"
            stroke="#10B981"
            strokeWidth={2}
            strokeDasharray="6,3"
          />
        )}

        {/* Current time vertical line */}
        <line
          x1={toSvgX(time)}
          y1={margin.top}
          x2={toSvgX(time)}
          y2={height - margin.bottom}
          stroke="#F59E0B"
          strokeWidth={1}
          strokeDasharray="4,4"
        />

        {/* Current fluent point */}
        <circle
          cx={toSvgX(time)}
          cy={toSvgY(currentFluent)}
          r={6}
          fill="#3B82F6"
        />

        {/* Current fluxion point */}
        {showFluxion && (
          <circle
            cx={toSvgX(time)}
            cy={toSvgY(currentFluxion)}
            r={5}
            fill="#10B981"
          />
        )}

        {/* Flowing quantity indicator */}
        <rect
          x={margin.left - 35}
          y={toSvgY(currentFluent) - 10}
          width={25}
          height={20}
          fill="#3B82F6"
          rx={3}
        />
        <text
          x={margin.left - 22}
          y={toSvgY(currentFluent) + 4}
          textAnchor="middle"
          fill="white"
          fontSize="10"
        >
          x
        </text>

        {/* Legend */}
        <g transform={`translate(${width - margin.right - 120}, ${margin.top})`}>
          <rect x={0} y={0} width={110} height={showFluxion ? 55 : 30} fill="#1F2937" rx={4} />
          <line x1={10} y1={15} x2={30} y2={15} stroke="#3B82F6" strokeWidth={3} />
          <text x={40} y={19} fill="#3B82F6" fontSize="11">x = t² (fluent)</text>
          {showFluxion && (
            <>
              <line x1={10} y1={40} x2={30} y2={40} stroke="#10B981" strokeWidth={2} strokeDasharray="6,3" />
              <text x={40} y={44} fill="#10B981" fontSize="11">ẋ = 2t (fluxion)</text>
            </>
          )}
        </g>
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg">
          <div className="text-dark-400 text-sm mb-1">Fluent (Quantity)</div>
          <div className="text-blue-400 font-mono">
            x(t) = t² = <span className="text-xl">{currentFluent.toFixed(2)}</span>
          </div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg">
          <div className="text-dark-400 text-sm mb-1">Fluxion (Rate of Flow)</div>
          <div className="text-emerald-400 font-mono">
            ẋ(t) = 2t = <span className="text-xl">{currentFluxion.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">Newton's View:</span>{' '}
          Quantities "flow" continuously through time. The <em>fluent</em> x is the flowing quantity,
          and its <em>fluxion</em> ẋ is the rate at which it flows—what we now call the derivative.
        </p>
      </div>
    </div>
  );
}
