import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, Math } from '@/components/common';

// Interactive Three-Body Problem Demo
function ThreeBodyDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [trail, setTrail] = useState<{x: number, y: number, body: number}[]>([]);
  const animationRef = useRef<number>();
  const stateRef = useRef({
    bodies: [
      { x: 200, y: 150, vx: 0.5, vy: 0.3, mass: 10 },
      { x: 350, y: 200, vx: -0.3, vy: 0.4, mass: 8 },
      { x: 280, y: 280, vx: -0.2, vy: -0.7, mass: 6 },
    ],
    time: 0,
  });

  const resetSimulation = () => {
    stateRef.current = {
      bodies: [
        { x: 200, y: 150, vx: 0.5, vy: 0.3, mass: 10 },
        { x: 350, y: 200, vx: -0.3, vy: 0.4, mass: 8 },
        { x: 280, y: 280, vx: -0.2, vy: -0.7, mass: 6 },
      ],
      time: 0,
    };
    setTrail([]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const G = 0.5;

    const draw = () => {
      ctx.fillStyle = 'rgba(26, 26, 46, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Draw trails
      trail.forEach((point, i) => {
        const alpha = i / trail.length * 0.5;
        const colors = ['#ef4444', '#22c55e', '#3b82f6'];
        ctx.fillStyle = colors[point.body] + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw bodies
      const colors = ['#ef4444', '#22c55e', '#3b82f6'];
      stateRef.current.bodies.forEach((body, i) => {
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.arc(body.x, body.y, body.mass, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = colors[i];
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(body.x, body.y, body.mass + 3, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Labels
      ctx.fillStyle = '#d1d5db';
      ctx.font = '12px system-ui';
      ctx.fillText(`Time: ${stateRef.current.time.toFixed(0)}`, 10, 20);
    };

    const update = () => {
      const bodies = stateRef.current.bodies;
      const dt = 0.5;

      // Calculate forces
      const forces = bodies.map(() => ({ fx: 0, fy: 0 }));

      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const dx = bodies[j].x - bodies[i].x;
          const dy = bodies[j].y - bodies[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy) + 10;
          const force = G * bodies[i].mass * bodies[j].mass / (dist * dist);

          const fx = force * dx / dist;
          const fy = force * dy / dist;

          forces[i].fx += fx;
          forces[i].fy += fy;
          forces[j].fx -= fx;
          forces[j].fy -= fy;
        }
      }

      // Update velocities and positions
      bodies.forEach((body, i) => {
        body.vx += forces[i].fx / body.mass * dt;
        body.vy += forces[i].fy / body.mass * dt;
        body.x += body.vx * dt;
        body.y += body.vy * dt;

        // Boundary reflection
        if (body.x < 20 || body.x > width - 20) body.vx *= -0.8;
        if (body.y < 20 || body.y > height - 20) body.vy *= -0.8;
        body.x = Math.max(20, Math.min(width - 20, body.x));
        body.y = Math.max(20, Math.min(height - 20, body.y));
      });

      stateRef.current.time += dt;

      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev];
        bodies.forEach((body, i) => {
          newTrail.push({ x: body.x, y: body.y, body: i });
        });
        return newTrail.slice(-1500);
      });
    };

    const animate = () => {
      if (isRunning) {
        update();
      }
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, trail]);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Three-Body Problem</h4>
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
            onClick={() => { resetSimulation(); setIsRunning(false); }}
            className="px-3 py-1 bg-dark-700 text-dark-200 rounded hover:bg-dark-600"
          >
            Reset
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={500}
        height={350}
        className="w-full border border-dark-700 rounded bg-dark-950"
      />
      <p className="text-sm text-dark-400 mt-2">
        Poincare proved that the three-body problem has no general closed-form solution—chaos is inherent.
      </p>
    </div>
  );
}

