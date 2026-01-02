import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, InlineMath } from '@/components/common';

// Interactive Kovalevskaya Top Demo
function KovalevskayaTopDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [topType, setTopType] = useState<'euler' | 'lagrange' | 'kovalevskaya'>('kovalevskaya');
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2 + 30;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Parameters based on top type
    const params = {
      euler: { A: 1, B: 1, C: 2, x0: 0, name: 'Euler' },
      lagrange: { A: 1, B: 1, C: 1, x0: 0, name: 'Lagrange' },
      kovalevskaya: { A: 2, B: 2, C: 1, x0: 0.5, name: 'Kovalevskaya' },
    };

    const p = params[topType];

    // Draw the top (simplified 3D projection)
    const t = time;
    const omega = 2;
    const precession = 0.5;

    // Rotation angles
    const theta = Math.PI / 4 + 0.2 * Math.sin(omega * t);
    const phi = precession * t;
    const psi = omega * t * (topType === 'kovalevskaya' ? 1.5 : 1);

    // Draw vertical axis
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - 120);
    ctx.lineTo(centerX, centerY + 50);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw base point
    ctx.fillStyle = '#6b7280';
    ctx.beginPath();
    ctx.arc(centerX, centerY + 50, 5, 0, Math.PI * 2);
    ctx.fill();

    // Calculate top orientation
    const length = 100;
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);
    const cosPhi = Math.cos(phi);
    const sinPhi = Math.sin(phi);

    // Top axis endpoint
    const topX = centerX + length * sinTheta * sinPhi;
    const topY = centerY - length * cosTheta + 50;

    // Draw top body
    const bodyWidth = topType === 'kovalevskaya' ? 40 : 25;
    const bodyHeight = topType === 'kovalevskaya' ? 20 : 25;

    // Draw elliptical body
    ctx.save();
    ctx.translate(topX, topY);
    ctx.rotate(phi + psi);

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, bodyWidth);
    gradient.addColorStop(0, topType === 'kovalevskaya' ? '#a855f7' : '#3b82f6');
    gradient.addColorStop(1, topType === 'kovalevskaya' ? '#7c3aed' : '#1d4ed8');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(0, 0, bodyWidth, bodyHeight, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw center of mass indicator for Kovalevskaya case
    if (topType === 'kovalevskaya') {
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(15, 0, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();

    // Draw axis of rotation
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + 50);
    ctx.lineTo(topX, topY);
    ctx.stroke();

    // Draw angular momentum vector
    const Lx = centerX + 60 * sinPhi;
    const Ly = centerY - 60;
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(Lx, Ly);
    ctx.stroke();

    // Arrow head
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.moveTo(Lx, Ly);
    ctx.lineTo(Lx - 5, Ly + 10);
    ctx.lineTo(Lx + 5, Ly + 10);
    ctx.fill();

    // Labels
    ctx.fillStyle = '#d1d5db';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText(`${p.name} Top`, 20, 25);

    ctx.font = '12px system-ui';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('L (angular momentum)', Lx + 10, Ly);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px system-ui';
    ctx.fillText(`I₁ = I₂ = ${p.A}, I₃ = ${p.C}`, 20, height - 40);
    if (topType === 'kovalevskaya') {
      ctx.fillStyle = '#ef4444';
      ctx.fillText('Center of mass offset!', 20, height - 20);
    }

  }, [time, topType]);

  useEffect(() => {
    if (!isRunning) return;

    const animate = () => {
      setTime(t => t + 0.03);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning]);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Integrable Spinning Tops</h4>
        <div className="flex gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3 py-1 rounded ${
              isRunning ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
            }`}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={() => { setTime(0); setIsRunning(false); }}
            className="px-3 py-1 bg-dark-700 text-dark-200 rounded hover:bg-dark-600"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {(['euler', 'lagrange', 'kovalevskaya'] as const).map(type => (
          <button
            key={type}
            onClick={() => setTopType(type)}
            className={`px-3 py-1 rounded text-sm ${
              topType === type
                ? 'bg-purple-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={350}
        className="w-full border border-dark-700 rounded"
      />
      <p className="text-sm text-dark-400 mt-2">
        Kovalevskaya discovered the third integrable case: I₁ = I₂ = 2I₃ with offset center of mass.
      </p>
    </div>
  );
}

