import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

interface Vector {
  x: number;
  y: number;
}

const PRESETS = [
  { name: 'Identity', a: 1, b: 0, c: 0, d: 1 },
  { name: 'Scale 2×', a: 2, b: 0, c: 0, d: 2 },
  { name: 'Rotate 90°', a: 0, b: -1, c: 1, d: 0 },
  { name: 'Shear X', a: 1, b: 1, c: 0, d: 1 },
  { name: 'Reflection', a: 1, b: 0, c: 0, d: -1 },
  { name: 'Singular', a: 1, b: 2, c: 2, d: 4 },
];

export function DeterminantVisualizer({ className = '' }: Props) {
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [c, setC] = useState(0);
  const [d, setD] = useState(1.5);

  const determinant = useMemo(() => a * d - b * c, [a, b, c, d]);

  // Transformed basis vectors
  const e1 = useMemo(() => ({ x: a, y: c }), [a, c]);
  const e2 = useMemo(() => ({ x: b, y: d }), [b, d]);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 50;

  const toSvg = (v: Vector) => ({
    x: origin.x + v.x * scale,
    y: origin.y - v.y * scale,
  });

  // Unit square corners
  const unitSquare = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 1 },
  ];

  // Transformed parallelogram
  const transformed = unitSquare.map((p) => ({
    x: a * p.x + b * p.y,
    y: c * p.x + d * p.y,
  }));

  const detColor = determinant > 0 ? '#10b981' : determinant < 0 ? '#ef4444' : '#f59e0b';
  const detStatus = determinant > 0 ? 'positive' : determinant < 0 ? 'negative' : 'zero';

  const applyPreset = (preset: typeof PRESETS[0]) => {
    setA(preset.a);
    setB(preset.b);
    setC(preset.c);
    setD(preset.d);
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Determinant & Area</h3>

      <p className="text-dark-300 mb-6">
        The determinant measures how a matrix <span className="text-blue-400">scales area</span>.
        A <span className="text-emerald-400">positive</span> determinant preserves orientation,
        <span className="text-red-400"> negative</span> flips it, and{' '}
        <span className="text-yellow-400">zero</span> means the transformation is singular.
      </p>

      {/* Presets */}
      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            onClick={() => applyPreset(preset)}
            className="px-3 py-1.5 rounded-lg text-sm font-medium bg-dark-700 text-dark-300 hover:bg-dark-600 transition-colors"
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Matrix controls */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <div className="text-center mb-2 text-dark-400 text-sm">Matrix A</div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-dark-400 text-xs">a = {a}</label>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={a}
                onChange={(e) => setA(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-xs">b = {b}</label>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={b}
                onChange={(e) => setB(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-xs">c = {c}</label>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={c}
                onChange={(e) => setC(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="text-dark-400 text-xs">d = {d}</label>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={d}
                onChange={(e) => setD(parseFloat(e.target.value))}
                className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
          <div className="mt-3 text-center font-mono text-dark-200">
            A = [{a}, {b}; {c}, {d}]
          </div>
        </div>

        <motion.div
          className="p-4 rounded-xl text-center flex flex-col justify-center"
          style={{
            backgroundColor: `${detColor}15`,
            borderColor: detColor,
            borderWidth: 1,
          }}
          animate={{ borderColor: detColor }}
        >
          <p className="text-dark-400 text-xs mb-1">Determinant</p>
          <motion.p
            className="text-3xl font-bold font-mono"
            style={{ color: detColor }}
            key={determinant}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
          >
            {determinant.toFixed(2)}
          </motion.p>
          <p className="text-xs mt-1 capitalize" style={{ color: detColor }}>{detStatus}</p>
          {Math.abs(determinant) < 0.01 && (
            <p className="text-yellow-400 text-xs mt-2">⚠️ Singular matrix</p>
          )}
        </motion.div>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
            <g key={i}>
              <line
                x1={toSvg({ x: i, y: -4 }).x}
                y1={toSvg({ x: i, y: -4 }).y}
                x2={toSvg({ x: i, y: 4 }).x}
                y2={toSvg({ x: i, y: 4 }).y}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={toSvg({ x: -4, y: i }).x}
                y1={toSvg({ x: -4, y: i }).y}
                x2={toSvg({ x: 4, y: i }).x}
                y2={toSvg({ x: 4, y: i }).y}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Original unit square */}
          <polygon
            points={unitSquare.map((p) => `${toSvg(p).x},${toSvg(p).y}`).join(' ')}
            fill="#6366f120"
            stroke="#6366f1"
            strokeWidth={2}
            strokeDasharray="4"
          />

          {/* Transformed parallelogram */}
          <motion.polygon
            points={transformed.map((p) => `${toSvg(p).x},${toSvg(p).y}`).join(' ')}
            fill={`${detColor}30`}
            stroke={detColor}
            strokeWidth={2}
            initial={false}
            animate={{
              points: transformed.map((p) => `${toSvg(p).x},${toSvg(p).y}`).join(' '),
            }}
          />

          {/* Basis vectors */}
          {/* e1 transformed */}
          <motion.line
            x1={origin.x}
            y1={origin.y}
            x2={toSvg(e1).x}
            y2={toSvg(e1).y}
            stroke="#ef4444"
            strokeWidth={3}
            markerEnd="url(#arrowRed)"
          />
          {/* e2 transformed */}
          <motion.line
            x1={origin.x}
            y1={origin.y}
            x2={toSvg(e2).x}
            y2={toSvg(e2).y}
            stroke="#3b82f6"
            strokeWidth={3}
            markerEnd="url(#arrowBlue)"
          />

          {/* Arrow markers */}
          <defs>
            <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
            </marker>
            <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
            </marker>
          </defs>

          {/* Labels */}
          <text x={toSvg(e1).x + 5} y={toSvg(e1).y - 5} fill="#ef4444" fontSize="12" fontWeight="bold">Ae₁</text>
          <text x={toSvg(e2).x + 5} y={toSvg(e2).y - 5} fill="#3b82f6" fontSize="12" fontWeight="bold">Ae₂</text>
          <text x={origin.x + 30} y={origin.y - 20} fill="#6366f1" fontSize="10">Area = 1</text>
        </svg>
      </div>

      {/* Formula */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600 text-center">
        <p className="text-dark-300 font-mono text-sm">
          det(A) = ad - bc = ({a})({d}) - ({b})({c}) ={' '}
          <span style={{ color: detColor }}>{determinant.toFixed(2)}</span>
        </p>
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600"
      >
        <p className="text-dark-300 text-sm">
          The <strong style={{ color: detColor }}>determinant</strong> equals the signed area of the
          parallelogram formed by the transformed basis vectors. |det(A)| = area scaling factor.
          {determinant < 0 && ' The negative sign indicates the transformation flips orientation.'}
          {Math.abs(determinant) < 0.01 && ' Zero determinant means the matrix collapses 2D to 1D (or less).'}
        </p>
      </motion.div>
    </div>
  );
}
