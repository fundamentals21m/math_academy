import { useState, useEffect } from 'react';

export function HalfLifeVisualizer() {
  const [initialAmount] = useState(100);
  const [halfLife, setHalfLife] = useState(1600);
  const [currentTime, setCurrentTime] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const maxTime = halfLife * 5;
  const currentAmount = initialAmount * Math.pow(0.5, currentTime / halfLife);
  const halfLivesElapsed = currentTime / halfLife;

  // Animation
  useEffect(() => {
    if (isAnimating && currentTime < maxTime) {
      const timer = setTimeout(() => {
        setCurrentTime((t) => Math.min(t + maxTime / 100, maxTime));
      }, 50);
      return () => clearTimeout(timer);
    } else if (currentTime >= maxTime) {
      queueMicrotask(() => setIsAnimating(false));
    }
  }, [isAnimating, currentTime, maxTime]);

  // Generate decay curve data
  const data: { time: number; amount: number }[] = [];
  for (let t = 0; t <= maxTime; t += maxTime / 50) {
    data.push({
      time: t,
      amount: initialAmount * Math.pow(0.5, t / halfLife),
    });
  }

  // SVG dimensions
  const width = 400;
  const height = 250;
  const padding = 50;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const scaleX = graphWidth / maxTime;
  const scaleY = graphHeight / initialAmount;

  const toX = (time: number) => padding + time * scaleX;
  const toY = (amount: number) => height - padding - amount * scaleY;

  const curvePoints = data.map(d => `${toX(d.time)},${toY(d.amount)}`).join(' ');

  // Generate particle positions for visual representation
  const numParticles = Math.round(currentAmount);
  const particles: { x: number; y: number }[] = [];
  for (let i = 0; i < Math.min(numParticles, 100); i++) {
    // Use deterministic positions based on index
    const row = Math.floor(i / 10);
    const col = i % 10;
    particles.push({
      x: 30 + col * 12,
      y: 20 + row * 12,
    });
  }

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Radioactive Decay & Half-Life
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Grid lines at half-life intervals */}
            {[1, 2, 3, 4, 5].map((n) => (
              <line
                key={n}
                x1={toX(n * halfLife)}
                y1={padding}
                x2={toX(n * halfLife)}
                y2={height - padding}
                stroke="#374151"
                strokeWidth="0.5"
                strokeDasharray="3,3"
              />
            ))}

            {/* Horizontal lines at 50%, 25%, 12.5% */}
            {[0.5, 0.25, 0.125].map((frac) => (
              <g key={frac}>
                <line
                  x1={padding}
                  y1={toY(initialAmount * frac)}
                  x2={width - padding}
                  y2={toY(initialAmount * frac)}
                  stroke="#374151"
                  strokeWidth="0.5"
                  strokeDasharray="3,3"
                />
                <text
                  x={padding - 5}
                  y={toY(initialAmount * frac) + 4}
                  fill="#6b7280"
                  fontSize="9"
                  textAnchor="end"
                >
                  {(frac * 100).toFixed(0)}%
                </text>
              </g>
            ))}

            {/* Axes */}
            <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#6b7280" />
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#6b7280" />

            {/* Decay curve */}
            <polyline
              points={curvePoints}
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />

            {/* Current point */}
            <circle
              cx={toX(currentTime)}
              cy={toY(currentAmount)}
              r="6"
              fill="#f59e0b"
            />

            {/* Vertical line at current time */}
            <line
              x1={toX(currentTime)}
              y1={toY(currentAmount)}
              x2={toX(currentTime)}
              y2={height - padding}
              stroke="#f59e0b"
              strokeWidth="1"
              strokeDasharray="3,3"
            />

            {/* Labels */}
            <text x={width / 2} y={height - 5} fill="#6b7280" fontSize="11" textAnchor="middle">
              Time (years)
            </text>
            <text x={padding - 5} y={toY(initialAmount) + 4} fill="#6b7280" fontSize="9" textAnchor="end">
              100%
            </text>

            {/* Half-life markers */}
            {[1, 2, 3, 4, 5].map((n) => (
              <text
                key={n}
                x={toX(n * halfLife)}
                y={height - padding + 15}
                fill="#6b7280"
                fontSize="9"
                textAnchor="middle"
              >
                {n}h
              </text>
            ))}
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Half-Life: {halfLife} years
            </label>
            <input
              type="range"
              min="100"
              max="5000"
              step="100"
              value={halfLife}
              onChange={(e) => {
                setHalfLife(Number(e.target.value));
                setCurrentTime(0);
              }}
              className="w-full"
            />
            <div className="flex gap-2 mt-1">
              <button
                onClick={() => { setHalfLife(5730); setCurrentTime(0); }}
                className="px-2 py-1 text-xs bg-dark-700 text-dark-300 rounded"
              >
                Carbon-14 (5730y)
              </button>
              <button
                onClick={() => { setHalfLife(1600); setCurrentTime(0); }}
                className="px-2 py-1 text-xs bg-dark-700 text-dark-300 rounded"
              >
                Radium (1600y)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Time Elapsed: {currentTime.toFixed(0)} years ({halfLivesElapsed.toFixed(2)} half-lives)
            </label>
            <input
              type="range"
              min="0"
              max={maxTime}
              step={maxTime / 100}
              value={currentTime}
              onChange={(e) => setCurrentTime(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setCurrentTime(0);
                setIsAnimating(true);
              }}
              className="px-4 py-2 bg-primary-500 text-white rounded"
            >
              Animate Decay
            </button>
            <button
              onClick={() => {
                setIsAnimating(false);
                setCurrentTime(0);
              }}
              className="px-4 py-2 bg-dark-700 text-dark-300 rounded"
            >
              Reset
            </button>
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-emerald-400">Initial Amount:</span> {initialAmount}g
            </div>
            <div className="text-dark-200">
              <span className="text-amber-400">Remaining:</span> {currentAmount.toFixed(2)}g ({((currentAmount / initialAmount) * 100).toFixed(1)}%)
            </div>
            <div className="text-dark-200">
              <span className="text-primary-400">Formula:</span> Q = Q₀ × (½)^(t/h)
            </div>
            <div className="text-dark-200">
              = {initialAmount} × (½)^({currentTime.toFixed(0)}/{halfLife}) = {currentAmount.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
