import { useState, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export function ReflectionCompositionDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [line1Angle, setLine1Angle] = useState(0);
  const [line2Angle, setLine2Angle] = useState(Math.PI / 4);
  const [showSteps, setShowSteps] = useState(true);

  const width = 500;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;

  // Original triangle
  const originalTriangle: Point[] = [
    { x: 80, y: -20 },
    { x: 120, y: -20 },
    { x: 100, y: -60 },
  ];

  // Reflect point across line through origin with given angle
  const reflectAcrossLine = (p: Point, angle: number): Point => {
    const cos2 = Math.cos(2 * angle);
    const sin2 = Math.sin(2 * angle);
    return {
      x: p.x * cos2 + p.y * sin2,
      y: p.x * sin2 - p.y * cos2,
    };
  };

  // Apply first reflection
  const afterFirstReflection = originalTriangle.map(p => reflectAcrossLine(p, line1Angle));

  // Apply second reflection
  const afterSecondReflection = afterFirstReflection.map(p => reflectAcrossLine(p, line2Angle));

  // Rotation angle = 2 * (angle between lines)
  const rotationAngle = 2 * (line2Angle - line1Angle);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Transform to center
    ctx.save();
    ctx.translate(centerX, centerY);

    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = -250; x <= 250; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, -200);
      ctx.lineTo(x, 200);
      ctx.stroke();
    }
    for (let y = -200; y <= 200; y += 50) {
      ctx.beginPath();
      ctx.moveTo(-250, y);
      ctx.lineTo(250, y);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-250, 0);
    ctx.lineTo(250, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -200);
    ctx.lineTo(0, 200);
    ctx.stroke();

    // Draw reflection lines
    const lineLen = 220;

    // Line 1
    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-lineLen * Math.cos(line1Angle), lineLen * Math.sin(line1Angle));
    ctx.lineTo(lineLen * Math.cos(line1Angle), -lineLen * Math.sin(line1Angle));
    ctx.stroke();

    // Line 2
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-lineLen * Math.cos(line2Angle), lineLen * Math.sin(line2Angle));
    ctx.lineTo(lineLen * Math.cos(line2Angle), -lineLen * Math.sin(line2Angle));
    ctx.stroke();

    // Draw angle arc between lines
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, 40, -line2Angle, -line1Angle);
    ctx.stroke();

    // Angle label
    const midAngle = (line1Angle + line2Angle) / 2;
    ctx.fillStyle = '#fbbf24';
    ctx.font = '11px sans-serif';
    const angleDeg = ((line2Angle - line1Angle) * 180 / Math.PI).toFixed(0);
    ctx.fillText(`θ = ${angleDeg}°`, 50 * Math.cos(midAngle), -50 * Math.sin(midAngle));

    // Draw triangles
    const drawTriangle = (points: Point[], color: string, alpha: number = 1) => {
      ctx.fillStyle = color.replace(')', `, ${alpha * 0.3})`).replace('rgb', 'rgba');
      ctx.beginPath();
      ctx.moveTo(points[0].x, -points[0].y);
      points.forEach(p => ctx.lineTo(p.x, -p.y));
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    // Original triangle
    drawTriangle(originalTriangle, 'rgb(167, 139, 250)');

    // After first reflection
    if (showSteps) {
      drawTriangle(afterFirstReflection, 'rgb(244, 114, 182)', 0.6);
    }

    // Final result
    drawTriangle(afterSecondReflection, 'rgb(52, 211, 153)');

    // Draw rotation arc showing the result
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(0, 0, 100, Math.PI / 6, Math.PI / 6 - rotationAngle, rotationAngle > 0);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.restore();

    // Labels
    ctx.fillStyle = '#f472b6';
    ctx.font = '12px sans-serif';
    ctx.fillText('Line 1 (L₁)', 10, 25);
    ctx.fillStyle = '#22d3ee';
    ctx.fillText('Line 2 (L₂)', 10, 45);
    ctx.fillStyle = '#a78bfa';
    ctx.fillText('Original', 10, 65);
    if (showSteps) {
      ctx.fillStyle = '#f472b6';
      ctx.fillText('After L₁', 10, 85);
    }
    ctx.fillStyle = '#34d399';
    ctx.fillText('Final (rotation 2θ)', 10, showSteps ? 105 : 85);

  }, [line1Angle, line2Angle, showSteps, afterFirstReflection, afterSecondReflection, rotationAngle]);

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Composition of Reflections</h4>

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
            <label className="block text-sm text-slate-300 mb-1">
              Line 1 angle: {(line1Angle * 180 / Math.PI).toFixed(0)}°
            </label>
            <input
              type="range"
              min={-Math.PI / 2}
              max={Math.PI / 2}
              step="0.05"
              value={line1Angle}
              onChange={(e) => setLine1Angle(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Line 2 angle: {(line2Angle * 180 / Math.PI).toFixed(0)}°
            </label>
            <input
              type="range"
              min={-Math.PI / 2}
              max={Math.PI / 2}
              step="0.05"
              value={line2Angle}
              onChange={(e) => setLine2Angle(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showSteps}
              onChange={(e) => setShowSteps(e.target.checked)}
              className="rounded"
            />
            Show intermediate step
          </label>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-yellow-400 mb-2">Key Result</h5>
            <p className="text-xs text-slate-300">
              Two reflections = rotation by <strong>twice</strong> the angle
              between the lines.
            </p>
            <p className="text-sm font-mono text-green-400 mt-2">
              Rotation = 2 × {((line2Angle - line1Angle) * 180 / Math.PI).toFixed(0)}° = {(rotationAngle * 180 / Math.PI).toFixed(0)}°
            </p>
          </div>

          <button
            onClick={() => {
              setLine1Angle(0);
              setLine2Angle(Math.PI / 4);
            }}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Reset
          </button>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p>The composition of two reflections through lines that meet at a point is a rotation about that point.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
