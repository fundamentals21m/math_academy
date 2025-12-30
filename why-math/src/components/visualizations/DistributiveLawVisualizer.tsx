import { useState } from 'react';

export function DistributiveLawVisualizer() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [c, setC] = useState(2);

  const totalArea = a * (b + c);
  const area1 = a * b;
  const area2 = a * c;

  // SVG dimensions
  const width = 400;
  const height = 220;
  const scale = 25;
  const startX = 50;
  const startY = 40;

  const rectWidth1 = b * scale;
  const rectWidth2 = c * scale;
  const rectHeight = a * scale;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Distributive Law Visualizer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* First rectangle (a × b) */}
            <rect
              x={startX}
              y={startY}
              width={rectWidth1}
              height={rectHeight}
              fill="rgba(59, 130, 246, 0.4)"
              stroke="#3b82f6"
              strokeWidth="2"
            />

            {/* Second rectangle (a × c) */}
            <rect
              x={startX + rectWidth1}
              y={startY}
              width={rectWidth2}
              height={rectHeight}
              fill="rgba(16, 185, 129, 0.4)"
              stroke="#10b981"
              strokeWidth="2"
            />

            {/* Dimension labels - top */}
            <text x={startX + rectWidth1 / 2} y={startY - 10} fill="#3b82f6" fontSize="14" textAnchor="middle" fontWeight="bold">
              b = {b}
            </text>
            <text x={startX + rectWidth1 + rectWidth2 / 2} y={startY - 10} fill="#10b981" fontSize="14" textAnchor="middle" fontWeight="bold">
              c = {c}
            </text>

            {/* Dimension label - side */}
            <text x={startX - 10} y={startY + rectHeight / 2} fill="#f59e0b" fontSize="14" textAnchor="end" dominantBaseline="middle" fontWeight="bold">
              a = {a}
            </text>

            {/* Total width bracket */}
            <line x1={startX} y1={startY + rectHeight + 15} x2={startX + rectWidth1 + rectWidth2} y2={startY + rectHeight + 15} stroke="#6b7280" strokeWidth="1" />
            <line x1={startX} y1={startY + rectHeight + 10} x2={startX} y2={startY + rectHeight + 20} stroke="#6b7280" strokeWidth="1" />
            <line x1={startX + rectWidth1 + rectWidth2} y1={startY + rectHeight + 10} x2={startX + rectWidth1 + rectWidth2} y2={startY + rectHeight + 20} stroke="#6b7280" strokeWidth="1" />
            <text x={startX + (rectWidth1 + rectWidth2) / 2} y={startY + rectHeight + 35} fill="#6b7280" fontSize="12" textAnchor="middle">
              b + c = {b + c}
            </text>

            {/* Area labels inside rectangles */}
            <text x={startX + rectWidth1 / 2} y={startY + rectHeight / 2} fill="#3b82f6" fontSize="16" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">
              {area1}
            </text>
            <text x={startX + rectWidth1 + rectWidth2 / 2} y={startY + rectHeight / 2} fill="#10b981" fontSize="16" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">
              {area2}
            </text>

            {/* Equation at bottom */}
            <text x={width / 2} y={height - 20} fill="#e5e7eb" fontSize="13" textAnchor="middle">
              {a} × ({b} + {c}) = {a} × {b} + {a} × {c}
            </text>
            <text x={width / 2} y={height - 5} fill="#f59e0b" fontSize="13" textAnchor="middle" fontWeight="bold">
              {totalArea} = {area1} + {area2}
            </text>
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              a (height): {a}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              b (first width): {b}
            </label>
            <input
              type="range"
              min="1"
              max="6"
              step="1"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              c (second width): {c}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-amber-400">Distributive Law:</span>
            </div>
            <div className="text-dark-200 font-mono">
              a × (b + c) = a × b + a × c
            </div>
            <div className="border-t border-dark-600 pt-2 text-dark-200">
              <span className="text-blue-400">Blue area:</span> {a} × {b} = {area1}
            </div>
            <div className="text-dark-200">
              <span className="text-emerald-400">Green area:</span> {a} × {c} = {area2}
            </div>
            <div className="text-dark-200 font-semibold">
              <span className="text-amber-400">Total:</span> {area1} + {area2} = {totalArea}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
