import { useState } from 'react';

interface Props {
  className?: string;
}

export default function OptionPayoffExplorer({ className = '' }: Props) {
  const [strike, setStrike] = useState(100);
  const [premium, setPremium] = useState(5);
  const [optionType, setOptionType] = useState<'call' | 'put'>('call');
  const [position, setPosition] = useState<'long' | 'short'>('long');

  const spotPrices = Array.from({ length: 41 }, (_, i) => 80 + i);

  const calculatePayoff = (spot: number) => {
    const intrinsic = optionType === 'call'
      ? Math.max(spot - strike, 0)
      : Math.max(strike - spot, 0);
    const payoff = position === 'long'
      ? intrinsic - premium
      : premium - intrinsic;
    return payoff;
  };

  const maxPayoff = Math.max(...spotPrices.map(calculatePayoff));
  const minPayoff = Math.min(...spotPrices.map(calculatePayoff));
  const range = maxPayoff - minPayoff || 1;

  const breakeven = optionType === 'call'
    ? (position === 'long' ? strike + premium : strike + premium)
    : (position === 'long' ? strike - premium : strike - premium);

  return (
    <div className={`bg-dark-800 rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Option Payoff Explorer</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
          <label className="block text-sm text-dark-400 mb-1">Position</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value as 'long' | 'short')}
            className="w-full bg-dark-700 text-dark-100 rounded px-3 py-2"
          >
            <option value="long">Long</option>
            <option value="short">Short</option>
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
          <label className="block text-sm text-dark-400 mb-1">Premium: ${premium}</label>
          <input
            type="range"
            min="1"
            max="20"
            value={premium}
            onChange={(e) => setPremium(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="relative h-64 bg-dark-900 rounded-lg p-4">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          {/* Grid lines */}
          <line x1="50" y1="100" x2="380" y2="100" stroke="#374151" strokeWidth="1" />
          <line x1="50" y1="20" x2="50" y2="180" stroke="#374151" strokeWidth="1" />

          {/* Zero line label */}
          <text x="45" y="104" fill="#6b7280" fontSize="10" textAnchor="end">0</text>

          {/* Payoff curve */}
          <path
            d={spotPrices.map((spot, i) => {
              const x = 50 + (i / 40) * 330;
              const payoff = calculatePayoff(spot);
              const y = 100 - (payoff / range) * 80;
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke={position === 'long' ? '#10b981' : '#ef4444'}
            strokeWidth="2"
          />

          {/* Strike line */}
          <line
            x1={50 + ((strike - 80) / 40) * 330}
            y1="20"
            x2={50 + ((strike - 80) / 40) * 330}
            y2="180"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <text
            x={50 + ((strike - 80) / 40) * 330}
            y="15"
            fill="#f59e0b"
            fontSize="10"
            textAnchor="middle"
          >
            K={strike}
          </text>

          {/* Axis labels */}
          <text x="215" y="195" fill="#9ca3af" fontSize="10" textAnchor="middle">Spot Price at Expiry</text>
          <text x="55" y="20" fill="#9ca3af" fontSize="10">P&L</text>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
        <div className="bg-dark-700 rounded p-3">
          <div className="text-dark-400">Max Profit</div>
          <div className="text-emerald-400 font-semibold">
            {position === 'long' && optionType === 'call' ? 'Unlimited' :
             position === 'short' && optionType === 'put' ? 'Unlimited' :
             `$${Math.abs(position === 'long' ? -premium : premium).toFixed(2)}`}
          </div>
        </div>
        <div className="bg-dark-700 rounded p-3">
          <div className="text-dark-400">Max Loss</div>
          <div className="text-rose-400 font-semibold">
            {position === 'short' && optionType === 'call' ? 'Unlimited' :
             position === 'long' && optionType === 'put' ? `$${(strike - premium).toFixed(2)}` :
             `$${premium.toFixed(2)}`}
          </div>
        </div>
        <div className="bg-dark-700 rounded p-3">
          <div className="text-dark-400">Breakeven</div>
          <div className="text-amber-400 font-semibold">${breakeven.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
