import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock } from '../../components/common/MathBlock';

// Descriptive Geometry - Orthographic Projections
function DescriptiveGeometry() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotationX, setRotationX] = useState(0.3);
  const [rotationY, setRotationY] = useState(0.5);
  const [showProjections, setShowProjections] = useState(true);

  // Simple 3D house shape
  const vertices3D = [
    // Base
    [-1, 0, -1], [1, 0, -1], [1, 0, 1], [-1, 0, 1],
    // Top of walls
    [-1, 1, -1], [1, 1, -1], [1, 1, 1], [-1, 1, 1],
    // Roof peak
    [0, 1.5, -1], [0, 1.5, 1],
  ];

  const edges = [
    // Base
    [0, 1], [1, 2], [2, 3], [3, 0],
    // Top of walls
    [4, 5], [5, 6], [6, 7], [7, 4],
    // Vertical edges
    [0, 4], [1, 5], [2, 6], [3, 7],
    // Roof
    [4, 8], [5, 8], [6, 9], [7, 9], [8, 9],
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

    // Rotation matrices
    const rotateX = (p: number[], angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [p[0], p[1] * cos - p[2] * sin, p[1] * sin + p[2] * cos];
    };

    const rotateY = (p: number[], angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [p[0] * cos + p[2] * sin, p[1], -p[0] * sin + p[2] * cos];
    };

    // Transform vertices
    const transformed = vertices3D.map(v => {
      let p = [...v];
      p = rotateX(p, rotationX);
      p = rotateY(p, rotationY);
      return p;
    });

    // 3D view (isometric-ish)
    const project3D = (p: number[]) => ({
      x: width / 4 + p[0] * 60 - p[2] * 30,
      y: height / 2 - p[1] * 60 + p[2] * 20,
    });

    // Draw 3D object
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    edges.forEach(([i, j]) => {
      const p1 = project3D(transformed[i]);
      const p2 = project3D(transformed[j]);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    });

    // Draw vertices
    transformed.forEach((v, i) => {
      const p = project3D(v);
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });

    if (showProjections) {
      // Front view (X-Y plane) - right side
      const frontX = width * 0.65;
      const frontY = height * 0.3;

      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;
      ctx.strokeRect(frontX - 80, frontY - 60, 160, 120);
      ctx.fillStyle = '#9ca3af';
      ctx.font = '10px monospace';
      ctx.fillText('FRONT (X-Y)', frontX - 30, frontY - 70);

      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      edges.forEach(([i, j]) => {
        const v1 = vertices3D[i];
        const v2 = vertices3D[j];
        ctx.beginPath();
        ctx.moveTo(frontX + v1[0] * 40, frontY - v1[1] * 40);
        ctx.lineTo(frontX + v2[0] * 40, frontY - v2[1] * 40);
        ctx.stroke();
      });

      // Top view (X-Z plane) - bottom right
      const topX = width * 0.65;
      const topY = height * 0.75;

      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;
      ctx.strokeRect(topX - 80, topY - 60, 160, 120);
      ctx.fillStyle = '#9ca3af';
      ctx.fillText('TOP (X-Z)', topX - 25, topY - 70);

      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      edges.forEach(([i, j]) => {
        const v1 = vertices3D[i];
        const v2 = vertices3D[j];
        ctx.beginPath();
        ctx.moveTo(topX + v1[0] * 40, topY - v1[2] * 40);
        ctx.lineTo(topX + v2[0] * 40, topY - v2[2] * 40);
        ctx.stroke();
      });

      // Projection lines (dashed)
      ctx.strokeStyle = '#4b5563';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);

      // Some projection lines from 3D to 2D views
      [0, 1, 8].forEach(i => {
        const p3d = project3D(transformed[i]);
        const v = vertices3D[i];

        // To front view
        ctx.beginPath();
        ctx.moveTo(p3d.x, p3d.y);
        ctx.lineTo(frontX + v[0] * 40, frontY - v[1] * 40);
        ctx.stroke();

        // To top view
        ctx.beginPath();
        ctx.moveTo(p3d.x, p3d.y);
        ctx.lineTo(topX + v[0] * 40, topY - v[2] * 40);
        ctx.stroke();
      });

      ctx.setLineDash([]);
    }

    // Labels
    ctx.fillStyle = '#3b82f6';
    ctx.font = '11px monospace';
    ctx.fillText('3D Object', 20, 30);
  }, [rotationX, rotationY, showProjections]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Descriptive Geometry</h4>

      <p className="text-sm text-dark-300 mb-4">
        Monge invented descriptive geometry—the systematic method of representing
        three-dimensional objects using two-dimensional drawings. This is the foundation
        of all engineering and architectural drafting.
      </p>

      <canvas
        ref={canvasRef}
        width={550}
        height={400}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-1">
            Rotate X: {(rotationX * 180 / Math.PI).toFixed(0)}°
          </label>
          <input
            type="range"
            min={-1}
            max={1}
            step={0.05}
            value={rotationX}
            onChange={(e) => setRotationX(parseFloat(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">
            Rotate Y: {(rotationY * 180 / Math.PI).toFixed(0)}°
          </label>
          <input
            type="range"
            min={-1.5}
            max={1.5}
            step={0.05}
            value={rotationY}
            onChange={(e) => setRotationY(parseFloat(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={showProjections}
          onChange={(e) => setShowProjections(e.target.checked)}
          className="accent-primary-500"
        />
        <span className="text-sm text-dark-400">Show 2D projections</span>
      </label>

      <Callout type="success">
        <p>
          <strong>Military Secret:</strong> Monge's methods were so valuable for fortress
          design that they were classified as a military secret for 15 years. Only in 1795
          was he allowed to teach descriptive geometry publicly at the École Polytechnique.
        </p>
      </Callout>
    </div>
  );
}

// Optimal Transport (Monge Problem)
function MongeTransport() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [config, setConfig] = useState<'optimal' | 'suboptimal'>('optimal');

  // Sources (mines/supply points)
  const sources = [
    { x: 80, y: 150, supply: 30 },
    { x: 80, y: 250, supply: 40 },
    { x: 80, y: 350, supply: 30 },
  ];

  // Destinations (factories/demand points)
  const destinations = [
    { x: 420, y: 120, demand: 25 },
    { x: 420, y: 200, demand: 35 },
    { x: 420, y: 280, demand: 20 },
    { x: 420, y: 360, demand: 20 },
  ];

  // Optimal transport plan
  const optimalPlan = [
    { from: 0, to: 0, amount: 25 },
    { from: 0, to: 1, amount: 5 },
    { from: 1, to: 1, amount: 30 },
    { from: 1, to: 2, amount: 10 },
    { from: 2, to: 2, amount: 10 },
    { from: 2, to: 3, amount: 20 },
  ];

  // Suboptimal plan (crossing lines)
  const suboptimalPlan = [
    { from: 0, to: 1, amount: 30 },
    { from: 1, to: 0, amount: 25 },
    { from: 1, to: 3, amount: 15 },
    { from: 2, to: 2, amount: 20 },
    { from: 2, to: 3, amount: 5 },
    { from: 1, to: 1, amount: 5 },
  ];

  const calculateCost = (plan: typeof optimalPlan): number => {
    return plan.reduce((sum, t) => {
      const s = sources[t.from];
      const d = destinations[t.to];
      const dist = Math.sqrt(Math.pow(d.x - s.x, 2) + Math.pow(d.y - s.y, 2));
      return sum + dist * t.amount;
    }, 0);
  };

  const currentPlan = config === 'optimal' ? optimalPlan : suboptimalPlan;
  const currentCost = calculateCost(currentPlan);
  const optimalCost = calculateCost(optimalPlan);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Draw transport lines
    currentPlan.forEach(t => {
      const s = sources[t.from];
      const d = destinations[t.to];
      const lineWidth = Math.max(1, t.amount / 10);

      ctx.strokeStyle = config === 'optimal' ? '#10b981' : '#ef4444';
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(d.x, d.y);
      ctx.stroke();

      // Arrow
      const angle = Math.atan2(d.y - s.y, d.x - s.x);
      const midX = (s.x + d.x) / 2;
      const midY = (s.y + d.y) / 2;
      ctx.fillStyle = config === 'optimal' ? '#10b981' : '#ef4444';
      ctx.beginPath();
      ctx.moveTo(midX + 10 * Math.cos(angle), midY + 10 * Math.sin(angle));
      ctx.lineTo(midX - 5 * Math.cos(angle - 0.5), midY - 5 * Math.sin(angle - 0.5));
      ctx.lineTo(midX - 5 * Math.cos(angle + 0.5), midY - 5 * Math.sin(angle + 0.5));
      ctx.closePath();
      ctx.fill();
    });

    // Draw sources
    sources.forEach((s, i) => {
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(s.x, s.y, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`S${i + 1}`, s.x, s.y + 4);
      ctx.font = '10px monospace';
      ctx.fillText(`(${s.supply})`, s.x, s.y + 35);
    });

    // Draw destinations
    destinations.forEach((d, i) => {
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.rect(d.x - 15, d.y - 15, 30, 30);
      ctx.fill();
      ctx.fillStyle = '#1f2937';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`D${i + 1}`, d.x, d.y + 4);
      ctx.fillStyle = '#f59e0b';
      ctx.font = '10px monospace';
      ctx.fillText(`(${d.demand})`, d.x, d.y + 35);
    });

    // Labels
    ctx.fillStyle = '#3b82f6';
    ctx.font = '11px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('Sources (Supply)', 30, 30);
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('Destinations (Demand)', 360, 30);
  }, [config, currentPlan]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Monge Problem (Optimal Transport)</h4>

      <p className="text-sm text-dark-300 mb-4">
        Monge posed a fundamental problem: given piles of dirt and holes to fill, what's
        the cheapest way to move the dirt? This "optimal transport" problem is now essential
        in economics, machine learning, and image processing.
      </p>

      <canvas
        ref={canvasRef}
        width={500}
        height={420}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setConfig('optimal')}
          className={`flex-1 py-2 rounded ${
            config === 'optimal' ? 'bg-emerald-600' : 'bg-dark-700'
          }`}
        >
          Optimal Plan
        </button>
        <button
          onClick={() => setConfig('suboptimal')}
          className={`flex-1 py-2 rounded ${
            config === 'suboptimal' ? 'bg-red-600' : 'bg-dark-700'
          }`}
        >
          Suboptimal Plan
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Current Cost</p>
          <p className={`text-2xl font-mono ${
            config === 'optimal' ? 'text-emerald-400' : 'text-red-400'
          }`}>
            {currentCost.toFixed(0)}
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Savings vs Suboptimal</p>
          <p className="text-2xl font-mono text-primary-400">
            {config === 'optimal'
              ? `${((1 - currentCost / calculateCost(suboptimalPlan)) * 100).toFixed(0)}%`
              : '0%'}
          </p>
        </div>
      </div>
    </div>
  );
}

