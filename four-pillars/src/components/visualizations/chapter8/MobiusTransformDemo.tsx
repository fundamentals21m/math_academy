import { useState, useRef, useEffect } from 'react';

type TransformType = 'translation' | 'scaling' | 'reflection' | 'inversion';

interface Point {
  x: number;
  y: number;
}

export function MobiusTransformDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [transformType, setTransformType] = useState<TransformType>('translation');
  const [param, setParam] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [animProgress, setAnimProgress] = useState(0);

  const width = 500;
  const height = 350;
  const scale = 40;
  const originX = width / 2;
  const originY = height - 40;

  const toCanvas = (x: number, y: number): [number, number] => {
    return [originX + x * scale, originY - y * scale];
  };

  // Apply Möbius transformation to a point
  const applyTransform = (p: Point, t: number): Point | null => {
    if (p.y <= 0) return null;

    const interpolatedParam = param * t;

    switch (transformType) {
      case 'translation':
        // z → z + l
        return { x: p.x + interpolatedParam, y: p.y };

      case 'scaling':
        // z → kz where k = e^param
        const k = Math.exp(interpolatedParam);
        return { x: p.x * k, y: p.y * k };

      case 'reflection':
        // z → -z̄ (reflection in imaginary axis)
        return { x: -p.x * t + p.x * (1 - t), y: p.y };

      case 'inversion':
        // z → 1/z̄ (inversion in unit circle)
        const denom = p.x * p.x + p.y * p.y;
        if (denom < 0.01) return null;
        const invX = p.x / denom;
        const invY = p.y / denom;
        return {
          x: p.x * (1 - t) + invX * t,
          y: p.y * (1 - t) + invY * t,
        };

      default:
        return p;
    }
  };

  // Generate a grid of sample points
  const generateGrid = (): Point[] => {
    const points: Point[] = [];
    for (let x = -4; x <= 4; x += 0.5) {
      for (let y = 0.5; y <= 5; y += 0.5) {
        points.push({ x, y });
      }
    }
    return points;
  };

  // Generate geodesics (semicircles and vertical lines)
  const generateGeodesics = (): { type: 'vertical' | 'semicircle'; x?: number; center?: number; radius?: number }[] => {
    const geodesics: { type: 'vertical' | 'semicircle'; x?: number; center?: number; radius?: number }[] = [];

    // Vertical lines
    for (let x = -3; x <= 3; x += 1.5) {
      geodesics.push({ type: 'vertical', x });
    }

    // Semicircles
    for (let c = -2; c <= 2; c += 2) {
      for (let r = 1; r <= 3; r += 1) {
        geodesics.push({ type: 'semicircle', center: c, radius: r });
      }
    }

    return geodesics;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw x-axis
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();

    // Draw unit circle reference for inversion
    if (transformType === 'inversion') {
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      const [cx, cy] = toCanvas(0, 0);
      ctx.beginPath();
      ctx.arc(cx, cy, scale, 0, Math.PI, true);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#fbbf24';
      ctx.font = '10px sans-serif';
      ctx.fillText('unit circle', cx + scale + 5, cy - 5);
    }

    const t = animProgress;

    // Draw transformed geodesics
    const geodesics = generateGeodesics();
    ctx.lineWidth = 1.5;

    geodesics.forEach((geo, idx) => {
      // Original (faded)
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
      if (geo.type === 'vertical') {
        const [cx] = toCanvas(geo.x!, 0);
        ctx.beginPath();
        ctx.moveTo(cx, originY);
        ctx.lineTo(cx, 0);
        ctx.stroke();
      } else {
        const [cx] = toCanvas(geo.center!, 0);
        ctx.beginPath();
        ctx.arc(cx, originY, geo.radius! * scale, Math.PI, 0, false);
        ctx.stroke();
      }

      // Transformed
      ctx.strokeStyle = idx % 2 === 0 ? '#22d3ee' : '#a78bfa';
      ctx.beginPath();

      if (geo.type === 'vertical') {
        // Sample points along vertical line and transform
        for (let y = 0.1; y <= 6; y += 0.1) {
          const p = applyTransform({ x: geo.x!, y }, t);
          if (!p || p.y <= 0) continue;
          const [cx, cy] = toCanvas(p.x, p.y);
          if (y === 0.1) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        }
      } else {
        // Sample points along semicircle and transform
        for (let angle = Math.PI; angle >= 0; angle -= 0.05) {
          const x = geo.center! + geo.radius! * Math.cos(angle);
          const y = geo.radius! * Math.sin(angle);
          const p = applyTransform({ x, y }, t);
          if (!p || p.y <= 0) continue;
          const [cx, cy] = toCanvas(p.x, p.y);
          if (angle === Math.PI) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        }
      }
      ctx.stroke();
    });

    // Draw a reference point transformation
    const refPoint = { x: 1, y: 2 };
    const [origX, origY] = toCanvas(refPoint.x, refPoint.y);
    ctx.fillStyle = 'rgba(244, 114, 182, 0.5)';
    ctx.beginPath();
    ctx.arc(origX, origY, 5, 0, Math.PI * 2);
    ctx.fill();

    const transformed = applyTransform(refPoint, t);
    if (transformed && transformed.y > 0) {
      const [tx, ty] = toCanvas(transformed.x, transformed.y);
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(tx, ty, 6, 0, Math.PI * 2);
      ctx.fill();

      // Draw path
      ctx.strokeStyle = '#f472b6';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(origX, origY);
      ctx.lineTo(tx, ty);
      ctx.stroke();
      ctx.setLineDash([]);
    }

  }, [transformType, param, animProgress]);

  // Animation loop
  useEffect(() => {
    if (!animating) return;

    let frame: number;
    let start: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      // Ease in-out
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      setAnimProgress(eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setAnimating(false);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [animating]);

  const startAnimation = () => {
    setAnimProgress(0);
    setAnimating(true);
  };

  const getTransformFormula = () => {
    switch (transformType) {
      case 'translation':
        return `z → z + ${param.toFixed(1)}`;
      case 'scaling':
        return `z → ${Math.exp(param).toFixed(2)}z`;
      case 'reflection':
        return 'z → -z̄';
      case 'inversion':
        return 'z → 1/z̄';
    }
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Möbius Transformation Demo</h4>

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
          <div>
            <label className="block text-sm text-slate-300 mb-1">Transform Type</label>
            <select
              value={transformType}
              onChange={(e) => {
                setTransformType(e.target.value as TransformType);
                setAnimProgress(0);
              }}
              className="w-full px-2 py-1.5 bg-slate-800 border border-slate-600 rounded text-slate-200 text-sm"
            >
              <option value="translation">Translation (z → z + l)</option>
              <option value="scaling">Scaling (z → kz)</option>
              <option value="reflection">Reflection (z → -z̄)</option>
              <option value="inversion">Inversion (z → 1/z̄)</option>
            </select>
          </div>

          {(transformType === 'translation' || transformType === 'scaling') && (
            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Parameter: {transformType === 'translation' ? param.toFixed(1) : Math.exp(param).toFixed(2)}
              </label>
              <input
                type="range"
                min={transformType === 'translation' ? -3 : -1}
                max={transformType === 'translation' ? 3 : 1}
                step="0.1"
                value={param}
                onChange={(e) => setParam(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          )}

          <button
            onClick={startAnimation}
            disabled={animating}
            className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-600 text-white rounded text-sm font-medium"
          >
            {animating ? 'Animating...' : 'Animate Transform'}
          </button>

          <div className="p-2 bg-slate-800 rounded text-center">
            <span className="text-cyan-400 font-mono text-lg">{getTransformFormula()}</span>
          </div>

          <div className="text-xs text-slate-400">
            <p>Watch how geodesics (hyperbolic lines) map to geodesics under Möbius transformations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
