import { useState, useMemo } from 'react';

export function UniformConvergenceVisualizer() {
  const [n, setN] = useState(5);
  const [showLimit, setShowLimit] = useState(true);

  const width = 400;
  const height = 250;
  const padding = 40;

  // f_n(x) = x^n on [0, 1]
  // Pointwise limit: f(x) = 0 for x in [0,1), f(1) = 1

  const numPoints = 100;

  const fnPoints = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= numPoints; i++) {
      const x = i / numPoints;
      const y = Math.pow(x, n);
      const px = padding + x * (width - 2 * padding);
      const py = height - padding - y * (height - 2 * padding);
      points.push(`${px},${py}`);
    }
    return points.join(' ');
  }, [n]);

  const limitPoints = useMemo(() => {
    const points: string[] = [];
    // f(x) = 0 for x in [0, 1)
    for (let i = 0; i < numPoints; i++) {
      const x = i / numPoints;
      const y = 0;
      const px = padding + x * (width - 2 * padding);
      const py = height - padding - y * (height - 2 * padding);
      points.push(`${px},${py}`);
    }
    return points.join(' ');
  }, []);

  const scaleX = (x: number) => padding + x * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - y * (height - 2 * padding);

  // Find x where f_n(x) = 0.5 to show convergence rate
  const halfPoint = Math.pow(0.5, 1 / n);

  return (
    <div className="p-4 bg-dark-800 rounded-lg">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Uniform vs Pointwise Convergence</h3>

      <div className="flex gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">n = {n}</label>
          <input
            type="range"
            min="1"
            max="20"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            className="w-32"
          />
        </div>

        <label className="flex items-center gap-2 text-dark-300">
          <input
            type="checkbox"
            checked={showLimit}
            onChange={(e) => setShowLimit(e.target.checked)}
            className="rounded"
          />
          Show limit function
        </label>
      </div>

      <svg width={width} height={height} className="bg-dark-900 rounded">
        {/* Grid */}
        <line x1={scaleX(0)} y1={scaleY(0)} x2={scaleX(1)} y2={scaleY(0)} stroke="#374151" />
        <line x1={scaleX(0)} y1={scaleY(0)} x2={scaleX(0)} y2={scaleY(1)} stroke="#374151" />
        <line x1={scaleX(1)} y1={scaleY(0)} x2={scaleX(1)} y2={scaleY(1)} stroke="#374151" strokeDasharray="3,3" />

        {/* Limit function (discontinuous) */}
        {showLimit && (
          <>
            <polyline
              points={limitPoints}
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <circle cx={scaleX(1)} cy={scaleY(1)} r={5} fill="#22c55e" />
            <circle cx={scaleX(1)} cy={scaleY(0)} r={5} fill="none" stroke="#22c55e" strokeWidth="2" />
          </>
        )}

        {/* f_n(x) = x^n */}
        <polyline points={fnPoints} fill="none" stroke="#3b82f6" strokeWidth="2" />

        {/* Show sup|f_n - f| */}
        <line
          x1={scaleX(halfPoint)}
          y1={scaleY(0)}
          x2={scaleX(halfPoint)}
          y2={scaleY(0.5)}
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="3,3"
        />
        <text x={scaleX(halfPoint) + 5} y={scaleY(0.25)} fill="#ef4444" fontSize="10">
          sup|fₙ-f|
        </text>

        {/* Labels */}
        <text x={scaleX(0.5)} y={height - 10} fill="#9ca3af" fontSize="12" textAnchor="middle">x</text>
        <text x={15} y={scaleY(0.5)} fill="#9ca3af" fontSize="12">y</text>
        <text x={scaleX(0)} y={height - 10} fill="#9ca3af" fontSize="10">0</text>
        <text x={scaleX(1)} y={height - 10} fill="#9ca3af" fontSize="10">1</text>
      </svg>

      <div className="mt-4 text-sm text-dark-400">
        <p><span className="text-blue-400">Blue</span>: fₙ(x) = x^{n}</p>
        <p><span className="text-green-400">Green</span>: Pointwise limit f(x) = 0 for x∈[0,1), f(1) = 1</p>
        <p className="mt-2">
          The limit is discontinuous even though each fₙ is continuous.
          This proves convergence is <strong>not uniform</strong>.
        </p>
      </div>
    </div>
  );
}
