import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, InlineMath } from '../../components/common/MathBlock';

// Euler's Formula Visualization
function EulerFormula() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [theta, setTheta] = useState(Math.PI);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!animating) return;
    const interval = setInterval(() => {
      setTheta(t => {
        const newT = t + 0.05;
        if (newT >= 2 * Math.PI) {
          setAnimating(false);
          return 2 * Math.PI;
        }
        return newT;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [animating]);

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

    // Axis labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText('Real', width - 40, centerY - 10);
    ctx.fillText('Imaginary', centerX + 10, 20);
    ctx.fillText('1', centerX + radius + 5, centerY + 15);
    ctx.fillText('-1', centerX - radius - 15, centerY + 15);
    ctx.fillText('i', centerX + 5, centerY - radius - 5);
    ctx.fillText('-i', centerX + 5, centerY + radius + 15);

    // Draw unit circle
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw arc for current angle
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, -theta, true);
    ctx.stroke();

    // Calculate point on circle
    const x = Math.cos(theta);
    const y = Math.sin(theta);
    const px = centerX + x * radius;
    const py = centerY - y * radius;

    // Draw radius line
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(px, py);
    ctx.stroke();

    // Draw projections
    ctx.strokeStyle = '#10b981';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px, centerY);
    ctx.stroke();
    ctx.strokeStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(centerX, py);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw point
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(px, py, 8, 0, 2 * Math.PI);
    ctx.fill();

    // Labels for cos and sin
    ctx.font = '11px monospace';
    ctx.fillStyle = '#10b981';
    ctx.fillText(`cos θ = ${x.toFixed(3)}`, px + 10, centerY - 5);
    ctx.fillStyle = '#ef4444';
    ctx.fillText(`sin θ = ${y.toFixed(3)}`, centerX + 10, py - 5);

    // Draw angle arc
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, -theta, true);
    ctx.stroke();
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('θ', centerX + 35 * Math.cos(-theta / 2), centerY + 35 * Math.sin(-theta / 2));

    // Special points labels
    if (Math.abs(theta - Math.PI) < 0.1) {
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 14px monospace';
      ctx.fillText('e^(iπ) = -1', px - 60, py - 20);
    }
  }, [theta]);

  const x = Math.cos(theta);
  const y = Math.sin(theta);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Euler's Formula</h4>

      <p className="text-sm text-dark-300 mb-4">
        Euler discovered the most beautiful equation in mathematics, connecting five
        fundamental constants (e, i, π, 1, 0) in one elegant identity. It comes from
        his more general formula relating exponentials to trigonometry.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`e^{i\\theta} = \\cos\\theta + i\\sin\\theta`}
        </MathBlock>
        <p className="text-sm text-dark-400 text-center mt-2">
          When θ = π: <span className="text-amber-400 font-mono">e^(iπ) + 1 = 0</span>
        </p>
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full max-w-md mx-auto bg-dark-900 rounded-lg mb-4"
      />

      <div className="mb-4">
        <label className="text-sm text-dark-400 block mb-2">
          Angle θ: <span className="text-primary-400 font-bold">{(theta / Math.PI).toFixed(2)}π</span>
          <span className="text-dark-500 ml-2">({(theta * 180 / Math.PI).toFixed(0)}°)</span>
        </label>
        <input
          type="range"
          min={0}
          max={2 * Math.PI}
          step={0.01}
          value={theta}
          onChange={(e) => setTheta(parseFloat(e.target.value))}
          className="w-full accent-primary-500"
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setTheta(0)}
            className="px-2 py-1 bg-dark-700 rounded text-xs"
          >
            0
          </button>
          <button
            onClick={() => setTheta(Math.PI / 2)}
            className="px-2 py-1 bg-dark-700 rounded text-xs"
          >
            π/2
          </button>
          <button
            onClick={() => setTheta(Math.PI)}
            className="px-2 py-1 bg-amber-600 rounded text-xs"
          >
            π (identity!)
          </button>
          <button
            onClick={() => setTheta(3 * Math.PI / 2)}
            className="px-2 py-1 bg-dark-700 rounded text-xs"
          >
            3π/2
          </button>
          <button
            onClick={() => { setTheta(0); setAnimating(true); }}
            className="px-2 py-1 bg-primary-600 rounded text-xs"
          >
            Animate
          </button>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <p className="text-sm text-dark-400 mb-2">Current value of e^(iθ):</p>
        <p className="font-mono text-lg">
          <span className="text-emerald-400">{x.toFixed(4)}</span>
          <span className="text-dark-500"> + </span>
          <span className="text-red-400">{y.toFixed(4)}i</span>
        </p>
      </div>
    </div>
  );
}

