import { useState } from 'react';

export function ScalingVisualizer() {
  const [scale, setScale] = useState(2);
  const [shape, setShape] = useState<'square' | 'circle' | 'cube'>('square');

  const baseSize = 40;
  const scaledSize = baseSize * scale;

  // Calculate ratios for scaling
  const areaRatio = scale ** 2;
  const volumeRatio = scale ** 3;

  // SVG dimensions
  const width = 400;
  const height = 250;

  // Position shapes
  const baseX = 80;
  const scaledX = 250;
  const centerY = height / 2;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Area & Volume Scaling Explorer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Base shape */}
            {shape === 'square' && (
              <rect
                x={baseX - baseSize / 2}
                y={centerY - baseSize / 2}
                width={baseSize}
                height={baseSize}
                fill="rgba(59, 130, 246, 0.5)"
                stroke="#3b82f6"
                strokeWidth="2"
              />
            )}
            {shape === 'circle' && (
              <circle
                cx={baseX}
                cy={centerY}
                r={baseSize / 2}
                fill="rgba(59, 130, 246, 0.5)"
                stroke="#3b82f6"
                strokeWidth="2"
              />
            )}
            {shape === 'cube' && (
              <g>
                {/* Front face */}
                <rect
                  x={baseX - baseSize / 2}
                  y={centerY - baseSize / 2 + 10}
                  width={baseSize}
                  height={baseSize}
                  fill="rgba(59, 130, 246, 0.5)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                {/* Top face */}
                <polygon
                  points={`
                    ${baseX - baseSize / 2},${centerY - baseSize / 2 + 10}
                    ${baseX - baseSize / 2 + 15},${centerY - baseSize / 2 - 5}
                    ${baseX + baseSize / 2 + 15},${centerY - baseSize / 2 - 5}
                    ${baseX + baseSize / 2},${centerY - baseSize / 2 + 10}
                  `}
                  fill="rgba(59, 130, 246, 0.3)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                {/* Right face */}
                <polygon
                  points={`
                    ${baseX + baseSize / 2},${centerY - baseSize / 2 + 10}
                    ${baseX + baseSize / 2 + 15},${centerY - baseSize / 2 - 5}
                    ${baseX + baseSize / 2 + 15},${centerY + baseSize / 2 - 5}
                    ${baseX + baseSize / 2},${centerY + baseSize / 2 + 10}
                  `}
                  fill="rgba(59, 130, 246, 0.4)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
              </g>
            )}

            {/* Scaled shape */}
            {shape === 'square' && (
              <rect
                x={scaledX - Math.min(scaledSize, 120) / 2}
                y={centerY - Math.min(scaledSize, 120) / 2}
                width={Math.min(scaledSize, 120)}
                height={Math.min(scaledSize, 120)}
                fill="rgba(16, 185, 129, 0.5)"
                stroke="#10b981"
                strokeWidth="2"
              />
            )}
            {shape === 'circle' && (
              <circle
                cx={scaledX}
                cy={centerY}
                r={Math.min(scaledSize, 120) / 2}
                fill="rgba(16, 185, 129, 0.5)"
                stroke="#10b981"
                strokeWidth="2"
              />
            )}
            {shape === 'cube' && (
              <g>
                {/* Front face */}
                <rect
                  x={scaledX - Math.min(scaledSize, 80) / 2}
                  y={centerY - Math.min(scaledSize, 80) / 2 + 15}
                  width={Math.min(scaledSize, 80)}
                  height={Math.min(scaledSize, 80)}
                  fill="rgba(16, 185, 129, 0.5)"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                {/* Top face */}
                <polygon
                  points={`
                    ${scaledX - Math.min(scaledSize, 80) / 2},${centerY - Math.min(scaledSize, 80) / 2 + 15}
                    ${scaledX - Math.min(scaledSize, 80) / 2 + 25},${centerY - Math.min(scaledSize, 80) / 2 - 10}
                    ${scaledX + Math.min(scaledSize, 80) / 2 + 25},${centerY - Math.min(scaledSize, 80) / 2 - 10}
                    ${scaledX + Math.min(scaledSize, 80) / 2},${centerY - Math.min(scaledSize, 80) / 2 + 15}
                  `}
                  fill="rgba(16, 185, 129, 0.3)"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                {/* Right face */}
                <polygon
                  points={`
                    ${scaledX + Math.min(scaledSize, 80) / 2},${centerY - Math.min(scaledSize, 80) / 2 + 15}
                    ${scaledX + Math.min(scaledSize, 80) / 2 + 25},${centerY - Math.min(scaledSize, 80) / 2 - 10}
                    ${scaledX + Math.min(scaledSize, 80) / 2 + 25},${centerY + Math.min(scaledSize, 80) / 2 - 10}
                    ${scaledX + Math.min(scaledSize, 80) / 2},${centerY + Math.min(scaledSize, 80) / 2 + 15}
                  `}
                  fill="rgba(16, 185, 129, 0.4)"
                  stroke="#10b981"
                  strokeWidth="2"
                />
              </g>
            )}

            {/* Labels */}
            <text x={baseX} y={height - 20} fill="#3b82f6" fontSize="12" textAnchor="middle">
              Original
            </text>
            <text x={scaledX + 20} y={height - 20} fill="#10b981" fontSize="12" textAnchor="middle">
              Scaled ×{scale}
            </text>

            {/* Arrow */}
            <line x1={baseX + 50} y1={centerY} x2={scaledX - 70} y2={centerY} stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrowhead)" />
            <text x={(baseX + scaledX) / 2 - 10} y={centerY - 10} fill="#6b7280" fontSize="11" textAnchor="middle">
              ×{scale}
            </text>

            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
              </marker>
            </defs>
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">Shape:</label>
            <div className="flex gap-2">
              {(['square', 'circle', 'cube'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setShape(s)}
                  className={`px-3 py-1 rounded text-sm capitalize ${
                    shape === s ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Scale Factor (m): {scale}
            </label>
            <input
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-3 text-sm">
            <div className="text-dark-200">
              <span className="text-primary-400 font-semibold">Scaling Factor:</span> m = {scale}
            </div>

            <div className="border-t border-dark-600 pt-2">
              <div className="text-dark-200">
                <span className="text-amber-400">Area scales by m²:</span>
              </div>
              <div className="text-dark-300 ml-4">
                {scale}² = <span className="text-amber-400 font-semibold">{areaRatio.toFixed(2)}×</span>
              </div>
            </div>

            {shape === 'cube' && (
              <div className="border-t border-dark-600 pt-2">
                <div className="text-dark-200">
                  <span className="text-emerald-400">Volume scales by m³:</span>
                </div>
                <div className="text-dark-300 ml-4">
                  {scale}³ = <span className="text-emerald-400 font-semibold">{volumeRatio.toFixed(2)}×</span>
                </div>
              </div>
            )}

            <div className="border-t border-dark-600 pt-2 text-dark-400 text-xs">
              {shape === 'cube'
                ? 'A pot 2× as tall holds 8× as much water!'
                : 'A 15" pizza has 2.25× the area of a 10" pizza!'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
