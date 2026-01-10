import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, InlineMath } from '@/components/common';

// =============================================================================
// INTERACTIVE VISUALIZATIONS
// =============================================================================

/**
 * Cauchy Sequence Visualization
 * Shows sequences converging (or not) with the Cauchy criterion
 */
function CauchySequenceDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sequenceType, setSequenceType] = useState<'convergent' | 'harmonic' | 'alternating' | 'divergent'>('convergent');
  const [numTerms, setNumTerms] = useState(20);

  const getSequence = (type: typeof sequenceType, n: number): number[] => {
    const seq: number[] = [];
    for (let i = 1; i <= n; i++) {
      if (type === 'convergent') {
        // 1/n converges to 0
        seq.push(1 / i);
      } else if (type === 'harmonic') {
        // Partial sums of harmonic series (diverges slowly)
        let sum = 0;
        for (let j = 1; j <= i; j++) sum += 1 / j;
        seq.push(sum / 3); // Scale for display
      } else if (type === 'alternating') {
        // (-1)^n / n converges
        seq.push(Math.pow(-1, i) / i);
      } else {
        // n/10 diverges
        seq.push(i / 10);
      }
    }
    return seq;
  };

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

    const seq = getSequence(sequenceType, numTerms);

    // Calculate bounds
    const minVal = Math.min(...seq, 0);
    const maxVal = Math.max(...seq, 1);
    const range = maxVal - minVal || 1;

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - 20, height - padding);
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(padding, 20);
    ctx.stroke();

    // Map to canvas coordinates
    const toX = (i: number) => padding + (i / numTerms) * (width - padding - 30);
    const toY = (v: number) => height - padding - ((v - minVal) / range) * (height - padding - 40);

    // Draw zero line if in range
    if (minVal < 0 && maxVal > 0) {
      ctx.strokeStyle = '#4b5563';
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(padding, toY(0));
      ctx.lineTo(width - 20, toY(0));
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw epsilon band for Cauchy criterion (if convergent)
    if (sequenceType === 'convergent' || sequenceType === 'alternating') {
      const limit = sequenceType === 'convergent' ? 0 : 0;
      const epsilon = 0.15;
      ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.fillRect(padding, toY(limit + epsilon), width - padding - 30, toY(limit - epsilon) - toY(limit + epsilon));

      ctx.fillStyle = '#10b981';
      ctx.font = '11px monospace';
      ctx.fillText('ε-band', width - 60, toY(limit));
    }

    // Draw sequence points and connecting line
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1;
    ctx.beginPath();
    seq.forEach((v, i) => {
      const x = toX(i + 1);
      const y = toY(v);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw points
    seq.forEach((v, i) => {
      const x = toX(i + 1);
      const y = toY(v);
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText('n', width - 30, height - padding + 5);
    ctx.fillText('aₙ', padding - 25, 30);

    // Show Cauchy status
    const isCauchy = sequenceType === 'convergent' || sequenceType === 'alternating';
    ctx.fillStyle = isCauchy ? '#10b981' : '#ef4444';
    ctx.font = '14px monospace';
    ctx.fillText(isCauchy ? '✓ Cauchy sequence' : '✗ Not Cauchy', 20, 25);

  }, [sequenceType, numTerms]);

  return (
    <Card title="Cauchy Sequences">
      <div className="space-y-4">
        <p className="text-dark-300">
          A sequence is <strong>Cauchy</strong> if its terms eventually get arbitrarily close
          to each other. Cauchy proved this is equivalent to convergence in the real numbers.
        </p>
        <MathBlock math="\forall \epsilon > 0, \exists N : m, n > N \Rightarrow |a_m - a_n| < \epsilon" />
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Sequence</label>
            <select
              value={sequenceType}
              onChange={(e) => setSequenceType(e.target.value as typeof sequenceType)}
              className="bg-dark-800 border border-dark-600 rounded px-3 py-1 text-dark-100"
            >
              <option value="convergent">1/n → 0</option>
              <option value="alternating">(-1)ⁿ/n → 0</option>
              <option value="harmonic">∑1/k (diverges)</option>
              <option value="divergent">n/10 (diverges)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Terms: {numTerms}</label>
            <input
              type="range"
              min="10"
              max="50"
              value={numTerms}
              onChange={(e) => setNumTerms(parseInt(e.target.value))}
              className="w-28"
            />
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={500}
          height={250}
          className="w-full border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Epsilon-Delta Continuity Visualization
 */
function EpsilonDeltaDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [x0, setX0] = useState(2);
  const [epsilon, setEpsilon] = useState(0.5);
  const [delta, setDelta] = useState(0.3);
  const [funcType, setFuncType] = useState<'continuous' | 'discontinuous'>('continuous');

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

    // Coordinate system
    const xMin = 0, xMax = 4;
    const yMin = 0, yMax = 4;

    const toCanvasX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (width - 2 * padding);
    const toCanvasY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(padding, padding);
    ctx.stroke();

    // Function
    const f = (x: number) => {
      if (funcType === 'continuous') {
        return x * x / 2 + 0.5;
      } else {
        // Discontinuous at x = 2
        return x < 2 ? x * x / 2 + 0.5 : x * x / 2 + 1;
      }
    };

    const y0 = f(x0);

    // Draw epsilon band (horizontal)
    ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
    ctx.fillRect(
      padding,
      toCanvasY(y0 + epsilon),
      width - 2 * padding,
      toCanvasY(y0 - epsilon) - toCanvasY(y0 + epsilon)
    );

    // Draw delta band (vertical)
    ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
    ctx.fillRect(
      toCanvasX(x0 - delta),
      padding,
      toCanvasX(x0 + delta) - toCanvasX(x0 - delta),
      height - 2 * padding
    );

    // Draw the function
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = xMin; x <= xMax; x += 0.02) {
      const y = f(x);
      const cx = toCanvasX(x);
      const cy = toCanvasY(y);
      if (x === xMin) ctx.moveTo(cx, cy);
      else {
        if (funcType === 'discontinuous' && Math.abs(x - 2) < 0.02) {
          ctx.moveTo(cx, cy);
        } else {
          ctx.lineTo(cx, cy);
        }
      }
    }
    ctx.stroke();

    // Draw discontinuity markers
    if (funcType === 'discontinuous') {
      ctx.fillStyle = '#0a0a0f';
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(toCanvasX(2), toCanvasY(f(1.99)), 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(toCanvasX(2), toCanvasY(f(2.01)), 5, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Draw point (x0, f(x0))
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(toCanvasX(x0), toCanvasY(y0), 6, 0, 2 * Math.PI);
    ctx.fill();

    // Draw dashed lines to point
    ctx.strokeStyle = '#10b981';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(toCanvasX(x0), height - padding);
    ctx.lineTo(toCanvasX(x0), toCanvasY(y0));
    ctx.lineTo(padding, toCanvasY(y0));
    ctx.stroke();
    ctx.setLineDash([]);

    // Labels
    ctx.fillStyle = '#f59e0b';
    ctx.font = '12px monospace';
    ctx.fillText(`δ = ${delta.toFixed(2)}`, toCanvasX(x0) - 20, height - padding + 25);

    ctx.fillStyle = '#3b82f6';
    ctx.fillText(`ε = ${epsilon.toFixed(2)}`, padding - 35, toCanvasY(y0));

    ctx.fillStyle = '#10b981';
    ctx.fillText(`x₀ = ${x0}`, toCanvasX(x0) + 10, toCanvasY(y0) - 10);

    // Check if delta works for this epsilon
    let works = true;
    for (let x = x0 - delta; x <= x0 + delta; x += 0.01) {
      if (x >= xMin && x <= xMax) {
        if (Math.abs(f(x) - y0) > epsilon) {
          works = false;
          break;
        }
      }
    }

    ctx.fillStyle = works ? '#10b981' : '#ef4444';
    ctx.font = '14px monospace';
    ctx.fillText(
      works ? '✓ |x - x₀| < δ ⟹ |f(x) - f(x₀)| < ε' : '✗ δ too large for this ε',
      20, 25
    );

  }, [x0, epsilon, delta, funcType]);

  return (
    <Card title="Epsilon-Delta Definition of Continuity">
      <div className="space-y-4">
        <p className="text-dark-300">
          Cauchy made the definition of continuity precise: f is continuous at x₀ if for
          every ε &gt; 0, there exists δ &gt; 0 such that |x - x₀| &lt; δ implies |f(x) - f(x₀)| &lt; ε.
        </p>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Function</label>
            <select
              value={funcType}
              onChange={(e) => setFuncType(e.target.value as typeof funcType)}
              className="bg-dark-800 border border-dark-600 rounded px-3 py-1 text-dark-100"
            >
              <option value="continuous">Continuous (x²/2)</option>
              <option value="discontinuous">Jump at x=2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">x₀: {x0.toFixed(1)}</label>
            <input
              type="range"
              min="0.5"
              max="3.5"
              step="0.1"
              value={x0}
              onChange={(e) => setX0(parseFloat(e.target.value))}
              className="w-24"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">ε: {epsilon.toFixed(2)}</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={epsilon}
              onChange={(e) => setEpsilon(parseFloat(e.target.value))}
              className="w-24"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">δ: {delta.toFixed(2)}</label>
            <input
              type="range"
              min="0.05"
              max="1"
              step="0.05"
              value={delta}
              onChange={(e) => setDelta(parseFloat(e.target.value))}
              className="w-24"
            />
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={500}
          height={300}
          className="w-full border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Cauchy's Integral Theorem Visualization
 */
function ContourIntegralDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [contourType, setContourType] = useState<'circle' | 'square' | 'path'>('circle');
  const [showArrows, setShowArrows] = useState(true);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;

    const animate = () => {
      timeRef.current += 0.02;

      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      // Draw coordinate axes
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();

      // Labels
      ctx.fillStyle = '#6b7280';
      ctx.font = '12px monospace';
      ctx.fillText('Re', width - 25, cy - 10);
      ctx.fillText('Im', cx + 10, 20);

      // Draw the contour
      const radius = 80;
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;

      if (contourType === 'circle') {
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
        ctx.stroke();
      } else if (contourType === 'square') {
        ctx.strokeRect(cx - radius, cy - radius, radius * 2, radius * 2);
      } else {
        // Custom path
        ctx.beginPath();
        ctx.moveTo(cx - radius, cy);
        ctx.lineTo(cx - radius * 0.5, cy - radius);
        ctx.lineTo(cx + radius * 0.5, cy - radius);
        ctx.lineTo(cx + radius, cy);
        ctx.lineTo(cx + radius * 0.5, cy + radius);
        ctx.lineTo(cx - radius * 0.5, cy + radius);
        ctx.closePath();
        ctx.stroke();
      }

      // Draw arrows showing direction
      if (showArrows) {
        const numArrows = 8;
        for (let i = 0; i < numArrows; i++) {
          const t = (i / numArrows + timeRef.current * 0.1) % 1;
          const angle = t * 2 * Math.PI;

          let x, y, dx, dy;

          if (contourType === 'circle') {
            x = cx + radius * Math.cos(angle);
            y = cy + radius * Math.sin(angle);
            dx = -Math.sin(angle);
            dy = Math.cos(angle);
          } else if (contourType === 'square') {
            const side = Math.floor(t * 4);
            const sideT = (t * 4) % 1;
            if (side === 0) {
              x = cx - radius + sideT * 2 * radius;
              y = cy - radius;
              dx = 1; dy = 0;
            } else if (side === 1) {
              x = cx + radius;
              y = cy - radius + sideT * 2 * radius;
              dx = 0; dy = 1;
            } else if (side === 2) {
              x = cx + radius - sideT * 2 * radius;
              y = cy + radius;
              dx = -1; dy = 0;
            } else {
              x = cx - radius;
              y = cy + radius - sideT * 2 * radius;
              dx = 0; dy = -1;
            }
          } else {
            // Hexagon path
            const side = Math.floor(t * 6);
            x = cx + radius * Math.cos(angle);
            y = cy + radius * Math.sin(angle);
            dx = -Math.sin(angle);
            dy = Math.cos(angle);
          }

          // Draw arrow
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.moveTo(x + dx * 10, y + dy * 10);
          ctx.lineTo(x - dx * 5 - dy * 5, y - dy * 5 + dx * 5);
          ctx.lineTo(x - dx * 5 + dy * 5, y - dy * 5 - dx * 5);
          ctx.closePath();
          ctx.fill();
        }
      }

      // Mark that f is analytic inside (no singularities)
      ctx.fillStyle = '#10b981';
      ctx.font = '14px monospace';
      ctx.fillText('f analytic inside', cx - 50, cy - 10);
      ctx.fillText('∮ f(z) dz = 0', cx - 40, cy + 15);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, [contourType, showArrows]);

  return (
    <Card title="Cauchy's Integral Theorem">
      <div className="space-y-4">
        <p className="text-dark-300">
          If f(z) is analytic (complex differentiable) inside and on a closed contour C,
          then the integral around C is zero:
        </p>
        <MathBlock math="\oint_C f(z) \, dz = 0" />
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Contour Shape</label>
            <select
              value={contourType}
              onChange={(e) => setContourType(e.target.value as typeof contourType)}
              className="bg-dark-800 border border-dark-600 rounded px-3 py-1 text-dark-100"
            >
              <option value="circle">Circle</option>
              <option value="square">Square</option>
              <option value="path">Hexagon</option>
            </select>
          </div>
          <label className="flex items-center gap-2 text-dark-300">
            <input
              type="checkbox"
              checked={showArrows}
              onChange={(e) => setShowArrows(e.target.checked)}
              className="rounded"
            />
            Show direction arrows
          </label>
        </div>
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="w-full max-w-md mx-auto border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          The shape of the contour doesn't matter—only that f is analytic inside!
        </p>
      </div>
    </Card>
  );
}

/**
 * Cauchy's Integral Formula Visualization
 */
function CauchyIntegralFormula() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [z0Real, setZ0Real] = useState(0.3);
  const [z0Imag, setZ0Imag] = useState(0.2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const scale = 100;

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

    // Draw unit circle contour
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, scale, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw point z0
    const z0x = cx + z0Real * scale;
    const z0y = cy - z0Imag * scale;

    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(z0x, z0y, 8, 0, 2 * Math.PI);
    ctx.fill();

    // Label
    ctx.fillStyle = '#ef4444';
    ctx.font = '14px monospace';
    ctx.fillText(`z₀ = ${z0Real.toFixed(1)} + ${z0Imag.toFixed(1)}i`, z0x + 12, z0y - 5);

    // Draw lines from z0 to contour points
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)';
    ctx.lineWidth = 1;
    for (let angle = 0; angle < 2 * Math.PI; angle += Math.PI / 12) {
      const x = cx + scale * Math.cos(angle);
      const y = cy - scale * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(z0x, z0y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Show the formula result
    // For f(z) = z², f(z₀) = z₀²
    const z0 = { re: z0Real, im: z0Imag };
    const fz0 = {
      re: z0.re * z0.re - z0.im * z0.im,
      im: 2 * z0.re * z0.im
    };

    ctx.fillStyle = '#10b981';
    ctx.font = '12px monospace';
    ctx.fillText(`f(z) = z²`, 20, 25);
    ctx.fillText(`f(z₀) = ${fz0.re.toFixed(2)} + ${fz0.im.toFixed(2)}i`, 20, 45);

    // Labels
    ctx.fillStyle = '#6b7280';
    ctx.fillText('Re', width - 25, cy - 10);
    ctx.fillText('Im', cx + 10, 20);
    ctx.fillText('C', cx + scale + 10, cy);

  }, [z0Real, z0Imag]);

  return (
    <Card title="Cauchy's Integral Formula">
      <div className="space-y-4">
        <p className="text-dark-300">
          Cauchy discovered that if f is analytic inside C and z₀ is inside C,
          then f(z₀) can be computed from values on the boundary:
        </p>
        <MathBlock math="f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} \, dz" />
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Re(z₀): {z0Real.toFixed(1)}</label>
            <input
              type="range"
              min="-0.8"
              max="0.8"
              step="0.1"
              value={z0Real}
              onChange={(e) => setZ0Real(parseFloat(e.target.value))}
              className="w-28"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Im(z₀): {z0Imag.toFixed(1)}</label>
            <input
              type="range"
              min="-0.8"
              max="0.8"
              step="0.1"
              value={z0Imag}
              onChange={(e) => setZ0Imag(parseFloat(e.target.value))}
              className="w-28"
            />
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="w-full max-w-md mx-auto border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          The value of f at any interior point is determined by its values on the boundary!
        </p>
      </div>
    </Card>
  );
}

/**
 * Productivity Timeline
 * Cauchy's 789 papers
 */
function ProductivityTimeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Approximate papers per decade
  const papersPerDecade = [
    { decade: '1810s', count: 50 },
    { decade: '1820s', count: 150 },
    { decade: '1830s', count: 180 },
    { decade: '1840s', count: 250 },
    { decade: '1850s', count: 159 },
  ];

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

    const maxCount = Math.max(...papersPerDecade.map(p => p.count));
    const barWidth = (width - padding - 40) / papersPerDecade.length - 10;

    papersPerDecade.forEach((item, i) => {
      const x = padding + 20 + i * (barWidth + 10);
      const barHeight = (item.count / maxCount) * (height - padding - 50);
      const y = height - padding - barHeight;

      // Bar
      const gradient = ctx.createLinearGradient(x, y, x, height - padding);
      gradient.addColorStop(0, '#3b82f6');
      gradient.addColorStop(1, '#1d4ed8');
      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);

      // Count label
      ctx.fillStyle = '#e5e7eb';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(item.count.toString(), x + barWidth / 2, y - 8);

      // Decade label
      ctx.fillStyle = '#9ca3af';
      ctx.fillText(item.decade, x + barWidth / 2, height - padding + 18);
    });

    // Y-axis labels
    ctx.fillStyle = '#6b7280';
    ctx.textAlign = 'right';
    ctx.fillText('Papers', padding - 5, 30);
    ctx.fillText('250', padding - 8, 50);
    ctx.fillText('0', padding - 8, height - padding);

    // Title
    ctx.fillStyle = '#f59e0b';
    ctx.font = '14px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Total: 789 papers', width / 2, 20);

  }, []);

  return (
    <Card title="Cauchy's Productivity">
      <div className="space-y-4">
        <p className="text-dark-300">
          Cauchy published 789 papers—second only to Euler in mathematical output.
          His work fills 27 volumes. The Paris Academy had to limit the length of
          papers that could be published because of Cauchy's prolific submissions.
        </p>
        <canvas
          ref={canvasRef}
          width={450}
          height={250}
          className="w-full border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          His output was so vast that a special journal, the <em>Comptes Rendus</em>,
          was created partly to accommodate his submissions.
        </p>
      </div>
    </Card>
  );
}