// Königsberg Bridges Problem
function KonigsbergBridges() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [path, setPath] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const nodes = {
    A: { x: 200, y: 80, label: 'North Bank' },
    B: { x: 200, y: 320, label: 'South Bank' },
    C: { x: 80, y: 200, label: 'West Island' },
    D: { x: 320, y: 200, label: 'East Island' },
  };

  const bridges = [
    { from: 'A', to: 'C', id: '1' },
    { from: 'A', to: 'C', id: '2', offset: 30 },
    { from: 'A', to: 'D', id: '3' },
    { from: 'B', to: 'C', id: '4' },
    { from: 'B', to: 'C', id: '5', offset: 30 },
    { from: 'B', to: 'D', id: '6' },
    { from: 'C', to: 'D', id: '7' },
  ];

  // Count edges for each vertex
  const degrees: Record<string, number> = { A: 3, B: 3, C: 5, D: 3 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(0, 0, width, height);

    // Draw water
    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(0, 0, width, height);

    // Draw land masses
    ctx.fillStyle = '#365314';
    // North bank
    ctx.fillRect(100, 20, 200, 100);
    // South bank
    ctx.fillRect(100, 280, 200, 100);
    // West island
    ctx.beginPath();
    ctx.ellipse(80, 200, 50, 70, 0, 0, 2 * Math.PI);
    ctx.fill();
    // East island
    ctx.beginPath();
    ctx.ellipse(320, 200, 50, 70, 0, 0, 2 * Math.PI);
    ctx.fill();

    // Draw bridges
    bridges.forEach((bridge, idx) => {
      const from = nodes[bridge.from as keyof typeof nodes];
      const to = nodes[bridge.to as keyof typeof nodes];

      let offsetX = 0, offsetY = 0;
      if (bridge.offset) {
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        offsetX = -dy / len * bridge.offset;
        offsetY = dx / len * bridge.offset;
      }

      const crossed = path.includes(bridge.id);

      ctx.strokeStyle = crossed ? '#ef4444' : '#78350f';
      ctx.lineWidth = crossed ? 12 : 10;
      ctx.beginPath();
      ctx.moveTo(from.x + offsetX, from.y + offsetY);
      ctx.lineTo(to.x + offsetX, to.y + offsetY);
      ctx.stroke();

      // Bridge planks
      ctx.strokeStyle = crossed ? '#fca5a5' : '#d97706';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(from.x + offsetX, from.y + offsetY);
      ctx.lineTo(to.x + offsetX, to.y + offsetY);
      ctx.stroke();

      // Bridge number
      const midX = (from.x + to.x) / 2 + offsetX;
      const midY = (from.y + to.y) / 2 + offsetY;
      ctx.fillStyle = crossed ? '#fee2e2' : '#fef3c7';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(bridge.id, midX, midY + 4);
    });

    // Draw nodes
    Object.entries(nodes).forEach(([key, node]) => {
      const inPath = path.length > 0 && (path[0] === key || path[path.length - 1] === key);
      ctx.fillStyle = inPath ? '#fbbf24' : '#ffffff';
      ctx.beginPath();
      ctx.arc(node.x, node.y, 15, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#1f2937';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#1f2937';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(key, node.x, node.y + 5);
    });

    ctx.textAlign = 'left';
  }, [path]);

  const reset = () => {
    setPath([]);
    setMessage('');
  };

  const tryBridge = (bridgeId: string) => {
    if (path.includes(bridgeId)) {
      setMessage('Cannot cross the same bridge twice!');
      return;
    }

    const bridge = bridges.find(b => b.id === bridgeId);
    if (!bridge) return;

    if (path.length === 0) {
      setPath([bridgeId]);
      setMessage('');
      return;
    }

    // Check if this bridge connects to current position
    const lastBridge = bridges.find(b => b.id === path[path.length - 1]);
    if (!lastBridge) return;

    const currentPos = path.length === 1
      ? [lastBridge.from, lastBridge.to]
      : (() => {
          const prevBridge = bridges.find(b => b.id === path[path.length - 2]);
          if (!prevBridge) return [lastBridge.from, lastBridge.to];
          // Find which node we're at
          if (lastBridge.from === prevBridge.from || lastBridge.from === prevBridge.to) {
            return [lastBridge.to];
          }
          return [lastBridge.from];
        })();

    if (currentPos.includes(bridge.from) || currentPos.includes(bridge.to)) {
      const newPath = [...path, bridgeId];
      setPath(newPath);

      if (newPath.length === 7) {
        setMessage('You crossed all bridges! But... did you repeat any? Euler proved this is impossible without repetition.');
      } else {
        setMessage('');
      }
    } else {
      setMessage('That bridge doesn\'t connect to your current location!');
    }
  };

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Seven Bridges of Königsberg</h4>

      <p className="text-sm text-dark-300 mb-4">
        Can you cross all seven bridges exactly once and return to your starting point?
        In 1736, Euler proved it's impossible—and invented graph theory in the process.
      </p>

      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full max-w-md mx-auto bg-dark-900 rounded-lg mb-4"
      />

      <div className="grid grid-cols-7 gap-2 mb-4">
        {bridges.map(bridge => (
          <button
            key={bridge.id}
            onClick={() => tryBridge(bridge.id)}
            disabled={path.includes(bridge.id)}
            className={`p-2 rounded font-mono ${
              path.includes(bridge.id)
                ? 'bg-red-900 text-red-300'
                : 'bg-dark-700 hover:bg-dark-600'
            }`}
          >
            {bridge.id}
          </button>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded"
        >
          Reset
        </button>
        <span className="px-4 py-2 text-sm text-dark-400">
          Bridges crossed: {path.length}/7
        </span>
      </div>

      {message && (
        <div className="bg-amber-900/30 p-3 rounded-lg mb-4">
          <p className="text-amber-400 text-sm">{message}</p>
        </div>
      )}

      <div className="bg-dark-800 p-4 rounded-lg">
        <h5 className="font-semibold text-primary-400 mb-2">Euler's Insight</h5>
        <p className="text-sm text-dark-300 mb-2">
          A path crossing each edge exactly once (Eulerian path) exists only if at most
          two vertices have odd degree. Here, <em>all four</em> vertices have odd degree:
        </p>
        <div className="flex gap-4 font-mono text-sm">
          {Object.entries(degrees).map(([node, degree]) => (
            <span key={node} className="text-amber-400">
              {node}: {degree} bridges
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Basel Problem
function BaselProblem() {
  const [terms, setTerms] = useState(100);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const calculateSum = (n: number): number => {
    let sum = 0;
    for (let k = 1; k <= n; k++) {
      sum += 1 / (k * k);
    }
    return sum;
  };

  const partialSum = calculateSum(terms);
  const exactValue = Math.PI * Math.PI / 6;
  const error = Math.abs(partialSum - exactValue);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Draw π²/6 reference line
    const targetY = 50;
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(40, targetY);
    ctx.lineTo(width - 10, targetY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#10b981';
    ctx.font = '11px monospace';
    ctx.fillText('π²/6 ≈ 1.6449...', 50, targetY - 8);

    // Draw partial sums
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();

    const scaleY = (height - 80) / 1.7;
    let sum = 0;

    for (let k = 1; k <= terms; k++) {
      sum += 1 / (k * k);
      const x = 40 + (k / terms) * (width - 50);
      const y = height - 30 - sum * scaleY;

      if (k === 1) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw individual terms as bars
    if (terms <= 50) {
      ctx.fillStyle = '#3b82f680';
      for (let k = 1; k <= Math.min(terms, 20); k++) {
        const termValue = 1 / (k * k);
        const x = 40 + ((k - 0.5) / terms) * (width - 50);
        const barHeight = termValue * scaleY;
        ctx.fillRect(x - 3, height - 30 - barHeight, 6, barHeight);
      }
    }

    // Axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, height - 30);
    ctx.lineTo(width - 10, height - 30);
    ctx.moveTo(40, 20);
    ctx.lineTo(40, height - 30);
    ctx.stroke();

    ctx.fillStyle = '#9ca3af';
    ctx.font = '10px monospace';
    ctx.fillText('n = ' + terms, width - 60, height - 10);
  }, [terms]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Basel Problem</h4>

      <p className="text-sm text-dark-300 mb-4">
        What is 1 + 1/4 + 1/9 + 1/16 + ...? This problem stumped mathematicians for
        nearly a century until the 28-year-old Euler solved it in 1735, stunning the
        mathematical world.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{1}{1^2} + \\frac{1}{2^2} + \\frac{1}{3^2} + \\cdots = \\frac{\\pi^2}{6}`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={500}
        height={250}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="mb-4">
        <label className="text-sm text-dark-400 block mb-2">
          Number of terms: <span className="text-primary-400 font-bold">{terms}</span>
        </label>
        <input
          type="range"
          min={1}
          max={1000}
          value={terms}
          onChange={(e) => setTerms(parseInt(e.target.value))}
          className="w-full accent-primary-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Partial Sum</p>
          <p className="text-lg font-mono text-blue-400">{partialSum.toFixed(8)}</p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">π²/6</p>
          <p className="text-lg font-mono text-emerald-400">{exactValue.toFixed(8)}</p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Error</p>
          <p className="text-lg font-mono text-amber-400">{error.toExponential(4)}</p>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>Why π²?</strong> The appearance of π in this sum about integers amazed
          mathematicians. Euler's proof used the sine function's infinite product expansion—a
          technique that revealed deep connections between analysis and number theory.
        </p>
      </Callout>
    </div>
  );
}

// Euler Characteristic
function EulerCharacteristic() {
  const [shape, setShape] = useState('tetrahedron');

  const polyhedra: Record<string, { V: number; E: number; F: number; name: string }> = {
    tetrahedron: { V: 4, E: 6, F: 4, name: 'Tetrahedron' },
    cube: { V: 8, E: 12, F: 6, name: 'Cube' },
    octahedron: { V: 6, E: 12, F: 8, name: 'Octahedron' },
    dodecahedron: { V: 20, E: 30, F: 12, name: 'Dodecahedron' },
    icosahedron: { V: 12, E: 30, F: 20, name: 'Icosahedron' },
  };

  const current = polyhedra[shape];
  const chi = current.V - current.E + current.F;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(r => (r + 0.02) % (2 * Math.PI));
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

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Simple 3D projection
    const project = (x: number, y: number, z: number) => {
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      const rx = x * cos - z * sin;
      const rz = x * sin + z * cos;
      const scale = 150 / (4 + rz);
      return {
        x: centerX + rx * scale * 100,
        y: centerY - y * scale * 100,
        z: rz,
      };
    };

    // Draw based on shape
    if (shape === 'tetrahedron') {
      const vertices = [
        [0, 1, 0],
        [-0.943, -0.333, -0.471],
        [0.943, -0.333, -0.471],
        [0, -0.333, 0.943],
      ];

      const edges = [[0, 1], [0, 2], [0, 3], [1, 2], [2, 3], [3, 1]];
      const projected = vertices.map(v => project(v[0], v[1], v[2]));

      // Draw edges
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      edges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(projected[a].x, projected[a].y);
        ctx.lineTo(projected[b].x, projected[b].y);
        ctx.stroke();
      });

      // Draw vertices
      projected.forEach((p, i) => {
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, 2 * Math.PI);
        ctx.fill();
      });
    } else if (shape === 'cube') {
      const s = 0.7;
      const vertices = [
        [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
        [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s],
      ];

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];

      const projected = vertices.map(v => project(v[0], v[1], v[2]));

      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      edges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(projected[a].x, projected[a].y);
        ctx.lineTo(projected[b].x, projected[b].y);
        ctx.stroke();
      });

      projected.forEach(p => {
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
        ctx.fill();
      });
    } else {
      // Simplified representation for other shapes
      ctx.fillStyle = '#3b82f6';
      ctx.font = '14px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${current.name}`, centerX, centerY - 20);
      ctx.fillText(`V=${current.V}, E=${current.E}, F=${current.F}`, centerX, centerY + 10);
      ctx.textAlign = 'left';
    }
  }, [shape, rotation]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Euler Characteristic</h4>

      <p className="text-sm text-dark-300 mb-4">
        For any convex polyhedron, the number of vertices minus edges plus faces always
        equals 2. This beautiful invariant launched the field of topology.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`V - E + F = 2`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="w-full max-w-sm mx-auto bg-dark-900 rounded-lg mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(polyhedra).map(([key, poly]) => (
          <button
            key={key}
            onClick={() => setShape(key)}
            className={`px-3 py-1 rounded text-sm ${
              shape === key ? 'bg-primary-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {poly.name}
          </button>
        ))}
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xs text-dark-400">Vertices (V)</p>
            <p className="text-2xl font-mono text-blue-400">{current.V}</p>
          </div>
          <div>
            <p className="text-xs text-dark-400">Edges (E)</p>
            <p className="text-2xl font-mono text-amber-400">{current.E}</p>
          </div>
          <div>
            <p className="text-xs text-dark-400">Faces (F)</p>
            <p className="text-2xl font-mono text-emerald-400">{current.F}</p>
          </div>
          <div>
            <p className="text-xs text-dark-400">V - E + F</p>
            <p className="text-2xl font-mono text-primary-400">{chi}</p>
          </div>
        </div>
        <p className="text-sm text-dark-400 text-center mt-2">
          {current.V} - {current.E} + {current.F} = {chi} ✓
        </p>
      </div>
    </div>
  );
}

// Euler's Notation Contributions
function EulerNotation() {
  const notations = [
    { symbol: 'e', meaning: "Euler's number (≈ 2.71828)", example: 'e^x, \\ln x', year: '1727' },
    { symbol: 'i', meaning: 'Imaginary unit (√-1)', example: 'i^2 = -1', year: '1777' },
    { symbol: 'π', meaning: 'Pi (popularized by Euler)', example: 'A = \\pi r^2', year: '1736' },
    { symbol: 'Σ', meaning: 'Summation', example: '\\sum_{k=1}^{n} k', year: '1755' },
    { symbol: 'f(x)', meaning: 'Function notation', example: 'f(x) = x^2', year: '1734' },
    { symbol: 'Δ', meaning: 'Finite difference', example: '\\Delta y = y_{n+1} - y_n', year: '1755' },
  ];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Euler's Notation Legacy</h4>

      <p className="text-sm text-dark-300 mb-4">
        Much of the mathematical notation we use today was invented or popularized by Euler.
        His clear, practical notation helped make mathematics more accessible and powerful.
      </p>

      <div className="grid md:grid-cols-2 gap-3">
        {notations.map((n, i) => (
          <div key={i} className="bg-dark-800 p-3 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl font-serif text-primary-400">{n.symbol}</span>
              <div>
                <p className="text-sm text-dark-200">{n.meaning}</p>
                <p className="text-xs text-dark-500">Introduced c. {n.year}</p>
              </div>
            </div>
            <div className="bg-dark-900 p-2 rounded">
              <MathBlock>{n.example}</MathBlock>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Productivity Chart
function ProductivityChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Approximate papers per decade
  const data = [
    { decade: '1720s', papers: 20 },
    { decade: '1730s', papers: 70 },
    { decade: '1740s', papers: 90 },
    { decade: '1750s', papers: 100 },
    { decade: '1760s', papers: 110 },
    { decade: '1770s', papers: 120 },
    { decade: '1780s', papers: 80 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    const maxPapers = 130;
    const barWidth = (width - 80) / data.length - 10;

    // Draw bars
    data.forEach((d, i) => {
      const x = 60 + i * (barWidth + 10);
      const barHeight = (d.papers / maxPapers) * (height - 80);
      const y = height - 40 - barHeight;

      // Bar gradient
      const gradient = ctx.createLinearGradient(x, y, x, height - 40);
      gradient.addColorStop(0, '#3b82f6');
      gradient.addColorStop(1, '#1e40af');
      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);

      // Label
      ctx.fillStyle = '#9ca3af';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(d.decade, x + barWidth / 2, height - 25);

      // Value on top
      ctx.fillStyle = '#60a5fa';
      ctx.fillText(d.papers.toString(), x + barWidth / 2, y - 5);
    });

    // Y axis
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, height - 40);
    ctx.lineTo(width - 10, height - 40);
    ctx.stroke();

    ctx.fillStyle = '#9ca3af';
    ctx.textAlign = 'right';
    ctx.fillText('Papers', 45, 30);

    // Blindness annotation
    ctx.fillStyle = '#ef4444';
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('(blind in one eye)', 60 + 3 * (barWidth + 10) + barWidth / 2, height - 5);
    ctx.fillText('(completely blind!)', 60 + 5 * (barWidth + 10) + barWidth / 2, height - 5);

    ctx.textAlign = 'left';
  }, []);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Most Prolific Mathematician</h4>

      <p className="text-sm text-dark-300 mb-4">
        Euler published approximately 866 papers and books—more than any mathematician
        in history. Even after going completely blind in 1771, his output actually
        <em> increased</em>, dictating to scribes from his prodigious memory.
      </p>

      <canvas
        ref={canvasRef}
        width={500}
        height={250}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Total Works</p>
          <p className="text-2xl font-mono text-primary-400">866+</p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Collected Works</p>
          <p className="text-2xl font-mono text-emerald-400">80+ volumes</p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Years Blind</p>
          <p className="text-2xl font-mono text-amber-400">12</p>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>Posthumous Publications:</strong> Euler's output was so vast that the
          St. Petersburg Academy continued publishing his papers for 50 years after his
          death. The complete <em>Opera Omnia</em> edition, begun in 1911, is still not
          finished—over 80 volumes and counting.
        </p>
      </Callout>
    </div>
  );
}

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Leonhard Euler was the most prolific mathematician in history—and perhaps the
        greatest. He published more papers than anyone before or since, invented notation
        still used today, made foundational contributions to virtually every branch of
        mathematics, and did much of this work while completely blind.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Read Euler, read Euler, he is the master of us all."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Pierre-Simon Laplace
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Master of Us All</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Leonhard Euler (1707–1783) was born in Basel, Switzerland, to a pastor who
            had studied mathematics under Jacob Bernoulli. Young Euler received private
            lessons from Johann Bernoulli, who recognized his extraordinary talent.
            At 13, he enrolled at the University of Basel; by 20, he had lost the
            competition for a Paris Academy prize to... a 19-year-old.
          </p>
          <p className="mb-4">
            Euler worked at the St. Petersburg Academy in Russia and the Berlin Academy
            in Prussia, producing mathematics at a rate never seen before or since.
            He had 13 children (only 5 survived childhood) and reportedly could do
            mathematics while bouncing a baby on his knee.
          </p>
          <p>
            In 1738, he lost sight in his right eye. By 1771, he was completely blind.
            His response? His output <em>increased</em>. He developed his mental
            calculation abilities to an astounding degree, dictating papers from memory.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> April 15, 1707, Basel</li>
            <li><strong>Died:</strong> Sept 18, 1783</li>
            <li><strong>Publications:</strong> 866+ papers</li>
            <li><strong>Children:</strong> 13</li>
            <li><strong>Blind:</strong> Last 12 years</li>
          </ul>
        </Card>
      </div>

      <ProductivityChart />

      {/* Euler's Formula */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Most Beautiful Equation</h2>

      <p className="mb-4">
        Euler discovered the relationship between exponential functions and trigonometry
        that bears his name. When θ = π, it yields what many consider the most beautiful
        equation in mathematics, connecting the five most important constants.
      </p>

      <EulerFormula />

      <Callout type="success">
        <p>
          <strong>Why So Beautiful?</strong> Euler's identity <InlineMath>e^{'{i\\pi}'} + 1 = 0</InlineMath> contains:
          e (base of natural logarithms), i (imaginary unit), π (circle constant),
          1 (multiplicative identity), and 0 (additive identity)—united in one equation
          that falls naturally from Euler's formula. No contrivance, just pure mathematics.
        </p>
      </Callout>

      {/* Königsberg */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Birth of Graph Theory</h2>

      <p className="mb-4">
        In 1736, Euler solved a famous puzzle about the seven bridges of Königsberg—and
        in doing so, invented graph theory. His proof that no solution exists introduced
        the concept of vertices, edges, and connectivity that underlies modern network science.
      </p>

      <KonigsbergBridges />

      {/* Basel Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Basel Problem</h2>

      <p className="mb-4">
        For nearly a century, mathematicians struggled with the sum 1 + 1/4 + 1/9 + 1/16 + ....
        The Bernoullis tried and failed. Then the 28-year-old Euler solved it, revealing
        that π appears even in sums about integers—a shocking connection.
      </p>

      <BaselProblem />

      {/* Euler Characteristic */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Topology: V - E + F = 2</h2>

      <p className="mb-4">
        Euler discovered that for any convex polyhedron, the number of vertices minus edges
        plus faces always equals 2. This simple formula launched topology—the study of
        properties that remain unchanged under continuous deformation.
      </p>

      <EulerCharacteristic />

      {/* Notation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Language of Mathematics</h2>

      <p className="mb-4">
        Much of the notation we use today was invented or standardized by Euler. His
        choices were so natural and practical that they became universal.
      </p>

      <EulerNotation />

      {/* Other Contributions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Range of Genius</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Number Theory</h4>
          <p className="text-sm text-dark-300">
            Euler's totient function φ(n), proofs about primes, Fermat's Little Theorem
            proof, quadratic reciprocity conjecture, and much more.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Analysis</h4>
          <p className="text-sm text-dark-300">
            Calculus of variations, differential equations, infinite series, gamma
            function, zeta function—foundations of modern analysis.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Physics</h4>
          <p className="text-sm text-dark-300">
            Euler's equations for rigid body rotation, fluid dynamics equations,
            optics, acoustics—mathematics applied to the physical world.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Applied Mathematics</h4>
          <p className="text-sm text-dark-300">
            Ship design, artillery ballistics, music theory, cartography, pension
            calculations—Euler applied mathematics to everything.
          </p>
        </div>
      </div>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Euler's Totient Function</h4>
          <p className="text-sm text-dark-300">
            φ(n) counts integers less than n that are coprime to n. Fundamental to
            number theory and RSA encryption: <InlineMath>a^{'{\\varphi(n)}'} \equiv 1 \pmod n</InlineMath>
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">The Gamma Function</h4>
          <p className="text-sm text-dark-300">
            Euler extended the factorial to non-integers: Γ(n) = (n-1)! for positive
            integers, but defined for all complex numbers except negative integers.
          </p>
        </Card>
      </CardGrid>

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell devotes extensive space to Euler, calling him "the most prolific
        mathematician of all time" and marveling at both his output and his humanity:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Euler calculated without apparent effort, as men breathe, or as eagles
        sustain themselves in the wind."
      </blockquote>

      <p className="my-4">
        Bell emphasizes that Euler was not just prolific but <em>foundational</em>.
        Nearly every branch of mathematics traces key developments to Euler. His
        textbooks trained generations; his notation became standard; his results
        remain essential.
      </p>

      <Callout type="info">
        <p>
          <strong>His Final Day:</strong> On September 18, 1783, Euler spent the morning
          calculating the orbit of the newly discovered planet Uranus, had lunch with
          his family, discussed mathematics with a colleague, and while playing with
          his grandson, suffered a brain hemorrhage and died. "He ceased to calculate
          and to live."
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Leonhard Euler (1707–1783) was the most prolific mathematician in history,
              publishing over 866 papers despite being blind for his last 12 years.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Euler's formula <InlineMath>e^{'{i\\theta}'} = \cos\theta + i\sin\theta</InlineMath> and
              identity <InlineMath>e^{'{i\\pi}'} + 1 = 0</InlineMath> connect the five most important
              mathematical constants.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              He invented graph theory (Königsberg bridges), proved V - E + F = 2 for
              polyhedra, and solved the Basel problem (Σ1/n² = π²/6).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              Euler introduced or standardized notation we use today: e, i, π, Σ, f(x),
              and much more.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              His contributions span number theory, analysis, graph theory, topology,
              physics, and applied mathematics—making him truly "the master of us all."
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
