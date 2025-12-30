import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function VectorBasicsDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vectorU, setVectorU] = useState<Point>({ x: 3, y: 1 });
  const [vectorV, setVectorV] = useState<Point>({ x: 1, y: 2 });
  const [scalar, setScalar] = useState(1.5);
  const [dragging, setDragging] = useState<'u' | 'v' | null>(null);
  const [mode, setMode] = useState<'add' | 'scalar'>('add');

  const width = 500;
  const height = 400;
  const centerX = 200;
  const centerY = 250;
  const scale = 40;

  const toCanvas = (p: Point): Point => ({
    x: centerX + p.x * scale,
    y: centerY - p.y * scale,
  });

  const toMath = (x: number, y: number): Point => ({
    x: (x - centerX) / scale,
    y: (centerY - y) / scale,
  });

  const drawArrow = (
    ctx: CanvasRenderingContext2D,
    from: Point,
    to: Point,
    color: string,
    lineWidth = 2
  ) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const angle = Math.atan2(dy, dx);
    const len = Math.sqrt(dx * dx + dy * dy);

    if (len < 5) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();

    // Arrow head
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(to.x, to.y);
    ctx.lineTo(to.x - 12 * Math.cos(angle - 0.3), to.y - 12 * Math.sin(angle - 0.3));
    ctx.lineTo(to.x - 12 * Math.cos(angle + 0.3), to.y - 12 * Math.sin(angle + 0.3));
    ctx.closePath();
    ctx.fill();
  };

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
    for (let i = -5; i <= 10; i++) {
      const x = centerX + i * scale;
      const y = centerY - i * scale;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // Origin label
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText('O', centerX - 15, centerY + 15);

    const origin = toCanvas({ x: 0, y: 0 });
    const uEnd = toCanvas(vectorU);
    const vEnd = toCanvas(vectorV);

    if (mode === 'add') {
      // Draw parallelogram
      const sum = { x: vectorU.x + vectorV.x, y: vectorU.y + vectorV.y };
      const sumEnd = toCanvas(sum);

      // Parallelogram sides (dashed)
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(uEnd.x, uEnd.y);
      ctx.lineTo(sumEnd.x, sumEnd.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(vEnd.x, vEnd.y);
      ctx.lineTo(sumEnd.x, sumEnd.y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw vectors u and v
      drawArrow(ctx, origin, uEnd, '#60a5fa', 3);
      drawArrow(ctx, origin, vEnd, '#f472b6', 3);

      // Draw sum vector
      drawArrow(ctx, origin, sumEnd, '#34d399', 3);

      // Labels
      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#60a5fa';
      ctx.fillText('u', (origin.x + uEnd.x) / 2 - 15, (origin.y + uEnd.y) / 2 - 5);
      ctx.fillStyle = '#f472b6';
      ctx.fillText('v', (origin.x + vEnd.x) / 2 + 10, (origin.y + vEnd.y) / 2);
      ctx.fillStyle = '#34d399';
      ctx.fillText('u + v', (origin.x + sumEnd.x) / 2 + 10, (origin.y + sumEnd.y) / 2 - 10);

      // Draggable points
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(uEnd.x, uEnd.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(vEnd.x, vEnd.y, 8, 0, Math.PI * 2);
      ctx.fill();

      // Info box
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(width - 160, 10, 150, 100);
      ctx.strokeStyle = '#334155';
      ctx.strokeRect(width - 160, 10, 150, 100);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('Parallelogram Rule', width - 150, 30);
      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#60a5fa';
      ctx.fillText(`u = (${vectorU.x.toFixed(1)}, ${vectorU.y.toFixed(1)})`, width - 150, 50);
      ctx.fillStyle = '#f472b6';
      ctx.fillText(`v = (${vectorV.x.toFixed(1)}, ${vectorV.y.toFixed(1)})`, width - 150, 68);
      ctx.fillStyle = '#34d399';
      ctx.fillText(`u+v = (${sum.x.toFixed(1)}, ${sum.y.toFixed(1)})`, width - 150, 86);
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('Drag u or v endpoints', width - 150, 105);
    } else {
      // Scalar multiplication mode
      const scaled = { x: vectorU.x * scalar, y: vectorU.y * scalar };
      const scaledEnd = toCanvas(scaled);

      // Draw original vector
      drawArrow(ctx, origin, uEnd, '#60a5fa', 2);

      // Draw scaled vector
      drawArrow(ctx, origin, scaledEnd, '#fbbf24', 3);

      // Labels
      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#60a5fa';
      ctx.fillText('u', (origin.x + uEnd.x) / 2 + 10, (origin.y + uEnd.y) / 2);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText(`${scalar}u`, (origin.x + scaledEnd.x) / 2 + 10, (origin.y + scaledEnd.y) / 2 - 10);

      // Draggable point
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(uEnd.x, uEnd.y, 8, 0, Math.PI * 2);
      ctx.fill();

      // Info box
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(width - 160, 10, 150, 85);
      ctx.strokeStyle = '#334155';
      ctx.strokeRect(width - 160, 10, 150, 85);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('Scalar Multiplication', width - 150, 30);
      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#60a5fa';
      ctx.fillText(`u = (${vectorU.x.toFixed(1)}, ${vectorU.y.toFixed(1)})`, width - 150, 50);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText(`${scalar}u = (${scaled.x.toFixed(1)}, ${scaled.y.toFixed(1)})`, width - 150, 68);
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`|${scalar}u| = ${scalar} × |u|`, width - 150, 86);
    }

    // Instructions
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Drag vector endpoints', 10, height - 10);

  }, [vectorU, vectorV, scalar, mode]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const uEnd = toCanvas(vectorU);
    const vEnd = toCanvas(vectorV);

    if (Math.hypot(mx - uEnd.x, my - uEnd.y) < 15) {
      setDragging('u');
    } else if (mode === 'add' && Math.hypot(mx - vEnd.x, my - vEnd.y) < 15) {
      setDragging('v');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const mp = toMath(mx, my);

    // Clamp to reasonable range
    mp.x = Math.max(-4, Math.min(6, mp.x));
    mp.y = Math.max(-3, Math.min(5, mp.y));

    if (dragging === 'u') {
      setVectorU(mp);
    } else if (dragging === 'v') {
      setVectorV(mp);
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

        <div className="w-full md:w-52 space-y-3">
          <div className="space-y-2">
            <label className="text-sm text-slate-300 font-medium">Mode:</label>
            <div className="flex gap-2">
              <button
                onClick={() => setMode('add')}
                className={`flex-1 px-3 py-1.5 text-sm rounded ${
                  mode === 'add'
                    ? 'bg-green-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Addition
              </button>
              <button
                onClick={() => setMode('scalar')}
                className={`flex-1 px-3 py-1.5 text-sm rounded ${
                  mode === 'scalar'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Scalar ×
              </button>
            </div>
          </div>

          {mode === 'scalar' && (
            <div className="space-y-2">
              <label className="text-sm text-slate-300">Scalar: {scalar.toFixed(1)}</label>
              <input
                type="range"
                min="-2"
                max="2"
                step="0.1"
                value={scalar}
                onChange={(e) => setScalar(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          )}

          <div className="p-3 bg-slate-800 rounded text-xs">
            {mode === 'add' ? (
              <>
                <p className="text-slate-300 mb-2">
                  <strong className="text-green-400">Vector Addition:</strong>
                </p>
                <p className="text-slate-400">
                  (u₁, u₂) + (v₁, v₂) = (u₁+v₁, u₂+v₂)
                </p>
                <p className="text-slate-400 mt-2">
                  The sum u + v is the diagonal of the parallelogram formed by u and v.
                </p>
              </>
            ) : (
              <>
                <p className="text-slate-300 mb-2">
                  <strong className="text-yellow-400">Scalar Multiplication:</strong>
                </p>
                <p className="text-slate-400">
                  a(u₁, u₂) = (au₁, au₂)
                </p>
                <p className="text-slate-400 mt-2">
                  Stretches or shrinks the vector. Negative scalars reverse direction.
                </p>
              </>
            )}
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-blue-400">Blue:</span> Vector u</p>
            {mode === 'add' ? (
              <>
                <p><span className="text-pink-400">Pink:</span> Vector v</p>
                <p><span className="text-green-400">Green:</span> Sum u + v</p>
              </>
            ) : (
              <p><span className="text-yellow-400">Yellow:</span> Scalar × u</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
