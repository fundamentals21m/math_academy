import { useState, useMemo } from 'react';

export function InstantaneousVelocity() {
  const [time, setTime] = useState(2);
  const [deltaT, setDeltaT] = useState(1);

  const width = 600;
  const height = 350;
  const margin = { top: 30, right: 30, bottom: 50, left: 60 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Position function: s(t) = 16t² (falling object in feet, t in seconds)
  const position = (t: number) => 16 * t * t;
  const velocity = (t: number) => 32 * t; // True instantaneous velocity

  // Coordinate transforms
  const tMin = 0, tMax = 4;
  const sMin = 0, sMax = 280;
  const toSvgX = (t: number) => margin.left + ((t - tMin) / (tMax - tMin)) * plotWidth;
  const toSvgY = (s: number) => margin.top + plotHeight - ((s - sMin) / (sMax - sMin)) * plotHeight;

  // Generate curve points
  const curvePoints = useMemo(() => {
    const points: string[] = [];
    for (let t = tMin; t <= tMax; t += 0.05) {
      points.push(`${toSvgX(t)},${toSvgY(position(t))}`);
    }
    return points.join(' ');
  }, []);

  // Calculate average velocity
  const s1 = position(time);
  const s2 = position(time + deltaT);
  const avgVelocity = (s2 - s1) / deltaT;
  const instVelocity = velocity(time);

  // Clamp time + deltaT to max
  const endTime = Math.min(time + deltaT, tMax);

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Average vs. Instantaneous Velocity
      </h4>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label className="text-dark-300 text-sm whitespace-nowrap">t =</label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={time}
            onChange={(e) => setTime(parseFloat(e.target.value))}
            className="flex-1 accent-primary-500"
          />
          <span className="text-primary-400 font-mono w-12">{time.toFixed(1)}s</span>
        </div>
        <div className="flex items-center gap-4">
          <label className="text-dark-300 text-sm whitespace-nowrap">Δt =</label>
          <input
            type="range"
            min="0.1"
            max="1.5"
            step="0.1"
            value={deltaT}
            onChange={(e) => setDeltaT(parseFloat(e.target.value))}
            className="flex-1 accent-emerald-500"
          />
          <span className="text-emerald-400 font-mono w-12">{deltaT.toFixed(1)}s</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* Grid */}
        {[1, 2, 3, 4].map((t) => (
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
        {[50, 100, 150, 200, 250].map((s) => (
          <line
            key={`hgrid-${s}`}
            x1={margin.left}
            y1={toSvgY(s)}
            x2={width - margin.right}
            y2={toSvgY(s)}
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
        {[1, 2, 3, 4].map((t) => (
          <text
            key={`tlabel-${t}`}
            x={toSvgX(t)}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="12"
          >
            {t}s
          </text>
        ))}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          fill="#9CA3AF"
          fontSize="12"
        >
          Time (seconds)
        </text>
        {[100, 200].map((s) => (
          <text
            key={`slabel-${s}`}
            x={margin.left - 10}
            y={toSvgY(s) + 4}
            textAnchor="end"
            fill="#9CA3AF"
            fontSize="12"
          >
            {s}
          </text>
        ))}
        <text
          x={margin.left - 35}
          y={height / 2}
          textAnchor="middle"
          fill="#9CA3AF"
          fontSize="12"
          transform={`rotate(-90, ${margin.left - 35}, ${height / 2})`}
        >
          Position (feet)
        </text>

        {/* Position curve s(t) = 16t² */}
        <polyline
          points={curvePoints}
          fill="none"
          stroke="#60A5FA"
          strokeWidth={3}
        />

        {/* Secant line (average velocity) */}
        <line
          x1={toSvgX(time - 0.3)}
          y1={toSvgY(s1 - avgVelocity * 0.3)}
          x2={toSvgX(endTime + 0.3)}
          y2={toSvgY(s1 + avgVelocity * (endTime - time + 0.3))}
          stroke="#F59E0B"
          strokeWidth={2}
          strokeDasharray="6,3"
        />

        {/* Δt bracket on x-axis */}
        <line
          x1={toSvgX(time)}
          y1={toSvgY(0) + 15}
          x2={toSvgX(endTime)}
          y2={toSvgY(0) + 15}
          stroke="#10B981"
          strokeWidth={2}
        />
        <text
          x={(toSvgX(time) + toSvgX(endTime)) / 2}
          y={toSvgY(0) + 32}
          textAnchor="middle"
          fill="#10B981"
          fontSize="11"
        >
          Δt
        </text>

        {/* Δs bracket on y-axis */}
        <line
          x1={toSvgX(endTime) + 15}
          y1={toSvgY(s1)}
          x2={toSvgX(endTime) + 15}
          y2={toSvgY(s2)}
          stroke="#F59E0B"
          strokeWidth={2}
        />
        <text
          x={toSvgX(endTime) + 28}
          y={(toSvgY(s1) + toSvgY(s2)) / 2 + 4}
          textAnchor="start"
          fill="#F59E0B"
          fontSize="11"
        >
          Δs
        </text>

        {/* Points */}
        <circle cx={toSvgX(time)} cy={toSvgY(s1)} r={6} fill="#3B82F6" />
        <circle cx={toSvgX(endTime)} cy={toSvgY(s2)} r={6} fill="#F59E0B" />

        {/* Label for curve */}
        <text x={width - margin.right - 10} y={margin.top + 20} fill="#60A5FA" fontSize="12" textAnchor="end">
          s(t) = 16t²
        </text>
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Average Velocity</div>
          <div className="text-amber-400 font-mono text-xl">{avgVelocity.toFixed(1)}</div>
          <div className="text-dark-500 text-xs mt-1">ft/s over Δt</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Instantaneous Velocity</div>
          <div className="text-emerald-400 font-mono text-xl">{instVelocity.toFixed(1)}</div>
          <div className="text-dark-500 text-xs mt-1">ft/s at t = {time.toFixed(1)}</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Difference</div>
          <div className="text-primary-400 font-mono text-xl">
            {Math.abs(avgVelocity - instVelocity).toFixed(1)}
          </div>
          <div className="text-dark-500 text-xs mt-1">ft/s</div>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">Physical Meaning:</span>{' '}
          For a falling object, s(t) = 16t² gives position in feet after t seconds.
          <span className="text-amber-400"> Average velocity</span> = Δs/Δt tells us speed over an interval.
          As Δt → 0, average velocity → <span className="text-emerald-400">instantaneous velocity</span> = 32t ft/s.
          This is what your speedometer measures!
        </p>
      </div>
    </div>
  );
}
