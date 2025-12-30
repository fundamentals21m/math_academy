import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function CrossRatioDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<number[]>([1, 2, 4, 6]);
  const [dragging, setDragging] = useState<number | null>(null);
  const [projectionParam, setProjectionParam] = useState(0);

  const width = 500;
  const height = 380;
  const lineY1 = 120;
  const lineY2 = 280;
  const lineStartX = 50;
  const lineEndX = 450;
  const scale = 50;

  const toCanvas = (t: number, lineY: number): Point => ({
    x: lineStartX + t * scale,
    y: lineY,
  });

  // Calculate cross-ratio (A,B;C,D)
  const crossRatio = (a: number, b: number, c: number, d: number): number => {
    const ac = c - a;
    const bd = d - b;
    const bc = c - b;
    const ad = d - a;
    return (ac * bd) / (bc * ad);
  };

  // Apply a projective transformation (for demonstration)
  const projectPoint = (t: number): number => {
    // Simple projective transformation: (at + b) / (ct + d)
    const a = 1 + projectionParam * 0.3;
    const b = projectionParam * 0.5;
    const c = projectionParam * 0.1;
    const d = 1;
    return (a * t + b) / (c * t + d);
  };

  const [A, B, C, D] = points;
  const cr1 = crossRatio(A, B, C, D);
  const projectedPoints = points.map(projectPoint);
  const [pA, pB, pC, pD] = projectedPoints;
  const cr2 = crossRatio(pA, pB, pC, pD);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw first line
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(lineStartX - 20, lineY1);
    ctx.lineTo(lineEndX + 20, lineY1);
    ctx.stroke();

    // Draw second line
    ctx.beginPath();
    ctx.moveTo(lineStartX - 20, lineY2);
    ctx.lineTo(lineEndX + 20, lineY2);
    ctx.stroke();

    // Draw projection center
    const centerX = 250;
    const centerY = 50;
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fbbf24';
    ctx.font = '11px sans-serif';
    ctx.fillText('Projection center', centerX + 10, centerY);

    // Draw original points and labels
    const colors = ['#f472b6', '#22d3ee', '#a78bfa', '#34d399'];
    const labels = ['A', 'B', 'C', 'D'];

    points.forEach((t, i) => {
      const p = toCanvas(t, lineY1);

      // Draw projection line
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(p.x, p.y);
      const pp = toCanvas(projectedPoints[i], lineY2);
      ctx.lineTo(pp.x, pp.y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Original point
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(labels[i], p.x - 4, p.y - 12);

      // Projected point
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.arc(pp.x, pp.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0';
      ctx.fillText(labels[i] + "'", pp.x - 6, pp.y + 22);
    });

    // Labels for lines
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText('Original line', lineStartX, lineY1 - 30);
    ctx.fillText('Projected line', lineStartX, lineY2 + 35);

    // Cross-ratio display
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(300, 310, 190, 60);
    ctx.strokeStyle = '#334155';
    ctx.strokeRect(300, 310, 190, 60);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px sans-serif';
    ctx.fillText(`CR(A,B;C,D) = ${cr1.toFixed(4)}`, 310, 335);
    ctx.fillText(`CR(A',B';C',D') = ${cr2.toFixed(4)}`, 310, 355);

    if (Math.abs(cr1 - cr2) < 0.001) {
      ctx.fillStyle = '#34d399';
      ctx.fillText('✓ Equal!', 430, 345);
    }

  }, [points, projectionParam, projectedPoints, cr1, cr2]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    points.forEach((t, i) => {
      const p = toCanvas(t, lineY1);
      if (Math.hypot(mx - p.x, my - p.y) < 15) {
        setDragging(i);
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dragging === null) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mx = e.clientX - rect.left;
    let t = (mx - lineStartX) / scale;
    t = Math.round(t * 4) / 4;
    t = Math.max(0.5, Math.min(7, t));

    const newPoints = [...points];
    newPoints[dragging] = t;

    // Keep points in order A < B < C < D
    newPoints.sort((a, b) => a - b);
    setPoints(newPoints);
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Cross-Ratio Invariant</h4>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-700 rounded cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />
        </div>

        <div className="w-full md:w-52 space-y-3">
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Projection strength: {projectionParam.toFixed(2)}
            </label>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.05"
              value={projectionParam}
              onChange={(e) => setProjectionParam(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-green-400 mb-2">Cross-Ratio</h5>
            <p className="text-xs text-slate-300 mb-2">
              The cross-ratio of four collinear points is:
            </p>
            <p className="text-xs font-mono text-cyan-400">
              CR(A,B;C,D) = (AC·BD)/(BC·AD)
            </p>
          </div>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-yellow-400 mb-2">Key Property</h5>
            <p className="text-xs text-slate-300">
              Cross-ratio is <strong>preserved</strong> under projective transformations.
              Move points and change projection to verify!
            </p>
          </div>

          <button
            onClick={() => {
              setPoints([1, 2, 4, 6]);
              setProjectionParam(0);
            }}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Reset
          </button>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p>Drag points A, B, C, D on the top line</p>
            <p>Adjust projection to see invariance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
