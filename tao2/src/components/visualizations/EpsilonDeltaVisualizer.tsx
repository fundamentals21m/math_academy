import { useState, useMemo } from 'react';

type FunctionType = 'linear' | 'quadratic' | 'sqrt' | 'sin';

export function EpsilonDeltaVisualizer() {
  const [funcType, setFuncType] = useState<FunctionType>('quadratic');
  const [x0, setX0] = useState(1);
  const [epsilon, setEpsilon] = useState(0.3);
  const [delta, setDelta] = useState(0.2);

  const width = 400;
  const height = 300;
  const padding = 50;

  const { f, fName, optimalDelta } = useMemo(() => {
    switch (funcType) {
      case 'linear':
        return {
          f: (x: number) => 2 * x + 1,
          fName: 'f(x) = 2x + 1',
          optimalDelta: epsilon / 2, // |f(x) - f(x0)| = 2|x - x0| < ε ⟹ |x - x0| < ε/2
        };
      case 'quadratic':
        return {
          f: (x: number) => x * x,
          fName: 'f(x) = x²',
          // For x near x0: |x² - x0²| = |x+x0||x-x0| ≤ (|x0|+δ+|x0|)|x-x0|
          optimalDelta: Math.min(epsilon / (2 * Math.abs(x0) + 1), 0.5),
        };
      case 'sqrt':
        return {
          f: (x: number) => Math.sqrt(Math.max(0, x)),
          fName: 'f(x) = √x',
          optimalDelta: epsilon * epsilon, // |√x - √x0| < ε at x0 = 1
        };
      case 'sin':
        return {
          f: (x: number) => Math.sin(x),
          fName: 'f(x) = sin(x)',
          optimalDelta: epsilon, // |sin(x) - sin(x0)| ≤ |x - x0|
        };
      default:
        return { f: (x: number) => x, fName: '', optimalDelta: epsilon };
    }
  }, [funcType, epsilon, x0]);

  const fx0 = f(x0);

  // Generate function curve
  const xMin = Math.max(-1, x0 - 2);
  const xMax = x0 + 2;
  const yMin = Math.min(f(xMin), f(xMax), fx0 - epsilon - 0.5);
  const yMax = Math.max(f(xMin), f(xMax), fx0 + epsilon + 0.5);

  const scaleX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);

  const functionCurve = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 100; i++) {
      const x = xMin + (i / 100) * (xMax - xMin);
      if (funcType !== 'sqrt' || x >= 0) {
        const y = f(x);
        points.push(`${scaleX(x)},${scaleY(y)}`);
      }
    }
    return points.join(' ');
  }, [f, xMin, xMax, funcType]);

  // Check if current delta works for epsilon
  const deltaWorks = useMemo(() => {
    // Check multiple points in (x0 - delta, x0 + delta)
    for (let i = 0; i <= 20; i++) {
      const x = x0 - delta + (2 * delta * i) / 20;
      if (funcType === 'sqrt' && x < 0) continue;
      if (Math.abs(f(x) - fx0) >= epsilon) return false;
    }
    return true;
  }, [f, x0, delta, epsilon, fx0, funcType]);

  return (
    <div className="p-4 bg-dark-800 rounded-lg">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">ε-δ Definition of Continuity</h3>

      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">Function</label>
          <select
            value={funcType}
            onChange={(e) => setFuncType(e.target.value as FunctionType)}
            className="px-3 py-2 bg-dark-700 text-dark-100 rounded border border-dark-600"
          >
            <option value="linear">2x + 1</option>
            <option value="quadratic">x²</option>
            <option value="sqrt">√x</option>
            <option value="sin">sin(x)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">x₀ = {x0.toFixed(1)}</label>
          <input
            type="range"
            min={funcType === 'sqrt' ? 0.1 : -1}
            max="2"
            step="0.1"
            value={x0}
            onChange={(e) => setX0(parseFloat(e.target.value))}
            className="w-20"
          />
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">ε = {epsilon.toFixed(2)}</label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={epsilon}
            onChange={(e) => setEpsilon(parseFloat(e.target.value))}
            className="w-20"
          />
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">δ = {delta.toFixed(2)}</label>
          <input
            type="range"
            min="0.05"
            max="1"
            step="0.05"
            value={delta}
            onChange={(e) => setDelta(parseFloat(e.target.value))}
            className="w-20"
          />
        </div>
      </div>

      <svg width={width} height={height} className="bg-dark-900 rounded">
        {/* Epsilon band (horizontal) */}
        <rect
          x={padding}
          y={scaleY(fx0 + epsilon)}
          width={width - 2 * padding}
          height={scaleY(fx0 - epsilon) - scaleY(fx0 + epsilon)}
          fill="rgba(34, 197, 94, 0.2)"
        />
        <line x1={padding} y1={scaleY(fx0 + epsilon)} x2={width - padding} y2={scaleY(fx0 + epsilon)} stroke="#22c55e" strokeDasharray="3,3" />
        <line x1={padding} y1={scaleY(fx0 - epsilon)} x2={width - padding} y2={scaleY(fx0 - epsilon)} stroke="#22c55e" strokeDasharray="3,3" />

        {/* Delta band (vertical) */}
        <rect
          x={scaleX(x0 - delta)}
          y={padding}
          width={scaleX(x0 + delta) - scaleX(x0 - delta)}
          height={height - 2 * padding}
          fill="rgba(59, 130, 246, 0.2)"
        />
        <line x1={scaleX(x0 - delta)} y1={padding} x2={scaleX(x0 - delta)} y2={height - padding} stroke="#3b82f6" strokeDasharray="3,3" />
        <line x1={scaleX(x0 + delta)} y1={padding} x2={scaleX(x0 + delta)} y2={height - padding} stroke="#3b82f6" strokeDasharray="3,3" />

        {/* Function curve */}
        <polyline points={functionCurve} fill="none" stroke="#e5e7eb" strokeWidth="2" />

        {/* Point (x0, f(x0)) */}
        <circle cx={scaleX(x0)} cy={scaleY(fx0)} r={6} fill="#ef4444" />

        {/* Axes */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#6b7280" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#6b7280" />

        {/* Labels */}
        <text x={scaleX(x0)} y={height - padding + 15} fill="#9ca3af" fontSize="10" textAnchor="middle">x₀</text>
        <text x={padding - 5} y={scaleY(fx0)} fill="#9ca3af" fontSize="10" textAnchor="end">f(x₀)</text>
      </svg>

      <div className="mt-4 text-sm text-dark-400">
        <p className="font-medium text-dark-200">{fName}</p>
        <p>f(x₀) = f({x0.toFixed(1)}) = {fx0.toFixed(3)}</p>
        <p className={deltaWorks ? 'text-green-400' : 'text-red-400'}>
          {deltaWorks
            ? `✓ This δ works: |x - x₀| < ${delta.toFixed(2)} ⟹ |f(x) - f(x₀)| < ${epsilon.toFixed(2)}`
            : `✗ This δ is too large: some points in the δ-interval escape the ε-band`}
        </p>
        <p className="mt-2 text-dark-500">
          Optimal δ ≈ {optimalDelta.toFixed(3)} for this ε
        </p>
      </div>
    </div>
  );
}
