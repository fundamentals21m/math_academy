import { useState } from 'react';

export function EquationBalanceVisualizer() {
  // Equation: ax + b = c, solve for x
  const [a, setA] = useState(2);
  const [b, setB] = useState(5);
  const [c, setC] = useState(11);
  const [step, setStep] = useState(0);

  const solution = (c - b) / a;
  const isWholeSolution = Number.isInteger(solution);

  // Steps of solving
  const steps = [
    {
      left: `${a}x + ${b}`,
      right: `${c}`,
      description: 'Start with the equation'
    },
    {
      left: `${a}x + ${b} - ${b}`,
      right: `${c} - ${b}`,
      description: `Subtract ${b} from both sides`
    },
    {
      left: `${a}x`,
      right: `${c - b}`,
      description: 'Simplify'
    },
    {
      left: `${a}x ÷ ${a}`,
      right: `${c - b} ÷ ${a}`,
      description: `Divide both sides by ${a}`
    },
    {
      left: 'x',
      right: isWholeSolution ? `${solution}` : `${c - b}/${a}`,
      description: `Solution: x = ${isWholeSolution ? solution : (solution).toFixed(2)}`
    },
  ];

  const currentStep = steps[Math.min(step, steps.length - 1)];

  // SVG dimensions
  const width = 380;
  const height = 180;
  const centerX = width / 2;
  const fulcrumY = 140;
  const beamY = 80;
  const beamLength = 280;

  // Calculate tilt based on balance
  const leftValue = step < 2 ? a * solution + b : (step < 4 ? a * solution : solution);
  const rightValue = step < 2 ? c : (step < 4 ? c - b : solution);
  const isBalanced = Math.abs(leftValue - rightValue) < 0.01;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Equation Balance Visualizer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Fulcrum (triangle) */}
            <polygon
              points={`${centerX},${fulcrumY} ${centerX - 20},${fulcrumY + 30} ${centerX + 20},${fulcrumY + 30}`}
              fill="#6b7280"
            />

            {/* Balance beam */}
            <line
              x1={centerX - beamLength / 2}
              y1={beamY}
              x2={centerX + beamLength / 2}
              y2={beamY}
              stroke="#e5e7eb"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Center pivot */}
            <circle cx={centerX} cy={beamY} r="8" fill="#f59e0b" />

            {/* Support lines */}
            <line x1={centerX} y1={beamY} x2={centerX} y2={fulcrumY} stroke="#6b7280" strokeWidth="3" />

            {/* Left pan */}
            <ellipse
              cx={centerX - beamLength / 2 + 30}
              cy={beamY + 40}
              rx="50"
              ry="15"
              fill="rgba(59, 130, 246, 0.3)"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <line
              x1={centerX - beamLength / 2 + 30}
              y1={beamY}
              x2={centerX - beamLength / 2 + 30}
              y2={beamY + 25}
              stroke="#6b7280"
              strokeWidth="2"
            />

            {/* Right pan */}
            <ellipse
              cx={centerX + beamLength / 2 - 30}
              cy={beamY + 40}
              rx="50"
              ry="15"
              fill="rgba(16, 185, 129, 0.3)"
              stroke="#10b981"
              strokeWidth="2"
            />
            <line
              x1={centerX + beamLength / 2 - 30}
              y1={beamY}
              x2={centerX + beamLength / 2 - 30}
              y2={beamY + 25}
              stroke="#6b7280"
              strokeWidth="2"
            />

            {/* Left side expression */}
            <text
              x={centerX - beamLength / 2 + 30}
              y={beamY + 45}
              fill="#3b82f6"
              fontSize="14"
              textAnchor="middle"
              fontWeight="bold"
            >
              {currentStep.left}
            </text>

            {/* Right side expression */}
            <text
              x={centerX + beamLength / 2 - 30}
              y={beamY + 45}
              fill="#10b981"
              fontSize="14"
              textAnchor="middle"
              fontWeight="bold"
            >
              {currentStep.right}
            </text>

            {/* Equals sign */}
            <text x={centerX} y={beamY + 45} fill="#f59e0b" fontSize="18" textAnchor="middle" fontWeight="bold">
              =
            </text>

            {/* Balance indicator */}
            {isBalanced && step === steps.length - 1 && (
              <text x={centerX} y={30} fill="#10b981" fontSize="12" textAnchor="middle">
                ✓ Balanced!
              </text>
            )}
          </svg>

          {/* Step description */}
          <div className="mt-2 text-center text-dark-300 text-sm">
            Step {step + 1}: {currentStep.description}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Coefficient (a): {a}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={a}
              onChange={(e) => { setA(Number(e.target.value)); setStep(0); }}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Constant (b): {b}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={b}
              onChange={(e) => { setB(Number(e.target.value)); setStep(0); }}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-dark-300 mb-2">
              Right side (c): {c}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={c}
              onChange={(e) => { setC(Number(e.target.value)); setStep(0); }}
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="px-4 py-2 bg-dark-700 text-dark-300 rounded disabled:opacity-50"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
              disabled={step === steps.length - 1}
              className="px-4 py-2 bg-primary-500 text-white rounded disabled:opacity-50"
            >
              Next →
            </button>
            <button
              onClick={() => setStep(0)}
              className="px-4 py-2 bg-dark-600 text-dark-300 rounded"
            >
              Reset
            </button>
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-primary-400">Equation:</span> {a}x + {b} = {c}
            </div>
            <div className="border-t border-dark-600 pt-2 text-dark-200">
              <span className="text-amber-400">Solution:</span> x = {isWholeSolution ? solution : solution.toFixed(2)}
            </div>
            <div className="text-dark-400 text-xs">
              Check: {a}({isWholeSolution ? solution : solution.toFixed(2)}) + {b} = {(a * solution + b).toFixed(0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
