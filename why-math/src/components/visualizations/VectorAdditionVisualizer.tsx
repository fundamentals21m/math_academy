import { useState } from 'react';

export function VectorAdditionVisualizer() {
  const [v1Mag, setV1Mag] = useState(4);
  const [v1Angle, setV1Angle] = useState(0);
  const [v2Mag, setV2Mag] = useState(3);
  const [v2Angle, setV2Angle] = useState(90);
  const [showComponents, setShowComponents] = useState(true);

  // Convert to radians
  const v1Rad = (v1Angle * Math.PI) / 180;
  const v2Rad = (v2Angle * Math.PI) / 180;

  // Vector components
  const v1x = v1Mag * Math.cos(v1Rad);
  const v1y = v1Mag * Math.sin(v1Rad);
  const v2x = v2Mag * Math.cos(v2Rad);
  const v2y = v2Mag * Math.sin(v2Rad);

  // Resultant
  const rx = v1x + v2x;
  const ry = v1y + v2y;
  const rMag = Math.sqrt(rx * rx + ry * ry);
  const rAngle = (Math.atan2(ry, rx) * 180) / Math.PI;

  // SVG dimensions
  const width = 380;
  const height = 280;
  const centerX = width / 2;
  const centerY = height / 2 + 20;
  const scale = 25;

  // Convert math coords to SVG
  const toSvgX = (x: number) => centerX + x * scale;
  const toSvgY = (y: number) => centerY - y * scale;

  // Arrow marker
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const drawArrow = (x1: number, y1: number, x2: number, y2: number, color: string, _id: string) => {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const headLen = 10;
    const headAngle = Math.PI / 6;

    return (
      <g>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" />
        <polygon
          points={`
            ${x2},${y2}
            ${x2 - headLen * Math.cos(angle - headAngle)},${y2 - headLen * Math.sin(angle - headAngle)}
            ${x2 - headLen * Math.cos(angle + headAngle)},${y2 - headLen * Math.sin(angle + headAngle)}
          `}
          fill={color}
        />
      </g>
    );
  };

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Vector Addition Explorer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Grid */}
            {Array.from({ length: 13 }, (_, i) => i - 6).map((n) => (
              <g key={n}>
                <line
                  x1={toSvgX(n)}
                  y1={20}
                  x2={toSvgX(n)}
                  y2={height - 20}
                  stroke={n === 0 ? '#4b5563' : '#374151'}
                  strokeWidth={n === 0 ? 1.5 : 0.5}
                />
                <line
                  x1={40}
                  y1={toSvgY(n)}
                  x2={width - 20}
                  y2={toSvgY(n)}
                  stroke={n === 0 ? '#4b5563' : '#374151'}
                  strokeWidth={n === 0 ? 1.5 : 0.5}
                />
              </g>
            ))}

            {/* Component lines (dashed) */}
            {showComponents && (
              <>
                {/* V1 components */}
                <line
                  x1={toSvgX(0)}
                  y1={toSvgY(0)}
                  x2={toSvgX(v1x)}
                  y2={toSvgY(0)}
                  stroke="#3b82f6"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity="0.5"
                />
                <line
                  x1={toSvgX(v1x)}
                  y1={toSvgY(0)}
                  x2={toSvgX(v1x)}
                  y2={toSvgY(v1y)}
                  stroke="#3b82f6"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity="0.5"
                />
                {/* V2 at tip of V1 */}
                <line
                  x1={toSvgX(v1x)}
                  y1={toSvgY(v1y)}
                  x2={toSvgX(v1x + v2x)}
                  y2={toSvgY(v1y)}
                  stroke="#10b981"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity="0.5"
                />
                <line
                  x1={toSvgX(v1x + v2x)}
                  y1={toSvgY(v1y)}
                  x2={toSvgX(rx)}
                  y2={toSvgY(ry)}
                  stroke="#10b981"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity="0.5"
                />
              </>
            )}

            {/* Vector 1 (from origin) */}
            {drawArrow(toSvgX(0), toSvgY(0), toSvgX(v1x), toSvgY(v1y), '#3b82f6', 'v1')}

            {/* Vector 2 (from tip of v1) */}
            {drawArrow(toSvgX(v1x), toSvgY(v1y), toSvgX(rx), toSvgY(ry), '#10b981', 'v2')}

            {/* Resultant (from origin to tip) */}
            {drawArrow(toSvgX(0), toSvgY(0), toSvgX(rx), toSvgY(ry), '#f59e0b', 'r')}

            {/* Labels */}
            <text x={toSvgX(v1x / 2) - 10} y={toSvgY(v1y / 2) - 10} fill="#3b82f6" fontSize="12" fontWeight="bold">
              v₁
            </text>
            <text x={toSvgX(v1x + v2x / 2) + 10} y={toSvgY(v1y + v2y / 2)} fill="#10b981" fontSize="12" fontWeight="bold">
              v₂
            </text>
            <text x={toSvgX(rx / 2) + 5} y={toSvgY(ry / 2) + 15} fill="#f59e0b" fontSize="12" fontWeight="bold">
              R
            </text>

            {/* Legend */}
            <text x={20} y={25} fill="#3b82f6" fontSize="11">v₁: {v1Mag} @ {v1Angle}°</text>
            <text x={20} y={40} fill="#10b981" fontSize="11">v₂: {v2Mag} @ {v2Angle}°</text>
            <text x={20} y={55} fill="#f59e0b" fontSize="11">R: {rMag.toFixed(2)} @ {rAngle.toFixed(1)}°</text>
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Vector 1 magnitude: {v1Mag}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={v1Mag}
              onChange={(e) => setV1Mag(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Vector 1 angle: {v1Angle}°
            </label>
            <input
              type="range"
              min="0"
              max="360"
              step="15"
              value={v1Angle}
              onChange={(e) => setV1Angle(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Vector 2 magnitude: {v2Mag}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={v2Mag}
              onChange={(e) => setV2Mag(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Vector 2 angle: {v2Angle}°
            </label>
            <input
              type="range"
              min="0"
              max="360"
              step="15"
              value={v2Angle}
              onChange={(e) => setV2Angle(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowComponents(!showComponents)}
              className={`px-3 py-1 rounded text-sm ${showComponents ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              {showComponents ? 'Hide' : 'Show'} Components
            </button>
            <button
              onClick={() => { setV1Mag(4); setV1Angle(0); setV2Mag(3); setV2Angle(90); }}
              className="px-3 py-1 rounded text-sm bg-dark-700 text-dark-300"
            >
              3-4-5 Triangle
            </button>
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-blue-400">v₁:</span> ({v1x.toFixed(2)}, {v1y.toFixed(2)})
            </div>
            <div className="text-dark-200">
              <span className="text-emerald-400">v₂:</span> ({v2x.toFixed(2)}, {v2y.toFixed(2)})
            </div>
            <div className="border-t border-dark-600 pt-2 text-dark-200">
              <span className="text-amber-400">Resultant R:</span> ({rx.toFixed(2)}, {ry.toFixed(2)})
            </div>
            <div className="text-dark-200">
              <span className="text-amber-400">|R|:</span> {rMag.toFixed(2)} at {rAngle.toFixed(1)}°
            </div>
            <div className="text-dark-400 text-xs">
              |R|² = {v1Mag}² + {v2Mag}² + 2({v1Mag})({v2Mag})cos({Math.abs(v2Angle - v1Angle)}°)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
