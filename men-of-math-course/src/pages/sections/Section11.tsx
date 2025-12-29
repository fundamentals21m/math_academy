import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, Math as MathInline } from '../../components/common/MathBlock';

// Lagrangian Mechanics - Pendulum
function LagrangianPendulum() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [running, setRunning] = useState(true);
  const [theta, setTheta] = useState(Math.PI / 4);
  const [omega, setOmega] = useState(0);
  const [showEnergy, setShowEnergy] = useState(true);

  const g = 9.8;
  const L = 150; // pendulum length in pixels
  const m = 1;

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      // Lagrangian equation of motion: θ'' = -(g/L)sin(θ)
      const dt = 0.05;
      const alpha = -(g / L) * Math.sin(theta) * 100; // scaled for visualization
      setOmega(w => w + alpha * dt);
      setTheta(t => t + omega * dt);
    }, 30);

    return () => clearInterval(interval);
  }, [running, theta, omega]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const pivotX = width / 2;
    const pivotY = 60;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Draw pivot
    ctx.fillStyle = '#4b5563';
    ctx.fillRect(pivotX - 30, pivotY - 10, 60, 10);

    // Calculate bob position
    const bobX = pivotX + L * Math.sin(theta);
    const bobY = pivotY + L * Math.cos(theta);

    // Draw rod
    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(bobX, bobY);
    ctx.stroke();

    // Draw bob
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(bobX, bobY, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw angle arc
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(pivotX, pivotY + 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, 30, Math.PI / 2, Math.PI / 2 - theta, theta > 0);
    ctx.stroke();

    // Energy visualization
    if (showEnergy) {
      const T = 0.5 * m * L * L * omega * omega / 10000; // kinetic
      const V = m * g * L * (1 - Math.cos(theta)) / 100; // potential
      const E = T + V; // total

      const barWidth = 60;
      const maxHeight = 80;

      // Draw energy bars
      const drawBar = (x: number, value: number, max: number, color: string, label: string) => {
        const barHeight = (value / max) * maxHeight;
        ctx.fillStyle = color;
        ctx.fillRect(x, height - 30 - barHeight, barWidth, barHeight);
        ctx.strokeStyle = '#374151';
        ctx.strokeRect(x, height - 30 - maxHeight, barWidth, maxHeight);
        ctx.fillStyle = '#9ca3af';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(label, x + barWidth / 2, height - 15);
        ctx.fillText(value.toFixed(2), x + barWidth / 2, height - 35 - barHeight);
      };

      const maxE = E * 1.5 || 1;
      drawBar(30, T, maxE, '#10b981', 'Kinetic');
      drawBar(100, V, maxE, '#ef4444', 'Potential');
      drawBar(170, E, maxE, '#8b5cf6', 'Total');

      ctx.textAlign = 'left';
    }

    // Labels
    ctx.fillStyle = '#f59e0b';
    ctx.font = '12px monospace';
    ctx.fillText(`θ = ${(theta * 180 / Math.PI).toFixed(1)}°`, pivotX + 40, pivotY + 30);
  }, [theta, omega, showEnergy]);

  const reset = () => {
    setTheta(Math.PI / 4);
    setOmega(0);
  };

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Lagrangian Mechanics</h4>

      <p className="text-sm text-dark-300 mb-4">
        Lagrange reformulated mechanics using energy rather than forces. For a pendulum,
        the Lagrangian L = T - V (kinetic minus potential energy) yields the equation
        of motion through the Euler-Lagrange equation.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`L = T - V = \\frac{1}{2}mL^2\\dot{\\theta}^2 - mgL(1-\\cos\\theta)`}
        </MathBlock>
        <MathBlock>
          {`\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{\\theta}} - \\frac{\\partial L}{\\partial \\theta} = 0 \\quad \\Rightarrow \\quad \\ddot{\\theta} = -\\frac{g}{L}\\sin\\theta`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={350}
        className="w-full max-w-md mx-auto bg-dark-900 rounded-lg mb-4"
      />

      <div className="flex flex-wrap gap-4 mb-4">
        <button
          onClick={() => setRunning(!running)}
          className={`px-4 py-2 rounded ${
            running ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'
          } text-white`}
        >
          {running ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded"
        >
          Reset
        </button>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showEnergy}
            onChange={(e) => setShowEnergy(e.target.checked)}
            className="accent-primary-500"
          />
          <span className="text-sm text-dark-400">Show energy</span>
        </label>
      </div>

      <Callout type="success">
        <p>
          <strong>No Forces, Just Energy:</strong> Newton's approach requires analyzing
          forces and their directions. Lagrange's method needs only the energies—much
          simpler for complex systems with constraints like pendulums, double pendulums,
          or planetary orbits.
        </p>
      </Callout>
    </div>
  );
}

