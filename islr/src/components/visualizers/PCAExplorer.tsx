import { useState, useMemo } from 'react';

interface DataPoint {
  x: number;
  y: number;
  z: number;
}

/**
 * PCAExplorer Visualizer
 * 
 * Interactive visualization of Principal Component Analysis.
 * Users can:
 * - View a 2D projection of 3D data
 * - Rotate the view to see different projections
 * - See principal component directions
 * - Understand variance explained
 */
export function PCAExplorer() {
  const [rotation, setRotation] = useState(0); // Rotation angle in degrees
  const [showPC, setShowPC] = useState(true);

  // Generate sample 3D data with correlation structure
  const data: DataPoint[] = useMemo(() => {
    const points: DataPoint[] = [];
    for (let i = 0; i < 50; i++) {
      const t = Math.random() * 2 - 1;
      const noise1 = (Math.random() - 0.5) * 0.3;
      const noise2 = (Math.random() - 0.5) * 0.3;
      points.push({
        x: t + noise1,
        y: 0.7 * t + noise2,
        z: 0.3 * t + (Math.random() - 0.5) * 0.4,
      });
    }
    return points;
  }, []);

  const width = 320;
  const height = 240;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = 80;

  // Project 3D point to 2D based on rotation
  const project = (point: DataPoint): { x: number; y: number } => {
    const rad = (rotation * Math.PI) / 180;
    const projX = point.x * Math.cos(rad) - point.z * Math.sin(rad);
    const projY = point.y;
    
    return {
      x: centerX + projX * scale,
      y: centerY - projY * scale,
    };
  };

  // Calculate variance explained (simulated)
  const varianceExplained = useMemo(() => {
    // In real PCA, this would come from eigenvalues
    const rad = (rotation * Math.PI) / 180;
    const pc1Var = 0.65 + 0.15 * Math.cos(rad * 2);
    const pc2Var = 0.25 - 0.05 * Math.cos(rad * 2);
    const pc3Var = 1 - pc1Var - pc2Var;
    return [pc1Var, pc2Var, pc3Var];
  }, [rotation]);

  // PC direction vectors (simplified)
  const pcVectors = [
    { dx: 1, dy: 0.7, color: '#3b82f6', label: 'PC1' },
    { dx: -0.7, dy: 1, color: '#10b981', label: 'PC2' },
  ];

  return (
    <div className="p-6 bg-dark-800/50 rounded-xl">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">
        PCA Projection Explorer
      </h3>

      <div className="flex gap-4">
        <div>
          <svg
            width={width}
            height={height}
            className="bg-dark-900 rounded-lg"
          >
            {/* Grid */}
            <line x1={centerX} y1={20} x2={centerX} y2={height - 20} stroke="#374151" strokeWidth={1} />
            <line x1={20} y1={centerY} x2={width - 20} y2={centerY} stroke="#374151" strokeWidth={1} />

            {/* Principal component directions */}
            {showPC && pcVectors.map((pc, idx) => {
              const rad = (rotation * Math.PI) / 180;
              const dx = pc.dx * Math.cos(rad);
              const length = 60;
              
              return (
                <g key={idx}>
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={centerX + dx * length}
                    y2={centerY - pc.dy * length * 0.8}
                    stroke={pc.color}
                    strokeWidth={3}
                    opacity={0.7}
                    markerEnd="url(#arrow)"
                  />
                  <text
                    x={centerX + dx * length + 10}
                    y={centerY - pc.dy * length * 0.8}
                    fill={pc.color}
                    fontSize={11}
                    fontWeight="bold"
                  >
                    {pc.label}
                  </text>
                </g>
              );
            })}

            {/* Data points */}
            {data.map((point, idx) => {
              const proj = project(point);
              return (
                <circle
                  key={idx}
                  cx={proj.x}
                  cy={proj.y}
                  r={4}
                  fill="#60a5fa"
                  opacity={0.7}
                  className="transition-all duration-100"
                />
              );
            })}

            {/* Arrow marker definition */}
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth={4}
                markerHeight={4}
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280" />
              </marker>
            </defs>
          </svg>

          <div className="mt-2">
            <label className="block text-xs text-dark-400 mb-1">
              Rotation: {rotation}°
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={rotation}
              onChange={(e) => setRotation(Number(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h4 className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-2">
              Variance Explained
            </h4>
            {['PC1', 'PC2', 'PC3'].map((pc, idx) => (
              <div key={pc} className="flex items-center gap-2 mb-1">
                <span className="text-xs text-dark-400 w-8">{pc}</span>
                <div className="flex-1 h-3 bg-dark-700 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-300"
                    style={{
                      width: `${varianceExplained[idx] * 100}%`,
                      backgroundColor: idx === 0 ? '#3b82f6' : idx === 1 ? '#10b981' : '#6b7280',
                    }}
                  />
                </div>
                <span className="text-xs text-dark-300 w-10 text-right">
                  {(varianceExplained[idx] * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showPC}
              onChange={(e) => setShowPC(e.target.checked)}
              className="rounded border-dark-600"
            />
            <span className="text-xs text-dark-300">Show PC directions</span>
          </label>
        </div>
      </div>

      <p className="mt-4 text-xs text-dark-500">
        Rotate the view to see how the 2D projection changes. PC1 captures the direction of maximum variance.
      </p>
    </div>
  );
}

export default PCAExplorer;
