import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Euler's totient function
function phi(n: number): number {
  let result = n;
  for (let p = 2; p * p <= n; p++) {
    if (n % p === 0) {
      while (n % p === 0) n /= p;
      result -= result / p;
    }
  }
  if (n > 1) result -= result / n;
  return Math.round(result);
}

// Get divisors of n
function getDivisors(n: number): number[] {
  const divisors: number[] = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) divisors.push(n / i);
    }
  }
  return divisors.sort((a, b) => a - b);
}

// Check if gcd(k, n) = 1
function gcd(a: number, b: number): number {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

// First few cyclotomic polynomials (precomputed for display)
const CYCLOTOMIC_POLYS: { [n: number]: string } = {
  1: 'x - 1',
  2: 'x + 1',
  3: 'x² + x + 1',
  4: 'x² + 1',
  5: 'x⁴ + x³ + x² + x + 1',
  6: 'x² - x + 1',
  7: 'x⁶ + x⁵ + x⁴ + x³ + x² + x + 1',
  8: 'x⁴ + 1',
  9: 'x⁶ + x³ + 1',
  10: 'x⁴ - x³ + x² - x + 1',
  11: 'x¹⁰ + x⁹ + ... + x + 1',
  12: 'x⁴ - x² + 1',
  15: 'x⁸ - x⁷ + x⁵ - x⁴ + x³ - x + 1',
};

export function CyclotomicDemo() {
  const [n, setN] = useState(6);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Get primitive n-th roots (those k where gcd(k, n) = 1)
  const primitiveRoots = Array.from({ length: n }, (_, k) => k).filter(
    (k) => k > 0 && gcd(k, n) === 1
  );

  const divisors = getDivisors(n);
  const phiN = phi(n);

  // Draw unit circle with roots of unity
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.min(w, h) * 0.4;

    ctx.clearRect(0, 0, w, h);

    // Draw unit circle
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = '#4a5568';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(cx - r - 10, cy);
    ctx.lineTo(cx + r + 10, cy);
    ctx.moveTo(cx, cy - r - 10);
    ctx.lineTo(cx, cy + r + 10);
    ctx.strokeStyle = '#4a5568';
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#a0aec0';
    ctx.font = '10px sans-serif';
    ctx.fillText('1', cx + r + 5, cy + 12);
    ctx.fillText('-1', cx - r - 15, cy + 12);
    ctx.fillText('i', cx + 4, cy - r - 5);
    ctx.fillText('-i', cx + 4, cy + r + 12);

    // Draw all n-th roots of unity
    for (let k = 0; k < n; k++) {
      const angle = (2 * Math.PI * k) / n;
      const x = cx + r * Math.cos(angle);
      const y = cy - r * Math.sin(angle);

      const isPrimitive = gcd(k, n) === 1 && k > 0;

      // Draw point
      ctx.beginPath();
      ctx.arc(x, y, isPrimitive ? 8 : 5, 0, 2 * Math.PI);
      ctx.fillStyle = isPrimitive ? '#f6e05e' : '#4299e1';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Label
      ctx.fillStyle = isPrimitive ? '#f6e05e' : '#a0aec0';
      ctx.font = '10px monospace';
      const labelRadius = r + 20;
      const lx = cx + labelRadius * Math.cos(angle);
      const ly = cy - labelRadius * Math.sin(angle);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`ζ^${k}`, lx, ly);
    }

    // Legend
    ctx.textAlign = 'left';
    ctx.fillStyle = '#f6e05e';
    ctx.fillText('● Primitive', 10, h - 25);
    ctx.fillStyle = '#4299e1';
    ctx.fillText('● Not primitive', 10, h - 10);
  }, [n]);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Cyclotomic Polynomials
      </h3>

      {/* n selector */}
      <div className="mb-6">
        <label className="text-dark-300 text-sm mr-2">n =</label>
        <input
          type="range"
          min="2"
          max="15"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
          className="w-48 mr-3"
        />
        <span className="text-white font-mono text-lg">{n}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Unit circle visualization */}
        <div className="bg-dark-900 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-2">
            {n}-th Roots of Unity
          </h4>
          <canvas
            ref={canvasRef}
            width={280}
            height={280}
            className="w-full"
          />
        </div>

        {/* Details */}
        <motion.div
          key={n}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Cyclotomic Polynomial Φ_{n}(x)
            </h4>
            <div className="text-lg font-mono text-amber-400">
              Φ_{n}(x) = {CYCLOTOMIC_POLYS[n] || '(computed)'}
            </div>
            <div className="mt-2 text-dark-400 text-sm">
              Degree: φ({n}) = {phiN}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Primitive {n}-th Roots
            </h4>
            <p className="text-dark-400 text-sm mb-2">
              ζ^k where gcd(k, {n}) = 1:
            </p>
            <div className="flex flex-wrap gap-2">
              {primitiveRoots.map((k) => (
                <span
                  key={k}
                  className="px-2 py-1 bg-amber-900/50 text-amber-400 rounded text-sm font-mono"
                >
                  ζ^{k}
                </span>
              ))}
            </div>
            <div className="text-dark-400 text-sm mt-2">
              Count: {primitiveRoots.length} = φ({n})
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Factorization: x^{n} - 1 = ∏ Φ_d(x)
            </h4>
            <div className="flex flex-wrap gap-2">
              {divisors.map((d) => (
                <span
                  key={d}
                  className={`px-2 py-1 rounded text-sm font-mono ${
                    d === n
                      ? 'bg-amber-900/50 text-amber-400'
                      : 'bg-dark-700 text-dark-300'
                  }`}
                >
                  Φ_{d}
                </span>
              ))}
            </div>
            <p className="text-dark-400 text-sm mt-2">
              Divisors of {n}: {'{'}
              {divisors.join(', ')}
              {'}'}
            </p>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Extension Degree
            </h4>
            <div className="font-mono text-white">
              [Q(ζ_{n}) : Q] = φ({n}) = {phiN}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-primary-400 mb-2">
          Key Properties
        </h4>
        <ul className="text-dark-300 text-sm space-y-1">
          <li>• Φ_n(x) has integer coefficients</li>
          <li>• Φ_n(x) is irreducible over Q</li>
          <li>• deg Φ_n = φ(n) (Euler's totient)</li>
          <li>• x^n - 1 = ∏_{'{d|n}'} Φ_d(x)</li>
          <li>• For prime p: Φ_p(x) = 1 + x + x² + ... + x^{'{p-1}'}</li>
        </ul>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        The n-th cyclotomic polynomial Φ_n(x) is the minimal polynomial of
        primitive n-th roots of unity over Q. It divides x^n - 1 and is always
        irreducible over Q.
      </p>
    </div>
  );
}
