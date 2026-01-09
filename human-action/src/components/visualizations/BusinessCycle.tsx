import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type Phase = 'equilibrium' | 'expansion' | 'boom' | 'bust' | 'recovery';

export function BusinessCycle({ className = '' }: Props) {
  const [phase, setPhase] = useState<Phase>('equilibrium');
  const [creditExpansion, setCreditExpansion] = useState(0);

  const phaseData = useMemo(() => {
    switch (phase) {
      case 'equilibrium':
        return {
          naturalRate: 5,
          marketRate: 5,
          investment: 50,
          consumption: 50,
          savings: 50,
          malinvestment: 0,
          description: 'Interest rates coordinate saving and investment. Resources flow to sustainable projects.',
        };
      case 'expansion':
        return {
          naturalRate: 5,
          marketRate: 3,
          investment: 70,
          consumption: 55,
          savings: 50,
          malinvestment: 20,
          description: 'Central bank creates new credit. Market rate falls below natural rate. Investment booms.',
        };
      case 'boom':
        return {
          naturalRate: 5,
          marketRate: 2,
          investment: 85,
          consumption: 65,
          savings: 45,
          malinvestment: 45,
          description: 'Artificial boom! Malinvestment accumulates. Resources flow to unsustainable projects.',
        };
      case 'bust':
        return {
          naturalRate: 6,
          marketRate: 7,
          investment: 30,
          consumption: 40,
          savings: 55,
          malinvestment: 60,
          description: 'Reality sets in. Malinvestments liquidated. Credit contracts. Recession begins.',
        };
      case 'recovery':
        return {
          naturalRate: 5.5,
          marketRate: 5.5,
          investment: 45,
          consumption: 48,
          savings: 52,
          malinvestment: 20,
          description: 'Reallocation of resources. Sustainable projects resume. Economy heals.',
        };
    }
  }, [phase]);

  const phases: { id: Phase; label: string; color: string }[] = [
    { id: 'equilibrium', label: '1. Equilibrium', color: '#10b981' },
    { id: 'expansion', label: '2. Credit Expansion', color: '#3b82f6' },
    { id: 'boom', label: '3. Boom', color: '#f97316' },
    { id: 'bust', label: '4. Bust', color: '#ef4444' },
    { id: 'recovery', label: '5. Recovery', color: '#8b5cf6' },
  ];

  // Cycle animation data
  const cycleData = [
    { x: 50, y: 100 },   // equilibrium
    { x: 100, y: 60 },   // expansion
    { x: 180, y: 30 },   // boom peak
    { x: 260, y: 150 },  // bust trough
    { x: 340, y: 100 },  // recovery
  ];

  const currentPhaseIndex = phases.findIndex(p => p.id === phase);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Austrian Business Cycle Theory</h3>

      <p className="text-dark-300 mb-6">
        Credit expansion by central banks creates artificial booms that inevitably end in busts.
        The manipulation of interest rates distorts the signals that coordinate economic activity.
      </p>

      {/* Phase selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {phases.map((p) => (
          <button
            key={p.id}
            onClick={() => setPhase(p.id)}
            style={{ borderColor: phase === p.id ? p.color : undefined }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              phase === p.id
                ? 'bg-dark-700 text-white border-2'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700 border-2 border-transparent'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Cycle visualization */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 180" className="w-full h-auto">
          {/* Grid */}
          <line x1={30} y1={90} x2={380} y2={90} stroke="#374151" strokeWidth={1} strokeDasharray="4 4" />

          {/* Labels */}
          <text x={15} y={50} fill="#10b981" fontSize="9">Boom</text>
          <text x={15} y={140} fill="#ef4444" fontSize="9">Bust</text>

          {/* Cycle path */}
          <path
            d={`M ${cycleData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${d.x} ${d.y}`).join(' ')} L 390 100`}
            fill="none"
            stroke="#6b7280"
            strokeWidth={2}
          />

          {/* Phase points */}
          {cycleData.map((d, i) => (
            <g key={i}>
              <circle
                cx={d.x}
                cy={d.y}
                r={currentPhaseIndex === i ? 10 : 6}
                fill={currentPhaseIndex === i ? phases[i].color : '#4b5563'}
                className="transition-all duration-300"
              />
              {currentPhaseIndex === i && (
                <circle
                  cx={d.x}
                  cy={d.y}
                  r={15}
                  fill="none"
                  stroke={phases[i].color}
                  strokeWidth={2}
                  opacity={0.5}
                />
              )}
            </g>
          ))}

          {/* Sustainable growth line */}
          <line x1={30} y1={100} x2={380} y2={90} stroke="#10b981" strokeWidth={1} strokeDasharray="2 2" />
          <text x={390} y={93} fill="#10b981" fontSize="8">Sustainable</text>
        </svg>
      </div>

      {/* Current phase description */}
      <div
        className="p-4 rounded-xl mb-4 border"
        style={{
          backgroundColor: `${phases[currentPhaseIndex].color}20`,
          borderColor: `${phases[currentPhaseIndex].color}50`,
        }}
      >
        <p style={{ color: phases[currentPhaseIndex].color }} className="font-medium">
          {phases[currentPhaseIndex].label}
        </p>
        <p className="text-dark-300 text-sm mt-2">{phaseData.description}</p>
      </div>

      {/* Economic indicators */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-xs">Natural Rate of Interest</p>
          <p className="text-emerald-400 font-mono text-lg">{phaseData.naturalRate}%</p>
          <p className="text-dark-500 text-xs">Determined by time preference</p>
        </div>
        <div className="p-3 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-xs">Market Rate of Interest</p>
          <p className={`font-mono text-lg ${
            phaseData.marketRate < phaseData.naturalRate ? 'text-orange-400' :
            phaseData.marketRate > phaseData.naturalRate ? 'text-red-400' : 'text-emerald-400'
          }`}>
            {phaseData.marketRate}%
          </p>
          <p className="text-dark-500 text-xs">Set by central bank</p>
        </div>
      </div>

      {/* Bar charts */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <div className="space-y-3">
          {[
            { label: 'Investment', value: phaseData.investment, color: '#3b82f6' },
            { label: 'Consumption', value: phaseData.consumption, color: '#f97316' },
            { label: 'Savings', value: phaseData.savings, color: '#10b981' },
            { label: 'Malinvestment', value: phaseData.malinvestment, color: '#ef4444' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-dark-400">{item.label}</span>
                <span style={{ color: item.color }} className="font-mono">{item.value}%</span>
              </div>
              <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.value}%`, backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">The Austrian Insight</p>
        <p className="text-dark-300 text-sm mt-2">
          When banks create credit out of thin air, they lower interest rates below the natural rate.
          Entrepreneurs interpret this as a signal that more resources are available for long-term
          projects than actually exist. The boom is artificial; the bust is inevitable.
        </p>
        <p className="text-dark-400 text-xs mt-2">
          "The boom produces impoverishment. But still more disastrous are its moral ravages."
          — Ludwig von Mises
        </p>
      </div>
    </div>
  );
}
