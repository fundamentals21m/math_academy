import { useState, useRef, useEffect } from 'react';

interface LinearFractionalDemoProps {
  className?: string;
}

export function LinearFractionalDemo({ className = '' }: LinearFractionalDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [c, setC] = useState(1);
  const [d, setD] = useState(1);
  const [showDecomposition, setShowDecomposition] = useState(false);

  const width = 600;
  const height = 400;

  // Linear fractional function f(x) = (ax + b) / (cx + d)
  const f = (x: number): number | null => {
    const denom = c * x + d;
    if (Math.abs(denom) < 0.001) return null;
    return (a * x + b) / denom;
  };

  const determinant = a * d - b * c;
  const isValid = Math.abs(determinant) > 0.001;

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
    const scaleX = 40;
    const scaleY = 40;

    // Transform coordinates
    const toCanvasX = (x: number) => cx + x * scaleX;
    const toCanvasY = (y: number) => cy - y * scaleY;

    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = -10; x <= 10; x++) {
      ctx.beginPath();
      ctx.moveTo(toCanvasX(x), 0);
      ctx.lineTo(toCanvasX(x), height);
      ctx.stroke();
    }
    for (let y = -5; y <= 5; y++) {
      ctx.beginPath();
      ctx.moveTo(0, toCanvasY(y));
      ctx.lineTo(width, toCanvasY(y));
      ctx.stroke();
    }

    // Draw axes
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

    // Axis labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText('x', width - 15, cy - 10);
    ctx.fillText('f(x)', cx + 10, 15);

    // Vertical asymptote (if c ≠ 0)
    if (Math.abs(c) > 0.001) {
      const asymptote = -d / c;
      if (Math.abs(asymptote) < 10) {
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(toCanvasX(asymptote), 0);
        ctx.lineTo(toCanvasX(asymptote), height);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#ef4444';
        ctx.font = '11px sans-serif';
        ctx.fillText(`x = ${asymptote.toFixed(2)}`, toCanvasX(asymptote) + 5, 30);
        ctx.fillText('(asymptote)', toCanvasX(asymptote) + 5, 45);
      }
    }

    // Horizontal asymptote
    if (Math.abs(c) > 0.001) {
      const hAsymptote = a / c;
      if (Math.abs(hAsymptote) < 5) {
        ctx.strokeStyle = 'rgba(34, 197, 94, 0.5)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(0, toCanvasY(hAsymptote));
        ctx.lineTo(width, toCanvasY(hAsymptote));
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#22c55e';
        ctx.font = '11px sans-serif';
        ctx.fillText(`y = ${hAsymptote.toFixed(2)}`, 10, toCanvasY(hAsymptote) - 5);
      }
    }

    // Draw the function
    if (isValid) {
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 3;
      ctx.beginPath();

      let started = false;
      for (let px = 0; px < width; px++) {
        const x = (px - cx) / scaleX;
        const y = f(x);

        if (y !== null && Math.abs(y) < 10) {
          const canvasY = toCanvasY(y);
          if (!started) {
            ctx.moveTo(px, canvasY);
            started = true;
          } else {
            // Check for discontinuity (near asymptote)
            const prevX = ((px - 1) - cx) / scaleX;
            const prevY = f(prevX);
            if (prevY !== null && Math.abs(y - prevY) > 5) {
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(px, canvasY);
            } else {
              ctx.lineTo(px, canvasY);
            }
          }
        } else if (started) {
          ctx.stroke();
          ctx.beginPath();
          started = false;
        }
      }
      ctx.stroke();

      // Draw identity line for comparison
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.4)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(toCanvasX(-10), toCanvasY(-10));
      ctx.lineTo(toCanvasX(10), toCanvasY(10));
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Show sample mappings
    const samplePoints = [-2, -1, 0, 1, 2, 3];
    samplePoints.forEach(x => {
      const y = f(x);
      if (y !== null && Math.abs(y) < 5 && Math.abs(x) < 8) {
        // Draw point on x-axis
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(toCanvasX(x), toCanvasY(0), 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw arrow to output
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.6)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(toCanvasX(x), toCanvasY(0));
        ctx.lineTo(toCanvasX(x), toCanvasY(y));
        ctx.lineTo(toCanvasX(0), toCanvasY(y));
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw output point
        ctx.fillStyle = '#ec4899';
        ctx.beginPath();
        ctx.arc(toCanvasX(x), toCanvasY(y), 5, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Formula display
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(`f(x) = (${a}x + ${b}) / (${c}x + ${d})`, 20, 30);

    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(`det = ad - bc = ${determinant.toFixed(2)}`, 20, 50);
    ctx.fillStyle = isValid ? '#22c55e' : '#ef4444';
    ctx.fillText(isValid ? '✓ Valid (det ≠ 0)' : '✗ Invalid (det = 0)', 20, 70);

  }, [a, b, c, d, isValid, determinant]);

  // Compute decomposition steps
  const getDecomposition = () => {
    if (Math.abs(c) < 0.001) {
      return [
        { step: 1, desc: `Multiply by ${(a/d).toFixed(2)}`, formula: `x → ${(a/d).toFixed(2)}x` },
        { step: 2, desc: `Add ${(b/d).toFixed(2)}`, formula: `x → x + ${(b/d).toFixed(2)}` }
      ];
    }
    return [
      { step: 1, desc: `Multiply by c = ${c}`, formula: `x → ${c}x` },
      { step: 2, desc: `Add d = ${d}`, formula: `x → x + ${d}` },
      { step: 3, desc: 'Multiply by c again', formula: `x → ${c}x` },
      { step: 4, desc: 'Reciprocate', formula: `x → 1/x` },
      { step: 5, desc: `Multiply by bc-ad = ${(b*c - a*d).toFixed(2)}`, formula: `x → ${(b*c - a*d).toFixed(2)}x` },
      { step: 6, desc: `Add a/c = ${(a/c).toFixed(2)}`, formula: `x → x + ${(a/c).toFixed(2)}` }
    ];
  };

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Linear Fractional Functions on ℝP¹
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
          <label className="block text-sm text-slate-400 mb-1">a = {a}</label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.5"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">b = {b}</label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.5"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">c = {c}</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.5"
            value={c}
            onChange={(e) => setC(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">d = {d}</label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.5"
            value={d}
            onChange={(e) => setD(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={() => { setA(1); setB(0); setC(0); setD(1); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          Identity
        </button>
        <button
          onClick={() => { setA(0); setB(1); setC(1); setD(0); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          Reciprocal (1/x)
        </button>
        <button
          onClick={() => { setA(2); setB(1); setC(1); setD(1); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          Example
        </button>
        <button
          onClick={() => setShowDecomposition(!showDecomposition)}
          className={`px-3 py-2 text-sm rounded transition ${
            showDecomposition
              ? 'bg-purple-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {showDecomposition ? 'Hide' : 'Show'} Decomposition
        </button>
      </div>

      {showDecomposition && isValid && (
        <div className="bg-slate-900/50 p-3 rounded mb-4">
          <p className="text-sm text-purple-400 font-semibold mb-2">Decomposition into generators:</p>
          <div className="space-y-1 text-sm text-slate-300">
            {getDecomposition().map((s, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-purple-400">{s.step}.</span>
                <span>{s.desc}:</span>
                <span className="text-amber-400">{s.formula}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p className="mb-2"><strong>Key Properties:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>f(x) = (ax + b)/(cx + d) is valid when <span className="text-green-400">ad - bc ≠ 0</span></li>
          <li><span className="text-red-400">Vertical asymptote</span> at x = -d/c (where denominator = 0)</li>
          <li>f maps ∞ → a/c and -d/c → ∞ (works on ℝ ∪ {'{'}&infin;{'}'})</li>
          <li>Every linear fractional function is a composition of <span className="text-amber-400">translations, scalings, and reciprocation</span></li>
        </ul>
      </div>
    </div>
  );
}
