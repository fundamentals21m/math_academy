import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function PowerConcentration({ className = '' }: Props) {
  const [economicControl, setEconomicControl] = useState(20);

  const effects = useMemo(() => {
    // As economic control increases, other freedoms decrease
    const speechFreedom = Math.max(0, 100 - economicControl * 0.9);
    const movementFreedom = Math.max(0, 100 - economicControl * 0.7);
    const associationFreedom = Math.max(0, 100 - economicControl * 0.8);
    const religionFreedom = Math.max(0, 100 - economicControl * 0.5);
    const politicalFreedom = Math.max(0, 100 - economicControl * 1.0);

    return {
      speechFreedom,
      movementFreedom,
      associationFreedom,
      religionFreedom,
      politicalFreedom,
      averageFreedom: (speechFreedom + movementFreedom + associationFreedom + religionFreedom + politicalFreedom) / 5,
    };
  }, [economicControl]);

  const getControlDescription = () => {
    if (economicControl < 20) return { stage: 'Free Market', color: '#10b981', desc: 'Private ownership, free prices, voluntary exchange' };
    if (economicControl < 40) return { stage: 'Light Regulation', color: '#3b82f6', desc: 'Some controls on prices and wages' };
    if (economicControl < 60) return { stage: 'Heavy Intervention', color: '#f97316', desc: 'Extensive planning, licensing, subsidies' };
    if (economicControl < 80) return { stage: 'Socialism', color: '#ef4444', desc: 'State ownership, directed labor, rationing' };
    return { stage: 'Totalitarianism', color: '#7f1d1d', desc: 'Complete economic control, all activity state-directed' };
  };

  const controlInfo = getControlDescription();

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Economic Control = Total Control</h3>

      <p className="text-dark-300 mb-6">
        Hayek's crucial insight: Control of economic life is control of the means for ALL
        our ends. Economic planning necessarily leads to loss of personal freedom.
      </p>

      {/* Economic control slider */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-emerald-400">Free Economy</span>
          <span className="text-red-400">Total Control</span>
        </div>
        <label className="text-dark-400 text-sm mb-1 block">
          Economic Control: {economicControl}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={economicControl}
          onChange={(e) => setEconomicControl(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
          style={{
            accentColor: controlInfo.color,
          }}
        />
      </div>

      {/* Current stage */}
      <div
        className="p-4 rounded-xl mb-4 border"
        style={{
          backgroundColor: `${controlInfo.color}15`,
          borderColor: `${controlInfo.color}40`,
        }}
      >
        <p style={{ color: controlInfo.color }} className="font-bold">
          {controlInfo.stage}
        </p>
        <p className="text-dark-300 text-sm">{controlInfo.desc}</p>
      </div>

      {/* Freedom bars */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <p className="text-dark-400 text-sm mb-3">Resulting Personal Freedoms</p>
        <div className="space-y-3">
          {[
            { label: '🗣️ Free Speech', value: effects.speechFreedom },
            { label: '🚶 Movement', value: effects.movementFreedom },
            { label: '👥 Association', value: effects.associationFreedom },
            { label: '⛪ Religion', value: effects.religionFreedom },
            { label: '🗳️ Political', value: effects.politicalFreedom },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-dark-400">{item.label}</span>
                <span className={`font-mono ${
                  item.value > 60 ? 'text-emerald-400' :
                  item.value > 30 ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {Math.round(item.value)}%
                </span>
              </div>
              <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: item.value > 60 ? '#10b981' : item.value > 30 ? '#f97316' : '#ef4444',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual: Chain of dependence */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 120" className="w-full h-auto">
          {/* Central economic control node */}
          <circle cx={200} cy={30} r={25} fill={controlInfo.color} fillOpacity={0.3} stroke={controlInfo.color} strokeWidth={2} />
          <text x={200} y={35} fill={controlInfo.color} fontSize="16" textAnchor="middle">💰</text>
          <text x={200} y={65} fill={controlInfo.color} fontSize="10" textAnchor="middle" fontWeight="bold">
            Economic Control
          </text>

          {/* Dependent freedoms */}
          {[
            { x: 50, emoji: '🗣️', label: 'Speech' },
            { x: 125, emoji: '🏠', label: 'Housing' },
            { x: 200, emoji: '💼', label: 'Work' },
            { x: 275, emoji: '📚', label: 'Education' },
            { x: 350, emoji: '🏥', label: 'Healthcare' },
          ].map((item) => (
            <g key={item.label}>
              <line
                x1={200}
                y1={55}
                x2={item.x}
                y2={80}
                stroke={controlInfo.color}
                strokeWidth={economicControl > 40 ? 2 : 1}
                opacity={economicControl / 100}
              />
              <circle
                cx={item.x}
                cy={95}
                r={15}
                fill={economicControl > 50 ? `${controlInfo.color}30` : '#37415130'}
                stroke={economicControl > 50 ? controlInfo.color : '#6b7280'}
                strokeWidth={1}
              />
              <text x={item.x} y={100} fontSize="12" textAnchor="middle">{item.emoji}</text>
            </g>
          ))}
        </svg>
      </div>

      {/* The mechanism */}
      <div className="grid grid-cols-1 gap-3 mb-4">
        {[
          { emoji: '💼', title: 'Control Work', desc: 'If the state controls jobs, you cannot afford to dissent.' },
          { emoji: '🏠', title: 'Control Housing', desc: 'If the state provides housing, critics can be evicted.' },
          { emoji: '📰', title: 'Control Press', desc: 'If the state controls paper & printing, opposition cannot publish.' },
          { emoji: '🎓', title: 'Control Education', desc: 'If the state runs schools, children learn only approved ideas.' },
        ].map((item) => (
          <div key={item.title} className="p-3 rounded-xl bg-dark-700/50 border border-dark-600">
            <p className="text-dark-300 text-sm">
              <span className="mr-2">{item.emoji}</span>
              <span className="font-medium text-dark-200">{item.title}:</span> {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Hayek's Warning</p>
        <p className="text-dark-300 text-sm mt-2">
          "Economic control is not merely control of a sector of human life which can be
          separated from the rest; it is the control of the means for all our ends. And
          whoever has sole control of the means must also determine which ends are to be
          served."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          This is why "limited" economic planning tends to expand — and why it inevitably
          threatens all other freedoms.
        </p>
      </div>
    </div>
  );
}
