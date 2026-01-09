import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type Operation = 'add' | 'multiply' | 'conjugate' | 'power';

export function ComplexPlaneDemo({ className = '' }: Props) {
  // Complex numbers z1 = a + bi, z2 = c + di
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [c, setC] = useState(1);
  const [d, setD] = useState(2);
  const [operation, setOperation] = useState<Operation>('add');
  const [power, setPower] = useState(2);

  // Calculate result based on operation
  const result = useMemo(() => {
    if (operation === 'add') {
      return { re: a + c, im: b + d };
    } else if (operation === 'multiply') {
      // (a + bi)(c + di) = (ac - bd) + (ad + bc)i
      return { re: a * c - b * d, im: a * d + b * c };
    } else if (operation === 'conjugate') {
      return { re: a, im: -b };
    } else {
      // Power: z^n using polar form
      const r = Math.sqrt(a * a + b * b);
      const theta = Math.atan2(b, a);
      const rn = Math.pow(r, power);
      const nTheta = power * theta;
      return { re: rn * Math.cos(nTheta), im: rn * Math.sin(nTheta) };
    }
  }, [a, b, c, d, operation, power]);

  // Modulus and argument
  const mod1 = Math.sqrt(a * a + b * b);
  const arg1 = Math.atan2(b, a);
  const mod2 = Math.sqrt(c * c + d * d);
  const arg2 = Math.atan2(d, c);
  const modResult = Math.sqrt(result.re * result.re + result.im * result.im);
  const argResult = Math.atan2(result.im, result.re);

  // SVG dimensions
  const width = 400;
  const height = 400;
  const cx = 200;
  const cy = 200;
  const scale = 30;

  const toSvgX = (x: number) => cx + x * scale;
  const toSvgY = (y: number) => cy - y * scale;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Complex Numbers</h3>

      <p className="text-dark-300 mb-6">
        Complex numbers <span className="text-blue-400">z = a + bi</span> can be visualized as points in a plane.
        Addition is vector addition; multiplication rotates and scales!
      </p>

      {/* Operation selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { op: 'add' as const, label: 'Add' },
          { op: 'multiply' as const, label: 'Multiply' },
          { op: 'conjugate' as const, label: 'Conjugate' },
          { op: 'power' as const, label: 'Power' },
        ].map(({ op, label }) => (
          <button
            key={op}
            onClick={() => setOperation(op)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              operation === op
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Controls for z1 */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-blue-400 text-sm">z₁ real: {a.toFixed(1)}</label>
          <input
            type="range"
            min="-4"
            max="4"
            step="0.5"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-blue-400 text-sm">z₁ imag: {b.toFixed(1)}</label>
          <input
            type="range"
            min="-4"
            max="4"
            step="0.5"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Controls for z2 (not for conjugate/power) */}
      {(operation === 'add' || operation === 'multiply') && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-orange-400 text-sm">z₂ real: {c.toFixed(1)}</label>
            <input
              type="range"
              min="-4"
              max="4"
              step="0.5"
              value={c}
              onChange={(e) => setC(parseFloat(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
          </div>
          <div>
            <label className="text-orange-400 text-sm">z₂ imag: {d.toFixed(1)}</label>
            <input
              type="range"
              min="-4"
              max="4"
              step="0.5"
              value={d}
              onChange={(e) => setD(parseFloat(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
          </div>
        </div>
      )}

      {/* Power control */}
      {operation === 'power' && (
        <div className="mb-4">
          <label className="text-purple-400 text-sm">Power n = {power}</label>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={power}
            onChange={(e) => setPower(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
        </div>
      )}

      {/* Complex plane */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
            <g key={`grid${i}`}>
              <line
                x1={0}
                y1={toSvgY(i)}
                x2={width}
                y2={toSvgY(i)}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={toSvgX(i)}
                y1={0}
                x2={toSvgX(i)}
                y2={height}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Axis labels */}
          <text x={width - 15} y={cy - 8} fill="#6b7280" fontSize="12">Re</text>
          <text x={cx + 8} y={15} fill="#6b7280" fontSize="12">Im</text>

          {/* z1 vector */}
          <line x1={cx} y1={cy} x2={toSvgX(a)} y2={toSvgY(b)} stroke="#3b82f6" strokeWidth={2} />
          <circle cx={toSvgX(a)} cy={toSvgY(b)} r={8} fill="#3b82f6" />
          <text x={toSvgX(a) + 10} y={toSvgY(b) - 5} fill="#3b82f6" fontSize="12" fontWeight="bold">
            z₁
          </text>

          {/* z2 vector (for add/multiply) */}
          {(operation === 'add' || operation === 'multiply') && (
            <>
              <line x1={cx} y1={cy} x2={toSvgX(c)} y2={toSvgY(d)} stroke="#f97316" strokeWidth={2} />
              <circle cx={toSvgX(c)} cy={toSvgY(d)} r={8} fill="#f97316" />
              <text x={toSvgX(c) + 10} y={toSvgY(d) - 5} fill="#f97316" fontSize="12" fontWeight="bold">
                z₂
              </text>
            </>
          )}

          {/* For addition, show parallelogram */}
          {operation === 'add' && (
            <>
              <line x1={toSvgX(a)} y1={toSvgY(b)} x2={toSvgX(result.re)} y2={toSvgY(result.im)} stroke="#f97316" strokeWidth={1} strokeDasharray="4 4" opacity={0.5} />
              <line x1={toSvgX(c)} y1={toSvgY(d)} x2={toSvgX(result.re)} y2={toSvgY(result.im)} stroke="#3b82f6" strokeWidth={1} strokeDasharray="4 4" opacity={0.5} />
            </>
          )}

          {/* Result vector */}
          <line x1={cx} y1={cy} x2={toSvgX(result.re)} y2={toSvgY(result.im)} stroke="#10b981" strokeWidth={3} />
          <circle cx={toSvgX(result.re)} cy={toSvgY(result.im)} r={10} fill="#10b981" />
          <text x={toSvgX(result.re) + 12} y={toSvgY(result.im) - 8} fill="#10b981" fontSize="12" fontWeight="bold">
            result
          </text>
        </svg>
      </div>

      {/* Results */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">z₁ = </p>
          <p className="text-blue-400 font-mono">{a.toFixed(1)} {b >= 0 ? '+' : ''} {b.toFixed(1)}i</p>
          <p className="text-dark-500 text-xs">|z₁| = {mod1.toFixed(2)}</p>
        </div>
        {(operation === 'add' || operation === 'multiply') && (
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
            <p className="text-dark-400 text-xs">z₂ = </p>
            <p className="text-orange-400 font-mono">{c.toFixed(1)} {d >= 0 ? '+' : ''} {d.toFixed(1)}i</p>
            <p className="text-dark-500 text-xs">|z₂| = {mod2.toFixed(2)}</p>
          </div>
        )}
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Result = </p>
          <p className="text-emerald-400 font-mono">{result.re.toFixed(2)} {result.im >= 0 ? '+' : ''} {result.im.toFixed(2)}i</p>
          <p className="text-dark-500 text-xs">|result| = {modResult.toFixed(2)}</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-100 font-medium">
          {operation === 'add' && 'Addition: Real parts add, imaginary parts add (vector addition).'}
          {operation === 'multiply' && `Multiplication: |z₁z₂| = ${mod1.toFixed(2)} × ${mod2.toFixed(2)} = ${(mod1 * mod2).toFixed(2)}, arg(z₁z₂) = arg(z₁) + arg(z₂)`}
          {operation === 'conjugate' && 'Conjugate: Reflect across the real axis (negate imaginary part).'}
          {operation === 'power' && `Power: |z^n| = |z|^n = ${mod1.toFixed(2)}^${power} = ${Math.pow(mod1, power).toFixed(2)}, arg(z^n) = n·arg(z)`}
        </p>
      </div>
    </div>
  );
}
