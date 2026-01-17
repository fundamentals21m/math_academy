import { useState, useMemo } from 'react';

export function RiemannLebesgueVisualizer() {
  const [numPartitions, setNumPartitions] = useState(5);
  const [showLebesgue, setShowLebesgue] = useState(false);

  const width = 400;
  const height = 250;
  const padding = 50;

  // Function: f(x) = x^2 on [0, 1]
  const f = (x: number) => x * x;
  const exactIntegral = 1 / 3; // ∫₀¹ x² dx = 1/3

  // Riemann sum (left endpoints)
  const { riemannRects, riemannSum } = useMemo(() => {
    const dx = 1 / numPartitions;
    const rects: { x: number; width: number; height: number }[] = [];
    let sum = 0;

    for (let i = 0; i < numPartitions; i++) {
      const x = i * dx;
      const h = f(x);
      rects.push({ x, width: dx, height: h });
      sum += h * dx;
    }

    return { riemannRects: rects, riemannSum: sum };
  }, [numPartitions]);

  // Lebesgue-style (horizontal slicing)
  const { lebesgueRects, lebesgueSum } = useMemo(() => {
    const numSlices = 10;
    const dy = 1 / numSlices;
    const rects: { y: number; width: number; height: number }[] = [];
    let sum = 0;

    for (let i = 0; i < numSlices; i++) {
      const y = i * dy;
      // Level set: {x : f(x) > y} = {x : x² > y} = (√y, 1]
      const measure = y < 1 ? 1 - Math.sqrt(y) : 0;
      rects.push({ y, width: measure, height: dy });
      sum += measure * dy;
    }

    return { lebesgueRects: rects, lebesgueSum: sum };
  }, []);

  const scaleX = (x: number) => padding + x * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - y * (height - 2 * padding);

  // Function curve
  const functionCurve = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 50; i++) {
      const x = i / 50;
      const y = f(x);
      points.push(`${scaleX(x)},${scaleY(y)}`);
    }
    return points.join(' ');
  }, []);

  return (
    <div className="p-4 bg-dark-800 rounded-lg">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Riemann vs Lebesgue Integration</h3>

      <div className="flex gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">Partitions: {numPartitions}</label>
          <input
            type="range"
            min="2"
            max="20"
            value={numPartitions}
            onChange={(e) => setNumPartitions(parseInt(e.target.value))}
            className="w-24"
          />
        </div>

        <label className="flex items-center gap-2 text-dark-300">
          <input
            type="checkbox"
            checked={showLebesgue}
            onChange={(e) => setShowLebesgue(e.target.checked)}
            className="rounded"
          />
          Show Lebesgue slicing
        </label>
      </div>

      <svg width={width} height={height} className="bg-dark-900 rounded">
        {/* Riemann rectangles (vertical slicing) */}
        {!showLebesgue &&
          riemannRects.map((rect, i) => (
            <rect
              key={i}
              x={scaleX(rect.x)}
              y={scaleY(rect.height)}
              width={(width - 2 * padding) / numPartitions}
              height={scaleY(0) - scaleY(rect.height)}
              fill="rgba(59, 130, 246, 0.4)"
              stroke="#3b82f6"
              strokeWidth="1"
            />
          ))}

        {/* Lebesgue rectangles (horizontal slicing) */}
        {showLebesgue &&
          lebesgueRects.map((rect, i) => {
            const x1 = Math.sqrt(rect.y); // Left boundary of level set
            return (
              <rect
                key={i}
                x={scaleX(x1)}
                y={scaleY(rect.y + rect.height)}
                width={scaleX(1) - scaleX(x1)}
                height={(height - 2 * padding) / 10}
                fill="rgba(34, 197, 94, 0.4)"
                stroke="#22c55e"
                strokeWidth="1"
              />
            );
          })}

        {/* Function curve */}
        <polyline points={functionCurve} fill="none" stroke="#e5e7eb" strokeWidth="2" />

        {/* Axes */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#6b7280" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#6b7280" />

        {/* Labels */}
        <text x={width - padding + 5} y={height - padding + 5} fill="#9ca3af" fontSize="12">x</text>
        <text x={padding - 5} y={padding - 5} fill="#9ca3af" fontSize="12">y</text>
        <text x={scaleX(0)} y={height - padding + 15} fill="#9ca3af" fontSize="10">0</text>
        <text x={scaleX(1)} y={height - padding + 15} fill="#9ca3af" fontSize="10">1</text>
      </svg>

      <div className="mt-4 text-sm text-dark-400">
        <p className="font-medium text-dark-200">f(x) = x² on [0, 1]</p>
        <p>Exact integral: ∫₀¹ x² dx = 1/3 ≈ 0.3333</p>

        {!showLebesgue ? (
          <>
            <p className="text-blue-400">
              Riemann sum (left endpoints, {numPartitions} partitions): {riemannSum.toFixed(4)}
            </p>
            <p>Riemann: slice domain vertically, sum f(x)·Δx</p>
          </>
        ) : (
          <>
            <p className="text-green-400">
              Lebesgue-style sum (10 horizontal slices): {lebesgueSum.toFixed(4)}
            </p>
            <p>Lebesgue: slice range horizontally, sum measure of level sets</p>
          </>
        )}
      </div>
    </div>
  );
}
