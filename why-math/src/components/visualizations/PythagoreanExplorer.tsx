import { useState } from 'react';

export function PythagoreanExplorer() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);

  const c = Math.sqrt(a * a + b * b);
  const aSquared = a * a;
  const bSquared = b * b;

  // SVG dimensions
  const width = 400;
  const height = 300;
  const padding = 40;
  const scale = 20;

  // Triangle vertices
  const x0 = padding;
  const y0 = height - padding;
  const x1 = x0 + a * scale;
  const y1 = y0;
  const x2 = x0;
  const y2 = y0 - b * scale;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Pythagorean Theorem Explorer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Grid */}
            {Array.from({ length: 21 }, (_, i) => (
              <line
                key={`v${i}`}
                x1={padding + i * scale}
                y1={padding}
                x2={padding + i * scale}
                y2={height - padding}
                stroke="#374151"
                strokeWidth="0.5"
              />
            ))}
            {Array.from({ length: 13 }, (_, i) => (
              <line
                key={`h${i}`}
                x1={padding}
                y1={padding + i * scale}
                x2={width - padding}
                y2={padding + i * scale}
                stroke="#374151"
                strokeWidth="0.5"
              />
            ))}

            {/* Triangle */}
            <polygon
              points={`${x0},${y0} ${x1},${y1} ${x2},${y2}`}
              fill="rgba(59, 130, 246, 0.2)"
              stroke="#3b82f6"
              strokeWidth="2"
            />

            {/* Right angle marker */}
            <path
              d={`M ${x0 + 10} ${y0} L ${x0 + 10} ${y0 - 10} L ${x0} ${y0 - 10}`}
              fill="none"
              stroke="#6b7280"
              strokeWidth="1"
            />

            {/* Side labels */}
            <text x={(x0 + x1) / 2} y={y0 + 20} fill="#3b82f6" textAnchor="middle" fontSize="14">
              a = {a}
            </text>
            <text x={x0 - 20} y={(y0 + y2) / 2} fill="#10b981" textAnchor="middle" fontSize="14">
              b = {b}
            </text>
            <text x={(x0 + x1) / 2 + 15} y={(y0 + y2) / 2 - 10} fill="#f59e0b" textAnchor="middle" fontSize="14">
              c = {c.toFixed(2)}
            </text>

            {/* Squares on sides (scaled down) */}
            <rect
              x={x0}
              y={y0}
              width={a * scale * 0.3}
              height={a * scale * 0.3}
              fill="rgba(59, 130, 246, 0.3)"
              stroke="#3b82f6"
              strokeWidth="1"
            />
            <rect
              x={x0 - b * scale * 0.3}
              y={y2}
              width={b * scale * 0.3}
              height={b * scale * 0.3}
              fill="rgba(16, 185, 129, 0.3)"
              stroke="#10b981"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Side a: {a}
            </label>
            <input
              type="range"
              min="1"
              max="8"
              step="1"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Side b: {b}
            </label>
            <input
              type="range"
              min="1"
              max="8"
              step="1"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2">
            <div className="text-dark-200">
              <span className="text-blue-400">a² = {a}² = {aSquared}</span>
            </div>
            <div className="text-dark-200">
              <span className="text-emerald-400">b² = {b}² = {bSquared}</span>
            </div>
            <div className="text-dark-200">
              <span className="text-amber-400">a² + b² = {aSquared} + {bSquared} = {aSquared + bSquared}</span>
            </div>
            <div className="text-dark-200 font-semibold border-t border-dark-600 pt-2">
              <span className="text-amber-400">c = √{aSquared + bSquared} = {c.toFixed(4)}</span>
            </div>
          </div>

          {/* Check for Pythagorean triple */}
          {Number.isInteger(c) && (
            <div className="bg-emerald-900/30 border border-emerald-500 rounded-lg p-3">
              <span className="text-emerald-400">
                Pythagorean Triple: ({a}, {b}, {c})
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
