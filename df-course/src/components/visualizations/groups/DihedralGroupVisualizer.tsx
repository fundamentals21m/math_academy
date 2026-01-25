/**
 * Interactive Dihedral Group Visualizer
 * Demonstrates symmetries of regular n-gons
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export function DihedralGroupVisualizer() {
  const [n, setN] = useState(4); // 4-gon (square) by default
  const [rotation, setRotation] = useState(0);
  const [reflected, setReflected] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Calculate vertex positions
  const vertices = useMemo(() => {
    const verts: { x: number; y: number; label: number }[] = [];
    for (let i = 0; i < n; i++) {
      const angle = (i * 2 * Math.PI) / n - Math.PI / 2; // Start from top
      verts.push({
        x: 150 + 100 * Math.cos(angle),
        y: 150 + 100 * Math.sin(angle),
        label: i + 1,
      });
    }
    return verts;
  }, [n]);

  // Calculate transformed vertices
  const transformedVertices = useMemo(() => {
    return vertices.map((v, i) => {
      // Apply rotation
      let newIndex = (i + rotation) % n;
      // Apply reflection (flip order after position 0)
      if (reflected) {
        newIndex = (n - newIndex) % n;
      }
      return { ...v, label: newIndex + 1 };
    });
  }, [vertices, rotation, reflected, n]);

  // Get current element notation
  const getCurrentElement = () => {
    if (rotation === 0 && !reflected) return 'e';
    if (reflected) {
      return rotation === 0 ? 's' : `sr${rotation === 1 ? '' : `^${rotation}`}`;
    }
    return rotation === 1 ? 'r' : `r^${rotation}`;
  };

  // Apply rotation
  const applyRotation = () => {
    setAnimating(true);
    setRotation((rotation + 1) % n);
    setTimeout(() => setAnimating(false), 500);
  };

  // Apply reflection
  const applyReflection = () => {
    setAnimating(true);
    setReflected(!reflected);
    setTimeout(() => setAnimating(false), 500);
  };

  // Reset to identity
  const reset = () => {
    setRotation(0);
    setReflected(false);
  };

  // Colors for vertices
  const colors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#a855f7', '#ec4899', '#14b8a6', '#f97316'];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Dihedral Group D_{2*n} Visualizer
      </h4>

      {/* N selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">
          Regular n-gon: n = <span className="text-indigo-400 font-mono">{n}</span>
        </label>
        <input
          type="range"
          min={3}
          max={8}
          value={n}
          onChange={(e) => { setN(Number(e.target.value)); reset(); }}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={applyRotation}
          disabled={animating}
          className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-500/30 transition-colors border border-emerald-500/50 disabled:opacity-50"
        >
          Rotate (r)
        </button>
        <button
          onClick={applyReflection}
          disabled={animating}
          className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-colors border border-blue-500/50 disabled:opacity-50"
        >
          Reflect (s)
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-dark-800 text-dark-300 rounded-lg text-sm font-medium hover:bg-dark-700 transition-colors border border-dark-700"
        >
          Reset
        </button>
      </div>

      {/* Current element display */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-center font-mono text-lg">
          Current element: <span className="text-amber-400 font-bold">{getCurrentElement()}</span>
        </p>
      </div>

      {/* Polygon visualization */}
      <svg viewBox="0 0 300 300" className="w-full bg-dark-950 rounded-lg" style={{ maxHeight: '300px' }}>
        {/* Center point */}
        <circle cx={150} cy={150} r={3} fill="#6366f1" />

        {/* Polygon edges */}
        {vertices.map((v, i) => {
          const next = vertices[(i + 1) % n];
          return (
            <line
              key={`edge-${i}`}
              x1={v.x}
              y1={v.y}
              x2={next.x}
              y2={next.y}
              stroke="#4b5563"
              strokeWidth={2}
            />
          );
        })}

        {/* Reflection axis (if reflected) */}
        {reflected && (
          <line
            x1={150}
            y1={40}
            x2={150}
            y2={260}
            stroke="#3b82f6"
            strokeWidth={2}
            strokeDasharray="5,5"
          />
        )}

        {/* Vertices */}
        {transformedVertices.map((v, i) => (
          <motion.g
            key={i}
            initial={false}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <circle
              cx={vertices[i].x}
              cy={vertices[i].y}
              r={20}
              fill={colors[(v.label - 1) % colors.length] + '40'}
              stroke={colors[(v.label - 1) % colors.length]}
              strokeWidth={3}
            />
            <text
              x={vertices[i].x}
              y={vertices[i].y + 5}
              textAnchor="middle"
              fill={colors[(v.label - 1) % colors.length]}
              fontSize={16}
              fontWeight="bold"
            >
              {v.label}
            </text>
          </motion.g>
        ))}

        {/* Rotation indicator */}
        {rotation > 0 && !reflected && (
          <text x={150} y={280} textAnchor="middle" fill="#10b981" fontSize={12}>
            Rotated {(rotation * 360) / n}°
          </text>
        )}
      </svg>

      {/* Group info */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
          <p className="text-sm text-emerald-400">
            <strong>Rotations:</strong> {n} elements
          </p>
          <p className="text-xs text-dark-400 mt-1">
            e, r, r², ..., r^{n-1}
          </p>
        </div>
        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
          <p className="text-sm text-blue-400">
            <strong>Reflections:</strong> {n} elements
          </p>
          <p className="text-xs text-dark-400 mt-1">
            s, sr, sr², ..., sr^{n-1}
          </p>
        </div>
      </div>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Relations:</strong> r^n = e, s² = e, rs = sr⁻¹.
          The group D_{2*n} has order 2n: {n} rotations and {n} reflections.
          For n ≥ 3, D_{2*n} is non-abelian since rs ≠ sr.
        </p>
      </div>
    </div>
  );
}
