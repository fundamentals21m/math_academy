import { useState } from 'react';

export function ProbabilitySimulator() {
  const [numDice, setNumDice] = useState(2);
  const [rolls, setRolls] = useState<number[][]>([]);
  const [targetSum, setTargetSum] = useState(7);

  const rollDice = () => {
    const roll = Array.from({ length: numDice }, () => Math.floor(Math.random() * 6) + 1);
    setRolls((prev) => [roll, ...prev.slice(0, 49)]); // Keep last 50 rolls
  };

  const rollMany = (count: number) => {
    const newRolls = Array.from({ length: count }, () =>
      Array.from({ length: numDice }, () => Math.floor(Math.random() * 6) + 1)
    );
    setRolls((prev) => [...newRolls, ...prev].slice(0, 50));
  };

  const clearRolls = () => setRolls([]);

  // Calculate statistics
  const sums = rolls.map((roll) => roll.reduce((a, b) => a + b, 0));
  const matchingCount = sums.filter((s) => s === targetSum).length;
  const empiricalProb = rolls.length > 0 ? matchingCount / rolls.length : 0;

  // Calculate theoretical probability for target sum
  const calculateTheoretical = (dice: number, target: number): number => {
    if (dice === 1) return target >= 1 && target <= 6 ? 1 / 6 : 0;
    if (target < dice || target > dice * 6) return 0;

    // Count ways to get target sum with given dice
    let ways = 0;
    const totalOutcomes = Math.pow(6, dice);

    const countWays = (remaining: number, sum: number, dice: number): number => {
      if (dice === 0) return sum === 0 ? 1 : 0;
      let count = 0;
      for (let i = 1; i <= 6 && i <= sum; i++) {
        count += countWays(remaining - 1, sum - i, dice - 1);
      }
      return count;
    };

    ways = countWays(dice, target, dice);
    return ways / totalOutcomes;
  };

  const theoreticalProb = calculateTheoretical(numDice, targetSum);

  // Generate frequency distribution
  const minSum = numDice;
  const maxSum = numDice * 6;
  const frequencies: Record<number, number> = {};
  for (let i = minSum; i <= maxSum; i++) {
    frequencies[i] = sums.filter((s) => s === i).length;
  }
  const maxFreq = Math.max(...Object.values(frequencies), 1);

  // SVG dimensions
  const width = 350;
  const height = 180;
  const barWidth = Math.min(25, (width - 60) / (maxSum - minSum + 1));

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Dice Probability Simulator
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Frequency bars */}
            {Object.entries(frequencies).map(([sum, freq], i) => {
              const x = 30 + i * barWidth;
              const barHeight = (freq / maxFreq) * 120;
              const isTarget = Number(sum) === targetSum;

              return (
                <g key={sum}>
                  <rect
                    x={x}
                    y={150 - barHeight}
                    width={barWidth - 2}
                    height={barHeight}
                    fill={isTarget ? '#f59e0b' : '#3b82f6'}
                    opacity={0.7}
                  />
                  <text
                    x={x + barWidth / 2 - 1}
                    y={165}
                    fill="#6b7280"
                    fontSize="9"
                    textAnchor="middle"
                  >
                    {sum}
                  </text>
                  {freq > 0 && (
                    <text
                      x={x + barWidth / 2 - 1}
                      y={145 - barHeight}
                      fill={isTarget ? '#f59e0b' : '#93c5fd'}
                      fontSize="9"
                      textAnchor="middle"
                    >
                      {freq}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Axis */}
            <line x1={30} y1={150} x2={width - 10} y2={150} stroke="#6b7280" strokeWidth="1" />
            <text x={width / 2} y={height - 3} fill="#6b7280" fontSize="10" textAnchor="middle">
              Sum of {numDice} dice
            </text>
          </svg>

          {/* Recent rolls display */}
          <div className="mt-2 flex flex-wrap gap-1 max-h-20 overflow-y-auto">
            {rolls.slice(0, 10).map((roll, i) => (
              <div
                key={i}
                className={`px-2 py-1 rounded text-xs ${
                  roll.reduce((a, b) => a + b, 0) === targetSum
                    ? 'bg-amber-500/30 text-amber-400'
                    : 'bg-dark-700 text-dark-300'
                }`}
              >
                [{roll.join(', ')}] = {roll.reduce((a, b) => a + b, 0)}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Number of Dice: {numDice}
            </label>
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={numDice}
              onChange={(e) => {
                setNumDice(Number(e.target.value));
                setRolls([]);
                setTargetSum(Math.min(targetSum, Number(e.target.value) * 6));
              }}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Target Sum: {targetSum}
            </label>
            <input
              type="range"
              min={numDice}
              max={numDice * 6}
              step="1"
              value={targetSum}
              onChange={(e) => setTargetSum(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={rollDice} className="px-4 py-2 bg-primary-500 text-white rounded">
              Roll Once
            </button>
            <button onClick={() => rollMany(10)} className="px-3 py-2 bg-dark-600 text-dark-200 rounded">
              Roll 10×
            </button>
            <button onClick={() => rollMany(50)} className="px-3 py-2 bg-dark-600 text-dark-200 rounded">
              Roll 50×
            </button>
            <button onClick={clearRolls} className="px-3 py-2 bg-dark-700 text-dark-400 rounded">
              Clear
            </button>
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-blue-400">Total Rolls:</span> {rolls.length}
            </div>
            <div className="text-dark-200">
              <span className="text-amber-400">Sum = {targetSum}:</span> {matchingCount} times
            </div>
            <div className="border-t border-dark-600 pt-2 text-dark-200">
              <span className="text-emerald-400">Empirical P(sum={targetSum}):</span> {(empiricalProb * 100).toFixed(1)}%
            </div>
            <div className="text-dark-200">
              <span className="text-purple-400">Theoretical P(sum={targetSum}):</span> {(theoreticalProb * 100).toFixed(1)}%
            </div>
            <div className="text-dark-400 text-xs">
              Roll more to see empirical approach theoretical!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