// Cauchy-Kovalevskaya Theorem Demo
function CauchyKovalevskayaDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Draw coordinate axes
    const originX = 80;
    const originY = height - 50;

    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(originX, 30);
    ctx.lineTo(originX, originY);
    ctx.lineTo(width - 30, originY);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - 20, originY + 5);
    ctx.fillText('t', originX, 20);

    // Draw initial curve (at t=0)
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let x = 0; x <= width - originX - 30; x += 2) {
      const xVal = x / 50;
      const y = originY - 20 * Math.sin(xVal * 2);
      if (x === 0) ctx.moveTo(originX + x, y);
      else ctx.lineTo(originX + x, y);
    }
    ctx.stroke();

    ctx.fillStyle = '#3b82f6';
    ctx.font = '12px system-ui';
    ctx.fillText('Initial data u(x, 0) = f(x)', width / 2 + 40, originY - 5);

    // Draw solution surface if enabled
    if (showSolution) {
      // Draw characteristic curves and solution
      for (let t = 1; t <= 5; t++) {
        const tPos = originY - t * 35;
        const alpha = 0.3 + t * 0.1;

        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x <= width - originX - 30; x += 2) {
          const xVal = x / 50;
          // Wave equation solution
          const y = tPos - 20 * Math.sin(xVal * 2 - t * 0.5) * Math.exp(-t * 0.1);
          if (x === 0) ctx.moveTo(originX + x, y);
          else ctx.lineTo(originX + x, y);
        }
        ctx.stroke();
      }

      // Draw "cone of dependence" region
      ctx.fillStyle = 'rgba(34, 197, 94, 0.2)';
      ctx.beginPath();
      ctx.moveTo(originX + 150, originY - 20);
      ctx.lineTo(originX + 100, originY - 150);
      ctx.lineTo(originX + 200, originY - 150);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#22c55e';
      ctx.font = '11px system-ui';
      ctx.fillText('Domain of', originX + 150, originY - 80);
      ctx.fillText('dependence', originX + 150, originY - 65);
    }

    // Title
    ctx.fillStyle = '#d1d5db';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('Cauchy Problem: Initial Value → Unique Solution', 20, 25);

  }, [showSolution]);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Cauchy-Kovalevskaya Theorem</h4>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className={`px-3 py-1 rounded ${
            showSolution ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          {showSolution ? 'Hide' : 'Show'} Solution
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={500}
        height={280}
        className="w-full border border-dark-700 rounded"
      />
      <p className="text-sm text-dark-400 mt-2">
        Given analytic initial data, a unique analytic solution exists locally.
      </p>
    </div>
  );
}

// Saturn's Rings Demo
function SaturnRingsDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Draw Saturn
    const saturnRadius = 40;
    const gradient = ctx.createRadialGradient(
      centerX - 10, centerY - 10, 0,
      centerX, centerY, saturnRadius
    );
    gradient.addColorStop(0, '#f4d58d');
    gradient.addColorStop(0.5, '#d4a373');
    gradient.addColorStop(1, '#bc6c25');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, saturnRadius, 0, Math.PI * 2);
    ctx.fill();

    // Draw rings as particle orbits
    const numParticles = 200;
    const innerRadius = 60;
    const outerRadius = 120;

    for (let i = 0; i < numParticles; i++) {
      const r = innerRadius + (outerRadius - innerRadius) * Math.random();
      const angle = (2 * Math.PI * i / numParticles) + time * (120 / r);

      // Add some variation
      const wobble = 5 * Math.sin(i * 0.5 + time);

      const x = centerX + r * Math.cos(angle);
      const y = centerY + (r * 0.3 + wobble * 0.1) * Math.sin(angle);

      // Only draw if in front of planet or outside
      const inFront = y > centerY || r > saturnRadius + 20;

      if (inFront) {
        const brightness = 0.3 + 0.7 * (1 - (r - innerRadius) / (outerRadius - innerRadius));
        ctx.fillStyle = `rgba(200, 180, 150, ${brightness})`;
        ctx.beginPath();
        ctx.arc(x, y, 1 + Math.random(), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw ring gaps (Cassini division)
    ctx.strokeStyle = 'rgba(26, 26, 46, 0.5)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, 85, 25, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Label
    ctx.fillStyle = '#d1d5db';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Shape and Stability of Saturn\'s Rings', centerX, 25);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px system-ui';
    ctx.fillText('Laplace\'s problem: Can a solid ring be stable?', centerX, height - 20);
    ctx.fillText('Kovalevskaya studied the mathematics of ring stability', centerX, height - 5);

  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.02);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Saturn's Rings</h4>
      <canvas
        ref={canvasRef}
        width={400}
        height={280}
        className="w-full border border-dark-700 rounded"
      />
      <p className="text-sm text-dark-400 mt-2">
        Kovalevskaya's early work included studying the stability of planetary rings.
      </p>
    </div>
  );
}

// Barriers Broken Demo
function BarriersBrokenDemo() {
  const milestones = [
    {
      year: '1868',
      title: 'Marriage of Convenience',
      desc: 'Married Vladimir Kovalevsky to escape Russia and study abroad—women could not travel alone or attend university',
      icon: '💍',
    },
    {
      year: '1874',
      title: 'First Woman Ph.D. in Math',
      desc: 'Received doctorate summa cum laude from Göttingen, but no university would hire her',
      icon: '🎓',
    },
    {
      year: '1884',
      title: 'Professor at Stockholm',
      desc: 'First woman to hold a university chair in Northern Europe (except Italy)',
      icon: '🏛️',
    },
    {
      year: '1888',
      title: 'Prix Bordin',
      desc: 'Won French Academy prize for work on rotating bodies—prize increased due to exceptional quality',
      icon: '🏆',
    },
    {
      year: '1889',
      title: 'Academy Correspondent',
      desc: 'First woman elected to Russian Academy of Sciences (as corresponding member)',
      icon: '⭐',
    },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Breaking Barriers</h4>
      <div className="space-y-4">
        {milestones.map((m, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="text-3xl">{m.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-purple-400 font-mono">{m.year}</span>
                <span className="text-dark-100 font-semibold">{m.title}</span>
              </div>
              <p className="text-dark-400 text-sm">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Abelian Integrals Demo
function AbelianIntegralsDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [curveType, setCurveType] = useState<'elliptic' | 'hyperelliptic'>('elliptic');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 30;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, centerY);
    ctx.lineTo(width - 30, centerY);
    ctx.moveTo(centerX, 30);
    ctx.lineTo(centerX, height - 30);
    ctx.stroke();

    // Draw the algebraic curve
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;

    if (curveType === 'elliptic') {
      // y² = x³ - x (elliptic curve)
      ctx.beginPath();
      for (let x = -2; x <= 3; x += 0.02) {
        const rhs = x * x * x - x;
        if (rhs >= 0) {
          const y = Math.sqrt(rhs);
          const px = centerX + x * scale;
          const py1 = centerY - y * scale;
          const py2 = centerY + y * scale;

          if (x === -1 || (x > -1 && x < 0)) {
            ctx.moveTo(px, py1);
          }
          ctx.lineTo(px, py1);
        }
      }
      ctx.stroke();

      // Lower branch
      ctx.beginPath();
      for (let x = -1; x <= 3; x += 0.02) {
        const rhs = x * x * x - x;
        if (rhs >= 0) {
          const y = -Math.sqrt(rhs);
          const px = centerX + x * scale;
          const py = centerY - y * scale;
          if (x === -1 || (x > -1 && x - 0.02 < 0 && x >= 0)) {
            ctx.moveTo(px, py);
          }
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      // Separate component
      ctx.beginPath();
      for (let x = -2; x <= -1; x += 0.02) {
        const rhs = x * x * x - x;
        if (rhs >= 0) {
          const y = Math.sqrt(rhs);
          const px = centerX + x * scale;
          ctx.lineTo(px, centerY - y * scale);
        }
      }
      for (let x = -1; x >= -2; x -= 0.02) {
        const rhs = x * x * x - x;
        if (rhs >= 0) {
          const y = -Math.sqrt(rhs);
          const px = centerX + x * scale;
          ctx.lineTo(px, centerY - y * scale);
        }
      }
      ctx.stroke();

    } else {
      // y² = x⁵ - x (hyperelliptic curve, genus 2)
      ctx.beginPath();
      for (let x = -1.5; x <= 2; x += 0.02) {
        const rhs = Math.pow(x, 5) - x;
        if (rhs >= 0) {
          const y = Math.sqrt(rhs);
          const px = centerX + x * scale * 1.5;
          const py = centerY - y * scale * 0.3;
          ctx.lineTo(px, py);
        } else {
          ctx.moveTo(centerX + (x + 0.02) * scale * 1.5, centerY);
        }
      }
      ctx.stroke();

      ctx.beginPath();
      for (let x = -1.5; x <= 2; x += 0.02) {
        const rhs = Math.pow(x, 5) - x;
        if (rhs >= 0) {
          const y = -Math.sqrt(rhs);
          const px = centerX + x * scale * 1.5;
          const py = centerY - y * scale * 0.3;
          ctx.lineTo(px, py);
        } else {
          ctx.moveTo(centerX + (x + 0.02) * scale * 1.5, centerY);
        }
      }
      ctx.stroke();
    }

    // Labels
    ctx.fillStyle = '#d1d5db';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'left';
    if (curveType === 'elliptic') {
      ctx.fillText('Elliptic Curve: y² = x³ - x', 20, 25);
      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px system-ui';
      ctx.fillText('genus g = 1', 20, 45);
    } else {
      ctx.fillText('Hyperelliptic Curve: y² = x⁵ - x', 20, 25);
      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px system-ui';
      ctx.fillText('genus g = 2', 20, 45);
    }

    ctx.fillStyle = '#9ca3af';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - 20, centerY - 10);
    ctx.fillText('y', centerX + 15, 35);

  }, [curveType]);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Abelian Integrals</h4>
        <div className="flex gap-2">
          <button
            onClick={() => setCurveType('elliptic')}
            className={`px-3 py-1 rounded text-sm ${
              curveType === 'elliptic' ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            Elliptic
          </button>
          <button
            onClick={() => setCurveType('hyperelliptic')}
            className={`px-3 py-1 rounded text-sm ${
              curveType === 'hyperelliptic' ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            Hyperelliptic
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={400}
        height={280}
        className="w-full border border-dark-700 rounded"
      />
      <p className="text-sm text-dark-400 mt-2">
        Kovalevskaya's thesis included work on reducing Abelian integrals to simpler forms.
      </p>
    </div>
  );
}

export default function Section33() {
  return (
    <LessonLayout
      title="Sofia Kovalevskaya"
      subtitle="Against All Odds"
      sectionIndex={33}
      previousSection={{ path: '/section/32', title: 'Poincare' }}
      nextSection={{ path: '/', title: 'Home' }}
    >
      {/* Introduction */}
      <section className="mb-12">
        <Callout type="quote">
          "It is impossible to be a mathematician without being a poet in soul." — Sofia Kovalevskaya
        </Callout>

        <p className="text-lg text-dark-200 mt-6">
          <strong className="text-dark-100">Sofia Vasilyevna Kovalevskaya</strong> (1850-1891) was
          the first major female mathematician in modern Europe and one of the first women anywhere
          to obtain a doctorate in mathematics. She overcame immense obstacles—legal barriers,
          institutional prejudice, and personal tragedy—to make lasting contributions to analysis
          and mathematical physics.
        </p>

        <div className="mt-6 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <h4 className="text-lg font-semibold text-dark-100 mb-2">Why Kovalevskaya Matters</h4>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>First woman to earn a doctorate in mathematics (summa cum laude)</li>
            <li>First woman professor of mathematics in Northern Europe</li>
            <li>Proved the Cauchy-Kovalevskaya theorem on PDEs</li>
            <li>Discovered the third integrable case of rigid body rotation</li>
            <li>Won the prestigious Prix Bordin from the French Academy</li>
            <li>Pioneered the path for women in mathematics</li>
          </ul>
        </div>
      </section>

      {/* The Kovalevskaya Top */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">The Kovalevskaya Top</h2>

        <p className="text-dark-300 mb-4">
          The problem of a spinning rigid body under gravity had been solved only for two special
          cases: Euler's (no gravity torque) and Lagrange's (symmetric top). For 100 years,
          mathematicians sought a third integrable case. Kovalevskaya found it—with a completely
          unexpected geometry.
        </p>

        <KovalevskayaTopDemo />

        <div className="mt-4 p-4 bg-dark-800 rounded-lg">
          <h4 className="text-lg font-semibold text-dark-100 mb-2">The Three Integrable Cases</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            <div className="bg-dark-900 p-3 rounded">
              <div className="text-blue-400 font-semibold">Euler (1758)</div>
              <p className="text-sm text-dark-300 mt-1">
                Center of mass at fixed point. Any moments of inertia.
              </p>
            </div>
            <div className="bg-dark-900 p-3 rounded">
              <div className="text-blue-400 font-semibold">Lagrange (1788)</div>
              <p className="text-sm text-dark-300 mt-1">
                Symmetric top: I₁ = I₂. Center of mass on symmetry axis.
              </p>
            </div>
            <div className="bg-dark-900 p-3 rounded">
              <div className="text-purple-400 font-semibold">Kovalevskaya (1888)</div>
              <p className="text-sm text-dark-300 mt-1">
                I₁ = I₂ = 2I₃. Center of mass in equatorial plane!
              </p>
            </div>
          </div>
        </div>

        <MathBlock
          latex="I_1 = I_2 = 2I_3, \quad \text{center of mass at } (a, 0, 0)"
          description="Kovalevskaya's conditions for integrability"
        />

        <Callout type="insight" className="mt-4">
          The Kovalevskaya top has a strange, asymmetric shape—like a flat disk with a weight
          attached to one edge. No one expected such a case to be integrable. She found a hidden
          fourth constant of motion using hyperelliptic functions.
        </Callout>
      </section>

      {/* Cauchy-Kovalevskaya Theorem */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">The Cauchy-Kovalevskaya Theorem</h2>

        <p className="text-dark-300 mb-4">
          One of the fundamental theorems in partial differential equations, this result guarantees
          that under certain conditions, an initial value problem has a unique analytic solution.
          Kovalevskaya generalized Cauchy's work to handle systems of PDEs in multiple variables.
        </p>

        <CauchyKovalevskayaDemo />

        <MathBlock
          latex="\frac{\partial u}{\partial t} = F\left(t, x, u, \frac{\partial u}{\partial x}\right), \quad u(x, 0) = f(x)"
          description="The Cauchy problem: find u given initial data f"
        />

        <div className="mt-4 p-4 bg-dark-800 rounded-lg">
          <h4 className="text-lg font-semibold text-dark-100 mb-2">Theorem Statement</h4>
          <p className="text-dark-300">
            If F and f are analytic (expressible as power series), then there exists a unique
            analytic solution u(x, t) in a neighborhood of the initial surface. The solution
            can be computed by successively differentiating and using the equation.
          </p>
        </div>

        <Callout type="note" className="mt-4">
          This theorem is both powerful and limiting—it requires analyticity, which fails for
          many important equations. Kovalevskaya herself found counterexamples showing the
          theorem cannot be extended to non-analytic cases.
        </Callout>
      </section>

      {/* Barriers Broken */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Breaking Barriers</h2>

        <p className="text-dark-300 mb-4">
          Kovalevskaya's path to mathematics was blocked at every turn by laws and customs
          that barred women from higher education. Her determination and brilliance eventually
          broke through these barriers, opening doors for future generations.
        </p>

        <BarriersBrokenDemo />

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="The Wallpaper Story">
            <p className="text-sm text-dark-300">
              As a child, Sofia's nursery was temporarily papered with her father's old
              calculus lecture notes. She spent hours staring at the mysterious symbols,
              developing an early fascination with mathematics that never faded.
            </p>
          </Card>
          <Card title="A Fictitious Marriage">
            <p className="text-sm text-dark-300">
              To escape Russia where women couldn't attend university, Sofia arranged a
              marriage of convenience with Vladimir Kovalevsky. The marriage later became
              genuine, producing a daughter, before ending in tragedy with Vladimir's suicide.
            </p>
          </Card>
        </div>
      </section>

      {/* Other Work */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Other Mathematical Work</h2>

        <AbelianIntegralsDemo />

        <CardGrid columns={2}>
          <Card title="Abelian Integrals">
            <p className="text-sm text-dark-300">
              Her thesis work included reducing Abelian integrals to elliptic integrals,
              simplifying their computation. This connected to her later work on the
              Kovalevskaya top, which uses hyperelliptic functions.
            </p>
          </Card>
          <Card title="Saturn's Rings">
            <p className="text-sm text-dark-300">
              One of her three doctoral dissertations addressed the shape and stability
              of Saturn's rings, continuing work by Laplace. She analyzed whether a
              solid ring could be stable under gravitational forces.
            </p>
          </Card>
          <Card title="Lamé Equations">
            <p className="text-sm text-dark-300">
              Kovalevskaya studied the propagation of light in crystalline media,
              contributing to the theory of Lamé equations—a system of PDEs describing
              elastic deformation.
            </p>
          </Card>
          <Card title="Prix Bordin (1888)">
            <p className="text-sm text-dark-300">
              The French Academy increased the prize from 3000 to 5000 francs due to
              the exceptional quality of her work on rigid body rotation. She submitted
              anonymously, revealed only upon winning.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Rings Demo */}
      <section className="mb-12">
        <SaturnRingsDemo />
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Life and Career</h2>

        <div className="space-y-4">
          {[
            { year: '1850', event: 'Born in Moscow to an aristocratic family' },
            { year: '1868', event: 'Contracts marriage with Vladimir Kovalevsky' },
            { year: '1869', event: 'Studies with Weierstrass in Berlin (privately, as women excluded)' },
            { year: '1874', event: 'Receives doctorate summa cum laude from Gottingen' },
            { year: '1878', event: 'Daughter Sofia ("Fufa") born' },
            { year: '1883', event: 'Vladimir commits suicide; Sofia devastated' },
            { year: '1884', event: 'Appointed professor at University of Stockholm' },
            { year: '1888', event: 'Wins Prix Bordin for work on Kovalevskaya top' },
            { year: '1889', event: 'Elected to Russian Academy of Sciences' },
            { year: '1891', event: 'Dies of influenza in Stockholm, age 41' },
          ].map(({ year, event }) => (
            <div key={year} className="flex gap-4 items-start">
              <span className="text-purple-400 font-mono w-16 shrink-0">{year}</span>
              <span className="text-dark-300">{event}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Bell's Assessment</h2>

        <Callout type="quote">
          "Sofia Kovalevskaya was the greatest woman mathematician prior to the twentieth
          century... Her life was a constant struggle against the prejudices of her time,
          and her early death was a loss to mathematics."
        </Callout>

        <p className="text-dark-300 mt-4">
          Bell presents Kovalevskaya as both a first-rate mathematician and a tragic figure.
          Despite her achievements, she faced endless obstacles: universities that wouldn't
          hire her despite a brilliant doctorate, academies that debated whether to admit
          a woman, and the personal losses that marked her life.
        </p>

        <p className="text-dark-300 mt-4">
          Her mathematical style combined Weierstrass's rigorous analysis with remarkable
          geometric intuition. The Kovalevskaya top remained her greatest triumph—a problem
          that had defeated the best minds for a century, solved through sheer mathematical
          creativity.
        </p>

        <p className="text-dark-300 mt-4">
          Beyond mathematics, Kovalevskaya was a novelist, political activist, and close
          friend of the Swedish writer Anne Charlotte Leffler, who later wrote her biography.
          Her life proved that women could excel at the highest levels of mathematics—a
          fact that should never have needed proving.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Key Takeaways</h2>

        <CardGrid columns={2}>
          <Card title="The Kovalevskaya Top">
            <p className="text-sm text-dark-300">
              The third integrable case of rigid body motion under gravity, with moments
              I₁ = I₂ = 2I₃ and center of mass offset in the equatorial plane. Found
              after 100 years of searching.
            </p>
          </Card>
          <Card title="Cauchy-Kovalevskaya Theorem">
            <p className="text-sm text-dark-300">
              For analytic initial data and analytic PDEs, there exists a unique local
              analytic solution. A foundational result connecting power series methods
              to differential equations.
            </p>
          </Card>
          <Card title="Breaking Barriers">
            <p className="text-sm text-dark-300">
              First woman doctorate in math, first woman math professor in Northern Europe,
              first woman in Russian Academy. Each achievement required overcoming
              institutional resistance.
            </p>
          </Card>
          <Card title="Mathematical Legacy">
            <p className="text-sm text-dark-300">
              Kovalevskaya showed that rigid body dynamics connects to deep algebraic
              structures (hyperelliptic functions). Her work influenced both mechanics
              and algebraic geometry.
            </p>
          </Card>
        </CardGrid>
      </section>
    </LessonLayout>
  );
}
