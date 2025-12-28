import { useState, useEffect, useMemo } from 'react';

export function PhysicsCalculus() {
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const width = 600;
  const height = 500;
  const margin = { top: 30, right: 30, bottom: 40, left: 60 };
  const plotWidth = width - margin.left - margin.right;
  const panelHeight = (height - margin.top - margin.bottom - 60) / 3;

  // Physics: falling object with initial velocity
  const g = 10; // gravity m/s²
  const v0 = 20; // initial velocity up
  const s0 = 0; // initial position

  // s(t) = s0 + v0*t - ½gt²
  const position = (t: number) => s0 + v0 * t - 0.5 * g * t * t;
  // v(t) = v0 - gt
  const velocity = (t: number) => v0 - g * t;
  // a(t) = -g
  const acceleration = () => -g;

  const maxTime = 4;

  // Animation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTime((t) => {
          if (t >= maxTime) {
            setIsPlaying(false);
            return maxTime;
          }
          return t + 0.03;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Coordinate transforms
  const tMin = 0, tMax = 4;
  const toSvgX = (t: number) => margin.left + ((t - tMin) / (tMax - tMin)) * plotWidth;

  // Panel 1: Position (0 to 25m)
  const sMin = -10, sMax = 25;
  const toSvgYs = (s: number) => margin.top + panelHeight - ((s - sMin) / (sMax - sMin)) * panelHeight;

  // Panel 2: Velocity (-25 to 25 m/s)
  const vMin = -25, vMax = 25;
  const panel2Top = margin.top + panelHeight + 20;
  const toSvgYv = (v: number) => panel2Top + panelHeight - ((v - vMin) / (vMax - vMin)) * panelHeight;

  // Panel 3: Acceleration (-15 to 5 m/s²)
  const aMin = -15, aMax = 5;
  const panel3Top = panel2Top + panelHeight + 20;
  const toSvgYa = (a: number) => panel3Top + panelHeight - ((a - aMin) / (aMax - aMin)) * panelHeight;

  // Generate curves
  const sCurve = useMemo(() => {
    const points: string[] = [];
    for (let t = tMin; t <= tMax; t += 0.05) {
      const s = position(t);
      if (s >= sMin && s <= sMax) {
        points.push(`${toSvgX(t)},${toSvgYs(s)}`);
      }
    }
    return points.join(' ');
  }, []);

  const vCurve = useMemo(() => {
    const points: string[] = [];
    for (let t = tMin; t <= tMax; t += 0.05) {
      points.push(`${toSvgX(t)},${toSvgYv(velocity(t))}`);
    }
    return points.join(' ');
  }, []);

  const currentS = position(time);
  const currentV = velocity(time);
  const currentA = acceleration();

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Calculus in Physics: Position, Velocity, Acceleration
      </h4>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {
            if (time >= maxTime) setTime(0);
            setIsPlaying(!isPlaying);
          }}
          className="px-4 py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600"
        >
          {isPlaying ? 'Pause' : time >= maxTime ? 'Restart' : 'Play'}
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
      </div>

      {/* Time slider */}
      <div className="flex items-center gap-4 mb-4">
        <label className="text-dark-300 text-sm">t =</label>
        <input
          type="range"
          min="0"
          max={maxTime}
          step="0.1"
          value={time}
          onChange={(e) => {
            setTime(parseFloat(e.target.value));
            setIsPlaying(false);
          }}
          className="flex-1 accent-primary-500"
        />
        <span className="text-primary-400 font-mono w-12">{time.toFixed(1)}s</span>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* PANEL 1: Position */}
        <text x={margin.left} y={margin.top - 10} fill="#3B82F6" fontSize="12">
          Position s(t) = 20t - 5t² [meters]
        </text>

        {/* Zero line for position */}
        <line
          x1={margin.left}
          y1={toSvgYs(0)}
          x2={width - margin.right}
          y2={toSvgYs(0)}
          stroke="#4B5563"
          strokeWidth={1}
        />

        {/* Position curve */}
        <polyline points={sCurve} fill="none" stroke="#3B82F6" strokeWidth={3} />

        {/* Current position point */}
        {currentS >= sMin && currentS <= sMax && (
          <circle cx={toSvgX(time)} cy={toSvgYs(currentS)} r={6} fill="#3B82F6" />
        )}

        {/* Time vertical line */}
        <line
          x1={toSvgX(time)}
          y1={margin.top}
          x2={toSvgX(time)}
          y2={height - margin.bottom}
          stroke="#F59E0B"
          strokeWidth={1}
          strokeDasharray="4,4"
        />

        {/* PANEL 2: Velocity */}
        <text x={margin.left} y={panel2Top - 10} fill="#10B981" fontSize="12">
          Velocity v(t) = s'(t) = 20 - 10t [m/s]
        </text>

        {/* Zero line for velocity */}
        <line
          x1={margin.left}
          y1={toSvgYv(0)}
          x2={width - margin.right}
          y2={toSvgYv(0)}
          stroke="#4B5563"
          strokeWidth={1}
        />

        {/* Velocity curve */}
        <polyline points={vCurve} fill="none" stroke="#10B981" strokeWidth={3} />

        {/* Current velocity point */}
        <circle cx={toSvgX(time)} cy={toSvgYv(currentV)} r={6} fill="#10B981" />

        {/* Peak marker (v = 0) */}
        <circle cx={toSvgX(2)} cy={toSvgYv(0)} r={4} fill="#F59E0B" />
        <text x={toSvgX(2) + 8} y={toSvgYv(0) + 4} fill="#F59E0B" fontSize="10">
          peak (v=0)
        </text>

        {/* PANEL 3: Acceleration */}
        <text x={margin.left} y={panel3Top - 10} fill="#F59E0B" fontSize="12">
          Acceleration a(t) = v'(t) = -10 [m/s²]
        </text>

        {/* Zero line for acceleration */}
        <line
          x1={margin.left}
          y1={toSvgYa(0)}
          x2={width - margin.right}
          y2={toSvgYa(0)}
          stroke="#4B5563"
          strokeWidth={1}
        />

        {/* Acceleration line (constant) */}
        <line
          x1={toSvgX(tMin)}
          y1={toSvgYa(-g)}
          x2={toSvgX(tMax)}
          y2={toSvgYa(-g)}
          stroke="#F59E0B"
          strokeWidth={3}
        />

        {/* Current acceleration point */}
        <circle cx={toSvgX(time)} cy={toSvgYa(currentA)} r={6} fill="#F59E0B" />

        {/* X-axis labels */}
        {[1, 2, 3, 4].map((t) => (
          <text
            key={t}
            x={toSvgX(t)}
            y={height - 10}
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="11"
          >
            {t}s
          </text>
        ))}
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Position s(t)</div>
          <div className="text-blue-400 font-mono text-xl">{currentS.toFixed(1)} m</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Velocity v(t) = s'(t)</div>
          <div className={`font-mono text-xl ${currentV >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {currentV.toFixed(1)} m/s
          </div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Acceleration a = v'(t)</div>
          <div className="text-amber-400 font-mono text-xl">{currentA.toFixed(1)} m/s²</div>
        </div>
      </div>

      {/* Relationships */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">Calculus Connections:</span>{' '}
          <span className="text-emerald-400">Velocity</span> is the derivative of position (v = ds/dt).
          <span className="text-amber-400"> Acceleration</span> is the derivative of velocity (a = dv/dt).
          Conversely, position is the integral of velocity, and velocity is the integral of acceleration.
          This is calculus in action!
        </p>
      </div>
    </div>
  );
}
