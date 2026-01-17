import { useState, useMemo } from 'react';

type WaveType = 'square' | 'sawtooth' | 'triangle';

export function FourierSeriesVisualizer() {
  const [waveType, setWaveType] = useState<WaveType>('square');
  const [numTerms, setNumTerms] = useState(5);

  const width = 450;
  const height = 250;
  const padding = 40;

  const numPoints = 200;

  const { targetWave, fourierApprox } = useMemo(() => {
    const target: number[] = [];
    const approx: number[] = [];

    for (let i = 0; i <= numPoints; i++) {
      const x = (i / numPoints) * 4 * Math.PI - 2 * Math.PI;

      // Target function
      let y: number;
      switch (waveType) {
        case 'square':
          y = Math.sin(x) >= 0 ? 1 : -1;
          break;
        case 'sawtooth':
          y = ((x % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) / Math.PI - 1;
          break;
        case 'triangle':
          const t = ((x % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
          y = t < Math.PI ? 2 * t / Math.PI - 1 : 3 - 2 * t / Math.PI;
          break;
        default:
          y = 0;
      }
      target.push(y);

      // Fourier approximation
      let sum = 0;
      for (let n = 1; n <= numTerms; n++) {
        switch (waveType) {
          case 'square':
            // Square wave: (4/π) Σ sin((2n-1)x)/(2n-1)
            if (n % 2 === 1) {
              sum += (4 / Math.PI) * Math.sin(n * x) / n;
            }
            break;
          case 'sawtooth':
            // Sawtooth: -(2/π) Σ (-1)^n sin(nx)/n
            sum += -(2 / Math.PI) * Math.pow(-1, n) * Math.sin(n * x) / n;
            break;
          case 'triangle':
            // Triangle: (8/π²) Σ (-1)^((n-1)/2) sin(nx)/n² for odd n
            if (n % 2 === 1) {
              sum += (8 / (Math.PI * Math.PI)) * Math.pow(-1, (n - 1) / 2) * Math.sin(n * x) / (n * n);
            }
            break;
        }
      }
      approx.push(sum);
    }

    return { targetWave: target, fourierApprox: approx };
  }, [waveType, numTerms]);

  const scaleX = (i: number) => padding + (i / numPoints) * (width - 2 * padding);
  const scaleY = (y: number) => height / 2 - y * (height / 2 - padding) * 0.8;

  const targetPath = targetWave.map((y, i) => `${scaleX(i)},${scaleY(y)}`).join(' ');
  const approxPath = fourierApprox.map((y, i) => `${scaleX(i)},${scaleY(y)}`).join(' ');

  return (
    <div className="p-4 bg-dark-800 rounded-lg">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Fourier Series Approximation</h3>

      <div className="flex gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">Wave</label>
          <select
            value={waveType}
            onChange={(e) => setWaveType(e.target.value as WaveType)}
            className="px-3 py-2 bg-dark-700 text-dark-100 rounded border border-dark-600"
          >
            <option value="square">Square Wave</option>
            <option value="sawtooth">Sawtooth Wave</option>
            <option value="triangle">Triangle Wave</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">Terms: {numTerms}</label>
          <input
            type="range"
            min="1"
            max="25"
            value={numTerms}
            onChange={(e) => setNumTerms(parseInt(e.target.value))}
            className="w-32"
          />
        </div>
      </div>

      <svg width={width} height={height} className="bg-dark-900 rounded">
        {/* Center line */}
        <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#374151" />

        {/* Target wave */}
        <polyline
          points={targetPath}
          fill="none"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="3,3"
        />

        {/* Fourier approximation */}
        <polyline
          points={approxPath}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        />

        {/* Labels */}
        <text x={width / 2} y={height - 10} fill="#9ca3af" fontSize="12" textAnchor="middle">x</text>
      </svg>

      <div className="mt-4 text-sm text-dark-400">
        <p><span className="text-gray-400">Gray dashed</span>: Target function</p>
        <p><span className="text-blue-400">Blue</span>: Fourier approximation with {numTerms} term(s)</p>
        <p className="mt-2">
          Notice the Gibbs phenomenon at discontinuities (overshoot of ~9%).
        </p>
      </div>
    </div>
  );
}
