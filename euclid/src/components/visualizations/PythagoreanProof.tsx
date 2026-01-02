import { useState } from 'react';

/**
 * Interactive visualization of Proposition I.47: Pythagorean Theorem
 * Shows Euclid's "windmill" proof with squares on all three sides
 */
export function PythagoreanProof() {
  const [showSquares, setShowSquares] = useState(true);
  const [showDivision, setShowDivision] = useState(false);
  const [showAreas, setShowAreas] = useState(false);

  const width = 500;
  const height = 450;

  // Right triangle vertices (3-4-5 proportions, scaled)
  const scale = 40;
  const a = 3 * scale; // horizontal leg
  const b = 4 * scale; // vertical leg

  // Position triangle
  const ax = 150; // right angle vertex
  const ay = 320;
  const bx = ax + a; // horizontal vertex
  const by = ay;
  const cx = ax; // vertical vertex
  const cy = ay - b;

  // Hypotenuse length
  const c = Math.sqrt(a * a + b * b);

  // Calculate squares
  // Square on horizontal leg (below)
  const sq1 = [
    { x: ax, y: ay },
    { x: bx, y: by },
    { x: bx, y: by + a },
    { x: ax, y: ay + a },
  ];

  // Square on vertical leg (left)
  const sq2 = [
    { x: ax, y: ay },
    { x: cx, y: cy },
    { x: cx - b, y: cy },
    { x: ax - b, y: ay },
  ];

  // Square on hypotenuse (tilted)
  const dx = (cy - by) / c; // direction perpendicular to hypotenuse
  const dy = (bx - cx) / c;
  const sq3 = [
    { x: bx, y: by },
    { x: cx, y: cy },
    { x: cx + c * dx, y: cy + c * dy },
    { x: bx + c * dx, y: by + c * dy },
  ];

  // Division line for hypotenuse square (from right angle vertex perpendicular to hypotenuse)
  // Point on hypotenuse where altitude meets
  const t = (a * a) / (c * c);
  const footX = bx + t * (cx - bx);
  const footY = by + t * (cy - by);

  // Extend to opposite side of square
  const divEndX = footX + c * dx;
  const divEndY = footY + c * dy;

  const areaA = a * a;
  const areaB = b * b;
  const areaC = c * c;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Proposition I.47: The Pythagorean Theorem
      </h3>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <svg width={width} height={height} className="bg-dark-900 rounded-lg w-full">
            {/* Squares on sides */}
            {showSquares && (
              <>
                {/* Square on leg a (bottom, blue) */}
                <polygon
                  points={sq1.map(p => `${p.x},${p.y}`).join(' ')}
                  fill="rgba(59, 130, 246, 0.3)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                {showAreas && (
                  <text x={ax + a/2} y={ay + a/2 + 5} fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">
                    a² = {areaA}
                  </text>
                )}

                {/* Square on leg b (left, green) */}
                <polygon
                  points={sq2.map(p => `${p.x},${p.y}`).join(' ')}
                  fill="rgba(16, 185, 129, 0.3)"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                {showAreas && (
                  <text x={ax - b/2} y={ay - b/2} fill="#10b981" fontSize="14" fontWeight="bold" textAnchor="middle">
                    b² = {areaB}
                  </text>
                )}

                {/* Square on hypotenuse c (tilted, amber) */}
                <polygon
                  points={sq3.map(p => `${p.x},${p.y}`).join(' ')}
                  fill="rgba(245, 158, 11, 0.3)"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                {showAreas && (
                  <text x={(sq3[0].x + sq3[2].x) / 2} y={(sq3[0].y + sq3[2].y) / 2} fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
                    c² = {Math.round(areaC)}
                  </text>
                )}

                {/* Division line in hypotenuse square */}
                {showDivision && (
                  <>
                    <line
                      x1={ax}
                      y1={ay}
                      x2={footX}
                      y2={footY}
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                    <line
                      x1={footX}
                      y1={footY}
                      x2={divEndX}
                      y2={divEndY}
                      stroke="#ef4444"
                      strokeWidth="2"
                    />
                    <circle cx={footX} cy={footY} r="3" fill="#ef4444" />
                  </>
                )}
              </>
            )}

            {/* Triangle */}
            <polygon
              points={`${ax},${ay} ${bx},${by} ${cx},${cy}`}
              fill="rgba(255, 255, 255, 0.1)"
              stroke="#fff"
              strokeWidth="3"
            />

            {/* Right angle marker */}
            <path
              d={`M ${ax + 12} ${ay} L ${ax + 12} ${ay - 12} L ${ax} ${ay - 12}`}
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
            />

            {/* Vertex labels */}
            <text x={ax - 20} y={ay + 10} fill="#fff" fontSize="16" fontWeight="bold">A</text>
            <text x={bx + 10} y={by + 10} fill="#fff" fontSize="16" fontWeight="bold">B</text>
            <text x={cx - 20} y={cy} fill="#fff" fontSize="16" fontWeight="bold">C</text>

            {/* Side labels */}
            <text x={(ax + bx) / 2} y={ay + 20} fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">a</text>
            <text x={ax - 15} y={(ay + cy) / 2} fill="#10b981" fontSize="14" fontWeight="bold">b</text>
            <text x={(bx + cx) / 2 + 15} y={(by + cy) / 2} fill="#f59e0b" fontSize="14" fontWeight="bold">c</text>
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center gap-2 text-dark-300">
              <input
                type="checkbox"
                checked={showSquares}
                onChange={(e) => setShowSquares(e.target.checked)}
                className="rounded"
              />
              Show squares
            </label>
            <label className="flex items-center gap-2 text-dark-300">
              <input
                type="checkbox"
                checked={showAreas}
                onChange={(e) => setShowAreas(e.target.checked)}
                className="rounded"
              />
              Show areas
            </label>
            <label className="flex items-center gap-2 text-dark-300">
              <input
                type="checkbox"
                checked={showDivision}
                onChange={(e) => setShowDivision(e.target.checked)}
                className="rounded"
              />
              Show division
            </label>
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2">
            <p className="text-dark-200">
              <span className="text-blue-400">a = {a/scale}</span>,
              <span className="text-emerald-400 ml-2">b = {b/scale}</span>,
              <span className="text-amber-400 ml-2">c = {(c/scale).toFixed(2)}</span>
            </p>
            <div className="border-t border-dark-600 pt-2">
              <p className="text-dark-200">
                <span className="text-blue-400">a² = {areaA / (scale*scale)}</span> +
                <span className="text-emerald-400 ml-1">b² = {areaB / (scale*scale)}</span> =
                <span className="text-amber-400 ml-1">{(areaA + areaB) / (scale*scale)}</span>
              </p>
              <p className="text-dark-200 font-semibold">
                <span className="text-amber-400">c² = {Math.round(areaC / (scale*scale))}</span>
              </p>
            </div>
            <p className="text-emerald-400 font-bold text-lg">
              a² + b² = c² ✓
            </p>
          </div>

          <div className="bg-dark-700/50 rounded-lg p-4 text-sm text-dark-300">
            <p><strong className="text-amber-400">Euclid's proof:</strong> The altitude from the right angle to the hypotenuse divides the large square into two rectangles. Each rectangle equals one of the smaller squares (proven using congruent triangles and I.41).</p>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-lg p-4 text-sm border border-amber-500/20">
            <p className="text-amber-300">
              <strong>3-4-5 Triangle:</strong> This famous Pythagorean triple was used by ancient builders to create right angles. 3² + 4² = 9 + 16 = 25 = 5²
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
