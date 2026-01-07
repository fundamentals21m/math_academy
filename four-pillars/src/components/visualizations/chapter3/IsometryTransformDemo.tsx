import { useState, useRef, useEffect } from 'react';

type TransformType = 'reflection' | 'rotation' | 'translation' | 'glide';

interface Point {
  x: number;
  y: number;
}

export function IsometryTransformDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [transformType, setTransformType] = useState<TransformType>('reflection');
  const [param, setParam] = useState(0);

  const width = 500;
  const height = 400;
  const scale = 35;
  const originX = width / 2;
  const originY = height / 2;

  const toCanvas = (x: number, y: number): [number, number] => {
    return [originX + x * scale, originY - y * scale];
  };

  // Original triangle vertices
  const triangle: Point[] = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 2, y: 3 },
  ];

  const applyTransform = (p: Point): Point => {
    switch (transformType) {
      case 'reflection': {
        // Reflection across y = x * tan(param)
        const angle = param;
        const cos2 = Math.cos(2 * angle);
        const sin2 = Math.sin(2 * angle);
        return {
          x: p.x * cos2 + p.y * sin2,
          y: p.x * sin2 - p.y * cos2,
        };
      }
      case 'rotation': {
        // Rotation about origin
        const cos = Math.cos(param);
        const sin = Math.sin(param);
        return {
          x: p.x * cos - p.y * sin,
          y: p.x * sin + p.y * cos,
        };
      }
      case 'translation': {
        // Translation along x-axis
        return {
          x: p.x + param * 2,
          y: p.y,
        };
      }
      case 'glide': {
        // Glide reflection: reflect across x-axis then translate
        return {
          x: p.x + param * 2,
          y: -p.y,
        };
      }
    }
  };

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
    for (let x = -7; x <= 7; x++) {
      const [cx] = toCanvas(x, 0);
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();
    }
    for (let y = -5; y <= 5; y++) {
      const [, cy] = toCanvas(0, y);
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // Draw transform-specific elements
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1.5;

    switch (transformType) {
      case 'reflection': {
        // Draw reflection line
        ctx.strokeStyle = '#fbbf24';
        const lineLen = 200;
        const [lx1, ly1] = toCanvas(-lineLen / scale * Math.cos(param), -lineLen / scale * Math.sin(param));
        const [lx2, ly2] = toCanvas(lineLen / scale * Math.cos(param), lineLen / scale * Math.sin(param));
        ctx.beginPath();
        ctx.moveTo(lx1, ly1);
        ctx.lineTo(lx2, ly2);
        ctx.stroke();
        break;
      }
      case 'rotation': {
        // Draw rotation arc
        ctx.strokeStyle = '#fbbf24';
        const [cx, cy] = toCanvas(0, 0);
        ctx.beginPath();
        ctx.arc(cx, cy, 50, 0, -param, param > 0);
        ctx.stroke();
        // Arrow
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        const arrowAngle = -param;
        ctx.arc(cx + 50 * Math.cos(arrowAngle), cy + 50 * Math.sin(arrowAngle), 5, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'translation': {
        // Draw translation vector
        ctx.strokeStyle = '#fbbf24';
        const [ax1, ay1] = toCanvas(0, -4);
        const [ax2, ay2] = toCanvas(param * 2, -4);
        ctx.beginPath();
        ctx.moveTo(ax1, ay1);
        ctx.lineTo(ax2, ay2);
        ctx.stroke();
        // Arrow head
        if (param !== 0) {
          ctx.fillStyle = '#fbbf24';
          ctx.beginPath();
          ctx.arc(ax2, ay2, 5, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }
      case 'glide': {
        // Draw reflection line (x-axis) and translation
        ctx.strokeStyle = '#fbbf24';
        ctx.beginPath();
        ctx.moveTo(0, originY);
        ctx.lineTo(width, originY);
        ctx.stroke();
        // Arrow for translation
        const [ax1, ay1] = toCanvas(0, 4);
        const [ax2, ay2] = toCanvas(param * 2, 4);
        ctx.beginPath();
        ctx.moveTo(ax1, ay1);
        ctx.lineTo(ax2, ay2);
        ctx.stroke();
        break;
      }
    }
    ctx.setLineDash([]);

    // Draw original triangle
    const drawTriangle = (points: Point[], color: string, fillAlpha: number = 0.3) => {
      const canvasPoints = points.map(p => toCanvas(p.x, p.y));
      ctx.fillStyle = color.replace(')', `, ${fillAlpha})`).replace('rgb', 'rgba');
      ctx.beginPath();
      ctx.moveTo(canvasPoints[0][0], canvasPoints[0][1]);
      for (let i = 1; i < canvasPoints.length; i++) {
        ctx.lineTo(canvasPoints[i][0], canvasPoints[i][1]);
      }
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw vertices
      canvasPoints.forEach(([cx, cy]) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Original (pink)
    drawTriangle(triangle, 'rgb(244, 114, 182)');

    // Transformed (cyan)
    const transformedTriangle = triangle.map(applyTransform);
    drawTriangle(transformedTriangle, 'rgb(34, 211, 238)');

    // Labels
    ctx.fillStyle = '#f472b6';
    ctx.font = '12px sans-serif';
    ctx.fillText('Original', 10, 20);
    ctx.fillStyle = '#22d3ee';
    ctx.fillText('Transformed', 10, 40);
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(transformType === 'reflection' ? 'Reflection line' :
                 transformType === 'rotation' ? 'Rotation' :
                 transformType === 'translation' ? 'Translation vector' :
                 'Glide reflection', 10, 60);

  }, [transformType, param]);

  const getParamLabel = (): string => {
    switch (transformType) {
      case 'reflection':
        return `Line angle: ${(param * 180 / Math.PI).toFixed(0)}°`;
      case 'rotation':
        return `Rotation: ${(param * 180 / Math.PI).toFixed(0)}°`;
      case 'translation':
        return `Translation: ${(param * 2).toFixed(1)} units`;
      case 'glide':
        return `Glide: ${(param * 2).toFixed(1)} units`;
    }
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Isometry Transformations</h4>

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
                setParam(0);
              }}
              className="w-full px-2 py-1.5 bg-slate-800 border border-slate-600 rounded text-slate-200 text-sm"
            >
              <option value="reflection">Reflection</option>
              <option value="rotation">Rotation</option>
              <option value="translation">Translation</option>
              <option value="glide">Glide Reflection</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">{getParamLabel()}</label>
            <input
              type="range"
              min={transformType === 'rotation' || transformType === 'reflection' ? -Math.PI : -2}
              max={transformType === 'rotation' || transformType === 'reflection' ? Math.PI : 2}
              step="0.05"
              value={param}
              onChange={(e) => setParam(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <button
            onClick={() => setParam(0)}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Reset
          </button>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-green-400 mb-2">Isometry Properties</h5>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>✓ Preserves distances</li>
              <li>✓ Preserves angles</li>
              <li>{transformType === 'reflection' || transformType === 'glide' ? '✗ Reverses orientation' : '✓ Preserves orientation'}</li>
            </ul>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-pink-400">Pink:</span> Original triangle</p>
            <p><span className="text-cyan-400">Cyan:</span> Transformed</p>
            <p><span className="text-yellow-400">Yellow:</span> Transform axis</p>
          </div>
        </div>
      </div>
    </div>
  );
}
