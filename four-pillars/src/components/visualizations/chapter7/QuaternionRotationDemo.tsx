import { useState, useRef, useEffect } from 'react';

interface QuaternionRotationDemoProps {
  className?: string;
}

// Quaternion type
type Quat = [number, number, number, number]; // [w, x, y, z] = w + xi + yj + zk

export function QuaternionRotationDemo({ className = '' }: QuaternionRotationDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [axisX, setAxisX] = useState(0);
  const [axisY, setAxisY] = useState(0);
  const [axisZ, setAxisZ] = useState(1);
  const [angle, setAngle] = useState(90);
  const [showSecond, setShowSecond] = useState(false);
  const [secondAngle, setSecondAngle] = useState(90);
  const [secondAxisX, setSecondAxisX] = useState(1);
  const [secondAxisY, setSecondAxisY] = useState(0);
  const [secondAxisZ, setSecondAxisZ] = useState(0);

  const width = 550;
  const height = 400;

  // Normalize axis
  const normalizeAxis = (x: number, y: number, z: number): [number, number, number] => {
    const len = Math.sqrt(x * x + y * y + z * z);
    if (len < 0.001) return [0, 0, 1];
    return [x / len, y / len, z / len];
  };

  // Create quaternion from axis-angle
  const fromAxisAngle = (ax: number, ay: number, az: number, angleDeg: number): Quat => {
    const [nx, ny, nz] = normalizeAxis(ax, ay, az);
    const halfAngle = (angleDeg * Math.PI) / 360; // Half angle in radians
    const s = Math.sin(halfAngle);
    return [Math.cos(halfAngle), nx * s, ny * s, nz * s];
  };

  // Quaternion multiplication
  const quatMul = (q1: Quat, q2: Quat): Quat => {
    const [w1, x1, y1, z1] = q1;
    const [w2, x2, y2, z2] = q2;
    return [
      w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2,
      w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2,
      w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2,
      w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2
    ];
  };

  // Quaternion conjugate
  const quatConj = (q: Quat): Quat => [q[0], -q[1], -q[2], -q[3]];

  // Rotate point by quaternion: qpq^-1
  const rotateByQuat = (q: Quat, p: [number, number, number]): [number, number, number] => {
    const pQuat: Quat = [0, p[0], p[1], p[2]];
    const qInv = quatConj(q); // For unit quaternion, conjugate = inverse
    const result = quatMul(quatMul(q, pQuat), qInv);
    return [result[1], result[2], result[3]];
  };

  const q1 = fromAxisAngle(axisX, axisY, axisZ, angle);
  const q2 = fromAxisAngle(secondAxisX, secondAxisY, secondAxisZ, secondAngle);

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
    const scale = 90;

    // Simple 3D projection with rotation
    const viewAngleX = -0.4;
    const viewAngleY = 0.6;

    const project = (v: [number, number, number]): [number, number] => {
      // Rotate for view
      const cy1 = Math.cos(viewAngleY), sy1 = Math.sin(viewAngleY);
      const cx1 = Math.cos(viewAngleX), sx1 = Math.sin(viewAngleX);

      const x = v[0] * cy1 + v[2] * sy1;
      let z = -v[0] * sy1 + v[2] * cy1;
      const y = v[1] * cx1 - z * sx1;
      z = v[1] * sx1 + z * cx1;

      return [cx + x * scale, cy - y * scale];
    };

    // Draw coordinate axes
    const axisLen = 1.4;
    const axes: [[number, number, number], string, string][] = [
      [[axisLen, 0, 0], '#ef4444', 'x (i)'],
      [[0, axisLen, 0], '#22c55e', 'y (j)'],
      [[0, 0, axisLen], '#3b82f6', 'z (k)']
    ];

    axes.forEach(([vec, color, label]) => {
      const [px, py] = project(vec);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(px, py);
      ctx.stroke();

      ctx.fillStyle = color;
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(label, px + 5, py - 5);
    });

    // Draw rotation axis
    const [nx, ny, nz] = normalizeAxis(axisX, axisY, axisZ);
    const axisVec: [number, number, number] = [nx * 1.5, ny * 1.5, nz * 1.5];
    const [ax1, ay1] = project(axisVec);
    const [ax2, ay2] = project([-nx * 1.5, -ny * 1.5, -nz * 1.5]);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(ax2, ay2);
    ctx.lineTo(ax1, ay1);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw original vectors (unit cube vertices)
    const originalPoints: [number, number, number][] = [
      [1, 0, 0], [0, 1, 0], [0, 0, 1],
      [0.7, 0.7, 0]
    ];

    // Draw original and rotated points
    originalPoints.forEach((p) => {
      const [opx, opy] = project(p);

      // Original point
      ctx.fillStyle = 'rgba(96, 165, 250, 0.6)';
      ctx.beginPath();
      ctx.arc(opx, opy, 5, 0, Math.PI * 2);
      ctx.fill();

      // Rotated by q1
      const rotated1 = rotateByQuat(q1, p);
      const [rpx, rpy] = project(rotated1);
      ctx.fillStyle = '#ec4899';
      ctx.beginPath();
      ctx.arc(rpx, rpy, 6, 0, Math.PI * 2);
      ctx.fill();

      // Draw arc
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let t = 0; t <= 1; t += 0.05) {
        const qt = fromAxisAngle(axisX, axisY, axisZ, angle * t);
        const pt = rotateByQuat(qt, p);
        const [px, py] = project(pt);
        if (t === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      if (showSecond) {
        // Rotated by q1 then q2
        const rotated12 = rotateByQuat(q2, rotated1);
        const [r12x, r12y] = project(rotated12);
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.arc(r12x, r12y, 5, 0, Math.PI * 2);
        ctx.fill();

        // Rotated by q2 then q1
        const rotated2 = rotateByQuat(q2, p);
        const rotated21 = rotateByQuat(q1, rotated2);
        const [r21x, r21y] = project(rotated21);
        ctx.fillStyle = '#8b5cf6';
        ctx.beginPath();
        ctx.arc(r21x, r21y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Display quaternion info
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Quaternion Representation', 20, 30);

    ctx.font = '12px monospace';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText(`q = ${q1[0].toFixed(3)} + ${q1[1].toFixed(3)}i + ${q1[2].toFixed(3)}j + ${q1[3].toFixed(3)}k`, 20, 50);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    const halfAngle = (angle / 2).toFixed(1);
    ctx.fillText(`q = cos(${halfAngle}°) + sin(${halfAngle}°)(n₁i + n₂j + n₃k)`, 20, 70);

    // Norm check
    const norm = Math.sqrt(q1[0] ** 2 + q1[1] ** 2 + q1[2] ** 2 + q1[3] ** 2);
    ctx.fillStyle = Math.abs(norm - 1) < 0.01 ? '#22c55e' : '#ef4444';
    ctx.fillText(`|q| = ${norm.toFixed(4)} (unit quaternion)`, 20, 90);

    if (showSecond) {
      ctx.fillStyle = '#8b5cf6';
      ctx.font = '11px sans-serif';
      ctx.fillText(`q₂ = ${q2[0].toFixed(2)} + ${q2[1].toFixed(2)}i + ${q2[2].toFixed(2)}j + ${q2[3].toFixed(2)}k`, 20, 110);

      const q12 = quatMul(q1, q2);
      const q21 = quatMul(q2, q1);

      ctx.fillStyle = '#22c55e';
      ctx.fillText(`q₁q₂ = ${q12[0].toFixed(2)} + ${q12[1].toFixed(2)}i + ${q12[2].toFixed(2)}j + ${q12[3].toFixed(2)}k`, 20, 130);

      ctx.fillStyle = '#8b5cf6';
      ctx.fillText(`q₂q₁ = ${q21[0].toFixed(2)} + ${q21[1].toFixed(2)}i + ${q21[2].toFixed(2)}j + ${q21[3].toFixed(2)}k`, 20, 150);

      // Check if same rotation
      const same = Math.abs(q12[0] - q21[0]) < 0.01 &&
                  Math.abs(q12[1] - q21[1]) < 0.01 &&
                  Math.abs(q12[2] - q21[2]) < 0.01 &&
                  Math.abs(q12[3] - q21[3]) < 0.01;
      ctx.fillStyle = same ? '#22c55e' : '#ef4444';
      ctx.fillText(same ? '✓ q₁q₂ = q₂q₁' : '✗ q₁q₂ ≠ q₂q₁', 20, 170);
    }

    // Legend
    ctx.fillStyle = '#60a5fa';
    ctx.font = '11px sans-serif';
    ctx.fillText('● Original', width - 100, 30);
    ctx.fillStyle = '#ec4899';
    ctx.fillText("● q₁(P)", width - 100, 50);
    if (showSecond) {
      ctx.fillStyle = '#22c55e';
      ctx.fillText('● q₁q₂(P)', width - 100, 70);
      ctx.fillStyle = '#8b5cf6';
      ctx.fillText('● q₂q₁(P)', width - 100, 90);
    }

  }, [axisX, axisY, axisZ, angle, showSecond, secondAngle, secondAxisX, secondAxisY, secondAxisZ, q1, q2]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Quaternion Rotations
      </h4>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded"
        />
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div>
          <label className="block text-sm text-red-400 mb-1">Axis x: {axisX.toFixed(1)}</label>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.1"
            value={axisX}
            onChange={(e) => setAxisX(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-green-400 mb-1">Axis y: {axisY.toFixed(1)}</label>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.1"
            value={axisY}
            onChange={(e) => setAxisY(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-blue-400 mb-1">Axis z: {axisZ.toFixed(1)}</label>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.1"
            value={axisZ}
            onChange={(e) => setAxisZ(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm text-slate-400 mb-1">Rotation angle: {angle}°</label>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          onClick={() => { setAxisX(0); setAxisY(0); setAxisZ(1); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          Z-axis
        </button>
        <button
          onClick={() => { setAxisX(1); setAxisY(0); setAxisZ(0); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          X-axis
        </button>
        <button
          onClick={() => { setAxisX(0); setAxisY(1); setAxisZ(0); }}
          className="px-3 py-2 text-sm rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
        >
          Y-axis
        </button>
        <button
          onClick={() => setShowSecond(!showSecond)}
          className={`px-3 py-2 text-sm rounded transition ${
            showSecond
              ? 'bg-purple-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {showSecond ? 'Hide' : 'Show'} Composition
        </button>
      </div>

      {showSecond && (
        <div className="bg-slate-900/50 p-3 rounded mb-4">
          <p className="text-sm text-purple-400 font-semibold mb-2">Second rotation q₂:</p>
          <div className="grid grid-cols-4 gap-2">
            <div>
              <label className="block text-xs text-slate-400">n_x</label>
              <input
                type="range"
                min="-1"
                max="1"
                step="0.5"
                value={secondAxisX}
                onChange={(e) => setSecondAxisX(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400">n_y</label>
              <input
                type="range"
                min="-1"
                max="1"
                step="0.5"
                value={secondAxisY}
                onChange={(e) => setSecondAxisY(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400">n_z</label>
              <input
                type="range"
                min="-1"
                max="1"
                step="0.5"
                value={secondAxisZ}
                onChange={(e) => setSecondAxisZ(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400">{secondAngle}°</label>
              <input
                type="range"
                min="0"
                max="360"
                value={secondAngle}
                onChange={(e) => setSecondAngle(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p className="mb-2"><strong>Key Properties:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>q = cos(θ/2) + sin(θ/2)(n₁i + n₂j + n₃k) for rotation by θ about n</li>
          <li>Note the <span className="text-amber-400">half angle θ/2</span> in the formula</li>
          <li>q and −q represent the <strong>same rotation</strong></li>
          <li>Composition: R₁R₂ ↔ q₁q₂ (quaternion multiplication)</li>
          <li>Unit quaternions S³ map 2-to-1 onto SO(3)</li>
        </ul>
      </div>
    </div>
  );
}
