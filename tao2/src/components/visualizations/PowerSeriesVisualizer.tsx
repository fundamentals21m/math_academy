import { useState, useMemo } from 'react';

type SeriesType = 'geometric' | 'exp' | 'ln' | 'sin';

export function PowerSeriesVisualizer() {
  const [seriesType, setSeriesType] = useState<SeriesType>('geometric');
  const [numTerms, setNumTerms] = useState(10);
  const [x, setX] = useState(0.5);

  const width = 400;
  const height = 250;
  const padding = 40;

  const { partialSums, exactValue, radius, xRange } = useMemo(() => {
    const sums: number[] = [];
    let sum = 0;
    let exact: number;
    let R: number;
    let range: [number, number];

    switch (seriesType) {
      case 'geometric':
        R = 1;
        range = [-0.9, 0.9];
        exact = 1 / (1 - x);
        for (let n = 0; n < numTerms; n++) {
          sum += Math.pow(x, n);
          sums.push(sum);
        }
        break;
      case 'exp':
        R = Infinity;
        range = [-2, 2];
        exact = Math.exp(x);
        let factorial = 1;
        for (let n = 0; n < numTerms; n++) {
          if (n > 0) factorial *= n;
          sum += Math.pow(x, n) / factorial;
          sums.push(sum);
        }
        break;
      case 'ln':
        R = 1;
        range = [-0.9, 0.9];
        exact = Math.log(1 + x);
        for (let n = 1; n <= numTerms; n++) {
          sum += Math.pow(-1, n + 1) * Math.pow(x, n) / n;
          sums.push(sum);
        }
        break;
      case 'sin':
        R = Infinity;
        range = [-3, 3];
        exact = Math.sin(x);
        let fact = 1;
        for (let n = 0; n < numTerms; n++) {
          const k = 2 * n + 1;
          if (n > 0) fact *= (2 * n) * (2 * n + 1);
          sum += Math.pow(-1, n) * Math.pow(x, k) / fact;
          sums.push(sum);
        }
        break;
      default:
        R = 1;
        range = [-1, 1];
        exact = 0;
    }

    return { partialSums: sums, exactValue: exact, radius: R, xRange: range };
  }, [seriesType, numTerms, x]);

  const minY = Math.min(...partialSums, exactValue) - 0.5;
  const maxY = Math.max(...partialSums, exactValue) + 0.5;

  const scaleX = (n: number) => padding + (n / (numTerms - 1)) * (width - 2 * padding);
  const scaleY = (y: number) => {
    const clamped = Math.max(minY, Math.min(maxY, y));
    return height - padding - ((clamped - minY) / (maxY - minY)) * (height - 2 * padding);
  };

  return (
    <div className="p-4 bg-dark-800 rounded-lg">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Power Series Convergence</h3>

      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">Series</label>
          <select
            value={seriesType}
            onChange={(e) => setSeriesType(e.target.value as SeriesType)}
            className="px-3 py-2 bg-dark-700 text-dark-100 rounded border border-dark-600"
          >
            <option value="geometric">1/(1-x) = Σxⁿ</option>
            <option value="exp">eˣ = Σxⁿ/n!</option>
            <option value="ln">ln(1+x) = Σ(-1)ⁿ⁺¹xⁿ/n</option>
            <option value="sin">sin(x) = Σ(-1)ⁿx^(2n+1)/(2n+1)!</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">x = {x.toFixed(2)}</label>
          <input
            type="range"
            min={xRange[0]}
            max={xRange[1]}
            step="0.1"
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
            className="w-24"
          />
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">Terms: {numTerms}</label>
          <input
            type="range"
            min="3"
            max="20"
            value={numTerms}
            onChange={(e) => setNumTerms(parseInt(e.target.value))}
            className="w-24"
          />
        </div>
      </div>

      <svg width={width} height={height} className="bg-dark-900 rounded">
        {/* Exact value line */}
        <line
          x1={padding}
          y1={scaleY(exactValue)}
          x2={width - padding}
          y2={scaleY(exactValue)}
          stroke="#22c55e"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        {/* Partial sums */}
        {partialSums.map((sum, i) => (
          <circle
            key={i}
            cx={scaleX(i)}
            cy={scaleY(sum)}
            r={4}
            fill="#3b82f6"
          />
        ))}

        {/* Connect partial sums */}
        {partialSums.length > 1 && (
          <polyline
            points={partialSums.map((sum, i) => `${scaleX(i)},${scaleY(sum)}`).join(' ')}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1"
            opacity={0.5}
          />
        )}

        {/* Axes */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#6b7280" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#6b7280" />

        <text x={width - padding + 5} y={height - padding + 5} fill="#9ca3af" fontSize="12">n</text>
        <text x={padding - 25} y={padding - 5} fill="#9ca3af" fontSize="12">Sₙ</text>
      </svg>

      <div className="mt-4 text-sm text-dark-400">
        <p>Radius of convergence: R = {radius === Infinity ? '∞' : radius}</p>
        <p><span className="text-green-400">Green line</span>: Exact value = {exactValue.toFixed(4)}</p>
        <p><span className="text-blue-400">Blue points</span>: Partial sums Sₙ = {partialSums[partialSums.length - 1]?.toFixed(4)}</p>
      </div>
    </div>
  );
}
