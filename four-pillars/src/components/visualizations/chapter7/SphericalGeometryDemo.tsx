import { useState, useRef, useEffect } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export function SphericalGeometryDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotationX, setRotationX] = useState(20);
  const [rotationY, setRotationY] = useState(30);
  const [showEquator, setShowEquator] = useState(true);
  const [showMeridians, setShowMeridians] = useState(true);
  const [showTriangle, setShowTriangle] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });

  const width = 480;
  const height = 420;
  const centerX = 240;
  const centerY = 210;
  const radius = 150;

  // Rotation matrices
  const rotatePoint = (p: Point3D): Point3D => {
    const radX = (rotationX * Math.PI) / 180;
    const radY = (rotationY * Math.PI) / 180;

    // Rotate around Y axis
    const x = p.x * Math.cos(radY) + p.z * Math.sin(radY);
    const z = -p.x * Math.sin(radY) + p.z * Math.cos(radY);
    const y = p.y;

    // Rotate around X axis
    const y2 = y * Math.cos(radX) - z * Math.sin(radX);
    const z2 = y * Math.sin(radX) + z * Math.cos(radX);

    return { x, y: y2, z: z2 };
  };

  const project = (p: Point3D): { x: number; y: number; visible: boolean } => {
    const rotated = rotatePoint(p);
    return {
      x: centerX + rotated.x * radius,
      y: centerY - rotated.y * radius,
      visible: rotated.z > -0.1,
    };
  };

  // Generate great circle points
  const getGreatCircle = (
    normal: Point3D,
    numPoints: number
  ): Point3D[] => {
    const points: Point3D[] = [];

    // Find two perpendicular vectors in the plane
    let u: Point3D;
    if (Math.abs(normal.z) < 0.9) {
      u = { x: -normal.y, y: normal.x, z: 0 };
    } else {
      u = { x: 0, y: -normal.z, z: normal.y };
    }
    const len = Math.sqrt(u.x * u.x + u.y * u.y + u.z * u.z);
    u = { x: u.x / len, y: u.y / len, z: u.z / len };

    const v = {
      x: normal.y * u.z - normal.z * u.y,
      y: normal.z * u.x - normal.x * u.z,
      z: normal.x * u.y - normal.y * u.x,
    };

    for (let i = 0; i <= numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        x: Math.cos(angle) * u.x + Math.sin(angle) * v.x,
        y: Math.cos(angle) * u.y + Math.sin(angle) * v.y,
        z: Math.cos(angle) * u.z + Math.sin(angle) * v.z,
      });
    }
    return points;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw sphere outline
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Draw latitude lines (not great circles, for reference)
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    for (let lat = -60; lat <= 60; lat += 30) {
      const latRad = (lat * Math.PI) / 180;
      const r = Math.cos(latRad);
      const y = Math.sin(latRad);

      const points: Point3D[] = [];
      for (let i = 0; i <= 60; i++) {
        const angle = (i / 60) * Math.PI * 2;
        points.push({
          x: r * Math.cos(angle),
          y: y,
          z: r * Math.sin(angle),
        });
      }

      ctx.beginPath();
      let started = false;
      points.forEach((p) => {
        const proj = project(p);
        if (proj.visible) {
          if (!started) {
            ctx.moveTo(proj.x, proj.y);
            started = true;
          } else {
            ctx.lineTo(proj.x, proj.y);
          }
        } else {
          started = false;
        }
      });
      ctx.stroke();
    }

    // Draw equator (great circle)
    if (showEquator) {
      ctx.strokeStyle = '#22d3ee';
      ctx.lineWidth = 3;
      const equator = getGreatCircle({ x: 0, y: 1, z: 0 }, 60);

      // Front half
      ctx.beginPath();
      let started = false;
      equator.forEach((p) => {
        const proj = project(p);
        if (proj.visible) {
          if (!started) {
            ctx.moveTo(proj.x, proj.y);
            started = true;
          } else {
            ctx.lineTo(proj.x, proj.y);
          }
        } else {
          started = false;
        }
      });
      ctx.stroke();

      // Back half (dashed)
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = '#22d3ee50';
      ctx.beginPath();
      started = false;
      equator.forEach((p) => {
        const proj = project(p);
        if (!proj.visible) {
          if (!started) {
            ctx.moveTo(proj.x, proj.y);
            started = true;
          } else {
            ctx.lineTo(proj.x, proj.y);
          }
        } else {
          started = false;
        }
      });
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw meridians (great circles)
    if (showMeridians) {
      for (let lon = 0; lon < 180; lon += 45) {
        const lonRad = (lon * Math.PI) / 180;
        const normal = { x: Math.sin(lonRad), y: 0, z: Math.cos(lonRad) };
        const meridian = getGreatCircle(normal, 60);

        // Front half
        ctx.strokeStyle = '#f472b6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        let started = false;
        meridian.forEach((p) => {
          const proj = project(p);
          if (proj.visible) {
            if (!started) {
              ctx.moveTo(proj.x, proj.y);
              started = true;
            } else {
              ctx.lineTo(proj.x, proj.y);
            }
          } else {
            started = false;
          }
        });
        ctx.stroke();

        // Back half (dashed)
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = '#f472b650';
        ctx.beginPath();
        started = false;
        meridian.forEach((p) => {
          const proj = project(p);
          if (!proj.visible) {
            if (!started) {
              ctx.moveTo(proj.x, proj.y);
              started = true;
            } else {
              ctx.lineTo(proj.x, proj.y);
            }
          } else {
            started = false;
          }
        });
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Draw spherical triangle
    if (showTriangle) {
      // Three vertices on the sphere
      const A: Point3D = { x: 0, y: 1, z: 0 }; // North pole
      const B: Point3D = { x: 1, y: 0, z: 0 }; // On equator
      const C: Point3D = { x: 0, y: 0, z: 1 }; // On equator, 90° away

      // Draw vertices
      const projA = project(A);
      const projB = project(B);
      const projC = project(C);

      if (projA.visible) {
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(projA.x, projA.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('N', projA.x + 10, projA.y - 5);
      }

      if (projB.visible) {
        ctx.fillStyle = '#34d399';
        ctx.beginPath();
        ctx.arc(projB.x, projB.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#34d399';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('A', projB.x + 10, projB.y + 5);
      }

      if (projC.visible) {
        ctx.fillStyle = '#60a5fa';
        ctx.beginPath();
        ctx.arc(projC.x, projC.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#60a5fa';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('B', projC.x + 10, projC.y + 5);
      }

      // Draw the sides (great circle arcs)
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 3;

      // Arc from A to B (quarter of a meridian)
      const drawArc = (p1: Point3D, p2: Point3D) => {
        ctx.beginPath();
        let started = false;
        for (let t = 0; t <= 1; t += 0.02) {
          // Spherical interpolation (slerp)
          const dot = p1.x * p2.x + p1.y * p2.y + p1.z * p2.z;
          const theta = Math.acos(Math.max(-1, Math.min(1, dot)));
          const sinTheta = Math.sin(theta);

          let p: Point3D;
          if (sinTheta < 0.001) {
            p = p1;
          } else {
            const a = Math.sin((1 - t) * theta) / sinTheta;
            const b = Math.sin(t * theta) / sinTheta;
            p = {
              x: a * p1.x + b * p2.x,
              y: a * p1.y + b * p2.y,
              z: a * p1.z + b * p2.z,
            };
          }

          const proj = project(p);
          if (proj.visible) {
            if (!started) {
              ctx.moveTo(proj.x, proj.y);
              started = true;
            } else {
              ctx.lineTo(proj.x, proj.y);
            }
          }
        }
        ctx.stroke();
      };

      drawArc(A, B);
      drawArc(A, C);
      drawArc(B, C);
    }

    // Info box
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(10, 10, 160, 85);
    ctx.strokeStyle = '#334155';
    ctx.strokeRect(10, 10, 160, 85);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('Spherical Triangle', 20, 30);
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText('Vertices: N, A, B', 20, 48);
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Each angle = 90°', 20, 65);
    ctx.fillStyle = '#34d399';
    ctx.fillText('Sum = 270° > 180°', 20, 82);

    // Instructions
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Drag to rotate sphere', 10, height - 10);

  }, [rotationX, rotationY, showEquator, showMeridians, showTriangle]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging) return;
    const dx = e.clientX - lastMouse.x;
    const dy = e.clientY - lastMouse.y;
    setRotationY((prev) => prev + dx * 0.5);
    setRotationX((prev) => Math.max(-89, Math.min(89, prev + dy * 0.5)));
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Spherical Geometry</h4>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-700 rounded cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />
        </div>

        <div className="w-full md:w-52 space-y-3">
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showEquator}
              onChange={(e) => setShowEquator(e.target.checked)}
              className="rounded"
            />
            Show equator
          </label>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showMeridians}
              onChange={(e) => setShowMeridians(e.target.checked)}
              className="rounded"
            />
            Show meridians
          </label>

          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={showTriangle}
              onChange={(e) => setShowTriangle(e.target.checked)}
              className="rounded"
            />
            Show spherical triangle
          </label>

          <button
            onClick={() => {
              setRotationX(20);
              setRotationY(30);
            }}
            className="w-full px-3 py-1.5 text-sm bg-slate-700 text-slate-200 rounded hover:bg-slate-600"
          >
            Reset View
          </button>

          <div className="p-3 bg-slate-800 rounded text-xs">
            <p className="text-slate-300 mb-2">
              <strong className="text-cyan-400">Great Circles:</strong>
            </p>
            <p className="text-slate-400">
              The "lines" of spherical geometry. They are the intersections of planes through the center with the sphere.
            </p>
            <p className="text-slate-400 mt-2">
              <strong className="text-yellow-400">No parallel lines:</strong> Any two great circles intersect!
            </p>
          </div>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-cyan-400">Cyan:</span> Equator</p>
            <p><span className="text-pink-400">Pink:</span> Meridians</p>
            <p><span className="text-yellow-400">Yellow:</span> Triangle sides</p>
          </div>
        </div>
      </div>
    </div>
  );
}
