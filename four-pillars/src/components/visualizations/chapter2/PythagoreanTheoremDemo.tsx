import { useState, useRef, useEffect } from 'react';

type ProofType = 'squares' | 'rearrangement' | 'similar';

export function PythagoreanTheoremDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [proofType, setProofType] = useState<ProofType>('squares');
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [animProgress, _setAnimProgress] = useState(0);

  const width = 520;
  const height = 400;
  const scale = 30;

  const c = Math.sqrt(a * a + b * b);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    const offsetX = 50;
    const offsetY = height - 80;

    const drawTriangle = (x: number, y: number, sideA: number, sideB: number, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + sideA * scale, y);
      ctx.lineTo(x, y - sideB * scale);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    switch (proofType) {
      case 'squares': {
        // Classic proof with squares on each side
        const triX = offsetX + 100;
        const triY = offsetY - 50;

        // Draw the main triangle
        drawTriangle(triX, triY, a, b, 'rgba(244, 114, 182, 0.5)');

        // Square on side a
        ctx.fillStyle = 'rgba(167, 139, 250, 0.4)';
        ctx.fillRect(triX, triY, a * scale, a * scale);
        ctx.strokeStyle = '#a78bfa';
        ctx.lineWidth = 2;
        ctx.strokeRect(triX, triY, a * scale, a * scale);

        // Square on side b
        ctx.fillStyle = 'rgba(34, 211, 238, 0.4)';
        ctx.save();
        ctx.translate(triX, triY - b * scale);
        ctx.fillRect(-b * scale, 0, b * scale, b * scale);
        ctx.strokeStyle = '#22d3ee';
        ctx.strokeRect(-b * scale, 0, b * scale, b * scale);
        ctx.restore();

        // Square on hypotenuse c
        const angle = Math.atan2(b, a);
        ctx.save();
        ctx.translate(triX + a * scale, triY);
        ctx.rotate(-angle);
        ctx.fillStyle = 'rgba(52, 211, 153, 0.4)';
        ctx.fillRect(0, 0, c * scale, c * scale);
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, c * scale, c * scale);
        ctx.restore();

        // Labels
        ctx.fillStyle = '#a78bfa';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(`a² = ${(a * a).toFixed(0)}`, triX + (a * scale) / 2 - 15, triY + (a * scale) / 2 + 5);

        ctx.fillStyle = '#22d3ee';
        ctx.fillText(`b² = ${(b * b).toFixed(0)}`, triX - b * scale + 10, triY - (b * scale) / 2);

        ctx.fillStyle = '#34d399';
        const cLabelX = triX + a * scale + 30;
        const cLabelY = triY - 30;
        ctx.fillText(`c² = ${(c * c).toFixed(1)}`, cLabelX, cLabelY);

        // Formula
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '16px sans-serif';
        ctx.fillText(`a² + b² = ${a * a} + ${b * b} = ${a * a + b * b}`, 20, 30);
        ctx.fillText(`c² = ${(c * c).toFixed(1)}`, 20, 55);
        ctx.fillStyle = '#34d399';
        ctx.fillText('✓ Equal!', 150, 55);
        break;
      }

      case 'rearrangement': {
        // Two square arrangements proof
        const sqSize = a + b;
        const sqPixels = sqSize * scale * 0.6;
        const gap = 30;

        // Left square: (a+b)² with 4 triangles and inner c² square
        const lx = 40;
        const ly = 60;

        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        ctx.strokeRect(lx, ly, sqPixels, sqPixels);

        // Scale factors for this visualization
        const s = sqPixels / sqSize;

        // Four triangles in left square
        ctx.fillStyle = 'rgba(244, 114, 182, 0.5)';
        // Top-left
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.lineTo(lx + a * s, ly);
        ctx.lineTo(lx, ly + b * s);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Top-right
        ctx.beginPath();
        ctx.moveTo(lx + sqPixels, ly);
        ctx.lineTo(lx + sqPixels, ly + a * s);
        ctx.lineTo(lx + a * s, ly);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(lx + sqPixels, ly + sqPixels);
        ctx.lineTo(lx + b * s, ly + sqPixels);
        ctx.lineTo(lx + sqPixels, ly + a * s);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Bottom-left
        ctx.beginPath();
        ctx.moveTo(lx, ly + sqPixels);
        ctx.lineTo(lx, ly + b * s);
        ctx.lineTo(lx + b * s, ly + sqPixels);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Inner square (c²)
        ctx.fillStyle = 'rgba(52, 211, 153, 0.4)';
        ctx.beginPath();
        ctx.moveTo(lx + a * s, ly);
        ctx.lineTo(lx + sqPixels, ly + a * s);
        ctx.lineTo(lx + b * s, ly + sqPixels);
        ctx.lineTo(lx, ly + b * s);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#34d399';
        ctx.stroke();

        ctx.fillStyle = '#34d399';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('c²', lx + sqPixels / 2 - 10, ly + sqPixels / 2 + 5);

        // Right square: (a+b)² with a² and b² squares
        const rx = lx + sqPixels + gap + 50;
        const ry = ly;

        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        ctx.strokeRect(rx, ry, sqPixels, sqPixels);

        // Four triangles rearranged
        ctx.fillStyle = 'rgba(244, 114, 182, 0.5)';
        ctx.strokeStyle = '#f472b6';

        // Two triangles forming rectangle at top
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx + a * s, ry);
        ctx.lineTo(rx + a * s, ry + b * s);
        ctx.lineTo(rx, ry + b * s);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Two triangles forming rectangle at bottom-right
        ctx.beginPath();
        ctx.moveTo(rx + a * s, ry + b * s);
        ctx.lineTo(rx + sqPixels, ry + b * s);
        ctx.lineTo(rx + sqPixels, ry + sqPixels);
        ctx.lineTo(rx + a * s, ry + sqPixels);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // a² square (top-right)
        ctx.fillStyle = 'rgba(167, 139, 250, 0.4)';
        ctx.fillRect(rx + a * s, ry, a * s, a * s);
        ctx.strokeStyle = '#a78bfa';
        ctx.strokeRect(rx + a * s, ry, a * s, a * s);

        // b² square (bottom-left)
        ctx.fillStyle = 'rgba(34, 211, 238, 0.4)';
        ctx.fillRect(rx, ry + b * s, b * s, b * s);
        ctx.strokeStyle = '#22d3ee';
        ctx.strokeRect(rx, ry + b * s, b * s, b * s);

        ctx.fillStyle = '#a78bfa';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('a²', rx + a * s + (a * s) / 2 - 10, ry + (a * s) / 2 + 5);

        ctx.fillStyle = '#22d3ee';
        ctx.fillText('b²', rx + (b * s) / 2 - 10, ry + b * s + (b * s) / 2 + 5);

        // Labels
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '12px sans-serif';
        ctx.fillText('4 triangles + c²', lx + sqPixels / 2 - 40, ly + sqPixels + 25);
        ctx.fillText('4 triangles + a² + b²', rx + sqPixels / 2 - 55, ry + sqPixels + 25);

        ctx.fillStyle = '#fbbf24';
        ctx.font = '14px sans-serif';
        ctx.fillText('Same total area ⟹ c² = a² + b²', width / 2 - 100, height - 20);
        break;
      }

      case 'similar': {
        // Similar triangles proof
        const triX = 100;
        const triY = height - 100;

        // Main triangle
        ctx.fillStyle = 'rgba(244, 114, 182, 0.3)';
        ctx.beginPath();
        ctx.moveTo(triX, triY);
        ctx.lineTo(triX + c * scale, triY);
        ctx.lineTo(triX, triY - b * scale);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#f472b6';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Altitude to hypotenuse
        // Draw altitude
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(triX, triY - b * scale);
        const footX = triX + (a * a / c) * scale;
        const footY = triY - (a * b / c) * scale;
        ctx.lineTo(footX, footY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Labels for sides
        ctx.fillStyle = '#e2e8f0';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('c', triX + (c * scale) / 2, triY + 20);
        ctx.fillText('b', triX - 20, triY - (b * scale) / 2);
        ctx.fillText('a', triX + (c * scale) / 2 + 20, triY - (b * scale) / 2 - 20);

        ctx.fillStyle = '#fbbf24';
        ctx.fillText('h', footX + 10, footY - 10);

        // Explanation
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '13px sans-serif';
        const expX = 280;
        let expY = 40;
        ctx.fillText('Similar Triangles Proof:', expX, expY);
        expY += 25;
        ctx.font = '12px sans-serif';
        ctx.fillText('The altitude creates 3 similar triangles.', expX, expY);
        expY += 25;
        ctx.fillStyle = '#a78bfa';
        ctx.fillText(`From small triangle: a/c = (a²/c)/a`, expX, expY);
        expY += 20;
        ctx.fillStyle = '#22d3ee';
        ctx.fillText(`From other small: b/c = (b²/c)/b`, expX, expY);
        expY += 25;
        ctx.fillStyle = '#34d399';
        ctx.fillText(`Adding: a²/c + b²/c = c`, expX, expY);
        expY += 20;
        ctx.fillText(`Therefore: a² + b² = c²`, expX, expY);
        break;
      }
    }

    // Current values
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText(`a = ${a}, b = ${b}, c = ${c.toFixed(2)}`, 10, height - 10);

  }, [proofType, a, b, c, animProgress]);

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Pythagorean Theorem Visualizer</h4>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-700 rounded"
          />
        </div>

        <div className="w-full md:w-52 space-y-3">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Proof Type</label>
            <select
              value={proofType}
              onChange={(e) => setProofType(e.target.value as ProofType)}
              className="w-full px-2 py-1.5 bg-slate-800 border border-slate-600 rounded text-slate-200 text-sm"
            >
              <option value="squares">Squares on Sides</option>
              <option value="rearrangement">Area Rearrangement</option>
              <option value="similar">Similar Triangles</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">Side a: {a}</label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={a}
              onChange={(e) => setA(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">Side b: {b}</label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="p-3 bg-slate-800 rounded">
            <div className="text-sm font-mono text-slate-200">
              a² + b² = {(a * a).toFixed(1)} + {(b * b).toFixed(1)} = {(a * a + b * b).toFixed(1)}
            </div>
            <div className="text-sm font-mono text-slate-200 mt-1">
              c² = {(c * c).toFixed(1)}
            </div>
            <div className="text-green-400 text-sm mt-1">✓ Equal!</div>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-purple-400">Purple:</span> a²</p>
            <p><span className="text-cyan-400">Cyan:</span> b²</p>
            <p><span className="text-green-400">Green:</span> c²</p>
          </div>
        </div>
      </div>
    </div>
  );
}
