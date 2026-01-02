import { useState } from 'react';

/**
 * Interactive visualization of Proposition I.32: The angle sum of a triangle is 180°
 * Shows the parallel line construction that proves this
 */
export function AngleSumTheorem() {
  const [angleA, setAngleA] = useState(50);
  const [angleB, setAngleB] = useState(60);
  const [showParallel, setShowParallel] = useState(true);

  const angleC = 180 - angleA - angleB;

  const width = 450;
  const height = 350;
  const baseY = height - 80;
  const baseWidth = 200;

  // Triangle vertices
  const ax = 80;
  const ay = baseY;
  const bx = ax + baseWidth;
  const by = baseY;

  // Calculate C using angles
  const angleARad = angleA * (Math.PI / 180);
  const angleBRad = angleB * (Math.PI / 180);

  // Height of triangle from law of sines
  const h = (baseWidth * Math.sin(angleARad) * Math.sin(angleBRad)) / Math.sin((angleA + angleB) * Math.PI / 180);
  const cxOffset = h / Math.tan(angleARad);

  const cx = ax + cxOffset;
  const cy = baseY - h;

  // Parallel line through C
  const parallelExtend = 80;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Proposition I.32: Triangle Angle Sum Theorem
      </h3>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <svg width={width} height={height} className="bg-dark-900 rounded-lg w-full">
            {/* Parallel line through C */}
            {showParallel && (
              <>
                <line
                  x1={cx - parallelExtend}
                  y1={cy}
                  x2={cx + parallelExtend + 40}
                  y2={cy}
                  stroke="#a855f7"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                />
                <text x={cx + parallelExtend + 50} y={cy + 5} fill="#a855f7" fontSize="12">
                  parallel to AB
                </text>

                {/* Alternate angle markers */}
                <path
                  d={`M ${cx - 20} ${cy} A 20 20 0 0 0 ${cx - 20 * Math.cos(angleARad)} ${cy + 20 * Math.sin(angleARad)}`}
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text x={cx - 40} y={cy + 25} fill="#ef4444" fontSize="12">α</text>

                <path
                  d={`M ${cx + 20} ${cy} A 20 20 0 0 1 ${cx + 20 * Math.cos(angleBRad)} ${cy + 20 * Math.sin(angleBRad)}`}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                <text x={cx + 35} y={cy + 25} fill="#10b981" fontSize="12">β</text>
              </>
            )}

            {/* Triangle */}
            <polygon
              points={`${ax},${ay} ${bx},${by} ${cx},${cy}`}
              fill="rgba(59, 130, 246, 0.15)"
              stroke="#3b82f6"
              strokeWidth="3"
            />

            {/* Angle A arc */}
            <path
              d={`M ${ax + 25} ${ay} A 25 25 0 0 0 ${ax + 25 * Math.cos(angleARad)} ${ay - 25 * Math.sin(angleARad)}`}
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <text x={ax + 35} y={ay - 15} fill="#ef4444" fontSize="14" fontWeight="bold">
              {angleA}°
            </text>

            {/* Angle B arc */}
            <path
              d={`M ${bx - 25} ${by} A 25 25 0 0 1 ${bx - 25 * Math.cos(angleBRad)} ${by - 25 * Math.sin(angleBRad)}`}
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />
            <text x={bx - 50} y={by - 15} fill="#10b981" fontSize="14" fontWeight="bold">
              {angleB}°
            </text>

            {/* Angle C */}
            <text x={cx} y={cy + 30} fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
              {angleC}°
            </text>

            {/* Vertex labels */}
            <circle cx={ax} cy={ay} r="4" fill="#3b82f6" />
            <text x={ax - 5} y={ay + 25} fill="#3b82f6" fontSize="16" fontWeight="bold">A</text>

            <circle cx={bx} cy={by} r="4" fill="#3b82f6" />
            <text x={bx + 5} y={by + 25} fill="#3b82f6" fontSize="16" fontWeight="bold">B</text>

            <circle cx={cx} cy={cy} r="4" fill="#f59e0b" />
            <text x={cx} y={cy - 15} fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle">C</text>
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Angle A: {angleA}°
            </label>
            <input
              type="range"
              min="15"
              max="120"
              value={angleA}
              onChange={(e) => setAngleA(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Angle B: {angleB}°
            </label>
            <input
              type="range"
              min="15"
              max={150 - angleA}
              value={Math.min(angleB, 150 - angleA)}
              onChange={(e) => setAngleB(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <label className="flex items-center gap-2 text-dark-300">
            <input
              type="checkbox"
              checked={showParallel}
              onChange={(e) => setShowParallel(e.target.checked)}
              className="rounded"
            />
            Show parallel line construction
          </label>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2">
            <p className="text-dark-200">
              <span className="text-red-400">∠A = {angleA}°</span>
            </p>
            <p className="text-dark-200">
              <span className="text-emerald-400">∠B = {angleB}°</span>
            </p>
            <p className="text-dark-200">
              <span className="text-amber-400">∠C = {angleC}°</span>
            </p>
            <p className="text-dark-200 font-semibold border-t border-dark-600 pt-2">
              Sum = {angleA}° + {angleB}° + {angleC}° = <span className="text-blue-400">180°</span>
            </p>
          </div>

          <div className="bg-dark-700/50 rounded-lg p-4 text-sm text-dark-300">
            <p><strong className="text-amber-400">Proof idea:</strong> Draw a line through C parallel to AB. By I.29, alternate angles are equal: the angle on the left of C equals ∠A, and the angle on the right equals ∠B. These three angles form a straight line (180°).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
