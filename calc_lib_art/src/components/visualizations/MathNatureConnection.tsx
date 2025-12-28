import { useState, useMemo, useEffect } from 'react';

type Example = 'spiral' | 'catenary' | 'brachistochrone' | 'orbits';

export function MathNatureConnection() {
  const [example, setExample] = useState<Example>('spiral');
  const [animParam, setAnimParam] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const width = 600;
  const height = 350;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Animation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setAnimParam((p) => (p + 0.02) % 1);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const centerX = margin.left + plotWidth / 2;
  const centerY = margin.top + plotHeight / 2;

  // Logarithmic spiral (golden spiral approximation)
  const spiralPoints = useMemo(() => {
    const points: string[] = [];
    const a = 1;
    const b = 0.18; // Controls spiral tightness
    for (let theta = 0; theta <= 6 * Math.PI; theta += 0.05) {
      const r = a * Math.exp(b * theta);
      const x = centerX + r * Math.cos(theta) * 10;
      const y = centerY - r * Math.sin(theta) * 10;
      if (x >= margin.left && x <= width - margin.right && y >= margin.top && y <= height - margin.bottom) {
        points.push(`${x},${y}`);
      }
    }
    return points.join(' ');
  }, [centerX, centerY]);

  // Catenary (hanging chain)
  const catenaryPoints = useMemo(() => {
    const points: string[] = [];
    const a = 50; // Scale factor
    for (let x = -3; x <= 3; x += 0.05) {
      const y = a * (Math.cosh(x) - 1);
      const svgX = centerX + x * 80;
      const svgY = margin.top + 30 + y;
      if (svgX >= margin.left && svgX <= width - margin.right) {
        points.push(`${svgX},${svgY}`);
      }
    }
    return points.join(' ');
  }, [centerX]);

  // Brachistochrone (cycloid)
  const brachistochronePoints = useMemo(() => {
    const points: string[] = [];
    const r = 60;
    for (let theta = 0; theta <= Math.PI; theta += 0.05) {
      const x = margin.left + 50 + r * (theta - Math.sin(theta)) * 1.5;
      const y = margin.top + 30 + r * (1 - Math.cos(theta));
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  }, []);

  // Elliptical orbit (Kepler)
  const orbitPoints = useMemo(() => {
    const points: string[] = [];
    const a = 150; // Semi-major axis
    const e = 0.5; // Eccentricity
    const b = a * Math.sqrt(1 - e * e);
    for (let theta = 0; theta <= 2 * Math.PI; theta += 0.05) {
      const x = centerX + 30 + a * Math.cos(theta);
      const y = centerY + b * Math.sin(theta);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  }, [centerX, centerY]);

  // Planet position on orbit
  const planetPos = useMemo(() => {
    const a = 150;
    const e = 0.5;
    const b = a * Math.sqrt(1 - e * e);
    const theta = animParam * 2 * Math.PI;
    return {
      x: centerX + 30 + a * Math.cos(theta),
      y: centerY + b * Math.sin(theta),
    };
  }, [animParam, centerX, centerY]);

  const descriptions: Record<Example, { title: string; equation: string; explanation: string }> = {
    spiral: {
      title: 'Logarithmic Spiral',
      equation: 'r = ae^(bθ)',
      explanation: 'Found in nautilus shells, galaxies, and hurricanes. The derivative of the spiral has constant angle with the radius—nature\'s efficient growth pattern.',
    },
    catenary: {
      title: 'Catenary',
      equation: 'y = a·cosh(x/a)',
      explanation: 'The shape of a hanging chain or cable. Calculus shows this minimizes potential energy. The Gateway Arch and suspension bridges follow this curve.',
    },
    brachistochrone: {
      title: 'Brachistochrone',
      equation: 'cycloid curve',
      explanation: 'The fastest path for a ball rolling between two points—not a straight line! Calculus of variations reveals this is a cycloid (path traced by a point on a rolling circle).',
    },
    orbits: {
      title: 'Planetary Orbits',
      equation: 'Kepler\'s Laws',
      explanation: 'Planets trace ellipses with the sun at one focus. Newton used calculus to derive this from the inverse-square law of gravity—proving math describes the cosmos.',
    },
  };

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Mathematics in Nature
      </h4>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(descriptions) as Example[]).map((ex) => (
          <button
            key={ex}
            onClick={() => {
              setExample(ex);
              setAnimParam(0);
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              example === ex
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {descriptions[ex].title}
          </button>
        ))}
        {example === 'orbits' && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-4 py-2 rounded-lg bg-dark-600 text-dark-200 hover:bg-dark-500"
          >
            {isPlaying ? 'Pause' : 'Animate'}
          </button>
        )}
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* Background grid */}
        {[0.25, 0.5, 0.75].map((frac) => (
          <g key={frac}>
            <line
              x1={margin.left + frac * plotWidth}
              y1={margin.top}
              x2={margin.left + frac * plotWidth}
              y2={height - margin.bottom}
              stroke="#1F2937"
              strokeWidth={1}
            />
            <line
              x1={margin.left}
              y1={margin.top + frac * plotHeight}
              x2={width - margin.right}
              y2={margin.top + frac * plotHeight}
              stroke="#1F2937"
              strokeWidth={1}
            />
          </g>
        ))}

        {/* Spiral */}
        {example === 'spiral' && (
          <>
            <polyline
              points={spiralPoints}
              fill="none"
              stroke="url(#spiralGradient)"
              strokeWidth={3}
            />
            <defs>
              <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            {/* Golden rectangle overlay hint */}
            <rect
              x={centerX - 60}
              y={centerY - 40}
              width={100}
              height={62}
              fill="none"
              stroke="#F59E0B"
              strokeWidth={1}
              strokeDasharray="4,4"
              opacity={0.5}
            />
          </>
        )}

        {/* Catenary */}
        {example === 'catenary' && (
          <>
            <polyline
              points={catenaryPoints}
              fill="none"
              stroke="#10B981"
              strokeWidth={3}
            />
            {/* Suspension points */}
            <circle cx={centerX - 240} cy={margin.top + 30} r={8} fill="#3B82F6" />
            <circle cx={centerX + 240} cy={margin.top + 30} r={8} fill="#3B82F6" />
            {/* Chain links visualization */}
            {[-2, -1, 0, 1, 2].map((i) => {
              const x = centerX + i * 80;
              const y = margin.top + 30 + 50 * (Math.cosh(i * 0.75) - 1);
              return <circle key={i} cx={x} cy={y} r={4} fill="#F59E0B" />;
            })}
          </>
        )}

        {/* Brachistochrone */}
        {example === 'brachistochrone' && (
          <>
            {/* Straight line path */}
            <line
              x1={margin.left + 50}
              y1={margin.top + 30}
              x2={margin.left + 50 + 60 * Math.PI * 1.5}
              y2={margin.top + 30 + 120}
              stroke="#F59E0B"
              strokeWidth={2}
              strokeDasharray="6,3"
            />
            <text
              x={margin.left + 200}
              y={margin.top + 60}
              fill="#F59E0B"
              fontSize="11"
            >
              Straight line (slower!)
            </text>

            {/* Cycloid path */}
            <polyline
              points={brachistochronePoints}
              fill="none"
              stroke="#10B981"
              strokeWidth={3}
            />
            <text
              x={margin.left + 200}
              y={margin.top + 150}
              fill="#10B981"
              fontSize="11"
            >
              Cycloid (fastest!)
            </text>

            {/* Start and end points */}
            <circle cx={margin.left + 50} cy={margin.top + 30} r={8} fill="#3B82F6" />
            <circle cx={margin.left + 50 + 60 * Math.PI * 1.5} cy={margin.top + 30 + 120} r={8} fill="#3B82F6" />
          </>
        )}

        {/* Orbits */}
        {example === 'orbits' && (
          <>
            {/* Orbit path */}
            <polyline
              points={orbitPoints}
              fill="none"
              stroke="#3B82F6"
              strokeWidth={2}
            />

            {/* Sun at focus */}
            <circle cx={centerX - 45} cy={centerY} r={20} fill="#F59E0B" />
            <text x={centerX - 45} y={centerY + 35} textAnchor="middle" fill="#F59E0B" fontSize="11">
              Sun
            </text>

            {/* Planet */}
            <circle cx={planetPos.x} cy={planetPos.y} r={10} fill="#3B82F6" />

            {/* Line to sun (radius vector) */}
            <line
              x1={centerX - 45}
              y1={centerY}
              x2={planetPos.x}
              y2={planetPos.y}
              stroke="#9CA3AF"
              strokeWidth={1}
              strokeDasharray="4,4"
            />

            {/* Kepler's equal areas hint */}
            <text x={width - margin.right - 10} y={margin.top + 20} textAnchor="end" fill="#9CA3AF" fontSize="11">
              Equal areas in equal times
            </text>
          </>
        )}
      </svg>

      {/* Info panel */}
      <div className="mt-4 p-4 bg-dark-700 rounded-lg">
        <div className="flex justify-between items-start">
          <div>
            <h5 className="text-lg font-semibold text-primary-400">
              {descriptions[example].title}
            </h5>
            <p className="text-dark-300 font-mono text-sm mt-1">
              {descriptions[example].equation}
            </p>
          </div>
        </div>
        <p className="text-dark-300 text-sm mt-3">
          {descriptions[example].explanation}
        </p>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">The Unreasonable Effectiveness:</span>{' '}
          Why do spirals, catenaries, and ellipses—pure mathematical curves—appear throughout nature?
          Calculus reveals that nature optimizes: minimizing energy, maximizing efficiency, following
          paths of least action. Mathematics describes reality because reality follows mathematical laws.
        </p>
      </div>
    </div>
  );
}
