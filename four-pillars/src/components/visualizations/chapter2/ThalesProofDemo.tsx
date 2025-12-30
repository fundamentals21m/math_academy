import { useState, useRef, useEffect, useCallback } from 'react';

interface ThalesProofDemoProps {
  className?: string;
}

export function ThalesProofDemo({ className = '' }: ThalesProofDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ratio, setRatio] = useState(0.4); // Position of D along AB (0-1)
  const [highlightStep, setHighlightStep] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const width = 550;
  const height = 420;

  // Triangle vertices
  const A = { x: 80, y: height - 60 };
  const B = { x: 280, y: height - 60 };
  const C = { x: 180, y: 80 };

  // Calculate D and E based on ratio
  const D = {
    x: A.x + ratio * (B.x - A.x),
    y: A.y + ratio * (B.y - A.y)
  };

  // E is on AC at the same ratio
  const E = {
    x: A.x + ratio * (C.x - A.x),
    y: A.y + ratio * (C.y - A.y)
  };

  const getMousePos = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getMousePos(e);
    const dist = Math.sqrt((pos.x - D.x) ** 2 + (pos.y - D.y) ** 2);
    if (dist < 15) {
      setIsDragging(true);
    }
  }, [getMousePos, D]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;

    const pos = getMousePos(e);

    // Project onto line AB
    const abX = B.x - A.x;
    const abY = B.y - A.y;
    const apX = pos.x - A.x;
    const apY = pos.y - A.y;

    let t = (apX * abX + apY * abY) / (abX * abX + abY * abY);
    t = Math.max(0.1, Math.min(0.9, t));

    setRatio(t);
  }, [isDragging, getMousePos]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Helper to calculate triangle area
    const triangleArea = (p1: typeof A, p2: typeof A, p3: typeof A) => {
      return Math.abs((p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y)) / 2;
    };

    // Draw main triangle ABC
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.lineTo(C.x, C.y);
    ctx.closePath();
    ctx.stroke();

    // Draw line DE (parallel to BC)
    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(D.x, D.y);
    ctx.lineTo(E.x, E.y);
    ctx.stroke();

    // Draw line BC
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(B.x, B.y);
    ctx.lineTo(C.x, C.y);
    ctx.stroke();

    // Highlight different triangles based on step
    if (highlightStep >= 1) {
      // Triangle ADE (main small triangle)
      const gradient1 = ctx.createLinearGradient(A.x, A.y, E.x, E.y);
      gradient1.addColorStop(0, 'rgba(96, 165, 250, 0.4)');
      gradient1.addColorStop(1, 'rgba(96, 165, 250, 0.1)');
      ctx.fillStyle = gradient1;
      ctx.beginPath();
      ctx.moveTo(A.x, A.y);
      ctx.lineTo(D.x, D.y);
      ctx.lineTo(E.x, E.y);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    if (highlightStep >= 2) {
      // Triangle DBE
      const gradient2 = ctx.createLinearGradient(D.x, D.y, B.x, B.y);
      gradient2.addColorStop(0, 'rgba(251, 191, 36, 0.4)');
      gradient2.addColorStop(1, 'rgba(251, 191, 36, 0.1)');
      ctx.fillStyle = gradient2;
      ctx.beginPath();
      ctx.moveTo(D.x, D.y);
      ctx.lineTo(B.x, B.y);
      ctx.lineTo(E.x, E.y);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    if (highlightStep >= 3) {
      // Triangle DEC
      const gradient3 = ctx.createLinearGradient(D.x, D.y, C.x, C.y);
      gradient3.addColorStop(0, 'rgba(52, 211, 153, 0.4)');
      gradient3.addColorStop(1, 'rgba(52, 211, 153, 0.1)');
      ctx.fillStyle = gradient3;
      ctx.beginPath();
      ctx.moveTo(D.x, D.y);
      ctx.lineTo(E.x, E.y);
      ctx.lineTo(C.x, C.y);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Draw vertices
    const points = [
      { p: A, label: 'A', color: '#f472b6', offset: { x: -20, y: 20 } },
      { p: B, label: 'B', color: '#f472b6', offset: { x: 5, y: 20 } },
      { p: C, label: 'C', color: '#f472b6', offset: { x: 5, y: -15 } },
      { p: D, label: 'D', color: '#60a5fa', offset: { x: -5, y: 20 } },
      { p: E, label: 'E', color: '#34d399', offset: { x: -20, y: -5 } }
    ];

    points.forEach(({ p, label, color, offset }) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, label === 'D' ? 8 : 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = 'italic 16px serif';
      ctx.fillText(label, p.x + offset.x, p.y + offset.y);
    });

    // Draw "drag" indicator for D
    if (!isDragging) {
      ctx.font = '10px sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('drag', D.x - 12, D.y + 30);
    }

    // Draw parallel indicator
    ctx.fillStyle = '#f472b6';
    ctx.font = '12px sans-serif';
    ctx.fillText('DE ∥ BC', (D.x + E.x) / 2 - 20, (D.y + E.y) / 2 - 15);

    // Calculate ratios
    const AD = ratio;
    const DB = 1 - ratio;
    const AE = ratio;
    const EC = 1 - ratio;

    // Draw ratio labels on the side panel
    const panelX = 340;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(panelX, 50, 190, 320);
    ctx.strokeStyle = '#334155';
    ctx.strokeRect(panelX, 50, 190, 320);

    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#e2e8f0';
    ctx.fillText('Thales Theorem Proof', panelX + 20, 75);

    ctx.font = '12px sans-serif';

    // Step 1
    ctx.fillStyle = highlightStep >= 1 ? '#60a5fa' : '#64748b';
    ctx.fillText('Step 1: Consider △ADE', panelX + 10, 105);

    // Step 2
    ctx.fillStyle = highlightStep >= 2 ? '#fbbf24' : '#64748b';
    ctx.fillText('Step 2: △DBE has same', panelX + 10, 145);
    ctx.fillText('height from E to AB', panelX + 10, 160);

    // Step 3
    ctx.fillStyle = highlightStep >= 3 ? '#34d399' : '#64748b';
    ctx.fillText('Step 3: △DEC has same', panelX + 10, 200);
    ctx.fillText('height from D to AC', panelX + 10, 215);

    // Key insight
    ctx.fillStyle = highlightStep >= 4 ? '#c084fc' : '#64748b';
    ctx.fillText('Key: Since DE ∥ BC,', panelX + 10, 255);
    ctx.fillText('△DBE = △DEC (same', panelX + 10, 270);
    ctx.fillText('base DE, same height)', panelX + 10, 285);

    // Result
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText('Therefore:', panelX + 10, 315);
    ctx.fillStyle = '#f472b6';
    ctx.fillText(`AD/DB = ${AD.toFixed(2)}/${DB.toFixed(2)}`, panelX + 10, 335);
    ctx.fillText(`AE/EC = ${AE.toFixed(2)}/${EC.toFixed(2)}`, panelX + 10, 352);

    // Show equality
    if (Math.abs(AD / DB - AE / EC) < 0.01) {
      ctx.fillStyle = '#34d399';
      ctx.fillText('= ' + (AD / DB).toFixed(2) + ' ✓', panelX + 120, 343);
    }

    // Area calculations at bottom
    if (highlightStep >= 2) {
      const areaADE = triangleArea(A, D, E);
      const areaDBE = triangleArea(D, B, E);
      const areaDEC = triangleArea(D, E, C);

      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#60a5fa';
      ctx.fillText(`Area(ADE) = ${areaADE.toFixed(0)}`, 80, height - 20);

      if (highlightStep >= 2) {
        ctx.fillStyle = '#fbbf24';
        ctx.fillText(`Area(DBE) = ${areaDBE.toFixed(0)}`, 180, height - 20);
      }

      if (highlightStep >= 3) {
        ctx.fillStyle = '#34d399';
        ctx.fillText(`Area(DEC) = ${areaDEC.toFixed(0)}`, 280, height - 20);
      }
    }

  }, [ratio, highlightStep, isDragging, D, E]);

  const steps = [
    'View the triangle',
    'Triangle ADE',
    'Add triangle DBE',
    'Add triangle DEC',
    'Complete proof'
  ];

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Thales Theorem: Area-Based Proof
      </h4>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded cursor-pointer"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>

      <div className="flex justify-center gap-2 mb-4">
        {steps.map((stepLabel, i) => (
          <button
            key={i}
            onClick={() => setHighlightStep(i)}
            className={`px-3 py-1 text-sm rounded transition ${
              highlightStep === i
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {i === 0 ? 'Start' : `Step ${i}`}
          </button>
        ))}
      </div>

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p>
          <strong>Thales' Theorem:</strong> If DE is parallel to BC, then{' '}
          <span className="text-pink-400">AD/DB = AE/EC</span>.
        </p>
        <p className="mt-2">
          The proof uses the fact that triangles with the same base and height
          have equal areas. Drag point <span className="text-blue-400">D</span> to
          see how the ratio stays constant!
        </p>
      </div>
    </div>
  );
}
