import { useState, useRef, useEffect, useCallback } from 'react';

interface LineCircleIntersectionProps {
  className?: string;
}

export function LineCircleIntersection({ className = '' }: LineCircleIntersectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [circle1Center, setCircle1Center] = useState({ x: 180, y: 200 });
  const [circle2Center, setCircle2Center] = useState({ x: 320, y: 220 });
  const [circle1Radius, setCircle1Radius] = useState(100);
  const [circle2Radius, setCircle2Radius] = useState(80);
  const [isDragging, setIsDragging] = useState<'c1' | 'c2' | null>(null);

  const width = 550;
  const height = 400;

  const getMousePos = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getMousePos(e);
    const dist1 = Math.sqrt((pos.x - circle1Center.x) ** 2 + (pos.y - circle1Center.y) ** 2);
    const dist2 = Math.sqrt((pos.x - circle2Center.x) ** 2 + (pos.y - circle2Center.y) ** 2);

    if (dist1 < 20) {
      setIsDragging('c1');
    } else if (dist2 < 20) {
      setIsDragging('c2');
    }
  }, [getMousePos, circle1Center, circle2Center]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    const pos = getMousePos(e);

    const clampedX = Math.max(50, Math.min(width - 50, pos.x));
    const clampedY = Math.max(50, Math.min(height - 50, pos.y));

    if (isDragging === 'c1') {
      setCircle1Center({ x: clampedX, y: clampedY });
    } else if (isDragging === 'c2') {
      setCircle2Center({ x: clampedX, y: clampedY });
    }
  }, [isDragging, getMousePos]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x <= width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const c1 = circle1Center;
    const c2 = circle2Center;
    const r1 = circle1Radius;
    const r2 = circle2Radius;

    // Calculate distance between centers
    const dx = c2.x - c1.x;
    const dy = c2.y - c1.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Draw circle 1
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(c1.x, c1.y, r1, 0, Math.PI * 2);
    ctx.stroke();

    // Draw circle 2
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(c2.x, c2.y, r2, 0, Math.PI * 2);
    ctx.stroke();

    // Draw centers
    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(c1.x, c1.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '12px sans-serif';
    ctx.fillText('drag', c1.x - 12, c1.y + 20);

    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.arc(c2.x, c2.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText('drag', c2.x - 12, c2.y + 20);

    // Calculate intersection points
    let intersections: { x: number; y: number }[] = [];
    let status = '';

    if (dist > r1 + r2) {
      status = 'No intersection (circles too far apart)';
    } else if (dist < Math.abs(r1 - r2)) {
      status = 'No intersection (one circle inside the other)';
    } else {
      // Circles intersect
      const a = (r1 * r1 - r2 * r2 + dist * dist) / (2 * dist);
      const h = Math.sqrt(r1 * r1 - a * a);

      // Point P is on line between centers, at distance a from c1
      const px = c1.x + a * dx / dist;
      const py = c1.y + a * dy / dist;

      // Intersection points are perpendicular to the line between centers
      const int1 = {
        x: px + h * (-dy / dist),
        y: py + h * (dx / dist)
      };
      const int2 = {
        x: px - h * (-dy / dist),
        y: py - h * (dx / dist)
      };

      intersections = [int1, int2];

      if (Math.abs(h) < 0.1) {
        status = 'Circles are tangent (1 intersection)';
      } else {
        status = '2 intersection points found';
      }

      // Draw radical axis (line through intersection points)
      const radicalDx = int2.x - int1.x;
      const radicalDy = int2.y - int1.y;
      const radicalLen = Math.sqrt(radicalDx * radicalDx + radicalDy * radicalDy);

      if (radicalLen > 0.1) {
        // Extend line across canvas
        const extendFactor = 500 / radicalLen;
        ctx.strokeStyle = '#f472b6';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(
          int1.x - radicalDx * extendFactor,
          int1.y - radicalDy * extendFactor
        );
        ctx.lineTo(
          int1.x + radicalDx * extendFactor,
          int1.y + radicalDy * extendFactor
        );
        ctx.stroke();
        ctx.setLineDash([]);

        // Label radical axis
        ctx.fillStyle = '#f472b6';
        ctx.font = '12px sans-serif';
        ctx.fillText('Radical Axis', 10, 30);
      }

      // Draw intersection points
      intersections.forEach((int, i) => {
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(int.x, int.y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = 'italic 14px serif';
        const label = i === 0 ? 'P₁' : 'P₂';
        ctx.fillText(label, int.x + 10, int.y - 10);
      });
    }

    // Draw line between centers
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(c1.x, c1.y);
    ctx.lineTo(c2.x, c2.y);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw status
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '14px sans-serif';
    ctx.fillText(status, 10, height - 20);

    // Draw equations
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#60a5fa';
    ctx.fillText(`Circle 1: (x−${c1.x.toFixed(0)})² + (y−${c1.y.toFixed(0)})² = ${r1}²`, 10, height - 70);
    ctx.fillStyle = '#34d399';
    ctx.fillText(`Circle 2: (x−${c2.x.toFixed(0)})² + (y−${c2.y.toFixed(0)})² = ${r2}²`, 10, height - 50);

  }, [circle1Center, circle2Center, circle1Radius, circle2Radius]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Circle Intersections
      </h4>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded cursor-pointer"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-blue-400 mb-1">
            Circle 1 Radius: {circle1Radius}
          </label>
          <input
            type="range"
            min="30"
            max="150"
            value={circle1Radius}
            onChange={(e) => setCircle1Radius(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-green-400 mb-1">
            Circle 2 Radius: {circle2Radius}
          </label>
          <input
            type="range"
            min="30"
            max="150"
            value={circle2Radius}
            onChange={(e) => setCircle2Radius(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p>
          <strong>Key Insight:</strong> The intersection points of two circles lie on
          the <span className="text-pink-400">radical axis</span> — a line perpendicular
          to the line joining the centers. This is found by subtracting the circle equations
          to eliminate x² and y².
        </p>
        <p className="mt-2">
          Drag the circle centers to explore different configurations!
        </p>
      </div>
    </div>
  );
}
