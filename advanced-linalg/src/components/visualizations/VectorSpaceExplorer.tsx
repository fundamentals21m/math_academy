import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

interface Vector {
  x: number;
  y: number;
  color: string;
  label: string;
}

export function VectorSpaceExplorer({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vectors, setVectors] = useState<Vector[]>([
    { x: 2, y: 1, color: '#60a5fa', label: 'v₁' },
    { x: -1, y: 2, color: '#f472b6', label: 'v₂' },
  ]);
  const [scalar1, setScalar1] = useState(1);
  const [scalar2, setScalar2] = useState(1);
  const [showSum, setShowSum] = useState(true);
  const [showScaled, setShowScaled] = useState(false);

  const scale = 40; // pixels per unit
  const width = 400;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;

  const drawArrow = (
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    color: string,
    label?: string
  ) => {
    const headLength = 10;
    const angle = Math.atan2(toY - fromY, toX - fromX);

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;

    // Draw line
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    // Draw arrowhead
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

    // Draw label
    if (label) {
      ctx.font = '14px sans-serif';
      ctx.fillText(label, toX + 5, toY - 5);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= width; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw axes
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

    // Draw axis labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText('x', width - 15, centerY - 5);
    ctx.fillText('y', centerX + 5, 15);

    // Draw original vectors
    vectors.forEach((v) => {
      drawArrow(
        ctx,
        centerX,
        centerY,
        centerX + v.x * scale,
        centerY - v.y * scale,
        v.color,
        v.label
      );
    });

    // Draw scaled vectors if enabled
    if (showScaled) {
      const scaledV1 = { x: vectors[0].x * scalar1, y: vectors[0].y * scalar1 };
      const scaledV2 = { x: vectors[1].x * scalar2, y: vectors[1].y * scalar2 };
      
      drawArrow(
        ctx,
        centerX,
        centerY,
        centerX + scaledV1.x * scale,
        centerY - scaledV1.y * scale,
        '#22d3ee',
        `${scalar1}v₁`
      );
      drawArrow(
        ctx,
        centerX,
        centerY,
        centerX + scaledV2.x * scale,
        centerY - scaledV2.y * scale,
        '#a78bfa',
        `${scalar2}v₂`
      );
    }

    // Draw sum vector if enabled
    if (showSum) {
      const v1 = showScaled ? { x: vectors[0].x * scalar1, y: vectors[0].y * scalar1 } : vectors[0];
      const v2 = showScaled ? { x: vectors[1].x * scalar2, y: vectors[1].y * scalar2 } : vectors[1];
      const sum = { x: v1.x + v2.x, y: v1.y + v2.y };
      
      // Draw dashed lines showing parallelogram
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = '#4ade80';
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      ctx.moveTo(centerX + v1.x * scale, centerY - v1.y * scale);
      ctx.lineTo(centerX + sum.x * scale, centerY - sum.y * scale);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(centerX + v2.x * scale, centerY - v2.y * scale);
      ctx.lineTo(centerX + sum.x * scale, centerY - sum.y * scale);
      ctx.stroke();
      
      ctx.setLineDash([]);
      
      // Draw sum vector
      drawArrow(
        ctx,
        centerX,
        centerY,
        centerX + sum.x * scale,
        centerY - sum.y * scale,
        '#4ade80',
        showScaled ? `${scalar1}v₁ + ${scalar2}v₂` : 'v₁ + v₂'
      );
    }
  }, [vectors, scalar1, scalar2, showSum, showScaled]);

  const updateVector = (index: number, axis: 'x' | 'y', value: number) => {
    setVectors((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [axis]: value };
      return updated;
    });
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Vector Space Explorer</h3>
      
      <p className="text-dark-300 mb-6">
        Explore how vectors add and scale in R². Adjust the vectors and scalars to see 
        linear combinations form.
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
          {/* Vector 1 */}
          <div className="p-4 rounded-xl bg-dark-700/50 border border-blue-500/30">
            <h4 className="text-blue-400 font-medium mb-3">Vector v₁</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-dark-400 text-sm">x:</label>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  step="0.5"
                  value={vectors[0].x}
                  onChange={(e) => updateVector(0, 'x', parseFloat(e.target.value))}
                  className="w-full"
                />
                <span className="text-dark-300">{vectors[0].x}</span>
              </div>
              <div>
                <label className="text-dark-400 text-sm">y:</label>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  step="0.5"
                  value={vectors[0].y}
                  onChange={(e) => updateVector(0, 'y', parseFloat(e.target.value))}
                  className="w-full"
                />
                <span className="text-dark-300">{vectors[0].y}</span>
              </div>
            </div>
          </div>

          {/* Vector 2 */}
          <div className="p-4 rounded-xl bg-dark-700/50 border border-pink-500/30">
            <h4 className="text-pink-400 font-medium mb-3">Vector v₂</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-dark-400 text-sm">x:</label>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  step="0.5"
                  value={vectors[1].x}
                  onChange={(e) => updateVector(1, 'x', parseFloat(e.target.value))}
                  className="w-full"
                />
                <span className="text-dark-300">{vectors[1].x}</span>
              </div>
              <div>
                <label className="text-dark-400 text-sm">y:</label>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  step="0.5"
                  value={vectors[1].y}
                  onChange={(e) => updateVector(1, 'y', parseFloat(e.target.value))}
                  className="w-full"
                />
                <span className="text-dark-300">{vectors[1].y}</span>
              </div>
            </div>
          </div>

          {/* Scalars */}
          {showScaled && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-4 rounded-xl bg-dark-700/50 border border-purple-500/30"
            >
              <h4 className="text-purple-400 font-medium mb-3">Scalars</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-dark-400 text-sm">c₁ (for v₁):</label>
                  <input
                    type="range"
                    min="-2"
                    max="2"
                    step="0.25"
                    value={scalar1}
                    onChange={(e) => setScalar1(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-dark-300">{scalar1}</span>
                </div>
                <div>
                  <label className="text-dark-400 text-sm">c₂ (for v₂):</label>
                  <input
                    type="range"
                    min="-2"
                    max="2"
                    step="0.25"
                    value={scalar2}
                    onChange={(e) => setScalar2(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-dark-300">{scalar2}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Toggles */}
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showSum}
                onChange={(e) => setShowSum(e.target.checked)}
                className="rounded"
              />
              <span className="text-dark-300">Show Sum</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showScaled}
                onChange={(e) => setShowScaled(e.target.checked)}
                className="rounded"
              />
              <span className="text-dark-300">Show Scalar Multiples</span>
            </label>
          </div>

          {/* Info */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <h4 className="text-emerald-400 font-medium mb-2">Linear Combination</h4>
            <p className="text-dark-400 text-sm">
              The green vector shows the linear combination c₁v₁ + c₂v₂. 
              The span of two non-parallel vectors in R² is all of R² — 
              you can reach any point by choosing the right scalars!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
