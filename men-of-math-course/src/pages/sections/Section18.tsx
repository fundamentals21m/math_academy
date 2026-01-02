import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, InlineMath } from '@/components/common';

// =============================================================================
// INTERACTIVE VISUALIZATIONS
// =============================================================================

/**
 * Parallel Postulate Comparison
 * Shows Euclidean vs Hyperbolic parallelism
 */
function ParallelPostulateDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [geometry, setGeometry] = useState<'euclidean' | 'hyperbolic' | 'elliptic'>('euclidean');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    if (geometry === 'euclidean') {
      // Euclidean: exactly one parallel
      // Draw a line
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(50, cy + 50);
      ctx.lineTo(width - 50, cy + 50);
      ctx.stroke();

      // Draw point not on line
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(cx, cy - 50, 8, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = '#e5e7eb';
      ctx.font = '14px monospace';
      ctx.fillText('P', cx + 12, cy - 45);

      // Draw the unique parallel through P
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(50, cy - 50);
      ctx.lineTo(width - 50, cy - 50);
      ctx.stroke();

      // Label
      ctx.fillStyle = '#10b981';
      ctx.fillText('Exactly ONE parallel through P', 20, 30);

    } else if (geometry === 'hyperbolic') {
      // Hyperbolic: infinitely many parallels (Poincaré disk model)
      const radius = 100;

      // Draw boundary circle
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw a "line" (arc perpendicular to boundary)
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy + 180, 150, -Math.PI * 0.7, -Math.PI * 0.3);
      ctx.stroke();

      // Draw point
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(cx, cy - 40, 6, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = '#e5e7eb';
      ctx.font = '12px monospace';
      ctx.fillText('P', cx + 10, cy - 35);

      // Draw multiple parallels through P
      const parallels = [-0.3, -0.15, 0, 0.15, 0.3];
      parallels.forEach((offset, i) => {
        ctx.strokeStyle = `hsla(${120 + i * 20}, 70%, 50%, 0.8)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx + offset * 200, cy - 200, 180, Math.PI * 0.35, Math.PI * 0.65);
        ctx.stroke();
      });

      ctx.fillStyle = '#10b981';
      ctx.fillText('INFINITELY MANY parallels through P', 20, 30);

    } else {
      // Elliptic: no parallels (sphere model)
      const radius = 90;

      // Draw sphere outline
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw equator-like line
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(cx, cy + 20, radius, 30, 0, 0, Math.PI);
      ctx.stroke();

      // Draw point
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(cx, cy - 50, 6, 0, 2 * Math.PI);
      ctx.fill();

      // Draw great circle through P that intersects the "line"
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, radius, 40, Math.PI * 0.2, 0, Math.PI);
      ctx.stroke();

      ctx.fillStyle = '#f59e0b';
      ctx.font = '14px monospace';
      ctx.fillText('NO parallels (all lines meet)', 20, 30);
    }

    // Postulate text
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px monospace';
    const postulates: Record<string, string> = {
      euclidean: 'Euclid\'s 5th: Through P, exactly one line parallel to ℓ',
      hyperbolic: 'Lobachevsky: Through P, infinitely many lines not meeting ℓ',
      elliptic: 'Riemann: Through P, no line fails to meet ℓ',
    };
    ctx.fillText(postulates[geometry], 20, height - 15);

  }, [geometry]);

  return (
    <Card title="The Parallel Postulate">
      <div className="space-y-4">
        <p className="text-dark-300">
          For 2000 years, mathematicians tried to prove Euclid's fifth postulate from
          the others. Lobachevsky showed it's independent—you can deny it and get a
          consistent geometry.
        </p>
        <div className="flex gap-2">
          {(['euclidean', 'hyperbolic', 'elliptic'] as const).map(g => (
            <button
              key={g}
              onClick={() => setGeometry(g)}
              className={`px-3 py-1 rounded capitalize ${geometry === g ? 'bg-blue-600' : 'bg-dark-700'} text-dark-100`}
            >
              {g}
            </button>
          ))}
        </div>
        <canvas
          ref={canvasRef}
          width={450}
          height={280}
          className="w-full border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Poincaré Disk Model
 * Interactive hyperbolic geometry visualization
 */
function PoincareDiskDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([
    { x: -0.3, y: 0.2 },
    { x: 0.4, y: -0.1 },
  ]);
  const [showGeodesic, setShowGeodesic] = useState(true);
  const [dragging, setDragging] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = 120;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw boundary circle (points at infinity)
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Fill disk with subtle gradient
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.02)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.fill();

    // Draw hyperbolic geodesic between points
    if (showGeodesic && points.length >= 2) {
      const p1 = points[0];
      const p2 = points[1];

      // Convert to canvas coordinates
      const x1 = cx + p1.x * radius;
      const y1 = cy + p1.y * radius;
      const x2 = cx + p2.x * radius;
      const y2 = cy + p2.y * radius;

      // For geodesic, find the circle perpendicular to boundary
      // Simplified: draw an arc through both points
      const d1 = Math.sqrt(p1.x * p1.x + p1.y * p1.y);
      const d2 = Math.sqrt(p2.x * p2.x + p2.y * p2.y);

      if (d1 < 0.99 && d2 < 0.99) {
        // Check if points are collinear with center (geodesic is diameter)
        const cross = p1.x * p2.y - p1.y * p2.x;

        if (Math.abs(cross) < 0.01) {
          // Draw straight line through center
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2;
          ctx.beginPath();
          const len = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
          const dx = (p2.x - p1.x) / len;
          const dy = (p2.y - p1.y) / len;
          ctx.moveTo(cx - dx * radius, cy - dy * radius);
          ctx.lineTo(cx + dx * radius, cy + dy * radius);
          ctx.stroke();
        } else {
          // Find circle through p1, p2 perpendicular to unit circle
          // The center lies on the perpendicular bisector of p1p2
          // and on the radical axis
          const mx = (p1.x + p2.x) / 2;
          const my = (p1.y + p2.y) / 2;

          // Perpendicular direction
          const px = -(p2.y - p1.y);
          const py = p2.x - p1.x;

          // Find center of geodesic circle
          // It must be outside the unit disk, on the line through (mx,my) in direction (px,py)
          // |center|² - 1 = r² where r is distance from center to p1
          // This is complex; use approximation with arc

          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2;

          // Draw arc approximation
          const steps = 50;
          ctx.beginPath();
          for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            // Interpolate along geodesic (simplified)
            const xi = p1.x + t * (p2.x - p1.x);
            const yi = p1.y + t * (p2.y - p1.y);
            // Apply hyperbolic "bending" - push towards boundary
            const di = Math.sqrt(xi * xi + yi * yi);
            const bend = 0.3 * Math.sin(Math.PI * t) * (1 - di);
            const angle = Math.atan2(yi, xi) + Math.PI / 2;
            const xb = xi + bend * Math.cos(angle) * cross;
            const yb = yi + bend * Math.sin(angle) * cross;

            const canvasX = cx + xb * radius;
            const canvasY = cy + yb * radius;
            if (i === 0) ctx.moveTo(canvasX, canvasY);
            else ctx.lineTo(canvasX, canvasY);
          }
          ctx.stroke();
        }
      }
    }

    // Draw points
    points.forEach((p, i) => {
      const x = cx + p.x * radius;
      const y = cy + p.y * radius;
      ctx.fillStyle = i === 0 ? '#ef4444' : '#f59e0b';
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = '#e5e7eb';
      ctx.font = '12px monospace';
      ctx.fillText(i === 0 ? 'A' : 'B', x + 12, y + 5);
    });

    // Labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px monospace';
    ctx.fillText('Poincaré Disk Model', 20, 25);
    ctx.fillText('Boundary = points at infinity', 20, height - 10);

  }, [points, showGeodesic]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = 120;

    points.forEach((p, i) => {
      const px = cx + p.x * radius;
      const py = cy + p.y * radius;
      if (Math.sqrt((x - px) ** 2 + (y - py) ** 2) < 15) {
        setDragging(i);
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dragging === null) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = 120;

    let nx = (x - cx) / radius;
    let ny = (y - cy) / radius;

    // Keep inside disk
    const d = Math.sqrt(nx * nx + ny * ny);
    if (d > 0.95) {
      nx = nx / d * 0.95;
      ny = ny / d * 0.95;
    }

    const newPoints = [...points];
    newPoints[dragging] = { x: nx, y: ny };
    setPoints(newPoints);
  };

  return (
    <Card title="The Poincaré Disk">
      <div className="space-y-4">
        <p className="text-dark-300">
          The Poincaré disk maps all of hyperbolic space into a circle. Straight lines
          become circular arcs perpendicular to the boundary. Drag the points to explore.
        </p>
        <label className="flex items-center gap-2 text-dark-300">
          <input
            type="checkbox"
            checked={showGeodesic}
            onChange={(e) => setShowGeodesic(e.target.checked)}
            className="rounded"
          />
          Show geodesic (hyperbolic line)
        </label>
        <canvas
          ref={canvasRef}
          width={400}
          height={320}
          className="w-full max-w-md mx-auto border border-dark-700 rounded-lg cursor-pointer"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => setDragging(null)}
          onMouseLeave={() => setDragging(null)}
        />
      </div>
    </Card>
  );
}

/**
 * Triangle Angle Sum
 * Shows that angles sum to less than 180° in hyperbolic geometry
 */
function TriangleAngleSum() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [triangleSize, setTriangleSize] = useState(0.3);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw three triangles side by side
    const geometries = [
      { name: 'Elliptic', sum: 180 + triangleSize * 60, color: '#f59e0b', cx: 80 },
      { name: 'Euclidean', sum: 180, color: '#3b82f6', cx: width / 2 },
      { name: 'Hyperbolic', sum: 180 - triangleSize * 60, color: '#10b981', cx: width - 80 },
    ];

    geometries.forEach(({ name, sum, color, cx }) => {
      const cy = height / 2 + 20;
      const size = 50;

      // Draw triangle
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      if (name === 'Elliptic') {
        // Bulging sides (positive curvature)
        ctx.moveTo(cx, cy - size);
        ctx.quadraticCurveTo(cx + size * 0.8, cy - size * 0.3, cx + size * 0.6, cy + size * 0.5);
        ctx.quadraticCurveTo(cx, cy + size * 0.8, cx - size * 0.6, cy + size * 0.5);
        ctx.quadraticCurveTo(cx - size * 0.8, cy - size * 0.3, cx, cy - size);
      } else if (name === 'Euclidean') {
        // Straight sides
        ctx.moveTo(cx, cy - size);
        ctx.lineTo(cx + size * 0.7, cy + size * 0.5);
        ctx.lineTo(cx - size * 0.7, cy + size * 0.5);
        ctx.closePath();
      } else {
        // Inward curving sides (negative curvature)
        ctx.moveTo(cx, cy - size);
        ctx.quadraticCurveTo(cx + size * 0.3, cy - size * 0.1, cx + size * 0.6, cy + size * 0.5);
        ctx.quadraticCurveTo(cx, cy + size * 0.3, cx - size * 0.6, cy + size * 0.5);
        ctx.quadraticCurveTo(cx - size * 0.3, cy - size * 0.1, cx, cy - size);
      }
      ctx.stroke();

      // Draw angle arcs at vertices
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      // Labels
      ctx.fillStyle = color;
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(name, cx, 25);
      ctx.fillText(`∑ angles ${name === 'Euclidean' ? '=' : name === 'Elliptic' ? '>' : '<'} 180°`, cx, height - 40);
      ctx.fillStyle = '#e5e7eb';
      ctx.font = '14px monospace';
      ctx.fillText(`${sum.toFixed(0)}°`, cx, height - 20);
    });

    // Curvature indicator
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`Triangle size: ${(triangleSize * 100).toFixed(0)}%`, 20, height - 5);

  }, [triangleSize]);

  return (
    <Card title="Triangle Angle Sum">
      <div className="space-y-4">
        <p className="text-dark-300">
          In hyperbolic geometry, the angles of a triangle sum to <em>less</em> than 180°.
          The deficit depends on the triangle's area—larger triangles have more deficit.
        </p>
        <MathBlock math="\alpha + \beta + \gamma = \pi - \text{Area}/R^2 \quad \text{(hyperbolic)}" />
        <div>
          <label className="block text-sm text-dark-400 mb-1">Triangle Size: {(triangleSize * 100).toFixed(0)}%</label>
          <input
            type="range"
            min="0.1"
            max="0.8"
            step="0.05"
            value={triangleSize}
            onChange={(e) => setTriangleSize(parseFloat(e.target.value))}
            className="w-48"
          />
        </div>
        <canvas
          ref={canvasRef}
          width={500}
          height={220}
          className="w-full border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Hyperbolic Tiling
 * Shows a tessellation in the Poincaré disk
 */
function HyperbolicTiling() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tiling, setTiling] = useState<'7-3' | '5-4' | '8-3'>('7-3');
  const animationRef = useRef<number>(0);
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = 130;

    const animate = () => {
      rotationRef.current += 0.002;

      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      // Draw boundary
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw hyperbolic tiling (simplified approximation)
      const [p, q] = tiling === '7-3' ? [7, 3] : tiling === '5-4' ? [5, 4] : [8, 3];

      // Draw concentric rings of polygons
      const drawPolygon = (centerR: number, centerAngle: number, size: number, depth: number) => {
        if (depth > 3 || size < 5) return;

        const pcx = cx + centerR * Math.cos(centerAngle + rotationRef.current);
        const pcy = cy + centerR * Math.sin(centerAngle + rotationRef.current);

        // Draw polygon
        ctx.strokeStyle = `hsla(${200 + depth * 30}, 60%, ${60 - depth * 10}%, ${0.8 - depth * 0.15})`;
        ctx.lineWidth = 1.5 - depth * 0.3;
        ctx.beginPath();
        for (let i = 0; i <= p; i++) {
          const angle = (2 * Math.PI * i) / p + centerAngle * 0.1;
          const x = pcx + size * Math.cos(angle);
          const y = pcy + size * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };

      // Center polygon
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= p; i++) {
        const angle = (2 * Math.PI * i) / p + rotationRef.current;
        const x = cx + 40 * Math.cos(angle);
        const y = cy + 40 * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // First ring
      for (let i = 0; i < p; i++) {
        const angle = (2 * Math.PI * i) / p;
        drawPolygon(60, angle, 30, 1);
      }

      // Second ring
      for (let i = 0; i < p * 2; i++) {
        const angle = (2 * Math.PI * i) / (p * 2) + Math.PI / p;
        drawPolygon(90, angle, 20, 2);
      }

      // Third ring
      for (let i = 0; i < p * 3; i++) {
        const angle = (2 * Math.PI * i) / (p * 3);
        drawPolygon(110, angle, 12, 3);
      }

      // Label
      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px monospace';
      ctx.fillText(`{${p}, ${q}} tiling`, 20, 25);
      ctx.fillText(`${p}-gons meeting ${q} at each vertex`, 20, height - 15);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationRef.current);
  }, [tiling]);

  return (
    <Card title="Hyperbolic Tilings">
      <div className="space-y-4">
        <p className="text-dark-300">
          In hyperbolic space, you can tile the plane with regular polygons in ways
          impossible in Euclidean geometry. These tilings appear in Escher's famous
          "Circle Limit" artworks.
        </p>
        <div className="flex gap-2">
          {(['7-3', '5-4', '8-3'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTiling(t)}
              className={`px-3 py-1 rounded ${tiling === t ? 'bg-blue-600' : 'bg-dark-700'} text-dark-100`}
            >
              {'{' + t.replace('-', ', ') + '}'}
            </button>
          ))}
        </div>
        <canvas
          ref={canvasRef}
          width={350}
          height={300}
          className="w-full max-w-sm mx-auto border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Hyperbolic Distance
 * Shows how distances grow exponentially near the boundary
 */
function HyperbolicDistance() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [point1, setPoint1] = useState(0.2);
  const [point2, setPoint2] = useState(0.6);

  // Hyperbolic distance in Poincaré disk
  const hyperbolicDist = (r1: number, r2: number): number => {
    // For points on a diameter: d = |log((1+r2)/(1-r2)) - log((1+r1)/(1-r1))| / 2
    const artanh = (x: number) => 0.5 * Math.log((1 + x) / (1 - x));
    return Math.abs(artanh(r2) - artanh(r1)) * 2;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = 100;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw disk
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw diameter
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - radius, cy);
    ctx.lineTo(cx + radius, cy);
    ctx.stroke();

    // Draw points
    const x1 = cx + point1 * radius;
    const x2 = cx + point2 * radius;

    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(x1, cy, 8, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(x2, cy, 8, 0, 2 * Math.PI);
    ctx.fill();

    // Draw Euclidean distance
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, cy + 20);
    ctx.lineTo(x2, cy + 20);
    ctx.stroke();

    // Calculate distances
    const euclideanDist = Math.abs(point2 - point1);
    const hypDist = hyperbolicDist(point1, point2);

    // Labels
    ctx.fillStyle = '#f59e0b';
    ctx.font = '12px monospace';
    ctx.fillText(`Euclidean: ${euclideanDist.toFixed(3)}`, 20, 30);

    ctx.fillStyle = '#ef4444';
    ctx.fillText(`Hyperbolic: ${hypDist.toFixed(3)}`, 20, 50);

    ctx.fillStyle = '#6b7280';
    ctx.font = '11px monospace';
    ctx.fillText('Near boundary: hyperbolic distance → ∞', 20, height - 15);

    // Draw scale showing distance growth
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1;
    const barWidth = Math.min(hypDist * 20, 150);
    ctx.fillStyle = 'rgba(239, 68, 68, 0.3)';
    ctx.fillRect(20, 60, barWidth, 10);

  }, [point1, point2]);

  return (
    <Card title="Hyperbolic Distance">
      <div className="space-y-4">
        <p className="text-dark-300">
          In the Poincaré disk, distances grow exponentially as you approach the boundary.
          The boundary is "infinitely far away" from any interior point.
        </p>
        <MathBlock math="d(z_1, z_2) = 2 \tanh^{-1}\left|\frac{z_1 - z_2}{1 - \bar{z_1}z_2}\right|" />
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Point 1: {point1.toFixed(2)}</label>
            <input
              type="range"
              min="-0.9"
              max="0.9"
              step="0.05"
              value={point1}
              onChange={(e) => setPoint1(parseFloat(e.target.value))}
              className="w-28"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Point 2: {point2.toFixed(2)}</label>
            <input
              type="range"
              min="-0.9"
              max="0.9"
              step="0.05"
              value={point2}
              onChange={(e) => setPoint2(parseFloat(e.target.value))}
              className="w-28"
            />
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={400}
          height={250}
          className="w-full max-w-md mx-auto border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Timeline of Non-Euclidean Geometry
 */
function NonEuclideanTimeline() {
  const events = [
    { year: '~300 BC', title: 'Euclid\'s Elements', description: 'The fifth postulate stands apart—attempts to prove it from others begin' },
    { year: '1733', title: 'Saccheri', description: 'Tries to prove the parallel postulate by contradiction; unknowingly discovers hyperbolic geometry' },
    { year: '1826', title: 'Lobachevsky\'s Lecture', description: 'First public presentation of non-Euclidean geometry in Kazan' },
    { year: '1829', title: 'Publication', description: 'Lobachevsky publishes "On the Principles of Geometry" in Russian' },
    { year: '1832', title: 'Bolyai', description: 'János Bolyai independently publishes his discovery as an appendix to his father\'s book' },
    { year: '1840', title: 'German Publication', description: 'Lobachevsky publishes in German, reaching wider audience' },
    { year: '1854', title: 'Riemann', description: 'Riemann generalizes to arbitrary curvature in his Habilitationsvortrag' },
    { year: '1868', title: 'Beltrami', description: 'Proves consistency of hyperbolic geometry using Euclidean models' },
  ];

  return (
    <Card title="The Long Road to Non-Euclidean Geometry">
      <div className="space-y-4">
        <p className="text-dark-300">
          For over 2000 years, mathematicians tried to prove Euclid's fifth postulate.
          Lobachevsky was the first to publish that it was independent.
        </p>
        <div className="relative border-l-2 border-blue-600 ml-4 space-y-3">
          {events.map((event, i) => (
            <div key={i} className="ml-6 relative">
              <div className={`absolute -left-8 w-4 h-4 rounded-full ${
                event.year.includes('1826') || event.year.includes('1829') ? 'bg-amber-500' : 'bg-blue-600'
              }`} />
              <div className="text-blue-400 text-sm font-mono">{event.year}</div>
              <div className="text-dark-100 font-semibold text-sm">{event.title}</div>
              <div className="text-dark-400 text-xs">{event.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <div className="prose prose-invert max-w-none">
        {/* Opening Quote */}
        <p className="text-xl text-dark-200 mb-6">
          Nikolai Ivanovich Lobachevsky shattered the 2000-year-old certainty that
          Euclid's geometry was the only possible geometry. His "imaginary geometry"
          opened the door to curved spaces, non-Euclidean worlds, and eventually
          Einstein's general relativity.
        </p>

        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-dark-300">
          "There is no branch of mathematics, however abstract, which may not someday
          be applied to the phenomena of the real world."
          <footer className="text-dark-500 mt-2">— Nikolai Lobachevsky</footer>
        </blockquote>

        {/* Historical Context */}
        <h2>The Copernicus of Geometry</h2>
        <p>
          Nikolai Ivanovich Lobachevsky (1792-1856) was born in Nizhny Novgorod, Russia,
          to a poor family. He attended Kazan University on a scholarship, eventually
          becoming rector of that institution. His entire career was spent in the
          relative isolation of Kazan, far from the mathematical centers of Europe.
        </p>
        <p>
          For over 2000 years, mathematicians had tried to prove Euclid's fifth postulate
          (the parallel postulate) from the other four. Lobachevsky took the revolutionary
          step of denying it—and discovered that a consistent geometry results.
        </p>

        <Callout type="note" title="Bell's Portrait">
          Bell calls Lobachevsky "the Copernicus of Geometry" for overthrowing the
          2000-year reign of Euclidean geometry. Just as Copernicus displaced Earth
          from the center of the universe, Lobachevsky displaced Euclidean geometry
          from its unique position as the geometry of space.
        </Callout>

        {/* The Parallel Postulate */}
        <h2>The Parallel Postulate</h2>
        <p>
          Euclid's fifth postulate states: through a point not on a line, there is
          exactly one line parallel to the given line. For centuries, this seemed
          more complex than the other postulates, and mathematicians believed it
          should be provable from them.
        </p>

        <ParallelPostulateDemo />

        <p>
          Lobachevsky's insight was that you cannot prove the parallel postulate—
          you can deny it and still get a consistent geometry. In his hyperbolic
          geometry, through any point not on a line, there are <em>infinitely many</em>
          lines that never meet the given line.
        </p>

        {/* Timeline */}
        <NonEuclideanTimeline />

        {/* The Poincaré Disk */}
        <h2>Visualizing Hyperbolic Space</h2>
        <p>
          Hyperbolic geometry is hard to visualize because it can't exist in flat
          Euclidean space without distortion. The Poincaré disk model maps all of
          hyperbolic space into a circle, with straight lines becoming circular arcs.
        </p>

        <PoincareDiskDemo />

        <Callout type="example" title="Escher's Circle Limit">
          M.C. Escher's famous "Circle Limit" woodcuts depict hyperbolic geometry
          using the Poincaré disk model. The fish or angels that seem to shrink
          near the boundary are actually all the same hyperbolic size—they just
          appear smaller in the Euclidean representation.
        </Callout>

        {/* Triangle Angle Sum */}
        <h2>Triangles in Curved Space</h2>
        <p>
          One of the most striking differences in hyperbolic geometry is the angle
          sum of triangles. In Euclidean geometry, the angles always sum to exactly
          180°. In hyperbolic geometry, they sum to <em>less</em> than 180°.
        </p>

        <TriangleAngleSum />

        <p>
          The "angular deficit" is proportional to the area of the triangle. This
          means you can measure area by measuring angles—a profound connection
          between geometry and measurement.
        </p>
        <MathBlock math="\text{Area} = R^2(\pi - \alpha - \beta - \gamma)" />

        {/* Hyperbolic Distance */}
        <h2>Distance in Hyperbolic Space</h2>
        <p>
          In the Poincaré disk, the boundary represents points "at infinity."
          Distances grow exponentially as you approach the edge—the boundary is
          infinitely far from any interior point.
        </p>

        <HyperbolicDistance />

        {/* Hyperbolic Tilings */}
        <h2>Hyperbolic Tilings</h2>
        <p>
          In Euclidean geometry, you can tile the plane with regular polygons in only
          three ways: triangles, squares, or hexagons. In hyperbolic geometry, there
          are infinitely many possible tilings!
        </p>

        <HyperbolicTiling />

        <p>
          A tiling {'{'}p, q{'}'} uses regular p-gons with q meeting at each vertex.
          In Euclidean geometry, only {'{'}3,6{'}'}, {'{'}4,4{'}'}, and {'{'}6,3{'}'}
          work. In hyperbolic geometry, any {'{'}p,q{'}'} with
          <Math math="(p-2)(q-2) > 4" /> gives a valid tiling.
        </p>

        {/* Formulas */}
        <h2>Hyperbolic Trigonometry</h2>
        <p>
          Lobachevsky developed an entire trigonometry for hyperbolic space, analogous
          to spherical trigonometry but with hyperbolic functions instead of circular ones.
        </p>
        <CardGrid columns={2}>
          <Card title="Hyperbolic Law of Cosines">
            <MathBlock math="\cosh c = \cosh a \cosh b - \sinh a \sinh b \cos C" />
          </Card>
          <Card title="Hyperbolic Law of Sines">
            <MathBlock math="\frac{\sinh a}{\sin A} = \frac{\sinh b}{\sin B} = \frac{\sinh c}{\sin C}" />
          </Card>
          <Card title="Angle of Parallelism">
            <MathBlock math="\Pi(p) = 2\arctan(e^{-p/k})" />
            <p className="text-dark-400 text-sm">
              The angle at which parallel lines "meet at infinity"
            </p>
          </Card>
          <Card title="Area Formula">
            <MathBlock math="\text{Area} = k^2(\pi - A - B - C)" />
            <p className="text-dark-400 text-sm">
              k is the curvature parameter
            </p>
          </Card>
        </CardGrid>

        {/* Bolyai */}
        <h2>Bolyai: The Parallel Discovery</h2>
        <p>
          Unknown to Lobachevsky, János Bolyai (1802-1860) in Hungary independently
          discovered the same geometry. When Bolyai's father sent the work to Gauss,
          Gauss replied that he could not praise it because he had discovered the
          same things decades earlier but never published.
        </p>

        <Callout type="warning" title="A Bitter Pill">
          Bolyai was devastated by Gauss's response, suspecting plagiarism. He never
          published mathematics again. The priority dispute between Lobachevsky and
          Bolyai was ultimately resolved by recognizing both as independent discoverers,
          with Lobachevsky given priority for earlier publication.
        </Callout>

        {/* Physical Reality */}
        <h2>Is Space Hyperbolic?</h2>
        <p>
          Lobachevsky proposed that physical space might be hyperbolic rather than
          Euclidean. He even attempted to measure the angle sum of triangles formed
          by distant stars to test this hypothesis. His measurements were inconclusive,
          but the question was prescient.
        </p>
        <p>
          Einstein's general relativity showed that spacetime is indeed curved, though
          the curvature depends on the distribution of mass and energy. Near massive
          objects, space can have positive, negative, or zero curvature depending on
          the circumstances.
        </p>

        <CardGrid columns={2}>
          <Card title="Recognition Denied">
            <p className="text-dark-300">
              Lobachevsky published in Russian, limiting his audience. When he
              published in German, the work was ignored or ridiculed. He died
              blind and impoverished, his revolutionary ideas unrecognized.
            </p>
          </Card>
          <Card title="Posthumous Glory">
            <p className="text-dark-300">
              After Beltrami proved the consistency of hyperbolic geometry in 1868,
              Lobachevsky's reputation soared. Today he is recognized as one of the
              most important mathematicians of the 19th century.
            </p>
          </Card>
        </CardGrid>

        {/* Bell's Assessment */}
        <h2>Bell's Assessment</h2>
        <p>
          Bell celebrates Lobachevsky as a revolutionary who overturned millennia
          of geometric certainty. He draws parallels to Copernicus, emphasizing how
          both thinkers displaced humanity from a privileged position—Copernicus
          from the center of the universe, Lobachevsky from the unique geometry
          of space.
        </p>
        <p>
          Bell notes the tragedy that Lobachevsky died without recognition, his
          work dismissed by contemporaries who could not accept that Euclid's geometry
          might not be the only possible description of space.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-dark-300">
          "Lobachevsky's claim to immortality rests on his invention of non-Euclidean
          geometry... He changed the whole course of mathematical and scientific thought."
          <footer className="text-dark-500 mt-2">— E.T. Bell</footer>
        </blockquote>

        {/* Key Takeaways */}
        <Callout type="summary" title="Key Takeaways">
          <ul className="space-y-2">
            <li><strong>The Parallel Postulate:</strong> For 2000 years, mathematicians tried to prove it. Lobachevsky showed it's independent.</li>
            <li><strong>Hyperbolic Geometry:</strong> A consistent geometry where infinitely many parallels pass through a point not on a line.</li>
            <li><strong>Triangle Angles:</strong> Sum to less than 180°, with the deficit proportional to area.</li>
            <li><strong>Models:</strong> The Poincaré disk maps hyperbolic space into a circle, with geodesics as circular arcs.</li>
            <li><strong>Physical Space:</strong> General relativity showed that physical spacetime is indeed curved, vindicating Lobachevsky's vision.</li>
          </ul>
        </Callout>
      </div>
    </LessonLayout>
  );
}
