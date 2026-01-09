import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type ProofType = 'squares' | 'rearrangement' | 'similar';

export function PythagoreanTheoremDemo({ className = '' }: Props) {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [proofType, setProofType] = useState<ProofType>('squares');
  const [showLabels, setShowLabels] = useState(true);

  const c = Math.sqrt(a * a + b * b);
  const aSquared = a * a;
  const bSquared = b * b;
  const cSquared = c * c;

  // SVG dimensions
  const width = 400;
  const height = 350;
  const scale = 25;
  const offsetX = 50;
  const offsetY = 280;

  const toSvgX = (x: number) => offsetX + x * scale;
  const toSvgY = (y: number) => offsetY - y * scale;

  // Triangle vertices
  const A = { x: 0, y: 0 };
  const B = { x: a, y: 0 };
  const C = { x: 0, y: b };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Pythagorean Theorem</h3>

      <p className="text-dark-300 mb-6">
        In a right triangle with legs <span className="text-blue-400">a</span> and{' '}
        <span className="text-emerald-400">b</span> and hypotenuse{' '}
        <span className="text-orange-400">c</span>:{' '}
        <span className="font-mono">a² + b² = c²</span>
      </p>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-blue-400 text-sm">Side a = {a}</label>
          <input
            type="range"
            min="1"
            max="6"
            step="0.5"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-emerald-400 text-sm">Side b = {b}</label>
          <input
            type="range"
            min="1"
            max="6"
            step="0.5"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Proof type selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { type: 'squares' as const, label: 'Area of Squares' },
          { type: 'rearrangement' as const, label: 'Rearrangement' },
          { type: 'similar' as const, label: 'Similar Triangles' },
        ].map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setProofType(type)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              proofType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Visualization */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          <defs>
            <pattern id="grid" width={scale} height={scale} patternUnits="userSpaceOnUse">
              <path d={`M ${scale} 0 L 0 0 0 ${scale}`} fill="none" stroke="#374151" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width={width} height={height} fill="url(#grid)" />

          {/* Right triangle */}
          <polygon
            points={`${toSvgX(A.x)},${toSvgY(A.y)} ${toSvgX(B.x)},${toSvgY(B.y)} ${toSvgX(C.x)},${toSvgY(C.y)}`}
            fill="#6366f1"
            fillOpacity={0.3}
            stroke="#6366f1"
            strokeWidth={2}
          />

          {/* Right angle marker */}
          <path
            d={`M ${toSvgX(0.5)} ${toSvgY(0)} L ${toSvgX(0.5)} ${toSvgY(0.5)} L ${toSvgX(0)} ${toSvgY(0.5)}`}
            fill="none"
            stroke="#a78bfa"
            strokeWidth={1.5}
          />

          {proofType === 'squares' && (
            <>
              {/* Square on side a (bottom) */}
              <rect
                x={toSvgX(0)}
                y={toSvgY(0)}
                width={a * scale}
                height={a * scale}
                fill="#3b82f6"
                fillOpacity={0.2}
                stroke="#3b82f6"
                strokeWidth={2}
              />
              {showLabels && (
                <text x={toSvgX(a/2)} y={toSvgY(-a/2)} fill="#3b82f6" fontSize="14" textAnchor="middle" fontWeight="bold">
                  a² = {aSquared.toFixed(1)}
                </text>
              )}

              {/* Square on side b (left) */}
              <rect
                x={toSvgX(-b)}
                y={toSvgY(b)}
                width={b * scale}
                height={b * scale}
                fill="#10b981"
                fillOpacity={0.2}
                stroke="#10b981"
                strokeWidth={2}
              />
              {showLabels && (
                <text x={toSvgX(-b/2)} y={toSvgY(b/2)} fill="#10b981" fontSize="14" textAnchor="middle" fontWeight="bold">
                  b² = {bSquared.toFixed(1)}
                </text>
              )}

              {/* Square on hypotenuse c */}
              <g transform={`rotate(${-Math.atan2(b, a) * 180 / Math.PI} ${toSvgX(a)} ${toSvgY(0)})`}>
                <rect
                  x={toSvgX(a)}
                  y={toSvgY(0) - c * scale}
                  width={c * scale}
                  height={c * scale}
                  fill="#f97316"
                  fillOpacity={0.2}
                  stroke="#f97316"
                  strokeWidth={2}
                />
              </g>
              {showLabels && (
                <text x={toSvgX(a/2 + b/4)} y={toSvgY(b/2 + a/4)} fill="#f97316" fontSize="14" textAnchor="middle" fontWeight="bold">
                  c² = {cSquared.toFixed(1)}
                </text>
              )}
            </>
          )}

          {/* Side labels */}
          {showLabels && (
            <>
              <text x={toSvgX(a/2)} y={toSvgY(-0.3)} fill="#3b82f6" fontSize="12" textAnchor="middle">
                a = {a}
              </text>
              <text x={toSvgX(-0.5)} y={toSvgY(b/2)} fill="#10b981" fontSize="12" textAnchor="end">
                b = {b}
              </text>
              <text x={toSvgX(a/2 + 0.5)} y={toSvgY(b/2 + 0.3)} fill="#f97316" fontSize="12">
                c = {c.toFixed(2)}
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Equation display */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <div className="flex items-center justify-center gap-4 text-xl font-mono">
          <span className="text-blue-400">{aSquared.toFixed(1)}</span>
          <span className="text-dark-400">+</span>
          <span className="text-emerald-400">{bSquared.toFixed(1)}</span>
          <span className="text-dark-400">=</span>
          <span className="text-orange-400">{cSquared.toFixed(1)}</span>
        </div>
        <p className="text-center text-dark-400 text-sm mt-2">
          {aSquared.toFixed(1)} + {bSquared.toFixed(1)} = {(aSquared + bSquared).toFixed(1)} = c²
        </p>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
        <p className="text-emerald-400 font-medium">
          {proofType === 'squares' && 'The area of the square on the hypotenuse equals the sum of the areas of the squares on the legs.'}
          {proofType === 'rearrangement' && 'By rearranging four copies of the triangle, we can show the areas are equal.'}
          {proofType === 'similar' && 'The altitude to the hypotenuse creates two triangles similar to the original.'}
        </p>
      </div>
    </div>
  );
}
