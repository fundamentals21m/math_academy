import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, Math } from '@/components/common';

// Kronecker Delta Visualization
function KroneckerDeltaDemo() {
  const [n, setN] = useState(4);
  const [highlightI, setHighlightI] = useState<number | null>(null);
  const [highlightJ, setHighlightJ] = useState<number | null>(null);

  const delta = (i: number, j: number) => i === j ? 1 : 0;

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Kronecker Delta: δᵢⱼ</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <p className="text-sm text-dark-400 mb-2">Identity Matrix I_{n}:</p>
          <div className="inline-block">
            {Array(n).fill(0).map((_, i) => (
              <div key={i} className="flex">
                {Array(n).fill(0).map((_, j) => {
                  const val = delta(i, j);
                  const isHighlighted = highlightI === i || highlightJ === j;
                  const isIntersection = highlightI === i && highlightJ === j;
                  return (
                    <div
                      key={j}
                      className={`w-10 h-10 flex items-center justify-center font-mono text-lg border cursor-pointer transition-all ${
                        isIntersection ? 'bg-accent-600 text-white border-accent-500' :
                        isHighlighted ? 'bg-dark-700 border-dark-500' :
                        val === 1 ? 'bg-green-900/30 text-green-400 border-dark-600' :
                        'bg-dark-800 text-dark-500 border-dark-700'
                      }`}
                      onMouseEnter={() => { setHighlightI(i); setHighlightJ(j); }}
                      onMouseLeave={() => { setHighlightI(null); setHighlightJ(null); }}
                    >
                      {val}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <label className="text-sm text-dark-400">Size n = {n}</label>
            <input
              type="range"
              min="2"
              max="6"
              value={n}
              onChange={e => setN(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {highlightI !== null && highlightJ !== null ? (
            <div className="p-4 bg-dark-800 rounded-lg">
              <p className="text-lg font-mono text-accent-400">
                δ<sub>{highlightI + 1},{highlightJ + 1}</sub> = {delta(highlightI, highlightJ)}
              </p>
              <p className="text-sm text-dark-400 mt-2">
                {highlightI === highlightJ
                  ? `i = j = ${highlightI + 1}, so δᵢⱼ = 1`
                  : `i = ${highlightI + 1} ≠ j = ${highlightJ + 1}, so δᵢⱼ = 0`}
              </p>
            </div>
          ) : (
            <div className="p-4 bg-dark-800 rounded-lg">
              <p className="text-dark-400">Hover over cells to see δᵢⱼ values</p>
            </div>
          )}

          <div className="p-3 bg-dark-800 rounded text-sm">
            <p className="text-dark-300 mb-2"><strong>Definition:</strong></p>
            <p className="font-mono text-accent-400">
              δᵢⱼ = 1 if i = j, 0 if i ≠ j
            </p>
          </div>

          <div className="p-3 bg-dark-800 rounded text-sm text-dark-400">
            <p><strong>Applications:</strong></p>
            <ul className="mt-1 space-y-1 text-xs">
              <li>• Identity matrix: I = (δᵢⱼ)</li>
              <li>• Orthonormal bases: ⟨eᵢ, eⱼ⟩ = δᵢⱼ</li>
              <li>• Tensor notation in physics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Kronecker Product Demo
function KroneckerProductDemo() {
  const [matrixA, setMatrixA] = useState([[1, 2], [3, 4]]);
  const [matrixB, setMatrixB] = useState([[0, 1], [1, 0]]);

  // Compute Kronecker product A ⊗ B
  const kroneckerProduct = () => {
    const m = matrixA.length;
    const n = matrixA[0].length;
    const p = matrixB.length;
    const q = matrixB[0].length;

    const result: number[][] = [];
    for (let i = 0; i < m * p; i++) {
      result[i] = [];
      for (let j = 0; j < n * q; j++) {
        const ai = Math.floor(i / p);
        const aj = Math.floor(j / q);
        const bi = i % p;
        const bj = j % q;
        result[i][j] = matrixA[ai][aj] * matrixB[bi][bj];
      }
    }
    return result;
  };

  const product = kroneckerProduct();

  const updateA = (i: number, j: number, value: string) => {
    const newA = matrixA.map(row => [...row]);
    newA[i][j] = parseInt(value) || 0;
    setMatrixA(newA);
  };

  const updateB = (i: number, j: number, value: string) => {
    const newB = matrixB.map(row => [...row]);
    newB[i][j] = parseInt(value) || 0;
    setMatrixB(newB);
  };

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Kronecker Product: A ⊗ B</h4>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div>
          <p className="text-xs text-dark-500 mb-1">Matrix A</p>
          <div className="grid grid-cols-2 gap-1">
            {matrixA.map((row, i) =>
              row.map((val, j) => (
                <input
                  key={`a-${i}-${j}`}
                  type="number"
                  value={val}
                  onChange={e => updateA(i, j, e.target.value)}
                  className="w-12 h-10 text-center font-mono bg-dark-800 border border-dark-600 rounded text-dark-100"
                />
              ))
            )}
          </div>
        </div>

        <span className="text-2xl text-dark-400">⊗</span>

        <div>
          <p className="text-xs text-dark-500 mb-1">Matrix B</p>
          <div className="grid grid-cols-2 gap-1">
            {matrixB.map((row, i) =>
              row.map((val, j) => (
                <input
                  key={`b-${i}-${j}`}
                  type="number"
                  value={val}
                  onChange={e => updateB(i, j, e.target.value)}
                  className="w-12 h-10 text-center font-mono bg-dark-800 border border-dark-600 rounded text-dark-100"
                />
              ))
            )}
          </div>
        </div>

        <span className="text-2xl text-dark-400">=</span>

        <div>
          <p className="text-xs text-dark-500 mb-1">A ⊗ B (4×4)</p>
          <div className="grid grid-cols-4 gap-0.5">
            {product.map((row, i) =>
              row.map((val, j) => (
                <div
                  key={`p-${i}-${j}`}
                  className={`w-9 h-8 flex items-center justify-center font-mono text-sm border ${
                    val === 0 ? 'bg-dark-800 text-dark-500 border-dark-700' :
                    val > 0 ? 'bg-green-900/30 text-green-400 border-dark-600' :
                    'bg-red-900/30 text-red-400 border-dark-600'
                  }`}
                >
                  {val}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="p-3 bg-dark-800 rounded text-sm text-dark-300">
        <p><strong>Definition:</strong> (A ⊗ B)ᵢⱼ = aᵢⱼ · B (each element of A scaled by the entire matrix B)</p>
        <p className="text-dark-500 mt-2">
          The Kronecker product is essential in quantum computing (tensor products of qubits)
          and multilinear algebra.
        </p>
      </div>
    </div>
  );
}

// Roots of Unity / Cyclotomic Fields Demo
function RootsOfUnityDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [n, setN] = useState(5);
  const [showConnections, setShowConnections] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = 100;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw unit circle
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(cx - radius - 20, cy);
    ctx.lineTo(cx + radius + 20, cy);
    ctx.moveTo(cx, cy - radius - 20);
    ctx.lineTo(cx, cy + radius + 20);
    ctx.stroke();

    // Calculate nth roots of unity
    const roots: [number, number][] = [];
    for (let k = 0; k < n; k++) {
      const angle = (2 * Math.PI * k) / n;
      roots.push([
        cx + radius * Math.cos(angle),
        cy - radius * Math.sin(angle)
      ]);
    }

    // Draw connections (regular polygon)
    if (showConnections) {
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(roots[0][0], roots[0][1]);
      for (let k = 1; k <= n; k++) {
        const [x, y] = roots[k % n];
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Draw roots
    roots.forEach(([x, y], k) => {
      // Primitive roots (gcd(k, n) = 1) in different color
      const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
      const isPrimitive = k > 0 && gcd(k, n) === 1;

      ctx.fillStyle = k === 0 ? '#fbbf24' : isPrimitive ? '#22d3ee' : '#8b5cf6';
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.fillStyle = '#9ca3af';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      const labelX = cx + (radius + 25) * Math.cos((2 * Math.PI * k) / n);
      const labelY = cy - (radius + 25) * Math.sin((2 * Math.PI * k) / n);
      ctx.fillText(`ζ^${k}`, labelX, labelY + 4);
    });

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Re', cx + radius + 25, cy + 4);
    ctx.fillText('Im', cx + 4, cy - radius - 10);
  }, [n, showConnections]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Roots of Unity and Cyclotomic Fields</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">n = {n} (nth roots of unity)</label>
            <input
              type="range"
              min="2"
              max="12"
              value={n}
              onChange={e => setN(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <label className="flex items-center gap-2 text-dark-300">
            <input
              type="checkbox"
              checked={showConnections}
              onChange={e => setShowConnections(e.target.checked)}
            />
            Show regular polygon
          </label>

          <div className="p-3 bg-dark-800 rounded text-sm">
            <p className="text-dark-300 mb-1">
              <Math tex={`\\zeta_${n} = e^{2\\pi i/${n}}`} /> is a primitive {n}th root of unity
            </p>
            <p className="text-dark-400 text-xs mt-2">
              <span className="inline-block w-3 h-3 rounded-full bg-amber-500 mr-1"></span> ζ⁰ = 1
              <span className="inline-block w-3 h-3 rounded-full bg-cyan-500 ml-3 mr-1"></span> Primitive roots
              <span className="inline-block w-3 h-3 rounded-full bg-purple-500 ml-3 mr-1"></span> Other roots
            </p>
          </div>

          <div className="p-3 bg-dark-800 rounded text-sm text-dark-400">
            <p><strong>Kronecker-Weber Theorem:</strong></p>
            <p className="mt-1">
              Every abelian extension of ℚ is contained in a cyclotomic field ℚ(ζₙ).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Constructive vs Non-Constructive Demo
function ConstructiveDemo() {
  const [showNonConstructive, setShowNonConstructive] = useState(false);

  const examples = [
    {
      theorem: '√2 is irrational',
      constructive: 'Assume √2 = p/q in lowest terms. Then p² = 2q², so p is even. Write p = 2k. Then 4k² = 2q², so q² = 2k², meaning q is even. Contradiction: p/q not in lowest terms.',
      nonConstructive: null,
      kroneckerApproved: true
    },
    {
      theorem: 'There exist irrational a, b such that a^b is rational',
      constructive: null,
      nonConstructive: 'Consider √2^√2. Either it\'s rational (done!) or it\'s irrational. If irrational, then (√2^√2)^√2 = √2² = 2 is rational. Either way, such a, b exist — but we don\'t know which case holds!',
      kroneckerApproved: false
    },
    {
      theorem: 'Every natural number is either prime or composite',
      constructive: 'Given n, test divisibility by 2, 3, ..., √n. If none divide n, it\'s prime; otherwise, we find a factor.',
      nonConstructive: null,
      kroneckerApproved: true
    },
    {
      theorem: 'There exists a transcendental number',
      constructive: 'Liouville constructed explicit transcendental numbers like ∑ 10^(-n!) = 0.110001000000000000000001...',
      nonConstructive: 'Alternatively: algebraic numbers are countable, reals are uncountable, so transcendentals exist. (But this doesn\'t construct one!)',
      kroneckerApproved: false
    }
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Constructive vs Non-Constructive Proofs</h4>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowNonConstructive(false)}
          className={`px-4 py-2 rounded ${!showNonConstructive ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'}`}
        >
          Constructive ✓
        </button>
        <button
          onClick={() => setShowNonConstructive(true)}
          className={`px-4 py-2 rounded ${showNonConstructive ? 'bg-red-600 text-white' : 'bg-dark-700 text-dark-300'}`}
        >
          Non-Constructive ✗
        </button>
      </div>

      <div className="space-y-4">
        {examples.map((ex, i) => {
          const proofToShow = showNonConstructive ? ex.nonConstructive : ex.constructive;
          if (!proofToShow) return null;

          return (
            <div
              key={i}
              className={`p-4 rounded-lg border ${
                showNonConstructive ? 'bg-red-900/20 border-red-600/50' : 'bg-green-900/20 border-green-600/50'
              }`}
            >
              <p className="font-semibold text-dark-100 mb-2">{ex.theorem}</p>
              <p className="text-sm text-dark-300">{proofToShow}</p>
              <p className={`text-xs mt-2 ${ex.kroneckerApproved ? 'text-green-400' : 'text-red-400'}`}>
                {ex.kroneckerApproved ? '✓ Kronecker approved' : '✗ Kronecker rejected'}
              </p>
            </div>
          );
        })}
      </div>

      <Callout type="note" className="mt-4">
        Kronecker insisted on constructive proofs: "A proof that something exists should show
        how to construct it." He rejected proofs by contradiction that didn't yield explicit objects.
      </Callout>
    </div>
  );
}

// The Integers Demo
function IntegersDemo() {
  const [number, setNumber] = useState(12);

  // Factorization
  const factorize = (n: number): number[] => {
    const factors: number[] = [];
    let temp = Math.abs(n);
    for (let p = 2; p * p <= temp; p++) {
      while (temp % p === 0) {
        factors.push(p);
        temp /= p;
      }
    }
    if (temp > 1) factors.push(temp);
    return factors;
  };

  // Divisors
  const divisors = (n: number): number[] => {
    const divs: number[] = [];
    const absN = Math.abs(n);
    for (let i = 1; i <= absN; i++) {
      if (absN % i === 0) divs.push(i);
    }
    return divs;
  };

  const factors = factorize(number);
  const divs = divisors(number);
  const isPrime = number > 1 && factors.length === 1;

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">"God Made the Integers..."</h4>

      <div className="text-center mb-6">
        <input
          type="number"
          value={number}
          onChange={e => setNumber(Math.max(1, Math.min(1000, parseInt(e.target.value) || 1)))}
          className="w-24 h-16 text-center text-3xl font-mono bg-dark-800 border-2 border-accent-600 rounded-lg text-dark-100"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="text-sm text-dark-500 mb-2">Prime Factorization:</p>
          <p className="font-mono text-xl text-accent-400">
            {isPrime ? `${number} is prime` : factors.join(' × ')}
          </p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="text-sm text-dark-500 mb-2">Divisors ({divs.length}):</p>
          <p className="font-mono text-sm text-dark-300 flex flex-wrap gap-1">
            {divs.map((d, i) => (
              <span key={i} className="px-2 py-0.5 bg-dark-700 rounded">{d}</span>
            ))}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-dark-800 rounded-lg border-l-4 border-accent-500">
        <p className="text-lg italic text-dark-200">
          "Die ganzen Zahlen hat der liebe Gott gemacht, alles andere ist Menschenwerk."
        </p>
        <p className="text-dark-400 mt-2">
          "God made the integers, all else is the work of man."
        </p>
        <p className="text-sm text-dark-500 mt-1">— Leopold Kronecker</p>
      </div>

      <p className="text-sm text-dark-400 mt-4">
        For Kronecker, the natural numbers were the only truly fundamental mathematical objects.
        Everything else — rationals, reals, complex numbers — were human constructions that
        should ultimately be reducible to integer arithmetic.
      </p>
    </div>
  );
}

// Kronecker vs Cantor
function KroneckerCantorDemo() {
  const [view, setView] = useState<'kronecker' | 'cantor'>('kronecker');

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Great Debate: Finitism vs Set Theory</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('kronecker')}
          className={`px-4 py-2 rounded ${view === 'kronecker' ? 'bg-red-600 text-white' : 'bg-dark-700 text-dark-300'}`}
        >
          Kronecker's View
        </button>
        <button
          onClick={() => setView('cantor')}
          className={`px-4 py-2 rounded ${view === 'cantor' ? 'bg-blue-600 text-white' : 'bg-dark-700 text-dark-300'}`}
        >
          Cantor's View
        </button>
      </div>

      {view === 'kronecker' ? (
        <div className="space-y-4">
          <div className="p-4 bg-red-900/20 border border-red-600/50 rounded-lg">
            <h5 className="font-semibold text-red-400 mb-2">Finitism / Constructivism</h5>
            <ul className="space-y-2 text-sm text-dark-300">
              <li>• Only finite, constructible objects are truly mathematical</li>
              <li>• Infinite sets don't "exist" — only potential infinities (processes)</li>
              <li>• Proofs must be constructive: show HOW to build the object</li>
              <li>• Real numbers are problematic; only rationals and algebraic numbers are rigorous</li>
              <li>• Cantor's transfinite numbers are "mathematical diseases"</li>
            </ul>
          </div>
          <blockquote className="text-dark-300 italic border-l-4 border-red-500 pl-4">
            "I don't know what predominates in Cantor's theory — philosophy or theology,
            but I am sure that there is no mathematics there."
          </blockquote>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-blue-900/20 border border-blue-600/50 rounded-lg">
            <h5 className="font-semibold text-blue-400 mb-2">Set Theory / Platonism</h5>
            <ul className="space-y-2 text-sm text-dark-300">
              <li>• Infinite sets exist as completed wholes</li>
              <li>• Different sizes of infinity: ℵ₀, ℵ₁, ... (the continuum hierarchy)</li>
              <li>• Non-constructive existence proofs are valid mathematics</li>
              <li>• Real numbers form a legitimate mathematical object</li>
              <li>• Mathematics explores a Platonic realm of abstract objects</li>
            </ul>
          </div>
          <blockquote className="text-dark-300 italic border-l-4 border-blue-500 pl-4">
            "The essence of mathematics lies in its freedom."
            <footer className="text-dark-500 not-italic mt-1">— Georg Cantor</footer>
          </blockquote>
        </div>
      )}

      <div className="mt-6 p-4 bg-dark-800 rounded-lg">
        <p className="text-sm text-dark-400">
          <strong>Historical outcome:</strong> Cantor's set theory won and became the foundation
          of modern mathematics. But Kronecker's constructivist ideas influenced intuitionism
          (Brouwer) and remain relevant in computer science, where only constructive proofs
          yield algorithms.
        </p>
      </div>
    </div>
  );
}

// Career Timeline
function CareerTimeline() {
  const events = [
    { year: '1823', event: 'Born in Liegnitz, Prussia (now Poland), to a wealthy Jewish family' },
    { year: '1841', event: 'Enters University of Berlin; studies under Dirichlet and Eisenstein' },
    { year: '1845', event: 'Receives doctorate for work on algebraic number theory' },
    { year: '1845-55', event: 'Manages family business and banking; does mathematics privately' },
    { year: '1855', event: 'Returns to Berlin; elected to Academy of Sciences' },
    { year: '1861', event: 'Professor at University of Berlin' },
    { year: '1870s', event: 'Develops finitist philosophy; begins conflict with Weierstrass' },
    { year: '1880s', event: 'Intensifies attacks on Cantor\'s set theory' },
    { year: '1891', event: 'Dies in Berlin, having shaped both algebra and the foundations debate' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Mathematician and Businessman</h4>

      <div className="relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-accent-600"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative pl-24 pb-4">
            <div className="absolute left-0 w-12 text-right text-sm font-mono text-dark-400">
              {event.year}
            </div>
            <div className="absolute left-14 w-5 h-5 rounded-full border-4 border-dark-900 bg-accent-600"></div>
            <p className="text-dark-200">{event.event}</p>
          </div>
        ))}
      </div>

      <Callout type="note" className="mt-4">
        Uniquely among major mathematicians, Kronecker spent a decade as a successful banker
        and businessman. His financial independence gave him freedom to pursue controversial
        philosophical positions without professional consequences.
      </Callout>
    </div>
  );
}

export default function Section28() {
  return (
    <LessonLayout
      title="Leopold Kronecker"
      sectionNumber={28}
      prevSection={27}
      nextSection={29}
    >
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-accent-900/50 text-accent-300 rounded-full text-sm mb-4">
          Chapter 28: The Doubter
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4">
          Leopold Kronecker
        </h1>
        <p className="text-xl text-dark-300">
          "God made the integers, all else is the work of man"
        </p>
        <p className="text-dark-400 mt-2">1823 – 1891</p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <Card variant="primary">
          <p className="text-lg text-dark-200 leading-relaxed">
            Leopold Kronecker was both a brilliant algebraist and a philosophical firebrand. He
            made fundamental contributions to algebraic number theory and algebra, including the
            delta symbol and tensor product that bear his name. But he is equally remembered for
            his fierce opposition to the new mathematics of infinite sets, his attacks on Cantor
            and Weierstrass, and his insistence that mathematics must be grounded in the integers
            alone.
          </p>
        </Card>
      </section>

      {/* The Famous Quote */}
      <section className="mb-12">
        <IntegersDemo />
      </section>

      {/* Career */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Banker-Mathematician</h2>

        <CareerTimeline />
      </section>

      {/* Kronecker Delta */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Kronecker Delta</h2>

        <p className="text-dark-300 mb-6">
          The Kronecker delta is one of the most useful notational tools in mathematics and
          physics. It's simply 1 when indices match and 0 otherwise — but this simple definition
          encodes the identity matrix and orthonormality conditions elegantly.
        </p>

        <KroneckerDeltaDemo />

        <div className="mt-6">
          <MathBlock
            tex="\delta_{ij} = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}"
            description="The Kronecker delta"
          />
        </div>
      </section>

      {/* Kronecker Product */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Kronecker Product</h2>

        <p className="text-dark-300 mb-6">
          The Kronecker product (or tensor product of matrices) is fundamental in multilinear
          algebra, quantum computing, and signal processing. It creates larger matrices from
          smaller ones in a structured way.
        </p>

        <KroneckerProductDemo />

        <Callout type="important" className="mt-6">
          In quantum computing, the state of multiple qubits is described by the Kronecker product
          of individual qubit states. A 2-qubit system lives in a 4-dimensional space (2⊗2 = 4).
        </Callout>
      </section>

      {/* Roots of Unity */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Cyclotomic Fields</h2>

        <p className="text-dark-300 mb-6">
          Kronecker made deep contributions to algebraic number theory, particularly the study
          of cyclotomic fields — number fields generated by roots of unity. The Kronecker-Weber
          theorem is a landmark result connecting these to all abelian extensions of ℚ.
        </p>

        <RootsOfUnityDemo />

        <div className="mt-6">
          <MathBlock
            tex="\zeta_n = e^{2\pi i/n}, \quad \mathbb{Q}(\zeta_n) = \text{cyclotomic field}"
            description="The nth cyclotomic field"
          />
        </div>

        <Callout type="theorem" title="Kronecker-Weber Theorem" className="mt-6">
          Every finite abelian extension of the rational numbers ℚ is contained in some
          cyclotomic field ℚ(ζₙ). This was conjectured by Kronecker and proved by Weber.
        </Callout>
      </section>

      {/* Constructivism */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Constructivist Philosophy</h2>

        <p className="text-dark-300 mb-6">
          Kronecker believed that mathematical proofs should be constructive — they should show
          how to actually build or compute the objects they claim exist. Existence proofs that
          don't construct were, to him, philosophically suspect.
        </p>

        <ConstructiveDemo />
      </section>

      {/* Kronecker vs Cantor */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The War on Infinity</h2>

        <p className="text-dark-300 mb-6">
          Kronecker's most controversial legacy is his bitter opposition to Cantor's theory of
          infinite sets. He called Cantor a "corrupter of youth" and worked to block his career.
          This conflict shaped the foundations of mathematics for decades.
        </p>

        <KroneckerCantorDemo />
      </section>

      {/* Relationship with Weierstrass */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Weierstrass Conflict</h2>

        <p className="text-dark-300 mb-6">
          Kronecker and Weierstrass were colleagues at Berlin, but their relationship soured
          over foundational disagreements. Weierstrass's analysis relied on real numbers and
          limits that Kronecker considered illegitimate.
        </p>

        <CardGrid columns={2}>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Weierstrass's View</h4>
            <p className="text-sm text-dark-400">
              Analysis requires the full real number system, constructed rigorously via
              Cauchy sequences or Dedekind cuts. Limits and continuity are well-defined.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Kronecker's Objection</h4>
            <p className="text-sm text-dark-400">
              Real numbers involve completed infinities. Only approximations by rationals
              (or algebraic numbers) should be allowed. Most of analysis is ill-founded.
            </p>
          </Card>
        </CardGrid>

        <blockquote className="mt-6 text-dark-300 italic border-l-4 border-red-500 pl-4">
          "Weierstrass has burdened analysis with meaningless symbols and concepts... Someday
          people will find it necessary to clean up all this rubbish."
          <footer className="text-dark-500 not-italic mt-1">— Kronecker (attributed)</footer>
        </blockquote>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <Card variant="secondary">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Bell's Assessment</h3>

          <blockquote className="text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4 mb-4">
            "Kronecker was one of the most cantankerous men in the history of mathematics...
            His attacks on Cantor were neither generous nor entirely justified, but his
            mathematical work was first-rate."
          </blockquote>

          <p className="text-dark-400">
            Bell portrays Kronecker as a paradox: a brilliant mathematician whose philosophical
            rigidity led him to attack some of the most important work of his era. Yet his
            constructivist ideas, dismissed at the time, have found new relevance in computer
            science and type theory.
          </p>
        </Card>
      </section>

      {/* Legacy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">A Divided Legacy</h2>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Mathematical Contributions</h4>
            <ul className="text-sm text-dark-400 space-y-1">
              <li>• Kronecker delta δᵢⱼ</li>
              <li>• Kronecker product of matrices</li>
              <li>• Kronecker-Weber theorem</li>
              <li>• Algebraic number theory</li>
              <li>• Theory of elliptic functions</li>
            </ul>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Philosophical Influence</h4>
            <ul className="text-sm text-dark-400 space-y-1">
              <li>• Precursor to intuitionism (Brouwer)</li>
              <li>• Constructive mathematics</li>
              <li>• Type theory and proof assistants</li>
              <li>• Computable analysis</li>
              <li>• Finitism in foundations</li>
            </ul>
          </Card>
        </CardGrid>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <Card variant="dark">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-dark-300">
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                The <strong>Kronecker delta</strong> δᵢⱼ equals 1 if i=j and 0 otherwise —
                encoding the identity matrix and orthonormality
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                The <strong>Kronecker product</strong> A⊗B creates block matrices, essential
                for tensor products and quantum computing
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                The <strong>Kronecker-Weber theorem</strong> states every abelian extension
                of ℚ lies in a cyclotomic field ℚ(ζₙ)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Kronecker advocated <strong>constructivism</strong>: only objects that can be
                explicitly constructed are mathematically legitimate
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                His opposition to Cantor's infinite sets was rejected by mainstream mathematics
                but influenced later constructive and computational approaches
              </span>
            </li>
          </ul>
        </Card>
      </section>
    </LessonLayout>
  );
}
