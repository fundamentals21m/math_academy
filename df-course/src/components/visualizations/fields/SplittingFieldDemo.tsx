import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PolynomialExample {
  name: string;
  polynomial: string;
  baseField: string;
  roots: { label: string; real: number; imag: number }[];
  splittingField: string;
  degree: number;
  factorization: string;
}

const EXAMPLES: PolynomialExample[] = [
  {
    name: 'x² - 2 over Q',
    polynomial: 'x² - 2',
    baseField: 'Q',
    roots: [
      { label: '√2', real: Math.sqrt(2), imag: 0 },
      { label: '-√2', real: -Math.sqrt(2), imag: 0 },
    ],
    splittingField: 'Q(√2)',
    degree: 2,
    factorization: '(x - √2)(x + √2)',
  },
  {
    name: 'x² + 1 over R',
    polynomial: 'x² + 1',
    baseField: 'R',
    roots: [
      { label: 'i', real: 0, imag: 1 },
      { label: '-i', real: 0, imag: -1 },
    ],
    splittingField: 'C = R(i)',
    degree: 2,
    factorization: '(x - i)(x + i)',
  },
  {
    name: 'x³ - 2 over Q',
    polynomial: 'x³ - 2',
    baseField: 'Q',
    roots: [
      { label: '∛2', real: Math.cbrt(2), imag: 0 },
      { label: 'ω∛2', real: Math.cbrt(2) * Math.cos((2 * Math.PI) / 3), imag: Math.cbrt(2) * Math.sin((2 * Math.PI) / 3) },
      { label: 'ω²∛2', real: Math.cbrt(2) * Math.cos((4 * Math.PI) / 3), imag: Math.cbrt(2) * Math.sin((4 * Math.PI) / 3) },
    ],
    splittingField: 'Q(∛2, ω)',
    degree: 6,
    factorization: '(x - ∛2)(x - ω∛2)(x - ω²∛2)',
  },
  {
    name: 'x⁴ - 2 over Q',
    polynomial: 'x⁴ - 2',
    baseField: 'Q',
    roots: [
      { label: '⁴√2', real: Math.pow(2, 0.25), imag: 0 },
      { label: '-⁴√2', real: -Math.pow(2, 0.25), imag: 0 },
      { label: 'i⁴√2', real: 0, imag: Math.pow(2, 0.25) },
      { label: '-i⁴√2', real: 0, imag: -Math.pow(2, 0.25) },
    ],
    splittingField: 'Q(⁴√2, i)',
    degree: 8,
    factorization: '(x - ⁴√2)(x + ⁴√2)(x - i⁴√2)(x + i⁴√2)',
  },
  {
    name: 'x⁴ + 1 over Q',
    polynomial: 'x⁴ + 1',
    baseField: 'Q',
    roots: [
      { label: 'ζ₈', real: Math.cos(Math.PI / 4), imag: Math.sin(Math.PI / 4) },
      { label: 'ζ₈³', real: Math.cos((3 * Math.PI) / 4), imag: Math.sin((3 * Math.PI) / 4) },
      { label: 'ζ₈⁵', real: Math.cos((5 * Math.PI) / 4), imag: Math.sin((5 * Math.PI) / 4) },
      { label: 'ζ₈⁷', real: Math.cos((7 * Math.PI) / 4), imag: Math.sin((7 * Math.PI) / 4) },
    ],
    splittingField: 'Q(ζ₈) = Q(√2, i)',
    degree: 4,
    factorization: '(x - ζ₈)(x - ζ₈³)(x - ζ₈⁵)(x - ζ₈⁷)',
  },
];

export function SplittingFieldDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const example = EXAMPLES[selectedExample];

  // Draw roots in the complex plane
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const scale = 60;

    ctx.clearRect(0, 0, w, h);

    // Draw axes
    ctx.strokeStyle = '#4a5568';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, h);
    ctx.stroke();

    // Draw axis labels
    ctx.fillStyle = '#a0aec0';
    ctx.font = '12px sans-serif';
    ctx.fillText('Re', w - 20, cy - 5);
    ctx.fillText('Im', cx + 5, 15);

    // Draw unit circle (optional reference)
    ctx.beginPath();
    ctx.arc(cx, cy, scale, 0, 2 * Math.PI);
    ctx.strokeStyle = '#4a5568';
    ctx.setLineDash([3, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw roots
    example.roots.forEach((root, i) => {
      const x = cx + root.real * scale;
      const y = cy - root.imag * scale;

      // Draw point
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, 2 * Math.PI);
      ctx.fillStyle = `hsl(${(i * 360) / example.roots.length}, 70%, 60%)`;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw label
      ctx.fillStyle = '#fff';
      ctx.font = '11px monospace';
      const labelX = x + 10;
      const labelY = y + (root.imag >= 0 ? -10 : 15);
      ctx.fillText(root.label, labelX, labelY);
    });

    // Draw scale marks
    ctx.fillStyle = '#4a5568';
    ctx.font = '10px sans-serif';
    ctx.fillText('1', cx + scale, cy + 12);
    ctx.fillText('-1', cx - scale - 10, cy + 12);
    ctx.fillText('i', cx + 4, cy - scale);
    ctx.fillText('-i', cx + 4, cy + scale + 10);
  }, [example]);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Splitting Fields
      </h3>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {EXAMPLES.map((ex, i) => (
          <button
            key={ex.name}
            onClick={() => setSelectedExample(i)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              selectedExample === i
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {ex.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Complex plane */}
        <div className="bg-dark-900 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-2">
            Roots in the Complex Plane
          </h4>
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            className="w-full"
          />
        </div>

        {/* Details */}
        <motion.div
          key={example.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Polynomial
            </h4>
            <div className="text-xl font-mono text-white">
              f(x) = {example.polynomial}
            </div>
            <div className="text-dark-400 text-sm mt-1">
              over {example.baseField}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Factorization in Splitting Field
            </h4>
            <div className="font-mono text-emerald-400">
              {example.factorization}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Splitting Field
            </h4>
            <div className="text-xl font-mono text-amber-400">
              K = {example.splittingField}
            </div>
            <div className="mt-2">
              <span className="text-dark-400">Degree: </span>
              <span className="text-white">[K : {example.baseField}] = {example.degree}</span>
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Roots ({example.roots.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {example.roots.map((root, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded text-sm font-mono"
                  style={{
                    backgroundColor: `hsla(${(i * 360) / example.roots.length}, 70%, 30%, 0.5)`,
                    color: `hsl(${(i * 360) / example.roots.length}, 70%, 75%)`,
                  }}
                >
                  {root.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-primary-400 mb-2">
          Degree Bound
        </h4>
        <p className="text-dark-300 text-sm">
          For a degree n polynomial, the splitting field has degree at most n!
          over the base field. Here: deg f = {example.roots.length}, so
          [{example.splittingField} : {example.baseField}] ≤ {example.roots.length}! = {[...Array(example.roots.length).keys()].reduce((a, b) => a * (b + 1), 1)}.
          Actual degree: {example.degree}.
        </p>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        The splitting field is the minimal extension where f factors completely
        into linear factors: f(x) = (x - α₁)(x - α₂)···(x - αₙ).
      </p>
    </div>
  );
}
