import { useState, useRef, useEffect } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export function PerspectiveProjectionDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [eyeDistance, setEyeDistance] = useState(8);
  const [rotationY, setRotationY] = useState(0.3);
  const [showVanishingPoint, setShowVanishingPoint] = useState(true);

  const width = 500;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2 + 50;

  // Project 3D point to 2D using perspective
  const project = (p: Point3D): [number, number] | null => {
    // Rotate around Y axis
    const cosR = Math.cos(rotationY);
    const sinR = Math.sin(rotationY);
    const rx = p.x * cosR - p.z * sinR;
    const rz = p.x * sinR + p.z * cosR;

    // Perspective projection
    const z = rz + eyeDistance;
    if (z <= 0.1) return null;

    const scale = 80;
    const perspectiveScale = eyeDistance / z;
    const px = centerX + rx * scale * perspectiveScale;
    const py = centerY - p.y * scale * perspectiveScale;

    return [px, py];
  };

  // Define a simple floor grid and cube
  const gridLines: [Point3D, Point3D][] = [];

  // Floor grid (parallel lines going into distance)
  for (let x = -3; x <= 3; x++) {
    gridLines.push([
      { x, y: 0, z: -1 },
      { x, y: 0, z: 5 },
    ]);
  }
  for (let z = -1; z <= 5; z++) {
    gridLines.push([
      { x: -3, y: 0, z },
      { x: 3, y: 0, z },
    ]);
  }

  // Cube vertices
  const cubeVertices: Point3D[] = [
    { x: -0.8, y: 0, z: 1.2 },
    { x: 0.8, y: 0, z: 1.2 },
    { x: 0.8, y: 0, z: 2.8 },
    { x: -0.8, y: 0, z: 2.8 },
    { x: -0.8, y: 1.6, z: 1.2 },
    { x: 0.8, y: 1.6, z: 1.2 },
    { x: 0.8, y: 1.6, z: 2.8 },
    { x: -0.8, y: 1.6, z: 2.8 },
  ];

  const cubeEdges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 0], // Bottom
    [4, 5], [5, 6], [6, 7], [7, 4], // Top
    [0, 4], [1, 5], [2, 6], [3, 7], // Verticals
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw horizon line
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#64748b';
    ctx.font = '11px sans-serif';
    ctx.fillText('Horizon', 10, centerY - 5);

    // Draw floor grid
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    gridLines.forEach(([p1, p2]) => {
      const proj1 = project(p1);
      const proj2 = project(p2);
      if (proj1 && proj2) {
        ctx.beginPath();
        ctx.moveTo(proj1[0], proj1[1]);
        ctx.lineTo(proj2[0], proj2[1]);
        ctx.stroke();
      }
    });

    // Draw cube
    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 2;
    cubeEdges.forEach(([i, j]) => {
      const proj1 = project(cubeVertices[i]);
      const proj2 = project(cubeVertices[j]);
      if (proj1 && proj2) {
        ctx.beginPath();
        ctx.moveTo(proj1[0], proj1[1]);
        ctx.lineTo(proj2[0], proj2[1]);
        ctx.stroke();
      }
    });

    // Fill cube faces (back face for depth cue)
    const backFace = [cubeVertices[2], cubeVertices[3], cubeVertices[7], cubeVertices[6]];
    const backProj = backFace.map(v => project(v)).filter(p => p !== null) as [number, number][];
    if (backProj.length === 4) {
      ctx.fillStyle = 'rgba(244, 114, 182, 0.2)';
      ctx.beginPath();
      ctx.moveTo(backProj[0][0], backProj[0][1]);
      backProj.forEach(p => ctx.lineTo(p[0], p[1]));
      ctx.closePath();
      ctx.fill();
    }

    // Draw vanishing point
    if (showVanishingPoint) {
      // The vanishing point for lines parallel to z-axis
      const vp = project({ x: 0, y: 0, z: 100 });
      if (vp) {
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(vp[0], vp[1], 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fbbf24';
        ctx.font = '11px sans-serif';
        ctx.fillText('Vanishing Point', vp[0] + 10, vp[1] - 5);

        // Draw convergence lines
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.3)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        for (let x = -3; x <= 3; x += 2) {
          const floor = project({ x, y: 0, z: -1 });
          if (floor) {
            ctx.beginPath();
            ctx.moveTo(floor[0], floor[1]);
            ctx.lineTo(vp[0], vp[1]);
            ctx.stroke();
          }
        }
        ctx.setLineDash([]);
      }
    }

    // Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Perspective Projection Demo', 10, 20);

  }, [eyeDistance, rotationY, showVanishingPoint]);

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Perspective Projection</h4>

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
              Eye Distance: {eyeDistance.toFixed(1)}
            </label>
            <input
              type="range"
              min="3"
              max="15"
              step="0.5"
              value={eyeDistance}
              onChange={(e) => setEyeDistance(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Rotation: {(rotationY * 180 / Math.PI).toFixed(0)}°
            </label>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.05"
              value={rotationY}
              onChange={(e) => setRotationY(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showVanishingPoint}
              onChange={(e) => setShowVanishingPoint(e.target.checked)}
              className="rounded"
            />
            Show vanishing point
          </label>

          <div className="p-3 bg-slate-800 rounded">
            <h5 className="text-sm font-semibold text-yellow-400 mb-2">Key Concepts</h5>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>• Parallel lines converge at vanishing point</li>
              <li>• Objects shrink with distance</li>
              <li>• Horizon is at eye level</li>
            </ul>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-pink-400">Pink:</span> 3D cube</p>
            <p><span className="text-yellow-400">Yellow:</span> Vanishing point</p>
            <p><span className="text-slate-500">Gray:</span> Floor grid</p>
          </div>
        </div>
      </div>
    </div>
  );
}
