import { useState } from 'react';

interface Props {
  className?: string;
}

export function UnitCircleTrig({ className = '' }: Props) {
  const [angle, setAngle] = useState(45); // degrees
  const [showComponents, setShowComponents] = useState(true);
  const [showArc, setShowArc] = useState(true);

  const angleRad = (angle * Math.PI) / 180;
  const cosValue = Math.cos(angleRad);
  const sinValue = Math.sin(angleRad);
  const tanValue = Math.tan(angleRad);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const cx = 200;
  const cy = 200;
  const radius = 150;

  // Point on circle
  const px = cx + radius * cosValue;
  const py = cy - radius * sinValue;

  // Arc path
  const largeArc = angle > 180 ? 1 : 0;
  const arcPath = `M ${cx + radius} ${cy} A ${radius} ${radius} 0 ${largeArc} 0 ${px} ${py}`;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Unit Circle and Trigonometric Functions</h3>

      <p className="text-dark-300 mb-6">
        On the unit circle, <span className="text-blue-400">cos(θ)</span> is the x-coordinate and{' '}
        <span className="text-emerald-400">sin(θ)</span> is the y-coordinate of the point at angle θ.
      </p>

      {/* Angle control */}
      <div className="mb-4">
        <label className="text-orange-400 text-sm">Angle θ = {angle}° = {(angleRad).toFixed(3)} rad</label>
        <input
          type="range"
          min="0"
          max="360"
          step="5"
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
      </div>

      {/* Toggle buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowComponents(!showComponents)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showComponents ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Show Components
        </button>
        <button
          onClick={() => setShowArc(!showArc)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showArc ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Show Arc
        </button>
      </div>

      {/* Quick angle buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[0, 30, 45, 60, 90, 120, 135, 150, 180, 270, 360].map((a) => (
          <button
            key={a}
            onClick={() => setAngle(a)}
            className={`px-2 py-1 rounded text-xs font-mono ${
              angle === a ? 'bg-orange-500 text-white' : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {a}°
          </button>
        ))}
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          <line x1={0} y1={cy} x2={width} y2={cy} stroke="#4b5563" strokeWidth={1} />
          <line x1={cx} y1={0} x2={cx} y2={height} stroke="#4b5563" strokeWidth={1} />

          {/* Unit circle */}
          <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#6b7280" strokeWidth={2} />

          {/* Arc showing angle */}
          {showArc && angle > 0 && (
            <path d={arcPath} fill="none" stroke="#f97316" strokeWidth={3} />
          )}

          {/* Radius line */}
          <line x1={cx} y1={cy} x2={px} y2={py} stroke="#f97316" strokeWidth={2} />

          {/* Components */}
          {showComponents && (
            <>
              {/* Cos (horizontal) */}
              <line x1={cx} y1={cy} x2={px} y2={cy} stroke="#3b82f6" strokeWidth={3} />
              {/* Sin (vertical) */}
              <line x1={px} y1={cy} x2={px} y2={py} stroke="#10b981" strokeWidth={3} />
              {/* Dashed projection lines */}
              <line x1={px} y1={py} x2={px} y2={cy} stroke="#10b981" strokeWidth={1} strokeDasharray="4 4" opacity={0.5} />
              <line x1={px} y1={py} x2={cx} y2={py} stroke="#3b82f6" strokeWidth={1} strokeDasharray="4 4" opacity={0.5} />
            </>
          )}

          {/* Point on circle */}
          <circle cx={px} cy={py} r={8} fill="#f97316" />

          {/* Angle arc */}
          {angle > 0 && angle < 90 && (
            <path
              d={`M ${cx + 30} ${cy} A 30 30 0 0 0 ${cx + 30 * cosValue} ${cy - 30 * sinValue}`}
              fill="none"
              stroke="#f97316"
              strokeWidth={2}
            />
          )}

          {/* Labels */}
          <text x={cx + radius + 10} y={cy + 4} fill="#6b7280" fontSize="12">1</text>
          <text x={cx - 10} y={cy - radius - 5} fill="#6b7280" fontSize="12">1</text>
          <text x={cx - radius - 15} y={cy + 4} fill="#6b7280" fontSize="12">-1</text>
          <text x={cx - 10} y={cy + radius + 15} fill="#6b7280" fontSize="12">-1</text>

          {/* Coordinates label */}
          <text x={px + 10} y={py - 10} fill="#f97316" fontSize="12" fontWeight="bold">
            ({cosValue.toFixed(2)}, {sinValue.toFixed(2)})
          </text>

          {/* θ label */}
          {angle > 0 && angle < 90 && (
            <text x={cx + 40} y={cy - 10} fill="#f97316" fontSize="14">θ</text>
          )}
        </svg>
      </div>

      {/* Values */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Cosine</p>
          <p className="text-blue-400 font-mono text-lg">cos({angle}°) = {cosValue.toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Sine</p>
          <p className="text-emerald-400 font-mono text-lg">sin({angle}°) = {sinValue.toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Tangent</p>
          <p className="text-orange-400 font-mono text-lg">
            tan({angle}°) = {Math.abs(tanValue) > 1000 ? '∞' : tanValue.toFixed(4)}
          </p>
        </div>
      </div>

      {/* Key identity */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-100 font-medium">Pythagorean Identity:</p>
        <p className="text-dark-300 font-mono mt-1">
          cos²(θ) + sin²(θ) = {cosValue.toFixed(3)}² + {sinValue.toFixed(3)}² = {(cosValue * cosValue + sinValue * sinValue).toFixed(4)} = 1
        </p>
      </div>
    </div>
  );
}
