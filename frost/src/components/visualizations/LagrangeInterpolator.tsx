/**
 * Interactive Lagrange Interpolation Visualizer
 * Shows how Lagrange basis polynomials combine to reconstruct the secret
 */
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CoordinateGrid, createCoordinateTransforms } from './shared';

// Lagrange basis polynomial L_i(x) for given points
function lagrangeBasis(i: number, points: number[], x: number): number {
  let result = 1;
  const xi = points[i];
  for (let j = 0; j < points.length; j++) {
    if (j !== i) {
      result *= (x - points[j]) / (xi - points[j]);
    }
  }
  return result;
}

// Interpolated value at x using Lagrange interpolation
function interpolate(xPoints: number[], yValues: number[], x: number): number {
  let result = 0;
  for (let i = 0; i < xPoints.length; i++) {
    result += yValues[i] * lagrangeBasis(i, xPoints, x);
  }
  return result;
}

// Generate SVG path for a function
function generatePath(
  fn: (x: number) => number,
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
    const y = fn(x);
    // Clamp y to reasonable range
    const clampedY = Math.max(-100, Math.min(500, y));
    const svgX = toSvgX(x);
    const svgY = toSvgY(clampedY);
    points.push(`${i === 0 ? 'M' : 'L'} ${svgX} ${svgY}`);
  }

  return points.join(' ');
}

