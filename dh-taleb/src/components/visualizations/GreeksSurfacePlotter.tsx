import { useState } from 'react';

interface Props {
  className?: string;
}

export default function GreeksSurfacePlotter({ className = '' }: Props) {
  const [greek, setGreek] = useState<'delta' | 'gamma' | 'vega' | 'theta'>('delta');
  const [optionType, setOptionType] = useState<'call' | 'put'>('call');
  const [daysToExpiry, setDaysToExpiry] = useState(30);
  const [volatility, setVolatility] = useState(20);

  const strikes = [90, 95, 100, 105, 110];
  const spots = [85, 90, 95, 100, 105, 110, 115];

  const erf = (x: number) => {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    const t = 1 / (1 + p * x);
    const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
  };

  const norm = (x: number) => 0.5 * (1 + erf(x / Math.sqrt(2)));
  const normPdf = (x: number) => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);

  const calculateGreek = (spot: number, strike: number) => {
    const t = daysToExpiry / 365;
    const vol = volatility / 100;
    const r = 0.05;

    if (t <= 0) return 0;

    const d1 = (Math.log(spot / strike) + (r + vol * vol / 2) * t) / (vol * Math.sqrt(t));
    const d2 = d1 - vol * Math.sqrt(t);

    switch (greek) {
      case 'delta':
        return optionType === 'call' ? norm(d1) : norm(d1) - 1;
      case 'gamma':
        return normPdf(d1) / (spot * vol * Math.sqrt(t));
      case 'vega':
        return spot * normPdf(d1) * Math.sqrt(t) / 100;
      case 'theta':
        const theta = -(spot * normPdf(d1) * vol) / (2 * Math.sqrt(t)) / 365;
        return optionType === 'call'
          ? theta - r * strike * Math.exp(-r * t) * norm(d2) / 365
          : theta + r * strike * Math.exp(-r * t) * norm(-d2) / 365;
      default:
        return 0;
    }
  };

  const getColor = (value: number, min: number, max: number) => {
    const range = max - min || 1;
    const normalized = (value - min) / range;

    if (greek === 'theta') {
      // Theta is usually negative, use red gradient
      const intensity = Math.floor((1 - normalized) * 200);
      return `rgb(${intensity + 55}, 50, 50)`;
    }

    // Green for positive Greeks
    const intensity = Math.floor(normalized * 200);
    return `rgb(50, ${intensity + 55}, 100)`;
  };

  const values = spots.flatMap(spot =>
    strikes.map(strike => calculateGreek(spot, strike))
  );
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);

  return (
    <div className={`bg-dark-800 rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Greeks Surface Plotter</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-1">Greek</label>
          <select
            value={greek}
            onChange={(e) => setGreek(e.target.value as typeof greek)}
            className="w-full bg-dark-700 text-dark-100 rounded px-3 py-2"
          >
            <option value="delta">Delta (Δ)</option>
            <option value="gamma">Gamma (Γ)</option>
            <option value="vega">Vega (ν)</option>
            <option value="theta">Theta (Θ)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Type</label>
          <select
            value={optionType}
            onChange={(e) => setOptionType(e.target.value as 'call' | 'put')}
            className="w-full bg-dark-700 text-dark-100 rounded px-3 py-2"
          >
            <option value="call">Call</option>
            <option value="put">Put</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Days to Expiry: {daysToExpiry}</label>
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
          <label className="block text-sm text-dark-400 mb-1">Volatility: {volatility}%</label>
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

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400">
              <th className="py-2 px-2 text-left">Spot↓ / Strike→</th>
              {strikes.map(k => (
                <th key={k} className="py-2 px-2 text-center">{k}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {spots.map(spot => (
              <tr key={spot}>
                <td className="py-2 px-2 text-dark-300 font-medium">{spot}</td>
                {strikes.map(strike => {
                  const value = calculateGreek(spot, strike);
                  return (
                    <td
                      key={strike}
                      className="py-2 px-2 text-center text-white font-mono text-xs"
                      style={{ backgroundColor: getColor(value, minVal, maxVal) }}
                    >
                      {value.toFixed(greek === 'gamma' ? 4 : 3)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between text-sm text-dark-400">
        <span>Min: {minVal.toFixed(4)}</span>
        <span className="text-dark-300">
          {greek.charAt(0).toUpperCase() + greek.slice(1)} for {optionType}s
        </span>
        <span>Max: {maxVal.toFixed(4)}</span>
      </div>
    </div>
  );
}
