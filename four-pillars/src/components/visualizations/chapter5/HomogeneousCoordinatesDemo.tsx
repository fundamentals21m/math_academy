import { useState, useRef, useEffect } from 'react';

interface HomogeneousCoordinatesDemoProps {
  className?: string;
}

export function HomogeneousCoordinatesDemo({ className = '' }: HomogeneousCoordinatesDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [x, setX] = useState(2);
  const [y, setY] = useState(1);
  const [z, setZ] = useState(1);
  const [showMultiples, setShowMultiples] = useState(true);
  const [projectionPlane, setProjectionPlane] = useState<'z1' | 'z2'>('z1');

  const width = 550;
  const height = 400;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2 + 30;
    const scale = 50;

    // Isometric projection helpers
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
const isoX = (x: number, y: number, z: number) => cx + (x - y) * 0.7 * scale;
    const isoY = (x: number, y: number, z: number) => cy - z * scale + (x + y) * 0.4 * scale;

    // Draw axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.setLineDash([]);

    // X axis
    ctx.beginPath();
    ctx.moveTo(isoX(-4, 0, 0), isoY(-4, 0, 0));
    ctx.lineTo(isoX(4, 0, 0), isoY(4, 0, 0));
    ctx.stroke();
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('x', isoX(4.3, 0, 0), isoY(4.3, 0, 0));

    // Y axis
    ctx.beginPath();
    ctx.moveTo(isoX(0, -4, 0), isoY(0, -4, 0));
    ctx.lineTo(isoX(0, 4, 0), isoY(0, 4, 0));
    ctx.stroke();
    ctx.fillStyle = '#22c55e';
    ctx.fillText('y', isoX(0, 4.3, 0), isoY(0, 4.3, 0));

    // Z axis
    ctx.beginPath();
    ctx.moveTo(isoX(0, 0, -1), isoY(0, 0, -1));
    ctx.lineTo(isoX(0, 0, 4), isoY(0, 0, 4));
    ctx.stroke();
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('z', isoX(0, 0, 4.3), isoY(0, 0, 4.3));

    // Draw projection plane (z = 1 or z = 2)
    const pz = projectionPlane === 'z1' ? 1 : 2;
    ctx.fillStyle = `rgba(147, 51, 234, 0.15)`;
    ctx.strokeStyle = '#9333ea';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(isoX(-3, -3, pz), isoY(-3, -3, pz));
    ctx.lineTo(isoX(3, -3, pz), isoY(3, -3, pz));
    ctx.lineTo(isoX(3, 3, pz), isoY(3, 3, pz));
    ctx.lineTo(isoX(-3, 3, pz), isoY(-3, 3, pz));
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#9333ea';
    ctx.font = '12px sans-serif';
    ctx.fillText(`z = ${pz} plane`, isoX(3.2, -3, pz), isoY(3.2, -3, pz));

    // Draw origin
    ctx.fillStyle = '#f1f5f9';
    ctx.beginPath();
    ctx.arc(isoX(0, 0, 0), isoY(0, 0, 0), 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('O', isoX(0, 0, 0) - 20, isoY(0, 0, 0) + 5);

    // Calculate the line through O with direction (x, y, z)
    if (x !== 0 || y !== 0 || z !== 0) {
      const norm = Math.sqrt(x * x + y * y + z * z);
      const dx = x / norm;
      const dy = y / norm;
      const dz = z / norm;

      // Draw the line through origin (both directions)
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(isoX(-dx * 4, -dy * 4, -dz * 4), isoY(-dx * 4, -dy * 4, -dz * 4));
      ctx.lineTo(isoX(dx * 4, dy * 4, dz * 4), isoY(dx * 4, dy * 4, dz * 4));
      ctx.stroke();

      // Show multiple points on the line representing the same projective point
      if (showMultiples) {
        const multiples = [0.5, 1, 1.5, 2];
        multiples.forEach((t, i) => {
          const px = t * x;
          const py = t * y;
          const pz = t * z;

          // Only draw if within bounds
          if (Math.abs(px) <= 4 && Math.abs(py) <= 4 && Math.abs(pz) <= 4) {
            ctx.fillStyle = i === 1 ? '#f59e0b' : 'rgba(251, 191, 36, 0.6)';
            ctx.beginPath();
            ctx.arc(isoX(px, py, pz), isoY(px, py, pz), i === 1 ? 7 : 5, 0, Math.PI * 2);
            ctx.fill();

            // Label
            if (i === 1) {
              ctx.fillStyle = '#fbbf24';
              ctx.font = '11px sans-serif';
              ctx.fillText(`(${x}, ${y}, ${z})`, isoX(px, py, pz) + 10, isoY(px, py, pz) - 10);
            }
          }
        });
      }

      // Calculate intersection with projection plane
      if (z !== 0) {
        // Line: (tx, ty, tz) intersects z = pz when t = pz/z
        const t = pz / z;
        const projX = t * x;
        const projY = t * y;

        // Draw dashed line to projected point
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.5)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(isoX(x, y, z), isoY(x, y, z));
        ctx.lineTo(isoX(projX, projY, pz), isoY(projX, projY, pz));
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw projected point
        ctx.fillStyle = '#ec4899';
        ctx.beginPath();
        ctx.arc(isoX(projX, projY, pz), isoY(projX, projY, pz), 8, 0, Math.PI * 2);
        ctx.fill();

        // Label projected point
        ctx.fillStyle = '#ec4899';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`(${projX.toFixed(1)}, ${projY.toFixed(1)})`,
          isoX(projX, projY, pz) + 12, isoY(projX, projY, pz) + 5);
      }
    }

    // Formula display
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Homogeneous Coordinates', 20, 30);

    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(`Point: (${x}, ${y}, ${z})`, 20, 55);

    if (z !== 0) {
      const projX = (x / z).toFixed(2);
      const projY = (y / z).toFixed(2);
      ctx.fillStyle = '#ec4899';
      ctx.fillText(`Cartesian: (${projX}, ${projY})`, 20, 75);
    } else {
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('Point at infinity (z = 0)', 20, 75);
    }

    // Equivalence note
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText(`All (tx, ty, tz) for t ≠ 0 represent the same "point"`, 20, height - 15);

  }, [x, y, z, showMultiples, projectionPlane]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Homogeneous Coordinates in ℝP²
      </h4>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm text-red-400 mb-1">x = {x}</label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.5"
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-green-400 mb-1">y = {y}</label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.5"
            value={y}
            onChange={(e) => setY(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-blue-400 mb-1">z = {z}</label>
          <input
            type="range"
            min="-2"
            max="3"
            step="0.5"
            value={z}
            onChange={(e) => setZ(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={() => setShowMultiples(!showMultiples)}
          className={`px-3 py-2 text-sm rounded transition ${
            showMultiples
              ? 'bg-amber-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {showMultiples ? 'Hide Scalar Multiples' : 'Show Scalar Multiples'}
        </button>
        <button
          onClick={() => setProjectionPlane(projectionPlane === 'z1' ? 'z2' : 'z1')}
          className="px-3 py-2 text-sm rounded bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          Switch to z = {projectionPlane === 'z1' ? '2' : '1'} plane
        </button>
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p className="mb-2">
          <strong>Key Concepts:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>A <span className="text-amber-400">"point"</span> in ℝP² is a line through O in ℝ³</li>
          <li>All scalar multiples (tx, ty, tz) represent the <strong>same</strong> projective point</li>
          <li>The <span className="text-pink-400">Cartesian point</span> is where the line meets the projection plane</li>
          <li>When z = 0, the line is parallel to the plane — a <span className="text-slate-400">point at infinity</span></li>
        </ul>
      </div>
    </div>
  );
}