export function LagrangeInterpolator() {
  // Share points (x values)
  const xPoints = [1, 2, 3];

  // Y values for each point (adjustable)
  const [y1, setY1] = useState(67);
  const [y2, setY2] = useState(108);
  const [y3, setY3] = useState(165);

  // Visualization options
  const [showBasis, setShowBasis] = useState([true, true, true]);
  const [showInterpolated, setShowInterpolated] = useState(true);
  const [showReconstruction, setShowReconstruction] = useState(true);
  const [step, setStep] = useState(0); // 0 = all, 1-3 = individual basis

  // SVG dimensions
  const width = 520;
  const height = 400;
  const padding = 50;

  // Coordinate range
  const xMin = -0.5;
  const xMax = 4;
  const yMin = -50;
  const yMax = 200;

  // Coordinate transforms
  const { toSvgX, toSvgY } = useMemo(
    () => createCoordinateTransforms(width, height, padding, xMin, xMax, yMin, yMax),
    []
  );

  const yValues = [y1, y2, y3];
  const colors = ['#10b981', '#3b82f6', '#8b5cf6']; // emerald, blue, violet

  // Generate paths for basis polynomials
  const basisPaths = useMemo(() => {
    return xPoints.map((_, i) => {
      const fn = (x: number) => lagrangeBasis(i, xPoints, x) * yValues[i];
      return generatePath(fn, xMin, xMax, toSvgX, toSvgY);
    });
  }, [yValues, toSvgX, toSvgY]);

  // Generate path for interpolated polynomial
  const interpolatedPath = useMemo(() => {
    const fn = (x: number) => interpolate(xPoints, yValues, x);
    return generatePath(fn, xMin, xMax, toSvgX, toSvgY);
  }, [yValues, toSvgX, toSvgY]);

  // Calculate reconstructed secret at x=0
  const reconstructedSecret = useMemo(() => {
    return interpolate(xPoints, yValues, 0);
  }, [yValues]);

  // Lagrange coefficients at x=0
  const lagrangeCoeffs = useMemo(() => {
    return xPoints.map((_, i) => lagrangeBasis(i, xPoints, 0));
  }, []);

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Lagrange Interpolation Visualizer
      </h4>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">
            y₁ (at x=1): <span className="text-emerald-400 font-mono">{y1}</span>
          </label>
          <input
            type="range"
            min={20}
            max={150}
            value={y1}
            onChange={(e) => setY1(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-300 mb-1">
            y₂ (at x=2): <span className="text-blue-400 font-mono">{y2}</span>
          </label>
          <input
            type="range"
            min={50}
            max={200}
            value={y2}
            onChange={(e) => setY2(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-300 mb-1">
            y₃ (at x=3): <span className="text-violet-400 font-mono">{y3}</span>
          </label>
          <input
            type="range"
            min={100}
            max={250}
            value={y3}
            onChange={(e) => setY3(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-violet-500"
          />
        </div>
      </div>

      {/* Step buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setStep(0)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            step === 0
              ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700'
          }`}
        >
          Show All
        </button>
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            onClick={() => setStep(s)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              step === s
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700'
            }`}
            style={step === s ? { borderColor: colors[s - 1] } : {}}
          >
            L{s}(x)
          </button>
        ))}
        <button
          onClick={() => setShowInterpolated(!showInterpolated)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showInterpolated
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700'
          }`}
        >
          f(x) Combined
        </button>
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

        {/* Basis polynomial curves */}
        <AnimatePresence>
          {basisPaths.map((path, i) => {
            const show = step === 0 || step === i + 1;
            return show ? (
              <motion.path
                key={`basis-${i}`}
                d={path}
                fill="none"
                stroke={colors[i]}
                strokeWidth={2}
                strokeDasharray="6,3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
              />
            ) : null;
          })}
        </AnimatePresence>

        {/* Interpolated polynomial */}
        {showInterpolated && step === 0 && (
          <motion.path
            d={interpolatedPath}
            fill="none"
            stroke="#fbbf24"
            strokeWidth={3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
        )}

        {/* Data points */}
        {xPoints.map((x, i) => (
          <motion.g
            key={`point-${i}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <circle
              cx={toSvgX(x)}
              cy={toSvgY(yValues[i])}
              r={8}
              fill={colors[i]}
              stroke="white"
              strokeWidth={2}
            />
            <text
              x={toSvgX(x) + 12}
              y={toSvgY(yValues[i]) - 12}
              fill={colors[i]}
              fontSize={11}
              fontWeight="bold"
            >
              ({x}, {yValues[i]})
            </text>
          </motion.g>
        ))}

        {/* Reconstruction point at x=0 */}
        {showReconstruction && (
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <circle
              cx={toSvgX(0)}
              cy={toSvgY(reconstructedSecret)}
              r={10}
              fill="#fbbf24"
              stroke="#fef3c7"
              strokeWidth={2}
            />
            <text
              x={toSvgX(0) + 14}
              y={toSvgY(reconstructedSecret) + 4}
              fill="#fbbf24"
              fontSize={12}
              fontWeight="bold"
            >
              s = {Math.round(reconstructedSecret)}
            </text>
          </motion.g>
        )}
      </svg>

      {/* Lagrange coefficient breakdown */}
      <div className="mt-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <h5 className="text-sm font-semibold text-dark-200 mb-3">
          Reconstruction at x = 0:
        </h5>
        <div className="space-y-2 font-mono text-sm">
          <p className="text-dark-300">
            f(0) = {lagrangeCoeffs.map((c, i) => (
              <span key={i}>
                <span style={{ color: colors[i] }}>
                  L{i + 1}(0) × y{i + 1}
                </span>
                {i < 2 ? ' + ' : ''}
              </span>
            ))}
          </p>
          <p className="text-dark-300">
            f(0) = {lagrangeCoeffs.map((c, i) => (
              <span key={i}>
                <span style={{ color: colors[i] }}>
                  {c.toFixed(2)} × {yValues[i]}
                </span>
                {i < 2 ? ' + ' : ''}
              </span>
            ))}
          </p>
          <p className="text-dark-300">
            f(0) = {lagrangeCoeffs.map((c, i) => (
              <span key={i}>
                <span style={{ color: colors[i] }}>
                  {(c * yValues[i]).toFixed(1)}
                </span>
                {i < 2 ? ' + ' : ''}
              </span>
            ))}
          </p>
          <p className="text-lg text-amber-400 font-bold mt-2">
            f(0) = {Math.round(reconstructedSecret)} ← Secret!
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        {xPoints.map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-4 h-0.5"
              style={{ backgroundColor: colors[i], opacity: 0.7 }}
            />
            <span className="text-dark-300">
              L{i + 1}(x) × y{i + 1} (basis × value)
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-amber-400" />
          <span className="text-dark-300">f(x) combined</span>
        </div>
      </div>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
        <p className="text-sm text-emerald-200">
          <strong>Key Insight:</strong> Each Lagrange basis polynomial L_i(x) equals 1 at
          its own point and 0 at all others. This "selects" each y-value independently,
          then the sum reconstructs the original polynomial. Evaluating at x=0 gives us
          the secret!
        </p>
      </div>
    </div>
  );
}
