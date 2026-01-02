import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, InlineMath } from '@/components/common';

// =============================================================================
// INTERACTIVE VISUALIZATIONS
// =============================================================================

/**
 * Jacobian Matrix Visualization
 * Shows how the Jacobian describes local coordinate transformations
 */
function JacobianDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [transformType, setTransformType] = useState<'polar' | 'shear' | 'rotate'>('polar');
  const [param, setParam] = useState(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const scale = 40;

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

    // Transform function based on type
    const transform = (x: number, y: number): { u: number; v: number } => {
      if (transformType === 'polar') {
        // Polar coordinates: (r, θ) -> (r cos θ, r sin θ)
        const r = x;
        const theta = y * param * 2;
        return { u: r * Math.cos(theta), v: r * Math.sin(theta) };
      } else if (transformType === 'shear') {
        // Shear: (x, y) -> (x + ky, y)
        return { u: x + param * 2 * y, v: y };
      } else {
        // Rotation
        const angle = param * Math.PI;
        return {
          u: x * Math.cos(angle) - y * Math.sin(angle),
          v: x * Math.sin(angle) + y * Math.cos(angle),
        };
      }
    };

    // Draw grid before transformation (faint)
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
    ctx.lineWidth = 1;
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath();
      ctx.moveTo(cx + i * scale, cy - 3 * scale);
      ctx.lineTo(cx + i * scale, cy + 3 * scale);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - 3 * scale, cy + i * scale);
      ctx.lineTo(cx + 3 * scale, cy + i * scale);
      ctx.stroke();
    }

    // Draw transformed grid
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1.5;

    // Vertical lines transformed
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath();
      for (let j = -30; j <= 30; j++) {
        const x = i;
        const y = j / 10;
        const { u, v } = transform(x, y);
        const px = cx + u * scale;
        const py = cy - v * scale;
        if (j === -30) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Horizontal lines transformed
    for (let j = -3; j <= 3; j++) {
      ctx.beginPath();
      for (let i = -30; i <= 30; i++) {
        const x = i / 10;
        const y = j;
        const { u, v } = transform(x, y);
        const px = cx + u * scale;
        const py = cy - v * scale;
        if (i === -30) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Draw a small square and its image to show Jacobian effect
    const baseX = 1.5, baseY = 1;
    const size = 0.5;
    const corners = [
      [baseX, baseY],
      [baseX + size, baseY],
      [baseX + size, baseY + size],
      [baseX, baseY + size],
    ];

    // Original square
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    corners.forEach((c, i) => {
      const px = cx + c[0] * scale;
      const py = cy - c[1] * scale;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.stroke();

    // Transformed parallelogram
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    corners.forEach((c, i) => {
      const { u, v } = transform(c[0], c[1]);
      const px = cx + u * scale;
      const py = cy - v * scale;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.fillText('Original grid (blue) → Transformed (green)', 10, 20);
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('■ Original', 10, height - 25);
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('■ Transformed', 80, height - 25);

  }, [transformType, param]);

  return (
    <Card title="The Jacobian Matrix">
      <div className="space-y-4">
        <p className="text-dark-300">
          The Jacobian matrix describes how a transformation stretches, rotates, and
          distorts space locally. Its determinant gives the local area scaling factor.
        </p>
        <MathBlock math="J = \begin{pmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{pmatrix}" />
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Transform</label>
            <select
              value={transformType}
              onChange={(e) => setTransformType(e.target.value as typeof transformType)}
              className="bg-dark-800 border border-dark-600 rounded px-3 py-1 text-dark-100"
            >
              <option value="polar">Polar-like</option>
              <option value="shear">Shear</option>
              <option value="rotate">Rotation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Parameter: {param.toFixed(2)}</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={param}
              onChange={(e) => setParam(parseFloat(e.target.value))}
              className="w-32"
            />
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={450}
          height={300}
          className="w-full border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Jacobi Theta Functions Visualization
 */
function ThetaFunctionDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [q, setQ] = useState(0.3);
  const [thetaType, setThetaType] = useState<1 | 2 | 3 | 4>(3);

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

    // Compute theta function
    const theta = (z: number, type: number): number => {
      let sum = 0;
      for (let n = -20; n <= 20; n++) {
        const qPower = Math.pow(q, n * n);
        if (type === 1) {
          // θ₁(z,q) = 2 Σ (-1)^n q^((n+1/2)²) sin((2n+1)z)
          sum += Math.pow(-1, n) * Math.pow(q, (n + 0.5) * (n + 0.5)) * Math.sin((2 * n + 1) * z);
        } else if (type === 2) {
          // θ₂(z,q) = 2 Σ q^((n+1/2)²) cos((2n+1)z)
          sum += Math.pow(q, (n + 0.5) * (n + 0.5)) * Math.cos((2 * n + 1) * z);
        } else if (type === 3) {
          // θ₃(z,q) = 1 + 2 Σ q^(n²) cos(2nz)
          if (n > 0) sum += 2 * qPower * Math.cos(2 * n * z);
        } else {
          // θ₄(z,q) = 1 + 2 Σ (-1)^n q^(n²) cos(2nz)
          if (n > 0) sum += 2 * Math.pow(-1, n) * qPower * Math.cos(2 * n * z);
        }
      }
      if (type === 1) return 2 * sum;
      if (type === 2) return 2 * sum;
      return 1 + sum;
    };

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, height / 2);
    ctx.lineTo(width - 20, height / 2);
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.stroke();

    // Find range
    const zMax = 2 * Math.PI;
    let yMin = Infinity, yMax = -Infinity;
    for (let z = 0; z <= zMax; z += 0.1) {
      const y = theta(z, thetaType);
      yMin = Math.min(yMin, y);
      yMax = Math.max(yMax, y);
    }
    const yRange = yMax - yMin || 1;
    yMin -= yRange * 0.1;
    yMax += yRange * 0.1;

    const toX = (z: number) => padding + (z / zMax) * (width - padding - 30);
    const toY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);

    // Draw theta function
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let z = 0; z <= zMax; z += 0.02) {
      const y = theta(z, thetaType);
      if (z === 0) ctx.moveTo(toX(z), toY(y));
      else ctx.lineTo(toX(z), toY(y));
    }
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText('z', width - 25, height / 2 - 10);
    ctx.fillText(`θ${thetaType}(z, q)`, padding + 10, padding + 20);
    ctx.fillText(`q = ${q.toFixed(2)}`, width - 80, 25);

    // X-axis labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '10px monospace';
    ctx.fillText('0', padding - 5, height / 2 + 15);
    ctx.fillText('π', toX(Math.PI) - 5, height / 2 + 15);
    ctx.fillText('2π', toX(2 * Math.PI) - 10, height / 2 + 15);

  }, [q, thetaType]);

  return (
    <Card title="Jacobi Theta Functions">
      <div className="space-y-4">
        <p className="text-dark-300">
          Jacobi's theta functions are fundamental in number theory, physics, and the
          theory of elliptic functions. They encode deep arithmetic information.
        </p>
        <MathBlock math="\theta_3(z, q) = 1 + 2\sum_{n=1}^{\infty} q^{n^2} \cos(2nz)" />
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Theta Function</label>
            <select
              value={thetaType}
              onChange={(e) => setThetaType(parseInt(e.target.value) as 1 | 2 | 3 | 4)}
              className="bg-dark-800 border border-dark-600 rounded px-3 py-1 text-dark-100"
            >
              <option value={1}>θ₁ (odd)</option>
              <option value={2}>θ₂</option>
              <option value={3}>θ₃</option>
              <option value={4}>θ₄</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">q (nome): {q.toFixed(2)}</label>
            <input
              type="range"
              min="0.1"
              max="0.9"
              step="0.05"
              value={q}
              onChange={(e) => setQ(parseFloat(e.target.value))}
              className="w-32"
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
 * Four Squares Theorem
 * Every positive integer is a sum of four squares
 */
function FourSquaresDemo() {
  const [n, setN] = useState(42);

  // Find a representation as sum of four squares
  const findFourSquares = (num: number): number[] => {
    for (let a = 0; a * a <= num; a++) {
      for (let b = a; a * a + b * b <= num; b++) {
        for (let c = b; a * a + b * b + c * c <= num; c++) {
          const remainder = num - a * a - b * b - c * c;
          const d = Math.floor(Math.sqrt(remainder));
          if (d * d === remainder && d >= c) {
            return [a, b, c, d];
          }
        }
      }
    }
    return [0, 0, 0, 0];
  };

  const squares = findFourSquares(n);

  // Count number of representations (for display)
  const countRepresentations = (num: number): number => {
    let count = 0;
    for (let a = 0; a * a <= num; a++) {
      for (let b = 0; a * a + b * b <= num; b++) {
        for (let c = 0; a * a + b * b + c * c <= num; c++) {
          const remainder = num - a * a - b * b - c * c;
          const d = Math.sqrt(remainder);
          if (Number.isInteger(d)) count++;
        }
      }
    }
    return count;
  };

  return (
    <Card title="Lagrange's Four Squares Theorem">
      <div className="space-y-4">
        <p className="text-dark-300">
          Every positive integer can be expressed as the sum of four squares. Jacobi
          found an exact formula for the number of ways to do this.
        </p>
        <MathBlock math="r_4(n) = 8 \sum_{d|n, 4 \nmid d} d" />
        <div>
          <label className="block text-sm text-dark-400 mb-1">Number n: {n}</label>
          <input
            type="range"
            min="1"
            max="100"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            className="w-48"
          />
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <div className="text-xl text-center mb-4">
            <span className="text-amber-400">{n}</span>
            <span className="text-dark-400"> = </span>
            {squares.map((s, i) => (
              <span key={i}>
                <span className="text-blue-400">{s}</span>
                <sup>2</sup>
                {i < 3 && <span className="text-dark-400"> + </span>}
              </span>
            ))}
          </div>
          <div className="text-center text-dark-400">
            = {squares.map(s => s * s).join(' + ')} = {squares.reduce((sum, s) => sum + s * s, 0)}
          </div>
          <div className="text-center text-dark-500 mt-2 text-sm">
            Total representations: {countRepresentations(n)}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {squares.map((s, i) => (
            <div key={i} className="bg-dark-700 p-2 rounded text-center">
              <div className="text-2xl text-blue-400">{s}²</div>
              <div className="text-dark-400 text-sm">= {s * s}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/**
 * Double Periodicity of Elliptic Functions
 */
function DoublePeriodDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showPeriods, setShowPeriods] = useState(true);

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

    // Periods
    const omega1 = { x: 80, y: 0 };
    const omega2 = { x: 30, y: -70 };

    // Draw parallelogram lattice
    if (showPeriods) {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 1;

      for (let m = -3; m <= 3; m++) {
        for (let n = -3; n <= 3; n++) {
          const baseX = cx + m * omega1.x + n * omega2.x;
          const baseY = cy + m * omega1.y + n * omega2.y;

          // Draw parallelogram
          ctx.beginPath();
          ctx.moveTo(baseX, baseY);
          ctx.lineTo(baseX + omega1.x, baseY + omega1.y);
          ctx.lineTo(baseX + omega1.x + omega2.x, baseY + omega1.y + omega2.y);
          ctx.lineTo(baseX + omega2.x, baseY + omega2.y);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }

    // Highlight fundamental domain
    ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + omega1.x, cy + omega1.y);
    ctx.lineTo(cx + omega1.x + omega2.x, cy + omega1.y + omega2.y);
    ctx.lineTo(cx + omega2.x, cy + omega2.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw period vectors
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + omega1.x, cy + omega1.y);
    ctx.stroke();

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + omega2.x, cy + omega2.y);
    ctx.stroke();

    // Arrow heads
    const drawArrow = (x1: number, y1: number, x2: number, y2: number, color: string) => {
      const angle = Math.atan2(y2 - y1, x2 - x1);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - 10 * Math.cos(angle - 0.3), y2 - 10 * Math.sin(angle - 0.3));
      ctx.lineTo(x2 - 10 * Math.cos(angle + 0.3), y2 - 10 * Math.sin(angle + 0.3));
      ctx.closePath();
      ctx.fill();
    };

    drawArrow(cx, cy, cx + omega1.x, cy + omega1.y, '#ef4444');
    drawArrow(cx, cy, cx + omega2.x, cy + omega2.y, '#f59e0b');

    // Labels
    ctx.fillStyle = '#ef4444';
    ctx.font = '14px monospace';
    ctx.fillText('ω₁', cx + omega1.x + 5, cy + omega1.y + 15);
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('ω₂', cx + omega2.x - 20, cy + omega2.y - 5);

    ctx.fillStyle = '#10b981';
    ctx.fillText('Fundamental Domain', cx + 5, cy + 30);

    // Origin
    ctx.fillStyle = '#e5e7eb';
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText('0', cx - 15, cy + 5);

    // Equivalent points
    ctx.fillStyle = '#8b5cf6';
    const equivPoints = [
      [1, 0], [0, 1], [1, 1], [-1, 0], [0, -1], [2, 0], [1, -1]
    ];
    equivPoints.forEach(([m, n]) => {
      const x = cx + m * omega1.x + n * omega2.x;
      const y = cy + m * omega1.y + n * omega2.y;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });

    ctx.fillStyle = '#6b7280';
    ctx.font = '11px monospace';
    ctx.fillText('Purple dots: equivalent points (same function value)', 10, height - 10);

  }, [showPeriods]);

  return (
    <Card title="Double Periodicity">
      <div className="space-y-4">
        <p className="text-dark-300">
          Unlike trigonometric functions with one period, elliptic functions have
          two independent periods ω₁ and ω₂, forming a lattice in the complex plane.
        </p>
        <MathBlock math="f(z + \omega_1) = f(z) = f(z + \omega_2)" />
        <label className="flex items-center gap-2 text-dark-300">
          <input
            type="checkbox"
            checked={showPeriods}
            onChange={(e) => setShowPeriods(e.target.checked)}
            className="rounded"
          />
          Show period lattice
        </label>
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="w-full max-w-md mx-auto border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          The function is completely determined by its values on the fundamental domain.
        </p>
      </div>
    </Card>
  );
}

/**
 * Jacobi's Elliptic Functions sn, cn, dn
 */
function EllipticFunctionsDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [k, setK] = useState(0.8);

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
    ctx.moveTo(padding, height / 2);
    ctx.lineTo(width - 20, height / 2);
    ctx.moveTo(padding, 20);
    ctx.lineTo(padding, height - 20);
    ctx.stroke();

    // Compute elliptic functions numerically via series
    const K = (k: number): number => {
      // Complete elliptic integral approximation
      let sum = 0;
      const n = 50;
      for (let i = 0; i < n; i++) {
        const phi = (i + 0.5) * Math.PI / (2 * n);
        sum += 1 / Math.sqrt(1 - k * k * Math.sin(phi) * Math.sin(phi));
      }
      return sum * Math.PI / (2 * n);
    };

    const period = 4 * K(k);
    const uMax = 2 * period;

    // Approximate sn, cn, dn using pendulum solution
    const sn = (u: number): number => {
      // Use series approximation
      let sum = 0;
      for (let n = 0; n < 20; n++) {
        const q = Math.exp(-Math.PI * K(Math.sqrt(1 - k * k)) / K(k));
        const qn = Math.pow(q, n + 0.5);
        sum += qn / (1 - Math.pow(q, 2 * n + 1)) * Math.sin((2 * n + 1) * Math.PI * u / (2 * K(k)));
      }
      return 2 * Math.PI / (K(k) * Math.sqrt(k)) * sum;
    };

    // Simplified: use sin for small k, modified for larger k
    const approxSn = (u: number): number => Math.sin(u * Math.PI / period) * (1 + 0.1 * k * Math.sin(u * Math.PI / period));
    const approxCn = (u: number): number => Math.cos(u * Math.PI / period);
    const approxDn = (u: number): number => Math.sqrt(1 - k * k * approxSn(u) * approxSn(u));

    const toX = (u: number) => padding + (u / uMax) * (width - padding - 30);
    const toY = (y: number) => height / 2 - y * (height / 2 - padding - 10);

    // Draw sn (red)
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let u = 0; u <= uMax; u += 0.05) {
      const y = approxSn(u);
      if (u === 0) ctx.moveTo(toX(u), toY(y));
      else ctx.lineTo(toX(u), toY(y));
    }
    ctx.stroke();

    // Draw cn (blue)
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let u = 0; u <= uMax; u += 0.05) {
      const y = approxCn(u);
      if (u === 0) ctx.moveTo(toX(u), toY(y));
      else ctx.lineTo(toX(u), toY(y));
    }
    ctx.stroke();

    // Draw dn (green)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let u = 0; u <= uMax; u += 0.05) {
      const y = approxDn(u);
      if (u === 0) ctx.moveTo(toX(u), toY(y));
      else ctx.lineTo(toX(u), toY(y));
    }
    ctx.stroke();

    // Legend
    ctx.font = '12px monospace';
    ctx.fillStyle = '#ef4444';
    ctx.fillText('sn(u,k)', width - 80, 25);
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('cn(u,k)', width - 80, 45);
    ctx.fillStyle = '#10b981';
    ctx.fillText('dn(u,k)', width - 80, 65);

    ctx.fillStyle = '#6b7280';
    ctx.font = '10px monospace';
    ctx.fillText('u', width - 25, height / 2 - 10);
    ctx.fillText(`k = ${k.toFixed(2)}`, 10, 20);

  }, [k]);

  return (
    <Card title="Jacobi's Elliptic Functions">
      <div className="space-y-4">
        <p className="text-dark-300">
          Jacobi defined three fundamental elliptic functions: sn (like sine),
          cn (like cosine), and dn. They generalize trigonometric functions.
        </p>
        <MathBlock math="\text{sn}^2 u + \text{cn}^2 u = 1, \quad k^2 \text{sn}^2 u + \text{dn}^2 u = 1" />
        <div>
          <label className="block text-sm text-dark-400 mb-1">Modulus k: {k.toFixed(2)}</label>
          <input
            type="range"
            min="0.1"
            max="0.99"
            step="0.01"
            value={k}
            onChange={(e) => setK(parseFloat(e.target.value))}
            className="w-48"
          />
        </div>
        <canvas
          ref={canvasRef}
          width={500}
          height={250}
          className="w-full border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          When k → 0: sn → sin, cn → cos, dn → 1 (circular functions)
        </p>
      </div>
    </Card>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <div className="prose prose-invert max-w-none">
        {/* Opening Quote */}
        <p className="text-xl text-dark-200 mb-6">
          Carl Gustav Jacob Jacobi was the great systematizer of elliptic functions
          and a champion of pure mathematics for its own sake. His work spans number
          theory, mechanics, and algebra, all pursued with passionate intensity.
        </p>

        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-dark-300">
          "The sole purpose of science is the honor of the human spirit."
          <footer className="text-dark-500 mt-2">— Carl Gustav Jacob Jacobi</footer>
        </blockquote>

        {/* Historical Context */}
        <h2>A Life Devoted to Mathematics</h2>
        <p>
          Carl Gustav Jacob Jacobi (1804-1851) was born in Potsdam, Prussia, to a
          prosperous Jewish banking family. Unlike many mathematicians who came from
          poverty, Jacobi had the resources for excellent education. He showed
          extraordinary talent from childhood, mastering university-level mathematics
          while still in secondary school.
        </p>
        <p>
          Jacobi became professor at Königsberg at age 23—remarkably young even for
          that era. He threw himself into research with an intensity that eventually
          damaged his health. His famous quote about "the honor of the human spirit"
          captures his view of mathematics as the highest intellectual pursuit.
        </p>

        <Callout type="note" title="Bell's Portrait">
          Bell contrasts Jacobi with Abel: both worked on elliptic functions simultaneously,
          but Jacobi was well-supported while Abel died in poverty. Bell sees Jacobi as
          representing the "establishment" mathematician—brilliant, prolific, and properly
          recognized—in contrast to the romantic tragedy of Abel.
        </Callout>

        {/* Elliptic Functions */}
        <h2>Master of Elliptic Functions</h2>
        <p>
          Jacobi and Abel independently developed the theory of elliptic functions
          at nearly the same time. While Abel had priority in some discoveries,
          Jacobi's systematic development became the standard approach.
        </p>

        <EllipticFunctionsDemo />

        <p>
          Jacobi's functions sn, cn, and dn generalize the circular functions sin and cos.
          They arise from inverting elliptic integrals and have remarkable algebraic and
          analytic properties.
        </p>

        {/* Double Periodicity */}
        <h2>Double Periodicity</h2>
        <p>
          A key insight of both Abel and Jacobi was that elliptic functions are
          doubly periodic—they have two independent periods, unlike trigonometric
          functions which have only one.
        </p>

        <DoublePeriodDemo />

        <p>
          This double periodicity makes elliptic functions far richer than their
          circular counterparts. The ratio of the periods, a complex number in the
          upper half-plane, determines the function completely.
        </p>

        {/* Theta Functions */}
        <h2>Theta Functions</h2>
        <p>
          Jacobi's theta functions are powerful tools connecting analysis, number theory,
          and physics. They appear in the solution of the heat equation, the theory of
          partitions, and quantum field theory.
        </p>

        <ThetaFunctionDemo />

        <MathBlock math="\theta_3(0, q) = \sum_{n=-\infty}^{\infty} q^{n^2} = 1 + 2q + 2q^4 + 2q^9 + \cdots" />

        <Callout type="example" title="Theta Functions and Squares">
          The coefficient of <Math math="q^n" /> in <Math math="\theta_3(0,q)^2" /> counts
          the number of ways to write n as a sum of two squares. This connection between
          analysis and number theory is characteristic of Jacobi's work.
        </Callout>

        {/* Jacobian */}
        <h2>The Jacobian Matrix</h2>
        <p>
          While studying transformations in mechanics and geometry, Jacobi developed
          the systematic theory of the Jacobian matrix—the matrix of partial derivatives
          that describes how a transformation distorts space locally.
        </p>

        <JacobianDemo />

        <p>
          The Jacobian determinant gives the local magnification factor of a transformation.
          In multivariable calculus, changing variables in an integral requires multiplying
          by the absolute value of the Jacobian.
        </p>
        <MathBlock math="\iint f(x,y) \, dx \, dy = \iint f(u,v) \left|\frac{\partial(x,y)}{\partial(u,v)}\right| du \, dv" />

        {/* Four Squares */}
        <h2>Jacobi's Four Squares Theorem</h2>
        <p>
          Lagrange proved that every positive integer is a sum of four squares.
          Jacobi went further, finding an exact formula for the number of such
          representations.
        </p>

        <FourSquaresDemo />

        <p>
          Jacobi proved this using theta functions—a beautiful example of how
          analytic tools can solve arithmetic problems.
        </p>

        {/* Other Contributions */}
        <h2>Other Major Contributions</h2>
        <CardGrid columns={2}>
          <Card title="Hamilton-Jacobi Equation">
            <p className="text-dark-300">
              A fundamental equation in classical mechanics, reformulating dynamics
              in terms of action and angle variables.
            </p>
            <MathBlock math="H\left(q, \frac{\partial S}{\partial q}, t\right) + \frac{\partial S}{\partial t} = 0" />
          </Card>
          <Card title="Jacobi Identity">
            <p className="text-dark-300">
              The fundamental identity satisfied by Lie brackets:
            </p>
            <MathBlock math="[A,[B,C]] + [B,[C,A]] + [C,[A,B]] = 0" />
          </Card>
          <Card title="Jacobi Symbol">
            <p className="text-dark-300">
              Generalization of the Legendre symbol to composite moduli, essential
              in quadratic reciprocity and primality testing.
            </p>
          </Card>
          <Card title="Jacobi Polynomials">
            <p className="text-dark-300">
              A family of orthogonal polynomials generalizing Legendre and Chebyshev
              polynomials, important in approximation theory.
            </p>
          </Card>
        </CardGrid>

        {/* Pure Mathematics */}
        <h2>Champion of Pure Mathematics</h2>
        <p>
          Jacobi famously defended pure mathematics against those who demanded practical
          applications. When asked about the use of mathematics, he replied that its
          purpose was "the honor of the human spirit."
        </p>
        <p>
          This view—that mathematics has intrinsic value beyond utility—influenced
          generations of mathematicians. Jacobi saw mathematical truth as an end in
          itself, not merely a tool for science or engineering.
        </p>

        <Callout type="warning" title="Work and Health">
          Jacobi worked with an intensity that damaged his health. In 1843, he
          suffered a breakdown from overwork and had to leave Königsberg for Berlin.
          He continued working through illness until his death from smallpox in 1851
          at age 46—young even for that era.
        </Callout>

        {/* Competition with Abel */}
        <h2>Jacobi and Abel</h2>
        <p>
          The parallel development of elliptic functions by Jacobi and Abel is one
          of mathematics' great stories of simultaneous discovery. Though they never
          met, their work was deeply intertwined.
        </p>
        <p>
          When Jacobi learned of Abel's death, he expressed genuine sorrow at the loss
          of a mathematical peer. The two had developed different notations and emphases,
          but their core insights were remarkably similar—a testament to the inevitability
          of mathematical truth.
        </p>

        {/* Key Formulas */}
        <h2>Key Formulas</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Triple Product Identity">
            <MathBlock math="\prod_{n=1}^{\infty}(1-q^{2n})(1+zq^{2n-1})(1+z^{-1}q^{2n-1}) = \sum_{n=-\infty}^{\infty} z^n q^{n^2}" />
          </Card>
          <Card title="Jacobi's Formula for π">
            <MathBlock math="\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots" />
            <p className="text-dark-400 text-sm">(Via theta functions)</p>
          </Card>
        </div>

        {/* Bell's Assessment */}
        <h2>Bell's Assessment</h2>
        <p>
          Bell presents Jacobi as the consummate professional mathematician—prolific,
          systematic, and deeply influential. Unlike Abel's romantic tragedy, Jacobi's
          story is one of recognized success, though cut short by early death.
        </p>
        <p>
          Bell admires Jacobi's philosophical stance on pure mathematics but notes
          that even "pure" work often finds unexpected applications. Jacobi's theta
          functions now appear in string theory and quantum field theory—applications
          Jacobi could never have imagined.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-dark-300">
          "Jacobi was a calculating prodigy from boyhood... He was soon recognized as
          one of the leading mathematicians of his time."
          <footer className="text-dark-500 mt-2">— E.T. Bell</footer>
        </blockquote>

        {/* Key Takeaways */}
        <Callout type="summary" title="Key Takeaways">
          <ul className="space-y-2">
            <li><strong>Elliptic Functions:</strong> Jacobi systematized the theory with his sn, cn, dn functions and theta functions.</li>
            <li><strong>Double Periodicity:</strong> Elliptic functions have two independent periods, unlike trigonometric functions.</li>
            <li><strong>The Jacobian:</strong> His matrix of partial derivatives is fundamental to multivariable calculus and differential geometry.</li>
            <li><strong>Number Theory:</strong> Jacobi's four-squares formula connects analysis to arithmetic.</li>
            <li><strong>Pure Mathematics:</strong> His defense of mathematics for "the honor of the human spirit" influenced generations.</li>
          </ul>
        </Callout>
      </div>
    </LessonLayout>
  );
}
