import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

export function DiscreteLogDemo({ className = '' }: Props) {
  const [p, setP] = useState(23);
  const [g, setG] = useState(5);
  const [x, setX] = useState(7);

  // Calculate g^k mod p for k = 0, 1, 2, ...
  const powers = useMemo(() => {
    const result: { k: number; value: number }[] = [];
    let current = 1;
    const seen = new Set<number>();

    for (let k = 0; k < p; k++) {
      if (seen.has(current)) break;
      result.push({ k, value: current });
      seen.add(current);
      current = (current * g) % p;
    }

    return result;
  }, [g, p]);

  // Calculate g^x mod p
  const gx = useMemo(() => {
    let result = 1;
    let base = g % p;
    let exp = x;
    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % p;
      }
      exp = Math.floor(exp / 2);
      base = (base * base) % p;
    }
    return result;
  }, [g, x, p]);

  // Check if g is a generator
  const isGenerator = powers.length === p - 1;

  // Find all generators
  const generators = useMemo(() => {
    const gens: number[] = [];
    for (let candidate = 2; candidate < p; candidate++) {
      const seen = new Set<number>();
      let current = 1;
      for (let k = 0; k < p - 1; k++) {
        seen.add(current);
        current = (current * candidate) % p;
      }
      if (seen.size === p - 1) {
        gens.push(candidate);
      }
    }
    return gens;
  }, [p]);

  // SVG dimensions
  const width = 450;
  const height = 250;
  const padding = 50;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  const toSvgX = (k: number) => padding + (k / Math.max(powers.length - 1, 1)) * plotWidth;
  const toSvgY = (v: number) => padding + ((p - 1 - v) / (p - 1)) * plotHeight;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Discrete Logarithm Problem</h3>

      <p className="text-dark-300 mb-6">
        Given g, p, and h = g<sup>x</sup> mod p, find x. This is computationally hard
        for large primes — the basis of Diffie-Hellman and ElGamal.
      </p>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-purple-400 text-sm">Prime p = {p}</label>
          <select
            value={p}
            onChange={(e) => {
              const newP = parseInt(e.target.value);
              setP(newP);
              setG(Math.min(g, newP - 1));
              setX(Math.min(x, newP - 2));
            }}
            className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100"
          >
            {[7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47].map((prime) => (
              <option key={prime} value={prime}>
                {prime}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-blue-400 text-sm">Generator g = {g}</label>
          <input
            type="range"
            min="2"
            max={p - 1}
            step="1"
            value={g}
            onChange={(e) => setG(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <label className="text-emerald-400 text-sm">Exponent x = {x}</label>
          <input
            type="range"
            min="1"
            max={p - 2}
            step="1"
            value={x}
            onChange={(e) => setX(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Generator status */}
      <div className={`mb-4 p-3 rounded-lg border ${
        isGenerator
          ? 'bg-emerald-500/20 border-emerald-500/50'
          : 'bg-yellow-500/20 border-yellow-500/50'
      }`}>
        <p className={`text-sm ${isGenerator ? 'text-emerald-400' : 'text-yellow-400'}`}>
          {isGenerator
            ? `✓ g = ${g} is a primitive root (generator) of ℤ/${p}ℤ*`
            : `⚠ g = ${g} is NOT a generator (order = ${powers.length}, not ${p - 1})`
          }
        </p>
        {generators.length <= 10 && (
          <p className="text-dark-400 text-xs mt-1">
            Generators of ℤ/{p}ℤ*: {generators.join(', ')}
          </p>
        )}
      </div>

      {/* Visualization */}
      <div className="bg-dark-900 rounded-lg p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          {[...Array(5)].map((_, i) => {
            const v = Math.round((p - 1) * (1 - i / 4));
            return (
              <g key={`h${i}`}>
                <line
                  x1={padding}
                  y1={toSvgY(v)}
                  x2={width - padding}
                  y2={toSvgY(v)}
                  stroke="#374151"
                  strokeWidth={1}
                />
                <text x={padding - 8} y={toSvgY(v) + 4} fill="#6b7280" fontSize="10" textAnchor="end">
                  {v}
                </text>
              </g>
            );
          })}

          {/* Powers path */}
          {powers.length > 1 && (
            <path
              d={powers.map((pt, i) =>
                `${i === 0 ? 'M' : 'L'} ${toSvgX(pt.k)} ${toSvgY(pt.value)}`
              ).join(' ')}
              fill="none"
              stroke="#3b82f6"
              strokeWidth={2}
              opacity={0.5}
            />
          )}

          {/* Power points */}
          {powers.map((pt) => (
            <circle
              key={pt.k}
              cx={toSvgX(pt.k)}
              cy={toSvgY(pt.value)}
              r={pt.k === x ? 8 : 4}
              fill={pt.k === x ? '#f97316' : '#3b82f6'}
              stroke={pt.k === x ? '#fdba74' : 'none'}
              strokeWidth={2}
            />
          ))}

          {/* Highlight the target */}
          {x < powers.length && (
            <>
              <line
                x1={toSvgX(x)}
                y1={toSvgY(0)}
                x2={toSvgX(x)}
                y2={toSvgY(gx)}
                stroke="#f97316"
                strokeWidth={1}
                strokeDasharray="3 3"
                opacity={0.5}
              />
              <line
                x1={padding}
                y1={toSvgY(gx)}
                x2={toSvgX(x)}
                y2={toSvgY(gx)}
                stroke="#f97316"
                strokeWidth={1}
                strokeDasharray="3 3"
                opacity={0.5}
              />
            </>
          )}

          {/* X-axis labels */}
          {[0, Math.floor(powers.length / 2), powers.length - 1].map((k) => (
            <text key={`x${k}`} x={toSvgX(k)} y={height - padding + 15} fill="#6b7280" fontSize="10" textAnchor="middle">
              {k}
            </text>
          ))}
          <text x={width / 2} y={height - 10} fill="#9ca3af" fontSize="11" textAnchor="middle">
            exponent k
          </text>
          <text x={15} y={height / 2} fill="#9ca3af" fontSize="11" textAnchor="middle" transform={`rotate(-90, 15, ${height / 2})`}>
            g^k mod p
          </text>
        </svg>
      </div>

      {/* Main result */}
      <div className="mt-4 p-4 rounded-xl bg-orange-500/20 border border-orange-500/50">
        <p className="text-center font-mono text-lg">
          <span className="text-blue-400">{g}</span>
          <sup className="text-emerald-400">{x}</sup>
          <span className="text-dark-300"> ≡ </span>
          <span className="text-orange-400 font-bold">{gx}</span>
          <span className="text-dark-400"> (mod {p})</span>
        </p>
        <p className="text-dark-400 text-sm text-center mt-2">
          Given h = {gx}, finding x = {x} is the discrete log problem
        </p>
      </div>

      {/* Powers table */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-400 text-sm mb-2">
          Powers of g = {g} mod {p}:
        </p>
        <div className="flex flex-wrap gap-2">
          {powers.slice(0, 15).map((pt) => (
            <span
              key={pt.k}
              className={`px-2 py-1 rounded text-xs font-mono ${
                pt.k === x
                  ? 'bg-orange-500/30 text-orange-300'
                  : 'bg-dark-600 text-dark-300'
              }`}
            >
              {g}<sup>{pt.k}</sup>={pt.value}
            </span>
          ))}
          {powers.length > 15 && <span className="text-dark-500 text-xs">...</span>}
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-dark-300 text-sm">
          <strong className="text-blue-400">Diffie-Hellman:</strong> Alice sends g<sup>a</sup>, Bob sends g<sup>b</sup>.
          Both compute g<sup>ab</sup>. An eavesdropper sees g<sup>a</sup> and g<sup>b</sup> but cannot compute g<sup>ab</sup>
          without solving the discrete log.
        </p>
      </div>
    </div>
  );
}
