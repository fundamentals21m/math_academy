import { useState } from 'react';

/**
 * Interactive visualization of Proposition I.29: Properties of parallel lines cut by a transversal
 * Shows alternate angles, corresponding angles, and co-interior angles
 */
export function ParallelLines() {
  const [transversalAngle, setTransversalAngle] = useState(60);
  const [highlightType, setHighlightType] = useState<'alternate' | 'corresponding' | 'cointerior'>('alternate');

  const width = 450;
  const height = 350;

  // Two parallel horizontal lines
  const line1Y = 120;
  const line2Y = 230;
  const lineLeft = 50;
  const lineRight = 400;

  // Transversal line (angled)
  const angleRad = transversalAngle * (Math.PI / 180);
  const transversalLength = 200;

  // Intersection points
  const int1X = 180;
  const int1Y = line1Y;
  const int2X = int1X + (line2Y - line1Y) / Math.tan(angleRad);
  const int2Y = line2Y;

  // Transversal endpoints
  const trans1X = int1X - 60 * Math.cos(angleRad);
  const trans1Y = int1Y - 60 * Math.sin(angleRad);
  const trans2X = int2X + 60 * Math.cos(angleRad);
  const trans2Y = int2Y + 60 * Math.sin(angleRad);

  const arcRadius = 30;
  const angle1 = transversalAngle;
  const angle2 = 180 - transversalAngle;

  const getAngleColors = () => {
    switch (highlightType) {
      case 'alternate':
        return { a1: '#ef4444', a2: '#ef4444', a3: '#10b981', a4: '#10b981' };
      case 'corresponding':
        return { a1: '#ef4444', a2: '#3b82f6', a3: '#ef4444', a4: '#3b82f6' };
      case 'cointerior':
        return { a1: '#f59e0b', a2: '#f59e0b', a3: '#a855f7', a4: '#a855f7' };
    }
  };

  const colors = getAngleColors();

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Proposition I.29: Parallel Lines and Transversal
      </h3>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <svg width={width} height={height} className="bg-dark-900 rounded-lg w-full">
            {/* Parallel line 1 */}
            <line
              x1={lineLeft}
              y1={line1Y}
              x2={lineRight}
              y2={line1Y}
              stroke="#3b82f6"
              strokeWidth="3"
            />
            <text x={lineRight + 10} y={line1Y + 5} fill="#3b82f6" fontSize="14">l₁</text>

            {/* Parallel line 2 */}
            <line
              x1={lineLeft}
              y1={line2Y}
              x2={lineRight}
              y2={line2Y}
              stroke="#3b82f6"
              strokeWidth="3"
            />
            <text x={lineRight + 10} y={line2Y + 5} fill="#3b82f6" fontSize="14">l₂</text>

            {/* Parallel markers */}
            <text x={lineLeft - 20} y={(line1Y + line2Y) / 2} fill="#3b82f6" fontSize="20">‖</text>

            {/* Transversal */}
            <line
              x1={trans1X}
              y1={trans1Y}
              x2={trans2X}
              y2={trans2Y}
              stroke="#9ca3af"
              strokeWidth="2"
            />
            <text x={trans1X - 15} y={trans1Y - 10} fill="#9ca3af" fontSize="14">t</text>

            {/* Intersection points */}
            <circle cx={int1X} cy={int1Y} r="4" fill="#fff" />
            <circle cx={int2X} cy={int2Y} r="4" fill="#fff" />

            {/* Angle arcs at intersection 1 */}
            {/* Angle 1 (above right) */}
            <path
              d={`M ${int1X + arcRadius} ${int1Y} A ${arcRadius} ${arcRadius} 0 0 0 ${int1X + arcRadius * Math.cos(angleRad)} ${int1Y - arcRadius * Math.sin(angleRad)}`}
              fill="none"
              stroke={colors.a1}
              strokeWidth="3"
            />
            <text x={int1X + 40} y={int1Y - 15} fill={colors.a1} fontSize="12" fontWeight="bold">
              {angle1}°
            </text>

            {/* Angle 2 (above left) */}
            <path
              d={`M ${int1X - arcRadius} ${int1Y} A ${arcRadius} ${arcRadius} 0 0 1 ${int1X - arcRadius * Math.cos(Math.PI - angleRad)} ${int1Y - arcRadius * Math.sin(angleRad)}`}
              fill="none"
              stroke={colors.a2}
              strokeWidth="3"
            />
            <text x={int1X - 55} y={int1Y - 15} fill={colors.a2} fontSize="12" fontWeight="bold">
              {angle2}°
            </text>

            {/* Angle arcs at intersection 2 */}
            {/* Angle 3 (below left) */}
            <path
              d={`M ${int2X - arcRadius} ${int2Y} A ${arcRadius} ${arcRadius} 0 0 0 ${int2X - arcRadius * Math.cos(Math.PI - angleRad)} ${int2Y + arcRadius * Math.sin(angleRad)}`}
              fill="none"
              stroke={colors.a3}
              strokeWidth="3"
            />
            <text x={int2X - 55} y={int2Y + 30} fill={colors.a3} fontSize="12" fontWeight="bold">
              {angle1}°
            </text>

            {/* Angle 4 (below right) */}
            <path
              d={`M ${int2X + arcRadius} ${int2Y} A ${arcRadius} ${arcRadius} 0 0 1 ${int2X + arcRadius * Math.cos(angleRad)} ${int2Y + arcRadius * Math.sin(angleRad)}`}
              fill="none"
              stroke={colors.a4}
              strokeWidth="3"
            />
            <text x={int2X + 40} y={int2Y + 30} fill={colors.a4} fontSize="12" fontWeight="bold">
              {angle2}°
            </text>
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Transversal Angle: {transversalAngle}°
            </label>
            <input
              type="range"
              min="30"
              max="80"
              value={transversalAngle}
              onChange={(e) => setTransversalAngle(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <p className="text-dark-300 text-sm">Highlight angle pairs:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setHighlightType('alternate')}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  highlightType === 'alternate'
                    ? 'bg-red-600 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                Alternate
              </button>
              <button
                onClick={() => setHighlightType('corresponding')}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  highlightType === 'corresponding'
                    ? 'bg-blue-600 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                Corresponding
              </button>
              <button
                onClick={() => setHighlightType('cointerior')}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  highlightType === 'cointerior'
                    ? 'bg-amber-600 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                Co-interior
              </button>
            </div>
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            {highlightType === 'alternate' && (
              <p className="text-dark-200">
                <strong className="text-red-400">Alternate angles</strong> are equal: {angle1}° = {angle1}°
              </p>
            )}
            {highlightType === 'corresponding' && (
              <p className="text-dark-200">
                <strong className="text-blue-400">Corresponding angles</strong> are equal (same position at each intersection)
              </p>
            )}
            {highlightType === 'cointerior' && (
              <p className="text-dark-200">
                <strong className="text-amber-400">Co-interior angles</strong> sum to 180°: {angle1}° + {angle2}° = 180°
              </p>
            )}
          </div>

          <div className="bg-dark-700/50 rounded-lg p-4 text-sm text-dark-300">
            <p><strong className="text-amber-400">I.29 proves:</strong> When parallel lines are cut by a transversal, alternate angles are equal, corresponding angles are equal, and co-interior angles sum to 180°. This is the first proposition to use the Parallel Postulate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
