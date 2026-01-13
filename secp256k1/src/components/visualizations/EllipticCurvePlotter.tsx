import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
  initialA?: number;
  initialB?: number;
  showControls?: boolean;
}

/**
 * Interactive visualization of an elliptic curve y² = x³ + ax + b.
 * Allows adjusting a and b parameters to see how the curve shape changes.
 * Highlights secp256k1's specific curve (a=0, b=7).
 */
export function EllipticCurvePlotter({
  className = '',
  initialA = 0,
  initialB = 7,
  showControls = true,
}: Props) {
  const [a, setA] = useState(initialA);
  const [b, setB] = useState(initialB);
  const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number } | null>(null);

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 50;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;

  // Coordinate range for the plot
  const xRange = { min: -4, max: 4 };
  const yRange = { min: -10, max: 10 };

  // Convert math coordinates to SVG coordinates
  const toSvgX = (x: number) =>
    padding + ((x - xRange.min) / (xRange.max - xRange.min)) * graphWidth;
  const toSvgY = (y: number) =>
    height - padding - ((y - yRange.min) / (yRange.max - yRange.min)) * graphHeight;

  // Check if discriminant is non-zero (valid curve)
  const discriminant = 4 * Math.pow(a, 3) + 27 * Math.pow(b, 2);
  const isValidCurve = discriminant !== 0;

  // Generate curve points
  const curvePoints = useMemo(() => {
    const points: { x: number; yPos: number; yNeg: number }[] = [];
    const step = 0.05;

    for (let x = xRange.min; x <= xRange.max; x += step) {
      const rhs = Math.pow(x, 3) + a * x + b;
      if (rhs >= 0) {
        const y = Math.sqrt(rhs);
        points.push({ x, yPos: y, yNeg: -y });
      }
    }
    return points;
  }, [a, b]);

  // Generate path for upper and lower halves
  const upperPath = useMemo(() => {
    const validPoints = curvePoints.filter(
      (p) => p.yPos >= yRange.min && p.yPos <= yRange.max
    );
    if (validPoints.length === 0) return '';
    return validPoints
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${toSvgX(p.x)} ${toSvgY(p.yPos)}`)
      .join(' ');
  }, [curvePoints]);

  const lowerPath = useMemo(() => {
    const validPoints = curvePoints.filter(
      (p) => p.yNeg >= yRange.min && p.yNeg <= yRange.max
    );
    if (validPoints.length === 0) return '';
    return validPoints
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${toSvgX(p.x)} ${toSvgY(p.yNeg)}`)
      .join(' ');
  }, [curvePoints]);

  // Check if current params match secp256k1
  const isSecp256k1 = a === 0 && b === 7;

  // Find some example points on the curve
  const examplePoints = useMemo(() => {
    const points: { x: number; y: number }[] = [];
    for (const p of curvePoints) {
      if (p.x > 0 && Math.abs(p.x - Math.round(p.x)) < 0.05) {
        const roundedX = Math.round(p.x);
        if (!points.find((pt) => Math.round(pt.x) === roundedX)) {
          points.push({ x: roundedX, y: p.yPos });
        }
      }
      if (points.length >= 3) break;
    }
    return points;
  }, [curvePoints]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-dark-100">Elliptic Curve Plotter</h3>
        {isSecp256k1 && (
          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
            secp256k1
          </span>
        )}
      </div>
      <p className="text-dark-400 text-sm mb-4">
        Explore the shape of y&sup2; = x&sup3; + ax + b by adjusting the parameters.
      </p>

      {showControls && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-dark-300 text-sm mb-2">
              Parameter a: <span className="text-primary-400 font-mono">{a}</span>
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.5"
              value={a}
              onChange={(e) => setA(parseFloat(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
            />
          </div>
          <div>
            <label className="block text-dark-300 text-sm mb-2">
              Parameter b: <span className="text-emerald-400 font-mono">{b}</span>
            </label>
            <input
              type="range"
              min="-5"
              max="10"
              step="0.5"
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
        </div>
      )}

      {/* Quick preset buttons */}
      {showControls && (
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => {
              setA(0);
              setB(7);
            }}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              isSecp256k1
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'bg-dark-700 text-dark-400 border border-dark-600 hover:bg-dark-600'
            }`}
          >
            secp256k1 (a=0, b=7)
          </button>
          <button
            onClick={() => {
              setA(-3);
              setB(3);
            }}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              a === -3 && b === 3
                ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                : 'bg-dark-700 text-dark-400 border border-dark-600 hover:bg-dark-600'
            }`}
          >
            P-256 style (a=-3, b=3)
          </button>
        </div>
      )}

      {/* Validity indicator */}
      {!isValidCurve && (
        <div className="p-3 mb-4 rounded-lg bg-red-500/10 border border-red-500/30">
          <p className="text-red-400 text-sm">
            <strong>Invalid curve!</strong> The discriminant 4a&sup3; + 27b&sup2; = 0
            creates a singular curve (cusp or node).
          </p>
        </div>
      )}

      {/* SVG Chart */}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-dark-900/50 rounded-xl">
        {/* Grid lines */}
        {[-3, -2, -1, 0, 1, 2, 3].map((x) => (
          <line
            key={`vgrid-${x}`}
            x1={toSvgX(x)}
            y1={padding}
            x2={toSvgX(x)}
            y2={height - padding}
            stroke={x === 0 ? '#6b7280' : '#374151'}
            strokeWidth={x === 0 ? 2 : 1}
            strokeDasharray={x === 0 ? 'none' : '4,4'}
          />
        ))}
        {[-8, -4, 0, 4, 8].map((y) => (
          <line
            key={`hgrid-${y}`}
            x1={padding}
            y1={toSvgY(y)}
            x2={width - padding}
            y2={toSvgY(y)}
            stroke={y === 0 ? '#6b7280' : '#374151'}
            strokeWidth={y === 0 ? 2 : 1}
            strokeDasharray={y === 0 ? 'none' : '4,4'}
          />
        ))}

        {/* Axis labels */}
        <text x={width - padding + 10} y={toSvgY(0) + 4} fill="#9ca3af" fontSize="12">
          x
        </text>
        <text x={toSvgX(0) + 5} y={padding - 10} fill="#9ca3af" fontSize="12">
          y
        </text>

        {/* Tick labels */}
        {[-3, -2, -1, 1, 2, 3].map((x) => (
          <text
            key={`xlabel-${x}`}
            x={toSvgX(x)}
            y={toSvgY(0) + 15}
            fill="#6b7280"
            fontSize="10"
            textAnchor="middle"
          >
            {x}
          </text>
        ))}
        {[-8, -4, 4, 8].map((y) => (
          <text
            key={`ylabel-${y}`}
            x={toSvgX(0) - 10}
            y={toSvgY(y) + 4}
            fill="#6b7280"
            fontSize="10"
            textAnchor="end"
          >
            {y}
          </text>
        ))}

        {/* The curve */}
        {isValidCurve && (
          <>
            <motion.path
              d={upperPath}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.path
              d={lowerPath}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
          </>
        )}

        {/* Example points */}
        {examplePoints.map((p, i) => (
          <g key={i}>
            <motion.circle
              cx={toSvgX(p.x)}
              cy={toSvgY(p.y)}
              r={hoveredPoint?.x === p.x && hoveredPoint?.y === p.y ? 8 : 6}
              fill="#10b981"
              stroke="#fff"
              strokeWidth="2"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint(p)}
              onMouseLeave={() => setHoveredPoint(null)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            />
            <motion.circle
              cx={toSvgX(p.x)}
              cy={toSvgY(-p.y)}
              r={hoveredPoint?.x === p.x && hoveredPoint?.y === -p.y ? 8 : 6}
              fill="#10b981"
              stroke="#fff"
              strokeWidth="2"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint({ x: p.x, y: -p.y })}
              onMouseLeave={() => setHoveredPoint(null)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            />
          </g>
        ))}
      </svg>

      {/* Equation display */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600/50 text-center">
        <span className="text-dark-300">Curve: </span>
        <span className="text-xl font-mono text-amber-400">
          y&sup2; = x&sup3;{a !== 0 && ` ${a > 0 ? '+' : '-'} ${Math.abs(a)}x`}
          {b !== 0 && ` ${b > 0 ? '+' : '-'} ${Math.abs(b)}`}
        </span>
      </div>

      {/* Hovered point info */}
      {hoveredPoint && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
        >
          <p className="text-emerald-400 text-sm">
            Point: ({hoveredPoint.x.toFixed(2)}, {hoveredPoint.y.toFixed(3)})
          </p>
          <p className="text-dark-400 text-xs mt-1">
            Verification: ({hoveredPoint.y.toFixed(3)})&sup2; ={' '}
            {(hoveredPoint.y * hoveredPoint.y).toFixed(3)} ={' '}
            {(
              Math.pow(hoveredPoint.x, 3) +
              a * hoveredPoint.x +
              b
            ).toFixed(3)}
          </p>
        </motion.div>
      )}

      {/* Discriminant info */}
      <div className="mt-4 p-3 rounded-xl bg-dark-700/30">
        <p className="text-dark-400 text-sm">
          <span className="text-dark-300">Discriminant: </span>
          <span className="font-mono">4({a})&sup3; + 27({b})&sup2; = {discriminant.toFixed(1)}</span>
          {discriminant !== 0 ? (
            <span className="text-emerald-400 ml-2">&#10003; Valid curve</span>
          ) : (
            <span className="text-red-400 ml-2">&#10007; Singular</span>
          )}
        </p>
      </div>
    </div>
  );
}
