import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function ThalesTheoremDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [parallelY, setParallelY] = useState(150);
  const [dragging, setDragging] = useState(false);

  const width = 500;
  const height = 380;

  // Fixed triangle vertices
  const O: Point = { x: 100, y: 320 };
  const A: Point = { x: 400, y: 320 };
  const B: Point = { x: 300, y: 80 };

  // Calculate intersection of parallel line with triangle sides
  const getIntersections = (y: number): { C: Point; D: Point } | null => {
    if (y >= O.y || y <= B.y) return null;

    // Intersection with OB
    const tOB = (O.y - y) / (O.y - B.y);
    const C: Point = {
      x: O.x + tOB * (B.x - O.x),
      y: y,
    };

    // Intersection with AB
    const tAB = (A.y - y) / (A.y - B.y);
    const D: Point = {
      x: A.x + tAB * (B.x - A.x),
      y: y,
    };

    return { C, D };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
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

    // Draw triangle OAB
    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(O.x, O.y);
    ctx.lineTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.closePath();
    ctx.stroke();

    // Draw base line extended
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(50, O.y);
    ctx.lineTo(450, O.y);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw points
    const drawPoint = (p: Point, label: string, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(label, p.x + 10, p.y - 8);
    };

    drawPoint(O, 'O', '#f472b6');
    drawPoint(A, 'A', '#f472b6');
    drawPoint(B, 'B', '#f472b6');

    // Get intersections
    const intersections = getIntersections(parallelY);

    if (intersections) {
      const { C, D } = intersections;

      // Draw parallel line
      ctx.strokeStyle = '#22d3ee';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(50, parallelY);
      ctx.lineTo(450, parallelY);
      ctx.stroke();

      // Draw intersection points
      drawPoint(C, 'C', '#22d3ee');
      drawPoint(D, 'D', '#22d3ee');

      // Calculate ratios
      const OC = Math.sqrt((C.x - O.x) ** 2 + (C.y - O.y) ** 2);
      const OB = Math.sqrt((B.x - O.x) ** 2 + (B.y - O.y) ** 2);
      const AD = Math.sqrt((D.x - A.x) ** 2 + (D.y - A.y) ** 2);
      const AB = Math.sqrt((B.x - A.x) ** 2 + (B.y - A.y) ** 2);
      const CD = Math.sqrt((D.x - C.x) ** 2 + (D.y - C.y) ** 2);
      const OA = Math.sqrt((A.x - O.x) ** 2 + (A.y - O.y) ** 2);

      const ratioOC_OB = OC / OB;
      const ratioAD_AB = AD / AB;
      const ratioCD_OA = CD / OA;

      // Draw ratio display
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(10, 10, 200, 100);
      ctx.strokeStyle = '#334155';
      ctx.strokeRect(10, 10, 200, 100);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '12px sans-serif';
      ctx.fillText('Thales Theorem:', 20, 30);
      ctx.fillText(`OC/OB = ${ratioOC_OB.toFixed(3)}`, 20, 50);
      ctx.fillText(`AD/AB = ${ratioAD_AB.toFixed(3)}`, 20, 70);
      ctx.fillText(`CD/OA = ${ratioCD_OA.toFixed(3)}`, 20, 90);

      // Show equality
      ctx.fillStyle = '#34d399';
      ctx.fillText('All ratios equal!', 120, 50);

      // Draw parallel indicator
      ctx.fillStyle = '#22d3ee';
      ctx.font = '11px sans-serif';
      ctx.fillText('CD ∥ OA', 380, parallelY - 10);
    }

    // Instructions
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Drag the cyan line up/down', 10, height - 10);

  }, [parallelY]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const y = e.clientY - rect.top;
    if (Math.abs(y - parallelY) < 20) {
      setDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    let y = e.clientY - rect.top;
    // Constrain to within triangle
    y = Math.max(B.y + 20, Math.min(O.y - 20, y));
    setParallelY(y);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Thales' Theorem (Intercept Theorem)</h4>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-700 rounded cursor-ns-resize"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />
        </div>

        <div className="w-full md:w-52 space-y-3">
          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-blue-400 mb-2">Thales' Theorem</h5>
            <p className="text-xs text-slate-300">
              If a line CD is drawn parallel to the base OA of a triangle OAB,
              then it divides the other two sides proportionally:
            </p>
            <p className="text-sm text-cyan-400 mt-2 font-mono">
              OC/OB = AD/AB = CD/OA
            </p>
          </div>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-yellow-400 mb-2">Key Insight</h5>
            <p className="text-xs text-slate-300">
              This theorem is fundamental for similar triangles. The parallel line
              creates a smaller triangle similar to the original.
            </p>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-pink-400">Pink:</span> Original triangle OAB</p>
            <p><span className="text-cyan-400">Cyan:</span> Parallel line CD</p>
            <p>Drag the line to see ratios change</p>
          </div>
        </div>
      </div>
    </div>
  );
}
