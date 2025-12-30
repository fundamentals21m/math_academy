import { useState, useRef, useEffect } from 'react';

interface Vector {
  x: number;
  y: number;
}

export function VectorOperationsDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vectorA, setVectorA] = useState<Vector>({ x: 3, y: 2 });
  const [vectorB, setVectorB] = useState<Vector>({ x: 1, y: 3 });
  const [showSum, setShowSum] = useState(true);
  const [showDot, setShowDot] = useState(true);
  const [dragging, setDragging] = useState<'a' | 'b' | null>(null);

  const width = 480;
  const height = 400;
  const scale = 40;
  const originX = width / 2;
  const originY = height / 2;

  const toCanvas = (x: number, y: number): [number, number] => {
    return [originX + x * scale, originY - y * scale];
  };

  const toMath = (cx: number, cy: number): Vector => ({
    x: (cx - originX) / scale,
    y: (originY - cy) / scale,
  });

  const magnitude = (v: Vector) => Math.sqrt(v.x ** 2 + v.y ** 2);
  const dotProduct = vectorA.x * vectorB.x + vectorA.y * vectorB.y;
  const angle = Math.acos(dotProduct / (magnitude(vectorA) * magnitude(vectorB))) * 180 / Math.PI;
  const sum: Vector = { x: vectorA.x + vectorB.x, y: vectorA.y + vectorB.y };

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
    for (let x = -6; x <= 6; x++) {
      const [cx] = toCanvas(x, 0);
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();
    }
    for (let y = -5; y <= 5; y++) {
      const [, cy] = toCanvas(0, y);
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    const drawVector = (v: Vector, color: string, label: string, fromOrigin: boolean = true, startPoint?: Vector) => {
      const start = startPoint || { x: 0, y: 0 };
      const [sx, sy] = toCanvas(start.x, start.y);
      const [ex, ey] = toCanvas(start.x + v.x, start.y + v.y);

      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();

      // Arrow head
      const angle = Math.atan2(sy - ey, ex - sx);
      const headLen = 12;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ex, ey);
      ctx.lineTo(ex - headLen * Math.cos(angle - Math.PI / 6), ey + headLen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(ex - headLen * Math.cos(angle + Math.PI / 6), ey + headLen * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();

      // Label
      ctx.fillStyle = color;
      ctx.font = 'bold 14px sans-serif';
      const labelX = (sx + ex) / 2 + (label === 'a' ? -15 : 10);
      const labelY = (sy + ey) / 2 - 5;
      ctx.fillText(label, labelX, labelY);
    };

    // Draw vector A
    drawVector(vectorA, '#f472b6', 'a');

    // Draw vector B
    drawVector(vectorB, '#22d3ee', 'b');

    // Draw sum (parallelogram method)
    if (showSum) {
      // Parallelogram sides
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.4)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      const [ax, ay] = toCanvas(vectorA.x, vectorA.y);
      const [bx, by] = toCanvas(vectorB.x, vectorB.y);
      const [sx, sy] = toCanvas(sum.x, sum.y);
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(sx, sy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(sx, sy);
      ctx.stroke();
      ctx.setLineDash([]);

      // Sum vector
      drawVector(sum, '#a78bfa', 'a+b');
    }

    // Draw angle arc if showing dot product
    if (showDot && !isNaN(angle)) {
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1.5;
      const angleA = Math.atan2(vectorA.y, vectorA.x);
      const angleB = Math.atan2(vectorB.y, vectorB.x);
      ctx.beginPath();
      ctx.arc(originX, originY, 35, -Math.max(angleA, angleB), -Math.min(angleA, angleB));
      ctx.stroke();

      // Angle label
      ctx.fillStyle = '#fbbf24';
      ctx.font = '11px sans-serif';
      const midAngle = (angleA + angleB) / 2;
      ctx.fillText(`${angle.toFixed(0)}°`, originX + 45 * Math.cos(midAngle), originY - 45 * Math.sin(midAngle));
    }

    // Drag handles
    const [ax, ay] = toCanvas(vectorA.x, vectorA.y);
    const [bx, by] = toCanvas(vectorB.x, vectorB.y);

    ctx.fillStyle = 'rgba(244, 114, 182, 0.3)';
    ctx.beginPath();
    ctx.arc(ax, ay, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(34, 211, 238, 0.3)';
    ctx.beginPath();
    ctx.arc(bx, by, 10, 0, Math.PI * 2);
    ctx.fill();

    // Instructions
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Drag vector endpoints', 10, 20);

  }, [vectorA, vectorB, showSum, showDot, angle, sum]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const [ax, ay] = toCanvas(vectorA.x, vectorA.y);
    const [bx, by] = toCanvas(vectorB.x, vectorB.y);

    if (Math.hypot(cx - ax, cy - ay) < 15) {
      setDragging('a');
    } else if (Math.hypot(cx - bx, cy - by) < 15) {
      setDragging('b');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    let v = toMath(cx, cy);

    // Snap
    v.x = Math.round(v.x * 2) / 2;
    v.y = Math.round(v.y * 2) / 2;

    // Clamp
    v.x = Math.max(-5, Math.min(5, v.x));
    v.y = Math.max(-4, Math.min(4, v.y));

    if (dragging === 'a') {
      setVectorA(v);
    } else {
      setVectorB(v);
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Vector Operations</h4>

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
            <div className="text-sm">
              <span className="text-pink-400 font-semibold">a</span>
              <span className="text-slate-300"> = ({vectorA.x.toFixed(1)}, {vectorA.y.toFixed(1)})</span>
            </div>
            <div className="text-sm">
              <span className="text-cyan-400 font-semibold">b</span>
              <span className="text-slate-300"> = ({vectorB.x.toFixed(1)}, {vectorB.y.toFixed(1)})</span>
            </div>
          </div>

          <div className="p-3 bg-slate-800 rounded space-y-2">
            <div className="text-xs text-slate-400">Dot Product (a · b):</div>
            <div className="text-lg font-mono text-yellow-400">{dotProduct.toFixed(2)}</div>

            <div className="text-xs text-slate-400 mt-2">Angle between:</div>
            <div className="text-lg font-mono text-yellow-400">
              {isNaN(angle) ? '—' : `${angle.toFixed(1)}°`}
            </div>

            {showSum && (
              <>
                <div className="text-xs text-slate-400 mt-2">Sum (a + b):</div>
                <div className="text-sm font-mono text-purple-400">
                  ({sum.x.toFixed(1)}, {sum.y.toFixed(1)})
                </div>
              </>
            )}
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={showSum}
                onChange={(e) => setShowSum(e.target.checked)}
                className="rounded"
              />
              Show vector sum
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={showDot}
                onChange={(e) => setShowDot(e.target.checked)}
                className="rounded"
              />
              Show angle
            </label>
          </div>

          <div className="p-2 bg-slate-800/50 rounded text-xs text-slate-400">
            <p><strong>Perpendicular:</strong> a · b = 0</p>
            <p className={dotProduct === 0 ? 'text-green-400' : ''}>
              {Math.abs(dotProduct) < 0.1 ? '✓ Perpendicular!' : `a · b = ${dotProduct.toFixed(1)}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
