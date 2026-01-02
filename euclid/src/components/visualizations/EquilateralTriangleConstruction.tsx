import { useState, useEffect } from 'react';

/**
 * Interactive visualization of Proposition I.1: Constructing an equilateral triangle
 * Shows the two circles centered at each endpoint of a line segment
 */
export function EquilateralTriangleConstruction() {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const width = 400;
  const height = 350;
  const cx = width / 2;
  const cy = height / 2 + 30;

  // Line segment AB
  const ax = cx - 80;
  const ay = cy;
  const bx = cx + 80;
  const by = cy;
  const radius = Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2);

  // Point C (intersection of circles above the line)
  const cxPoint = cx;
  const cyPoint = cy - radius * Math.sin(Math.PI / 3);

  useEffect(() => {
    if (isAnimating && step < 4) {
      const timer = setTimeout(() => setStep(s => s + 1), 1200);
      return () => clearTimeout(timer);
    }
    if (step >= 4) setIsAnimating(false);
  }, [step, isAnimating]);

  const startAnimation = () => {
    setStep(0);
    setIsAnimating(true);
  };

  const stepDescriptions = [
    'Given: Line segment AB',
    'Step 1: Draw circle with center A and radius AB',
    'Step 2: Draw circle with center B and radius BA',
    'Step 3: The circles intersect at point C',
    'Result: Triangle ABC is equilateral (AC = AB = BC)',
  ];

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Proposition I.1: Equilateral Triangle Construction
      </h3>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <svg width={width} height={height} className="bg-dark-900 rounded-lg w-full">
            {/* Line segment AB - always visible */}
            <line
              x1={ax}
              y1={ay}
              x2={bx}
              y2={by}
              stroke="#3b82f6"
              strokeWidth="3"
            />

            {/* Point A */}
            <circle cx={ax} cy={ay} r="5" fill="#3b82f6" />
            <text x={ax} y={ay + 25} fill="#3b82f6" textAnchor="middle" fontSize="16" fontWeight="bold">A</text>

            {/* Point B */}
            <circle cx={bx} cy={by} r="5" fill="#3b82f6" />
            <text x={bx} y={by + 25} fill="#3b82f6" textAnchor="middle" fontSize="16" fontWeight="bold">B</text>

            {/* Circle centered at A */}
            {step >= 1 && (
              <circle
                cx={ax}
                cy={ay}
                r={radius}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray={step === 1 ? "8,4" : "none"}
                opacity={step === 1 ? 1 : 0.5}
              />
            )}

            {/* Circle centered at B */}
            {step >= 2 && (
              <circle
                cx={bx}
                cy={by}
                r={radius}
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray={step === 2 ? "8,4" : "none"}
                opacity={step === 2 ? 1 : 0.5}
              />
            )}

            {/* Point C and connecting lines */}
            {step >= 3 && (
              <>
                <circle cx={cxPoint} cy={cyPoint} r="5" fill="#ef4444" />
                <text x={cxPoint} y={cyPoint - 15} fill="#ef4444" textAnchor="middle" fontSize="16" fontWeight="bold">C</text>
              </>
            )}

            {/* Triangle sides AC and BC */}
            {step >= 4 && (
              <>
                <line
                  x1={ax}
                  y1={ay}
                  x2={cxPoint}
                  y2={cyPoint}
                  stroke="#a855f7"
                  strokeWidth="3"
                />
                <line
                  x1={bx}
                  y1={by}
                  x2={cxPoint}
                  y2={cyPoint}
                  stroke="#a855f7"
                  strokeWidth="3"
                />

                {/* Filled triangle */}
                <polygon
                  points={`${ax},${ay} ${bx},${by} ${cxPoint},${cyPoint}`}
                  fill="rgba(168, 85, 247, 0.15)"
                  stroke="none"
                />
              </>
            )}
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          <div className="bg-dark-700 rounded-lg p-4">
            <p className="text-dark-200 font-medium">{stepDescriptions[step]}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setStep(s => Math.max(0, s - 1))}
              disabled={step === 0 || isAnimating}
              className="px-4 py-2 bg-dark-700 hover:bg-dark-600 disabled:opacity-50 rounded-lg text-dark-200 transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(s => Math.min(4, s + 1))}
              disabled={step === 4 || isAnimating}
              className="px-4 py-2 bg-dark-700 hover:bg-dark-600 disabled:opacity-50 rounded-lg text-dark-200 transition-colors"
            >
              Next →
            </button>
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 rounded-lg text-white transition-colors"
            >
              {isAnimating ? 'Playing...' : '▶ Animate'}
            </button>
          </div>

          <div className="bg-dark-700/50 rounded-lg p-4 text-sm text-dark-300">
            <p><strong className="text-amber-400">Key insight:</strong> Both circles have the same radius (the length AB).
            Since C lies on both circles, AC = AB and BC = AB, making the triangle equilateral.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
