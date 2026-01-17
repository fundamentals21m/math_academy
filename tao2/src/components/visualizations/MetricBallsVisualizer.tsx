import { useState } from 'react';

type MetricType = 'euclidean' | 'taxicab' | 'sup';

export function MetricBallsVisualizer() {
  const [metric, setMetric] = useState<MetricType>('euclidean');
  const [radius, setRadius] = useState(0.5);

  const size = 300;
  const scale = size / 2.5;
  const center = size / 2;

  // Generate points for the ball boundary
  const generateBallPoints = () => {
    const points: string[] = [];
    const numPoints = 200;

    for (let i = 0; i <= numPoints; i++) {
      const theta = (2 * Math.PI * i) / numPoints;
      let x: number, y: number;

      if (metric === 'euclidean') {
        // Circle: x² + y² = r²
        x = radius * Math.cos(theta);
        y = radius * Math.sin(theta);
      } else if (metric === 'taxicab') {
        // Diamond: |x| + |y| = r
        const t = theta / (Math.PI / 2);
        const segment = Math.floor(t) % 4;
        const frac = t - Math.floor(t);

        if (segment === 0) {
          x = radius * (1 - frac);
          y = radius * frac;
        } else if (segment === 1) {
          x = -radius * frac;
          y = radius * (1 - frac);
        } else if (segment === 2) {
          x = -radius * (1 - frac);
          y = -radius * frac;
        } else {
          x = radius * frac;
          y = -radius * (1 - frac);
        }
      } else {
        // Square: max(|x|, |y|) = r
        const t = theta / (Math.PI / 2);
        const segment = Math.floor(t) % 4;
        const frac = t - Math.floor(t);

        if (segment === 0) {
          x = radius;
          y = radius * (2 * frac - 1);
        } else if (segment === 1) {
          x = radius * (1 - 2 * frac);
          y = radius;
        } else if (segment === 2) {
          x = -radius;
          y = radius * (1 - 2 * frac);
        } else {
          x = radius * (2 * frac - 1);
          y = -radius;
        }
      }

      points.push(`${center + x * scale},${center - y * scale}`);
    }

    return points.join(' ');
  };

  return (
    <div className="p-4 bg-dark-800 rounded-lg">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Metric Balls in R²</h3>

      <div className="flex gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">Metric</label>
          <select
            value={metric}
            onChange={(e) => setMetric(e.target.value as MetricType)}
            className="px-3 py-2 bg-dark-700 text-dark-100 rounded border border-dark-600"
          >
            <option value="euclidean">Euclidean (l²)</option>
            <option value="taxicab">Taxicab (l¹)</option>
            <option value="sup">Sup norm (l∞)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">Radius: {radius.toFixed(2)}</label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={radius}
            onChange={(e) => setRadius(parseFloat(e.target.value))}
            className="w-32"
          />
        </div>
      </div>

      <svg width={size} height={size} className="bg-dark-900 rounded">
        {/* Grid lines */}
        <line x1={center} y1={0} x2={center} y2={size} stroke="#374151" strokeWidth="1" />
        <line x1={0} y1={center} x2={size} y2={center} stroke="#374151" strokeWidth="1" />

        {/* Ball */}
        <polygon
          points={generateBallPoints()}
          fill="rgba(59, 130, 246, 0.3)"
          stroke="#3b82f6"
          strokeWidth="2"
        />

        {/* Center point */}
        <circle cx={center} cy={center} r={4} fill="#ef4444" />

        {/* Axis labels */}
        <text x={size - 15} y={center - 5} fill="#9ca3af" fontSize="12">x</text>
        <text x={center + 5} y={15} fill="#9ca3af" fontSize="12">y</text>
      </svg>

      <p className="text-sm text-dark-400 mt-4">
        {metric === 'euclidean' && 'Euclidean ball: {(x,y) : √(x² + y²) < r} - a circle'}
        {metric === 'taxicab' && 'Taxicab ball: {(x,y) : |x| + |y| < r} - a diamond'}
        {metric === 'sup' && 'Sup norm ball: {(x,y) : max(|x|, |y|) < r} - a square'}
      </p>
    </div>
  );
}
