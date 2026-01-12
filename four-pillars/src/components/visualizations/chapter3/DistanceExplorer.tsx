import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function DistanceExplorer({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [p1, setP1] = useState<Point>({ x: 100, y: 250 });
  const [p2, setP2] = useState<Point>({ x: 300, y: 100 });
  const [dragging, setDragging] = useState<'p1' | 'p2' | null>(null);
  const [showCircle, setShowCircle] = useState(false);
  const [showBisector, setShowBisector] = useState(false);

  const width = 500;
  const height = 400;

  // Convert canvas coords to math coords
  const toMath = (p: Point): Point => ({
    x: (p.x - 50) / 40,
    y: (350 - p.y) / 40,
  });

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
    for (let i = 0; i <= 10; i++) {
      const x = 50 + i * 40;
      const y = 350 - i * 40;
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
    ctx.moveTo(50, 0);
    ctx.lineTo(50, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.lineTo(width, 350);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    for (let i = 1; i <= 10; i++) {
      ctx.fillText(i.toString(), 50 + i * 40 - 4, 365);
      ctx.fillText(i.toString(), 30, 350 - i * 40 + 4);
    }
    ctx.fillText('x', width - 15, 365);
    ctx.fillText('y', 55, 15);

    const mp1 = toMath(p1);
    const mp2 = toMath(p2);

    // Calculate distance
    const dx = mp2.x - mp1.x;
    const dy = mp2.y - mp1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Draw circle from p1 with radius = distance
    if (showCircle) {
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, distance * 40, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw perpendicular bisector
    if (showBisector) {
      const midX = (p1.x + p2.x) / 2;
      const midY = (p1.y + p2.y) / 2;

      // Perpendicular direction
      const perpX = -(p2.y - p1.y);
      const perpY = p2.x - p1.x;
      const len = Math.sqrt(perpX * perpX + perpY * perpY);

      ctx.strokeStyle = '#c084fc';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(midX - perpX / len * 300, midY - perpY / len * 300);
      ctx.lineTo(midX + perpX / len * 300, midY + perpY / len * 300);
      ctx.stroke();

      // Draw midpoint
      ctx.fillStyle = '#c084fc';
      ctx.beginPath();
      ctx.arc(midX, midY, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw the right triangle
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.setLineDash([]);

    // Label horizontal distance
    ctx.fillStyle = '#60a5fa';
    ctx.font = '12px sans-serif';
    ctx.fillText(`Δx = ${dx.toFixed(2)}`, (p1.x + p2.x) / 2 - 25, p1.y + 20);

    // Label vertical distance
    ctx.fillStyle = '#f472b6';
    ctx.fillText(`Δy = ${Math.abs(dy).toFixed(2)}`, p2.x + 10, (p1.y + p2.y) / 2);

    // Draw line between points
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    // Draw points
    ctx.fillStyle = '#22d3ee';
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(p2.x, p2.y, 8, 0, Math.PI * 2);
    ctx.fill();

    // Labels
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(`P₁(${mp1.x.toFixed(1)}, ${mp1.y.toFixed(1)})`, p1.x - 30, p1.y + 25);
    ctx.fillText(`P₂(${mp2.x.toFixed(1)}, ${mp2.y.toFixed(1)})`, p2.x - 30, p2.y - 15);

    // Distance formula display
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(width - 200, 10, 190, 80);
    ctx.strokeStyle = '#334155';
    ctx.strokeRect(width - 200, 10, 190, 80);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText('Distance Formula:', width - 190, 30);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px sans-serif';
    ctx.fillText(`d = √((Δx)² + (Δy)²)`, width - 190, 50);
    ctx.fillText(`d = √(${dx.toFixed(2)}² + ${dy.toFixed(2)}²)`, width - 190, 68);
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(`d = ${distance.toFixed(3)}`, width - 190, 86);

    // Instructions
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Drag points to explore distance', 10, height - 10);

  }, [p1, p2, showCircle, showBisector]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (Math.hypot(mx - p1.x, my - p1.y) < 15) {
      setDragging('p1');
    } else if (Math.hypot(mx - p2.x, my - p2.y) < 15) {
      setDragging('p2');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = Math.max(50, Math.min(width - 10, e.clientX - rect.left));
    const my = Math.max(10, Math.min(350, e.clientY - rect.top));

    if (dragging === 'p1') {
      setP1({ x: mx, y: my });
    } else {
      setP2({ x: mx, y: my });
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Distance Formula Explorer</h4>

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

        <div className="w-full md:w-48 space-y-3">
          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-yellow-400 mb-2">Pythagorean Theorem</h5>
            <p className="text-xs text-slate-300">
              Distance = √(Δx² + Δy²)
            </p>
            <p className="text-xs text-slate-400 mt-1">
              The hypotenuse of the right triangle formed by horizontal and vertical displacements.
            </p>
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showCircle}
              onChange={(e) => setShowCircle(e.target.checked)}
              className="rounded"
            />
            Show circle (radius = d)
          </label>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showBisector}
              onChange={(e) => setShowBisector(e.target.checked)}
              className="rounded"
            />
            Show perpendicular bisector
          </label>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-cyan-400">Cyan:</span> Point P₁</p>
            <p><span className="text-pink-400">Pink:</span> Point P₂</p>
            <p><span className="text-yellow-400">Yellow:</span> Distance</p>
            <p><span className="text-green-400">Green:</span> Circle</p>
            <p><span className="text-purple-400">Purple:</span> Bisector</p>
          </div>
        </div>
      </div>
    </div>
  );
}
