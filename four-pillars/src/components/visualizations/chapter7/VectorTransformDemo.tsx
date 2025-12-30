import { useState, useRef, useEffect } from 'react';

interface VectorTransformDemoProps {
  className?: string;
}

type TransformType = 'rotation' | 'reflection' | 'scale' | 'shear' | 'custom';

export function VectorTransformDemo({ className = '' }: VectorTransformDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [transformType, setTransformType] = useState<TransformType>('rotation');
  const [angle, setAngle] = useState(45);
  const [scaleX, setScaleX] = useState(1.5);
  const [scaleY, setScaleY] = useState(1.5);
  const [shearK, setShearK] = useState(0.5);
  const [customA, setCustomA] = useState(1);
  const [customB, setCustomB] = useState(0);
  const [customC, setCustomC] = useState(0);
  const [customD, setCustomD] = useState(1);
  const [showGrid, setShowGrid] = useState(true);

  const width = 550;
  const height = 400;

  // Get matrix based on transform type
  const getMatrix = (): [number, number, number, number] => {
    const rad = (angle * Math.PI) / 180;

    switch (transformType) {
      case 'rotation':
        return [Math.cos(rad), -Math.sin(rad), Math.sin(rad), Math.cos(rad)];
      case 'reflection':
        // Reflection across line at angle rad/2 from x-axis
        return [Math.cos(rad), Math.sin(rad), Math.sin(rad), -Math.cos(rad)];
      case 'scale':
        return [scaleX, 0, 0, scaleY];
      case 'shear':
        return [1, shearK, 0, 1];
      case 'custom':
        return [customA, customB, customC, customD];
      default:
        return [1, 0, 0, 1];
    }
  };

  const [a, b, c, d] = getMatrix();
  const determinant = a * d - b * c;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const scale = 50;

    const toCanvasX = (x: number) => cx + x * scale;
    const toCanvasY = (y: number) => cy - y * scale;

    // Apply matrix transform
    const transform = (x: number, y: number): [number, number] => {
      return [a * x + b * y, c * x + d * y];
    };

    // Draw transformed grid
    if (showGrid) {
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = -4; x <= 4; x++) {
        ctx.beginPath();
        for (let y = -4; y <= 4; y += 0.1) {
          const [tx, ty] = transform(x, y);
          if (y === -4) ctx.moveTo(toCanvasX(tx), toCanvasY(ty));
          else ctx.lineTo(toCanvasX(tx), toCanvasY(ty));
        }
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -4; y <= 4; y++) {
        ctx.beginPath();
        for (let x = -4; x <= 4; x += 0.1) {
          const [tx, ty] = transform(x, y);
          if (x === -4) ctx.moveTo(toCanvasX(tx), toCanvasY(ty));
          else ctx.lineTo(toCanvasX(tx), toCanvasY(ty));
        }
        ctx.stroke();
      }
    }

    // Draw original grid
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    for (let x = -4; x <= 4; x++) {
      ctx.beginPath();
      ctx.moveTo(toCanvasX(x), toCanvasY(-4));
      ctx.lineTo(toCanvasX(x), toCanvasY(4));
      ctx.stroke();
    }
    for (let y = -4; y <= 4; y++) {
      ctx.beginPath();
      ctx.moveTo(toCanvasX(-4), toCanvasY(y));
      ctx.lineTo(toCanvasX(4), toCanvasY(y));
      ctx.stroke();
    }

    // Draw original axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(width, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, height);
    ctx.stroke();

    // Draw transformed axes
    ctx.lineWidth = 3;

    // Transformed x-axis (where e1 goes)
    const [e1x, e1y] = transform(3, 0);
    ctx.strokeStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(toCanvasX(e1x), toCanvasY(e1y));
    ctx.stroke();

    // Transformed y-axis (where e2 goes)
    const [e2x, e2y] = transform(0, 3);
    ctx.strokeStyle = '#22c55e';
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(toCanvasX(e2x), toCanvasY(e2y));
    ctx.stroke();

    // Draw basis vectors
    // Original e1
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(toCanvasX(1), cy);
    ctx.stroke();
    ctx.setLineDash([]);

    // Original e2
    ctx.strokeStyle = 'rgba(34, 197, 94, 0.4)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx, toCanvasY(1));
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw transformed e1
    const [te1x, te1y] = transform(1, 0);
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(toCanvasX(te1x), toCanvasY(te1y), 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(`T(e₁)=(${te1x.toFixed(2)}, ${te1y.toFixed(2)})`, toCanvasX(te1x) + 10, toCanvasY(te1y) - 5);

    // Draw transformed e2
    const [te2x, te2y] = transform(0, 1);
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(toCanvasX(te2x), toCanvasY(te2y), 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText(`T(e₂)=(${te2x.toFixed(2)}, ${te2y.toFixed(2)})`, toCanvasX(te2x) + 10, toCanvasY(te2y) - 5);

    // Draw origin
    ctx.fillStyle = '#f1f5f9';
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fill();

    // Draw unit square transformation
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const square = [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]];
    square.forEach((pt, i) => {
      const [x, y] = pt;
      if (i === 0) ctx.moveTo(toCanvasX(x), toCanvasY(y));
      else ctx.lineTo(toCanvasX(x), toCanvasY(y));
    });
    ctx.stroke();

    // Transformed square
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 2;
    ctx.beginPath();
    square.forEach((pt, i) => {
      const [tx, ty] = transform(pt[0], pt[1]);
      if (i === 0) ctx.moveTo(toCanvasX(tx), toCanvasY(ty));
      else ctx.lineTo(toCanvasX(tx), toCanvasY(ty));
    });
    ctx.stroke();

    // Fill transformed square
    ctx.fillStyle = 'rgba(236, 72, 153, 0.2)';
    ctx.beginPath();
    square.forEach((pt, i) => {
      const [tx, ty] = transform(pt[0], pt[1]);
      if (i === 0) ctx.moveTo(toCanvasX(tx), toCanvasY(ty));
      else ctx.lineTo(toCanvasX(tx), toCanvasY(ty));
    });
    ctx.closePath();
    ctx.fill();

    // Matrix display
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Matrix A =', 20, 30);

    ctx.font = '14px monospace';
    ctx.fillText(`⎡ ${a.toFixed(2)}  ${b.toFixed(2)} ⎤`, 100, 25);
    ctx.fillText(`⎣ ${c.toFixed(2)}  ${d.toFixed(2)} ⎦`, 100, 45);

    // Determinant
    ctx.font = '12px sans-serif';
    ctx.fillStyle = Math.abs(determinant - 1) < 0.01 ? '#22c55e' :
                    Math.abs(determinant + 1) < 0.01 ? '#f59e0b' : '#94a3b8';
    ctx.fillText(`det(A) = ${determinant.toFixed(3)}`, 20, 70);

    // Orthogonal check
    const isOrthogonal = Math.abs(a * a + c * c - 1) < 0.01 &&
                        Math.abs(b * b + d * d - 1) < 0.01 &&
                        Math.abs(a * b + c * d) < 0.01;
    if (isOrthogonal) {
      ctx.fillStyle = '#22c55e';
      ctx.fillText('✓ Orthogonal (isometry)', 20, 90);
      ctx.fillText(determinant > 0 ? '→ SO(2) rotation' : '→ O(2)\\SO(2) reflection', 20, 108);
    }

  }, [a, b, c, d, showGrid, transformType, angle, scaleX, scaleY, shearK, determinant]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Matrix Transformations
      </h4>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {(['rotation', 'reflection', 'scale', 'shear', 'custom'] as TransformType[]).map(type => (
          <button
            key={type}
            onClick={() => setTransformType(type)}
            className={`px-3 py-2 text-sm rounded transition ${
              transformType === type
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {transformType === 'rotation' && (
        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">Rotation angle: {angle}°</label>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      {transformType === 'reflection' && (
        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">Line angle: {angle / 2}° (reflects at angle {angle}°)</label>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      {transformType === 'scale' && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Scale X: {scaleX.toFixed(1)}</label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={scaleX}
              onChange={(e) => setScaleX(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Scale Y: {scaleY.toFixed(1)}</label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={scaleY}
              onChange={(e) => setScaleY(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}

      {transformType === 'shear' && (
        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">Shear factor k: {shearK.toFixed(1)}</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.1"
            value={shearK}
            onChange={(e) => setShearK(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      {transformType === 'custom' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">a = {customA.toFixed(1)}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={customA}
              onChange={(e) => setCustomA(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">b = {customB.toFixed(1)}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={customB}
              onChange={(e) => setCustomB(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">c = {customC.toFixed(1)}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={customC}
              onChange={(e) => setCustomC(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">d = {customD.toFixed(1)}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={customD}
              onChange={(e) => setCustomD(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowGrid(!showGrid)}
          className={`px-3 py-2 text-sm rounded transition ${
            showGrid
              ? 'bg-pink-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {showGrid ? 'Hide' : 'Show'} Transformed Grid
        </button>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p className="mb-2"><strong>Key Concepts:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="text-red-400">Red</span> axis shows where e₁ = (1,0) maps to</li>
          <li><span className="text-green-400">Green</span> axis shows where e₂ = (0,1) maps to</li>
          <li><span className="text-blue-400">Blue</span> square → <span className="text-pink-400">pink</span> parallelogram shows area change</li>
          <li>det(A) = area scaling factor (negative = orientation reversed)</li>
          <li><strong>Orthogonal</strong>: AᵀA = I ⟺ isometry (preserves distances)</li>
        </ul>
      </div>
    </div>
  );
}