// Poincare Disk Model Demo
function PoincareDiskDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showGeodesics, setShowGeodesics] = useState(true);
  const [showTiling, setShowTiling] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 30;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Draw the boundary circle
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Fill disk
    ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
    ctx.fill();

    // Draw geodesics (circular arcs perpendicular to boundary)
    if (showGeodesics) {
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 1.5;

      // Draw several geodesics
      const geodesics = [
        { p1: { x: -0.8, y: 0 }, p2: { x: 0.5, y: 0.7 } },
        { p1: { x: 0, y: -0.9 }, p2: { x: 0.7, y: 0.5 } },
        { p1: { x: -0.6, y: -0.6 }, p2: { x: 0.6, y: -0.3 } },
        { p1: { x: -0.3, y: 0.8 }, p2: { x: 0.8, y: 0.2 } },
      ];

      geodesics.forEach(({ p1, p2 }) => {
        // Draw as arc (simplified - actual geodesic calculation is complex)
        const x1 = centerX + p1.x * radius;
        const y1 = centerY + p1.y * radius;
        const x2 = centerX + p2.x * radius;
        const y2 = centerY + p2.y * radius;

        // Approximate with quadratic curve
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const perpX = -dy * 0.4;
        const perpY = dx * 0.4;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(midX + perpX, midY + perpY, x2, y2);
        ctx.stroke();

        // Draw endpoints
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.arc(x1, y1, 4, 0, Math.PI * 2);
        ctx.arc(x2, y2, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Draw hyperbolic tiling pattern
    if (showTiling) {
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.6)';
      ctx.lineWidth = 1;

      // Simplified representation of {7,3} tiling
      for (let ring = 0; ring < 4; ring++) {
        const ringRadius = radius * (1 - Math.pow(0.5, ring + 1));
        const numShapes = Math.floor(7 * Math.pow(1.5, ring));

        for (let i = 0; i < numShapes; i++) {
          const angle = (2 * Math.PI * i) / numShapes + ring * 0.2;
          const x = centerX + ringRadius * Math.cos(angle);
          const y = centerY + ringRadius * Math.sin(angle);
          const size = radius * 0.15 * Math.pow(0.6, ring);

          ctx.beginPath();
          for (let j = 0; j <= 7; j++) {
            const a = angle + (2 * Math.PI * j) / 7;
            const px = x + size * Math.cos(a);
            const py = y + size * Math.sin(a);
            if (j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
        }
      }
    }

    // Label
    ctx.fillStyle = '#d1d5db';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Poincare Disk Model', centerX, height - 10);
    ctx.font = '11px system-ui';
    ctx.fillStyle = '#9ca3af';
    ctx.fillText('Hyperbolic Geometry', centerX, 20);

  }, [showGeodesics, showTiling]);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Hyperbolic Geometry</h4>
        <div className="flex gap-2">
          <button
            onClick={() => setShowGeodesics(!showGeodesics)}
            className={`px-3 py-1 rounded text-sm ${
              showGeodesics ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            Geodesics
          </button>
          <button
            onClick={() => setShowTiling(!showTiling)}
            className={`px-3 py-1 rounded text-sm ${
              showTiling ? 'bg-yellow-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            Tiling
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full border border-dark-700 rounded"
      />
      <p className="text-sm text-dark-400 mt-2">
        In the Poincare disk, straight lines are circular arcs perpendicular to the boundary.
      </p>
    </div>
  );
}

// Topology Demo
function TopologyDemo() {
  const [shape, setShape] = useState<'torus' | 'sphere' | 'klein'>('torus');

  const shapeInfo = {
    sphere: {
      name: 'Sphere (S²)',
      euler: 2,
      genus: 0,
      orientable: true,
      fundamental: '{1}',
      desc: 'Simply connected—any loop can be shrunk to a point',
    },
    torus: {
      name: 'Torus (T²)',
      euler: 0,
      genus: 1,
      orientable: true,
      fundamental: 'Z × Z',
      desc: 'Two independent loops: around the hole and through it',
    },
    klein: {
      name: 'Klein Bottle',
      euler: 0,
      genus: 'N/A',
      orientable: false,
      fundamental: 'Z ⋊ Z',
      desc: 'Non-orientable surface that passes through itself in 3D',
    },
  };

  const info = shapeInfo[shape];

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Algebraic Topology</h4>
        <div className="flex gap-2">
          {(['sphere', 'torus', 'klein'] as const).map(s => (
            <button
              key={s}
              onClick={() => setShape(s)}
              className={`px-3 py-1 rounded text-sm ${
                shape === s ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
              }`}
            >
              {s === 'sphere' ? 'Sphere' : s === 'torus' ? 'Torus' : 'Klein'}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-dark-800 rounded-lg p-4">
        <div className="text-center mb-4">
          <div className="text-4xl mb-2">
            {shape === 'sphere' ? '🔵' : shape === 'torus' ? '🍩' : '♾️'}
          </div>
          <div className="text-xl font-bold text-purple-400">{info.name}</div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-dark-900 p-3 rounded">
            <div className="text-dark-400">Euler Characteristic</div>
            <div className="text-2xl font-bold text-dark-100">χ = {info.euler}</div>
          </div>
          <div className="bg-dark-900 p-3 rounded">
            <div className="text-dark-400">Genus</div>
            <div className="text-2xl font-bold text-dark-100">g = {info.genus}</div>
          </div>
          <div className="bg-dark-900 p-3 rounded">
            <div className="text-dark-400">Orientable</div>
            <div className={`text-xl font-bold ${info.orientable ? 'text-green-400' : 'text-red-400'}`}>
              {info.orientable ? 'Yes' : 'No'}
            </div>
          </div>
          <div className="bg-dark-900 p-3 rounded">
            <div className="text-dark-400">Fundamental Group</div>
            <div className="text-xl font-bold text-dark-100">π₁ = {info.fundamental}</div>
          </div>
        </div>

        <p className="text-dark-300 mt-4 text-sm">{info.desc}</p>
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded">
        <MathBlock
          latex="\chi = V - E + F = 2 - 2g"
          description="Euler characteristic formula (for orientable surfaces)"
        />
      </div>
    </div>
  );
}

// Phase Space Demo
function PhaseSpaceDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [energy, setEnergy] = useState(1.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 50;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(30, centerY);
    ctx.lineTo(width - 20, centerY);
    ctx.moveTo(centerX, 20);
    ctx.lineTo(centerX, height - 30);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('x (position)', width - 50, centerY + 20);
    ctx.save();
    ctx.translate(20, centerY);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('p (momentum)', 0, 0);
    ctx.restore();

    // Draw phase space trajectories for simple harmonic oscillator
    // H = p²/2m + kx²/2 = E
    // Trajectories are ellipses: p²/(2mE) + x²/(2E/k) = 1

    const numTrajectories = 5;
    for (let i = 1; i <= numTrajectories; i++) {
      const E = energy * i / 3;
      const a = Math.sqrt(2 * E) * scale; // x amplitude
      const b = Math.sqrt(2 * E) * scale; // p amplitude (assuming m=k=1)

      const isHighlighted = Math.abs(E - energy) < 0.3;
      ctx.strokeStyle = isHighlighted ? '#22c55e' : `rgba(139, 92, 246, ${0.3 + i * 0.15})`;
      ctx.lineWidth = isHighlighted ? 2 : 1;

      ctx.beginPath();
      for (let t = 0; t <= 2 * Math.PI + 0.1; t += 0.05) {
        const x = centerX + a * Math.cos(t);
        const y = centerY - b * Math.sin(t);
        if (t === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw energy label
      if (i === numTrajectories) {
        ctx.fillStyle = '#9ca3af';
        ctx.font = '10px system-ui';
        ctx.fillText(`E = ${E.toFixed(1)}`, centerX + a + 10, centerY);
      }
    }

    // Draw a point moving on the highlighted trajectory
    const t = (Date.now() / 1000) % (2 * Math.PI);
    const a = Math.sqrt(2 * energy) * scale;
    const b = Math.sqrt(2 * energy) * scale;
    const px = centerX + a * Math.cos(t);
    const py = centerY - b * Math.sin(t);

    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fill();

    // Arrow showing direction
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 2;
    const arrowLen = 15;
    const arrowAngle = t + Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px + arrowLen * Math.cos(arrowAngle), py - arrowLen * Math.sin(arrowAngle));
    ctx.stroke();

    // Title
    ctx.fillStyle = '#d1d5db';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('Phase Space (Harmonic Oscillator)', 20, 25);

  }, [energy]);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Trigger redraw
          setEnergy(e => e);
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Qualitative Dynamics</h4>
      </div>
      <canvas
        ref={canvasRef}
        width={450}
        height={350}
        className="w-full border border-dark-700 rounded"
      />
      <div className="mt-4">
        <label className="text-dark-300 text-sm">Energy level:</label>
        <input
          type="range"
          min="0.5"
          max="2.5"
          step="0.1"
          value={energy}
          onChange={(e) => setEnergy(parseFloat(e.target.value))}
          className="w-full mt-1"
        />
      </div>
      <p className="text-sm text-dark-400 mt-2">
        Poincare pioneered the qualitative study of dynamical systems through phase space analysis.
      </p>
    </div>
  );
}

// Recurrence Demo
function RecurrenceDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 120;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Draw the torus (represented as a rectangle with periodic boundary)
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX - radius, centerY - radius * 0.6, radius * 2, radius * 1.2);

    // Draw trajectory on torus with irrational winding
    const omega1 = 1;
    const omega2 = Math.sqrt(2); // Irrational ratio
    const numPoints = Math.min(time * 50, 5000);

    ctx.strokeStyle = 'rgba(34, 197, 94, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();

    for (let i = 0; i < numPoints; i++) {
      const t = i * 0.02;
      const x = (omega1 * t) % 1;
      const y = (omega2 * t) % 1;

      const px = centerX - radius + x * radius * 2;
      const py = centerY - radius * 0.6 + y * radius * 1.2;

      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Current position
    const t = time;
    const x = (omega1 * t) % 1;
    const y = (omega2 * t) % 1;
    const px = centerX - radius + x * radius * 2;
    const py = centerY - radius * 0.6 + y * radius * 1.2;

    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(px, py, 5, 0, Math.PI * 2);
    ctx.fill();

    // Starting position marker
    const startX = centerX - radius;
    const startY = centerY - radius * 0.6;
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(startX, startY, 5, 0, Math.PI * 2);
    ctx.fill();

    // Labels
    ctx.fillStyle = '#d1d5db';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('Torus (unfolded)', centerX - radius, centerY - radius * 0.6 - 10);

    ctx.fillStyle = '#3b82f6';
    ctx.fillText('Start', startX + 10, startY);

    ctx.fillStyle = '#ef4444';
    ctx.fillText('Current', px + 10, py);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px system-ui';
    ctx.fillText(`Time: ${time.toFixed(1)}`, 20, height - 20);
    ctx.fillText('ω₁/ω₂ = 1/√2 (irrational)', 20, height - 40);

  }, [time]);

  useEffect(() => {
    if (!isRunning) return;

    const animate = () => {
      setTime(t => t + 0.05);
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
        <h4 className="text-lg font-semibold text-dark-100">Recurrence Theorem</h4>
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
      <canvas
        ref={canvasRef}
        width={450}
        height={300}
        className="w-full border border-dark-700 rounded"
      />
      <p className="text-sm text-dark-400 mt-2">
        The trajectory fills the torus densely but will return arbitrarily close to the start infinitely often.
      </p>
    </div>
  );
}

export default function Section32() {
  return (
    <LessonLayout
      title="Henri Poincare"
      subtitle="The Last Universalist"
      sectionIndex={32}
      previousSection={{ path: '/section/31', title: 'Dedekind' }}
      nextSection={{ path: '/section/33', title: 'Kovalevskaya' }}
    >
      {/* Introduction */}
      <section className="mb-12">
        <Callout type="quote">
          "Mathematics is the art of giving the same name to different things." — Henri Poincare
        </Callout>

        <p className="text-lg text-dark-200 mt-6">
          <strong className="text-dark-100">Jules Henri Poincare</strong> (1854-1912) was the last
          mathematician to master virtually all branches of the subject. His contributions span
          topology, celestial mechanics, relativity, number theory, and the philosophy of science.
          He essentially created the fields of algebraic topology and chaos theory, and came
          breathtakingly close to discovering special relativity before Einstein.
        </p>

        <div className="mt-6 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <h4 className="text-lg font-semibold text-dark-100 mb-2">Why Poincare Matters</h4>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Founded algebraic topology (homology, fundamental group)</li>
            <li>Discovered chaos in the three-body problem</li>
            <li>Created qualitative theory of differential equations</li>
            <li>Developed automorphic functions and the Poincare disk</li>
            <li>Formulated the Poincare conjecture (proved 2003)</li>
            <li>Contributed key ideas to special relativity</li>
          </ul>
        </div>
      </section>

      {/* Three-Body Problem */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">The Three-Body Problem</h2>

        <p className="text-dark-300 mb-4">
          While the two-body problem (like Earth and Sun) has a simple closed-form solution,
          Poincare proved that the three-body problem does not. Even more remarkably, he
          discovered that the motion can be chaotic—tiny changes in initial conditions lead
          to wildly different outcomes.
        </p>

        <ThreeBodyDemo />

        <Callout type="insight" className="mt-4">
          Poincare's work on the three-body problem for a prize from King Oscar II of Sweden
          contained an error. Correcting it led him to discover chaos—one of the most important
          concepts in modern science. The printed copies had to be recalled at his own expense!
        </Callout>

        <MathBlock
          latex="m_i \frac{d^2 \mathbf{r}_i}{dt^2} = \sum_{j \neq i} \frac{G m_i m_j (\mathbf{r}_j - \mathbf{r}_i)}{|\mathbf{r}_j - \mathbf{r}_i|^3}"
          description="Equations of motion for n gravitating bodies"
        />
      </section>

      {/* Topology */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Algebraic Topology</h2>

        <p className="text-dark-300 mb-4">
          Poincare founded algebraic topology—using algebraic structures to classify topological
          spaces. His fundamental group captures how loops can be deformed, while homology groups
          count "holes" of various dimensions.
        </p>

        <TopologyDemo />

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="The Fundamental Group">
            <p className="text-sm text-dark-300 mb-2">
              <Math latex="\pi_1(X, x_0)" /> consists of loops at x₀, where two loops are
              equivalent if one can be continuously deformed into the other.
            </p>
            <ul className="text-sm text-dark-400 space-y-1">
              <li>• π₁(sphere) = {'{'}1{'}'} (trivial)</li>
              <li>• π₁(circle) = Z</li>
              <li>• π₁(torus) = Z × Z</li>
            </ul>
          </Card>
          <Card title="The Poincare Conjecture">
            <p className="text-sm text-dark-300 mb-2">
              "Every simply connected, closed 3-manifold is homeomorphic to the 3-sphere."
            </p>
            <p className="text-sm text-dark-400">
              Posed 1904, proved by Perelman in 2003. One of the Millennium Prize Problems!
            </p>
          </Card>
        </div>
      </section>

      {/* Hyperbolic Geometry */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">The Poincare Disk</h2>

        <p className="text-dark-300 mb-4">
          Poincare created beautiful models of hyperbolic geometry, where the sum of angles
          in a triangle is less than 180°. In the disk model, the entire hyperbolic plane
          is represented inside a circle, with geodesics appearing as circular arcs.
        </p>

        <PoincareDiskDemo />

        <div className="mt-4 p-4 bg-dark-800 rounded-lg">
          <h4 className="text-lg font-semibold text-dark-100 mb-2">Hyperbolic Properties</h4>
          <ul className="list-disc list-inside text-dark-300 space-y-2">
            <li>
              <strong className="text-dark-100">Angle sum:</strong> Triangles have angle sum
              {' < '} 180°; the deficit equals the area times curvature
            </li>
            <li>
              <strong className="text-dark-100">Parallels:</strong> Through a point not on a
              line, infinitely many parallels exist
            </li>
            <li>
              <strong className="text-dark-100">Distances:</strong> Objects near the boundary
              appear compressed but are actually infinitely far from the center
            </li>
          </ul>
        </div>
      </section>

      {/* Phase Space and Dynamics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Qualitative Dynamics</h2>

        <p className="text-dark-300 mb-4">
          Rather than seeking exact solutions, Poincare pioneered the qualitative study of
          differential equations. By analyzing phase space—where each point represents a
          complete state of the system—he could understand long-term behavior without
          solving equations explicitly.
        </p>

        <PhaseSpaceDemo />

        <Callout type="note" className="mt-4">
          Poincare classified the possible behaviors near fixed points (nodes, saddles, foci,
          centers) and introduced concepts like limit cycles and homoclinic orbits that remain
          central to dynamical systems theory.
        </Callout>
      </section>

      {/* Recurrence Theorem */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">The Recurrence Theorem</h2>

        <p className="text-dark-300 mb-4">
          Poincare proved that in a bounded phase space with volume-preserving dynamics, almost
          every orbit returns arbitrarily close to its starting point infinitely often. This
          has profound implications for statistical mechanics and thermodynamics.
        </p>

        <RecurrenceDemo />

        <MathBlock
          latex="\forall \epsilon > 0, \exists T: \|x(T) - x(0)\| < \epsilon"
          description="The system returns arbitrarily close to any starting state"
        />

        <div className="mt-4 p-4 bg-dark-800 rounded-lg">
          <h4 className="text-lg font-semibold text-dark-100 mb-2">Implications</h4>
          <p className="text-dark-300">
            The recurrence theorem seemed to contradict the second law of thermodynamics—if
            every state recurs, how can entropy always increase? The resolution: recurrence
            times are astronomically long, far exceeding the age of the universe for
            macroscopic systems.
          </p>
        </div>
      </section>

      {/* Relativity */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Poincare and Relativity</h2>

        <p className="text-dark-300 mb-4">
          Before Einstein, Poincare had many of the key ideas of special relativity. He
          formulated the principle of relativity, derived the Lorentz transformations,
          recognized that c is a speed limit, and even anticipated E = mc². Why isn't
          relativity named after him?
        </p>

        <CardGrid columns={2}>
          <Card title="What Poincare Did">
            <ul className="text-sm text-dark-300 space-y-1">
              <li>• Named and formulated Lorentz transformations</li>
              <li>• Showed they form a group</li>
              <li>• Recognized the relativity principle</li>
              <li>• Suggested light speed as invariant</li>
              <li>• Noted m = E/c² for electromagnetic mass</li>
            </ul>
          </Card>
          <Card title="What Einstein Added">
            <ul className="text-sm text-dark-300 space-y-1">
              <li>• Started from two simple postulates</li>
              <li>• Discarded the ether completely</li>
              <li>• Made space and time truly relative</li>
              <li>• Derived E = mc² from first principles</li>
              <li>• Later: general relativity (curved spacetime)</li>
            </ul>
          </Card>
        </CardGrid>

        <Callout type="insight" className="mt-4">
          Poincare remained philosophically attached to the ether as a useful convention,
          while Einstein boldly declared it unnecessary. Einstein's conceptual clarity—seeing
          that Lorentz contraction is not a dynamical effect but a geometric fact about
          spacetime—was the decisive breakthrough.
        </Callout>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Life and Career</h2>

        <div className="space-y-4">
          {[
            { year: '1854', event: 'Born in Nancy, France' },
            { year: '1873', event: 'Enters Ecole Polytechnique' },
            { year: '1879', event: 'Doctorate on differential equations' },
            { year: '1881', event: 'Discovers automorphic functions' },
            { year: '1887', event: 'Wins King Oscar II prize (three-body problem)' },
            { year: '1889', event: 'Corrects prize memoir, discovers chaos' },
            { year: '1895', event: 'Analysis Situs—founds algebraic topology' },
            { year: '1904', event: 'States the Poincare conjecture' },
            { year: '1905', event: 'Paper on dynamics of the electron (pre-relativity)' },
            { year: '1912', event: 'Dies suddenly in Paris at age 58' },
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
          "Poincare was the last man to take practically all mathematics, pure and applied,
          as his province... Since his death it has become obvious that no one will ever
          again be able to do what he did."
        </Callout>

        <p className="text-dark-300 mt-4">
          Bell portrays Poincare as an intuitive genius who worked at lightning speed,
          often publishing papers with gaps that took others years to fill. His mind
          worked so differently from the careful, rigorous style of Weierstrass that
          the two approaches represent opposite poles of mathematical creation.
        </p>

        <p className="text-dark-300 mt-4">
          Famous for his work habits, Poincare would work in intense two-hour bursts,
          letting his subconscious process problems. He described moments of sudden
          insight—solutions appearing fully formed after days of unconscious incubation.
          His introspective accounts of mathematical creativity remain classics of
          cognitive psychology.
        </p>

        <p className="text-dark-300 mt-4">
          By the time of his death, mathematics had grown too vast for any one person
          to master. Poincare was the last who came close, leaving fingerprints on
          virtually every branch of the subject.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Key Takeaways</h2>

        <CardGrid columns={2}>
          <Card title="Chaos and the Three-Body Problem">
            <p className="text-sm text-dark-300">
              Poincare discovered that deterministic systems can exhibit sensitive
              dependence on initial conditions—the hallmark of chaos. The three-body
              problem has no general closed-form solution.
            </p>
          </Card>
          <Card title="Algebraic Topology">
            <p className="text-sm text-dark-300">
              Assign algebraic invariants (groups, numbers) to topological spaces to
              distinguish them. The fundamental group π₁ captures loop structure;
              homology counts holes.
            </p>
          </Card>
          <Card title="Qualitative Dynamics">
            <p className="text-sm text-dark-300">
              Instead of solving equations exactly, study phase space geometry—fixed
              points, periodic orbits, invariant sets. This approach reveals long-term
              behavior without explicit solutions.
            </p>
          </Card>
          <Card title="The Poincare Conjecture">
            <p className="text-sm text-dark-300">
              The only simply connected, closed 3-manifold is the 3-sphere. After 99
              years, Perelman proved it using Ricci flow—one of mathematics' greatest
              achievements.
            </p>
          </Card>
        </CardGrid>
      </section>
    </LessonLayout>
  );
}
