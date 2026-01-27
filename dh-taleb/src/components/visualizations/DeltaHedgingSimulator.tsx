import { useState, useEffect } from 'react';

interface Props {
  className?: string;
}

interface HedgeEvent {
  day: number;
  spot: number;
  delta: number;
  shares: number;
  action: string;
  cost: number;
  totalCost: number;
}

export default function DeltaHedgingSimulator({ className = '' }: Props) {
  const [isRunning, setIsRunning] = useState(false);
  const [volatility, setVolatility] = useState(20);
  const [transactionCost, setTransactionCost] = useState(0.1);
  const [hedgeEvents, setHedgeEvents] = useState<HedgeEvent[]>([]);
  const [currentDay, setCurrentDay] = useState(0);

  const strike = 100;
  const initialSpot = 100;
  const days = 30;

  const calculateDelta = (spot: number, daysRemaining: number) => {
    if (daysRemaining <= 0) return spot > strike ? 1 : 0;
    const vol = volatility / 100;
    const t = daysRemaining / 252;
    const d1 = (Math.log(spot / strike) + (0.05 + vol * vol / 2) * t) / (vol * Math.sqrt(t));
    return 0.5 * (1 + erf(d1 / Math.sqrt(2)));
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

  const runSimulation = () => {
    setIsRunning(true);
    setHedgeEvents([]);
    setCurrentDay(0);

    const events: HedgeEvent[] = [];
    let spot = initialSpot;
    let currentShares = 0;
    let totalCost = 0;

    for (let day = 0; day <= days; day++) {
      const daysRemaining = days - day;
      const delta = calculateDelta(spot, daysRemaining);
      const targetShares = Math.round(delta * 100);
      const shareDiff = targetShares - currentShares;

      let action = 'Hold';
      let cost = 0;

      if (shareDiff !== 0) {
        action = shareDiff > 0 ? `Buy ${shareDiff}` : `Sell ${Math.abs(shareDiff)}`;
        cost = Math.abs(shareDiff) * spot * (transactionCost / 100);
        totalCost += cost;
        currentShares = targetShares;
      }

      events.push({
        day,
        spot: Math.round(spot * 100) / 100,
        delta: Math.round(delta * 100) / 100,
        shares: currentShares,
        action,
        cost: Math.round(cost * 100) / 100,
        totalCost: Math.round(totalCost * 100) / 100,
      });

      // Random walk for next day
      const dailyVol = (volatility / 100) / Math.sqrt(252);
      const randomReturn = (Math.random() - 0.5) * 2 * dailyVol * 3;
      spot = spot * (1 + randomReturn);
    }

    setHedgeEvents(events);
    setIsRunning(false);
    setCurrentDay(days);
  };

  return (
    <div className={`bg-dark-800 rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Delta Hedging Simulator</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
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
        <div>
          <label className="block text-sm text-dark-400 mb-1">Transaction Cost: {transactionCost}%</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={transactionCost}
            onChange={(e) => setTransactionCost(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded px-4 py-2 disabled:opacity-50"
          >
            {isRunning ? 'Simulating...' : 'Run Simulation'}
          </button>
        </div>
      </div>

      {hedgeEvents.length > 0 && (
        <>
          <div className="relative h-48 bg-dark-900 rounded-lg p-4 mb-4">
            <svg viewBox="0 0 400 150" className="w-full h-full">
              {/* Spot price path */}
              <path
                d={hedgeEvents.map((e, i) => {
                  const x = 20 + (i / days) * 360;
                  const minSpot = Math.min(...hedgeEvents.map(ev => ev.spot));
                  const maxSpot = Math.max(...hedgeEvents.map(ev => ev.spot));
                  const range = maxSpot - minSpot || 1;
                  const y = 130 - ((e.spot - minSpot) / range) * 100;
                  return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                }).join(' ')}
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
              />
              {/* Strike line */}
              <line x1="20" y1="75" x2="380" y2="75" stroke="#f59e0b" strokeDasharray="4" />
              <text x="385" y="78" fill="#f59e0b" fontSize="10">K=100</text>
            </svg>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-dark-400 border-b border-dark-600">
                  <th className="py-2 text-left">Day</th>
                  <th className="py-2 text-right">Spot</th>
                  <th className="py-2 text-right">Delta</th>
                  <th className="py-2 text-right">Shares</th>
                  <th className="py-2 text-left">Action</th>
                  <th className="py-2 text-right">Cost</th>
                  <th className="py-2 text-right">Total Cost</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {hedgeEvents.slice(0, 10).map((event, i) => (
                  <tr key={i} className="border-b border-dark-700">
                    <td className="py-1">{event.day}</td>
                    <td className="py-1 text-right">${event.spot}</td>
                    <td className="py-1 text-right">{event.delta}</td>
                    <td className="py-1 text-right">{event.shares}</td>
                    <td className="py-1">{event.action}</td>
                    <td className="py-1 text-right">${event.cost}</td>
                    <td className="py-1 text-right text-rose-400">${event.totalCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-dark-700 rounded p-4">
            <div className="text-dark-400 text-sm">Total Hedging Cost</div>
            <div className="text-2xl font-bold text-rose-400">
              ${hedgeEvents[hedgeEvents.length - 1]?.totalCost || 0}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
