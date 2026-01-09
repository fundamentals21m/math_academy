import { useState } from 'react';

interface Props {
  className?: string;
}

type Stage = 'barter' | 'commodity' | 'money';

interface Good {
  id: string;
  name: string;
  emoji: string;
  marketability: number;
  divisibility: number;
  durability: number;
}

export function MoneyEmergence({ className = '' }: Props) {
  const [stage, setStage] = useState<Stage>('barter');
  const [selectedGood, setSelectedGood] = useState<string | null>(null);

  const goods: Good[] = [
    { id: 'wheat', name: 'Wheat', emoji: '🌾', marketability: 60, divisibility: 70, durability: 40 },
    { id: 'cattle', name: 'Cattle', emoji: '🐄', marketability: 50, divisibility: 20, durability: 60 },
    { id: 'salt', name: 'Salt', emoji: '🧂', marketability: 70, divisibility: 90, durability: 80 },
    { id: 'shells', name: 'Shells', emoji: '🐚', marketability: 65, divisibility: 60, durability: 70 },
    { id: 'silver', name: 'Silver', emoji: '🪙', marketability: 85, divisibility: 95, durability: 95 },
    { id: 'gold', name: 'Gold', emoji: '🥇', marketability: 90, divisibility: 95, durability: 99 },
  ];

  const getMoneyScore = (g: Good) => (g.marketability + g.divisibility + g.durability) / 3;

  const sortedGoods = [...goods].sort((a, b) => getMoneyScore(b) - getMoneyScore(a));

  const stageInfo = {
    barter: {
      title: 'Stage 1: Direct Barter',
      description: 'Each person must find someone who has what they want AND wants what they have. This is the "double coincidence of wants" problem.',
      color: '#ef4444',
    },
    commodity: {
      title: 'Stage 2: Indirect Exchange',
      description: 'People accept goods not for direct use, but because others will accept them. The most marketable goods become common media of exchange.',
      color: '#f97316',
    },
    money: {
      title: 'Stage 3: Emergence of Money',
      description: 'Through market competition, one or two commodities emerge as universally accepted. Gold and silver historically won this competition.',
      color: '#10b981',
    },
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Emergence of Money</h3>

      <p className="text-dark-300 mb-6">
        Money was not invented by governments — it emerged spontaneously from market activity.
        The most marketable, divisible, and durable goods gradually become money.
      </p>

      {/* Stage selector */}
      <div className="flex gap-2 mb-6">
        {(['barter', 'commodity', 'money'] as Stage[]).map((s) => (
          <button
            key={s}
            onClick={() => setStage(s)}
            style={{ borderColor: stage === s ? stageInfo[s].color : undefined }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              stage === s
                ? 'bg-dark-700 text-white border-2'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700 border-2 border-transparent'
            }`}
          >
            {stageInfo[s].title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Stage explanation */}
      <div
        className="p-4 rounded-xl mb-6 border"
        style={{
          backgroundColor: `${stageInfo[stage].color}15`,
          borderColor: `${stageInfo[stage].color}40`,
        }}
      >
        <p style={{ color: stageInfo[stage].color }} className="font-medium">
          {stageInfo[stage].title}
        </p>
        <p className="text-dark-300 text-sm mt-2">{stageInfo[stage].description}</p>
      </div>

      {/* Visualization */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {stage === 'barter' && (
            <>
              {/* People trying to trade */}
              <g transform="translate(50, 50)">
                <circle cx={0} cy={0} r={25} fill="#3b82f6" fillOpacity={0.3} stroke="#3b82f6" strokeWidth={2} />
                <text x={0} y={5} fill="#fff" fontSize="20" textAnchor="middle">👩‍🌾</text>
                <text x={0} y={40} fill="#9ca3af" fontSize="10" textAnchor="middle">Has: 🌾</text>
                <text x={0} y={52} fill="#9ca3af" fontSize="10" textAnchor="middle">Wants: 🥾</text>
              </g>
              <g transform="translate(200, 50)">
                <circle cx={0} cy={0} r={25} fill="#f97316" fillOpacity={0.3} stroke="#f97316" strokeWidth={2} />
                <text x={0} y={5} fill="#fff" fontSize="20" textAnchor="middle">🧑‍🔧</text>
                <text x={0} y={40} fill="#9ca3af" fontSize="10" textAnchor="middle">Has: 🥾</text>
                <text x={0} y={52} fill="#9ca3af" fontSize="10" textAnchor="middle">Wants: 🐟</text>
              </g>
              <g transform="translate(350, 50)">
                <circle cx={0} cy={0} r={25} fill="#10b981" fillOpacity={0.3} stroke="#10b981" strokeWidth={2} />
                <text x={0} y={5} fill="#fff" fontSize="20" textAnchor="middle">🧑‍🎣</text>
                <text x={0} y={40} fill="#9ca3af" fontSize="10" textAnchor="middle">Has: 🐟</text>
                <text x={0} y={52} fill="#9ca3af" fontSize="10" textAnchor="middle">Wants: 🌾</text>
              </g>

              {/* X marks - no direct trade possible */}
              <text x={125} y={55} fill="#ef4444" fontSize="24">✗</text>
              <text x={275} y={55} fill="#ef4444" fontSize="24">✗</text>

              <text x={200} y={140} fill="#ef4444" fontSize="12" textAnchor="middle">
                No double coincidence of wants!
              </text>
              <text x={200} y={160} fill="#9ca3af" fontSize="11" textAnchor="middle">
                The farmer wants boots, but the cobbler wants fish, not wheat.
              </text>
            </>
          )}

          {stage === 'commodity' && (
            <>
              {/* Goods competing to become money */}
              {sortedGoods.slice(0, 6).map((good, i) => {
                const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
                const x = 200 + Math.cos(angle) * 80;
                const y = 100 + Math.sin(angle) * 60;
                const score = getMoneyScore(good);
                const size = 15 + score / 5;

                return (
                  <g key={good.id}>
                    <circle
                      cx={x}
                      cy={y}
                      r={size}
                      fill={score > 80 ? '#10b981' : score > 60 ? '#f97316' : '#6b7280'}
                      fillOpacity={0.3}
                      stroke={score > 80 ? '#10b981' : score > 60 ? '#f97316' : '#6b7280'}
                      strokeWidth={2}
                      className="cursor-pointer"
                      onClick={() => setSelectedGood(good.id)}
                    />
                    <text x={x} y={y + 5} fontSize="18" textAnchor="middle">{good.emoji}</text>
                    <text x={x} y={y + size + 12} fill="#9ca3af" fontSize="9" textAnchor="middle">
                      {Math.round(score)}
                    </text>
                  </g>
                );
              })}

              <text x={200} y={180} fill="#f97316" fontSize="11" textAnchor="middle">
                Goods compete based on marketability, divisibility, durability
              </text>
            </>
          )}

          {stage === 'money' && (
            <>
              {/* Gold/Silver emerge as money */}
              <circle cx={200} cy={80} r={50} fill="#fbbf24" fillOpacity={0.2} stroke="#fbbf24" strokeWidth={3} />
              <text x={200} y={90} fontSize="40" textAnchor="middle">🥇</text>
              <text x={200} y={115} fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="bold">GOLD</text>

              {/* Arrows from all traders to gold */}
              {[0, 1, 2, 3, 4].map((i) => {
                const angle = (i / 5) * Math.PI - Math.PI / 2;
                const x1 = 200 + Math.cos(angle) * 120;
                const y1 = 80 + Math.sin(angle) * 80;
                return (
                  <g key={i}>
                    <line x1={x1} y1={y1} x2={200 + Math.cos(angle) * 55} y2={80 + Math.sin(angle) * 45}
                      stroke="#10b981" strokeWidth={1.5} markerEnd="url(#arrow)" />
                    <text x={x1} y={y1} fontSize="16" textAnchor="middle">
                      {['👩‍🌾', '🧑‍🔧', '🧑‍🎣', '👨‍🍳', '👩‍⚕️'][i]}
                    </text>
                  </g>
                );
              })}

              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
                </marker>
              </defs>

              <text x={200} y={175} fill="#10b981" fontSize="11" textAnchor="middle">
                Everyone accepts gold → universal medium of exchange
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Good comparison table */}
      {stage === 'commodity' && (
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-dark-400 border-b border-dark-700">
                <th className="p-2 text-left">Good</th>
                <th className="p-2 text-center">Marketability</th>
                <th className="p-2 text-center">Divisibility</th>
                <th className="p-2 text-center">Durability</th>
                <th className="p-2 text-center">Score</th>
              </tr>
            </thead>
            <tbody>
              {sortedGoods.map((good) => (
                <tr
                  key={good.id}
                  className={`border-b border-dark-800 cursor-pointer hover:bg-dark-700/50 ${
                    selectedGood === good.id ? 'bg-primary-500/20' : ''
                  }`}
                  onClick={() => setSelectedGood(good.id)}
                >
                  <td className="p-2 text-dark-300">{good.emoji} {good.name}</td>
                  <td className="p-2 text-center">
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${good.marketability}%` }} />
                    </div>
                  </td>
                  <td className="p-2 text-center">
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${good.divisibility}%` }} />
                    </div>
                  </td>
                  <td className="p-2 text-center">
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${good.durability}%` }} />
                    </div>
                  </td>
                  <td className="p-2 text-center font-mono text-emerald-400">
                    {Math.round(getMoneyScore(good))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Properties of good money */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-400 text-sm font-medium">Marketability</p>
          <p className="text-dark-400 text-xs mt-1">How widely accepted and easily sold</p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-orange-400 text-sm font-medium">Divisibility</p>
          <p className="text-dark-400 text-xs mt-1">Can be split into small units</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-emerald-400 text-sm font-medium">Durability</p>
          <p className="text-dark-400 text-xs mt-1">Doesn't decay or deteriorate</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Rothbard on Money's Origin</p>
        <p className="text-dark-300 text-sm mt-2">
          "Money was not created by government decree or social contract. It emerged
          naturally from market processes as traders discovered that certain commodities
          were more marketable than others."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Gold and silver became money because they excelled in marketability, divisibility,
          and durability — not because anyone planned it.
        </p>
      </div>
    </div>
  );
}
