import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, InlineMath } from '@/components/common';

// Interactive Quaternion Multiplication Table
function QuaternionMultiplicationDemo() {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [selectedCol, setSelectedCol] = useState<string | null>(null);

  const units = ['1', 'i', 'j', 'k'];
  const table: Record<string, Record<string, string>> = {
    '1': { '1': '1', 'i': 'i', 'j': 'j', 'k': 'k' },
    'i': { '1': 'i', 'i': '-1', 'j': 'k', 'k': '-j' },
    'j': { '1': 'j', 'i': '-k', 'j': '-1', 'k': 'i' },
    'k': { '1': 'k', 'i': 'j', 'j': '-i', 'k': '-1' }
  };

  const getResult = () => {
    if (selectedRow && selectedCol) {
      return table[selectedRow][selectedCol];
    }
    return '?';
  };

  const getCellClass = (row: string, col: string) => {
    const base = 'w-12 h-12 flex items-center justify-center font-mono text-lg cursor-pointer transition-all';
    if (selectedRow === row && selectedCol === col) {
      return `${base} bg-accent-500 text-white`;
    }
    if (selectedRow === row || selectedCol === col) {
      return `${base} bg-accent-500/30 text-accent-200`;
    }
    return `${base} bg-dark-800 text-dark-200 hover:bg-dark-700`;
  };

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Quaternion Multiplication Table</h4>

      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-1">
          <div className="w-12 h-12 flex items-center justify-center text-dark-400">×</div>
          {units.map(u => (
            <div
              key={`col-${u}`}
              className={`w-12 h-12 flex items-center justify-center font-mono text-lg ${
                selectedCol === u ? 'text-accent-400 font-bold' : 'text-dark-300'
              }`}
            >
              {u}
            </div>
          ))}
        </div>

        {units.map(row => (
          <div key={row} className="flex gap-1">
            <div
              className={`w-12 h-12 flex items-center justify-center font-mono text-lg ${
                selectedRow === row ? 'text-accent-400 font-bold' : 'text-dark-300'
              }`}
            >
              {row}
            </div>
            {units.map(col => (
              <div
                key={`${row}-${col}`}
                className={getCellClass(row, col)}
                onClick={() => { setSelectedRow(row); setSelectedCol(col); }}
              >
                {table[row][col]}
              </div>
            ))}
          </div>
        ))}

        <div className="mt-4 text-center">
          {selectedRow && selectedCol ? (
            <p className="text-xl font-mono">
              <span className="text-accent-400">{selectedRow}</span>
              <span className="text-dark-400"> × </span>
              <span className="text-accent-400">{selectedCol}</span>
              <span className="text-dark-400"> = </span>
              <span className="text-green-400 font-bold">{getResult()}</span>
            </p>
          ) : (
            <p className="text-dark-400">Click cells to see multiplication results</p>
          )}
        </div>

        <div className="mt-4 p-4 bg-dark-800 rounded-lg">
          <p className="text-sm text-dark-300 text-center">
            Hamilton's key insight: <Math tex="i^2 = j^2 = k^2 = ijk = -1" />
          </p>
        </div>
      </div>
    </div>
  );
}

