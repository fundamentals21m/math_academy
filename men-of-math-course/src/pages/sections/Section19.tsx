import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, InlineMath } from '@/components/common';

// =============================================================================
// INTERACTIVE VISUALIZATIONS
// =============================================================================

/**
 * Polynomial Root Formulas
 * Shows the progression from quadratic to quintic
 */
function PolynomialFormulas() {
  const [degree, setDegree] = useState(2);

  const formulas: Record<number, { name: string; formula: string; solvable: boolean; note: string }> = {
    2: {
      name: 'Quadratic',
      formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
      solvable: true,
      note: 'Known since antiquity (Babylonians, ~2000 BC)',
    },
    3: {
      name: 'Cubic',
      formula: 'x = \\sqrt[3]{-\\frac{q}{2} + \\sqrt{\\frac{q^2}{4} + \\frac{p^3}{27}}} + \\sqrt[3]{-\\frac{q}{2} - \\sqrt{\\frac{q^2}{4} + \\frac{p^3}{27}}}',
      solvable: true,
      note: 'Discovered by Tartaglia & Cardano (1545)',
    },
    4: {
      name: 'Quartic',
      formula: '\\text{(Complex formula involving nested radicals)}',
      solvable: true,
      note: 'Discovered by Ferrari (1545)',
    },
    5: {
      name: 'Quintic',
      formula: '\\text{No general formula exists!}',
      solvable: false,
      note: 'Proved impossible by Abel (1824)',
    },
  };

  const info = formulas[degree];

  return (
    <Card title="The Quest for Root Formulas">
      <div className="space-y-4">
        <p className="text-dark-300">
          For centuries, mathematicians sought formulas to solve polynomial equations
          using only arithmetic operations and radicals (roots).
        </p>
        <div className="flex gap-2">
          {[2, 3, 4, 5].map(d => (
            <button
              key={d}
              onClick={() => setDegree(d)}
              className={`px-4 py-2 rounded ${degree === d ? 'bg-blue-600' : 'bg-dark-700'} text-dark-100`}
            >
              Degree {d}
            </button>
          ))}
        </div>
        <div className={`p-4 rounded-lg ${info.solvable ? 'bg-dark-800' : 'bg-red-900/30 border border-red-700'}`}>
          <h4 className={`font-bold mb-2 ${info.solvable ? 'text-green-400' : 'text-red-400'}`}>
            {info.name}: {info.solvable ? '✓ Solvable by radicals' : '✗ NOT solvable by radicals'}
          </h4>
          <MathBlock math={info.formula} />
          <p className="text-dark-400 text-sm mt-2">{info.note}</p>
        </div>
        {degree === 5 && (
          <Callout type="warning" title="Abel's Breakthrough">
            Abel proved that no formula using only +, −, ×, ÷, and nth roots can solve
            the general quintic equation. This was one of the most important results
            in 19th-century mathematics.
          </Callout>
        )}
      </div>
    </Card>
  );
}

/**
 * Polynomial Roots Visualization
 * Shows roots in the complex plane
 */
function PolynomialRootsDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [coefficients, setCoefficients] = useState([1, 0, -1, 0, -1]); // x⁴ - x² - 1
  const [showRoots, setShowRoots] = useState(true);

  // Find roots numerically using Newton's method with multiple starting points
  const findRoots = (coeffs: number[]): { re: number; im: number }[] => {
    const roots: { re: number; im: number }[] = [];
    const degree = coeffs.length - 1;

    // Evaluate polynomial at complex z
    const evalPoly = (zr: number, zi: number): { re: number; im: number } => {
      let re = 0, im = 0;
      for (let i = coeffs.length - 1; i >= 0; i--) {
        const newRe = re * zr - im * zi + coeffs[i];
        const newIm = re * zi + im * zr;
        re = newRe;
        im = newIm;
      }
      return { re, im };
    };

    // Evaluate derivative
    const evalDeriv = (zr: number, zi: number): { re: number; im: number } => {
      let re = 0, im = 0;
      for (let i = coeffs.length - 1; i >= 1; i--) {
        const newRe = re * zr - im * zi + coeffs[i] * i;
        const newIm = re * zi + im * zr;
        re = newRe;
        im = newIm;
      }
      return { re, im };
    };

    // Try multiple starting points
    for (let angle = 0; angle < 2 * Math.PI; angle += Math.PI / 4) {
      for (let r = 0.5; r <= 2; r += 0.5) {
        let zr = r * Math.cos(angle);
        let zi = r * Math.sin(angle);

        // Newton iteration
        for (let iter = 0; iter < 50; iter++) {
          const f = evalPoly(zr, zi);
          const df = evalDeriv(zr, zi);
          const denom = df.re * df.re + df.im * df.im;
          if (denom < 1e-10) break;

          const dzr = (f.re * df.re + f.im * df.im) / denom;
          const dzi = (f.im * df.re - f.re * df.im) / denom;
          zr -= dzr;
          zi -= dzi;

          if (dzr * dzr + dzi * dzi < 1e-12) break;
        }

        // Check if this is a new root
        const isNew = !roots.some(root =>
          (root.re - zr) ** 2 + (root.im - zi) ** 2 < 0.01
        );
        const fVal = evalPoly(zr, zi);
        if (isNew && fVal.re ** 2 + fVal.im ** 2 < 0.01) {
          roots.push({ re: zr, im: zi });
        }
      }
    }

    return roots.slice(0, degree);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const scale = 80;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(width, cy);
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, height);
    ctx.stroke();

    // Draw grid
    ctx.strokeStyle = '#1f2937';
    for (let i = -2; i <= 2; i++) {
      if (i !== 0) {
        ctx.beginPath();
        ctx.moveTo(cx + i * scale, 0);
        ctx.lineTo(cx + i * scale, height);
        ctx.moveTo(0, cy + i * scale);
        ctx.lineTo(width, cy + i * scale);
        ctx.stroke();
      }
    }

    // Labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px monospace';
    ctx.fillText('Re', width - 25, cy - 8);
    ctx.fillText('Im', cx + 8, 15);
    ctx.fillText('1', cx + scale - 5, cy + 15);
    ctx.fillText('i', cx + 8, cy - scale + 5);

    // Find and draw roots
    if (showRoots) {
      const roots = findRoots(coefficients);
      roots.forEach((root, i) => {
        const x = cx + root.re * scale;
        const y = cy - root.im * scale;

        ctx.fillStyle = `hsl(${i * 60}, 70%, 50%)`;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.fill();

        // Root label
        ctx.fillStyle = '#e5e7eb';
        ctx.font = '10px monospace';
        const label = `${root.re.toFixed(2)}${root.im >= 0 ? '+' : ''}${root.im.toFixed(2)}i`;
        ctx.fillText(label, x + 10, y - 5);
      });
    }

    // Show polynomial
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    let polyStr = '';
    coefficients.forEach((c, i) => {
      const power = coefficients.length - 1 - i;
      if (c !== 0) {
        const sign = c > 0 && polyStr ? '+' : '';
        if (power === 0) polyStr += `${sign}${c}`;
        else if (power === 1) polyStr += `${sign}${c === 1 ? '' : c === -1 ? '-' : c}x`;
        else polyStr += `${sign}${c === 1 ? '' : c === -1 ? '-' : c}x^${power}`;
      }
    });
    ctx.fillText(`p(x) = ${polyStr}`, 10, 25);

  }, [coefficients, showRoots]);

  const presets = [
    { name: 'x² - 1', coeffs: [1, 0, -1] },
    { name: 'x³ - 1', coeffs: [1, 0, 0, -1] },
    { name: 'x⁴ + 1', coeffs: [1, 0, 0, 0, 1] },
    { name: 'x⁵ - 1', coeffs: [1, 0, 0, 0, 0, -1] },
    { name: 'x⁵ - x + 1', coeffs: [1, 0, 0, 0, -1, 1] },
  ];

  return (
    <Card title="Roots in the Complex Plane">
      <div className="space-y-4">
        <p className="text-dark-300">
          Every polynomial has roots (by the Fundamental Theorem of Algebra), but
          not all can be expressed using radicals. The roots still exist—we just
          can't write them with a finite formula.
        </p>
        <div className="flex flex-wrap gap-2">
          {presets.map(({ name, coeffs }) => (
            <button
              key={name}
              onClick={() => setCoefficients(coeffs)}
              className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-200 text-sm"
            >
              {name}
            </button>
          ))}
        </div>
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="w-full max-w-md mx-auto border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Abelian vs Non-Abelian Groups
 */
function AbelianGroupDemo() {
  const [groupType, setGroupType] = useState<'abelian' | 'nonabelian'>('abelian');

  return (
    <Card title="Abelian Groups">
      <div className="space-y-4">
        <p className="text-dark-300">
          A group is <strong>Abelian</strong> (named after Abel) if the operation is
          commutative: <Math math="a \cdot b = b \cdot a" /> for all elements.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setGroupType('abelian')}
            className={`px-4 py-2 rounded ${groupType === 'abelian' ? 'bg-green-600' : 'bg-dark-700'} text-dark-100`}
          >
            Abelian
          </button>
          <button
            onClick={() => setGroupType('nonabelian')}
            className={`px-4 py-2 rounded ${groupType === 'nonabelian' ? 'bg-red-600' : 'bg-dark-700'} text-dark-100`}
          >
            Non-Abelian
          </button>
        </div>

        {groupType === 'abelian' ? (
          <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg">
            <h4 className="text-green-400 font-bold mb-2">Example: Integers under Addition (ℤ, +)</h4>
            <div className="grid grid-cols-2 gap-4 text-dark-300">
              <div>
                <p className="font-mono">3 + 5 = 8</p>
                <p className="font-mono">5 + 3 = 8</p>
                <p className="text-green-400 mt-1">✓ Same result!</p>
              </div>
              <div>
                <p className="font-mono">(-2) + 7 = 5</p>
                <p className="font-mono">7 + (-2) = 5</p>
                <p className="text-green-400 mt-1">✓ Same result!</p>
              </div>
            </div>
            <p className="text-dark-400 mt-3 text-sm">
              Addition of integers always commutes: a + b = b + a
            </p>
          </div>
        ) : (
          <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
            <h4 className="text-red-400 font-bold mb-2">Example: Matrix Multiplication</h4>
            <div className="grid grid-cols-2 gap-4 text-dark-300">
              <div>
                <MathBlock math="A \cdot B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}" />
              </div>
              <div>
                <MathBlock math="B \cdot A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}" />
              </div>
            </div>
            <p className="text-red-400 mt-2">✗ Different results! AB ≠ BA</p>
            <p className="text-dark-400 mt-1 text-sm">
              Matrix multiplication does not commute in general
            </p>
          </div>
        )}

        <p className="text-dark-400 text-sm">
          The connection to solvability: a polynomial is solvable by radicals if and only
          if its Galois group is "solvable"—built from Abelian pieces.
        </p>
      </div>
    </Card>
  );
}

