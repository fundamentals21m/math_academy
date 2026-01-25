import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GaloisExample {
  name: string;
  polynomial: string;
  field: string;
  roots: { label: string; x: number; y: number }[];
  automorphisms: { name: string; mapping: string; permutation: number[] }[];
  groupName: string;
  groupOrder: number;
}

const EXAMPLES: GaloisExample[] = [
  {
    name: 'Q(sqrt(2))/Q',
    polynomial: 'x² - 2',
    field: 'Q(√2)',
    roots: [
      { label: '√2', x: 0.7, y: 0.3 },
      { label: '-√2', x: 0.3, y: 0.3 },
    ],
    automorphisms: [
      { name: 'id', mapping: '√2 → √2', permutation: [0, 1] },
      { name: 'σ', mapping: '√2 → -√2', permutation: [1, 0] },
    ],
    groupName: 'Z/2Z',
    groupOrder: 2,
  },
  {
    name: 'C/R',
    polynomial: 'x² + 1',
    field: 'C',
    roots: [
      { label: 'i', x: 0.5, y: 0.2 },
      { label: '-i', x: 0.5, y: 0.8 },
    ],
    automorphisms: [
      { name: 'id', mapping: 'i → i', permutation: [0, 1] },
      { name: 'conj', mapping: 'i → -i', permutation: [1, 0] },
    ],
    groupName: 'Z/2Z',
    groupOrder: 2,
  },
  {
    name: 'x³ - 2 over Q',
    polynomial: 'x³ - 2',
    field: 'Q(∛2, ω)',
    roots: [
      { label: '∛2', x: 0.5, y: 0.2 },
      { label: 'ω∛2', x: 0.25, y: 0.7 },
      { label: 'ω²∛2', x: 0.75, y: 0.7 },
    ],
    automorphisms: [
      { name: 'id', mapping: 'fixes all', permutation: [0, 1, 2] },
      { name: 'σ', mapping: '∛2 → ω∛2', permutation: [1, 2, 0] },
      { name: 'σ²', mapping: '∛2 → ω²∛2', permutation: [2, 0, 1] },
      { name: 'τ', mapping: 'ω ↔ ω²', permutation: [0, 2, 1] },
      { name: 'στ', mapping: '', permutation: [2, 1, 0] },
      { name: 'σ²τ', mapping: '', permutation: [1, 0, 2] },
    ],
    groupName: 'S₃',
    groupOrder: 6,
  },
  {
    name: 'Q(sqrt(2),sqrt(3))/Q',
    polynomial: '(x²-2)(x²-3)',
    field: 'Q(√2,√3)',
    roots: [
      { label: '√2', x: 0.25, y: 0.25 },
      { label: '-√2', x: 0.75, y: 0.25 },
      { label: '√3', x: 0.25, y: 0.75 },
      { label: '-√3', x: 0.75, y: 0.75 },
    ],
    automorphisms: [
      { name: 'id', mapping: 'fixes all', permutation: [0, 1, 2, 3] },
      { name: 'σ', mapping: '√2 → -√2', permutation: [1, 0, 2, 3] },
      { name: 'τ', mapping: '√3 → -√3', permutation: [0, 1, 3, 2] },
      { name: 'στ', mapping: 'both', permutation: [1, 0, 3, 2] },
    ],
    groupName: 'V₄ (Klein)',
    groupOrder: 4,
  },
];

export function GaloisGroupDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [selectedAut, setSelectedAut] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const example = EXAMPLES[selectedExample];
  const aut = example.automorphisms[selectedAut];

  // Draw roots and permutation arrows
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Draw roots
    example.roots.forEach((root, i) => {
      const x = root.x * w;
      const y = root.y * h;

      // Point
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, 2 * Math.PI);
      ctx.fillStyle = `hsl(${(i * 360) / example.roots.length}, 70%, 50%)`;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label
      ctx.fillStyle = '#fff';
      ctx.font = '14px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(root.label, x, y + 30);
    });

    // Draw permutation arrows if not identity
    if (showAnimation && selectedAut > 0) {
      ctx.strokeStyle = '#f6e05e';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);

      for (let i = 0; i < example.roots.length; i++) {
        const j = aut.permutation[i];
        if (i !== j) {
          const fromRoot = example.roots[i];
          const toRoot = example.roots[j];
          const fx = fromRoot.x * w;
          const fy = fromRoot.y * h;
          const tx = toRoot.x * w;
          const ty = toRoot.y * h;

          // Draw curved arrow
          const mx = (fx + tx) / 2;
          const my = (fy + ty) / 2 - 30;

          ctx.beginPath();
          ctx.moveTo(fx, fy - 15);
          ctx.quadraticCurveTo(mx, my, tx, ty - 15);
          ctx.stroke();

          // Arrowhead
          const angle = Math.atan2(ty - my, tx - mx);
          ctx.beginPath();
          ctx.moveTo(tx, ty - 15);
          ctx.lineTo(tx - 10 * Math.cos(angle - 0.3), ty - 15 - 10 * Math.sin(angle - 0.3));
          ctx.moveTo(tx, ty - 15);
          ctx.lineTo(tx - 10 * Math.cos(angle + 0.3), ty - 15 - 10 * Math.sin(angle + 0.3));
          ctx.stroke();
        }
      }
      ctx.setLineDash([]);
    }
  }, [example, selectedAut, showAnimation, aut]);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Galois Group Visualization
      </h3>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {EXAMPLES.map((ex, i) => (
          <button
            key={ex.name}
            onClick={() => {
              setSelectedExample(i);
              setSelectedAut(0);
              setShowAnimation(false);
            }}
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
        {/* Canvas */}
        <div className="bg-dark-900 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-2">
            Roots of {example.polynomial}
          </h4>
          <canvas
            ref={canvasRef}
            width={280}
            height={200}
            className="w-full bg-dark-800 rounded"
          />
        </div>

        {/* Automorphisms */}
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Galois Group: Gal({example.field}/Q) ≅ {example.groupName}
            </h4>
            <div className="text-dark-300 text-sm">
              Order: {example.groupOrder}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Automorphisms
            </h4>
            <div className="flex flex-wrap gap-2 mb-3">
              {example.automorphisms.map((a, i) => (
                <button
                  key={a.name}
                  onClick={() => {
                    setSelectedAut(i);
                    setShowAnimation(true);
                  }}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    selectedAut === i
                      ? 'bg-amber-500 text-white'
                      : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                  }`}
                >
                  {a.name}
                </button>
              ))}
            </div>
            {aut.mapping && (
              <div className="text-sm text-dark-300">
                Action: <span className="text-amber-400 font-mono">{aut.mapping}</span>
              </div>
            )}
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Key Property
            </h4>
            <p className="text-dark-300 text-sm">
              Each automorphism permutes the roots of {example.polynomial}
              while fixing the base field Q.
            </p>
          </div>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        The Galois group Gal(K/F) consists of all field automorphisms of K
        that fix F. It acts on the roots of polynomials in F[x].
      </p>
    </div>
  );
}
