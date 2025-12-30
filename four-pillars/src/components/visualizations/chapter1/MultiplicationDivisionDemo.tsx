import { useState, useRef, useEffect } from 'react';

interface MultiplicationDivisionDemoProps {
  className?: string;
}

export function MultiplicationDivisionDemo({ className = '' }: MultiplicationDivisionDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<'multiply' | 'divide'>('multiply');
  const [valueA, setValueA] = useState(2);
  const [valueB, setValueB] = useState(1.5);

  const width = 550;
  const height = 400;
  const origin = { x: 60, y: height - 60 };
  const scale = 80; // pixels per unit

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
    for (let x = origin.x; x <= width; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;

    // Horizontal axis (OA direction)
    ctx.beginPath();
    ctx.moveTo(origin.x - 20, origin.y);
    ctx.lineTo(width - 20, origin.y);
    ctx.stroke();

    // Vertical axis (OU direction) - going up-left at 60 degrees
    const axisLength = 350;
    const angle = Math.PI / 3; // 60 degrees
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(origin.x + axisLength * Math.cos(angle), origin.y - axisLength * Math.sin(angle));
    ctx.stroke();

    // Helper function
    const toScreen = (x: number, y: number) => ({
      x: origin.x + x * scale,
      y: origin.y - y * scale
    });

    const toScreenAngled = (t: number) => ({
      x: origin.x + t * scale * Math.cos(angle),
      y: origin.y - t * scale * Math.sin(angle)
    });

    // Points
    const O = toScreen(0, 0);
    const U = toScreenAngled(1); // Unit point
    const A = toScreen(valueA, 0); // Point A at distance 'a'

    // Draw unit point
    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(U.x, U.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'italic 14px serif';
    ctx.fillText('U (1)', U.x - 10, U.y - 12);

    // Draw origin
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(O.x, O.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText('O', O.x - 15, O.y + 5);

    // Draw point A
    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.arc(A.x, A.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText('A', A.x - 5, A.y + 20);

    // Draw line UA (reference line)
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(U.x, U.y);
    ctx.lineTo(A.x, A.y);
    ctx.stroke();

    if (mode === 'multiply') {
      // Multiplication: extend OU by 'b' to get B₁, then draw parallel to UA
      const B1 = toScreenAngled(1 + valueB);

      // Point B1
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(B1.x, B1.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = 'italic 14px serif';
      ctx.fillText('B₁', B1.x - 25, B1.y - 5);

      // Draw line from O through B1
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(O.x, O.y);
      ctx.lineTo(B1.x, B1.y);
      ctx.stroke();

      // Calculate C: the parallel from B1 to UA meets OA extended
      // By similar triangles: OC/OA = OB1/OU
      // OC = OA * (1 + b) = a * (1 + b)
      const productRatio = 1 + valueB;
      const C = toScreen(valueA * productRatio, 0);

      // Point C (product)
      ctx.fillStyle = '#c084fc';
      ctx.beginPath();
      ctx.arc(C.x, C.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText('C', C.x - 5, C.y + 20);

      // Draw parallel line from B1 to C (dashed)
      ctx.strokeStyle = '#fbbf24';
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(B1.x, B1.y);
      ctx.lineTo(C.x, C.y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw OA extended to C
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(O.x, O.y);
      ctx.lineTo(C.x, C.y);
      ctx.stroke();

      // Labels
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#60a5fa';
      const uMid = { x: (O.x + U.x) / 2, y: (O.y + U.y) / 2 };
      ctx.fillText('1', uMid.x - 15, uMid.y + 5);

      ctx.fillStyle = '#fbbf24';
      const bMid = { x: (U.x + B1.x) / 2, y: (U.y + B1.y) / 2 };
      ctx.fillText(`b=${valueB.toFixed(1)}`, bMid.x - 30, bMid.y);

      ctx.fillStyle = '#34d399';
      const aMid = { x: (O.x + A.x) / 2, y: (O.y + A.y) / 2 };
      ctx.fillText(`a=${valueA.toFixed(1)}`, aMid.x, aMid.y + 20);

      // Result label
      ctx.fillStyle = '#c084fc';
      ctx.font = 'bold 14px sans-serif';
      const result = valueA * valueB;
      ctx.fillText(`AC = ab = ${result.toFixed(2)}`, C.x - 60, C.y + 40);

    } else {
      // Division: extend OA by 'b' to get B₂, then draw parallel to UA
      const B2 = toScreen(valueA + valueB, 0);

      // Point B2
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(B2.x, B2.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = 'italic 14px serif';
      ctx.fillText('B₂', B2.x - 5, B2.y + 20);

      // Calculate D: the parallel from B2 to UA meets OU extended
      // By similar triangles: OD/OU = OB2/OA
      // OD = (a + b) / a = 1 + b/a
      const quotientRatio = (valueA + valueB) / valueA;
      const D = toScreenAngled(quotientRatio);

      // Point D (quotient result on OU direction)
      ctx.fillStyle = '#c084fc';
      ctx.beginPath();
      ctx.arc(D.x, D.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText('D', D.x - 25, D.y - 5);

      // Draw line from O through D
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(O.x, O.y);
      ctx.lineTo(D.x, D.y);
      ctx.stroke();

      // Draw parallel line from B2 to D (dashed)
      ctx.strokeStyle = '#fbbf24';
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(B2.x, B2.y);
      ctx.lineTo(D.x, D.y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw OA extended to B2
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(O.x, O.y);
      ctx.lineTo(B2.x, B2.y);
      ctx.stroke();

      // Labels
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#60a5fa';
      const uMid = { x: (O.x + U.x) / 2, y: (O.y + U.y) / 2 };
      ctx.fillText('1', uMid.x - 15, uMid.y + 5);

      ctx.fillStyle = '#34d399';
      const aMid = { x: (O.x + A.x) / 2, y: (O.y + A.y) / 2 };
      ctx.fillText(`a=${valueA.toFixed(1)}`, aMid.x, aMid.y + 20);

      ctx.fillStyle = '#fbbf24';
      const bMid = { x: (A.x + B2.x) / 2, y: (A.y + B2.y) / 2 };
      ctx.fillText(`b=${valueB.toFixed(1)}`, bMid.x, bMid.y + 20);

      // Result label
      ctx.fillStyle = '#c084fc';
      ctx.font = 'bold 14px sans-serif';
      const result = valueB / valueA;
      ctx.fillText(`UD = b/a = ${result.toFixed(2)}`, D.x + 10, D.y + 5);
    }

    // Draw parallel symbol
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    if (mode === 'multiply') {
      ctx.fillText('∥ (parallel to UA)', width - 150, 30);
    } else {
      ctx.fillText('∥ (parallel to UA)', width - 150, 30);
    }

  }, [mode, valueA, valueB]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Geometric Multiplication and Division
      </h4>

      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setMode('multiply')}
          className={`px-4 py-2 rounded transition ${
            mode === 'multiply'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Multiplication (a × b)
        </button>
        <button
          onClick={() => setMode('divide')}
          className={`px-4 py-2 rounded transition ${
            mode === 'divide'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Division (b ÷ a)
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

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            a = {valueA.toFixed(1)}
          </label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={valueA}
            onChange={(e) => setValueA(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            b = {valueB.toFixed(1)}
          </label>
          <input
            type="range"
            min="0.5"
            max="2.5"
            step="0.1"
            value={valueB}
            onChange={(e) => setValueB(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm">
        {mode === 'multiply' ? (
          <p className="text-slate-300">
            <strong>Multiplication:</strong> The parallel through B₁ to line UA
            meets the extension of OA at C. By similar triangles (Thales theorem),
            the length AC equals the product <span className="text-purple-400">a × b = {(valueA * valueB).toFixed(2)}</span>.
          </p>
        ) : (
          <p className="text-slate-300">
            <strong>Division:</strong> The parallel through B₂ to line UA
            meets the extension of OU at D. By similar triangles (Thales theorem),
            the length UD equals the quotient <span className="text-purple-400">b ÷ a = {(valueB / valueA).toFixed(2)}</span>.
          </p>
        )}
      </div>
    </div>
  );
}
