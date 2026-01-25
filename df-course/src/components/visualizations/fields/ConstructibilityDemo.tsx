import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ConstructibilityCase {
  name: string;
  description: string;
  degree: number;
  isPowerOf2: boolean;
  constructible: boolean;
  explanation: string;
}

const CASES: ConstructibilityCase[] = [
  {
    name: 'sqrt(2)',
    description: 'Diagonal of unit square',
    degree: 2,
    isPowerOf2: true,
    constructible: true,
    explanation: 'Degree 2 = 2^1, constructible via perpendicular bisector',
  },
  {
    name: 'sqrt(3)',
    description: 'Height of equilateral triangle',
    degree: 2,
    isPowerOf2: true,
    constructible: true,
    explanation: 'Degree 2 = 2^1, constructible via 60° angle',
  },
  {
    name: 'cbrt(2)',
    description: 'Doubling the cube',
    degree: 3,
    isPowerOf2: false,
    constructible: false,
    explanation: 'Degree 3 is NOT a power of 2 - IMPOSSIBLE',
  },
  {
    name: 'cos(20°)',
    description: 'Trisecting 60°',
    degree: 3,
    isPowerOf2: false,
    constructible: false,
    explanation: 'Degree 3 is NOT a power of 2 - IMPOSSIBLE',
  },
  {
    name: 'sqrt(pi)',
    description: 'Squaring the circle',
    degree: Infinity,
    isPowerOf2: false,
    constructible: false,
    explanation: 'pi is transcendental (Lindemann 1882) - IMPOSSIBLE',
  },
  {
    name: 'cos(2pi/17)',
    description: 'Regular 17-gon',
    degree: 16,
    isPowerOf2: true,
    constructible: true,
    explanation: 'Degree 16 = 2^4, 17 is Fermat prime - Gauss (1796)',
  },
  {
    name: 'cos(2pi/7)',
    description: 'Regular 7-gon',
    degree: 6,
    isPowerOf2: false,
    constructible: false,
    explanation: 'Degree 6 is NOT a power of 2 - IMPOSSIBLE',
  },
  {
    name: 'cos(2pi/5)',
    description: 'Regular pentagon',
    degree: 4,
    isPowerOf2: true,
    constructible: true,
    explanation: 'Degree 4 = 2^2, 5 is Fermat prime',
  },
];

// Which regular n-gons are constructible
const NGON_STATUS = [
  { n: 3, constructible: true, reason: 'Fermat prime 3' },
  { n: 4, constructible: true, reason: '4 = 2²' },
  { n: 5, constructible: true, reason: 'Fermat prime 5' },
  { n: 6, constructible: true, reason: '2 × 3' },
  { n: 7, constructible: false, reason: '7 not Fermat' },
  { n: 8, constructible: true, reason: '8 = 2³' },
  { n: 9, constructible: false, reason: '9 = 3²' },
  { n: 10, constructible: true, reason: '2 × 5' },
  { n: 11, constructible: false, reason: '11 not Fermat' },
  { n: 12, constructible: true, reason: '4 × 3' },
  { n: 15, constructible: true, reason: '3 × 5' },
  { n: 17, constructible: true, reason: 'Fermat prime 17' },
  { n: 20, constructible: true, reason: '4 × 5' },
];

