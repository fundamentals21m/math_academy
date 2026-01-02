import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, InlineMath } from '@/components/common';

// Riemann Zeta Function Visualization
function ZetaFunctionDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [realPart, setRealPart] = useState(2);
  const [showCriticalLine, setShowCriticalLine] = useState(true);

  // Approximate zeta function for real s > 1
  const zeta = (s: number, terms: number = 100): number => {
    if (s <= 1) return NaN;
    let sum = 0;
    for (let n = 1; n <= terms; n++) {
      sum += 1 / Math.pow(n, s);
    }
    return sum;
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
    const originX = 80;
    const originY = height - 40;
    const scaleX = 60;
    const scaleY = 40;

    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(originX, 10);
    ctx.lineTo(originX, originY);
    ctx.lineTo(width - 10, originY);
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText('ζ(s)', 10, 20);
    ctx.fillText('s', width - 20, originY + 15);
    ctx.fillText('1', originX + scaleX - 5, originY + 15);
    ctx.fillText('2', originX + 2 * scaleX - 5, originY + 15);
    ctx.fillText('3', originX + 3 * scaleX - 5, originY + 15);

    // Draw ζ(s) for real s > 1
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let px = originX + scaleX * 1.01; px < width - 10; px++) {
      const s = 1 + (px - originX) / scaleX;
      const z = zeta(s);
      const py = originY - z * scaleY;

      if (px === originX + scaleX * 1.01) ctx.moveTo(px, Math.max(10, py));
      else ctx.lineTo(px, Math.max(10, py));
    }
    ctx.stroke();

    // Mark pole at s = 1
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(originX + scaleX, 10);
    ctx.lineTo(originX + scaleX, originY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#ef4444';
    ctx.fillText('pole', originX + scaleX + 5, 25);

    // Mark selected point
    if (realPart > 1) {
      const px = originX + realPart * scaleX;
      const z = zeta(realPart);
      const py = originY - z * scaleY;

      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();
    }

    // Critical line indicator
    if (showCriticalLine) {
      ctx.fillStyle = '#22d3ee';
      ctx.font = '11px sans-serif';
      ctx.fillText('Critical line: Re(s) = 1/2', width - 150, height - 60);
      ctx.fillText('(extends into complex plane)', width - 150, height - 45);
    }
  }, [realPart, showCriticalLine]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Riemann Zeta Function</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={400}
          height={250}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">s = {realPart.toFixed(2)}</label>
            <input
              type="range"
              min="1.1"
              max="5"
              step="0.1"
              value={realPart}
              onChange={e => setRealPart(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="p-3 bg-dark-800 rounded">
            <p className="text-sm text-dark-400">Value:</p>
            <p className="font-mono text-xl text-accent-400">
              ζ({realPart.toFixed(2)}) = {realPart > 1 ? zeta(realPart).toFixed(6) : '∞'}
            </p>
          </div>

          <label className="flex items-center gap-2 text-dark-300">
            <input
              type="checkbox"
              checked={showCriticalLine}
              onChange={e => setShowCriticalLine(e.target.checked)}
            />
            Show critical line note
          </label>

          <div className="text-xs text-dark-500">
            <p>Special values:</p>
            <p>ζ(2) = π²/6 ≈ 1.6449</p>
            <p>ζ(4) = π⁴/90 ≈ 1.0823</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Prime Counting and Zeta Zeros
function PrimeCountingDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [maxN, setMaxN] = useState(100);

  // Check if prime
  const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Count primes up to n
  const pi = (n: number): number => {
    let count = 0;
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) count++;
    }
    return count;
  };

  // Prime Number Theorem approximation
  const pnt = (n: number): number => {
    if (n < 2) return 0;
    return n / Math.log(n);
  };

  // Li(x) - logarithmic integral approximation
  const li = (n: number): number => {
    if (n < 2) return 0;
    // Simple approximation
    let sum = 0;
    for (let t = 2; t <= n; t++) {
      sum += 1 / Math.log(t);
    }
    return sum;
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

    const margin = 50;
    const plotWidth = width - 2 * margin;
    const plotHeight = height - 2 * margin;

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(margin, height - margin);
    ctx.lineTo(width - margin, height - margin);
    ctx.stroke();

    const maxPi = pi(maxN);
    const scaleX = plotWidth / maxN;
    const scaleY = plotHeight / (maxPi * 1.2);

    // Draw π(x) - actual prime counting
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    let lastY = height - margin;
    for (let x = 2; x <= maxN; x++) {
      const px = margin + x * scaleX;
      const count = pi(x);
      const py = height - margin - count * scaleY;

      if (x === 2) ctx.moveTo(px, py);
      else {
        ctx.lineTo(px, lastY);
        ctx.lineTo(px, py);
      }
      lastY = py;
    }
    ctx.stroke();

    // Draw x/ln(x) approximation
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    for (let x = 2; x <= maxN; x++) {
      const px = margin + x * scaleX;
      const approx = pnt(x);
      const py = height - margin - approx * scaleY;

      if (x === 2) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw Li(x) approximation
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    for (let x = 2; x <= maxN; x++) {
      const px = margin + x * scaleX;
      const approx = li(x);
      const py = height - margin - approx * scaleY;

      if (x === 2) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText('π(x)', 10, margin + 10);
    ctx.fillText('x', width - margin + 10, height - margin + 5);

    // Legend
    ctx.fillStyle = '#8b5cf6';
    ctx.fillRect(width - 120, 15, 15, 3);
    ctx.fillStyle = '#9ca3af';
    ctx.fillText('π(x) actual', width - 100, 20);

    ctx.fillStyle = '#22d3ee';
    ctx.fillRect(width - 120, 30, 15, 3);
    ctx.fillText('x/ln(x)', width - 100, 35);

    ctx.fillStyle = '#22c55e';
    ctx.fillRect(width - 120, 45, 15, 3);
    ctx.fillText('Li(x)', width - 100, 50);
  }, [maxN]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Prime Counting and the Zeta Function</h4>

      <canvas
        ref={canvasRef}
        width={450}
        height={280}
        className="bg-dark-950 rounded-lg w-full"
      />

      <div className="mt-4">
        <label className="block text-sm text-dark-400 mb-1">Range: up to {maxN}</label>
        <input
          type="range"
          min="50"
          max="500"
          step="50"
          value={maxN}
          onChange={e => setMaxN(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm text-dark-300">
        <p><strong>Prime Number Theorem:</strong> π(x) ~ x/ln(x) as x → ∞</p>
        <p className="text-dark-500 mt-2">
          Riemann showed the exact distribution of primes is encoded in the zeros of ζ(s).
          The Riemann Hypothesis predicts all non-trivial zeros have real part 1/2.
        </p>
      </div>
    </div>
  );
}

// Curved Space Visualization (Riemannian Geometry)
function CurvedSpaceDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [curvature, setCurvature] = useState<'flat' | 'positive' | 'negative'>('flat');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    if (curvature === 'flat') {
      // Draw flat grid
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;

      for (let i = -5; i <= 5; i++) {
        // Horizontal lines
        ctx.beginPath();
        ctx.moveTo(cx - 120, cy + i * 20);
        ctx.lineTo(cx + 120, cy + i * 20);
        ctx.stroke();

        // Vertical lines
        ctx.beginPath();
        ctx.moveTo(cx + i * 24, cy - 100);
        ctx.lineTo(cx + i * 24, cy + 100);
        ctx.stroke();
      }

      // Draw triangle
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 60);
      ctx.lineTo(cx - 60, cy + 40);
      ctx.lineTo(cx + 60, cy + 40);
      ctx.closePath();
      ctx.stroke();

      // Angle sum
      ctx.fillStyle = '#fbbf24';
      ctx.font = '14px sans-serif';
      ctx.fillText('Angle sum = 180°', cx - 50, height - 20);

    } else if (curvature === 'positive') {
      // Draw sphere-like curved lines
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;

      // Latitude lines (curved)
      for (let i = -4; i <= 4; i++) {
        ctx.beginPath();
        const y = cy + i * 20;
        const curveAmount = Math.sqrt(Math.max(0, 100 * 100 - (i * 20) * (i * 20))) / 100;
        for (let x = -100; x <= 100; x += 5) {
          const px = cx + x;
          const py = y - curveAmount * (100 - Math.abs(x)) * 0.3;
          if (x === -100) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Longitude lines (curved)
      for (let i = -4; i <= 4; i++) {
        ctx.beginPath();
        const x = cx + i * 25;
        for (let y = -80; y <= 80; y += 5) {
          const px = x + (80 - Math.abs(y)) * 0.15 * Math.sign(i);
          const py = cy + y;
          if (y === -80) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Draw curved triangle (sum > 180)
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 50);
      ctx.quadraticCurveTo(cx - 80, cy, cx - 50, cy + 40);
      ctx.quadraticCurveTo(cx, cy + 60, cx + 50, cy + 40);
      ctx.quadraticCurveTo(cx + 80, cy, cx, cy - 50);
      ctx.stroke();

      ctx.fillStyle = '#22c55e';
      ctx.font = '14px sans-serif';
      ctx.fillText('Angle sum > 180°', cx - 55, height - 20);

    } else {
      // Draw hyperbolic-like curved lines (saddle)
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;

      // Curved grid lines
      for (let i = -4; i <= 4; i++) {
        ctx.beginPath();
        for (let t = -100; t <= 100; t += 5) {
          const x = cx + t;
          const y = cy + i * 20 + (t * t) / 500 * Math.sign(i);
          if (t === -100) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      for (let i = -4; i <= 4; i++) {
        ctx.beginPath();
        for (let t = -80; t <= 80; t += 5) {
          const x = cx + i * 25 - (t * t) / 600 * Math.sign(i);
          const y = cy + t;
          if (t === -80) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw curved triangle (sum < 180)
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 50);
      ctx.quadraticCurveTo(cx - 40, cy - 10, cx - 50, cy + 40);
      ctx.quadraticCurveTo(cx, cy + 30, cx + 50, cy + 40);
      ctx.quadraticCurveTo(cx + 40, cy - 10, cx, cy - 50);
      ctx.stroke();

      ctx.fillStyle = '#ef4444';
      ctx.font = '14px sans-serif';
      ctx.fillText('Angle sum < 180°', cx - 55, height - 20);
    }
  }, [curvature]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Riemannian Geometry: Curved Spaces</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={300}
          height={250}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCurvature('flat')}
              className={`px-4 py-2 rounded ${curvature === 'flat' ? 'bg-amber-600 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              Flat (K=0)
            </button>
            <button
              onClick={() => setCurvature('positive')}
              className={`px-4 py-2 rounded ${curvature === 'positive' ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              Positive (K{'>'}0)
            </button>
            <button
              onClick={() => setCurvature('negative')}
              className={`px-4 py-2 rounded ${curvature === 'negative' ? 'bg-red-600 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              Negative (K{'<'}0)
            </button>
          </div>

          <div className="p-3 bg-dark-800 rounded text-sm text-dark-300">
            {curvature === 'flat' && (
              <p>Euclidean geometry: parallel lines never meet, triangle angles sum to 180°.</p>
            )}
            {curvature === 'positive' && (
              <p>Spherical geometry: "parallel" lines converge, triangle angles sum to more than 180°.</p>
            )}
            {curvature === 'negative' && (
              <p>Hyperbolic geometry: parallel lines diverge, triangle angles sum to less than 180°.</p>
            )}
          </div>

          <p className="text-xs text-dark-500">
            Riemann generalized geometry to arbitrary curved spaces with any number of
            dimensions — the foundation for Einstein's general relativity.
          </p>
        </div>
      </div>
    </div>
  );
}

// Riemann Integral Visualization
function RiemannIntegralDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [numRectangles, setNumRectangles] = useState(10);
  const [sumType, setSumType] = useState<'left' | 'right' | 'midpoint'>('left');

  // Function to integrate
  const f = (x: number) => Math.sin(x * Math.PI) + 0.5;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    const margin = 40;
    const plotWidth = width - 2 * margin;
    const plotHeight = height - 2 * margin;

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(margin, height - margin);
    ctx.lineTo(width - margin, height - margin);
    ctx.stroke();

    const a = 0, b = 1; // Integration bounds
    const scaleX = plotWidth / (b - a);
    const scaleY = plotHeight / 2;
    const baseY = height - margin - plotHeight / 2;

    // Draw rectangles
    const dx = (b - a) / numRectangles;
    let sum = 0;

    for (let i = 0; i < numRectangles; i++) {
      const x0 = a + i * dx;
      const x1 = a + (i + 1) * dx;
      let sampleX: number;

      if (sumType === 'left') sampleX = x0;
      else if (sumType === 'right') sampleX = x1;
      else sampleX = (x0 + x1) / 2;

      const fValue = f(sampleX);
      sum += fValue * dx;

      const px0 = margin + x0 * scaleX;
      const px1 = margin + x1 * scaleX;
      const py = baseY - fValue * scaleY;

      ctx.fillStyle = 'rgba(139, 92, 246, 0.4)';
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;

      ctx.fillRect(px0, Math.min(baseY, py), px1 - px0, Math.abs(py - baseY));
      ctx.strokeRect(px0, Math.min(baseY, py), px1 - px0, Math.abs(py - baseY));
    }

    // Draw function curve
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = margin; px <= width - margin; px++) {
      const x = a + (px - margin) / scaleX;
      const y = f(x);
      const py = baseY - y * scaleY;
      if (px === margin) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText('0', margin - 5, height - margin + 15);
    ctx.fillText('1', width - margin - 5, height - margin + 15);

    // Sum value
    ctx.fillStyle = '#fbbf24';
    ctx.font = '14px sans-serif';
    ctx.fillText(`Sum ≈ ${sum.toFixed(4)}`, 10, 25);
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText(`(Exact: ${(2 / Math.PI + 0.5).toFixed(4)})`, 10, 42);
  }, [numRectangles, sumType]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Riemann Integral</h4>

      <canvas
        ref={canvasRef}
        width={400}
        height={250}
        className="bg-dark-950 rounded-lg w-full"
      />

      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm text-dark-400 mb-1">Rectangles: {numRectangles}</label>
          <input
            type="range"
            min="2"
            max="50"
            value={numRectangles}
            onChange={e => setNumRectangles(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex gap-2">
          {(['left', 'right', 'midpoint'] as const).map(type => (
            <button
              key={type}
              onClick={() => setSumType(type)}
              className={`px-3 py-1 rounded capitalize ${
                sumType === type ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-dark-400 mt-4">
        Riemann defined integration as the limit of these sums as rectangles become infinitely thin.
        This rigorous definition unified previous approaches.
      </p>
    </div>
  );
}

// Riemann Hypothesis Visualization
function RiemannHypothesisDemo() {
  const [showZeros, setShowZeros] = useState(true);

  // First few non-trivial zeros (imaginary parts, real part = 1/2)
  const knownZeros = [14.135, 21.022, 25.011, 30.425, 32.935, 37.586, 40.919, 43.327, 48.005, 49.774];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Riemann Hypothesis</h4>

      <div className="p-4 bg-gradient-to-r from-accent-900/30 to-purple-900/30 border-2 border-accent-500 rounded-lg mb-6">
        <p className="text-lg text-dark-100 text-center font-semibold">
          All non-trivial zeros of ζ(s) have real part equal to 1/2
        </p>
        <p className="text-center text-dark-400 mt-2">
          Unsolved since 1859 • $1,000,000 prize (Clay Mathematics Institute)
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-dark-800 rounded-lg">
          <h5 className="font-semibold text-dark-100 mb-3">Critical Strip</h5>
          <div className="relative h-48 bg-dark-950 rounded">
            {/* Critical strip visualization */}
            <div className="absolute inset-y-0 left-1/4 right-1/4 bg-accent-600/20 border-x border-accent-600"></div>
            <div className="absolute inset-y-0 left-1/2 w-px bg-green-500"></div>

            {/* Zeros on critical line */}
            {showZeros && knownZeros.slice(0, 6).map((t, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-500 rounded-full"
                style={{
                  left: '50%',
                  top: `${15 + i * 13}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}

            {/* Labels */}
            <div className="absolute bottom-2 left-2 text-xs text-dark-500">Re(s) = 0</div>
            <div className="absolute bottom-2 right-2 text-xs text-dark-500">Re(s) = 1</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-green-400">
              Re(s) = 1/2
            </div>
            <div className="absolute top-2 right-2 text-xs text-dark-500">Im(s) →</div>
          </div>

          <label className="flex items-center gap-2 mt-3 text-sm text-dark-300">
            <input
              type="checkbox"
              checked={showZeros}
              onChange={e => setShowZeros(e.target.checked)}
            />
            Show known zeros
          </label>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-dark-800 rounded">
            <p className="text-sm text-dark-400">First few zeros (Im part):</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {knownZeros.map((z, i) => (
                <span key={i} className="px-2 py-1 bg-dark-700 rounded text-xs font-mono text-accent-400">
                  {z.toFixed(3)}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3 bg-dark-800 rounded text-sm text-dark-300">
            <p className="font-semibold mb-1">Why it matters:</p>
            <ul className="text-xs text-dark-400 space-y-1">
              <li>• Controls the distribution of prime numbers</li>
              <li>• Implies strong bounds on π(x) - Li(x)</li>
              <li>• Connected to quantum chaos and random matrices</li>
              <li>• Over 10 trillion zeros verified to lie on the line</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Career Timeline
function CareerTimeline() {
  const events = [
    { year: '1826', event: 'Born in Breselenz, Hanover, son of a poor Lutheran pastor' },
    { year: '1846', event: 'Enters University of Göttingen; studies under Gauss' },
    { year: '1851', event: 'Doctoral thesis on complex analysis (Riemann surfaces)' },
    { year: '1854', event: 'Habilitation lecture "On the Hypotheses Which Lie at the Foundations of Geometry"' },
    { year: '1857', event: 'Professor at Göttingen after Dirichlet\'s death' },
    { year: '1859', event: 'Paper "On the Number of Primes Less Than a Given Magnitude" — introduces the hypothesis' },
    { year: '1862', event: 'Marries Elise Koch; health begins to fail from tuberculosis' },
    { year: '1866', event: 'Dies in Italy at age 39, leaving much work unpublished' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">A Brief, Brilliant Life</h4>

      <div className="relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-accent-600"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative pl-24 pb-4">
            <div className="absolute left-0 w-12 text-right text-sm font-mono text-dark-400">
              {event.year}
            </div>
            <div className={`absolute left-14 w-5 h-5 rounded-full border-4 border-dark-900 ${
              event.year === '1859' ? 'bg-green-500' : 'bg-accent-600'
            }`}></div>
            <p className="text-dark-200">{event.event}</p>
          </div>
        ))}
      </div>

      <Callout type="note" className="mt-4">
        Riemann died at 39, leaving his housekeeper to burn many of his unpublished papers.
        What survived was enough to reshape mathematics in multiple directions.
      </Callout>
    </div>
  );
}

export default function Section29() {
  return (
    <LessonLayout
      title="Bernhard Riemann"
      sectionNumber={29}
      prevSection={28}
      nextSection={30}
    >
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-accent-900/50 text-accent-300 rounded-full text-sm mb-4">
          Chapter 29: The Geometer of the Invisible
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4">
          Bernhard Riemann
        </h1>
        <p className="text-xl text-dark-300">
          From curved spaces to the greatest unsolved problem in mathematics
        </p>
        <p className="text-dark-400 mt-2">1826 – 1866</p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <Card variant="primary">
          <p className="text-lg text-dark-200 leading-relaxed">
            In his short 39 years, Bernhard Riemann reshaped mathematics more profoundly than
            almost anyone since Newton. His revolutionary ideas on geometry laid the foundation
            for Einstein's general relativity. His 8-page paper on prime numbers contains the
            most famous unsolved problem in mathematics. His concepts of integration and complex
            analysis remain central today. Shy and sickly, he spoke softly but his ideas thundered.
          </p>
        </Card>
      </section>

      {/* Career */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">A Life Cut Short</h2>

        <CareerTimeline />
      </section>

      {/* Riemann Hypothesis */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Riemann Hypothesis</h2>

        <p className="text-dark-300 mb-6">
          In 1859, Riemann published an 8-page paper connecting the distribution of prime
          numbers to the zeros of a complex function — the zeta function. He made a casual
          remark that has haunted mathematicians ever since: all the "interesting" zeros
          seem to lie on a single vertical line.
        </p>

        <RiemannHypothesisDemo />

        <Callout type="important" className="mt-6">
          The Riemann Hypothesis is considered by many to be the most important unsolved
          problem in mathematics. Its proof would have profound implications for number
          theory, cryptography, and physics.
        </Callout>
      </section>

      {/* Zeta Function */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Zeta Function</h2>

        <p className="text-dark-300 mb-6">
          The Riemann zeta function starts as a simple infinite series but extends to the
          entire complex plane (except s = 1, where it has a pole). Its zeros encode deep
          information about prime numbers.
        </p>

        <ZetaFunctionDemo />

        <div className="mt-6">
          <MathBlock
            tex="\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s} = \prod_{p \text{ prime}} \frac{1}{1-p^{-s}}"
            description="The zeta function as sum and Euler product (connecting to primes)"
          />
        </div>
      </section>

      {/* Prime Counting */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Primes and the Zeta Zeros</h2>

        <p className="text-dark-300 mb-6">
          Riemann showed that the exact distribution of primes can be expressed using the
          zeros of the zeta function. The famous Prime Number Theorem (proved 1896) is just
          the first approximation; the zeros give the corrections.
        </p>

        <PrimeCountingDemo />
      </section>

      {/* Riemannian Geometry */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Riemannian Geometry</h2>

        <p className="text-dark-300 mb-6">
          In his legendary 1854 habilitation lecture, Riemann generalized geometry to curved
          spaces of any dimension. He introduced the concept of a "metric" — a way to measure
          distances and angles that can vary from point to point.
        </p>

        <CurvedSpaceDemo />

        <div className="mt-6">
          <MathBlock
            tex="ds^2 = \sum_{i,j} g_{ij}(x) \, dx^i \, dx^j"
            description="The Riemannian metric: how to measure distance in curved space"
          />
        </div>

        <CardGrid columns={2} className="mt-6">
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">The Metric Tensor</h4>
            <p className="text-sm text-dark-400">
              The metric g_ij encodes how distances are measured at each point. It can vary
              smoothly, creating curved geometry.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Curvature</h4>
            <p className="text-sm text-dark-400">
              Riemann defined intrinsic curvature — detectable by inhabitants of the space
              itself, without reference to any embedding.
            </p>
          </Card>
        </CardGrid>

        <Callout type="theorem" title="Impact on Physics" className="mt-6">
          60 years after Riemann's lecture, Einstein used Riemannian geometry to formulate
          general relativity: gravity IS the curvature of spacetime. The metric tensor
          became the fundamental field of gravitational physics.
        </Callout>
      </section>

      {/* Riemann Integral */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Riemann Integral</h2>

        <p className="text-dark-300 mb-6">
          Riemann provided the first rigorous definition of the integral, using sums of
          rectangles that approach the area under a curve as their widths shrink to zero.
        </p>

        <RiemannIntegralDemo />

        <div className="mt-6">
          <MathBlock
            tex="\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x"
            description="The Riemann integral as a limit of Riemann sums"
          />
        </div>
      </section>

      {/* Riemann Surfaces */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Riemann Surfaces</h2>

        <p className="text-dark-300 mb-6">
          Riemann's doctoral thesis introduced surfaces that make multi-valued functions
          single-valued. For example, √z is double-valued on the complex plane, but
          single-valued on a two-sheeted surface.
        </p>

        <CardGrid columns={2}>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">The Problem</h4>
            <p className="text-sm text-dark-400">
              Functions like √z and log(z) give multiple values for the same input.
              Going around z = 0 switches between branches.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Riemann's Solution</h4>
            <p className="text-sm text-dark-400">
              Build a new surface where the function IS single-valued. Multiple sheets
              connected at branch points.
            </p>
          </Card>
        </CardGrid>

        <div className="mt-6">
          <MathBlock
            tex="w = \sqrt{z} \text{ becomes single-valued on a 2-sheeted surface}"
            description="Riemann surfaces resolve multi-valuedness geometrically"
          />
        </div>

        <p className="text-dark-400 mt-4">
          Riemann surfaces became fundamental to complex analysis, algebraic geometry, and
          string theory. They reveal deep connections between analysis and topology.
        </p>
      </section>

      {/* The Habilitation Lecture */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Legendary Lecture</h2>

        <Card variant="dark">
          <p className="text-dark-300 mb-4">
            On June 10, 1854, the shy 27-year-old Riemann delivered his habilitation lecture
            to the Göttingen faculty, including the aging Gauss. The topic: "On the Hypotheses
            Which Lie at the Foundations of Geometry."
          </p>

          <p className="text-dark-300 mb-4">
            In under an hour, Riemann reimagined geometry itself. He proposed that space need
            not be flat, that curvature could vary from point to point, that there could be
            spaces of any number of dimensions, and that the true geometry of physical space
            was an empirical question.
          </p>

          <blockquote className="text-lg text-dark-200 italic border-l-4 border-accent-500 pl-4">
            Gauss, normally reserved, was deeply moved. He spoke of the lecture with great
            enthusiasm and praised Riemann's "gloriously fertile imagination."
          </blockquote>
        </Card>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <Card variant="secondary">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Bell's Assessment</h3>

          <blockquote className="text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4 mb-4">
            "Riemann's ideas were so far ahead of his time that it took decades for mathematics
            to catch up... His work on geometry anticipated Einstein by half a century."
          </blockquote>

          <p className="text-dark-400">
            Bell emphasizes Riemann's visionary quality — his ability to see connections
            invisible to others and to formulate concepts that would take generations to
            fully understand. Riemann's early death left many ideas sketched rather than
            developed, but those sketches launched entire fields.
          </p>
        </Card>
      </section>

      {/* Legacy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">An Enduring Legacy</h2>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Riemann Hypothesis</h4>
            <p className="text-sm text-dark-400">
              The most important unsolved problem in mathematics, connecting primes to
              complex analysis
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Riemannian Geometry</h4>
            <p className="text-sm text-dark-400">
              The mathematics of curved spaces — foundation of general relativity
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Riemann Surfaces</h4>
            <p className="text-sm text-dark-400">
              Geometric resolution of multi-valued functions — central to modern geometry
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Riemann Integral</h4>
            <p className="text-sm text-dark-400">
              First rigorous definition of integration, still taught universally today
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
                <strong>Riemann Hypothesis:</strong> All non-trivial zeros of ζ(s) have
                real part 1/2 — unsolved since 1859, worth $1M
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Zeta function:</strong> <Math tex="\zeta(s) = \sum n^{-s}" /> connects
                to primes via the Euler product and encodes their distribution
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Riemannian geometry:</strong> Curved spaces with varying metrics —
                Einstein used it for general relativity
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Riemann surfaces:</strong> Multi-sheeted surfaces that make
                multi-valued functions single-valued
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Riemann died at 39 but left ideas that shaped 20th-century mathematics
                and physics
              </span>
            </li>
          </ul>
        </Card>
      </section>
    </LessonLayout>
  );
}
