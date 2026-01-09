import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function ProductionStructure({ className = '' }: Props) {
  const [timePreference, setTimePreference] = useState(50);
  const [showMalinvestment, setShowMalinvestment] = useState(false);

  // Higher time preference = more consumption, less saving
  // Lower time preference = more saving, longer production structure
  const savingsRate = 100 - timePreference;
  const consumptionRate = timePreference;

  // Production stages (Hayekian triangle)
  const baseStages = useMemo(() => {
    const numStages = Math.floor(3 + (savingsRate / 20)); // 3-8 stages
    const stages = [];

    for (let i = 0; i < numStages; i++) {
      const stageOutput = 100 * Math.pow(0.85, numStages - 1 - i);
      stages.push({
        stage: i + 1,
        name: i === numStages - 1 ? 'Consumer Goods' :
              i === 0 ? 'Raw Materials' :
              `Stage ${i + 1}`,
        output: stageOutput,
        isFinal: i === numStages - 1,
        isFirst: i === 0,
      });
    }

    return stages;
  }, [savingsRate]);

  // Malinvestment shows artificially lengthened structure
  const malinvestmentStages = useMemo(() => {
    if (!showMalinvestment) return [];

    return [
      { stage: 0, name: 'New Mining', output: 20, isNew: true },
      { stage: -1, name: 'New Factory', output: 30, isNew: true },
    ];
  }, [showMalinvestment]);

  const totalStages = baseStages.length + (showMalinvestment ? 2 : 0);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Structure of Production</h3>

      <p className="text-dark-300 mb-6">
        Production takes time and has stages. Lower time preference means more saving,
        which lengthens the production structure and increases future output.
      </p>

      {/* Time preference control */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-emerald-400">Low Time Preference</span>
          <span className="text-orange-400">High Time Preference</span>
        </div>
        <input
          type="range"
          min="20"
          max="80"
          value={timePreference}
          onChange={(e) => setTimePreference(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #10b981 0%, #f97316 100%)`
          }}
        />
      </div>

      {/* Savings/Consumption split */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Savings Rate</p>
          <p className="text-emerald-400 font-mono text-xl">{savingsRate}%</p>
          <p className="text-dark-500 text-xs">Funds production stages</p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Consumption Rate</p>
          <p className="text-orange-400 font-mono text-xl">{consumptionRate}%</p>
          <p className="text-dark-500 text-xs">Immediate consumption</p>
        </div>
      </div>

      {/* Hayekian Triangle */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <p className="text-dark-400 text-sm mb-3">Production Structure (Hayekian Triangle)</p>
        <svg viewBox="0 0 400 180" className="w-full h-auto">
          {/* Time axis */}
          <line x1={30} y1={150} x2={370} y2={150} stroke="#6b7280" strokeWidth={2} />
          <text x={200} y={175} fill="#9ca3af" fontSize="11" textAnchor="middle">Time →</text>

          {/* Value axis */}
          <line x1={30} y1={20} x2={30} y2={150} stroke="#6b7280" strokeWidth={2} />
          <text x={15} y={85} fill="#9ca3af" fontSize="11" textAnchor="middle" transform="rotate(-90, 15, 85)">
            Value
          </text>

          {/* Triangle showing stages */}
          {baseStages.map((stage, i) => {
            const stageWidth = 320 / totalStages;
            const x = 40 + (showMalinvestment ? 2 : 0) * stageWidth + i * stageWidth;
            const height = (stage.output / 100) * 120;

            return (
              <g key={stage.stage}>
                <rect
                  x={x}
                  y={150 - height}
                  width={stageWidth - 5}
                  height={height}
                  fill={stage.isFinal ? '#f97316' : '#3b82f6'}
                  fillOpacity={0.6}
                  stroke={stage.isFinal ? '#f97316' : '#3b82f6'}
                  strokeWidth={2}
                  rx={2}
                />
                <text
                  x={x + (stageWidth - 5) / 2}
                  y={155 - height + 15}
                  fill="#fff"
                  fontSize="8"
                  textAnchor="middle"
                >
                  {stage.isFirst ? '⛏️' : stage.isFinal ? '🛒' : '🏭'}
                </text>
              </g>
            );
          })}

          {/* Malinvestment stages (if shown) */}
          {showMalinvestment && malinvestmentStages.map((stage, i) => {
            const stageWidth = 320 / totalStages;
            const x = 40 + i * stageWidth;
            const height = (stage.output / 100) * 120;

            return (
              <g key={`mal-${i}`}>
                <rect
                  x={x}
                  y={150 - height}
                  width={stageWidth - 5}
                  height={height}
                  fill="#ef4444"
                  fillOpacity={0.4}
                  stroke="#ef4444"
                  strokeWidth={2}
                  strokeDasharray="4 2"
                  rx={2}
                />
                <text
                  x={x + (stageWidth - 5) / 2}
                  y={155 - height + 15}
                  fill="#ef4444"
                  fontSize="8"
                  textAnchor="middle"
                >
                  ⚠️
                </text>
              </g>
            );
          })}

          {/* Triangle outline */}
          <path
            d={`M 40 150 L ${40 + 320} 150 L ${40 + 320} ${150 - 120} Z`}
            fill="none"
            stroke="#4b5563"
            strokeWidth={1}
            strokeDasharray="4 4"
          />

          {/* Labels */}
          <text x={50} y={165} fill="#9ca3af" fontSize="9">Higher-order</text>
          <text x={320} y={165} fill="#9ca3af" fontSize="9">Consumer goods</text>
        </svg>
      </div>

      {/* Malinvestment toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowMalinvestment(!showMalinvestment)}
          className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
            showMalinvestment
              ? 'bg-red-500/20 text-red-400 border border-red-500/50'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          {showMalinvestment ? '🚨 Credit Expansion Active — Malinvestment!' : 'Simulate Credit Expansion'}
        </button>
      </div>

      {showMalinvestment && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-4">
          <p className="text-red-400 font-medium">Malinvestment Warning!</p>
          <p className="text-dark-300 text-sm mt-2">
            Artificially low interest rates from credit expansion signal that more savings exist
            than actually do. Entrepreneurs invest in longer production processes that cannot be
            sustained — these are malinvestments that must eventually be liquidated.
          </p>
        </div>
      )}

      {/* Stage breakdown */}
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-700">
              <th className="p-2 text-left">Stage</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-right">Relative Output</th>
            </tr>
          </thead>
          <tbody>
            {baseStages.map((stage) => (
              <tr key={stage.stage} className="border-b border-dark-800">
                <td className="p-2 text-dark-300">{stage.stage}</td>
                <td className="p-2 text-dark-300">
                  {stage.isFirst ? '⛏️ Raw materials extraction' :
                   stage.isFinal ? '🛒 Final consumer goods' :
                   `🏭 Intermediate processing`}
                </td>
                <td className="p-2 text-right font-mono text-blue-400">
                  {Math.round(stage.output)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Production Stages</p>
          <p className="text-blue-400 font-mono text-xl">{baseStages.length}</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Roundaboutness</p>
          <p className="text-emerald-400 font-mono text-xl">{savingsRate > 60 ? 'High' : savingsRate > 40 ? 'Medium' : 'Low'}</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Rothbard on Production</p>
        <p className="text-dark-300 text-sm mt-2">
          "The structure of production is not just a single stage, but a complex temporal
          process with many stages. Increased saving permits a lengthening of the production
          structure, ultimately yielding more consumer goods."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          More "roundabout" methods of production are more productive, but require capital
          (saved resources) to sustain workers through the longer production period.
        </p>
      </div>
    </div>
  );
}