// Lagrange Multipliers
function LagrangeMultipliers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [constraintRadius, setConstraintRadius] = useState(1.5);

  // Problem: maximize f(x,y) = x + y subject to x² + y² = r²
  // Solution: x = y = r/√2, giving max = r√2
  const optimalX = constraintRadius / Math.sqrt(2);
  const optimalY = constraintRadius / Math.sqrt(2);
  const maxValue = constraintRadius * Math.sqrt(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 80;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Draw level curves of f(x,y) = x + y
    for (let c = -3; c <= 3; c += 0.5) {
      ctx.strokeStyle = c === 0 ? '#374151' : `rgba(59, 130, 246, ${0.3 + Math.abs(c) * 0.1})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX + (c - 2.5) * scale, centerY + 2.5 * scale);
      ctx.lineTo(centerX + (c + 2.5) * scale, centerY - 2.5 * scale);
      ctx.stroke();
    }

    // Draw constraint circle
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, constraintRadius * scale, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw optimal level curve (tangent to circle)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(centerX + (maxValue - 2.5) * scale, centerY + 2.5 * scale);
    ctx.lineTo(centerX + (maxValue + 2.5) * scale, centerY - 2.5 * scale);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw optimal point
    const px = centerX + optimalX * scale;
    const py = centerY - optimalY * scale;
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(px, py, 8, 0, 2 * Math.PI);
    ctx.fill();

    // Draw gradient vectors at optimal point
    // ∇f = (1, 1)
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px + 30, py - 30);
    ctx.stroke();
    // Arrow head
    ctx.beginPath();
    ctx.moveTo(px + 30, py - 30);
    ctx.lineTo(px + 20, py - 25);
    ctx.lineTo(px + 25, py - 20);
    ctx.closePath();
    ctx.fill();

    // ∇g = (2x, 2y) at optimal point, normalized and scaled
    ctx.strokeStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px + 30, py - 30);
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.fillText('x', width - 20, centerY - 5);
    ctx.fillText('y', centerX + 5, 15);

    ctx.fillStyle = '#ef4444';
    ctx.fillText('Constraint: x² + y² = r²', 10, 20);
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('Maximize: f = x + y', 10, 35);
    ctx.fillStyle = '#10b981';
    ctx.fillText(`Optimal: (${optimalX.toFixed(2)}, ${optimalY.toFixed(2)})`, 10, 50);
  }, [constraintRadius, optimalX, optimalY, maxValue]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Lagrange Multipliers</h4>

      <p className="text-sm text-dark-300 mb-4">
        How do you optimize a function subject to constraints? Lagrange's method:
        at the optimum, the gradient of the objective function must be parallel to
        the gradient of the constraint. This introduces the "Lagrange multiplier" λ.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`\\text{Maximize } f(x,y) \\text{ subject to } g(x,y) = c`}
        </MathBlock>
        <MathBlock>
          {`\\nabla f = \\lambda \\nabla g`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={350}
        className="w-full max-w-md mx-auto bg-dark-900 rounded-lg mb-4"
      />

      <div className="mb-4">
        <label className="text-sm text-dark-400 block mb-2">
          Constraint radius r: <span className="text-primary-400 font-bold">{constraintRadius.toFixed(2)}</span>
        </label>
        <input
          type="range"
          min={0.5}
          max={2.5}
          step={0.1}
          value={constraintRadius}
          onChange={(e) => setConstraintRadius(parseFloat(e.target.value))}
          className="w-full accent-primary-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-dark-800 p-3 rounded-lg text-center">
          <p className="text-xs text-dark-400">Optimal x</p>
          <p className="text-lg font-mono text-emerald-400">{optimalX.toFixed(3)}</p>
        </div>
        <div className="bg-dark-800 p-3 rounded-lg text-center">
          <p className="text-xs text-dark-400">Optimal y</p>
          <p className="text-lg font-mono text-emerald-400">{optimalY.toFixed(3)}</p>
        </div>
        <div className="bg-dark-800 p-3 rounded-lg text-center">
          <p className="text-xs text-dark-400">Maximum f</p>
          <p className="text-lg font-mono text-primary-400">{maxValue.toFixed(3)}</p>
        </div>
      </div>
    </div>
  );
}

// Lagrange Interpolation
function LagrangeInterpolation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Array<{ x: number; y: number }>>([
    { x: -2, y: 1 },
    { x: 0, y: 3 },
    { x: 1, y: 2 },
    { x: 3, y: 5 },
  ]);
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  // Lagrange interpolation
  const interpolate = (x: number): number => {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
      let term = points[i].y;
      for (let j = 0; j < points.length; j++) {
        if (i !== j) {
          term *= (x - points[j].x) / (points[i].x - points[j].x);
        }
      }
      result += term;
    }
    return result;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scaleX = 50;
    const scaleY = 40;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#1f2937';
    ctx.lineWidth = 1;
    for (let x = -5; x <= 5; x++) {
      ctx.beginPath();
      ctx.moveTo(centerX + x * scaleX, 0);
      ctx.lineTo(centerX + x * scaleX, height);
      ctx.stroke();
    }
    for (let y = -5; y <= 5; y++) {
      ctx.beginPath();
      ctx.moveTo(0, centerY + y * scaleY);
      ctx.lineTo(width, centerY + y * scaleY);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Draw interpolating polynomial
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = 0; px < width; px++) {
      const x = (px - centerX) / scaleX;
      const y = interpolate(x);
      const py = centerY - y * scaleY;
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Draw data points
    points.forEach((point, i) => {
      const px = centerX + point.x * scaleX;
      const py = centerY - point.y * scaleY;

      ctx.fillStyle = selectedPoint === i ? '#f59e0b' : '#10b981';
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label
      ctx.fillStyle = '#9ca3af';
      ctx.font = '10px monospace';
      ctx.fillText(`(${point.x}, ${point.y})`, px + 10, py - 10);
    });

    // Axis labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.fillText('x', width - 15, centerY - 5);
    ctx.fillText('y', centerX + 5, 15);
  }, [points, selectedPoint]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scaleX = 50;
    const scaleY = 40;

    // Check if clicking near a point
    for (let i = 0; i < points.length; i++) {
      const px = centerX + points[i].x * scaleX;
      const py = centerY - points[i].y * scaleY;
      if (Math.abs(x - px) < 15 && Math.abs(y - py) < 15) {
        setSelectedPoint(i);
        return;
      }
    }

    // Add new point
    const newX = Math.round((x - centerX) / scaleX * 2) / 2;
    const newY = Math.round((centerY - y) / scaleY * 2) / 2;
    if (points.length < 6) {
      setPoints([...points, { x: newX, y: newY }]);
    }
    setSelectedPoint(null);
  };

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Lagrange Interpolation</h4>

      <p className="text-sm text-dark-300 mb-4">
        Given n points, there's exactly one polynomial of degree at most n-1 passing
        through all of them. Lagrange's formula constructs it directly.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`P(x) = \\sum_{i=0}^{n} y_i \\prod_{j \\neq i} \\frac{x - x_j}{x_i - x_j}`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={500}
        height={350}
        className="w-full bg-dark-900 rounded-lg mb-4 cursor-crosshair"
        onClick={handleCanvasClick}
      />

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setPoints([{ x: -2, y: 1 }, { x: 0, y: 3 }, { x: 1, y: 2 }, { x: 3, y: 5 }])}
          className="px-3 py-1 bg-dark-700 hover:bg-dark-600 rounded text-sm"
        >
          Reset
        </button>
        <button
          onClick={() => setPoints(points.slice(0, -1))}
          disabled={points.length <= 2}
          className="px-3 py-1 bg-dark-700 hover:bg-dark-600 rounded text-sm disabled:opacity-50"
        >
          Remove Last
        </button>
        <span className="px-3 py-1 text-sm text-dark-400">
          {points.length} points → degree {points.length - 1} polynomial
        </span>
      </div>

      <p className="text-xs text-dark-500">
        Click on the canvas to add points (max 6). Click on a point to select it.
      </p>
    </div>
  );
}

// Lagrange Points
function LagrangePoints() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedPoint, setSelectedPoint] = useState<string>('L2');
  const [time, setTime] = useState(0);

  const lagrangePoints: Record<string, { x: number; y: number; desc: string }> = {
    L1: { x: 0.99, y: 0, desc: 'Between Earth and Sun. SOHO solar observatory.' },
    L2: { x: 1.01, y: 0, desc: 'Beyond Earth from Sun. James Webb Space Telescope.' },
    L3: { x: -1, y: 0, desc: 'Opposite side of Sun from Earth.' },
    L4: { x: 0.5, y: 0.866, desc: 'Leading Earth by 60°. Trojan asteroids.' },
    L5: { x: 0.5, y: -0.866, desc: 'Trailing Earth by 60°. Trojan asteroids.' },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => (t + 0.01) % (2 * Math.PI));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 120;

    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, width, height);

    // Stars background
    ctx.fillStyle = '#374151';
    for (let i = 0; i < 50; i++) {
      ctx.beginPath();
      ctx.arc((i * 73 + 17) % width, (i * 47 + 23) % height, 0.5, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Earth's orbit
    ctx.strokeStyle = '#1e40af';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, scale, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.setLineDash([]);

    // Sun
    const sunGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 20);
    sunGradient.addColorStop(0, '#fef08a');
    sunGradient.addColorStop(0.8, '#f59e0b');
    sunGradient.addColorStop(1, '#b45309');
    ctx.fillStyle = sunGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
    ctx.fill();

    // Earth (rotating)
    const earthX = centerX + Math.cos(time) * scale;
    const earthY = centerY + Math.sin(time) * scale;
    const earthGradient = ctx.createRadialGradient(earthX, earthY, 0, earthX, earthY, 10);
    earthGradient.addColorStop(0, '#60a5fa');
    earthGradient.addColorStop(1, '#1e40af');
    ctx.fillStyle = earthGradient;
    ctx.beginPath();
    ctx.arc(earthX, earthY, 10, 0, 2 * Math.PI);
    ctx.fill();

    // Draw Lagrange points (rotating with Earth)
    Object.entries(lagrangePoints).forEach(([name, point]) => {
      // Rotate point with Earth
      const cos = Math.cos(time);
      const sin = Math.sin(time);
      const rx = point.x * cos - point.y * sin;
      const ry = point.x * sin + point.y * cos;
      const px = centerX + rx * scale;
      const py = centerY + ry * scale;

      const isSelected = name === selectedPoint;
      ctx.fillStyle = isSelected ? '#10b981' : '#6b7280';
      ctx.beginPath();
      ctx.arc(px, py, isSelected ? 8 : 5, 0, 2 * Math.PI);
      ctx.fill();

      if (isSelected) {
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Label
      ctx.fillStyle = isSelected ? '#10b981' : '#9ca3af';
      ctx.font = isSelected ? 'bold 12px monospace' : '10px monospace';
      ctx.fillText(name, px + 10, py + 4);
    });

    // Legend
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.fillText('Sun-Earth Lagrange Points', 10, 20);
  }, [time, selectedPoint]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Lagrange Points</h4>

      <p className="text-sm text-dark-300 mb-4">
        Lagrange discovered five special points in the Sun-Earth system where a small
        object can maintain a stable position relative to both bodies. The James Webb
        Space Telescope orbits L2.
      </p>

      <canvas
        ref={canvasRef}
        width={450}
        height={400}
        className="w-full max-w-md mx-auto bg-dark-950 rounded-lg mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(lagrangePoints).map(name => (
          <button
            key={name}
            onClick={() => setSelectedPoint(name)}
            className={`px-3 py-1 rounded text-sm ${
              selectedPoint === name
                ? 'bg-emerald-600 text-white'
                : 'bg-dark-700 text-dark-300'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <h5 className="font-semibold text-emerald-400 mb-2">{selectedPoint}</h5>
        <p className="text-sm text-dark-300">{lagrangePoints[selectedPoint].desc}</p>
      </div>
    </div>
  );
}

// Four Squares Theorem
function FourSquares() {
  const [n, setN] = useState(42);
  const [decomposition, setDecomposition] = useState<number[]>([]);

  useEffect(() => {
    // Find a representation as sum of four squares
    const findSquares = (num: number): number[] => {
      for (let a = 0; a * a <= num; a++) {
        for (let b = a; b * b <= num - a * a; b++) {
          for (let c = b; c * c <= num - a * a - b * b; c++) {
            const remainder = num - a * a - b * b - c * c;
            const d = Math.sqrt(remainder);
            if (Number.isInteger(d)) {
              return [a, b, c, Math.round(d)].filter(x => x > 0).sort((x, y) => y - x);
            }
          }
        }
      }
      return [];
    };

    setDecomposition(findSquares(n));
  }, [n]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Four Squares Theorem</h4>

      <p className="text-sm text-dark-300 mb-4">
        Lagrange proved that every positive integer can be expressed as the sum of at
        most four perfect squares. This was conjectured by Fermat and Euler, but
        Lagrange provided the first complete proof in 1770.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`\\forall n \\in \\mathbb{N}, \\quad n = a^2 + b^2 + c^2 + d^2`}
        </MathBlock>
      </div>

      <div className="mb-4">
        <label className="text-sm text-dark-400 block mb-2">
          Number: <span className="text-primary-400 font-bold">{n}</span>
        </label>
        <input
          type="range"
          min={1}
          max={200}
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
          className="w-full accent-primary-500"
        />
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <p className="text-lg font-mono text-center mb-4">
          <span className="text-primary-400">{n}</span>
          <span className="text-dark-500"> = </span>
          {decomposition.map((sq, i) => (
            <span key={i}>
              {i > 0 && <span className="text-dark-500"> + </span>}
              <span className="text-emerald-400">{sq}²</span>
            </span>
          ))}
        </p>

        <div className="flex justify-center gap-4">
          {decomposition.map((sq, i) => (
            <div key={i} className="text-center">
              <div
                className="bg-emerald-600/30 border border-emerald-500 rounded"
                style={{
                  width: Math.max(20, sq * 8),
                  height: Math.max(20, sq * 8),
                  maxWidth: 80,
                  maxHeight: 80,
                }}
              />
              <p className="text-xs text-dark-400 mt-1">{sq}² = {sq * sq}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-dark-500 text-center mt-4">
          {decomposition.map(x => x * x).join(' + ')} = {n}
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>Not Always Four:</strong> Some numbers need all four squares (like 7 = 1² + 1² + 1² + 2²),
          but many need fewer. Numbers that are themselves perfect squares need just one.
          Primes of the form 4k + 1 can always be written as two squares.
        </p>
      </Callout>
    </div>
  );
}

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Joseph-Louis Lagrange transformed mathematics through sheer elegance. He reformulated
        mechanics to work without geometry, extended the calculus of variations, and made
        number theory rigorous—all while writing prose so clear that his masterwork
        <em> Mécanique Analytique</em> contains not a single diagram.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "When we have found a truth, the pleasure of discovery is over, and we must go
        on to seek another."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Joseph-Louis Lagrange
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Algebraist Supreme</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Joseph-Louis Lagrange (1736–1813) was born Giuseppe Lodovico Lagrangia in Turin,
            then part of the Kingdom of Sardinia. His father was a wealthy official who
            lost his fortune to speculation, forcing young Lagrange to make his own way—
            which he later said was fortunate, as wealth might have kept him from mathematics.
          </p>
          <p className="mb-4">
            At 19, Lagrange was appointed professor of mathematics at the Royal Artillery
            School in Turin. His correspondence with Euler led to fundamental advances in
            the calculus of variations. In 1766, Frederick the Great invited him to Berlin
            to succeed Euler, declaring he wanted "the greatest mathematician in Europe"
            at his court.
          </p>
          <p>
            After Frederick's death, Lagrange moved to Paris, where the Revolution made
            him a professor. Despite being foreign-born, his brilliance protected him
            during the Terror. Napoleon later made him a count and senator.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> Jan 25, 1736, Turin</li>
            <li><strong>Died:</strong> April 10, 1813, Paris</li>
            <li><strong>Major Work:</strong> Mécanique Analytique</li>
            <li><strong>Style:</strong> Pure algebra, no diagrams</li>
            <li><strong>Honors:</strong> Count, Senator of France</li>
          </ul>
        </Card>
      </div>

      <Callout type="info">
        <p>
          <strong>Saved by Mathematics:</strong> During the French Revolution, Lagrange's
          friend Lavoisier (the chemist) was guillotined. Lagrange mourned: "It took them
          only an instant to cut off that head, and a hundred years may not produce another
          like it." Yet Lagrange himself was protected—even revolutionaries needed mathematics.
        </p>
      </Callout>

      {/* Lagrangian Mechanics */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Lagrangian Mechanics</h2>

      <p className="mb-4">
        Lagrange reformulated Newton's mechanics entirely in terms of energy. Instead of
        tracking forces and accelerations, you write down the kinetic energy T and potential
        energy V, form the Lagrangian L = T - V, and apply the Euler-Lagrange equation.
        The equations of motion fall out automatically.
      </p>

      <LagrangianPendulum />

      <Callout type="success">
        <p>
          <strong>Mécanique Analytique (1788):</strong> Lagrange boasted that his book
          contained "no figures"—pure algebra replaced Newton's geometric methods. The
          Lagrangian approach is essential for quantum mechanics, general relativity,
          and the Standard Model of particle physics.
        </p>
      </Callout>

      {/* Lagrange Multipliers */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Lagrange Multipliers</h2>

      <p className="mb-4">
        How do you find the maximum of a function when you're constrained to stay on a
        curve or surface? Lagrange's brilliant insight: at the optimum, the gradient of
        the objective must be parallel to the gradient of the constraint.
      </p>

      <LagrangeMultipliers />

      <p className="my-4">
        This technique is ubiquitous in economics, physics, machine learning, and
        operations research—anywhere you need to optimize subject to constraints.
      </p>

      {/* Lagrange Interpolation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Lagrange Interpolation</h2>

      <p className="mb-4">
        Given n data points, Lagrange showed how to construct the unique polynomial of
        degree at most n-1 passing through all of them. This is fundamental to numerical
        analysis and approximation theory.
      </p>

      <LagrangeInterpolation />

      {/* Lagrange Points */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Celestial Mechanics</h2>

      <p className="mb-4">
        Lagrange solved the three-body problem for certain special cases, discovering five
        equilibrium points where a small object can orbit in a stable position relative
        to two larger bodies. These "Lagrange points" are now used for space telescopes.
      </p>

      <LagrangePoints />

      {/* Number Theory */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Number Theory</h2>

      <p className="mb-4">
        Lagrange made number theory rigorous. His most famous result: every positive
        integer can be written as the sum of at most four perfect squares—a theorem
        that Fermat claimed but never proved.
      </p>

      <FourSquares />

      {/* Other Contributions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Other Contributions</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Calculus of Variations</h4>
          <p className="text-sm text-dark-300">
            With Euler, Lagrange founded this field that finds functions minimizing
            integrals—leading to the Euler-Lagrange equation that governs physics.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Group Theory Origins</h4>
          <p className="text-sm text-dark-300">
            His study of polynomial equations and permutations of roots anticipated
            group theory, directly inspiring Abel and Galois.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Continued Fractions</h4>
          <p className="text-sm text-dark-300">
            Systematic theory of continued fractions, proving that quadratic irrationals
            have periodic continued fraction expansions.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Metric System</h4>
          <p className="text-sm text-dark-300">
            As chair of the weights and measures commission, Lagrange helped design
            the metric system that revolutionized measurement.
          </p>
        </div>
      </div>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Lagrange's Theorem (Groups)</h4>
          <p className="text-sm text-dark-300">
            The order of a subgroup divides the order of the group. This fundamental
            theorem of group theory bears his name, though it was Galois who developed
            group theory itself.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Mean Value Theorem</h4>
          <p className="text-sm text-dark-300">
            Lagrange proved this cornerstone of calculus: somewhere between a and b,
            the derivative equals the average rate of change over [a, b].
          </p>
        </Card>
      </CardGrid>

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell emphasizes Lagrange's supreme elegance and generality. Where others
        solved specific problems, Lagrange sought general methods:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Lagrange's mathematical work has a perfection of form that is truly classical...
        He is the supreme mathematical architect, concerned with the harmony and symmetry
        of the whole."
      </blockquote>

      <p className="my-4">
        Bell notes Lagrange's modesty and melancholy—despite his achievements, he
        periodically lost interest in mathematics, finding even his own results
        unsatisfying once the discovery was made. "The pleasure is in the pursuit."
      </p>

      <Callout type="info">
        <p>
          <strong>His Final Words:</strong> On his deathbed, Lagrange reflected on his
          life: "I have had my day; I have gained some reputation in mathematics. I never
          hated anyone, I have done no ill... I am going to die."
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Joseph-Louis Lagrange (1736–1813) reformulated mechanics using energy
              (the Lagrangian L = T - V) rather than forces, in his figure-free
              masterwork <em>Mécanique Analytique</em>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Lagrange multipliers solve constrained optimization problems by requiring
              ∇f = λ∇g at the optimum—used throughout science and engineering.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              He proved every positive integer is the sum of at most four squares,
              completing a theorem Fermat and Euler couldn't prove.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              Lagrange discovered the five equilibrium points in the Sun-Earth system
              now used for space telescopes like the James Webb.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              His work on polynomial equations and permutations directly inspired
              the group theory developed by Abel and Galois.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
