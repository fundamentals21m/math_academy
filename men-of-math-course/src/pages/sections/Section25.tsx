import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, InlineMath } from '@/components/common';

// Epsilon-Delta Definition Demo
function EpsilonDeltaDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [epsilon, setEpsilon] = useState(0.5);
  const [delta, setDelta] = useState(0.3);
  const [x0] = useState(2);
  const [funcType, setFuncType] = useState<'continuous' | 'discontinuous'>('continuous');

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
    const scaleY = 30;

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

    // Function
    const f = (x: number) => {
      if (funcType === 'continuous') {
        return x * x / 2;
      } else {
        // Discontinuous at x0
        return x < x0 ? x : x + 1;
      }
    };

    const L = f(x0); // Limit value
    const x0Screen = cx + x0 * scaleX;
    const LScreen = cy - L * scaleY;

    // Draw epsilon band (horizontal)
    ctx.fillStyle = 'rgba(34, 197, 94, 0.2)';
    ctx.fillRect(0, LScreen - epsilon * scaleY, width, 2 * epsilon * scaleY);
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, LScreen - epsilon * scaleY);
    ctx.lineTo(width, LScreen - epsilon * scaleY);
    ctx.moveTo(0, LScreen + epsilon * scaleY);
    ctx.lineTo(width, LScreen + epsilon * scaleY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw delta band (vertical)
    ctx.fillStyle = 'rgba(139, 92, 246, 0.2)';
    ctx.fillRect(x0Screen - delta * scaleX, 0, 2 * delta * scaleX, height);
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(x0Screen - delta * scaleX, 0);
    ctx.lineTo(x0Screen - delta * scaleX, height);
    ctx.moveTo(x0Screen + delta * scaleX, 0);
    ctx.lineTo(x0Screen + delta * scaleX, height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw function
    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = 0; px < width; px++) {
      const x = (px - cx) / scaleX;
      const y = f(x);
      const py = cy - y * scaleY;

      if (funcType === 'discontinuous' && Math.abs(x - x0) < 0.05) {
        ctx.stroke();
        ctx.beginPath();
        continue;
      }

      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Draw point at x0
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(x0Screen, LScreen, 6, 0, Math.PI * 2);
    ctx.fill();

    // Check if delta works for this epsilon
    let works = true;
    for (let dx = -delta; dx <= delta; dx += 0.01) {
      if (Math.abs(dx) < 0.001) continue;
      const fx = f(x0 + dx);
      if (Math.abs(fx - L) > epsilon) {
        works = false;
        break;
      }
    }

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText(`x₀ = ${x0}`, x0Screen + 5, height - 10);
    ctx.fillText(`L = ${L.toFixed(2)}`, 10, LScreen - 5);
    ctx.fillText('ε', 10, LScreen - epsilon * scaleY + 15);
    ctx.fillText('δ', x0Screen + delta * scaleX - 15, height - 25);

    // Status
    ctx.fillStyle = works ? '#22c55e' : '#ef4444';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(works ? '✓ δ works for this ε' : '✗ δ too large', width - 130, 25);
  }, [epsilon, delta, x0, funcType]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The ε-δ Definition of Continuity</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1 space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setFuncType('continuous')}
              className={`px-3 py-1 rounded ${funcType === 'continuous' ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              Continuous
            </button>
            <button
              onClick={() => setFuncType('discontinuous')}
              className={`px-3 py-1 rounded ${funcType === 'discontinuous' ? 'bg-red-600 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              Discontinuous
            </button>
          </div>

          <div>
            <label className="block text-sm text-dark-400 mb-1">
              ε (epsilon): {epsilon.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.1"
              max="1.5"
              step="0.05"
              value={epsilon}
              onChange={e => setEpsilon(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-dark-400 mb-1">
              δ (delta): {delta.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.05"
              max="1"
              step="0.05"
              value={delta}
              onChange={e => setDelta(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="p-3 bg-dark-800 rounded text-sm">
            <p className="text-dark-300">
              <strong>Definition:</strong> f is continuous at x₀ if for every ε {">"} 0,
              there exists δ {">"} 0 such that |x - x₀| {"<"} δ ⟹ |f(x) - f(x₀)| {"<"} ε
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Weierstrass Function Demo (continuous but nowhere differentiable)
function WeierstrassFunctionDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [terms, setTerms] = useState(5);
  const [a, setA] = useState(0.5);
  const [b, setB] = useState(7);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cy = height / 2;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw axis
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(width, cy);
    ctx.stroke();

    // Weierstrass function: sum of a^n * cos(b^n * pi * x)
    const weierstrass = (x: number, n: number) => {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += Math.pow(a, k) * Math.cos(Math.pow(b, k) * Math.PI * x);
      }
      return sum;
    };

    // Draw function
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    const scale = 80 * zoom;
    for (let px = 0; px < width; px++) {
      const x = (px - width / 2) / (width / 4) / zoom;
      const y = weierstrass(x, terms);
      const py = cy - y * scale / (1 + terms * 0.3);

      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText(`Terms: ${terms}`, 10, 20);
    ctx.fillText(`a = ${a}, b = ${b}`, 10, 40);
  }, [terms, a, b, zoom]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Weierstrass Function: Continuous but Nowhere Differentiable</h4>

      <canvas
        ref={canvasRef}
        width={500}
        height={250}
        className="bg-dark-950 rounded-lg w-full"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div>
          <label className="block text-sm text-dark-400 mb-1">Terms: {terms}</label>
          <input
            type="range"
            min="1"
            max="15"
            value={terms}
            onChange={e => setTerms(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">a: {a}</label>
          <input
            type="range"
            min="0.1"
            max="0.9"
            step="0.1"
            value={a}
            onChange={e => setA(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">b: {b}</label>
          <input
            type="range"
            min="3"
            max="15"
            step="2"
            value={b}
            onChange={e => setB(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">Zoom: {zoom}x</label>
          <input
            type="range"
            min="1"
            max="10"
            value={zoom}
            onChange={e => setZoom(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded">
        <MathBlock
          tex="W(x) = \sum_{n=0}^{\infty} a^n \cos(b^n \pi x)"
          description="For 0 < a < 1 and ab > 1 + 3π/2, this function is continuous everywhere but differentiable nowhere"
        />
      </div>

      <Callout type="warning" className="mt-4">
        This function shocked the mathematical world in 1872. Before Weierstrass, mathematicians
        believed that any continuous function must be differentiable "almost everywhere."
        Weierstrass showed this intuition was completely wrong.
      </Callout>
    </div>
  );
}

// Weierstrass Approximation Theorem Demo
function ApproximationDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [degree, setDegree] = useState(5);
  const [funcType, setFuncType] = useState<'abs' | 'step' | 'sin'>('abs');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const scaleX = width / 2.5;
    const scaleY = height / 3;

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

    // Target function on [-1, 1]
    const f = (x: number) => {
      if (funcType === 'abs') return Math.abs(x);
      if (funcType === 'step') return x >= 0 ? 0.5 : -0.5;
      return Math.sin(Math.PI * x);
    };

    // Draw target function
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let px = cx - scaleX; px <= cx + scaleX; px++) {
      const x = (px - cx) / scaleX;
      const y = f(x);
      const py = cy - y * scaleY;
      if (px === cx - scaleX) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Bernstein polynomial approximation
    const bernstein = (n: number, k: number, x: number) => {
      const binom = factorial(n) / (factorial(k) * factorial(n - k));
      return binom * Math.pow((x + 1) / 2, k) * Math.pow((1 - x) / 2 + 0.5, n - k);
    };

    const factorial = (n: number): number => {
      if (n <= 1) return 1;
      let result = 1;
      for (let i = 2; i <= n; i++) result *= i;
      return result;
    };

    // Compute Bernstein polynomial of degree n
    const B = (x: number, n: number) => {
      let sum = 0;
      for (let k = 0; k <= n; k++) {
        const xk = -1 + (2 * k) / n;
        sum += f(xk) * bernstein(n, k, x);
      }
      return sum;
    };

    // Draw approximation
    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = cx - scaleX; px <= cx + scaleX; px++) {
      const x = (px - cx) / scaleX;
      const y = B(x, degree);
      const py = cy - y * scaleY;
      if (px === cx - scaleX) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Legend
    ctx.fillStyle = '#22d3ee';
    ctx.fillRect(10, 10, 20, 3);
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText('Target function', 35, 15);

    ctx.fillStyle = '#f472b6';
    ctx.fillRect(10, 25, 20, 3);
    ctx.fillStyle = '#9ca3af';
    ctx.fillText(`Degree ${degree} polynomial`, 35, 30);
  }, [degree, funcType]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Weierstrass Approximation Theorem</h4>

      <canvas
        ref={canvasRef}
        width={450}
        height={250}
        className="bg-dark-950 rounded-lg w-full"
      />

      <div className="flex flex-wrap gap-4 mt-4">
        <div className="flex gap-2">
          <button
            onClick={() => setFuncType('abs')}
            className={`px-3 py-1 rounded ${funcType === 'abs' ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'}`}
          >
            |x|
          </button>
          <button
            onClick={() => setFuncType('sin')}
            className={`px-3 py-1 rounded ${funcType === 'sin' ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'}`}
          >
            sin(πx)
          </button>
          <button
            onClick={() => setFuncType('step')}
            className={`px-3 py-1 rounded ${funcType === 'step' ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'}`}
          >
            Step
          </button>
        </div>

        <div className="flex-1">
          <label className="block text-sm text-dark-400 mb-1">Polynomial degree: {degree}</label>
          <input
            type="range"
            min="1"
            max="30"
            value={degree}
            onChange={e => setDegree(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm text-dark-300">
        <p><strong>Theorem:</strong> Every continuous function on a closed interval [a,b] can be
        uniformly approximated by polynomials to any desired accuracy.</p>
        <p className="text-dark-500 mt-2">
          Note: The step function is discontinuous, so the approximation converges pointwise
          but not uniformly.
        </p>
      </div>
    </div>
  );
}

// Uniform vs Pointwise Convergence Demo
function ConvergenceDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [n, setN] = useState(3);
  const [showLimit, setShowLimit] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const scaleX = width - 40;
    const scaleY = height - 60;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(20, height - 30);
    ctx.lineTo(width - 20, height - 30);
    ctx.moveTo(20, height - 30);
    ctx.lineTo(20, 20);
    ctx.stroke();

    // f_n(x) = x^n on [0,1] - converges pointwise to 0 on [0,1) and 1 at x=1
    // Not uniform convergence!

    // Draw limit function (if showing)
    if (showLimit) {
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(20, height - 30 - scaleY);  // y = 0 from 0 to 1
      ctx.lineTo(20 + scaleX * 0.98, height - 30 - scaleY);
      ctx.stroke();
      // Jump at x = 1
      ctx.beginPath();
      ctx.arc(20 + scaleX, height - 30, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw f_n(x) = x^n
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = 0; px <= scaleX; px++) {
      const x = px / scaleX;
      const y = Math.pow(x, n);
      const screenX = 20 + px;
      const screenY = height - 30 - y * scaleY;
      if (px === 0) ctx.moveTo(screenX, screenY);
      else ctx.lineTo(screenX, screenY);
    }
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText('0', 15, height - 15);
    ctx.fillText('1', width - 25, height - 15);
    ctx.fillText('1', 5, height - 30 - scaleY + 5);
    ctx.fillText(`f_${n}(x) = x^${n}`, 10, 20);
  }, [n, showLimit]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Pointwise vs Uniform Convergence</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={350}
          height={250}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">n = {n}</label>
            <input
              type="range"
              min="1"
              max="20"
              value={n}
              onChange={e => setN(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <label className="flex items-center gap-2 text-dark-300">
            <input
              type="checkbox"
              checked={showLimit}
              onChange={e => setShowLimit(e.target.checked)}
            />
            Show limit function
          </label>

          <div className="p-3 bg-dark-800 rounded text-sm">
            <p className="text-dark-300 mb-2">
              <Math tex="f_n(x) = x^n" /> on [0,1]
            </p>
            <p className="text-dark-400">
              Converges <strong>pointwise</strong> to f(x) = 0 for x ∈ [0,1) and f(1) = 1.
            </p>
            <p className="text-red-400 mt-2">
              But NOT uniformly! The convergence slows near x = 1.
            </p>
          </div>

          <div className="p-3 bg-dark-800 rounded text-sm text-dark-400">
            <p><strong>Weierstrass M-test:</strong> If |f_n(x)| ≤ M_n and ΣM_n converges,
            then Σf_n converges uniformly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Bolzano-Weierstrass Theorem Visualization
function BolzanoWeierstrassDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<number[]>([]);
  const [showSubsequence, setShowSubsequence] = useState(false);

  // Generate bounded sequence
  useEffect(() => {
    const newPoints = Array(50).fill(0).map(() => Math.random() * 2 - 1);
    setPoints(newPoints);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw interval [-1, 1]
    const y = height / 2;
    const margin = 40;
    const lineWidth = width - 2 * margin;

    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(margin, y);
    ctx.lineTo(width - margin, y);
    ctx.stroke();

    // Draw endpoints
    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('-1', margin, y + 25);
    ctx.fillText('1', width - margin, y + 25);
    ctx.fillText('0', width / 2, y + 25);

    // Find convergent subsequence (sort and take every other)
    const sorted = [...points].sort((a, b) => a - b);
    const subsequence = sorted.filter((_, i) => i % 3 === 0);
    const limit = subsequence.length > 0 ? subsequence[Math.floor(subsequence.length / 2)] : 0;

    // Draw points
    points.forEach((p, i) => {
      const x = margin + ((p + 1) / 2) * lineWidth;
      const isInSubsequence = showSubsequence && subsequence.includes(p);

      ctx.fillStyle = isInSubsequence ? '#22c55e' : '#8b5cf6';
      ctx.globalAlpha = isInSubsequence ? 1 : 0.5;
      ctx.beginPath();
      ctx.arc(x, y - 5 - (i % 10) * 8, isInSubsequence ? 5 : 3, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;

    // Draw limit point
    if (showSubsequence) {
      const limitX = margin + ((limit + 1) / 2) * lineWidth;
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(limitX, y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fbbf24';
      ctx.fillText(`Limit point ≈ ${limit.toFixed(2)}`, limitX, y + 45);
    }
  }, [points, showSubsequence]);

  const regenerate = () => {
    const newPoints = Array(50).fill(0).map(() => Math.random() * 2 - 1);
    setPoints(newPoints);
  };

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Bolzano-Weierstrass Theorem</h4>

      <canvas
        ref={canvasRef}
        width={500}
        height={200}
        className="bg-dark-950 rounded-lg w-full"
      />

      <div className="flex gap-4 mt-4">
        <button
          onClick={regenerate}
          className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded"
        >
          New Sequence
        </button>
        <button
          onClick={() => setShowSubsequence(!showSubsequence)}
          className={`px-4 py-2 rounded ${showSubsequence ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'}`}
        >
          {showSubsequence ? 'Hide' : 'Show'} Convergent Subsequence
        </button>
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm text-dark-300">
        <p><strong>Theorem:</strong> Every bounded sequence in ℝⁿ has a convergent subsequence.</p>
        <p className="text-dark-500 mt-2">
          Green points form a convergent subsequence approaching the yellow limit point.
        </p>
      </div>
    </div>
  );
}

// Career Timeline
function CareerTimeline() {
  const events = [
    { year: '1815', event: 'Born in Ostenfelde, Westphalia' },
    { year: '1834', event: 'Enters University of Bonn to study finance (father\'s wish)' },
    { year: '1838', event: 'Secretly studies mathematics; leaves university without degree' },
    { year: '1841', event: 'Passes teaching examination; becomes gymnasium teacher' },
    { year: '1841-54', event: '14 years as a secondary school teacher in obscurity' },
    { year: '1854', event: 'Paper on Abelian functions brings sudden fame (age 39)' },
    { year: '1856', event: 'Professor at University of Berlin (age 41)' },
    { year: '1859', event: 'Begins teaching Sofia Kovalevskaya privately' },
    { year: '1872', event: 'Publishes the nowhere-differentiable continuous function' },
    { year: '1885', event: 'Proves the approximation theorem' },
    { year: '1897', event: 'Dies in Berlin, revered as the "father of modern analysis"' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Late Bloomer</h4>

      <div className="relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-accent-600"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative pl-24 pb-4">
            <div className="absolute left-0 w-12 text-right text-sm font-mono text-dark-400">
              {event.year}
            </div>
            <div className={`absolute left-14 w-5 h-5 rounded-full border-4 border-dark-900 ${
              event.year === '1854' || event.year === '1856' ? 'bg-green-500' : 'bg-accent-600'
            }`}></div>
            <p className="text-dark-200">{event.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Rigorization of Analysis
function RigorizationDemo() {
  const concepts = [
    {
      before: 'A limit is when x "approaches" a value',
      after: '∀ε>0, ∃δ>0: |x-a|<δ ⟹ |f(x)-L|<ε',
      topic: 'Limits'
    },
    {
      before: 'A continuous function has no "jumps"',
      after: '∀ε>0, ∃δ>0: |x-x₀|<δ ⟹ |f(x)-f(x₀)|<ε',
      topic: 'Continuity'
    },
    {
      before: 'A derivative is the "slope" of a curve',
      after: 'lim_{h→0} [f(x+h)-f(x)]/h exists',
      topic: 'Derivative'
    },
    {
      before: 'A series converges when terms "get small"',
      after: '∀ε>0, ∃N: m,n>N ⟹ |S_n - S_m|<ε',
      topic: 'Convergence'
    }
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Arithmetization of Analysis</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {concepts.map((c, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`px-3 py-1 rounded ${selected === i ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'}`}
          >
            {c.topic}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-red-900/20 border border-red-600/50 rounded-lg">
          <p className="text-sm text-red-400 mb-2">Before Weierstrass (intuitive):</p>
          <p className="text-dark-200 italic">"{concepts[selected].before}"</p>
        </div>
        <div className="p-4 bg-green-900/20 border border-green-600/50 rounded-lg">
          <p className="text-sm text-green-400 mb-2">After Weierstrass (rigorous):</p>
          <p className="font-mono text-dark-200">{concepts[selected].after}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-dark-400">
        Weierstrass replaced vague geometric intuition with precise arithmetic conditions.
        This "arithmetization of analysis" is the foundation of modern mathematics.
      </p>
    </div>
  );
}

export default function Section25() {
  return (
    <LessonLayout
      title="Karl Weierstrass"
      sectionNumber={25}
      prevSection={24}
      nextSection={26}
    >
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-accent-900/50 text-accent-300 rounded-full text-sm mb-4">
          Chapter 25: The Father of Modern Analysis
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4">
          Karl Weierstrass
        </h1>
        <p className="text-xl text-dark-300">
          From obscure schoolteacher to the architect of mathematical rigor
        </p>
        <p className="text-dark-400 mt-2">1815 – 1897</p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <Card variant="primary">
          <p className="text-lg text-dark-200 leading-relaxed">
            Karl Weierstrass spent 14 years as an obscure secondary school teacher, doing
            mathematics in isolation. Then, at age 39, a single paper on Abelian functions
            catapulted him to fame. He went on to transform analysis, replacing intuitive
            arguments with rigorous epsilon-delta proofs. His pathological examples—like
            the continuous nowhere-differentiable function—shattered comfortable assumptions
            and forced mathematicians to think more carefully than ever before.
          </p>
        </Card>
      </section>

      {/* Career Arc */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Late Bloomer</h2>

        <CareerTimeline />

        <Callout type="note" className="mt-6">
          Weierstrass's father wanted him to study finance and become a civil servant. Karl
          enrolled at Bonn but spent his time fencing, drinking beer, and secretly studying
          mathematics. He left without a degree, became a teacher, and was unknown until
          almost 40.
        </Callout>
      </section>

      {/* Epsilon-Delta */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The ε-δ Revolution</h2>

        <p className="text-dark-300 mb-6">
          Before Weierstrass, calculus relied on vague notions of "infinitely small" quantities
          and geometric intuition. Weierstrass replaced this with precise arithmetic: the
          famous epsilon-delta definitions that every analysis student learns today.
        </p>

        <EpsilonDeltaDemo />

        <div className="mt-6">
          <MathBlock
            tex="\lim_{x \to a} f(x) = L \iff \forall \varepsilon > 0, \exists \delta > 0 : 0 < |x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon"
            description="The rigorous definition of a limit"
          />
        </div>
      </section>

      {/* Rigorization */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Arithmetization of Analysis</h2>

        <p className="text-dark-300 mb-6">
          Weierstrass's program was to base all of analysis on the arithmetic of real numbers,
          eliminating appeals to geometric intuition. This "arithmetization" made mathematics
          more rigorous but also revealed surprising pathologies.
        </p>

        <RigorizationDemo />
      </section>

      {/* The Monster Function */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Monster: Continuous but Nowhere Differentiable</h2>

        <p className="text-dark-300 mb-6">
          In 1872, Weierstrass presented a function that was continuous everywhere but
          differentiable nowhere—a "monster" that violated all geometric intuition. The curve
          is so jagged that it has no tangent line at any point, yet it has no breaks or jumps.
        </p>

        <WeierstrassFunctionDemo />

        <Callout type="important" className="mt-6">
          Hermite called such functions "a lamentable plague." Poincaré initially rejected them.
          But Weierstrass's monsters forced mathematics to reckon with the gap between intuition
          and proof—and ultimately made the foundations of analysis much stronger.
        </Callout>
      </section>

      {/* Approximation Theorem */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Approximation Theorem</h2>

        <p className="text-dark-300 mb-6">
          One of Weierstrass's most beautiful results: any continuous function on a closed
          interval can be uniformly approximated by polynomials. This theorem has profound
          implications for numerical analysis and functional analysis.
        </p>

        <ApproximationDemo />

        <Callout type="theorem" title="Weierstrass Approximation Theorem (1885)" className="mt-6">
          If f is continuous on [a,b], then for every ε {">"} 0, there exists a polynomial P
          such that |f(x) - P(x)| {"<"} ε for all x ∈ [a,b].
        </Callout>
      </section>

      {/* Convergence */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Uniform Convergence</h2>

        <p className="text-dark-300 mb-6">
          Weierstrass clarified the crucial distinction between pointwise and uniform convergence.
          Many "proofs" in earlier analysis failed because they confused these concepts. The
          Weierstrass M-test provides a practical criterion for uniform convergence.
        </p>

        <ConvergenceDemo />

        <div className="mt-6">
          <MathBlock
            tex="\text{If } |f_n(x)| \leq M_n \text{ and } \sum M_n < \infty, \text{ then } \sum f_n \text{ converges uniformly}"
            description="The Weierstrass M-test for uniform convergence"
          />
        </div>
      </section>

      {/* Bolzano-Weierstrass */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Bolzano-Weierstrass Theorem</h2>

        <p className="text-dark-300 mb-6">
          This fundamental theorem of analysis guarantees that bounded sequences in finite
          dimensions always have convergent subsequences. It's essential for proving the
          existence of maxima and minima.
        </p>

        <BolzanoWeierstrassDemo />
      </section>

      {/* Sofia Kovalevskaya */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Teacher of Kovalevskaya</h2>

        <p className="text-dark-300 mb-6">
          Weierstrass's most famous student was Sofia Kovalevskaya, who could not officially
          enroll at Berlin (women were barred). Weierstrass taught her privately for years,
          recognizing her extraordinary talent. Their correspondence lasted until her death.
        </p>

        <CardGrid columns={2}>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Private Lessons</h4>
            <p className="text-sm text-dark-400">
              From 1870-1874, Weierstrass gave Kovalevskaya weekly private lessons, treating
              her as a serious colleague when the academic world would not.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Lifelong Friendship</h4>
            <p className="text-sm text-dark-400">
              Their correspondence reveals a deep intellectual and personal bond. Weierstrass
              was devastated by her early death in 1891.
            </p>
          </Card>
        </CardGrid>

        <blockquote className="mt-6 text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4">
          "Her works testify to the great talent and the uncommon energy with which she devoted
          herself to science... The scientific world has lost in her one of its most distinguished
          and promising members."
          <footer className="text-sm text-dark-500 mt-2">— Karl Weierstrass on Kovalevskaya</footer>
        </blockquote>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <Card variant="secondary">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Bell's Assessment</h3>

          <blockquote className="text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4 mb-4">
            "Weierstrass is the father of modern analysis. Before him, the calculus rested on
            shifting sand; after him, on bedrock... His passion for rigor, almost pedantic to
            some, was exactly what mathematics needed."
          </blockquote>

          <p className="text-dark-400">
            Bell emphasizes the transformation Weierstrass brought: from geometric intuition
            to arithmetic precision. While some found his rigor excessive, it ultimately made
            mathematics more powerful by eliminating hidden assumptions and revealing unexpected
            phenomena.
          </p>
        </Card>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Major Contributions</h2>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Epsilon-Delta Definitions</h4>
            <p className="text-sm text-dark-400">
              Rigorous definitions of limits, continuity, and convergence that eliminated
              vague appeals to "infinitesimals"
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Pathological Functions</h4>
            <p className="text-sm text-dark-400">
              The continuous nowhere-differentiable function and other "monsters" that
              revealed the limits of intuition
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Approximation Theorem</h4>
            <p className="text-sm text-dark-400">
              Any continuous function can be uniformly approximated by polynomials—fundamental
              for numerical and functional analysis
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Uniform Convergence</h4>
            <p className="text-sm text-dark-400">
              Clarified the distinction between pointwise and uniform convergence, and the
              M-test for checking uniform convergence
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Elliptic Functions</h4>
            <p className="text-sm text-dark-400">
              Developed the theory systematically using power series, building on work of
              Abel and Jacobi
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Real Number Construction</h4>
            <p className="text-sm text-dark-400">
              Contributed to the rigorous construction of real numbers, completing the
              arithmetization of analysis
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
                The ε-δ definition makes limits and continuity precise: for every ε {">"} 0,
                there exists δ {">"} 0 such that closeness in x implies closeness in f(x)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                The Weierstrass function <Math tex="W(x) = \sum a^n \cos(b^n \pi x)" /> is
                continuous everywhere but differentiable nowhere
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Approximation Theorem:</strong> Every continuous function on [a,b]
                can be uniformly approximated by polynomials
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Bolzano-Weierstrass:</strong> Every bounded sequence has a convergent
                subsequence
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Weierstrass was unknown until age 39, then transformed analysis through
                his insistence on rigor over intuition
              </span>
            </li>
          </ul>
        </Card>
      </section>
    </LessonLayout>
  );
}
