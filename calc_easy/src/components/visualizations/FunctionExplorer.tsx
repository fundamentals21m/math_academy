import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type FunctionPreset = {
  name: string;
  f: (x: number) => number;
  label: string;
  description: string;
};

const PRESETS: FunctionPreset[] = [
  {
    name: 'x²',
    f: (x) => x * x,
    label: 'f(x) = x²',
    description: 'A parabola - each input x produces output x squared',
  },
  {
    name: '2x + 1',
    f: (x) => 2 * x + 1,
    label: 'f(x) = 2x + 1',
    description: 'A straight line with slope 2',
  },
  {
    name: 'x³',
    f: (x) => x * x * x,
    label: 'f(x) = x³',
    description: 'A cubic function - grows faster than x²',
  },
  {
    name: '1/x',
    f: (x) => 1 / x,
    label: 'f(x) = 1/x',
    description: 'A hyperbola - undefined at x = 0',
  },
  {
    name: 'sin(x)',
    f: Math.sin,
    label: 'f(x) = sin(x)',
    description: 'The sine wave - oscillates between -1 and 1',
  },
  {
    name: '√x',
    f: (x) => x >= 0 ? Math.sqrt(x) : NaN,
    label: 'f(x) = √x',
    description: 'Square root - only defined for x ≥ 0',
  },
];

export function FunctionExplorer({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [inputX, setInputX] = useState(2);
  const [showTrace, setShowTrace] = useState(true);

  // SVG dimensions
  const width = 400;
  const height = 300;
  const padding = 40;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Scale
  const xMin = -4;
  const xMax = 4;
  const yMin = -3;
  const yMax = 5;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Calculate output
  const outputY = preset.f(inputX);
  const isValidOutput = isFinite(outputY) && outputY >= yMin - 1 && outputY <= yMax + 1;

  // Generate curve path
  const curvePath = useMemo(() => {
    const points: string[] = [];
    let lastValid = false;

    for (let i = 0; i <= 200; i++) {
      const x = xMin + (i / 200) * (xMax - xMin);
      const y = preset.f(x);

      if (isFinite(y) && y >= yMin - 2 && y <= yMax + 2) {
        const svgX = toSvgX(x);
        const svgY = Math.max(padding - 10, Math.min(height - padding + 10, toSvgY(y)));
        points.push(`${!lastValid ? 'M' : 'L'} ${svgX} ${svgY}`);
        lastValid = true;
      } else {
        lastValid = false;
      }
    }
    return points.join(' ');
  }, [preset, xMin, xMax, yMin, yMax, toSvgX, toSvgY, height, padding]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Function Explorer</h3>

      <p className="text-dark-300 mb-6">
        A <strong>function</strong> is a rule that assigns exactly one output to each input.
        Move the slider to see how the input x maps to the output f(x).
      </p>

      {/* Function presets */}
      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((p) => (
          <button
            key={p.name}
            onClick={() => setPreset(p)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              preset.name === p.name
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Input control */}
      <div className="mb-4">
        <label className="text-blue-400 text-sm">Input: x = {inputX.toFixed(2)}</label>
        <input
          type="range"
          min="-3"
          max="3"
          step="0.1"
          value={inputX}
          onChange={(e) => setInputX(parseFloat(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Toggle */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowTrace(!showTrace)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showTrace ? 'bg-orange-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Show Trace Lines
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-2, -1, 0, 1, 2, 3, 4].map((i) => (
            <g key={`h${i}`}>
              <line
                x1={toSvgX(xMin)}
                y1={toSvgY(i)}
                x2={toSvgX(xMax)}
                y2={toSvgY(i)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              {i !== 0 && (
                <text x={toSvgX(0) - 8} y={toSvgY(i) + 4} fill="#6b7280" fontSize="10" textAnchor="end">
                  {i}
                </text>
              )}
            </g>
          ))}
          {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
            <g key={`v${i}`}>
              <line
                x1={toSvgX(i)}
                y1={toSvgY(yMin)}
                x2={toSvgX(i)}
                y2={toSvgY(yMax)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              {i !== 0 && (
                <text x={toSvgX(i)} y={toSvgY(0) + 15} fill="#6b7280" fontSize="10" textAnchor="middle">
                  {i}
                </text>
              )}
            </g>
          ))}

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#10b981" strokeWidth={3} />

          {/* Trace lines */}
          {showTrace && isValidOutput && (
            <>
              {/* Vertical line from x-axis to curve */}
              <line
                x1={toSvgX(inputX)}
                y1={toSvgY(0)}
                x2={toSvgX(inputX)}
                y2={toSvgY(outputY)}
                stroke="#3b82f6"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              {/* Horizontal line from curve to y-axis */}
              <line
                x1={toSvgX(inputX)}
                y1={toSvgY(outputY)}
                x2={toSvgX(0)}
                y2={toSvgY(outputY)}
                stroke="#f97316"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </>
          )}

          {/* Input point on x-axis */}
          <circle cx={toSvgX(inputX)} cy={toSvgY(0)} r={6} fill="#3b82f6" />
          <text x={toSvgX(inputX)} y={toSvgY(0) + 20} fill="#3b82f6" fontSize="12" textAnchor="middle" fontWeight="bold">
            x
          </text>

          {/* Output point on curve */}
          {isValidOutput && (
            <>
              <circle cx={toSvgX(inputX)} cy={toSvgY(outputY)} r={8} fill="#f97316" />
              <text x={toSvgX(0) - 15} y={toSvgY(outputY) + 4} fill="#f97316" fontSize="12" textAnchor="end" fontWeight="bold">
                f(x)
              </text>
            </>
          )}

          {/* Axis labels */}
          <text x={width - padding + 10} y={toSvgY(0) + 4} fill="#9ca3af" fontSize="12">x</text>
          <text x={toSvgX(0) + 5} y={padding - 10} fill="#9ca3af" fontSize="12">y</text>
        </svg>
      </div>

      {/* Result */}
      <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-orange-500/20 border border-dark-600">
        <p className="text-center font-mono text-lg">
          <span className="text-dark-300">f(</span>
          <span className="text-blue-400 font-bold">{inputX.toFixed(2)}</span>
          <span className="text-dark-300">) = </span>
          <span className="text-orange-400 font-bold">
            {isValidOutput ? outputY.toFixed(4) : 'undefined'}
          </span>
        </p>
      </div>

      {/* Description */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">{preset.label}</p>
        <p className="text-dark-400 text-sm mt-1">{preset.description}</p>
        <p className="text-dark-300 text-sm mt-2">
          The <span className="text-blue-400">blue point</span> is your input x.
          The <span className="text-orange-400">orange point</span> is the output f(x).
          The function "machine" transforms inputs into outputs!
        </p>
      </div>
    </div>
  );
}
