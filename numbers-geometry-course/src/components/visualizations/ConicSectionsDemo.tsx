import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type ConicType = 'ellipse' | 'parabola' | 'hyperbola';

export function ConicSectionsDemo({ className = '' }: Props) {
  const [conicType, setConicType] = useState<ConicType>('ellipse');

  // Ellipse: x²/a² + y²/b² = 1
  const [ellipseA, setEllipseA] = useState(3);
  const [ellipseB, setEllipseB] = useState(2);

  // Parabola: y = ax² (vertex at origin)
  const [parabolaA, setParabolaA] = useState(0.25);

  // Hyperbola: x²/a² - y²/b² = 1
  const [hypA, setHypA] = useState(2);
  const [hypB, setHypB] = useState(1.5);

  const [showFoci, setShowFoci] = useState(true);
  const [showDirectrix, setShowDirectrix] = useState(true);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const cx = 200;
  const cy = 200;
  const scale = 30;

  const toSvgX = (x: number) => cx + x * scale;
  const toSvgY = (y: number) => cy - y * scale;

  // Calculate foci and other properties
  const ellipseFoci = useMemo(() => {
    const c = Math.sqrt(Math.abs(ellipseA * ellipseA - ellipseB * ellipseB));
    if (ellipseA >= ellipseB) {
      return [{ x: c, y: 0 }, { x: -c, y: 0 }];
    } else {
      return [{ x: 0, y: c }, { x: 0, y: -c }];
    }
  }, [ellipseA, ellipseB]);

  const parabolaFocus = { x: 0, y: 1 / (4 * parabolaA) };
  const parabolaDirectrix = -1 / (4 * parabolaA);

  const hyperbolaFoci = useMemo(() => {
    const c = Math.sqrt(hypA * hypA + hypB * hypB);
    return [{ x: c, y: 0 }, { x: -c, y: 0 }];
  }, [hypA, hypB]);

  // Generate paths
  const ellipsePath = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 72; i++) {
      const theta = (i / 72) * 2 * Math.PI;
      const x = ellipseA * Math.cos(theta);
      const y = ellipseB * Math.sin(theta);
      points.push(`${i === 0 ? 'M' : 'L'} ${toSvgX(x)} ${toSvgY(y)}`);
    }
    return points.join(' ') + ' Z';
  }, [ellipseA, ellipseB, toSvgX, toSvgY]);

  const parabolaPath = useMemo(() => {
    const points: string[] = [];
    for (let i = -30; i <= 30; i++) {
      const x = i / 5;
      const y = parabolaA * x * x;
      if (y <= 5) {
        points.push(`${points.length === 0 ? 'M' : 'L'} ${toSvgX(x)} ${toSvgY(y)}`);
      }
    }
    return points.join(' ');
  }, [parabolaA, toSvgX, toSvgY]);

  const hyperbolaPath = useMemo(() => {
    const rightBranch: string[] = [];
    const leftBranch: string[] = [];

    for (let i = 0; i <= 40; i++) {
      const t = -2 + (i / 40) * 4; // Parameter from -2 to 2
      const x = hypA * Math.cosh(t);
      const y = hypB * Math.sinh(t);
      if (Math.abs(x) <= 5 && Math.abs(y) <= 5) {
        rightBranch.push(`${rightBranch.length === 0 ? 'M' : 'L'} ${toSvgX(x)} ${toSvgY(y)}`);
        leftBranch.push(`${leftBranch.length === 0 ? 'M' : 'L'} ${toSvgX(-x)} ${toSvgY(y)}`);
      }
    }

    return rightBranch.join(' ') + ' ' + leftBranch.join(' ');
  }, [hypA, hypB, toSvgX, toSvgY]);

  // Asymptotes for hyperbola
  const asymptoteSlope = hypB / hypA;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Conic Sections</h3>

      <p className="text-dark-300 mb-6">
        Conic sections are curves formed by slicing a cone:{' '}
        <span className="text-blue-400">ellipses</span>,{' '}
        <span className="text-emerald-400">parabolas</span>, and{' '}
        <span className="text-orange-400">hyperbolas</span>.
      </p>

      {/* Conic type selector */}
      <div className="flex gap-2 mb-4">
        {[
          { type: 'ellipse' as const, label: 'Ellipse', color: 'blue' },
          { type: 'parabola' as const, label: 'Parabola', color: 'emerald' },
          { type: 'hyperbola' as const, label: 'Hyperbola', color: 'orange' },
        ].map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setConicType(type)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              conicType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Controls based on conic type */}
      <div className="mb-4">
        {conicType === 'ellipse' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-blue-400 text-sm">Semi-major a = {ellipseA.toFixed(1)}</label>
              <input
                type="range"
                min="1"
                max="4"
                step="0.1"
                value={ellipseA}
                onChange={(e) => setEllipseA(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-blue-400 text-sm">Semi-minor b = {ellipseB.toFixed(1)}</label>
              <input
                type="range"
                min="0.5"
                max="4"
                step="0.1"
                value={ellipseB}
                onChange={(e) => setEllipseB(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
        )}
        {conicType === 'parabola' && (
          <div>
            <label className="text-emerald-400 text-sm">Coefficient a = {parabolaA.toFixed(2)}</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={parabolaA}
              onChange={(e) => setParabolaA(parseFloat(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
        )}
        {conicType === 'hyperbola' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-orange-400 text-sm">a = {hypA.toFixed(1)}</label>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={hypA}
                onChange={(e) => setHypA(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
            <div>
              <label className="text-orange-400 text-sm">b = {hypB.toFixed(1)}</label>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={hypB}
                onChange={(e) => setHypB(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Toggle buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowFoci(!showFoci)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showFoci ? 'bg-red-500 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Show Foci
        </button>
        {conicType === 'parabola' && (
          <button
            onClick={() => setShowDirectrix(!showDirectrix)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              showDirectrix ? 'bg-purple-500 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            Show Directrix
          </button>
        )}
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
            <g key={`grid${i}`}>
              <line
                x1={0}
                y1={toSvgY(i)}
                x2={width}
                y2={toSvgY(i)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={toSvgX(i)}
                y1={0}
                x2={toSvgX(i)}
                y2={height}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Hyperbola asymptotes */}
          {conicType === 'hyperbola' && (
            <>
              <line
                x1={toSvgX(-5)}
                y1={toSvgY(-5 * asymptoteSlope)}
                x2={toSvgX(5)}
                y2={toSvgY(5 * asymptoteSlope)}
                stroke="#f97316"
                strokeWidth={1}
                strokeDasharray="5 5"
                opacity={0.5}
              />
              <line
                x1={toSvgX(-5)}
                y1={toSvgY(5 * asymptoteSlope)}
                x2={toSvgX(5)}
                y2={toSvgY(-5 * asymptoteSlope)}
                stroke="#f97316"
                strokeWidth={1}
                strokeDasharray="5 5"
                opacity={0.5}
              />
            </>
          )}

          {/* Directrix for parabola */}
          {conicType === 'parabola' && showDirectrix && (
            <line
              x1={toSvgX(-5)}
              y1={toSvgY(parabolaDirectrix)}
              x2={toSvgX(5)}
              y2={toSvgY(parabolaDirectrix)}
              stroke="#a855f7"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          )}

          {/* Conic curve */}
          {conicType === 'ellipse' && (
            <path d={ellipsePath} fill="#3b82f6" fillOpacity={0.1} stroke="#3b82f6" strokeWidth={3} />
          )}
          {conicType === 'parabola' && (
            <path d={parabolaPath} fill="none" stroke="#10b981" strokeWidth={3} />
          )}
          {conicType === 'hyperbola' && (
            <path d={hyperbolaPath} fill="none" stroke="#f97316" strokeWidth={3} />
          )}

          {/* Foci */}
          {showFoci && conicType === 'ellipse' && ellipseFoci.map((f, i) => (
            <circle key={i} cx={toSvgX(f.x)} cy={toSvgY(f.y)} r={6} fill="#ef4444" />
          ))}
          {showFoci && conicType === 'parabola' && (
            <circle cx={toSvgX(parabolaFocus.x)} cy={toSvgY(parabolaFocus.y)} r={6} fill="#ef4444" />
          )}
          {showFoci && conicType === 'hyperbola' && hyperbolaFoci.map((f, i) => (
            <circle key={i} cx={toSvgX(f.x)} cy={toSvgY(f.y)} r={6} fill="#ef4444" />
          ))}
        </svg>
      </div>

      {/* Equation and properties */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        {conicType === 'ellipse' && (
          <>
            <p className="text-blue-400 font-mono">
              x²/{ellipseA.toFixed(1)}² + y²/{ellipseB.toFixed(1)}² = 1
            </p>
            <p className="text-dark-300 text-sm mt-2">
              Eccentricity e = {(Math.sqrt(Math.abs(ellipseA * ellipseA - ellipseB * ellipseB)) / Math.max(ellipseA, ellipseB)).toFixed(3)} (0 ≤ e {'<'} 1 for ellipse)
            </p>
          </>
        )}
        {conicType === 'parabola' && (
          <>
            <p className="text-emerald-400 font-mono">y = {parabolaA.toFixed(2)}x²</p>
            <p className="text-dark-300 text-sm mt-2">
              Focus at (0, {parabolaFocus.y.toFixed(2)}), Directrix: y = {parabolaDirectrix.toFixed(2)}
            </p>
            <p className="text-dark-400 text-xs mt-1">
              Eccentricity e = 1 (defines a parabola)
            </p>
          </>
        )}
        {conicType === 'hyperbola' && (
          <>
            <p className="text-orange-400 font-mono">
              x²/{hypA.toFixed(1)}² - y²/{hypB.toFixed(1)}² = 1
            </p>
            <p className="text-dark-300 text-sm mt-2">
              Asymptotes: y = ±{asymptoteSlope.toFixed(2)}x
            </p>
            <p className="text-dark-400 text-xs mt-1">
              Eccentricity e = {(Math.sqrt(hypA * hypA + hypB * hypB) / hypA).toFixed(3)} (e {'>'} 1 for hyperbola)
            </p>
          </>
        )}
      </div>
    </div>
  );
}
