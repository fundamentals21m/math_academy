import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

interface Matrix2x2 {
  a: number;
  b: number;
  c: number;
  d: number;
}

const PRESETS: { name: string; matrix: Matrix2x2 }[] = [
  { name: 'Identity', matrix: { a: 1, b: 0, c: 0, d: 1 } },
  { name: 'Scale 2x', matrix: { a: 2, b: 0, c: 0, d: 2 } },
  { name: 'Rotate 90°', matrix: { a: 0, b: -1, c: 1, d: 0 } },
  { name: 'Rotate 45°', matrix: { a: 0.707, b: -0.707, c: 0.707, d: 0.707 } },
  { name: 'Reflect Y', matrix: { a: -1, b: 0, c: 0, d: 1 } },
  { name: 'Shear X', matrix: { a: 1, b: 1, c: 0, d: 1 } },
  { name: 'Squeeze', matrix: { a: 2, b: 0, c: 0, d: 0.5 } },
  { name: 'Projection', matrix: { a: 1, b: 0, c: 0, d: 0 } },
];

export function MatrixTransformation({ className = '' }: Props) {
  const [matrix, setMatrix] = useState<Matrix2x2>({ a: 1, b: 0, c: 0, d: 1 });
  const [showGrid, setShowGrid] = useState(true);
  const [showBasis, setShowBasis] = useState(true);
  const [animate, setAnimate] = useState(false);

  // Transform a point (memoized to satisfy React Compiler)
  const transform = useCallback((x: number, y: number) => ({
    x: matrix.a * x + matrix.b * y,
    y: matrix.c * x + matrix.d * y,
  }), [matrix.a, matrix.b, matrix.c, matrix.d]);

  // Calculate determinant
  const determinant = matrix.a * matrix.d - matrix.b * matrix.c;

  // Transformed basis vectors
  const e1 = transform(1, 0);
  const e2 = transform(0, 1);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 40;

  // Coordinate transformations
  const toSvg = (x: number, y: number) => ({
    x: origin.x + x * scale,
    y: origin.y - y * scale,
  });

  // Generate grid lines
  const gridLines = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number; isVertical: boolean }[] = [];

    for (let i = -4; i <= 4; i++) {
      // Vertical lines (constant x)
      const v1 = showGrid ? transform(i, -4) : { x: i, y: -4 };
      const v2 = showGrid ? transform(i, 4) : { x: i, y: 4 };
      lines.push({ x1: v1.x, y1: v1.y, x2: v2.x, y2: v2.y, isVertical: true });

      // Horizontal lines (constant y)
      const h1 = showGrid ? transform(-4, i) : { x: -4, y: i };
      const h2 = showGrid ? transform(4, i) : { x: 4, y: i };
      lines.push({ x1: h1.x, y1: h1.y, x2: h2.x, y2: h2.y, isVertical: false });
    }

    return lines;
  }, [transform, showGrid]);

  // Unit square vertices
  const unitSquare = useMemo(() => {
    const corners = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
    ];
    return corners.map(c => transform(c.x, c.y));
  }, [transform]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Matrix Transformation</h3>

      <p className="text-dark-300 mb-6">
        See how a 2×2 matrix transforms vectors and the entire plane.
        The columns of the matrix show where the basis vectors e₁ and e₂ land.
      </p>

      {/* Presets */}
      <div className="flex flex-wrap gap-2 mb-6">
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            onClick={() => {
              setAnimate(true);
              setTimeout(() => {
                setMatrix(preset.matrix);
                setAnimate(false);
              }, 50);
            }}
            className="px-3 py-1.5 rounded-lg text-sm font-medium bg-dark-700 text-dark-300 hover:bg-dark-600 transition-colors"
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Matrix input */}
      <div className="mb-6">
        <h4 className="text-dark-300 text-sm mb-3">Matrix A</h4>
        <div className="flex items-center gap-4">
          <div className="text-4xl text-dark-500">[</div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              step="0.1"
              value={matrix.a}
              onChange={(e) => setMatrix({ ...matrix, a: parseFloat(e.target.value) || 0 })}
              className="w-16 px-2 py-1 rounded bg-blue-500/20 border border-blue-500/50 text-blue-400 text-center font-mono"
            />
            <input
              type="number"
              step="0.1"
              value={matrix.b}
              onChange={(e) => setMatrix({ ...matrix, b: parseFloat(e.target.value) || 0 })}
              className="w-16 px-2 py-1 rounded bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-center font-mono"
            />
            <input
              type="number"
              step="0.1"
              value={matrix.c}
              onChange={(e) => setMatrix({ ...matrix, c: parseFloat(e.target.value) || 0 })}
              className="w-16 px-2 py-1 rounded bg-blue-500/20 border border-blue-500/50 text-blue-400 text-center font-mono"
            />
            <input
              type="number"
              step="0.1"
              value={matrix.d}
              onChange={(e) => setMatrix({ ...matrix, d: parseFloat(e.target.value) || 0 })}
              className="w-16 px-2 py-1 rounded bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-center font-mono"
            />
          </div>
          <div className="text-4xl text-dark-500">]</div>

          <div className="ml-4 text-dark-400 text-sm">
            <p>det(A) = <span className={`font-bold ${
              determinant > 0 ? 'text-emerald-400' :
              determinant < 0 ? 'text-red-400' : 'text-yellow-400'
            }`}>{determinant.toFixed(2)}</span></p>
            <p className="text-xs mt-1">
              {determinant > 0 ? 'Preserves orientation' :
               determinant < 0 ? 'Flips orientation' :
               'Collapses to line/point'}
            </p>
          </div>
        </div>
      </div>

      {/* Toggle buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowGrid(!showGrid)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showGrid ? 'bg-purple-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Transform Grid
        </button>
        <button
          onClick={() => setShowBasis(!showBasis)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showBasis ? 'bg-orange-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Show Basis
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Static grid (before transformation) */}
          {!showGrid && [-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
            <g key={`static-${i}`} opacity={0.3}>
              <line
                x1={toSvg(i, -4).x} y1={toSvg(i, -4).y}
                x2={toSvg(i, 4).x} y2={toSvg(i, 4).y}
                stroke="#374151"
              />
              <line
                x1={toSvg(-4, i).x} y1={toSvg(-4, i).y}
                x2={toSvg(4, i).x} y2={toSvg(4, i).y}
                stroke="#374151"
              />
            </g>
          ))}

          {/* Transformed grid */}
          {gridLines.map((line, i) => (
            <motion.line
              key={i}
              x1={toSvg(line.x1, line.y1).x}
              y1={toSvg(line.x1, line.y1).y}
              x2={toSvg(line.x2, line.y2).x}
              y2={toSvg(line.x2, line.y2).y}
              stroke={line.isVertical ? '#3b82f6' : '#10b981'}
              strokeWidth={line.x1 === 0 || line.y1 === 0 ? 2 : 1}
              opacity={showGrid ? 0.4 : 0.2}
              animate={!animate}
              transition={{ duration: 0.5 }}
            />
          ))}

          {/* Unit square */}
          <motion.polygon
            points={unitSquare.map(p => `${toSvg(p.x, p.y).x},${toSvg(p.x, p.y).y}`).join(' ')}
            fill={determinant >= 0 ? '#f9731620' : '#ef444420'}
            stroke={determinant >= 0 ? '#f97316' : '#ef4444'}
            strokeWidth={2}
            animate={!animate}
            transition={{ duration: 0.5 }}
          />

          {/* Basis vectors */}
          {showBasis && (
            <>
              {/* e1 (blue) - first column */}
              <motion.g animate={!animate} transition={{ duration: 0.5 }}>
                <line
                  x1={toSvg(0, 0).x}
                  y1={toSvg(0, 0).y}
                  x2={toSvg(e1.x, e1.y).x}
                  y2={toSvg(e1.x, e1.y).y}
                  stroke="#3b82f6"
                  strokeWidth={3}
                />
                <circle
                  cx={toSvg(e1.x, e1.y).x}
                  cy={toSvg(e1.x, e1.y).y}
                  r={6}
                  fill="#3b82f6"
                />
                <text
                  x={toSvg(e1.x, e1.y).x + 10}
                  y={toSvg(e1.x, e1.y).y}
                  fill="#3b82f6"
                  fontSize="14"
                  fontWeight="bold"
                >
                  Ae₁
                </text>
              </motion.g>

              {/* e2 (green) - second column */}
              <motion.g animate={!animate} transition={{ duration: 0.5 }}>
                <line
                  x1={toSvg(0, 0).x}
                  y1={toSvg(0, 0).y}
                  x2={toSvg(e2.x, e2.y).x}
                  y2={toSvg(e2.x, e2.y).y}
                  stroke="#10b981"
                  strokeWidth={3}
                />
                <circle
                  cx={toSvg(e2.x, e2.y).x}
                  cy={toSvg(e2.x, e2.y).y}
                  r={6}
                  fill="#10b981"
                />
                <text
                  x={toSvg(e2.x, e2.y).x + 10}
                  y={toSvg(e2.x, e2.y).y}
                  fill="#10b981"
                  fontSize="14"
                  fontWeight="bold"
                >
                  Ae₂
                </text>
              </motion.g>
            </>
          )}

          {/* Origin */}
          <circle cx={origin.x} cy={origin.y} r={4} fill="#ffffff" />
        </svg>
      </div>

      {/* Column interpretation */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-400 text-sm">Column 1 (where e₁ goes)</p>
          <p className="text-blue-300 font-mono">({matrix.a}, {matrix.c})</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-emerald-400 text-sm">Column 2 (where e₂ goes)</p>
          <p className="text-emerald-300 font-mono">({matrix.b}, {matrix.d})</p>
        </div>
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600"
      >
        <p className="text-dark-300 text-sm">
          The <strong className="text-blue-400">columns</strong> of a matrix tell you where the
          basis vectors land. The <strong className="text-orange-400">determinant</strong> gives
          the factor by which areas scale (negative means orientation flips). A zero determinant
          means the transformation squishes space to a lower dimension.
        </p>
      </motion.div>
    </div>
  );
}
