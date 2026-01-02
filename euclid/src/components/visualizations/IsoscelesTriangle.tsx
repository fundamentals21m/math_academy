import { useState } from 'react';

/**
 * Interactive visualization of Proposition I.5: Isosceles Triangle Theorem (Pons Asinorum)
 * Shows that base angles of an isosceles triangle are equal
 */
export function IsoscelesTriangle() {
  const [vertexAngle, setVertexAngle] = useState(60);
  const [showAngles, setShowAngles] = useState(true);

  const width = 400;
  const height = 350;
  const cx = width / 2;
  const baseY = height - 60;
  const sideLength = 140;

  // Calculate triangle vertices
  const halfAngle = (vertexAngle / 2) * (Math.PI / 180);
  const baseHalf = sideLength * Math.sin(halfAngle);
  const triangleHeight = sideLength * Math.cos(halfAngle);

  const ax = cx - baseHalf; // Left base vertex
  const ay = baseY;
  const bx = cx + baseHalf; // Right base vertex
  const by = baseY;
  const apexX = cx; // Apex
  const apexY = baseY - triangleHeight;

  // Base angles (equal in isosceles)
  const baseAngle = (180 - vertexAngle) / 2;

  // Arc for angle display
  const arcRadius = 25;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Proposition I.5: Isosceles Triangle Theorem
      </h3>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <svg width={width} height={height} className="bg-dark-900 rounded-lg w-full">
            {/* Triangle */}
            <polygon
              points={`${ax},${ay} ${bx},${by} ${apexX},${apexY}`}
              fill="rgba(59, 130, 246, 0.15)"
              stroke="#3b82f6"
              strokeWidth="3"
            />

            {/* Equal side markers */}
            <line
              x1={(ax + apexX) / 2 - 5}
              y1={(ay + apexY) / 2 - 5}
              x2={(ax + apexX) / 2 + 5}
              y2={(ay + apexY) / 2 + 5}
              stroke="#f59e0b"
              strokeWidth="3"
            />
            <line
              x1={(bx + apexX) / 2 - 5}
              y1={(by + apexY) / 2 - 5}
              x2={(bx + apexX) / 2 + 5}
              y2={(by + apexY) / 2 + 5}
              stroke="#f59e0b"
              strokeWidth="3"
            />

            {/* Angle arcs at base */}
            {showAngles && (
              <>
                {/* Left base angle */}
                <path
                  d={`M ${ax + arcRadius} ${ay} A ${arcRadius} ${arcRadius} 0 0 0 ${ax + arcRadius * Math.cos(Math.PI - baseAngle * Math.PI / 180)} ${ay - arcRadius * Math.sin(baseAngle * Math.PI / 180)}`}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                <text
                  x={ax + 35}
                  y={ay - 15}
                  fill="#10b981"
                  fontSize="14"
                  fontWeight="bold"
                >
                  {baseAngle.toFixed(1)}°
                </text>

                {/* Right base angle */}
                <path
                  d={`M ${bx - arcRadius} ${by} A ${arcRadius} ${arcRadius} 0 0 1 ${bx - arcRadius * Math.cos(Math.PI - baseAngle * Math.PI / 180)} ${by - arcRadius * Math.sin(baseAngle * Math.PI / 180)}`}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                <text
                  x={bx - 50}
                  y={by - 15}
                  fill="#10b981"
                  fontSize="14"
                  fontWeight="bold"
                >
                  {baseAngle.toFixed(1)}°
                </text>

                {/* Vertex angle */}
                <text
                  x={apexX}
                  y={apexY + 35}
                  fill="#f59e0b"
                  fontSize="14"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {vertexAngle}°
                </text>
              </>
            )}

            {/* Vertex labels */}
            <circle cx={ax} cy={ay} r="4" fill="#3b82f6" />
            <text x={ax - 15} y={ay + 20} fill="#3b82f6" fontSize="16" fontWeight="bold">A</text>

            <circle cx={bx} cy={by} r="4" fill="#3b82f6" />
            <text x={bx + 10} y={by + 20} fill="#3b82f6" fontSize="16" fontWeight="bold">B</text>

            <circle cx={apexX} cy={apexY} r="4" fill="#f59e0b" />
            <text x={apexX} y={apexY - 15} fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle">C</text>
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Vertex Angle: {vertexAngle}°
            </label>
            <input
              type="range"
              min="20"
              max="140"
              value={vertexAngle}
              onChange={(e) => setVertexAngle(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <label className="flex items-center gap-2 text-dark-300">
            <input
              type="checkbox"
              checked={showAngles}
              onChange={(e) => setShowAngles(e.target.checked)}
              className="rounded"
            />
            Show angle measures
          </label>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2">
            <p className="text-dark-200">
              <span className="text-amber-400">Equal sides:</span> AC = BC
            </p>
            <p className="text-dark-200">
              <span className="text-emerald-400">Base angles:</span> ∠A = ∠B = {baseAngle.toFixed(1)}°
            </p>
            <p className="text-dark-200">
              <span className="text-blue-400">Sum:</span> {baseAngle.toFixed(1)}° + {baseAngle.toFixed(1)}° + {vertexAngle}° = 180°
            </p>
          </div>

          <div className="bg-dark-700/50 rounded-lg p-4 text-sm text-dark-300">
            <p><strong className="text-amber-400">Pons Asinorum:</strong> "Bridge of Asses" — this theorem was historically considered the first real test of geometric understanding. Drag the slider to see that no matter the vertex angle, the base angles remain equal.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
