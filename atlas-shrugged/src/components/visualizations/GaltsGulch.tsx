import { useState } from 'react';

interface Props {
  className?: string;
}

interface Resident {
  id: string;
  name: string;
  profession: string;
  emoji: string;
  contribution: string;
}

export function GaltsGulch({ className = '' }: Props) {
  const [showEconomy, setShowEconomy] = useState(false);
  const [selectedResident, setSelectedResident] = useState<string | null>(null);

  const residents: Resident[] = [
    { id: 'galt', name: 'John Galt', profession: 'Engineer/Philosopher', emoji: '⚡', contribution: 'Motor, leadership, philosophy' },
    { id: 'francisco', name: 'Francisco d\'Anconia', profession: 'Copper Magnate', emoji: '🏔️', contribution: 'Copper, investments' },
    { id: 'ragnar', name: 'Ragnar Danneskjöld', profession: 'Philosopher-Pirate', emoji: '⛵', contribution: 'Gold recovery' },
    { id: 'mulligan', name: 'Midas Mulligan', profession: 'Banker', emoji: '🏦', contribution: 'Banking, finance' },
    { id: 'wyatt', name: 'Ellis Wyatt', profession: 'Oil Producer', emoji: '🛢️', contribution: 'Oil, energy' },
    { id: 'halley', name: 'Richard Halley', profession: 'Composer', emoji: '🎼', contribution: 'Music, beauty' },
  ];

  const valleyPrinciples = [
    { icon: '💰', title: 'Gold Standard', desc: 'Honest money that cannot be inflated' },
    { icon: '🤝', title: 'Voluntary Trade', desc: 'No force, no fraud, no sacrifice' },
    { icon: '⚖️', title: 'Justice', desc: 'Each person keeps what they earn' },
    { icon: '🧠', title: 'Reason', desc: 'Reality as the standard of value' },
    { icon: '🔒', title: 'Property Rights', desc: 'Absolute ownership of one\'s creations' },
    { icon: '🎯', title: 'Purpose', desc: 'Each works for their own happiness' },
  ];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Galt's Gulch: Atlantis</h3>

      <p className="text-dark-300 mb-6">
        The hidden valley where the strikers have built a society based on rational self-interest.
        A demonstration that the mind does not need to be sacrificed to survive.
      </p>

      {/* Valley visualization */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {/* Mountains surrounding */}
          <path d="M 0 200 L 50 100 L 100 150 L 150 80 L 200 120 L 250 60 L 300 100 L 350 70 L 400 200 Z"
            fill="#1e3a5f" fillOpacity={0.5} />

          {/* Valley floor */}
          <ellipse cx={200} cy={160} rx={150} ry={30} fill="#10b981" fillOpacity={0.2} />

          {/* Residents */}
          {residents.map((resident, i) => {
            const angle = (i / residents.length) * Math.PI * 2 - Math.PI / 2;
            const x = 200 + Math.cos(angle) * 80;
            const y = 130 + Math.sin(angle) * 25;

            return (
              <g
                key={resident.id}
                className="cursor-pointer"
                onClick={() => setSelectedResident(selectedResident === resident.id ? null : resident.id)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={selectedResident === resident.id ? 22 : 18}
                  fill={selectedResident === resident.id ? '#fbbf24' : '#3b82f6'}
                  fillOpacity={0.3}
                  stroke={selectedResident === resident.id ? '#fbbf24' : '#3b82f6'}
                  strokeWidth={2}
                />
                <text x={x} y={y + 5} fontSize="16" textAnchor="middle">{resident.emoji}</text>
              </g>
            );
          })}

          {/* Trade connections (when economy shown) */}
          {showEconomy && residents.map((r1, i) =>
            residents.slice(i + 1).map((r2, j) => {
              const angle1 = (i / residents.length) * Math.PI * 2 - Math.PI / 2;
              const angle2 = ((i + j + 1) / residents.length) * Math.PI * 2 - Math.PI / 2;
              return (
                <line
                  key={`${r1.id}-${r2.id}`}
                  x1={200 + Math.cos(angle1) * 80}
                  y1={130 + Math.sin(angle1) * 25}
                  x2={200 + Math.cos(angle2) * 80}
                  y2={130 + Math.sin(angle2) * 25}
                  stroke="#fbbf24"
                  strokeWidth={0.5}
                  opacity={0.4}
                />
              );
            })
          )}

          {/* Dollar sign in center */}
          <text x={200} y={135} fill="#fbbf24" fontSize="30" textAnchor="middle" fontWeight="bold">$</text>

          {/* Valley name */}
          <text x={200} y={190} fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="bold">
            GALT'S GULCH
          </text>
        </svg>
      </div>

      {/* Toggle economy view */}
      <button
        onClick={() => setShowEconomy(!showEconomy)}
        className={`w-full mb-4 px-4 py-2 rounded-lg font-medium transition-colors ${
          showEconomy
            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
            : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
        }`}
      >
        {showEconomy ? '💱 Trading Network Active' : 'Show Trade Connections'}
      </button>

      {/* Selected resident detail */}
      {selectedResident && (
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-4">
          {(() => {
            const r = residents.find((x) => x.id === selectedResident)!;
            return (
              <>
                <p className="text-blue-400 font-medium">{r.emoji} {r.name}</p>
                <p className="text-dark-400 text-sm">{r.profession}</p>
                <p className="text-dark-300 text-sm mt-2">
                  Contributes: <span className="text-emerald-400">{r.contribution}</span>
                </p>
              </>
            );
          })()}
        </div>
      )}

      {/* Valley principles */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {valleyPrinciples.map((p) => (
          <div key={p.title} className="p-3 rounded-xl bg-dark-700/50 border border-dark-600">
            <p className="text-dark-200 text-sm font-medium">
              <span className="mr-2">{p.icon}</span>{p.title}
            </p>
            <p className="text-dark-400 text-xs mt-1">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* The oath */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-4">
        <p className="text-emerald-400 font-medium text-center">The Oath</p>
        <p className="text-dark-200 text-center mt-2 italic">
          "I swear by my life and my love of it that I will never live for the sake of
          another man, nor ask another man to live for mine."
        </p>
      </div>

      {/* Key insight */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">The Utopia of Greed</p>
        <p className="text-dark-300 text-sm mt-2">
          The valley proves that when men are free to think and produce, when trade replaces
          force, when each keeps what they earn — prosperity and harmony result naturally.
          No sacrifice is required; only justice.
        </p>
      </div>
    </div>
  );
}
