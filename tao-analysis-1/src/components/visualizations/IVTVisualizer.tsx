/**
 * Intermediate Value Theorem Visualizer
 * Interactive demonstration of IVT and root-finding via bisection
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface FunctionOption {
  id: string;
  name: string;
  fn: (x: number) => number;
  formula: string;
}

const functions: FunctionOption[] = [
  {
    id: 'x3-x-1',
    name: 'x³ - x - 1',
    fn: (x) => x * x * x - x - 1,
    formula: 'f(x) = x³ - x - 1',
  },
  {
    id: 'x2-2',
    name: 'x² - 2',
    fn: (x) => x * x - 2,
    formula: 'f(x) = x² - 2  (root is √2)',
  },
  {
    id: 'sin-x/2',
    name: 'sin(x) - x/3',
    fn: (x) => Math.sin(x) - x / 3,
    formula: 'f(x) = sin(x) - x/3',
  },
  {
    id: 'exp-2',
    name: 'eˣ - 3',
    fn: (x) => Math.exp(x) - 3,
    formula: 'f(x) = eˣ - 3  (root is ln(3))',
  },
];

export function IVTVisualizer() {
  const [selectedFn, setSelectedFn] = useState(functions[0]);
  const [intervalStart, setIntervalStart] = useState(1);
  const [intervalEnd, setIntervalEnd] = useState(2);
  const [bisectionSteps, setBisectionSteps] = useState<{ a: number; b: number; mid: number; fMid: number }[]>([]);

  const width = 400;
  const height = 250;
  const padding = 40;

  const xMin = -1;
  const xMax = 3;

  // Compute y range
  const yValues = useMemo(() => {
    const vals: number[] = [];
    for (let x = xMin; x <= xMax; x += 0.05) {
      vals.push(selectedFn.fn(x));
    }
    return vals;
  }, [selectedFn]);

  const yMin = Math.min(-2, ...yValues);
  const yMax = Math.max(2, ...yValues);

  const toScreenX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (width - 2 * padding);
  const toScreenY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);

  const fA = selectedFn.fn(intervalStart);
  const fB = selectedFn.fn(intervalEnd);
  const hasOppositeSigns = fA * fB < 0;

  // Curve points
  const curvePoints = useMemo(() => {
    const points: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.02) {
      const y = selectedFn.fn(x);
      if (y >= yMin - 1 && y <= yMax + 1) {
        points.push(`${toScreenX(x)},${toScreenY(y)}`);
      }
    }
    return points.join(' ');
  }, [selectedFn]);

  const runBisection = () => {
    if (!hasOppositeSigns) return;

    const steps: typeof bisectionSteps = [];
    let a = intervalStart;
    let b = intervalEnd;

    for (let i = 0; i < 10; i++) {
      const mid = (a + b) / 2;
      const fMid = selectedFn.fn(mid);
      steps.push({ a, b, mid, fMid });

      if (Math.abs(fMid) < 0.0001) break;

      const fA = selectedFn.fn(a);
      if (fA * fMid < 0) {
        b = mid;
      } else {
        a = mid;
      }
    }

    setBisectionSteps(steps);
  };

  const reset = () => {
    setBisectionSteps([]);
  };

  const lastStep = bisectionSteps[bisectionSteps.length - 1];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Intermediate Value Theorem
      </h4>

      {/* Function selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {functions.map((fn) => (
          <button
            key={fn.id}
            onClick={() => {
              setSelectedFn(fn);
              setBisectionSteps([]);
            }}
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

      {/* Interval controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-400 mb-1">
            a = {intervalStart.toFixed(2)} (f(a) = {fA.toFixed(3)})
          </label>
          <input
            type="range"
            min={xMin}
            max={xMax}
            step="0.1"
            value={intervalStart}
            onChange={(e) => {
              setIntervalStart(parseFloat(e.target.value));
              setBisectionSteps([]);
            }}
            className="w-full accent-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">
            b = {intervalEnd.toFixed(2)} (f(b) = {fB.toFixed(3)})
          </label>
          <input
            type="range"
            min={xMin}
            max={xMax}
            step="0.1"
            value={intervalEnd}
            onChange={(e) => {
              setIntervalEnd(parseFloat(e.target.value));
              setBisectionSteps([]);
            }}
            className="w-full accent-amber-500"
          />
        </div>
      </div>

      {/* IVT condition check */}
      <div
        className={`p-3 rounded-lg mb-4 ${
          hasOppositeSigns
            ? 'bg-emerald-500/10 border border-emerald-500/30'
            : 'bg-red-500/10 border border-red-500/30'
        }`}
      >
        <p className="text-sm">
          {hasOppositeSigns ? (
            <>
              ✓ <strong>IVT applies:</strong> f(a) = {fA.toFixed(3)} and f(b) = {fB.toFixed(3)}{' '}
              have opposite signs. There exists c ∈ (a, b) with f(c) = 0.
            </>
          ) : (
            <>
              ✗ <strong>IVT condition not met:</strong> f(a) and f(b) have the same sign.
              Adjust the interval so they have opposite signs.
            </>
          )}
        </p>
      </div>

      {/* SVG Visualization */}
      <div className="bg-dark-800/50 rounded-lg p-2 mb-4">
        <svg width={width} height={height} className="w-full h-auto">
          {/* Grid */}
          <defs>
            <pattern id="ivt-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width={width} height={height} fill="url(#ivt-grid)" />

          {/* Shaded region */}
          {hasOppositeSigns && (
            <rect
              x={toScreenX(Math.min(intervalStart, intervalEnd))}
              y={padding}
              width={Math.abs(toScreenX(intervalEnd) - toScreenX(intervalStart))}
              height={height - 2 * padding}
              fill="rgba(139, 92, 246, 0.1)"
            />
          )}

          {/* X-axis */}
          <line
            x1={padding}
            y1={toScreenY(0)}
            x2={width - padding}
            y2={toScreenY(0)}
            stroke="#6b7280"
            strokeWidth="1.5"
          />

          {/* Function curve */}
          <polyline
            points={curvePoints}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2.5"
          />

          {/* Interval endpoints */}
          <circle
            cx={toScreenX(intervalStart)}
            cy={toScreenY(fA)}
            r="6"
            fill="#10b981"
            stroke="#fff"
            strokeWidth="2"
          />
          <circle
            cx={toScreenX(intervalEnd)}
            cy={toScreenY(fB)}
            r="6"
            fill="#f59e0b"
            stroke="#fff"
            strokeWidth="2"
          />

          {/* Bisection midpoints */}
          {bisectionSteps.map((step, i) => (
            <motion.circle
              key={i}
              cx={toScreenX(step.mid)}
              cy={toScreenY(step.fMid)}
              r="4"
              fill="#ef4444"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2 }}
            />
          ))}

          {/* Root marker */}
          {lastStep && Math.abs(lastStep.fMid) < 0.01 && (
            <motion.circle
              cx={toScreenX(lastStep.mid)}
              cy={toScreenY(0)}
              r="8"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          )}
        </svg>
      </div>

      {/* Bisection controls */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={runBisection}
          disabled={!hasOppositeSigns}
          className="flex-1 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Run Bisection
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-dark-800 text-dark-300 rounded-lg text-sm hover:bg-dark-700 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Bisection results */}
      {bisectionSteps.length > 0 && (
        <div className="bg-dark-800/50 rounded-lg p-3 max-h-32 overflow-y-auto">
          <div className="text-xs font-mono space-y-1">
            {bisectionSteps.map((step, i) => (
              <div key={i} className="flex justify-between text-dark-400">
                <span>Step {i + 1}:</span>
                <span>
                  [{step.a.toFixed(4)}, {step.b.toFixed(4)}]
                </span>
                <span>mid = {step.mid.toFixed(4)}</span>
                <span className={Math.abs(step.fMid) < 0.01 ? 'text-emerald-400' : ''}>
                  f(mid) = {step.fMid.toFixed(6)}
                </span>
              </div>
            ))}
          </div>
          {lastStep && (
            <p className="text-sm text-emerald-400 mt-2">
              Root ≈ {lastStep.mid.toFixed(6)}
            </p>
          )}
        </div>
      )}

      <p className="text-xs text-dark-500 mt-3">
        <strong>IVT:</strong> If f is continuous on [a, b] and f(a) · f(b) {'<'} 0,
        then there exists c ∈ (a, b) such that f(c) = 0.
      </p>
    </div>
  );
}
