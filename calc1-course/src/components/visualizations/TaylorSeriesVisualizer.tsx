import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type FunctionPreset = {
  name: string;
  f: (x: number) => number;
  taylorCoeffs: (n: number) => number; // coefficient a_n for (x-c)^n / n!
  center: number;
  label: string;
};

// Factorial helper
const factorial = (n: number): number => {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};

const PRESETS: FunctionPreset[] = [
  {
    name: 'eˣ',
    f: Math.exp,
    taylorCoeffs: () => 1, // All derivatives of e^x at 0 are 1
    center: 0,
    label: 'f(x) = eˣ'
  },
  {
    name: 'sin(x)',
    f: Math.sin,
    taylorCoeffs: (n) => {
      if (n % 2 === 0) return 0;
      return Math.pow(-1, (n - 1) / 2);
    },
    center: 0,
    label: 'f(x) = sin(x)'
  },
  {
    name: 'cos(x)',
    f: Math.cos,
    taylorCoeffs: (n) => {
      if (n % 2 === 1) return 0;
      return Math.pow(-1, n / 2);
    },
    center: 0,
    label: 'f(x) = cos(x)'
  },
  {
    name: 'ln(1+x)',
    f: (x) => Math.log(1 + x),
    taylorCoeffs: (n) => {
      if (n === 0) return 0;
      return Math.pow(-1, n + 1) * factorial(n - 1);
    },
    center: 0,
    label: 'f(x) = ln(1+x)'
  },
  {
    name: '1/(1-x)',
    f: (x) => 1 / (1 - x),
    taylorCoeffs: (n) => factorial(n), // n-th derivative at 0 is n!
    center: 0,
    label: 'f(x) = 1/(1-x)'
  },
];

