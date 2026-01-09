import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function EulerIdentity({ className = '' }: Props) {
  const [theta, setTheta] = useState(Math.PI);
  const [showComponents, setShowComponents] = useState(true);
  const [animating, setAnimating] = useState(false);

  // e^(iθ) = cos(θ) + i·sin(θ)
  const cosTheta = Math.cos(theta);
  const sinTheta = Math.sin(theta);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const cx = 200;
  const cy = 200;
  const radius = 140;

  // Point on the unit circle
  const px = cx + radius * cosTheta;
  const py = cy - radius * sinTheta;

  // Generate spiral path for e^(iθ) as θ goes from 0 to current value
  const spiralPath = useMemo(() => {
    const points: string[] = [];
    const steps = 100;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * theta;
      const x = cx + radius * Math.cos(t);
      const y = cy - radius * Math.sin(t);
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    return points.join(' ');
  }, [theta, cx, cy, radius]);

  // Animation
  const animateToValue = (target: number) => {
    setAnimating(true);
    const start = theta;
    const startTime = Date.now();
    const duration = 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out
      setTheta(start + (target - start) * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimating(false);
      }
    };
    requestAnimationFrame(animate);
  };

  // Famous values
  const famousValues = [
    { label: '0', value: 0 },
    { label: 'π/6', value: Math.PI / 6 },
    { label: 'π/4', value: Math.PI / 4 },
    { label: 'π/3', value: Math.PI / 3 },
    { label: 'π/2', value: Math.PI / 2 },
    { label: 'π', value: Math.PI },
    { label: '2π', value: 2 * Math.PI },
  ];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Euler's Identity</h3>

      <p className="text-dark-300 mb-6">
        <span className="font-mono text-xl text-orange-400">e^(iπ) + 1 = 0</span>
        <br />
        <span className="text-sm">The most beautiful equation in mathematics, connecting e, i, π, 1, and 0.</span>
      </p>

      {/* Quick value buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {famousValues.map(({ label, value }) => (
          <button
            key={label}
            onClick={() => !animating && animateToValue(value)}
            disabled={animating}
            className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-colors ${
              Math.abs(theta - value) < 0.01
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            θ = {label}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="mb-4">
        <label className="text-blue-400 text-sm">
          θ = {(theta / Math.PI).toFixed(3)}π = {theta.toFixed(4)} rad
        </label>
        <input
          type="range"
          min="0"
          max={2 * Math.PI}
          step="0.01"
          value={theta}
          onChange={(e) => setTheta(parseFloat(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Toggle */}
      <button
        onClick={() => setShowComponents(!showComponents)}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium mb-4 transition-colors ${
          showComponents ? 'bg-emerald-500 text-white' : 'bg-dark-700 text-dark-300'
        }`}
      >
        Show Components
      </button>

      {/* Visualization */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          <line x1={0} y1={cy} x2={width} y2={cy} stroke="#4b5563" strokeWidth={1} />
          <line x1={cx} y1={0} x2={cx} y2={height} stroke="#4b5563" strokeWidth={1} />

          {/* Unit circle */}
          <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#6b7280" strokeWidth={2} />

          {/* Arc path showing angle */}
          <path d={spiralPath} fill="none" stroke="#f97316" strokeWidth={3} opacity={0.7} />

          {/* Components */}
          {showComponents && (
            <>
              {/* Real part (cos) */}
              <line x1={cx} y1={cy} x2={px} y2={cy} stroke="#3b82f6" strokeWidth={3} />
              <text x={(cx + px) / 2} y={cy + 20} fill="#3b82f6" fontSize="12" textAnchor="middle">
                cos(θ)
              </text>

              {/* Imaginary part (sin) */}
              <line x1={px} y1={cy} x2={px} y2={py} stroke="#10b981" strokeWidth={3} />
              <text x={px + 15} y={(cy + py) / 2} fill="#10b981" fontSize="12">
                sin(θ)
              </text>

              {/* Dashed projections */}
              <line x1={px} y1={py} x2={px} y2={cy} stroke="#10b981" strokeWidth={1} strokeDasharray="4 4" opacity={0.5} />
              <line x1={px} y1={py} x2={cx} y2={py} stroke="#3b82f6" strokeWidth={1} strokeDasharray="4 4" opacity={0.5} />
            </>
          )}

          {/* Radius vector */}
          <line x1={cx} y1={cy} x2={px} y2={py} stroke="#f97316" strokeWidth={2} />

          {/* Point on circle */}
          <circle cx={px} cy={py} r={8} fill="#f97316" />

          {/* Angle arc */}
          {theta > 0 && theta < 2 * Math.PI && (
            <path
              d={`M ${cx + 30} ${cy} A 30 30 0 ${theta > Math.PI ? 1 : 0} 0 ${cx + 30 * cosTheta} ${cy - 30 * sinTheta}`}
              fill="none"
              stroke="#f97316"
              strokeWidth={2}
            />
          )}

          {/* Labels */}
          <text x={cx + radius + 15} y={cy + 5} fill="#6b7280" fontSize="12">1 (Re)</text>
          <text x={cx + 5} y={cy - radius - 8} fill="#6b7280" fontSize="12">i (Im)</text>
          <text x={cx - radius - 20} y={cy + 5} fill="#6b7280" fontSize="12">-1</text>
          <text x={cx + 5} y={cy + radius + 18} fill="#6b7280" fontSize="12">-i</text>

          {/* Point label */}
          <text x={px + 12} y={py - 12} fill="#f97316" fontSize="11" fontWeight="bold">
            e^(i·{(theta / Math.PI).toFixed(2)}π)
          </text>
        </svg>
      </div>

      {/* Results */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Real part</p>
          <p className="text-blue-400 font-mono">cos(θ) = {cosTheta.toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Imaginary part</p>
          <p className="text-emerald-400 font-mono">sin(θ) = {sinTheta.toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Result</p>
          <p className="text-orange-400 font-mono text-sm">
            {cosTheta.toFixed(3)} {sinTheta >= 0 ? '+' : ''} {sinTheta.toFixed(3)}i
          </p>
        </div>
      </div>

      {/* The famous identity */}
      {Math.abs(theta - Math.PI) < 0.05 && (
        <div className="mt-4 p-4 rounded-xl bg-orange-500/20 border border-orange-500/50">
          <p className="text-orange-400 font-bold text-center text-lg">
            e^(iπ) = -1, therefore e^(iπ) + 1 = 0
          </p>
          <p className="text-dark-300 text-sm text-center mt-2">
            One equation uniting the five most important numbers in mathematics!
          </p>
        </div>
      )}

      {/* General formula */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Euler's Formula</p>
        <p className="text-dark-100 font-mono text-lg mt-1">e^(iθ) = cos(θ) + i·sin(θ)</p>
        <p className="text-dark-400 text-sm mt-2">
          This formula reveals that complex exponentials trace out the unit circle,
          unifying algebra, geometry, and analysis.
        </p>
      </div>
    </div>
  );
}
