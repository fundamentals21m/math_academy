import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function MarginalUtility({ className = '' }: Props) {
  const [totalUnits, setTotalUnits] = useState(5);
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);

  // Marginal utility decreases with each unit
  const units = useMemo(() => {
    const baseUtility = 100;
    return Array.from({ length: totalUnits }, (_, i) => ({
      unit: i + 1,
      marginalUtility: Math.round(baseUtility / (i + 1)),
      totalUtility: Array.from({ length: i + 1 }, (_, j) => baseUtility / (j + 1))
        .reduce((a, b) => a + b, 0),
    }));
  }, [totalUnits]);

  const maxMarginal = units[0]?.marginalUtility || 100;
  const maxTotal = units[units.length - 1]?.totalUtility || 100;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Law of Diminishing Marginal Utility</h3>

      <p className="text-dark-300 mb-6">
        Each additional unit of a good provides less satisfaction than the previous one.
        This is why we rank our wants and satisfy the most urgent first.
      </p>

      {/* Controls */}
      <div className="mb-6">
        <label className="text-blue-400 text-sm">Number of Units: {totalUnits}</label>
        <input
          type="range"
          min="2"
          max="10"
          value={totalUnits}
          onChange={(e) => {
            setTotalUnits(parseInt(e.target.value));
            setSelectedUnit(null);
          }}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Visual representation */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 250" className="w-full h-auto">
          {/* Grid */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`grid-${i}`}
              x1={50}
              y1={40 + i * 40}
              x2={380}
              y2={40 + i * 40}
              stroke="#374151"
              strokeWidth={0.5}
            />
          ))}

          {/* Axes */}
          <line x1={50} y1={200} x2={380} y2={200} stroke="#6b7280" strokeWidth={2} />
          <line x1={50} y1={30} x2={50} y2={200} stroke="#6b7280" strokeWidth={2} />

          {/* Axis labels */}
          <text x={215} y={230} fill="#9ca3af" fontSize="12" textAnchor="middle">
            Units Consumed
          </text>
          <text x={20} y={120} fill="#9ca3af" fontSize="12" textAnchor="middle" transform="rotate(-90, 20, 120)">
            Utility
          </text>

          {/* Marginal utility bars */}
          {units.map((u, i) => {
            const barWidth = Math.min(30, 280 / totalUnits - 5);
            const x = 60 + i * (300 / totalUnits);
            const barHeight = (u.marginalUtility / maxMarginal) * 150;

            return (
              <g key={u.unit}>
                <rect
                  x={x}
                  y={200 - barHeight}
                  width={barWidth}
                  height={barHeight}
                  fill={selectedUnit === u.unit ? '#f97316' : '#3b82f6'}
                  fillOpacity={0.8}
                  rx={2}
                  className="cursor-pointer transition-colors"
                  onClick={() => setSelectedUnit(u.unit)}
                />
                <text
                  x={x + barWidth / 2}
                  y={215}
                  fill="#9ca3af"
                  fontSize="10"
                  textAnchor="middle"
                >
                  {u.unit}
                </text>
              </g>
            );
          })}

          {/* Total utility line */}
          <polyline
            points={units.map((u, i) => {
              const x = 60 + i * (300 / totalUnits) + Math.min(30, 280 / totalUnits - 5) / 2;
              const y = 200 - (u.totalUtility / maxTotal) * 150;
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="#10b981"
            strokeWidth={2}
          />

          {/* Total utility points */}
          {units.map((u, i) => {
            const x = 60 + i * (300 / totalUnits) + Math.min(30, 280 / totalUnits - 5) / 2;
            const y = 200 - (u.totalUtility / maxTotal) * 150;
            return (
              <circle
                key={`point-${u.unit}`}
                cx={x}
                cy={y}
                r={4}
                fill="#10b981"
                className="cursor-pointer"
                onClick={() => setSelectedUnit(u.unit)}
              />
            );
          })}

          {/* Legend */}
          <rect x={280} y={10} width={12} height={12} fill="#3b82f6" rx={2} />
          <text x={297} y={20} fill="#9ca3af" fontSize="10">Marginal</text>
          <circle cx={286} cy={35} r={4} fill="#10b981" />
          <text x={297} y={38} fill="#9ca3af" fontSize="10">Total</text>
        </svg>
      </div>

      {/* Data table */}
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-700">
              <th className="p-2 text-left">Unit</th>
              <th className="p-2 text-left">Marginal Utility</th>
              <th className="p-2 text-left">Total Utility</th>
            </tr>
          </thead>
          <tbody>
            {units.map((u) => (
              <tr
                key={u.unit}
                className={`border-b border-dark-800 cursor-pointer hover:bg-dark-700/50 ${
                  selectedUnit === u.unit ? 'bg-orange-500/20' : ''
                }`}
                onClick={() => setSelectedUnit(u.unit)}
              >
                <td className="p-2 text-dark-300">{u.unit}</td>
                <td className="p-2 text-blue-400 font-mono">{u.marginalUtility}</td>
                <td className="p-2 text-emerald-400 font-mono">{Math.round(u.totalUtility)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected unit info */}
      {selectedUnit !== null && (
        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 mb-4">
          <p className="text-orange-400 font-medium">Unit {selectedUnit}</p>
          <p className="text-dark-300 text-sm mt-1">
            The {selectedUnit === 1 ? 'first' : `${selectedUnit}${selectedUnit === 2 ? 'nd' : selectedUnit === 3 ? 'rd' : 'th'}`} unit adds{' '}
            <span className="text-blue-400 font-mono">{units[selectedUnit - 1].marginalUtility}</span> utility,
            bringing total utility to{' '}
            <span className="text-emerald-400 font-mono">{Math.round(units[selectedUnit - 1].totalUtility)}</span>.
          </p>
        </div>
      )}

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Key Insight</p>
        <p className="text-dark-300 text-sm mt-2">
          Mises explains that human beings rank their wants in order of importance.
          The first unit of any good goes to satisfy our most urgent want; each subsequent
          unit satisfies a progressively less urgent want. This is why marginal utility
          necessarily decreases.
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Notice how total utility increases at a decreasing rate — the curve flattens out.
        </p>
      </div>
    </div>
  );
}
