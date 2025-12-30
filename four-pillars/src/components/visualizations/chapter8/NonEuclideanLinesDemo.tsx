import { useState, useRef, useEffect } from 'react';

interface NonEuclideanLinesDemoProps {
  className?: string;
}

type TransformType = 'translate' | 'scale' | 'invert' | 'custom';

export function NonEuclideanLinesDemo({ className = '' }: NonEuclideanLinesDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [transformType, setTransformType] = useState<TransformType>('translate');
  const [translateAmount, setTranslateAmount] = useState(2);
  const [scaleAmount, setScaleAmount] = useState(2);
  const [customA, setCustomA] = useState(1);
  const [customB, setCustomB] = useState(0);
  const [customC, setCustomC] = useState(0);
  const [customD, setCustomD] = useState(1);

  const width = 600;
  const height = 350;

  // Complex number operations
  type Complex = [number, number]; // [real, imag]

  const cAdd = (z1: Complex, z2: Complex): Complex => [z1[0] + z2[0], z1[1] + z2[1]];
  const cMul = (z1: Complex, z2: Complex): Complex => [
    z1[0] * z2[0] - z1[1] * z2[1],
    z1[0] * z2[1] + z1[1] * z2[0]
  ];
  const cDiv = (z1: Complex, z2: Complex): Complex | null => {
    const denom = z2[0] * z2[0] + z2[1] * z2[1];
    if (denom < 0.0001) return null;
    return [(z1[0] * z2[0] + z1[1] * z2[1]) / denom, (z1[1] * z2[0] - z1[0] * z2[1]) / denom];
  };

  // Apply Möbius transformation f(z) = (az + b) / (cz + d)
  const applyMobius = (z: Complex): Complex | null => {
    let a: Complex, b: Complex, c: Complex, d: Complex;

    switch (transformType) {
      case 'translate':
        a = [1, 0]; b = [translateAmount, 0]; c = [0, 0]; d = [1, 0];
        break;
      case 'scale':
        a = [scaleAmount, 0]; b = [0, 0]; c = [0, 0]; d = [1, 0];
        break;
      case 'invert':
        a = [0, 0]; b = [1, 0]; c = [1, 0]; d = [0, 0];
        break;
      case 'custom':
        a = [customA, 0]; b = [customB, 0]; c = [customC, 0]; d = [customD, 0];
        break;
    }

    const num = cAdd(cMul(a, z), b);
    const denom = cAdd(cMul(c, z), d);
    return cDiv(num, denom);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const scale = 60;
    const baselineY = height - 50;

    const toCanvasX = (x: number) => cx + x * scale;
    const toCanvasY = (y: number) => baselineY - y * scale;

    // Draw real axis (boundary)
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, baselineY);
    ctx.lineTo(width, baselineY);
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText('ℝ (boundary)', 10, baselineY + 20);

    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = -5; x <= 5; x++) {
      ctx.beginPath();
      ctx.moveTo(toCanvasX(x), 0);
      ctx.lineTo(toCanvasX(x), baselineY);
      ctx.stroke();
    }
    for (let y = 0; y <= 5; y++) {
      ctx.beginPath();
      ctx.moveTo(0, toCanvasY(y));
      ctx.lineTo(width, toCanvasY(y));
      ctx.stroke();
    }

    // Define original non-Euclidean lines
    const lines: { type: 'vertical' | 'semicircle'; x?: number; center?: number; radius?: number; color: string }[] = [
      { type: 'vertical', x: 0, color: '#60a5fa' },
      { type: 'semicircle', center: 0, radius: 1, color: '#22c55e' },
      { type: 'vertical', x: 1.5, color: '#f59e0b' },
      { type: 'semicircle', center: 2, radius: 1.5, color: '#ec4899' }
    ];

    // Draw original lines
    lines.forEach(line => {
      ctx.strokeStyle = line.color;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);

      if (line.type === 'vertical' && line.x !== undefined) {
        ctx.beginPath();
        ctx.moveTo(toCanvasX(line.x), baselineY);
        ctx.lineTo(toCanvasX(line.x), 10);
        ctx.stroke();
      } else if (line.type === 'semicircle' && line.center !== undefined && line.radius !== undefined) {
        ctx.beginPath();
        ctx.arc(toCanvasX(line.center), baselineY, line.radius * scale, Math.PI, 0);
        ctx.stroke();
      }
    });
    ctx.setLineDash([]);

    // Draw transformed lines
    lines.forEach(line => {
      ctx.strokeStyle = line.color;
      ctx.lineWidth = 3;

      if (line.type === 'vertical' && line.x !== undefined) {
        // Sample points along vertical line
        ctx.beginPath();
        let started = false;
        for (let y = 0.05; y <= 5; y += 0.1) {
          const z: Complex = [line.x, y];
          const transformed = applyMobius(z);
          if (transformed && transformed[1] > 0 && Math.abs(transformed[0]) < 8 && transformed[1] < 8) {
            const px = toCanvasX(transformed[0]);
            const py = toCanvasY(transformed[1]);
            if (!started) {
              ctx.moveTo(px, py);
              started = true;
            } else {
              ctx.lineTo(px, py);
            }
          }
        }
        ctx.stroke();
      } else if (line.type === 'semicircle' && line.center !== undefined && line.radius !== undefined) {
        // Sample points along semicircle
        ctx.beginPath();
        let started = false;
        for (let theta = 0.05; theta <= Math.PI - 0.05; theta += 0.05) {
          const x = line.center + line.radius * Math.cos(theta);
          const y = line.radius * Math.sin(theta);
          const z: Complex = [x, y];
          const transformed = applyMobius(z);
          if (transformed && transformed[1] > 0 && Math.abs(transformed[0]) < 8 && transformed[1] < 8) {
            const px = toCanvasX(transformed[0]);
            const py = toCanvasY(transformed[1]);
            if (!started) {
              ctx.moveTo(px, py);
              started = true;
            } else {
              ctx.lineTo(px, py);
            }
          }
        }
        ctx.stroke();
      }
    });

    // Indicator showing orthogonality
    ctx.fillStyle = '#c084fc';
    ctx.font = '11px sans-serif';
    ctx.fillText('All lines meet boundary at 90°', 10, 30);

    // Transformation info
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 14px sans-serif';
    let formula = '';
    switch (transformType) {
      case 'translate': formula = `f(z) = z + ${translateAmount}`; break;
      case 'scale': formula = `f(z) = ${scaleAmount}z`; break;
      case 'invert': formula = 'f(z) = 1/z'; break;
      case 'custom': formula = `f(z) = (${customA}z + ${customB})/(${customC}z + ${customD})`; break;
    }
    ctx.fillText(formula, width - 200, 30);

    // Legend
    ctx.font = '11px sans-serif';
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = '#60a5fa';
    ctx.beginPath();
    ctx.moveTo(width - 150, 55);
    ctx.lineTo(width - 110, 55);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width - 150, 75);
    ctx.lineTo(width - 110, 75);
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Original', width - 100, 58);
    ctx.fillText('Transformed', width - 100, 78);

  }, [transformType, translateAmount, scaleAmount, customA, customB, customC, customD]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Möbius Transformations Preserve Non-Euclidean Lines
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
        {(['translate', 'scale', 'invert', 'custom'] as TransformType[]).map(type => (
          <button
            key={type}
            onClick={() => setTransformType(type)}
            className={`px-3 py-2 text-sm rounded transition ${
              transformType === type
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {type === 'translate' ? 'Translate (z+l)' :
             type === 'scale' ? 'Scale (kz)' :
             type === 'invert' ? 'Invert (1/z)' : 'Custom'}
          </button>
        ))}
      </div>

      {transformType === 'translate' && (
        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">Translation: l = {translateAmount}</label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.5"
            value={translateAmount}
            onChange={(e) => setTranslateAmount(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      {transformType === 'scale' && (
        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">Scale factor: k = {scaleAmount}</label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.25"
            value={scaleAmount}
            onChange={(e) => setScaleAmount(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      {transformType === 'custom' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">a = {customA}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.5"
              value={customA}
              onChange={(e) => setCustomA(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">b = {customB}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.5"
              value={customB}
              onChange={(e) => setCustomB(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">c = {customC}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.5"
              value={customC}
              onChange={(e) => setCustomC(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">d = {customD}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.5"
              value={customD}
              onChange={(e) => setCustomD(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p className="mb-2"><strong>Key Points:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Non-Euclidean lines are <span className="text-purple-400">vertical rays</span> or <span className="text-purple-400">semicircles</span> meeting ℝ at 90°</li>
          <li>Möbius transformations preserve <span className="text-green-400">generalized circles</span> (lines and circles)</li>
          <li>Since they preserve <span className="text-amber-400">angles</span>, the 90° property is maintained</li>
          <li>Vertical lines may become semicircles (and vice versa) but stay non-Euclidean lines</li>
        </ul>
      </div>
    </div>
  );
}