/**
 * Elliptic Integrals Visualization
 */
function EllipticIntegralDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [k, setK] = useState(0.7);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 50;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - 20, height - padding);
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(padding, 20);
    ctx.stroke();

    // Compute elliptic integral F(φ, k) numerically
    const ellipticF = (phi: number, k: number): number => {
      let sum = 0;
      const n = 100;
      const dphi = phi / n;
      for (let i = 0; i < n; i++) {
        const p = (i + 0.5) * dphi;
        sum += dphi / Math.sqrt(1 - k * k * Math.sin(p) * Math.sin(p));
      }
      return sum;
    };

    const xMax = Math.PI / 2;
    const yMax = ellipticF(Math.PI / 2, k) * 1.2;

    const toX = (x: number) => padding + (x / xMax) * (width - padding - 30);
    const toY = (y: number) => height - padding - (y / yMax) * (height - padding - 40);

    // Draw the elliptic integral curve
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let phi = 0; phi <= Math.PI / 2; phi += 0.02) {
      const y = ellipticF(phi, k);
      if (phi === 0) ctx.moveTo(toX(phi), toY(y));
      else ctx.lineTo(toX(phi), toY(y));
    }
    ctx.stroke();

    // Compare to arcsin (k=0 case)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    for (let phi = 0; phi <= Math.PI / 2; phi += 0.02) {
      const y = phi; // When k=0, F(φ,0) = φ
      if (phi === 0) ctx.moveTo(toX(phi), toY(y));
      else ctx.lineTo(toX(phi), toY(y));
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText('φ', width - 30, height - padding + 5);
    ctx.fillText('F(φ,k)', padding + 5, 35);

    ctx.fillStyle = '#3b82f6';
    ctx.fillText(`F(φ, ${k.toFixed(2)})`, width - 100, 50);
    ctx.fillStyle = '#10b981';
    ctx.fillText('F(φ, 0) = φ', width - 100, 70);

    // Axis labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '10px monospace';
    ctx.fillText('0', padding - 10, height - padding + 15);
    ctx.fillText('π/2', toX(Math.PI / 2) - 10, height - padding + 15);

  }, [k]);

  return (
    <Card title="Elliptic Integrals">
      <div className="space-y-4">
        <p className="text-dark-300">
          Abel made fundamental discoveries about elliptic integrals—integrals that
          arise from computing arc lengths of ellipses and cannot be expressed in
          terms of elementary functions.
        </p>
        <MathBlock math="F(\phi, k) = \int_0^\phi \frac{d\theta}{\sqrt{1 - k^2 \sin^2 \theta}}" />
        <div>
          <label className="block text-sm text-dark-400 mb-1">Modulus k: {k.toFixed(2)}</label>
          <input
            type="range"
            min="0"
            max="0.99"
            step="0.01"
            value={k}
            onChange={(e) => setK(parseFloat(e.target.value))}
            className="w-48"
          />
        </div>
        <canvas
          ref={canvasRef}
          width={450}
          height={250}
          className="w-full border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          Abel discovered that inverting these integrals gives <em>elliptic functions</em>—
          doubly periodic functions that generalize trigonometric functions.
        </p>
      </div>
    </Card>
  );
}

