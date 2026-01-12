import { useState, useRef, useEffect } from 'react';

interface EquilateralTriangleConstructionProps {
  className?: string;
}

export function EquilateralTriangleConstruction({ className = '' }: EquilateralTriangleConstructionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [step, setStep] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  const width = 500;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2 + 40;

  // Points for the construction
  const radius = 120;
  const A = { x: centerX - radius / 2, y: centerY };
  const B = { x: centerX + radius / 2, y: centerY };
  const C = {
    x: centerX,
    y: centerY - radius * Math.sqrt(3) / 2
  };

  const steps = [
    'Draw points A and B (the base)',
    'Draw circle with center A, radius AB',
    'Draw circle with center B, radius AB',
    'Mark intersection point C',
    'Draw triangle ABC'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x <= width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Helper function to draw arc with animation
    const drawAnimatedArc = (
      cx: number,
      cy: number,
      r: number,
      startAngle: number,
      endAngle: number,
      progress: number,
      color: string
    ) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      const sweepAngle = (endAngle - startAngle) * progress;
      ctx.arc(cx, cy, r, startAngle, startAngle + sweepAngle);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    // Helper function to draw line with animation
    const drawAnimatedLine = (
      x1: number, y1: number,
      x2: number, y2: number,
      progress: number,
      color: string
    ) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(
        x1 + (x2 - x1) * progress,
        y1 + (y2 - y1) * progress
      );
      ctx.stroke();
    };

    // Helper function to draw point
    const drawPoint = (x: number, y: number, color: string, label: string, offset = { x: 0, y: 20 }) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = 'italic 16px serif';
      ctx.fillStyle = color;
      ctx.fillText(label, x + offset.x, y + offset.y);
    };

    // Always draw base line AB
    if (step >= 0) {
      drawAnimatedLine(A.x, A.y, B.x, B.y, step === 0 ? animationProgress : 1, '#f472b6');
      drawPoint(A.x, A.y, '#60a5fa', 'A', { x: -20, y: 20 });
      drawPoint(B.x, B.y, '#34d399', 'B', { x: 10, y: 20 });
    }

    // Step 1: Circle centered at A
    if (step >= 1) {
      const progress = step === 1 ? animationProgress : 1;
      drawAnimatedArc(A.x, A.y, radius, -Math.PI / 3, Math.PI / 3, progress, '#60a5fa');
    }

    // Step 2: Circle centered at B
    if (step >= 2) {
      const progress = step === 2 ? animationProgress : 1;
      drawAnimatedArc(B.x, B.y, radius, 2 * Math.PI / 3, 4 * Math.PI / 3, progress, '#34d399');
    }

    // Step 3: Intersection point C
    if (step >= 3) {
      const progress = step === 3 ? animationProgress : 1;
      if (progress > 0.5) {
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(C.x, C.y, 6 * (progress - 0.5) * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = 'italic 16px serif';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('C', C.x + 10, C.y - 10);
      }
    }

    // Step 4: Draw triangle sides
    if (step >= 4) {
      const progress = step === 4 ? animationProgress : 1;

      // Draw AC
      if (progress < 0.5) {
        drawAnimatedLine(A.x, A.y, C.x, C.y, progress * 2, '#f472b6');
      } else {
        drawAnimatedLine(A.x, A.y, C.x, C.y, 1, '#f472b6');
        drawAnimatedLine(B.x, B.y, C.x, C.y, (progress - 0.5) * 2, '#f472b6');
      }
    }

    // Draw labels showing equal lengths
    if (step >= 4 && animationProgress >= 1) {
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#94a3b8';

      // Label for AB
      ctx.fillText('= r', (A.x + B.x) / 2, (A.y + B.y) / 2 + 20);

      // Label for AC
      const acMidX = (A.x + C.x) / 2;
      const acMidY = (A.y + C.y) / 2;
      ctx.fillText('= r', acMidX - 25, acMidY);

      // Label for BC
      const bcMidX = (B.x + C.x) / 2;
      const bcMidY = (B.y + C.y) / 2;
      ctx.fillText('= r', bcMidX + 10, bcMidY);
    }

  }, [step, animationProgress]);

  useEffect(() => {
    if (isAnimating) {
      const startTime = Date.now();
      const duration = 1000;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setAnimationProgress(progress);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isAnimating, step]);

  const nextStep = () => {
    if (step < steps.length - 1 && !isAnimating) {
      setStep(step + 1);
      setAnimationProgress(0);
      setIsAnimating(true);
    }
  };

  const prevStep = () => {
    if (step > 0 && !isAnimating) {
      setStep(step - 1);
      setAnimationProgress(1);
    }
  };

  const reset = () => {
    setStep(0);
    setAnimationProgress(1);
    setIsAnimating(false);
  };

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Interactive Equilateral Triangle Construction
      </h4>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded"
        />
      </div>

      <div className="bg-slate-900/50 p-3 rounded mb-4">
        <p className="text-slate-300">
          <strong>Step {step + 1}:</strong> {steps[step]}
        </p>
      </div>

      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={prevStep}
          disabled={step === 0 || isAnimating}
          className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600
                     disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={step === steps.length - 1 || isAnimating}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500
                     disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Next Step
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition"
        >
          Reset
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i <= step ? 'bg-blue-500' : 'bg-slate-600'
            }`}
          />
        ))}
      </div>

      <div className="mt-4 text-sm text-slate-400">
        <p><strong>Why it works:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><span className="text-blue-400">CA</span> = radius of circle A = AB</li>
          <li><span className="text-green-400">CB</span> = radius of circle B = AB</li>
          <li>Therefore all three sides are equal!</li>
        </ul>
      </div>
    </div>
  );
}
