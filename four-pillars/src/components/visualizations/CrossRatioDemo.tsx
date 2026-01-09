import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function CrossRatioDemo({ className = '' }: Props) {
  // Four points on a line (x-coordinates)
  const [pointA, setPointA] = useState(-3);
  const [pointB, setPointB] = useState(-1);
  const [pointC, setPointC] = useState(1);
  const [pointD, setPointD] = useState(3);

  // Projection center
  const [projectionY, setProjectionY] = useState(4);
  const [showProjection, setShowProjection] = useState(true);

  // SVG dimensions
  const width = 450;
  const height = 350;
  const scale = 30;
  const cx = width / 2;
  const cy = height - 60;

  const toSvgX = (x: number) => cx + x * scale;
  const toSvgY = (y: number) => cy - y * scale;

  // Calculate cross-ratio (A,B;C,D) = (AC * BD) / (BC * AD)
  const crossRatio = useMemo(() => {
    const AC = pointC - pointA;
    const BD = pointD - pointB;
    const BC = pointC - pointB;
    const AD = pointD - pointA;

    if (BC === 0 || AD === 0) return Infinity;
    return (AC * BD) / (BC * AD);
  }, [pointA, pointB, pointC, pointD]);

  // Project points to a second line (y = 2) through center at (0, projectionY)
  const projectPoint = (x: number, centerY: number, targetY: number) => {
    // Line from (0, centerY) through (x, 0)
    // At y = targetY: x' / targetY = x / (centerY)
    // Wait, let's do proper similar triangles
    // Point P at (0, centerY), point on lower line at (x, 0)
    // Line: passes through (0, centerY) and (x, 0)
    // Parametric: (t*x, centerY - t*centerY)
    // At y = targetY: centerY - t*centerY = targetY => t = (centerY - targetY) / centerY
    // x' = t * x = x * (centerY - targetY) / centerY
    const t = (centerY - targetY) / centerY;
    return x * t;
  };

  const projectedLine = 2; // y-coordinate of second line
  const projectedA = projectPoint(pointA, projectionY, projectedLine);
  const projectedB = projectPoint(pointB, projectionY, projectedLine);
  const projectedC = projectPoint(pointC, projectionY, projectedLine);
  const projectedD = projectPoint(pointD, projectionY, projectedLine);

  // Cross-ratio of projected points (should equal original!)
  const projectedCrossRatio = useMemo(() => {
    const AC = projectedC - projectedA;
    const BD = projectedD - projectedB;
    const BC = projectedC - projectedB;
    const AD = projectedD - projectedA;

    if (BC === 0 || AD === 0) return Infinity;
    return (AC * BD) / (BC * AD);
  }, [projectedA, projectedB, projectedC, projectedD]);

  // Point colors
  const colors = {
    A: '#ef4444',
    B: '#f97316',
    C: '#10b981',
    D: '#3b82f6',
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Cross-Ratio Visualizer</h3>

      <p className="text-dark-300 mb-6">
        The cross-ratio (A,B;C,D) is preserved under projection!
        Move the points and projection center to verify this invariant.
      </p>

      {/* Point controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm" style={{ color: colors.A }}>
            A = {pointA.toFixed(1)}
          </label>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.2"
            value={pointA}
            onChange={(e) => setPointA(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-red-500"
          />
        </div>
        <div>
          <label className="text-sm" style={{ color: colors.B }}>
            B = {pointB.toFixed(1)}
          </label>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.2"
            value={pointB}
            onChange={(e) => setPointB(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>
        <div>
          <label className="text-sm" style={{ color: colors.C }}>
            C = {pointC.toFixed(1)}
          </label>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.2"
            value={pointC}
            onChange={(e) => setPointC(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div>
          <label className="text-sm" style={{ color: colors.D }}>
            D = {pointD.toFixed(1)}
          </label>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.2"
            value={pointD}
            onChange={(e) => setPointD(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Projection control */}
      <div className="mb-4">
        <label className="text-purple-400 text-sm">
          Projection Center Height: {projectionY.toFixed(1)}
        </label>
        <input
          type="range"
          min="3"
          max="8"
          step="0.2"
          value={projectionY}
          onChange={(e) => setProjectionY(parseFloat(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
        />
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

      {/* Canvas */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Lower line (original points) */}
          <line
            x1={toSvgX(-6)}
            y1={toSvgY(0)}
            x2={toSvgX(6)}
            y2={toSvgY(0)}
            stroke="#4b5563"
            strokeWidth={2}
          />

          {/* Upper line (projected points) */}
          {showProjection && (
            <line
              x1={toSvgX(-6)}
              y1={toSvgY(projectedLine)}
              x2={toSvgX(6)}
              y2={toSvgY(projectedLine)}
              stroke="#6b7280"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          )}

          {/* Projection center */}
          {showProjection && (
            <circle
              cx={toSvgX(0)}
              cy={toSvgY(projectionY)}
              r={8}
              fill="#a855f7"
            />
          )}

          {/* Projection lines */}
          {showProjection && (
            <>
              <line
                x1={toSvgX(0)}
                y1={toSvgY(projectionY)}
                x2={toSvgX(pointA)}
                y2={toSvgY(0)}
                stroke={colors.A}
                strokeWidth={1}
                opacity={0.5}
              />
              <line
                x1={toSvgX(0)}
                y1={toSvgY(projectionY)}
                x2={toSvgX(pointB)}
                y2={toSvgY(0)}
                stroke={colors.B}
                strokeWidth={1}
                opacity={0.5}
              />
              <line
                x1={toSvgX(0)}
                y1={toSvgY(projectionY)}
                x2={toSvgX(pointC)}
                y2={toSvgY(0)}
                stroke={colors.C}
                strokeWidth={1}
                opacity={0.5}
              />
              <line
                x1={toSvgX(0)}
                y1={toSvgY(projectionY)}
                x2={toSvgX(pointD)}
                y2={toSvgY(0)}
                stroke={colors.D}
                strokeWidth={1}
                opacity={0.5}
              />
            </>
          )}

          {/* Original points */}
          <circle cx={toSvgX(pointA)} cy={toSvgY(0)} r={8} fill={colors.A} />
          <circle cx={toSvgX(pointB)} cy={toSvgY(0)} r={8} fill={colors.B} />
          <circle cx={toSvgX(pointC)} cy={toSvgY(0)} r={8} fill={colors.C} />
          <circle cx={toSvgX(pointD)} cy={toSvgY(0)} r={8} fill={colors.D} />

          {/* Labels */}
          <text x={toSvgX(pointA)} y={toSvgY(0) + 25} fill={colors.A} fontSize="14" textAnchor="middle" fontWeight="bold">A</text>
          <text x={toSvgX(pointB)} y={toSvgY(0) + 25} fill={colors.B} fontSize="14" textAnchor="middle" fontWeight="bold">B</text>
          <text x={toSvgX(pointC)} y={toSvgY(0) + 25} fill={colors.C} fontSize="14" textAnchor="middle" fontWeight="bold">C</text>
          <text x={toSvgX(pointD)} y={toSvgY(0) + 25} fill={colors.D} fontSize="14" textAnchor="middle" fontWeight="bold">D</text>

          {/* Projected points */}
          {showProjection && (
            <>
              <circle cx={toSvgX(projectedA)} cy={toSvgY(projectedLine)} r={6} fill={colors.A} opacity={0.7} />
              <circle cx={toSvgX(projectedB)} cy={toSvgY(projectedLine)} r={6} fill={colors.B} opacity={0.7} />
              <circle cx={toSvgX(projectedC)} cy={toSvgY(projectedLine)} r={6} fill={colors.C} opacity={0.7} />
              <circle cx={toSvgX(projectedD)} cy={toSvgY(projectedLine)} r={6} fill={colors.D} opacity={0.7} />

              <text x={toSvgX(projectedA)} y={toSvgY(projectedLine) - 12} fill={colors.A} fontSize="12" textAnchor="middle">A'</text>
              <text x={toSvgX(projectedB)} y={toSvgY(projectedLine) - 12} fill={colors.B} fontSize="12" textAnchor="middle">B'</text>
              <text x={toSvgX(projectedC)} y={toSvgY(projectedLine) - 12} fill={colors.C} fontSize="12" textAnchor="middle">C'</text>
              <text x={toSvgX(projectedD)} y={toSvgY(projectedLine) - 12} fill={colors.D} fontSize="12" textAnchor="middle">D'</text>
            </>
          )}
        </svg>
      </div>

      {/* Cross-ratio display */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 text-center">
          <p className="text-dark-400 text-sm">Original Cross-Ratio</p>
          <p className="text-orange-400 font-mono text-2xl">
            {isFinite(crossRatio) ? crossRatio.toFixed(4) : '∞'}
          </p>
          <p className="text-dark-500 text-xs mt-1">(A,B;C,D)</p>
        </div>
        {showProjection && (
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
            <p className="text-dark-400 text-sm">Projected Cross-Ratio</p>
            <p className="text-purple-400 font-mono text-2xl">
              {isFinite(projectedCrossRatio) ? projectedCrossRatio.toFixed(4) : '∞'}
            </p>
            <p className="text-dark-500 text-xs mt-1">(A',B';C',D')</p>
          </div>
        )}
      </div>

      {/* Formula */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm text-center font-mono">
          (A,B;C,D) = (AC · BD) / (BC · AD)
        </p>
        <p className="text-dark-400 text-xs text-center mt-2">
          The cross-ratio is the unique projective invariant of four collinear points.
          It remains unchanged under any central projection.
        </p>
      </div>
    </div>
  );
}
