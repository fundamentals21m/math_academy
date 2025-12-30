import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function TiledFloorPerspective({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vanishingY, setVanishingY] = useState(80);
  const [tileCount, setTileCount] = useState(6);
  const [showDiagonals, setShowDiagonals] = useState(true);
  const [showConstruction, setShowConstruction] = useState(false);

  const width = 520;
  const height = 420;
  const vanishingX = width / 2;
  const bottomY = height - 40;
  const tileWidth = 60;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw horizon line
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, vanishingY);
    ctx.lineTo(width, vanishingY);
    ctx.stroke();

    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    ctx.fillText('Horizon', 10, vanishingY - 10);

    // Draw vanishing point
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(vanishingX, vanishingY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fbbf24';
    ctx.fillText('Vanishing Point', vanishingX - 45, vanishingY - 15);

    // Bottom edge points
    const startX = vanishingX - (tileCount * tileWidth) / 2;
    const bottomPoints: Point[] = [];
    for (let i = 0; i <= tileCount; i++) {
      bottomPoints.push({ x: startX + i * tileWidth, y: bottomY });
    }

    // Draw vertical lines to vanishing point
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    bottomPoints.forEach((p) => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(vanishingX, vanishingY);
      ctx.stroke();
    });

    // Calculate horizontal lines using perspective
    // The key insight: use the diagonal to find the correct spacing
    const horizonDist = bottomY - vanishingY;
    const rowYs: number[] = [bottomY];

    // Use the perspective formula: each row is at y = horizon + d/(n+1) where d is horizon distance
    for (let i = 1; i <= 10; i++) {
      const ratio = 1 - i / (i + 3); // Perspective ratio
      const y = vanishingY + horizonDist * ratio;
      if (y > vanishingY + 20) {
        rowYs.push(y);
      }
    }

    // Draw horizontal lines
    ctx.strokeStyle = '#475569';
    rowYs.forEach((y) => {
      // Calculate width at this height
      const t = (bottomY - y) / (bottomY - vanishingY);
      const halfWidth = ((tileCount * tileWidth) / 2) * (1 - t);
      const leftX = vanishingX - halfWidth;
      const rightX = vanishingX + halfWidth;

      ctx.beginPath();
      ctx.moveTo(leftX, y);
      ctx.lineTo(rightX, y);
      ctx.stroke();
    });

    // Draw tiles with alternating colors
    for (let row = 0; row < rowYs.length - 1; row++) {
      const y1 = rowYs[row];
      const y2 = rowYs[row + 1];

      const t1 = (bottomY - y1) / (bottomY - vanishingY);
      const t2 = (bottomY - y2) / (bottomY - vanishingY);

      for (let col = 0; col < tileCount; col++) {
        const colRatio1 = (col - tileCount / 2) / (tileCount / 2);
        const colRatio2 = (col + 1 - tileCount / 2) / (tileCount / 2);

        const x1 = vanishingX + colRatio1 * ((tileCount * tileWidth) / 2) * (1 - t1);
        const x2 = vanishingX + colRatio2 * ((tileCount * tileWidth) / 2) * (1 - t1);
        const x3 = vanishingX + colRatio2 * ((tileCount * tileWidth) / 2) * (1 - t2);
        const x4 = vanishingX + colRatio1 * ((tileCount * tileWidth) / 2) * (1 - t2);

        const isLight = (row + col) % 2 === 0;
        ctx.fillStyle = isLight ? 'rgba(148, 163, 184, 0.3)' : 'rgba(30, 41, 59, 0.5)';

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y1);
        ctx.lineTo(x3, y2);
        ctx.lineTo(x4, y2);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Draw diagonals
    if (showDiagonals) {
      ctx.strokeStyle = '#f472b6';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);

      // Draw one diagonal from bottom-left corner
      const bottomLeft = bottomPoints[0];
      const diagonalVanishX = vanishingX + (tileWidth * tileCount) / 2;

      ctx.beginPath();
      ctx.moveTo(bottomLeft.x, bottomLeft.y);
      ctx.lineTo(diagonalVanishX, vanishingY);
      ctx.stroke();

      // Mark the diagonal vanishing point
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(diagonalVanishX, vanishingY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f472b6';
      ctx.font = '11px sans-serif';
      ctx.fillText('Diagonal VP', diagonalVanishX - 30, vanishingY + 20);

      ctx.setLineDash([]);
    }

    // Show construction steps
    if (showConstruction) {
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(10, height - 100, 200, 90);
      ctx.strokeStyle = '#334155';
      ctx.strokeRect(10, height - 100, 200, 90);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Costruzione Legittima:', 20, height - 82);
      ctx.font = '10px sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('1. Draw horizon with vanishing point', 20, height - 65);
      ctx.fillText('2. Mark equal intervals at bottom', 20, height - 50);
      ctx.fillText('3. Draw lines to vanishing point', 20, height - 35);
      ctx.fillText('4. Use diagonals to find rows', 20, height - 20);
    }

    // Title
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Perspective Tiled Floor', 10, 25);

  }, [vanishingY, tileCount, showDiagonals, showConstruction]);

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Perspective Drawing: Tiled Floor</h4>

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
          <div className="space-y-2">
            <label className="text-sm text-slate-300">
              Horizon Height: {vanishingY}px
            </label>
            <input
              type="range"
              min="40"
              max="200"
              value={vanishingY}
              onChange={(e) => setVanishingY(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-slate-300">Tiles: {tileCount}</label>
            <input
              type="range"
              min="3"
              max="10"
              value={tileCount}
              onChange={(e) => setTileCount(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showDiagonals}
              onChange={(e) => setShowDiagonals(e.target.checked)}
              className="rounded"
            />
            Show diagonals
          </label>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showConstruction}
              onChange={(e) => setShowConstruction(e.target.checked)}
              className="rounded"
            />
            Show construction steps
          </label>

          <div className="p-3 bg-slate-800 rounded text-xs">
            <p className="text-slate-300 mb-2">
              <strong className="text-yellow-400">Key Insight:</strong>
            </p>
            <p className="text-slate-400">
              Parallel lines converge to a <span className="text-yellow-400">vanishing point</span> on the horizon.
            </p>
            <p className="text-slate-400 mt-2">
              The <span className="text-pink-400">diagonal</span> of the tiles determines where the horizontal lines go.
            </p>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-yellow-400">Yellow:</span> Vanishing point</p>
            <p><span className="text-pink-400">Pink:</span> Diagonal VP</p>
            <p><span className="text-slate-400">Gray:</span> Horizon line</p>
          </div>
        </div>
      </div>
    </div>
  );
}
