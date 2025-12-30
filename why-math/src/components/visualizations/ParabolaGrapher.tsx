import { useState } from 'react';

export function ParabolaGrapher() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  // Calculate vertex and discriminant
  const h = -b / (2 * a);
  const k = a * h * h + b * h + c;
  const discriminant = b * b - 4 * a * c;

  // Calculate x-intercepts if they exist
  let x1: number | null = null;
  let x2: number | null = null;
  if (discriminant >= 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  }

  // SVG dimensions
  const width = 400;
  const height = 300;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = 25;

  // Convert math coords to SVG coords
  const toSvgX = (x: number) => centerX + x * scale;
  const toSvgY = (y: number) => centerY - y * scale;

  // Generate parabola points
  const points: string[] = [];
  for (let x = -8; x <= 8; x += 0.1) {
    const y = a * x * x + b * x + c;
    if (y >= -6 && y <= 6) {
      points.push(`${toSvgX(x)},${toSvgY(y)}`);
    }
  }

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Parabola Grapher: y = ax² + bx + c
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Grid */}
            {Array.from({ length: 17 }, (_, i) => i - 8).map((n) => (
              <g key={n}>
                <line
                  x1={toSvgX(n)}
                  y1={0}
                  x2={toSvgX(n)}
                  y2={height}
                  stroke={n === 0 ? '#6b7280' : '#374151'}
                  strokeWidth={n === 0 ? 1.5 : 0.5}
                />
                <line
                  x1={0}
                  y1={toSvgY(n)}
                  x2={width}
                  y2={toSvgY(n)}
                  stroke={n === 0 ? '#6b7280' : '#374151'}
                  strokeWidth={n === 0 ? 1.5 : 0.5}
                />
              </g>
            ))}

            {/* Parabola */}
            <polyline
              points={points.join(' ')}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />

            {/* Vertex */}
            {h >= -8 && h <= 8 && k >= -6 && k <= 6 && (
              <circle
                cx={toSvgX(h)}
                cy={toSvgY(k)}
                r="6"
                fill="#f59e0b"
              />
            )}

            {/* X-intercepts */}
            {x1 !== null && x1 >= -8 && x1 <= 8 && (
              <circle
                cx={toSvgX(x1)}
                cy={toSvgY(0)}
                r="5"
                fill="#10b981"
              />
            )}
            {x2 !== null && x2 >= -8 && x2 <= 8 && Math.abs(x1! - x2) > 0.01 && (
              <circle
                cx={toSvgX(x2)}
                cy={toSvgY(0)}
                r="5"
                fill="#10b981"
              />
            )}

            {/* Y-intercept */}
            {c >= -6 && c <= 6 && (
              <circle
                cx={toSvgX(0)}
                cy={toSvgY(c)}
                r="5"
                fill="#8b5cf6"
              />
            )}

            {/* Axis labels */}
            <text x={width - 15} y={centerY - 10} fill="#6b7280" fontSize="12">x</text>
            <text x={centerX + 10} y={15} fill="#6b7280" fontSize="12">y</text>
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              a = {a.toFixed(1)} {a > 0 ? '(opens up)' : a < 0 ? '(opens down)' : ''}
            </label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={a}
              onChange={(e) => setA(Number(e.target.value) || 0.1)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">b = {b.toFixed(1)}</label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.5"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">c = {c.toFixed(1)}</label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.5"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-amber-400">Vertex:</span> ({h.toFixed(2)}, {k.toFixed(2)})
            </div>
            <div className="text-dark-200">
              <span className="text-purple-400">Y-intercept:</span> (0, {c})
            </div>
            <div className="text-dark-200">
              <span className="text-blue-400">Discriminant:</span> b² - 4ac = {discriminant.toFixed(2)}
            </div>
            <div className="text-dark-200">
              <span className="text-emerald-400">X-intercepts:</span>{' '}
              {discriminant > 0
                ? `(${x1!.toFixed(2)}, 0) and (${x2!.toFixed(2)}, 0)`
                : discriminant === 0
                ? `(${x1!.toFixed(2)}, 0) - repeated`
                : 'None (discriminant < 0)'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
