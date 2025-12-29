import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, Math } from '@/components/common';

// Interactive Group Operations Demo (symmetries of a triangle)
function TriangleSymmetryDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentElement, setCurrentElement] = useState(0); // 0-5 for S_3
  const [showLabels, setShowLabels] = useState(true);

  // S_3 elements: e, r, r², s, sr, sr²
  const elements = [
    { name: 'e', description: 'Identity', rotation: 0, reflect: false },
    { name: 'r', description: 'Rotate 120°', rotation: 120, reflect: false },
    { name: 'r²', description: 'Rotate 240°', rotation: 240, reflect: false },
    { name: 's', description: 'Reflect (vertical)', rotation: 0, reflect: true },
    { name: 'sr', description: 'Reflect + Rotate 120°', rotation: 120, reflect: true },
    { name: 'sr²', description: 'Reflect + Rotate 240°', rotation: 240, reflect: true },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = 80;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    const element = elements[currentElement];
    const rotRad = (element.rotation * Math.PI) / 180;

    // Calculate triangle vertices
    const getVertex = (index: number) => {
      let angle = (index * 2 * Math.PI) / 3 - Math.PI / 2;
      if (element.reflect) {
        angle = -angle; // Reflect across vertical
      }
      angle += rotRad;
      return {
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle)
      };
    };

    const vertices = [getVertex(0), getVertex(1), getVertex(2)];
    const colors = ['#ef4444', '#22c55e', '#3b82f6'];
    const labels = ['A', 'B', 'C'];

    // Draw triangle fill
    ctx.fillStyle = '#1f2937';
    ctx.beginPath();
    ctx.moveTo(vertices[0].x, vertices[0].y);
    vertices.forEach(v => ctx.lineTo(v.x, v.y));
    ctx.closePath();
    ctx.fill();

    // Draw edges
    ctx.strokeStyle = '#6b7280';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw vertices with colors
    vertices.forEach((v, i) => {
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.arc(v.x, v.y, 12, 0, Math.PI * 2);
      ctx.fill();

      if (showLabels) {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labels[i], v.x, v.y);
      }
    });

    // Draw symmetry axis for reflections
    if (element.reflect) {
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      const axisAngle = rotRad - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx - 100 * Math.cos(axisAngle), cy - 100 * Math.sin(axisAngle));
      ctx.lineTo(cx + 100 * Math.cos(axisAngle), cy + 100 * Math.sin(axisAngle));
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, [currentElement, showLabels]);

  // Cayley table for S_3
  const cayleyTable = [
    [0, 1, 2, 3, 4, 5],
    [1, 2, 0, 4, 5, 3],
    [2, 0, 1, 5, 3, 4],
    [3, 5, 4, 0, 2, 1],
    [4, 3, 5, 1, 0, 2],
    [5, 4, 3, 2, 1, 0],
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Symmetries of a Triangle (S₃)</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col items-center">
          <canvas
            ref={canvasRef}
            width={250}
            height={250}
            className="bg-dark-950 rounded-lg"
          />

          <div className="mt-4 text-center">
            <p className="text-xl font-mono text-accent-400">{elements[currentElement].name}</p>
            <p className="text-sm text-dark-400">{elements[currentElement].description}</p>
          </div>

          <label className="flex items-center gap-2 mt-2 text-sm text-dark-400">
            <input
              type="checkbox"
              checked={showLabels}
              onChange={e => setShowLabels(e.target.checked)}
            />
            Show vertex labels
          </label>
        </div>

        <div className="flex-1">
          <p className="text-sm text-dark-400 mb-3">Select a symmetry:</p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {elements.map((el, i) => (
              <button
                key={i}
                onClick={() => setCurrentElement(i)}
                className={`px-3 py-2 rounded font-mono ${
                  currentElement === i
                    ? 'bg-accent-600 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {el.name}
              </button>
            ))}
          </div>

          <div className="text-sm text-dark-400">
            <p className="mb-2"><strong>Group Structure:</strong></p>
            <ul className="space-y-1 text-xs">
              <li>• Order: 6 elements (3! = 6)</li>
              <li>• Generators: r (rotation), s (reflection)</li>
              <li>• Non-abelian: sr ≠ rs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Permutation Visualization
function PermutationDemo() {
  const [perm, setPerm] = useState([1, 2, 3, 4, 5]);
  const [history, setHistory] = useState<number[][]>([[1, 2, 3, 4, 5]]);

  const swap = (i: number, j: number) => {
    const newPerm = [...perm];
    [newPerm[i], newPerm[j]] = [newPerm[j], newPerm[i]];
    setPerm(newPerm);
    setHistory([...history, newPerm]);
  };

  const cycle = (indices: number[]) => {
    const newPerm = [...perm];
    const first = newPerm[indices[0]];
    for (let i = 0; i < indices.length - 1; i++) {
      newPerm[indices[i]] = newPerm[indices[i + 1]];
    }
    newPerm[indices[indices.length - 1]] = first;
    setPerm(newPerm);
    setHistory([...history, newPerm]);
  };

  const reset = () => {
    setPerm([1, 2, 3, 4, 5]);
    setHistory([[1, 2, 3, 4, 5]]);
  };

  const colors = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#8b5cf6'];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Permutation Group S₅</h4>

      <div className="flex justify-center gap-4 mb-6">
        {perm.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="text-dark-400 text-sm">{i + 1}</div>
            <div className="text-2xl text-dark-500">↓</div>
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white"
              style={{ backgroundColor: colors[val - 1] }}
            >
              {val}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        <button
          onClick={() => swap(0, 1)}
          className="px-3 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded text-sm"
        >
          Swap (1 2)
        </button>
        <button
          onClick={() => swap(1, 2)}
          className="px-3 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded text-sm"
        >
          Swap (2 3)
        </button>
        <button
          onClick={() => cycle([0, 1, 2])}
          className="px-3 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded text-sm"
        >
          Cycle (1 2 3)
        </button>
        <button
          onClick={() => cycle([0, 1, 2, 3, 4])}
          className="px-3 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded text-sm"
        >
          Cycle (1 2 3 4 5)
        </button>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
        >
          Reset
        </button>
        <div className="text-sm text-dark-400">
          Permutations applied: {history.length - 1}
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm">
        <p className="text-dark-400">
          <Math tex="S_5" /> has <Math tex="5! = 120" /> elements. It is the smallest symmetric
          group that contains a subgroup with no corresponding field extension solvable by radicals.
        </p>
      </div>
    </div>
  );
}

// Field Extension Tower Visualization
function FieldExtensionDemo() {
  const [showTower, setShowTower] = useState(true);

  const extensions = [
    { field: 'ℚ', description: 'Rational numbers', color: 'bg-blue-600' },
    { field: 'ℚ(√2)', description: 'Adjoin √2', color: 'bg-green-600' },
    { field: 'ℚ(√2, √3)', description: 'Adjoin √3', color: 'bg-yellow-600' },
    { field: 'ℚ(√2, √3, i)', description: 'Adjoin i', color: 'bg-red-600' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Field Extension Tower</h4>

      <div className="flex flex-col items-center">
        {showTower && (
          <div className="flex flex-col-reverse gap-2 mb-6">
            {extensions.map((ext, i) => (
              <div
                key={i}
                className={`${ext.color} px-6 py-3 rounded-lg text-white text-center transition-all`}
                style={{ width: `${150 + i * 40}px` }}
              >
                <div className="font-mono text-lg">{ext.field}</div>
                <div className="text-xs opacity-80">{ext.description}</div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setShowTower(!showTower)}
          className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded"
        >
          {showTower ? 'Hide Tower' : 'Show Tower'}
        </button>
      </div>

      <div className="mt-6 p-4 bg-dark-800 rounded">
        <p className="text-sm text-dark-300 mb-2">
          <strong>Galois's Key Insight:</strong>
        </p>
        <p className="text-sm text-dark-400">
          A polynomial equation is solvable by radicals if and only if its Galois group is a
          "solvable group"—one that can be built up from abelian (commutative) groups.
        </p>
        <p className="text-sm text-dark-400 mt-2">
          Each step up the tower corresponds to a normal subgroup in the Galois group. If we
          can reach the top through abelian steps, the equation is solvable.
        </p>
      </div>
    </div>
  );
}

// Quintic Insolvability Demo
function QuinticDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [degree, setDegree] = useState(5);

  const formulas: Record<number, { formula: string; solvable: boolean }> = {
    1: { formula: 'x = -\\frac{b}{a}', solvable: true },
    2: { formula: 'x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}', solvable: true },
    3: { formula: '\\text{Cardano formula (1545)}', solvable: true },
    4: { formula: '\\text{Ferrari formula (1545)}', solvable: true },
    5: { formula: '\\text{No general formula exists!}', solvable: false },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    // Draw polynomial curve
    const scale = 30;
    const coeffs = Array(degree + 1).fill(0).map(() => (Math.random() - 0.5) * 2);
    coeffs[degree] = 1; // Monic

    ctx.strokeStyle = degree <= 4 ? '#22c55e' : '#ef4444';
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let px = 0; px < width; px++) {
      const x = (px - width / 2) / scale;
      let y = 0;
      for (let i = 0; i <= degree; i++) {
        y += coeffs[i] * Math.pow(x, i);
      }
      const py = height / 2 - y * scale / Math.pow(2, degree - 2);

      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Label
    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px sans-serif';
    ctx.fillText(`Degree ${degree} polynomial`, 10, 25);
  }, [degree]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Quintic Problem</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={300}
            height={200}
            className="bg-dark-950 rounded-lg w-full"
          />

          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5].map(d => (
              <button
                key={d}
                onClick={() => setDegree(d)}
                className={`w-10 h-10 rounded-lg font-bold ${
                  degree === d
                    ? d <= 4 ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className={`p-4 rounded-lg ${formulas[degree].solvable ? 'bg-green-900/30 border border-green-600' : 'bg-red-900/30 border border-red-600'}`}>
            <p className="text-sm text-dark-400 mb-2">Degree {degree}:</p>
            <div className="text-center py-2">
              <Math tex={formulas[degree].formula} />
            </div>
            <p className={`text-sm mt-2 ${formulas[degree].solvable ? 'text-green-400' : 'text-red-400'}`}>
              {formulas[degree].solvable
                ? '✓ Solvable by radicals'
                : '✗ NOT solvable by radicals (in general)'}
            </p>
          </div>

          {degree === 5 && (
            <p className="text-sm text-dark-400 mt-4">
              Galois proved that the symmetric group <Math tex="S_5" /> is not solvable—it cannot
              be broken down into abelian pieces—and therefore no general formula using only
              +, −, ×, ÷, and radicals can solve all quintic equations.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Galois Group Visualization
function GaloisGroupDemo() {
  const [polynomial, setPolynomial] = useState<'x2-2' | 'x3-2' | 'x4-1'>('x2-2');

  const polynomials = {
    'x2-2': {
      latex: 'x^2 - 2',
      roots: ['√2', '-√2'],
      group: 'ℤ₂',
      order: 2,
      automorphisms: ['Identity', '√2 ↔ -√2'],
      solvable: true
    },
    'x3-2': {
      latex: 'x^3 - 2',
      roots: ['∛2', '∛2·ω', '∛2·ω²'],
      group: 'S₃',
      order: 6,
      automorphisms: ['6 automorphisms permuting roots'],
      solvable: true
    },
    'x4-1': {
      latex: 'x^4 - 1',
      roots: ['1', '-1', 'i', '-i'],
      group: 'ℤ₂ × ℤ₂',
      order: 4,
      automorphisms: ['Identity', 'i ↔ -i', '-1 ↔ -1, i ↔ -i', '...'],
      solvable: true
    }
  };

  const current = polynomials[polynomial];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Galois Groups of Polynomials</h4>

      <div className="flex gap-2 mb-6">
        {(Object.keys(polynomials) as Array<keyof typeof polynomials>).map(p => (
          <button
            key={p}
            onClick={() => setPolynomial(p)}
            className={`px-4 py-2 rounded ${
              polynomial === p
                ? 'bg-accent-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            <Math tex={polynomials[p].latex} />
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-dark-800 rounded-lg">
          <h5 className="font-semibold text-dark-200 mb-3">Roots</h5>
          <div className="flex flex-wrap gap-2">
            {current.roots.map((root, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-accent-600/30 text-accent-300 rounded font-mono"
              >
                {root}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-dark-800 rounded-lg">
          <h5 className="font-semibold text-dark-200 mb-3">Galois Group</h5>
          <p className="text-2xl font-mono text-accent-400">{current.group}</p>
          <p className="text-sm text-dark-400 mt-1">Order: {current.order}</p>
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-800/50 rounded text-sm text-dark-400">
        <p>
          The Galois group captures all the symmetries among the roots. A polynomial is solvable
          by radicals ⟺ its Galois group is solvable.
        </p>
      </div>
    </div>
  );
}

// Tragic Timeline
function GaloisTimeline() {
  const events = [
    { year: '1811', age: 0, event: 'Born near Paris during the Napoleonic era' },
    { year: '1823', age: 12, event: 'Enters Lycée Louis-le-Grand; becomes bored with routine studies' },
    { year: '1827', age: 15, event: 'Discovers Legendre\'s geometry text, masters it in two days' },
    { year: '1828', age: 16, event: 'Fails entrance to École Polytechnique; continues original research' },
    { year: '1829', age: 17, event: 'Submits first paper to Cauchy, who loses it. Father commits suicide.' },
    { year: '1829', age: 17, event: 'Fails École Polytechnique again—examiner "so dull Galois threw an eraser at him"' },
    { year: '1830', age: 18, event: 'Paper sent to Fourier dies with him; paper sent to Poisson is "incomprehensible"' },
    { year: '1831', age: 19, event: 'Arrested twice for political activities; imprisoned' },
    { year: '1832', age: 20, event: 'Challenged to a duel. Spends night writing out his mathematics.' },
    { year: 'May 30, 1832', age: 20, event: 'Dies of wounds from duel. His notes revolutionize mathematics.' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">A Life Cut Short</h4>

      <div className="relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-red-600"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative pl-24 pb-4">
            <div className="absolute left-0 w-12 text-right text-sm font-mono text-dark-400">
              {event.year}
            </div>
            <div className="absolute left-14 w-5 h-5 rounded-full bg-red-600 border-4 border-dark-900"></div>
            <div className="text-dark-200">
              <span className="text-xs text-dark-500">(age {event.age})</span> {event.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// The Night Before
function LastNightDemo() {
  const [currentNote, setCurrentNote] = useState(0);

  const notes = [
    {
      title: 'Letter to Auguste Chevalier',
      excerpt: '"I have made some new discoveries in analysis... You will publicly ask Jacobi or Gauss to give their opinion, not on the truth, but on the importance of these theorems."'
    },
    {
      title: 'Marginal Notes',
      excerpt: '"Il n\'y a pas de temps" (I have no time) — scrawled in the margins, as he rushed to write down years of ideas in a single night.'
    },
    {
      title: 'The Key Theorem',
      excerpt: '"For an equation to be solvable by radicals, it is necessary and sufficient that... [the Galois group be solvable]"'
    },
    {
      title: 'Final Words',
      excerpt: '"Je n\'ai pas le temps!" — His final written words, apologizing for the incompleteness of his work.'
    }
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Night Before the Duel</h4>

      <div className="bg-dark-800 rounded-lg p-6 border-l-4 border-amber-500">
        <h5 className="text-lg font-semibold text-dark-100 mb-2">{notes[currentNote].title}</h5>
        <p className="italic text-dark-300">{notes[currentNote].excerpt}</p>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {notes.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentNote(i)}
            className={`w-3 h-3 rounded-full ${
              currentNote === i ? 'bg-amber-500' : 'bg-dark-600'
            }`}
          />
        ))}
      </div>

      <p className="text-sm text-dark-400 mt-4 text-center">
        On the night of May 29, 1832, knowing he would likely die, Galois frantically wrote
        down his mathematical discoveries. These 60 pages changed mathematics forever.
      </p>
    </div>
  );
}

export default function Section22() {
  return (
    <LessonLayout
      title="Évariste Galois"
      sectionNumber={22}
      prevSection={21}
      nextSection={23}
    >
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-red-900/50 text-red-300 rounded-full text-sm mb-4">
          Chapter 22: Genius and Tragedy
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4">
          Évariste Galois
        </h1>
        <p className="text-xl text-dark-300">
          Twenty years old, one night, and the birth of modern algebra
        </p>
        <p className="text-dark-400 mt-2">1811 – 1832</p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <Card variant="primary">
          <p className="text-lg text-dark-200 leading-relaxed">
            In the entire history of mathematics, no story is more dramatic than that of Évariste
            Galois. Dead at twenty from a duel, he left behind a handful of papers that took
            decades to understand—and that founded group theory, Galois theory, and much of
            modern abstract algebra. His answer to the ancient question "which equations can be
            solved by radicals?" was so profound that it required the invention of entirely new
            mathematical concepts.
          </p>
        </Card>
      </section>

      {/* The Tragic Arc */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">A Life of Frustration</h2>

        <GaloisTimeline />

        <Callout type="warning" className="mt-6">
          Galois's genius was recognized by almost no one during his lifetime. Cauchy lost his
          first paper. Fourier died before reading the second. Poisson dismissed the third as
          "incomprehensible." The mathematical establishment failed him completely.
        </Callout>
      </section>

      {/* The Quintic Problem */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Ancient Question</h2>

        <p className="text-dark-300 mb-6">
          For centuries, mathematicians sought general formulas for solving polynomial equations.
          The quadratic formula was known to the Babylonians. In the Renaissance, Cardano published
          formulas for cubics and quartics. But the quintic (degree 5) resisted all attempts.
        </p>

        <QuinticDemo />

        <p className="text-dark-300 mt-6">
          Abel proved (just before Galois) that no general formula exists for the quintic. But
          Galois went further: he explained <em>why</em>, and gave a criterion for <em>any</em>
          polynomial equation.
        </p>
      </section>

      {/* Group Theory */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Birth of Group Theory</h2>

        <p className="text-dark-300 mb-6">
          To solve the problem, Galois invented what we now call <em>group theory</em>. A group
          is a set with an operation satisfying closure, associativity, identity, and inverses.
          The simplest examples come from symmetries.
        </p>

        <TriangleSymmetryDemo />

        <div className="mt-6">
          <MathBlock
            tex="G = \{e, r, r^2, s, sr, sr^2\}"
            description="The symmetric group S₃: all symmetries of an equilateral triangle"
          />
        </div>

        <CardGrid columns={2} className="mt-6">
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Closure</h4>
            <p className="text-sm text-dark-400">
              Combining two symmetries gives another symmetry
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Non-commutativity</h4>
            <p className="text-sm text-dark-400">
              <Math tex="sr \neq rs" />: order matters! This is key to Galois theory.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Permutation Groups */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Permutation Groups</h2>

        <p className="text-dark-300 mb-6">
          Galois realized that the roots of a polynomial can be permuted in ways that preserve
          all algebraic relations among them. These permutations form a group—the <em>Galois
          group</em> of the polynomial.
        </p>

        <PermutationDemo />
      </section>

      {/* Galois Groups */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Galois Groups</h2>

        <GaloisGroupDemo />

        <Callout type="theorem" title="Galois's Fundamental Theorem" className="mt-6">
          A polynomial equation is solvable by radicals if and only if its Galois group is a
          <em>solvable group</em>—one that has a chain of normal subgroups with abelian quotients.
        </Callout>
      </section>

      {/* Field Extensions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Field Extensions</h2>

        <p className="text-dark-300 mb-6">
          Solving by radicals means building up from rational numbers by adjoining roots:
          first <Math tex="\sqrt{2}" />, then <Math tex="\sqrt[3]{3}" />, and so on. Each step
          extends the field. Galois showed this tower of fields corresponds exactly to a tower
          of subgroups.
        </p>

        <FieldExtensionDemo />

        <div className="mt-6">
          <MathBlock
            tex="\mathbb{Q} \subset \mathbb{Q}(\sqrt{2}) \subset \mathbb{Q}(\sqrt{2}, \sqrt{3}) \subset \cdots"
            description="A tower of field extensions"
          />
        </div>
      </section>

      {/* The Last Night */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Night Before</h2>

        <LastNightDemo />
      </section>

      {/* The Duel and Legacy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Death and Immortality</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="dark">
            <h4 className="font-semibold text-dark-100 mb-3">The Duel</h4>
            <p className="text-dark-400 text-sm">
              On May 30, 1832, Galois was shot in the abdomen in a duel—the circumstances remain
              mysterious (a quarrel over a woman? A political setup?). He was found by a peasant
              and died the next day in his brother's arms, saying: "Don't cry, Alfred! I need all
              my courage to die at twenty."
            </p>
          </Card>
          <Card variant="dark">
            <h4 className="font-semibold text-dark-100 mb-3">The Legacy</h4>
            <p className="text-dark-400 text-sm">
              Galois's papers were finally published in 1846 by Liouville, who declared them
              "completely correct." It took mathematicians decades to fully understand and develop
              his ideas. Today, Galois theory is central to algebra, number theory, and beyond.
            </p>
          </Card>
        </div>

        <Callout type="important" className="mt-6">
          Galois's 60 pages of rushed notes from his final night contained ideas that took the
          rest of the 19th century to fully develop. Group theory is now the language of symmetry
          throughout mathematics and physics.
        </Callout>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <Card variant="secondary">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Bell's Assessment</h3>

          <blockquote className="text-lg text-dark-300 italic border-l-4 border-red-500 pl-4 mb-4">
            "Galois was no exception to the rule that revolutionaries are beyond the
            comprehension of their contemporaries... What he wrote in those hurried, desperate
            pages the night before he was murdered is one of the most significant contributions
            to algebra ever made."
          </blockquote>

          <p className="text-dark-400">
            Bell portrays Galois as the ultimate romantic mathematician: a passionate revolutionary,
            a misunderstood genius, a young man whose brilliance burned too bright to survive in
            the world. While some details of Bell's account have been questioned by historians,
            the mathematical significance of Galois's work is beyond dispute.
          </p>
        </Card>
      </section>

      {/* Why It Matters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Why Galois Theory Matters</h2>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Impossibility Proofs</h4>
            <p className="text-sm text-dark-400">
              Proves the impossibility of trisecting angles, doubling cubes, and squaring circles
              with compass and straightedge—ancient problems finally resolved.
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Modern Algebra</h4>
            <p className="text-sm text-dark-400">
              Groups, rings, and fields—the core structures of abstract algebra—all trace back
              to Galois's insights about symmetry and structure.
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Number Theory</h4>
            <p className="text-sm text-dark-400">
              Class field theory, the study of abelian extensions, and the Langlands program all
              build on Galois's correspondence between groups and fields.
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Physics</h4>
            <p className="text-sm text-dark-400">
              Symmetry groups describe conservation laws, particle physics, and the Standard Model.
              Group theory is the language of modern physics.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <Card variant="dark">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-dark-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              <span>
                A polynomial is solvable by radicals ⟺ its Galois group is solvable (can be
                built from abelian groups)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              <span>
                The symmetric group <Math tex="S_5" /> is not solvable, so the general quintic
                has no radical solution
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              <span>
                Groups capture symmetry abstractly: a set with an operation satisfying closure,
                associativity, identity, and inverses
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              <span>
                The Galois correspondence connects field extensions to subgroups of the Galois
                group—a bridge between algebra and geometry
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              <span>
                Galois died at 20, but his 60 pages of notes founded group theory and modern
                abstract algebra
              </span>
            </li>
          </ul>
        </Card>
      </section>
    </LessonLayout>
  );
}
