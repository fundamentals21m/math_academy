import { useState, useRef, useEffect, useCallback } from 'react';

interface TriangleInequalityDemoProps {
  className?: string;
}

export function TriangleInequalityDemo({ className = '' }: TriangleInequalityDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vectorU, setVectorU] = useState({ x: 2, y: 1 });
  const [vectorV, setVectorV] = useState({ x: 1, y: 2.5 });
  const [isDragging, setIsDragging] = useState<'u' | 'v' | null>(null);
  const [showComponents, setShowComponents] = useState(true);

  const width = 550;
  const height = 400;
  const originX = 150;
  const originY = height - 100;
  const scale = 50;

  const toScreen = useCallback((x: number, y: number) => ({
    x: originX + x * scale,
    y: originY - y * scale
  }), []);

  const fromScreen = useCallback((screenX: number, screenY: number) => ({
    x: (screenX - originX) / scale,
    y: (originY - screenY) / scale
  }), []);

  // Calculate magnitudes
  const magU = Math.sqrt(vectorU.x ** 2 + vectorU.y ** 2);
  const magV = Math.sqrt(vectorV.x ** 2 + vectorV.y ** 2);
  const sumVec = { x: vectorU.x + vectorV.x, y: vectorU.y + vectorV.y };
  const magSum = Math.sqrt(sumVec.x ** 2 + sumVec.y ** 2);

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
    const uScreen = toScreen(vectorU.x, vectorU.y);
    const vEndScreen = toScreen(vectorU.x + vectorV.x, vectorU.y + vectorV.y);

    const distU = Math.sqrt((pos.x - uScreen.x) ** 2 + (pos.y - uScreen.y) ** 2);
    const distV = Math.sqrt((pos.x - vEndScreen.x) ** 2 + (pos.y - vEndScreen.y) ** 2);

    if (distU < 15) {
      setIsDragging('u');
    } else if (distV < 15) {
      setIsDragging('v');
    }
  }, [getMousePos, toScreen, vectorU, vectorV]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    const pos = getMousePos(e);

    if (isDragging === 'u') {
      const worldPos = fromScreen(pos.x, pos.y);
      setVectorU({
        x: Math.max(0.5, Math.min(4, worldPos.x)),
        y: Math.max(0, Math.min(4, worldPos.y))
      });
    } else if (isDragging === 'v') {
      // V is relative to the end of U
      const worldPos = fromScreen(pos.x, pos.y);
      setVectorV({
        x: Math.max(-2, Math.min(4, worldPos.x - vectorU.x)),
        y: Math.max(-2, Math.min(4, worldPos.y - vectorU.y))
      });
    }
  }, [isDragging, getMousePos, fromScreen, vectorU]);

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
    for (let x = 0; x <= width; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const O = toScreen(0, 0);
    const U = toScreen(vectorU.x, vectorU.y);
    const UPlusV = toScreen(sumVec.x, sumVec.y);

    // Helper to draw vector arrow
    const drawVector = (
      startX: number, startY: number,
      endX: number, endY: number,
      color: string,
      lineWidth: number = 3
    ) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Arrow head
      const angle = Math.atan2(startY - endY, startX - endX);
      const headLen = 10;
      ctx.beginPath();
      ctx.moveTo(endX, endY);
      ctx.lineTo(
        endX + headLen * Math.cos(angle - Math.PI / 6),
        endY + headLen * Math.sin(angle - Math.PI / 6)
      );
      ctx.moveTo(endX, endY);
      ctx.lineTo(
        endX + headLen * Math.cos(angle + Math.PI / 6),
        endY + headLen * Math.sin(angle + Math.PI / 6)
      );
      ctx.stroke();
    };

    // Draw u (from O)
    drawVector(O.x, O.y, U.x, U.y, '#60a5fa');

    // Draw v (from end of u)
    drawVector(U.x, U.y, UPlusV.x, UPlusV.y, '#34d399');

    // Draw u+v (sum vector from O)
    drawVector(O.x, O.y, UPlusV.x, UPlusV.y, '#f472b6', 4);

    // Draw dashed triangle completion if showComponents
    if (showComponents) {
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      // Vertical and horizontal components of sum
      const sumEndX = toScreen(sumVec.x, 0);
      ctx.beginPath();
      ctx.moveTo(O.x, O.y);
      ctx.lineTo(sumEndX.x, sumEndX.y);
      ctx.lineTo(UPlusV.x, UPlusV.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw points
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(O.x, O.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('O', O.x - 20, O.y + 5);

    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(U.x, U.y, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.arc(UPlusV.x, UPlusV.y, 7, 0, Math.PI * 2);
    ctx.fill();

    // Labels for vectors
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#60a5fa';
    const uMid = { x: (O.x + U.x) / 2, y: (O.y + U.y) / 2 };
    ctx.fillText('u', uMid.x - 20, uMid.y - 5);

    ctx.fillStyle = '#34d399';
    const vMid = { x: (U.x + UPlusV.x) / 2, y: (U.y + UPlusV.y) / 2 };
    ctx.fillText('v', vMid.x + 10, vMid.y - 5);

    ctx.fillStyle = '#f472b6';
    const sumMid = { x: (O.x + UPlusV.x) / 2, y: (O.y + UPlusV.y) / 2 };
    ctx.fillText('u+v', sumMid.x - 35, sumMid.y + 5);

    // Draw info panel
    const panelX = 320;
    const panelY = 20;
    ctx.fillStyle = 'rgba(30, 41, 59, 0.95)';
    ctx.fillRect(panelX, panelY, 210, 160);
    ctx.strokeStyle = '#475569';
    ctx.strokeRect(panelX, panelY, 210, 160);

    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#e2e8f0';
    ctx.fillText('Triangle Inequality:', panelX + 10, panelY + 25);

    ctx.font = '13px sans-serif';
    ctx.fillStyle = '#60a5fa';
    ctx.fillText(`|u| = ${magU.toFixed(2)}`, panelX + 10, panelY + 55);

    ctx.fillStyle = '#34d399';
    ctx.fillText(`|v| = ${magV.toFixed(2)}`, panelX + 10, panelY + 75);

    ctx.fillStyle = '#94a3b8';
    ctx.fillText(`|u| + |v| = ${(magU + magV).toFixed(2)}`, panelX + 10, panelY + 100);

    ctx.fillStyle = '#f472b6';
    ctx.fillText(`|u + v| = ${magSum.toFixed(2)}`, panelX + 10, panelY + 125);

    // Show inequality status
    const diff = (magU + magV) - magSum;
    ctx.fillStyle = diff >= -0.01 ? '#34d399' : '#ef4444';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(
      `|u+v| ≤ |u| + |v|  ✓`,
      panelX + 10,
      panelY + 150
    );

    // Explanation at bottom
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText(
      'The direct path (pink) is never longer than going via the corner.',
      20,
      height - 20
    );

  }, [vectorU, vectorV, showComponents, toScreen, magU, magV, magSum, sumVec]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Triangle Inequality: |u + v| ≤ |u| + |v|
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

      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={() => setShowComponents(!showComponents)}
          className={`px-4 py-2 rounded transition ${
            showComponents
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {showComponents ? 'Hide Components' : 'Show Components'}
        </button>
        <button
          onClick={() => {
            // Make vectors nearly collinear to show equality case
            setVectorU({ x: 2, y: 1 });
            setVectorV({ x: 2, y: 1 });
          }}
          className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-500 transition"
        >
          Equality Case
        </button>
        <button
          onClick={() => {
            setVectorU({ x: 2, y: 1 });
            setVectorV({ x: 1, y: 2.5 });
          }}
          className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition"
        >
          Reset
        </button>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p>
          <strong>Triangle Inequality:</strong> The length of the sum |<span className="text-pink-400">u + v</span>|
          is at most the sum of the lengths |<span className="text-blue-400">u</span>| + |<span className="text-green-400">v</span>|.
        </p>
        <p className="mt-2">
          Equality holds when <span className="text-blue-400">u</span> and <span className="text-green-400">v</span> point
          in the same direction. Drag the endpoints to explore!
        </p>
      </div>
    </div>
  );
}
