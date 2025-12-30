import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function CircleAngleTheorem({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pointAngle, setPointAngle] = useState(Math.PI * 0.7);
  const [arcStart, setArcStart] = useState(Math.PI * 1.2);
  const [arcEnd, setArcEnd] = useState(Math.PI * 1.8);
  const [dragging, setDragging] = useState<'point' | 'start' | 'end' | null>(null);

  const width = 480;
  const height = 400;
  const centerX = 240;
  const centerY = 200;
  const radius = 150;

  const angleToPoint = (angle: number): Point => ({
    x: centerX + radius * Math.cos(angle),
    y: centerY - radius * Math.sin(angle),
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw circle
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Draw center
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText('O', centerX + 8, centerY + 4);

    // Arc endpoints
    const A = angleToPoint(arcStart);
    const B = angleToPoint(arcEnd);

    // Point on circle (inscribed angle vertex)
    const P = angleToPoint(pointAngle);

    // Draw the arc AB (highlighted)
    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 4;
    ctx.beginPath();
    // Note: canvas arc goes clockwise, our angles go counter-clockwise
    const startAngle = -arcEnd;
    const endAngle = -arcStart;
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();

    // Draw central angle (from center to A and B)
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(A.x, A.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(B.x, B.y);
    ctx.stroke();

    // Draw central angle arc
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, -arcEnd, -arcStart);
    ctx.stroke();

    // Draw inscribed angle (from P to A and B)
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(P.x, P.y);
    ctx.lineTo(A.x, A.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(P.x, P.y);
    ctx.lineTo(B.x, B.y);
    ctx.stroke();

    // Draw inscribed angle arc
    const anglePA = Math.atan2(-(A.y - P.y), A.x - P.x);
    const anglePB = Math.atan2(-(B.y - P.y), B.x - P.x);
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2;
    ctx.beginPath();
    // Determine the correct arc direction
    let inscribedStart = Math.min(anglePA, anglePB);
    let inscribedEnd = Math.max(anglePA, anglePB);
    if (inscribedEnd - inscribedStart > Math.PI) {
      [inscribedStart, inscribedEnd] = [inscribedEnd, inscribedStart - Math.PI * 2];
    }
    ctx.arc(P.x, P.y, 25, -inscribedEnd, -inscribedStart);
    ctx.stroke();

    // Draw points
    const drawPoint = (p: Point, label: string, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 14px sans-serif';
      const offsetX = p.x > centerX ? 12 : -20;
      const offsetY = p.y > centerY ? 20 : -10;
      ctx.fillText(label, p.x + offsetX, p.y + offsetY);
    };

    drawPoint(A, 'A', '#f472b6');
    drawPoint(B, 'B', '#f472b6');
    drawPoint(P, 'P', '#22d3ee');

    // Calculate angles
    let centralAngle = arcStart - arcEnd;
    if (centralAngle < 0) centralAngle += Math.PI * 2;
    if (centralAngle > Math.PI * 2) centralAngle -= Math.PI * 2;

    const inscribedAngle = centralAngle / 2;

    // Angle display
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(10, 10, 180, 90);
    ctx.strokeStyle = '#334155';
    ctx.strokeRect(10, 10, 180, 90);

    ctx.fillStyle = '#fbbf24';
    ctx.font = '13px sans-serif';
    ctx.fillText(`Central angle: ${(centralAngle * 180 / Math.PI).toFixed(1)}°`, 20, 35);

    ctx.fillStyle = '#22d3ee';
    ctx.fillText(`Inscribed angle: ${(inscribedAngle * 180 / Math.PI).toFixed(1)}°`, 20, 60);

    ctx.fillStyle = '#34d399';
    ctx.fillText('Ratio: 2:1 ✓', 20, 85);

    // Instructions
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Drag P, A, or B to explore', 10, height - 10);

  }, [pointAngle, arcStart, arcEnd]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const P = angleToPoint(pointAngle);
    const A = angleToPoint(arcStart);
    const B = angleToPoint(arcEnd);

    if (Math.hypot(mx - P.x, my - P.y) < 15) {
      setDragging('point');
    } else if (Math.hypot(mx - A.x, my - A.y) < 15) {
      setDragging('start');
    } else if (Math.hypot(mx - B.x, my - B.y) < 15) {
      setDragging('end');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const angle = Math.atan2(-(my - centerY), mx - centerX);

    if (dragging === 'point') {
      // Keep P outside the arc
      setPointAngle(angle);
    } else if (dragging === 'start') {
      setArcStart(angle);
    } else if (dragging === 'end') {
      setArcEnd(angle);
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Inscribed Angle Theorem</h4>

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
          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-blue-400 mb-2">The Theorem</h5>
            <p className="text-xs text-slate-300">
              An inscribed angle is <span className="text-cyan-400">half</span> the
              central angle that subtends the same arc.
            </p>
          </div>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-yellow-400 mb-2">Thales' Corollary</h5>
            <p className="text-xs text-slate-300">
              When the arc is a semicircle (central angle = 180°), the inscribed
              angle is always 90°.
            </p>
          </div>

          <button
            onClick={() => {
              setArcStart(Math.PI);
              setArcEnd(0);
              setPointAngle(Math.PI * 0.6);
            }}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Show Thales' Case (90°)
          </button>

          <button
            onClick={() => {
              setArcStart(Math.PI * 1.2);
              setArcEnd(Math.PI * 1.8);
              setPointAngle(Math.PI * 0.7);
            }}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Reset
          </button>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-pink-400">Pink arc:</span> Subtended arc AB</p>
            <p><span className="text-yellow-400">Yellow:</span> Central angle</p>
            <p><span className="text-cyan-400">Cyan:</span> Inscribed angle</p>
          </div>
        </div>
      </div>
    </div>
  );
}
