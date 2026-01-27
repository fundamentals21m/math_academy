import { useState } from 'react';

interface Props {
  className?: string;
}

export default function GammaBleedCalculator({ className = '' }: Props) {
  const [spot, setSpot] = useState(100);
  const [strike, setStrike] = useState(100);
  const [daysToExpiry, setDaysToExpiry] = useState(30);
  const [volatility, setVolatility] = useState(20);
  const [position, setPosition] = useState<'long' | 'short'>('short');

  const erf = (x: number) => {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    const t = 1 / (1 + p * x);
    const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
  };

  const normPdf = (x: number) => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);

  const calculateGamma = (s: number, days: number) => {
    const t = days / 365;
    const vol = volatility / 100;
    if (t <= 0) return 0;
    const d1 = (Math.log(s / strike) + (0.05 + vol * vol / 2) * t) / (vol * Math.sqrt(t));
    return normPdf(d1) / (s * vol * Math.sqrt(t));
  };

  const calculateTheta = (s: number, days: number) => {
    const t = days / 365;
    const vol = volatility / 100;
    const r = 0.05;
    if (t <= 0) return 0;
    const d1 = (Math.log(s / strike) + (r + vol * vol / 2) * t) / (vol * Math.sqrt(t));
    return -(s * normPdf(d1) * vol) / (2 * Math.sqrt(t)) / 365;
  };

  // Generate time series of gamma decay
  const gammaOverTime = Array.from({ length: daysToExpiry }, (_, i) => {
    const daysRemaining = daysToExpiry - i;
    return {
      day: i,
      gamma: calculateGamma(spot, daysRemaining),
      theta: calculateTheta(spot, daysRemaining),
    };
  });

  const currentGamma = calculateGamma(spot, daysToExpiry);
  const currentTheta = calculateTheta(spot, daysToExpiry);

  const maxGamma = Math.max(...gammaOverTime.map(g => g.gamma));
  const minTheta = Math.min(...gammaOverTime.map(g => g.theta));

  // Daily bleed calculation
  const gammaBleed = currentGamma * spot * spot * (volatility / 100) ** 2 / 2 / 365;
  const netBleed = position === 'short' ? currentTheta - gammaBleed : gammaBleed + currentTheta;

  return (
    <div className={`bg-dark-800 rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Gamma Bleed Calculator</h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-1">Position</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value as 'long' | 'short')}
            className="w-full bg-dark-700 text-dark-100 rounded px-3 py-2"
          >
            <option value="long">Long Gamma</option>
            <option value="short">Short Gamma</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Spot: ${spot}</label>
          <input
            type="range"
            min="80"
            max="120"
            value={spot}
            onChange={(e) => setSpot(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Strike: ${strike}</label>
          <input
            type="range"
            min="80"
            max="120"
            value={strike}
            onChange={(e) => setStrike(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Days: {daysToExpiry}</label>
          <input
            type="range"
            min="1"
            max="90"
            value={daysToExpiry}
            onChange={(e) => setDaysToExpiry(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Vol: {volatility}%</label>
          <input
            type="range"
            min="10"
            max="50"
            value={volatility}
            onChange={(e) => setVolatility(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="relative h-48 bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 150" className="w-full h-full">
          {/* Gamma path */}
          <path
            d={gammaOverTime.map((g, i) => {
              const x = 30 + (i / daysToExpiry) * 350;
              const y = 140 - (g.gamma / maxGamma) * 120;
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          />
          <text x="385" y="40" fill="#10b981" fontSize="10">Γ</text>

          {/* Theta path (scaled differently) */}
          <path
            d={gammaOverTime.map((g, i) => {
              const x = 30 + (i / daysToExpiry) * 350;
              const y = 75 + (g.theta / minTheta) * 60;
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
          />
          <text x="385" y="120" fill="#ef4444" fontSize="10">Θ</text>

          {/* X-axis label */}
          <text x="200" y="148" fill="#9ca3af" fontSize="10" textAnchor="middle">Days from now</text>
        </svg>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-dark-700 rounded p-3">
          <div className="text-dark-400 text-sm">Current Gamma</div>
          <div className="text-emerald-400 font-semibold">
            {(currentGamma * 100).toFixed(4)}
          </div>
        </div>
        <div className="bg-dark-700 rounded p-3">
          <div className="text-dark-400 text-sm">Daily Theta</div>
          <div className="text-rose-400 font-semibold">
            ${currentTheta.toFixed(2)}
          </div>
        </div>
        <div className="bg-dark-700 rounded p-3">
          <div className="text-dark-400 text-sm">Expected Gamma P&L</div>
          <div className={position === 'long' ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
            ${(position === 'long' ? gammaBleed : -gammaBleed).toFixed(2)}/day
          </div>
        </div>
        <div className="bg-dark-700 rounded p-3">
          <div className="text-dark-400 text-sm">Net Daily Bleed</div>
          <div className={netBleed > 0 ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
            ${netBleed.toFixed(2)}/day
          </div>
        </div>
      </div>
    </div>
  );
}
