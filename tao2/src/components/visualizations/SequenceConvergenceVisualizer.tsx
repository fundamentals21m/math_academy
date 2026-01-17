import { useState, useMemo } from 'react';

type SequenceType = '1/n' | 'alternating' | 'geometric' | 'harmonic';

export function SequenceConvergenceVisualizer() {
  const [sequenceType, setSequenceType] = useState<SequenceType>('1/n');
  const [numTerms, setNumTerms] = useState(20);
  const [epsilon, setEpsilon] = useState(0.2);

  const width = 400;
  const height = 200;
  const padding = 40;

  const sequence = useMemo(() => {
    const terms: number[] = [];
    for (let n = 1; n <= numTerms; n++) {
      switch (sequenceType) {
        case '1/n':
          terms.push(1 / n);
          break;
        case 'alternating':
          terms.push(Math.pow(-1, n + 1) / n);
          break;
        case 'geometric':
          terms.push(Math.pow(0.8, n));
          break;
        case 'harmonic':
          // Partial sums of harmonic series (diverges)
          let sum = 0;
          for (let k = 1; k <= n; k++) sum += 1 / k;
          terms.push(sum / 3); // Scale for visualization
          break;
      }
    }
    return terms;
  }, [sequenceType, numTerms]);

  const limit = sequenceType === 'harmonic' ? null : 0;
  const minY = Math.min(...sequence, limit ?? 0) - 0.1;
  const maxY = Math.max(...sequence, limit ?? 0) + 0.1;

  const scaleX = (n: number) => padding + ((n - 1) / (numTerms - 1)) * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - ((y - minY) / (maxY - minY)) * (height - 2 * padding);

  return (
    <div className="p-4 bg-dark-800 rounded-lg">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Sequence Convergence</h3>

      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">Sequence</label>
          <select
            value={sequenceType}
            onChange={(e) => setSequenceType(e.target.value as SequenceType)}
            className="px-3 py-2 bg-dark-700 text-dark-100 rounded border border-dark-600"
          >
            <option value="1/n">1/n → 0</option>
            <option value="alternating">(-1)ⁿ/n → 0</option>
            <option value="geometric">0.8ⁿ → 0</option>
            <option value="harmonic">Σ1/k (diverges)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">Terms: {numTerms}</label>
          <input
            type="range"
            min="5"
            max="50"
            value={numTerms}
            onChange={(e) => setNumTerms(parseInt(e.target.value))}
            className="w-24"
          />
        </div>

        {limit !== null && (
          <div>
            <label className="block text-sm text-dark-300 mb-1">ε: {epsilon.toFixed(2)}</label>
            <input
              type="range"
              min="0.05"
              max="0.5"
              step="0.05"
              value={epsilon}
              onChange={(e) => setEpsilon(parseFloat(e.target.value))}
              className="w-24"
            />
          </div>
        )}
      </div>

      <svg width={width} height={height} className="bg-dark-900 rounded">
        {/* Epsilon band around limit */}
        {limit !== null && (
          <rect
            x={padding}
            y={scaleY(limit + epsilon)}
            width={width - 2 * padding}
            height={scaleY(limit - epsilon) - scaleY(limit + epsilon)}
            fill="rgba(34, 197, 94, 0.2)"
          />
        )}

        {/* Limit line */}
        {limit !== null && (
          <line
            x1={padding}
            y1={scaleY(limit)}
            x2={width - padding}
            y2={scaleY(limit)}
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        )}

        {/* Sequence points */}
        {sequence.map((y, i) => {
          const inBand = limit !== null && Math.abs(y - limit) < epsilon;
          return (
            <circle
              key={i}
              cx={scaleX(i + 1)}
              cy={scaleY(y)}
              r={4}
              fill={inBand ? '#22c55e' : '#3b82f6'}
            />
          );
        })}

        {/* Axes */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#6b7280" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#6b7280" />

        <text x={width - padding + 5} y={height - padding + 5} fill="#9ca3af" fontSize="12">n</text>
        <text x={padding - 20} y={padding - 5} fill="#9ca3af" fontSize="12">aₙ</text>
      </svg>

      <p className="text-sm text-dark-400 mt-4">
        {sequenceType !== 'harmonic'
          ? `Green band shows |aₙ - L| < ε. Points turn green when they enter the ε-neighborhood of the limit.`
          : `The harmonic series diverges - partial sums grow without bound.`}
      </p>
    </div>
  );
}