// 3D Quaternion Rotation Visualization
function QuaternionRotationDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [quaternion, setQuaternion] = useState({ w: 1, x: 0, y: 0, z: 0 });
  const [axis, setAxis] = useState({ x: 0, y: 1, z: 0 });
  const [angle, setAngle] = useState(0);
  const animationRef = useRef<number>();
  const [isAnimating, setIsAnimating] = useState(true);

  // Update quaternion from axis-angle
  useEffect(() => {
    const halfAngle = angle * Math.PI / 360;
    const sinHalf = Math.sin(halfAngle);
    const mag = Math.sqrt(axis.x ** 2 + axis.y ** 2 + axis.z ** 2) || 1;

    setQuaternion({
      w: Math.cos(halfAngle),
      x: (axis.x / mag) * sinHalf,
      y: (axis.y / mag) * sinHalf,
      z: (axis.z / mag) * sinHalf
    });
  }, [angle, axis]);

  // Rotate a point by quaternion
  const rotatePoint = (p: number[], q: { w: number; x: number; y: number; z: number }) => {
    const { w, x, y, z } = q;
    const [px, py, pz] = p;

    // q * p * q^(-1)
    const qpx = w * px + y * pz - z * py;
    const qpy = w * py + z * px - x * pz;
    const qpz = w * pz + x * py - y * px;
    const qpw = -x * px - y * py - z * pz;

    return [
      qpw * (-x) + qpx * w + qpy * (-z) - qpz * (-y),
      qpw * (-y) + qpy * w + qpz * (-x) - qpx * (-z),
      qpw * (-z) + qpz * w + qpx * (-y) - qpy * (-x)
    ];
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
    const scale = 60;

    // Cube vertices
    const vertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ];

    // Edges
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    const draw = () => {
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      // Project and rotate vertices
      const projected = vertices.map(v => {
        const rotated = rotatePoint(v, quaternion);
        const perspective = 3 / (3 - rotated[2]);
        return {
          x: cx + rotated[0] * scale * perspective,
          y: cy - rotated[1] * scale * perspective,
          z: rotated[2]
        };
      });

      // Draw edges
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      edges.forEach(([a, b]) => {
        const depth = (projected[a].z + projected[b].z) / 2;
        ctx.globalAlpha = 0.3 + 0.7 * ((depth + 1.5) / 3);
        ctx.beginPath();
        ctx.moveTo(projected[a].x, projected[a].y);
        ctx.lineTo(projected[b].x, projected[b].y);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;

      // Draw vertices
      projected.forEach((p, i) => {
        const depth = (p.z + 1.5) / 3;
        ctx.fillStyle = i < 4 ? '#f472b6' : '#22d3ee';
        ctx.globalAlpha = 0.5 + 0.5 * depth;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Draw rotation axis
      const axisEnd = rotatePoint([axis.x * 2, axis.y * 2, axis.z * 2], { w: 1, x: 0, y: 0, z: 0 });
      const perspective = 3 / (3 - axisEnd[2]);
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + axisEnd[0] * scale * perspective, cy - axisEnd[1] * scale * perspective);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    draw();
  }, [quaternion, axis]);

  // Animation loop
  useEffect(() => {
    if (!isAnimating) return;

    const animate = () => {
      setAngle(a => (a + 1) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isAnimating]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Quaternion 3D Rotation</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="bg-dark-950 rounded-lg mx-auto"
        />

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-dark-300 mb-2">Rotation Axis</label>
            <div className="flex gap-4">
              {(['x', 'y', 'z'] as const).map(a => (
                <button
                  key={a}
                  onClick={() => setAxis({ x: a === 'x' ? 1 : 0, y: a === 'y' ? 1 : 0, z: a === 'z' ? 1 : 0 })}
                  className={`px-4 py-2 rounded ${
                    (a === 'x' && axis.x === 1) || (a === 'y' && axis.y === 1) || (a === 'z' && axis.z === 1)
                      ? 'bg-accent-600 text-white'
                      : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                  }`}
                >
                  {a.toUpperCase()}-Axis
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-dark-300 mb-2">Angle: {angle}°</label>
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={e => { setIsAnimating(false); setAngle(Number(e.target.value)); }}
              className="w-full"
            />
          </div>

          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className={`px-4 py-2 rounded ${
              isAnimating ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
            } text-white`}
          >
            {isAnimating ? 'Stop Animation' : 'Animate'}
          </button>

          <div className="p-3 bg-dark-800 rounded font-mono text-sm">
            <p className="text-dark-400">Quaternion q = w + xi + yj + zk</p>
            <p className="text-accent-400">
              q = {quaternion.w.toFixed(3)} + {quaternion.x.toFixed(3)}i + {quaternion.y.toFixed(3)}j + {quaternion.z.toFixed(3)}k
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hamiltonian Mechanics Phase Space Demo
function PhaseSpaceDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [energy, setEnergy] = useState(1);
  const [system, setSystem] = useState<'harmonic' | 'pendulum'>('harmonic');

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

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.fillText('q (position)', width - 70, cy - 10);
    ctx.fillText('p (momentum)', cx + 10, 15);

    // Draw phase trajectories
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;

    if (system === 'harmonic') {
      // Simple harmonic oscillator: H = (p² + q²)/2
      // Trajectories are circles
      for (let E = 0.5; E <= 3; E += 0.5) {
        const r = Math.sqrt(2 * E) * scale;
        const alpha = E === energy ? 1 : 0.3;
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = E === energy ? '#22d3ee' : '#8b5cf6';
        ctx.lineWidth = E === energy ? 3 : 1;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }
    } else {
      // Pendulum: H = p²/2 - cos(q)
      // Draw level curves
      for (let E = -0.9; E <= 2; E += 0.3) {
        const points: [number, number][] = [];
        const isTarget = Math.abs(E - (energy - 1)) < 0.15;
        ctx.globalAlpha = isTarget ? 1 : 0.3;
        ctx.strokeStyle = isTarget ? '#22d3ee' : '#8b5cf6';
        ctx.lineWidth = isTarget ? 3 : 1;

        // Parametric plot
        for (let q = -Math.PI; q <= Math.PI; q += 0.05) {
          const pSquared = 2 * (E + Math.cos(q));
          if (pSquared >= 0) {
            const p = Math.sqrt(pSquared);
            points.push([q, p]);
          }
        }

        if (points.length > 1) {
          ctx.beginPath();
          ctx.moveTo(cx + points[0][0] * scale, cy - points[0][1] * scale);
          points.forEach(([q, p]) => ctx.lineTo(cx + q * scale, cy - p * scale));
          ctx.stroke();

          // Mirror for negative p
          ctx.beginPath();
          ctx.moveTo(cx + points[0][0] * scale, cy + points[0][1] * scale);
          points.forEach(([q, p]) => ctx.lineTo(cx + q * scale, cy + p * scale));
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;

    // Draw current energy point
    const time = Date.now() / 1000;
    let pointQ: number, pointP: number;

    if (system === 'harmonic') {
      const r = Math.sqrt(2 * energy);
      pointQ = r * Math.cos(time);
      pointP = r * Math.sin(time);
    } else {
      const E = energy - 1;
      if (E < 1) {
        pointQ = Math.acos(-E) * Math.cos(time * 0.5);
        const pSq = 2 * (E + Math.cos(pointQ));
        pointP = pSq > 0 ? Math.sqrt(pSq) * Math.sign(Math.sin(time * 0.5)) : 0;
      } else {
        pointQ = time % (2 * Math.PI) - Math.PI;
        const pSq = 2 * (E + Math.cos(pointQ));
        pointP = pSq > 0 ? Math.sqrt(pSq) : 0;
      }
    }

    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(cx + pointQ * scale, cy - pointP * scale, 6, 0, Math.PI * 2);
    ctx.fill();
  }, [energy, system]);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Trigger re-render
          setEnergy(e => e);
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Hamiltonian Phase Space</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={350}
          height={300}
          className="bg-dark-950 rounded-lg mx-auto"
        />

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm text-dark-300 mb-2">System</label>
            <div className="flex gap-2">
              <button
                onClick={() => setSystem('harmonic')}
                className={`px-4 py-2 rounded ${
                  system === 'harmonic' ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'
                }`}
              >
                Harmonic Oscillator
              </button>
              <button
                onClick={() => setSystem('pendulum')}
                className={`px-4 py-2 rounded ${
                  system === 'pendulum' ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'
                }`}
              >
                Pendulum
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-dark-300 mb-2">Energy: {energy.toFixed(1)}</label>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={energy}
              onChange={e => setEnergy(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="p-3 bg-dark-800 rounded text-sm text-dark-300">
            <p><strong>Hamilton's Equations:</strong></p>
            <p className="font-mono mt-1">dq/dt = ∂H/∂p</p>
            <p className="font-mono">dp/dt = -∂H/∂q</p>
          </div>

          <p className="text-xs text-dark-400">
            The yellow dot traces a trajectory of constant energy. Each curve represents a different energy level.
          </p>
        </div>
      </div>
    </div>
  );
}

// Principle of Least Action Demo
function LeastActionDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pathType, setPathType] = useState<'straight' | 'parabolic' | 'curved'>('parabolic');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#1f2937';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const startX = 50;
    const startY = height - 50;
    const endX = width - 50;
    const endY = height - 50;

    // Draw start and end points
    ctx.fillStyle = '#22d3ee';
    ctx.beginPath();
    ctx.arc(startX, startY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText('Start', startX - 15, startY + 25);

    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(endX, endY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText('End', endX - 10, endY + 25);

    // Calculate paths and actions
    const paths: { name: string; color: string; points: [number, number][]; action: number }[] = [];
    const g = 1; // gravity
    const dt = 0.02;

    // Straight line (not physical for gravity)
    const straightPoints: [number, number][] = [];
    let straightAction = 0;
    for (let t = 0; t <= 1; t += dt) {
      const x = startX + t * (endX - startX);
      const y = startY;
      straightPoints.push([x, y]);
      const v = (endX - startX);
      const T = 0.5 * v * v; // kinetic
      const V = g * (height - y); // potential
      straightAction += (T - V) * dt;
    }
    paths.push({ name: 'Straight', color: '#ef4444', points: straightPoints, action: Math.abs(straightAction) });

    // Parabolic (true trajectory under gravity)
    const parabolicPoints: [number, number][] = [];
    let parabolicAction = 0;
    const v0y = -150; // initial upward velocity
    for (let t = 0; t <= 1; t += dt) {
      const x = startX + t * (endX - startX);
      const y = startY + v0y * t + 0.5 * 300 * t * t;
      parabolicPoints.push([x, Math.min(y, startY)]);
      const vy = v0y + 300 * t;
      const vx = (endX - startX);
      const T = 0.5 * (vx * vx + vy * vy) * 0.001;
      const V = g * (height - Math.min(y, startY)) * 0.01;
      parabolicAction += (T - V) * dt;
    }
    paths.push({ name: 'Parabolic', color: '#22c55e', points: parabolicPoints, action: Math.abs(parabolicAction) * 0.1 });

    // Curved (arbitrary non-physical path)
    const curvedPoints: [number, number][] = [];
    let curvedAction = 0;
    for (let t = 0; t <= 1; t += dt) {
      const x = startX + t * (endX - startX);
      const y = startY - 100 * Math.sin(Math.PI * t) * Math.sin(3 * Math.PI * t);
      curvedPoints.push([x, y]);
      const vy = -100 * Math.PI * Math.cos(Math.PI * t) * Math.sin(3 * Math.PI * t) - 300 * Math.PI * Math.sin(Math.PI * t) * Math.cos(3 * Math.PI * t);
      const vx = (endX - startX);
      const T = 0.5 * (vx * vx + vy * vy * 0.0001);
      const V = g * (height - y) * 0.01;
      curvedAction += (T - V) * dt;
    }
    paths.push({ name: 'Wiggly', color: '#f59e0b', points: curvedPoints, action: Math.abs(curvedAction) * 0.5 });

    // Draw all paths
    paths.forEach((path, idx) => {
      const isSelected = (pathType === 'straight' && idx === 0) ||
                         (pathType === 'parabolic' && idx === 1) ||
                         (pathType === 'curved' && idx === 2);

      ctx.strokeStyle = path.color;
      ctx.lineWidth = isSelected ? 4 : 2;
      ctx.globalAlpha = isSelected ? 1 : 0.4;

      ctx.beginPath();
      ctx.moveTo(path.points[0][0], path.points[0][1]);
      path.points.forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.stroke();
    });

    ctx.globalAlpha = 1;
  }, [pathType]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Principle of Least Action</h4>

      <canvas
        ref={canvasRef}
        width={450}
        height={250}
        className="bg-dark-950 rounded-lg w-full"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setPathType('straight')}
          className={`px-4 py-2 rounded ${
            pathType === 'straight' ? 'bg-red-600' : 'bg-dark-700'
          } text-white`}
        >
          Straight Path
        </button>
        <button
          onClick={() => setPathType('parabolic')}
          className={`px-4 py-2 rounded ${
            pathType === 'parabolic' ? 'bg-green-600' : 'bg-dark-700'
          } text-white`}
        >
          Parabolic (Natural)
        </button>
        <button
          onClick={() => setPathType('curved')}
          className={`px-4 py-2 rounded ${
            pathType === 'curved' ? 'bg-amber-600' : 'bg-dark-700'
          } text-white`}
        >
          Wiggly Path
        </button>
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm text-dark-300">
        <p>The action <Math tex="S = \int (T - V) \, dt" /> is minimized along the true physical path.</p>
        <p className="mt-2">The <span className="text-green-400">parabolic trajectory</span> is nature's choice—the path that extremizes the action integral.</p>
      </div>
    </div>
  );
}

// Number Systems Hierarchy Demo
function NumberSystemsDemo() {
  const [selected, setSelected] = useState<'real' | 'complex' | 'quaternion' | 'octonion'>('quaternion');

  const systems = [
    {
      id: 'real' as const,
      name: 'Real Numbers',
      symbol: 'ℝ',
      dimension: 1,
      basis: ['1'],
      properties: ['Commutative', 'Associative', 'Division Algebra', 'Ordered'],
      example: 'a',
      color: 'bg-blue-500'
    },
    {
      id: 'complex' as const,
      name: 'Complex Numbers',
      symbol: 'ℂ',
      dimension: 2,
      basis: ['1', 'i'],
      properties: ['Commutative', 'Associative', 'Division Algebra'],
      example: 'a + bi',
      color: 'bg-green-500'
    },
    {
      id: 'quaternion' as const,
      name: 'Quaternions',
      symbol: 'ℍ',
      dimension: 4,
      basis: ['1', 'i', 'j', 'k'],
      properties: ['Associative', 'Division Algebra'],
      example: 'a + bi + cj + dk',
      color: 'bg-purple-500'
    },
    {
      id: 'octonion' as const,
      name: 'Octonions',
      symbol: '𝕆',
      dimension: 8,
      basis: ['1', 'e₁', 'e₂', 'e₃', 'e₄', 'e₅', 'e₆', 'e₇'],
      properties: ['Division Algebra'],
      example: 'a + b₁e₁ + ... + b₇e₇',
      color: 'bg-amber-500'
    }
  ];

  const current = systems.find(s => s.id === selected)!;

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Hierarchy of Number Systems</h4>

      <div className="flex justify-center gap-2 mb-6">
        {systems.map((sys, idx) => (
          <div key={sys.id} className="flex items-center">
            <button
              onClick={() => setSelected(sys.id)}
              className={`w-16 h-16 rounded-lg flex flex-col items-center justify-center transition-all ${
                selected === sys.id
                  ? `${sys.color} text-white scale-110`
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              <span className="text-2xl font-serif">{sys.symbol}</span>
              <span className="text-xs">{sys.dimension}D</span>
            </button>
            {idx < systems.length - 1 && (
              <span className="text-dark-500 mx-1">⊂</span>
            )}
          </div>
        ))}
      </div>

      <div className={`p-4 rounded-lg border-2 border-${current.color.replace('bg-', '')}`}>
        <h5 className="text-xl font-semibold text-dark-100">{current.name}</h5>
        <p className="font-mono text-lg text-accent-400 mt-2">{current.example}</p>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-dark-400">Basis elements:</p>
            <p className="font-mono text-dark-200">{current.basis.join(', ')}</p>
          </div>
          <div>
            <p className="text-sm text-dark-400">Dimension:</p>
            <p className="font-mono text-dark-200">{current.dimension}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-dark-400">Properties:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {current.properties.map(prop => (
              <span key={prop} className="px-2 py-1 bg-dark-800 rounded text-xs text-dark-200">
                {prop}
              </span>
            ))}
          </div>
          {current.id !== 'real' && (
            <p className="text-xs text-dark-500 mt-2">
              Lost: {current.id === 'complex' ? 'Ordering' :
                     current.id === 'quaternion' ? 'Ordering, Commutativity' :
                     'Ordering, Commutativity, Associativity'}
            </p>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-dark-400 text-center">
        By Frobenius theorem, these are the only normed division algebras over ℝ
      </p>
    </div>
  );
}

// Brougham Bridge Discovery Timeline
function BroughamBridgeTimeline() {
  const events = [
    {
      time: 'October 16, 1843',
      title: 'Morning Walk',
      description: 'Hamilton walks with his wife along the Royal Canal in Dublin, headed to a meeting of the Royal Irish Academy.'
    },
    {
      time: 'Approaching Brougham Bridge',
      title: 'The Flash of Insight',
      description: 'After years of trying to extend complex numbers to 3D (which is impossible), Hamilton suddenly realizes: he needs FOUR dimensions, not three.'
    },
    {
      time: 'The Key Formula',
      title: 'i² = j² = k² = ijk = -1',
      description: 'The fundamental formula of quaternion multiplication comes to him in a flash. He cannot resist the urge to record it immediately.'
    },
    {
      time: 'At the Bridge',
      title: 'Carved in Stone',
      description: 'Hamilton carves the formula into the stone of Brougham Bridge with his knife, fearing he might forget it before reaching the Academy.'
    },
    {
      time: 'Legacy',
      title: 'The Plaque',
      description: 'Today, a plaque commemorates this moment. Every year on October 16, mathematicians make a pilgrimage to walk Hamilton\'s path.'
    }
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Brougham Bridge Discovery</h4>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent-600"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative pl-10 pb-6">
            <div className="absolute left-2 w-5 h-5 rounded-full bg-accent-600 border-4 border-dark-900"></div>
            <div className="text-xs text-accent-400 font-semibold mb-1">{event.time}</div>
            <div className="text-dark-100 font-semibold">{event.title}</div>
            <p className="text-sm text-dark-400 mt-1">{event.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-dark-800 rounded-lg border-l-4 border-amber-500">
        <p className="italic text-dark-300">
          "I then and there felt the galvanic circuit of thought close; and the sparks which fell from it were the fundamental equations between i, j, k."
        </p>
        <p className="text-sm text-dark-500 mt-2">— William Rowan Hamilton</p>
      </div>
    </div>
  );
}

export default function Section21() {
  return (
    <LessonLayout
      title="William Rowan Hamilton"
      sectionNumber={21}
      prevSection={20}
      nextSection={22}
    >
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-accent-900/50 text-accent-300 rounded-full text-sm mb-4">
          Chapter 21: Quaternions, Optics, and Dynamics
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4">
          William Rowan Hamilton
        </h1>
        <p className="text-xl text-dark-300">
          Ireland's greatest mathematician and the discovery that revolutionized algebra
        </p>
        <p className="text-dark-400 mt-2">1805 – 1865</p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <Card variant="primary">
          <p className="text-lg text-dark-200 leading-relaxed">
            On October 16, 1843, while walking along Dublin's Royal Canal, William Rowan Hamilton
            experienced one of the most famous "eureka" moments in mathematical history. After years
            of failed attempts to extend complex numbers to three dimensions, he suddenly realized
            that the key was to go to <em>four</em> dimensions—and to abandon the commutative law
            of multiplication. The quaternions were born, carved into the stone of Brougham Bridge.
          </p>
        </Card>
      </section>

      {/* The Child Prodigy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Child Prodigy</h2>

        <p className="text-dark-300 mb-6">
          Hamilton was perhaps the most precocious mathematical prodigy in history. Raised by his
          uncle, a linguist, young William displayed astonishing abilities from an early age:
        </p>

        <CardGrid columns={3}>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">By Age 5</h4>
            <p className="text-sm text-dark-400">
              Could read Latin, Greek, and Hebrew
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">By Age 10</h4>
            <p className="text-sm text-dark-400">
              Had mastered a dozen languages including Persian, Arabic, Sanskrit, and Malay
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">By Age 13</h4>
            <p className="text-sm text-dark-400">
              Challenged the "calculating boy" Zerah Colburn to a mental arithmetic contest
            </p>
          </Card>
        </CardGrid>

        <Callout type="note" className="mt-6">
          When Hamilton lost to Colburn in mental calculation, he turned seriously to mathematics.
          At 17, while still an undergraduate, he discovered an error in Laplace's
          <em>Mécanique Céleste</em>—earning the attention of the scientific world.
        </Callout>
      </section>

      {/* Quaternion Multiplication */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Quaternion Algebra</h2>

        <p className="text-dark-300 mb-6">
          Complex numbers extend the reals with one imaginary unit <Math tex="i" /> where <Math tex="i^2 = -1" />.
          Hamilton sought to create a similar system for three-dimensional space, but discovered
          something more profound: a four-dimensional algebra with three imaginary units.
        </p>

        <QuaternionMultiplicationDemo />

        <div className="mt-6">
          <MathBlock
            tex="q = w + xi + yj + zk"
            description="A quaternion has one real and three imaginary parts"
          />
        </div>

        <Callout type="important" className="mt-6">
          <strong>Non-commutativity:</strong> Unlike ordinary numbers, quaternion multiplication
          doesn't commute! Notice that <Math tex="ij = k" /> but <Math tex="ji = -k" />. This
          was a revolutionary break from 2,000 years of algebraic tradition.
        </Callout>
      </section>

      {/* 3D Rotation Demo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Quaternions and 3D Rotation</h2>

        <p className="text-dark-300 mb-6">
          Today, quaternions are essential in computer graphics, robotics, and aerospace engineering
          for representing 3D rotations. They avoid "gimbal lock" and interpolate smoothly—making
          them superior to Euler angles for many applications.
        </p>

        <QuaternionRotationDemo />

        <div className="mt-6">
          <MathBlock
            tex="v' = qvq^{-1}"
            description="To rotate a vector v by quaternion q"
          />
        </div>
      </section>

      {/* Number Systems Hierarchy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Tower of Number Systems</h2>

        <p className="text-dark-300 mb-6">
          Hamilton's discovery revealed a deep structure: as we extend our number systems, we lose
          algebraic properties. The real numbers are ordered; complex numbers are not. Complex
          numbers are commutative; quaternions are not. What comes next?
        </p>

        <NumberSystemsDemo />

        <p className="text-dark-400 mt-6">
          The octonions, discovered shortly after quaternions by Graves and Cayley, lose even
          associativity. By Frobenius's theorem (1877), these four are the <em>only</em> normed
          division algebras over the reals.
        </p>
      </section>

      {/* Brougham Bridge */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Brougham Bridge Moment</h2>

        <BroughamBridgeTimeline />
      </section>

      {/* Hamiltonian Mechanics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Hamiltonian Mechanics</h2>

        <p className="text-dark-300 mb-6">
          Beyond quaternions, Hamilton revolutionized physics with his reformulation of mechanics.
          Where Newton described motion using forces, Hamilton described it using <em>energy</em>
          and phase space—a viewpoint that became essential for quantum mechanics.
        </p>

        <PhaseSpaceDemo />

        <div className="mt-6">
          <MathBlock
            tex="H = T + V = \frac{p^2}{2m} + V(q)"
            description="The Hamiltonian: total energy as a function of position and momentum"
          />
        </div>

        <CardGrid columns={2} className="mt-6">
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Conservation of Energy</h4>
            <p className="text-sm text-dark-400">
              If <Math tex="H" /> doesn't depend on time explicitly, it's conserved—trajectories
              stay on constant-energy surfaces.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Symplectic Structure</h4>
            <p className="text-sm text-dark-400">
              Hamilton's equations preserve "phase space volume"—the foundation for statistical
              mechanics and quantum theory.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Principle of Least Action */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Principle of Least Action</h2>

        <p className="text-dark-300 mb-6">
          Hamilton showed that all of classical mechanics—indeed, all of physics—could be derived
          from a single variational principle: nature chooses the path that minimizes (or
          extremizes) the <em>action</em>.
        </p>

        <LeastActionDemo />

        <div className="mt-6">
          <MathBlock
            tex="\delta S = \delta \int_{t_1}^{t_2} L(q, \dot{q}, t) \, dt = 0"
            description="The principle of stationary action: the true path extremizes the action integral"
          />
        </div>

        <Callout type="theorem" title="Hamilton's Principle" className="mt-6">
          Of all possible paths a physical system might take between two configurations, the
          one it actually follows is the path along which the action integral is stationary.
        </Callout>
      </section>

      {/* Optics and Hamilton's Characteristic Function */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Optics: The Characteristic Function</h2>

        <p className="text-dark-300 mb-6">
          Hamilton's first great work was in optics. He introduced the "characteristic function"—a
          single scalar function from which all properties of an optical system could be derived.
          This was the precursor to his mechanical methods.
        </p>

        <CardGrid columns={2}>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Prediction of Conical Refraction</h4>
            <p className="text-sm text-dark-400">
              In 1832, Hamilton predicted that light entering certain crystals would emerge as a
              hollow cone. Humphrey Lloyd confirmed this within months—a stunning triumph for
              mathematical physics.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Wave-Particle Duality Foreshadowed</h4>
            <p className="text-sm text-dark-400">
              Hamilton showed that ray optics and wave optics are limiting cases of the same
              mathematics—anticipating the wave-particle duality that would emerge in quantum
              mechanics a century later.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <Card variant="secondary">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Bell's Assessment</h3>

          <blockquote className="text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4 mb-4">
            "Hamilton's mathematical powers were of the highest order, and he had a
            philosopher's insight into the abstract... His quaternions, whatever their
            practical value may be, are one of the outstanding landmarks in the history of algebra."
          </blockquote>

          <p className="text-dark-400">
            Bell notes both Hamilton's genius and his tragic flaw: an obsession with quaternions
            that consumed his later years. Hamilton believed quaternions would revolutionize all
            of physics; instead, vector analysis (derived from quaternions by Gibbs and Heaviside)
            took that role. Yet Hamiltonian mechanics became foundational to quantum theory, and
            quaternions found new life in the computer age.
          </p>
        </Card>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Major Contributions</h2>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Quaternions (1843)</h4>
            <p className="text-sm text-dark-400">
              The first non-commutative algebra, opening a new era in abstract algebra. Today
              essential in 3D graphics, robotics, and aerospace.
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Hamiltonian Mechanics</h4>
            <p className="text-sm text-dark-400">
              Reformulation of classical mechanics using energy and phase space. Foundation for
              statistical mechanics, chaos theory, and quantum mechanics.
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Hamilton-Jacobi Theory</h4>
            <p className="text-sm text-dark-400">
              A powerful method for solving mechanical problems that became the bridge to
              Schrödinger's wave equation in quantum mechanics.
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Hodographs</h4>
            <p className="text-sm text-dark-400">
              The curve traced by velocity vectors, useful in celestial mechanics and aerodynamics.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Hamilton's Tragedy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Later Years</h2>

        <p className="text-dark-300 mb-6">
          Hamilton's personal life was troubled. He never recovered from an unrequited love for
          Catherine Disney, who married another. His own marriage was unhappy. In his later years,
          he became increasingly reclusive, drinking heavily, and burying himself in the elaboration
          of quaternion theory.
        </p>

        <Callout type="warning">
          Hamilton's study at Dunsink Observatory became so cluttered with papers that meals were
          served through a gap, and legend has it that new mathematical results would occasionally
          be found among decades-old correspondence.
        </Callout>

        <p className="text-dark-300 mt-6">
          He died in 1865, still working on quaternions. His <em>Elements of Quaternions</em>
          ran to 800 pages—published posthumously, it was described as "grand but unreadable."
          Yet the ideas embedded within continue to shape mathematics and physics today.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <Card variant="dark">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-dark-300">
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Quaternions (<Math tex="\mathbb{H}" />) are a 4-dimensional algebra where
                multiplication is non-commutative: <Math tex="ij = k" /> but <Math tex="ji = -k" />
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                The fundamental relation <Math tex="i^2 = j^2 = k^2 = ijk = -1" /> generates
                all quaternion multiplication
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Hamiltonian mechanics reformulates physics using the Hamiltonian <Math tex="H = T + V" />
                and phase space, providing the mathematical framework for quantum mechanics
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                The principle of least action states that nature chooses paths that extremize
                the action integral—a unifying principle for all of physics
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Hamilton's work bridges classical and quantum physics: his optical-mechanical
                analogy foreshadowed wave-particle duality
              </span>
            </li>
          </ul>
        </Card>
      </section>
    </LessonLayout>
  );
}
