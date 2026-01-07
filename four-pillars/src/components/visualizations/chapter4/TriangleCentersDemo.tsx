import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

type CenterType = 'centroid' | 'circumcenter' | 'orthocenter' | 'incenter';

export function TriangleCentersDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vertices, setVertices] = useState<Point[]>([
    { x: 1, y: 1 },
    { x: 5, y: 1 },
    { x: 3, y: 4 },
  ]);
  const [showCenter, setShowCenter] = useState<CenterType>('centroid');
  const [dragging, setDragging] = useState<number | null>(null);

  const width = 480;
  const height = 400;
  const scale = 50;
  const offsetX = 80;
  const offsetY = height - 80;

  const toCanvas = (x: number, y: number): [number, number] => {
    return [offsetX + x * scale, offsetY - y * scale];
  };

  const toMath = (cx: number, cy: number): Point => ({
    x: (cx - offsetX) / scale,
    y: (offsetY - cy) / scale,
  });

  // Calculate centers
  const [A, B, C] = vertices;

  // Centroid: average of vertices
  const centroid: Point = {
    x: (A.x + B.x + C.x) / 3,
    y: (A.y + B.y + C.y) / 3,
  };

  // Circumcenter: intersection of perpendicular bisectors
  const calcCircumcenter = (): Point => {
    const D = 2 * (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
    if (Math.abs(D) < 0.0001) return centroid;
    const ux = ((A.x ** 2 + A.y ** 2) * (B.y - C.y) + (B.x ** 2 + B.y ** 2) * (C.y - A.y) + (C.x ** 2 + C.y ** 2) * (A.y - B.y)) / D;
    const uy = ((A.x ** 2 + A.y ** 2) * (C.x - B.x) + (B.x ** 2 + B.y ** 2) * (A.x - C.x) + (C.x ** 2 + C.y ** 2) * (B.x - A.x)) / D;
    return { x: ux, y: uy };
  };
  const circumcenter = calcCircumcenter();

  // Orthocenter: intersection of altitudes
  const calcOrthocenter = (): Point => {
    const slopeBC = (C.y - B.y) / (C.x - B.x);
    const slopeCA = (A.y - C.y) / (A.x - C.x);

    if (!isFinite(slopeBC) || !isFinite(slopeCA)) {
      return centroid;
    }

    const perpSlopeBC = -1 / slopeBC;
    const perpSlopeCA = -1 / slopeCA;

    // Altitude from A perpendicular to BC: y - A.y = perpSlopeBC * (x - A.x)
    // Altitude from B perpendicular to CA: y - B.y = perpSlopeCA * (x - B.x)

    if (!isFinite(perpSlopeBC) || !isFinite(perpSlopeCA)) {
      return centroid;
    }

    const x = (perpSlopeBC * A.x - perpSlopeCA * B.x + B.y - A.y) / (perpSlopeBC - perpSlopeCA);
    const y = A.y + perpSlopeBC * (x - A.x);

    return { x, y };
  };
  const orthocenter = calcOrthocenter();

  // Incenter: angle bisector intersection (using formula with side lengths)
  const calcIncenter = (): Point => {
    const a = Math.sqrt((C.x - B.x) ** 2 + (C.y - B.y) ** 2);
    const b = Math.sqrt((A.x - C.x) ** 2 + (A.y - C.y) ** 2);
    const c = Math.sqrt((B.x - A.x) ** 2 + (B.y - A.y) ** 2);
    const P = a + b + c;
    return {
      x: (a * A.x + b * B.x + c * C.x) / P,
      y: (a * A.y + b * B.y + c * C.y) / P,
    };
  };
  const incenter = calcIncenter();

  const getCenter = (): Point => {
    switch (showCenter) {
      case 'centroid': return centroid;
      case 'circumcenter': return circumcenter;
      case 'orthocenter': return orthocenter;
      case 'incenter': return incenter;
    }
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
    for (let x = 0; x <= 8; x++) {
      const [cx] = toCanvas(x, 0);
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();
    }
    for (let y = 0; y <= 6; y++) {
      const [, cy] = toCanvas(0, y);
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();
    }

    // Draw triangle
    const [ax, ay] = toCanvas(A.x, A.y);
    const [bx, by] = toCanvas(B.x, B.y);
    const [cx, cy] = toCanvas(C.x, C.y);

    ctx.fillStyle = 'rgba(244, 114, 182, 0.2)';
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.lineTo(cx, cy);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw special lines based on center type
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1;

    const center = getCenter();
    const [centerX, centerY] = toCanvas(center.x, center.y);

    switch (showCenter) {
      case 'centroid': {
        // Draw medians
        ctx.strokeStyle = '#a78bfa';
        // Median from A to midpoint of BC
        const midBC = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
        const [midBCx, midBCy] = toCanvas(midBC.x, midBC.y);
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(midBCx, midBCy);
        ctx.stroke();

        // Median from B to midpoint of AC
        const midAC = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
        const [midACx, midACy] = toCanvas(midAC.x, midAC.y);
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(midACx, midACy);
        ctx.stroke();

        // Median from C to midpoint of AB
        const midAB = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
        const [midABx, midABy] = toCanvas(midAB.x, midAB.y);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(midABx, midABy);
        ctx.stroke();
        break;
      }

      case 'circumcenter': {
        // Draw circumcircle
        ctx.strokeStyle = '#22d3ee';
        const radius = Math.sqrt((A.x - circumcenter.x) ** 2 + (A.y - circumcenter.y) ** 2);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * scale, 0, Math.PI * 2);
        ctx.stroke();
        break;
      }

      case 'orthocenter': {
        // Draw altitudes
        ctx.strokeStyle = '#fbbf24';
        // This is simplified - just draw lines to center
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(centerX, centerY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(centerX, centerY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(centerX, centerY);
        ctx.stroke();
        break;
      }

      case 'incenter': {
        // Draw incircle
        ctx.strokeStyle = '#34d399';
        // Calculate inradius
        const a = Math.sqrt((C.x - B.x) ** 2 + (C.y - B.y) ** 2);
        const b = Math.sqrt((A.x - C.x) ** 2 + (A.y - C.y) ** 2);
        const c = Math.sqrt((B.x - A.x) ** 2 + (B.y - A.y) ** 2);
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        const inradius = area / s;
        ctx.beginPath();
        ctx.arc(centerX, centerY, inradius * scale, 0, Math.PI * 2);
        ctx.stroke();
        break;
      }
    }

    ctx.setLineDash([]);

    // Draw vertices
    const drawVertex = (px: number, py: number, label: string) => {
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fce7f3';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(label, px + 10, py - 10);
    };

    drawVertex(ax, ay, 'A');
    drawVertex(bx, by, 'B');
    drawVertex(cx, cy, 'C');

    // Draw center point
    const colors: Record<CenterType, string> = {
      centroid: '#a78bfa',
      circumcenter: '#22d3ee',
      orthocenter: '#fbbf24',
      incenter: '#34d399',
    };
    ctx.fillStyle = colors[showCenter];
    ctx.beginPath();
    ctx.arc(centerX, centerY, 7, 0, Math.PI * 2);
    ctx.fill();

    // Label
    const labels: Record<CenterType, string> = {
      centroid: 'G',
      circumcenter: 'O',
      orthocenter: 'H',
      incenter: 'I',
    };
    ctx.fillStyle = colors[showCenter];
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(labels[showCenter], centerX + 10, centerY - 10);

    // Instructions
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Drag vertices A, B, C', 10, 20);

  }, [vertices, showCenter, A, B, C, centroid, circumcenter, orthocenter, incenter]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    vertices.forEach((v, i) => {
      const [vx, vy] = toCanvas(v.x, v.y);
      if (Math.hypot(mx - vx, my - vy) < 15) {
        setDragging(i);
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dragging === null) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const p = toMath(mx, my);

    // Snap and clamp
    p.x = Math.round(p.x * 2) / 2;
    p.y = Math.round(p.y * 2) / 2;
    p.x = Math.max(0.5, Math.min(7, p.x));
    p.y = Math.max(0.5, Math.min(5.5, p.y));

    const newVertices = [...vertices];
    newVertices[dragging] = p;
    setVertices(newVertices);
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const center = getCenter();

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Triangle Centers</h4>

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
          <div>
            <label className="block text-sm text-slate-300 mb-1">Center Type</label>
            <select
              value={showCenter}
              onChange={(e) => setShowCenter(e.target.value as CenterType)}
              className="w-full px-2 py-1.5 bg-slate-800 border border-slate-600 rounded text-slate-200 text-sm"
            >
              <option value="centroid">Centroid (Medians)</option>
              <option value="circumcenter">Circumcenter (Perp. Bisectors)</option>
              <option value="orthocenter">Orthocenter (Altitudes)</option>
              <option value="incenter">Incenter (Angle Bisectors)</option>
            </select>
          </div>

          <div className="p-3 bg-slate-800 rounded">
            <div className="text-xs text-slate-400 mb-1">Center coordinates:</div>
            <div className="text-sm font-mono text-slate-200">
              ({center.x.toFixed(2)}, {center.y.toFixed(2)})
            </div>
          </div>

          <div className="p-3 bg-slate-800 rounded text-xs text-slate-300">
            {showCenter === 'centroid' && (
              <p>The centroid is the intersection of medians. It divides each median in ratio 2:1.</p>
            )}
            {showCenter === 'circumcenter' && (
              <p>The circumcenter is equidistant from all vertices - it's the center of the circumscribed circle.</p>
            )}
            {showCenter === 'orthocenter' && (
              <p>The orthocenter is the intersection of the three altitudes of the triangle.</p>
            )}
            {showCenter === 'incenter' && (
              <p>The incenter is equidistant from all sides - it's the center of the inscribed circle.</p>
            )}
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-pink-400">Pink:</span> Triangle vertices</p>
            <p><span className="text-purple-400">Purple:</span> Centroid</p>
            <p><span className="text-cyan-400">Cyan:</span> Circumcenter</p>
            <p><span className="text-yellow-400">Yellow:</span> Orthocenter</p>
            <p><span className="text-green-400">Green:</span> Incenter</p>
          </div>
        </div>
      </div>
    </div>
  );
}
