import { useState, useMemo, useEffect } from 'react';

export function AchillesTortoiseRace() {
  const [stage, setStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const width = 600;
  const height = 200;
  const margin = { left: 40, right: 40 };
  const trackWidth = width - margin.left - margin.right;

  // Race parameters
  const headStart = 100; // Tortoise starts 100m ahead
  const achillesSpeed = 10; // Achilles is 10x faster
  const tortoiseSpeed = 1;

  // Calculate positions at each stage
  const stages = useMemo(() => {
    const result = [];
    let achillesPos = 0;
    let tortoisePos = headStart;
    let totalDistance = 0;

    // Stage 0: Starting positions
    result.push({
      achilles: 0,
      tortoise: headStart,
      gap: headStart,
      totalDistance: 0,
      description: 'Start: Achilles at 0m, Tortoise at 100m',
    });

    // Calculate stages until gap is very small
    for (let i = 0; i < 10; i++) {
      const gap = tortoisePos - achillesPos;
      const timeToReach = gap / achillesSpeed;
      achillesPos = tortoisePos;
      tortoisePos = tortoisePos + tortoiseSpeed * timeToReach;
      totalDistance += gap;

      result.push({
        achilles: achillesPos,
        tortoise: tortoisePos,
        gap: tortoisePos - achillesPos,
        totalDistance,
        description: `Stage ${i + 1}: Achilles runs ${gap.toFixed(2)}m, Tortoise moves ${(gap / 10).toFixed(2)}m`,
      });
    }

    return result;
  }, []);

  // Auto-animate
  useEffect(() => {
    if (isAnimating && stage < stages.length - 1) {
      const timer = setTimeout(() => setStage((s) => s + 1), 1000);
      return () => clearTimeout(timer);
    } else if (stage >= stages.length - 1) {
      setIsAnimating(false);
    }
  }, [isAnimating, stage, stages.length]);

  const currentStage = stages[stage];

  // Scale position to SVG coordinates (log scale for visibility)
  const maxPos = 120;
  const toSvgX = (pos: number) => margin.left + (pos / maxPos) * trackWidth;

  // Geometric series sum: 100 + 10 + 1 + 0.1 + ... = 100/(1-0.1) = 111.111...
  const seriesSum = headStart / (1 - 1 / achillesSpeed);

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Achilles and the Tortoise
      </h4>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {
            setStage(0);
            setIsAnimating(true);
          }}
          className="px-4 py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600"
        >
          {isAnimating ? 'Running...' : 'Start Race'}
        </button>
        <button
          onClick={() => {
            setIsAnimating(false);
            setStage(0);
          }}
          className="px-4 py-2 rounded-lg bg-dark-600 text-dark-200 font-medium hover:bg-dark-500"
        >
          Reset
        </button>
        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={() => setStage(Math.max(0, stage - 1))}
            disabled={stage === 0}
            className="px-3 py-2 rounded-lg bg-dark-600 text-dark-200 disabled:opacity-50"
          >
            ◀
          </button>
          <span className="text-dark-300 font-mono">Stage {stage}</span>
          <button
            onClick={() => setStage(Math.min(stages.length - 1, stage + 1))}
            disabled={stage >= stages.length - 1}
            className="px-3 py-2 rounded-lg bg-dark-600 text-dark-200 disabled:opacity-50"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Race Track */}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* Track */}
        <rect
          x={margin.left}
          y={80}
          width={trackWidth}
          height={40}
          fill="#1F2937"
          rx={4}
        />

        {/* Distance markers */}
        {[0, 25, 50, 75, 100].map((d) => (
          <g key={d}>
            <line
              x1={toSvgX(d)}
              y1={75}
              x2={toSvgX(d)}
              y2={125}
              stroke="#4B5563"
              strokeWidth={1}
            />
            <text x={toSvgX(d)} y={145} textAnchor="middle" fill="#9CA3AF" fontSize="11">
              {d}m
            </text>
          </g>
        ))}

        {/* Finish line (where Achilles catches tortoise) */}
        <line
          x1={toSvgX(seriesSum)}
          y1={70}
          x2={toSvgX(seriesSum)}
          y2={130}
          stroke="#10B981"
          strokeWidth={2}
          strokeDasharray="4,4"
        />
        <text x={toSvgX(seriesSum)} y={160} textAnchor="middle" fill="#10B981" fontSize="11">
          {seriesSum.toFixed(1)}m
        </text>

        {/* Achilles (runner emoji representation) */}
        <g transform={`translate(${toSvgX(currentStage.achilles)}, 100)`}>
          <circle r={15} fill="#3B82F6" />
          <text y={5} textAnchor="middle" fill="white" fontSize="16">
            🏃
          </text>
        </g>

        {/* Tortoise */}
        <g transform={`translate(${toSvgX(currentStage.tortoise)}, 100)`}>
          <circle r={12} fill="#10B981" />
          <text y={4} textAnchor="middle" fill="white" fontSize="14">
            🐢
          </text>
        </g>

        {/* Gap indicator */}
        {currentStage.gap > 0.01 && (
          <g>
            <line
              x1={toSvgX(currentStage.achilles) + 15}
              y1={60}
              x2={toSvgX(currentStage.tortoise) - 12}
              y2={60}
              stroke="#F59E0B"
              strokeWidth={2}
              markerEnd="url(#arrowhead)"
            />
            <text
              x={(toSvgX(currentStage.achilles) + toSvgX(currentStage.tortoise)) / 2}
              y={50}
              textAnchor="middle"
              fill="#F59E0B"
              fontSize="12"
            >
              Gap: {currentStage.gap.toFixed(2)}m
            </text>
          </g>
        )}

        {/* Labels */}
        <text x={margin.left} y={30} fill="#3B82F6" fontSize="12">
          🏃 Achilles (10 m/s)
        </text>
        <text x={width / 2} y={30} fill="#10B981" fontSize="12">
          🐢 Tortoise (1 m/s)
        </text>
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg">
          <div className="text-dark-400 text-sm mb-1">Current Stage</div>
          <div className="text-dark-200 text-sm">{currentStage.description}</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg">
          <div className="text-dark-400 text-sm mb-1">Series Sum</div>
          <div className="text-dark-200 font-mono text-sm">
            100 + 10 + 1 + 0.1 + ... = <span className="text-emerald-400">{seriesSum.toFixed(3)}m</span>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">The Resolution:</span>{' '}
          Although Achilles must complete infinitely many stages, each stage takes less time.
          The total time is finite: the infinite series 100 + 10 + 1 + 0.1 + ... converges to exactly{' '}
          <span className="font-mono text-primary-400">{seriesSum.toFixed(2)}m</span>.
          Achilles catches the tortoise after running this distance!
        </p>
      </div>
    </div>
  );
}
