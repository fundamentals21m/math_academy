import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

interface Point {
  x: number;
  y: number;
}

interface LineGeodesic {
  isLine: true;
  start: Point;
  end: Point;
}

interface ArcGeodesic {
  isLine: false;
  center: Point;
  radius: number;
  startAngle: number;
  endAngle: number;
  idealPoints: Point[];
}

type Geodesic = LineGeodesic | ArcGeodesic;

export function HyperbolicPlaneDemo({ className = '' }: Props) {
  // Points for geodesic
  const [pointA, setPointA] = useState<Point>({ x: -0.5, y: 0.3 });
  const [pointB, setPointB] = useState<Point>({ x: 0.4, y: 0.5 });
  const [showGeodesics, setShowGeodesics] = useState(true);
  const [showIdealPoints, setShowIdealPoints] = useState(true);

  // Poincare disk model - unit disk
  const width = 400;
  const height = 400;
  const cx = width / 2;
  const cy = height / 2;
  const diskRadius = 160;

  const toSvg = (p: Point) => ({
    x: cx + p.x * diskRadius,
    y: cy - p.y * diskRadius,
  });

  // Calculate hyperbolic geodesic between two points
  // In Poincare disk model, geodesics are arcs of circles perpendicular to the boundary
  const calculateGeodesic = (p1: Point, p2: Point): Geodesic | null => {
    // Special case: if points are on a diameter (through origin)
    const cross = p1.x * p2.y - p1.y * p2.x;
    if (Math.abs(cross) < 0.001) {
      // Points are collinear with origin - geodesic is a straight line
      const norm1 = Math.sqrt(p1.x * p1.x + p1.y * p1.y);
      const norm2 = Math.sqrt(p2.x * p2.x + p2.y * p2.y);
      if (norm1 < 0.001 || norm2 < 0.001) return null;

      // Direction vector
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const len = Math.sqrt(dx * dx + dy * dy);
      const ux = dx / len;
      const uy = dy / len;

      return {
        isLine: true,
        start: { x: -ux, y: -uy },
        end: { x: ux, y: uy },
      };
    }

    // General case: find circle through p1, p2 perpendicular to unit circle
    // The center of this circle lies on the radical axis
    // Using the formula for the hyperbolic geodesic

    // Inverse of a point w.r.t unit circle
    const inv = (p: Point) => {
      const r2 = p.x * p.x + p.y * p.y;
      return { x: p.x / r2, y: p.y / r2 };
    };

    const p1inv = inv(p1);

    // The geodesic circle passes through p1, p2, and p1inv (also p2inv)
    // Find circumcenter of p1, p2, p1inv
    const ax = p1.x, ay = p1.y;
    const bx = p2.x, by = p2.y;
    const cxx = p1inv.x, cyy = p1inv.y;

    const d = 2 * (ax * (by - cyy) + bx * (cyy - ay) + cxx * (ay - by));
    if (Math.abs(d) < 0.0001) return null;

    const ux2 = ((ax * ax + ay * ay) * (by - cyy) + (bx * bx + by * by) * (cyy - ay) + (cxx * cxx + cyy * cyy) * (ay - by)) / d;
    const uy2 = ((ax * ax + ay * ay) * (cxx - bx) + (bx * bx + by * by) * (ax - cxx) + (cxx * cxx + cyy * cyy) * (bx - ax)) / d;

    const center = { x: ux2, y: uy2 };
    const radius = Math.sqrt((center.x - p1.x) ** 2 + (center.y - p1.y) ** 2);

    // Calculate angles for the arc
    const angle1 = Math.atan2(p1.y - center.y, p1.x - center.x);
    const angle2 = Math.atan2(p2.y - center.y, p2.x - center.x);

    // Find ideal points (intersection with boundary circle)
    // Solve: (x - cx)^2 + (y - cy)^2 = r^2 and x^2 + y^2 = 1
    const idealPoints: Point[] = [];
    const dc = Math.sqrt(center.x * center.x + center.y * center.y);
    if (dc > 0.001) {
      // Using law of cosines for the intersection
      const cosTheta = (dc * dc + 1 - radius * radius) / (2 * dc);
      if (Math.abs(cosTheta) <= 1) {
        const theta = Math.acos(cosTheta);
        const baseAngle = Math.atan2(center.y, center.x) + Math.PI;
        idealPoints.push({
          x: Math.cos(baseAngle + theta),
          y: Math.sin(baseAngle + theta),
        });
        idealPoints.push({
          x: Math.cos(baseAngle - theta),
          y: Math.sin(baseAngle - theta),
        });
      }
    }

    return {
      isLine: false,
      center,
      radius,
      startAngle: angle1,
      endAngle: angle2,
      idealPoints,
    };
  };

  // Calculate hyperbolic distance
  const hyperbolicDistance = useMemo(() => {
    const x1 = pointA.x, y1 = pointA.y;
    const x2 = pointB.x, y2 = pointB.y;

    // Poincare disk distance formula
    const euclidDist2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
    const denom = (1 - x1 * x1 - y1 * y1) * (1 - x2 * x2 - y2 * y2);

    if (denom <= 0) return Infinity;

    const ratio = euclidDist2 / denom;
    return Math.acosh(1 + 2 * ratio);
  }, [pointA, pointB]);

  const geodesic = useMemo(() => calculateGeodesic(pointA, pointB), [pointA, pointB]);

  // Create SVG arc path
  const createArcPath = (geo: Geodesic | null) => {
    if (!geo) return '';

    if (geo.isLine) {
      const start = toSvg(geo.start);
      const end = toSvg(geo.end);
      return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
    }

    // Arc
    const svgCenter = toSvg(geo.center);
    const svgRadius = geo.radius * diskRadius;

    // Determine arc direction
    const startAngle = geo.startAngle;
    const endAngle = geo.endAngle;

    // Ensure we take the shorter arc
    let diff = endAngle - startAngle;
    while (diff > Math.PI) diff -= 2 * Math.PI;
    while (diff < -Math.PI) diff += 2 * Math.PI;

    const largeArc = Math.abs(diff) > Math.PI ? 1 : 0;
    const sweep = diff > 0 ? 0 : 1;

    const start = {
      x: svgCenter.x + svgRadius * Math.cos(startAngle),
      y: svgCenter.y - svgRadius * Math.sin(startAngle),
    };
    const end = {
      x: svgCenter.x + svgRadius * Math.cos(endAngle),
      y: svgCenter.y - svgRadius * Math.sin(endAngle),
    };

    return `M ${start.x} ${start.y} A ${svgRadius} ${svgRadius} 0 ${largeArc} ${sweep} ${end.x} ${end.y}`;
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Hyperbolic Plane (Poincaré Disk)</h3>

      <p className="text-dark-300 mb-6">
        In hyperbolic geometry, "straight lines" (geodesics) are arcs of circles
        perpendicular to the boundary. Distance stretches as you approach the edge.
      </p>

      {/* Point controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-red-400 text-sm">Point A</label>
          <div className="flex gap-2">
            <input
              type="range"
              min="-0.9"
              max="0.9"
              step="0.05"
              value={pointA.x}
              onChange={(e) => setPointA({ ...pointA, x: parseFloat(e.target.value) })}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
            <input
              type="range"
              min="-0.9"
              max="0.9"
              step="0.05"
              value={pointA.y}
              onChange={(e) => setPointA({ ...pointA, y: parseFloat(e.target.value) })}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
          </div>
        </div>
        <div>
          <label className="text-blue-400 text-sm">Point B</label>
          <div className="flex gap-2">
            <input
              type="range"
              min="-0.9"
              max="0.9"
              step="0.05"
              value={pointB.x}
              onChange={(e) => setPointB({ ...pointB, x: parseFloat(e.target.value) })}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <input
              type="range"
              min="-0.9"
              max="0.9"
              step="0.05"
              value={pointB.y}
              onChange={(e) => setPointB({ ...pointB, y: parseFloat(e.target.value) })}
              className="flex-1 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Toggles */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowGeodesics(!showGeodesics)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showGeodesics ? 'bg-emerald-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Geodesic
        </button>
        <button
          onClick={() => setShowIdealPoints(!showIdealPoints)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showIdealPoints ? 'bg-purple-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Ideal Points
        </button>
      </div>

      {/* Canvas */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Boundary circle (represents infinity) */}
          <circle
            cx={cx}
            cy={cy}
            r={diskRadius}
            fill="#1f2937"
            stroke="#6b7280"
            strokeWidth={3}
          />

          {/* Reference geodesics (diameters) */}
          {[0, 30, 60, 90, 120, 150].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={angle}
                x1={cx + diskRadius * Math.cos(rad)}
                y1={cy - diskRadius * Math.sin(rad)}
                x2={cx - diskRadius * Math.cos(rad)}
                y2={cy + diskRadius * Math.sin(rad)}
                stroke="#374151"
                strokeWidth={1}
                opacity={0.5}
              />
            );
          })}

          {/* Concentric circles (equal hyperbolic distance from center) */}
          {[0.3, 0.5, 0.7, 0.85].map((r) => (
            <circle
              key={r}
              cx={cx}
              cy={cy}
              r={r * diskRadius}
              fill="none"
              stroke="#374151"
              strokeWidth={1}
              strokeDasharray="3 3"
              opacity={0.5}
            />
          ))}

          {/* Geodesic between A and B */}
          {showGeodesics && geodesic && (
            <path
              d={createArcPath(geodesic)}
              fill="none"
              stroke="#10b981"
              strokeWidth={3}
            />
          )}

          {/* Ideal points (where geodesic meets boundary) */}
          {showIdealPoints && geodesic && !geodesic.isLine && geodesic.idealPoints && (
            geodesic.idealPoints.map((p, i) => {
              const svg = toSvg(p);
              return (
                <g key={i}>
                  <circle cx={svg.x} cy={svg.y} r={6} fill="#a855f7" />
                  <text
                    x={svg.x + (p.x > 0 ? 12 : -12)}
                    y={svg.y}
                    fill="#a855f7"
                    fontSize="11"
                    textAnchor={p.x > 0 ? 'start' : 'end'}
                  >
                    ∞
                  </text>
                </g>
              );
            })
          )}

          {/* Point A */}
          <circle
            cx={toSvg(pointA).x}
            cy={toSvg(pointA).y}
            r={8}
            fill="#ef4444"
          />
          <text
            x={toSvg(pointA).x + 12}
            y={toSvg(pointA).y + 4}
            fill="#ef4444"
            fontSize="14"
            fontWeight="bold"
          >
            A
          </text>

          {/* Point B */}
          <circle
            cx={toSvg(pointB).x}
            cy={toSvg(pointB).y}
            r={8}
            fill="#3b82f6"
          />
          <text
            x={toSvg(pointB).x + 12}
            y={toSvg(pointB).y + 4}
            fill="#3b82f6"
            fontSize="14"
            fontWeight="bold"
          >
            B
          </text>

          {/* Center */}
          <circle cx={cx} cy={cy} r={3} fill="#6b7280" />
        </svg>
      </div>

      {/* Distance */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Hyperbolic Distance</p>
          <p className="text-emerald-400 font-mono text-xl">
            {isFinite(hyperbolicDistance) ? hyperbolicDistance.toFixed(3) : '∞'}
          </p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Euclidean Distance</p>
          <p className="text-orange-400 font-mono text-xl">
            {Math.sqrt((pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2).toFixed(3)}
          </p>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          In the <strong className="text-purple-400">Poincaré disk model</strong>, the
          entire hyperbolic plane fits inside a unit disk. The boundary circle represents
          "infinity" - points near the edge are hyperbolically far from the center.
          Geodesics are circular arcs meeting the boundary at right angles.
        </p>
      </div>
    </div>
  );
}
