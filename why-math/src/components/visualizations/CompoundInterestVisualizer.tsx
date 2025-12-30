import { useState } from 'react';

export function CompoundInterestVisualizer() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);
  const [compoundingFreq, setCompoundingFreq] = useState(1);

  const i = rate / 100;

  // Calculate amounts
  const simpleInterest = principal * (1 + i * years);
  const compoundAnnual = principal * Math.pow(1 + i, years);
  const compoundFreq = principal * Math.pow(1 + i / compoundingFreq, compoundingFreq * years);

  // Generate data for chart
  const data: { year: number; simple: number; compound: number }[] = [];
  for (let y = 0; y <= years; y++) {
    data.push({
      year: y,
      simple: principal * (1 + i * y),
      compound: principal * Math.pow(1 + i / compoundingFreq, compoundingFreq * y),
    });
  }

  // SVG dimensions
  const width = 400;
  const height = 250;
  const padding = 50;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const maxValue = Math.max(...data.map(d => Math.max(d.simple, d.compound)));
  const scaleX = graphWidth / years;
  const scaleY = graphHeight / maxValue;

  const toX = (year: number) => padding + year * scaleX;
  const toY = (value: number) => height - padding - value * scaleY;

  const simplePoints = data.map(d => `${toX(d.year)},${toY(d.simple)}`).join(' ');
  const compoundPoints = data.map(d => `${toX(d.year)},${toY(d.compound)}`).join(' ');

  const freqLabels: Record<number, string> = {
    1: 'Annually',
    4: 'Quarterly',
    12: 'Monthly',
    365: 'Daily',
  };

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Compound Interest Visualizer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Y-axis grid */}
            {[0, 0.25, 0.5, 0.75, 1].map((frac) => (
              <g key={frac}>
                <line
                  x1={padding}
                  y1={height - padding - frac * graphHeight}
                  x2={width - padding}
                  y2={height - padding - frac * graphHeight}
                  stroke="#374151"
                  strokeWidth="0.5"
                />
                <text
                  x={padding - 5}
                  y={height - padding - frac * graphHeight + 4}
                  fill="#6b7280"
                  fontSize="10"
                  textAnchor="end"
                >
                  ${Math.round(frac * maxValue)}
                </text>
              </g>
            ))}

            {/* X-axis labels */}
            {data.filter((_, i) => i % Math.ceil(years / 5) === 0).map((d) => (
              <text
                key={d.year}
                x={toX(d.year)}
                y={height - padding + 15}
                fill="#6b7280"
                fontSize="10"
                textAnchor="middle"
              >
                {d.year}
              </text>
            ))}

            {/* Axes */}
            <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#6b7280" />
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#6b7280" />

            {/* Simple interest line */}
            <polyline
              points={simplePoints}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="5,5"
            />

            {/* Compound interest line */}
            <polyline
              points={compoundPoints}
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />

            {/* Legend */}
            <line x1={width - 120} y1={20} x2={width - 100} y2={20} stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" />
            <text x={width - 95} y={24} fill="#f59e0b" fontSize="10">Simple</text>
            <line x1={width - 120} y1={35} x2={width - 100} y2={35} stroke="#10b981" strokeWidth="2" />
            <text x={width - 95} y={39} fill="#10b981" fontSize="10">Compound</text>

            {/* Axis labels */}
            <text x={width / 2} y={height - 5} fill="#6b7280" fontSize="11" textAnchor="middle">Years</text>
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Principal: ${principal}
            </label>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Interest Rate: {rate}%
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Years: {years}
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Compounding: {freqLabels[compoundingFreq]}
            </label>
            <div className="flex gap-2">
              {[1, 4, 12, 365].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setCompoundingFreq(freq)}
                  className={`px-3 py-1 rounded text-sm ${
                    compoundingFreq === freq
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-700 text-dark-300'
                  }`}
                >
                  {freqLabels[freq]}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-amber-400">Simple Interest:</span> ${simpleInterest.toFixed(2)}
            </div>
            <div className="text-dark-200">
              <span className="text-emerald-400">Compound ({freqLabels[compoundingFreq]}):</span> ${compoundFreq.toFixed(2)}
            </div>
            <div className="text-dark-200 border-t border-dark-600 pt-2">
              <span className="text-primary-400">Extra from compounding:</span> ${(compoundFreq - simpleInterest).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