// Surface Curvature Visualization
function SurfaceCurvature() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [surfaceType, setSurfaceType] = useState<'sphere' | 'saddle' | 'cylinder'>('sphere');
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.02);
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

    // Surface function based on type
    const getSurfaceZ = (x: number, y: number): number => {
      switch (surfaceType) {
        case 'sphere':
          const r2 = x * x + y * y;
          return r2 < 1 ? Math.sqrt(1 - r2) * 0.5 : 0;
        case 'saddle':
          return (x * x - y * y) * 0.3;
        case 'cylinder':
          return Math.sqrt(Math.max(0, 1 - x * x)) * 0.4;
        default:
          return 0;
      }
    };

    // Draw wireframe surface
    const scale = 80;
    const gridSize = 15;

    const project = (x: number, y: number, z: number) => {
      const cos = Math.cos(time * 0.5);
      const sin = Math.sin(time * 0.5);
      const rx = x * cos - y * sin;
      const ry = x * sin + y * cos;
      return {
        x: centerX + rx * scale - z * 30,
        y: centerY - ry * scale * 0.5 - z * scale,
      };
    };

    // Draw grid lines
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1;

    // X-direction lines
    for (let j = -gridSize; j <= gridSize; j += 2) {
      ctx.beginPath();
      for (let i = -gridSize; i <= gridSize; i++) {
        const x = i / gridSize;
        const y = j / gridSize;
        const z = getSurfaceZ(x, y);
        const p = project(x, y, z);
        if (i === -gridSize) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }

    // Y-direction lines
    for (let i = -gridSize; i <= gridSize; i += 2) {
      ctx.beginPath();
      for (let j = -gridSize; j <= gridSize; j++) {
        const x = i / gridSize;
        const y = j / gridSize;
        const z = getSurfaceZ(x, y);
        const p = project(x, y, z);
        if (j === -gridSize) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }

    // Principal curvature indicators at center
    const centerP = project(0, 0, getSurfaceZ(0, 0));

    // Draw curvature info
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.textAlign = 'left';

    let k1: string, k2: string, gaussian: string, curvatureType: string;
    switch (surfaceType) {
      case 'sphere':
        k1 = 'κ₁ = +1';
        k2 = 'κ₂ = +1';
        gaussian = 'K = +1 (positive)';
        curvatureType = 'Elliptic';
        break;
      case 'saddle':
        k1 = 'κ₁ = +1';
        k2 = 'κ₂ = -1';
        gaussian = 'K = -1 (negative)';
        curvatureType = 'Hyperbolic';
        break;
      case 'cylinder':
        k1 = 'κ₁ = +1';
        k2 = 'κ₂ = 0';
        gaussian = 'K = 0 (zero)';
        curvatureType = 'Parabolic';
        break;
      default:
        k1 = k2 = gaussian = curvatureType = '';
    }

    ctx.fillStyle = '#10b981';
    ctx.fillText(k1, 20, height - 60);
    ctx.fillStyle = '#ef4444';
    ctx.fillText(k2, 20, height - 45);
    ctx.fillStyle = '#f59e0b';
    ctx.fillText(gaussian, 20, height - 30);
    ctx.fillStyle = '#3b82f6';
    ctx.fillText(`Type: ${curvatureType}`, 20, height - 15);
  }, [surfaceType, time]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Differential Geometry: Surface Curvature</h4>

      <p className="text-sm text-dark-300 mb-4">
        Monge contributed to differential geometry—studying surfaces through calculus.
        The Gaussian curvature K = κ₁ × κ₂ (product of principal curvatures) determines
        the local shape of a surface.
      </p>

      <canvas
        ref={canvasRef}
        width={400}
        height={350}
        className="w-full max-w-md mx-auto bg-dark-900 rounded-lg mb-4"
      />

      <div className="flex gap-2 mb-4 justify-center">
        <button
          onClick={() => setSurfaceType('sphere')}
          className={`px-4 py-2 rounded ${
            surfaceType === 'sphere' ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Sphere (K {'>'}  0)
        </button>
        <button
          onClick={() => setSurfaceType('saddle')}
          className={`px-4 py-2 rounded ${
            surfaceType === 'saddle' ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Saddle (K {'<'} 0)
        </button>
        <button
          onClick={() => setSurfaceType('cylinder')}
          className={`px-4 py-2 rounded ${
            surfaceType === 'cylinder' ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Cylinder (K = 0)
        </button>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <MathBlock>
          {`K = \\kappa_1 \\cdot \\kappa_2 = \\frac{LN - M^2}{EG - F^2}`}
        </MathBlock>
        <p className="text-xs text-dark-500 text-center mt-2">
          Gaussian curvature from the first and second fundamental forms
        </p>
      </div>
    </div>
  );
}

// École Polytechnique Timeline
function EcolePolytechnique() {
  const [selectedYear, setSelectedYear] = useState(1794);

  const events = [
    {
      year: 1794,
      title: 'Foundation',
      desc: 'Monge helps found the École Polytechnique during the Revolution to train military engineers. Revolutionary approach: practical science taught through mathematics.',
    },
    {
      year: 1795,
      title: 'First Classes',
      desc: 'Monge teaches descriptive geometry publicly for the first time. Students include future scientists like Poisson, Biot, and Malus.',
    },
    {
      year: 1798,
      title: 'Egyptian Campaign',
      desc: 'Monge accompanies Napoleon to Egypt as part of the scientific expedition. He helps found the Institut d\'Égypte in Cairo.',
    },
    {
      year: 1805,
      title: 'Napoleonic Height',
      desc: 'Under Napoleon, the École becomes the premier technical school in the world. Its graduates build the infrastructure of the Empire.',
    },
    {
      year: 1816,
      title: 'Monge\'s Fall',
      desc: 'After Napoleon\'s defeat, Monge is expelled from the Institut de France for his Bonapartist loyalties. He dies two years later, broken.',
    },
  ];

  const current = events.find(e => e.year === selectedYear) || events[0];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The École Polytechnique</h4>

      <p className="text-sm text-dark-300 mb-4">
        Monge's greatest legacy may be the École Polytechnique—a revolutionary new type
        of technical school that trained engineers through rigorous mathematics. Its
        model spread worldwide and shaped modern technical education.
      </p>

      {/* Timeline */}
      <div className="relative mb-6">
        <div className="h-2 bg-dark-700 rounded-full" />
        <div className="flex justify-between absolute top-0 left-0 right-0">
          {events.map(e => (
            <button
              key={e.year}
              onClick={() => setSelectedYear(e.year)}
              className={`w-8 h-8 rounded-full -mt-3 flex items-center justify-center text-xs font-bold transition-all ${
                selectedYear === e.year
                  ? 'bg-primary-500 text-white scale-125'
                  : 'bg-dark-600 text-dark-300 hover:bg-dark-500'
              }`}
            >
              {e.year.toString().slice(2)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-xs text-dark-500 mb-4">
        <span>1794</span>
        <span>1816</span>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl font-bold text-primary-400">{current.year}</span>
          <h5 className="font-semibold text-dark-200">{current.title}</h5>
        </div>
        <p className="text-sm text-dark-300">{current.desc}</p>
      </div>

      <Callout type="info">
        <p>
          <strong>Famous Graduates:</strong> The École produced an extraordinary
          concentration of genius: Cauchy, Fourier, Poisson, Carnot, Fresnel, Coriolis,
          Navier, Lamé, Liouville... French mathematics dominated the early 19th century
          largely thanks to Monge's institution.
        </p>
      </Callout>
    </div>
  );
}

// Stone Cutting / Stereotomy
function Stereotomy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [archType, setArchType] = useState<'semicircular' | 'pointed' | 'flat'>('semicircular');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Draw ground
    ctx.fillStyle = '#374151';
    ctx.fillRect(0, height - 40, width, 40);

    // Draw pillars
    ctx.fillStyle = '#78350f';
    ctx.fillRect(centerX - 180, height - 200, 40, 160);
    ctx.fillRect(centerX + 140, height - 200, 40, 160);

    // Draw arch stones (voussoirs)
    const numStones = 11;
    const innerRadius = 120;
    const outerRadius = 160;
    const baseY = height - 200;

    ctx.lineWidth = 2;

    for (let i = 0; i < numStones; i++) {
      let startAngle: number, endAngle: number;

      if (archType === 'semicircular') {
        startAngle = Math.PI + (i / numStones) * Math.PI;
        endAngle = Math.PI + ((i + 1) / numStones) * Math.PI;
      } else if (archType === 'pointed') {
        // Gothic pointed arch (two arcs)
        const halfStones = Math.floor(numStones / 2);
        if (i <= halfStones) {
          const leftCenterX = centerX + 60;
          const t = i / halfStones;
          startAngle = Math.PI * 0.6 + t * Math.PI * 0.4;
          endAngle = Math.PI * 0.6 + (t + 1 / halfStones) * Math.PI * 0.4;

          ctx.fillStyle = i === Math.floor(numStones / 2) ? '#f59e0b' : '#92400e';
          ctx.strokeStyle = '#451a03';
          ctx.beginPath();
          ctx.arc(leftCenterX, baseY, innerRadius, startAngle, endAngle);
          ctx.arc(leftCenterX, baseY, outerRadius, endAngle, startAngle, true);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
        if (i >= halfStones) {
          const rightCenterX = centerX - 60;
          const t = (i - halfStones) / (numStones - halfStones);
          startAngle = Math.PI * 0.6 - t * Math.PI * 0.4;
          endAngle = Math.PI * 0.6 - (t + 1 / (numStones - halfStones)) * Math.PI * 0.4;

          ctx.fillStyle = i === halfStones ? '#f59e0b' : '#92400e';
          ctx.strokeStyle = '#451a03';
          ctx.beginPath();
          ctx.arc(rightCenterX, baseY, innerRadius, Math.PI - startAngle, Math.PI - endAngle);
          ctx.arc(rightCenterX, baseY, outerRadius, Math.PI - endAngle, Math.PI - startAngle, true);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
        continue;
      } else {
        // Flat arch (straight top)
        const stoneWidth = 280 / numStones;
        const x = centerX - 140 + i * stoneWidth;

        // Wedge-shaped stones
        const wedgeAngle = ((i - numStones / 2) / numStones) * 0.3;
        ctx.fillStyle = i === Math.floor(numStones / 2) ? '#f59e0b' : '#92400e';
        ctx.strokeStyle = '#451a03';
        ctx.beginPath();
        ctx.moveTo(x - wedgeAngle * 20, baseY);
        ctx.lineTo(x + stoneWidth - wedgeAngle * 20, baseY);
        ctx.lineTo(x + stoneWidth + wedgeAngle * 20, baseY - 40);
        ctx.lineTo(x + wedgeAngle * 20, baseY - 40);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        continue;
      }

      // Draw voussoir for semicircular
      ctx.fillStyle = i === Math.floor(numStones / 2) ? '#f59e0b' : '#92400e';
      ctx.strokeStyle = '#451a03';
      ctx.beginPath();
      ctx.arc(centerX, baseY, innerRadius, startAngle, endAngle);
      ctx.arc(centerX, baseY, outerRadius, endAngle, startAngle, true);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Keystone', centerX, baseY - outerRadius - 10);

    // Force arrows
    ctx.strokeStyle = '#ef4444';
    ctx.fillStyle = '#ef4444';
    ctx.lineWidth = 2;

    // Downward force
    ctx.beginPath();
    ctx.moveTo(centerX, baseY - outerRadius - 30);
    ctx.lineTo(centerX, baseY - outerRadius - 60);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX, baseY - outerRadius - 30);
    ctx.lineTo(centerX - 5, baseY - outerRadius - 40);
    ctx.lineTo(centerX + 5, baseY - outerRadius - 40);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#ef4444';
    ctx.font = '10px monospace';
    ctx.fillText('Load', centerX, baseY - outerRadius - 65);

    ctx.textAlign = 'left';
  }, [archType]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Stereotomy: The Science of Stone Cutting</h4>

      <p className="text-sm text-dark-300 mb-4">
        Monge began his career solving problems in stone-cutting (stereotomy)—determining
        how to cut stones so they fit together perfectly in arches and vaults. This
        practical problem led him to invent descriptive geometry.
      </p>

      <canvas
        ref={canvasRef}
        width={450}
        height={300}
        className="w-full max-w-md mx-auto bg-dark-900 rounded-lg mb-4"
      />

      <div className="flex gap-2 mb-4 justify-center">
        <button
          onClick={() => setArchType('semicircular')}
          className={`px-3 py-1 rounded text-sm ${
            archType === 'semicircular' ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Roman Arch
        </button>
        <button
          onClick={() => setArchType('pointed')}
          className={`px-3 py-1 rounded text-sm ${
            archType === 'pointed' ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Gothic Arch
        </button>
        <button
          onClick={() => setArchType('flat')}
          className={`px-3 py-1 rounded text-sm ${
            archType === 'flat' ? 'bg-primary-600' : 'bg-dark-700'
          }`}
        >
          Flat Arch
        </button>
      </div>

      <p className="text-xs text-dark-500 text-center">
        Each stone (voussoir) must be cut at precise angles so the arch is self-supporting.
        The keystone at the top locks everything together.
      </p>
    </div>
  );
}

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Gaspard Monge was both a mathematician and a builder of institutions. His invention
        of descriptive geometry revolutionized engineering, while his founding of the École
        Polytechnique created a template for technical education that spread worldwide.
        Through it all, he remained devoted to Napoleon—a loyalty that would ultimately
        destroy him.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "The aim of descriptive geometry is twofold: first, to give an exact representation
        of three-dimensional objects on a two-dimensional surface; second, to deduce from
        this representation all that can be known about the forms and positions of these objects."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Gaspard Monge
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">From Stone-Cutter's Son to Napoleon's Friend</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Gaspard Monge (1746–1818) was born in Beaune, Burgundy, the son of a knife-grinder
            and peddler. His exceptional ability earned him a place at a military school in
            Mézières, where he was assigned to draft fortification plans—work considered
            beneath the aristocratic officer students.
          </p>
          <p className="mb-4">
            Asked to design a fortress defense, Monge developed a graphical method that
            reduced weeks of calculation to hours. The method was so powerful it was
            classified as a military secret. Monge spent 15 years teaching it privately
            before the Revolution allowed him to publish.
          </p>
          <p>
            Monge became Napoleon's friend and accompanied him to Egypt. He was made a Count
            and Senator. But after Waterloo, the restored monarchy stripped him of all honors.
            He died in 1818, forbidden even a public funeral.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> May 9, 1746, Beaune</li>
            <li><strong>Died:</strong> July 28, 1818, Paris</li>
            <li><strong>Created:</strong> Descriptive Geometry</li>
            <li><strong>Founded:</strong> École Polytechnique</li>
            <li><strong>Titles:</strong> Count, Senator (stripped)</li>
          </ul>
        </Card>
      </div>

      {/* Descriptive Geometry */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Descriptive Geometry</h2>

      <p className="mb-4">
        Monge's great invention was a systematic method for representing three-dimensional
        objects in two dimensions—using multiple views (plans, elevations) that capture all
        spatial information. This is the foundation of all engineering drawing and CAD systems.
      </p>

      <DescriptiveGeometry />

      {/* Stereotomy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Origins: Stone-Cutting</h2>

      <p className="mb-4">
        Descriptive geometry grew from the practical problem of stereotomy—cutting stones
        to fit together in arches and vaults. Monge's methods allowed workers to determine
        the exact shape each stone should have.
      </p>

      <Stereotomy />

      {/* École Polytechnique */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The École Polytechnique</h2>

      <p className="mb-4">
        In 1794, Monge helped found the École Polytechnique—a new kind of school that taught
        engineering through rigorous mathematics. Its influence on technical education
        worldwide cannot be overstated.
      </p>

      <EcolePolytechnique />

      {/* Optimal Transport */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Monge Problem</h2>

      <p className="mb-4">
        In 1781, Monge posed what we now call the optimal transport problem: how to move
        material from one distribution to another with minimum cost. This seemingly simple
        question has become fundamental to modern mathematics and machine learning.
      </p>

      <MongeTransport />

      {/* Differential Geometry */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Contributions to Differential Geometry</h2>

      <p className="mb-4">
        Monge also contributed to differential geometry—the study of curves and surfaces
        using calculus. His work on surface curvature influenced Gauss and later geometers.
      </p>

      <SurfaceCurvature />

      {/* Other Contributions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Other Contributions</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Egyptian Expedition</h4>
          <p className="text-sm text-dark-300">
            Monge was one of the scientists Napoleon brought to Egypt. He helped found the
            Institut d'Égypte and contributed to the Description de l'Égypte, the massive
            survey that sparked Egyptomania in Europe.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Lines of Curvature</h4>
          <p className="text-sm text-dark-300">
            Monge studied the special curves on surfaces where principal curvatures are
            aligned—fundamental to the differential geometry that Gauss would later perfect.
          </p>
        </Card>
      </CardGrid>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Revolutionary Service</h4>
          <p className="text-sm text-dark-300">
            During the Revolution, Monge served as Minister of the Navy, organizing
            France's naval defenses. He helped create the metric system and reformed
            French education.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Teaching Method</h4>
          <p className="text-sm text-dark-300">
            Monge pioneered the "blackboard" style of teaching mathematics—working through
            problems visually before the class. This method spread from the École worldwide.
          </p>
        </div>
      </div>

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell portrays Monge as a practical genius whose greatest contributions were
        institutional rather than purely mathematical:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Monge was one of those rare spirits who excel both as creators and as teachers...
        His influence on French mathematics was profound, not so much through his own
        researches as through his incomparable teaching."
      </blockquote>

      <p className="my-4">
        Bell emphasizes Monge's warmth and generosity—beloved by his students, devoted to
        Napoleon, and heartbroken when the Restoration destroyed everything he had built.
        His students carried on his work, making France the center of mathematics for decades.
      </p>

      <Callout type="warning">
        <p>
          <strong>A Tragic End:</strong> After Waterloo, the Bourbons expelled Monge from
          the Institut de France and stripped him of all honors. His health broke. When he
          died in 1818, the government forbade students from attending his funeral—but they
          came anyway, honoring the teacher who had shaped their minds.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Gaspard Monge (1746–1818) invented descriptive geometry—the systematic method
              of representing 3D objects in 2D that underlies all engineering drawing.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              He founded the École Polytechnique (1794), revolutionizing technical education
              by teaching engineering through rigorous mathematics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The Monge problem (optimal transport) asks how to move material at minimum
              cost—now fundamental to economics, machine learning, and image processing.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              His methods originated in stereotomy (stone-cutting) and were classified as
              military secrets for 15 years before he could teach them publicly.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              Monge's devotion to Napoleon led to his downfall—stripped of honors after
              Waterloo, he died broken, but his students carried his legacy forward.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
