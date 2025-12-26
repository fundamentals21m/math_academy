import React, { useState, useCallback } from 'react';
import { Math, MathBlock } from '@/components/common/MathBlock';

interface LimitVisualizerProps {
  function: (x: number) => number;
  limitValue: number;
  a: number;
  functionName?: string;
}

export function LimitVisualizer({ func, limitValue, a, functionName = "f" }: LimitVisualizerProps) {
  const [epsilon, setEpsilon] = useState(0.5);
  const [delta, setDelta] = useState(0.3);
  const [x, setX] = useState(a + 0.1);

  // Check if current x satisfies the ε-δ condition
  const satisfiesCondition = Math.abs(func(x) - limitValue) < epsilon && Math.abs(x - a) < delta;

  return (
    <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
      <h3 className="text-lg font-semibold text-emerald-400 mb-4">
        ε-δ Limit Visualizer
      </h3>

      <div className="mb-4">
        <MathBlock>
          {`\\lim_{x \\to ${a}} ${functionName}(x) = ${limitValue}`}
        </MathBlock>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              ε (Error Tolerance): {epsilon.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.01"
              max="2"
              step="0.01"
              value={epsilon}
              onChange={(e) => setEpsilon(parseFloat(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              δ (Distance from {a}): {delta.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.01"
              max="1"
              step="0.01"
              value={delta}
              onChange={(e) => setDelta(parseFloat(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Test Point x: {x.toFixed(2)}
            </label>
            <input
              type="range"
              min={a - 1}
              max={a + 1}
              step="0.01"
              value={x}
              onChange={(e) => setX(parseFloat(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${satisfiesCondition ? 'bg-emerald-900/50 border border-emerald-500' : 'bg-red-900/50 border border-red-500'}`}>
            <h4 className="font-semibold mb-2">
              {satisfiesCondition ? '✅ Condition Satisfied' : '❌ Condition Not Satisfied'}
            </h4>

            <div className="text-sm space-y-1">
              <div>|{functionName}({x.toFixed(2)}) - {limitValue}| = {Math.abs(func(x) - limitValue).toFixed(3)}</div>
              <div>|{x.toFixed(2)} - {a}| = {Math.abs(x - a).toFixed(3)}</div>
              <div className="mt-2">
                Required: |{functionName}(x) - L| &lt; ε ∧ |x - a| &lt; δ
              </div>
            </div>
          </div>

          <div className="text-sm text-dark-400">
            <p><strong>Formal Definition:</strong></p>
            <MathBlock>
              {`\\forall \\epsilon > 0, \\quad \\exists \\delta > 0 \\quad \\text{such that} \\\\ |x - ${a}| < \\delta \\implies |${functionName}(x) - ${limitValue}| < \\epsilon`}
            </MathBlock>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-700/50 rounded text-sm">
        <strong>Interactive Proof:</strong> Adjust ε and δ to find values that work for all x in (a-δ, a+δ) except possibly x = a.
        Try x = {a} ± {delta.toFixed(2)} to test the boundaries.
      </div>
    </div>
  );
}

// Preset functions for demonstration
export const limitExamples = [
  {
    name: "Linear Function",
    func: (x: number) => 2 * x + 1,
    limitValue: 5,
    a: 2,
    description: "lim_{x→2} (2x + 1) = 5"
  },
  {
    name: "Quadratic Function",
    func: (x: number) => x * x,
    limitValue: 4,
    a: 2,
    description: "lim_{x→2} x² = 4"
  },
  {
    name: "Rational Function",
    func: (x: number) => x !== 3 ? (x * x - 9) / (x - 3) : 6,
    limitValue: 6,
    a: 3,
    description: "lim_{x→3} (x²-9)/(x-3) = 6"
  }
];