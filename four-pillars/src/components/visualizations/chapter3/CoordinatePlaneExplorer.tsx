import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function CoordinatePlaneExplorer({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [point1, setPoint1] = useState<Point>({ x: 1, y: 2 });
  const [point2, setPoint2] = useState<Point>({ x: 4, y: 6 });
  const [showLine, setShowLine] = useState(true);
  const [showMidpoint, setShowMidpoint] = useState(true);
  const [dragging, setDragging] = useState<1 | 2 | null>(null);

  const width = 480;
  const height = 400;
  const scale = 40;
  const originX = 60;
  const originY = height - 60;

  const toCanvas = (x: number, y: number): [number, number] => {
    return [originX + x * scale, originY - y * scale];
  };

  const toMath = (cx: number, cy: number): Point => {
    return {
      x: (cx - originX) / scale,
      y: (originY - cy) / scale,
    };
  };

  const distance = Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
  const midpoint: Point = {
    x: (point1.x + point2.x) / 2,
    y: (point1.y + point2.y) / 2,
  };
  const slope = point2.x !== point1.x ? (point2.y - point1.y) / (point2.x - point1.x) : Infinity;

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
    for (let x = 0; x <= 10; x++) {
      const [cx] = toCanvas(x, 0);
      ctx.beginPath();
      ctx.moveTo(cx, 20);
      ctx.lineTo(cx, originY + 20);
      ctx.stroke();
    }
    for (let y = 0; y <= 8; y++) {
      const [, cy] = toCanvas(0, y);
      ctx.beginPath();
      ctx.moveTo(originX - 20, cy);
      ctx.lineTo(width - 20, cy);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    // X-axis
    ctx.beginPath();
    ctx.moveTo(originX - 20, originY);
    ctx.lineTo(width - 20, originY);
    ctx.stroke();
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(originX, originY + 20);
    ctx.lineTo(originX, 20);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    for (let x = 1; x <= 9; x++) {
      const [cx] = toCanvas(x, 0);
      ctx.fillText(x.toString(), cx - 4, originY + 18);
    }
    for (let y = 1; y <= 7; y++) {
      const [, cy] = toCanvas(0, y);
      ctx.fillText(y.toString(), originX - 18, cy + 4);
    }
    ctx.fillText('x', width - 30, originY + 18);
    ctx.fillText('y', originX - 5, 30);

    const [p1x, p1y] = toCanvas(point1.x, point1.y);
    const [p2x, p2y] = toCanvas(point2.x, point2.y);

    // Draw the line connecting points (extended)
    if (showLine && slope !== Infinity) {
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.5)';
      ctx.lineWidth = 1;
      // Extend line across canvas
      const y0 = point1.y - slope * point1.x;
      const [lx1, ly1] = toCanvas(0, y0);
      const [lx2, ly2] = toCanvas(10, slope * 10 + y0);
      ctx.beginPath();
      ctx.moveTo(lx1, ly1);
      ctx.lineTo(lx2, ly2);
      ctx.stroke();
    }

    // Draw segment between points
    ctx.strokeStyle = '#a78bfa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(p1x, p1y);
    ctx.lineTo(p2x, p2y);
    ctx.stroke();

    // Draw distance components (rise and run)
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    // Horizontal (run)
    ctx.beginPath();
    ctx.moveTo(p1x, p1y);
    ctx.lineTo(p2x, p1y);
    ctx.stroke();
    // Vertical (rise)
    ctx.strokeStyle = '#f472b6';
    ctx.beginPath();
    ctx.moveTo(p2x, p1y);
    ctx.lineTo(p2x, p2y);
    ctx.stroke();
    ctx.setLineDash([]);

    // Labels for rise and run
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#22d3ee';
    ctx.fillText(`run = ${(point2.x - point1.x).toFixed(1)}`, (p1x + p2x) / 2 - 25, p1y + 15);
    ctx.fillStyle = '#f472b6';
    ctx.fillText(`rise = ${(point2.y - point1.y).toFixed(1)}`, p2x + 5, (p1y + p2y) / 2);

    // Draw midpoint
    if (showMidpoint) {
      const [mx, my] = toCanvas(midpoint.x, midpoint.y);
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(mx, my, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fbbf24';
      ctx.font = '11px sans-serif';
      ctx.fillText('M', mx + 10, my - 5);
    }

    // Draw points
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(p1x, p1y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fce7f3';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('A', p1x - 4, p1y + 4);

    ctx.fillStyle = '#22d3ee';
    ctx.beginPath();
    ctx.arc(p2x, p2y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#cffafe';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('B', p2x - 4, p2y + 4);

    // Instructions
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Drag points A and B', 10, 20);

  }, [point1, point2, showLine, showMidpoint, slope, midpoint]);

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

    // Snap to grid
    p.x = Math.round(p.x * 2) / 2;
    p.y = Math.round(p.y * 2) / 2;

    // Clamp
    p.x = Math.max(0, Math.min(9, p.x));
    p.y = Math.max(0, Math.min(7, p.y));

    if (dragging === 1) {
      setPoint1(p);
    } else {
      setPoint2(p);
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Coordinate Plane Explorer</h4>

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

        <div className="w-full md:w-56 space-y-3">
          <div className="p-3 bg-slate-800 rounded space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-pink-400">A:</span>
              <span className="font-mono text-slate-200">({point1.x.toFixed(1)}, {point1.y.toFixed(1)})</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-cyan-400">B:</span>
              <span className="font-mono text-slate-200">({point2.x.toFixed(1)}, {point2.y.toFixed(1)})</span>
            </div>
          </div>

          <div className="p-3 bg-slate-800 rounded space-y-2">
            <div className="text-xs text-slate-400">Slope (rise/run):</div>
            <div className="text-lg font-mono text-purple-400">
              {slope === Infinity ? '∞ (vertical)' : slope.toFixed(3)}
            </div>

            <div className="text-xs text-slate-400 mt-2">Distance:</div>
            <div className="text-lg font-mono text-green-400">
              {distance.toFixed(3)}
            </div>

            {showMidpoint && (
              <>
                <div className="text-xs text-slate-400 mt-2">Midpoint M:</div>
                <div className="text-sm font-mono text-yellow-400">
                  ({midpoint.x.toFixed(1)}, {midpoint.y.toFixed(1)})
                </div>
              </>
            )}
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={showLine}
                onChange={(e) => setShowLine(e.target.checked)}
                className="rounded"
              />
              Show extended line
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={showMidpoint}
                onChange={(e) => setShowMidpoint(e.target.checked)}
                className="rounded"
              />
              Show midpoint
            </label>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p className="mb-1"><strong>Distance formula:</strong></p>
            <p className="font-mono text-xs">d = √[(Δx)² + (Δy)²]</p>
            <p className="mt-2"><strong>Slope formula:</strong></p>
            <p className="font-mono text-xs">m = Δy/Δx = rise/run</p>
          </div>
        </div>
      </div>
    </div>
  );
}
