import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function SanctionOfVictim({ className = '' }: Props) {
  const [producerGuilt, setProducerGuilt] = useState(70);
  const [showWithdrawal, setShowWithdrawal] = useState(false);

  const analysis = useMemo(() => {
    const guiltFactor = producerGuilt / 100;

    return {
      productionOutput: showWithdrawal ? 20 : 100 - guiltFactor * 30,
      looterPower: showWithdrawal ? 10 : 20 + guiltFactor * 60,
      producerWealth: showWithdrawal ? 80 : 100 - guiltFactor * 50,
      systemStability: showWithdrawal ? 10 : 50 - guiltFactor * 40,
    };
  }, [producerGuilt, showWithdrawal]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Sanction of the Victim</h3>

      <p className="text-dark-300 mb-6">
        The looters' power depends entirely on one thing: the producers' acceptance of
        unearned guilt. Without this sanction, the system collapses.
      </p>

      {/* Guilt acceptance slider */}
      <div className="mb-6">
        <label className="text-dark-400 text-sm mb-2 block">
          Producer's Acceptance of Guilt: {producerGuilt}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={producerGuilt}
          onChange={(e) => setProducerGuilt(parseInt(e.target.value))}
          disabled={showWithdrawal}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
          style={{ accentColor: showWithdrawal ? '#6b7280' : '#ef4444' }}
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>"I earned this"</span>
          <span>"I don't deserve this"</span>
        </div>
      </div>

      {/* Visual representation */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 160" className="w-full h-auto">
          {/* Producer */}
          <g transform="translate(80, 60)">
            <circle
              r={35}
              fill={showWithdrawal ? '#10b981' : `hsl(${120 - producerGuilt * 1.2}, 70%, 35%)`}
              fillOpacity={0.3}
              stroke={showWithdrawal ? '#10b981' : `hsl(${120 - producerGuilt * 1.2}, 70%, 50%)`}
              strokeWidth={2}
            />
            <text y={5} fill="#fff" fontSize="24" textAnchor="middle">
              {showWithdrawal ? '🚀' : '🏭'}
            </text>
            <text y={55} fill="#9ca3af" fontSize="10" textAnchor="middle">Producer</text>
          </g>

          {/* Wealth flow arrow */}
          {!showWithdrawal && (
            <g>
              <path
                d={`M 130 60 Q 200 ${40 + producerGuilt * 0.4} 260 60`}
                fill="none"
                stroke="#f97316"
                strokeWidth={1 + producerGuilt / 25}
                strokeDasharray={producerGuilt < 30 ? '4 4' : 'none'}
                markerEnd="url(#arrow-flow)"
              />
              <text x={200} y={35 + producerGuilt * 0.3} fill="#f97316" fontSize="9" textAnchor="middle">
                💰 Tribute
              </text>
            </g>
          )}

          {/* Looter */}
          <g transform="translate(320, 60)">
            <circle
              r={showWithdrawal ? 20 : 25 + producerGuilt * 0.2}
              fill={showWithdrawal ? '#374151' : '#ef4444'}
              fillOpacity={showWithdrawal ? 0.3 : 0.3 + producerGuilt / 200}
              stroke={showWithdrawal ? '#6b7280' : '#ef4444'}
              strokeWidth={2}
            />
            <text y={5} fill={showWithdrawal ? '#6b7280' : '#ef4444'} fontSize="20" textAnchor="middle">
              {showWithdrawal ? '😰' : '🦹'}
            </text>
            <text y={55} fill="#9ca3af" fontSize="10" textAnchor="middle">Looter</text>
          </g>

          {/* Guilt/Sanction link */}
          {!showWithdrawal && (
            <g>
              <path
                d={`M 260 80 Q 200 100 130 80`}
                fill="none"
                stroke="#8b5cf6"
                strokeWidth={producerGuilt / 20}
                strokeDasharray="4 2"
                markerEnd="url(#arrow-guilt)"
              />
              <text x={200} y={115} fill="#8b5cf6" fontSize="9" textAnchor="middle">
                "You owe us" (Guilt)
              </text>
            </g>
          )}

          {/* Withdrawal state */}
          {showWithdrawal && (
            <>
              <text x={200} y={60} fill="#10b981" fontSize="24" textAnchor="middle">✂️</text>
              <text x={200} y={85} fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">
                SANCTION WITHDRAWN
              </text>
              <text x={200} y={140} fill="#10b981" fontSize="11" textAnchor="middle">
                "I withdraw my sanction"
              </text>
            </>
          )}

          <defs>
            <marker id="arrow-flow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#f97316" />
            </marker>
            <marker id="arrow-guilt" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#8b5cf6" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Withdrawal button */}
      <button
        onClick={() => setShowWithdrawal(!showWithdrawal)}
        className={`w-full mb-4 px-4 py-3 rounded-lg font-medium transition-colors ${
          showWithdrawal
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
            : 'bg-primary-500 text-white hover:bg-primary-600'
        }`}
      >
        {showWithdrawal ? '🔓 Sanction Withdrawn — System Collapses' : '🔐 Withdraw Your Sanction'}
      </button>

      {/* Power metrics */}
      <div className="space-y-3 mb-4">
        {[
          { label: 'Production Output', value: analysis.productionOutput, color: '#3b82f6' },
          { label: 'Looter Power', value: analysis.looterPower, color: '#ef4444' },
          { label: 'Producer Wealth', value: analysis.producerWealth, color: '#10b981' },
          { label: 'System Stability', value: analysis.systemStability, color: '#f97316' },
        ].map((metric) => (
          <div key={metric.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-dark-400">{metric.label}</span>
              <span style={{ color: metric.color }} className="font-mono">
                {Math.round(metric.value)}%
              </span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${metric.value}%`, backgroundColor: metric.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div className={`p-4 rounded-xl border ${
        showWithdrawal ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-dark-700/50 border-dark-600'
      }`}>
        <p className={`font-medium ${showWithdrawal ? 'text-emerald-400' : 'text-dark-300'}`}>
          {showWithdrawal ? 'The Strike Succeeds' : 'The Mechanism of Control'}
        </p>
        <p className="text-dark-300 text-sm mt-2">
          {showWithdrawal
            ? '"I swear by my life and my love of it that I will never live for the sake of another man, nor ask another man to live for mine." When producers withdraw their sanction, the looters are powerless.'
            : 'The looters cannot function without your acceptance. They need you to believe you owe them something. They need your guilt. Without it, they are nothing.'}
        </p>
      </div>
    </div>
  );
}
