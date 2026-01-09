import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function CantorSetDemo({ className = '' }: Props) {
  const [iterations, setIterations] = useState(5);
  const [showCardinality, setShowCardinality] = useState(false);

  // Generate Cantor set intervals at each level
  const cantorLevels = useMemo(() => {
    const levels: { start: number; end: number }[][] = [
      [{ start: 0, end: 1 }]
    ];

    for (let i = 1; i <= iterations; i++) {
      const prevLevel = levels[i - 1];
      const newLevel: { start: number; end: number }[] = [];

      for (const interval of prevLevel) {
        const third = (interval.end - interval.start) / 3;
        // Keep left third
        newLevel.push({ start: interval.start, end: interval.start + third });
        // Keep right third
        newLevel.push({ start: interval.end - third, end: interval.end });
      }

      levels.push(newLevel);
    }

    return levels;
  }, [iterations]);

  // Calculate total length at each level
  const totalLengths = cantorLevels.map((level) =>
    level.reduce((sum, interval) => sum + (interval.end - interval.start), 0)
  );

  // SVG dimensions
  const width = 400;
  const height = 300;
  const barHeight = 20;
  const padding = 30;
  const scale = width - 2 * padding;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Cantor's Set</h3>

      <p className="text-dark-300 mb-6">
        Start with [0, 1]. Remove the middle third. Repeat infinitely.
        The result has <strong>measure zero</strong> but is <strong>uncountably infinite</strong>!
      </p>

      {/* Controls */}
      <div className="mb-4">
        <label className="text-blue-400 text-sm">Iterations: {iterations}</label>
        <input
          type="range"
          min="1"
          max="7"
          step="1"
          value={iterations}
          onChange={(e) => setIterations(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      <button
        onClick={() => setShowCardinality(!showCardinality)}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium mb-4 transition-colors ${
          showCardinality ? 'bg-emerald-500 text-white' : 'bg-dark-700 text-dark-300'
        }`}
      >
        Show Cardinality Argument
      </button>

      {/* Cantor set visualization */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Level labels */}
          {cantorLevels.map((_, i) => (
            <text
              key={`label${i}`}
              x={padding - 25}
              y={padding + i * (barHeight + 10) + barHeight / 2 + 4}
              fill="#6b7280"
              fontSize="11"
              textAnchor="end"
            >
              n={i}
            </text>
          ))}

          {/* Intervals at each level */}
          {cantorLevels.map((level, levelIdx) => (
            <g key={levelIdx}>
              {level.map((interval, i) => (
                <rect
                  key={i}
                  x={padding + interval.start * scale}
                  y={padding + levelIdx * (barHeight + 10)}
                  width={Math.max(1, (interval.end - interval.start) * scale)}
                  height={barHeight}
                  fill="#3b82f6"
                  rx={2}
                />
              ))}
            </g>
          ))}

          {/* Length labels */}
          {cantorLevels.map((_, i) => (
            <text
              key={`len${i}`}
              x={width - padding + 5}
              y={padding + i * (barHeight + 10) + barHeight / 2 + 4}
              fill="#f97316"
              fontSize="10"
            >
              {totalLengths[i].toFixed(4)}
            </text>
          ))}
        </svg>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Intervals</p>
          <p className="text-blue-400 font-mono text-lg">2^{iterations} = {Math.pow(2, iterations)}</p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Total Length</p>
          <p className="text-orange-400 font-mono text-lg">(2/3)^{iterations} = {totalLengths[iterations].toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Limit</p>
          <p className="text-emerald-400 font-mono text-lg">→ 0</p>
        </div>
      </div>

      {/* Cardinality argument */}
      {showCardinality && (
        <div className="mt-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
          <p className="text-purple-400 font-medium">Uncountable Infinity!</p>
          <p className="text-dark-300 text-sm mt-2">
            Each point in the Cantor set can be written in base 3 using only digits 0 and 2
            (no 1s, since we remove middle thirds).
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Example: 0.020202... (base 3) = 1/4 is in the set.
          </p>
          <p className="text-dark-300 text-sm mt-2">
            These sequences are in 1-1 correspondence with binary numbers (0↔0, 2↔1),
            so the Cantor set has the same cardinality as [0,1] — uncountably infinite!
          </p>
        </div>
      )}

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">The Paradox</p>
        <p className="text-dark-300 text-sm mt-2">
          After infinitely many steps:
        </p>
        <ul className="text-dark-300 text-sm mt-1 space-y-1">
          <li>• Total length = 0 (measure zero)</li>
          <li>• Number of points = uncountably infinite (as many as the real numbers!)</li>
          <li>• The set is perfect: every point is a limit of other points</li>
          <li>• It's totally disconnected: no intervals remain</li>
        </ul>
        <p className="text-dark-400 text-xs mt-3">
          Cantor's set challenged intuitions about size and infinity, revolutionizing mathematics.
        </p>
      </div>
    </div>
  );
}
