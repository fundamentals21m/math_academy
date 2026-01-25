/**
 * Continuity Tester
 * An ε-δ game to test function continuity at a point
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface FunctionOption {
  id: string;
  name: string;
  fn: (x: number) => number;
  testPoint: number;
  isContinuous: boolean;
  formula: string;
}

const functions: FunctionOption[] = [
  {
    id: 'x^2',
    name: 'x²',
    fn: (x) => x * x,
    testPoint: 1,
    isContinuous: true,
    formula: 'f(x) = x²',
  },
  {
    id: 'sqrt',
    name: '√x',
    fn: (x) => Math.sqrt(Math.max(0, x)),
    testPoint: 1,
    isContinuous: true,
    formula: 'f(x) = √x',
  },
  {
    id: 'step',
    name: 'Step Function',
    fn: (x) => (x < 0 ? 0 : 1),
    testPoint: 0,
    isContinuous: false,
    formula: 'f(x) = ⌊x + 1⌋ for x ≥ -1',
  },
  {
    id: '1/x',
    name: '1/x (at x=1)',
    fn: (x) => (x === 0 ? Infinity : 1 / x),
    testPoint: 1,
    isContinuous: true,
    formula: 'f(x) = 1/x',
  },
  {
    id: 'dirichlet-like',
    name: 'Oscillating',
    fn: (x) => Math.sin(1 / (x === 0 ? 0.001 : x)),
    testPoint: 0,
    isContinuous: false,
    formula: 'f(x) = sin(1/x)',
  },
];

export function ContinuityTester() {
  const [selectedFn, setSelectedFn] = useState(functions[0]);
  const [epsilon, setEpsilon] = useState(0.3);
  const [delta, setDelta] = useState(0.2);
  const [gameMode, setGameMode] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const { testPoint: x0 } = selectedFn;
  const fx0 = selectedFn.fn(x0);

  // Generate curve points
  const curvePoints = useMemo(() => {
    const points: { x: number; y: number }[] = [];
    const xMin = x0 - 1.5;
    const xMax = x0 + 1.5;
    for (let i = 0; i <= 150; i++) {
      const x = xMin + (i / 150) * (xMax - xMin);
      const y = selectedFn.fn(x);
      if (isFinite(y) && Math.abs(y) < 10) {
        points.push({ x, y });
      }
    }
    return points;
  }, [selectedFn, x0]);

  // Check if the chosen δ works
  const checkContinuity = useMemo(() => {
    const samples = 100;
    let maxDeviation = 0;
    let worstX = x0;

    for (let i = 0; i <= samples; i++) {
      const t = (i / samples) * 2 - 1; // -1 to 1
      const x = x0 + t * delta;
      const fx = selectedFn.fn(x);
      if (isFinite(fx)) {
        const deviation = Math.abs(fx - fx0);
        if (deviation > maxDeviation) {
          maxDeviation = deviation;
          worstX = x;
        }
      }
    }

    return {
      success: maxDeviation < epsilon,
      maxDeviation,
      worstX,
    };
  }, [selectedFn, x0, fx0, epsilon, delta]);

  const handleCheck = () => {
    setAttempts((a) => a + 1);
    if (checkContinuity.success) {
      setScore((s) => s + 1);
    }
  };

  // SVG dimensions
  const width = 380;
  const height = 280;
  const padding = 45;

  const xMin = x0 - 1.5;
  const xMax = x0 + 1.5;
  const yValues = curvePoints.map((p) => p.y).filter((y) => Math.abs(y) < 10);
  const yMin = Math.min(...yValues, fx0 - 1);
  const yMax = Math.max(...yValues, fx0 + 1);

  const scaleX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);

  // Build path, handling discontinuities
  const curvePath = useMemo(() => {
    if (curvePoints.length === 0) return '';
    let path = '';
    let lastY = curvePoints[0].y;
    curvePoints.forEach((p, i) => {
      const jump = Math.abs(p.y - lastY) > 2;
      if (i === 0 || jump) {
        path += `M ${scaleX(p.x)} ${scaleY(p.y)} `;
      } else {
        path += `L ${scaleX(p.x)} ${scaleY(p.y)} `;
      }
      lastY = p.y;
    });
    return path;
  }, [curvePoints]);

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-indigo-400">Continuity Tester</h4>
        {gameMode && (
          <div className="text-sm text-dark-400">
            Score: <span className="text-emerald-400 font-bold">{score}</span> / {attempts}
          </div>
        )}
      </div>

      {/* Mode toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setGameMode(false)}
          className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
            !gameMode ? 'bg-indigo-500 text-white' : 'bg-dark-800 text-dark-300'
          }`}
        >
          Explore
        </button>
        <button
          onClick={() => setGameMode(true)}
          className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
            gameMode ? 'bg-indigo-500 text-white' : 'bg-dark-800 text-dark-300'
          }`}
        >
          Game Mode
        </button>
      </div>

      {/* Function selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {functions.map((fn) => (
          <button
            key={fn.id}
            onClick={() => setSelectedFn(fn)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              selectedFn.id === fn.id
                ? 'bg-indigo-500 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
            }`}
          >
            {fn.name}
          </button>
        ))}
      </div>

      {/* Game challenge */}
      {gameMode && (
        <div className="p-3 bg-dark-800/50 rounded-lg mb-4">
          <p className="text-sm text-dark-300">
            <strong>Challenge:</strong> Given ε = {epsilon.toFixed(3)}, find a δ {'>'} 0 such that
            |x - {x0}| {'<'} δ implies |f(x) - f({x0})| {'<'} ε.
          </p>
        </div>
      )}

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-400 mb-1">
            ε (your target): {epsilon.toFixed(3)}
          </label>
          <input
            type="range"
            min="0.05"
            max="1"
            step="0.01"
            value={epsilon}
            onChange={(e) => setEpsilon(parseFloat(e.target.value))}
            className="w-full accent-amber-500"
            disabled={gameMode}
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">
            δ (your choice): {delta.toFixed(3)}
          </label>
          <input
            type="range"
            min="0.01"
            max="1"
            step="0.01"
            value={delta}
            onChange={(e) => setDelta(parseFloat(e.target.value))}
            className="w-full accent-emerald-500"
          />
        </div>
      </div>

      {/* Graph */}
      <div className="bg-dark-800/50 rounded-lg p-2 mb-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* ε-band around f(x0) */}
          <rect
            x={padding}
            y={scaleY(fx0 + epsilon)}
            width={width - 2 * padding}
            height={Math.max(0, scaleY(fx0 - epsilon) - scaleY(fx0 + epsilon))}
            fill="#f59e0b"
            opacity={0.15}
          />

          {/* δ-band around x0 */}
          <rect
            x={Math.max(padding, scaleX(x0 - delta))}
            y={padding}
            width={Math.min(scaleX(x0 + delta), width - padding) - Math.max(padding, scaleX(x0 - delta))}
            height={height - 2 * padding}
            fill="#10b981"
            opacity={0.15}
          />

          {/* Axes */}
          <line
            x1={padding}
            y1={scaleY(0)}
            x2={width - padding}
            y2={scaleY(0)}
            stroke="#6b7280"
            strokeWidth="1"
          />
          <line
            x1={scaleX(0)}
            y1={padding}
            x2={scaleX(0)}
            y2={height - padding}
            stroke="#6b7280"
            strokeWidth="1"
          />

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#818cf8" strokeWidth="2" />

          {/* Point at (x0, f(x0)) */}
          <circle cx={scaleX(x0)} cy={scaleY(fx0)} r="5" fill="#818cf8" />

          {/* ε bounds labels */}
          <line
            x1={padding}
            y1={scaleY(fx0 + epsilon)}
            x2={width - padding}
            y2={scaleY(fx0 + epsilon)}
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
          <line
            x1={padding}
            y1={scaleY(fx0 - epsilon)}
            x2={width - padding}
            y2={scaleY(fx0 - epsilon)}
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="3 2"
          />

          {/* δ bounds lines */}
          <line
            x1={scaleX(x0 - delta)}
            y1={padding}
            x2={scaleX(x0 - delta)}
            y2={height - padding}
            stroke="#10b981"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
          <line
            x1={scaleX(x0 + delta)}
            y1={padding}
            x2={scaleX(x0 + delta)}
            y2={height - padding}
            stroke="#10b981"
            strokeWidth="1"
            strokeDasharray="3 2"
          />

          {/* Labels */}
          <text x={scaleX(x0)} y={height - padding + 15} textAnchor="middle" className="fill-dark-400 text-xs">
            x₀ = {x0}
          </text>
        </svg>
      </div>

      {/* Result */}
      {gameMode ? (
        <div className="flex gap-2 mb-4">
          <button
            onClick={handleCheck}
            className="flex-1 py-2 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition-colors"
          >
            Check My δ
          </button>
        </div>
      ) : null}

      <motion.div
        className={`p-3 rounded-lg ${
          checkContinuity.success
            ? 'bg-emerald-500/10 border border-emerald-500/30'
            : 'bg-red-500/10 border border-red-500/30'
        }`}
      >
        <p className={`font-semibold ${checkContinuity.success ? 'text-emerald-400' : 'text-red-400'}`}>
          {checkContinuity.success
            ? `✓ Success! δ = ${delta.toFixed(3)} works for ε = ${epsilon.toFixed(3)}.`
            : `✗ Fail. Max deviation = ${checkContinuity.maxDeviation.toFixed(4)} ≥ ε.`}
        </p>
        {!checkContinuity.success && (
          <p className="text-xs text-dark-400 mt-1">
            Worst point: x ≈ {checkContinuity.worstX.toFixed(4)}
          </p>
        )}
        {!selectedFn.isContinuous && (
          <p className="text-xs text-amber-400 mt-2">
            Hint: This function is discontinuous at x₀ = {x0}. No δ will work for small enough ε!
          </p>
        )}
      </motion.div>

      <p className="text-xs text-dark-500 mt-3">
        <strong>Continuity:</strong> f is continuous at x₀ if for every ε {'>'} 0, there exists δ {'>'} 0
        such that |x - x₀| {'<'} δ implies |f(x) - f(x₀)| {'<'} ε.
      </p>
    </div>
  );
}
