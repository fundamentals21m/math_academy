import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Euler's totient
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

// GCD
function gcd(a: number, b: number): number {
  while (b) [a, b] = [b, a % b];
  return a;
}

// Get units mod n
function getUnits(n: number): number[] {
  const units: number[] = [];
  for (let k = 1; k < n; k++) {
    if (gcd(k, n) === 1) units.push(k);
  }
  return units;
}

export function CyclotomicGaloisDemo() {
  const [n, setN] = useState(7);
  const [selectedAut, setSelectedAut] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const units = getUnits(n);
  const phiN = phi(n);

  // Draw roots of unity with automorphism action
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.min(w, h) * 0.38;

    ctx.clearRect(0, 0, w, h);

    // Draw unit circle
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = '#4a5568';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw all n-th roots
    for (let k = 0; k < n; k++) {
      const angle = (2 * Math.PI * k) / n - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);

      const isPrimitive = gcd(k, n) === 1 && k > 0;

      // Draw point
      ctx.beginPath();
      ctx.arc(x, y, isPrimitive ? 7 : 4, 0, 2 * Math.PI);
      ctx.fillStyle = isPrimitive ? '#f6e05e' : '#4299e1';
      ctx.fill();
    }

    // Draw automorphism action (arrows from ζ^k to ζ^(ak))
    if (selectedAut !== 1) {
      ctx.strokeStyle = '#48bb78';
      ctx.lineWidth = 1.5;

      for (let k = 1; k < n; k++) {
        if (gcd(k, n) !== 1) continue;

        const fromAngle = (2 * Math.PI * k) / n - Math.PI / 2;
        const toK = (k * selectedAut) % n;
        const toAngle = (2 * Math.PI * toK) / n - Math.PI / 2;

        if (k !== toK) {
          const fx = cx + r * 0.85 * Math.cos(fromAngle);
          const fy = cy + r * 0.85 * Math.sin(fromAngle);
          const tx = cx + r * 0.85 * Math.cos(toAngle);
          const ty = cy + r * 0.85 * Math.sin(toAngle);

          // Arc
          ctx.beginPath();
          const mx = cx + r * 0.6 * Math.cos((fromAngle + toAngle) / 2);
          const my = cy + r * 0.6 * Math.sin((fromAngle + toAngle) / 2);
          ctx.moveTo(fx, fy);
          ctx.quadraticCurveTo(mx, my, tx, ty);
          ctx.stroke();

          // Arrowhead
          const angle = Math.atan2(ty - my, tx - mx);
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(tx - 8 * Math.cos(angle - 0.4), ty - 8 * Math.sin(angle - 0.4));
          ctx.stroke();
        }
      }
    }

    // Labels
    ctx.fillStyle = '#a0aec0';
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    for (let k = 0; k < n; k++) {
      if (gcd(k, n) !== 1 && k !== 0) continue;
      const angle = (2 * Math.PI * k) / n - Math.PI / 2;
      const labelR = r + 15;
      const lx = cx + labelR * Math.cos(angle);
      const ly = cy + labelR * Math.sin(angle);
      ctx.fillText(`ζ^${k}`, lx, ly + 4);
    }
  }, [n, selectedAut]);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Cyclotomic Extension Galois Group
      </h3>

      {/* n selector */}
      <div className="mb-6">
        <label className="text-dark-300 text-sm mr-2">n =</label>
        <input
          type="range"
          min="3"
          max="12"
          value={n}
          onChange={(e) => {
            setN(parseInt(e.target.value));
            setSelectedAut(1);
          }}
          className="w-32 mr-3"
        />
        <span className="text-white font-mono">{n}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Canvas */}
        <div className="bg-dark-900 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-2">
            Primitive {n}-th Roots of Unity
          </h4>
          <canvas
            ref={canvasRef}
            width={280}
            height={280}
            className="w-full"
          />
          <div className="flex gap-2 mt-2 text-xs">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              Primitive
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-blue-400"></span>
              Non-primitive
            </span>
          </div>
        </div>

        {/* Galois group info */}
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Galois Group
            </h4>
            <div className="text-lg font-mono text-white">
              Gal(Q(ζ_{n})/Q) ≅ (Z/{n}Z)*
            </div>
            <div className="text-dark-300 text-sm mt-2">
              Order: φ({n}) = {phiN}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Automorphisms: σₐ(ζ) = ζ^a
            </h4>
            <div className="flex flex-wrap gap-2">
              {units.map((a) => (
                <button
                  key={a}
                  onClick={() => setSelectedAut(a)}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    selectedAut === a
                      ? 'bg-emerald-500 text-white'
                      : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                  }`}
                >
                  σ_{a}
                </button>
              ))}
            </div>
            <div className="mt-2 text-sm text-dark-300">
              Selected: σ_{selectedAut}: ζ ↦ ζ^{selectedAut}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Units (Z/{n}Z)*
            </h4>
            <div className="flex flex-wrap gap-2">
              {units.map((a) => (
                <span
                  key={a}
                  className="px-2 py-1 bg-dark-700 rounded text-xs font-mono"
                >
                  {a}
                </span>
              ))}
            </div>
            <div className="text-dark-400 text-xs mt-2">
              Elements coprime to {n}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Group Structure
            </h4>
            <p className="text-dark-300 text-sm">
              {n === 2 && '(Z/2Z)* = {1} (trivial)'}
              {n === 3 && '(Z/3Z)* ≅ Z/2Z (cyclic)'}
              {n === 4 && '(Z/4Z)* ≅ Z/2Z'}
              {n === 5 && '(Z/5Z)* ≅ Z/4Z (cyclic)'}
              {n === 6 && '(Z/6Z)* ≅ Z/2Z'}
              {n === 7 && '(Z/7Z)* ≅ Z/6Z (cyclic)'}
              {n === 8 && '(Z/8Z)* ≅ Z/2Z × Z/2Z'}
              {n === 9 && '(Z/9Z)* ≅ Z/6Z'}
              {n === 10 && '(Z/10Z)* ≅ Z/4Z'}
              {n === 11 && '(Z/11Z)* ≅ Z/10Z (cyclic)'}
              {n === 12 && '(Z/12Z)* ≅ Z/2Z × Z/2Z'}
            </p>
          </div>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        The Galois group of Q(ζ_n)/Q is isomorphic to (Z/nZ)*, the group of
        units mod n. Each σₐ sends ζ to ζ^a.
      </p>
    </div>
  );
}
