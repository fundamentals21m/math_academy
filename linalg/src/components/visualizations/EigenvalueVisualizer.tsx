import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

interface Matrix2x2 {
  a: number;
  b: number;
  c: number;
  d: number;
}

const PRESETS: { name: string; matrix: Matrix2x2; description: string }[] = [
  { name: 'Stretch', matrix: { a: 2, b: 0, c: 0, d: 3 }, description: 'λ = 2, 3 (distinct)' },
  { name: 'Rotation', matrix: { a: 0, b: -1, c: 1, d: 0 }, description: 'λ = ±i (complex)' },
  { name: 'Shear', matrix: { a: 1, b: 1, c: 0, d: 1 }, description: 'λ = 1 (repeated)' },
  { name: 'Reflection', matrix: { a: 0, b: 1, c: 1, d: 0 }, description: 'λ = 1, -1' },
  { name: 'Projection', matrix: { a: 0.5, b: 0.5, c: 0.5, d: 0.5 }, description: 'λ = 0, 1' },
];

export function EigenvalueVisualizer({ className = '' }: Props) {
  const [matrix, setMatrix] = useState<Matrix2x2>({ a: 2, b: 1, c: 1, d: 2 });
  const [angle, setAngle] = useState(0); // Angle in degrees
  const [showAllVectors, setShowAllVectors] = useState(false);

  // Calculate eigenvalues and eigenvectors
  const eigen = useMemo(() => {
    const { a, b, c, d } = matrix;

    // Characteristic polynomial: λ² - (a+d)λ + (ad-bc) = 0
    const trace = a + d;
    const det = a * d - b * c;
    const discriminant = trace * trace - 4 * det;

    if (discriminant < 0) {
      // Complex eigenvalues
      const realPart = trace / 2;
      const imagPart = Math.sqrt(-discriminant) / 2;
      return {
        isComplex: true,
        lambda1: { real: realPart, imag: imagPart },
        lambda2: { real: realPart, imag: -imagPart },
        v1: null,
        v2: null,
      };
    }

    // Real eigenvalues
    const lambda1 = (trace + Math.sqrt(discriminant)) / 2;
    const lambda2 = (trace - Math.sqrt(discriminant)) / 2;

    // Find eigenvectors
    const findEigenvector = (lambda: number) => {
      // (A - λI)v = 0
      // (a-λ)x + by = 0
      // cx + (d-λ)y = 0
      const a1 = a - lambda;
      const b1 = b;

      if (Math.abs(b1) > 0.0001) {
        // x = -b1*y / a1, choose y = 1
        return { x: -b1, y: a1 };
      } else if (Math.abs(a1) > 0.0001) {
        // a1*x = 0, so x = 0
        return { x: 0, y: 1 };
      } else {
        return { x: 1, y: 0 };
      }
    };

    // Normalize eigenvectors
    const normalize = (v: { x: number; y: number }) => {
      const len = Math.sqrt(v.x * v.x + v.y * v.y);
      return len > 0 ? { x: v.x / len, y: v.y / len } : v;
    };

    const v1 = normalize(findEigenvector(lambda1));
    const v2 = normalize(findEigenvector(lambda2));

    return {
      isComplex: false,
      lambda1: { real: lambda1, imag: 0 },
      lambda2: { real: lambda2, imag: 0 },
      v1,
      v2,
    };
  }, [matrix]);

  // Input vector based on angle
  const inputVector = useMemo(() => {
    const rad = (angle * Math.PI) / 180;
    return { x: Math.cos(rad), y: Math.sin(rad) };
  }, [angle]);

  // Transformed vector
  const outputVector = useMemo(() => ({
    x: matrix.a * inputVector.x + matrix.b * inputVector.y,
    y: matrix.c * inputVector.x + matrix.d * inputVector.y,
  }), [matrix, inputVector]);

  // Check if input is along an eigenvector
  const isAlongEigenvector = useMemo(() => {
    if (eigen.isComplex || !eigen.v1 || !eigen.v2) return null;

    const dot1 = Math.abs(inputVector.x * eigen.v1.x + inputVector.y * eigen.v1.y);
    const dot2 = Math.abs(inputVector.x * eigen.v2.x + inputVector.y * eigen.v2.y);

    if (dot1 > 0.99) return { eigenvalue: eigen.lambda1.real, index: 1 };
    if (dot2 > 0.99) return { eigenvalue: eigen.lambda2.real, index: 2 };
    return null;
  }, [inputVector, eigen]);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 80;

  const toSvg = (x: number, y: number) => ({
    x: origin.x + x * scale,
    y: origin.y - y * scale,
  });

  // Draw arrow
  const Arrow = ({ from, to, color, strokeWidth = 2, opacity = 1 }: {
    from: { x: number; y: number };
    to: { x: number; y: number };
    color: string;
    strokeWidth?: number;
    opacity?: number;
  }) => {
    const svgFrom = toSvg(from.x, from.y);
    const svgTo = toSvg(to.x, to.y);
    const dx = svgTo.x - svgFrom.x;
    const dy = svgTo.y - svgFrom.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1) return null;

    const angle = Math.atan2(dy, dx);
    const arrowLen = 8;
    const arrowAngle = 0.4;

    return (
      <g opacity={opacity}>
        <line
          x1={svgFrom.x}
          y1={svgFrom.y}
          x2={svgTo.x}
          y2={svgTo.y}
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <polygon
          points={`
            ${svgTo.x},${svgTo.y}
            ${svgTo.x - arrowLen * Math.cos(angle - arrowAngle)},${svgTo.y - arrowLen * Math.sin(angle - arrowAngle)}
            ${svgTo.x - arrowLen * Math.cos(angle + arrowAngle)},${svgTo.y - arrowLen * Math.sin(angle + arrowAngle)}
          `}
          fill={color}
        />
      </g>
    );
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Eigenvalue Visualizer</h3>

      <p className="text-dark-300 mb-6">
        Eigenvectors only get stretched (not rotated) by the matrix.
        Rotate the input vector to find the eigenvector directions.
      </p>

      {/* Presets */}
      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            onClick={() => setMatrix(preset.matrix)}
            className="px-3 py-1.5 rounded-lg text-sm font-medium bg-dark-700 text-dark-300 hover:bg-dark-600 transition-colors"
            title={preset.description}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Matrix input */}
      <div className="mb-4">
        <h4 className="text-dark-300 text-sm mb-2">Matrix A</h4>
        <div className="flex items-center gap-2">
          <div className="text-2xl text-dark-500">[</div>
          <div className="grid grid-cols-2 gap-1">
            <input
              type="number"
              step="0.5"
              value={matrix.a}
              onChange={(e) => setMatrix({ ...matrix, a: parseFloat(e.target.value) || 0 })}
              className="w-14 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-dark-200 text-center font-mono text-sm"
            />
            <input
              type="number"
              step="0.5"
              value={matrix.b}
              onChange={(e) => setMatrix({ ...matrix, b: parseFloat(e.target.value) || 0 })}
              className="w-14 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-dark-200 text-center font-mono text-sm"
            />
            <input
              type="number"
              step="0.5"
              value={matrix.c}
              onChange={(e) => setMatrix({ ...matrix, c: parseFloat(e.target.value) || 0 })}
              className="w-14 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-dark-200 text-center font-mono text-sm"
            />
            <input
              type="number"
              step="0.5"
              value={matrix.d}
              onChange={(e) => setMatrix({ ...matrix, d: parseFloat(e.target.value) || 0 })}
              className="w-14 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-dark-200 text-center font-mono text-sm"
            />
          </div>
          <div className="text-2xl text-dark-500">]</div>
        </div>
      </div>

      {/* Angle slider */}
      <div className="mb-4">
        <label className="text-dark-300 text-sm">Input Vector Angle: {angle}°</label>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Eigenvalue info */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={`p-3 rounded-xl border ${
          eigen.isComplex ? 'bg-purple-500/10 border-purple-500/30' : 'bg-emerald-500/10 border-emerald-500/30'
        }`}>
          <p className="text-dark-400 text-xs">Eigenvalue λ₁</p>
          <p className={`font-mono ${eigen.isComplex ? 'text-purple-400' : 'text-emerald-400'}`}>
            {eigen.isComplex
              ? `${eigen.lambda1.real.toFixed(2)} + ${eigen.lambda1.imag.toFixed(2)}i`
              : eigen.lambda1.real.toFixed(2)}
          </p>
        </div>
        <div className={`p-3 rounded-xl border ${
          eigen.isComplex ? 'bg-purple-500/10 border-purple-500/30' : 'bg-orange-500/10 border-orange-500/30'
        }`}>
          <p className="text-dark-400 text-xs">Eigenvalue λ₂</p>
          <p className={`font-mono ${eigen.isComplex ? 'text-purple-400' : 'text-orange-400'}`}>
            {eigen.isComplex
              ? `${eigen.lambda2.real.toFixed(2)} - ${eigen.lambda1.imag.toFixed(2)}i`
              : eigen.lambda2.real.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-2, -1, 0, 1, 2].map((i) => (
            <g key={i}>
              <line
                x1={toSvg(i, -2).x} y1={toSvg(i, -2).y}
                x2={toSvg(i, 2).x} y2={toSvg(i, 2).y}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={toSvg(-2, i).x} y1={toSvg(-2, i).y}
                x2={toSvg(2, i).x} y2={toSvg(2, i).y}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Eigenvector lines (extended) */}
          {!eigen.isComplex && eigen.v1 && eigen.v2 && (
            <>
              <line
                x1={toSvg(-3 * eigen.v1.x, -3 * eigen.v1.y).x}
                y1={toSvg(-3 * eigen.v1.x, -3 * eigen.v1.y).y}
                x2={toSvg(3 * eigen.v1.x, 3 * eigen.v1.y).x}
                y2={toSvg(3 * eigen.v1.x, 3 * eigen.v1.y).y}
                stroke="#10b981"
                strokeWidth={2}
                strokeDasharray="5 5"
                opacity={0.5}
              />
              <line
                x1={toSvg(-3 * eigen.v2.x, -3 * eigen.v2.y).x}
                y1={toSvg(-3 * eigen.v2.x, -3 * eigen.v2.y).y}
                x2={toSvg(3 * eigen.v2.x, 3 * eigen.v2.y).x}
                y2={toSvg(3 * eigen.v2.x, 3 * eigen.v2.y).y}
                stroke="#f97316"
                strokeWidth={2}
                strokeDasharray="5 5"
                opacity={0.5}
              />
            </>
          )}

          {/* Input vector (blue) */}
          <Arrow
            from={{ x: 0, y: 0 }}
            to={inputVector}
            color="#3b82f6"
            strokeWidth={3}
          />

          {/* Output vector (red) */}
          <Arrow
            from={{ x: 0, y: 0 }}
            to={outputVector}
            color="#ef4444"
            strokeWidth={3}
          />

          {/* Labels */}
          <text
            x={toSvg(inputVector.x, inputVector.y).x + 10}
            y={toSvg(inputVector.x, inputVector.y).y}
            fill="#3b82f6"
            fontSize="14"
            fontWeight="bold"
          >
            v
          </text>
          <text
            x={toSvg(outputVector.x, outputVector.y).x + 10}
            y={toSvg(outputVector.x, outputVector.y).y}
            fill="#ef4444"
            fontSize="14"
            fontWeight="bold"
          >
            Av
          </text>

          {/* Unit circle */}
          <circle
            cx={origin.x}
            cy={origin.y}
            r={scale}
            fill="none"
            stroke="#6b7280"
            strokeWidth={1}
            strokeDasharray="3 3"
            opacity={0.3}
          />
        </svg>
      </div>

      {/* Status message */}
      <div className={`mt-4 p-4 rounded-xl border ${
        isAlongEigenvector
          ? 'bg-emerald-500/20 border-emerald-500/50'
          : 'bg-dark-700/50 border-dark-600'
      }`}>
        {isAlongEigenvector ? (
          <p className="text-emerald-400 text-center font-medium">
            You found eigenvector {isAlongEigenvector.index}!
            The vector is scaled by λ = {isAlongEigenvector.eigenvalue.toFixed(2)}
          </p>
        ) : eigen.isComplex ? (
          <p className="text-purple-400 text-center">
            Complex eigenvalues mean the matrix rotates all vectors (except origin).
            No real eigenvectors exist.
          </p>
        ) : (
          <p className="text-dark-400 text-center">
            Rotate the input vector until it aligns with Av (same or opposite direction).
            That's an eigenvector!
          </p>
        )}
      </div>
    </div>
  );
}
