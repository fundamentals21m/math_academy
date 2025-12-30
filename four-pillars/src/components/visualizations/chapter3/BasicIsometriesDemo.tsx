import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

type IsometryType = 'translation' | 'rotation' | 'reflection' | 'glide';

export function BasicIsometriesDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isometryType, setIsometryType] = useState<IsometryType>('translation');
  const [tx, setTx] = useState(2);
  const [ty, setTy] = useState(1);
  const [rotAngle, setRotAngle] = useState(45);
  const [showOriginal, setShowOriginal] = useState(true);

  const width = 500;
  const height = 400;
  const centerX = 250;
  const centerY = 200;
  const scale = 30;

  // Original triangle vertices
  const originalTriangle: Point[] = [
    { x: -2, y: 0 },
    { x: 0, y: 3 },
    { x: 1, y: 0 },
  ];

  const toCanvas = (p: Point): Point => ({
    x: centerX + p.x * scale,
    y: centerY - p.y * scale,
  });

  const applyIsometry = (p: Point): Point => {
    switch (isometryType) {
      case 'translation':
        return { x: p.x + tx, y: p.y + ty };
      case 'rotation': {
        const rad = (rotAngle * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        return {
          x: p.x * cos - p.y * sin,
          y: p.x * sin + p.y * cos,
        };
      }
      case 'reflection':
        return { x: p.x, y: -p.y };
      case 'glide':
        return { x: p.x + tx, y: -p.y };
      default:
        return p;
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
    for (let i = -8; i <= 8; i++) {
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

    // Draw origin
    ctx.fillStyle = '#94a3b8';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '12px sans-serif';
    ctx.fillText('O', centerX + 8, centerY + 15);

    // For reflection/glide, show the reflection line
    if (isometryType === 'reflection' || isometryType === 'glide') {
      ctx.strokeStyle = '#c084fc';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#c084fc';
      ctx.font = '11px sans-serif';
      ctx.fillText('reflection line (y = 0)', 10, centerY - 10);
    }

    // Draw original triangle
    if (showOriginal) {
      ctx.strokeStyle = '#60a5fa';
      ctx.fillStyle = 'rgba(96, 165, 250, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const first = toCanvas(originalTriangle[0]);
      ctx.moveTo(first.x, first.y);
      for (let i = 1; i < originalTriangle.length; i++) {
        const p = toCanvas(originalTriangle[i]);
        ctx.lineTo(p.x, p.y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Mark vertices
      originalTriangle.forEach((p, i) => {
        const cp = toCanvas(p);
        ctx.fillStyle = '#60a5fa';
        ctx.beginPath();
        ctx.arc(cp.x, cp.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '11px sans-serif';
        ctx.fillText(String.fromCharCode(65 + i), cp.x + 6, cp.y - 6);
      });
    }

    // Draw transformed triangle
    const transformedTriangle = originalTriangle.map(applyIsometry);
    ctx.strokeStyle = '#f472b6';
    ctx.fillStyle = 'rgba(244, 114, 182, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const firstT = toCanvas(transformedTriangle[0]);
    ctx.moveTo(firstT.x, firstT.y);
    for (let i = 1; i < transformedTriangle.length; i++) {
      const p = toCanvas(transformedTriangle[i]);
      ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Mark transformed vertices
    transformedTriangle.forEach((p, i) => {
      const cp = toCanvas(p);
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(cp.x, cp.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '11px sans-serif';
      ctx.fillText(String.fromCharCode(65 + i) + "'", cp.x + 6, cp.y - 6);
    });

    // For rotation, show rotation center and angle
    if (isometryType === 'rotation') {
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, -rotAngle * Math.PI / 180, true);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText(`${rotAngle}°`, centerX + 45, centerY - 10);
    }

    // For translation/glide, show translation vector
    if (isometryType === 'translation' || isometryType === 'glide') {
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + tx * scale, isometryType === 'glide' ? centerY : centerY - ty * scale);
      ctx.stroke();

      // Arrow head
      const endX = centerX + tx * scale;
      const endY = isometryType === 'glide' ? centerY : centerY - ty * scale;
      const angle = Math.atan2(centerY - endY, endX - centerX);
      ctx.beginPath();
      ctx.moveTo(endX, endY);
      ctx.lineTo(endX - 10 * Math.cos(angle - 0.3), endY + 10 * Math.sin(angle - 0.3));
      ctx.lineTo(endX - 10 * Math.cos(angle + 0.3), endY + 10 * Math.sin(angle + 0.3));
      ctx.closePath();
      ctx.fillStyle = '#34d399';
      ctx.fill();
    }

    // Type label
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(10, 10, 180, 45);
    ctx.strokeStyle = '#334155';
    ctx.strokeRect(10, 10, 180, 45);
    ctx.fillStyle = '#f472b6';
    ctx.font = 'bold 14px sans-serif';
    const labels: Record<IsometryType, string> = {
      translation: 'Translation',
      rotation: 'Rotation',
      reflection: 'Reflection',
      glide: 'Glide Reflection',
    };
    ctx.fillText(labels[isometryType], 20, 30);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    const formulas: Record<IsometryType, string> = {
      translation: `(x, y) → (x + ${tx}, y + ${ty})`,
      rotation: `(x, y) → (x cos θ - y sin θ, ...)`,
      reflection: '(x, y) → (x, -y)',
      glide: `(x, y) → (x + ${tx}, -y)`,
    };
    ctx.fillText(formulas[isometryType], 20, 48);

  }, [isometryType, tx, ty, rotAngle, showOriginal]);

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Isometries of the Plane</h4>

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
            <label className="text-sm text-slate-300 font-medium">Isometry Type:</label>
            <div className="grid grid-cols-2 gap-2">
              {(['translation', 'rotation', 'reflection', 'glide'] as IsometryType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setIsometryType(type)}
                  className={`px-2 py-1.5 text-xs rounded ${
                    isometryType === type
                      ? 'bg-pink-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {(isometryType === 'translation' || isometryType === 'glide') && (
            <div className="space-y-2">
              <label className="text-sm text-slate-300">
                Translation: ({tx}, {isometryType === 'glide' ? 0 : ty})
              </label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={tx}
                onChange={(e) => setTx(parseFloat(e.target.value))}
                className="w-full"
              />
              {isometryType === 'translation' && (
                <input
                  type="range"
                  min="-4"
                  max="4"
                  step="0.5"
                  value={ty}
                  onChange={(e) => setTy(parseFloat(e.target.value))}
                  className="w-full"
                />
              )}
            </div>
          )}

          {isometryType === 'rotation' && (
            <div className="space-y-2">
              <label className="text-sm text-slate-300">Angle: {rotAngle}°</label>
              <input
                type="range"
                min="0"
                max="360"
                step="15"
                value={rotAngle}
                onChange={(e) => setRotAngle(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          )}

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showOriginal}
              onChange={(e) => setShowOriginal(e.target.checked)}
              className="rounded"
            />
            Show original
          </label>

          <div className="p-3 bg-slate-800 rounded text-xs">
            <p className="text-slate-300 mb-2">
              <strong className="text-blue-400">Isometries</strong> preserve distances between points.
            </p>
            <ul className="text-slate-400 space-y-1">
              <li>• Translation: slides all points</li>
              <li>• Rotation: turns about a center</li>
              <li>• Reflection: flips across a line</li>
              <li>• Glide: reflect then translate</li>
            </ul>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-blue-400">Blue:</span> Original △ABC</p>
            <p><span className="text-pink-400">Pink:</span> Image △A'B'C'</p>
          </div>
        </div>
      </div>
    </div>
  );
}
