import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function DirectExchange({ className = '' }: Props) {
  const [aliceApples, setAliceApples] = useState(10);
  const [aliceOranges, setAliceOranges] = useState(2);
  const [bobApples, setBobApples] = useState(2);
  const [bobOranges, setBobOranges] = useState(10);
  const [tradeApples, setTradeApples] = useState(3);
  const [tradeOranges, setTradeOranges] = useState(3);

  // Calculate utilities (simple Cobb-Douglas style)
  const aliceUtilityBefore = Math.sqrt(aliceApples * aliceOranges);
  const bobUtilityBefore = Math.sqrt(bobApples * bobOranges);

  const aliceUtilityAfter = Math.sqrt((aliceApples - tradeApples) * (aliceOranges + tradeOranges));
  const bobUtilityAfter = Math.sqrt((bobApples + tradeApples) * (bobOranges - tradeOranges));

  const tradeValid = tradeApples <= aliceApples && tradeOranges <= bobOranges;
  const aliceBenefits = tradeValid && aliceUtilityAfter > aliceUtilityBefore;
  const bobBenefits = tradeValid && bobUtilityAfter > bobUtilityBefore;
  const bothBenefit = aliceBenefits && bobBenefits;

  // Exchange ratios
  const exchangeRatio = tradeOranges > 0 ? (tradeApples / tradeOranges).toFixed(2) : '∞';

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Direct Exchange</h3>

      <p className="text-dark-300 mb-6">
        Two people trade only if both expect to benefit. Each person values goods differently,
        making mutually beneficial exchange possible.
      </p>

      {/* Initial endowments */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-400 font-medium mb-3">Alice's Endowment</p>
          <div className="space-y-2">
            <div>
              <label className="text-dark-400 text-sm">Apples: {aliceApples}</label>
              <input
                type="range"
                min="1"
                max="15"
                value={aliceApples}
                onChange={(e) => setAliceApples(parseInt(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-sm">Oranges: {aliceOranges}</label>
              <input
                type="range"
                min="1"
                max="15"
                value={aliceOranges}
                onChange={(e) => setAliceOranges(parseInt(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-orange-400 font-medium mb-3">Bob's Endowment</p>
          <div className="space-y-2">
            <div>
              <label className="text-dark-400 text-sm">Apples: {bobApples}</label>
              <input
                type="range"
                min="1"
                max="15"
                value={bobApples}
                onChange={(e) => setBobApples(parseInt(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-sm">Oranges: {bobOranges}</label>
              <input
                type="range"
                min="1"
                max="15"
                value={bobOranges}
                onChange={(e) => setBobOranges(parseInt(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Proposed trade */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600 mb-6">
        <p className="text-dark-300 font-medium mb-3">Proposed Trade</p>
        <p className="text-dark-400 text-sm mb-3">
          Alice gives apples, receives oranges. Bob gives oranges, receives apples.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-dark-400 text-sm">Apples traded: {tradeApples}</label>
            <input
              type="range"
              min="0"
              max={Math.min(aliceApples, 10)}
              value={tradeApples}
              onChange={(e) => setTradeApples(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
          <div>
            <label className="text-dark-400 text-sm">Oranges traded: {tradeOranges}</label>
            <input
              type="range"
              min="0"
              max={Math.min(bobOranges, 10)}
              value={tradeOranges}
              onChange={(e) => setTradeOranges(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
        </div>
        <p className="text-dark-400 text-xs mt-2">
          Exchange ratio: {exchangeRatio} apples per orange
        </p>
      </div>

      {/* Visual representation */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 180" className="w-full h-auto">
          {/* Alice before */}
          <g transform="translate(50, 30)">
            <text x={40} y={-10} fill="#3b82f6" fontSize="12" textAnchor="middle">Alice Before</text>
            {Array.from({ length: Math.min(aliceApples, 8) }, (_, i) => (
              <circle key={`aa-${i}`} cx={10 + (i % 4) * 20} cy={10 + Math.floor(i / 4) * 20} r={8} fill="#ef4444" />
            ))}
            {aliceApples > 8 && <text x={70} y={15} fill="#ef4444" fontSize="10">+{aliceApples - 8}</text>}
            {Array.from({ length: Math.min(aliceOranges, 4) }, (_, i) => (
              <circle key={`ao-${i}`} cx={10 + i * 20} cy={55} r={8} fill="#f97316" />
            ))}
            {aliceOranges > 4 && <text x={70} y={55} fill="#f97316" fontSize="10">+{aliceOranges - 4}</text>}
          </g>

          {/* Arrow */}
          <path d="M 160 70 L 240 70" stroke="#10b981" strokeWidth={2} markerEnd="url(#arrowhead)" />
          <text x={200} y={60} fill="#10b981" fontSize="10" textAnchor="middle">Trade</text>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
            </marker>
          </defs>

          {/* Alice after */}
          <g transform="translate(270, 30)">
            <text x={40} y={-10} fill="#3b82f6" fontSize="12" textAnchor="middle">Alice After</text>
            {Array.from({ length: Math.min(aliceApples - tradeApples, 8) }, (_, i) => (
              <circle key={`aab-${i}`} cx={10 + (i % 4) * 20} cy={10 + Math.floor(i / 4) * 20} r={8} fill="#ef4444" />
            ))}
            {Array.from({ length: Math.min(aliceOranges + tradeOranges, 8) }, (_, i) => (
              <circle key={`aob-${i}`} cx={10 + (i % 4) * 20} cy={55 + Math.floor(i / 4) * 20} r={8} fill="#f97316" />
            ))}
          </g>

          {/* Bob before */}
          <g transform="translate(50, 110)">
            <text x={40} y={-10} fill="#f97316" fontSize="12" textAnchor="middle">Bob Before</text>
            {Array.from({ length: Math.min(bobApples, 4) }, (_, i) => (
              <circle key={`ba-${i}`} cx={10 + i * 20} cy={10} r={8} fill="#ef4444" />
            ))}
            {Array.from({ length: Math.min(bobOranges, 8) }, (_, i) => (
              <circle key={`bo-${i}`} cx={10 + (i % 4) * 20} cy={35 + Math.floor(i / 4) * 20} r={8} fill="#f97316" />
            ))}
            {bobOranges > 8 && <text x={70} y={55} fill="#f97316" fontSize="10">+{bobOranges - 8}</text>}
          </g>

          {/* Bob after */}
          <g transform="translate(270, 110)">
            <text x={40} y={-10} fill="#f97316" fontSize="12" textAnchor="middle">Bob After</text>
            {Array.from({ length: Math.min(bobApples + tradeApples, 8) }, (_, i) => (
              <circle key={`bab-${i}`} cx={10 + (i % 4) * 20} cy={10 + Math.floor(i / 4) * 20} r={8} fill="#ef4444" />
            ))}
            {Array.from({ length: Math.min(bobOranges - tradeOranges, 8) }, (_, i) => (
              <circle key={`bob-${i}`} cx={10 + (i % 4) * 20} cy={55 + Math.floor(i / 4) * 20} r={8} fill="#f97316" />
            ))}
          </g>
        </svg>
        <div className="flex justify-center gap-4 mt-2">
          <span className="text-xs text-dark-400"><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1"></span> Apples</span>
          <span className="text-xs text-dark-400"><span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-1"></span> Oranges</span>
        </div>
      </div>

      {/* Utility comparison */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={`p-3 rounded-xl border ${aliceBenefits ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
          <p className="text-dark-400 text-xs">Alice's Satisfaction</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-400 font-mono">{aliceUtilityBefore.toFixed(2)}</span>
            <span className="text-dark-400">→</span>
            <span className={`font-mono ${aliceBenefits ? 'text-emerald-400' : 'text-red-400'}`}>
              {tradeValid ? aliceUtilityAfter.toFixed(2) : 'Invalid'}
            </span>
          </div>
          <p className={`text-xs mt-1 ${aliceBenefits ? 'text-emerald-400' : 'text-red-400'}`}>
            {aliceBenefits ? '✓ Benefits' : '✗ Does not benefit'}
          </p>
        </div>
        <div className={`p-3 rounded-xl border ${bobBenefits ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
          <p className="text-dark-400 text-xs">Bob's Satisfaction</p>
          <div className="flex justify-between items-center">
            <span className="text-orange-400 font-mono">{bobUtilityBefore.toFixed(2)}</span>
            <span className="text-dark-400">→</span>
            <span className={`font-mono ${bobBenefits ? 'text-emerald-400' : 'text-red-400'}`}>
              {tradeValid ? bobUtilityAfter.toFixed(2) : 'Invalid'}
            </span>
          </div>
          <p className={`text-xs mt-1 ${bobBenefits ? 'text-emerald-400' : 'text-red-400'}`}>
            {bobBenefits ? '✓ Benefits' : '✗ Does not benefit'}
          </p>
        </div>
      </div>

      {/* Trade verdict */}
      <div className={`p-4 rounded-xl mb-4 border ${
        bothBenefit ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-dark-700/50 border-dark-600'
      }`}>
        <p className={`font-medium ${bothBenefit ? 'text-emerald-400' : 'text-dark-400'}`}>
          {bothBenefit ? '✓ Trade Will Occur!' : '✗ No Trade'}
        </p>
        <p className="text-dark-300 text-sm mt-1">
          {bothBenefit
            ? 'Both parties benefit, so the exchange is mutually advantageous.'
            : 'At least one party does not benefit. Adjust the trade terms to find a mutually beneficial exchange.'}
        </p>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Rothbard on Exchange</p>
        <p className="text-dark-300 text-sm mt-2">
          "Exchange can take place only when each party values what he receives more highly
          than what he gives up... Both parties benefit from an exchange; if they did not
          expect to benefit, they would not agree to the exchange."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          The psychic revenue from each unit must exceed the psychic cost for both parties.
        </p>
      </div>
    </div>
  );
}
