import { useState } from 'react';

export function BinaryConverter() {
  const [decimal, setDecimal] = useState(42);
  const [showSteps, setShowSteps] = useState(true);

  const binary = decimal.toString(2);
  const binaryDigits = binary.split('').map(Number);

  // Calculate conversion steps (division method)
  const divisionSteps: { quotient: number; remainder: number }[] = [];
  let n = decimal;
  while (n > 0) {
    divisionSteps.push({ quotient: Math.floor(n / 2), remainder: n % 2 });
    n = Math.floor(n / 2);
  }

  // SVG dimensions
  const width = 400;
  const height = 180;
  const bitWidth = 35;
  const startX = (width - binaryDigits.length * bitWidth) / 2;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Binary Number Explorer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Binary digits with place values */}
            {binaryDigits.map((bit, i) => {
              const position = binaryDigits.length - 1 - i;
              const placeValue = Math.pow(2, position);
              const x = startX + i * bitWidth;

              return (
                <g key={i}>
                  {/* Place value (power of 2) */}
                  <text x={x + bitWidth / 2} y={30} fill="#6b7280" fontSize="10" textAnchor="middle">
                    2^{position}
                  </text>
                  <text x={x + bitWidth / 2} y={45} fill="#6b7280" fontSize="10" textAnchor="middle">
                    ({placeValue})
                  </text>

                  {/* Binary digit box */}
                  <rect
                    x={x + 2}
                    y={55}
                    width={bitWidth - 4}
                    height={35}
                    rx="4"
                    fill={bit === 1 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(75, 85, 99, 0.3)'}
                    stroke={bit === 1 ? '#10b981' : '#4b5563'}
                    strokeWidth="2"
                  />
                  <text
                    x={x + bitWidth / 2}
                    y={78}
                    fill={bit === 1 ? '#10b981' : '#6b7280'}
                    fontSize="18"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {bit}
                  </text>

                  {/* Contribution to sum */}
                  {bit === 1 && (
                    <text x={x + bitWidth / 2} y={110} fill="#10b981" fontSize="11" textAnchor="middle">
                      +{placeValue}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Sum line */}
            <line x1={startX} y1={125} x2={startX + binaryDigits.length * bitWidth} y2={125} stroke="#6b7280" strokeWidth="1" />

            {/* Result */}
            <text x={width / 2} y={145} fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
              = {decimal}
            </text>

            {/* Decimal label */}
            <text x={width / 2} y={165} fill="#6b7280" fontSize="11" textAnchor="middle">
              (decimal)
            </text>
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Decimal Number: {decimal}
            </label>
            <input
              type="range"
              min="0"
              max="255"
              step="1"
              value={decimal}
              onChange={(e) => setDecimal(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowSteps(!showSteps)}
              className={`px-3 py-1 rounded text-sm ${showSteps ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              {showSteps ? 'Hide' : 'Show'} Division Steps
            </button>
          </div>

          {showSteps && decimal > 0 && (
            <div className="bg-dark-700 rounded-lg p-4 text-sm max-h-40 overflow-y-auto">
              <div className="text-dark-300 mb-2">Division by 2 method:</div>
              {divisionSteps.map((step, i) => (
                <div key={i} className="text-dark-200 font-mono">
                  {i === 0 ? decimal : divisionSteps[i - 1].quotient} ÷ 2 = {step.quotient} R <span className="text-emerald-400">{step.remainder}</span>
                </div>
              ))}
              <div className="border-t border-dark-600 mt-2 pt-2 text-dark-300">
                Read remainders bottom-up: <span className="text-emerald-400 font-mono">{binary}</span>
              </div>
            </div>
          )}

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-amber-400">Decimal:</span> {decimal}
            </div>
            <div className="text-dark-200">
              <span className="text-emerald-400">Binary:</span> <span className="font-mono">{binary || '0'}</span>
            </div>
            <div className="text-dark-200">
              <span className="text-blue-400">Bits needed:</span> {binary.length || 1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
