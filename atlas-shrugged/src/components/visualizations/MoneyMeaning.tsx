import { useState } from 'react';

interface Props {
  className?: string;
}

type MoneyView = 'productive' | 'looter';

export function MoneyMeaning({ className = '' }: Props) {
  const [view, setView] = useState<MoneyView>('productive');
  const [wealth, setWealth] = useState(50);

  const productiveView = {
    title: 'Money as Symbol of Achievement',
    color: '#10b981',
    principles: [
      'Money is a tool of exchange',
      'It can exist only among men who produce',
      'Money is the material shape of the principle that men who wish to deal with one another must deal by trade',
      'Money demands that you sell, not your weakness, but your talent',
      'Money is made by the effort of every honest man',
      'Wealth is the product of man\'s capacity to think',
    ],
  };

  const looterView = {
    title: 'Money as "Root of Evil"',
    color: '#ef4444',
    principles: [
      'Money corrupts the soul',
      'The rich exploit the poor',
      'Profit is immoral',
      'Need, not achievement, should determine wealth',
      'Money should be taken from those who have it',
      'Wealth is a zero-sum game',
    ],
  };

  const currentView = view === 'productive' ? productiveView : looterView;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Meaning of Money</h3>

      <p className="text-dark-300 mb-6">
        Francisco d'Anconia's speech at James Taggart's wedding reveals the true meaning
        of money — and exposes the inversion practiced by those who call it "the root of all evil."
      </p>

      {/* View selector */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('productive')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'productive'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          💰 Producer's View
        </button>
        <button
          onClick={() => setView('looter')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'looter'
              ? 'bg-red-500/20 text-red-400 border border-red-500/50'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          🦹 Looter's View
        </button>
      </div>

      {/* Visual representation */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 160" className="w-full h-auto">
          {view === 'productive' ? (
            <>
              {/* Mind → Work → Value → Money cycle */}
              <g>
                {/* Mind */}
                <circle cx={80} cy={50} r={30} fill="#3b82f6" fillOpacity={0.2} stroke="#3b82f6" strokeWidth={2} />
                <text x={80} y={55} fill="#3b82f6" fontSize="20" textAnchor="middle">🧠</text>
                <text x={80} y={90} fill="#9ca3af" fontSize="10" textAnchor="middle">Mind</text>

                {/* Arrow */}
                <path d="M 115 50 L 155 50" stroke="#10b981" strokeWidth={2} markerEnd="url(#arrow-prod)" />

                {/* Work */}
                <circle cx={200} cy={50} r={30} fill="#f97316" fillOpacity={0.2} stroke="#f97316" strokeWidth={2} />
                <text x={200} y={55} fill="#f97316" fontSize="20" textAnchor="middle">⚒️</text>
                <text x={200} y={90} fill="#9ca3af" fontSize="10" textAnchor="middle">Production</text>

                {/* Arrow */}
                <path d="M 235 50 L 275 50" stroke="#10b981" strokeWidth={2} markerEnd="url(#arrow-prod)" />

                {/* Value */}
                <circle cx={320} cy={50} r={30} fill="#10b981" fillOpacity={0.2} stroke="#10b981" strokeWidth={2} />
                <text x={320} y={55} fill="#10b981" fontSize="20" textAnchor="middle">💎</text>
                <text x={320} y={90} fill="#9ca3af" fontSize="10" textAnchor="middle">Value</text>

                {/* Money symbol */}
                <text x={200} y={130} fill="#10b981" fontSize="24" textAnchor="middle">$</text>
                <text x={200} y={150} fill="#10b981" fontSize="11" textAnchor="middle" fontWeight="bold">
                  MONEY = FROZEN ACHIEVEMENT
                </text>
              </g>

              <defs>
                <marker id="arrow-prod" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
                </marker>
              </defs>
            </>
          ) : (
            <>
              {/* Force → Seizure → Money (inverted) */}
              <g>
                {/* Force */}
                <circle cx={80} cy={50} r={30} fill="#ef4444" fillOpacity={0.2} stroke="#ef4444" strokeWidth={2} />
                <text x={80} y={55} fill="#ef4444" fontSize="20" textAnchor="middle">👊</text>
                <text x={80} y={90} fill="#9ca3af" fontSize="10" textAnchor="middle">Force</text>

                {/* Arrow */}
                <path d="M 115 50 L 155 50" stroke="#ef4444" strokeWidth={2} markerEnd="url(#arrow-loot)" />

                {/* Guilt */}
                <circle cx={200} cy={50} r={30} fill="#8b5cf6" fillOpacity={0.2} stroke="#8b5cf6" strokeWidth={2} />
                <text x={200} y={55} fill="#8b5cf6" fontSize="20" textAnchor="middle">😔</text>
                <text x={200} y={90} fill="#9ca3af" fontSize="10" textAnchor="middle">Guilt</text>

                {/* Arrow */}
                <path d="M 235 50 L 275 50" stroke="#ef4444" strokeWidth={2} markerEnd="url(#arrow-loot)" />

                {/* Loot */}
                <circle cx={320} cy={50} r={30} fill="#374151" fillOpacity={0.5} stroke="#6b7280" strokeWidth={2} />
                <text x={320} y={55} fill="#6b7280" fontSize="20" textAnchor="middle">💸</text>
                <text x={320} y={90} fill="#9ca3af" fontSize="10" textAnchor="middle">Seizure</text>

                {/* Anti-money message */}
                <text x={200} y={130} fill="#ef4444" fontSize="20" textAnchor="middle">$̷</text>
                <text x={200} y={150} fill="#ef4444" fontSize="11" textAnchor="middle" fontWeight="bold">
                  "MONEY IS THE ROOT OF ALL EVIL"
                </text>
              </g>

              <defs>
                <marker id="arrow-loot" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#ef4444" />
                </marker>
              </defs>
            </>
          )}
        </svg>
      </div>

      {/* Principles */}
      <div
        className="p-4 rounded-xl mb-4 border"
        style={{
          backgroundColor: `${currentView.color}10`,
          borderColor: `${currentView.color}40`,
        }}
      >
        <p style={{ color: currentView.color }} className="font-medium mb-3">
          {currentView.title}
        </p>
        <ul className="space-y-2">
          {currentView.principles.map((p, i) => (
            <li key={i} className="text-dark-300 text-sm flex items-start gap-2">
              <span style={{ color: currentView.color }}>•</span>
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* The question */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600 mb-4">
        <p className="text-dark-300 text-sm">
          "So you think that money is the root of all evil? Have you ever asked what is
          the root of money? Money is a tool of exchange, which can't exist unless there
          are goods produced and men able to produce them."
        </p>
        <p className="text-dark-500 text-xs mt-2 text-right">— Francisco d'Anconia</p>
      </div>

      {/* Key insight */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
        <p className="text-emerald-400 font-medium">The Deeper Truth</p>
        <p className="text-dark-300 text-sm mt-2">
          Those who call money evil seek to replace trade with force. When money ceases
          to be the tool by which men deal with one another, men become the tools of men.
          Blood, whips, and guns — or dollars.
        </p>
      </div>
    </div>
  );
}
