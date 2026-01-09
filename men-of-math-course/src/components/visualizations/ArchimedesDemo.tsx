import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type DemoType = 'pi' | 'spiral' | 'area';

export function ArchimedesDemo({ className = '' }: Props) {
  const [demoType, setDemoType] = useState<DemoType>('pi');
  const [numSides, setNumSides] = useState(6);
  const [spiralTurns, setSpiralTurns] = useState(3);
  const [parabolaSlices, setParabolaSlices] = useState(4);

  // SVG dimensions
  const width = 400;
  const height = 350;
  const cx = 200;
  const cy = 180;
  const radius = 120;

  // Calculate polygon points for inscribed/circumscribed
  const polygonPoints = useMemo(() => {
    const inscribed: { x: number; y: number }[] = [];
    const circumscribed: { x: number; y: number }[] = [];
    const circumRadius = radius / Math.cos(Math.PI / numSides);

    for (let i = 0; i < numSides; i++) {
      const angle = (2 * Math.PI * i) / numSides - Math.PI / 2;
      inscribed.push({
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle),
      });
      circumscribed.push({
        x: cx + circumRadius * Math.cos(angle + Math.PI / numSides),
        y: cy + circumRadius * Math.sin(angle + Math.PI / numSides),
      });
    }
    return { inscribed, circumscribed };
  }, [numSides, cx, cy, radius]);

  // Calculate perimeters
  const inscribedPerimeter = numSides * 2 * radius * Math.sin(Math.PI / numSides);
  const circumscribedPerimeter = numSides * 2 * radius * Math.tan(Math.PI / numSides);
  const circleCircumference = 2 * Math.PI * radius;

  const piLower = inscribedPerimeter / (2 * radius);
  const piUpper = circumscribedPerimeter / (2 * radius);

  // Spiral path
  const spiralPath = useMemo(() => {
    const points: string[] = [];
    const maxAngle = spiralTurns * 2 * Math.PI;
    for (let i = 0; i <= 200; i++) {
      const angle = (i / 200) * maxAngle;
      const r = 10 + angle * 15;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    return points.join(' ');
  }, [spiralTurns, cx, cy]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Archimedes' Mathematics</h3>

      <p className="text-dark-300 mb-6">
        Archimedes used the method of exhaustion to compute areas and discovered that π lies between 3 10/71 and 3 1/7.
      </p>

      {/* Demo selector */}
      <div className="flex gap-2 mb-4">
        {[
          { type: 'pi' as const, label: 'Computing π' },
          { type: 'spiral' as const, label: 'Spiral' },
          { type: 'area' as const, label: 'Parabola Area' },
        ].map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setDemoType(type)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              demoType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Controls */}
      {demoType === 'pi' && (
        <div className="mb-4">
          <label className="text-blue-400 text-sm">Number of sides: {numSides}</label>
          <input
            type="range"
            min="3"
            max="96"
            step="1"
            value={numSides}
            onChange={(e) => setNumSides(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      )}
      {demoType === 'spiral' && (
        <div className="mb-4">
          <label className="text-blue-400 text-sm">Turns: {spiralTurns}</label>
          <input
            type="range"
            min="1"
            max="5"
            step="0.5"
            value={spiralTurns}
            onChange={(e) => setSpiralTurns(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      )}
      {demoType === 'area' && (
        <div className="mb-4">
          <label className="text-blue-400 text-sm">Triangle subdivisions: {parabolaSlices}</label>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={parabolaSlices}
            onChange={(e) => setParabolaSlices(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      )}

      {/* Visualization */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {demoType === 'pi' && (
            <>
              {/* Circle */}
              <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#f97316" strokeWidth={3} />

              {/* Inscribed polygon */}
              <polygon
                points={polygonPoints.inscribed.map(p => `${p.x},${p.y}`).join(' ')}
                fill="#3b82f6"
                fillOpacity={0.2}
                stroke="#3b82f6"
                strokeWidth={2}
              />

              {/* Circumscribed polygon (simplified view) */}
              {numSides <= 12 && (
                <polygon
                  points={polygonPoints.circumscribed.map(p => `${p.x},${p.y}`).join(' ')}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              )}

              {/* Labels */}
              <text x={cx} y={40} fill="#f97316" fontSize="14" textAnchor="middle" fontWeight="bold">
                Circle (perimeter = 2πr)
              </text>
              <text x={cx} y={cy + radius + 40} fill="#3b82f6" fontSize="12" textAnchor="middle">
                Inscribed {numSides}-gon
              </text>
            </>
          )}

          {demoType === 'spiral' && (
            <>
              {/* Archimedean spiral */}
              <path d={spiralPath} fill="none" stroke="#f97316" strokeWidth={2} />

              {/* Center */}
              <circle cx={cx} cy={cy} r={4} fill="#3b82f6" />

              <text x={cx} y={40} fill="#f97316" fontSize="12" textAnchor="middle">
                r = a + bθ (Archimedean Spiral)
              </text>
            </>
          )}

          {demoType === 'area' && (
            <>
              {/* Parabola */}
              <path
                d={`M 50 ${cy + 100} Q ${cx} ${cy - 100} 350 ${cy + 100}`}
                fill="none"
                stroke="#f97316"
                strokeWidth={3}
              />

              {/* Main triangle */}
              <polygon
                points={`50,${cy + 100} ${cx},${cy - 100} 350,${cy + 100}`}
                fill="#3b82f6"
                fillOpacity={0.2}
                stroke="#3b82f6"
                strokeWidth={2}
              />

              {/* Subdivision triangles */}
              {parabolaSlices >= 2 && (
                <>
                  <polygon
                    points={`50,${cy + 100} 125,${cy - 25} ${cx},${cy - 100}`}
                    fill="#10b981"
                    fillOpacity={0.2}
                    stroke="#10b981"
                    strokeWidth={1}
                  />
                  <polygon
                    points={`${cx},${cy - 100} 275,${cy - 25} 350,${cy + 100}`}
                    fill="#10b981"
                    fillOpacity={0.2}
                    stroke="#10b981"
                    strokeWidth={1}
                  />
                </>
              )}

              <text x={cx} y={cy + 130} fill="#f97316" fontSize="11" textAnchor="middle">
                Area = 4/3 × inscribed triangle
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Results */}
      {demoType === 'pi' && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-dark-400 text-xs">Lower bound (inscribed)</p>
            <p className="text-blue-400 font-mono">{piLower.toFixed(6)}</p>
          </div>
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
            <p className="text-dark-400 text-xs">True π</p>
            <p className="text-orange-400 font-mono">{Math.PI.toFixed(6)}</p>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <p className="text-dark-400 text-xs">Upper bound (circumscribed)</p>
            <p className="text-emerald-400 font-mono">{piUpper.toFixed(6)}</p>
          </div>
        </div>
      )}

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        {demoType === 'pi' && (
          <>
            <p className="text-emerald-400 font-medium">Computing π by Exhaustion</p>
            <p className="text-dark-300 text-sm mt-2">
              Archimedes bounded π by inscribing and circumscribing regular polygons in a circle.
              With a 96-gon, he proved: 3 + 10/71 {'<'} π {'<'} 3 + 1/7
            </p>
          </>
        )}
        {demoType === 'spiral' && (
          <>
            <p className="text-emerald-400 font-medium">The Archimedean Spiral</p>
            <p className="text-dark-300 text-sm mt-2">
              In polar coordinates, r = a + bθ. The distance between successive turns is constant.
              Archimedes used this to trisect angles and compute areas.
            </p>
          </>
        )}
        {demoType === 'area' && (
          <>
            <p className="text-emerald-400 font-medium">Quadrature of the Parabola</p>
            <p className="text-dark-300 text-sm mt-2">
              Archimedes proved the area under a parabola is exactly 4/3 times the inscribed triangle.
              This is essentially integration, 2000 years before calculus!
            </p>
          </>
        )}
      </div>
    </div>
  );
}
