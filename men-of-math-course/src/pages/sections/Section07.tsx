import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, Math as MathInline } from '../../components/common/MathBlock';

// Fluxions (Derivatives) Visualization
function FluxionsDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [time, setTime] = useState(0);
  const [showVelocity, setShowVelocity] = useState(true);
  const [showAcceleration, setShowAcceleration] = useState(false);
  const [running, setRunning] = useState(true);

  // Position function: s(t) = sin(t) * t / 3 + 2
  const position = (t: number) => Math.sin(t) * t / 3 + 2;
  const velocity = (t: number) => Math.sin(t) / 3 + Math.cos(t) * t / 3;
  const acceleration = (t: number) => Math.cos(t) / 3 + Math.cos(t) / 3 - Math.sin(t) * t / 3;

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setTime(t => (t + 0.05) % (4 * Math.PI));
    }, 50);
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, height / 2);
    ctx.lineTo(width - 10, height / 2);
    ctx.moveTo(40, 10);
    ctx.lineTo(40, height - 10);
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText('t', width - 20, height / 2 + 15);
    ctx.fillText('0', 45, height / 2 + 15);

    // Scale factors
    const scaleX = (width - 60) / (4 * Math.PI);
    const scaleY = height / 8;
    const centerY = height / 2;

    // Draw position curve
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let t = 0; t <= 4 * Math.PI; t += 0.05) {
      const x = 40 + t * scaleX;
      const y = centerY - position(t) * scaleY;
      if (t === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw velocity curve
    if (showVelocity) {
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let t = 0; t <= 4 * Math.PI; t += 0.05) {
        const x = 40 + t * scaleX;
        const y = centerY - velocity(t) * scaleY;
        if (t === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Draw acceleration curve
    if (showAcceleration) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let t = 0; t <= 4 * Math.PI; t += 0.05) {
        const x = 40 + t * scaleX;
        const y = centerY - acceleration(t) * scaleY;
        if (t === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Draw current point
    const currentX = 40 + time * scaleX;
    const currentY = centerY - position(time) * scaleY;

    // Position point
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(currentX, currentY, 8, 0, 2 * Math.PI);
    ctx.fill();

    // Tangent line (velocity)
    if (showVelocity) {
      const v = velocity(time);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(currentX - 30, currentY + v * 30 * scaleY);
      ctx.lineTo(currentX + 30, currentY - v * 30 * scaleY);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Legend
    ctx.font = '11px monospace';
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('● Position s(t)', 60, 25);
    if (showVelocity) {
      ctx.fillStyle = '#10b981';
      ctx.fillText('● Velocity ṡ(t)', 160, 25);
    }
    if (showAcceleration) {
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('● Acceleration s̈(t)', 260, 25);
    }
  }, [time, showVelocity, showAcceleration]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Newton's Fluxions (Calculus)</h4>

      <p className="text-sm text-dark-300 mb-4">
        Newton called derivatives "fluxions"—the rate of change or "flow" of quantities.
        The position function s(t) has velocity ṡ(t) = ds/dt as its first fluxion,
        and acceleration s̈(t) = d²s/dt² as its second fluxion.
      </p>

      <canvas
        ref={canvasRef}
        width={500}
        height={300}
        className="w-full bg-dark-900 rounded-lg mb-4"
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
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showVelocity}
            onChange={(e) => setShowVelocity(e.target.checked)}
            className="accent-emerald-500"
          />
          <span className="text-sm text-emerald-400">Show Velocity (first fluxion)</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showAcceleration}
            onChange={(e) => setShowAcceleration(e.target.checked)}
            className="accent-amber-500"
          />
          <span className="text-sm text-amber-400">Show Acceleration (second fluxion)</span>
        </label>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <p className="text-sm text-dark-400">Current values at t = {time.toFixed(2)}:</p>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div>
            <span className="text-xs text-blue-400">Position</span>
            <p className="font-mono text-blue-400">{position(time).toFixed(3)}</p>
          </div>
          <div>
            <span className="text-xs text-emerald-400">Velocity</span>
            <p className="font-mono text-emerald-400">{velocity(time).toFixed(3)}</p>
          </div>
          <div>
            <span className="text-xs text-amber-400">Acceleration</span>
            <p className="font-mono text-amber-400">{acceleration(time).toFixed(3)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Newton's Method for Finding Roots
function NewtonsMethod() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [x0, setX0] = useState(3);
  const [iterations, setIterations] = useState<Array<{ x: number; fx: number; slope: number }>>([]);
  const [step, setStep] = useState(0);

  // Function: f(x) = x² - 2 (finding √2)
  const f = (x: number) => x * x - 2;
  const fPrime = (x: number) => 2 * x;

  const runNewtonMethod = () => {
    const results: Array<{ x: number; fx: number; slope: number }> = [];
    let x = x0;

    for (let i = 0; i < 6; i++) {
      const fx = f(x);
      const slope = fPrime(x);
      results.push({ x, fx, slope });
      if (Math.abs(fx) < 1e-10 || slope === 0) break;
      x = x - fx / slope;
    }

    setIterations(results);
    setStep(0);
  };

  useEffect(() => {
    runNewtonMethod();
  }, [x0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    const centerX = width / 2;
    const centerY = height * 0.7;
    const scaleX = width / 8;
    const scaleY = height / 12;

    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Draw f(x) = x² - 2
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = 0; px < width; px++) {
      const x = (px - centerX) / scaleX;
      const y = f(x);
      const py = centerY - y * scaleY;
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Mark √2 on axis
    const sqrt2X = centerX + Math.sqrt(2) * scaleX;
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(sqrt2X, centerY, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.font = '11px monospace';
    ctx.fillText('√2 ≈ 1.414', sqrt2X - 15, centerY + 20);

    // Draw Newton's method steps
    for (let i = 0; i <= step && i < iterations.length; i++) {
      const { x, fx, slope } = iterations[i];
      const px = centerX + x * scaleX;
      const py = centerY - fx * scaleY;

      // Point on curve
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, 2 * Math.PI);
      ctx.fill();

      // Tangent line
      if (i < step && i < iterations.length - 1) {
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        // Line from (x, f(x)) to (x - f(x)/f'(x), 0)
        const nextX = x - fx / slope;
        ctx.moveTo(px, py);
        ctx.lineTo(centerX + nextX * scaleX, centerY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Vertical line to next point
        ctx.strokeStyle = '#6b7280';
        ctx.beginPath();
        ctx.moveTo(centerX + nextX * scaleX, centerY);
        ctx.lineTo(centerX + nextX * scaleX, centerY - f(nextX) * scaleY);
        ctx.stroke();
      }

      // Label
      ctx.fillStyle = '#f59e0b';
      ctx.font = '10px monospace';
      ctx.fillText(`x${i}`, px - 5, py - 12);
    }

    // Legend
    ctx.font = '12px monospace';
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('f(x) = x² - 2', 10, 20);
    ctx.fillStyle = '#9ca3af';
    ctx.fillText('Finding √2', 10, 38);
  }, [iterations, step]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Newton's Method (Root Finding)</h4>

      <p className="text-sm text-dark-300 mb-4">
        Newton developed a powerful method for finding roots: start with a guess x₀,
        draw the tangent line at that point, and use where it crosses the x-axis as
        your next guess. The formula: <MathInline>{'x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}'}</MathInline>
      </p>

      <canvas
        ref={canvasRef}
        width={500}
        height={300}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-2">
            Starting guess x₀: <span className="text-primary-400 font-bold">{x0}</span>
          </label>
          <input
            type="range"
            min={1.5}
            max={4}
            step={0.1}
            value={x0}
            onChange={(e) => setX0(parseFloat(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-2">
            Step: <span className="text-primary-400 font-bold">{step + 1} / {iterations.length}</span>
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="px-3 py-1 bg-dark-700 rounded disabled:opacity-50"
            >
              ←
            </button>
            <button
              onClick={() => setStep(Math.min(iterations.length - 1, step + 1))}
              disabled={step >= iterations.length - 1}
              className="px-3 py-1 bg-dark-700 rounded disabled:opacity-50"
            >
              →
            </button>
            <button
              onClick={() => setStep(iterations.length - 1)}
              className="px-3 py-1 bg-primary-600 rounded"
            >
              All
            </button>
          </div>
        </div>
      </div>

      {/* Iteration table */}
      <div className="bg-dark-800 p-4 rounded-lg overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-700">
              <th className="text-left py-2">n</th>
              <th className="text-left py-2">xₙ</th>
              <th className="text-left py-2">f(xₙ)</th>
              <th className="text-left py-2">Error from √2</th>
            </tr>
          </thead>
          <tbody>
            {iterations.map((iter, i) => (
              <tr
                key={i}
                className={`${i <= step ? '' : 'opacity-30'} ${
                  i === step ? 'bg-dark-700' : ''
                }`}
              >
                <td className="py-1 font-mono">{i}</td>
                <td className="py-1 font-mono text-amber-400">{iter.x.toFixed(10)}</td>
                <td className="py-1 font-mono text-blue-400">{iter.fx.toFixed(10)}</td>
                <td className="py-1 font-mono text-emerald-400">
                  {Math.abs(iter.x - Math.sqrt(2)).toExponential(4)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="success">
        <p>
          <strong>Quadratic Convergence:</strong> Notice how the error roughly squares with each
          iteration! This "quadratic convergence" makes Newton's method extremely fast—just a few
          iterations can give many decimal places of accuracy.
        </p>
      </Callout>
    </div>
  );
}

// Universal Gravitation Visualization
function GravitationDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mass1, setMass1] = useState(100);
  const [mass2, setMass2] = useState(20);
  const [distance, setDistance] = useState(100);
  const [running, setRunning] = useState(true);
  const [angle, setAngle] = useState(0);

  const G = 0.1; // Scaled gravitational constant
  const force = (G * mass1 * mass2) / (distance * distance);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setAngle(a => (a + 0.02) % (2 * Math.PI));
    }, 50);
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, width, height);

    // Stars background
    ctx.fillStyle = '#374151';
    for (let i = 0; i < 50; i++) {
      const x = (i * 73 + 17) % width;
      const y = (i * 47 + 23) % height;
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Draw Sun (mass1)
    const sunRadius = Math.sqrt(mass1) / 2;
    const gradient1 = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, sunRadius);
    gradient1.addColorStop(0, '#fef08a');
    gradient1.addColorStop(0.8, '#f59e0b');
    gradient1.addColorStop(1, '#b45309');
    ctx.fillStyle = gradient1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, sunRadius, 0, 2 * Math.PI);
    ctx.fill();

    // Draw orbit path
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, distance, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.setLineDash([]);

    // Calculate planet position
    const planetX = centerX + Math.cos(angle) * distance;
    const planetY = centerY + Math.sin(angle) * distance;
    const planetRadius = Math.sqrt(mass2) / 2;

    // Draw planet (mass2)
    const gradient2 = ctx.createRadialGradient(planetX, planetY, 0, planetX, planetY, planetRadius);
    gradient2.addColorStop(0, '#60a5fa');
    gradient2.addColorStop(1, '#1e40af');
    ctx.fillStyle = gradient2;
    ctx.beginPath();
    ctx.arc(planetX, planetY, planetRadius, 0, 2 * Math.PI);
    ctx.fill();

    // Draw force vector (pointing toward sun)
    const forceScale = Math.min(force * 5, 80);
    const forceAngle = Math.atan2(centerY - planetY, centerX - planetX);
    const arrowX = planetX + Math.cos(forceAngle) * forceScale;
    const arrowY = planetY + Math.sin(forceAngle) * forceScale;

    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(planetX, planetY);
    ctx.lineTo(arrowX, arrowY);
    ctx.stroke();

    // Arrow head
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(
      arrowX - 10 * Math.cos(forceAngle - 0.3),
      arrowY - 10 * Math.sin(forceAngle - 0.3)
    );
    ctx.lineTo(
      arrowX - 10 * Math.cos(forceAngle + 0.3),
      arrowY - 10 * Math.sin(forceAngle + 0.3)
    );
    ctx.closePath();
    ctx.fill();

    // Labels
    ctx.font = '12px monospace';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('M₁', centerX - 8, centerY + sunRadius + 15);
    ctx.fillStyle = '#60a5fa';
    ctx.fillText('M₂', planetX - 8, planetY + planetRadius + 15);
    ctx.fillStyle = '#ef4444';
    ctx.fillText('F', arrowX + 5, arrowY - 5);
  }, [mass1, mass2, distance, angle]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Universal Gravitation</h4>

      <p className="text-sm text-dark-300 mb-4">
        Newton's law of universal gravitation states that every mass attracts every other
        mass with a force proportional to the product of their masses and inversely
        proportional to the square of the distance between them.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`F = G \\frac{M_1 M_2}{r^2}`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={500}
        height={350}
        className="w-full bg-dark-950 rounded-lg mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-amber-400 block mb-1">
            Sun Mass (M₁): {mass1}
          </label>
          <input
            type="range"
            min={50}
            max={200}
            value={mass1}
            onChange={(e) => setMass1(parseInt(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
        <div>
          <label className="text-sm text-blue-400 block mb-1">
            Planet Mass (M₂): {mass2}
          </label>
          <input
            type="range"
            min={5}
            max={50}
            value={mass2}
            onChange={(e) => setMass2(parseInt(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">
            Distance (r): {distance}
          </label>
          <input
            type="range"
            min={60}
            max={150}
            value={distance}
            onChange={(e) => setDistance(parseInt(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setRunning(!running)}
            className={`px-4 py-2 rounded ${
              running ? 'bg-red-600' : 'bg-emerald-600'
            } text-white`}
          >
            {running ? 'Pause' : 'Orbit'}
          </button>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <p className="text-sm text-dark-400">Gravitational Force:</p>
        <p className="text-2xl font-mono text-red-400">
          F = {force.toFixed(4)} (scaled units)
        </p>
        <p className="text-xs text-dark-500 mt-2">
          Double the distance → Force becomes ¼ (inverse square law)
        </p>
      </div>
    </div>
  );
}

// Binomial Series for Non-Integer Exponents
function BinomialSeries() {
  const [n, setN] = useState(0.5);
  const [x, setX] = useState(0.3);
  const [terms, setTerms] = useState(5);

  // Calculate binomial coefficient for any real n
  const binomialCoeff = (n: number, k: number): number => {
    if (k === 0) return 1;
    let result = 1;
    for (let i = 0; i < k; i++) {
      result *= (n - i) / (i + 1);
    }
    return result;
  };

  // Calculate partial sum
  const partialSum = (): number => {
    let sum = 0;
    for (let k = 0; k < terms; k++) {
      sum += binomialCoeff(n, k) * Math.pow(x, k);
    }
    return sum;
  };

  // Actual value
  const actualValue = Math.pow(1 + x, n);
  const approximation = partialSum();
  const error = Math.abs(actualValue - approximation);

  // Generate terms for display
  const termsList = Array.from({ length: Math.min(terms, 6) }, (_, k) => ({
    k,
    coeff: binomialCoeff(n, k),
    term: binomialCoeff(n, k) * Math.pow(x, k),
  }));

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Generalized Binomial Theorem</h4>

      <p className="text-sm text-dark-300 mb-4">
        Newton extended the binomial theorem to work with any exponent n, not just positive
        integers. This gives infinite series that converge for |x| {"<"} 1:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`(1+x)^n = \\sum_{k=0}^{\\infty} \\binom{n}{k} x^k = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\cdots`}
        </MathBlock>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-1">
            Exponent n: <span className="text-primary-400">{n.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min={-2}
            max={2}
            step={0.1}
            value={n}
            onChange={(e) => setN(parseFloat(e.target.value))}
            className="w-full accent-primary-500"
          />
          <div className="flex gap-2 mt-1">
            <button onClick={() => setN(0.5)} className="text-xs px-2 py-1 bg-dark-700 rounded">√ (n=0.5)</button>
            <button onClick={() => setN(-1)} className="text-xs px-2 py-1 bg-dark-700 rounded">1/ (n=-1)</button>
          </div>
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">
            x value: <span className="text-primary-400">{x.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min={-0.9}
            max={0.9}
            step={0.05}
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">
            Terms: <span className="text-primary-400">{terms}</span>
          </label>
          <input
            type="range"
            min={1}
            max={15}
            value={terms}
            onChange={(e) => setTerms(parseInt(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
      </div>

      {/* Series expansion */}
      <div className="bg-dark-800 p-4 rounded-lg mb-4 overflow-x-auto">
        <p className="text-sm text-dark-400 mb-2">
          Computing (1 + {x.toFixed(2)})^{n.toFixed(2)} ≈
        </p>
        <div className="flex flex-wrap gap-2 text-sm font-mono">
          {termsList.map((term, i) => (
            <span key={i}>
              {i > 0 && <span className="text-dark-500"> + </span>}
              <span className={term.term >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                {term.term.toFixed(4)}
              </span>
            </span>
          ))}
          {terms > 6 && <span className="text-dark-500">...</span>}
        </div>
      </div>

      {/* Results comparison */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Series Approximation</p>
          <p className="text-xl font-mono text-amber-400">{approximation.toFixed(8)}</p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Actual Value</p>
          <p className="text-xl font-mono text-emerald-400">{actualValue.toFixed(8)}</p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Error</p>
          <p className="text-xl font-mono text-red-400">{error.toExponential(4)}</p>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>Try n = 0.5:</strong> This gives √(1+x). Newton used this to calculate
          square roots to many decimal places—a practical application of his infinite series!
        </p>
      </Callout>
    </div>
  );
}

// Principia's Three Laws
function PrincipiaLaws() {
  const [selectedLaw, setSelectedLaw] = useState(1);

  const laws = [
    {
      num: 1,
      title: "Law of Inertia",
      statement: "Every body perseveres in its state of rest, or of uniform motion in a right line, unless it is compelled to change that state by forces impressed thereon.",
      modern: "An object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by an external force.",
      math: "\\vec{F}_{net} = 0 \\Rightarrow \\vec{v} = \\text{constant}",
    },
    {
      num: 2,
      title: "Law of Acceleration",
      statement: "The alteration of motion is ever proportional to the motive force impressed; and is made in the direction of the right line in which that force is impressed.",
      modern: "The acceleration of an object is proportional to the net force acting on it and inversely proportional to its mass.",
      math: "\\vec{F} = m\\vec{a}",
    },
    {
      num: 3,
      title: "Law of Action-Reaction",
      statement: "To every action there is always opposed an equal reaction: or the mutual actions of two bodies upon each other are always equal, and directed to contrary parts.",
      modern: "For every action, there is an equal and opposite reaction.",
      math: "\\vec{F}_{12} = -\\vec{F}_{21}",
    },
  ];

  const law = laws[selectedLaw - 1];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Newton's Laws of Motion (Principia, 1687)</h4>

      <div className="flex gap-2 mb-4">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setSelectedLaw(num)}
            className={`flex-1 py-2 rounded ${
              selectedLaw === num
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300'
            }`}
          >
            Law {num}
          </button>
        ))}
      </div>

      <div className="bg-dark-800 p-6 rounded-lg">
        <h5 className="text-lg font-semibold text-primary-400 mb-3">
          {law.num}. {law.title}
        </h5>

        <div className="mb-4">
          <p className="text-xs text-dark-500 uppercase mb-1">Newton's Original (1687)</p>
          <p className="text-sm text-dark-300 italic">"{law.statement}"</p>
        </div>

        <div className="mb-4">
          <p className="text-xs text-dark-500 uppercase mb-1">Modern Statement</p>
          <p className="text-dark-200">{law.modern}</p>
        </div>

        <MathBlock>{law.math}</MathBlock>
      </div>
    </div>
  );
}

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Isaac Newton stands as perhaps the most influential scientist in history. In a span
        of just two years (1665-1667), during the plague years when Cambridge was closed,
        Newton developed calculus, discovered the laws of motion, formulated the theory of
        universal gravitation, and pioneered the study of optics. Any one of these would
        have secured his immortality; together, they revolutionized human understanding.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "If I have seen further it is by standing on the shoulders of Giants."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Isaac Newton, letter to Robert Hooke (1675)
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Miracle Years</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Isaac Newton (1642–1727) was born prematurely on Christmas Day in Woolsthorpe,
            Lincolnshire, England—so small he "could have been put into a quart mug." His
            father died before his birth, and his mother remarried when he was three, leaving
            him to be raised by his grandmother. This abandonment scarred Newton, contributing
            to the suspicious, secretive personality that marked his adult life.
          </p>
          <p className="mb-4">
            At Cambridge, Newton absorbed the works of Descartes, Kepler, and Galileo. When
            the Great Plague closed the university in 1665-1666, Newton retreated to Woolsthorpe.
            In this isolation, during what he later called his <em>annus mirabilis</em> (miracle years),
            the 23-year-old developed the foundations of calculus, discovered the composition of
            white light, and conceived the law of universal gravitation.
          </p>
          <p>
            Yet Newton published almost nothing for two decades, revealing his discoveries only
            reluctantly and often only when others seemed close to the same ideas—leading to
            bitter priority disputes, especially with Leibniz over calculus.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> Dec 25, 1642 (OS), Woolsthorpe</li>
            <li><strong>Died:</strong> March 31, 1727</li>
            <li><strong>Major Work:</strong> Principia (1687)</li>
            <li><strong>Positions:</strong> Lucasian Professor, Warden of the Mint</li>
            <li><strong>Knighted:</strong> 1705</li>
          </ul>
        </Card>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Solitary Genius:</strong> Newton was notoriously difficult—vindictive toward
          rivals, secretive about his work, and prone to nervous breakdowns. He spent more time
          on alchemy and biblical chronology than on physics. Yet his mathematical and scientific
          achievements transcend his personality, shaping science for the next three centuries.
        </p>
      </Callout>

      {/* Calculus */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Invention of Calculus</h2>

      <p className="mb-4">
        Newton called his calculus the "method of fluxions." Where we write dy/dx, Newton wrote
        ẏ (y-dot) for the "fluxion" or rate of change of y. His approach was deeply physical:
        quantities "flow" through time, and fluxions measure the speed of that flow.
      </p>

      <FluxionsDemo />

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Newton's Notation</h4>
          <p className="text-sm text-dark-300 mb-2">
            Dots over variables: ẋ for dx/dt, ẍ for d²x/dt². Still used in physics for
            time derivatives.
          </p>
          <MathBlock>{`\\dot{x} = \\frac{dx}{dt}, \\quad \\ddot{x} = \\frac{d^2x}{dt^2}`}</MathBlock>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Leibniz's Notation</h4>
          <p className="text-sm text-dark-300 mb-2">
            The dx, dy notation we use today. More flexible and better suited for manipulation.
          </p>
          <MathBlock>{`\\frac{dy}{dx}, \\quad \\frac{d^2y}{dx^2}, \\quad \\int y\\,dx`}</MathBlock>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          <strong>The Priority Dispute:</strong> Newton developed calculus in 1665-1666 but didn't
          publish until 1704. Leibniz published first in 1684. The resulting dispute—with Newton
          accusing Leibniz of plagiarism—poisoned relations between English and Continental
          mathematics for a century, to England's detriment.
        </p>
      </Callout>

      {/* Newton's Method */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Newton's Method</h2>

      <p className="mb-4">
        Among Newton's practical contributions is an iterative method for finding roots of
        equations—where a function equals zero. The method uses calculus to rapidly converge
        to solutions that would be impossible to find algebraically.
      </p>

      <NewtonsMethod />

      {/* Universal Gravitation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Universal Gravitation</h2>

      <p className="mb-4">
        The legend of the falling apple contains a grain of truth: Newton realized that the
        same force pulling an apple to Earth also holds the Moon in orbit. The key insight
        was that gravity follows an inverse-square law—doubling the distance reduces the
        force to one-quarter.
      </p>

      <GravitationDemo />

      <p className="my-4">
        In the <em>Principia</em> (1687), Newton showed that Kepler's laws of planetary motion
        follow mathematically from the inverse-square law of gravitation. This unified terrestrial
        and celestial physics for the first time—an apple and a planet obey the same law.
      </p>

      {/* Laws of Motion */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Laws of Motion</h2>

      <p className="mb-4">
        The <em>Philosophiæ Naturalis Principia Mathematica</em> (Mathematical Principles of
        Natural Philosophy) opens with three axioms—the laws of motion—from which Newton
        derives the behavior of everything from cannonballs to comets.
      </p>

      <PrincipiaLaws />

      <Callout type="success">
        <p>
          <strong>The Principia:</strong> Edmund Halley (of Halley's Comet fame) funded and
          cajoled Newton into publishing. The result, the Principia (1687), is considered the
          most important scientific book ever written—a complete mathematical framework for
          understanding motion and gravitation that stood unchallenged until Einstein.
        </p>
      </Callout>

      {/* Binomial Theorem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Generalized Binomial Theorem</h2>

      <p className="mb-4">
        While Pascal's triangle gives (1+x)ⁿ for positive integers n, Newton extended the
        binomial theorem to <em>any</em> exponent—including fractions and negatives. This
        produces infinite series that opened new realms of mathematical analysis.
      </p>

      <BinomialSeries />

      {/* Other Achievements */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Other Achievements</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Optics</h4>
          <p className="text-sm text-dark-300">
            Newton showed that white light is composed of all colors, refracted differently
            by a prism. He invented the reflecting telescope to avoid chromatic aberration
            in lenses.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Newton's Identities</h4>
          <p className="text-sm text-dark-300">
            Relationships between the roots of a polynomial and its coefficients—still
            fundamental in algebra and combinatorics.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Classification of Cubics</h4>
          <p className="text-sm text-dark-300">
            Newton classified all cubic curves into 72 species—a systematic study of algebraic
            curves that advanced geometry considerably.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Warden of the Mint</h4>
          <p className="text-sm text-dark-300">
            From 1696, Newton oversaw England's currency recoinage. He prosecuted counterfeiters
            ruthlessly, sending many to the gallows.
          </p>
        </div>
      </div>

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell devotes more space to Newton than to any other mathematician in the book,
        portraying him as the supreme genius whose work created modern mathematical physics:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Newton is the supreme genius of all time... His achievement was to create a new
        conception of the universe and to verify it by exact calculation."
      </blockquote>

      <p className="my-4">
        Bell doesn't shy away from Newton's dark side: his paranoid secrecy, his vicious
        treatment of Leibniz and Hooke, his nervous collapse of 1693. Yet the work transcends
        the man—the Principia unified physics and inaugurated the Age of Reason.
      </p>

      <Callout type="info">
        <p>
          <strong>Pope's Epitaph:</strong> "Nature and Nature's laws lay hid in night: /
          God said, Let Newton be! and all was light." Alexander Pope captured how Newton's
          contemporaries saw him—as bringing light to the darkness, revealing the mathematical
          order underlying all things.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Isaac Newton (1642–1727) developed calculus, the laws of motion, and universal
              gravitation, unifying terrestrial and celestial physics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              His "method of fluxions" (calculus) treats variables as flowing quantities,
              with fluxions (derivatives) measuring rates of change.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The <em>Principia Mathematica</em> (1687) laid out the three laws of motion and
              showed that Kepler's planetary laws follow from inverse-square gravitation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              Newton generalized the binomial theorem to any exponent, enabling infinite series
              expansions that became fundamental to analysis.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              Newton's method for finding roots uses tangent lines to converge rapidly to
              solutions—still used today in numerical computing.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
