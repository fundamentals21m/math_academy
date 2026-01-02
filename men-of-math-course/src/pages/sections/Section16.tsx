import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, InlineMath } from '@/components/common';

// =============================================================================
// INTERACTIVE VISUALIZATIONS
// =============================================================================

/**
 * Regular 17-gon Construction
 * Gauss's first major discovery - proving the 17-gon is constructible
 */
function Heptadecagon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showConstruction, setShowConstruction] = useState(false);
  const [highlightVertex, setHighlightVertex] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = 120;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw circle
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw 17-gon
    const n = 17;
    const vertices: { x: number; y: number }[] = [];

    for (let i = 0; i < n; i++) {
      const angle = (2 * Math.PI * i) / n - Math.PI / 2;
      vertices.push({
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle),
      });
    }

    // Draw polygon edges
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    vertices.forEach((v, i) => {
      if (i === 0) ctx.moveTo(v.x, v.y);
      else ctx.lineTo(v.x, v.y);
    });
    ctx.closePath();
    ctx.stroke();

    // Draw vertices
    vertices.forEach((v, i) => {
      ctx.fillStyle = highlightVertex === i ? '#f59e0b' : '#10b981';
      ctx.beginPath();
      ctx.arc(v.x, v.y, highlightVertex === i ? 8 : 5, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Show construction lines if enabled
    if (showConstruction) {
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
      ctx.lineWidth = 1;

      // Center point
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, 2 * Math.PI);
      ctx.fill();

      // Some construction circles (simplified representation)
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.5, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.25, 0, 2 * Math.PI);
      ctx.stroke();

      // Horizontal and vertical lines
      ctx.beginPath();
      ctx.moveTo(cx - radius - 20, cy);
      ctx.lineTo(cx + radius + 20, cy);
      ctx.moveTo(cx, cy - radius - 20);
      ctx.lineTo(cx, cy + radius + 20);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Label
    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px monospace';
    ctx.fillText('Regular 17-gon (Heptadecagon)', 10, 25);
    ctx.fillText(`Each angle = ${(360 / 17).toFixed(4)}°`, 10, 45);

  }, [showConstruction, highlightVertex]);

  return (
    <Card title="The Regular 17-gon">
      <div className="space-y-4">
        <p className="text-dark-300">
          At age 19, Gauss proved that the regular 17-sided polygon (heptadecagon) can be
          constructed with compass and straightedge alone—the first new constructible polygon
          discovered in over 2000 years.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <label className="flex items-center gap-2 text-dark-300">
            <input
              type="checkbox"
              checked={showConstruction}
              onChange={(e) => setShowConstruction(e.target.checked)}
              className="rounded"
            />
            Show construction lines
          </label>
          <div>
            <label className="text-sm text-dark-400 mr-2">Highlight vertex:</label>
            <select
              value={highlightVertex ?? ''}
              onChange={(e) => setHighlightVertex(e.target.value ? parseInt(e.target.value) : null)}
              className="bg-dark-800 border border-dark-600 rounded px-2 py-1 text-dark-100"
            >
              <option value="">None</option>
              {Array.from({ length: 17 }, (_, i) => (
                <option key={i} value={i}>Vertex {i + 1}</option>
              ))}
            </select>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="w-full max-w-md mx-auto border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          Gauss showed that a regular n-gon is constructible iff n is a product of a power
          of 2 and distinct Fermat primes (3, 5, 17, 257, 65537).
        </p>
      </div>
    </Card>
  );
}

/**
 * Modular Arithmetic Clock
 * Visual representation of modular arithmetic
 */
function ModularArithmeticDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [modulus, setModulus] = useState(12);
  const [value, setValue] = useState(0);
  const [operation, setOperation] = useState<'add' | 'multiply'>('add');
  const [operand, setOperand] = useState(5);

  const compute = () => {
    if (operation === 'add') {
      return (value + operand) % modulus;
    } else {
      return (value * operand) % modulus;
    }
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
    const radius = 100;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw clock circle
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw tick marks and numbers
    for (let i = 0; i < modulus; i++) {
      const angle = (2 * Math.PI * i) / modulus - Math.PI / 2;
      const innerR = radius - 15;
      const outerR = radius - 5;
      const textR = radius - 30;

      // Tick mark
      ctx.strokeStyle = '#6b7280';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx + innerR * Math.cos(angle), cy + innerR * Math.sin(angle));
      ctx.lineTo(cx + outerR * Math.cos(angle), cy + outerR * Math.sin(angle));
      ctx.stroke();

      // Number
      ctx.fillStyle = i === value ? '#3b82f6' : i === compute() ? '#10b981' : '#9ca3af';
      ctx.font = i === value || i === compute() ? 'bold 16px monospace' : '14px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(i.toString(), cx + textR * Math.cos(angle), cy + textR * Math.sin(angle));
    }

    // Draw hand for current value
    const valueAngle = (2 * Math.PI * value) / modulus - Math.PI / 2;
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + (radius - 40) * Math.cos(valueAngle), cy + (radius - 40) * Math.sin(valueAngle));
    ctx.stroke();

    // Draw result indicator
    const resultAngle = (2 * Math.PI * compute()) / modulus - Math.PI / 2;
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + (radius - 50) * Math.cos(resultAngle), cy + (radius - 50) * Math.sin(resultAngle));
    ctx.stroke();
    ctx.setLineDash([]);

    // Center dot
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, 2 * Math.PI);
    ctx.fill();

    // Legend
    ctx.font = '12px monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#3b82f6';
    ctx.fillText(`Input: ${value}`, 10, 25);
    ctx.fillStyle = '#10b981';
    ctx.fillText(`Result: ${compute()}`, 10, 45);

  }, [modulus, value, operation, operand]);

  return (
    <Card title="Modular Arithmetic">
      <div className="space-y-4">
        <p className="text-dark-300">
          Gauss's <em>Disquisitiones Arithmeticae</em> established modular arithmetic as a
          central tool in number theory. Think of it as clock arithmetic.
        </p>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Modulus: {modulus}</label>
            <input
              type="range"
              min="3"
              max="24"
              value={modulus}
              onChange={(e) => {
                const m = parseInt(e.target.value);
                setModulus(m);
                setValue(Math.min(value, m - 1));
              }}
              className="w-24"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Value: {value}</label>
            <input
              type="range"
              min="0"
              max={modulus - 1}
              value={value}
              onChange={(e) => setValue(parseInt(e.target.value))}
              className="w-24"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Operation</label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value as 'add' | 'multiply')}
              className="bg-dark-800 border border-dark-600 rounded px-2 py-1 text-dark-100"
            >
              <option value="add">Add (+)</option>
              <option value="multiply">Multiply (×)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Operand: {operand}</label>
            <input
              type="range"
              min="1"
              max={modulus - 1}
              value={operand}
              onChange={(e) => setOperand(parseInt(e.target.value))}
              className="w-24"
            />
          </div>
        </div>
        <div className="text-center">
          <canvas
            ref={canvasRef}
            width={300}
            height={280}
            className="inline-block border border-dark-700 rounded-lg"
          />
        </div>
        <MathBlock math={`${value} ${operation === 'add' ? '+' : '\\times'} ${operand} \\equiv ${compute()} \\pmod{${modulus}}`} />
      </div>
    </Card>
  );
}

/**
 * Gaussian Distribution (Bell Curve)
 */
