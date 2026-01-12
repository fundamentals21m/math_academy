import { useState, useRef, useEffect } from 'react';

type ShapeType = 'triangle' | 'square' | 'pentagon' | 'hexagon';

interface Transform {
  name: string;
  apply: (x: number, y: number) => [number, number];
}

export function SymmetryGroupDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shape, setShape] = useState<ShapeType>('square');
  const [selectedTransform, setSelectedTransform] = useState(0);
  const [showAxes, setShowAxes] = useState(true);

  const width = 480;
  const height = 400;
  const centerX = 240;
  const centerY = 200;
  const radius = 100;

  const shapes: Record<ShapeType, { n: number; name: string }> = {
    triangle: { n: 3, name: 'Equilateral Triangle' },
    square: { n: 4, name: 'Square' },
    pentagon: { n: 5, name: 'Regular Pentagon' },
    hexagon: { n: 6, name: 'Regular Hexagon' },
  };

  const n = shapes[shape].n;

  // Generate symmetry group elements
  const getTransforms = (n: number): Transform[] => {
    const transforms: Transform[] = [];

    // Identity
    transforms.push({
      name: 'e (identity)',
      apply: (x, y) => [x, y],
    });

    // Rotations
    for (let k = 1; k < n; k++) {
      const angle = (2 * Math.PI * k) / n;
      transforms.push({
        name: `r${k} (${(360 * k / n).toFixed(0)}° rotation)`,
        apply: (x, y) => [
          x * Math.cos(angle) - y * Math.sin(angle),
          x * Math.sin(angle) + y * Math.cos(angle),
        ],
      });
    }

    // Reflections
    for (let k = 0; k < n; k++) {
      const angle = (Math.PI * k) / n;
      transforms.push({
        name: `s${k} (reflection ${k})`,
        apply: (x, y) => {
          const cos2 = Math.cos(2 * angle);
          const sin2 = Math.sin(2 * angle);
          return [x * cos2 + y * sin2, x * sin2 - y * cos2];
        },
      });
    }

    return transforms;
  };

  const transforms = getTransforms(n);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw symmetry axes if enabled
    if (showAxes) {
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);

      // Rotation center
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.stroke();

      // Reflection axes
      for (let k = 0; k < n; k++) {
        const angle = (Math.PI * k) / n;
        const len = 150;
        ctx.beginPath();
        ctx.moveTo(centerX - len * Math.cos(angle), centerY + len * Math.sin(angle));
        ctx.lineTo(centerX + len * Math.cos(angle), centerY - len * Math.sin(angle));
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    // Generate polygon vertices
    const vertices: [number, number][] = [];
    for (let i = 0; i < n; i++) {
      const angle = (2 * Math.PI * i) / n - Math.PI / 2;
      vertices.push([
        radius * Math.cos(angle),
        radius * Math.sin(angle),
      ]);
    }

    // Draw original polygon (faded)
    ctx.fillStyle = 'rgba(167, 139, 250, 0.2)';
    ctx.strokeStyle = 'rgba(167, 139, 250, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    vertices.forEach(([vx, vy], i) => {
      const cx = centerX + vx;
      const cy = centerY - vy;
      if (i === 0) ctx.moveTo(cx, cy);
      else ctx.lineTo(cx, cy);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Apply selected transform and draw
    const transform = transforms[selectedTransform];
    const transformedVertices = vertices.map(([vx, vy]) => transform.apply(vx, vy));

    // Draw transformed polygon
    ctx.fillStyle = 'rgba(34, 211, 238, 0.3)';
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2;
    ctx.beginPath();
    transformedVertices.forEach(([vx, vy], i) => {
      const cx = centerX + vx;
      const cy = centerY - vy;
      if (i === 0) ctx.moveTo(cx, cy);
      else ctx.lineTo(cx, cy);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw vertices with labels
    vertices.forEach(([vx, vy], i) => {
      const cx = centerX + vx;
      const cy = centerY - vy;
      ctx.fillStyle = '#a78bfa';
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#a78bfa';
      ctx.font = '10px sans-serif';
      const labelOffset = 15;
      ctx.fillText(
        String(i + 1),
        cx + labelOffset * Math.cos((2 * Math.PI * i) / n - Math.PI / 2),
        cy - labelOffset * Math.sin((2 * Math.PI * i) / n - Math.PI / 2)
      );
    });

    // Draw transformed vertex labels
    transformedVertices.forEach(([vx, vy]) => {
      const cx = centerX + vx;
      const cy = centerY - vy;
      ctx.fillStyle = '#22d3ee';
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Title
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '13px sans-serif';
    ctx.fillText(`D${n} Symmetry Group: ${shapes[shape].name}`, 10, 25);
    ctx.font = '11px sans-serif';
    ctx.fillText(`Order: ${2 * n} (${n} rotations + ${n} reflections)`, 10, 45);

  }, [shape, selectedTransform, showAxes, n, transforms]);

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Symmetry Groups (Dihedral Groups)</h4>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-700 rounded"
          />
        </div>

        <div className="w-full md:w-56 space-y-3">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Shape</label>
            <select
              value={shape}
              onChange={(e) => {
                setShape(e.target.value as ShapeType);
                setSelectedTransform(0);
              }}
              className="w-full px-2 py-1.5 bg-slate-800 border border-slate-600 rounded text-slate-200 text-sm"
            >
              <option value="triangle">Triangle (D₃)</option>
              <option value="square">Square (D₄)</option>
              <option value="pentagon">Pentagon (D₅)</option>
              <option value="hexagon">Hexagon (D₆)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">Symmetry</label>
            <select
              value={selectedTransform}
              onChange={(e) => setSelectedTransform(parseInt(e.target.value))}
              className="w-full px-2 py-1.5 bg-slate-800 border border-slate-600 rounded text-slate-200 text-sm"
            >
              {transforms.map((t, i) => (
                <option key={i} value={i}>{t.name}</option>
              ))}
            </select>
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showAxes}
              onChange={(e) => setShowAxes(e.target.checked)}
              className="rounded"
            />
            Show symmetry axes
          </label>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-yellow-400 mb-2">Dihedral Group D{n}</h5>
            <p className="text-xs text-slate-300">
              The symmetry group of a regular {n}-gon has:
            </p>
            <ul className="text-xs text-slate-300 mt-1 space-y-1">
              <li>• {n} rotations (including identity)</li>
              <li>• {n} reflections</li>
              <li>• Total: {2 * n} symmetries</li>
            </ul>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-purple-400">Purple:</span> Original position</p>
            <p><span className="text-cyan-400">Cyan:</span> After transformation</p>
            <p><span className="text-yellow-400">Yellow:</span> Symmetry axes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
