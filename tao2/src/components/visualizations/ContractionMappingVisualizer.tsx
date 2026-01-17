import { useState, useMemo } from 'react';

type MapType = 'linear' | 'sqrt' | 'cos';

export function ContractionMappingVisualizer() {
  const [mapType, setMapType] = useState<MapType>('linear');
  const [x0, setX0] = useState(0.9);
  const [iterations, setIterations] = useState(10);

  const width = 400;
  const height = 300;
  const padding = 40;

  const { T, iterates, fixedPoint, contractionFactor } = useMemo(() => {
    let func: (x: number) => number;
    let fp: number;
    let c: number;

    switch (mapType) {
      case 'linear':
        func = (x) => 0.5 * x + 0.25; // T(x) = 0.5x + 0.25, fixed point at 0.5
        fp = 0.5;
        c = 0.5;
        break;
      case 'sqrt':
        func = (x) => Math.sqrt(x); // T(x) = √x, fixed point at 1 (on [0.1, 2])
        fp = 1;
        c = 0.5; // approximate
        break;
      case 'cos':
        func = (x) => Math.cos(x); // T(x) = cos(x), fixed point ≈ 0.739
        fp = 0.739085;
        c = 0.67; // |sin(0.739)| ≈ 0.67
        break;
      default:
        func = (x) => x;
        fp = 0;
        c = 1;
    }

    const iters: number[] = [x0];
    let x = x0;
    for (let i = 0; i < iterations; i++) {
      x = func(x);
      iters.push(x);
    }

    return { T: func, iterates: iters, fixedPoint: fp, contractionFactor: c };
  }, [mapType, x0, iterations]);

  // Determine plot range
  const allValues = [...iterates, fixedPoint];
  const minVal = Math.min(0, ...allValues) - 0.1;
  const maxVal = Math.max(1, ...allValues) + 0.1;

  const scaleX = (x: number) => padding + ((x - minVal) / (maxVal - minVal)) * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - ((y - minVal) / (maxVal - minVal)) * (height - 2 * padding);

  // Generate function curve
  const functionCurve = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 100; i++) {
      const x = minVal + (i / 100) * (maxVal - minVal);
      if (x > 0 || mapType !== 'sqrt') {
        const y = T(x);
        if (y >= minVal && y <= maxVal) {
          points.push(`${scaleX(x)},${scaleY(y)}`);
        }
      }
    }
    return points.join(' ');
  }, [T, minVal, maxVal]);

  // Generate cobweb path
  const cobwebPath = useMemo(() => {
    const points: string[] = [];
    let x = x0;
    points.push(`${scaleX(x)},${scaleY(x)}`); // Start on y=x line

    for (let i = 0; i < iterations; i++) {
      const y = T(x);
      points.push(`${scaleX(x)},${scaleY(y)}`); // Vertical to curve
      points.push(`${scaleX(y)},${scaleY(y)}`); // Horizontal to y=x
      x = y;
    }
    return points.join(' ');
  }, [T, x0, iterations]);

  return (
    <div className="p-4 bg-dark-800 rounded-lg">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Contraction Mapping Iteration</h3>

      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">Map T(x)</label>
          <select
            value={mapType}
            onChange={(e) => setMapType(e.target.value as MapType)}
            className="px-3 py-2 bg-dark-700 text-dark-100 rounded border border-dark-600"
          >
            <option value="linear">0.5x + 0.25</option>
            <option value="sqrt">√x</option>
            <option value="cos">cos(x)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">x₀ = {x0.toFixed(2)}</label>
          <input
            type="range"
            min="0.1"
            max="1.5"
            step="0.05"
            value={x0}
            onChange={(e) => setX0(parseFloat(e.target.value))}
            className="w-24"
          />
        </div>

        <div>
          <label className="block text-sm text-dark-300 mb-1">Iterations: {iterations}</label>
          <input
            type="range"
            min="1"
            max="20"
            value={iterations}
            onChange={(e) => setIterations(parseInt(e.target.value))}
            className="w-24"
          />
        </div>
      </div>

      <svg width={width} height={height} className="bg-dark-900 rounded">
        {/* y = x line */}
        <line
          x1={scaleX(minVal)}
          y1={scaleY(minVal)}
          x2={scaleX(maxVal)}
          y2={scaleY(maxVal)}
          stroke="#6b7280"
          strokeDasharray="5,5"
        />

        {/* Function curve y = T(x) */}
        <polyline points={functionCurve} fill="none" stroke="#3b82f6" strokeWidth="2" />

        {/* Cobweb diagram */}
        <polyline points={cobwebPath} fill="none" stroke="#ef4444" strokeWidth="1.5" />

        {/* Fixed point */}
        <circle cx={scaleX(fixedPoint)} cy={scaleY(fixedPoint)} r={6} fill="#22c55e" />

        {/* Starting point */}
        <circle cx={scaleX(x0)} cy={scaleY(x0)} r={5} fill="#ef4444" />

        {/* Axes */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#4b5563" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#4b5563" />

        <text x={width - padding + 5} y={height - padding + 5} fill="#9ca3af" fontSize="12">x</text>
        <text x={padding + 5} y={padding - 5} fill="#9ca3af" fontSize="12">y</text>
      </svg>

      <div className="mt-4 text-sm text-dark-400">
        <p><span className="text-blue-400">Blue</span>: y = T(x)</p>
        <p><span className="text-gray-400">Gray dashed</span>: y = x</p>
        <p><span className="text-red-400">Red</span>: Iteration path (cobweb)</p>
        <p><span className="text-green-400">Green</span>: Fixed point x* = {fixedPoint.toFixed(4)}</p>
        <p className="mt-2">After {iterations} iterations: x = {iterates[iterates.length - 1].toFixed(6)}</p>
        <p>Contraction factor c ≈ {contractionFactor}</p>
      </div>
    </div>
  );
}
