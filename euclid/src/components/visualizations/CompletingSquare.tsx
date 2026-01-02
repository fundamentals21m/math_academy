import { useState } from 'react';

/**
 * Interactive visualization of Proposition II.5: Completing the Square
 * (a+x)(a-x) + x² = a²
 * Equivalently: a² - x² = (a+x)(a-x)
 */
export function CompletingSquare() {
  const [a, setA] = useState(50);
  const [x, setX] = useState(20);
  const [showGnomon, setShowGnomon] = useState(true);

  const scale = 2;
  const offset = 40;
  const scaledA = a * scale;
  const scaledX = x * scale;

  // The key insight: the half is 'a', and x is the distance from midpoint to cut
  // So AD = a + x, DB = a - x
  // Rectangle (a+x)(a-x) + x² = a²

  const rectArea = (a + x) * (a - x);
  const xSquared = x * x;
  const aSquared = a * a;

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 mb-6 border border-dark-700">
      <h3 className="text-lg font-semibold text-amber-400 mb-4">
        Interactive: Completing the Square (II.5)
      </h3>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <svg viewBox="0 0 280 280" className="w-full max-w-sm mx-auto">
            {/* Main square on 'a' (the half) */}
            <rect
              x={offset}
              y={offset}
              width={scaledA}
              height={scaledA}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
            />

            {/* The small x² square in the corner */}
            <rect
              x={offset + scaledA - scaledX}
              y={offset + scaledA - scaledX}
              width={scaledX}
              height={scaledX}
              fill="#ef4444"
              fillOpacity="0.3"
              stroke="#ef4444"
              strokeWidth="1"
            />

            {/* The gnomon (L-shape) = a² - x² = (a+x)(a-x) */}
            {showGnomon && (
              <path
                d={`M ${offset} ${offset}
                    L ${offset + scaledA} ${offset}
                    L ${offset + scaledA} ${offset + scaledA - scaledX}
                    L ${offset + scaledA - scaledX} ${offset + scaledA - scaledX}
                    L ${offset + scaledA - scaledX} ${offset + scaledA}
                    L ${offset} ${offset + scaledA}
                    Z`}
                fill="#3b82f6"
                fillOpacity="0.2"
                stroke="#3b82f6"
                strokeWidth="1"
              />
            )}

            {/* Labels */}
            <text
              x={offset + scaledA / 2}
              y={offset - 10}
              fill="#f59e0b"
              fontSize="14"
              textAnchor="middle"
              fontWeight="bold"
            >
              a
            </text>
            <text
              x={offset - 15}
              y={offset + scaledA / 2}
              fill="#f59e0b"
              fontSize="14"
              textAnchor="middle"
              fontWeight="bold"
            >
              a
            </text>

            {/* x label */}
            <text
              x={offset + scaledA - scaledX / 2}
              y={offset + scaledA + 15}
              fill="#ef4444"
              fontSize="12"
              textAnchor="middle"
            >
              x
            </text>
            <text
              x={offset + scaledA + 12}
              y={offset + scaledA - scaledX / 2}
              fill="#ef4444"
              fontSize="12"
              textAnchor="middle"
            >
              x
            </text>

            {/* Area labels */}
            <text
              x={offset + (scaledA - scaledX) / 2}
              y={offset + scaledA / 2}
              fill="#60a5fa"
              fontSize="12"
              textAnchor="middle"
            >
              gnomon
            </text>
            <text
              x={offset + scaledA - scaledX / 2}
              y={offset + scaledA - scaledX / 2}
              fill="#ef4444"
              fontSize="11"
              textAnchor="middle"
            >
              x²
            </text>

            {/* The line showing the division */}
            <line
              x1={offset}
              y1={offset + scaledA + 30}
              x2={offset + scaledA}
              y2={offset + scaledA + 30}
              stroke="#6b7280"
              strokeWidth="2"
            />
            {/* Midpoint marker */}
            <circle
              cx={offset + scaledA / 2}
              cy={offset + scaledA + 30}
              r="3"
              fill="#f59e0b"
            />
            {/* Cut point marker */}
            <circle
              cx={offset + scaledA / 2 + scaledX}
              cy={offset + scaledA + 30}
              r="3"
              fill="#ef4444"
            />
            <text
              x={offset}
              y={offset + scaledA + 45}
              fill="#6b7280"
              fontSize="10"
            >
              A
            </text>
            <text
              x={offset + scaledA / 2 - 3}
              y={offset + scaledA + 45}
              fill="#f59e0b"
              fontSize="10"
            >
              C
            </text>
            <text
              x={offset + scaledA / 2 + scaledX - 3}
              y={offset + scaledA + 45}
              fill="#ef4444"
              fontSize="10"
            >
              D
            </text>
            <text
              x={offset + scaledA - 3}
              y={offset + scaledA + 45}
              fill="#6b7280"
              fontSize="10"
            >
              B
            </text>
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-dark-300 mb-2">
              Half (a): {a}
            </label>
            <input
              type="range"
              min="30"
              max="70"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm text-dark-300 mb-2">
              Distance from midpoint (x): {x}
            </label>
            <input
              type="range"
              min="5"
              max={a - 5}
              value={x}
              onChange={(e) => setX(Number(e.target.value))}
              className="w-full accent-red-500"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-dark-300">
            <input
              type="checkbox"
              checked={showGnomon}
              onChange={(e) => setShowGnomon(e.target.checked)}
              className="accent-blue-500"
            />
            Highlight gnomon
          </label>

          <div className="bg-dark-900/50 rounded-lg p-4 mt-4">
            <p className="text-amber-400 font-mono text-center">
              (a+x)(a-x) + x² = a²
            </p>
            <div className="mt-3 text-sm text-dark-300 space-y-1">
              <p>
                <span className="text-dark-400">AD = a + x =</span> {a + x}
              </p>
              <p>
                <span className="text-dark-400">DB = a - x =</span> {a - x}
              </p>
              <p className="border-t border-dark-700 pt-2 mt-2">
                <span className="text-blue-400">Rectangle AD·DB =</span>{' '}
                {rectArea}
              </p>
              <p>
                <span className="text-red-400">Square x² =</span> {xSquared}
              </p>
              <p>
                <span className="text-white">Sum =</span> {rectArea + xSquared}
              </p>
              <p>
                <span className="text-amber-400">Square a² =</span> {aSquared}
              </p>
              <p className="text-green-400 mt-2">
                {rectArea} + {xSquared} = {aSquared} ✓
              </p>
            </div>
          </div>

          <div className="text-xs text-dark-400 mt-2">
            <p>
              This identity is equivalent to the{' '}
              <strong>difference of squares</strong>:
            </p>
            <p className="font-mono mt-1">a² - x² = (a+x)(a-x)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
