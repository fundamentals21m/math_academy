import { useState, useRef, useEffect } from 'react';

interface AreaTransformDemoProps {
  className?: string;
}

export function AreaTransformDemo({ className = '' }: AreaTransformDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shearAmount, setShearAmount] = useState(0);
  const [showTriangle, setShowTriangle] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>();

  const width = 550;
  const height = 400;

  // Parallelogram dimensions
  const baseWidth = 180;
  const parallelogramHeight = 120;
  const startX = 100;
  const startY = height - 80;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw parallel lines (to show constant height)
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    // Top parallel line
    ctx.beginPath();
    ctx.moveTo(0, startY - parallelogramHeight);
    ctx.lineTo(width, startY - parallelogramHeight);
    ctx.stroke();

    // Bottom parallel line
    ctx.beginPath();
    ctx.moveTo(0, startY);
    ctx.lineTo(width, startY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Height label
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.save();
    ctx.translate(30, startY - parallelogramHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(`height = h`, -20, 0);
    ctx.restore();

    // Height indicator arrow
    ctx.strokeStyle = '#94a3b8';
    ctx.beginPath();
    ctx.moveTo(50, startY);
    ctx.lineTo(50, startY - parallelogramHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(45, startY - 5);
    ctx.lineTo(50, startY);
    ctx.lineTo(55, startY - 5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(45, startY - parallelogramHeight + 5);
    ctx.lineTo(50, startY - parallelogramHeight);
    ctx.lineTo(55, startY - parallelogramHeight + 5);
    ctx.stroke();

    // Calculate sheared parallelogram vertices
    const shearOffset = shearAmount * 100;

    const p1 = { x: startX, y: startY }; // bottom left
    const p2 = { x: startX + baseWidth, y: startY }; // bottom right
    const p3 = { x: startX + baseWidth + shearOffset, y: startY - parallelogramHeight }; // top right
    const p4 = { x: startX + shearOffset, y: startY - parallelogramHeight }; // top left

    // Draw original rectangle outline (ghost)
    if (shearAmount !== 0) {
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX + baseWidth, startY);
      ctx.lineTo(startX + baseWidth, startY - parallelogramHeight);
      ctx.lineTo(startX, startY - parallelogramHeight);
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw parallelogram with gradient fill
    const gradient = ctx.createLinearGradient(p1.x, p1.y, p3.x, p3.y);
    gradient.addColorStop(0, 'rgba(96, 165, 250, 0.3)');
    gradient.addColorStop(1, 'rgba(96, 165, 250, 0.1)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.lineTo(p4.x, p4.y);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.stroke();

    // If showing triangle mode, draw the triangle
    if (showTriangle) {
      // Draw diagonal
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Fill one triangle
      const triGradient = ctx.createLinearGradient(p1.x, p1.y, p3.x, p3.y);
      triGradient.addColorStop(0, 'rgba(251, 191, 36, 0.3)');
      triGradient.addColorStop(1, 'rgba(251, 191, 36, 0.1)');

      ctx.fillStyle = triGradient;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Draw vertices
    const vertices = [p1, p2, p3, p4];
    const labels = ['A', 'B', 'C', 'D'];
    const colors = ['#60a5fa', '#60a5fa', '#60a5fa', '#60a5fa'];
    const offsets = [
      { x: -15, y: 20 },
      { x: 5, y: 20 },
      { x: 5, y: -10 },
      { x: -15, y: -10 }
    ];

    vertices.forEach((v, i) => {
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.arc(v.x, v.y, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = 'italic 14px serif';
      ctx.fillText(labels[i], v.x + offsets[i].x, v.y + offsets[i].y);
    });

    // Base label
    ctx.fillStyle = '#60a5fa';
    ctx.font = '12px sans-serif';
    ctx.fillText(`base = b`, (p1.x + p2.x) / 2 - 25, p1.y + 25);

    // Area calculation
    const area = baseWidth * parallelogramHeight;
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 16px sans-serif';

    if (showTriangle) {
      ctx.fillText(`Triangle Area = ½ × b × h = ${(area / 2).toFixed(0)} sq units`, width / 2 - 130, 40);
    } else {
      ctx.fillText(`Parallelogram Area = b × h = ${area.toFixed(0)} sq units`, width / 2 - 130, 40);
    }

    // Arrow showing shear direction
    if (isAnimating || shearAmount !== 0) {
      ctx.strokeStyle = '#f472b6';
      ctx.lineWidth = 2;
      const arrowY = startY - parallelogramHeight - 30;
      ctx.beginPath();
      ctx.moveTo(startX, arrowY);
      ctx.lineTo(startX + 80, arrowY);
      ctx.lineTo(startX + 70, arrowY - 8);
      ctx.moveTo(startX + 80, arrowY);
      ctx.lineTo(startX + 70, arrowY + 8);
      ctx.stroke();

      ctx.fillStyle = '#f472b6';
      ctx.font = '12px sans-serif';
      ctx.fillText('shear', startX + 30, arrowY - 12);
    }

  }, [shearAmount, showTriangle, isAnimating]);

  const animateShear = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let start: number | null = null;
    const duration = 2000;
    const startValue = shearAmount;
    const endValue = startValue === 0 ? 1 : 0;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      // Ease in-out
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      setShearAmount(startValue + (endValue - startValue) * eased);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Shearing Preserves Area
      </h4>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm text-slate-400 mb-1">
          Shear Amount: {shearAmount.toFixed(2)}
        </label>
        <input
          type="range"
          min="-1"
          max="1"
          step="0.01"
          value={shearAmount}
          onChange={(e) => setShearAmount(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={animateShear}
          disabled={isAnimating}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500
                     disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {shearAmount === 0 ? 'Animate Shear' : 'Animate Back'}
        </button>
        <button
          onClick={() => setShowTriangle(!showTriangle)}
          className={`px-4 py-2 rounded transition ${
            showTriangle
              ? 'bg-yellow-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {showTriangle ? 'Show Parallelogram' : 'Show Triangle'}
        </button>
        <button
          onClick={() => setShearAmount(0)}
          className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition"
        >
          Reset
        </button>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p>
          <strong>Key Insight:</strong> Sliding the top edge parallel to the base
          (shearing) does not change the area because both the <em>base</em> and{' '}
          <em>height</em> remain constant.
        </p>
        {showTriangle && (
          <p className="mt-2 text-yellow-400">
            The diagonal divides the parallelogram into two congruent triangles,
            each with half the area.
          </p>
        )}
      </div>
    </div>
  );
}
