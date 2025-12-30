import { useState, useRef, useEffect } from 'react';

interface SphereRotationGroupDemoProps {
  className?: string;
}

export function SphereRotationGroupDemo({ className = '' }: SphereRotationGroupDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [axis, setAxis] = useState<'x' | 'y' | 'z'>('z');
  const [angle, setAngle] = useState(45);
  const [showComposition, setShowComposition] = useState(false);
  const [secondAxis, setSecondAxis] = useState<'x' | 'y' | 'z'>('x');
  const [secondAngle, setSecondAngle] = useState(90);

  const width = 550;
  const height = 400;

  // Rotation matrices
  const rotX = (theta: number): number[][] => {
    const c = Math.cos(theta), s = Math.sin(theta);
    return [[1, 0, 0], [0, c, -s], [0, s, c]];
  };

  const rotY = (theta: number): number[][] => {
    const c = Math.cos(theta), s = Math.sin(theta);
    return [[c, 0, s], [0, 1, 0], [-s, 0, c]];
  };

  const rotZ = (theta: number): number[][] => {
    const c = Math.cos(theta), s = Math.sin(theta);
    return [[c, -s, 0], [s, c, 0], [0, 0, 1]];
  };

  const getRotationMatrix = (ax: 'x' | 'y' | 'z', ang: number): number[][] => {
    const rad = (ang * Math.PI) / 180;
    switch (ax) {
      case 'x': return rotX(rad);
      case 'y': return rotY(rad);
      case 'z': return rotZ(rad);
    }
  };

  // Matrix multiplication
  const matMul = (A: number[][], B: number[][]): number[][] => {
    const result: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          result[i][j] += A[i][k] * B[k][j];
        }
      }
    }
    return result;
  };

  // Apply matrix to vector
  const transform = (M: number[][], v: number[]): number[] => {
    return [
      M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2],
      M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2],
      M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2]
    ];
  };

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
    const scale = 100;

    // View rotation for 3D effect
    const viewRot = matMul(rotX(-0.4), rotY(0.5));

    // Project 3D to 2D
    const project = (v: number[]): [number, number] => {
      const rotated = transform(viewRot, v);
      return [cx + rotated[0] * scale, cy - rotated[1] * scale];
    };

    // Draw sphere wireframe
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;

    // Longitude lines
    for (let lon = 0; lon < 360; lon += 30) {
      ctx.beginPath();
      for (let lat = -90; lat <= 90; lat += 5) {
        const lonRad = (lon * Math.PI) / 180;
        const latRad = (lat * Math.PI) / 180;
        const x = Math.cos(latRad) * Math.cos(lonRad);
        const y = Math.cos(latRad) * Math.sin(lonRad);
        const z = Math.sin(latRad);
        const [px, py] = project([x, y, z]);
        if (lat === -90) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Latitude lines
    for (let lat = -60; lat <= 60; lat += 30) {
      ctx.beginPath();
      for (let lon = 0; lon <= 360; lon += 5) {
        const lonRad = (lon * Math.PI) / 180;
        const latRad = (lat * Math.PI) / 180;
        const x = Math.cos(latRad) * Math.cos(lonRad);
        const y = Math.cos(latRad) * Math.sin(lonRad);
        const z = Math.sin(latRad);
        const [px, py] = project([x, y, z]);
        if (lon === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Draw axes
    const axisLength = 1.3;
    const axes: [number[], string, string][] = [
      [[axisLength, 0, 0], '#ef4444', 'x'],
      [[0, axisLength, 0], '#22c55e', 'y'],
      [[0, 0, axisLength], '#3b82f6', 'z']
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
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(label, px + 5, py - 5);
    });

    // Draw rotation axis
    const R1 = getRotationMatrix(axis, angle);
    const axisVec = axis === 'x' ? [1, 0, 0] : axis === 'y' ? [0, 1, 0] : [0, 0, 1];
    const [ax1, ay1] = project(axisVec.map(v => v * 1.5));
    const [ax2, ay2] = project(axisVec.map(v => v * -1.5));

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(ax2, ay2);
    ctx.lineTo(ax1, ay1);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#f59e0b';
    ctx.font = '12px sans-serif';
    ctx.fillText('rotation axis', ax1 + 10, ay1);

    // Draw original point and its image
    const originalPoint = [0.8, 0.4, 0.45];
    const norm = Math.sqrt(originalPoint[0] ** 2 + originalPoint[1] ** 2 + originalPoint[2] ** 2);
    const normalizedPoint = originalPoint.map(v => v / norm);

    const rotatedPoint = transform(R1, normalizedPoint);

    // Original point
    const [opx, opy] = project(normalizedPoint);
    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(opx, opy, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('P', opx + 10, opy);

    // Rotated point
    const [rpx, rpy] = project(rotatedPoint);
    ctx.fillStyle = '#ec4899';
    ctx.beginPath();
    ctx.arc(rpx, rpy, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText("P'", rpx + 10, rpy);

    // Draw arc of rotation
    ctx.strokeStyle = 'rgba(236, 72, 153, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let t = 0; t <= 1; t += 0.05) {
      const thetaT = (angle * t * Math.PI) / 180;
      const Rt = getRotationMatrix(axis, angle * t);
      const pt = transform(Rt, normalizedPoint);
      const [px, py] = project(pt);
      if (t === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Show composition
    if (showComposition) {
      const R2 = getRotationMatrix(secondAxis, secondAngle);
      const R1R2 = matMul(R1, R2);
      const R2R1 = matMul(R2, R1);

      const p1r2 = transform(R1R2, normalizedPoint);
      const p2r1 = transform(R2R1, normalizedPoint);

      // R1(R2(P))
      const [p12x, p12y] = project(p1r2);
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(p12x, p12y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = '11px sans-serif';
      ctx.fillText('R₁R₂(P)', p12x + 8, p12y - 5);

      // R2(R1(P))
      const [p21x, p21y] = project(p2r1);
      ctx.fillStyle = '#8b5cf6';
      ctx.beginPath();
      ctx.arc(p21x, p21y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText('R₂R₁(P)', p21x + 8, p21y + 15);

      // Check if commutative
      const dist = Math.sqrt(
        (p1r2[0] - p2r1[0]) ** 2 + (p1r2[1] - p2r1[1]) ** 2 + (p1r2[2] - p2r1[2]) ** 2
      );
      const commutes = dist < 0.01;

      ctx.fillStyle = commutes ? '#22c55e' : '#ef4444';
      ctx.font = '12px sans-serif';
      ctx.fillText(commutes ? '✓ R₁R₂ = R₂R₁' : '✗ R₁R₂ ≠ R₂R₁', 20, height - 20);
    }

    // Info display
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(`Rotation R${axis.toUpperCase()}(${angle}°)`, 20, 30);

    if (showComposition) {
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.fillText(`R₂ = R${secondAxis.toUpperCase()}(${secondAngle}°)`, 20, 50);
    }

  }, [axis, angle, showComposition, secondAxis, secondAngle]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Rotation Group SO(3)
      </h4>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {(['x', 'y', 'z'] as const).map(ax => (
          <button
            key={ax}
            onClick={() => setAxis(ax)}
            className={`px-4 py-2 text-sm rounded transition ${
              axis === ax
                ? 'bg-amber-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Rotate about {ax.toUpperCase()}-axis
          </button>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-sm text-slate-400 mb-1">Angle: {angle}°</label>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <button
          onClick={() => setShowComposition(!showComposition)}
          className={`px-4 py-2 text-sm rounded transition ${
            showComposition
              ? 'bg-purple-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {showComposition ? 'Hide' : 'Show'} Non-Commutativity
        </button>
      </div>

      {showComposition && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Second axis</label>
            <select
              value={secondAxis}
              onChange={(e) => setSecondAxis(e.target.value as 'x' | 'y' | 'z')}
              className="w-full bg-slate-700 text-slate-200 rounded px-3 py-2"
            >
              <option value="x">X-axis</option>
              <option value="y">Y-axis</option>
              <option value="z">Z-axis</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Second angle: {secondAngle}°</label>
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
      )}

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p className="mb-2"><strong>Key Properties of SO(3):</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>SO(3) = 3×3 orthogonal matrices with det = 1</li>
          <li><span className="text-amber-400">Non-commutative</span>: R₁R₂ ≠ R₂R₁ in general</li>
          <li>Every rotation has an axis and angle (axis-angle representation)</li>
          <li>Every rotation = product of <span className="text-green-400">two reflections</span></li>
          <li>SO(3) ≅ ℝP³ topologically</li>
        </ul>
      </div>
    </div>
  );
}
