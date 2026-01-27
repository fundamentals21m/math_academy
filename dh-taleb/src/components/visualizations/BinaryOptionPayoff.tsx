import { useState } from 'react';

interface Props {
  className?: string;
}

export default function BinaryOptionPayoff({ className = '' }: Props) {
  const [strike, setStrike] = useState(100);
  const [payout, setPayout] = useState(100);
  const [daysToExpiry, setDaysToExpiry] = useState(30);
  const [optionType, setOptionType] = useState<'european' | 'american'>('european');

  const spotPrices = Array.from({ length: 41 }, (_, i) => 80 + i);

  // European binary: pays at expiry only
  const europeanPayoff = (spot: number) => spot > strike ? payout : 0;

  // For visualization, we show what the value might be before expiry
  const europeanValue = (spot: number) => {
    const t = daysToExpiry / 365;
    const vol = 0.20;
    const r = 0.05;
    const d2 = (Math.log(spot / strike) + (r - vol * vol / 2) * t) / (vol * Math.sqrt(t));
    const norm = (x: number) => 0.5 * (1 + erf(x / Math.sqrt(2)));
    return payout * Math.exp(-r * t) * norm(d2);
  };

  const erf = (x: number) => {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    const t = 1 / (1 + p * x);
    const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
  };

  // Delta (extremely high near strike at expiry)
  const calculateDelta = (spot: number) => {
    const t = daysToExpiry / 365;
    const vol = 0.20;
    const r = 0.05;
    if (t < 0.01) {
      // Near expiry, delta approaches infinity at strike
      const distance = Math.abs(spot - strike);
      if (distance < 1) return payout * 10;
      return 0;
    }
    const d2 = (Math.log(spot / strike) + (r - vol * vol / 2) * t) / (vol * Math.sqrt(t));
    const normPdf = (x: number) => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
    return payout * Math.exp(-r * t) * normPdf(d2) / (spot * vol * Math.sqrt(t));
  };

  const maxValue = payout;
  const values = spotPrices.map(s => europeanValue(s));
  const deltas = spotPrices.map(s => calculateDelta(s));
  const maxDelta = Math.max(...deltas);

  return (
    <div className={`bg-dark-800 rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Binary Option Payoff</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-1">Type</label>
          <select
            value={optionType}
            onChange={(e) => setOptionType(e.target.value as 'european' | 'american')}
            className="w-full bg-dark-700 text-dark-100 rounded px-3 py-2"
          >
            <option value="european">European (Cash-or-Nothing)</option>
            <option value="american">American (One-Touch)</option>
          </select>
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
          <label className="block text-sm text-dark-400 mb-1">Payout: ${payout}</label>
          <input
            type="range"
            min="50"
            max="200"
            step="10"
            value={payout}
            onChange={(e) => setPayout(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Days to Expiry: {daysToExpiry}</label>
          <input
            type="range"
            min="1"
            max="60"
            value={daysToExpiry}
            onChange={(e) => setDaysToExpiry(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Value chart */}
        <div className="relative h-48 bg-dark-900 rounded-lg p-4">
          <div className="text-xs text-dark-400 mb-2">Option Value</div>
          <svg viewBox="0 0 200 120" className="w-full h-full">
            {/* Payoff at expiry (step function) */}
            <path
              d={`M 10 100 L ${10 + ((strike - 80) / 40) * 180} 100 L ${10 + ((strike - 80) / 40) * 180} ${100 - (payout / maxValue) * 80} L 190 ${100 - (payout / maxValue) * 80}`}
              fill="none"
              stroke="#6b7280"
              strokeWidth="1"
              strokeDasharray="4"
            />

            {/* Current value curve */}
            <path
              d={spotPrices.map((spot, i) => {
                const x = 10 + (i / 40) * 180;
                const value = europeanValue(spot);
                const y = 100 - (value / maxValue) * 80;
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
              }).join(' ')}
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />

            {/* Strike line */}
            <line
              x1={10 + ((strike - 80) / 40) * 180}
              y1="10"
              x2={10 + ((strike - 80) / 40) * 180}
              y2="110"
              stroke="#f59e0b"
              strokeDasharray="2"
            />
          </svg>
        </div>

        {/* Delta chart */}
        <div className="relative h-48 bg-dark-900 rounded-lg p-4">
          <div className="text-xs text-dark-400 mb-2">Delta (Hedge Ratio)</div>
          <svg viewBox="0 0 200 120" className="w-full h-full">
            <path
              d={spotPrices.map((spot, i) => {
                const x = 10 + (i / 40) * 180;
                const delta = calculateDelta(spot);
                const y = 100 - Math.min(delta / maxDelta, 1) * 80;
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
              }).join(' ')}
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            />

            {/* Strike line */}
            <line
              x1={10 + ((strike - 80) / 40) * 180}
              y1="10"
              x2={10 + ((strike - 80) / 40) * 180}
              y2="110"
              stroke="#f59e0b"
              strokeDasharray="2"
            />
          </svg>
        </div>
      </div>

      <div className="mt-4 bg-dark-700 rounded p-4">
        <div className="text-rose-400 text-sm">
          ⚠️ Near the strike at expiry, delta approaches infinity. Binary options become
          nearly impossible to hedge as expiration approaches.
        </div>
      </div>
    </div>
  );
}
