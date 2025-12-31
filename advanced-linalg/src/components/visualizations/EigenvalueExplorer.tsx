import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

interface EigenResult {
  eigenvalues: { real: number; imag: number }[];
  eigenvectors: number[][];
  isComplex: boolean;
}

export function EigenvalueExplorer({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [matrix, setMatrix] = useState<number[][]>([
    [3, 1],
    [0, 2],
  ]);
  const [result, setResult] = useState<EigenResult | null>(null);
  const [showEigenvectors, setShowEigenvectors] = useState(true);
  const [animationAngle, setAnimationAngle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const width = 400;
  const height = 400;
  const scale = 50;
  const centerX = width / 2;
  const centerY = height / 2;

  // Compute eigenvalues for 2x2 matrix
  const computeEigen = (m: number[][]): EigenResult => {
    const a = m[0][0], b = m[0][1], c = m[1][0], d = m[1][1];
    
    // Characteristic polynomial: λ² - (a+d)λ + (ad-bc) = 0
    const trace = a + d;
    const det = a * d - b * c;
    const discriminant = trace * trace - 4 * det;

    const eigenvalues: { real: number; imag: number }[] = [];
    const eigenvectors: number[][] = [];
    const isComplex = discriminant < 0;

    if (isComplex) {
      const realPart = trace / 2;
      const imagPart = Math.sqrt(-discriminant) / 2;
      eigenvalues.push({ real: realPart, imag: imagPart });
      eigenvalues.push({ real: realPart, imag: -imagPart });
    } else {
      const sqrt = Math.sqrt(discriminant);
      eigenvalues.push({ real: (trace + sqrt) / 2, imag: 0 });
      eigenvalues.push({ real: (trace - sqrt) / 2, imag: 0 });

      // Compute eigenvectors for real eigenvalues
      eigenvalues.forEach((ev) => {
        const lambda = ev.real;
        // (A - λI)v = 0
        const a11 = a - lambda;
        const a12 = b;
        const a21 = c;
        const a22 = d - lambda;

        let v: number[];
        if (Math.abs(a12) > 1e-10) {
          v = [-a12, a11];
        } else if (Math.abs(a22) > 1e-10) {
          v = [a22, -a21];
        } else if (Math.abs(a11) > 1e-10) {
          v = [0, 1];
        } else {
          v = [1, 0];
        }
        
        // Normalize
        const norm = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
        eigenvectors.push([v[0] / norm, v[1] / norm]);
      });
    }

    return { eigenvalues, eigenvectors, isComplex };
  };

  useEffect(() => {
    const res = computeEigen(matrix);
    setResult(res);
  }, [matrix]);

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

    const drawArrow = (
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      color: string,
      label?: string,
      dashed?: boolean
    ) => {
      const headLength = 10;
      const angle = Math.atan2(toY - fromY, toX - fromX);

      if (dashed) ctx.setLineDash([5, 5]);
      else ctx.setLineDash([]);

      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();

      ctx.setLineDash([]);
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

      if (label) {
        ctx.font = '12px sans-serif';
        ctx.fillText(label, toX + 8, toY - 8);
      }
    };

    // Draw eigenvectors and their images
    if (result && !result.isComplex && showEigenvectors) {
      const colors = ['#f87171', '#60a5fa'];
      
      result.eigenvectors.forEach((v, i) => {
        const lambda = result.eigenvalues[i].real;
        
        // Original eigenvector
        drawArrow(
          centerX,
          centerY,
          centerX + v[0] * scale * 2,
          centerY - v[1] * scale * 2,
          colors[i],
          `v${i + 1}`
        );

        // Transformed eigenvector (should be λv)
        const tv = [v[0] * lambda, v[1] * lambda];
        drawArrow(
          centerX,
          centerY,
          centerX + tv[0] * scale * 2,
          centerY - tv[1] * scale * 2,
          colors[i],
          `λ${i + 1}v${i + 1}`,
          true
        );
      });
    }

    // Animate a generic vector if animating
    if (isAnimating) {
      const angle = animationAngle;
      const v = [Math.cos(angle), Math.sin(angle)];
      
      // Original vector
      drawArrow(
        centerX,
        centerY,
        centerX + v[0] * scale * 2,
        centerY - v[1] * scale * 2,
        '#fbbf24',
        'v'
      );

      // Transformed vector
      const tv = [
        matrix[0][0] * v[0] + matrix[0][1] * v[1],
        matrix[1][0] * v[0] + matrix[1][1] * v[1],
      ];
      drawArrow(
        centerX,
        centerY,
        centerX + tv[0] * scale * 2,
        centerY - tv[1] * scale * 2,
        '#4ade80',
        'Av'
      );
    }
  }, [matrix, result, showEigenvectors, isAnimating, animationAngle]);

  const startAnimation = () => {
    setIsAnimating(true);
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.02;
      if (angle >= 2 * Math.PI) {
        angle = 0;
      }
      setAnimationAngle(angle);
    }, 16);
    
    // Stop after 5 seconds
    setTimeout(() => {
      clearInterval(interval);
      setIsAnimating(false);
    }, 5000);
  };

  const trace = matrix[0][0] + matrix[1][1];
  const det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Eigenvalue Explorer</h3>
      
      <p className="text-dark-300 mb-6">
        Visualize eigenvectors and eigenvalues. Eigenvectors stay on their span 
        when transformed — they just get scaled by their eigenvalue!
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
            <h4 className="text-dark-200 font-medium mb-3">Matrix A</h4>
            <div className="grid grid-cols-2 gap-2 max-w-[160px]">
              {matrix.map((row, i) =>
                row.map((val, j) => (
                  <input
                    key={`${i}-${j}`}
                    type="number"
                    step="0.5"
                    value={val}
                    onChange={(e) => {
                      const newMatrix = matrix.map((r) => [...r]);
                      newMatrix[i][j] = parseFloat(e.target.value) || 0;
                      setMatrix(newMatrix);
                    }}
                    className="w-full px-3 py-2 rounded-lg bg-dark-600 border border-dark-500 text-dark-100 text-center"
                  />
                ))
              )}
            </div>
            <div className="mt-3 text-dark-400 text-sm">
              <p>trace = {trace.toFixed(2)}</p>
              <p>det = {det.toFixed(2)}</p>
            </div>
          </div>

          {/* Eigenvalue results */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
              >
                <h4 className="text-emerald-400 font-medium mb-3">Eigenvalues</h4>
                {result.isComplex ? (
                  <div className="text-dark-300">
                    <p>λ = {result.eigenvalues[0].real.toFixed(2)} ± {Math.abs(result.eigenvalues[0].imag).toFixed(2)}i</p>
                    <p className="text-sm text-dark-400 mt-2">Complex eigenvalues indicate rotation</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {result.eigenvalues.map((ev, i) => (
                      <div key={i} className="text-dark-300">
                        <span className={i === 0 ? 'text-red-400' : 'text-blue-400'}>
                          λ{i + 1} = {ev.real.toFixed(3)}
                        </span>
                        {result.eigenvectors[i] && (
                          <span className="text-dark-400 ml-2">
                            v{i + 1} = ({result.eigenvectors[i][0].toFixed(2)}, {result.eigenvectors[i][1].toFixed(2)})
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium disabled:opacity-50 transition-colors"
            >
              {isAnimating ? 'Animating...' : 'Animate All Vectors'}
            </button>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showEigenvectors}
                onChange={(e) => setShowEigenvectors(e.target.checked)}
                className="rounded"
              />
              <span className="text-dark-300">Show Eigenvectors</span>
            </label>
          </div>

          {/* Characteristic polynomial */}
          <div className="p-4 rounded-xl bg-dark-700/30 border border-dark-600/50">
            <h4 className="text-dark-200 font-medium mb-2">Characteristic Polynomial</h4>
            <p className="text-dark-300 font-mono">
              p(λ) = λ² - {trace.toFixed(2)}λ + {det.toFixed(2)}
            </p>
          </div>

          {/* Info */}
          <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30">
            <h4 className="text-primary-400 font-medium mb-2">Key Insight</h4>
            <p className="text-dark-400 text-sm">
              An eigenvector v satisfies Av = λv — the matrix just scales it! 
              The solid arrow is v, the dashed arrow is Av = λv.
              Watch how eigenvectors stay on their line while other vectors get rotated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
