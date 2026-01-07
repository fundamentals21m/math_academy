import { useState, useRef, useEffect } from 'react';

type IsometryType = 'hyperbolic' | 'elliptic' | 'parabolic';

interface Point {
  x: number;
  y: number;
}

export function HyperbolicIsometriesDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isometryType, setIsometryType] = useState<IsometryType>('hyperbolic');
  const [param, setParam] = useState(0);
  const [showPath, setShowPath] = useState(true);

  const width = 500;
  const height = 380;
  const scale = 45;
  const originX = width / 2;
  const originY = height - 50;

  const toCanvas = (x: number, y: number): [number, number] => {
    return [originX + x * scale, originY - y * scale];
  };

  // Apply hyperbolic isometry to a point
  const applyIsometry = (p: Point, t: number): Point | null => {
    if (p.y <= 0) return null;

    switch (isometryType) {
      case 'hyperbolic': {
        // Translation along imaginary axis: z → e^t * z
        const k = Math.exp(t);
        return { x: p.x * k, y: p.y * k };
      }

      case 'elliptic': {
        // Rotation about i: more complex formula
        // Using the formula for rotation by angle θ about i
        const theta = t;
        const cosT = Math.cos(theta);
        const sinT = Math.sin(theta);

        // z' = (z*cos(θ/2) - sin(θ/2)) / (z*sin(θ/2) + cos(θ/2))
        // Simplified for rotation about i
        const z = { re: p.x, im: p.y };
        const num = {
          re: z.re * cosT - sinT,
          im: z.im * cosT,
        };
        const den = {
          re: z.re * sinT + cosT,
          im: z.im * sinT,
        };
        const denomSq = den.re * den.re + den.im * den.im;
        if (denomSq < 0.001) return null;

        return {
          x: (num.re * den.re + num.im * den.im) / denomSq,
          y: (num.im * den.re - num.re * den.im) / denomSq,
        };
      }

      case 'parabolic': {
        // z → z + t (horizontal translation)
        return { x: p.x + t, y: p.y };
      }

      default:
        return p;
    }
  };

  // Generate orbit of a point
  const generateOrbit = (start: Point, steps: number): Point[] => {
    const orbit: Point[] = [];
    const stepSize = isometryType === 'elliptic' ? Math.PI * 2 / steps : 2 / steps;

    for (let i = 0; i <= steps; i++) {
      let t: number;
      switch (isometryType) {
        case 'hyperbolic':
          t = (i / steps - 0.5) * 3; // Range -1.5 to 1.5
          break;
        case 'elliptic':
          t = i * stepSize;
          break;
        case 'parabolic':
          t = (i / steps - 0.5) * 6; // Range -3 to 3
          break;
        default:
          t = 0;
      }

      const p = applyIsometry(start, t);
      if (p && p.y > 0) {
        orbit.push(p);
      }
    }

    return orbit;
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
    for (let x = -5; x <= 5; x++) {
      const [cx] = toCanvas(x, 0);
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, originY);
      ctx.stroke();
    }
    for (let y = 1; y <= 7; y++) {
      const [, cy] = toCanvas(0, y);
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();
    }

    // Draw x-axis
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();

    // Draw fixed points / axis
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1.5;

    switch (isometryType) {
      case 'hyperbolic': {
        // Fixed points at 0 and ∞, axis is imaginary axis
        ctx.strokeStyle = '#fbbf24';
        const [axisX] = toCanvas(0, 0);
        ctx.beginPath();
        ctx.moveTo(axisX, originY);
        ctx.lineTo(axisX, 0);
        ctx.stroke();
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(axisX, originY, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = '11px sans-serif';
        ctx.fillText('Fixed: 0', axisX + 10, originY - 5);
        ctx.fillText('Fixed: ∞', axisX + 10, 15);
        break;
      }

      case 'elliptic': {
        // Fixed point at i
        ctx.strokeStyle = '#fbbf24';
        const [fx, fy] = toCanvas(0, 1);
        ctx.beginPath();
        ctx.arc(fx, fy, 8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = '#fbbf24';
        ctx.font = '11px sans-serif';
        ctx.fillText('Center: i', fx + 12, fy);
        break;
      }

      case 'parabolic':
        // Fixed point at ∞ only
        ctx.strokeStyle = '#fbbf24';
        ctx.fillStyle = '#fbbf24';
        ctx.font = '11px sans-serif';
        ctx.fillText('Fixed: ∞ only', 10, 15);
        // Draw horocycles (horizontal lines)
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.3)';
        for (let y = 1; y <= 4; y++) {
          const [, hy] = toCanvas(0, y);
          ctx.beginPath();
          ctx.moveTo(0, hy);
          ctx.lineTo(width, hy);
          ctx.stroke();
        }
        break;
    }
    ctx.setLineDash([]);

    // Sample points and their orbits
    const samplePoints: Point[] = [
      { x: 1, y: 1.5 },
      { x: -1.5, y: 2 },
      { x: 0.5, y: 3 },
      { x: -0.5, y: 1 },
    ];

    const colors = ['#f472b6', '#22d3ee', '#a78bfa', '#34d399'];

    samplePoints.forEach((startPoint, idx) => {
      // Draw orbit path
      if (showPath) {
        const orbit = generateOrbit(startPoint, 100);
        if (orbit.length > 1) {
          ctx.strokeStyle = colors[idx];
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = 0.6;
          ctx.beginPath();
          orbit.forEach((p, i) => {
            const [cx, cy] = toCanvas(p.x, p.y);
            if (i === 0) ctx.moveTo(cx, cy);
            else ctx.lineTo(cx, cy);
          });
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      // Draw original point (faded)
      const [ox, oy] = toCanvas(startPoint.x, startPoint.y);
      ctx.fillStyle = colors[idx];
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.arc(ox, oy, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      // Draw transformed point
      const transformed = applyIsometry(startPoint, param);
      if (transformed && transformed.y > 0) {
        const [tx, ty] = toCanvas(transformed.x, transformed.y);
        ctx.fillStyle = colors[idx];
        ctx.beginPath();
        ctx.arc(tx, ty, 7, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Labels
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px sans-serif';

    const typeLabels = {
      hyperbolic: 'Hyperbolic Translation',
      elliptic: 'Elliptic Rotation',
      parabolic: 'Parabolic (Limit Rotation)',
    };
    ctx.fillText(typeLabels[isometryType], 10, height - 15);

  }, [isometryType, param, showPath]);

  const getParamLabel = () => {
    switch (isometryType) {
      case 'hyperbolic':
        return `Scale: e^${param.toFixed(2)} = ${Math.exp(param).toFixed(2)}`;
      case 'elliptic':
        return `Angle: ${(param * 180 / Math.PI).toFixed(0)}°`;
      case 'parabolic':
        return `Shift: ${param.toFixed(2)}`;
    }
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Hyperbolic Isometries Demo</h4>

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
            <label className="block text-sm text-slate-300 mb-1">Isometry Type</label>
            <select
              value={isometryType}
              onChange={(e) => {
                setIsometryType(e.target.value as IsometryType);
                setParam(0);
              }}
              className="w-full px-2 py-1.5 bg-slate-800 border border-slate-600 rounded text-slate-200 text-sm"
            >
              <option value="hyperbolic">Hyperbolic (2 fixed pts on boundary)</option>
              <option value="elliptic">Elliptic (1 fixed pt interior)</option>
              <option value="parabolic">Parabolic (1 fixed pt on boundary)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">{getParamLabel()}</label>
            <input
              type="range"
              min={isometryType === 'elliptic' ? 0 : -2}
              max={isometryType === 'elliptic' ? Math.PI * 2 : 2}
              step="0.05"
              value={param}
              onChange={(e) => setParam(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showPath}
              onChange={(e) => setShowPath(e.target.checked)}
              className="rounded"
            />
            Show orbit paths
          </label>

          <button
            onClick={() => setParam(0)}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Reset Parameter
          </button>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded space-y-1">
            <p><strong className="text-yellow-400">Yellow:</strong> Fixed points/axis</p>
            <p><strong className="text-pink-400">Colored dots:</strong> Sample points</p>
            <p><strong>Faded:</strong> Original position</p>
            <p><strong>Solid:</strong> Current position</p>
          </div>
        </div>
      </div>
    </div>
  );
}
