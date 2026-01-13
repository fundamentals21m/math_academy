import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
}

interface Props {
  className?: string;
}

/**
 * Interactive visualization showing geometric point addition on an elliptic curve.
 * Users can drag points P and Q to see how the line through them intersects the curve,
 * and how reflecting R' gives R = P + Q.
 */
export function PointAdditionVisualizer({ className = '' }: Props) {
  // Fixed curve: y² = x³ + 7 (secp256k1)
  const a = 0;
  const b = 7;

  // Initial points on the curve
  const [pX, setPX] = useState(2);
  const [qX, setQX] = useState(-1);
  const [showConstruction, setShowConstruction] = useState(true);
  const [animationStep, setAnimationStep] = useState(3); // 0=none, 1=line, 2=R', 3=R

  // SVG dimensions
  const width = 550;
  const height = 450;
  const padding = 50;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;

  // Coordinate range
  const xRange = { min: -3, max: 4 };
  const yRange = { min: -8, max: 8 };

  // Coordinate transformations
  const toSvgX = useCallback(
    (x: number) => padding + ((x - xRange.min) / (xRange.max - xRange.min)) * graphWidth,
    []
  );
  const toSvgY = useCallback(
    (y: number) =>
      height - padding - ((y - yRange.min) / (yRange.max - yRange.min)) * graphHeight,
    []
  );

  // Compute y from x on the curve (positive branch)
  const getY = useCallback(
    (x: number): number => {
      const rhs = Math.pow(x, 3) + a * x + b;
      return rhs >= 0 ? Math.sqrt(rhs) : 0;
    },
    [a, b]
  );

  // Points P and Q
  const P: Point = useMemo(() => ({ x: pX, y: getY(pX) }), [pX, getY]);
  const Q: Point = useMemo(() => ({ x: qX, y: getY(qX) }), [qX, getY]);

  // Compute point addition P + Q
  const { lambda, R, RPrime } = useMemo(() => {
    if (P.x === Q.x) {
      // Point doubling case
      if (P.y === 0) {
        return { lambda: Infinity, R: null, RPrime: null };
      }
      const lam = (3 * P.x * P.x + a) / (2 * P.y);
      const x3 = lam * lam - P.x - Q.x;
      const y3 = lam * (P.x - x3) - P.y;
      return {
        lambda: lam,
        RPrime: { x: x3, y: -y3 },
        R: { x: x3, y: y3 },
      };
    }

    const lam = (Q.y - P.y) / (Q.x - P.x);
    const x3 = lam * lam - P.x - Q.x;
    const y3 = lam * (P.x - x3) - P.y;

    return {
      lambda: lam,
      RPrime: { x: x3, y: -y3 }, // Third intersection (before reflection)
      R: { x: x3, y: y3 }, // Final result (after reflection)
    };
  }, [P, Q, a]);

  // Generate curve path
  const curvePaths = useMemo(() => {
    const upperPoints: string[] = [];
    const lowerPoints: string[] = [];
    const step = 0.05;

    for (let x = xRange.min; x <= xRange.max; x += step) {
      const rhs = Math.pow(x, 3) + a * x + b;
      if (rhs >= 0) {
        const y = Math.sqrt(rhs);
        if (y <= yRange.max && y >= yRange.min) {
          upperPoints.push(
            `${upperPoints.length === 0 ? 'M' : 'L'} ${toSvgX(x)} ${toSvgY(y)}`
          );
        }
        if (-y <= yRange.max && -y >= yRange.min) {
          lowerPoints.push(
            `${lowerPoints.length === 0 ? 'M' : 'L'} ${toSvgX(x)} ${toSvgY(-y)}`
          );
        }
      }
    }
    return { upper: upperPoints.join(' '), lower: lowerPoints.join(' ') };
  }, [a, b, toSvgX, toSvgY]);

  // Line through P and Q (extended)
  const linePath = useMemo(() => {
    if (!isFinite(lambda)) return '';

    const lineY = (x: number) => P.y + lambda * (x - P.x);
    const x1 = xRange.min;
    const x2 = xRange.max;

    return `M ${toSvgX(x1)} ${toSvgY(lineY(x1))} L ${toSvgX(x2)} ${toSvgY(lineY(x2))}`;
  }, [P, lambda, toSvgX, toSvgY]);

  // Vertical reflection line
  const reflectionPath = useMemo(() => {
    if (!RPrime || !R) return '';
    return `M ${toSvgX(RPrime.x)} ${toSvgY(RPrime.y)} L ${toSvgX(R.x)} ${toSvgY(R.y)}`;
  }, [RPrime, R, toSvgX, toSvgY]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Point Addition Visualizer</h3>
      <p className="text-dark-400 text-sm mb-4">
        Drag the sliders to move points P and Q. Watch how the geometric construction
        finds R = P + Q.
      </p>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-dark-300 text-sm mb-2">
            P.x: <span className="text-primary-400 font-mono">{pX.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="-2"
            max="3"
            step="0.1"
            value={pX}
            onChange={(e) => setPX(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
          />
        </div>
        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Q.x: <span className="text-emerald-400 font-mono">{qX.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="-2"
            max="3"
            step="0.1"
            value={qX}
            onChange={(e) => setQX(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Animation controls */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setShowConstruction(!showConstruction)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            showConstruction
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              : 'bg-dark-700 text-dark-400 border border-dark-600'
          }`}
        >
          {showConstruction ? 'Hide' : 'Show'} Construction
        </button>
        {showConstruction && (
          <div className="flex gap-1">
            {[1, 2, 3].map((step) => (
              <button
                key={step}
                onClick={() => setAnimationStep(step)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                  animationStep >= step
                    ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    : 'bg-dark-700 text-dark-400 border border-dark-600'
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* SVG Chart */}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-dark-900/50 rounded-xl">
        {/* Grid */}
        {[-2, -1, 0, 1, 2, 3].map((x) => (
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
        {[-6, -4, -2, 0, 2, 4, 6].map((y) => (
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

        {/* The curve */}
        <path d={curvePaths.upper} fill="none" stroke="#f59e0b" strokeWidth="3" />
        <path d={curvePaths.lower} fill="none" stroke="#f59e0b" strokeWidth="3" />

        {/* Construction elements */}
        {showConstruction && animationStep >= 1 && (
          <motion.path
            d={linePath}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="6,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {showConstruction && animationStep >= 2 && RPrime && (
          <>
            <motion.path
              d={reflectionPath}
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.circle
              cx={toSvgX(RPrime.x)}
              cy={toSvgY(RPrime.y)}
              r={6}
              fill="#ef4444"
              stroke="#fff"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            />
            <text
              x={toSvgX(RPrime.x) + 12}
              y={toSvgY(RPrime.y) + 5}
              fill="#ef4444"
              fontSize="14"
              fontWeight="bold"
            >
              R'
            </text>
          </>
        )}

        {/* Result point R */}
        {showConstruction && animationStep >= 3 && R && (
          <>
            <motion.circle
              cx={toSvgX(R.x)}
              cy={toSvgY(R.y)}
              r={8}
              fill="#8b5cf6"
              stroke="#fff"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring' }}
            />
            <text
              x={toSvgX(R.x) + 12}
              y={toSvgY(R.y) + 5}
              fill="#8b5cf6"
              fontSize="14"
              fontWeight="bold"
            >
              R = P + Q
            </text>
          </>
        )}

        {/* Point P */}
        <circle cx={toSvgX(P.x)} cy={toSvgY(P.y)} r={8} fill="#3b82f6" stroke="#fff" strokeWidth="2" />
        <text x={toSvgX(P.x) - 20} y={toSvgY(P.y) - 12} fill="#3b82f6" fontSize="14" fontWeight="bold">
          P
        </text>

        {/* Point Q */}
        <circle cx={toSvgX(Q.x)} cy={toSvgY(Q.y)} r={8} fill="#10b981" stroke="#fff" strokeWidth="2" />
        <text x={toSvgX(Q.x) + 12} y={toSvgY(Q.y) - 8} fill="#10b981" fontSize="14" fontWeight="bold">
          Q
        </text>

        {/* Legend */}
        <g transform="translate(15, 20)">
          <rect x="0" y="0" width="120" height="75" fill="#1f2937" rx="8" opacity="0.9" />
          <circle cx="15" cy="18" r="5" fill="#3b82f6" />
          <text x="28" y="22" fill="#d1d5db" fontSize="11">
            P = ({P.x.toFixed(1)}, {P.y.toFixed(2)})
          </text>
          <circle cx="15" cy="38" r="5" fill="#10b981" />
          <text x="28" y="42" fill="#d1d5db" fontSize="11">
            Q = ({Q.x.toFixed(1)}, {Q.y.toFixed(2)})
          </text>
          {R && (
            <>
              <circle cx="15" cy="58" r="5" fill="#8b5cf6" />
              <text x="28" y="62" fill="#d1d5db" fontSize="11">
                R = ({R.x.toFixed(1)}, {R.y.toFixed(2)})
              </text>
            </>
          )}
        </g>
      </svg>

      {/* Step explanation */}
      {showConstruction && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div
            className={`p-3 rounded-lg ${
              animationStep >= 1 ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-dark-700/50'
            }`}
          >
            <p className="text-sm font-medium text-blue-400">Step 1</p>
            <p className="text-xs text-dark-400">Draw line through P and Q</p>
          </div>
          <div
            className={`p-3 rounded-lg ${
              animationStep >= 2 ? 'bg-red-500/10 border border-red-500/30' : 'bg-dark-700/50'
            }`}
          >
            <p className="text-sm font-medium text-red-400">Step 2</p>
            <p className="text-xs text-dark-400">Find third intersection R'</p>
          </div>
          <div
            className={`p-3 rounded-lg ${
              animationStep >= 3 ? 'bg-purple-500/10 border border-purple-500/30' : 'bg-dark-700/50'
            }`}
          >
            <p className="text-sm font-medium text-purple-400">Step 3</p>
            <p className="text-xs text-dark-400">Reflect R' to get R = P + Q</p>
          </div>
        </div>
      )}

      {/* Calculation display */}
      {R && (
        <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600/50">
          <p className="text-dark-300 text-sm mb-2">Calculation:</p>
          <div className="space-y-1 font-mono text-xs">
            <p>
              <span className="text-dark-400">&lambda; = (y&#8322; - y&#8321;) / (x&#8322; - x&#8321;) = </span>
              <span className="text-amber-400">{lambda.toFixed(4)}</span>
            </p>
            <p>
              <span className="text-dark-400">x&#8323; = &lambda;&sup2; - x&#8321; - x&#8322; = </span>
              <span className="text-amber-400">{R.x.toFixed(4)}</span>
            </p>
            <p>
              <span className="text-dark-400">y&#8323; = &lambda;(x&#8321; - x&#8323;) - y&#8321; = </span>
              <span className="text-amber-400">{R.y.toFixed(4)}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
