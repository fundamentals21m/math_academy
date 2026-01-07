import { useState, useRef, useEffect } from 'react';

interface AngleSlopeDemoProps {
  className?: string;
}

export function AngleSlopeDemo({ className = '' }: AngleSlopeDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [slope1, setSlope1] = useState(0.5);
  const [slope2, setSlope2] = useState(-2);
  const [showPerpendicular, setShowPerpendicular] = useState(true);

  const width = 550;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = 40;

  // Calculate perpendicular slope
  const perpSlope = slope1 !== 0 ? -1 / slope1 : Infinity;

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
    for (let x = 0; x <= width; x += scale) {
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
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Helper to draw a line through origin with given slope
    const drawLine = (slope: number, color: string, label: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      if (Math.abs(slope) > 100) {
        // Nearly vertical
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, height);
      } else {
        // y - centerY = slope * (x - centerX)
        // At x = 0: y = centerY - slope * centerX
        // At x = width: y = centerY + slope * (width - centerX)
        const y0 = centerY - slope * (-centerX);
        const y1 = centerY - slope * (width - centerX);
        ctx.moveTo(0, y0);
        ctx.lineTo(width, y1);
      }
      ctx.stroke();

      // Draw slope indicator (rise over run triangle)
      const runLength = 2 * scale;
      const riseLength = slope * runLength;

      const startX = centerX + scale;
      const startY = centerY - slope * scale;

      // Only draw triangle if line isn't nearly vertical
      if (Math.abs(slope) < 5) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);

        // Horizontal (run)
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + runLength, startY);
        ctx.stroke();

        // Vertical (rise)
        ctx.beginPath();
        ctx.moveTo(startX + runLength, startY);
        ctx.lineTo(startX + runLength, startY - riseLength);
        ctx.stroke();
        ctx.setLineDash([]);

        // Labels
        ctx.font = '11px sans-serif';
        ctx.fillStyle = color;
        ctx.fillText('run', startX + runLength / 2 - 10, startY + 15);
        ctx.fillText('rise', startX + runLength + 5, startY - riseLength / 2);
      }

      // Line label with angle
      const angle = Math.atan(slope) * 180 / Math.PI;
      ctx.fillStyle = color;
      ctx.font = '13px sans-serif';
      ctx.fillText(`${label}: slope = ${slope.toFixed(2)}, θ = ${angle.toFixed(1)}°`, 10, label === 'L₁' ? 30 : 50);
    };

    // Draw line 1
    drawLine(slope1, '#60a5fa', 'L₁');

    // Draw line 2 (or perpendicular)
    if (showPerpendicular) {
      drawLine(perpSlope, '#34d399', 'L₂');
    } else {
      drawLine(slope2, '#34d399', 'L₂');
    }

    // Draw right angle indicator if lines are perpendicular
    const currentSlope2 = showPerpendicular ? perpSlope : slope2;
    const product = slope1 * currentSlope2;

    if (Math.abs(product + 1) < 0.1) {
      // Lines are perpendicular - draw right angle symbol
      const size = 15;

      // Direction vectors (normalized-ish)
      const len1 = Math.sqrt(1 + slope1 * slope1);
      const d1x = 1 / len1;
      const d1y = slope1 / len1;

      const len2 = Math.abs(currentSlope2) > 100
        ? 1
        : Math.sqrt(1 + currentSlope2 * currentSlope2);
      const d2x = Math.abs(currentSlope2) > 100 ? 0 : 1 / len2;
      const d2y = Math.abs(currentSlope2) > 100 ? 1 : currentSlope2 / len2;

      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX + d1x * size * scale / 40, centerY - d1y * size * scale / 40);
      ctx.lineTo(
        centerX + d1x * size * scale / 40 + d2x * size * scale / 40,
        centerY - d1y * size * scale / 40 - d2y * size * scale / 40
      );
      ctx.lineTo(centerX + d2x * size * scale / 40, centerY - d2y * size * scale / 40);
      ctx.stroke();
    }

    // Draw origin point
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'italic 14px serif';
    ctx.fillText('O', centerX + 10, centerY + 20);

    // Draw product formula
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '14px sans-serif';
    const productValue = slope1 * currentSlope2;
    const isPerpendicular = Math.abs(productValue + 1) < 0.1;

    ctx.fillText(
      `t₁ × t₂ = ${slope1.toFixed(2)} × ${currentSlope2.toFixed(2)} = ${productValue.toFixed(2)}`,
      width - 250,
      height - 60
    );

    if (isPerpendicular) {
      ctx.fillStyle = '#34d399';
      ctx.fillText('≈ −1  →  Perpendicular! ✓', width - 250, height - 40);
    } else {
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('≠ −1  →  Not perpendicular', width - 250, height - 40);
    }

  }, [slope1, slope2, showPerpendicular, perpSlope]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Angle, Slope, and Perpendicularity
      </h4>

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
          <label className="block text-sm text-blue-400 mb-1">
            Slope of L₁: {slope1.toFixed(2)}
          </label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.1"
            value={slope1}
            onChange={(e) => setSlope1(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-green-400 mb-1">
            {showPerpendicular
              ? `Perpendicular slope: ${perpSlope === Infinity ? '∞' : perpSlope.toFixed(2)}`
              : `Slope of L₂: ${slope2.toFixed(2)}`}
          </label>
          {!showPerpendicular && (
            <input
              type="range"
              min="-3"
              max="3"
              step="0.1"
              value={slope2}
              onChange={(e) => setSlope2(parseFloat(e.target.value))}
              className="w-full"
            />
          )}
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowPerpendicular(!showPerpendicular)}
          className={`px-4 py-2 rounded transition ${
            showPerpendicular
              ? 'bg-green-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {showPerpendicular ? 'Show Perpendicular Line' : 'Free Line Mode'}
        </button>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p>
          <strong>Perpendicularity Condition:</strong> Two lines with slopes t₁ and t₂
          are perpendicular if and only if:
        </p>
        <p className="text-center text-pink-400 font-mono text-lg my-2">
          t₁ × t₂ = −1
        </p>
        <p>
          The slope t = rise/run = tan(θ), where θ is the angle the line makes with
          the x-axis. Perpendicular lines have angles differing by 90°.
        </p>
      </div>
    </div>
  );
}
