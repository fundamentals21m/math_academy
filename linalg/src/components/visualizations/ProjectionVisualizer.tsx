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

export function ProjectionVisualizer({ className = '' }: Props) {
  const [vectorB, setVectorB] = useState<Vector>({ x: 2, y: 3 });
  const [lineAngle, setLineAngle] = useState(30); // degrees
  const [showError, setShowError] = useState(true);

  // Line direction vector
  const lineDir = useMemo(() => ({
    x: Math.cos(lineAngle * Math.PI / 180),
    y: Math.sin(lineAngle * Math.PI / 180),
  }), [lineAngle]);

  // Projection of b onto line
  const projection = useMemo(() => {
    const dot = vectorB.x * lineDir.x + vectorB.y * lineDir.y;
    return { x: dot * lineDir.x, y: dot * lineDir.y };
  }, [vectorB, lineDir]);

  // Error vector e = b - p
  const error = useMemo(() => ({
    x: vectorB.x - projection.x,
    y: vectorB.y - projection.y,
  }), [vectorB, projection]);

  // Magnitudes
  const magB = Math.sqrt(vectorB.x ** 2 + vectorB.y ** 2);
  const magP = Math.sqrt(projection.x ** 2 + projection.y ** 2);
  const magE = Math.sqrt(error.x ** 2 + error.y ** 2);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 40;

  const toSvg = (v: Vector) => ({
    x: origin.x + v.x * scale,
    y: origin.y - v.y * scale,
  });

  // Extended line for visualization
  const lineExtent = 5;
  const lineStart = { x: -lineExtent * lineDir.x, y: -lineExtent * lineDir.y };
  const lineEnd = { x: lineExtent * lineDir.x, y: lineExtent * lineDir.y };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Projections</h3>

      <p className="text-dark-300 mb-6">
        The projection <span className="text-purple-400">p</span> of vector{' '}
        <span className="text-blue-400">b</span> onto a line minimizes the{' '}
        <span className="text-red-400">error e = b - p</span>. The error is always perpendicular
        to the line.
      </p>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <h4 className="text-blue-400 font-medium mb-2">Vector b = ({vectorB.x.toFixed(1)}, {vectorB.y.toFixed(1)})</h4>
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
                value={vectorB.y}
                onChange={(e) => setVectorB({ ...vectorB, y: parseFloat(e.target.value) })}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="text-emerald-400 font-medium mb-2">Line angle: {lineAngle}°</h4>
          <input
            type="range"
            min="0"
            max="180"
            step="5"
            value={lineAngle}
            onChange={(e) => setLineAngle(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <p className="text-dark-400 text-xs mt-2">
            Direction: ({lineDir.x.toFixed(2)}, {lineDir.y.toFixed(2)})
          </p>
        </div>
      </div>

      {/* Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowError(!showError)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showError ? 'bg-red-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Show Error Vector
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

          {/* Line (subspace) */}
          <line
            x1={toSvg(lineStart).x}
            y1={toSvg(lineStart).y}
            x2={toSvg(lineEnd).x}
            y2={toSvg(lineEnd).y}
            stroke="#10b981"
            strokeWidth={2}
          />

          {/* Right angle marker */}
          {magE > 0.1 && (
            <g>
              {(() => {
                const markerSize = 8;
                const px = toSvg(projection).x;
                const py = toSvg(projection).y;
                // Perpendicular directions
                const perpX = -lineDir.y;
                const perpY = lineDir.x;
                return (
                  <path
                    d={`
                      M ${px + markerSize * lineDir.x} ${py - markerSize * lineDir.y}
                      L ${px + markerSize * lineDir.x + markerSize * perpX} ${py - markerSize * lineDir.y - markerSize * perpY}
                      L ${px + markerSize * perpX} ${py - markerSize * perpY}
                    `}
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth={1}
                  />
                );
              })()}
            </g>
          )}

          {/* Error vector */}
          {showError && magE > 0.1 && (
            <>
              <line
                x1={toSvg(projection).x}
                y1={toSvg(projection).y}
                x2={toSvg(vectorB).x}
                y2={toSvg(vectorB).y}
                stroke="#ef4444"
                strokeWidth={2}
                strokeDasharray="4"
              />
              <Arrow
                from={projection}
                to={vectorB}
                color="#ef4444"
                strokeWidth={2}
                toSvg={toSvg}
              />
            </>
          )}

          {/* Vector b */}
          <Arrow from={{ x: 0, y: 0 }} to={vectorB} color="#3b82f6" strokeWidth={3} toSvg={toSvg} />

          {/* Projection p */}
          <Arrow from={{ x: 0, y: 0 }} to={projection} color="#a855f7" strokeWidth={3} toSvg={toSvg} />

          {/* Projection point */}
          <circle cx={toSvg(projection).x} cy={toSvg(projection).y} r={5} fill="#a855f7" />

          {/* Labels */}
          <text x={toSvg(vectorB).x + 10} y={toSvg(vectorB).y - 5} fill="#3b82f6" fontSize="14" fontWeight="bold">b</text>
          <text x={toSvg(projection).x + 10} y={toSvg(projection).y + 15} fill="#a855f7" fontSize="14" fontWeight="bold">p</text>
          {showError && magE > 0.5 && (
            <text
              x={(toSvg(projection).x + toSvg(vectorB).x) / 2 + 10}
              y={(toSvg(projection).y + toSvg(vectorB).y) / 2}
              fill="#ef4444"
              fontSize="12"
            >
              e
            </text>
          )}
        </svg>
      </div>

      {/* Results */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center">
          <p className="text-dark-400 text-xs mb-1">|b|</p>
          <p className="text-lg font-mono text-blue-400">{magB.toFixed(2)}</p>
        </div>
        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
          <p className="text-dark-400 text-xs mb-1">|p|</p>
          <p className="text-lg font-mono text-purple-400">{magP.toFixed(2)}</p>
        </div>
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
          <p className="text-dark-400 text-xs mb-1">|e|</p>
          <p className="text-lg font-mono text-red-400">{magE.toFixed(2)}</p>
        </div>
      </div>

      {/* Formula */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600 text-center">
        <p className="text-dark-300 font-mono text-sm">
          p = <span className="text-yellow-400">(aᵀb / aᵀa)</span> · a
          = ({(projection.x).toFixed(2)}, {(projection.y).toFixed(2)})
        </p>
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600"
      >
        <p className="text-dark-300 text-sm">
          <strong className="text-purple-400">Projection</strong> finds the closest point on a subspace.
          The key insight: the error <strong className="text-red-400">e = b - p</strong> is perpendicular
          to the subspace, which is why this minimizes |e|. This is the foundation of least squares.
        </p>
      </motion.div>
    </div>
  );
}
