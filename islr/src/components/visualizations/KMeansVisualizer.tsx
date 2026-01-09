import { useState } from 'react';

interface Point {
  x: number;
  y: number;
  cluster: number;
}

interface Centroid {
  x: number;
  y: number;
}

/**
 * KMeansVisualizer
 * 
 * Interactive visualization of the K-means clustering algorithm.
 * Users can:
 * - Step through iterations
 * - See cluster assignments update
 * - Watch centroids move
 * - Reset and try different initial conditions
 */
export function KMeansVisualizer() {
  const k = 3;
  const [iteration, setIteration] = useState(0);
  const [isConverged, setIsConverged] = useState(false);

  // Generate stable initial points using seeded positions
  const [initialPoints] = useState<Point[]>(() => {
    const pts: Point[] = [];
    // Cluster 1 (top-left) - deterministic pseudo-random positions
    for (let i = 0; i < 8; i++) {
      pts.push({ x: 50 + ((i * 7 + 3) % 60), y: 40 + ((i * 6 + 2) % 50), cluster: -1 });
    }
    // Cluster 2 (top-right)
    for (let i = 0; i < 8; i++) {
      pts.push({ x: 200 + ((i * 7 + 5) % 60), y: 50 + ((i * 6 + 4) % 50), cluster: -1 });
    }
    // Cluster 3 (bottom-center)
    for (let i = 0; i < 8; i++) {
      pts.push({ x: 120 + ((i * 10 + 2) % 80), y: 160 + ((i * 6 + 1) % 50), cluster: -1 });
    }
    return pts;
  });

  const [points, setPoints] = useState<Point[]>(initialPoints);
  const [centroids, setCentroids] = useState<Centroid[]>(() => {
    // Initialize deterministic centroids
    return [
      { x: 80, y: 60 },
      { x: 230, y: 75 },
      { x: 160, y: 185 },
    ];
  });

  const width = 320;
  const height = 240;
  
  const clusterColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  const assignClusters = () => {
    const newPoints = points.map(point => {
      let minDist = Infinity;
      let closestCluster = 0;
      
      centroids.forEach((centroid, idx) => {
        const dist = Math.sqrt(
          Math.pow(point.x - centroid.x, 2) + Math.pow(point.y - centroid.y, 2)
        );
        if (dist < minDist) {
          minDist = dist;
          closestCluster = idx;
        }
      });
      
      return { ...point, cluster: closestCluster };
    });
    
    setPoints(newPoints);
    return newPoints;
  };

  const updateCentroids = (assignedPoints: Point[]) => {
    const newCentroids = centroids.map((_, idx) => {
      const clusterPoints = assignedPoints.filter(p => p.cluster === idx);
      if (clusterPoints.length === 0) return centroids[idx];
      
      return {
        x: clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length,
        y: clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length,
      };
    });
    
    // Check convergence
    const moved = newCentroids.some((nc, idx) => {
      const dist = Math.sqrt(
        Math.pow(nc.x - centroids[idx].x, 2) + Math.pow(nc.y - centroids[idx].y, 2)
      );
      return dist > 1;
    });
    
    setCentroids(newCentroids);
    if (!moved) setIsConverged(true);
  };

  const step = () => {
    if (isConverged) return;
    
    const assignedPoints = assignClusters();
    setTimeout(() => {
      updateCentroids(assignedPoints);
      setIteration(i => i + 1);
    }, 300);
  };

  const reset = () => {
    setPoints(initialPoints.map(p => ({ ...p, cluster: -1 })));
    setCentroids([
      { x: 80, y: 60 },
      { x: 230, y: 75 },
      { x: 160, y: 185 },
    ]);
    setIteration(0);
    setIsConverged(false);
  };

  return (
    <div className="p-6 bg-dark-800/50 rounded-xl">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">
        K-Means Clustering
      </h3>
      
      <div className="flex gap-4">
        <svg
          width={width}
          height={height}
          className="bg-dark-900 rounded-lg"
        >
          {/* Data points */}
          {points.map((point, index) => (
            <circle
              key={`point-${index}`}
              cx={point.x}
              cy={point.y}
              r={6}
              fill={point.cluster >= 0 ? clusterColors[point.cluster] : '#6b7280'}
              opacity={0.8}
              className="transition-all duration-300"
            />
          ))}
          
          {/* Centroids */}
          {centroids.map((centroid, index) => (
            <g key={`centroid-${index}`}>
              <circle
                cx={centroid.x}
                cy={centroid.y}
                r={12}
                fill={clusterColors[index]}
                stroke="#fff"
                strokeWidth={3}
                className="transition-all duration-500"
              />
              <text
                x={centroid.x}
                y={centroid.y + 4}
                textAnchor="middle"
                fill="#fff"
                fontSize={10}
                fontWeight="bold"
              >
                {index + 1}
              </text>
            </g>
          ))}
        </svg>

        <div className="flex-1 space-y-3">
          <div className="text-sm">
            <span className="text-dark-400">Clusters (k):</span>
            <span className="text-dark-200 ml-2">{k}</span>
          </div>
          <div className="text-sm">
            <span className="text-dark-400">Iteration:</span>
            <span className="text-emerald-400 ml-2">{iteration}</span>
          </div>
          <div className="text-sm">
            <span className="text-dark-400">Status:</span>
            <span className={`ml-2 ${isConverged ? 'text-emerald-400' : 'text-amber-400'}`}>
              {isConverged ? 'Converged!' : 'Running...'}
            </span>
          </div>
          
          <div className="flex gap-2 mt-4">
            <button
              onClick={step}
              disabled={isConverged}
              className="px-3 py-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 disabled:bg-dark-600 disabled:text-dark-500 text-white rounded-lg transition-colors"
            >
              Step
            </button>
            <button
              onClick={reset}
              className="px-3 py-1.5 text-xs bg-dark-700 hover:bg-dark-600 text-dark-300 rounded-lg transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-dark-500">
        Click "Step" to iterate: assign points to nearest centroid, then update centroid positions.
      </p>
    </div>
  );
}

export default KMeansVisualizer;
