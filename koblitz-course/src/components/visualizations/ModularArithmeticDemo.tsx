import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function ModularArithmeticDemo({ className = '' }: Props) {
  const [n, setN] = useState(12);
  const [a, setA] = useState(7);
  const [b, setB] = useState(5);
  const [operation, setOperation] = useState<'+' | '-' | '×' | '^'>( '+');

  // SVG dimensions
  const width = 400;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 150;

  // Calculate result
  const result = useMemo(() => {
    const mod = (x: number, m: number) => ((x % m) + m) % m;
    switch (operation) {
      case '+':
        return mod(a + b, n);
      case '-':
        return mod(a - b, n);
      case '×':
        return mod(a * b, n);
      case '^':
        // Fast modular exponentiation
        let result = 1;
        let base = mod(a, n);
        let exp = b;
        while (exp > 0) {
          if (exp % 2 === 1) {
            result = mod(result * base, n);
          }
          exp = Math.floor(exp / 2);
          base = mod(base * base, n);
        }
        return result;
      default:
        return 0;
    }
  }, [a, b, n, operation]);

  // Generate positions for each element
  const positions = useMemo(() => {
    const pos: { x: number; y: number; value: number }[] = [];
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * 2 * Math.PI - Math.PI / 2; // Start from top
      pos.push({
        value: i,
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      });
    }
    return pos;
  }, [n, centerX, centerY, radius]);

  // Calculate modular inverse
  const modInverse = useMemo(() => {
    // Extended Euclidean algorithm
    const gcd = (x: number, y: number): { g: number; s: number } => {
      if (y === 0) return { g: x, s: 1 };
      const { g, s: s1 } = gcd(y, x % y);
      return { g, s: s1 - Math.floor(x / y) * (x % y === 0 ? 0 : gcd(y, x % y).s) };
    };

    // Simple approach for inverse
    for (let i = 1; i < n; i++) {
      if ((a * i) % n === 1) return i;
    }
    return null;
  }, [a, n]);

  // Find units (elements with inverses)
  const units = useMemo(() => {
    const u: number[] = [];
    for (let i = 1; i < n; i++) {
      // Check if gcd(i, n) = 1
      let x = i, y = n;
      while (y !== 0) {
        const t = y;
        y = x % y;
        x = t;
      }
      if (x === 1) u.push(i);
    }
    return u;
  }, [n]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Modular Arithmetic</h3>

      <p className="text-dark-300 mb-6">
        In ℤ/nℤ (integers mod n), arithmetic "wraps around" like a clock.
        Operations are computed modulo n.
      </p>

      {/* Modulus control */}
      <div className="mb-4">
        <label className="text-purple-400 text-sm">Modulus n = {n}</label>
        <input
          type="range"
          min="2"
          max="24"
          step="1"
          value={n}
          onChange={(e) => {
            const newN = parseInt(e.target.value);
            setN(newN);
            setA(Math.min(a, newN - 1));
            setB(Math.min(b, newN - 1));
          }}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
        />
      </div>

      {/* Operands */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-blue-400 text-sm">a = {a}</label>
          <input
            type="range"
            min="0"
            max={n - 1}
            step="1"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div className="flex items-end justify-center">
          <div className="flex gap-2">
            {(['+', '-', '×', '^'] as const).map((op) => (
              <button
                key={op}
                onClick={() => setOperation(op)}
                className={`w-10 h-10 rounded-lg text-lg font-bold transition-colors ${
                  operation === op
                    ? 'bg-orange-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {op}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-emerald-400 text-sm">b = {b}</label>
          <input
            type="range"
            min="0"
            max={operation === '^' ? 20 : n - 1}
            step="1"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Clock visualization */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Clock circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius + 20}
            fill="none"
            stroke="#374151"
            strokeWidth={2}
          />

          {/* Elements around the clock */}
          {positions.map((pos) => {
            const isA = pos.value === a;
            const isB = pos.value === b;
            const isResult = pos.value === result;
            const isUnit = units.includes(pos.value);

            let fillColor = '#1f2937';
            let strokeColor = '#4b5563';
            let textColor = '#9ca3af';

            if (isA) {
              fillColor = '#1e40af';
              strokeColor = '#3b82f6';
              textColor = '#93c5fd';
            }
            if (isB) {
              fillColor = '#065f46';
              strokeColor = '#10b981';
              textColor = '#6ee7b7';
            }
            if (isResult) {
              fillColor = '#9a3412';
              strokeColor = '#f97316';
              textColor = '#fdba74';
            }
            if (isA && isB) {
              fillColor = '#4c1d95';
              strokeColor = '#8b5cf6';
              textColor = '#c4b5fd';
            }
            if (isA && isResult) {
              fillColor = '#7c2d12';
              strokeColor = '#ea580c';
              textColor = '#fed7aa';
            }
            if (isB && isResult) {
              fillColor = '#14532d';
              strokeColor = '#22c55e';
              textColor = '#86efac';
            }

            return (
              <g key={pos.value}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={20}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={isA || isB || isResult ? 3 : 1}
                />
                {isUnit && pos.value !== 0 && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={24}
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth={1}
                    strokeDasharray="3 3"
                  />
                )}
                <text
                  x={pos.x}
                  y={pos.y + 5}
                  fill={textColor}
                  fontSize="14"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {pos.value}
                </text>
              </g>
            );
          })}

          {/* Legend */}
          <g transform="translate(10, 20)">
            <circle cx={10} cy={0} r={8} fill="#1e40af" stroke="#3b82f6" strokeWidth={2} />
            <text x={25} y={5} fill="#93c5fd" fontSize="12">a = {a}</text>

            <circle cx={10} cy={25} r={8} fill="#065f46" stroke="#10b981" strokeWidth={2} />
            <text x={25} y={30} fill="#6ee7b7" fontSize="12">b = {b}</text>

            <circle cx={10} cy={50} r={8} fill="#9a3412" stroke="#f97316" strokeWidth={2} />
            <text x={25} y={55} fill="#fdba74" fontSize="12">result = {result}</text>
          </g>

          {/* Center label */}
          <text
            x={centerX}
            y={centerY}
            fill="#9ca3af"
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
          >
            ℤ/{n}ℤ
          </text>
        </svg>
      </div>

      {/* Result */}
      <div className="mt-4 p-4 rounded-xl bg-orange-500/20 border border-orange-500/50">
        <p className="text-center font-mono text-lg">
          <span className="text-blue-400">{a}</span>
          <span className="text-dark-300"> {operation} </span>
          <span className="text-emerald-400">{b}</span>
          <span className="text-dark-300"> ≡ </span>
          <span className="text-orange-400 font-bold">{result}</span>
          <span className="text-dark-400"> (mod {n})</span>
        </p>
      </div>

      {/* Inverse info */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
          <p className="text-dark-400 text-xs">Inverse of {a} mod {n}</p>
          <p className="text-purple-400 font-mono text-lg">
            {modInverse !== null ? modInverse : 'DNE'}
          </p>
          {modInverse !== null && (
            <p className="text-dark-500 text-xs">
              {a} × {modInverse} ≡ 1 (mod {n})
            </p>
          )}
        </div>
        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
          <p className="text-dark-400 text-xs">Units in ℤ/{n}ℤ</p>
          <p className="text-purple-400 font-mono text-sm">
            {units.length > 0 ? units.slice(0, 8).join(', ') + (units.length > 8 ? '...' : '') : 'none'}
          </p>
          <p className="text-dark-500 text-xs">
            φ({n}) = {units.length}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          <span className="text-purple-400">Dashed circles</span> mark units (elements with multiplicative inverses).
          An element a has an inverse mod n if and only if gcd(a, n) = 1.
          The number of units is Euler's totient φ(n).
        </p>
      </div>
    </div>
  );
}
