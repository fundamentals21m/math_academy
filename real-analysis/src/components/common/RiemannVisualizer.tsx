import React, { useState, useCallback, useMemo } from 'react';
import { Math, MathBlock } from '@/components/common/MathBlock';

interface RiemannVisualizerProps {
  func: (x: number) => number;
  a: number;
  b: number;
  functionName?: string;
  functionLatex?: string;
}

type RiemannMethod = 'left' | 'right' | 'midpoint' | 'trapezoidal';

export function RiemannVisualizer({
  func,
  a,
  b,
  functionName = "f",
  functionLatex = "f(x)"
}: RiemannVisualizerProps) {
  const [numRectangles, setNumRectangles] = useState(6);
  const [method, setMethod] = useState<RiemannMethod>('left');

  // Calculate rectangle data
  const rectangles = useMemo(() => {
    const width = (b - a) / numRectangles;
    const rects = [];

    for (let i = 0; i < numRectangles; i++) {
      const left = a + i * width;
      const right = a + (i + 1) * width;

      let height: number;
      let x_eval: number;

      switch (method) {
        case 'left':
          x_eval = left;
          height = func(left);
          break;
        case 'right':
          x_eval = right;
          height = func(right);
          break;
        case 'midpoint':
          x_eval = (left + right) / 2;
          height = func(x_eval);
          break;
        case 'trapezoidal':
          // For trapezoidal, we'll show both endpoints
          const h1 = func(left);
          const h2 = func(right);
          height = (h1 + h2) / 2; // Average height for visualization
          x_eval = (left + right) / 2;
          break;
      }

      const area = height * width;

      rects.push({
        left,
        right,
        width,
        height,
        area,
        x_eval,
        index: i
      });
    }

    return rects;
  }, [func, a, b, numRectangles, method]);

  // Calculate total approximation
  const totalApproximation = rectangles.reduce((sum, rect) => sum + rect.area, 0);

  // Calculate exact integral (for comparison)
  const exactIntegral = useMemo(() => {
    // For x² from 0 to 1, ∫x² dx = x³/3 = 1/3
    if (a === 0 && b === 1 && func(0.5) === 0.25) {
      return 1/3;
    }
    // For other functions, we'd need numerical integration
    return null;
  }, [a, b, func]);

  const error = exactIntegral ? Math.abs(totalApproximation - exactIntegral) : null;

  return (
    <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
      <h3 className="text-lg font-semibold text-emerald-400 mb-4">
        Riemann Sum Integrator
      </h3>

      <div className="mb-4">
        <MathBlock>
          {`\\int_{${a}}^{${b}} ${functionLatex} \\, dx \\approx ${totalApproximation.toFixed(4)}`}
        </MathBlock>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Number of Rectangles: {numRectangles}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={numRectangles}
              onChange={(e) => setNumRectangles(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Integration Method
            </label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as RiemannMethod)}
              className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-dark-100"
            >
              <option value="left">Left Endpoints</option>
              <option value="right">Right Endpoints</option>
              <option value="midpoint">Midpoints</option>
              <option value="trapezoidal">Trapezoidal (Average)</option>
            </select>
          </div>

          <div className="text-sm text-dark-400 space-y-1">
            <p><strong>Current Method:</strong> {method.charAt(0).toUpperCase() + method.slice(1)} Rule</p>
            <p><strong>Rectangle Width:</strong> {(b - a) / numRectangles}</p>
            <p><strong>Approximation:</strong> {totalApproximation.toFixed(4)}</p>
            {exactIntegral && (
              <p><strong>Exact Value:</strong> {exactIntegral.toFixed(4)}</p>
            )}
            {error && (
              <p><strong>Error:</strong> {error.toFixed(6)}</p>
            )}
          </div>
        </div>

        {/* Rectangle Details */}
        <div className="space-y-2">
          <h4 className="font-semibold text-dark-200">Rectangle Details</h4>
          <div className="max-h-64 overflow-y-auto space-y-1">
            {rectangles.map((rect, index) => (
              <div key={index} className="text-xs bg-dark-700/50 p-2 rounded">
                <div className="flex justify-between">
                  <span>Rectangle {index + 1}:</span>
                  <span>[{rect.left.toFixed(2)}, {rect.right.toFixed(2)}]</span>
                </div>
                <div className="flex justify-between text-dark-400">
                  <span>Height: {rect.height.toFixed(3)}</span>
                  <span>Area: {rect.area.toFixed(4)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-700/50 rounded text-sm">
        <strong>Integration Methods:</strong>
        <ul className="mt-2 space-y-1">
          <li><strong>Left Rule:</strong> Uses left endpoint of each interval</li>
          <li><strong>Right Rule:</strong> Uses right endpoint of each interval</li>
          <li><strong>Midpoint Rule:</strong> Uses midpoint of each interval</li>
          <li><strong>Trapezoidal Rule:</strong> Uses average of endpoints (shown as midpoint for visualization)</li>
        </ul>
      </div>

      <div className="mt-3 p-3 bg-blue-900/20 border border-blue-500/30 rounded text-sm">
        <strong>💡 Try This:</strong> Increase the number of rectangles to see how the approximation improves.
        Compare different methods - which one gives the best approximation with fewer rectangles?
      </div>
    </div>
  );
}

// Preset integration examples
export const integrationExamples = [
  {
    name: "∫x² dx from 0 to 1",
    func: (x: number) => x * x,
    a: 0,
    b: 1,
    functionLatex: "x^2",
    exactValue: 1/3
  },
  {
    name: "∫sin(x) dx from 0 to π",
    func: (x: number) => Math.sin(x),
    a: 0,
    b: Math.PI,
    functionLatex: "\\sin(x)",
    exactValue: 2
  },
  {
    name: "∫√x dx from 0 to 4",
    func: (x: number) => Math.sqrt(x),
    a: 0,
    b: 4,
    functionLatex: "\\sqrt{x}",
    exactValue: 16/3
  }
];