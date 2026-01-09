import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type Operation = 'add' | 'multiply' | 'power';

export function ModularArithmeticDemo({ className = '' }: Props) {
  const [n, setN] = useState(12);
  const [a, setA] = useState(7);
  const [b, setB] = useState(5);
  const [operation, setOperation] = useState<Operation>('add');
  const [showMultTable, setShowMultTable] = useState(false);

  // Calculate result
  const result = useMemo(() => {
    if (operation === 'add') {
      return ((a % n) + (b % n)) % n;
    } else if (operation === 'multiply') {
      return ((a % n) * (b % n)) % n;
    } else {
      // Power: a^b mod n
      let res = 1;
      let base = a % n;
      let exp = b;
      while (exp > 0) {
        if (exp % 2 === 1) {
          res = (res * base) % n;
        }
        exp = Math.floor(exp / 2);
        base = (base * base) % n;
      }
      return res;
    }
  }, [a, b, n, operation]);

  // Find units (elements with multiplicative inverse)
  const units = useMemo(() => {
    const result: number[] = [];
    for (let i = 1; i < n; i++) {
      // Check if gcd(i, n) = 1
      let x = i, y = n;
      while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
      }
      if (x === 1) result.push(i);
    }
    return result;
  }, [n]);

  // SVG clock visualization
  const width = 300;
  const height = 300;
  const cx = 150;
  const cy = 150;
  const radius = 120;

  const getPosition = (value: number) => {
    const anglePerUnit = (2 * Math.PI) / n;
    const angle = -Math.PI / 2 + value * anglePerUnit;
    return {
      x: cx + radius * 0.85 * Math.cos(angle),
      y: cy + radius * 0.85 * Math.sin(angle),
    };
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Modular Arithmetic</h3>

      <p className="text-dark-300 mb-6">
        In arithmetic <strong>mod n</strong>, numbers "wrap around" after reaching n.
        Think of a clock: 10 + 5 = 3 (mod 12)!
      </p>

      {/* Modulus control */}
      <div className="mb-4">
        <label className="text-emerald-400 text-sm">Modulus n = {n}</label>
        <input
          type="range"
          min="2"
          max="24"
          step="1"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
      </div>

      {/* Operation selector */}
      <div className="flex gap-2 mb-4">
        {[
          { op: 'add' as const, label: 'Add', symbol: '+' },
          { op: 'multiply' as const, label: 'Multiply', symbol: '×' },
          { op: 'power' as const, label: 'Power', symbol: '^' },
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

      {/* Value controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-blue-400 text-sm">a = {a}</label>
          <input
            type="range"
            min="0"
            max={Math.max(n - 1, 20)}
            step="1"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-orange-400 text-sm">b = {b}</label>
          <input
            type="range"
            min="0"
            max={operation === 'power' ? 10 : Math.max(n - 1, 20)}
            step="1"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>
      </div>

      {/* Clock visualization */}
      <div className="bg-dark-900 rounded-lg p-4 flex justify-center">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-64 h-64">
          {/* Clock circle */}
          <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#4b5563" strokeWidth={2} />

          {/* Numbers around the clock */}
          {Array.from({ length: n }, (_, i) => {
            const pos = getPosition(i);
            const isA = (a % n) === i;
            const isB = (b % n) === i && operation !== 'power';
            const isResult = result === i;

            return (
              <g key={i}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={16}
                  fill={isResult ? '#10b981' : isA ? '#3b82f6' : isB ? '#f97316' : '#374151'}
                  fillOpacity={isResult || isA || isB ? 0.8 : 0.3}
                />
                <text
                  x={pos.x}
                  y={pos.y + 4}
                  fill={isResult || isA || isB ? '#fff' : '#9ca3af'}
                  fontSize="12"
                  textAnchor="middle"
                  fontWeight={isResult || isA || isB ? 'bold' : 'normal'}
                >
                  {i}
                </text>
              </g>
            );
          })}

          {/* Center label */}
          <text x={cx} y={cy - 10} fill="#6b7280" fontSize="14" textAnchor="middle">
            mod {n}
          </text>
          <text x={cx} y={cy + 10} fill="#10b981" fontSize="18" textAnchor="middle" fontWeight="bold">
            = {result}
          </text>
        </svg>
      </div>

      {/* Equation display */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <div className="flex items-center justify-center gap-2 text-xl font-mono">
          <span className="text-blue-400">{a}</span>
          <span className="text-dark-400">
            {operation === 'add' ? '+' : operation === 'multiply' ? '×' : '^'}
          </span>
          <span className="text-orange-400">{b}</span>
          <span className="text-dark-400">≡</span>
          <span className="text-emerald-400">{result}</span>
          <span className="text-dark-400">(mod {n})</span>
        </div>
        {operation !== 'power' && (
          <p className="text-center text-dark-400 text-sm mt-2">
            {a} {operation === 'add' ? '+' : '×'} {b} = {operation === 'add' ? a + b : a * b},
            and {operation === 'add' ? a + b : a * b} mod {n} = {result}
          </p>
        )}
      </div>

      {/* Units info */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Units (invertible elements)</p>
          <p className="text-emerald-400 font-mono text-sm">
            {units.length > 12 ? `${units.slice(0, 6).join(', ')}... (${units.length} total)` : units.join(', ')}
          </p>
        </div>
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">φ(n) = # of units</p>
          <p className="text-blue-400 font-mono text-lg">{units.length}</p>
        </div>
      </div>

      {/* Toggle multiplication table */}
      <button
        onClick={() => setShowMultTable(!showMultTable)}
        className="mt-4 px-4 py-2 rounded-lg bg-dark-700 text-dark-300 text-sm hover:bg-dark-600 transition-colors w-full"
      >
        {showMultTable ? 'Hide' : 'Show'} Multiplication Table
      </button>

      {showMultTable && n <= 12 && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-center text-sm">
            <thead>
              <tr>
                <th className="p-1 text-dark-500">×</th>
                {Array.from({ length: n }, (_, i) => (
                  <th key={i} className="p-1 text-dark-400">{i}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: n }, (_, i) => (
                <tr key={i}>
                  <td className="p-1 text-dark-400">{i}</td>
                  {Array.from({ length: n }, (_, j) => (
                    <td
                      key={j}
                      className={`p-1 ${(i * j) % n === 1 ? 'text-emerald-400 font-bold' : 'text-dark-300'}`}
                    >
                      {(i * j) % n}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
