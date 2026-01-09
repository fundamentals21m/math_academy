import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

interface Candidate {
  id: string;
  name: string;
  traits: {
    ruthlessness: number;
    idealism: number;
    conformity: number;
    competence: number;
  };
  description: string;
}

export function WorstGetOnTop({ className = '' }: Props) {
  const [round, setRound] = useState(1);

  const candidates: Candidate[] = [
    {
      id: 'idealist',
      name: 'The Idealist',
      traits: { ruthlessness: 10, idealism: 90, conformity: 50, competence: 70 },
      description: 'Genuinely believes in the cause, but unwilling to do "whatever it takes"',
    },
    {
      id: 'moderate',
      name: 'The Moderate',
      traits: { ruthlessness: 30, idealism: 60, conformity: 40, competence: 80 },
      description: 'Competent administrator who seeks compromise and questions extreme measures',
    },
    {
      id: 'conformist',
      name: 'The Conformist',
      traits: { ruthlessness: 50, idealism: 30, conformity: 90, competence: 50 },
      description: 'Will follow orders without question, lacks independent moral judgment',
    },
    {
      id: 'cynical',
      name: 'The Cynic',
      traits: { ruthlessness: 70, idealism: 20, conformity: 60, competence: 60 },
      description: 'Sees through the ideology but uses it for personal advancement',
    },
    {
      id: 'ruthless',
      name: 'The Ruthless',
      traits: { ruthlessness: 95, idealism: 10, conformity: 80, competence: 70 },
      description: 'Will do absolutely anything to advance the cause and their position',
    },
  ];

  // Selection dynamics: each round eliminates candidates based on traits
  const remainingCandidates = useMemo(() => {
    let remaining = [...candidates];

    // Round 1: Idealists leave or are sidelined
    if (round >= 2) {
      remaining = remaining.filter(c => c.traits.ruthlessness > 20 || c.traits.conformity > 70);
    }

    // Round 2: Moderates are purged for "insufficient commitment"
    if (round >= 3) {
      remaining = remaining.filter(c => c.traits.ruthlessness > 40 || c.traits.conformity > 80);
    }

    // Round 3: Only the most ruthless and conformist remain
    if (round >= 4) {
      remaining = remaining.filter(c => c.traits.ruthlessness > 60);
    }

    // Round 4: Final selection - the worst rise to the very top
    if (round >= 5) {
      remaining = remaining.filter(c => c.traits.ruthlessness > 90);
    }

    return remaining;
  }, [round]);

  const eliminated = candidates.filter(c => !remainingCandidates.find(r => r.id === c.id));

  const roundDescriptions = [
    'Initial revolutionary movement - all types participate',
    'Idealists are sidelined when asked to compromise principles',
    'Moderates are purged for questioning extreme measures',
    'Power struggle - only ruthless survivors remain',
    'The most unscrupulous rise to the very top',
  ];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Why the Worst Get on Top</h3>

      <p className="text-dark-300 mb-6">
        Hayek explains why totalitarian systems systematically select for and promote
        the most ruthless individuals — a process of "negative selection."
      </p>

      {/* Round controls */}
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((r) => (
          <button
            key={r}
            onClick={() => setRound(r)}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              round === r
                ? 'bg-red-500/30 text-red-400 border border-red-500/50'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Stage {r}
          </button>
        ))}
      </div>

      {/* Round description */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600 mb-4">
        <p className="text-dark-400 text-sm">Stage {round}:</p>
        <p className="text-dark-200">{roundDescriptions[round - 1]}</p>
      </div>

      {/* Candidate visualization */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 180" className="w-full h-auto">
          {/* Pyramid structure */}
          <path
            d="M 200 20 L 350 150 L 50 150 Z"
            fill="none"
            stroke="#374151"
            strokeWidth={2}
          />

          {/* Candidates */}
          {candidates.map((candidate, i) => {
            const isRemaining = remainingCandidates.find(c => c.id === candidate.id);
            const yPos = 140 - i * 25;
            const xVariation = (Math.sin(i * 1.5) * 30);

            return (
              <g key={candidate.id} className="transition-all duration-500">
                <circle
                  cx={200 + xVariation}
                  cy={yPos}
                  r={isRemaining ? 15 : 10}
                  fill={isRemaining ? `hsl(${candidate.traits.ruthlessness * 1.2}, 70%, 40%)` : '#374151'}
                  fillOpacity={isRemaining ? 0.8 : 0.3}
                  stroke={isRemaining ? '#fff' : '#6b7280'}
                  strokeWidth={isRemaining ? 2 : 1}
                />
                <text
                  x={200 + xVariation}
                  y={yPos + 5}
                  fill={isRemaining ? '#fff' : '#6b7280'}
                  fontSize="14"
                  textAnchor="middle"
                >
                  {['🌸', '⚖️', '🐑', '😏', '🐺'][i]}
                </text>
                {isRemaining && (
                  <text
                    x={200 + xVariation + (xVariation > 0 ? 25 : -25)}
                    y={yPos + 4}
                    fill="#9ca3af"
                    fontSize="8"
                    textAnchor={xVariation > 0 ? 'start' : 'end'}
                  >
                    {candidate.name.split(' ')[1]}
                  </text>
                )}
              </g>
            );
          })}

          {/* "Top" indicator */}
          {round >= 5 && (
            <text x={200} y={30} fill="#ef4444" fontSize="12" textAnchor="middle" fontWeight="bold">
              ⬆️ TOP
            </text>
          )}
        </svg>
      </div>

      {/* Remaining candidates detail */}
      <div className="mb-4">
        <p className="text-dark-400 text-sm mb-2">Remaining ({remainingCandidates.length}):</p>
        <div className="space-y-2">
          {remainingCandidates.map((c) => (
            <div key={c.id} className="p-3 rounded-lg bg-dark-700/50 border border-dark-600">
              <div className="flex justify-between items-center mb-1">
                <span className="text-dark-200 font-medium">{c.name}</span>
                <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400">
                  Ruthlessness: {c.traits.ruthlessness}
                </span>
              </div>
              <p className="text-dark-400 text-sm">{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eliminated */}
      {eliminated.length > 0 && (
        <div className="mb-4">
          <p className="text-dark-400 text-sm mb-2">Eliminated ({eliminated.length}):</p>
          <div className="flex flex-wrap gap-2">
            {eliminated.map((c) => (
              <span key={c.id} className="text-xs px-2 py-1 rounded bg-dark-700 text-dark-500 line-through">
                {c.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Selection mechanism */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-400 text-sm font-medium">Need Unity</p>
          <p className="text-dark-400 text-xs">Movements attract those who crave simple beliefs</p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-orange-400 text-sm font-medium">Need Force</p>
          <p className="text-dark-400 text-xs">Implementation requires those willing to coerce</p>
        </div>
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-red-400 text-sm font-medium">Need Hate</p>
          <p className="text-dark-400 text-xs">Common enemy unifies the less educated masses</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Hayek's Analysis</p>
        <p className="text-dark-300 text-sm mt-2">
          "There are three main reasons why such a numerous group, with fairly similar views,
          is not likely to be formed by the best but rather by the worst elements of any society."
        </p>
        <ul className="text-dark-400 text-xs mt-2 space-y-1">
          <li>1. The higher the education, the more people differ in their views</li>
          <li>2. Those with strong moral convictions will not do "whatever it takes"</li>
          <li>3. It is easier to unite people against an enemy than for a positive program</li>
        </ul>
      </div>
    </div>
  );
}