export function TaylorSeriesVisualizer({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [degree, setDegree] = useState(3);

  // SVG dimensions
  const width = 400;
  const height = 300;
  const padding = 40;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Scale
  const xMin = -3;
  const xMax = 3;
  const yMin = -2;
  const yMax = 4;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Evaluate Taylor polynomial
  const evalTaylor = (x: number, n: number): number => {
    let sum = 0;
    for (let k = 0; k <= n; k++) {
      const coeff = preset.taylorCoeffs(k);
      sum += (coeff * Math.pow(x - preset.center, k)) / factorial(k);
    }
    return sum;
  };

  // Generate original function path
  const funcPath = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 200; i++) {
      const x = xMin + (i / 200) * (xMax - xMin);
      const y = preset.f(x);
      if (isFinite(y) && Math.abs(y) < 100) {
        const svgX = toSvgX(x);
        const svgY = Math.max(padding, Math.min(height - padding, toSvgY(y)));
        if (svgY >= padding && svgY <= height - padding) {
          points.push(`${points.length === 0 ? 'M' : 'L'} ${svgX} ${svgY}`);
        }
      }
    }
    return points.join(' ');
  }, [preset, toSvgX, toSvgY, xMin, xMax, yMin, yMax, height, padding]);

  // Generate Taylor polynomial path
  const taylorPath = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 200; i++) {
      const x = xMin + (i / 200) * (xMax - xMin);
      const y = evalTaylor(x, degree);
      if (isFinite(y) && Math.abs(y) < 100) {
        const svgX = toSvgX(x);
        const svgY = Math.max(padding, Math.min(height - padding, toSvgY(y)));
        if (svgY >= padding && svgY <= height - padding) {
          points.push(`${points.length === 0 ? 'M' : 'L'} ${svgX} ${svgY}`);
        }
      }
    }
    return points.join(' ');
  }, [preset, degree, evalTaylor, toSvgX, toSvgY, xMin, xMax, height, padding]);

  // Calculate max error on visible region
  const maxError = useMemo(() => {
    let maxErr = 0;
    for (let i = 0; i <= 100; i++) {
      const x = xMin + (i / 100) * (xMax - xMin);
      const actual = preset.f(x);
      const approx = evalTaylor(x, degree);
      if (isFinite(actual) && isFinite(approx)) {
        maxErr = Math.max(maxErr, Math.abs(actual - approx));
      }
    }
    return maxErr;
  }, [preset, degree, evalTaylor, xMin, xMax]);

  // Generate Taylor polynomial formula
  const taylorFormula = useMemo(() => {
    const terms: string[] = [];
    for (let k = 0; k <= Math.min(degree, 6); k++) {
      const coeff = preset.taylorCoeffs(k) / factorial(k);
      if (coeff === 0) continue;

      let term = '';
      if (k === 0) {
        term = coeff.toFixed(coeff % 1 === 0 ? 0 : 2);
      } else {
        const coeffStr = coeff === 1 ? '' : coeff === -1 ? '-' : coeff.toFixed(coeff % 1 === 0 ? 0 : 2);
        const xPart = k === 1 ? 'x' : `x^${k}`;
        term = `${coeffStr}${xPart}`;
      }

      if (terms.length > 0 && coeff > 0) {
        terms.push('+');
      }
      terms.push(term);
    }
    if (degree > 6) terms.push('+ ...');
    return terms.join(' ') || '0';
  }, [preset, degree]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Taylor Series Visualizer</h3>

      <p className="text-dark-300 mb-6">
        See how Taylor polynomials approximate functions near a center point.
        Higher degree = better approximation (locally).
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

      {/* Degree slider */}
      <div className="mb-4">
        <label className="text-dark-300 text-sm">Polynomial Degree: {degree}</label>
        <input
          type="range"
          min="0"
          max="15"
          step="1"
          value={degree}
          onChange={(e) => setDegree(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-1, 0, 1, 2, 3].map((i) => (
            <g key={i}>
              <line
                x1={toSvgX(xMin)}
                y1={toSvgY(i)}
                x2={toSvgX(xMax)}
                y2={toSvgY(i)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}
          {[-2, -1, 0, 1, 2].map((i) => (
            <line
              key={`v${i}`}
              x1={toSvgX(i)}
              y1={toSvgY(yMin)}
              x2={toSvgX(i)}
              y2={toSvgY(yMax)}
              stroke={i === 0 ? '#4b5563' : '#374151'}
              strokeWidth={i === 0 ? 2 : 1}
            />
          ))}

          {/* Original function */}
          <path d={funcPath} fill="none" stroke="#f97316" strokeWidth={3} />

          {/* Taylor polynomial */}
          <path
            d={taylorPath}
            fill="none"
            stroke="#3b82f6"
            strokeWidth={2}
            strokeDasharray="5 5"
          />

          {/* Center point */}
          <circle
            cx={toSvgX(preset.center)}
            cy={toSvgY(preset.f(preset.center))}
            r={6}
            fill="#10b981"
          />

          {/* Legend */}
          <g transform={`translate(${padding + 10}, ${padding + 20})`}>
            <line x1={0} y1={0} x2={20} y2={0} stroke="#f97316" strokeWidth={3} />
            <text x={25} y={4} fill="#f97316" fontSize="11">f(x)</text>

            <line x1={0} y1={15} x2={20} y2={15} stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" />
            <text x={25} y={19} fill="#3b82f6" fontSize="11">T_{degree}(x)</text>
          </g>
        </svg>
      </div>

      {/* Formula */}
      <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
        <p className="text-blue-400 text-sm mb-1">Taylor Polynomial T_{degree}(x):</p>
        <p className="text-blue-300 font-mono text-sm break-all">{taylorFormula}</p>
      </div>

      {/* Error info */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Center Point</p>
          <p className="text-emerald-400 font-mono">c = {preset.center}</p>
        </div>
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-dark-400 text-xs">Max Error (visible region)</p>
          <p className="text-red-400 font-mono">
            {maxError < 0.0001 ? maxError.toExponential(2) : maxError.toFixed(4)}
          </p>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          Taylor's theorem: f(x) = T_n(x) + R_n(x) where R_n is the remainder.
          The approximation improves near the center but may diverge far from it.
          {preset.name === '1/(1-x)' && ' This series only converges for |x| &lt; 1.'}
        </p>
      </div>
    </div>
  );
}
