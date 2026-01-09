import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

interface Vector {
  x: number;
  y: number;
}

export function VectorOperations({ className = '' }: Props) {
  const [vectorA, setVectorA] = useState<Vector>({ x: 3, y: 2 });
  const [vectorB, setVectorB] = useState<Vector>({ x: 1, y: 3 });
  const [scalarA, setScalarA] = useState(1);
  const [scalarB, setScalarB] = useState(1);
  const [showComponents, setShowComponents] = useState(true);
  const [showSum, setShowSum] = useState(true);

  // Linear combination c₁v₁ + c₂v₂
  const result = useMemo(() => ({
    x: scalarA * vectorA.x + scalarB * vectorB.x,
    y: scalarA * vectorA.y + scalarB * vectorB.y,
  }), [vectorA, vectorB, scalarA, scalarB]);

  // Scaled vectors
  const scaledA = useMemo(() => ({
    x: scalarA * vectorA.x,
    y: scalarA * vectorA.y,
  }), [vectorA, scalarA]);

  const scaledB = useMemo(() => ({
    x: scalarB * vectorB.x,
    y: scalarB * vectorB.y,
  }), [vectorB, scalarB]);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 30; // pixels per unit

  // Coordinate transformations
  const toSvg = (v: Vector) => ({
    x: origin.x + v.x * scale,
    y: origin.y - v.y * scale, // Y is inverted in SVG
  });

  // Draw arrow
  const Arrow = ({ from, to, color, strokeWidth = 2 }: {
    from: Vector;
    to: Vector;
    color: string;
    strokeWidth?: number;
  }) => {
    const svgFrom = toSvg(from);
    const svgTo = toSvg(to);
    const dx = svgTo.x - svgFrom.x;
    const dy = svgTo.y - svgFrom.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1) return null;

    const angle = Math.atan2(dy, dx);
    const arrowLen = 10;
    const arrowAngle = 0.4;

    return (
      <g>
        <line
          x1={svgFrom.x}
          y1={svgFrom.y}
          x2={svgTo.x}
          y2={svgTo.y}
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <polygon
          points={`
            ${svgTo.x},${svgTo.y}
            ${svgTo.x - arrowLen * Math.cos(angle - arrowAngle)},${svgTo.y - arrowLen * Math.sin(angle - arrowAngle)}
            ${svgTo.x - arrowLen * Math.cos(angle + arrowAngle)},${svgTo.y - arrowLen * Math.sin(angle + arrowAngle)}
          `}
          fill={color}
        />
      </g>
    );
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Vector Operations & Linear Combinations</h3>

      <p className="text-dark-300 mb-6">
        Explore vector addition, scalar multiplication, and linear combinations.
        Drag the sliders to see how <span className="text-blue-400">c₁v</span> +{' '}
        <span className="text-emerald-400">c₂w</span> creates any vector in the plane.
      </p>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Vector A */}
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <h4 className="text-blue-400 font-medium mb-3">Vector v = ({vectorA.x}, {vectorA.y})</h4>
          <div className="space-y-3">
            <div>
              <label className="text-dark-400 text-sm">x component</label>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={vectorA.x}
                onChange={(e) => setVectorA({ ...vectorA, x: parseFloat(e.target.value) })}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-sm">y component</label>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={vectorA.y}
                onChange={(e) => setVectorA({ ...vectorA, y: parseFloat(e.target.value) })}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-sm">Scalar c₁ = {scalarA}</label>
              <input
                type="range"
                min="-2"
                max="2"
                step="0.25"
                value={scalarA}
                onChange={(e) => setScalarA(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Vector B */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="text-emerald-400 font-medium mb-3">Vector w = ({vectorB.x}, {vectorB.y})</h4>
          <div className="space-y-3">
            <div>
              <label className="text-dark-400 text-sm">x component</label>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={vectorB.x}
                onChange={(e) => setVectorB({ ...vectorB, x: parseFloat(e.target.value) })}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-sm">y component</label>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={vectorB.y}
                onChange={(e) => setVectorB({ ...vectorB, y: parseFloat(e.target.value) })}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-sm">Scalar c₂ = {scalarB}</label>
              <input
                type="range"
                min="-2"
                max="2"
                step="0.25"
                value={scalarB}
                onChange={(e) => setScalarB(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Toggle buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowComponents(!showComponents)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showComponents ? 'bg-purple-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Show Components
        </button>
        <button
          onClick={() => setShowSum(!showSum)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showSum ? 'bg-orange-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Show Sum
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              <line
                x1={toSvg({ x: i, y: -6 }).x}
                y1={toSvg({ x: i, y: -6 }).y}
                x2={toSvg({ x: i, y: 6 }).x}
                y2={toSvg({ x: i, y: 6 }).y}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={toSvg({ x: -6, y: i }).x}
                y1={toSvg({ x: -6, y: i }).y}
                x2={toSvg({ x: 6, y: i }).x}
                y2={toSvg({ x: 6, y: i }).y}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Components (scaled vectors from origin) */}
          {showComponents && (
            <>
              {/* Scaled vector A */}
              <motion.g
                animate={{
                  opacity: 1,
                }}
              >
                <Arrow
                  from={{ x: 0, y: 0 }}
                  to={scaledA}
                  color="#3b82f6"
                  strokeWidth={3}
                />
              </motion.g>

              {/* Scaled vector B (from tip of scaled A) */}
              <motion.g
                animate={{
                  opacity: 1,
                }}
              >
                <Arrow
                  from={scaledA}
                  to={result}
                  color="#10b981"
                  strokeWidth={3}
                />
              </motion.g>
            </>
          )}

          {/* Original vectors (lighter) */}
          <g opacity={0.4}>
            <Arrow from={{ x: 0, y: 0 }} to={vectorA} color="#3b82f6" strokeWidth={2} />
            <Arrow from={{ x: 0, y: 0 }} to={vectorB} color="#10b981" strokeWidth={2} />
          </g>

          {/* Result vector */}
          {showSum && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Arrow
                from={{ x: 0, y: 0 }}
                to={result}
                color="#f97316"
                strokeWidth={3}
              />
            </motion.g>
          )}

          {/* Labels */}
          <text
            x={toSvg(vectorA).x + 10}
            y={toSvg(vectorA).y}
            fill="#3b82f6"
            fontSize="12"
            opacity={0.6}
          >
            v
          </text>
          <text
            x={toSvg(vectorB).x + 10}
            y={toSvg(vectorB).y}
            fill="#10b981"
            fontSize="12"
            opacity={0.6}
          >
            w
          </text>
          {showSum && (
            <text
              x={toSvg(result).x + 10}
              y={toSvg(result).y}
              fill="#f97316"
              fontSize="14"
              fontWeight="bold"
            >
              c₁v + c₂w
            </text>
          )}

          {/* Origin label */}
          <text x={origin.x - 15} y={origin.y + 15} fill="#6b7280" fontSize="10">O</text>
        </svg>
      </div>

      {/* Result */}
      <div className="mt-4 p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 text-center">
        <p className="text-dark-300 text-sm mb-2">Linear Combination</p>
        <p className="text-lg font-mono text-orange-400">
          {scalarA}({vectorA.x}, {vectorA.y}) + {scalarB}({vectorB.x}, {vectorB.y}) = ({result.x.toFixed(1)}, {result.y.toFixed(1)})
        </p>
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600"
      >
        <p className="text-dark-300 text-sm">
          A <strong className="text-orange-400">linear combination</strong> c₁v + c₂w can reach
          any point in the plane if v and w are <strong className="text-purple-400">linearly independent</strong>
          {' '}(not parallel). This is the foundation of linear algebra: vectors and their combinations
          span entire spaces.
        </p>
      </motion.div>
    </div>
  );
}
