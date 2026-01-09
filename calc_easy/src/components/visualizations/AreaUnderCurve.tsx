import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type FunctionPreset = {
  name: string;
  f: (x: number) => number;
  integral: (a: number, b: number) => number;
  label: string;
};

const PRESETS: FunctionPreset[] = [
  {
    name: 'x',
    f: (x) => x,
    integral: (a, b) => (b * b - a * a) / 2,
    label: 'f(x) = x',
  },
  {
    name: 'x²',
    f: (x) => x * x,
    integral: (a, b) => (b * b * b - a * a * a) / 3,
    label: 'f(x) = x²',
  },
  {
    name: '2',
    f: () => 2,
    integral: (a, b) => 2 * (b - a),
    label: 'f(x) = 2 (constant)',
  },
  {
    name: 'sin(x)',
    f: Math.sin,
    integral: (a, b) => Math.cos(a) - Math.cos(b),
    label: 'f(x) = sin(x)',
  },
  {
    name: '3 - x',
    f: (x) => 3 - x,
    integral: (a, b) => 3 * (b - a) - (b * b - a * a) / 2,
    label: 'f(x) = 3 - x',
  },
];

export function AreaUnderCurve({ className = '' }: Props) {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [a, setA] = useState(0);
  const [b, setB] = useState(2);
  const [numRects, setNumRects] = useState(5);
  const [showExact, setShowExact] = useState(true);

  // SVG dimensions
  const width = 400;
  const height = 300;
  const padding = 40;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Scale
  const xMin = -0.5;
  const xMax = 4;
  const yMin = -0.5;
  const yMax = 4;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Generate curve path
  const curvePath = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 100; i++) {
      const x = xMin + (i / 100) * (xMax - xMin);
      const y = preset.f(x);
      if (isFinite(y) && y >= yMin - 1 && y <= yMax + 1) {
        const svgX = toSvgX(x);
        const svgY = Math.max(padding - 5, Math.min(height - padding + 5, toSvgY(y)));
        points.push(`${points.length === 0 ? 'M' : 'L'} ${svgX} ${svgY}`);
      }
    }
    return points.join(' ');
  }, [preset, xMin, xMax, yMin, yMax, toSvgX, toSvgY, height, padding]);

  // Calculate rectangles (left Riemann sum)
  const rectangles = useMemo(() => {
    const rects: { x: number; width: number; height: number }[] = [];
    const dx = (b - a) / numRects;

    for (let i = 0; i < numRects; i++) {
      const xi = a + i * dx;
      const h = preset.f(xi);
      rects.push({ x: xi, width: dx, height: h });
    }
    return rects;
  }, [preset, a, b, numRects]);

  // Riemann sum
  const riemannSum = useMemo(() => {
    const dx = (b - a) / numRects;
    return rectangles.reduce((sum, rect) => sum + rect.height * dx, 0);
  }, [rectangles, a, b, numRects]);

  // Exact integral
  const exactArea = preset.integral(a, b);
  const error = Math.abs(riemannSum - exactArea);

  // Filled area path (for exact area display)
  const filledPath = useMemo(() => {
    const points: string[] = [];
    points.push(`M ${toSvgX(a)} ${toSvgY(0)}`);

    for (let i = 0; i <= 50; i++) {
      const x = a + (i / 50) * (b - a);
      const y = Math.max(0, preset.f(x));
      points.push(`L ${toSvgX(x)} ${toSvgY(y)}`);
    }

    points.push(`L ${toSvgX(b)} ${toSvgY(0)}`);
    points.push('Z');
    return points.join(' ');
  }, [preset, a, b, toSvgX, toSvgY]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Area Under a Curve</h3>

      <p className="text-dark-300 mb-6">
        <strong>Integration</strong> finds the area under a curve. We can approximate it with rectangles —
        more rectangles = better approximation!
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

      {/* Controls */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-emerald-400 text-sm">From a = {a.toFixed(1)}</label>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div>
          <label className="text-emerald-400 text-sm">To b = {b.toFixed(1)}</label>
          <input
            type="range"
            min="1"
            max="3.5"
            step="0.1"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div>
          <label className="text-blue-400 text-sm">Rectangles: {numRects}</label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={numRects}
            onChange={(e) => setNumRects(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Toggle */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowExact(!showExact)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showExact ? 'bg-orange-500 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          Show Exact Area
        </button>
      </div>

      {/* Plot */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[0, 1, 2, 3].map((i) => (
            <g key={`grid${i}`}>
              <line
                x1={toSvgX(xMin)}
                y1={toSvgY(i)}
                x2={toSvgX(xMax)}
                y2={toSvgY(i)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={toSvgX(i)}
                y1={toSvgY(yMin)}
                x2={toSvgX(i)}
                y2={toSvgY(yMax)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Exact area (faded) */}
          {showExact && (
            <path d={filledPath} fill="#f97316" fillOpacity={0.2} />
          )}

          {/* Rectangles */}
          {rectangles.map((rect, i) => (
            <rect
              key={i}
              x={toSvgX(rect.x)}
              y={rect.height >= 0 ? toSvgY(rect.height) : toSvgY(0)}
              width={toSvgX(rect.x + rect.width) - toSvgX(rect.x)}
              height={Math.abs(toSvgY(0) - toSvgY(rect.height))}
              fill="#3b82f6"
              fillOpacity={0.4}
              stroke="#3b82f6"
              strokeWidth={1}
            />
          ))}

          {/* Function curve */}
          <path d={curvePath} fill="none" stroke="#f97316" strokeWidth={3} />

          {/* Bounds markers */}
          <line
            x1={toSvgX(a)}
            y1={toSvgY(yMin)}
            x2={toSvgX(a)}
            y2={toSvgY(yMax)}
            stroke="#10b981"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <line
            x1={toSvgX(b)}
            y1={toSvgY(yMin)}
            x2={toSvgX(b)}
            y2={toSvgY(yMax)}
            stroke="#10b981"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <text x={toSvgX(a)} y={toSvgY(-0.3)} fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="bold">
            a
          </text>
          <text x={toSvgX(b)} y={toSvgY(-0.3)} fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="bold">
            b
          </text>
        </svg>
      </div>

      {/* Results */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Rectangle Sum</p>
          <p className="text-blue-400 font-mono text-lg">{riemannSum.toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Exact Integral</p>
          <p className="text-orange-400 font-mono text-lg">{exactArea.toFixed(4)}</p>
        </div>
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-dark-400 text-xs">Error</p>
          <p className="text-red-400 font-mono text-lg">{error.toFixed(4)}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">{preset.label}</p>
        <p className="text-dark-300 text-sm mt-2">
          With <span className="text-blue-400">{numRects} rectangles</span>, the approximation
          is {error < 0.1 ? 'very close' : error < 0.5 ? 'fairly close' : 'rough'} to the exact area.
          Try increasing the number of rectangles to see the error shrink!
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Width of each rectangle: Δx = (b-a)/n = {((b - a) / numRects).toFixed(4)}
        </p>
      </div>
    </div>
  );
}
