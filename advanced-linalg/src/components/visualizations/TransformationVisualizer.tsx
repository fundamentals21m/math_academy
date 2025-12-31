import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

type PresetTransform = 'identity' | 'rotation' | 'scale' | 'shear' | 'reflection' | 'projection';

export function TransformationVisualizer({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [matrix, setMatrix] = useState<number[][]>([
    [1, 0],
    [0, 1],
  ]);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [showBasisVectors, setShowBasisVectors] = useState(true);

  const width = 400;
  const height = 400;
  const scale = 40;
  const centerX = width / 2;
  const centerY = height / 2;

  const presets: Record<PresetTransform, { matrix: number[][]; name: string; description: string }> = {
    identity: { matrix: [[1, 0], [0, 1]], name: 'Identity', description: 'No change' },
    rotation: { matrix: [[0, -1], [1, 0]], name: 'Rotation 90°', description: 'Rotates counterclockwise' },
    scale: { matrix: [[2, 0], [0, 0.5]], name: 'Scale', description: 'Stretches x, shrinks y' },
    shear: { matrix: [[1, 1], [0, 1]], name: 'Shear', description: 'Horizontal shear' },
    reflection: { matrix: [[1, 0], [0, -1]], name: 'Reflection', description: 'Reflects across x-axis' },
    projection: { matrix: [[1, 0], [0, 0]], name: 'Projection', description: 'Projects onto x-axis' },
  };

  const applyMatrix = (x: number, y: number, t: number = 1): [number, number] => {
    // Interpolate between identity and current matrix
    const m = [
      [1 + t * (matrix[0][0] - 1), t * matrix[0][1]],
      [t * matrix[1][0], 1 + t * (matrix[1][1] - 1)],
    ];
    return [
      m[0][0] * x + m[0][1] * y,
      m[1][0] * x + m[1][1] * y,
    ];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, width, height);

    // Draw transformed grid
    if (showGrid) {
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = -5; x <= 5; x++) {
        ctx.beginPath();
        for (let y = -5; y <= 5; y += 0.1) {
          const [tx, ty] = applyMatrix(x, y, animationProgress);
          const px = centerX + tx * scale;
          const py = centerY - ty * scale;
          if (y === -5) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -5; y <= 5; y++) {
        ctx.beginPath();
        for (let x = -5; x <= 5; x += 0.1) {
          const [tx, ty] = applyMatrix(x, y, animationProgress);
          const px = centerX + tx * scale;
          const py = centerY - ty * scale;
          if (x === -5) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    }

    // Draw axes (always at origin)
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Draw transformed basis vectors
    if (showBasisVectors) {
      const drawArrow = (
        fromX: number,
        fromY: number,
        toX: number,
        toY: number,
        color: string,
        label: string
      ) => {
        const headLength = 10;
        const angle = Math.atan2(toY - fromY, toX - fromX);

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(
          toX - headLength * Math.cos(angle - Math.PI / 6),
          toY - headLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
          toX - headLength * Math.cos(angle + Math.PI / 6),
          toY - headLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fill();

        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(label, toX + 8, toY - 8);
      };

      // e1 = (1, 0)
      const [e1x, e1y] = applyMatrix(1, 0, animationProgress);
      drawArrow(
        centerX,
        centerY,
        centerX + e1x * scale,
        centerY - e1y * scale,
        '#f87171',
        'e₁'
      );

      // e2 = (0, 1)
      const [e2x, e2y] = applyMatrix(0, 1, animationProgress);
      drawArrow(
        centerX,
        centerY,
        centerX + e2x * scale,
        centerY - e2y * scale,
        '#60a5fa',
        'e₂'
      );
    }

    // Draw unit square (transformed)
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const corners = [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]];
    corners.forEach(([x, y], i) => {
      const [tx, ty] = applyMatrix(x, y, animationProgress);
      const px = centerX + tx * scale;
      const py = centerY - ty * scale;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.stroke();
  }, [matrix, animationProgress, showGrid, showBasisVectors]);

  const animate = () => {
    setIsAnimating(true);
    setAnimationProgress(0);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.02;
      if (progress >= 1) {
        progress = 1;
        clearInterval(interval);
        setIsAnimating(false);
      }
      setAnimationProgress(progress);
    }, 16);
  };

  const reset = () => {
    setAnimationProgress(0);
    setIsAnimating(false);
  };

  const setPreset = (preset: PresetTransform) => {
    setMatrix(presets[preset].matrix);
    reset();
  };

  const determinant = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Linear Transformation Visualizer</h3>
      
      <p className="text-dark-300 mb-6">
        See how a 2×2 matrix transforms the plane. The red and blue arrows are the 
        standard basis vectors; watch how they become the columns of the matrix!
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Canvas */}
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="rounded-xl border border-dark-600"
          />
        </div>

        {/* Controls */}
        <div className="flex-1 space-y-6">
          {/* Matrix input */}
          <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
            <h4 className="text-dark-200 font-medium mb-3">Transformation Matrix</h4>
            <div className="grid grid-cols-2 gap-2 max-w-[200px]">
              {matrix.map((row, i) =>
                row.map((val, j) => (
                  <input
                    key={`${i}-${j}`}
                    type="number"
                    step="0.1"
                    value={val}
                    onChange={(e) => {
                      const newMatrix = matrix.map((r) => [...r]);
                      newMatrix[i][j] = parseFloat(e.target.value) || 0;
                      setMatrix(newMatrix);
                      reset();
                    }}
                    className="w-full px-3 py-2 rounded-lg bg-dark-600 border border-dark-500 text-dark-100 text-center"
                  />
                ))
              )}
            </div>
            <p className="text-dark-400 text-sm mt-3">
              det(A) = <span className={determinant === 0 ? 'text-red-400' : 'text-emerald-400'}>{determinant.toFixed(2)}</span>
              {determinant === 0 && ' (singular!)'}
            </p>
          </div>

          {/* Presets */}
          <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
            <h4 className="text-dark-200 font-medium mb-3">Preset Transformations</h4>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(presets) as PresetTransform[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setPreset(key)}
                  className="px-3 py-2 rounded-lg bg-dark-600 hover:bg-dark-500 text-dark-200 text-sm transition-colors"
                >
                  {presets[key].name}
                </button>
              ))}
            </div>
          </div>

          {/* Animation controls */}
          <div className="flex gap-3">
            <button
              onClick={animate}
              disabled={isAnimating}
              className="flex-1 px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium disabled:opacity-50 transition-colors"
            >
              {isAnimating ? 'Animating...' : 'Animate'}
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 rounded-xl bg-dark-600 hover:bg-dark-500 text-dark-200 transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Toggles */}
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showGrid}
                onChange={(e) => setShowGrid(e.target.checked)}
                className="rounded"
              />
              <span className="text-dark-300">Show Grid</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showBasisVectors}
                onChange={(e) => setShowBasisVectors(e.target.checked)}
                className="rounded"
              />
              <span className="text-dark-300">Show Basis Vectors</span>
            </label>
          </div>

          {/* Info */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <h4 className="text-emerald-400 font-medium mb-2">Key Insight</h4>
            <p className="text-dark-400 text-sm">
              The columns of the matrix are where the basis vectors land! 
              e₁ = (1,0) maps to column 1, e₂ = (0,1) maps to column 2.
              The determinant measures how area scales under the transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
