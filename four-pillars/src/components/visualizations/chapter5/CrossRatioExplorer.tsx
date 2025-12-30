import { useState, useRef, useEffect } from 'react';

interface CrossRatioExplorerProps {
  className?: string;
}

export function CrossRatioExplorer({ className = '' }: CrossRatioExplorerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [p, setP] = useState(0);
  const [q, setQ] = useState(1);
  const [r, setR] = useState(2);
  const [s, setS] = useState(3);
  const [transformType, setTransformType] = useState<'none' | 'translate' | 'scale' | 'reciprocal'>('none');
  const [transformParam, setTransformParam] = useState(1);

  const width = 600;
  const height = 350;

  // Cross-ratio: (r-p)(s-q) / ((r-q)(s-p))
  const crossRatio = (p: number, q: number, r: number, s: number): number => {
    const num = (r - p) * (s - q);
    const denom = (r - q) * (s - p);
    if (Math.abs(denom) < 0.0001) return Infinity;
    return num / denom;
  };

  // Apply transformation
  const transform = (x: number): number => {
    switch (transformType) {
      case 'translate':
        return x + transformParam;
      case 'scale':
        return x * transformParam;
      case 'reciprocal':
        return x === 0 ? Infinity : 1 / x;
      default:
        return x;
    }
  };

  const originalCR = crossRatio(p, q, r, s);

  // Compute transformed points
  const tp = transform(p);
  const tq = transform(q);
  const tr = transform(r);
  const ts = transform(s);
  const transformedCR = crossRatio(tp, tq, tr, ts);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    const lineY1 = 120;
    const lineY2 = 250;
    const cx = width / 2;
    const scale = 40;

    const toCanvasX = (x: number) => {
      if (!isFinite(x)) return x > 0 ? width + 50 : -50;
      return cx + x * scale;
    };

    // Draw number lines
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(30, lineY1);
    ctx.lineTo(width - 30, lineY1);
    ctx.stroke();

    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(30, lineY2);
    ctx.lineTo(width - 30, lineY2);
    ctx.stroke();

    // Labels
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#60a5fa';
    ctx.fillText('Original points', 30, lineY1 - 30);
    ctx.fillStyle = '#34d399';
    ctx.fillText('Transformed points', 30, lineY2 - 30);

    // Draw tick marks
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#64748b';
    for (let x = -5; x <= 5; x++) {
      const px = toCanvasX(x);
      if (px > 30 && px < width - 30) {
        ctx.beginPath();
        ctx.moveTo(px, lineY1 - 5);
        ctx.lineTo(px, lineY1 + 5);
        ctx.stroke();
        ctx.fillText(x.toString(), px - 3, lineY1 + 18);

        ctx.beginPath();
        ctx.moveTo(px, lineY2 - 5);
        ctx.lineTo(px, lineY2 + 5);
        ctx.stroke();
        ctx.fillText(x.toString(), px - 3, lineY2 + 18);
      }
    }

    // Colors for points
    const colors = ['#ef4444', '#f59e0b', '#8b5cf6', '#ec4899'];
    const labels = ['p', 'q', 'r', 's'];
    const origPoints = [p, q, r, s];
    const transPoints = [tp, tq, tr, ts];

    // Draw transformation arrows
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 1;
    origPoints.forEach((orig, i) => {
      const trans = transPoints[i];
      if (isFinite(orig) && isFinite(trans)) {
        const x1 = toCanvasX(orig);
        const x2 = toCanvasX(trans);
        if (x1 > 30 && x1 < width - 30 && x2 > 30 && x2 < width - 30) {
          ctx.beginPath();
          ctx.moveTo(x1, lineY1 + 8);
          ctx.lineTo(x2, lineY2 - 8);
          ctx.stroke();
        }
      }
    });
    ctx.setLineDash([]);

    // Draw original points
    origPoints.forEach((pt, i) => {
      const px = toCanvasX(pt);
      if (px > 20 && px < width - 20) {
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.arc(px, lineY1, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`${labels[i]}=${pt.toFixed(1)}`, px - 15, lineY1 - 15);
      }
    });

    // Draw transformed points
    transPoints.forEach((pt, i) => {
      if (isFinite(pt)) {
        const px = toCanvasX(pt);
        if (px > 20 && px < width - 20) {
          ctx.fillStyle = colors[i];
          ctx.beginPath();
          ctx.arc(px, lineY2, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(`${labels[i]}'=${pt.toFixed(1)}`, px - 15, lineY2 - 15);
        }
      } else {
        // Point at infinity
        ctx.fillStyle = colors[i];
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`${labels[i]}'=∞`, width - 40, lineY2 - 15 + i * 15);
      }
    });

    // Display cross-ratio calculations
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Cross-Ratio Formula:', 30, 35);

    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('(r-p)(s-q) / (r-q)(s-p)', 30, 55);

    // Original cross-ratio
    ctx.fillStyle = '#60a5fa';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(`Original CR = ${isFinite(originalCR) ? originalCR.toFixed(4) : '∞'}`, width - 220, 35);

    // Transformed cross-ratio
    ctx.fillStyle = '#34d399';
    ctx.fillText(`Transformed CR = ${isFinite(transformedCR) ? transformedCR.toFixed(4) : '∞'}`, width - 220, 55);

    // Check if preserved
    const preserved = Math.abs(originalCR - transformedCR) < 0.001 ||
                     (originalCR === transformedCR);
    ctx.fillStyle = preserved ? '#22c55e' : '#ef4444';
    ctx.fillText(preserved ? '✓ Cross-ratio preserved!' : '✗ Cross-ratio changed', width - 220, 75);

    // Show transformation type
    ctx.fillStyle = '#c084fc';
    ctx.font = '12px sans-serif';
    let transDesc = '';
    switch (transformType) {
      case 'none': transDesc = 'No transformation'; break;
      case 'translate': transDesc = `Translation: x → x + ${transformParam.toFixed(1)}`; break;
      case 'scale': transDesc = `Scaling: x → ${transformParam.toFixed(1)}x`; break;
      case 'reciprocal': transDesc = 'Reciprocal: x → 1/x'; break;
    }
    ctx.fillText(transDesc, 30, height - 20);

  }, [p, q, r, s, transformType, transformParam, tp, tq, tr, ts, originalCR, transformedCR]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Cross-Ratio Explorer
      </h4>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <div>
          <label className="block text-sm text-red-400 mb-1">p = {p}</label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.5"
            value={p}
            onChange={(e) => setP(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-amber-400 mb-1">q = {q}</label>
          <input
            type="range"
            min="-3"
            max="4"
            step="0.5"
            value={q}
            onChange={(e) => setQ(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-purple-400 mb-1">r = {r}</label>
          <input
            type="range"
            min="-2"
            max="5"
            step="0.5"
            value={r}
            onChange={(e) => setR(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-pink-400 mb-1">s = {s}</label>
          <input
            type="range"
            min="-1"
            max="6"
            step="0.5"
            value={s}
            onChange={(e) => setS(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          onClick={() => setTransformType('none')}
          className={`px-3 py-2 text-sm rounded transition ${
            transformType === 'none'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          None
        </button>
        <button
          onClick={() => setTransformType('translate')}
          className={`px-3 py-2 text-sm rounded transition ${
            transformType === 'translate'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Translate (x + l)
        </button>
        <button
          onClick={() => setTransformType('scale')}
          className={`px-3 py-2 text-sm rounded transition ${
            transformType === 'scale'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Scale (kx)
        </button>
        <button
          onClick={() => setTransformType('reciprocal')}
          className={`px-3 py-2 text-sm rounded transition ${
            transformType === 'reciprocal'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Reciprocal (1/x)
        </button>
      </div>

      {(transformType === 'translate' || transformType === 'scale') && (
        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">
            {transformType === 'translate' ? `l = ${transformParam.toFixed(1)}` : `k = ${transformParam.toFixed(1)}`}
          </label>
          <input
            type="range"
            min={transformType === 'scale' ? 0.5 : -3}
            max={3}
            step="0.1"
            value={transformParam}
            onChange={(e) => setTransformParam(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={() => { setP(0); setQ(1); setR(2); setS(3); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          Equal Spacing (CR = 4/3)
        </button>
        <button
          onClick={() => { setP(0); setQ(1); setR(3); setS(4); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          Example 2
        </button>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p className="mb-2"><strong>Key Insight:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>The cross-ratio is <span className="text-green-400">invariant under projection</span></li>
          <li>Translation: l cancels in differences</li>
          <li>Scaling: k cancels in ratios</li>
          <li>Reciprocal: algebra shows invariance</li>
          <li>Equally spaced points 0, 1, 2, 3 have cross-ratio <span className="text-amber-400">4/3</span></li>
        </ul>
      </div>
    </div>
  );
}
