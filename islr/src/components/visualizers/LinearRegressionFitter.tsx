import { useState, useCallback, useMemo } from 'react';

interface Point {
  x: number;
  y: number;
}

/**
 * LinearRegressionFitter Visualizer
 * 
 * Interactive visualization where users can:
 * - Click to add data points
 * - Drag points to move them
 * - See the regression line update in real-time
 * - View RSS, R², and coefficient values
 */
export function LinearRegressionFitter() {
  const [points, setPoints] = useState<Point[]>([
    { x: 50, y: 180 },
    { x: 100, y: 150 },
    { x: 150, y: 140 },
    { x: 200, y: 100 },
    { x: 250, y: 80 },
  ]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const width = 320;
  const height = 240;
  const padding = 20;

  // Calculate regression line using least squares
  const regression = useMemo(() => {
    if (points.length < 2) return null;

    const n = points.length;
    const sumX = points.reduce((sum, p) => sum + p.x, 0);
    const sumY = points.reduce((sum, p) => sum + p.y, 0);
    const sumXY = points.reduce((sum, p) => sum + p.x * p.y, 0);
    const sumXX = points.reduce((sum, p) => sum + p.x * p.x, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    // Calculate R²
    const meanY = sumY / n;
    const ssTotal = points.reduce((sum, p) => sum + Math.pow(p.y - meanY, 2), 0);
    const ssResidual = points.reduce((sum, p) => {
      const predicted = slope * p.x + intercept;
      return sum + Math.pow(p.y - predicted, 2);
    }, 0);
    const rSquared = ssTotal > 0 ? 1 - ssResidual / ssTotal : 0;

    return { slope, intercept, rss: ssResidual, rSquared };
  }, [points]);

  const handleSvgClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (draggingIndex !== null) return;
    
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (x > padding && x < width - padding && y > padding && y < height - padding) {
      setPoints([...points, { x, y }]);
    }
  }, [points, draggingIndex]);

  const handleMouseDown = useCallback((index: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setDraggingIndex(index);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (draggingIndex === null) return;
    
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = Math.max(padding, Math.min(width - padding, e.clientX - rect.left));
    const y = Math.max(padding, Math.min(height - padding, e.clientY - rect.top));
    
    setPoints(points.map((p, i) => i === draggingIndex ? { x, y } : p));
  }, [draggingIndex, points]);

  const handleMouseUp = useCallback(() => {
    setDraggingIndex(null);
  }, []);

  const clearPoints = () => setPoints([]);

  return (
    <div className="p-6 bg-dark-800/50 rounded-xl">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">
        Linear Regression Fitter
      </h3>
      
      <div className="flex gap-4">
        <svg
          width={width}
          height={height}
          className="bg-dark-900 rounded-lg cursor-crosshair"
          onClick={handleSvgClick}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Grid lines */}
          {[0.25, 0.5, 0.75].map(ratio => (
            <g key={ratio}>
              <line
                x1={padding}
                y1={height * ratio}
                x2={width - padding}
                y2={height * ratio}
                stroke="#374151"
                strokeDasharray="4,4"
              />
              <line
                x1={width * ratio}
                y1={padding}
                x2={width * ratio}
                y2={height - padding}
                stroke="#374151"
                strokeDasharray="4,4"
              />
            </g>
          ))}
          
          {/* Regression line */}
          {regression && (
            <line
              x1={padding}
              y1={regression.slope * padding + regression.intercept}
              x2={width - padding}
              y2={regression.slope * (width - padding) + regression.intercept}
              stroke="#10b981"
              strokeWidth={2}
            />
          )}
          
          {/* Data points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r={8}
              fill={draggingIndex === index ? '#60a5fa' : '#3b82f6'}
              stroke="#1e3a8a"
              strokeWidth={2}
              className="cursor-move"
              onMouseDown={handleMouseDown(index)}
            />
          ))}
        </svg>

        <div className="flex-1 space-y-3">
          <div className="text-sm">
            <span className="text-dark-400">Points:</span>
            <span className="text-dark-200 ml-2">{points.length}</span>
          </div>
          
          {regression && (
            <>
              <div className="text-sm">
                <span className="text-dark-400">Slope (β₁):</span>
                <span className="text-emerald-400 ml-2 font-mono">
                  {regression.slope.toFixed(3)}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-dark-400">Intercept (β₀):</span>
                <span className="text-emerald-400 ml-2 font-mono">
                  {regression.intercept.toFixed(1)}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-dark-400">RSS:</span>
                <span className="text-amber-400 ml-2 font-mono">
                  {regression.rss.toFixed(1)}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-dark-400">R²:</span>
                <span className="text-blue-400 ml-2 font-mono">
                  {regression.rSquared.toFixed(3)}
                </span>
              </div>
            </>
          )}
          
          <button
            onClick={clearPoints}
            className="mt-4 px-3 py-1.5 text-xs bg-dark-700 hover:bg-dark-600 text-dark-300 rounded-lg transition-colors"
          >
            Clear Points
          </button>
        </div>
      </div>

      <p className="mt-4 text-xs text-dark-500">
        Click to add points. Drag points to adjust. The green line shows the least squares fit.
      </p>
    </div>
  );
}

export default LinearRegressionFitter;
