import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

interface Quaternion {
  w: number;
  x: number;
  y: number;
  z: number;
}

export function QuaternionDemo({ className = '' }: Props) {
  const [rotationAxis, setRotationAxis] = useState<'x' | 'y' | 'z'>('z');
  const [angle, setAngle] = useState(90);
  const [showMultiplication, setShowMultiplication] = useState(false);

  // Basic quaternion units
  const i: Quaternion = { w: 0, x: 1, y: 0, z: 0 };
  const j: Quaternion = { w: 0, x: 0, y: 1, z: 0 };
  const k: Quaternion = { w: 0, x: 0, y: 0, z: 1 };

  // Quaternion multiplication
  const multiplyQuaternions = (a: Quaternion, b: Quaternion): Quaternion => ({
    w: a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
    x: a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
    y: a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
    z: a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w,
  });

  // Create rotation quaternion
  const createRotationQuaternion = (axis: 'x' | 'y' | 'z', angleDeg: number): Quaternion => {
    const angleRad = (angleDeg * Math.PI) / 180;
    const halfAngle = angleRad / 2;
    const sinHalf = Math.sin(halfAngle);
    const cosHalf = Math.cos(halfAngle);

    return {
      w: cosHalf,
      x: axis === 'x' ? sinHalf : 0,
      y: axis === 'y' ? sinHalf : 0,
      z: axis === 'z' ? sinHalf : 0,
    };
  };

  const rotationQuat = createRotationQuaternion(rotationAxis, angle);

  // Apply rotation to a point (as a pure quaternion)
  const rotatePoint = (q: Quaternion, point: { x: number; y: number; z: number }) => {
    const p: Quaternion = { w: 0, x: point.x, y: point.y, z: point.z };
    const qConj: Quaternion = { w: q.w, x: -q.x, y: -q.y, z: -q.z };
    const result = multiplyQuaternions(multiplyQuaternions(q, p), qConj);
    return { x: result.x, y: result.y, z: result.z };
  };

  // Original cube vertices
  const cubeVertices = [
    { x: -1, y: -1, z: -1 },
    { x: 1, y: -1, z: -1 },
    { x: 1, y: 1, z: -1 },
    { x: -1, y: 1, z: -1 },
    { x: -1, y: -1, z: 1 },
    { x: 1, y: -1, z: 1 },
    { x: 1, y: 1, z: 1 },
    { x: -1, y: 1, z: 1 },
  ];

  // Cube edges
  const cubeEdges = [
    [0, 1], [1, 2], [2, 3], [3, 0], // front
    [4, 5], [5, 6], [6, 7], [7, 4], // back
    [0, 4], [1, 5], [2, 6], [3, 7], // connecting
  ];

  // Rotated vertices
  const rotatedVertices = useMemo(() => {
    return cubeVertices.map(v => rotatePoint(rotationQuat, v));
  }, [rotationQuat]);

  // Project 3D to 2D (simple isometric)
  const project = (p: { x: number; y: number; z: number }) => {
    const scale = 40;
    return {
      x: 200 + (p.x - p.z * 0.5) * scale,
      y: 150 + (-p.y + p.z * 0.3) * scale,
    };
  };

  // SVG dimensions
  const width = 400;
  const height = 300;

  // Quaternion multiplication table results
  const ij = multiplyQuaternions(i, j);
  const ji = multiplyQuaternions(j, i);
  const jk = multiplyQuaternions(j, k);
  const kj = multiplyQuaternions(k, j);
  const ki = multiplyQuaternions(k, i);
  const ik = multiplyQuaternions(i, k);
  const ii = multiplyQuaternions(i, i);
  const jj = multiplyQuaternions(j, j);
  const kk = multiplyQuaternions(k, k);

  const formatQuat = (q: Quaternion) => {
    if (q.w === 1) return '1';
    if (q.w === -1) return '-1';
    if (q.x === 1) return 'i';
    if (q.x === -1) return '-i';
    if (q.y === 1) return 'j';
    if (q.y === -1) return '-j';
    if (q.z === 1) return 'k';
    if (q.z === -1) return '-k';
    return `${q.w.toFixed(2)} + ${q.x.toFixed(2)}i + ${q.y.toFixed(2)}j + ${q.z.toFixed(2)}k`;
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Hamilton's Quaternions</h3>

      <p className="text-dark-300 mb-6">
        Quaternions extend complex numbers to 4D: <span className="font-mono text-orange-400">q = w + xi + yj + zk</span>
        <br />
        where <span className="font-mono">i² = j² = k² = ijk = -1</span>
      </p>

      {/* Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowMultiplication(false)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            !showMultiplication ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          3D Rotation
        </button>
        <button
          onClick={() => setShowMultiplication(true)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showMultiplication ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Multiplication Rules
        </button>
      </div>

      {!showMultiplication ? (
        <>
          {/* Rotation controls */}
          <div className="flex gap-2 mb-4">
            {(['x', 'y', 'z'] as const).map(axis => (
              <button
                key={axis}
                onClick={() => setRotationAxis(axis)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  rotationAxis === axis
                    ? axis === 'x' ? 'bg-red-500 text-white' :
                      axis === 'y' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                Rotate around {axis.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label className="text-orange-400 text-sm">Angle: {angle}°</label>
            <input
              type="range"
              min="0"
              max="360"
              step="5"
              value={angle}
              onChange={(e) => setAngle(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
          </div>

          {/* 3D visualization */}
          <div className="bg-dark-900 rounded-lg p-4">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
              {/* Axes */}
              <line x1={200} y1={150} x2={280} y2={150} stroke="#ef4444" strokeWidth={2} />
              <text x={285} y={155} fill="#ef4444" fontSize="12">X</text>
              <line x1={200} y1={150} x2={200} y2={70} stroke="#22c55e" strokeWidth={2} />
              <text x={205} y={65} fill="#22c55e" fontSize="12">Y</text>
              <line x1={200} y1={150} x2={160} y2={180} stroke="#3b82f6" strokeWidth={2} />
              <text x={150} y={190} fill="#3b82f6" fontSize="12">Z</text>

              {/* Cube edges */}
              {cubeEdges.map(([i, j], idx) => {
                const p1 = project(rotatedVertices[i]);
                const p2 = project(rotatedVertices[j]);
                return (
                  <line
                    key={idx}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke="#f97316"
                    strokeWidth={2}
                  />
                );
              })}

              {/* Cube vertices */}
              {rotatedVertices.map((v, i) => {
                const p = project(v);
                return <circle key={i} cx={p.x} cy={p.y} r={4} fill="#f97316" />;
              })}
            </svg>
          </div>

          {/* Quaternion display */}
          <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
            <p className="text-emerald-400 font-medium">Rotation Quaternion</p>
            <p className="text-dark-100 font-mono mt-1">
              q = {rotationQuat.w.toFixed(3)} + {rotationQuat.x.toFixed(3)}i + {rotationQuat.y.toFixed(3)}j + {rotationQuat.z.toFixed(3)}k
            </p>
            <p className="text-dark-400 text-sm mt-2">
              To rotate vector v: v' = q · v · q⁻¹
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Multiplication table */}
          <div className="bg-dark-900 rounded-lg p-4">
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th className="p-2 text-dark-500">×</th>
                  <th className="p-2 text-red-400">i</th>
                  <th className="p-2 text-green-400">j</th>
                  <th className="p-2 text-blue-400">k</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-red-400">i</td>
                  <td className="p-2 text-dark-300">{formatQuat(ii)}</td>
                  <td className="p-2 text-blue-400">{formatQuat(ij)}</td>
                  <td className="p-2 text-green-400">{formatQuat(ik)}</td>
                </tr>
                <tr>
                  <td className="p-2 text-green-400">j</td>
                  <td className="p-2 text-blue-400">{formatQuat(ji)}</td>
                  <td className="p-2 text-dark-300">{formatQuat(jj)}</td>
                  <td className="p-2 text-red-400">{formatQuat(jk)}</td>
                </tr>
                <tr>
                  <td className="p-2 text-blue-400">k</td>
                  <td className="p-2 text-green-400">{formatQuat(ki)}</td>
                  <td className="p-2 text-red-400">{formatQuat(kj)}</td>
                  <td className="p-2 text-dark-300">{formatQuat(kk)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key relations */}
          <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
            <p className="text-emerald-400 font-medium">Hamilton's Discovery (1843)</p>
            <div className="grid grid-cols-2 gap-4 mt-2 text-dark-100 font-mono">
              <p>i² = j² = k² = -1</p>
              <p>ijk = -1</p>
              <p>ij = k, ji = -k</p>
              <p>jk = i, kj = -i</p>
              <p>ki = j, ik = -j</p>
            </div>
            <p className="text-dark-400 text-sm mt-3">
              Note: Quaternion multiplication is <strong>not commutative</strong>! (ij ≠ ji)
            </p>
          </div>
        </>
      )}
    </div>
  );
}
