import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function MindOnStrike({ className = '' }: Props) {
  const [mindsRemaining, setMindsRemaining] = useState(100);
  const [year, setYear] = useState(1);

  const worldState = useMemo(() => {
    const mindFactor = mindsRemaining / 100;

    return {
      industrialOutput: Math.max(0, mindFactor * 100),
      innovation: Math.max(0, Math.pow(mindFactor, 1.5) * 100),
      infrastructure: Math.max(0, 100 - (100 - mindsRemaining) * 0.8),
      foodProduction: Math.max(0, 100 - (100 - mindsRemaining) * 0.6),
      transportation: Math.max(0, 100 - (100 - mindsRemaining) * 0.7),
      chaos: Math.max(0, (100 - mindsRemaining) * 1.2),
    };
  }, [mindsRemaining]);

  const getWorldDescription = () => {
    if (mindsRemaining > 80) return { text: 'Society functions normally. The looters believe they are in control.', color: '#10b981' };
    if (mindsRemaining > 60) return { text: 'Shortages begin. Officials blame "greed" and "hoarding." More regulations.', color: '#3b82f6' };
    if (mindsRemaining > 40) return { text: 'Infrastructure failing. Trains stop running. Factories close. Rationing begins.', color: '#f97316' };
    if (mindsRemaining > 20) return { text: 'Economic collapse accelerates. Cities go dark. Violence erupts.', color: '#ef4444' };
    return { text: 'Total collapse. "The lights of New York went out." The looters face reality.', color: '#7f1d1d' };
  };

  const state = getWorldDescription();

  // Simulate the strike over time
  const runYear = () => {
    if (mindsRemaining > 10) {
      setMindsRemaining(prev => Math.max(10, prev - 15));
      setYear(prev => prev + 1);
    }
  };

  const reset = () => {
    setMindsRemaining(100);
    setYear(1);
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Mind on Strike</h3>

      <p className="text-dark-300 mb-6">
        "I stopped the motor of the world." What happens when the men of the mind withdraw?
        Watch civilization collapse without its prime movers.
      </p>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={runYear}
          disabled={mindsRemaining <= 10}
          className="flex-1 px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 disabled:opacity-50 transition-colors"
        >
          ⏩ Advance Year ({year})
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-dark-600 text-dark-300 font-medium hover:bg-dark-500 transition-colors"
        >
          🔄 Reset
        </button>
      </div>

      {/* Manual slider */}
      <div className="mb-6">
        <label className="text-dark-400 text-sm">Men of the Mind Remaining: {mindsRemaining}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={mindsRemaining}
          onChange={(e) => setMindsRemaining(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #ef4444 0%, #f97316 30%, #10b981 100%)`
          }}
        />
      </div>

      {/* World state visualization */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 160" className="w-full h-auto">
          {/* Skyline */}
          <g>
            {/* Buildings - get darker as minds leave */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const height = 40 + Math.sin(i * 1.3) * 30 + 20;
              const width = 35;
              const x = 30 + i * 45;
              const lit = (mindsRemaining / 100) * (0.8 + Math.random() * 0.4);

              return (
                <g key={i}>
                  <rect
                    x={x}
                    y={140 - height}
                    width={width}
                    height={height}
                    fill={mindsRemaining > 20 ? '#374151' : '#1f2937'}
                    stroke="#4b5563"
                    strokeWidth={1}
                  />
                  {/* Windows */}
                  {Array.from({ length: Math.floor(height / 15) }, (_, j) => (
                    <rect
                      key={j}
                      x={x + 5 + (j % 2) * 15}
                      y={140 - height + 8 + Math.floor(j / 2) * 15}
                      width={8}
                      height={6}
                      fill={Math.random() < lit ? '#fbbf24' : '#1f2937'}
                    />
                  ))}
                </g>
              );
            })}

            {/* Ground */}
            <rect x={0} y={140} width={400} height={20} fill="#1f2937" />
          </g>

          {/* Status text */}
          <text
            x={200}
            y={25}
            fill={state.color}
            fontSize="12"
            textAnchor="middle"
            fontWeight="bold"
          >
            YEAR {year}: {mindsRemaining}% of minds remain
          </text>
        </svg>
      </div>

      {/* World state description */}
      <div
        className="p-4 rounded-xl mb-4 border"
        style={{
          backgroundColor: `${state.color}15`,
          borderColor: `${state.color}40`,
        }}
      >
        <p style={{ color: state.color }} className="text-sm">
          {state.text}
        </p>
      </div>

      {/* Metrics */}
      <div className="space-y-3 mb-4">
        {[
          { label: '🏭 Industrial Output', value: worldState.industrialOutput },
          { label: '💡 Innovation', value: worldState.innovation },
          { label: '🛤️ Infrastructure', value: worldState.infrastructure },
          { label: '🍞 Food Production', value: worldState.foodProduction },
          { label: '🚂 Transportation', value: worldState.transportation },
          { label: '🔥 Social Chaos', value: worldState.chaos, invert: true },
        ].map((metric) => (
          <div key={metric.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-dark-400">{metric.label}</span>
              <span className={`font-mono ${
                metric.invert
                  ? metric.value > 50 ? 'text-red-400' : 'text-emerald-400'
                  : metric.value < 30 ? 'text-red-400' : metric.value < 60 ? 'text-orange-400' : 'text-emerald-400'
              }`}>
                {Math.round(metric.value)}%
              </span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${metric.value}%`,
                  backgroundColor: metric.invert
                    ? metric.value > 50 ? '#ef4444' : '#10b981'
                    : metric.value < 30 ? '#ef4444' : metric.value < 60 ? '#f97316' : '#10b981',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">The Lesson</p>
        <p className="text-dark-300 text-sm mt-2">
          "You have destroyed all that which you held to be evil and achieved all that which
          you held to be good. Why, then, do you shrink in horror from the sight of the world
          around you? That world is not the product of your sins, it is the product and the
          image of your virtues."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          The mind is the root of all wealth. Without the creators, there is nothing to loot.
        </p>
      </div>
    </div>
  );
}
