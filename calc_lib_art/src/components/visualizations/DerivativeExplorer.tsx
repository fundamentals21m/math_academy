import { useState, useMemo } from 'react';

type FunctionType = 'quadratic' | 'cubic' | 'sine' | 'exp';

export function DerivativeExplorer() {
  const [funcType, setFuncType] = useState<FunctionType>('quadratic');
  const [xPoint, setXPoint] = useState(1);

  const width = 600;
  const height = 400;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Function definitions
  const functions: Record<FunctionType, { f: (x: number) => number; fp: (x: number) => number; label: string; fpLabel: string }> = {
    quadratic: {
      f: (x) => x * x,
      fp: (x) => 2 * x,
      label: 'f(x) = x²',
      fpLabel: "f'(x) = 2x",
    },
    cubic: {
      f: (x) => x * x * x - 3 * x,
      fp: (x) => 3 * x * x - 3,
      label: 'f(x) = x³ - 3x',
      fpLabel: "f'(x) = 3x² - 3",
    },
    sine: {
      f: (x) => Math.sin(x),
      fp: (x) => Math.cos(x),
      label: 'f(x) = sin(x)',
      fpLabel: "f'(x) = cos(x)",
    },
    exp: {
      f: (x) => Math.exp(x / 2) - 1,
      fp: (x) => Math.exp(x / 2) / 2,
      label: 'f(x) = eˣ/² - 1',
      fpLabel: "f'(x) = ½eˣ/²",
    },
  };

  const { f, fp, label, fpLabel } = functions[funcType];

  // Coordinate transforms (adjusted per function)
  const xMin = -3, xMax = 3;
  const yMin = -4, yMax = 6;
  const toSvgX = (x: number) => margin.left + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => margin.top + plotHeight - ((y - yMin) / (yMax - yMin)) * plotHeight;

  // Generate curve points for f(x)
  const fCurve = useMemo(() => {
    const points: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.05) {
      const y = f(x);
      if (y >= yMin - 1 && y <= yMax + 1) {
        points.push(`${toSvgX(x)},${toSvgY(Math.max(yMin, Math.min(yMax, y)))}`);
      }
    }
    return points.join(' ');
  }, [funcType]);

  // Generate curve points for f'(x)
  const fpCurve = useMemo(() => {
    const points: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.05) {
      const y = fp(x);
      if (y >= yMin - 1 && y <= yMax + 1) {
        points.push(`${toSvgX(x)},${toSvgY(Math.max(yMin, Math.min(yMax, y)))}`);
      }
    }
    return points.join(' ');
  }, [funcType]);

  const yAtPoint = f(xPoint);
  const slope = fp(xPoint);

  // Tangent line
  const tangentX1 = xPoint - 1;
  const tangentX2 = xPoint + 1;
  const tangentY1 = yAtPoint + slope * (tangentX1 - xPoint);
  const tangentY2 = yAtPoint + slope * (tangentX2 - xPoint);

  // Determine concavity
  const secondDerivApprox = (fp(xPoint + 0.01) - fp(xPoint - 0.01)) / 0.02;
  const concavity = secondDerivApprox > 0.1 ? 'up' : secondDerivApprox < -0.1 ? 'down' : 'inflection';

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Derivative Explorer
      </h4>

      {/* Function selector */}
      <div className="flex gap-2 mb-4">
        {(Object.keys(functions) as FunctionType[]).map((type) => (
          <button
            key={type}
            onClick={() => setFuncType(type)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              funcType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {functions[type].label}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-4">
        <label className="text-dark-300 text-sm">x =</label>
        <input
          type="range"
          min="-2.5"
          max="2.5"
          step="0.1"
          value={xPoint}
          onChange={(e) => setXPoint(parseFloat(e.target.value))}
          className="flex-1 accent-primary-500"
        />
        <span className="text-primary-400 font-mono w-12">{xPoint.toFixed(1)}</span>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* Grid */}
        {[-2, -1, 0, 1, 2].map((x) => (
          <line
            key={`vgrid-${x}`}
            x1={toSvgX(x)}
            y1={margin.top}
            x2={toSvgX(x)}
            y2={height - margin.bottom}
            stroke="#374151"
            strokeDasharray="4,4"
          />
        ))}
        {[-2, 0, 2, 4].map((y) => (
          <line
            key={`hgrid-${y}`}
            x1={margin.left}
            y1={toSvgY(y)}
            x2={width - margin.right}
            y2={toSvgY(y)}
            stroke="#374151"
            strokeDasharray="4,4"
          />
        ))}

        {/* Axes */}
        <line
          x1={margin.left}
          y1={toSvgY(0)}
          x2={width - margin.right}
          y2={toSvgY(0)}
          stroke="#9CA3AF"
          strokeWidth={2}
        />
        <line
          x1={toSvgX(0)}
          y1={margin.top}
          x2={toSvgX(0)}
          y2={height - margin.bottom}
          stroke="#9CA3AF"
          strokeWidth={2}
        />

        {/* Axis labels */}
        {[-2, -1, 1, 2].map((x) => (
          <text
            key={`xlabel-${x}`}
            x={toSvgX(x)}
            y={toSvgY(0) + 18}
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="11"
          >
            {x}
          </text>
        ))}
        {[-2, 2, 4].map((y) => (
          <text
            key={`ylabel-${y}`}
            x={toSvgX(0) - 8}
            y={toSvgY(y) + 4}
            textAnchor="end"
            fill="#9CA3AF"
            fontSize="11"
          >
            {y}
          </text>
        ))}

        {/* f(x) curve */}
        <polyline
          points={fCurve}
          fill="none"
          stroke="#3B82F6"
          strokeWidth={3}
        />

        {/* f'(x) curve */}
        <polyline
          points={fpCurve}
          fill="none"
          stroke="#10B981"
          strokeWidth={2}
          strokeDasharray="6,3"
        />

        {/* Tangent line at current point */}
        <line
          x1={toSvgX(tangentX1)}
          y1={toSvgY(tangentY1)}
          x2={toSvgX(tangentX2)}
          y2={toSvgY(tangentY2)}
          stroke="#F59E0B"
          strokeWidth={2}
        />

        {/* Current point on f(x) */}
        <circle
          cx={toSvgX(xPoint)}
          cy={toSvgY(yAtPoint)}
          r={6}
          fill="#3B82F6"
          stroke="white"
          strokeWidth={2}
        />

        {/* Current point on f'(x) */}
        <circle
          cx={toSvgX(xPoint)}
          cy={toSvgY(slope)}
          r={5}
          fill="#10B981"
          stroke="white"
          strokeWidth={2}
        />

        {/* Vertical line connecting them */}
        <line
          x1={toSvgX(xPoint)}
          y1={toSvgY(yAtPoint)}
          x2={toSvgX(xPoint)}
          y2={toSvgY(slope)}
          stroke="#9CA3AF"
          strokeWidth={1}
          strokeDasharray="3,3"
        />

        {/* Legend */}
        <g transform={`translate(${margin.left + 10}, ${margin.top + 10})`}>
          <rect x={0} y={0} width={130} height={55} fill="#1F2937" rx={4} />
          <line x1={10} y1={15} x2={30} y2={15} stroke="#3B82F6" strokeWidth={3} />
          <text x={40} y={19} fill="#3B82F6" fontSize="11">{label}</text>
          <line x1={10} y1={35} x2={30} y2={35} stroke="#10B981" strokeWidth={2} strokeDasharray="6,3" />
          <text x={40} y={39} fill="#10B981" fontSize="11">{fpLabel}</text>
        </g>
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">f(x)</div>
          <div className="text-blue-400 font-mono text-lg">{yAtPoint.toFixed(2)}</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">f'(x) = slope</div>
          <div className="text-emerald-400 font-mono text-lg">{slope.toFixed(2)}</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Slope Sign</div>
          <div className={`font-mono text-lg ${slope > 0.01 ? 'text-emerald-400' : slope < -0.01 ? 'text-red-400' : 'text-amber-400'}`}>
            {slope > 0.01 ? '+ (increasing)' : slope < -0.01 ? '- (decreasing)' : '0 (flat)'}
          </div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">Concavity</div>
          <div className={`font-mono text-lg ${concavity === 'up' ? 'text-emerald-400' : concavity === 'down' ? 'text-red-400' : 'text-amber-400'}`}>
            {concavity === 'up' ? '∪ (concave up)' : concavity === 'down' ? '∩ (concave down)' : '— (inflection)'}
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">Key Connection:</span>{' '}
          The derivative f'(x) tells us the <em>slope</em> of f(x) at each point.
          Where f'(x) &gt; 0, f is increasing. Where f'(x) &lt; 0, f is decreasing.
          Where f'(x) = 0, f has a local max or min (critical point).
        </p>
      </div>
    </div>
  );
}
