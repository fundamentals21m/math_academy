import { useState, useMemo } from 'react';

type CurveType = 'circle' | 'ellipse' | 'lemniscate' | 'folium';

export function ImplicitFunctionVisualizer() {
  const [curveType, setCurveType] = useState<CurveType>('circle');
  const [showTangent, setShowTangent] = useState(true);
  const [theta, setTheta] = useState(Math.PI / 4);

  const size = 300;
  const center = size / 2;
  const scale = size / 5;

  const { F, Fx, Fy, name, getPoint } = useMemo(() => {
    switch (curveType) {
      case 'circle':
        return {
          F: (x: number, y: number) => x * x + y * y - 1,
          Fx: (x: number) => 2 * x,
          Fy: (y: number) => 2 * y,
          name: 'x² + y² = 1',
          getPoint: (t: number) => ({ x: Math.cos(t), y: Math.sin(t) }),
        };
      case 'ellipse':
        return {
          F: (x: number, y: number) => x * x / 4 + y * y - 1,
          Fx: (x: number) => x / 2,
          Fy: (y: number) => 2 * y,
          name: 'x²/4 + y² = 1',
          getPoint: (t: number) => ({ x: 2 * Math.cos(t), y: Math.sin(t) }),
        };
      case 'lemniscate':
        return {
          F: (x: number, y: number) => Math.pow(x * x + y * y, 2) - (x * x - y * y),
          Fx: (x: number, y: number) => 4 * x * (x * x + y * y) - 2 * x,
          Fy: (x: number, y: number) => 4 * y * (x * x + y * y) + 2 * y,
          name: '(x² + y²)² = x² - y²',
          getPoint: (t: number) => {
            const r = Math.sqrt(Math.abs(Math.cos(2 * t)));
            return { x: r * Math.cos(t), y: r * Math.sin(t) };
          },
        };
      case 'folium':
        return {
          F: (x: number, y: number) => Math.pow(x, 3) + Math.pow(y, 3) - 3 * x * y,
          Fx: (x: number, y: number) => 3 * x * x - 3 * y,
          Fy: (x: number, y: number) => 3 * y * y - 3 * x,
          name: 'x³ + y³ = 3xy',
          getPoint: (t: number) => {
            const denom = 1 + Math.pow(t, 3);
            if (Math.abs(denom) < 0.01) return { x: 0, y: 0 };
            return { x: 3 * t / denom, y: 3 * t * t / denom };
          },
        };
      default:
        return {
          F: () => 0,
          Fx: () => 0,
          Fy: () => 0,
          name: '',
          getPoint: () => ({ x: 0, y: 0 }),
        };
    }
  }, [curveType]);

  // Generate curve points using marching squares approximation
  const curvePoints = useMemo(() => {
    const points: { x: number; y: number }[] = [];
    const range = 2.5;
    const step = 0.02;

    for (let t = 0; t <= 2 * Math.PI; t += 0.02) {
      const p = getPoint(t);
      if (Math.abs(p.x) < range && Math.abs(p.y) < range) {
        points.push(p);
      }
    }

    // For folium, add more points
    if (curveType === 'folium') {
      for (let t = -5; t <= 5; t += 0.05) {
        const p = getPoint(t);
        if (Math.abs(p.x) < range && Math.abs(p.y) < range) {
          points.push(p);
        }
      }
    }

    return points;
  }, [curveType, getPoint]);

  const point = getPoint(theta);
  const fx = typeof Fx === 'function' && Fx.length === 2 ? Fx(point.x, point.y) : (Fx as (x: number) => number)(point.x);
  const fy = typeof Fy === 'function' && Fy.length === 2 ? Fy(point.x, point.y) : (Fy as (y: number) => number)(point.y);

  // Tangent direction: perpendicular to gradient (-Fy, Fx)
  const tangentLength = 0.8;
  const gradMag = Math.sqrt(fx * fx + fy * fy);
  const tx = gradMag > 0.01 ? -fy / gradMag * tangentLength : 0;
  const ty = gradMag > 0.01 ? fx / gradMag * tangentLength : 0;

  // dy/dx = -Fx/Fy by implicit differentiation
  const dydx = fy !== 0 ? -fx / fy : Infinity;

  return (
    <div className="p-4 bg-dark-800 rounded-lg">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Implicit Function Theorem</h3>

      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">Curve F(x,y) = 0</label>
          <select
            value={curveType}
            onChange={(e) => setCurveType(e.target.value as CurveType)}
            className="px-3 py-2 bg-dark-700 text-dark-100 rounded border border-dark-600"
          >
            <option value="circle">Circle</option>
            <option value="ellipse">Ellipse</option>
            <option value="lemniscate">Lemniscate</option>
            <option value="folium">Folium of Descartes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">θ = {(theta * 180 / Math.PI).toFixed(0)}°</label>
          <input
            type="range"
            min="0"
            max={2 * Math.PI}
            step="0.1"
            value={theta}
            onChange={(e) => setTheta(parseFloat(e.target.value))}
            className="w-24"
          />
        </div>

        <label className="flex items-center gap-2 text-dark-300">
          <input
            type="checkbox"
            checked={showTangent}
            onChange={(e) => setShowTangent(e.target.checked)}
            className="rounded"
          />
          Show tangent
        </label>
      </div>

      <svg width={size} height={size} className="bg-dark-900 rounded">
        {/* Grid */}
        <line x1={center} y1={0} x2={center} y2={size} stroke="#374151" />
        <line x1={0} y1={center} x2={size} y2={center} stroke="#374151" />

        {/* Curve */}
        {curvePoints.map((p, i) => (
          <circle
            key={i}
            cx={center + p.x * scale}
            cy={center - p.y * scale}
            r={1.5}
            fill="#3b82f6"
          />
        ))}

        {/* Current point */}
        <circle
          cx={center + point.x * scale}
          cy={center - point.y * scale}
          r={6}
          fill="#ef4444"
        />

        {/* Tangent line */}
        {showTangent && gradMag > 0.01 && (
          <line
            x1={center + (point.x - tx) * scale}
            y1={center - (point.y - ty) * scale}
            x2={center + (point.x + tx) * scale}
            y2={center - (point.y + ty) * scale}
            stroke="#22c55e"
            strokeWidth="2"
          />
        )}

        {/* Gradient vector (normal to curve) */}
        {showTangent && gradMag > 0.01 && (
          <line
            x1={center + point.x * scale}
            y1={center - point.y * scale}
            x2={center + (point.x + fx / gradMag * 0.5) * scale}
            y2={center - (point.y + fy / gradMag * 0.5) * scale}
            stroke="#f59e0b"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
        )}

        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
          </marker>
        </defs>
      </svg>

      <div className="mt-4 text-sm text-dark-400">
        <p className="font-medium text-dark-200">{name}</p>
        <p>Point: ({point.x.toFixed(3)}, {point.y.toFixed(3)})</p>
        <p>∂F/∂y = {fy.toFixed(3)} {Math.abs(fy) > 0.01 ? '≠ 0 ✓' : '= 0 (IFT fails)'}</p>
        {Math.abs(fy) > 0.01 && (
          <p>dy/dx = -Fₓ/Fᵧ = {dydx.toFixed(3)}</p>
        )}
        <p className="mt-2">
          <span className="text-green-400">Green</span>: Tangent line |{' '}
          <span className="text-amber-400">Orange</span>: Gradient (normal)
        </p>
      </div>
    </div>
  );
}
