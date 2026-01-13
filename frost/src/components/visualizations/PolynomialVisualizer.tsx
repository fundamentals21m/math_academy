/**
 * Interactive Polynomial Visualizer for Shamir Secret Sharing
 * Shows how secrets are encoded as polynomial constant terms
 */
import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CoordinateGrid, createCoordinateTransforms } from './shared';

interface Point {
  x: number;
  y: number;
  label: string;
  color: string;
}

// Evaluate polynomial at x given coefficients [a0, a1, a2, ...]
function evaluatePolynomial(coefficients: number[], x: number): number {
  return coefficients.reduce((sum, coef, power) => sum + coef * Math.pow(x, power), 0);
}

// Generate SVG path for polynomial curve
function generatePolynomialPath(
  coefficients: number[],
  xMin: number,
  xMax: number,
  toSvgX: (x: number) => number,
  toSvgY: (y: number) => number,
  steps = 100
): string {
  const points: string[] = [];
  const dx = (xMax - xMin) / steps;

  for (let i = 0; i <= steps; i++) {
    const x = xMin + i * dx;
    const y = evaluatePolynomial(coefficients, x);
    const svgX = toSvgX(x);
    const svgY = toSvgY(y);
    points.push(`${i === 0 ? 'M' : 'L'} ${svgX} ${svgY}`);
  }

  return points.join(' ');
}

