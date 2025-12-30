import { useState, useRef, useEffect, useCallback } from 'react';

interface LinearIndependenceDemoProps {
  className?: string;
}

export function LinearIndependenceDemo({ className = '' }: LinearIndependenceDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vectorU, setVectorU] = useState({ x: 3, y: 1 });
  const [vectorV, setVectorV] = useState({ x: 1, y: 2 });
  const [isDragging, setIsDragging] = useState<'u' | 'v' | null>(null);
  const [showSpan, setShowSpan] = useState(true);

  const width = 550;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = 40;

  const toScreen = useCallback((x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale
  }), []);

  const fromScreen = useCallback((screenX: number, screenY: number) => ({
    x: (screenX - centerX) / scale,
    y: (centerY - screenY) / scale
  }), []);

  // Check if vectors are linearly dependent (parallel)
  const det = vectorU.x * vectorV.y - vectorU.y * vectorV.x;
  const areDependent = Math.abs(det) < 0.01;

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
    const vScreen = toScreen(vectorV.x, vectorV.y);

    const distU = Math.sqrt((pos.x - uScreen.x) ** 2 + (pos.y - uScreen.y) ** 2);
    const distV = Math.sqrt((pos.x - vScreen.x) ** 2 + (pos.y - vScreen.y) ** 2);

    if (distU < 15) {
      setIsDragging('u');
    } else if (distV < 15) {
      setIsDragging('v');
    }
  }, [getMousePos, toScreen, vectorU, vectorV]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    const pos = getMousePos(e);
    const worldPos = fromScreen(pos.x, pos.y);

    // Snap to grid
    const snapped = {
      x: Math.round(worldPos.x * 2) / 2,
      y: Math.round(worldPos.y * 2) / 2
    };

    // Clamp to visible area
    snapped.x = Math.max(-5, Math.min(5, snapped.x));
    snapped.y = Math.max(-4, Math.min(4, snapped.y));

    if (isDragging === 'u') {
      setVectorU(snapped);
    } else {
      setVectorV(snapped);
    }
  }, [isDragging, getMousePos, fromScreen]);

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

    // Draw axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Draw span (shaded region) if vectors are independent
    if (showSpan && !areDependent) {
      // Draw a parallelogram showing that u and v span the plane
      const gradient = ctx.createLinearGradient(centerX, centerY, centerX + 200, centerY - 200);
      gradient.addColorStop(0, 'rgba(96, 165, 250, 0.1)');
      gradient.addColorStop(1, 'rgba(52, 211, 153, 0.1)');

      // Draw multiple parallelograms to suggest spanning
      for (let a = -3; a <= 3; a++) {
        for (let b = -3; b <= 3; b++) {
          const corner = toScreen(a * vectorU.x + b * vectorV.x, a * vectorU.y + b * vectorV.y);
          ctx.fillStyle = 'rgba(96, 165, 250, 0.05)';
          ctx.beginPath();
          ctx.arc(corner.x, corner.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Draw line through origin if dependent (both vectors on same line)
    if (areDependent && (vectorU.x !== 0 || vectorU.y !== 0)) {
      ctx.strokeStyle = '#f472b6';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 4]);

      const len = Math.sqrt(vectorU.x ** 2 + vectorU.y ** 2);
      const dirX = vectorU.x / len;
      const dirY = vectorU.y / len;

      const start = toScreen(-10 * dirX, -10 * dirY);
      const end = toScreen(10 * dirX, 10 * dirY);

      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Helper to draw vector arrow
    const drawVector = (vx: number, vy: number, color: string, label: string) => {
      const start = toScreen(0, 0);
      const end = toScreen(vx, vy);

      // Draw arrow shaft
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();

      // Draw arrow head
      const angle = Math.atan2(start.y - end.y, start.x - end.x);
      const headLen = 12;
      ctx.beginPath();
      ctx.moveTo(end.x, end.y);
      ctx.lineTo(
        end.x + headLen * Math.cos(angle - Math.PI / 6),
        end.y + headLen * Math.sin(angle - Math.PI / 6)
      );
      ctx.moveTo(end.x, end.y);
      ctx.lineTo(
        end.x + headLen * Math.cos(angle + Math.PI / 6),
        end.y + headLen * Math.sin(angle + Math.PI / 6)
      );
      ctx.stroke();

      // Draw endpoint
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(end.x, end.y, 6, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(label, end.x + 10, end.y - 10);
      ctx.font = '11px sans-serif';
      ctx.fillText(`(${vx.toFixed(1)}, ${vy.toFixed(1)})`, end.x + 10, end.y + 5);
    };

    // Draw vectors
    drawVector(vectorU.x, vectorU.y, '#60a5fa', 'u');
    drawVector(vectorV.x, vectorV.y, '#34d399', 'v');

    // Draw origin
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 12px sans-serif';
    ctx.fillStyle = '#f472b6';
    ctx.fillText('O', centerX + 8, centerY + 15);

    // Draw status
    ctx.font = 'bold 16px sans-serif';
    if (areDependent) {
      ctx.fillStyle = '#f472b6';
      ctx.fillText('Linearly DEPENDENT', 10, 30);
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('(vectors are parallel - span only a line)', 10, 50);
    } else {
      ctx.fillStyle = '#34d399';
      ctx.fillText('Linearly INDEPENDENT', 10, 30);
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('(vectors span the entire plane)', 10, 50);
    }

    // Draw determinant
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '13px sans-serif';
    ctx.fillText(`det = u₁v₂ − u₂v₁ = ${vectorU.x.toFixed(1)}×${vectorV.y.toFixed(1)} − ${vectorU.y.toFixed(1)}×${vectorV.x.toFixed(1)} = ${det.toFixed(2)}`, 10, height - 20);

  }, [vectorU, vectorV, showSpan, areDependent, toScreen, det]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Linear Independence and Direction
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
          onClick={() => setShowSpan(!showSpan)}
          className={`px-4 py-2 rounded transition ${
            showSpan
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {showSpan ? 'Showing Span' : 'Hide Span'}
        </button>
        <button
          onClick={() => {
            setVectorU({ x: 2, y: 1 });
            setVectorV({ x: 4, y: 2 }); // Dependent (parallel)
          }}
          className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-500 transition"
        >
          Make Dependent
        </button>
        <button
          onClick={() => {
            setVectorU({ x: 3, y: 1 });
            setVectorV({ x: 1, y: 2 });
          }}
          className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition"
        >
          Reset
        </button>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p>
          <strong>Linear Independence:</strong> Vectors <span className="text-blue-400">u</span> and{' '}
          <span className="text-green-400">v</span> are linearly independent if neither is a
          multiple of the other. Equivalently, the only solution to{' '}
          <span className="font-mono">au + bv = 0</span> is a = b = 0.
        </p>
        <p className="mt-2">
          Drag the vector tips to explore! When det ≠ 0, the vectors span ℝ².
        </p>
      </div>
    </div>
  );
}