/**
 * Intermediate Value Theorem
 */
function IntermediateValueDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [targetY, setTargetY] = useState(1.5);

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

    // Function: f(x) = x³ - x + 1
    const f = (x: number) => x * x * x - x + 1;
    const xMin = -1.5, xMax = 1.5;
    const yMin = -0.5, yMax = 3;

    const toX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (width - 2 * padding);
    const toY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.moveTo(toX(0), padding);
    ctx.lineTo(toX(0), height - padding);
    ctx.stroke();

    // Draw function
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = xMin; x <= xMax; x += 0.02) {
      const y = f(x);
      if (x === xMin) ctx.moveTo(toX(x), toY(y));
      else ctx.lineTo(toX(x), toY(y));
    }
    ctx.stroke();

    // Mark endpoints
    const a = -1, b = 1;
    const fa = f(a), fb = f(b);

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(toX(a), toY(fa), 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(toX(b), toY(fb), 6, 0, 2 * Math.PI);
    ctx.fill();

    // Draw horizontal line for target
    ctx.strokeStyle = '#f59e0b';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(padding, toY(targetY));
    ctx.lineTo(width - padding, toY(targetY));
    ctx.stroke();
    ctx.setLineDash([]);

    // Find intersection (binary search)
    let lo = a, hi = b;
    for (let i = 0; i < 50; i++) {
      const mid = (lo + hi) / 2;
      if (f(mid) < targetY) lo = mid;
      else hi = mid;
    }
    const c = (lo + hi) / 2;

    // Draw vertical line at c
    ctx.strokeStyle = '#ef4444';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(toX(c), height - padding);
    ctx.lineTo(toX(c), toY(targetY));
    ctx.stroke();
    ctx.setLineDash([]);

    // Mark point c
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(toX(c), toY(targetY), 6, 0, 2 * Math.PI);
    ctx.fill();

    // Labels
    ctx.fillStyle = '#10b981';
    ctx.font = '12px monospace';
    ctx.fillText(`f(a) = ${fa.toFixed(2)}`, toX(a) - 40, toY(fa) - 10);
    ctx.fillText(`f(b) = ${fb.toFixed(2)}`, toX(b) + 5, toY(fb) - 10);

    ctx.fillStyle = '#f59e0b';
    ctx.fillText(`y = ${targetY.toFixed(2)}`, width - padding - 50, toY(targetY) - 8);

    ctx.fillStyle = '#ef4444';
    ctx.fillText(`c ≈ ${c.toFixed(3)}`, toX(c) + 5, height - padding + 18);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.fillText('f(x) = x³ - x + 1', 60, 25);

  }, [targetY]);

  return (
    <Card title="Intermediate Value Theorem">
      <div className="space-y-4">
        <p className="text-dark-300">
          Cauchy gave the first rigorous proof: if f is continuous on [a,b] and y is
          between f(a) and f(b), there exists c in [a,b] with f(c) = y.
        </p>
        <MathBlock math="f(a) < y < f(b) \Rightarrow \exists c \in (a,b) : f(c) = y" />
        <div>
          <label className="block text-sm text-dark-400 mb-1">Target y: {targetY.toFixed(2)}</label>
          <input
            type="range"
            min="0.5"
            max="2.5"
            step="0.05"
            value={targetY}
            onChange={(e) => setTargetY(parseFloat(e.target.value))}
            className="w-48"
          />
        </div>
        <canvas
          ref={canvasRef}
          width={450}
          height={280}
          className="w-full border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <div className="prose prose-invert max-w-none">
        {/* Opening Quote */}
        <p className="text-xl text-dark-200 mb-6">
          Augustin-Louis Cauchy was the architect of mathematical rigor. He transformed
          calculus from an intuitive art into a precise science, founding modern analysis
          and complex function theory while producing nearly 800 papers.
        </p>

        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-dark-300">
          "Men pass away, but their deeds abide."
          <footer className="text-dark-500 mt-2">— Augustin-Louis Cauchy (his last words)</footer>
        </blockquote>

        {/* Historical Context */}
        <h2>The Great Rigorist</h2>
        <p>
          Augustin-Louis Cauchy (1789-1857) was born in Paris during the French Revolution.
          His father, a royalist official, kept the family in hiding during the Terror.
          As a young man, Cauchy met both Lagrange and Laplace, who recognized his talent
          and encouraged his mathematical studies.
        </p>
        <p>
          Cauchy became the great systematizer of analysis. Before him, calculus rested on
          vague notions of "infinitely small quantities" and "approaching limits." Cauchy
          replaced these with precise definitions using inequalities—the ε-δ formalism
          that every analysis student learns today.
        </p>

        <Callout type="note" title="Bell's Portrait">
          Bell portrays Cauchy as brilliant but difficult—a man whose political and
          religious convictions made him many enemies. A devout Catholic and staunch
          royalist, Cauchy refused to take oaths of allegiance to successive French
          governments, spending years in exile as a result.
        </Callout>

        {/* Rigor in Analysis */}
        <h2>Making Calculus Rigorous</h2>
        <p>
          Cauchy's <em>Cours d'analyse</em> (1821) revolutionized mathematics by providing
          rigorous definitions for limits, continuity, derivatives, and integrals. The
          vague infinitesimals of Leibniz and Newton were replaced by precise inequalities.
        </p>

        <EpsilonDeltaDemo />

        <p>
          This definition may seem pedantic, but it is essential. It allows us to prove
          theorems about continuous functions rather than merely trusting our intuition.
        </p>

        {/* Cauchy Sequences */}
        <h2>Cauchy Sequences and Completeness</h2>
        <p>
          Cauchy introduced the concept of a convergent sequence without needing to know
          the limit in advance. A sequence is <strong>Cauchy</strong> if its terms get
          arbitrarily close to each other:
        </p>

        <CauchySequenceDemo />

        <p>
          The <strong>completeness</strong> of the real numbers means that every Cauchy
          sequence converges to a real number. This property distinguishes the reals from
          the rationals (where <InlineMath math="\sqrt{2}" /> would be a "missing" limit).
        </p>

        {/* Intermediate Value Theorem */}
        <h2>The Intermediate Value Theorem</h2>
        <p>
          Cauchy provided the first rigorous proof that continuous functions achieve all
          intermediate values. While intuitively obvious, this requires careful proof.
        </p>

        <IntermediateValueDemo />

        {/* Complex Analysis */}
        <h2>Complex Analysis: Cauchy's Greatest Legacy</h2>
        <p>
          Cauchy essentially created complex analysis single-handedly. His integral theorem
          and integral formula are among the most powerful results in all of mathematics.
        </p>

        <ContourIntegralDemo />

        <p>
          The remarkable fact is that the integral of an analytic function around any
          closed contour is zero (provided there are no singularities inside). This leads
          to the powerful residue calculus for computing real integrals.
        </p>

        <CauchyIntegralFormula />

        <Callout type="example" title="The Power of Complex Analysis">
          Using Cauchy's techniques, we can compute difficult real integrals like:
          <MathBlock math="\int_{-\infty}^{\infty} \frac{\sin x}{x} \, dx = \pi" />
          by converting to a contour integral in the complex plane. Real analysis alone
          cannot easily handle such integrals.
        </Callout>

        {/* Productivity */}
        <h2>789 Papers</h2>
        <p>
          Cauchy's output was staggering—789 papers, second only to Euler in mathematical
          history. His collected works fill 27 volumes. The French Academy had to create
          new rules limiting paper length because of his prolific submissions.
        </p>

        <ProductivityTimeline />

        {/* Major Contributions */}
        <h2>Major Contributions</h2>
        <CardGrid columns={2}>
          <Card title="Cauchy-Riemann Equations">
            <p className="text-dark-300 mb-2">
              Conditions for a function to be complex differentiable:
            </p>
            <MathBlock math="\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}" />
          </Card>
          <Card title="Cauchy's Theorem (Group Theory)">
            <p className="text-dark-300">
              If p is prime and divides the order of a finite group G, then G contains
              an element of order p.
            </p>
          </Card>
          <Card title="Cauchy-Schwarz Inequality">
            <MathBlock math="|{\langle u, v \rangle}|^2 \leq \langle u, u \rangle \cdot \langle v, v \rangle" />
            <p className="text-dark-300">
              Fundamental in linear algebra, functional analysis, and probability.
            </p>
          </Card>
          <Card title="Stress Tensor">
            <p className="text-dark-300">
              Cauchy introduced the stress tensor in mechanics, describing internal
              forces in continuous media—essential for engineering and physics.
            </p>
          </Card>
        </CardGrid>

        {/* Political and Religious Life */}
        <h2>A Difficult Personality</h2>
        <p>
          Cauchy's brilliant mathematics was matched by a stubborn personality. A devout
          Catholic and ultra-royalist, he refused to swear allegiance to Louis-Philippe
          after the 1830 Revolution, losing his positions and going into exile.
        </p>
        <p>
          He was notorious for his treatment of younger mathematicians. Cauchy lost
          Abel's groundbreaking paper on elliptic functions and failed to properly
          evaluate Galois's work. Both men died young, their genius unrecognized by
          the establishment that Cauchy represented.
        </p>

        <Callout type="warning" title="Abel and Galois">
          Bell sharply criticizes Cauchy for his role in the tragedies of Abel and Galois.
          Abel's paper was "lost" in Cauchy's possession for years, and Galois's revolutionary
          work on group theory was returned with minimal comment. Both died before their
          discoveries were recognized.
        </Callout>

        {/* Key Definitions */}
        <h2>Cauchy's Rigorous Definitions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Limit">
            <MathBlock math="\lim_{x \to a} f(x) = L" />
            <p className="text-dark-300">
              For all ε &gt; 0, there exists δ &gt; 0 such that
              0 &lt; |x - a| &lt; δ implies |f(x) - L| &lt; ε.
            </p>
          </Card>
          <Card title="Continuity">
            <p className="text-dark-300">
              f is continuous at a if for all ε &gt; 0, there exists δ &gt; 0 such that
              |x - a| &lt; δ implies |f(x) - f(a)| &lt; ε.
            </p>
          </Card>
          <Card title="Derivative">
            <MathBlock math="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />
            <p className="text-dark-300">
              The limit must exist in the rigorous ε-δ sense.
            </p>
          </Card>
          <Card title="Integral">
            <p className="text-dark-300">
              Cauchy defined the integral as the limit of Riemann sums, making the
              fundamental theorem of calculus a theorem rather than a tautology.
            </p>
          </Card>
        </div>

        {/* Bell's Assessment */}
        <h2>Bell's Assessment</h2>
        <p>
          Bell acknowledges Cauchy as one of the most prolific and influential mathematicians
          in history, but criticizes his personality and his treatment of Abel and Galois.
          Bell sees Cauchy as representing the establishment that failed to recognize
          revolutionary genius.
        </p>
        <p>
          Yet there is no denying Cauchy's mathematical legacy. His rigorization of
          analysis and his creation of complex function theory fundamentally shaped
          modern mathematics. Every student who learns ε-δ proofs is learning Cauchy's
          approach to mathematics.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-dark-300">
          "Cauchy was a prolific mathematician... His contributions to analysis, in
          which he introduced our modern standards of rigor, entitle him to a high
          place among the masters."
          <footer className="text-dark-500 mt-2">— E.T. Bell</footer>
        </blockquote>

        {/* Key Takeaways */}
        <Callout type="summary" title="Key Takeaways">
          <ul className="space-y-2">
            <li><strong>Rigor in Analysis:</strong> Cauchy replaced vague infinitesimals with precise ε-δ definitions, creating modern analysis.</li>
            <li><strong>Cauchy Sequences:</strong> A sequence is Cauchy if its terms get arbitrarily close—equivalent to convergence in complete spaces.</li>
            <li><strong>Complex Analysis:</strong> Cauchy's integral theorem and formula are foundational, enabling powerful computational techniques.</li>
            <li><strong>789 Papers:</strong> His output was second only to Euler, filling 27 volumes of collected works.</li>
            <li><strong>Lasting Impact:</strong> The ε-δ approach he pioneered remains the standard for rigorous mathematics.</li>
          </ul>
        </Callout>
      </div>
    </LessonLayout>
  );
}
