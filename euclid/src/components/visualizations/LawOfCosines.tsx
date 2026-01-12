import { useState } from 'react';

/**
 * Interactive visualization of Propositions II.12 & II.13: Law of Cosines
 * For obtuse: c² = a² + b² + 2ab·cos(180°-C)
 * For acute:  c² = a² + b² - 2ab·cos(C)
 * General:    c² = a² + b² - 2ab·cos(C)
 */
export function LawOfCosines() {
  const [angleC, setAngleC] = useState(60); // angle at C in degrees
  const [sideA, setSideA] = useState(80); // side opposite to A (BC)
  const [sideB, setSideB] = useState(100); // side opposite to B (AC)

  const angleRad = (angleC * Math.PI) / 180;

  // Calculate side c using law of cosines
  // c² = a² + b² - 2ab·cos(C)
  const cSquared =
    sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(angleRad);
  const sideC = Math.sqrt(Math.max(0, cSquared));

  // For the visualization
  const offset = 60;
  const scale = 1.5;

  // Place C at origin, A along positive x-axis
  const cx = offset;
  const cy = 180;
  const ax = cx + sideB * scale;
  const ay = cy;

  // B is at angle C from the CA line
  const bx = cx + sideA * scale * Math.cos(angleRad);
  const by = cy - sideA * scale * Math.sin(angleRad);

  // Perpendicular foot D
  // For obtuse angle, D is outside the triangle (to the left of C)
  // For acute angle, D is inside the triangle (between C and A)
  const projection = sideA * Math.cos(angleRad);
  const dx = cx + projection * scale;
  const dy = cy;

  const isObtuse = angleC > 90;
  const isRight = angleC === 90;

  // The "2ab·cos(C)" term
  const cosineComponent = 2 * sideA * sideB * Math.cos(angleRad);

  // Pythagorean comparison
  const pythagoreanSum = sideA * sideA + sideB * sideB;

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 mb-6 border border-dark-700">
      <h3 className="text-lg font-semibold text-amber-400 mb-4">
        Interactive: Law of Cosines (II.12 & II.13)
      </h3>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <svg viewBox="0 0 320 240" className="w-full max-w-md mx-auto">
            {/* Triangle */}
            <polygon
              points={`${cx},${cy} ${ax},${ay} ${bx},${by}`}
              fill={isObtuse ? '#ef4444' : isRight ? '#f59e0b' : '#22c55e'}
              fillOpacity="0.1"
              stroke={isObtuse ? '#ef4444' : isRight ? '#f59e0b' : '#22c55e'}
              strokeWidth="2"
            />

            {/* Perpendicular from B to AC (extended if needed) */}
            <line
              x1={bx}
              y1={by}
              x2={dx}
              y2={dy}
              stroke="#3b82f6"
              strokeWidth="1"
              strokeDasharray="4"
            />

            {/* Extended base for obtuse case */}
            {isObtuse && (
              <line
                x1={dx - 20}
                y1={cy}
                x2={cx}
                y2={cy}
                stroke="#6b7280"
                strokeWidth="1"
                strokeDasharray="2"
              />
            )}

            {/* Right angle marker at D */}
            {!isRight && (
              <path
                d={`M ${dx + 8} ${dy} L ${dx + 8} ${dy - 8} L ${dx} ${dy - 8}`}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1"
              />
            )}

            {/* Angle arc at C */}
            <path
              d={`M ${cx + 25} ${cy} A 25 25 0 0 0 ${cx + 25 * Math.cos(angleRad)} ${cy - 25 * Math.sin(angleRad)}`}
              fill="none"
              stroke={isObtuse ? '#ef4444' : '#22c55e'}
              strokeWidth="2"
            />

            {/* Vertex labels */}
            <text
              x={cx - 15}
              y={cy + 5}
              fill="#f59e0b"
              fontSize="14"
              fontWeight="bold"
            >
              C
            </text>
            <text
              x={ax + 10}
              y={ay + 5}
              fill="#f59e0b"
              fontSize="14"
              fontWeight="bold"
            >
              A
            </text>
            <text
              x={bx - 5}
              y={by - 10}
              fill="#f59e0b"
              fontSize="14"
              fontWeight="bold"
            >
              B
            </text>

            {/* D label (foot of perpendicular) */}
            {!isRight && (
              <text
                x={dx}
                y={dy + 15}
                fill="#3b82f6"
                fontSize="12"
                textAnchor="middle"
              >
                D
              </text>
            )}

            {/* Side labels */}
            <text
              x={(cx + ax) / 2}
              y={cy + 20}
              fill="#d1d5db"
              fontSize="11"
              textAnchor="middle"
            >
              b = {sideB}
            </text>
            <text
              x={(cx + bx) / 2 - 15}
              y={(cy + by) / 2 - 5}
              fill="#d1d5db"
              fontSize="11"
            >
              a = {sideA}
            </text>
            <text
              x={(ax + bx) / 2 + 10}
              y={(ay + by) / 2}
              fill="#d1d5db"
              fontSize="11"
            >
              c = {sideC.toFixed(1)}
            </text>

            {/* Angle label */}
            <text
              x={cx + 35}
              y={cy - 10}
              fill={isObtuse ? '#ef4444' : '#22c55e'}
              fontSize="11"
            >
              {angleC}°
            </text>
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-dark-300 mb-2">
              Angle C: {angleC}°{' '}
              <span
                className={
                  isObtuse
                    ? 'text-red-400'
                    : isRight
                      ? 'text-amber-400'
                      : 'text-green-400'
                }
              >
                ({isObtuse ? 'obtuse' : isRight ? 'right' : 'acute'})
              </span>
            </label>
            <input
              type="range"
              min="30"
              max="150"
              value={angleC}
              onChange={(e) => setAngleC(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm text-dark-300 mb-2">
              Side a (BC): {sideA}
            </label>
            <input
              type="range"
              min="40"
              max="120"
              value={sideA}
              onChange={(e) => setSideA(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm text-dark-300 mb-2">
              Side b (AC): {sideB}
            </label>
            <input
              type="range"
              min="40"
              max="120"
              value={sideB}
              onChange={(e) => setSideB(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          <div className="bg-dark-900/50 rounded-lg p-4">
            <p className="text-amber-400 font-mono text-center mb-3">
              c² = a² + b² - 2ab·cos(C)
            </p>
            <div className="text-sm text-dark-300 space-y-1">
              <p>
                <span className="text-dark-400">a² + b² =</span>{' '}
                {pythagoreanSum.toFixed(0)}
              </p>
              <p>
                <span className="text-dark-400">2ab·cos(C) =</span>{' '}
                {cosineComponent.toFixed(0)}
              </p>
              <p className="border-t border-dark-700 pt-2 mt-2">
                <span className="text-dark-400">c² =</span>{' '}
                {cSquared.toFixed(0)}
              </p>
              <p>
                <span className="text-dark-400">c =</span> {sideC.toFixed(2)}
              </p>
            </div>
          </div>

          <div
            className={`rounded-lg p-3 text-sm ${
              isObtuse
                ? 'bg-red-900/20 border border-red-800'
                : isRight
                  ? 'bg-amber-900/20 border border-amber-800'
                  : 'bg-green-900/20 border border-green-800'
            }`}
          >
            {isObtuse ? (
              <p className="text-red-300">
                <strong>II.12 (Obtuse):</strong> c² {`>`} a² + b²
                <br />
                The square on c exceeds by {Math.abs(cosineComponent).toFixed(0)}
              </p>
            ) : isRight ? (
              <p className="text-amber-300">
                <strong>I.47 (Right):</strong> c² = a² + b²
                <br />
                Pythagorean theorem!
              </p>
            ) : (
              <p className="text-green-300">
                <strong>II.13 (Acute):</strong> c² {`<`} a² + b²
                <br />
                The square on c is less by{' '}
                {Math.abs(cosineComponent).toFixed(0)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
