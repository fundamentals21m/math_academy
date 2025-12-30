import { useState, useEffect } from 'react';

export function TimeDilationVisualizer() {
  const [velocity, setVelocity] = useState(0.5); // As fraction of c
  const [isAnimating, setIsAnimating] = useState(false);
  const [earthTime, setEarthTime] = useState(0);

  const c = 1; // Speed of light = 1 (normalized)
  const gamma = 1 / Math.sqrt(1 - (velocity * velocity) / (c * c));
  const shipTime = earthTime / gamma;

  // Animation
  useEffect(() => {
    if (isAnimating) {
      const timer = setInterval(() => {
        setEarthTime((t) => t + 0.1);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isAnimating]);

  // SVG dimensions
  const width = 400;
  const height = 200;

  // Clock positions
  const earthClockX = 100;
  const shipClockX = 300;
  const clockY = 100;
  const clockRadius = 50;

  // Calculate clock hand angles (one rotation = 10 time units)
  const earthAngle = (earthTime / 10) * 360;
  const shipAngle = (shipTime / 10) * 360;

  const handX = (cx: number, angle: number) => cx + Math.sin((angle * Math.PI) / 180) * (clockRadius - 10);
  const handY = (cy: number, angle: number) => cy - Math.cos((angle * Math.PI) / 180) * (clockRadius - 10);

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Time Dilation Explorer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Earth clock */}
            <circle
              cx={earthClockX}
              cy={clockY}
              r={clockRadius}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />
            <line
              x1={earthClockX}
              y1={clockY}
              x2={handX(earthClockX, earthAngle)}
              y2={handY(clockY, earthAngle)}
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx={earthClockX} cy={clockY} r="4" fill="#3b82f6" />
            <text x={earthClockX} y={clockY + clockRadius + 25} fill="#3b82f6" fontSize="14" textAnchor="middle">
              Earth Clock
            </text>
            <text x={earthClockX} y={clockY + clockRadius + 42} fill="#6b7280" fontSize="12" textAnchor="middle">
              t = {earthTime.toFixed(1)} years
            </text>

            {/* Spaceship clock */}
            <circle
              cx={shipClockX}
              cy={clockY}
              r={clockRadius}
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
            />
            <line
              x1={shipClockX}
              y1={clockY}
              x2={handX(shipClockX, shipAngle)}
              y2={handY(clockY, shipAngle)}
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx={shipClockX} cy={clockY} r="4" fill="#10b981" />
            <text x={shipClockX} y={clockY + clockRadius + 25} fill="#10b981" fontSize="14" textAnchor="middle">
              Ship Clock
            </text>
            <text x={shipClockX} y={clockY + clockRadius + 42} fill="#6b7280" fontSize="12" textAnchor="middle">
              t' = {shipTime.toFixed(1)} years
            </text>

            {/* Spaceship icon */}
            <text x={shipClockX} y={clockY - clockRadius - 10} fontSize="24" textAnchor="middle">
              🚀
            </text>
            <text x={earthClockX} y={clockY - clockRadius - 10} fontSize="24" textAnchor="middle">
              🌍
            </text>
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Velocity: {(velocity * 100).toFixed(0)}% of light speed (c)
            </label>
            <input
              type="range"
              min="0"
              max="0.99"
              step="0.01"
              value={velocity}
              onChange={(e) => setVelocity(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsAnimating(!isAnimating)}
              className="px-4 py-2 bg-primary-500 text-white rounded"
            >
              {isAnimating ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={() => {
                setIsAnimating(false);
                setEarthTime(0);
              }}
              className="px-4 py-2 bg-dark-700 text-dark-300 rounded"
            >
              Reset
            </button>
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-primary-400">Lorentz Factor (γ):</span> {gamma.toFixed(3)}
            </div>
            <div className="text-dark-200">
              <span className="text-blue-400">Earth time:</span> {earthTime.toFixed(2)} years
            </div>
            <div className="text-dark-200">
              <span className="text-emerald-400">Ship time:</span> {shipTime.toFixed(2)} years
            </div>
            <div className="border-t border-dark-600 pt-2 text-dark-200">
              <span className="text-amber-400">Formula:</span> t' = t / γ = t × √(1 - v²/c²)
            </div>
            <div className="text-dark-400 text-xs">
              At {(velocity * 100).toFixed(0)}% light speed, 10 Earth years = {(10 / gamma).toFixed(1)} ship years
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
