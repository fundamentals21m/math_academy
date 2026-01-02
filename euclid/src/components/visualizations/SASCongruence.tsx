import { useState } from 'react';

/**
 * Interactive visualization of Proposition I.4: SAS Congruence
 * Shows two triangles with equal sides and included angle are congruent
 */
export function SASCongruence() {
  const [side1, setSide1] = useState(80);
  const [side2, setSide2] = useState(100);
  const [angle, setAngle] = useState(50);
  const [showOverlay, setShowOverlay] = useState(false);

  const width = 500;
  const height = 320;

  // First triangle (left side)
  const t1ax = 60;
  const t1ay = 260;
  const angleRad = angle * (Math.PI / 180);

  const t1bx = t1ax + side1;
  const t1by = t1ay;
  const t1cx = t1ax + side2 * Math.cos(angleRad);
  const t1cy = t1ay - side2 * Math.sin(angleRad);

  // Second triangle (right side, mirrored)
  const t2ax = 340;
  const t2ay = 260;
  const t2bx = t2ax + side1;
  const t2by = t2ay;
  const t2cx = t2ax + side2 * Math.cos(angleRad);
  const t2cy = t2ay - side2 * Math.sin(angleRad);

  // Overlay position (shifted to match first triangle)
  const overlayOffset = showOverlay ? t1ax - t2ax : 0;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Proposition I.4: SAS Congruence
      </h3>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <svg width={width} height={height} className="bg-dark-900 rounded-lg w-full">
            {/* First triangle */}
            <polygon
              points={`${t1ax},${t1ay} ${t1bx},${t1by} ${t1cx},${t1cy}`}
              fill="rgba(59, 130, 246, 0.2)"
              stroke="#3b82f6"
              strokeWidth="3"
            />

            {/* Side markers for first triangle */}
            <line
              x1={(t1ax + t1bx) / 2 - 5}
              y1={t1ay + 8}
              x2={(t1ax + t1bx) / 2 + 5}
              y2={t1ay + 8}
              stroke="#f59e0b"
              strokeWidth="3"
            />
            <line
              x1={(t1ax + t1cx) / 2 - 8}
              y1={(t1ay + t1cy) / 2}
              x2={(t1ax + t1cx) / 2 - 3}
              y2={(t1ay + t1cy) / 2 - 5}
              stroke="#10b981"
              strokeWidth="3"
            />
            <line
              x1={(t1ax + t1cx) / 2 - 3}
              y1={(t1ay + t1cy) / 2 + 5}
              x2={(t1ax + t1cx) / 2 - 8}
              y2={(t1ay + t1cy) / 2}
              stroke="#10b981"
              strokeWidth="3"
            />

            {/* Angle arc */}
            <path
              d={`M ${t1ax + 25} ${t1ay} A 25 25 0 0 0 ${t1ax + 25 * Math.cos(angleRad)} ${t1ay - 25 * Math.sin(angleRad)}`}
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <text x={t1ax + 35} y={t1ay - 20} fill="#ef4444" fontSize="12" fontWeight="bold">
              {angle}°
            </text>

            {/* Labels */}
            <text x={t1ax - 10} y={t1ay + 20} fill="#3b82f6" fontSize="14" fontWeight="bold">A</text>
            <text x={t1bx + 5} y={t1by + 20} fill="#3b82f6" fontSize="14" fontWeight="bold">B</text>
            <text x={t1cx - 10} y={t1cy - 5} fill="#3b82f6" fontSize="14" fontWeight="bold">C</text>

            {/* Second triangle (or overlay) */}
            <g transform={showOverlay ? `translate(${overlayOffset}, 0)` : ''} opacity={showOverlay ? 0.7 : 1}>
              <polygon
                points={`${t2ax},${t2ay} ${t2bx},${t2by} ${t2cx},${t2cy}`}
                fill={showOverlay ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.2)"}
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray={showOverlay ? "none" : "none"}
              />

              {/* Side markers for second triangle */}
              <line
                x1={(t2ax + t2bx) / 2 - 5}
                y1={t2ay + 8}
                x2={(t2ax + t2bx) / 2 + 5}
                y2={t2ay + 8}
                stroke="#f59e0b"
                strokeWidth="3"
              />
              <line
                x1={(t2ax + t2cx) / 2 - 8}
                y1={(t2ay + t2cy) / 2}
                x2={(t2ax + t2cx) / 2 - 3}
                y2={(t2ay + t2cy) / 2 - 5}
                stroke="#10b981"
                strokeWidth="3"
              />
              <line
                x1={(t2ax + t2cx) / 2 - 3}
                y1={(t2ay + t2cy) / 2 + 5}
                x2={(t2ax + t2cx) / 2 - 8}
                y2={(t2ay + t2cy) / 2}
                stroke="#10b981"
                strokeWidth="3"
              />

              {/* Angle arc */}
              <path
                d={`M ${t2ax + 25} ${t2ay} A 25 25 0 0 0 ${t2ax + 25 * Math.cos(angleRad)} ${t2ay - 25 * Math.sin(angleRad)}`}
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
              />

              {!showOverlay && (
                <>
                  <text x={t2ax - 10} y={t2ay + 20} fill="#10b981" fontSize="14" fontWeight="bold">D</text>
                  <text x={t2bx + 5} y={t2by + 20} fill="#10b981" fontSize="14" fontWeight="bold">E</text>
                  <text x={t2cx - 10} y={t2cy - 5} fill="#10b981" fontSize="14" fontWeight="bold">F</text>
                </>
              )}
            </g>

            {/* Equal signs between triangles */}
            {!showOverlay && (
              <text x={width / 2} y={height / 2} fill="#f59e0b" fontSize="24" fontWeight="bold" textAnchor="middle">
                ≅
              </text>
            )}
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Side AB = DE: {side1}
            </label>
            <input
              type="range"
              min="50"
              max="120"
              value={side1}
              onChange={(e) => setSide1(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Side AC = DF: {side2}
            </label>
            <input
              type="range"
              min="60"
              max="140"
              value={side2}
              onChange={(e) => setSide2(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Included Angle: {angle}°
            </label>
            <input
              type="range"
              min="20"
              max="120"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <button
            onClick={() => setShowOverlay(!showOverlay)}
            className={`w-full px-4 py-2 rounded-lg transition-colors ${
              showOverlay
                ? 'bg-emerald-600 text-white'
                : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
            }`}
          >
            {showOverlay ? 'Separate Triangles' : 'Superpose (Overlay)'}
          </button>

          <div className="bg-dark-700 rounded-lg p-4 text-sm">
            <p className="text-dark-200 mb-2">
              <strong className="text-amber-400">Given:</strong>
            </p>
            <ul className="text-dark-300 space-y-1 ml-4">
              <li>• AB = DE (equal sides)</li>
              <li>• AC = DF (equal sides)</li>
              <li>• ∠BAC = ∠EDF (equal included angles)</li>
            </ul>
            <p className="text-emerald-400 font-bold mt-2">
              ∴ △ABC ≅ △DEF
            </p>
          </div>

          <div className="bg-dark-700/50 rounded-lg p-4 text-sm text-dark-300">
            <p><strong className="text-amber-400">SAS:</strong> If two sides and the included angle of one triangle equal those of another, the triangles are congruent. Euclid proves this using superposition—placing one triangle on the other.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