/**
 * Abel's Tragic Life Timeline
 */
function AbelTimeline() {
  const events = [
    { year: '1802', title: 'Birth', description: 'Born in Finnøy, Norway, to a poor pastor\'s family', color: 'blue' },
    { year: '1815', title: 'Cathedral School', description: 'Enters school in Christiania (Oslo); teacher Holmboe recognizes his genius', color: 'blue' },
    { year: '1820', title: 'Father Dies', description: 'Family left destitute; Abel supports siblings while studying', color: 'red' },
    { year: '1821', title: 'University', description: 'Enters University of Christiania on scholarship', color: 'blue' },
    { year: '1824', title: 'Quintic Proof', description: 'Publishes proof that the quintic is unsolvable—at his own expense', color: 'green' },
    { year: '1825', title: 'European Tour', description: 'Travels to Berlin and Paris; meets Crelle but snubbed by French mathematicians', color: 'blue' },
    { year: '1826', title: 'Paris Memoir', description: 'Submits masterwork to Academy; Cauchy loses it. Never read during Abel\'s life', color: 'red' },
    { year: '1827', title: 'Return Home', description: 'Returns to Norway in debt; survives on small teaching jobs', color: 'red' },
    { year: '1828', title: 'Tuberculosis', description: 'Contracts tuberculosis; continues working despite illness', color: 'red' },
    { year: '1829', title: 'Death', description: 'Dies at 26, two days before letter arrives offering Berlin professorship', color: 'red' },
  ];

  return (
    <Card title="A Tragically Short Life">
      <div className="space-y-4">
        <p className="text-dark-300">
          Abel accomplished more in his 26 years than most mathematicians do in a lifetime,
          yet died in poverty, his greatest work unread by those who could have helped him.
        </p>
        <div className="relative border-l-2 border-dark-600 ml-4 space-y-3">
          {events.map((event, i) => (
            <div key={i} className="ml-6 relative">
              <div className={`absolute -left-8 w-4 h-4 rounded-full ${
                event.color === 'green' ? 'bg-green-500' :
                event.color === 'red' ? 'bg-red-500' : 'bg-blue-500'
              }`} />
              <div className="text-dark-400 text-sm font-mono">{event.year}</div>
              <div className="text-dark-100 font-semibold text-sm">{event.title}</div>
              <div className="text-dark-400 text-xs">{event.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/**
 * Radicals and Solvability
 */
function RadicalsDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw tree of operations
    const drawNode = (x: number, y: number, text: string, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = '#0a0a0f';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, x, y);
    };

    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
      ctx.strokeStyle = '#4b5563';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    // Allowed operations tree
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Operations allowed in "solvable by radicals":', width / 2, 25);

    // Level 1: Basic operations
    drawLine(width / 2, 60, width / 2 - 120, 120);
    drawLine(width / 2, 60, width / 2 - 40, 120);
    drawLine(width / 2, 60, width / 2 + 40, 120);
    drawLine(width / 2, 60, width / 2 + 120, 120);

    drawNode(width / 2, 60, 'Start', '#3b82f6');
    drawNode(width / 2 - 120, 120, '+', '#10b981');
    drawNode(width / 2 - 40, 120, '−', '#10b981');
    drawNode(width / 2 + 40, 120, '×', '#10b981');
    drawNode(width / 2 + 120, 120, '÷', '#10b981');

    // Level 2: Radicals
    drawLine(width / 2, 120, width / 2, 180);
    drawNode(width / 2, 180, '√ⁿ', '#f59e0b');

    ctx.fillStyle = '#6b7280';
    ctx.font = '11px monospace';
    ctx.fillText('(nth roots)', width / 2, 215);

    // Forbidden zone
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(width / 2 - 80, 235, 160, 50);
    ctx.setLineDash([]);

    ctx.fillStyle = '#ef4444';
    ctx.font = '12px monospace';
    ctx.fillText('Other operations', width / 2, 255);
    ctx.fillText('(exp, log, trig, ...)', width / 2, 272);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('For degree ≥ 5: Cannot always reach', 20, height - 25);
    ctx.fillText('roots using only these operations!', 20, height - 10);

  }, []);

  return (
    <Card title="What Does 'Solvable by Radicals' Mean?">
      <div className="space-y-4">
        <p className="text-dark-300">
          Abel proved that no combination of the basic operations and root extractions
          can express the roots of a general quintic polynomial.
        </p>
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="w-full max-w-md mx-auto border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <div className="prose prose-invert max-w-none">
        {/* Opening Quote */}
        <p className="text-xl text-dark-200 mb-6">
          Niels Henrik Abel lived only 26 years, yet in that brief span he transformed
          algebra and analysis. His proof that the general quintic equation cannot be
          solved by radicals closed a 300-year quest and opened entirely new fields
          of mathematics.
        </p>

        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-dark-300">
          "Abel has left mathematicians enough to keep them busy for five hundred years."
          <footer className="text-dark-500 mt-2">— Charles Hermite</footer>
        </blockquote>

        {/* Historical Context */}
        <h2>Genius in Poverty</h2>
        <p>
          Niels Henrik Abel (1802-1829) was born into a poor Norwegian pastor's family.
          Norway in the early 19th century was a backwater—recently separated from
          Denmark, with no mathematical tradition and few resources for education.
          Yet from this unlikely setting emerged one of history's greatest mathematicians.
        </p>
        <p>
          Abel's teacher, Bernt Michael Holmboe, recognized his extraordinary talent
          and introduced him to the mathematical literature. By age 19, Abel was
          tackling problems that had stumped the greatest minds for centuries.
        </p>

        <AbelTimeline />

        <Callout type="note" title="Bell's Portrait">
          Bell portrays Abel as a romantic tragic hero—genius cut down by poverty,
          neglect, and disease. The contrast between Abel's soaring mathematical
          achievements and his desperate material circumstances makes for one of
          the most poignant stories in <em>Men of Mathematics</em>.
        </Callout>

        {/* The Quintic Problem */}
        <h2>The Quest for Root Formulas</h2>
        <p>
          For centuries, mathematicians sought formulas for solving polynomial equations.
          The quadratic formula was known to the ancients. In the 16th century, Italian
          mathematicians discovered formulas for cubics and quartics. The natural question:
          what about degree 5?
        </p>

        <PolynomialFormulas />

        <p>
          Many mathematicians attempted to find a quintic formula. Lagrange analyzed why
          the lower-degree formulas worked, but could not extend them. Abel succeeded
          where all others had failed—by proving that no such formula can exist.
        </p>

        {/* What Solvable Means */}
        <h2>Solvable by Radicals</h2>
        <p>
          "Solvable by radicals" means expressible using only the four arithmetic
          operations (+, −, ×, ÷) and nth roots. Abel proved that for the general
          quintic, no finite combination of these operations can express the roots.
        </p>

        <RadicalsDemo />

        <MathBlock math="x^5 + ax^4 + bx^3 + cx^2 + dx + e = 0" />
        <p>
          The roots of this equation cannot be expressed as any formula involving
          a, b, c, d, e combined using only arithmetic and radicals. The roots exist
          (five of them, counting complex ones), but no finite formula can capture them.
        </p>

        {/* Roots Visualization */}
        <h2>The Roots Still Exist</h2>
        <p>
          Abel's theorem doesn't say quintics have no roots—the Fundamental Theorem of
          Algebra guarantees they do. It says we cannot <em>write</em> those roots
          using radicals.
        </p>

        <PolynomialRootsDemo />

        <Callout type="example" title="Specific vs General">
          Some specific quintics <em>are</em> solvable: <Math math="x^5 - 1 = 0" /> has
          roots that are roots of unity, expressible using radicals. Abel's theorem
          concerns the <em>general</em> quintic with arbitrary coefficients—no single
          formula works for all cases.
        </Callout>

        {/* Abelian Groups */}
        <h2>Abelian Groups</h2>
        <p>
          Abel's name lives on in "Abelian groups"—groups where the operation commutes.
          The connection to solvability is deep: Galois later showed that a polynomial
          is solvable by radicals if and only if its symmetry group is "solvable"—
          decomposable into Abelian pieces.
        </p>

        <AbelianGroupDemo />

        {/* Elliptic Functions */}
        <h2>Elliptic Functions</h2>
        <p>
          Beyond the quintic, Abel made fundamental discoveries about elliptic integrals
          and functions. These arise from computing arc lengths of ellipses and other
          curves, and lead to beautiful doubly-periodic functions.
        </p>

        <EllipticIntegralDemo />

        <p>
          Abel discovered that inverting elliptic integrals gives elliptic functions
          with remarkable properties. His "Paris memoir" on this topic—lost by Cauchy
          and never read during Abel's lifetime—contained results that took decades
          for others to rediscover.
        </p>

        {/* The Lost Memoir */}
        <h2>The Lost Memoir</h2>
        <p>
          In 1826, Abel submitted his masterwork on elliptic functions to the French
          Academy. Cauchy was assigned to review it but, overwhelmed with his own work,
          set it aside. The memoir was effectively lost.
        </p>
        <p>
          Abel died without knowing if his work had been received. Two years after his
          death, the memoir was found and finally published. The Academy awarded Abel
          the Grand Prize—posthumously.
        </p>

        <Callout type="warning" title="Bell's Indictment">
          Bell harshly criticizes Cauchy and the French mathematical establishment for
          their treatment of Abel. The image of the dying genius, his revolutionary
          work gathering dust in Cauchy's pile of papers, symbolizes for Bell the
          failure of institutions to recognize true originality.
        </Callout>

        {/* Key Theorems */}
        <h2>Abel's Key Results</h2>
        <CardGrid columns={2}>
          <Card title="Abel-Ruffini Theorem">
            <p className="text-dark-300">
              The general polynomial equation of degree ≥ 5 cannot be solved by radicals.
              (Ruffini gave an incomplete proof; Abel made it rigorous.)
            </p>
          </Card>
          <Card title="Abel's Theorem (Analysis)">
            <p className="text-dark-300">
              If a power series converges at a boundary point, the sum equals the limit
              of partial sums approaching that point.
            </p>
          </Card>
          <Card title="Addition Theorem">
            <p className="text-dark-300">
              Elliptic functions satisfy algebraic addition formulas, generalizing
              the addition formulas for trigonometric functions.
            </p>
          </Card>
          <Card title="Abel's Integral Equation">
            <MathBlock math="\int_0^x \frac{f(t)}{(x-t)^\alpha} dt = g(x)" />
            <p className="text-dark-400 text-sm">
              First systematic study of integral equations
            </p>
          </Card>
        </CardGrid>

        {/* Legacy */}
        <h2>Legacy</h2>
        <p>
          Abel's work transformed mathematics. The Abel Prize, established in 2003,
          is now considered the "Nobel Prize of Mathematics." His approach—proving
          impossibility rather than finding solutions—opened new ways of mathematical thinking.
        </p>
        <CardGrid columns={2}>
          <Card title="The Abel Prize">
            <p className="text-dark-300">
              Norway's highest honor in mathematics, awarded annually since 2003.
              Worth approximately $700,000, it commemorates Abel's genius and Norway's
              mathematical heritage.
            </p>
          </Card>
          <Card title="Mathematical Concepts Named for Abel">
            <ul className="text-dark-300 text-sm space-y-1">
              <li>• Abelian groups</li>
              <li>• Abelian varieties</li>
              <li>• Abel's summation formula</li>
              <li>• Abel transform</li>
              <li>• Abelian integrals</li>
            </ul>
          </Card>
        </CardGrid>

        {/* Bell's Assessment */}
        <h2>Bell's Assessment</h2>
        <p>
          Bell's chapter on Abel is one of the most emotionally charged in
          <em>Men of Mathematics</em>. He sees Abel as a pure spirit destroyed by
          an indifferent world, his mathematical vision far beyond his contemporaries'
          comprehension.
        </p>
        <p>
          Bell emphasizes the contrast: Abel's mathematics was timeless and perfect,
          while his life was marked by poverty, illness, and neglect. The letter
          offering Abel a professorship in Berlin arrived two days after his death—
          a detail Bell uses to symbolize the tragedy of unrecognized genius.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-dark-300">
          "He has left something so great behind him that everything else in
          comparison with it appears small and insignificant."
          <footer className="text-dark-500 mt-2">— Adrien-Marie Legendre, on Abel's death</footer>
        </blockquote>

        {/* Key Takeaways */}
        <Callout type="summary" title="Key Takeaways">
          <ul className="space-y-2">
            <li><strong>Quintic Unsolvability:</strong> Abel proved no formula using radicals can solve the general fifth-degree equation.</li>
            <li><strong>Elliptic Functions:</strong> His work on inverting elliptic integrals created an entirely new field of mathematics.</li>
            <li><strong>Abelian Groups:</strong> The concept of commutativity in group theory is named after him.</li>
            <li><strong>Tragic Life:</strong> Died at 26 from tuberculosis, in poverty, his greatest work lost by Cauchy.</li>
            <li><strong>Lasting Legacy:</strong> The Abel Prize honors his memory as one of history's greatest mathematicians.</li>
          </ul>
        </Callout>
      </div>
    </LessonLayout>
  );
}
