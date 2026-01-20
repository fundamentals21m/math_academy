import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

interface Vector {
  x: number;
  y: number;
}

function Arrow({ from, to, color, strokeWidth = 2, toSvg }: {
  from: Vector;
  to: Vector;
  color: string;
  strokeWidth?: number;
  toSvg: (v: Vector) => { x: number; y: number };
}) {
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
          ${svgTo.x - arrowLen * Math.cos(angle + arrowAngle)},${svgTo.y + arrowLen * Math.sin(angle + arrowAngle)}
        `}
        fill={color}
      />
    </g>
  );
}

export function DotProductVisualizer({ className = '' }: Props) {
  const [vectorA, setVectorA] = useState<Vector>({ x: 3, y: 2 });
  const [vectorB, setVectorB] = useState<Vector>({ x: 2, y: -1 });
  const [showProjection, setShowProjection] = useState(true);

  // Compute dot product
  const dotProduct = useMemo(() =>
    vectorA.x * vectorB.x + vectorA.y * vectorB.y
  , [vectorA, vectorB]);

  // Compute magnitudes
  const magA = useMemo(() => Math.sqrt(vectorA.x ** 2 + vectorA.y ** 2), [vectorA]);
  const magB = useMemo(() => Math.sqrt(vectorB.x ** 2 + vectorB.y ** 2), [vectorB]);

  // Compute angle
  const angle = useMemo(() => {
    if (magA === 0 || magB === 0) return 0;
    const cosTheta = dotProduct / (magA * magB);
    return Math.acos(Math.max(-1, Math.min(1, cosTheta))) * (180 / Math.PI);
  }, [dotProduct, magA, magB]);

  // Compute projection of A onto B
  const projection = useMemo(() => {
    if (magB === 0) return { x: 0, y: 0 };
    const scale = dotProduct / (magB * magB);
    return { x: scale * vectorB.x, y: scale * vectorB.y };
  }, [dotProduct, vectorB, magB]);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 35;

  const toSvg = (v: Vector) => ({
    x: origin.x + v.x * scale,
    y: origin.y - v.y * scale,
  });

  // Determine angle relationship
  const angleType = angle < 90 ? 'acute' : angle > 90 ? 'obtuse' : 'perpendicular';
  const angleColor = angleType === 'acute' ? '#10b981' : angleType === 'obtuse' ? '#ef4444' : '#f59e0b';

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Dot Product & Angles</h3>

      <p className="text-dark-300 mb-6">
        The dot product reveals the angle between vectors: <span className="text-blue-400">v · w</span> = |v||w|cos(θ).
        When θ = 90°, the vectors are <span className="text-yellow-400">perpendicular</span> and v · w = 0.
      </p>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <h4 className="text-blue-400 font-medium mb-2">Vector v = ({vectorA.x}, {vectorA.y})</h4>
          <div className="space-y-2">
            <div>
              <label className="text-dark-400 text-xs">x</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={vectorA.x}
                onChange={(e) => setVectorA({ ...vectorA, x: parseFloat(e.target.value) })}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-xs">y</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={vectorA.y}
                onChange={(e) => setVectorA({ ...vectorA, y: parseFloat(e.target.value) })}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="text-emerald-400 font-medium mb-2">Vector w = ({vectorB.x}, {vectorB.y})</h4>
          <div className="space-y-2">
            <div>
              <label className="text-dark-400 text-xs">x</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={vectorB.x}
                onChange={(e) => setVectorB({ ...vectorB, x: parseFloat(e.target.value) })}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-xs">y</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={vectorB.y}
                onChange={(e) => setVectorB({ ...vectorB, y: parseFloat(e.target.value) })}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowProjection(!showProjection)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showProjection ? 'bg-purple-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Show Projection
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <line
                x1={toSvg({ x: i, y: -5 }).x}
                y1={toSvg({ x: i, y: -5 }).y}
                x2={toSvg({ x: i, y: 5 }).x}
                y2={toSvg({ x: i, y: 5 }).y}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={toSvg({ x: -5, y: i }).x}
                y1={toSvg({ x: -5, y: i }).y}
                x2={toSvg({ x: 5, y: i }).x}
                y2={toSvg({ x: 5, y: i }).y}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Projection line (from A to projection point) */}
          {showProjection && magB > 0 && (
            <>
              <line
                x1={toSvg(vectorA).x}
                y1={toSvg(vectorA).y}
                x2={toSvg(projection).x}
                y2={toSvg(projection).y}
                stroke="#a855f7"
                strokeWidth={2}
                strokeDasharray="4"
              />
              <circle
                cx={toSvg(projection).x}
                cy={toSvg(projection).y}
                r={5}
                fill="#a855f7"
              />
              <Arrow
                from={{ x: 0, y: 0 }}
                to={projection}
                color="#a855f7"
                strokeWidth={3}
                toSvg={toSvg}
              />
            </>
          )}

          {/* Angle arc */}
          {magA > 0 && magB > 0 && (
            <path
              d={(() => {
                const arcRadius = 25;
                const angleA = Math.atan2(vectorA.y, vectorA.x);
                const angleB = Math.atan2(vectorB.y, vectorB.x);
                const startAngle = Math.min(angleA, angleB);
                const endAngle = Math.max(angleA, angleB);
                const sweep = endAngle - startAngle > Math.PI ? 0 : 1;

                const startX = origin.x + arcRadius * Math.cos(-angleA);
                const startY = origin.y + arcRadius * Math.sin(-angleA);
                const endX = origin.x + arcRadius * Math.cos(-angleB);
                const endY = origin.y + arcRadius * Math.sin(-angleB);

                return `M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 0 ${sweep} ${endX} ${endY}`;
              })()}
              fill="none"
              stroke={angleColor}
              strokeWidth={2}
            />
          )}

          {/* Vectors */}
          <Arrow from={{ x: 0, y: 0 }} to={vectorA} color="#3b82f6" strokeWidth={3} toSvg={toSvg} />
          <Arrow from={{ x: 0, y: 0 }} to={vectorB} color="#10b981" strokeWidth={3} toSvg={toSvg} />

          {/* Labels */}
          <text x={toSvg(vectorA).x + 10} y={toSvg(vectorA).y - 5} fill="#3b82f6" fontSize="14" fontWeight="bold">v</text>
          <text x={toSvg(vectorB).x + 10} y={toSvg(vectorB).y - 5} fill="#10b981" fontSize="14" fontWeight="bold">w</text>
          {showProjection && magB > 0 && (
            <text x={toSvg(projection).x + 10} y={toSvg(projection).y + 15} fill="#a855f7" fontSize="12">proj</text>
          )}
        </svg>
      </div>

      {/* Results */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3 rounded-xl bg-dark-700/50 border border-dark-600 text-center">
          <p className="text-dark-400 text-xs mb-1">Dot Product</p>
          <p className="text-xl font-mono text-white">v · w = {dotProduct.toFixed(2)}</p>
        </div>
        <motion.div
          className="p-3 rounded-xl text-center"
          style={{ backgroundColor: `${angleColor}20`, borderColor: `${angleColor}50` }}
          animate={{ borderColor: angleColor }}
        >
          <p className="text-dark-400 text-xs mb-1">Angle</p>
          <p className="text-xl font-mono" style={{ color: angleColor }}>θ = {angle.toFixed(1)}°</p>
          <p className="text-xs capitalize" style={{ color: angleColor }}>{angleType}</p>
        </motion.div>
        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
          <p className="text-dark-400 text-xs mb-1">Projection Length</p>
          <p className="text-xl font-mono text-purple-400">
            {magB > 0 ? (dotProduct / magB).toFixed(2) : 0}
          </p>
        </div>
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600"
      >
        <p className="text-dark-300 text-sm">
          <strong style={{ color: angleColor }}>{angleType === 'acute' ? 'Acute angle' : angleType === 'obtuse' ? 'Obtuse angle' : 'Right angle'}</strong>:
          {angleType === 'acute' && ' The dot product is positive when vectors point in similar directions.'}
          {angleType === 'obtuse' && ' The dot product is negative when vectors point in opposite directions.'}
          {angleType === 'perpendicular' && ' The dot product is zero when vectors are perpendicular (orthogonal).'}
        </p>
      </motion.div>
    </div>
  );
}