export function ConstructibilityDemo() {
  const [selectedCase, setSelectedCase] = useState(0);
  const [showNgons, setShowNgons] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const caseData = CASES[selectedCase];

  // Draw polygon or classical construction
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.min(w, h) * 0.35;

    ctx.clearRect(0, 0, w, h);

    // Draw unit circle
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = '#4a5568';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Mark center
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, 2 * Math.PI);
    ctx.fillStyle = '#a0aec0';
    ctx.fill();

    // Draw based on case
    if (caseData.name.includes('cos(2pi/')) {
      const match = caseData.name.match(/cos\(2pi\/(\d+)\)/);
      if (match) {
        const n = parseInt(match[1]);
        const color = caseData.constructible ? '#48bb78' : '#f56565';

        // Draw regular n-gon (or attempt)
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
          const angle = (2 * Math.PI * i) / n - Math.PI / 2;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Mark vertices
        for (let i = 0; i < n; i++) {
          const angle = (2 * Math.PI * i) / n - Math.PI / 2;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, 2 * Math.PI);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }
    } else if (caseData.name === 'sqrt(2)') {
      // Unit square with diagonal
      const s = r * 0.7;
      ctx.strokeStyle = '#4299e1';
      ctx.lineWidth = 2;
      ctx.strokeRect(cx - s / 2, cy - s / 2, s, s);

      // Diagonal
      ctx.beginPath();
      ctx.moveTo(cx - s / 2, cy + s / 2);
      ctx.lineTo(cx + s / 2, cy - s / 2);
      ctx.strokeStyle = '#48bb78';
      ctx.stroke();

      ctx.fillStyle = '#48bb78';
      ctx.font = '14px monospace';
      ctx.fillText('√2', cx + 10, cy - 5);
    } else if (caseData.name === 'cbrt(2)') {
      // Cube visualization
      const s = r * 0.5;
      const offset = s * 0.4;

      // Front face
      ctx.strokeStyle = '#f56565';
      ctx.lineWidth = 2;
      ctx.strokeRect(cx - s / 2, cy - s / 2 + offset, s, s);

      // Back face (offset)
      ctx.strokeRect(cx - s / 2 + offset, cy - s / 2, s, s);

      // Connect corners
      ctx.beginPath();
      ctx.moveTo(cx - s / 2, cy - s / 2 + offset);
      ctx.lineTo(cx - s / 2 + offset, cy - s / 2);
      ctx.moveTo(cx + s / 2, cy - s / 2 + offset);
      ctx.lineTo(cx + s / 2 + offset, cy - s / 2);
      ctx.moveTo(cx + s / 2, cy + s / 2 + offset);
      ctx.lineTo(cx + s / 2 + offset, cy + s / 2);
      ctx.moveTo(cx - s / 2, cy + s / 2 + offset);
      ctx.lineTo(cx - s / 2 + offset, cy + s / 2);
      ctx.stroke();

      ctx.fillStyle = '#f56565';
      ctx.font = '12px monospace';
      ctx.fillText('Need ∛2', cx - 25, cy + r + 20);
    } else if (caseData.name === 'cos(20°)') {
      // Show 60° angle and attempted trisection
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + r, cy);
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + r * Math.cos(Math.PI / 3), cy - r * Math.sin(Math.PI / 3));
      ctx.strokeStyle = '#4299e1';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Mark 60° arc
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.3, -Math.PI / 3, 0);
      ctx.strokeStyle = '#4299e1';
      ctx.stroke();

      // Show the impossible trisection lines (dashed)
      ctx.setLineDash([5, 5]);
      for (let i = 1; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        const angle = (i * Math.PI) / 9; // 20° increments
        ctx.lineTo(cx + r * Math.cos(-angle), cy - r * Math.sin(angle));
        ctx.strokeStyle = '#f56565';
        ctx.stroke();
      }
      ctx.setLineDash([]);

      ctx.fillStyle = '#f56565';
      ctx.font = '12px monospace';
      ctx.fillText('Cannot trisect!', cx + 20, cy + 30);
    } else if (caseData.name === 'sqrt(pi)') {
      // Circle and attempted square
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.6, 0, 2 * Math.PI);
      ctx.strokeStyle = '#4299e1';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Square with same area would have side sqrt(pi)
      const side = r * 0.6 * Math.sqrt(Math.PI);
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = '#f56565';
      ctx.strokeRect(cx - side / 2, cy - side / 2, side, side);
      ctx.setLineDash([]);

      ctx.fillStyle = '#f56565';
      ctx.font = '12px monospace';
      ctx.fillText('π is transcendental!', cx - 50, cy + r + 20);
    }
  }, [caseData, selectedCase]);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Straightedge & Compass Constructibility
      </h3>

      {/* Case selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CASES.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setSelectedCase(i)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              selectedCase === i
                ? c.constructible
                  ? 'bg-emerald-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Canvas */}
        <div className="bg-dark-900 rounded-lg p-4">
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            className="w-full"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <motion.div
            key={caseData.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div
              className={`p-4 rounded-lg ${
                caseData.constructible
                  ? 'bg-emerald-900/30 border border-emerald-700'
                  : 'bg-red-900/30 border border-red-700'
              }`}
            >
              <div className="text-lg font-mono text-white mb-1">
                {caseData.name}
              </div>
              <div className="text-dark-300 text-sm mb-2">
                {caseData.description}
              </div>
              <div className="text-lg">
                {caseData.constructible ? (
                  <span className="text-emerald-400">✓ CONSTRUCTIBLE</span>
                ) : (
                  <span className="text-red-400">✗ NOT CONSTRUCTIBLE</span>
                )}
              </div>
            </div>

            <div className="bg-dark-900 rounded-lg p-4 mt-4">
              <h4 className="text-sm font-semibold text-primary-400 mb-2">
                Degree Analysis
              </h4>
              <div className="mb-2">
                <span className="text-dark-400">Degree over Q: </span>
                <span className="text-white font-mono">
                  {caseData.degree === Infinity ? '∞' : caseData.degree}
                </span>
              </div>
              <div className="mb-2">
                <span className="text-dark-400">Power of 2? </span>
                <span
                  className={caseData.isPowerOf2 ? 'text-emerald-400' : 'text-red-400'}
                >
                  {caseData.isPowerOf2 ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="text-sm text-dark-300 mt-2">
                {caseData.explanation}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Regular n-gons toggle */}
      <div className="mt-6">
        <button
          onClick={() => setShowNgons(!showNgons)}
          className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
        >
          {showNgons ? 'Hide' : 'Show'} Regular n-gon Constructibility
        </button>

        {showNgons && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 bg-dark-900 rounded-lg p-4"
          >
            <h4 className="text-sm font-semibold text-primary-400 mb-3">
              Gauss-Wantzel Theorem: n-gon is constructible iff n = 2^k · p₁ · p₂ · ... (distinct Fermat primes)
            </h4>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
              {NGON_STATUS.map(({ n, constructible, reason }) => (
                <div
                  key={n}
                  className={`p-2 rounded text-center ${
                    constructible ? 'bg-emerald-900/50' : 'bg-red-900/50'
                  }`}
                >
                  <div className="text-lg font-bold text-white">{n}-gon</div>
                  <div
                    className={`text-xs ${
                      constructible ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {constructible ? '✓' : '✗'}
                  </div>
                  <div className="text-xs text-dark-400">{reason}</div>
                </div>
              ))}
            </div>
            <p className="text-dark-400 text-xs mt-3">
              Known Fermat primes: 3, 5, 17, 257, 65537
            </p>
          </motion.div>
        )}
      </div>

      <p className="text-dark-400 text-sm mt-4">
        A real number α is constructible iff [Q(α):Q] is a power of 2.
        This resolves the three classical Greek problems.
      </p>
    </div>
  );
}
