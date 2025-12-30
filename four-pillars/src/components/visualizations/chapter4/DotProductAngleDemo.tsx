import { useState, useRef, useEffect, useCallback } from 'react';

interface DotProductAngleDemoProps {
  className?: string;
}

export function DotProductAngleDemo({ className = '' }: DotProductAngleDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vectorU, setVectorU] = useState({ x: 3, y: 1 });
  const [vectorV, setVectorV] = useState({ x: 2, y: 3 });
  const [isDragging, setIsDragging] = useState<'u' | 'v' | null>(null);

  const width = 550;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = 45;

  const toScreen = useCallback((x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale
  }), []);

  const fromScreen = useCallback((screenX: number, screenY: number) => ({
    x: (screenX - centerX) / scale,
    y: (centerY - screenY) / scale
  }), []);

  // Calculate magnitudes and dot product
  const magU = Math.sqrt(vectorU.x ** 2 + vectorU.y ** 2);
  const magV = Math.sqrt(vectorV.x ** 2 + vectorV.y ** 2);
  const dotProduct = vectorU.x * vectorV.x + vectorU.y * vectorV.y;
  const cosTheta = magU > 0 && magV > 0 ? dotProduct / (magU * magV) : 0;
  const theta = Math.acos(Math.max(-1, Math.min(1, cosTheta)));
  const thetaDeg = theta * 180 / Math.PI;

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

    // Clamp to visible area
    const clamped = {
      x: Math.max(-4, Math.min(4, worldPos.x)),
      y: Math.max(-3.5, Math.min(3.5, worldPos.y))
    };

    if (isDragging === 'u') {
      setVectorU(clamped);
    } else {
      setVectorV(clamped);
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

    // Draw angle arc
    if (magU > 0.1 && magV > 0.1) {
      const arcRadius = 30;
      const angleU = Math.atan2(vectorU.y, vectorU.x);
      const angleV = Math.atan2(vectorV.y, vectorV.x);

      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const startAngle = Math.min(angleU, angleV);
      const endAngle = Math.max(angleU, angleV);

      // Choose the smaller arc
      const arcDiff = endAngle - startAngle;
      if (arcDiff <= Math.PI) {
        ctx.arc(centerX, centerY, arcRadius, -endAngle, -startAngle);
      } else {
        ctx.arc(centerX, centerY, arcRadius, -startAngle, -endAngle);
      }
      ctx.stroke();

      // Label angle
      const midAngle = (angleU + angleV) / 2;
      const labelRadius = arcRadius + 20;
      ctx.fillStyle = '#fbbf24';
      ctx.font = '14px sans-serif';
      ctx.fillText(
        `θ = ${thetaDeg.toFixed(1)}°`,
        centerX + labelRadius * Math.cos(midAngle) - 25,
        centerY - labelRadius * Math.sin(midAngle)
      );
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
    };

    // Draw vectors
    drawVector(vectorU.x, vectorU.y, '#60a5fa', 'u');
    drawVector(vectorV.x, vectorV.y, '#34d399', 'v');

    // Draw origin
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fill();

    // Draw formulas panel
    const panelX = 10;
    const panelY = 10;
    ctx.fillStyle = 'rgba(30, 41, 59, 0.9)';
    ctx.fillRect(panelX, panelY, 220, 130);
    ctx.strokeStyle = '#475569';
    ctx.strokeRect(panelX, panelY, 220, 130);

    ctx.font = 'bold 13px sans-serif';
    ctx.fillStyle = '#e2e8f0';
    ctx.fillText('Inner Product Formula:', panelX + 10, panelY + 25);

    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#60a5fa';
    ctx.fillText(`|u| = ${magU.toFixed(2)}`, panelX + 10, panelY + 50);
    ctx.fillStyle = '#34d399';
    ctx.fillText(`|v| = ${magV.toFixed(2)}`, panelX + 100, panelY + 50);

    ctx.fillStyle = '#fbbf24';
    ctx.fillText(`cos θ = ${cosTheta.toFixed(3)}`, panelX + 10, panelY + 70);

    ctx.fillStyle = '#e2e8f0';
    ctx.fillText(`u·v = ${dotProduct.toFixed(2)}`, panelX + 10, panelY + 95);

    ctx.fillStyle = '#c084fc';
    ctx.fillText(`|u||v|cos θ = ${(magU * magV * cosTheta).toFixed(2)}`, panelX + 10, panelY + 115);

    // Show if perpendicular
    if (Math.abs(dotProduct) < 0.1) {
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('Perpendicular! (u·v = 0)', width - 180, height - 20);
    }

  }, [vectorU, vectorV, toScreen, magU, magV, dotProduct, cosTheta, thetaDeg]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Inner Product and Cosine
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
          onClick={() => {
            setVectorU({ x: 3, y: 0 });
            setVectorV({ x: 0, y: 2 });
          }}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
        >
          Make Perpendicular
        </button>
        <button
          onClick={() => {
            setVectorU({ x: 3, y: 1 });
            setVectorV({ x: 2, y: 3 });
          }}
          className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition"
        >
          Reset
        </button>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p className="text-center font-mono text-lg text-pink-400 mb-2">
          u · v = |u| |v| cos θ
        </p>
        <p>
          The dot product of vectors <span className="text-blue-400">u</span> and{' '}
          <span className="text-green-400">v</span> equals the product of their
          magnitudes times the cosine of the angle between them.
        </p>
        <p className="mt-2">
          Drag the vector tips to see how the angle and dot product change!
        </p>
      </div>
    </div>
  );
}
