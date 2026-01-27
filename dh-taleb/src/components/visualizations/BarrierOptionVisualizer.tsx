import { useState, useEffect } from 'react';

interface Props {
  className?: string;
}

export default function BarrierOptionVisualizer({ className = '' }: Props) {
  const [barrierType, setBarrierType] = useState<'knock-out' | 'knock-in'>('knock-out');
  const [barrierDirection, setBarrierDirection] = useState<'down' | 'up'>('down');
  const [barrier, setBarrier] = useState(90);
  const [strike, setStrike] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const [path, setPath] = useState<number[]>([100]);
  const [isKnocked, setIsKnocked] = useState(false);

  const generatePath = () => {
    setIsRunning(true);
    setIsKnocked(false);

    const newPath: number[] = [100];
    let knocked = false;

    for (let i = 0; i < 60; i++) {
      const lastPrice = newPath[newPath.length - 1];
      const dailyReturn = (Math.random() - 0.5) * 0.04;
      const newPrice = lastPrice * (1 + dailyReturn);
      newPath.push(newPrice);

      // Check barrier
      if (barrierDirection === 'down' && newPrice <= barrier) {
        knocked = true;
      } else if (barrierDirection === 'up' && newPrice >= barrier) {
        knocked = true;
      }
    }

    setPath(newPath);
    setIsKnocked(knocked);
    setIsRunning(false);
  };

  const calculatePayoff = () => {
    const finalPrice = path[path.length - 1];

    if (barrierType === 'knock-out') {
      if (isKnocked) return 0;
      return Math.max(finalPrice - strike, 0);
    } else {
      // knock-in
      if (!isKnocked) return 0;
      return Math.max(finalPrice - strike, 0);
    }
  };

  const minPrice = Math.min(...path, barrier);
  const maxPrice = Math.max(...path, barrier);
  const range = maxPrice - minPrice || 1;

  const payoff = calculatePayoff();

  return (
    <div className={`bg-dark-800 rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Barrier Option Visualizer</h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-1">Barrier Type</label>
          <select
            value={barrierType}
            onChange={(e) => setBarrierType(e.target.value as 'knock-out' | 'knock-in')}
            className="w-full bg-dark-700 text-dark-100 rounded px-3 py-2"
          >
            <option value="knock-out">Knock-Out</option>
            <option value="knock-in">Knock-In</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Direction</label>
          <select
            value={barrierDirection}
            onChange={(e) => setBarrierDirection(e.target.value as 'down' | 'up')}
            className="w-full bg-dark-700 text-dark-100 rounded px-3 py-2"
          >
            <option value="down">Down-and-{barrierType === 'knock-out' ? 'Out' : 'In'}</option>
            <option value="up">Up-and-{barrierType === 'knock-out' ? 'Out' : 'In'}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Barrier: ${barrier}</label>
          <input
            type="range"
            min="80"
            max="120"
            value={barrier}
            onChange={(e) => setBarrier(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Strike: ${strike}</label>
          <input
            type="range"
            min="90"
            max="110"
            value={strike}
            onChange={(e) => setStrike(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={generatePath}
            disabled={isRunning}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded px-4 py-2 disabled:opacity-50"
          >
            Simulate Path
          </button>
        </div>
      </div>

      <div className="relative h-64 bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          {/* Barrier line */}
          <line
            x1="30"
            y1={180 - ((barrier - minPrice) / range) * 160}
            x2="390"
            y2={180 - ((barrier - minPrice) / range) * 160}
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="8,4"
          />
          <text
            x="395"
            y={180 - ((barrier - minPrice) / range) * 160}
            fill="#ef4444"
            fontSize="10"
          >
            H={barrier}
          </text>

          {/* Strike line */}
          <line
            x1="30"
            y1={180 - ((strike - minPrice) / range) * 160}
            x2="390"
            y2={180 - ((strike - minPrice) / range) * 160}
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <text
            x="395"
            y={180 - ((strike - minPrice) / range) * 160}
            fill="#f59e0b"
            fontSize="10"
          >
            K={strike}
          </text>

          {/* Price path */}
          <path
            d={path.map((price, i) => {
              const x = 30 + (i / 60) * 360;
              const y = 180 - ((price - minPrice) / range) * 160;
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke={isKnocked ? '#ef4444' : '#10b981'}
            strokeWidth="2"
          />

          {/* Knocked indicator */}
          {isKnocked && (
            <text x="200" y="30" fill="#ef4444" fontSize="14" textAnchor="middle" fontWeight="bold">
              BARRIER TOUCHED!
            </text>
          )}
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-dark-700 rounded p-3">
          <div className="text-dark-400 text-sm">Final Price</div>
          <div className="text-dark-100 font-semibold">${path[path.length - 1].toFixed(2)}</div>
        </div>
        <div className="bg-dark-700 rounded p-3">
          <div className="text-dark-400 text-sm">Barrier Status</div>
          <div className={isKnocked ? 'text-rose-400 font-semibold' : 'text-emerald-400 font-semibold'}>
            {isKnocked ? 'Touched' : 'Not Touched'}
          </div>
        </div>
        <div className="bg-dark-700 rounded p-3">
          <div className="text-dark-400 text-sm">Option Payoff</div>
          <div className={payoff > 0 ? 'text-emerald-400 font-semibold' : 'text-dark-400 font-semibold'}>
            ${payoff.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
