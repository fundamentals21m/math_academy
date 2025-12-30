import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function ComplexRotationDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [angle, setAngle] = useState(45);
  const [showMatrix, setShowMatrix] = useState(false);
  const [animating, setAnimating] = useState(false);
  const animationRef = useRef<number | null>(null);

  const width = 500;
  const height = 420;
  const centerX = 250;
  const centerY = 210;
  const scale = 80;

  const toCanvas = (p: Point): Point => ({
    x: centerX + p.x * scale,
    y: centerY - p.y * scale,
  });

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
    for (let i = -3; i <= 3; i++) {
      const x = centerX + i * scale;
      const y = centerY - i * scale;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px sans-serif';
    ctx.fillText('Re', width - 25, centerY + 20);
    ctx.fillText('Im', centerX + 10, 20);
    ctx.fillText('1', centerX + scale - 5, centerY + 20);
    ctx.fillText('i', centerX + 8, centerY - scale + 5);
    ctx.fillText('-1', centerX - scale - 15, centerY + 20);
    ctx.fillText('-i', centerX + 8, centerY + scale + 15);

    // Draw unit circle
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, scale, 0, Math.PI * 2);
    ctx.stroke();

    const rad = (angle * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    // Draw rotation multiplier on unit circle
    const rotatorPos = toCanvas({ x: cos, y: sin });
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(rotatorPos.x, rotatorPos.y);
    ctx.stroke();

    // Rotation arc
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, -rad, rad > 0);
    ctx.stroke();

    // Angle label
    ctx.fillStyle = '#fbbf24';
    ctx.font = '12px sans-serif';
    ctx.fillText(`${angle}°`, centerX + 35, centerY - 10);

    // Draw the rotator point (e^iθ = cos θ + i sin θ)
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(rotatorPos.x, rotatorPos.y, 8, 0, Math.PI * 2);
    ctx.fill();

    // Label the rotator
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 12px sans-serif';
    const labelOffset = angle > 90 && angle < 270 ? -60 : 15;
    ctx.fillText(`e^{iθ} = ${cos.toFixed(2)} + ${sin.toFixed(2)}i`, rotatorPos.x + labelOffset, rotatorPos.y - 15);

    // Original points to rotate
    const originalPoints: Point[] = [
      { x: 1.5, y: 0.5 },
      { x: 1, y: 1.5 },
      { x: 0.5, y: 0.5 },
    ];

    // Draw original triangle
    ctx.strokeStyle = '#60a5fa';
    ctx.fillStyle = 'rgba(96, 165, 250, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const first = toCanvas(originalPoints[0]);
    ctx.moveTo(first.x, first.y);
    for (let i = 1; i < originalPoints.length; i++) {
      const p = toCanvas(originalPoints[i]);
      ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Rotated points (multiply by e^iθ)
    const rotatedPoints = originalPoints.map((p) => ({
      x: p.x * cos - p.y * sin,
      y: p.x * sin + p.y * cos,
    }));

    // Draw rotated triangle
    ctx.strokeStyle = '#f472b6';
    ctx.fillStyle = 'rgba(244, 114, 182, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const firstR = toCanvas(rotatedPoints[0]);
    ctx.moveTo(firstR.x, firstR.y);
    for (let i = 1; i < rotatedPoints.length; i++) {
      const p = toCanvas(rotatedPoints[i]);
      ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw vertex points
    originalPoints.forEach((p) => {
      const cp = toCanvas(p);
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(cp.x, cp.y, 5, 0, Math.PI * 2);
      ctx.fill();
    });
    rotatedPoints.forEach((p) => {
      const cp = toCanvas(p);
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(cp.x, cp.y, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Matrix representation
    if (showMatrix) {
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(10, 10, 180, 95);
      ctx.strokeStyle = '#334155';
      ctx.strokeRect(10, 10, 180, 95);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Rotation Matrix:', 20, 28);
      ctx.font = '12px monospace';
      ctx.fillStyle = '#34d399';
      ctx.fillText(`┌ ${cos.toFixed(3)}  ${(-sin).toFixed(3)} ┐`, 20, 50);
      ctx.fillText(`└ ${sin.toFixed(3)}   ${cos.toFixed(3)} ┘`, 20, 70);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px sans-serif';
      ctx.fillText('cos θ = ' + cos.toFixed(3), 20, 90);
      ctx.fillText('sin θ = ' + sin.toFixed(3), 100, 90);
    }

    // Complex number info
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(width - 180, height - 70, 170, 60);
    ctx.strokeStyle = '#334155';
    ctx.strokeRect(width - 180, height - 70, 170, 60);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('Multiply by:', width - 170, height - 52);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px sans-serif';
    ctx.fillText(`cos(${angle}°) + i·sin(${angle}°)`, width - 170, height - 35);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('= rotation by θ', width - 170, height - 18);

  }, [angle, showMatrix]);

  useEffect(() => {
    if (animating) {
      let currentAngle = angle;
      const animate = () => {
        currentAngle = (currentAngle + 2) % 360;
        setAngle(currentAngle);
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animating]);

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Complex Number Rotation</h4>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-700 rounded"
          />
        </div>

        <div className="w-full md:w-56 space-y-3">
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Rotation Angle: {angle}°</label>
            <input
              type="range"
              min="0"
              max="360"
              step="5"
              value={angle}
              onChange={(e) => {
                setAnimating(false);
                setAngle(parseInt(e.target.value));
              }}
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setAnimating(!animating)}
              className={`flex-1 px-3 py-1.5 text-sm rounded ${
                animating
                  ? 'bg-red-600 text-white'
                  : 'bg-green-600 text-white'
              }`}
            >
              {animating ? 'Stop' : 'Animate'}
            </button>
            <button
              onClick={() => setAngle(90)}
              className="px-3 py-1.5 text-sm bg-slate-700 text-slate-200 rounded hover:bg-slate-600"
            >
              90°
            </button>
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showMatrix}
              onChange={(e) => setShowMatrix(e.target.checked)}
              className="rounded"
            />
            Show rotation matrix
          </label>

          <div className="p-3 bg-slate-800 rounded text-xs">
            <p className="text-slate-300 mb-2">
              <strong className="text-yellow-400">Key Insight:</strong>
            </p>
            <p className="text-slate-400">
              Multiplying z = x + iy by<br/>
              <span className="text-yellow-400">cos θ + i sin θ</span><br/>
              rotates z by angle θ about the origin.
            </p>
            <p className="text-slate-400 mt-2">
              This is why <span className="text-cyan-400">i² = -1</span>:<br/>
              Multiplying by i rotates by 90°, so i² rotates by 180° = multiplication by -1.
            </p>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-blue-400">Blue:</span> Original shape</p>
            <p><span className="text-pink-400">Pink:</span> Rotated shape</p>
            <p><span className="text-yellow-400">Yellow:</span> e^(iθ) on unit circle</p>
          </div>
        </div>
      </div>
    </div>
  );
}
