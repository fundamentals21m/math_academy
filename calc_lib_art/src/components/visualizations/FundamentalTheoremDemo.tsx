import { useState, useMemo } from 'react';

export function FundamentalTheoremDemo() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(3);

  const width = 600;
  const height = 450;
  const margin = { top: 30, right: 30, bottom: 40, left: 50 };
  const plotWidth = width - margin.left - margin.right;
  const panelHeight = (height - margin.top - margin.bottom - 40) / 3;

  // f(x) = x - a velocity function
  const f = (x: number) => x;
  const F = (x: number) => (x * x) / 2; // Antiderivative

  // Coordinate transforms
  const xMin = 0, xMax = 4;
  const yMax1 = 4; // for f(x)
  const yMax2 = 8; // for F(x)

  const toSvgX = (x: number) => margin.left + ((x - xMin) / (xMax - xMin)) * plotWidth;

  // Panel 1: f(x)
  const toSvgY1 = (y: number) => margin.top + panelHeight - (y / yMax1) * panelHeight;

  // Panel 2: F(x)
  const panel2Top = margin.top + panelHeight + 20;
  const toSvgY2 = (y: number) => panel2Top + panelHeight - (y / yMax2) * panelHeight;

  // Panel 3: Net change visualization
  const panel3Top = panel2Top + panelHeight + 20;

  // Generate curves
  const fCurve = useMemo(() => {
    const points: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.05) {
      points.push(`${toSvgX(x)},${toSvgY1(f(x))}`);
    }
    return points.join(' ');
  }, []);

  const FCurve = useMemo(() => {
    const points: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.05) {
      points.push(`${toSvgX(x)},${toSvgY2(F(x))}`);
    }
    return points.join(' ');
  }, []);

  // Shaded area
  const shadedArea = useMemo(() => {
    let path = `M ${toSvgX(a)} ${toSvgY1(0)}`;
    for (let x = a; x <= b; x += 0.05) {
      path += ` L ${toSvgX(x)} ${toSvgY1(f(x))}`;
    }
    path += ` L ${toSvgX(b)} ${toSvgY1(0)} Z`;
    return path;
  }, [a, b]);

  const Fa = F(a);
  const Fb = F(b);
  const netChange = Fb - Fa;
  const integral = netChange; // They're equal by FTC!

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Fundamental Theorem of Calculus
      </h4>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label className="text-dark-300 text-sm whitespace-nowrap">a =</label>
          <input
            type="range"
            min="0"
            max="3"
            step="0.1"
            value={a}
            onChange={(e) => {
              const newA = parseFloat(e.target.value);
              if (newA < b) setA(newA);
            }}
            className="flex-1 accent-blue-500"
          />
          <span className="text-blue-400 font-mono w-10">{a.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-4">
          <label className="text-dark-300 text-sm whitespace-nowrap">b =</label>
          <input
            type="range"
            min="1"
            max="4"
            step="0.1"
            value={b}
            onChange={(e) => {
              const newB = parseFloat(e.target.value);
              if (newB > a) setB(newB);
            }}
            className="flex-1 accent-emerald-500"
          />
          <span className="text-emerald-400 font-mono w-10">{b.toFixed(1)}</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* PANEL 1: f(x) */}
        <text x={margin.left} y={margin.top - 10} fill="#9CA3AF" fontSize="12">
          f(x) = x (rate of change)
        </text>

        {/* Axis for panel 1 */}
        <line
          x1={margin.left}
          y1={toSvgY1(0)}
          x2={width - margin.right}
          y2={toSvgY1(0)}
          stroke="#9CA3AF"
          strokeWidth={2}
        />
        <line
          x1={toSvgX(0)}
          y1={margin.top}
          x2={toSvgX(0)}
          y2={margin.top + panelHeight}
          stroke="#9CA3AF"
          strokeWidth={2}
        />

        {/* Shaded area */}
        <path d={shadedArea} fill="rgba(16, 185, 129, 0.3)" stroke="none" />

        {/* f(x) curve */}
        <polyline points={fCurve} fill="none" stroke="#3B82F6" strokeWidth={3} />

        {/* Vertical lines at a and b */}
        <line
          x1={toSvgX(a)}
          y1={toSvgY1(0)}
          x2={toSvgX(a)}
          y2={toSvgY1(f(a))}
          stroke="#3B82F6"
          strokeWidth={2}
          strokeDasharray="4,4"
        />
        <line
          x1={toSvgX(b)}
          y1={toSvgY1(0)}
          x2={toSvgX(b)}
          y2={toSvgY1(f(b))}
          stroke="#10B981"
          strokeWidth={2}
          strokeDasharray="4,4"
        />

        {/* Labels for a and b */}
        <text x={toSvgX(a)} y={toSvgY1(0) + 15} textAnchor="middle" fill="#3B82F6" fontSize="12">a</text>
        <text x={toSvgX(b)} y={toSvgY1(0) + 15} textAnchor="middle" fill="#10B981" fontSize="12">b</text>

        {/* PANEL 2: F(x) */}
        <text x={margin.left} y={panel2Top - 10} fill="#9CA3AF" fontSize="12">
          F(x) = x²/2 (antiderivative)
        </text>

        {/* Axis for panel 2 */}
        <line
          x1={margin.left}
          y1={toSvgY2(0)}
          x2={width - margin.right}
          y2={toSvgY2(0)}
          stroke="#9CA3AF"
          strokeWidth={2}
        />
        <line
          x1={toSvgX(0)}
          y1={panel2Top}
          x2={toSvgX(0)}
          y2={panel2Top + panelHeight}
          stroke="#9CA3AF"
          strokeWidth={2}
        />

        {/* F(x) curve */}
        <polyline points={FCurve} fill="none" stroke="#F59E0B" strokeWidth={3} />

        {/* Points at F(a) and F(b) */}
        <circle cx={toSvgX(a)} cy={toSvgY2(Fa)} r={6} fill="#3B82F6" />
        <circle cx={toSvgX(b)} cy={toSvgY2(Fb)} r={6} fill="#10B981" />

        {/* Net change visualization */}
        <line
          x1={toSvgX(a)}
          y1={toSvgY2(Fa)}
          x2={toSvgX(b)}
          y2={toSvgY2(Fa)}
          stroke="#9CA3AF"
          strokeWidth={1}
          strokeDasharray="4,4"
        />
        <line
          x1={toSvgX(b)}
          y1={toSvgY2(Fa)}
          x2={toSvgX(b)}
          y2={toSvgY2(Fb)}
          stroke="#F59E0B"
          strokeWidth={3}
        />

        {/* Arrow for net change */}
        <text
          x={toSvgX(b) + 15}
          y={(toSvgY2(Fa) + toSvgY2(Fb)) / 2 + 4}
          fill="#F59E0B"
          fontSize="11"
        >
          F(b) - F(a)
        </text>

        {/* PANEL 3: The equation */}
        <rect
          x={margin.left}
          y={panel3Top}
          width={plotWidth}
          height={panelHeight - 10}
          fill="#1F2937"
          rx={8}
        />

        <text x={width / 2} y={panel3Top + 25} textAnchor="middle" fill="#9CA3AF" fontSize="14">
          The Fundamental Theorem says:
        </text>

        {/* The big equation */}
        <text x={width / 2} y={panel3Top + 55} textAnchor="middle" fill="#10B981" fontSize="18" fontWeight="bold">
          ∫ₐᵇ f(x) dx = F(b) - F(a)
        </text>

        {/* With numbers */}
        <text x={width / 2} y={panel3Top + 85} textAnchor="middle" fill="#9CA3AF" fontSize="14">
          <tspan fill="#10B981">{integral.toFixed(3)}</tspan>
          <tspan> = </tspan>
          <tspan fill="#10B981">{Fb.toFixed(3)}</tspan>
          <tspan> - </tspan>
          <tspan fill="#3B82F6">{Fa.toFixed(3)}</tspan>
          <tspan> = </tspan>
          <tspan fill="#F59E0B">{netChange.toFixed(3)}</tspan>
        </text>
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">∫ₐᵇ f(x) dx</div>
          <div className="text-emerald-400 font-mono text-xl">{integral.toFixed(3)}</div>
          <div className="text-dark-500 text-xs mt-1">Area under curve</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">F(b) - F(a)</div>
          <div className="text-amber-400 font-mono text-xl">{netChange.toFixed(3)}</div>
          <div className="text-dark-500 text-xs mt-1">Net change in F</div>
        </div>
        <div className="p-4 bg-dark-700 rounded-lg text-center">
          <div className="text-dark-400 text-sm mb-1">They're equal!</div>
          <div className="text-primary-400 font-mono text-xl">
            {Math.abs(integral - netChange) < 0.001 ? '✓' : '≈'}
          </div>
          <div className="text-dark-500 text-xs mt-1">This is the FTC</div>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">The Fundamental Theorem:</span>{' '}
          The integral of a rate of change equals the net change. If F'(x) = f(x), then
          ∫ₐᵇ f(x) dx = F(b) - F(a). This connects derivatives (rates) to integrals (accumulation)—
          the most important theorem in calculus!
        </p>
      </div>
    </div>
  );
}
