import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

const FERMAT_PRIMES = [3, 5, 17, 257, 65537];

export function ConstructiblePolygonDemo({ className = '' }: Props) {
  const [n, setN] = useState(17);
  const [showAll, setShowAll] = useState(false);

  const isConstructible = (num: number): { constructible: boolean; factorization: string; reason: string } => {
    if (num < 3) return { constructible: false, factorization: '', reason: 'n must be at least 3' };

    let remaining = num;
    let power2 = 0;
    const fermatFactors: number[] = [];

    // Extract powers of 2
    while (remaining % 2 === 0) {
      remaining /= 2;
      power2++;
    }

    // Check for Fermat prime factors
    for (const fp of FERMAT_PRIMES) {
      if (remaining % fp === 0) {
        remaining /= fp;
        if (remaining % fp === 0) {
          // Fermat prime appears more than once
          return {
            constructible: false,
            factorization: getFactorization(num),
            reason: `Fermat prime ${fp} appears more than once`,
          };
        }
        fermatFactors.push(fp);
      }
    }

    if (remaining !== 1) {
      return {
        constructible: false,
        factorization: getFactorization(num),
        reason: `Contains non-Fermat odd prime factor(s)`,
      };
    }

    const factors: string[] = [];
    if (power2 > 0) factors.push(power2 === 1 ? '2' : `2^${power2}`);
    factors.push(...fermatFactors.map(String));

    return {
      constructible: true,
      factorization: factors.join(' × ') || '1',
      reason: 'Product of power of 2 and distinct Fermat primes',
    };
  };

  const getFactorization = (num: number): string => {
    const factors: string[] = [];
    let remaining = num;
    let count = 0;

    // Factor out 2s
    while (remaining % 2 === 0) {
      remaining /= 2;
      count++;
    }
    if (count > 0) factors.push(count === 1 ? '2' : `2^${count}`);

    // Factor odd primes
    for (let p = 3; p * p <= remaining; p += 2) {
      count = 0;
      while (remaining % p === 0) {
        remaining /= p;
        count++;
      }
      if (count > 0) factors.push(count === 1 ? String(p) : `${p}^${count}`);
    }
    if (remaining > 1) factors.push(String(remaining));

    return factors.join(' × ') || '1';
  };

  const result = useMemo(() => isConstructible(n), [n]);

  // Generate list of constructible n up to 100
  const constructibleList = useMemo(() => {
    const list: number[] = [];
    for (let i = 3; i <= 100; i++) {
      if (isConstructible(i).constructible) list.push(i);
    }
    return list;
  }, []);

  // Draw polygon
  const polygonPoints = useMemo(() => {
    const points: string[] = [];
    const cx = 100, cy = 100, r = 80;
    for (let i = 0; i < n; i++) {
      const angle = (2 * Math.PI * i) / n - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  }, [n]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Constructible Polygons</h3>
      <p className="text-dark-400 text-sm mb-6">
        Explore which regular n-gons can be constructed with compass and straightedge.
      </p>

      {/* Input */}
      <div className="mb-6">
        <label className="block text-sm text-dark-400 mb-2">Number of sides (n)</label>
        <input
          type="number"
          min="3"
          max="100"
          value={n}
          onChange={(e) => setN(Math.max(3, Math.min(100, parseInt(e.target.value) || 3)))}
          className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
        />
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-6">
        <svg width="200" height="200" className="drop-shadow-lg">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="4"
          />
          {/* Polygon */}
          <motion.polygon
            key={n}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            points={polygonPoints}
            fill={result.constructible ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}
            stroke={result.constructible ? '#10b981' : '#ef4444'}
            strokeWidth="2"
          />
          {/* Vertices */}
          {n <= 30 && polygonPoints.split(' ').map((point, i) => {
            const [x, y] = point.split(',').map(Number);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill={result.constructible ? '#10b981' : '#ef4444'}
              />
            );
          })}
          {/* Center label */}
          <text x="100" y="105" textAnchor="middle" className="fill-dark-300 text-2xl font-bold">
            {n}
          </text>
        </svg>
      </div>

      {/* Result */}
      <motion.div
        key={n}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-4 rounded-xl border mb-6 ${
          result.constructible
            ? 'bg-emerald-500/10 border-emerald-500/30'
            : 'bg-rose-500/10 border-rose-500/30'
        }`}
      >
        <div className="text-center mb-2">
          <span className={`text-xl font-bold ${result.constructible ? 'text-emerald-400' : 'text-rose-400'}`}>
            {result.constructible ? 'Constructible!' : 'Not Constructible'}
          </span>
        </div>
        <div className="text-sm text-dark-300 text-center">
          <div>{n} = {result.factorization}</div>
          <div className="text-dark-500 mt-1">{result.reason}</div>
        </div>
      </motion.div>

      {/* Fermat primes info */}
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-6">
        <h4 className="text-sm font-semibold text-amber-400 mb-2">Known Fermat Primes:</h4>
        <div className="flex flex-wrap gap-2">
          {FERMAT_PRIMES.slice(0, 4).map((fp, i) => (
            <span
              key={fp}
              onClick={() => setN(fp)}
              className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono text-sm cursor-pointer hover:bg-amber-500/30"
            >
              F_{i} = {fp}
            </span>
          ))}
          <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono text-sm">
            F_4 = 65537
          </span>
        </div>
        <p className="text-dark-400 text-xs mt-2">
          Only 5 Fermat primes are known. Whether there are more is an open problem!
        </p>
      </div>

      {/* Constructible list toggle */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="w-full px-4 py-2 rounded-xl bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm transition-colors mb-4"
      >
        {showAll ? 'Hide' : 'Show'} all constructible n-gons (3-100)
      </button>

      {showAll && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="p-4 rounded-xl bg-dark-700/50 border border-dark-600"
        >
          <div className="flex flex-wrap gap-2">
            {constructibleList.map((num) => (
              <span
                key={num}
                onClick={() => setN(num)}
                className={`px-2 py-1 rounded text-xs font-mono cursor-pointer transition-colors ${
                  n === num
                    ? 'bg-emerald-500 text-white'
                    : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                }`}
              >
                {num}
              </span>
            ))}
          </div>
          <p className="text-dark-500 text-xs mt-3">
            {constructibleList.length} constructible regular polygons with 3-100 sides
          </p>
        </motion.div>
      )}

      {/* Gauss's discovery */}
      <div className="mt-4 p-3 rounded-lg bg-dark-700/30 text-sm text-dark-400">
        <strong className="text-amber-400">Gauss (1796):</strong> Discovered at age 19 that the regular 17-gon
        is constructible, the first new constructible polygon found since antiquity.
      </div>
    </div>
  );
}
