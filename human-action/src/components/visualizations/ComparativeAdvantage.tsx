import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function ComparativeAdvantage({ className = '' }: Props) {
  const [aliceCloth, setAliceCloth] = useState(3);
  const [aliceWine, setAliceWine] = useState(1);
  const [bobCloth, setBobCloth] = useState(1);
  const [bobWine, setBobWine] = useState(2);
  const [showTrade, setShowTrade] = useState(false);

  // Production possibilities (assume 10 hours of labor each)
  const hours = 10;

  const aliceMaxCloth = hours / aliceCloth;
  const aliceMaxWine = hours / aliceWine;
  const bobMaxCloth = hours / bobCloth;
  const bobMaxWine = hours / bobWine;

  // Comparative advantage calculation
  const aliceClothCost = aliceWine / aliceCloth; // wine foregone per cloth
  const bobClothCost = bobWine / bobCloth;

  const analysis = useMemo(() => {
    const aliceAdvantageInCloth = aliceClothCost < bobClothCost;
    return {
      aliceAdvantageInCloth,
      aliceShouldMake: aliceAdvantageInCloth ? 'Cloth' : 'Wine',
      bobShouldMake: aliceAdvantageInCloth ? 'Wine' : 'Cloth',
      aliceOpportunityCost: aliceAdvantageInCloth ? aliceClothCost : 1/aliceClothCost,
      bobOpportunityCost: aliceAdvantageInCloth ? bobClothCost : 1/bobClothCost,
    };
  }, [aliceClothCost, bobClothCost]);

  // Without trade: each produces half of each good
  const withoutTrade = {
    aliceCloth: aliceMaxCloth / 2,
    aliceWine: aliceMaxWine / 2,
    bobCloth: bobMaxCloth / 2,
    bobWine: bobMaxWine / 2,
  };

  // With specialization
  const withTrade = {
    aliceCloth: analysis.aliceAdvantageInCloth ? aliceMaxCloth : 0,
    aliceWine: analysis.aliceAdvantageInCloth ? 0 : aliceMaxWine,
    bobCloth: analysis.aliceAdvantageInCloth ? 0 : bobMaxCloth,
    bobWine: analysis.aliceAdvantageInCloth ? bobMaxWine : 0,
  };

  const totalWithout = {
    cloth: withoutTrade.aliceCloth + withoutTrade.bobCloth,
    wine: withoutTrade.aliceWine + withoutTrade.bobWine,
  };

  const totalWith = {
    cloth: withTrade.aliceCloth + withTrade.bobCloth,
    wine: withTrade.aliceWine + withTrade.bobWine,
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Ricardian Law of Association</h3>

      <p className="text-dark-300 mb-6">
        Even if one party is better at producing everything, trade still benefits both.
        What matters is <span className="text-blue-400">comparative</span>, not absolute advantage.
      </p>

      {/* Production controls */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-400 font-medium mb-3">Alice (hours per unit)</p>
          <div className="space-y-2">
            <div>
              <label className="text-dark-400 text-sm">Cloth: {aliceCloth}h</label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                value={aliceCloth}
                onChange={(e) => setAliceCloth(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-sm">Wine: {aliceWine}h</label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                value={aliceWine}
                onChange={(e) => setAliceWine(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-orange-400 font-medium mb-3">Bob (hours per unit)</p>
          <div className="space-y-2">
            <div>
              <label className="text-dark-400 text-sm">Cloth: {bobCloth}h</label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                value={bobCloth}
                onChange={(e) => setBobCloth(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-sm">Wine: {bobWine}h</label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                value={bobWine}
                onChange={(e) => setBobWine(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Production Possibility Frontiers */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <p className="text-dark-400 text-sm mb-2">Production Possibility Frontiers (10 hours each)</p>
        <svg viewBox="0 0 400 220" className="w-full h-auto">
          {/* Grid */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={`grid-${i}`}>
              <line x1={50} y1={40 + i * 40} x2={380} y2={40 + i * 40} stroke="#374151" strokeWidth={0.5} />
              <line x1={50 + i * 80} y1={40} x2={50 + i * 80} y2={200} stroke="#374151" strokeWidth={0.5} />
            </g>
          ))}

          {/* Axes */}
          <line x1={50} y1={200} x2={380} y2={200} stroke="#6b7280" strokeWidth={2} />
          <line x1={50} y1={40} x2={50} y2={200} stroke="#6b7280" strokeWidth={2} />

          {/* Labels */}
          <text x={215} y={218} fill="#9ca3af" fontSize="11" textAnchor="middle">Cloth</text>
          <text x={30} y={120} fill="#9ca3af" fontSize="11" textAnchor="middle" transform="rotate(-90, 30, 120)">Wine</text>

          {/* Scale marks */}
          {[0, 2, 4, 6, 8, 10].map((v) => (
            <g key={`scale-${v}`}>
              <text x={50 + v * 32} y={210} fill="#6b7280" fontSize="9" textAnchor="middle">{v}</text>
              <text x={42} y={200 - v * 16 + 3} fill="#6b7280" fontSize="9" textAnchor="end">{v}</text>
            </g>
          ))}

          {/* Alice's PPF */}
          <line
            x1={50}
            y1={200 - aliceMaxWine * 16}
            x2={50 + aliceMaxCloth * 32}
            y2={200}
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <circle cx={50} cy={200 - aliceMaxWine * 16} r={4} fill="#3b82f6" />
          <circle cx={50 + aliceMaxCloth * 32} cy={200} r={4} fill="#3b82f6" />

          {/* Bob's PPF */}
          <line
            x1={50}
            y1={200 - bobMaxWine * 16}
            x2={50 + bobMaxCloth * 32}
            y2={200}
            stroke="#f97316"
            strokeWidth={2}
          />
          <circle cx={50} cy={200 - bobMaxWine * 16} r={4} fill="#f97316" />
          <circle cx={50 + bobMaxCloth * 32} cy={200} r={4} fill="#f97316" />

          {/* Legend */}
          <line x1={280} y1={55} x2={305} y2={55} stroke="#3b82f6" strokeWidth={2} />
          <text x={310} y={58} fill="#9ca3af" fontSize="10">Alice</text>
          <line x1={280} y1={70} x2={305} y2={70} stroke="#f97316" strokeWidth={2} />
          <text x={310} y={73} fill="#9ca3af" fontSize="10">Bob</text>
        </svg>
      </div>

      {/* Opportunity costs */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-xs">Alice's cost of 1 Cloth</p>
          <p className="text-blue-400 font-mono">{aliceClothCost.toFixed(2)} Wine</p>
        </div>
        <div className="p-3 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-dark-400 text-xs">Bob's cost of 1 Cloth</p>
          <p className="text-orange-400 font-mono">{bobClothCost.toFixed(2)} Wine</p>
        </div>
      </div>

      {/* Analysis */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-4">
        <p className="text-emerald-400 font-medium">Comparative Advantage</p>
        <p className="text-dark-300 text-sm mt-2">
          Alice should specialize in <span className="text-blue-400 font-medium">{analysis.aliceShouldMake}</span> (lower opportunity cost).
          Bob should specialize in <span className="text-orange-400 font-medium">{analysis.bobShouldMake}</span>.
        </p>
      </div>

      {/* Trade comparison */}
      <button
        onClick={() => setShowTrade(!showTrade)}
        className="w-full mb-4 px-4 py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
      >
        {showTrade ? 'Hide' : 'Show'} Trade Benefits
      </button>

      {showTrade && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-dark-400 border-b border-dark-700">
                <th className="p-2 text-left">Scenario</th>
                <th className="p-2 text-center">Total Cloth</th>
                <th className="p-2 text-center">Total Wine</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-800">
                <td className="p-2 text-dark-300">Without Specialization</td>
                <td className="p-2 text-center text-dark-400 font-mono">{totalWithout.cloth.toFixed(1)}</td>
                <td className="p-2 text-center text-dark-400 font-mono">{totalWithout.wine.toFixed(1)}</td>
              </tr>
              <tr className="border-b border-dark-800 bg-emerald-500/10">
                <td className="p-2 text-emerald-400">With Specialization & Trade</td>
                <td className="p-2 text-center text-emerald-400 font-mono">{totalWith.cloth.toFixed(1)}</td>
                <td className="p-2 text-center text-emerald-400 font-mono">{totalWith.wine.toFixed(1)}</td>
              </tr>
              <tr className="bg-dark-700/50">
                <td className="p-2 text-dark-300 font-medium">Gain from Trade</td>
                <td className="p-2 text-center font-mono text-emerald-400">
                  +{(totalWith.cloth - totalWithout.cloth).toFixed(1)}
                </td>
                <td className="p-2 text-center font-mono text-emerald-400">
                  +{(totalWith.wine - totalWithout.wine).toFixed(1)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          The division of labor and exchange increase total output even when one party is
          absolutely more productive at everything. This is Mises's application of Ricardo's
          law of association — the foundation of social cooperation.
        </p>
      </div>
    </div>
  );
}
