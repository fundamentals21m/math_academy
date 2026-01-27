import { useState } from 'react';

interface Props {
  className?: string;
}

export default function RandomWalkSimulator({ className = '' }: Props) {
  const [volatility, setVolatility] = useState(20);
  const [drift, setDrift] = useState(5);
  const [numPaths, setNumPaths] = useState(5);
  const [paths, setPaths] = useState<number[][]>([]);

  const days = 252;
  const initialPrice = 100;

  const generatePaths = () => {
    const newPaths: number[][] = [];

    for (let p = 0; p < numPaths; p++) {
      const path: number[] = [initialPrice];
      let price = initialPrice;

      for (let d = 1; d <= days; d++) {
        const dailyDrift = drift / 100 / 252;
        const dailyVol = volatility / 100 / Math.sqrt(252);
        const randomShock = (Math.random() - 0.5) * 2 * Math.sqrt(3); // Uniform approx of normal
        const logReturn = dailyDrift + dailyVol * randomShock;
        price = price * Math.exp(logReturn);
        path.push(price);
      }

      newPaths.push(path);
    }

    setPaths(newPaths);
  };

  const allPrices = paths.flat();
  const minPrice = allPrices.length > 0 ? Math.min(...allPrices) : 50;
  const maxPrice = allPrices.length > 0 ? Math.max(...allPrices) : 150;
  const range = maxPrice - minPrice || 1;

  const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'];

  // Calculate statistics
  const finalPrices = paths.map(p => p[p.length - 1]);
  const avgFinal = finalPrices.length > 0 ? finalPrices.reduce((a, b) => a + b, 0) / finalPrices.length : 0;
  const maxFinal = finalPrices.length > 0 ? Math.max(...finalPrices) : 0;
  const minFinal = finalPrices.length > 0 ? Math.min(...finalPrices) : 0;

  // Theoretical expectation
  const theoreticalFinal = initialPrice * Math.exp(drift / 100);

  return (
    <div className={`bg-dark-800 rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Random Walk Simulator (GBM)</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-1">Volatility: {volatility}%</label>
          <input
            type="range"
            min="5"
            max="50"
            value={volatility}
            onChange={(e) => setVolatility(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Drift: {drift}%</label>
          <input
            type="range"
            min="-20"
            max="30"
            value={drift}
            onChange={(e) => setDrift(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Paths: {numPaths}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={numPaths}
            onChange={(e) => setNumPaths(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={generatePaths}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded px-4 py-2"
          >
            Simulate 1 Year
          </button>
        </div>
      </div>

      <div className="relative h-64 bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          {/* Y-axis labels */}
          <text x="25" y="25" fill="#6b7280" fontSize="8" textAnchor="end">{maxPrice.toFixed(0)}</text>
          <text x="25" y="180" fill="#6b7280" fontSize="8" textAnchor="end">{minPrice.toFixed(0)}</text>

          {/* Starting price line */}
          <line
            x1="30"
            y1={180 - ((initialPrice - minPrice) / range) * 160}
            x2="390"
            y2={180 - ((initialPrice - minPrice) / range) * 160}
            stroke="#6b7280"
            strokeWidth="1"
            strokeDasharray="4"
          />

          {/* Price paths */}
          {paths.map((path, pathIndex) => (
            <path
              key={pathIndex}
              d={path.map((price, i) => {
                const x = 30 + (i / days) * 360;
                const y = 180 - ((price - minPrice) / range) * 160;
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
              }).join(' ')}
              fill="none"
              stroke={colors[pathIndex % colors.length]}
              strokeWidth="1.5"
              opacity="0.8"
            />
          ))}

          {/* X-axis label */}
          <text x="210" y="195" fill="#9ca3af" fontSize="10" textAnchor="middle">Trading Days (252 = 1 Year)</text>
        </svg>
      </div>

      {paths.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-dark-700 rounded p-3">
            <div className="text-dark-400 text-sm">Start Price</div>
            <div className="text-dark-100 font-semibold">${initialPrice.toFixed(2)}</div>
          </div>
          <div className="bg-dark-700 rounded p-3">
            <div className="text-dark-400 text-sm">Avg Final</div>
            <div className="text-dark-100 font-semibold">${avgFinal.toFixed(2)}</div>
          </div>
          <div className="bg-dark-700 rounded p-3">
            <div className="text-dark-400 text-sm">Range</div>
            <div className="text-dark-100 font-semibold">${minFinal.toFixed(0)} - ${maxFinal.toFixed(0)}</div>
          </div>
          <div className="bg-dark-700 rounded p-3">
            <div className="text-dark-400 text-sm">Theoretical E[S]</div>
            <div className="text-emerald-400 font-semibold">${theoreticalFinal.toFixed(2)}</div>
          </div>
        </div>
      )}

      <div className="mt-4 text-sm text-dark-400">
        Simulates Geometric Brownian Motion: dS = μSdt + σSdW where μ = drift, σ = volatility
      </div>
    </div>
  );
}
