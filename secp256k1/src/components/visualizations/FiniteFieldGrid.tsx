import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
}

interface Props {
  className?: string;
}

/**
 * Visualization of an elliptic curve y² = x³ + 7 over a finite field ℤp.
 * Shows how the smooth curve becomes scattered discrete points when working modulo p.
 */
export function FiniteFieldGrid({ className = '' }: Props) {
  const [p, setP] = useState(17);
  const [hoveredPoint, setHoveredPoint] = useState<Point | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);

  // Fixed curve parameters (secp256k1 style)
  const a = 0;
  const b = 7;

  // SVG dimensions
  const width = 500;
  const height = 500;
  const padding = 50;
  const graphSize = Math.min(width, height) - 2 * padding;

  // Modular arithmetic helpers
  const mod = (n: number, m: number) => ((n % m) + m) % m;

  // Check if n is a quadratic residue mod p (has a square root)
  const isQuadraticResidue = (n: number, prime: number): boolean => {
    if (n === 0) return true;
    // Euler's criterion: n^((p-1)/2) ≡ 1 (mod p)
    return modPow(n, (prime - 1) / 2, prime) === 1;
  };

  // Modular exponentiation
  const modPow = (base: number, exp: number, modulus: number): number => {
    let result = 1;
    base = mod(base, modulus);
    while (exp > 0) {
      if (exp % 2 === 1) {
        result = mod(result * base, modulus);
      }
      exp = Math.floor(exp / 2);
      base = mod(base * base, modulus);
    }
    return result;
  };

  // Tonelli-Shanks algorithm for modular square root (simplified for small primes)
  const modSqrt = (n: number, prime: number): number[] => {
    if (n === 0) return [0];
    if (!isQuadraticResidue(n, prime)) return [];

    // For p ≡ 3 (mod 4), use simple formula
    if (prime % 4 === 3) {
      const root = modPow(n, (prime + 1) / 4, prime);
      const negRoot = mod(-root, prime);
      return root === negRoot ? [root] : [root, negRoot].sort((a, b) => a - b);
    }

    // Brute force for small primes (good enough for demo)
    const roots: number[] = [];
    for (let i = 0; i < prime; i++) {
      if (mod(i * i, prime) === mod(n, prime)) {
        roots.push(i);
      }
    }
    return roots.sort((a, b) => a - b);
  };

  // Find all points on the curve
  const curvePoints = useMemo(() => {
    const points: Point[] = [];

    for (let x = 0; x < p; x++) {
      const rhs = mod(x * x * x + a * x + b, p);
      const yValues = modSqrt(rhs, p);
      for (const y of yValues) {
        points.push({ x, y });
      }
    }

    return points;
  }, [p, a, b]);

  // Convert field coordinates to SVG
  const toSvgX = (x: number) => padding + (x / (p - 1)) * graphSize;
  const toSvgY = (y: number) => height - padding - (y / (p - 1)) * graphSize;

  // Point addition in the finite field
  const addPoints = (P: Point, Q: Point): Point | null => {
    if (P.x === Q.x && P.y !== Q.y) {
      return null; // Point at infinity
    }

    let lambda: number;
    if (P.x === Q.x && P.y === Q.y) {
      // Point doubling
      if (P.y === 0) return null;
      const num = mod(3 * P.x * P.x + a, p);
      const denom = mod(2 * P.y, p);
      const denomInv = modPow(denom, p - 2, p); // Fermat's little theorem
      lambda = mod(num * denomInv, p);
    } else {
      // Point addition
      const num = mod(Q.y - P.y, p);
      const denom = mod(Q.x - P.x, p);
      const denomInv = modPow(denom, p - 2, p);
      lambda = mod(num * denomInv, p);
    }

    const x3 = mod(lambda * lambda - P.x - Q.x, p);
    const y3 = mod(lambda * (P.x - x3) - P.y, p);

    return { x: x3, y: y3 };
  };

  // If a point is selected, show P + P = 2P
  const doubledPoint = useMemo(() => {
    if (!selectedPoint) return null;
    return addPoints(selectedPoint, selectedPoint);
  }, [selectedPoint, p]);

  // Available prime values
  const primes = [7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Finite Field Grid</h3>
      <p className="text-dark-400 text-sm mb-4">
        See how y&sup2; = x&sup3; + 7 looks over &Zopf;<sub>p</sub>.
        The smooth curve becomes scattered points!
      </p>

      {/* Prime selector */}
      <div className="mb-4">
        <label className="block text-dark-300 text-sm mb-2">
          Field size p = <span className="text-amber-400 font-mono">{p}</span>
          <span className="text-dark-500 ml-2">({curvePoints.length} points on curve)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {primes.map((prime) => (
            <button
              key={prime}
              onClick={() => {
                setP(prime);
                setSelectedPoint(null);
              }}
              className={`px-3 py-1 rounded-lg text-sm font-mono transition-colors ${
                p === prime
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'bg-dark-700 text-dark-400 border border-dark-600 hover:bg-dark-600'
              }`}
            >
              {prime}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Grid */}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-dark-900/50 rounded-xl">
        {/* Grid lines */}
        {Array.from({ length: p }, (_, i) => (
          <g key={i}>
            <line
              x1={toSvgX(i)}
              y1={padding}
              x2={toSvgX(i)}
              y2={height - padding}
              stroke="#374151"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
            <line
              x1={padding}
              y1={toSvgY(i)}
              x2={width - padding}
              y2={toSvgY(i)}
              stroke="#374151"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
          </g>
        ))}

        {/* Axis labels */}
        <text x={width - padding + 10} y={toSvgY(0) + 4} fill="#9ca3af" fontSize="12">
          x
        </text>
        <text x={toSvgX(0) - 5} y={padding - 10} fill="#9ca3af" fontSize="12">
          y
        </text>

        {/* Grid background points (all possible coordinates) */}
        {Array.from({ length: p }, (_, x) =>
          Array.from({ length: p }, (_, y) => (
            <circle
              key={`bg-${x}-${y}`}
              cx={toSvgX(x)}
              cy={toSvgY(y)}
              r={2}
              fill="#374151"
              fillOpacity="0.3"
            />
          ))
        )}

        {/* Points on the curve */}
        {curvePoints.map((point, i) => {
          const isHovered = hoveredPoint?.x === point.x && hoveredPoint?.y === point.y;
          const isSelected = selectedPoint?.x === point.x && selectedPoint?.y === point.y;
          const isDoubled =
            doubledPoint && doubledPoint.x === point.x && doubledPoint.y === point.y;

          return (
            <motion.circle
              key={`${point.x}-${point.y}`}
              cx={toSvgX(point.x)}
              cy={toSvgY(point.y)}
              r={isHovered || isSelected ? 8 : isDoubled ? 7 : 5}
              fill={isDoubled ? '#8b5cf6' : isSelected ? '#10b981' : '#f59e0b'}
              stroke={isSelected || isDoubled ? '#fff' : 'none'}
              strokeWidth={2}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint(point)}
              onMouseLeave={() => setHoveredPoint(null)}
              onClick={() =>
                setSelectedPoint(
                  selectedPoint?.x === point.x && selectedPoint?.y === point.y ? null : point
                )
              }
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.01 }}
            />
          );
        })}

        {/* Legend */}
        <g transform="translate(15, 20)">
          <rect x="0" y="0" width="130" height="55" fill="#1f2937" rx="8" opacity="0.9" />
          <circle cx="15" cy="18" r="5" fill="#f59e0b" />
          <text x="28" y="22" fill="#d1d5db" fontSize="11">
            Points on curve
          </text>
          {selectedPoint && (
            <>
              <circle cx="15" cy="38" r="5" fill="#10b981" />
              <text x="28" y="42" fill="#d1d5db" fontSize="11">
                Selected: P
              </text>
            </>
          )}
        </g>
      </svg>

      {/* Point info */}
      {hoveredPoint && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20"
        >
          <p className="text-amber-400 text-sm">
            Point: ({hoveredPoint.x}, {hoveredPoint.y})
          </p>
          <p className="text-dark-400 text-xs mt-1">
            Verify: {hoveredPoint.y}&sup2; mod {p} = {mod(hoveredPoint.y * hoveredPoint.y, p)}
            {' = '}
            {hoveredPoint.x}&sup3; + 7 mod {p} ={' '}
            {mod(hoveredPoint.x * hoveredPoint.x * hoveredPoint.x + 7, p)}
          </p>
        </motion.div>
      )}

      {/* Selected point doubling */}
      {selectedPoint && (
        <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600/50">
          <p className="text-dark-300 text-sm mb-2">
            Selected Point P = ({selectedPoint.x}, {selectedPoint.y})
          </p>
          {doubledPoint ? (
            <p className="text-purple-400 text-sm">
              2P = ({doubledPoint.x}, {doubledPoint.y})
              <span className="text-dark-500 ml-2">(point doubling result)</span>
            </p>
          ) : (
            <p className="text-dark-500 text-sm">
              2P = &#119978; (point at infinity)
            </p>
          )}
        </div>
      )}

      {/* Comparison callout */}
      <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
        <p className="text-blue-400 text-sm">
          <strong>Key Insight:</strong> Over real numbers, the curve is smooth. Over &Zopf;<sub>p</sub>,
          we get discrete scattered points. The group operations work the same way, but there's
          no "geometry" to help visualize the discrete log problem!
        </p>
      </div>
    </div>
  );
}
