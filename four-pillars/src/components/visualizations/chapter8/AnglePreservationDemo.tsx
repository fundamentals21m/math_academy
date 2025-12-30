import { useState, useRef, useEffect } from 'react';

interface AnglePreservationDemoProps {
  className?: string;
}

export function AnglePreservationDemo({ className = '' }: AnglePreservationDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [transformA, setTransformA] = useState(1);
  const [transformB, setTransformB] = useState(1);
  const [transformC, setTransformC] = useState(0);
  const [transformD, setTransformD] = useState(1);
  const [curveAngle1, setCurveAngle1] = useState(0);
  const [curveAngle2, setCurveAngle2] = useState(90);

  const width = 600;
  const height = 380;

  // Complex number operations
  type Complex = [number, number];

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
  const cAbs = (z: Complex): number => Math.sqrt(z[0] * z[0] + z[1] * z[1]);

  // Apply Möbius transformation
  const applyMobius = (z: Complex): Complex | null => {
    const a: Complex = [transformA, 0];
    const b: Complex = [transformB, 0];
    const c: Complex = [transformC, 0];
    const d: Complex = [transformD, 0];

    const num = cAdd(cMul(a, z), b);
    const denom = cAdd(cMul(c, z), d);
    return cDiv(num, denom);
  };

  // Compute derivative for angle calculation
  const derivative = (z: Complex): Complex | null => {
    // f'(z) = (ad - bc) / (cz + d)^2
    const det = transformA * transformD - transformB * transformC;
    const c: Complex = [transformC, 0];
    const d: Complex = [transformD, 0];
    const denom = cAdd(cMul(c, z), d);
    const denomSq = cMul(denom, denom);
    if (cAbs(denomSq) < 0.0001) return null;
    return cDiv([det, 0], denomSq);
  };

  const det = transformA * transformD - transformB * transformC;
  const isValid = Math.abs(det) > 0.01;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Two side-by-side views
    const leftCx = width / 4;
    const rightCx = 3 * width / 4;
    const cy = height / 2;
    const scale = 50;

    // Separator
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Labels
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Original (z-plane)', leftCx - 60, 25);
    ctx.fillText('Transformed (w-plane)', rightCx - 75, 25);

    const drawGrid = (centerX: number) => {
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      for (let x = -3; x <= 3; x++) {
        ctx.beginPath();
        ctx.moveTo(centerX + x * scale, cy - 3 * scale);
        ctx.lineTo(centerX + x * scale, cy + 3 * scale);
        ctx.stroke();
      }
      for (let y = -3; y <= 3; y++) {
        ctx.beginPath();
        ctx.moveTo(centerX - 3 * scale, cy - y * scale);
        ctx.lineTo(centerX + 3 * scale, cy - y * scale);
        ctx.stroke();
      }

      // Axes
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX - 3 * scale, cy);
      ctx.lineTo(centerX + 3 * scale, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(centerX, cy - 3 * scale);
      ctx.lineTo(centerX, cy + 3 * scale);
      ctx.stroke();
    };

    drawGrid(leftCx);
    drawGrid(rightCx);

    // Intersection point (in upper half plane)
    const intersectionPoint: Complex = [1, 1.5];

    // Draw curves through the intersection point
    const angle1Rad = (curveAngle1 * Math.PI) / 180;
    const angle2Rad = (curveAngle2 * Math.PI) / 180;

    // Generate curve points (straight lines in original)
    const curve1Points: Complex[] = [];
    const curve2Points: Complex[] = [];

    for (let t = -2; t <= 2; t += 0.1) {
      const p1: Complex = [
        intersectionPoint[0] + t * Math.cos(angle1Rad),
        intersectionPoint[1] + t * Math.sin(angle1Rad)
      ];
      const p2: Complex = [
        intersectionPoint[0] + t * Math.cos(angle2Rad),
        intersectionPoint[1] + t * Math.sin(angle2Rad)
      ];
      curve1Points.push(p1);
      curve2Points.push(p2);
    }

    // Draw original curves
    const drawCurve = (points: Complex[], color: string, centerX: number, transform: boolean) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      let started = false;

      points.forEach(p => {
        let drawPoint: Complex | null = transform ? applyMobius(p) : p;
        if (drawPoint && Math.abs(drawPoint[0]) < 5 && Math.abs(drawPoint[1]) < 5) {
          const px = centerX + drawPoint[0] * scale;
          const py = cy - drawPoint[1] * scale;
          if (!started) {
            ctx.moveTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        } else if (started) {
          ctx.stroke();
          ctx.beginPath();
          started = false;
        }
      });
      ctx.stroke();
    };

    // Draw original curves
    drawCurve(curve1Points, '#60a5fa', leftCx, false);
    drawCurve(curve2Points, '#22c55e', leftCx, false);

    // Draw transformed curves
    if (isValid) {
      drawCurve(curve1Points, '#60a5fa', rightCx, true);
      drawCurve(curve2Points, '#22c55e', rightCx, true);
    }

    // Draw intersection points
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(leftCx + intersectionPoint[0] * scale, cy - intersectionPoint[1] * scale, 6, 0, Math.PI * 2);
    ctx.fill();

    if (isValid) {
      const transformedIntersection = applyMobius(intersectionPoint);
      if (transformedIntersection && Math.abs(transformedIntersection[0]) < 5 && Math.abs(transformedIntersection[1]) < 5) {
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(rightCx + transformedIntersection[0] * scale, cy - transformedIntersection[1] * scale, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw angle arcs
    const arcRadius = 25;

    // Original angle
    const originalAngle = Math.abs(curveAngle2 - curveAngle1);
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(
      leftCx + intersectionPoint[0] * scale,
      cy - intersectionPoint[1] * scale,
      arcRadius,
      -angle2Rad,
      -angle1Rad,
      curveAngle2 > curveAngle1
    );
    ctx.stroke();

    ctx.fillStyle = '#ec4899';
    ctx.font = '12px sans-serif';
    ctx.fillText(`θ = ${originalAngle}°`, leftCx + intersectionPoint[0] * scale + 30, cy - intersectionPoint[1] * scale - 10);

    // Transformed angle (should be the same due to conformality)
    if (isValid) {
      const transformedIntersection = applyMobius(intersectionPoint);
      if (transformedIntersection && Math.abs(transformedIntersection[0]) < 5 && Math.abs(transformedIntersection[1]) < 5) {
        // Compute transformed tangent directions
        const deriv = derivative(intersectionPoint);
        if (deriv) {
          // The derivative rotates tangent vectors by arg(f'(z))
          const derivArg = Math.atan2(deriv[1], deriv[0]);

          // Transformed angles
          const newAngle1 = angle1Rad + derivArg;
          const newAngle2 = angle2Rad + derivArg;

          ctx.strokeStyle = '#ec4899';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(
            rightCx + transformedIntersection[0] * scale,
            cy - transformedIntersection[1] * scale,
            arcRadius,
            -newAngle2,
            -newAngle1,
            curveAngle2 > curveAngle1
          );
          ctx.stroke();

          ctx.fillStyle = '#ec4899';
          ctx.fillText(`θ = ${originalAngle}°`, rightCx + transformedIntersection[0] * scale + 30, cy - transformedIntersection[1] * scale - 10);
        }
      }
    }

    // Transformation info
    ctx.fillStyle = '#c084fc';
    ctx.font = '12px sans-serif';
    ctx.fillText(`f(z) = (${transformA}z + ${transformB})/(${transformC}z + ${transformD})`, width / 2 - 100, height - 15);

    ctx.fillStyle = isValid ? '#22c55e' : '#ef4444';
    ctx.font = '11px sans-serif';
    ctx.fillText(isValid ? '✓ Conformal (angle-preserving)' : '✗ det = 0 (degenerate)', 10, height - 15);

  }, [transformA, transformB, transformC, transformD, curveAngle1, curveAngle2, isValid]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Conformality: Angle Preservation
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
          <label className="block text-sm text-blue-400 mb-1">Curve 1 angle: {curveAngle1}°</label>
          <input
            type="range"
            min="0"
            max="180"
            value={curveAngle1}
            onChange={(e) => setCurveAngle1(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-green-400 mb-1">Curve 2 angle: {curveAngle2}°</label>
          <input
            type="range"
            min="0"
            max="180"
            value={curveAngle2}
            onChange={(e) => setCurveAngle2(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">a = {transformA}</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.5"
            value={transformA}
            onChange={(e) => setTransformA(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">b = {transformB}</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.5"
            value={transformB}
            onChange={(e) => setTransformB(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">c = {transformC}</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.5"
            value={transformC}
            onChange={(e) => setTransformC(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">d = {transformD}</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.5"
            value={transformD}
            onChange={(e) => setTransformD(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          onClick={() => { setTransformA(1); setTransformB(1); setTransformC(0); setTransformD(1); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          Translation
        </button>
        <button
          onClick={() => { setTransformA(2); setTransformB(0); setTransformC(0); setTransformD(1); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          Scaling
        </button>
        <button
          onClick={() => { setTransformA(0); setTransformB(1); setTransformC(1); setTransformD(0); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          Inversion
        </button>
        <button
          onClick={() => { setTransformA(1); setTransformB(1); setTransformC(1); setTransformD(2); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          General
        </button>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p className="mb-2"><strong>Key Properties:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="text-purple-400">Conformal</span> = angle-preserving at each point</li>
          <li>Möbius transformations preserve angles because f'(z) ≠ 0</li>
          <li>The angle <span className="text-pink-400">θ</span> between curves is the same before and after</li>
          <li>Distances and areas change, but <span className="text-green-400">angles are preserved</span></li>
          <li>This is why non-Euclidean lines (90° to boundary) map to non-Euclidean lines</li>
        </ul>
      </div>
    </div>
  );
}
