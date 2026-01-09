import { useState, useEffect, useCallback } from 'react';

interface Props {
  className?: string;
}

type Paradox = 'achilles' | 'dichotomy' | 'arrow';

export function ZenoParadoxes({ className = '' }: Props) {
  const [paradox, setParadox] = useState<Paradox>('achilles');
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [step, setStep] = useState(0);

  // Achilles parameters
  const achillesSpeed = 10; // units per second
  const tortoiseSpeed = 1;  // units per second
  const tortoiseHead = 10;  // head start

  // Dichotomy parameters
  const dichotomySteps = 8;

  // Animation
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime(t => {
        if (paradox === 'achilles') {
          // Achilles catches tortoise when: achillesSpeed * t = tortoiseHead + tortoiseSpeed * t
          // t = tortoiseHead / (achillesSpeed - tortoiseSpeed)
          const catchTime = tortoiseHead / (achillesSpeed - tortoiseSpeed);
          if (t >= catchTime + 0.5) {
            setIsRunning(false);
            return catchTime + 0.5;
          }
        } else if (paradox === 'dichotomy') {
          if (t >= 2) {
            setIsRunning(false);
            return 2;
          }
        } else {
          if (t >= 3) {
            setIsRunning(false);
            return 3;
          }
        }
        return t + 0.05;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isRunning, paradox]);

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setStep(0);
  };

  const stepForward = () => {
    setStep(s => Math.min(s + 1, 10));
  };

  // SVG dimensions
  const width = 400;
  const height = 200;
  const trackY = 120;

  // Positions
  const achillesPos = Math.min(time * achillesSpeed, 20) * 15 + 30;
  const tortoisePos = (tortoiseHead + time * tortoiseSpeed) * 15 + 30;

  // Dichotomy: position = sum of 1/2 + 1/4 + 1/8 + ... for each step
  const dichotomyPos = useMemo(() => {
    let pos = 0;
    for (let i = 1; i <= step; i++) {
      pos += Math.pow(0.5, i);
    }
    return pos;
  }, [step]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Zeno's Paradoxes</h3>

      <p className="text-dark-300 mb-6">
        Zeno of Elea posed paradoxes challenging our understanding of motion, space, and infinity.
        These puzzles drove the development of calculus and the theory of limits.
      </p>

      {/* Paradox selector */}
      <div className="flex gap-2 mb-4">
        {[
          { type: 'achilles' as const, label: 'Achilles & Tortoise' },
          { type: 'dichotomy' as const, label: 'Dichotomy' },
          { type: 'arrow' as const, label: 'Arrow' },
        ].map(({ type, label }) => (
          <button
            key={type}
            onClick={() => { setParadox(type); reset(); }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              paradox === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Visualization */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Track */}
          <line x1={30} y1={trackY} x2={370} y2={trackY} stroke="#4b5563" strokeWidth={2} />

          {paradox === 'achilles' && (
            <>
              {/* Achilles */}
              <g transform={`translate(${achillesPos}, ${trackY - 30})`}>
                <circle cx={0} cy={0} r={12} fill="#3b82f6" />
                <text x={0} y={-18} fill="#3b82f6" fontSize="10" textAnchor="middle">Achilles</text>
              </g>

              {/* Tortoise */}
              <g transform={`translate(${tortoisePos}, ${trackY - 30})`}>
                <ellipse cx={0} cy={0} rx={15} ry={8} fill="#10b981" />
                <text x={0} y={-15} fill="#10b981" fontSize="10" textAnchor="middle">Tortoise</text>
              </g>

              {/* Start markers */}
              <text x={30} y={trackY + 20} fill="#6b7280" fontSize="10" textAnchor="middle">0</text>
              <text x={30 + tortoiseHead * 15} y={trackY + 20} fill="#10b981" fontSize="10" textAnchor="middle">Head start</text>
            </>
          )}

          {paradox === 'dichotomy' && (
            <>
              {/* Goal */}
              <line x1={350} y1={trackY - 20} x2={350} y2={trackY + 20} stroke="#f97316" strokeWidth={3} />
              <text x={350} y={trackY + 35} fill="#f97316" fontSize="10" textAnchor="middle">Goal</text>

              {/* Runner */}
              <g transform={`translate(${30 + dichotomyPos * 320}, ${trackY - 25})`}>
                <circle cx={0} cy={0} r={10} fill="#3b82f6" />
              </g>

              {/* Halfway markers */}
              {Array.from({ length: Math.min(step, 6) }, (_, i) => {
                const x = 30 + (1 - Math.pow(0.5, i + 1)) * 320;
                return (
                  <g key={i}>
                    <line x1={x} y1={trackY - 5} x2={x} y2={trackY + 5} stroke="#6b7280" strokeWidth={1} />
                    <text x={x} y={trackY + 18} fill="#6b7280" fontSize="8" textAnchor="middle">
                      1/{Math.pow(2, i + 1)}
                    </text>
                  </g>
                );
              })}

              {/* Progress display */}
              <text x={200} y={40} fill="#3b82f6" fontSize="12" textAnchor="middle">
                Distance covered: {dichotomyPos.toFixed(6)} of 1
              </text>
            </>
          )}

          {paradox === 'arrow' && (
            <>
              {/* Arrow positions */}
              {[0, 1, 2, 3, 4].map(i => {
                const x = 50 + i * 70;
                const opacity = Math.abs(time - i * 0.6) < 0.3 ? 1 : 0.2;
                return (
                  <g key={i} opacity={opacity}>
                    <polygon
                      points={`${x},${trackY - 25} ${x + 25},${trackY - 20} ${x},${trackY - 15}`}
                      fill="#f97316"
                    />
                    <text x={x + 12} y={trackY + 15} fill="#6b7280" fontSize="9" textAnchor="middle">
                      t={i}
                    </text>
                  </g>
                );
              })}
              <text x={200} y={40} fill="#f97316" fontSize="11" textAnchor="middle">
                At any instant, the arrow occupies a space equal to itself...
              </text>
              <text x={200} y={55} fill="#f97316" fontSize="11" textAnchor="middle">
                So how can it be moving?
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Controls */}
      <div className="flex gap-2 mt-4">
        {paradox === 'dichotomy' ? (
          <>
            <button
              onClick={stepForward}
              disabled={step >= 10}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 disabled:opacity-50 transition-colors"
            >
              Take Half Step ({step}/10)
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 rounded-lg bg-dark-600 text-dark-300 font-medium hover:bg-dark-500 transition-colors"
            >
              Reset
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
            >
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 rounded-lg bg-dark-600 text-dark-300 font-medium hover:bg-dark-500 transition-colors"
            >
              Reset
            </button>
          </>
        )}
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        {paradox === 'achilles' && (
          <>
            <p className="text-emerald-400 font-medium">Achilles and the Tortoise</p>
            <p className="text-dark-300 text-sm mt-2">
              Achilles gives the tortoise a head start. When Achilles reaches where the tortoise was,
              the tortoise has moved ahead. This repeats infinitely—yet Achilles clearly catches up!
            </p>
            <p className="text-dark-400 text-xs mt-2">
              Resolution: The infinite series 1 + 1/10 + 1/100 + ... converges to a finite sum.
            </p>
          </>
        )}
        {paradox === 'dichotomy' && (
          <>
            <p className="text-emerald-400 font-medium">The Dichotomy</p>
            <p className="text-dark-300 text-sm mt-2">
              To reach the goal, you must first go half the distance, then half of what remains,
              then half again... infinitely. How can you complete infinitely many steps?
            </p>
            <p className="text-dark-400 text-xs mt-2">
              Resolution: 1/2 + 1/4 + 1/8 + ... = 1. The infinite series sums to exactly 1.
            </p>
          </>
        )}
        {paradox === 'arrow' && (
          <>
            <p className="text-emerald-400 font-medium">The Arrow</p>
            <p className="text-dark-300 text-sm mt-2">
              At each instant, an arrow in flight occupies a space exactly equal to itself—
              it is at rest. If time is composed of instants, when does motion occur?
            </p>
            <p className="text-dark-400 text-xs mt-2">
              Resolution: Velocity is defined as a limit, not at an instant but as Δt → 0.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function useMemo<T>(fn: () => T, deps: unknown[]): T {
  const [value, setValue] = useState<T>(fn);
  useEffect(() => {
    setValue(fn());
  }, deps);
  return value;
}
