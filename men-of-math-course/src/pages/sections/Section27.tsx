import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, Math } from '@/components/common';

// Hermite Polynomials Visualization
function HermitePolynomialsDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [degree, setDegree] = useState(3);
  const [showGaussian, setShowGaussian] = useState(true);

  // Hermite polynomials (physicist's convention)
  const hermite = (n: number, x: number): number => {
    if (n === 0) return 1;
    if (n === 1) return 2 * x;
    return 2 * x * hermite(n - 1, x) - 2 * (n - 1) * hermite(n - 2, x);
  };

  const hermiteFormulas = [
    'H_0(x) = 1',
    'H_1(x) = 2x',
    'H_2(x) = 4x^2 - 2',
    'H_3(x) = 8x^3 - 12x',
    'H_4(x) = 16x^4 - 48x^2 + 12',
    'H_5(x) = 32x^5 - 160x^3 + 120x',
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
    const scaleX = 40;
    const scaleY = 20;

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

    // Draw Gaussian weight function if enabled
    if (showGaussian) {
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      for (let px = 0; px < width; px++) {
        const x = (px - cx) / scaleX;
        const y = Math.exp(-x * x) * 3;
        const py = cy - y * scaleY;
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw Hermite polynomial
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let px = 0; px < width; px++) {
      const x = (px - cx) / scaleX;
      const y = hermite(degree, x) / Math.pow(2, degree);
      const py = cy - y * scaleY;

      if (py > 0 && py < height) {
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      } else {
        ctx.stroke();
        ctx.beginPath();
      }
    }
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText(`H_${degree}(x)`, 10, 20);
    if (showGaussian) {
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('e^(-x²)', 10, 40);
    }
  }, [degree, showGaussian]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Hermite Polynomials</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={400}
          height={250}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Degree n = {degree}</label>
            <input
              type="range"
              min="0"
              max="5"
              value={degree}
              onChange={e => setDegree(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <label className="flex items-center gap-2 text-dark-300">
            <input
              type="checkbox"
              checked={showGaussian}
              onChange={e => setShowGaussian(e.target.checked)}
            />
            Show Gaussian weight e^(-x²)
          </label>

          <div className="p-3 bg-dark-800 rounded">
            <p className="text-sm text-dark-400 mb-1">Formula:</p>
            <p className="font-mono text-accent-400">
              <Math tex={hermiteFormulas[degree]} />
            </p>
          </div>

          <p className="text-xs text-dark-500">
            Hermite polynomials are orthogonal with respect to the Gaussian weight function.
            They appear in quantum mechanics as wave functions of the harmonic oscillator.
          </p>
        </div>
      </div>
    </div>
  );
}

// Hermitian Matrix Demo
function HermitianMatrixDemo() {
  const [real, setReal] = useState([[2, 1], [1, 3]]);
  const [imag, setImag] = useState([[0, -1], [1, 0]]);

  // Check if matrix is Hermitian: A = A†
  const isHermitian = () => {
    // For 2x2: a[0][1] should equal conjugate of a[1][0]
    const realSymmetric = real[0][1] === real[1][0];
    const imagAntisymmetric = imag[0][1] === -imag[1][0];
    const diagReal = imag[0][0] === 0 && imag[1][1] === 0;
    return realSymmetric && imagAntisymmetric && diagReal;
  };

  // Calculate eigenvalues for 2x2 Hermitian matrix (real eigenvalues guaranteed)
  const calculateEigenvalues = () => {
    const a = real[0][0];
    const d = real[1][1];
    const b_real = real[0][1];
    const b_imag = imag[0][1];
    const b_mag_sq = b_real * b_real + b_imag * b_imag;

    const trace = a + d;
    const det = a * d - b_mag_sq;
    const disc = trace * trace - 4 * det;

    if (disc >= 0) {
      const sqrtDisc = Math.sqrt(disc);
      return [(trace + sqrtDisc) / 2, (trace - sqrtDisc) / 2];
    }
    return [NaN, NaN];
  };

  const eigenvalues = calculateEigenvalues();
  const hermitian = isHermitian();

  const updateReal = (i: number, j: number, value: string) => {
    const newReal = real.map(row => [...row]);
    newReal[i][j] = parseFloat(value) || 0;
    // Enforce Hermitian symmetry
    if (i !== j) newReal[j][i] = newReal[i][j];
    setReal(newReal);
  };

  const updateImag = (i: number, j: number, value: string) => {
    const newImag = imag.map(row => [...row]);
    newImag[i][j] = parseFloat(value) || 0;
    // Enforce Hermitian antisymmetry for off-diagonal, zero for diagonal
    if (i === j) {
      newImag[i][j] = 0;
    } else {
      newImag[j][i] = -newImag[i][j];
    }
    setImag(newImag);
  };

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Hermitian Matrices</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <p className="text-sm text-dark-400 mb-2">Matrix A = (real) + i(imag):</p>
          <div className="flex gap-4">
            <div>
              <p className="text-xs text-dark-500 mb-1">Real part:</p>
              <div className="grid grid-cols-2 gap-1">
                {real.map((row, i) =>
                  row.map((val, j) => (
                    <input
                      key={`r-${i}-${j}`}
                      type="number"
                      value={val}
                      onChange={e => updateReal(i, j, e.target.value)}
                      className="w-14 h-10 text-center font-mono bg-dark-800 border border-dark-600 rounded text-dark-100 text-sm"
                    />
                  ))
                )}
              </div>
            </div>
            <div className="flex items-center text-dark-400">+ i</div>
            <div>
              <p className="text-xs text-dark-500 mb-1">Imag part:</p>
              <div className="grid grid-cols-2 gap-1">
                {imag.map((row, i) =>
                  row.map((val, j) => (
                    <input
                      key={`i-${i}-${j}`}
                      type="number"
                      value={val}
                      onChange={e => updateImag(i, j, e.target.value)}
                      disabled={i === j}
                      className={`w-14 h-10 text-center font-mono border rounded text-sm ${
                        i === j ? 'bg-dark-700 border-dark-700 text-dark-500' : 'bg-dark-800 border-dark-600 text-dark-100'
                      }`}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className={`p-3 rounded-lg ${hermitian ? 'bg-green-900/30 border border-green-600' : 'bg-red-900/30 border border-red-600'}`}>
            <p className={hermitian ? 'text-green-400' : 'text-red-400'}>
              {hermitian ? '✓ Matrix is Hermitian (A = A†)' : '✗ Matrix is not Hermitian'}
            </p>
          </div>

          <div className="p-3 bg-dark-800 rounded">
            <p className="text-sm text-dark-400 mb-1">Eigenvalues (always real for Hermitian):</p>
            <p className="font-mono text-xl text-accent-400">
              λ₁ = {eigenvalues[0].toFixed(3)}, λ₂ = {eigenvalues[1].toFixed(3)}
            </p>
          </div>

          <p className="text-xs text-dark-500">
            A Hermitian matrix equals its conjugate transpose: A = A†.
            All eigenvalues of Hermitian matrices are real — essential for quantum mechanics.
          </p>
        </div>
      </div>
    </div>
  );
}

// Transcendence of e Demo
function TranscendenceDemo() {
  const [showProofOutline, setShowProofOutline] = useState(false);

  const algebraicExamples = [
    { number: '√2', equation: 'x² - 2 = 0', algebraic: true },
    { number: '∛5', equation: 'x³ - 5 = 0', algebraic: true },
    { number: 'φ = (1+√5)/2', equation: 'x² - x - 1 = 0', algebraic: true },
    { number: 'i', equation: 'x² + 1 = 0', algebraic: true },
    { number: 'e', equation: 'None exists!', algebraic: false },
    { number: 'π', equation: 'None exists!', algebraic: false },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Transcendence of e</h4>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {algebraicExamples.map((ex, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg border ${
              ex.algebraic ? 'bg-dark-800 border-dark-600' : 'bg-accent-900/30 border-accent-600'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-mono text-lg text-dark-100">{ex.number}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                ex.algebraic ? 'bg-dark-700 text-dark-300' : 'bg-accent-600 text-white'
              }`}>
                {ex.algebraic ? 'Algebraic' : 'Transcendental'}
              </span>
            </div>
            <p className="text-sm text-dark-400 mt-1">{ex.equation}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowProofOutline(!showProofOutline)}
        className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded mb-4"
      >
        {showProofOutline ? 'Hide' : 'Show'} Proof Outline
      </button>

      {showProofOutline && (
        <div className="p-4 bg-dark-800 rounded-lg space-y-3 text-sm text-dark-300">
          <p><strong>Hermite's Proof (1873):</strong></p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Assume e is algebraic: satisfies some polynomial a₀ + a₁e + ... + aₙeⁿ = 0</li>
            <li>Construct a clever integral involving eˣ and a polynomial P(x)</li>
            <li>Show this integral equals an integer plus a "small" error term</li>
            <li>Choose P(x) so the integer is non-zero but the error is less than 1</li>
            <li>Contradiction! Hence e is transcendental.</li>
          </ol>
          <p className="text-dark-500 mt-2">
            The proof uses integration by parts and careful estimates — a template later used
            by Lindemann to prove π is transcendental.
          </p>
        </div>
      )}

      <Callout type="theorem" title="Hermite's Theorem (1873)" className="mt-4">
        The number e = 2.71828... is transcendental — it is not a root of any polynomial
        equation with integer coefficients.
      </Callout>
    </div>
  );
}

// Hermite Interpolation Demo
function HermiteInterpolationDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState([
    { x: -1, y: 0, dy: 1 },
    { x: 0, y: 1, dy: 0 },
    { x: 1, y: 0, dy: -1 },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const scaleX = 100;
    const scaleY = 80;

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

    // Simple Hermite interpolation for 3 points
    // Using cubic Hermite spline between each pair
    const hermiteSpline = (x: number) => {
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];

        if (x >= p0.x && x <= p1.x) {
          const dx = p1.x - p0.x;
          const t = (x - p0.x) / dx;
          const t2 = t * t;
          const t3 = t2 * t;

          // Hermite basis functions
          const h00 = 2 * t3 - 3 * t2 + 1;
          const h10 = t3 - 2 * t2 + t;
          const h01 = -2 * t3 + 3 * t2;
          const h11 = t3 - t2;

          return h00 * p0.y + h10 * dx * p0.dy + h01 * p1.y + h11 * dx * p1.dy;
        }
      }
      return 0;
    };

    // Draw interpolating curve
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let px = 0; px < width; px++) {
      const x = (px - cx) / scaleX;
      if (x >= points[0].x && x <= points[points.length - 1].x) {
        const y = hermiteSpline(x);
        const py = cy - y * scaleY;
        if (px === 0 || x < points[0].x + 0.01) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
    }
    ctx.stroke();

    // Draw points and tangent vectors
    points.forEach((p, i) => {
      const px = cx + p.x * scaleX;
      const py = cy - p.y * scaleY;

      // Tangent vector
      ctx.strokeStyle = '#22d3ee';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(px - 20, py + p.dy * 20);
      ctx.lineTo(px + 20, py - p.dy * 20);
      ctx.stroke();

      // Arrow head
      ctx.fillStyle = '#22d3ee';
      ctx.beginPath();
      const angle = Math.atan2(-p.dy, 1);
      ctx.moveTo(px + 20, py - p.dy * 20);
      ctx.lineTo(px + 15, py - p.dy * 20 + 5);
      ctx.lineTo(px + 15, py - p.dy * 20 - 5);
      ctx.fill();

      // Point
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px sans-serif';
      ctx.fillText(`P${i + 1}`, px + 10, py - 10);
    });
  }, [points]);

  const updatePoint = (index: number, field: 'y' | 'dy', value: number) => {
    const newPoints = [...points];
    newPoints[index] = { ...newPoints[index], [field]: value };
    setPoints(newPoints);
  };

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Hermite Interpolation</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={400}
          height={250}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1 space-y-3">
          {points.map((p, i) => (
            <div key={i} className="p-3 bg-dark-800 rounded">
              <p className="text-sm text-dark-400 mb-2">Point {i + 1} (x = {p.x})</p>
              <div className="flex gap-4">
                <div>
                  <label className="text-xs text-dark-500">y value</label>
                  <input
                    type="range"
                    min="-1"
                    max="1"
                    step="0.1"
                    value={p.y}
                    onChange={e => updatePoint(i, 'y', Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-xs text-dark-400">{p.y.toFixed(1)}</span>
                </div>
                <div>
                  <label className="text-xs text-dark-500">slope</label>
                  <input
                    type="range"
                    min="-2"
                    max="2"
                    step="0.2"
                    value={p.dy}
                    onChange={e => updatePoint(i, 'dy', Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-xs text-dark-400">{p.dy.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-dark-400 mt-4">
        Unlike Lagrange interpolation which matches only values, Hermite interpolation matches
        both values AND derivatives at each point, giving smoother curves.
      </p>
    </div>
  );
}

// Quantum Harmonic Oscillator Demo
function QuantumOscillatorDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [n, setN] = useState(2);

  // Hermite polynomial
  const hermite = (deg: number, x: number): number => {
    if (deg === 0) return 1;
    if (deg === 1) return 2 * x;
    return 2 * x * hermite(deg - 1, x) - 2 * (deg - 1) * hermite(deg - 2, x);
  };

  // Factorial
  const factorial = (m: number): number => {
    if (m <= 1) return 1;
    return m * factorial(m - 1);
  };

  // Wave function (unnormalized for visualization)
  const psi = (n_val: number, x: number) => {
    const norm = Math.pow(Math.PI, -0.25) / Math.sqrt(Math.pow(2, n_val) * factorial(n_val));
    return norm * hermite(n_val, x) * Math.exp(-x * x / 2);
  };

  // Probability density
  const prob = (n_val: number, x: number) => {
    const p = psi(n_val, x);
    return p * p;
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
    const scaleX = 50;
    const scaleY = 150;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw potential well V = x²/2
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = 0; px < width; px++) {
      const x = (px - cx) / scaleX;
      const V = x * x / 2;
      const py = cy + 100 - V * 30;
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Draw energy level
    const E = n + 0.5;
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(50, cy + 100 - E * 30);
    ctx.lineTo(width - 50, cy + 100 - E * 30);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw probability density |ψ|²
    ctx.fillStyle = 'rgba(139, 92, 246, 0.3)';
    ctx.beginPath();
    ctx.moveTo(0, cy);
    for (let px = 0; px < width; px++) {
      const x = (px - cx) / scaleX;
      const p = prob(n, x);
      const py = cy - p * scaleY;
      ctx.lineTo(px, py);
    }
    ctx.lineTo(width, cy);
    ctx.closePath();
    ctx.fill();

    // Draw wave function ψ
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = 0; px < width; px++) {
      const x = (px - cx) / scaleX;
      const y = psi(n, x);
      const py = cy - y * scaleY;
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText(`n = ${n}, E = ${E.toFixed(1)}ℏω`, 10, 20);
    ctx.fillStyle = '#8b5cf6';
    ctx.fillText('ψ(x)', 10, 40);
    ctx.fillStyle = '#fbbf24';
    ctx.fillText('Energy level', width - 90, cy + 100 - E * 30 - 10);
  }, [n]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Quantum Harmonic Oscillator</h4>

      <canvas
        ref={canvasRef}
        width={450}
        height={280}
        className="bg-dark-950 rounded-lg w-full"
      />

      <div className="mt-4">
        <label className="block text-sm text-dark-400 mb-1">Quantum number n = {n}</label>
        <input
          type="range"
          min="0"
          max="5"
          value={n}
          onChange={e => setN(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm text-dark-300">
        <p>The wave functions of the quantum harmonic oscillator are:</p>
        <p className="font-mono text-accent-400 mt-1">
          ψₙ(x) ∝ Hₙ(x) · e^(-x²/2)
        </p>
        <p className="text-dark-500 mt-2">
          Hermite polynomials arise naturally in quantum mechanics, encoding the
          probability distribution of a particle in a harmonic potential.
        </p>
      </div>
    </div>
  );
}

// Career Timeline
function CareerTimeline() {
  const events = [
    { year: '1822', event: 'Born in Dieuze, Lorraine (then France)' },
    { year: '1842', event: 'Enters École Polytechnique despite physical disability' },
    { year: '1848', event: 'First major paper on elliptic functions' },
    { year: '1856', event: 'Elected to French Academy of Sciences' },
    { year: '1869', event: 'Professor at École Polytechnique and École Normale' },
    { year: '1873', event: 'Proves transcendence of e — his most famous result' },
    { year: '1882', event: 'Lindemann uses Hermite\'s methods to prove π transcendental' },
    { year: '1892', event: 'Grand Officer of the Legion of Honor' },
    { year: '1901', event: 'Dies in Paris, revered as a master of analysis' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">A Life in Mathematics</h4>

      <div className="relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-accent-600"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative pl-24 pb-4">
            <div className="absolute left-0 w-12 text-right text-sm font-mono text-dark-400">
              {event.year}
            </div>
            <div className={`absolute left-14 w-5 h-5 rounded-full border-4 border-dark-900 ${
              event.year === '1873' ? 'bg-green-500' : 'bg-accent-600'
            }`}></div>
            <p className="text-dark-200">{event.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Section27() {
  return (
    <LessonLayout
      title="Charles Hermite"
      sectionNumber={27}
      prevSection={26}
      nextSection={28}
    >
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-accent-900/50 text-accent-300 rounded-full text-sm mb-4">
          Chapter 27: The Poet of Number
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4">
          Charles Hermite
        </h1>
        <p className="text-xl text-dark-300">
          From transcendence to quantum mechanics — a master of elegant analysis
        </p>
        <p className="text-dark-400 mt-2">1822 – 1901</p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <Card variant="primary">
          <p className="text-lg text-dark-200 leading-relaxed">
            Charles Hermite possessed what colleagues called an "almost feminine delicacy" in
            mathematics — an aesthetic sense for beauty and elegance that guided his work. Born
            with a physical disability that limited his mobility, he found in mathematics a realm
            of perfect beauty. His proof that e is transcendental settled an ancient question and
            opened the door to proving π transcendental. His polynomials and matrices became
            indispensable tools in quantum mechanics.
          </p>
        </Card>
      </section>

      {/* Famous Quote */}
      <section className="mb-12">
        <blockquote className="text-2xl text-dark-200 italic text-center border-l-4 border-accent-500 pl-6 py-4">
          "There exists, if I am not mistaken, an entire world which is the totality of
          mathematical truths, to which we have access only through our minds, just as a world
          of physical reality exists, the one like the other independent of ourselves, both of
          divine creation."
          <footer className="text-base text-dark-500 mt-4 not-italic">— Charles Hermite</footer>
        </blockquote>
      </section>

      {/* Career */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">A Mathematical Life</h2>

        <CareerTimeline />

        <Callout type="note" className="mt-6">
          Hermite was born with a defect in his right leg that required him to use a cane
          throughout his life. He failed his entrance exams to École Polytechnique twice before
          being admitted, but went on to become one of France's greatest mathematicians.
        </Callout>
      </section>

      {/* Transcendence of e */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Transcendence of e</h2>

        <p className="text-dark-300 mb-6">
          In 1873, Hermite proved that e = 2.71828... is transcendental — it cannot be a root
          of any polynomial equation with integer coefficients. This was the first proof that
          a "naturally occurring" number is transcendental.
        </p>

        <TranscendenceDemo />

        <div className="mt-6">
          <MathBlock
            tex="e = \sum_{n=0}^{\infty} \frac{1}{n!} = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \cdots"
            description="The definition of e as an infinite series"
          />
        </div>

        <Callout type="important" className="mt-6">
          Hermite's methods inspired Lindemann, who used similar techniques in 1882 to prove
          that π is transcendental — finally settling the ancient problem of squaring the circle
          (it's impossible with compass and straightedge).
        </Callout>
      </section>

      {/* Hermite Polynomials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Hermite Polynomials</h2>

        <p className="text-dark-300 mb-6">
          The Hermite polynomials form an orthogonal basis for a certain function space. They
          arise naturally when solving the quantum harmonic oscillator — one of the most
          important exactly solvable problems in physics.
        </p>

        <HermitePolynomialsDemo />

        <div className="mt-6">
          <MathBlock
            tex="H_n(x) = (-1)^n e^{x^2} \frac{d^n}{dx^n} e^{-x^2}"
            description="Rodrigues' formula for Hermite polynomials"
          />
        </div>

        <CardGrid columns={2} className="mt-6">
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Orthogonality</h4>
            <p className="text-sm text-dark-400">
              <Math tex="\int_{-\infty}^{\infty} H_m(x) H_n(x) e^{-x^2} dx = 0" /> for m ≠ n
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Recurrence</h4>
            <p className="text-sm text-dark-400">
              <Math tex="H_{n+1}(x) = 2xH_n(x) - 2nH_{n-1}(x)" />
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Quantum Oscillator */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Hermite Polynomials in Quantum Mechanics</h2>

        <p className="text-dark-300 mb-6">
          The quantum harmonic oscillator is a cornerstone of physics. Its wave functions involve
          Hermite polynomials multiplied by Gaussians — a beautiful connection between 19th-century
          mathematics and 20th-century physics.
        </p>

        <QuantumOscillatorDemo />
      </section>

      {/* Hermitian Matrices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Hermitian Matrices</h2>

        <p className="text-dark-300 mb-6">
          A Hermitian matrix equals its own conjugate transpose: A = A†. These matrices have
          a remarkable property: all their eigenvalues are real. In quantum mechanics, observables
          are represented by Hermitian operators, ensuring that measurements yield real values.
        </p>

        <HermitianMatrixDemo />

        <div className="mt-6">
          <MathBlock
            tex="A = A^\dagger \quad \text{where} \quad (A^\dagger)_{ij} = \overline{A_{ji}}"
            description="Definition of a Hermitian matrix"
          />
        </div>

        <Callout type="theorem" title="Spectral Theorem" className="mt-6">
          Every Hermitian matrix can be diagonalized by a unitary matrix, and all its eigenvalues
          are real. This is fundamental to quantum mechanics, where Hermitian operators represent
          physical observables.
        </Callout>
      </section>

      {/* Hermite Interpolation */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Hermite Interpolation</h2>

        <p className="text-dark-300 mb-6">
          While Lagrange interpolation matches function values at given points, Hermite
          interpolation matches both values and derivatives. This gives smoother curves and is
          widely used in computer graphics and numerical analysis.
        </p>

        <HermiteInterpolationDemo />
      </section>

      {/* Elliptic Functions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Elliptic Functions</h2>

        <p className="text-dark-300 mb-6">
          Hermite made fundamental contributions to the theory of elliptic functions, building
          on the work of Abel and Jacobi. He showed deep connections between elliptic functions
          and number theory.
        </p>

        <CardGrid columns={2}>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Modular Equations</h4>
            <p className="text-sm text-dark-400">
              Hermite solved the general quintic equation using elliptic functions and modular
              equations — a stunning application of complex analysis to algebra.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Theta Functions</h4>
            <p className="text-sm text-dark-400">
              Extended Jacobi's work on theta functions, connecting them to number theory and
              the theory of quadratic forms.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <Card variant="secondary">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Bell's Assessment</h3>

          <blockquote className="text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4 mb-4">
            "Hermite had a rare gift for seeing the inner connections between different branches
            of mathematics... His work on the transcendence of e opened a new chapter in the
            theory of numbers."
          </blockquote>

          <p className="text-dark-400">
            Bell emphasizes Hermite's aesthetic sensibility — his ability to find beauty and
            unity in mathematics. Unlike the more computational Cayley, Hermite sought elegant
            conceptual insights. His influence extended through his many students, including
            Poincaré.
          </p>
        </Card>
      </section>

      {/* Legacy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">A Lasting Legacy</h2>

        <p className="text-dark-300 mb-6">
          Hermite's name appears throughout mathematics and physics, attached to concepts he
          either invented or developed:
        </p>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Hermite Polynomials</h4>
            <p className="text-sm text-dark-400">
              Orthogonal polynomials used in probability (Hermite expansion), approximation
              theory, and quantum mechanics
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Hermitian Matrices</h4>
            <p className="text-sm text-dark-400">
              Matrices equal to their conjugate transpose — the mathematical foundation of
              quantum observables
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Hermite Normal Form</h4>
            <p className="text-sm text-dark-400">
              A canonical form for integer matrices, used in lattice theory and cryptography
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Hermite Interpolation</h4>
            <p className="text-sm text-dark-400">
              Interpolation matching both values and derivatives — essential for smooth curve
              fitting
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
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Transcendence of e (1873):</strong> Hermite proved e is not a root of
                any polynomial with integer coefficients — inspiring Lindemann's proof for π
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Hermite polynomials</strong> <Math tex="H_n(x)" /> are orthogonal with
                weight <Math tex="e^{-x^2}" /> and describe quantum harmonic oscillator wave functions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Hermitian matrices</strong> satisfy <Math tex="A = A^\dagger" /> and have
                real eigenvalues — essential for quantum mechanics
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Hermite interpolation</strong> matches both function values and derivatives,
                producing smoother curves than Lagrange interpolation
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Hermite believed mathematics exists independently of humans — a Platonic view
                that shaped his search for elegant, universal truths
              </span>
            </li>
          </ul>
        </Card>
      </section>
    </LessonLayout>
  );
}
