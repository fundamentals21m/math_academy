import { useState, useMemo } from 'react';

/**
 * Interactive visualization of Proposition II.11: Golden Ratio
 * Cut a line so that whole × small = large²
 */
export function GoldenRatio() {
  const [lineLength, setLineLength] = useState(200);
  const [showConstruction, setShowConstruction] = useState(true);
  const [showVerification, setShowVerification] = useState(true);

  // Golden ratio φ = (1 + √5) / 2 ≈ 1.618
  const phi = (1 + Math.sqrt(5)) / 2;

  // If total = 1, then larger part = 1/φ ≈ 0.618, smaller = 2 - φ ≈ 0.382
  const largerPart = lineLength / phi;
  const smallerPart = lineLength - largerPart;

  const offset = 50;
  const scale = 280 / lineLength;
  const scaledLine = lineLength * scale;
  const scaledLarger = largerPart * scale;
  const scaledSmaller = smallerPart * scale;

  // For the construction
  const halfLine = lineLength / 2;
  const scaledHalf = halfLine * scale;

  // Verify: whole × small = large²
  const wholeTimesSmall = lineLength * smallerPart;
  const largeSquared = largerPart * largerPart;

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 mb-6 border border-dark-700">
      <h3 className="text-lg font-semibold text-amber-400 mb-4">
        Interactive: The Golden Ratio (II.11)
      </h3>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <svg viewBox="0 0 380 200" className="w-full max-w-lg mx-auto">
            {/* Main line AB */}
            <line
              x1={offset}
              y1={100}
              x2={offset + scaledLine}
              y2={100}
              stroke="#f59e0b"
              strokeWidth="3"
            />

            {/* Point markers */}
            <circle cx={offset} cy={100} r="5" fill="#f59e0b" />
            <circle cx={offset + scaledLarger} cy={100} r="5" fill="#3b82f6" />
            <circle cx={offset + scaledLine} cy={100} r="5" fill="#f59e0b" />

            {/* Labels */}
            <text
              x={offset}
              y={125}
              fill="#f59e0b"
              fontSize="14"
              textAnchor="middle"
              fontWeight="bold"
            >
              A
            </text>
            <text
              x={offset + scaledLarger}
              y={125}
              fill="#3b82f6"
              fontSize="14"
              textAnchor="middle"
              fontWeight="bold"
            >
              H
            </text>
            <text
              x={offset + scaledLine}
              y={125}
              fill="#f59e0b"
              fontSize="14"
              textAnchor="middle"
              fontWeight="bold"
            >
              B
            </text>

            {/* Segment labels */}
            <text
              x={offset + scaledLarger / 2}
              y={85}
              fill="#22c55e"
              fontSize="12"
              textAnchor="middle"
            >
              larger (AH)
            </text>
            <text
              x={offset + scaledLarger + scaledSmaller / 2}
              y={85}
              fill="#ef4444"
              fontSize="12"
              textAnchor="middle"
            >
              smaller (HB)
            </text>

            {/* Show the golden ratio relationship */}
            {showVerification && (
              <>
                {/* Rectangle representing AB × HB */}
                <rect
                  x={offset}
                  y={140}
                  width={scaledLine * 0.3}
                  height={scaledSmaller * 0.3}
                  fill="#ef4444"
                  fillOpacity="0.3"
                  stroke="#ef4444"
                  strokeWidth="1"
                />
                <text
                  x={offset + scaledLine * 0.15}
                  y={140 + scaledSmaller * 0.15 + 5}
                  fill="#ef4444"
                  fontSize="10"
                  textAnchor="middle"
                >
                  AB·HB
                </text>

                {/* Square representing AH² */}
                <rect
                  x={offset + scaledLine * 0.35}
                  y={140}
                  width={scaledLarger * 0.3}
                  height={scaledLarger * 0.3}
                  fill="#22c55e"
                  fillOpacity="0.3"
                  stroke="#22c55e"
                  strokeWidth="1"
                />
                <text
                  x={offset + scaledLine * 0.35 + scaledLarger * 0.15}
                  y={140 + scaledLarger * 0.15 + 5}
                  fill="#22c55e"
                  fontSize="10"
                  textAnchor="middle"
                >
                  AH²
                </text>

                {/* Equals sign */}
                <text
                  x={offset + scaledLine * 0.32}
                  y={155}
                  fill="#6b7280"
                  fontSize="16"
                >
                  =
                </text>
              </>
            )}

            {/* Construction elements */}
            {showConstruction && (
              <>
                {/* Midpoint C of AC (which is AB) */}
                <circle
                  cx={offset + scaledHalf}
                  cy={100}
                  r="3"
                  fill="#a855f7"
                />
                <text
                  x={offset + scaledHalf}
                  y={70}
                  fill="#a855f7"
                  fontSize="11"
                  textAnchor="middle"
                >
                  midpoint
                </text>

                {/* Perpendicular at B */}
                <line
                  x1={offset + scaledLine}
                  y1={100}
                  x2={offset + scaledLine}
                  y2={100 - scaledHalf}
                  stroke="#a855f7"
                  strokeWidth="1"
                  strokeDasharray="4"
                />

                {/* Arc from midpoint */}
                <path
                  d={`M ${offset + scaledLine} ${100 - scaledHalf}
                      A ${scaledHalf * 1.12} ${scaledHalf * 1.12} 0 0 0 ${
                    offset + scaledLarger
                  } ${100}`}
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
              </>
            )}
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-dark-300 mb-2">
              Line length (AB): {lineLength.toFixed(0)}
            </label>
            <input
              type="range"
              min="100"
              max="300"
              value={lineLength}
              onChange={(e) => setLineLength(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm text-dark-300">
              <input
                type="checkbox"
                checked={showConstruction}
                onChange={(e) => setShowConstruction(e.target.checked)}
                className="accent-purple-500"
              />
              Construction
            </label>
            <label className="flex items-center gap-2 text-sm text-dark-300">
              <input
                type="checkbox"
                checked={showVerification}
                onChange={(e) => setShowVerification(e.target.checked)}
                className="accent-green-500"
              />
              Verification
            </label>
          </div>

          <div className="bg-dark-900/50 rounded-lg p-4">
            <p className="text-amber-400 font-mono text-center mb-3">
              AB · HB = AH²
            </p>
            <div className="text-sm text-dark-300 space-y-1">
              <p>
                <span className="text-amber-400">AB (whole) =</span>{' '}
                {lineLength.toFixed(2)}
              </p>
              <p>
                <span className="text-green-400">AH (larger) =</span>{' '}
                {largerPart.toFixed(2)}
              </p>
              <p>
                <span className="text-red-400">HB (smaller) =</span>{' '}
                {smallerPart.toFixed(2)}
              </p>
              <p className="border-t border-dark-700 pt-2 mt-2">
                <span className="text-red-400">AB × HB =</span>{' '}
                {wholeTimesSmall.toFixed(2)}
              </p>
              <p>
                <span className="text-green-400">AH² =</span>{' '}
                {largeSquared.toFixed(2)}
              </p>
              <p className="text-green-400 mt-2">
                Difference: {Math.abs(wholeTimesSmall - largeSquared).toFixed(4)}{' '}
                ≈ 0 ✓
              </p>
            </div>
          </div>

          <div className="bg-dark-900/50 rounded-lg p-4">
            <p className="text-dark-400 text-sm">The Golden Ratio:</p>
            <p className="text-amber-400 font-mono text-lg mt-1">
              φ = (1 + √5) / 2 ≈ 1.618
            </p>
            <p className="text-dark-400 text-sm mt-2">
              AB : AH = AH : HB = φ
            </p>
            <p className="text-dark-300 text-sm mt-1">
              Ratio: {(lineLength / largerPart).toFixed(4)} ≈ φ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