function GaussianDistribution() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mean, setMean] = useState(0);
  const [stdDev, setStdDev] = useState(1);
  const [showArea, setShowArea] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(padding, padding);
    ctx.stroke();

    // Gaussian function
    const gaussian = (x: number) => {
      const exponent = -((x - mean) ** 2) / (2 * stdDev ** 2);
      return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
    };

    // Map x to canvas coordinates
    const xMin = -4;
    const xMax = 4;
    const yMax = 0.5;

    const toCanvasX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (width - 2 * padding);
    const toCanvasY = (y: number) => height - padding - (y / yMax) * (height - 2 * padding);

    // Draw area under curve (within 1 std dev)
    if (showArea) {
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.beginPath();
      ctx.moveTo(toCanvasX(mean - stdDev), height - padding);
      for (let x = mean - stdDev; x <= mean + stdDev; x += 0.05) {
        ctx.lineTo(toCanvasX(x), toCanvasY(gaussian(x)));
      }
      ctx.lineTo(toCanvasX(mean + stdDev), height - padding);
      ctx.closePath();
      ctx.fill();

      // 2 std dev area
      ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.beginPath();
      ctx.moveTo(toCanvasX(mean - 2 * stdDev), height - padding);
      for (let x = mean - 2 * stdDev; x <= mean + 2 * stdDev; x += 0.05) {
        ctx.lineTo(toCanvasX(x), toCanvasY(gaussian(x)));
      }
      ctx.lineTo(toCanvasX(mean + 2 * stdDev), height - padding);
      ctx.closePath();
      ctx.fill();
    }

    // Draw the curve
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let x = xMin; x <= xMax; x += 0.02) {
      const y = gaussian(x);
      const cx = toCanvasX(x);
      const cy = toCanvasY(y);
      if (x === xMin) ctx.moveTo(cx, cy);
      else ctx.lineTo(cx, cy);
    }
    ctx.stroke();

    // Draw mean line
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(toCanvasX(mean), height - padding);
    ctx.lineTo(toCanvasX(mean), toCanvasY(gaussian(mean)));
    ctx.stroke();
    ctx.setLineDash([]);

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';

    // X-axis labels
    for (let x = -3; x <= 3; x++) {
      ctx.fillText(x.toString(), toCanvasX(x), height - padding + 20);
    }

    // Annotations
    ctx.fillStyle = '#f59e0b';
    ctx.fillText(`μ = ${mean}`, toCanvasX(mean), toCanvasY(gaussian(mean)) - 15);

    ctx.fillStyle = '#6b7280';
    ctx.font = '11px monospace';
    if (showArea) {
      ctx.fillText('68.2%', toCanvasX(mean), height - padding - 30);
      ctx.fillText('95.4%', toCanvasX(mean), height - padding - 15);
    }

  }, [mean, stdDev, showArea]);

  return (
    <Card title="The Gaussian Distribution">
      <div className="space-y-4">
        <p className="text-dark-300">
          The normal distribution, also called the Gaussian or bell curve, appears
          throughout nature and statistics. Its probability density function is:
        </p>
        <MathBlock math="f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}" />
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Mean (μ): {mean.toFixed(1)}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={mean}
              onChange={(e) => setMean(parseFloat(e.target.value))}
              className="w-28"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Std Dev (σ): {stdDev.toFixed(1)}</label>
            <input
              type="range"
              min="0.3"
              max="2"
              step="0.1"
              value={stdDev}
              onChange={(e) => setStdDev(parseFloat(e.target.value))}
              className="w-28"
            />
          </div>
          <label className="flex items-center gap-2 text-dark-300">
            <input
              type="checkbox"
              checked={showArea}
              onChange={(e) => setShowArea(e.target.checked)}
              className="rounded"
            />
            Show probability regions
          </label>
        </div>
        <canvas
          ref={canvasRef}
          width={500}
          height={280}
          className="w-full border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Method of Least Squares
 * Fit a line to data points
 */
function LeastSquaresDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([
    { x: 50, y: 220 },
    { x: 100, y: 180 },
    { x: 180, y: 160 },
    { x: 250, y: 120 },
    { x: 320, y: 100 },
    { x: 400, y: 70 },
  ]);
  const [dragging, setDragging] = useState<number | null>(null);

  // Calculate least squares line
  const calculateLine = () => {
    const n = points.length;
    if (n < 2) return { slope: 0, intercept: 0 };

    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    points.forEach(p => {
      sumX += p.x;
      sumY += p.y;
      sumXY += p.x * p.y;
      sumX2 += p.x * p.x;
    });

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return { slope, intercept };
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
    ctx.moveTo(30, height - 30);
    ctx.lineTo(width - 10, height - 30);
    ctx.moveTo(30, height - 30);
    ctx.lineTo(30, 10);
    ctx.stroke();

    // Calculate and draw best fit line
    const { slope, intercept } = calculateLine();

    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, intercept + slope * 30);
    ctx.lineTo(width - 10, intercept + slope * (width - 10));
    ctx.stroke();

    // Draw residuals (errors)
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    points.forEach(p => {
      const predictedY = slope * p.x + intercept;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x, predictedY);
      ctx.stroke();
    });
    ctx.setLineDash([]);

    // Draw points
    points.forEach((p, i) => {
      ctx.fillStyle = dragging === i ? '#f59e0b' : '#3b82f6';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Calculate R² and show equation
    let ssTot = 0, ssRes = 0;
    const meanY = points.reduce((sum, p) => sum + p.y, 0) / points.length;
    points.forEach(p => {
      const predictedY = slope * p.x + intercept;
      ssRes += (p.y - predictedY) ** 2;
      ssTot += (p.y - meanY) ** 2;
    });
    const r2 = 1 - ssRes / ssTot;

    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText(`y = ${slope.toFixed(3)}x + ${intercept.toFixed(1)}`, 50, 25);
    ctx.fillText(`R² = ${r2.toFixed(4)}`, 50, 45);
    ctx.fillStyle = '#6b7280';
    ctx.fillText('Drag points to adjust', width - 150, 25);

  }, [points, dragging]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    points.forEach((p, i) => {
      if (Math.sqrt((x - p.x) ** 2 + (y - p.y) ** 2) < 15) {
        setDragging(i);
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dragging === null) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    const newPoints = [...points];
    newPoints[dragging] = {
      x: Math.max(40, Math.min(canvas.width - 20, x)),
      y: Math.max(20, Math.min(canvas.height - 40, y)),
    };
    setPoints(newPoints);
  };

  const handleMouseUp = () => setDragging(null);

  return (
    <Card title="Method of Least Squares">
      <div className="space-y-4">
        <p className="text-dark-300">
          Gauss developed the method of least squares to minimize the sum of squared
          errors when fitting a model to data. He used it to predict the orbit of Ceres.
        </p>
        <MathBlock math="\min \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 = \min \sum_{i=1}^{n} (y_i - (ax_i + b))^2" />
        <canvas
          ref={canvasRef}
          width={500}
          height={280}
          className="w-full border border-dark-700 rounded-lg cursor-pointer"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
        <p className="text-sm text-dark-400">
          <span className="text-green-400">Green line</span>: best fit |
          <span className="text-red-400"> Red dashes</span>: residuals (errors being minimized)
        </p>
      </div>
    </Card>
  );
}

/**
 * Quadratic Reciprocity Calculator
 */
function QuadraticReciprocity() {
  const [p, setP] = useState(7);
  const [q, setQ] = useState(11);

  // Check if n is prime
  const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Compute Legendre symbol (a/p)
  const legendreSymbol = (a: number, p: number): number => {
    if (p < 2 || !isPrime(p)) return 0;
    a = ((a % p) + p) % p;
    if (a === 0) return 0;

    // Euler's criterion: a^((p-1)/2) ≡ (a/p) (mod p)
    let result = 1;
    let exp = (p - 1) / 2;
    let base = a;

    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % p;
      }
      base = (base * base) % p;
      exp = Math.floor(exp / 2);
    }

    return result > p / 2 ? result - p : result;
  };

  const pIsOddPrime = isPrime(p) && p > 2;
  const qIsOddPrime = isPrime(q) && q > 2;

  const lpq = pIsOddPrime && qIsOddPrime ? legendreSymbol(p, q) : 0;
  const lqp = pIsOddPrime && qIsOddPrime ? legendreSymbol(q, p) : 0;

  // The reciprocity factor: (-1)^((p-1)/2 * (q-1)/2)
  const reciprocityFactor = pIsOddPrime && qIsOddPrime
    ? (((p - 1) / 2) * ((q - 1) / 2)) % 2 === 0 ? 1 : -1
    : 0;

  return (
    <Card title="Quadratic Reciprocity">
      <div className="space-y-4">
        <p className="text-dark-300">
          Gauss called this his "golden theorem" and proved it multiple times.
          It relates whether p is a square mod q to whether q is a square mod p.
        </p>
        <MathBlock math="\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}" />
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">p (odd prime)</label>
            <input
              type="number"
              min="3"
              max="97"
              value={p}
              onChange={(e) => setP(parseInt(e.target.value) || 3)}
              className="w-20 bg-dark-800 border border-dark-600 rounded px-2 py-1 text-dark-100"
            />
            {!pIsOddPrime && <span className="text-red-400 text-sm ml-2">Not odd prime</span>}
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">q (odd prime)</label>
            <input
              type="number"
              min="3"
              max="97"
              value={q}
              onChange={(e) => setQ(parseInt(e.target.value) || 3)}
              className="w-20 bg-dark-800 border border-dark-600 rounded px-2 py-1 text-dark-100"
            />
            {!qIsOddPrime && <span className="text-red-400 text-sm ml-2">Not odd prime</span>}
          </div>
        </div>
        {pIsOddPrime && qIsOddPrime && p !== q && (
          <div className="bg-dark-800 p-4 rounded-lg space-y-2 font-mono">
            <div className="text-dark-300">
              ({p}/{q}) = <span className={lpq === 1 ? 'text-green-400' : 'text-red-400'}>{lpq}</span>
              <span className="text-dark-500 ml-2">
                ({p} is {lpq === 1 ? '' : 'NOT '}a square mod {q})
              </span>
            </div>
            <div className="text-dark-300">
              ({q}/{p}) = <span className={lqp === 1 ? 'text-green-400' : 'text-red-400'}>{lqp}</span>
              <span className="text-dark-500 ml-2">
                ({q} is {lqp === 1 ? '' : 'NOT '}a square mod {p})
              </span>
            </div>
            <div className="text-dark-300 border-t border-dark-600 pt-2">
              (-1)^(({p}-1)/2 · ({q}-1)/2) = <span className="text-amber-400">{reciprocityFactor}</span>
            </div>
            <div className="text-dark-300">
              Product: ({p}/{q})·({q}/{p}) = {lpq * lqp} = {reciprocityFactor} ✓
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

/**
 * Gaussian Curvature / Theorema Egregium
 */
function TheoremaEgregium() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [surface, setSurface] = useState<'sphere' | 'saddle' | 'cylinder' | 'torus'>('sphere');

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

    // Draw different surfaces
    if (surface === 'sphere') {
      // Positive curvature - sphere
      const radius = 80;
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 1;

      // Latitude lines
      for (let lat = -60; lat <= 60; lat += 20) {
        const r = radius * Math.cos(lat * Math.PI / 180);
        const y = cy - radius * Math.sin(lat * Math.PI / 180) * 0.5;
        ctx.beginPath();
        ctx.ellipse(cx, y, r, r * 0.3, 0, 0, 2 * Math.PI);
        ctx.stroke();
      }

      // Longitude lines
      for (let lon = 0; lon < 180; lon += 30) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, radius * Math.cos(lon * Math.PI / 180), radius * 0.5, 0, 0, 2 * Math.PI);
        ctx.stroke();
      }

      // Curvature info
      ctx.fillStyle = '#10b981';
      ctx.font = '14px monospace';
      ctx.fillText('K > 0 (positive)', 20, 30);
      ctx.fillText('κ₁ = κ₂ = 1/R', 20, 50);

    } else if (surface === 'saddle') {
      // Negative curvature - saddle
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1;

      // Draw saddle curves
      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();
        for (let t = -2; t <= 2; t += 0.1) {
          const x = cx + t * 40;
          const y = cy + i * 15 - t * t * 10 + i * t * 8;
          if (t === -2) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();
        for (let t = -2; t <= 2; t += 0.1) {
          const x = cx + i * 15 + t * t * 10 - i * t * 8;
          const y = cy + t * 40;
          if (t === -2) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.fillStyle = '#ef4444';
      ctx.font = '14px monospace';
      ctx.fillText('K < 0 (negative)', 20, 30);
      ctx.fillText('κ₁ > 0, κ₂ < 0', 20, 50);

    } else if (surface === 'cylinder') {
      // Zero curvature - cylinder
      const radius = 60;
      const h = 100;

      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let angle = 0; angle < 360; angle += 30) {
        const x = cx + radius * Math.cos(angle * Math.PI / 180);
        const offset = radius * 0.3 * Math.sin(angle * Math.PI / 180);
        ctx.beginPath();
        ctx.moveTo(x, cy - h / 2 + offset);
        ctx.lineTo(x, cy + h / 2 + offset);
        ctx.stroke();
      }

      // Circles
      ctx.beginPath();
      ctx.ellipse(cx, cy - h / 2, radius, radius * 0.3, 0, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx, cy + h / 2, radius, radius * 0.3, 0, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.fillStyle = '#f59e0b';
      ctx.font = '14px monospace';
      ctx.fillText('K = 0 (flat)', 20, 30);
      ctx.fillText('κ₁ = 1/R, κ₂ = 0', 20, 50);

    } else {
      // Torus - mixed curvature
      const R = 70; // Major radius
      const r = 30; // Minor radius

      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;

      // Draw torus cross-sections
      for (let theta = 0; theta < 360; theta += 20) {
        const cosT = Math.cos(theta * Math.PI / 180);
        const sinT = Math.sin(theta * Math.PI / 180);
        ctx.beginPath();
        for (let phi = 0; phi <= 360; phi += 5) {
          const cosP = Math.cos(phi * Math.PI / 180);
          const sinP = Math.sin(phi * Math.PI / 180);
          const x = cx + (R + r * cosP) * cosT;
          const y = cy + r * sinP * 0.5 + (R + r * cosP) * sinT * 0.3;
          if (phi === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.fillStyle = '#8b5cf6';
      ctx.font = '14px monospace';
      ctx.fillText('K varies:', 20, 30);
      ctx.fillText('outer: K > 0', 20, 50);
      ctx.fillText('inner: K < 0', 20, 70);
    }

    // Labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px monospace';
    ctx.fillText('K = κ₁ · κ₂ (Gaussian curvature)', width - 200, height - 10);

  }, [surface]);

  return (
    <Card title="Theorema Egregium">
      <div className="space-y-4">
        <p className="text-dark-300">
          Gauss proved his "remarkable theorem": Gaussian curvature depends only on
          the intrinsic geometry of a surface, not how it's embedded in space.
        </p>
        <MathBlock math="K = \kappa_1 \cdot \kappa_2" />
        <div>
          <label className="block text-sm text-dark-400 mb-2">Surface Type</label>
          <div className="flex flex-wrap gap-2">
            {(['sphere', 'saddle', 'cylinder', 'torus'] as const).map(s => (
              <button
                key={s}
                onClick={() => setSurface(s)}
                className={`px-3 py-1 rounded ${surface === s ? 'bg-blue-600' : 'bg-dark-700'} text-dark-100`}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={400}
          height={250}
          className="w-full max-w-md mx-auto border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          This explains why you can't flatten a sphere (K &gt; 0) without tearing,
          but you can unroll a cylinder (K = 0).
        </p>
      </div>
    </Card>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <div className="prose prose-invert max-w-none">
        {/* Opening Quote */}
        <p className="text-xl text-dark-200 mb-6">
          Carl Friedrich Gauss, the "Prince of Mathematicians," stands alongside Archimedes
          and Newton as one of the three greatest mathematicians in history. His work
          transformed virtually every branch of mathematics and mathematical physics.
        </p>

        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-dark-300">
          "Mathematics is the queen of sciences, and number theory is the queen of mathematics."
          <footer className="text-dark-500 mt-2">— Carl Friedrich Gauss</footer>
        </blockquote>

        {/* Historical Context */}
        <h2>The Child Prodigy of Brunswick</h2>
        <p>
          Carl Friedrich Gauss (1777-1855) was born to poor parents in Brunswick, Germany.
          His father was a gardener and bricklayer who actively discouraged his son's
          intellectual pursuits. Yet Gauss's genius was so extraordinary that it attracted
          the attention and patronage of the Duke of Brunswick, who supported his education.
        </p>
        <p>
          The famous story has Gauss, at age 3, correcting an error in his father's payroll
          calculations. By age 10, he had independently discovered the formula for summing
          arithmetic series. When asked to add the numbers 1 through 100, young Gauss instantly
          produced the answer: 5050.
        </p>

        <Callout type="example" title="Gauss's Trick">
          <p>Pair the numbers: 1+100, 2+99, 3+98, ... Each pair sums to 101, and there are 50 pairs.</p>
          <MathBlock math="1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}" />
        </Callout>

        {/* The 17-gon */}
        <h2>The Regular 17-gon</h2>
        <p>
          On March 30, 1796, the 19-year-old Gauss made a discovery that determined his
          career: he proved that the regular 17-sided polygon can be constructed with
          compass and straightedge alone. This was the first new constructible polygon
          discovered since the ancient Greeks.
        </p>

        <Heptadecagon />

        <p>
          Gauss showed that a regular n-gon is constructible if and only if n is a product
          of a power of 2 and any number of distinct Fermat primes
          (<Math math="F_k = 2^{2^k} + 1" />). The known Fermat primes are 3, 5, 17, 257, and 65537.
        </p>

        <Callout type="note" title="Bell's Portrait">
          Bell portrays Gauss as an almost otherworldly genius, emphasizing his perfectionism
          and reluctance to publish. Gauss's motto was "few, but ripe" (pauca sed matura).
          He held back many discoveries, sometimes for decades, wanting each publication
          to be polished to perfection.
        </Callout>

        {/* Disquisitiones */}
        <h2>Disquisitiones Arithmeticae</h2>
        <p>
          In 1801, at age 24, Gauss published his masterwork <em>Disquisitiones Arithmeticae</em>,
          which transformed number theory from a collection of curious results into a
          systematic science. The book introduced modular arithmetic notation and proved
          the law of quadratic reciprocity.
        </p>

        <ModularArithmeticDemo />

        <p>
          Modular arithmetic is now fundamental to cryptography, computer science, and
          abstract algebra. Gauss's notation <Math math="a \equiv b \pmod{n}" /> is still used today.
        </p>

        {/* Quadratic Reciprocity */}
        <h2>The Golden Theorem</h2>
        <p>
          Gauss called quadratic reciprocity his "golden theorem" and gave multiple proofs
          of it throughout his life. It answers: when is a prime p a perfect square modulo
          another prime q?
        </p>

        <QuadraticReciprocity />

        <p>
          This seemingly simple question has profound implications. Generalizations of
          quadratic reciprocity led to class field theory and much of modern algebraic
          number theory.
        </p>

        {/* Ceres and Least Squares */}
        <h2>The Discovery of Ceres</h2>
        <p>
          On January 1, 1801, the astronomer Piazzi discovered a new celestial body—Ceres,
          the first known asteroid. But after just 41 days of observation, Ceres disappeared
          behind the Sun. Where would it reappear?
        </p>
        <p>
          Using his newly developed method of least squares, the 24-year-old Gauss predicted
          Ceres's position from the sparse data. On December 31, 1801, astronomers found
          Ceres exactly where Gauss had predicted. He became instantly famous throughout Europe.
        </p>

        <LeastSquaresDemo />

        {/* Gaussian Distribution */}
        <h2>The Bell Curve</h2>
        <p>
          The normal distribution, universally called the "Gaussian distribution," appears
          throughout statistics and natural science. Gauss developed it while analyzing
          measurement errors in astronomical observations.
        </p>

        <GaussianDistribution />

        <p>
          The Central Limit Theorem explains why the Gaussian appears so often: the sum
          of many independent random variables tends toward a normal distribution,
          regardless of the underlying distributions.
        </p>

        {/* Theorema Egregium */}
        <h2>The Remarkable Theorem</h2>
        <p>
          In differential geometry, Gauss proved his <em>Theorema Egregium</em> ("remarkable
          theorem"): the Gaussian curvature of a surface is an intrinsic property, depending
          only on measurements made on the surface itself.
        </p>

        <TheoremaEgregium />

        <Callout type="example" title="Why Pizza Curves">
          When you bend a pizza slice, it curves in one direction but stays straight in
          another. That's because flat surfaces have K = 0, and Gaussian curvature is
          preserved under bending. To change K would require stretching or tearing.
        </Callout>

        {/* Non-Euclidean Geometry */}
        <h2>The Secret Discovery</h2>
        <p>
          Gauss discovered non-Euclidean geometry decades before Lobachevsky and Bolyai
          published their work, but he never published his findings. He feared the "clamor
          of the Boeotians"—the controversy it would cause among those who believed
          Euclidean geometry to be the only possible geometry.
        </p>
        <p>
          When Bolyai's father, an old friend, sent Gauss his son's work on non-Euclidean
          geometry, Gauss replied that he could not praise it because "to praise it would
          be to praise myself"—he had discovered the same things decades earlier.
        </p>

        <Callout type="warning" title="A Controversial Legacy">
          Bell criticizes Gauss for this secrecy, arguing that it denied proper credit to
          Lobachevsky and Bolyai and delayed the development of mathematics. Gauss's
          perfectionism, while producing works of lasting value, also held back ideas
          that others could have built upon.
        </Callout>

        {/* Other Contributions */}
        <h2>Other Major Contributions</h2>
        <CardGrid columns={2}>
          <Card title="Fundamental Theorem of Algebra">
            <p className="text-dark-300">
              Gauss's doctoral thesis proved that every polynomial equation has at least
              one complex root. He gave four different proofs throughout his life.
            </p>
            <MathBlock math="a_n z^n + \cdots + a_1 z + a_0 = 0 \text{ has a solution in } \mathbb{C}" />
          </Card>
          <Card title="Gaussian Integers">
            <p className="text-dark-300">
              Extended number theory to complex integers <Math math="a + bi" /> where
              a and b are integers, developing unique factorization in this ring.
            </p>
            <MathBlock math="\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}" />
          </Card>
          <Card title="Magnetism">
            <p className="text-dark-300">
              With Wilhelm Weber, invented the first electromagnetic telegraph and made
              fundamental contributions to the theory of magnetism. The unit of magnetic
              flux density (gauss) is named after him.
            </p>
          </Card>
          <Card title="Geodesy">
            <p className="text-dark-300">
              Conducted the first large-scale scientific survey of the Earth's surface,
              developing new methods in differential geometry and error analysis along the way.
            </p>
          </Card>
        </CardGrid>

        {/* Key Formulas */}
        <h2>Key Formulas</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Gauss's Divergence Theorem">
            <MathBlock math="\iiint_V (\nabla \cdot \mathbf{F}) \, dV = \oiint_S \mathbf{F} \cdot d\mathbf{S}" />
          </Card>
          <Card title="Gaussian Curvature">
            <MathBlock math="K = \frac{LN - M^2}{EG - F^2}" />
          </Card>
          <Card title="Gauss-Bonnet Theorem">
            <MathBlock math="\int_S K \, dA + \int_{\partial S} \kappa_g \, ds = 2\pi\chi(S)" />
          </Card>
          <Card title="Quadratic Reciprocity">
            <MathBlock math="\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}" />
          </Card>
        </div>

        {/* Bell's Assessment */}
        <h2>Bell's Assessment</h2>
        <p>
          Bell ranks Gauss with Archimedes and Newton as the greatest mathematicians of
          all time. He admires Gauss's universal genius—mastery of pure mathematics,
          applied mathematics, astronomy, geodesy, and physics—but criticizes his
          secretiveness and perfectionism.
        </p>
        <p>
          Bell notes that had Gauss published all his discoveries, the development of
          mathematics would have been accelerated by decades. Yet the work he did publish
          set standards of rigor and depth that transformed mathematics into a modern science.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-dark-300">
          "Gauss, like Newton, was destined to change the whole course of mathematics...
          The princeps mathematicorum—the prince of mathematicians—is the title by which
          Gauss is known."
          <footer className="text-dark-500 mt-2">— E.T. Bell</footer>
        </blockquote>

        {/* Key Takeaways */}
        <Callout type="summary" title="Key Takeaways">
          <ul className="space-y-2">
            <li><strong>Number Theory:</strong> The Disquisitiones Arithmeticae established modern number theory, introducing modular arithmetic and proving quadratic reciprocity.</li>
            <li><strong>17-gon:</strong> Gauss proved which regular polygons are constructible, solving a problem open since antiquity.</li>
            <li><strong>Least Squares:</strong> Developed the method that became fundamental to statistics and data analysis.</li>
            <li><strong>Differential Geometry:</strong> The Theorema Egregium revealed that curvature is intrinsic to surfaces.</li>
            <li><strong>Universal Genius:</strong> Made fundamental contributions to virtually every branch of mathematics and mathematical physics.</li>
          </ul>
        </Callout>
      </div>
    </LessonLayout>
  );
}
