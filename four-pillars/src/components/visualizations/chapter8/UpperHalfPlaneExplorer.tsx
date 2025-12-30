import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

interface NonEuclideanLine {
  type: 'vertical' | 'semicircle';
  // For vertical: x coordinate
  // For semicircle: center x and radius
  x?: number;
  center?: number;
  radius?: number;
}

export function UpperHalfPlaneExplorer({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [showGrid, setShowGrid] = useState(true);
  const [showGeodesic, setShowGeodesic] = useState(true);
  const [hoveredPoint, setHoveredPoint] = useState<Point | null>(null);

  const width = 500;
  const height = 350;
  const scale = 50; // pixels per unit
  const originX = width / 2;
  const originY = height - 30;

  // Convert math coords to canvas coords
  const toCanvas = (x: number, y: number): [number, number] => {
    return [originX + x * scale, originY - y * scale];
  };

  // Convert canvas coords to math coords
  const toMath = (cx: number, cy: number): Point => {
    return {
      x: (cx - originX) / scale,
      y: (originY - cy) / scale,
    };
  };

  // Compute the non-Euclidean line through two points
  const computeGeodesic = (p1: Point, p2: Point): NonEuclideanLine | null => {
    if (p1.y <= 0 || p2.y <= 0) return null;

    // If same x coordinate, it's a vertical line
    if (Math.abs(p1.x - p2.x) < 0.001) {
      return { type: 'vertical', x: p1.x };
    }

    // Otherwise, find the semicircle
    // Center is on x-axis, equidistant from both points
    // |center - p1|² = |center - p2|²
    // (center - p1.x)² + p1.y² = (center - p2.x)² + p2.y²
    // Solving: center = (p2.x² + p2.y² - p1.x² - p1.y²) / (2(p2.x - p1.x))
    const center = (p2.x * p2.x + p2.y * p2.y - p1.x * p1.x - p1.y * p1.y) / (2 * (p2.x - p1.x));
    const radius = Math.sqrt((p1.x - center) ** 2 + p1.y ** 2);

    return { type: 'semicircle', center, radius };
  };

  // Draw on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    if (showGrid) {
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;

      // Vertical grid lines
      for (let x = -5; x <= 5; x++) {
        const [cx] = toCanvas(x, 0);
        ctx.beginPath();
        ctx.moveTo(cx, 0);
        ctx.lineTo(cx, originY);
        ctx.stroke();
      }

      // Horizontal grid lines (only in upper half)
      for (let y = 1; y <= 6; y++) {
        const [, cy] = toCanvas(0, y);
        ctx.beginPath();
        ctx.moveTo(0, cy);
        ctx.lineTo(width, cy);
        ctx.stroke();
      }
    }

    // Draw x-axis (boundary)
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();

    // Label boundary
    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    ctx.fillText('Boundary (at infinity)', 10, originY + 20);

    // Draw geodesic if two points selected
    if (showGeodesic && points.length === 2) {
      const geodesic = computeGeodesic(points[0], points[1]);
      if (geodesic) {
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 2;
        ctx.setLineDash([]);

        if (geodesic.type === 'vertical') {
          const [cx] = toCanvas(geodesic.x!, 0);
          ctx.beginPath();
          ctx.moveTo(cx, originY);
          ctx.lineTo(cx, 0);
          ctx.stroke();
        } else {
          const [centerX] = toCanvas(geodesic.center!, 0);
          const radiusPx = geodesic.radius! * scale;

          ctx.beginPath();
          ctx.arc(centerX, originY, radiusPx, Math.PI, 0, false);
          ctx.stroke();
        }
      }
    }

    // Draw parallel lines example when no points
    if (points.length === 0) {
      ctx.strokeStyle = '#f472b6';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);

      // Vertical line at x = -2
      const [vx] = toCanvas(-2, 0);
      ctx.beginPath();
      ctx.moveTo(vx, originY);
      ctx.lineTo(vx, 0);
      ctx.stroke();

      // Multiple "parallel" semicircles
      ctx.strokeStyle = '#a78bfa';
      for (let i = 1; i <= 3; i++) {
        const center = -2 + i * 1.5;
        const radius = i * 0.8;
        const [cx] = toCanvas(center, 0);
        ctx.beginPath();
        ctx.arc(cx, originY, radius * scale, Math.PI, 0, false);
        ctx.stroke();
      }

      ctx.setLineDash([]);

      // Label
      ctx.fillStyle = '#e879f9';
      ctx.font = '11px sans-serif';
      ctx.fillText('Multiple "parallels" to a line', 10, 20);
    }

    // Draw points
    points.forEach((p, i) => {
      const [cx, cy] = toCanvas(p.x, p.y);

      // Point
      ctx.fillStyle = i === 0 ? '#f472b6' : '#22d3ee';
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '12px sans-serif';
      ctx.fillText(`P${i + 1} (${p.x.toFixed(1)}, ${p.y.toFixed(1)})`, cx + 10, cy - 5);
    });

    // Draw hovered point preview
    if (hoveredPoint && hoveredPoint.y > 0 && points.length < 2) {
      const [cx, cy] = toCanvas(hoveredPoint.x, hoveredPoint.y);
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

  }, [points, showGrid, showGeodesic, hoveredPoint]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const p = toMath(cx, cy);

    // Only allow points in upper half plane
    if (p.y <= 0.1) return;

    if (points.length < 2) {
      setPoints([...points, { x: Math.round(p.x * 10) / 10, y: Math.round(p.y * 10) / 10 }]);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const p = toMath(cx, cy);
    setHoveredPoint(p);
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Upper Half Plane Explorer</h4>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-700 rounded cursor-crosshair"
            onClick={handleCanvasClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredPoint(null)}
          />
        </div>

        <div className="w-full md:w-48 space-y-3">
          <div className="text-sm text-slate-300">
            <p className="mb-2">Click to place points in the upper half plane. A geodesic (hyperbolic line) will connect them.</p>
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showGrid}
              onChange={(e) => setShowGrid(e.target.checked)}
              className="rounded"
            />
            Show grid
          </label>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showGeodesic}
              onChange={(e) => setShowGeodesic(e.target.checked)}
              className="rounded"
            />
            Show geodesic
          </label>

          <button
            onClick={() => setPoints([])}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Clear Points
          </button>

          {points.length === 2 && (
            <div className="text-xs text-slate-400 p-2 bg-slate-800 rounded">
              {(() => {
                const geo = computeGeodesic(points[0], points[1]);
                if (!geo) return null;
                if (geo.type === 'vertical') {
                  return <span>Geodesic: Vertical line x = {geo.x?.toFixed(2)}</span>;
                }
                return (
                  <span>
                    Geodesic: Semicircle<br/>
                    Center: ({geo.center?.toFixed(2)}, 0)<br/>
                    Radius: {geo.radius?.toFixed(2)}
                  </span>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
