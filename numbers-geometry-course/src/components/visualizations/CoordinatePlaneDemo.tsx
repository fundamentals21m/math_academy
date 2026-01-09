import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type ShapeType = 'line' | 'circle' | 'both';

export function CoordinatePlaneDemo({ className = '' }: Props) {
  // Line: y = mx + b
  const [m, setM] = useState(1);
  const [b, setB] = useState(0);

  // Circle: (x-h)² + (y-k)² = r²
  const [h, setH] = useState(0);
  const [k, setK] = useState(0);
  const [r, setR] = useState(2);

  const [shapeType, setShapeType] = useState<ShapeType>('both');
  const [showIntersections, setShowIntersections] = useState(true);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const padding = 40;
  const plotSize = width - 2 * padding;

  // Scale
  const xMin = -5;
  const xMax = 5;
  const yMin = -5;
  const yMax = 5;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotSize;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotSize;

  // Calculate line-circle intersections
  const intersections = useMemo(() => {
    // Substitute y = mx + b into (x-h)² + (y-k)² = r²
    // (x-h)² + (mx + b - k)² = r²
    // Let c = b - k
    // (x-h)² + (mx + c)² = r²
    // x² - 2hx + h² + m²x² + 2mcx + c² = r²
    // (1 + m²)x² + (-2h + 2mc)x + (h² + c² - r²) = 0

    const c = b - k;
    const A = 1 + m * m;
    const B = -2 * h + 2 * m * c;
    const C = h * h + c * c - r * r;

    const discriminant = B * B - 4 * A * C;

    if (discriminant < 0) return [];
    if (discriminant === 0) {
      const x = -B / (2 * A);
      const y = m * x + b;
      return [{ x, y }];
    }

    const x1 = (-B + Math.sqrt(discriminant)) / (2 * A);
    const x2 = (-B - Math.sqrt(discriminant)) / (2 * A);
    const y1 = m * x1 + b;
    const y2 = m * x2 + b;

    return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
  }, [m, b, h, k, r]);

  // Generate line path
  const linePath = useMemo(() => {
    const x1 = xMin;
    const x2 = xMax;
    const y1 = m * x1 + b;
    const y2 = m * x2 + b;
    return `M ${toSvgX(x1)} ${toSvgY(y1)} L ${toSvgX(x2)} ${toSvgY(y2)}`;
  }, [m, b, toSvgX, toSvgY]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Lines and Circles in the Coordinate Plane</h3>

      <p className="text-dark-300 mb-6">
        Every line can be written as <span className="text-blue-400 font-mono">y = mx + b</span> and
        every circle as <span className="text-orange-400 font-mono">(x-h)² + (y-k)² = r²</span>.
        Watch how they intersect!
      </p>

      {/* Shape selector */}
      <div className="flex gap-2 mb-4">
        {[
          { type: 'line' as const, label: 'Line Only' },
          { type: 'circle' as const, label: 'Circle Only' },
          { type: 'both' as const, label: 'Both' },
        ].map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setShapeType(type)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              shapeType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {(shapeType === 'line' || shapeType === 'both') && (
          <>
            <div>
              <label className="text-blue-400 text-sm">Slope m = {m.toFixed(1)}</label>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.1"
                value={m}
                onChange={(e) => setM(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-blue-400 text-sm">Y-intercept b = {b.toFixed(1)}</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.1"
                value={b}
                onChange={(e) => setB(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </>
        )}
        {(shapeType === 'circle' || shapeType === 'both') && (
          <>
            <div>
              <label className="text-orange-400 text-sm">Center h = {h.toFixed(1)}</label>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.1"
                value={h}
                onChange={(e) => setH(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
            <div>
              <label className="text-orange-400 text-sm">Center k = {k.toFixed(1)}</label>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.1"
                value={k}
                onChange={(e) => setK(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
            <div className="col-span-2">
              <label className="text-orange-400 text-sm">Radius r = {r.toFixed(1)}</label>
              <input
                type="range"
                min="0.5"
                max="4"
                step="0.1"
                value={r}
                onChange={(e) => setR(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
          </>
        )}
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
            <g key={`grid${i}`}>
              <line
                x1={toSvgX(xMin)}
                y1={toSvgY(i)}
                x2={toSvgX(xMax)}
                y2={toSvgY(i)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={toSvgX(i)}
                y1={toSvgY(yMin)}
                x2={toSvgX(i)}
                y2={toSvgY(yMax)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              {i !== 0 && (
                <>
                  <text x={toSvgX(i)} y={toSvgY(0) + 15} fill="#6b7280" fontSize="10" textAnchor="middle">
                    {i}
                  </text>
                  <text x={toSvgX(0) - 10} y={toSvgY(i) + 4} fill="#6b7280" fontSize="10" textAnchor="end">
                    {i}
                  </text>
                </>
              )}
            </g>
          ))}

          {/* Circle */}
          {(shapeType === 'circle' || shapeType === 'both') && (
            <>
              <circle
                cx={toSvgX(h)}
                cy={toSvgY(k)}
                r={r * plotSize / (xMax - xMin)}
                fill="#f97316"
                fillOpacity={0.1}
                stroke="#f97316"
                strokeWidth={2}
              />
              {/* Center point */}
              <circle cx={toSvgX(h)} cy={toSvgY(k)} r={4} fill="#f97316" />
            </>
          )}

          {/* Line */}
          {(shapeType === 'line' || shapeType === 'both') && (
            <path d={linePath} fill="none" stroke="#3b82f6" strokeWidth={2} />
          )}

          {/* Intersections */}
          {showIntersections && shapeType === 'both' && intersections.map((pt, i) => (
            <g key={i}>
              <circle cx={toSvgX(pt.x)} cy={toSvgY(pt.y)} r={8} fill="#10b981" />
              <text x={toSvgX(pt.x) + 12} y={toSvgY(pt.y) - 8} fill="#10b981" fontSize="11">
                ({pt.x.toFixed(2)}, {pt.y.toFixed(2)})
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Equations */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {(shapeType === 'line' || shapeType === 'both') && (
          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-dark-400 text-xs">Line Equation</p>
            <p className="text-blue-400 font-mono">
              y = {m.toFixed(1)}x {b >= 0 ? '+' : ''} {b.toFixed(1)}
            </p>
          </div>
        )}
        {(shapeType === 'circle' || shapeType === 'both') && (
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
            <p className="text-dark-400 text-xs">Circle Equation</p>
            <p className="text-orange-400 font-mono text-sm">
              (x{h >= 0 ? '-' : '+'}{Math.abs(h).toFixed(1)})² + (y{k >= 0 ? '-' : '+'}{Math.abs(k).toFixed(1)})² = {(r*r).toFixed(1)}
            </p>
          </div>
        )}
      </div>

      {/* Intersection info */}
      {shapeType === 'both' && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-emerald-400 font-medium">
            {intersections.length === 0 && 'No intersection — the line misses the circle'}
            {intersections.length === 1 && 'One intersection — the line is tangent to the circle'}
            {intersections.length === 2 && 'Two intersections — the line is a secant'}
          </p>
        </div>
      )}
    </div>
  );
}
