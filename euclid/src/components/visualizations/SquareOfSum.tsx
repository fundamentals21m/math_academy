import { useState } from 'react';

/**
 * Interactive visualization of Proposition II.4: Square of a Sum
 * (a + b)² = a² + 2ab + b²
 */
export function SquareOfSum() {
  const [a, setA] = useState(60);
  const [b, setB] = useState(40);
  const [showLabels, setShowLabels] = useState(true);
  const [showAreas, setShowAreas] = useState(true);

  const total = a + b;
  const scale = 200 / total;
  const scaledA = a * scale;
  const scaledB = b * scale;
  const offset = 40;

  // Calculate areas
  const areaA2 = a * a;
  const areaB2 = b * b;
  const areaAB = a * b;
  const totalArea = (a + b) * (a + b);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 mb-6 border border-dark-700">
      <h3 className="text-lg font-semibold text-amber-400 mb-4">
        Interactive: Square of a Sum (II.4)
      </h3>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <svg viewBox="0 0 300 300" className="w-full max-w-sm mx-auto">
            {/* Main square outline */}
            <rect
              x={offset}
              y={offset}
              width={scaledA + scaledB}
              height={scaledA + scaledB}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
            />

            {/* a² square (top-left) */}
            <rect
              x={offset}
              y={offset}
              width={scaledA}
              height={scaledA}
              fill="#f59e0b"
              fillOpacity="0.3"
              stroke="#f59e0b"
              strokeWidth="1"
            />

            {/* b² square (bottom-right) */}
            <rect
              x={offset + scaledA}
              y={offset + scaledA}
              width={scaledB}
              height={scaledB}
              fill="#f59e0b"
              fillOpacity="0.3"
              stroke="#f59e0b"
              strokeWidth="1"
            />

            {/* ab rectangle (top-right) */}
            <rect
              x={offset + scaledA}
              y={offset}
              width={scaledB}
              height={scaledA}
              fill="#3b82f6"
              fillOpacity="0.3"
              stroke="#3b82f6"
              strokeWidth="1"
            />

            {/* ab rectangle (bottom-left) */}
            <rect
              x={offset}
              y={offset + scaledA}
              width={scaledA}
              height={scaledB}
              fill="#3b82f6"
              fillOpacity="0.3"
              stroke="#3b82f6"
              strokeWidth="1"
            />

            {/* Dimension labels */}
            {showLabels && (
              <>
                {/* Top labels */}
                <text
                  x={offset + scaledA / 2}
                  y={offset - 8}
                  fill="#f59e0b"
                  fontSize="14"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  a
                </text>
                <text
                  x={offset + scaledA + scaledB / 2}
                  y={offset - 8}
                  fill="#f59e0b"
                  fontSize="14"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  b
                </text>

                {/* Left labels */}
                <text
                  x={offset - 12}
                  y={offset + scaledA / 2 + 5}
                  fill="#f59e0b"
                  fontSize="14"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  a
                </text>
                <text
                  x={offset - 12}
                  y={offset + scaledA + scaledB / 2 + 5}
                  fill="#f59e0b"
                  fontSize="14"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  b
                </text>
              </>
            )}

            {/* Area labels */}
            {showAreas && (
              <>
                <text
                  x={offset + scaledA / 2}
                  y={offset + scaledA / 2 + 5}
                  fill="#fbbf24"
                  fontSize="16"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  a²
                </text>
                <text
                  x={offset + scaledA + scaledB / 2}
                  y={offset + scaledA + scaledB / 2 + 5}
                  fill="#fbbf24"
                  fontSize="16"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  b²
                </text>
                <text
                  x={offset + scaledA + scaledB / 2}
                  y={offset + scaledA / 2 + 5}
                  fill="#60a5fa"
                  fontSize="14"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  ab
                </text>
                <text
                  x={offset + scaledA / 2}
                  y={offset + scaledA + scaledB / 2 + 5}
                  fill="#60a5fa"
                  fontSize="14"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  ab
                </text>
              </>
            )}

            {/* Total dimension */}
            <line
              x1={offset}
              y1={offset + scaledA + scaledB + 15}
              x2={offset + scaledA + scaledB}
              y2={offset + scaledA + scaledB + 15}
              stroke="#6b7280"
              strokeWidth="1"
            />
            <text
              x={offset + (scaledA + scaledB) / 2}
              y={offset + scaledA + scaledB + 30}
              fill="#9ca3af"
              fontSize="12"
              textAnchor="middle"
            >
              a + b
            </text>
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-dark-300 mb-2">
              Value of a: {a}
            </label>
            <input
              type="range"
              min="20"
              max="80"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm text-dark-300 mb-2">
              Value of b: {b}
            </label>
            <input
              type="range"
              min="20"
              max="80"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm text-dark-300">
              <input
                type="checkbox"
                checked={showLabels}
                onChange={(e) => setShowLabels(e.target.checked)}
                className="accent-amber-500"
              />
              Dimensions
            </label>
            <label className="flex items-center gap-2 text-sm text-dark-300">
              <input
                type="checkbox"
                checked={showAreas}
                onChange={(e) => setShowAreas(e.target.checked)}
                className="accent-amber-500"
              />
              Areas
            </label>
          </div>

          <div className="bg-dark-900/50 rounded-lg p-4 mt-4">
            <p className="text-amber-400 font-mono text-center text-lg">
              (a + b)² = a² + 2ab + b²
            </p>
            <div className="mt-3 text-sm text-dark-300 space-y-1">
              <p>
                <span className="text-amber-400">a² =</span> {areaA2}
              </p>
              <p>
                <span className="text-blue-400">2ab =</span> {2 * areaAB}
              </p>
              <p>
                <span className="text-amber-400">b² =</span> {areaB2}
              </p>
              <p className="border-t border-dark-700 pt-1 mt-1">
                <span className="text-white">Total =</span> {totalArea}
              </p>
              <p className="text-dark-400">
                ({a} + {b})² = {totalArea} ✓
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
