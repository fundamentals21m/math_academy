import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function DesarguesTheoremDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [centerX, setCenterX] = useState(250);
  const [centerY, setCenterY] = useState(80);
  const [scale2, setScale2] = useState(0.6);

  const width = 500;
  const height = 420;

  // Perspective center
  const O: Point = { x: centerX, y: centerY };

  // First triangle vertices
  const A1: Point = { x: 120, y: 280 };
  const B1: Point = { x: 380, y: 280 };
  const C1: Point = { x: 250, y: 150 };

  // Second triangle (scaled from center O)
  const projectFromO = (p: Point, t: number): Point => ({
    x: O.x + t * (p.x - O.x),
    y: O.y + t * (p.y - O.y),
  });

  const A2 = projectFromO(A1, scale2);
  const B2 = projectFromO(B1, scale2);
  const C2 = projectFromO(C1, scale2);

  // Line intersection helper
  const lineIntersection = (p1: Point, p2: Point, p3: Point, p4: Point): Point | null => {
    const d = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);
    if (Math.abs(d) < 0.0001) return null;
    const t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / d;
    return {
      x: p1.x + t * (p2.x - p1.x),
      y: p1.y + t * (p2.y - p1.y),
    };
  };

  // Desargues line: intersection of corresponding sides
  const P = lineIntersection(A1, B1, A2, B2); // AB and A'B'
  const Q = lineIntersection(B1, C1, B2, C2); // BC and B'C'
  const R = lineIntersection(C1, A1, C2, A2); // CA and C'A'

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw perspective lines from O
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.3)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    [A1, B1, C1].forEach(p => {
      ctx.beginPath();
      ctx.moveTo(O.x, O.y);
      const ext = projectFromO(p, 1.5);
      ctx.lineTo(ext.x, ext.y);
      ctx.stroke();
    });
    ctx.setLineDash([]);

    // Draw first triangle
    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(A1.x, A1.y);
    ctx.lineTo(B1.x, B1.y);
    ctx.lineTo(C1.x, C1.y);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'rgba(244, 114, 182, 0.1)';
    ctx.fill();

    // Draw second triangle
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(A2.x, A2.y);
    ctx.lineTo(B2.x, B2.y);
    ctx.lineTo(C2.x, C2.y);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'rgba(34, 211, 238, 0.1)';
    ctx.fill();

    // Draw extended sides to show intersections
    const extendLine = (p1: Point, p2: Point, amt: number): [Point, Point] => {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return [
        { x: p1.x - dx * amt, y: p1.y - dy * amt },
        { x: p2.x + dx * amt, y: p2.y + dy * amt },
      ];
    };

    // Draw Desargues line if all intersections exist
    if (P && Q && R) {
      // Extended sides (faded)
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.3)';
      ctx.lineWidth = 1;

      const [ab1s, ab1e] = extendLine(A1, B1, 0.5);
      ctx.beginPath();
      ctx.moveTo(ab1s.x, ab1s.y);
      ctx.lineTo(ab1e.x, ab1e.y);
      ctx.stroke();

      const [ab2s, ab2e] = extendLine(A2, B2, 0.5);
      ctx.beginPath();
      ctx.moveTo(ab2s.x, ab2s.y);
      ctx.lineTo(ab2e.x, ab2e.y);
      ctx.stroke();

      // Desargues line
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);

      const dx = Q.x - P.x;
      const dy = Q.y - P.y;
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len > 0.1) {
        const extend = 300;
        ctx.beginPath();
        ctx.moveTo(P.x - dx / len * extend, P.y - dy / len * extend);
        ctx.lineTo(P.x + dx / len * extend, P.y + dy / len * extend);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Draw intersection points P, Q, R
      [P, Q, R].forEach((p, i) => {
        if (p.x > -50 && p.x < width + 50 && p.y > -50 && p.y < height + 50) {
          ctx.fillStyle = '#34d399';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#34d399';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(['P', 'Q', 'R'][i], p.x + 8, p.y - 8);
        }
      });
    }

    // Draw perspective center O
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(O.x, O.y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('O', O.x + 12, O.y);

    // Draw triangle vertices
    const drawVertex = (p: Point, label: string, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(label, p.x + 8, p.y - 8);
    };

    drawVertex(A1, 'A', '#f472b6');
    drawVertex(B1, 'B', '#f472b6');
    drawVertex(C1, 'C', '#f472b6');
    drawVertex(A2, "A'", '#22d3ee');
    drawVertex(B2, "B'", '#22d3ee');
    drawVertex(C2, "C'", '#22d3ee');

    // Title
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Triangles perspective from O', 10, 20);
    if (P && Q && R) {
      ctx.fillStyle = '#34d399';
      ctx.fillText('P, Q, R are collinear (Desargues line)', 10, height - 10);
    }

  }, [centerX, centerY, scale2, O, A1, B1, C1, A2, B2, C2, P, Q, R]);

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Desargues' Theorem</h4>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-700 rounded"
          />
        </div>

        <div className="w-full md:w-52 space-y-3">
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Center X: {centerX}
            </label>
            <input
              type="range"
              min="100"
              max="400"
              value={centerX}
              onChange={(e) => setCenterX(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Center Y: {centerY}
            </label>
            <input
              type="range"
              min="30"
              max="150"
              value={centerY}
              onChange={(e) => setCenterY(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Scale: {scale2.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.3"
              max="0.9"
              step="0.05"
              value={scale2}
              onChange={(e) => setScale2(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-green-400 mb-2">Desargues' Theorem</h5>
            <p className="text-xs text-slate-300">
              If two triangles are <strong>perspective from a point</strong> (lines
              through corresponding vertices meet at O), then they are
              <strong> perspective from a line</strong> (corresponding sides meet
              on a line).
            </p>
          </div>

          <button
            onClick={() => {
              setCenterX(250);
              setCenterY(80);
              setScale2(0.6);
            }}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Reset
          </button>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-pink-400">Pink:</span> Triangle ABC</p>
            <p><span className="text-cyan-400">Cyan:</span> Triangle A'B'C'</p>
            <p><span className="text-yellow-400">Yellow O:</span> Perspective center</p>
            <p><span className="text-green-400">Green:</span> Desargues line</p>
          </div>
        </div>
      </div>
    </div>
  );
}
