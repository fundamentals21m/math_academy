import { useState, useRef, useEffect } from 'react';

type ConstructionType = 'equilateral' | 'perpendicular' | 'bisector' | 'parallel';

interface Point {
  x: number;
  y: number;
}

export function CompassConstructionDemo({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [construction, setConstruction] = useState<ConstructionType>('equilateral');
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const width = 500;
  const height = 400;

  const constructions = {
    equilateral: {
      name: 'Equilateral Triangle',
      steps: [
        'Draw base segment AB',
        'Draw circle centered at A with radius AB',
        'Draw circle centered at B with radius BA',
        'Mark intersection point C',
        'Connect A-C and B-C to complete triangle',
      ],
      maxStep: 4,
    },
    perpendicular: {
      name: 'Perpendicular Bisector',
      steps: [
        'Start with segment AB',
        'Draw circle centered at A with radius > AB/2',
        'Draw circle centered at B with same radius',
        'Mark intersection points P and Q',
        'Draw line through P and Q',
      ],
      maxStep: 4,
    },
    bisector: {
      name: 'Angle Bisector',
      steps: [
        'Start with angle BAC',
        'Draw arc from A intersecting both rays at D and E',
        'Draw equal arcs from D and E',
        'Mark intersection point F',
        'Draw ray AF (the bisector)',
      ],
      maxStep: 4,
    },
    parallel: {
      name: 'Parallel Line',
      steps: [
        'Start with line L and point P not on L',
        'Draw perpendicular from P to L at point Q',
        'At P, construct perpendicular to PQ',
        'This line is parallel to L',
      ],
      maxStep: 3,
    },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
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

    const drawPoint = (p: Point, label: string, color: string = '#22d3ee') => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(label, p.x + 8, p.y - 8);
    };

    const drawLine = (p1: Point, p2: Point, color: string = '#f472b6') => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    };

    const drawCircle = (center: Point, radius: number, color: string = '#a78bfa', dashed: boolean = false) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      if (dashed) ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawArc = (center: Point, radius: number, start: number, end: number, color: string = '#a78bfa') => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius, start, end);
      ctx.stroke();
    };

    switch (construction) {
      case 'equilateral': {
        const A: Point = { x: 150, y: 280 };
        const B: Point = { x: 350, y: 280 };
        const radius = Math.sqrt((B.x - A.x) ** 2 + (B.y - A.y) ** 2);
        const C: Point = { x: 250, y: 280 - radius * Math.sin(Math.PI / 3) };

        // Step 0: Base segment
        if (step >= 0) {
          drawLine(A, B);
          drawPoint(A, 'A');
          drawPoint(B, 'B');
        }
        // Step 1: First circle
        if (step >= 1) {
          drawCircle(A, radius, '#a78bfa', true);
        }
        // Step 2: Second circle
        if (step >= 2) {
          drawCircle(B, radius, '#22d3ee', true);
        }
        // Step 3: Intersection point
        if (step >= 3) {
          drawPoint(C, 'C', '#fbbf24');
        }
        // Step 4: Complete triangle
        if (step >= 4) {
          drawLine(A, C, '#34d399');
          drawLine(B, C, '#34d399');
        }
        break;
      }

      case 'perpendicular': {
        const A: Point = { x: 150, y: 250 };
        const B: Point = { x: 350, y: 250 };
        const radius = 130;
        const midX = (A.x + B.x) / 2;
        const h = Math.sqrt(radius ** 2 - ((B.x - A.x) / 2) ** 2);
        const P: Point = { x: midX, y: 250 - h };
        const Q: Point = { x: midX, y: 250 + h };

        if (step >= 0) {
          drawLine(A, B);
          drawPoint(A, 'A');
          drawPoint(B, 'B');
        }
        if (step >= 1) {
          drawCircle(A, radius, '#a78bfa', true);
        }
        if (step >= 2) {
          drawCircle(B, radius, '#22d3ee', true);
        }
        if (step >= 3) {
          drawPoint(P, 'P', '#fbbf24');
          drawPoint(Q, 'Q', '#fbbf24');
        }
        if (step >= 4) {
          drawLine(P, Q, '#34d399');
          // Mark right angle
          const mid: Point = { x: midX, y: 250 };
          ctx.strokeStyle = '#34d399';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(mid.x + 10, mid.y);
          ctx.lineTo(mid.x + 10, mid.y - 10);
          ctx.lineTo(mid.x, mid.y - 10);
          ctx.stroke();
        }
        break;
      }

      case 'bisector': {
        const A: Point = { x: 150, y: 300 };
        const angleSize = Math.PI / 3;
        const rayLen = 200;
        const B: Point = { x: A.x + rayLen, y: A.y };
        const C: Point = { x: A.x + rayLen * Math.cos(angleSize), y: A.y - rayLen * Math.sin(angleSize) };
        const arcRadius = 80;
        const D: Point = { x: A.x + arcRadius, y: A.y };
        const E: Point = { x: A.x + arcRadius * Math.cos(angleSize), y: A.y - arcRadius * Math.sin(angleSize) };
        const bisectorAngle = angleSize / 2;
        const F: Point = { x: A.x + 120 * Math.cos(bisectorAngle), y: A.y - 120 * Math.sin(bisectorAngle) };

        if (step >= 0) {
          drawLine(A, B);
          drawLine(A, C);
          drawPoint(A, 'A');
          drawPoint(B, 'B', '#94a3b8');
          drawPoint(C, 'C', '#94a3b8');
        }
        if (step >= 1) {
          drawArc(A, arcRadius, -angleSize, 0, '#a78bfa');
          drawPoint(D, 'D', '#fbbf24');
          drawPoint(E, 'E', '#fbbf24');
        }
        if (step >= 2) {
          drawArc(D, 60, -Math.PI, Math.PI, '#22d3ee');
          drawArc(E, 60, -Math.PI, Math.PI, '#22d3ee');
        }
        if (step >= 3) {
          drawPoint(F, 'F', '#34d399');
        }
        if (step >= 4) {
          const bisectorEnd: Point = { x: A.x + rayLen * Math.cos(bisectorAngle), y: A.y - rayLen * Math.sin(bisectorAngle) };
          drawLine(A, bisectorEnd, '#34d399');
        }
        break;
      }

      case 'parallel': {
        const L1: Point = { x: 50, y: 300 };
        const L2: Point = { x: 450, y: 300 };
        const P: Point = { x: 250, y: 150 };
        const Q: Point = { x: 250, y: 300 };

        if (step >= 0) {
          drawLine(L1, L2, '#f472b6');
          drawPoint(P, 'P', '#22d3ee');
          ctx.fillStyle = '#94a3b8';
          ctx.font = '12px sans-serif';
          ctx.fillText('Line L', L2.x - 40, L2.y + 20);
        }
        if (step >= 1) {
          drawLine(P, Q, '#a78bfa');
          drawPoint(Q, 'Q', '#fbbf24');
          // Right angle at Q
          ctx.strokeStyle = '#a78bfa';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(Q.x + 10, Q.y);
          ctx.lineTo(Q.x + 10, Q.y - 10);
          ctx.lineTo(Q.x, Q.y - 10);
          ctx.stroke();
        }
        if (step >= 2) {
          // Right angle at P
          ctx.strokeStyle = '#34d399';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(P.x + 10, P.y);
          ctx.lineTo(P.x + 10, P.y + 10);
          ctx.lineTo(P.x, P.y + 10);
          ctx.stroke();
        }
        if (step >= 3) {
          drawLine({ x: 50, y: P.y }, { x: 450, y: P.y }, '#34d399');
          ctx.fillStyle = '#34d399';
          ctx.font = '12px sans-serif';
          ctx.fillText('Parallel to L', 360, P.y - 10);
        }
        break;
      }
    }

    // Step indicator
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText(`Step ${step + 1} of ${constructions[construction].maxStep + 1}`, 10, height - 10);

  }, [construction, step]);

  const nextStep = () => {
    if (step < constructions[construction].maxStep) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const animate = () => {
    setIsAnimating(true);
    setStep(0);
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < constructions[construction].maxStep) {
        currentStep++;
        setStep(currentStep);
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 1000);
  };

  return (
    <div className={`bg-slate-900/50 rounded-lg p-4 ${className}`}>
      <h4 className="text-blue-400 font-semibold mb-3">Compass & Straightedge Construction</h4>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-700 rounded"
          />
        </div>

        <div className="w-full md:w-56 space-y-3">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Construction Type</label>
            <select
              value={construction}
              onChange={(e) => {
                setConstruction(e.target.value as ConstructionType);
                setStep(0);
              }}
              className="w-full px-2 py-1.5 bg-slate-800 border border-slate-600 rounded text-slate-200 text-sm"
            >
              <option value="equilateral">Equilateral Triangle</option>
              <option value="perpendicular">Perpendicular Bisector</option>
              <option value="bisector">Angle Bisector</option>
              <option value="parallel">Parallel Line</option>
            </select>
          </div>

          <div className="p-3 bg-slate-800 rounded">
            <div className="text-xs text-slate-400 mb-1">Current Step:</div>
            <div className="text-sm text-slate-200">
              {constructions[construction].steps[step]}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevStep}
              disabled={step === 0 || isAnimating}
              className="flex-1 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-slate-200 rounded text-sm"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={step === constructions[construction].maxStep || isAnimating}
              className="flex-1 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-slate-200 rounded text-sm"
            >
              Next
            </button>
          </div>

          <button
            onClick={animate}
            disabled={isAnimating}
            className="w-full px-3 py-1.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded text-sm"
          >
            {isAnimating ? 'Animating...' : 'Animate All Steps'}
          </button>

          <button
            onClick={() => setStep(0)}
            className="w-full px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm"
          >
            Reset
          </button>

          <div className="text-xs text-slate-400 p-2 bg-slate-800/50 rounded">
            <p><span className="text-pink-400">Pink:</span> Given segments</p>
            <p><span className="text-purple-400">Purple:</span> Circle from A</p>
            <p><span className="text-cyan-400">Cyan:</span> Circle from B</p>
            <p><span className="text-green-400">Green:</span> Result</p>
          </div>
        </div>
      </div>
    </div>
  );
}
