import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function TimePreference({ className = '' }: Props) {
  const [interestRate, setInterestRate] = useState(5);
  const [years, setYears] = useState(10);
  const [presentValue, setPresentValue] = useState(1000);

  const calculations = useMemo(() => {
    const r = interestRate / 100;
    const periods = Array.from({ length: years + 1 }, (_, i) => ({
      year: i,
      futureValue: presentValue * Math.pow(1 + r, i),
      presentValueOf1000: 1000 / Math.pow(1 + r, i),
    }));

    return periods;
  }, [interestRate, years, presentValue]);

  const finalValue = calculations[calculations.length - 1].futureValue;
  const maxValue = finalValue * 1.1;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Time Preference</h3>

      <p className="text-dark-300 mb-6">
        Humans prefer present goods to future goods. Interest emerges from this universal
        fact of human nature — it is the price of time.
      </p>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-blue-400 text-sm">Present Value: ${presentValue}</label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={presentValue}
            onChange={(e) => setPresentValue(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-orange-400 text-sm">Interest Rate: {interestRate}%</label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>
        <div>
          <label className="text-emerald-400 text-sm">Years: {years}</label>
          <input
            type="range"
            min="1"
            max="30"
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Growth visualization */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <p className="text-dark-400 text-sm mb-2">Capital Growth Over Time</p>
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {/* Grid */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`grid-${i}`}
              x1={50}
              y1={30 + i * 40}
              x2={380}
              y2={30 + i * 40}
              stroke="#374151"
              strokeWidth={0.5}
            />
          ))}

          {/* Axes */}
          <line x1={50} y1={170} x2={380} y2={170} stroke="#6b7280" strokeWidth={2} />
          <line x1={50} y1={30} x2={50} y2={170} stroke="#6b7280" strokeWidth={2} />

          {/* Labels */}
          <text x={215} y={195} fill="#9ca3af" fontSize="11" textAnchor="middle">Years</text>
          <text x={25} y={100} fill="#9ca3af" fontSize="11" textAnchor="middle" transform="rotate(-90, 25, 100)">Value ($)</text>

          {/* Growth curve */}
          <path
            d={`M ${calculations.map((c, i) => {
              const x = 50 + (i / years) * 330;
              const y = 170 - ((c.futureValue - presentValue) / (maxValue - presentValue)) * 140;
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}`}
            fill="none"
            stroke="#3b82f6"
            strokeWidth={2}
          />

          {/* Present value line */}
          <line
            x1={50}
            y1={170}
            x2={380}
            y2={170}
            stroke="#6b7280"
            strokeWidth={1}
            strokeDasharray="4 4"
          />

          {/* Key points */}
          <circle cx={50} cy={170} r={5} fill="#3b82f6" />
          <circle
            cx={380}
            cy={170 - ((finalValue - presentValue) / (maxValue - presentValue)) * 140}
            r={5}
            fill="#10b981"
          />

          {/* Value labels */}
          <text x={60} y={185} fill="#3b82f6" fontSize="10">${presentValue}</text>
          <text
            x={370}
            y={170 - ((finalValue - presentValue) / (maxValue - presentValue)) * 140 - 10}
            fill="#10b981"
            fontSize="10"
            textAnchor="end"
          >
            ${Math.round(finalValue).toLocaleString()}
          </text>

          {/* Time labels */}
          <text x={50} y={180} fill="#6b7280" fontSize="9" textAnchor="middle">0</text>
          <text x={380} y={180} fill="#6b7280" fontSize="9" textAnchor="middle">{years}</text>
        </svg>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Present Value</p>
          <p className="text-blue-400 font-mono text-xl">${presentValue.toLocaleString()}</p>
          <p className="text-dark-500 text-xs mt-1">Value today</p>
        </div>
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Future Value in {years} years</p>
          <p className="text-emerald-400 font-mono text-xl">${Math.round(finalValue).toLocaleString()}</p>
          <p className="text-dark-500 text-xs mt-1">At {interestRate}% interest</p>
        </div>
      </div>

      {/* Discounting example */}
      <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 mb-4">
        <p className="text-orange-400 font-medium">Present Value of $1,000 in {years} years</p>
        <p className="text-dark-300 text-lg font-mono mt-1">
          ${Math.round(calculations[years].presentValueOf1000).toLocaleString()}
        </p>
        <p className="text-dark-400 text-sm mt-2">
          $1,000 received in {years} years is worth only ${Math.round(calculations[years].presentValueOf1000)} today
          at {interestRate}% interest. Future goods are discounted by time preference.
        </p>
      </div>

      {/* Year-by-year table */}
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-700">
              <th className="p-2 text-left">Year</th>
              <th className="p-2 text-right">Future Value</th>
              <th className="p-2 text-right">Interest Earned</th>
            </tr>
          </thead>
          <tbody>
            {calculations.filter((_, i) => i <= 5 || i === years).map((c, idx) => (
              <tr key={c.year} className="border-b border-dark-800">
                <td className="p-2 text-dark-300">
                  {c.year}
                  {idx === 5 && years > 5 && <span className="text-dark-500"> ... </span>}
                </td>
                <td className="p-2 text-right text-blue-400 font-mono">
                  ${Math.round(c.futureValue).toLocaleString()}
                </td>
                <td className="p-2 text-right text-emerald-400 font-mono">
                  {c.year === 0 ? '-' : `$${Math.round(c.futureValue - calculations[c.year - 1].futureValue).toLocaleString()}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Mises on Time Preference</p>
        <p className="text-dark-300 text-sm mt-2">
          "Time preference is categorically present in every instance of action. There is no
          human being for whom the time element is not an essential factor."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Interest is not exploitation — it is the natural premium placed on present goods
          over future goods. Without time preference, there would be no saving and no capital formation.
        </p>
      </div>
    </div>
  );
}
