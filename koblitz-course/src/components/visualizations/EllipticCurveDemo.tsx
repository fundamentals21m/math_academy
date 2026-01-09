import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

interface Point {
  x: number;
  y: number;
}

export function EllipticCurveDemo({ className = '' }: Props) {
  const [a, setA] = useState(-1);
  const [b, setB] = useState(1);
  const [pointP, setPointP] = useState<Point>({ x: 0, y: 1 });
  const [pointQ, setPointQ] = useState<Point>({ x: 1, y: 1 });
  const [showAddition, setShowAddition] = useState(true);

  // SVG dimensions
  const width = 450;
  const height = 400;
  const padding = 50;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Plot range
  const xMin = -3;
  const xMax = 3;
  const yMin = -3;
  const yMax = 3;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Check discriminant (curve is non-singular if Δ ≠ 0)
  const discriminant = 4 * a * a * a + 27 * b * b;
  const isNonSingular = Math.abs(discriminant) > 0.001;

  // Compute y from x on the curve (if exists)
  const curveY = (x: number): number | null => {
    const rhs = x * x * x + a * x + b;
    if (rhs < 0) return null;
    return Math.sqrt(rhs);
  };

  // Generate curve points
  const curvePath = useMemo(() => {
    const upperPoints: string[] = [];
    const lowerPoints: string[] = [];

    for (let i = 0; i <= 200; i++) {
      const x = xMin + (i / 200) * (xMax - xMin);
      const y = curveY(x);
      if (y !== null) {
        const svgX = toSvgX(x);
        upperPoints.push(`${upperPoints.length === 0 ? 'M' : 'L'} ${svgX} ${toSvgY(y)}`);
        lowerPoints.unshift(`L ${svgX} ${toSvgY(-y)}`);
      }
    }

    if (upperPoints.length === 0) return '';
    return upperPoints.join(' ') + ' ' + lowerPoints.join(' ');
  }, [a, b, xMin, xMax, toSvgX, toSvgY]);

  // Snap point to curve
  const snapToCurve = (x: number): Point | null => {
    const y = curveY(x);
    if (y === null) return null;
    return { x, y };
  };

  // Point addition P + Q
  const addPoints = (P: Point, Q: Point): Point | null => {
    if (!isNonSingular) return null;

    // Check if P and Q are on the curve (approximately)
    const onCurve = (pt: Point) => {
      const lhs = pt.y * pt.y;
      const rhs = pt.x * pt.x * pt.x + a * pt.x + b;
      return Math.abs(lhs - rhs) < 0.1;
    };

    if (!onCurve(P) || !onCurve(Q)) return null;

    let lambda: number;

    if (Math.abs(P.x - Q.x) < 0.001 && Math.abs(P.y - Q.y) < 0.001) {
      // P = Q, tangent case
      if (Math.abs(P.y) < 0.001) return null; // Point at infinity
      lambda = (3 * P.x * P.x + a) / (2 * P.y);
    } else if (Math.abs(P.x - Q.x) < 0.001) {
      // P.x = Q.x but P ≠ Q means P + Q = O (point at infinity)
      return null;
    } else {
      // General case
      lambda = (Q.y - P.y) / (Q.x - P.x);
    }

    const xR = lambda * lambda - P.x - Q.x;
    const yR = lambda * (P.x - xR) - P.y;

    return { x: xR, y: yR };
  };

  const sumPoint = showAddition ? addPoints(pointP, pointQ) : null;

  // Line through P and Q (or tangent if P = Q)
  const linePath = useMemo(() => {
    if (!showAddition) return '';

    let lambda: number;
    if (Math.abs(pointP.x - pointQ.x) < 0.001 && Math.abs(pointP.y - pointQ.y) < 0.001) {
      if (Math.abs(pointP.y) < 0.001) return '';
      lambda = (3 * pointP.x * pointP.x + a) / (2 * pointP.y);
    } else if (Math.abs(pointP.x - pointQ.x) < 0.001) {
      // Vertical line
      return `M ${toSvgX(pointP.x)} ${toSvgY(yMin)} L ${toSvgX(pointP.x)} ${toSvgY(yMax)}`;
    } else {
      lambda = (pointQ.y - pointP.y) / (pointQ.x - pointP.x);
    }

    const b_line = pointP.y - lambda * pointP.x;
    const y1 = lambda * xMin + b_line;
    const y2 = lambda * xMax + b_line;

    return `M ${toSvgX(xMin)} ${toSvgY(y1)} L ${toSvgX(xMax)} ${toSvgY(y2)}`;
  }, [pointP, pointQ, a, showAddition, xMin, xMax, toSvgX, toSvgY, yMin, yMax]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Elliptic Curves</h3>

      <p className="text-dark-300 mb-4">
        An elliptic curve E: y² = x³ + ax + b forms a group under point addition.
        The sum P + Q is found by drawing a line through P and Q, finding the third
        intersection with the curve, then reflecting over the x-axis.
      </p>

      {/* Curve parameters */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-blue-400 text-sm">a = {a}</label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.25"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-emerald-400 text-sm">b = {b}</label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.25"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Curve equation */}
      <div className={`mb-4 p-3 rounded-lg border ${
        isNonSingular
          ? 'bg-dark-700/50 border-dark-600'
          : 'bg-red-500/20 border-red-500/50'
      }`}>
        <p className="text-center font-mono">
          <span className="text-dark-100">y² = x³ </span>
          <span className={a >= 0 ? 'text-blue-400' : 'text-blue-400'}>
            {a >= 0 ? '+' : ''} {a}x
          </span>
          <span className={b >= 0 ? 'text-emerald-400' : 'text-emerald-400'}>
            {' '}{b >= 0 ? '+' : ''} {b}
          </span>
        </p>
        {!isNonSingular && (
          <p className="text-red-400 text-xs text-center mt-1">
            Singular curve (Δ = 0) — not valid for cryptography
          </p>
        )}
      </div>

      {/* Point controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-orange-400 text-sm">P.x = {pointP.x.toFixed(2)}</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.1"
            value={pointP.x}
            onChange={(e) => {
              const x = parseFloat(e.target.value);
              const snapped = snapToCurve(x);
              if (snapped) setPointP(snapped);
            }}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>
        <div>
          <label className="text-purple-400 text-sm">Q.x = {pointQ.x.toFixed(2)}</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.1"
            value={pointQ.x}
            onChange={(e) => {
              const x = parseFloat(e.target.value);
              const snapped = snapToCurve(x);
              if (snapped) setPointQ(snapped);
            }}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
        </div>
      </div>

      {/* Toggle */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowAddition(!showAddition)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showAddition ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Show P + Q
        </button>
        <button
          onClick={() => setPointQ(pointP)}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-dark-700 text-dark-300 hover:bg-dark-600"
        >
          Set Q = P (doubling)
        </button>
      </div>

      {/* Visualization */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-2, -1, 0, 1, 2].map((v) => (
            <g key={`grid-${v}`}>
              <line
                x1={padding}
                y1={toSvgY(v)}
                x2={width - padding}
                y2={toSvgY(v)}
                stroke={v === 0 ? '#4b5563' : '#374151'}
                strokeWidth={v === 0 ? 2 : 1}
              />
              <line
                x1={toSvgX(v)}
                y1={padding}
                x2={toSvgX(v)}
                y2={height - padding}
                stroke={v === 0 ? '#4b5563' : '#374151'}
                strokeWidth={v === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Curve */}
          {curvePath && (
            <path d={curvePath} fill="none" stroke="#10b981" strokeWidth={3} />
          )}

          {/* Addition line */}
          {showAddition && linePath && (
            <path d={linePath} fill="none" stroke="#f97316" strokeWidth={1} strokeDasharray="5 5" opacity={0.7} />
          )}

          {/* Point P */}
          <circle cx={toSvgX(pointP.x)} cy={toSvgY(pointP.y)} r={8} fill="#f97316" />
          <text x={toSvgX(pointP.x) + 12} y={toSvgY(pointP.y) - 8} fill="#f97316" fontSize="14" fontWeight="bold">
            P
          </text>

          {/* Point Q */}
          <circle cx={toSvgX(pointQ.x)} cy={toSvgY(pointQ.y)} r={8} fill="#8b5cf6" />
          <text x={toSvgX(pointQ.x) + 12} y={toSvgY(pointQ.y) - 8} fill="#8b5cf6" fontSize="14" fontWeight="bold">
            Q
          </text>

          {/* Sum point P + Q */}
          {showAddition && sumPoint && (
            <>
              {/* -R (third intersection) */}
              <circle
                cx={toSvgX(sumPoint.x)}
                cy={toSvgY(-sumPoint.y)}
                r={5}
                fill="none"
                stroke="#ef4444"
                strokeWidth={2}
                strokeDasharray="3 3"
              />
              {/* Reflection line */}
              <line
                x1={toSvgX(sumPoint.x)}
                y1={toSvgY(-sumPoint.y)}
                x2={toSvgX(sumPoint.x)}
                y2={toSvgY(sumPoint.y)}
                stroke="#ef4444"
                strokeWidth={1}
                strokeDasharray="3 3"
              />
              {/* R = P + Q */}
              <circle cx={toSvgX(sumPoint.x)} cy={toSvgY(sumPoint.y)} r={8} fill="#ef4444" />
              <text x={toSvgX(sumPoint.x) + 12} y={toSvgY(sumPoint.y) - 8} fill="#ef4444" fontSize="14" fontWeight="bold">
                P+Q
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Result */}
      {showAddition && (
        <div className="mt-4 p-4 rounded-xl bg-red-500/20 border border-red-500/50">
          <p className="text-center">
            {sumPoint ? (
              <span className="font-mono">
                <span className="text-orange-400">P</span>
                <span className="text-dark-300"> + </span>
                <span className="text-purple-400">Q</span>
                <span className="text-dark-300"> = </span>
                <span className="text-red-400">
                  ({sumPoint.x.toFixed(3)}, {sumPoint.y.toFixed(3)})
                </span>
              </span>
            ) : (
              <span className="text-dark-400">P + Q = O (point at infinity)</span>
            )}
          </p>
        </div>
      )}

      {/* Info */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          <strong className="text-emerald-400">Elliptic Curve Cryptography:</strong> The discrete log problem
          on elliptic curves (finding n such that Q = nP) is even harder than in finite fields.
          This allows much smaller key sizes for equivalent security (256-bit ECC ≈ 3072-bit RSA).
        </p>
      </div>
    </div>
  );
}
