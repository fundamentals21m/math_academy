import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function PappusTheoremDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lineAngle, setLineAngle] = useState(0.2);
  const [pointPositions, setPointPositions] = useState([0.2, 0.5, 0.8, 0.2, 0.5, 0.8]);

  const width = 500;
  const height = 400;

  // Two lines
  const line1Start: Point = { x: 50, y: 150 };
  const line1End: Point = { x: 450, y: 150 + 100 * Math.sin(lineAngle) };

  const line2Start: Point = { x: 50, y: 300 };
  const line2End: Point = { x: 450, y: 300 - 80 * Math.sin(lineAngle) };

  const lerp = (p1: Point, p2: Point, t: number): Point => ({
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y),
  });

  // Points on line 1: A, B, C
  const A = lerp(line1Start, line1End, pointPositions[0]);
  const B = lerp(line1Start, line1End, pointPositions[1]);
  const C = lerp(line1Start, line1End, pointPositions[2]);

  // Points on line 2: A', B', C'
  const Ap = lerp(line2Start, line2End, pointPositions[3]);
  const Bp = lerp(line2Start, line2End, pointPositions[4]);
  const Cp = lerp(line2Start, line2End, pointPositions[5]);

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

  // Pappus line: intersection of (AB' & A'B), (AC' & A'C), (BC' & B'C)
  const X = lineIntersection(A, Bp, Ap, B);
  const Y = lineIntersection(A, Cp, Ap, C);
  const Z = lineIntersection(B, Cp, Bp, C);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw the two base lines
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(line1Start.x, line1Start.y);
    ctx.lineTo(line1End.x, line1End.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(line2Start.x, line2Start.y);
    ctx.lineTo(line2End.x, line2End.y);
    ctx.stroke();

    // Draw connecting lines (cross-connections)
    const pairs: [Point, Point, string][] = [
      [A, Bp, 'rgba(244, 114, 182, 0.5)'],
      [Ap, B, 'rgba(244, 114, 182, 0.5)'],
      [A, Cp, 'rgba(34, 211, 238, 0.5)'],
      [Ap, C, 'rgba(34, 211, 238, 0.5)'],
      [B, Cp, 'rgba(167, 139, 250, 0.5)'],
      [Bp, C, 'rgba(167, 139, 250, 0.5)'],
    ];

    pairs.forEach(([p1, p2, color]) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    });

    // Draw Pappus line if all intersections exist
    if (X && Y && Z) {
      // Extend line through X, Y, Z
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);

      // Find direction and extend
      const dx = Y.x - X.x;
      const dy = Y.y - X.y;
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len > 0.1) {
        const extend = 500;
        ctx.beginPath();
        ctx.moveTo(X.x - dx / len * extend, X.y - dy / len * extend);
        ctx.lineTo(X.x + dx / len * extend, X.y + dy / len * extend);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Draw intersection points
      [X, Y, Z].forEach((p, i) => {
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(['X', 'Y', 'Z'][i], p.x + 8, p.y - 8);
      });
    }

    // Draw points on line 1
    const drawPoint = (p: Point, label: string, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(label, p.x - 4, p.y - 12);
    };

    drawPoint(A, 'A', '#f472b6');
    drawPoint(B, 'B', '#22d3ee');
    drawPoint(C, 'C', '#a78bfa');
    drawPoint(Ap, "A'", '#f472b6');
    drawPoint(Bp, "B'", '#22d3ee');
    drawPoint(Cp, "C'", '#a78bfa');

    // Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Line 1', line1End.x - 40, line1End.y - 10);
    ctx.fillText('Line 2', line2End.x - 40, line2End.y + 20);

    if (X && Y && Z) {
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('Pappus Line (X, Y, Z are collinear!)', 10, 30);
    }

  }, [lineAngle, pointPositions, A, B, C, Ap, Bp, Cp, X, Y, Z, line1Start, line1End, line2Start, line2End]);

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Pappus's Theorem</h4>

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
              Line angle: {(lineAngle * 180 / Math.PI).toFixed(0)}°
            </label>
            <input
              type="range"
              min="-0.5"
              max="0.5"
              step="0.02"
              value={lineAngle}
              onChange={(e) => setLineAngle(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-yellow-400 mb-2">Pappus's Theorem</h5>
            <p className="text-xs text-slate-300">
              If A, B, C lie on one line and A', B', C' lie on another, then
              the intersections of AB' with A'B, of AC' with A'C, and of BC'
              with B'C are <strong>collinear</strong>.
            </p>
          </div>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-green-400 mb-2">Significance</h5>
            <p className="text-xs text-slate-300">
              Pappus's theorem is equivalent to the commutativity of
              multiplication in the coordinate field. It's fundamental
              to projective geometry.
            </p>
          </div>

          <button
            onClick={() => {
              setLineAngle(0.2);
              setPointPositions([0.2, 0.5, 0.8, 0.2, 0.5, 0.8]);
            }}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Reset
          </button>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-pink-400">Pink:</span> A and A'</p>
            <p><span className="text-cyan-400">Cyan:</span> B and B'</p>
            <p><span className="text-purple-400">Purple:</span> C and C'</p>
            <p><span className="text-yellow-400">Yellow:</span> Pappus line</p>
          </div>
        </div>
      </div>
    </div>
  );
}
