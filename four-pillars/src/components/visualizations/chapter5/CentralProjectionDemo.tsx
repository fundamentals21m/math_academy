import { useState, useRef, useEffect } from 'react';

interface CentralProjectionDemoProps {
  className?: string;
}

export function CentralProjectionDemo({ className = '' }: CentralProjectionDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [projectionType, setProjectionType] = useState<'parallel' | 'central' | 'reciprocal'>('parallel');
  const [param, setParam] = useState(1.5); // translation l, scale k, or position for reciprocal
  const [showLines, setShowLines] = useState(true);

  const width = 550;
  const height = 400;

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

    // Line positions
    const line1Y = 280; // L1 (source line)
    const line2Y = 120; // L2 (target line)
    const centerX = width / 2;

    // Draw lines L1 and L2
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(20, line1Y);
    ctx.lineTo(width - 20, line1Y);
    ctx.stroke();

    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(20, line2Y);
    ctx.lineTo(width - 20, line2Y);
    ctx.stroke();

    // Labels
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#60a5fa';
    ctx.fillText('L₁ (source)', 30, line1Y + 25);
    ctx.fillStyle = '#34d399';
    ctx.fillText('L₂ (image)', 30, line2Y - 10);

    // Source points on L1
    const sourcePoints = [-3, -2, -1, 0, 1, 2, 3].map(x => ({
      x: centerX + x * 50,
      y: line1Y,
      value: x
    }));

    // Calculate projected points based on projection type
    let projectedPoints: { x: number; y: number; value: number }[] = [];
    let projectionCenter: { x: number; y: number } | null = null;

    if (projectionType === 'parallel') {
      // Translation: x → x + l
      const l = (param - 1.5) * 100; // Convert param to translation
      projectedPoints = sourcePoints.map(p => ({
        x: p.x + l,
        y: line2Y,
        value: p.value + l / 50
      }));
      // Projection from infinity (parallel lines)
    } else if (projectionType === 'central') {
      // Scaling from a point: x → kx
      const k = param;
      projectionCenter = { x: centerX, y: (line1Y + line2Y) / 2 - 50 };

      projectedPoints = sourcePoints.map(p => {
        // Project from center through point on L1 to L2
        const dx = p.x - projectionCenter!.x;
        const dy = p.y - projectionCenter!.y;

        // Find intersection with L2
        const t = (line2Y - projectionCenter!.y) / dy;
        const projX = projectionCenter!.x + t * dx;

        return {
          x: projX,
          y: line2Y,
          value: p.value * k
        };
      });
    } else {
      // Reciprocal: x → 1/x
      projectionCenter = { x: centerX, y: (line1Y + line2Y) / 2 };

      // For reciprocal, we need non-zero values
      const reciprocalSources = [-3, -2, -1, 1, 2, 3].map(x => ({
        x: centerX + x * 50,
        y: line1Y,
        value: x
      }));

      projectedPoints = reciprocalSources.map(p => {
        const recipValue = 1 / p.value;
        return {
          x: centerX + recipValue * 100, // Scale for visibility
          y: line2Y,
          value: recipValue
        };
      });

      // Also draw source points without 0
      sourcePoints.length = 0;
      sourcePoints.push(...reciprocalSources);
    }

    // Draw projection center if applicable
    if (projectionCenter && projectionType !== 'parallel') {
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(projectionCenter.x, projectionCenter.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('O', projectionCenter.x + 12, projectionCenter.y + 5);
      ctx.font = '11px sans-serif';
      ctx.fillText('(projection center)', projectionCenter.x - 55, projectionCenter.y - 15);
    }

    // Draw projection lines
    if (showLines && projectionCenter) {
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      sourcePoints.forEach((sp, i) => {
        if (projectedPoints[i] && projectedPoints[i].x > 20 && projectedPoints[i].x < width - 20) {
          ctx.beginPath();
          if (projectionType === 'parallel') {
            ctx.moveTo(sp.x, sp.y);
            ctx.lineTo(projectedPoints[i].x, projectedPoints[i].y);
          } else {
            ctx.moveTo(sp.x, sp.y);
            ctx.lineTo(projectionCenter!.x, projectionCenter!.y);
            ctx.lineTo(projectedPoints[i].x, projectedPoints[i].y);
          }
          ctx.stroke();
        }
      });
      ctx.setLineDash([]);
    } else if (showLines && projectionType === 'parallel') {
      // Draw parallel projection lines
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      sourcePoints.forEach((sp, i) => {
        if (projectedPoints[i] && projectedPoints[i].x > 20 && projectedPoints[i].x < width - 20) {
          ctx.beginPath();
          ctx.moveTo(sp.x, sp.y);
          ctx.lineTo(projectedPoints[i].x, projectedPoints[i].y);
          ctx.stroke();
        }
      });
      ctx.setLineDash([]);
    }

    // Draw source points
    sourcePoints.forEach(p => {
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '11px sans-serif';
      ctx.fillText(p.value.toString(), p.x - 5, p.y + 20);
    });

    // Draw projected points
    projectedPoints.forEach(p => {
      if (p.x > 20 && p.x < width - 20) {
        ctx.fillStyle = '#34d399';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '11px sans-serif';
        ctx.fillText(p.value.toFixed(1), p.x - 10, p.y - 10);
      }
    });

    // Draw formula
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 16px sans-serif';
    let formula = '';
    let description = '';

    if (projectionType === 'parallel') {
      const l = ((param - 1.5) * 2).toFixed(1);
      formula = `x → x + ${l}`;
      description = 'Translation (from point at infinity)';
    } else if (projectionType === 'central') {
      formula = `x → ${param.toFixed(1)}x`;
      description = 'Scaling (from finite point)';
    } else {
      formula = 'x → 1/x';
      description = 'Reciprocal (non-parallel lines)';
    }

    ctx.fillText(formula, width - 150, 40);
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(description, width - 200, 60);

    // General form note
    ctx.fillStyle = '#c084fc';
    ctx.font = '12px sans-serif';
    ctx.fillText('General form: f(x) = (ax + b)/(cx + d)', 20, height - 20);

  }, [projectionType, param, showLines]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Projection and Linear Fractional Transformations
      </h4>

      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => { setProjectionType('parallel'); setParam(1.5); }}
          className={`px-3 py-2 text-sm rounded transition ${
            projectionType === 'parallel'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Translation (x + l)
        </button>
        <button
          onClick={() => { setProjectionType('central'); setParam(1.5); }}
          className={`px-3 py-2 text-sm rounded transition ${
            projectionType === 'central'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Scaling (kx)
        </button>
        <button
          onClick={() => setProjectionType('reciprocal')}
          className={`px-3 py-2 text-sm rounded transition ${
            projectionType === 'reciprocal'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Reciprocal (1/x)
        </button>
      </div>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded"
        />
      </div>

      {projectionType !== 'reciprocal' && (
        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">
            {projectionType === 'parallel'
              ? `Translation: l = ${((param - 1.5) * 2).toFixed(1)}`
              : `Scale factor: k = ${param.toFixed(1)}`}
          </label>
          <input
            type="range"
            min="0.5"
            max="2.5"
            step="0.1"
            value={param}
            onChange={(e) => setParam(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowLines(!showLines)}
          className={`px-4 py-2 rounded transition ${
            showLines
              ? 'bg-yellow-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {showLines ? 'Hide Projection Lines' : 'Show Projection Lines'}
        </button>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p>
          <strong>Projection types:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><span className="text-blue-400">Translation</span>: x → x + l (parallel projection)</li>
          <li><span className="text-green-400">Scaling</span>: x → kx (central projection, parallel lines)</li>
          <li><span className="text-pink-400">Reciprocal</span>: x → 1/x (non-parallel lines)</li>
        </ul>
        <p className="mt-2 text-purple-400">
          All combinations give functions f(x) = (ax + b)/(cx + d) with ad − bc ≠ 0.
        </p>
      </div>
    </div>
  );
}