export function PolynomialVisualizer() {
  // State for polynomial coefficients
  const [secret, setSecret] = useState(42); // a0 = f(0)
  const [a1, setA1] = useState(17); // linear coefficient
  const [a2, setA2] = useState(8); // quadratic coefficient
  const [showPoints, setShowPoints] = useState(true);
  const [showSecret, setShowSecret] = useState(true);
  const [threshold, setThreshold] = useState(3); // t value (degree + 1)

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 50;

  // Dynamic range based on values
  const xMin = -0.5;
  const xMax = 6;
  const yMax = useMemo(() => {
    const maxY = evaluatePolynomial([secret, a1, a2], 5);
    return Math.max(400, Math.ceil(maxY / 50) * 50 + 50);
  }, [secret, a1, a2]);
  const yMin = -20;

  // Coordinate transforms
  const { toSvgX, toSvgY } = useMemo(
    () => createCoordinateTransforms(width, height, padding, xMin, xMax, yMin, yMax),
    [yMax]
  );

  // Current coefficients based on threshold
  const coefficients = useMemo(() => {
    const coeffs = [secret];
    if (threshold >= 2) coeffs.push(a1);
    if (threshold >= 3) coeffs.push(a2);
    return coeffs;
  }, [secret, a1, a2, threshold]);

  // Generate curve path
  const curvePath = useMemo(
    () => generatePolynomialPath(coefficients, xMin, xMax, toSvgX, toSvgY),
    [coefficients, toSvgX, toSvgY]
  );

  // Calculate share points
  const sharePoints = useMemo((): Point[] => {
    const colors = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];
    return [1, 2, 3, 4, 5].map((x, i) => ({
      x,
      y: evaluatePolynomial(coefficients, x),
      label: `P${x}`,
      color: colors[i],
    }));
  }, [coefficients]);

  // Secret point at x=0
  const secretPoint = useMemo(
    () => ({
      x: 0,
      y: secret,
      label: 's',
      color: '#fbbf24',
    }),
    [secret]
  );

  // Polynomial equation string
  const equationString = useMemo(() => {
    let eq = `f(x) = ${secret}`;
    if (threshold >= 2) eq += ` + ${a1}x`;
    if (threshold >= 3) eq += ` + ${a2}x²`;
    return eq;
  }, [secret, a1, a2, threshold]);

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Interactive Polynomial Visualizer
      </h4>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-dark-300 mb-1">
              Secret (f(0)): <span className="text-amber-400 font-mono">{secret}</span>
            </label>
            <input
              type="range"
              min={1}
              max={100}
              value={secret}
              onChange={(e) => setSecret(Number(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm text-dark-300 mb-1">
              Threshold (t): <span className="text-indigo-400 font-mono">{threshold}</span>
            </label>
            <input
              type="range"
              min={2}
              max={3}
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>
        </div>

        <div className="space-y-3">
          {threshold >= 2 && (
            <div>
              <label className="block text-sm text-dark-300 mb-1">
                a₁ (linear): <span className="text-emerald-400 font-mono">{a1}</span>
              </label>
              <input
                type="range"
                min={0}
                max={30}
                value={a1}
                onChange={(e) => setA1(Number(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          )}

          {threshold >= 3 && (
            <div>
              <label className="block text-sm text-dark-300 mb-1">
                a₂ (quadratic): <span className="text-blue-400 font-mono">{a2}</span>
              </label>
              <input
                type="range"
                min={0}
                max={20}
                value={a2}
                onChange={(e) => setA2(Number(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* Toggle buttons */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setShowSecret(!showSecret)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showSecret
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700'
          }`}
        >
          Secret Point
        </button>
        <button
          onClick={() => setShowPoints(!showPoints)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showPoints
              ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700'
          }`}
        >
          Share Points
        </button>
      </div>

      {/* Equation display */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-center font-mono text-lg text-dark-100">{equationString}</p>
      </div>

      {/* SVG Visualization */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full bg-dark-950 rounded-lg"
        style={{ maxHeight: '400px' }}
      >
        {/* Coordinate grid */}
        <CoordinateGrid
          width={width}
          height={height}
          padding={padding}
          xMin={xMin}
          xMax={xMax}
          yMin={yMin}
          yMax={yMax}
          yLabel="f(x)"
        />

        {/* Polynomial curve */}
        <motion.path
          d={curvePath}
          fill="none"
          stroke="#818cf8"
          strokeWidth={2.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Secret point at f(0) */}
        {showSecret && (
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            <circle
              cx={toSvgX(secretPoint.x)}
              cy={toSvgY(secretPoint.y)}
              r={10}
              fill={secretPoint.color}
              stroke="#fef3c7"
              strokeWidth={2}
            />
            <text
              x={toSvgX(secretPoint.x) - 16}
              y={toSvgY(secretPoint.y) + 4}
              fill="#fbbf24"
              fontSize={14}
              fontWeight="bold"
            >
              s={secret}
            </text>
          </motion.g>
        )}

        {/* Share points */}
        {showPoints &&
          sharePoints.map((point, index) => (
            <motion.g
              key={point.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
            >
              <circle
                cx={toSvgX(point.x)}
                cy={toSvgY(point.y)}
                r={7}
                fill={point.color}
                stroke="white"
                strokeWidth={1.5}
              />
              <text
                x={toSvgX(point.x) + 10}
                y={toSvgY(point.y) - 10}
                fill={point.color}
                fontSize={11}
                fontWeight="bold"
              >
                ({point.x}, {Math.round(point.y)})
              </text>
            </motion.g>
          ))}
      </svg>

      {/* Share values table */}
      {showPoints && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-dark-400 border-b border-dark-700">
                <th className="py-2 px-3 text-left">Participant</th>
                <th className="py-2 px-3 text-left">x</th>
                <th className="py-2 px-3 text-left">Share f(x)</th>
              </tr>
            </thead>
            <tbody>
              {sharePoints.map((point) => (
                <tr key={point.label} className="border-b border-dark-800">
                  <td className="py-2 px-3">
                    <span
                      className="inline-block w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: point.color }}
                    />
                    {point.label}
                  </td>
                  <td className="py-2 px-3 font-mono">{point.x}</td>
                  <td className="py-2 px-3 font-mono">{Math.round(point.y)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Insight:</strong> Any {threshold} points uniquely determine this degree-
          {threshold - 1} polynomial. With fewer than {threshold} points, infinitely many
          polynomials are possible, so the secret remains hidden.
        </p>
      </div>
    </div>
  );
}
