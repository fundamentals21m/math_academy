import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function HyperbolicDistanceVisualizer({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [point1, setPoint1] = useState<Point>({ x: 0, y: 1 });
  const [point2, setPoint2] = useState<Point>({ x: 0, y: 3 });
  const [dragging, setDragging] = useState<1 | 2 | null>(null);

  const width = 450;
  const height = 400;
  const scale = 50;
  const originX = width / 2;
  const originY = height - 50;

  const toCanvas = (x: number, y: number): [number, number] => {
    return [originX + x * scale, originY - y * scale];
  };

  const toMath = (cx: number, cy: number): Point => {
    return {
      x: (cx - originX) / scale,
      y: (originY - cy) / scale,
    };
  };

  // Calculate Euclidean distance
  const euclideanDist = (p1: Point, p2: Point): number => {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  };

  // Calculate hyperbolic distance
  // For points on the same vertical line: |log(y2/y1)|
  // General formula uses cross-ratio
  const hyperbolicDist = (p1: Point, p2: Point): number => {
    if (p1.y <= 0 || p2.y <= 0) return Infinity;

    // If same x coordinate (on vertical geodesic)
    if (Math.abs(p1.x - p2.x) < 0.001) {
      return Math.abs(Math.log(p2.y / p1.y));
    }

    // General case: find the geodesic (semicircle) and compute via cross-ratio
    // Center of semicircle
    const center = (p2.x * p2.x + p2.y * p2.y - p1.x * p1.x - p1.y * p1.y) / (2 * (p2.x - p1.x));
    const radius = Math.sqrt((p1.x - center) ** 2 + p1.y ** 2);

    // Endpoints of geodesic on x-axis
    const a = center - radius;
    const b = center + radius;

    // Cross-ratio: (p1 - a)(p2 - b) / (p1 - b)(p2 - a)
    // Using complex arithmetic simplified for real endpoints
    const p1_a = Math.sqrt((p1.x - a) ** 2 + p1.y ** 2);
    const p2_b = Math.sqrt((p2.x - b) ** 2 + p2.y ** 2);
    const p1_b = Math.sqrt((p1.x - b) ** 2 + p1.y ** 2);
    const p2_a = Math.sqrt((p2.x - a) ** 2 + p2.y ** 2);

    const crossRatio = (p1_a * p2_b) / (p1_b * p2_a);
    return Math.abs(Math.log(crossRatio));
  };

  // Draw equal hyperbolic distance circles (hyperbolic circles)
  const drawHyperbolicCircle = (ctx: CanvasRenderingContext2D, center: Point, hDist: number, color: string) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);

    // For a point at (0, h), hyperbolic circle of radius r is a Euclidean circle
    // centered at (0, h*cosh(r)) with Euclidean radius h*sinh(r)
    if (Math.abs(center.x) < 0.001) {
      const eucCenter = center.y * Math.cosh(hDist);
      const eucRadius = center.y * Math.sinh(hDist);

      const [cx, cy] = toCanvas(0, eucCenter);
      ctx.beginPath();
      ctx.arc(cx, cy, eucRadius * scale, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.setLineDash([]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = -4; x <= 4; x++) {
      const [cx] = toCanvas(x, 0);
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, originY);
      ctx.stroke();
    }
    for (let y = 1; y <= 7; y++) {
      const [, cy] = toCanvas(0, y);
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();
    }

    // Draw x-axis
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();

    // Draw geodesic between points
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2;

    if (Math.abs(point1.x - point2.x) < 0.001) {
      // Vertical geodesic
      const [cx] = toCanvas(point1.x, 0);
      ctx.beginPath();
      ctx.moveTo(cx, originY);
      ctx.lineTo(cx, 0);
      ctx.stroke();
    } else {
      // Semicircle geodesic
      const center = (point2.x * point2.x + point2.y * point2.y - point1.x * point1.x - point1.y * point1.y) / (2 * (point2.x - point1.x));
      const radius = Math.sqrt((point1.x - center) ** 2 + point1.y ** 2);
      const [cx] = toCanvas(center, 0);
      ctx.beginPath();
      ctx.arc(cx, originY, radius * scale, Math.PI, 0, false);
      ctx.stroke();
    }

    // Draw comparison: equal Euclidean distances from point1
    const eDist = euclideanDist(point1, point2);
    ctx.strokeStyle = 'rgba(244, 114, 182, 0.4)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    const [c1x, c1y] = toCanvas(point1.x, point1.y);
    ctx.beginPath();
    ctx.arc(c1x, c1y, eDist * scale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw hyperbolic equidistant curve (approximate for visualization)
    if (Math.abs(point1.x) < 0.001 && point1.y > 0) {
      const hDist = hyperbolicDist(point1, point2);
      drawHyperbolicCircle(ctx, point1, hDist, 'rgba(34, 211, 238, 0.4)');
    }

    // Draw points
    const [p1x, p1y] = toCanvas(point1.x, point1.y);
    const [p2x, p2y] = toCanvas(point2.x, point2.y);

    // Point 1
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(p1x, p1y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fce7f3';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('P', p1x - 4, p1y + 4);

    // Point 2
    ctx.fillStyle = '#22d3ee';
    ctx.beginPath();
    ctx.arc(p2x, p2y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#cffafe';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('Q', p2x - 4, p2y + 4);

    // Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Drag points to explore', 10, 20);

  }, [point1, point2]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const [p1x, p1y] = toCanvas(point1.x, point1.y);
    const [p2x, p2y] = toCanvas(point2.x, point2.y);

    if (Math.hypot(cx - p1x, cy - p1y) < 15) {
      setDragging(1);
    } else if (Math.hypot(cx - p2x, cy - p2y) < 15) {
      setDragging(2);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const p = toMath(cx, cy);

    // Keep in upper half plane
    if (p.y < 0.2) p.y = 0.2;
    if (p.y > 6.5) p.y = 6.5;
    if (p.x < -4) p.x = -4;
    if (p.x > 4) p.x = 4;

    if (dragging === 1) {
      setPoint1({ x: Math.round(p.x * 20) / 20, y: Math.round(p.y * 20) / 20 });
    } else {
      setPoint2({ x: Math.round(p.x * 20) / 20, y: Math.round(p.y * 20) / 20 });
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const eDist = euclideanDist(point1, point2);
  const hDist = hyperbolicDist(point1, point2);

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Hyperbolic vs Euclidean Distance</h4>

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

        <div className="w-full md:w-52 space-y-4">
          <div className="p-3 bg-slate-800 rounded space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-pink-400">P:</span>
              <span className="text-slate-300 font-mono">({point1.x.toFixed(2)}, {point1.y.toFixed(2)})</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-cyan-400">Q:</span>
              <span className="text-slate-300 font-mono">({point2.x.toFixed(2)}, {point2.y.toFixed(2)})</span>
            </div>
          </div>

          <div className="p-3 bg-slate-800 rounded space-y-3">
            <div>
              <div className="text-xs text-slate-400 mb-1">Euclidean Distance</div>
              <div className="text-xl font-mono text-pink-400">{eDist.toFixed(3)}</div>
              <div className="w-full h-2 bg-slate-700 rounded mt-1">
                <div
                  className="h-full bg-pink-500 rounded"
                  style={{ width: `${Math.min(eDist / 6 * 100, 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-1">Hyperbolic Distance</div>
              <div className="text-xl font-mono text-cyan-400">
                {hDist === Infinity ? '∞' : hDist.toFixed(3)}
              </div>
              <div className="w-full h-2 bg-slate-700 rounded mt-1">
                <div
                  className="h-full bg-cyan-500 rounded"
                  style={{ width: `${Math.min(hDist / 4 * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p className="mb-2">
              <span className="text-pink-400">Pink circle:</span> Euclidean equidistant
            </p>
            <p>
              <span className="text-cyan-400">Cyan curve:</span> Hyperbolic equidistant
            </p>
          </div>

          <button
            onClick={() => {
              setPoint1({ x: 0, y: 1 });
              setPoint2({ x: 0, y: 3 });
            }}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Reset Points
          </button>
        </div>
      </div>
    </div>
  );
}
