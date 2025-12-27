import { useState, useMemo } from 'react';

/**
 * RidgeLassoPath Visualizer
 * 
 * Interactive visualization showing how coefficient values change
 * as the regularization parameter (lambda) varies.
 * 
 * Users can:
 * - Toggle between Ridge and Lasso
 * - Adjust lambda with a slider
 * - See coefficients shrink (and go to zero for Lasso)
 */
export function RidgeLassoPath() {
  const [method, setMethod] = useState<'ridge' | 'lasso'>('ridge');
  const [logLambda, setLogLambda] = useState(0); // log10(lambda)

  const lambda = Math.pow(10, logLambda);

  // Simulated coefficient paths
  // In reality these would come from actual regression
  const coefficients = useMemo(() => {
    const baseCoefs = [
      { name: 'X1', ols: 2.5, color: '#3b82f6' },
      { name: 'X2', ols: -1.8, color: '#10b981' },
      { name: 'X3', ols: 1.2, color: '#f59e0b' },
      { name: 'X4', ols: -0.6, color: '#ef4444' },
      { name: 'X5', ols: 0.3, color: '#8b5cf6' },
    ];

    return baseCoefs.map(coef => {
      let shrunkValue: number;
      
      if (method === 'ridge') {
        // Ridge: coefficients shrink but never exactly zero
        shrunkValue = coef.ols / (1 + lambda * 0.5);
      } else {
        // Lasso: soft thresholding, coefficients go to zero
        const threshold = lambda * 0.3;
        if (Math.abs(coef.ols) <= threshold) {
          shrunkValue = 0;
        } else {
          shrunkValue = coef.ols > 0 
            ? coef.ols - threshold 
            : coef.ols + threshold;
        }
      }

      return { ...coef, value: shrunkValue };
    });
  }, [method, lambda]);

  const width = 320;
  const height = 200;
  const padding = 40;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Scale for y-axis (coefficient values)
  const maxCoef = 3;
  const scaleY = (val: number) => padding + plotHeight / 2 - (val / maxCoef) * (plotHeight / 2);

  return (
    <div className="p-6 bg-dark-800/50 rounded-xl">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">
        Regularization Path
      </h3>

      <div className="flex gap-4 mb-4">
        <div>
          <label className="block text-xs text-dark-400 mb-1">Method</label>
          <div className="flex gap-1">
            <button
              onClick={() => setMethod('ridge')}
              className={`px-3 py-1 text-xs rounded-l-lg ${
                method === 'ridge' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-dark-700 text-dark-400'
              }`}
            >
              Ridge
            </button>
            <button
              onClick={() => setMethod('lasso')}
              className={`px-3 py-1 text-xs rounded-r-lg ${
                method === 'lasso' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-dark-700 text-dark-400'
              }`}
            >
              Lasso
            </button>
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-xs text-dark-400 mb-1">
            log(λ) = {logLambda.toFixed(1)} → λ = {lambda.toFixed(2)}
          </label>
          <input
            type="range"
            min="-2"
            max="3"
            step="0.1"
            value={logLambda}
            onChange={(e) => setLogLambda(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <svg width={width} height={height} className="bg-dark-900 rounded-lg">
        {/* Axes */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#4b5563"
          strokeWidth={1}
        />
        <line
          x1={padding}
          y1={padding + plotHeight / 2}
          x2={width - padding}
          y2={padding + plotHeight / 2}
          stroke="#4b5563"
          strokeWidth={1}
        />

        {/* Zero line label */}
        <text x={padding - 5} y={scaleY(0) + 4} textAnchor="end" fill="#6b7280" fontSize={10}>
          0
        </text>
        <text x={padding - 5} y={scaleY(2) + 4} textAnchor="end" fill="#6b7280" fontSize={10}>
          2
        </text>
        <text x={padding - 5} y={scaleY(-2) + 4} textAnchor="end" fill="#6b7280" fontSize={10}>
          -2
        </text>

        {/* Coefficient bars */}
        {coefficients.map((coef, idx) => {
          const barWidth = plotWidth / coefficients.length - 10;
          const x = padding + idx * (plotWidth / coefficients.length) + 5;
          const y0 = scaleY(0);
          const y = scaleY(coef.value);
          const barHeight = Math.abs(y - y0);

          return (
            <g key={coef.name}>
              <rect
                x={x}
                y={coef.value >= 0 ? y : y0}
                width={barWidth}
                height={barHeight}
                fill={coef.color}
                opacity={Math.abs(coef.value) < 0.01 ? 0.2 : 0.8}
                rx={2}
                className="transition-all duration-300"
              />
              {/* OLS reference line */}
              <line
                x1={x}
                x2={x + barWidth}
                y1={scaleY(coef.ols)}
                y2={scaleY(coef.ols)}
                stroke={coef.color}
                strokeWidth={2}
                strokeDasharray="4,2"
                opacity={0.5}
              />
              {/* Label */}
              <text
                x={x + barWidth / 2}
                y={height - padding + 15}
                textAnchor="middle"
                fill="#9ca3af"
                fontSize={10}
              >
                {coef.name}
              </text>
              {/* Value */}
              <text
                x={x + barWidth / 2}
                y={coef.value >= 0 ? y - 5 : y + barHeight + 12}
                textAnchor="middle"
                fill={coef.color}
                fontSize={9}
                fontWeight="bold"
              >
                {coef.value.toFixed(2)}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-3 flex gap-4 text-xs text-dark-500">
        <span>Bars: Regularized coefficients</span>
        <span>Dashed: OLS estimates</span>
      </div>

      <p className="mt-2 text-xs text-dark-500">
        {method === 'ridge' 
          ? 'Ridge shrinks coefficients toward zero but never exactly to zero (L2 penalty).'
          : 'Lasso can shrink coefficients exactly to zero, performing variable selection (L1 penalty).'}
      </p>
    </div>
  );
}

export default RidgeLassoPath;
