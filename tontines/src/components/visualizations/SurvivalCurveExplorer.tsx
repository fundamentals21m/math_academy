import { useState, useMemo } from 'react';

interface Props {
  className?: string;
  initialAge?: number;
  initialSex?: 'male' | 'female';
  showControls?: boolean;
}

// Gompertz-Makeham mortality parameters
const MORTALITY_PARAMS = {
  male: { A: 0.0002, B: 0.00003, c: 0.085 },
  female: { A: 0.00015, B: 0.00002, c: 0.083 },
};

/**
 * Interactive visualization of survival probability curves S(t).
 * Uses Gompertz-Makeham mortality model: mu(t) = A + B*e^(ct)
 * Survival probability: S(t) = exp(-integral of mu(s) ds from 0 to t)
 */
export function SurvivalCurveExplorer({
  className = '',
  initialAge = 30,
  initialSex = 'male',
  showControls = true,
}: Props) {
  const [startingAge, setStartingAge] = useState(initialAge);
  const [sex, setSex] = useState<'male' | 'female'>(initialSex);
  const [hoveredAge, setHoveredAge] = useState<number | null>(null);

  // SVG dimensions
  const width = 600;
  const height = 400;
  const padding = { top: 30, right: 30, bottom: 50, left: 60 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Age range for the plot
  const ageRange = { min: 0, max: 110 };

  // Convert age to SVG x coordinate
  const toSvgX = (age: number) =>
    padding.left + ((age - ageRange.min) / (ageRange.max - ageRange.min)) * graphWidth;

  // Convert probability to SVG y coordinate
  const toSvgY = (prob: number) =>
    height - padding.bottom - prob * graphHeight;

  // Compute cumulative hazard integral: integral of mu(s) ds from 0 to t
  // mu(t) = A + B*e^(ct)
  // Integral = A*t + (B/c)*(e^(ct) - 1)
  const cumulativeHazard = (t: number, params: { A: number; B: number; c: number }) => {
    const { A, B, c } = params;
    return A * t + (B / c) * (Math.exp(c * t) - 1);
  };

  // Survival probability from age 0 to age t
  const survivalFromZero = (t: number, params: { A: number; B: number; c: number }) => {
    return Math.exp(-cumulativeHazard(t, params));
  };

  // Conditional survival: probability of surviving to age t, given alive at starting age
  // S(t | startingAge) = S(t) / S(startingAge)
  const conditionalSurvival = (
    t: number,
    startAge: number,
    params: { A: number; B: number; c: number }
  ) => {
    if (t < startAge) return 1;
    const sStart = survivalFromZero(startAge, params);
    const sT = survivalFromZero(t, params);
    return sT / sStart;
  };

  // Generate curve points for current sex
  const curveData = useMemo(() => {
    const params = MORTALITY_PARAMS[sex];
    const points: { age: number; survival: number }[] = [];
    const step = 0.5;

    for (let age = startingAge; age <= ageRange.max; age += step) {
      const s = conditionalSurvival(age, startingAge, params);
      points.push({ age, survival: s });
    }
    return points;
  }, [sex, startingAge]);

  // Generate comparison curve for opposite sex
  const comparisonData = useMemo(() => {
    const otherSex = sex === 'male' ? 'female' : 'male';
    const params = MORTALITY_PARAMS[otherSex];
    const points: { age: number; survival: number }[] = [];
    const step = 0.5;

    for (let age = startingAge; age <= ageRange.max; age += step) {
      const s = conditionalSurvival(age, startingAge, params);
      points.push({ age, survival: s });
    }
    return points;
  }, [sex, startingAge]);

  // Generate path string
  const generatePath = (data: { age: number; survival: number }[]) => {
    if (data.length === 0) return '';
    return data
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${toSvgX(p.age)} ${toSvgY(p.survival)}`)
      .join(' ');
  };

  const mainPath = useMemo(() => generatePath(curveData), [curveData]);
  const comparisonPath = useMemo(() => generatePath(comparisonData), [comparisonData]);

  // Calculate life expectancy at current age (integral of S(t) from startingAge to infinity)
  const lifeExpectancy = useMemo(() => {
    const params = MORTALITY_PARAMS[sex];
    let integral = 0;
    const step = 0.1;
    for (let t = startingAge; t <= 120; t += step) {
      integral += conditionalSurvival(t, startingAge, params) * step;
    }
    return integral + startingAge;
  }, [sex, startingAge]);

  // Find median survival age (age at which S = 0.5)
  const medianAge = useMemo(() => {
    const params = MORTALITY_PARAMS[sex];
    for (let age = startingAge; age <= 120; age += 0.1) {
      if (conditionalSurvival(age, startingAge, params) <= 0.5) {
        return age;
      }
    }
    return 120;
  }, [sex, startingAge]);

  // Find age at which S = 0.25 (75th percentile death age)
  const percentile75Age = useMemo(() => {
    const params = MORTALITY_PARAMS[sex];
    for (let age = startingAge; age <= 120; age += 0.1) {
      if (conditionalSurvival(age, startingAge, params) <= 0.25) {
        return age;
      }
    }
    return 120;
  }, [sex, startingAge]);

  // Get survival at hovered age
  const hoveredSurvival = hoveredAge !== null
    ? conditionalSurvival(hoveredAge, startingAge, MORTALITY_PARAMS[sex])
    : null;

  // Handle mouse move for hover effect
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const svgX = (x / rect.width) * width;

    // Convert SVG x to age
    const age = ageRange.min + ((svgX - padding.left) / graphWidth) * (ageRange.max - ageRange.min);

    if (age >= startingAge && age <= ageRange.max) {
      setHoveredAge(Math.round(age * 10) / 10);
    } else {
      setHoveredAge(null);
    }
  };

  return (
    <div className={`p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-zinc-100">Survival Curve Explorer</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          sex === 'male'
            ? 'bg-blue-500/20 text-blue-400'
            : 'bg-pink-500/20 text-pink-400'
        }`}>
          {sex === 'male' ? 'Male' : 'Female'}
        </span>
      </div>
      <p className="text-zinc-400 text-sm mb-4">
        Explore survival probability S(t) using the Gompertz-Makeham mortality model.
      </p>

      {showControls && (
        <div className="space-y-4 mb-6">
          {/* Starting age slider */}
          <div>
            <label className="block text-zinc-300 text-sm mb-2">
              Starting Age: <span className="text-emerald-400 font-mono">{startingAge}</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={startingAge}
              onChange={(e) => setStartingAge(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Sex toggle */}
          <div>
            <label className="block text-zinc-300 text-sm mb-2">Sex:</label>
            <div className="flex gap-2">
              <button
                onClick={() => setSex('male')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sex === 'male'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-zinc-700 text-zinc-400 border border-zinc-600 hover:bg-zinc-600'
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setSex('female')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sex === 'female'
                    ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                    : 'bg-zinc-700 text-zinc-400 border border-zinc-600 hover:bg-zinc-600'
                }`}
              >
                Female
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SVG Chart */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto bg-zinc-950/50 rounded-xl cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredAge(null)}
      >
        {/* Grid lines - vertical (age) */}
        {[0, 20, 40, 60, 80, 100].map((age) => (
          <line
            key={`vgrid-${age}`}
            x1={toSvgX(age)}
            y1={padding.top}
            x2={toSvgX(age)}
            y2={height - padding.bottom}
            stroke="#3f3f46"
            strokeWidth={1}
            strokeDasharray="4,4"
          />
        ))}

        {/* Grid lines - horizontal (probability) */}
        {[0, 0.25, 0.5, 0.75, 1].map((prob) => (
          <line
            key={`hgrid-${prob}`}
            x1={padding.left}
            y1={toSvgY(prob)}
            x2={width - padding.right}
            y2={toSvgY(prob)}
            stroke={prob === 0.5 ? '#6b7280' : '#3f3f46'}
            strokeWidth={prob === 0.5 ? 1.5 : 1}
            strokeDasharray={prob === 0.5 ? 'none' : '4,4'}
          />
        ))}

        {/* Axes */}
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="#71717a"
          strokeWidth={2}
        />
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="#71717a"
          strokeWidth={2}
        />

        {/* X-axis labels (age) */}
        {[0, 20, 40, 60, 80, 100].map((age) => (
          <text
            key={`xlabel-${age}`}
            x={toSvgX(age)}
            y={height - padding.bottom + 20}
            fill="#a1a1aa"
            fontSize="12"
            textAnchor="middle"
          >
            {age}
          </text>
        ))}
        <text
          x={width / 2}
          y={height - 10}
          fill="#a1a1aa"
          fontSize="14"
          textAnchor="middle"
        >
          Age (years)
        </text>

        {/* Y-axis labels (probability) */}
        {[0, 0.25, 0.5, 0.75, 1].map((prob) => (
          <text
            key={`ylabel-${prob}`}
            x={padding.left - 10}
            y={toSvgY(prob) + 4}
            fill="#a1a1aa"
            fontSize="11"
            textAnchor="end"
          >
            {(prob * 100).toFixed(0)}%
          </text>
        ))}
        <text
          x={15}
          y={height / 2}
          fill="#a1a1aa"
          fontSize="14"
          textAnchor="middle"
          transform={`rotate(-90, 15, ${height / 2})`}
        >
          Survival Probability S(t)
        </text>

        {/* Comparison curve (other sex) - draw first so it's behind */}
        <path
          d={comparisonPath}
          fill="none"
          stroke={sex === 'male' ? '#ec4899' : '#3b82f6'}
          strokeWidth="2"
          strokeOpacity="0.3"
          strokeDasharray="6,4"
        />

        {/* Main survival curve */}
        <path
          d={mainPath}
          fill="none"
          stroke={sex === 'male' ? '#3b82f6' : '#ec4899'}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Starting age marker */}
        <circle
          cx={toSvgX(startingAge)}
          cy={toSvgY(1)}
          r={6}
          fill="#10b981"
          stroke="#fff"
          strokeWidth="2"
        />

        {/* Median survival age marker */}
        {medianAge <= 110 && (
          <>
            <line
              x1={toSvgX(medianAge)}
              y1={toSvgY(0.5)}
              x2={toSvgX(medianAge)}
              y2={height - padding.bottom}
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="4,2"
            />
            <circle
              cx={toSvgX(medianAge)}
              cy={toSvgY(0.5)}
              r={6}
              fill="#f59e0b"
              stroke="#fff"
              strokeWidth="2"
            />
            <text
              x={toSvgX(medianAge)}
              y={height - padding.bottom + 35}
              fill="#f59e0b"
              fontSize="11"
              textAnchor="middle"
            >
              Median: {medianAge.toFixed(1)}
            </text>
          </>
        )}

        {/* Hover indicator */}
        {hoveredAge !== null && hoveredSurvival !== null && (
          <>
            <line
              x1={toSvgX(hoveredAge)}
              y1={padding.top}
              x2={toSvgX(hoveredAge)}
              y2={height - padding.bottom}
              stroke="#10b981"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
            <line
              x1={padding.left}
              y1={toSvgY(hoveredSurvival)}
              x2={width - padding.right}
              y2={toSvgY(hoveredSurvival)}
              stroke="#10b981"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
            <circle
              cx={toSvgX(hoveredAge)}
              cy={toSvgY(hoveredSurvival)}
              r={8}
              fill="#10b981"
              stroke="#fff"
              strokeWidth="2"
            />
          </>
        )}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className={`w-4 h-1 rounded ${sex === 'male' ? 'bg-blue-500' : 'bg-pink-500'}`}></div>
          <span className="text-zinc-400">{sex === 'male' ? 'Male' : 'Female'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-4 h-1 rounded opacity-30 ${sex === 'male' ? 'bg-pink-500' : 'bg-blue-500'}`}></div>
          <span className="text-zinc-500">{sex === 'male' ? 'Female (comparison)' : 'Male (comparison)'}</span>
        </div>
      </div>

      {/* Hover info */}
      {hoveredAge !== null && hoveredSurvival !== null && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-emerald-400">
            <span className="font-semibold">Age {hoveredAge.toFixed(1)}:</span>{' '}
            {(hoveredSurvival * 100).toFixed(1)}% survival probability
          </p>
          <p className="text-zinc-400 text-sm mt-1">
            Given survival to age {startingAge}, probability of reaching age {hoveredAge.toFixed(0)}
          </p>
        </div>
      )}

      {/* Statistics panel */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
          <p className="text-zinc-500 text-xs uppercase tracking-wider">Starting Age</p>
          <p className="text-xl font-mono text-emerald-400">{startingAge}</p>
        </div>
        <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
          <p className="text-zinc-500 text-xs uppercase tracking-wider">Life Expectancy</p>
          <p className="text-xl font-mono text-blue-400">{lifeExpectancy.toFixed(1)}</p>
        </div>
        <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
          <p className="text-zinc-500 text-xs uppercase tracking-wider">Median Age</p>
          <p className="text-xl font-mono text-amber-400">{medianAge.toFixed(1)}</p>
        </div>
        <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
          <p className="text-zinc-500 text-xs uppercase tracking-wider">75th Percentile</p>
          <p className="text-xl font-mono text-pink-400">{percentile75Age.toFixed(1)}</p>
        </div>
      </div>

      {/* Model info */}
      <div className="mt-4 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30">
        <p className="text-zinc-400 text-sm">
          <span className="text-zinc-300">Gompertz-Makeham Model:</span>{' '}
          <span className="font-mono">mu(t) = A + B*e^(ct)</span>
        </p>
        <p className="text-zinc-500 text-xs mt-2">
          {sex === 'male' ? 'Male' : 'Female'} parameters: A={MORTALITY_PARAMS[sex].A}, B={MORTALITY_PARAMS[sex].B}, c={MORTALITY_PARAMS[sex].c}
        </p>
        <p className="text-zinc-500 text-xs mt-1">
          Survival: S(t) = exp(-integral of mu(s) ds from 0 to t)
        </p>
      </div>
    </div>
  );
}

export default SurvivalCurveExplorer;
