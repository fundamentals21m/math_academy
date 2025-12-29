import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, Math } from '@/components/common';

// =============================================================================
// INTERACTIVE VISUALIZATIONS
// =============================================================================

/**
 * Projective Transformation Demo
 * Shows how perspective projection transforms shapes
 */
function ProjectiveTransformDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vanishingX, setVanishingX] = useState(300);
  const [vanishingY, setVanishingY] = useState(50);
  const [showGrid, setShowGrid] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Vanishing point
    const vp = { x: vanishingX, y: vanishingY };

    // Draw vanishing point
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(vp.x, vp.y, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText('Vanishing Point', vp.x + 10, vp.y + 5);

    // Project a point towards vanishing point based on depth
    const project = (x: number, y: number, depth: number): { x: number; y: number } => {
      const t = depth;
      return {
        x: x + (vp.x - x) * t,
        y: y + (vp.y - y) * t,
      };
    };

    // Draw grid lines going to vanishing point
    if (showGrid) {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 10; i++) {
        const x = 50 + i * 50;
        ctx.beginPath();
        ctx.moveTo(x, height - 20);
        ctx.lineTo(vp.x, vp.y);
        ctx.stroke();
      }
    }

    // Draw railroad tracks effect
    const trackLeft = 200;
    const trackRight = 400;
    const numTies = 15;

    ctx.strokeStyle = '#6b7280';
    ctx.lineWidth = 3;

    // Left rail
    ctx.beginPath();
    ctx.moveTo(trackLeft, height - 20);
    ctx.lineTo(vp.x, vp.y);
    ctx.stroke();

    // Right rail
    ctx.beginPath();
    ctx.moveTo(trackRight, height - 20);
    ctx.lineTo(vp.x, vp.y);
    ctx.stroke();

    // Ties
    ctx.strokeStyle = '#8b5a2b';
    ctx.lineWidth = 4;
    for (let i = 0; i < numTies; i++) {
      const depth = i / numTies * 0.85;
      const leftPt = project(trackLeft, height - 20, depth);
      const rightPt = project(trackRight, height - 20, depth);
      ctx.beginPath();
      ctx.moveTo(leftPt.x, leftPt.y);
      ctx.lineTo(rightPt.x, rightPt.y);
      ctx.stroke();
    }

    // Draw a square that gets projected
    const square = [
      { x: 100, y: height - 50 },
      { x: 180, y: height - 50 },
      { x: 180, y: height - 130 },
      { x: 100, y: height - 130 },
    ];

    // Original square
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    square.forEach((pt, i) => {
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.closePath();
    ctx.stroke();

    // Projected square (trapezoid)
    const projDepth = 0.4;
    const projSquare = square.map(pt => project(pt.x, pt.y, projDepth));
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.beginPath();
    projSquare.forEach((pt, i) => {
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.closePath();
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('Original', 110, height - 140);
    ctx.fillStyle = '#10b981';
    ctx.fillText('Projected', projSquare[2].x - 20, projSquare[2].y - 10);

  }, [vanishingX, vanishingY, showGrid]);

  return (
    <Card title="Projective Transformation">
      <div className="space-y-4">
        <p className="text-dark-300">
          Projective geometry studies properties that remain unchanged under perspective
          projection. Drag the vanishing point to see how shapes transform.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Vanishing Point X: {vanishingX}</label>
            <input
              type="range"
              min="100"
              max="500"
              value={vanishingX}
              onChange={(e) => setVanishingX(parseInt(e.target.value))}
              className="w-32"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Vanishing Point Y: {vanishingY}</label>
            <input
              type="range"
              min="20"
              max="150"
              value={vanishingY}
              onChange={(e) => setVanishingY(parseInt(e.target.value))}
              className="w-32"
            />
          </div>
          <label className="flex items-center gap-2 text-dark-300">
            <input
              type="checkbox"
              checked={showGrid}
              onChange={(e) => setShowGrid(e.target.checked)}
              className="rounded"
            />
            Show grid lines
          </label>
        </div>
        <canvas
          ref={canvasRef}
          width={600}
          height={300}
          className="w-full border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Cross-Ratio Calculator
 * The fundamental projective invariant
 */
function CrossRatioDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState([100, 200, 350, 500]);
  const [dragging, setDragging] = useState<number | null>(null);

  const crossRatio = (a: number, b: number, c: number, d: number): number => {
    // (A,B;C,D) = (AC/BC) / (AD/BD) = (AC * BD) / (BC * AD)
    const ac = c - a;
    const bc = c - b;
    const ad = d - a;
    const bd = d - b;
    if (bc === 0 || ad === 0) return Infinity;
    return (ac * bd) / (bc * ad);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw line
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(20, height / 2);
    ctx.lineTo(width - 20, height / 2);
    ctx.stroke();

    // Draw points
    const labels = ['A', 'B', 'C', 'D'];
    const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b'];

    points.forEach((x, i) => {
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.arc(x, height / 2, 10, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = '#e5e7eb';
      ctx.font = 'bold 14px monospace';
      ctx.fillText(labels[i], x - 5, height / 2 - 20);
    });

    // Calculate and display cross-ratio
    const cr = crossRatio(points[0], points[1], points[2], points[3]);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px monospace';
    ctx.fillText('Cross-ratio (A,B;C,D) = (AC·BD)/(BC·AD)', 20, 30);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 18px monospace';
    ctx.fillText(`= ${cr.toFixed(4)}`, 20, 55);

    // Show that projection preserves cross-ratio
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px monospace';
    ctx.fillText('Drag points to see that cross-ratio is a projective invariant', 20, height - 20);

  }, [points]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    const midY = canvas.height / 2;
    if (Math.abs(y - midY) < 30) {
      points.forEach((px, i) => {
        if (Math.abs(x - px) < 15) {
          setDragging(i);
        }
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dragging === null) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);

    const newPoints = [...points];
    newPoints[dragging] = Math.max(30, Math.min(570, x));
    setPoints(newPoints);
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <Card title="Cross-Ratio: The Projective Invariant">
      <div className="space-y-4">
        <p className="text-dark-300">
          The cross-ratio of four collinear points is preserved under any projective
          transformation. This is the fundamental invariant of projective geometry.
        </p>
        <MathBlock math="(A,B;C,D) = \frac{AC \cdot BD}{BC \cdot AD}" />
        <canvas
          ref={canvasRef}
          width={600}
          height={150}
          className="w-full border border-dark-700 rounded-lg cursor-pointer"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>
    </Card>
  );
}

/**
 * Poncelet's Closure Theorem Visualization
 * Interactive polygon inscribed in one conic and circumscribed about another
 */
function PonceletClosureDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [startAngle, setStartAngle] = useState(0);
  const [innerRadius, setInnerRadius] = useState(80);
  const [numSides, setNumSides] = useState(5);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const outerRadius = 120;

    const draw = () => {
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      // Draw outer circle (inscribed)
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, outerRadius, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw inner circle (tangent)
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, innerRadius, 0, 2 * Math.PI);
      ctx.stroke();

      // Construct Poncelet polygon
      // Start at a point on outer circle
      const vertices: { x: number; y: number }[] = [];
      let angle = startAngle;

      for (let i = 0; i < numSides; i++) {
        // Current point on outer circle
        const px = cx + outerRadius * Math.cos(angle);
        const py = cy + outerRadius * Math.sin(angle);
        vertices.push({ x: px, y: py });

        // Find tangent line from this point to inner circle
        // and its second intersection with outer circle
        const d = outerRadius; // distance from center to point
        const r = innerRadius;
        const R = outerRadius;

        // Angle to tangent point
        const tangentAngle = Math.asin(r / d);

        // Two possible tangent directions; pick one consistently
        const nextAngle = angle + 2 * tangentAngle;
        angle = nextAngle;
      }

      // Draw the polygon
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      vertices.forEach((v, i) => {
        if (i === 0) ctx.moveTo(v.x, v.y);
        else ctx.lineTo(v.x, v.y);
      });
      ctx.closePath();
      ctx.stroke();

      // Draw vertices
      vertices.forEach((v) => {
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(v.x, v.y, 5, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Check if it closes (approximately)
      const first = vertices[0];
      const last = vertices[vertices.length - 1];
      const nextFromLast = {
        x: cx + outerRadius * Math.cos(startAngle + numSides * 2 * Math.asin(innerRadius / outerRadius)),
        y: cy + outerRadius * Math.sin(startAngle + numSides * 2 * Math.asin(innerRadius / outerRadius)),
      };
      const closesDist = Math.sqrt((first.x - nextFromLast.x) ** 2 + (first.y - nextFromLast.y) ** 2);
      const closes = closesDist < 10;

      ctx.fillStyle = closes ? '#10b981' : '#ef4444';
      ctx.font = '14px monospace';
      ctx.fillText(closes ? '✓ Polygon closes!' : '✗ Does not close', 20, 30);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [startAngle, innerRadius, numSides]);

  return (
    <Card title="Poncelet's Closure Theorem">
      <div className="space-y-4">
        <p className="text-dark-300">
          If a polygon inscribed in one conic and circumscribed about another closes,
          then starting from ANY point on the outer conic gives a closed polygon.
        </p>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Start Angle: {(startAngle * 180 / Math.PI).toFixed(0)}°</label>
            <input
              type="range"
              min="0"
              max={2 * Math.PI}
              step="0.1"
              value={startAngle}
              onChange={(e) => setStartAngle(parseFloat(e.target.value))}
              className="w-32"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Inner Radius: {innerRadius}</label>
            <input
              type="range"
              min="30"
              max="110"
              value={innerRadius}
              onChange={(e) => setInnerRadius(parseInt(e.target.value))}
              className="w-32"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Sides: {numSides}</label>
            <input
              type="range"
              min="3"
              max="12"
              value={numSides}
              onChange={(e) => setNumSides(parseInt(e.target.value))}
              className="w-32"
            />
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="w-full max-w-md mx-auto border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          <span className="text-blue-400">Blue</span>: outer conic |
          <span className="text-green-400"> Green</span>: inner conic |
          <span className="text-amber-400"> Orange</span>: Poncelet polygon
        </p>
      </div>
    </Card>
  );
}

/**
 * Point-Line Duality Visualization
 * Shows the duality principle in projective geometry
 */
function DualityDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pointX, setPointX] = useState(200);
  const [pointY, setPointY] = useState(150);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const halfW = width / 2;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Divider
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(halfW, 0);
    ctx.lineTo(halfW, height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px monospace';
    ctx.fillText('Primal Space', 20, 25);
    ctx.fillText('Dual Space', halfW + 20, 25);

    // Primal: Point P
    const px = pointX;
    const py = pointY;

    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(px, py, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#e5e7eb';
    ctx.font = '12px monospace';
    ctx.fillText(`P(${px}, ${py})`, px + 15, py + 5);

    // Draw coordinate axes in primal
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, height - 30);
    ctx.lineTo(halfW - 30, height - 30);
    ctx.moveTo(50, height - 30);
    ctx.lineTo(50, 50);
    ctx.stroke();

    // Dual: Line p (ax + by = 1 where a = px, b = py normalized)
    // The point (px, py) dualizes to the line px*x + py*y = k
    const dualOffset = halfW;

    // Draw coordinate axes in dual
    ctx.beginPath();
    ctx.moveTo(dualOffset + 50, height - 30);
    ctx.lineTo(width - 30, height - 30);
    ctx.moveTo(dualOffset + 50, height - 30);
    ctx.lineTo(dualOffset + 50, 50);
    ctx.stroke();

    // Draw dual line
    // Normalize: line equation is x*px/k + y*py/k = 1
    // where k is a scaling factor for visibility
    const k = 40000;
    const a = px / k;
    const b = py / k;

    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    // Line: a*x + b*y = 1, solve for endpoints
    if (Math.abs(b) > 0.0001) {
      const x1 = dualOffset + 50;
      const y1 = height - 30 - (1 - a * (x1 - dualOffset - 50)) / b * 100;
      const x2 = width - 30;
      const y2 = height - 30 - (1 - a * (x2 - dualOffset - 50)) / b * 100;
      ctx.moveTo(x1, Math.max(50, Math.min(height - 30, y1)));
      ctx.lineTo(x2, Math.max(50, Math.min(height - 30, y2)));
    }
    ctx.stroke();

    ctx.fillStyle = '#e5e7eb';
    ctx.fillText('Line p', dualOffset + 80, 80);

    // Draw another point to show collinearity -> concurrence
    const qx = 120;
    const qy = 200;

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(qx, qy, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText(`Q(${qx}, ${qy})`, qx + 15, qy + 5);

    // Line PQ in primal
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(qx, qy);
    ctx.stroke();

    // Dual line for Q
    const a2 = qx / k;
    const b2 = qy / k;
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.beginPath();
    if (Math.abs(b2) > 0.0001) {
      const x1 = dualOffset + 50;
      const y1 = height - 30 - (1 - a2 * (x1 - dualOffset - 50)) / b2 * 100;
      const x2 = width - 30;
      const y2 = height - 30 - (1 - a2 * (x2 - dualOffset - 50)) / b2 * 100;
      ctx.moveTo(x1, Math.max(50, Math.min(height - 30, y1)));
      ctx.lineTo(x2, Math.max(50, Math.min(height - 30, y2)));
    }
    ctx.stroke();
    ctx.fillText('Line q', dualOffset + 200, 120);

    // Explanation
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px monospace';
    ctx.fillText('Point P ↔ Line p', 20, height - 10);
    ctx.fillText('Points on line ↔ Lines through point', halfW + 20, height - 10);

  }, [pointX, pointY]);

  return (
    <Card title="Point-Line Duality">
      <div className="space-y-4">
        <p className="text-dark-300">
          In projective geometry, points and lines can be interchanged: every theorem about
          points has a dual theorem about lines. Collinear points become concurrent lines.
        </p>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Point X: {pointX}</label>
            <input
              type="range"
              min="80"
              max="280"
              value={pointX}
              onChange={(e) => setPointX(parseInt(e.target.value))}
              className="w-32"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">Point Y: {pointY}</label>
            <input
              type="range"
              min="80"
              max="220"
              value={pointY}
              onChange={(e) => setPointY(parseInt(e.target.value))}
              className="w-32"
            />
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={600}
          height={280}
          className="w-full border border-dark-700 rounded-lg"
        />
      </div>
    </Card>
  );
}

/**
 * Russian Prison Timeline
 * Poncelet's captivity and the birth of projective geometry
 */
function RussianPrisonTimeline() {
  const events = [
    { year: '1812', title: 'Battle of Krasnoi', description: 'Poncelet, a military engineer with Napoleon\'s army, is left for dead on the battlefield' },
    { year: '1812', title: 'Captured', description: 'Russian soldiers find him alive and take him prisoner; begins 600-mile march to Saratov' },
    { year: '1813', title: 'Prison Studies', description: 'Without books, reconstructs geometry from memory and develops new ideas on projective properties' },
    { year: '1813-14', title: 'Seven Notebooks', description: 'Fills seven notebooks with geometric discoveries, working entirely in his head' },
    { year: '1814', title: 'Peace Treaty', description: 'Released after Napoleon\'s abdication; returns to France with his notebooks' },
    { year: '1822', title: 'Traité des propriétés projectives', description: 'Publishes his masterwork, establishing projective geometry as a discipline' },
  ];

  return (
    <Card title="The Saratov Prison: Birth of Projective Geometry">
      <div className="space-y-4">
        <p className="text-dark-300">
          One of the most remarkable stories in mathematics: Poncelet developed projective
          geometry while a prisoner of war in Russia, working entirely from memory.
        </p>
        <div className="relative border-l-2 border-blue-600 ml-4 space-y-4">
          {events.map((event, i) => (
            <div key={i} className="ml-6 relative">
              <div className="absolute -left-8 w-4 h-4 bg-blue-600 rounded-full" />
              <div className="text-blue-400 text-sm font-mono">{event.year}</div>
              <div className="text-dark-100 font-semibold">{event.title}</div>
              <div className="text-dark-400 text-sm">{event.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/**
 * Straightedge-Only Constructions
 * Poncelet-Steiner theorem: all compass constructions can be done with straightedge alone
 */
function StraightedgeDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw the given circle
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 100, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = '#6b7280';
    ctx.font = '12px monospace';
    ctx.fillText('Given: one circle with center', 20, 25);

    // Center point
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#e5e7eb';
    ctx.fillText('O', cx + 8, cy - 5);

    // Points to construct midpoint of
    const A = { x: 150, y: 200 };
    const B = { x: 400, y: 180 };

    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(A.x, A.y, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(B.x, B.y, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#e5e7eb';
    ctx.fillText('A', A.x - 15, A.y + 5);
    ctx.fillText('B', B.x + 10, B.y + 5);

    // Construction steps
    if (step >= 1) {
      // Line through A and O
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      const dx1 = A.x - cx;
      const dy1 = A.y - cy;
      ctx.moveTo(cx - dx1 * 3, cy - dy1 * 3);
      ctx.lineTo(cx + dx1 * 3, cy + dy1 * 3);
      ctx.stroke();
    }

    if (step >= 2) {
      // Line through B and O
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      const dx2 = B.x - cx;
      const dy2 = B.y - cy;
      ctx.moveTo(cx - dx2 * 3, cy - dy2 * 3);
      ctx.lineTo(cx + dx2 * 3, cy + dy2 * 3);
      ctx.stroke();
    }

    if (step >= 3) {
      // Mark intersection points with circle
      const markCircleIntersection = (px: number, py: number, color: string) => {
        const dx = px - cx;
        const dy = py - cy;
        const len = Math.sqrt(dx * dx + dy * dy);
        const r = 100;
        const ix1 = cx + (dx / len) * r;
        const iy1 = cy + (dy / len) * r;
        const ix2 = cx - (dx / len) * r;
        const iy2 = cy - (dy / len) * r;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(ix1, iy1, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ix2, iy2, 4, 0, 2 * Math.PI);
        ctx.fill();

        return [{ x: ix1, y: iy1 }, { x: ix2, y: iy2 }];
      };

      markCircleIntersection(A.x, A.y, '#10b981');
      markCircleIntersection(B.x, B.y, '#ef4444');
    }

    if (step >= 4) {
      // Draw the midpoint
      const midX = (A.x + B.x) / 2;
      const midY = (A.y + B.y) / 2;

      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(midX, midY, 6, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = '#e5e7eb';
      ctx.fillText('M (midpoint)', midX + 10, midY - 10);

      ctx.strokeStyle = '#f59e0b';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(A.x, A.y);
      ctx.lineTo(B.x, B.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Step indicator
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText(`Step ${step}/4: ${['Setup', 'Line AO', 'Line BO', 'Circle intersections', 'Midpoint found'][step]}`, 20, height - 20);

  }, [step]);

  return (
    <Card title="Straightedge-Only Construction">
      <div className="space-y-4">
        <p className="text-dark-300">
          The Poncelet-Steiner theorem proves that given just one circle with its center,
          all compass-and-straightedge constructions can be done with straightedge alone.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            className="px-3 py-1 bg-dark-700 hover:bg-dark-600 rounded text-dark-200"
          >
            ← Previous
          </button>
          <button
            onClick={() => setStep(Math.min(4, step + 1))}
            className="px-3 py-1 bg-dark-700 hover:bg-dark-600 rounded text-dark-200"
          >
            Next →
          </button>
          <button
            onClick={() => setStep(0)}
            className="px-3 py-1 bg-dark-800 hover:bg-dark-700 rounded text-dark-300"
          >
            Reset
          </button>
        </div>
        <canvas
          ref={canvasRef}
          width={550}
          height={300}
          className="w-full border border-dark-700 rounded-lg"
        />
        <p className="text-sm text-dark-400">
          Finding midpoint of AB using only a straightedge and one given circle.
        </p>
      </div>
    </Card>
  );
}

// =============================================================================
// MAIN SECTION COMPONENT
// =============================================================================

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <div className="prose prose-invert max-w-none">
        {/* Opening Quote */}
        <p className="text-xl text-dark-200 mb-6">
          Jean-Victor Poncelet created modern projective geometry while a prisoner of war
          in Russia, working without books or notes, reconstructing mathematics from pure
          thought in the freezing cold of Saratov.
        </p>

        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-dark-300">
          "The discovery of new truths is sometimes only a matter of knowing how to
          look at things from a proper point of view."
          <footer className="text-dark-500 mt-2">— Jean-Victor Poncelet</footer>
        </blockquote>

        {/* Historical Context */}
        <h2>From Battlefield to Prison Cell</h2>
        <p>
          Jean-Victor Poncelet (1788-1867) was born in Metz, France, and educated at the
          prestigious École Polytechnique, where he studied under Monge. He became a
          military engineer in Napoleon's army, and in 1812 joined the disastrous invasion
          of Russia.
        </p>
        <p>
          At the Battle of Krasnoi during the retreat from Moscow, Poncelet was left for
          dead on the frozen battlefield. Russian soldiers found him alive and marched him
          600 miles to the prison camp at Saratov on the Volga River. There, in conditions
          of bitter cold and isolation, he would make his greatest mathematical discoveries.
        </p>

        <RussianPrisonTimeline />

        <Callout type="note" title="Bell's Portrait">
          Bell presents Poncelet as a heroic figure, emphasizing the romantic drama of
          his captivity. The image of a young mathematician, stripped of all resources,
          reconstructing geometry from first principles and then surpassing all previous
          work, appealed greatly to Bell's sense of mathematical heroism.
        </Callout>

        {/* Projective Geometry Introduction */}
        <h2>What is Projective Geometry?</h2>
        <p>
          Projective geometry studies properties of figures that remain unchanged under
          <strong> projection</strong>—like the shadows cast by a light source. While
          distances and angles change under projection, certain relationships remain
          invariant.
        </p>
        <p>
          Consider how railroad tracks appear to meet at the horizon, or how a circle
          viewed at an angle becomes an ellipse. Projective geometry captures what stays
          the same through such transformations.
        </p>

        <ProjectiveTransformDemo />

        <p>
          Key insights of projective geometry include:
        </p>
        <ul>
          <li><strong>Points at infinity:</strong> Parallel lines "meet" at a point at infinity</li>
          <li><strong>No special points:</strong> All points are treated equally, including infinity</li>
          <li><strong>Duality:</strong> Points and lines can be interchanged in any theorem</li>
          <li><strong>Cross-ratio:</strong> The fundamental invariant preserved under projection</li>
        </ul>

        {/* Cross-Ratio */}
        <h2>The Cross-Ratio</h2>
        <p>
          While distances change under projection, the <strong>cross-ratio</strong> of
          four collinear points remains constant. This is the fundamental invariant of
          projective geometry.
        </p>

        <CrossRatioDemo />

        <p>
          The cross-ratio appears throughout mathematics and physics. It's related to
          the anharmonic ratio studied by ancient Greeks, but Poncelet recognized its
          central importance to the projective viewpoint.
        </p>

        {/* Duality */}
        <h2>The Principle of Duality</h2>
        <p>
          One of projective geometry's most beautiful features is <strong>duality</strong>:
          any theorem about points and lines has a dual theorem obtained by interchanging
          "point" and "line," "collinear" and "concurrent," etc.
        </p>

        <DualityDemo />

        <Callout type="example" title="Dual Theorems">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <strong>Desargues' Theorem:</strong><br />
              If two triangles are perspective from a point, they are perspective from a line.
            </div>
            <div>
              <strong>Dual (same theorem!):</strong><br />
              If two triangles are perspective from a line, they are perspective from a point.
            </div>
          </div>
        </Callout>

        {/* Poncelet's Closure Theorem */}
        <h2>Poncelet's Closure Theorem</h2>
        <p>
          One of Poncelet's most famous results concerns polygons inscribed in one conic
          and circumscribed about another. If such a polygon closes (returns to its starting
          point) for one starting position, it closes for <em>every</em> starting position.
        </p>

        <PonceletClosureDemo />

        <p>
          This theorem has deep connections to elliptic curves and integrable systems.
          It was one of the first results to hint at the rich algebraic structure underlying
          projective geometry.
        </p>

        {/* Straightedge Constructions */}
        <h2>The Poncelet-Steiner Theorem</h2>
        <p>
          Poncelet proved a remarkable result about geometric constructions: if you are
          given a single circle with its center marked, then every construction that can
          be done with compass and straightedge can be done with <em>straightedge alone</em>.
        </p>

        <StraightedgeDemo />

        <p>
          This theorem shows the power of having just one circle available. The compass
          becomes superfluous—all its work can be replicated using only straight lines
          and the given circle.
        </p>

        {/* Principle of Continuity */}
        <h2>The Principle of Continuity</h2>
        <p>
          Poncelet introduced the controversial <strong>principle of continuity</strong>:
          if a geometric property holds for one configuration, it should continue to hold
          as the configuration varies continuously, even through "impossible" intermediate
          states involving imaginary points.
        </p>
        <MathBlock math="\text{If } P \text{ holds for configuration } C_1 \text{ and } C_1 \to C_2 \text{ continuously, then } P \text{ holds for } C_2" />
        <p>
          This principle was criticized by Cauchy as lacking rigor, but it led Poncelet
          to many correct results. Modern algebraic geometry has vindicated much of his
          intuition, though with more careful foundations.
        </p>

        <Callout type="warning" title="The Cauchy-Poncelet Controversy">
          Cauchy, the great rigorist, criticized Poncelet's principle of continuity as
          unproven and potentially misleading. Poncelet defended his geometric intuition.
          History shows both were partially right: the principle leads to correct results
          but requires careful algebraic justification.
        </Callout>

        {/* Other Contributions */}
        <h2>Later Work and Engineering</h2>
        <p>
          After his mathematical work, Poncelet turned to engineering. He made important
          contributions to:
        </p>
        <CardGrid columns={2}>
          <Card title="Hydraulic Engineering">
            <p className="text-dark-300">
              Designed the Poncelet waterwheel, a highly efficient undershot wheel that
              dramatically improved water power efficiency.
            </p>
          </Card>
          <Card title="Industrial Mechanics">
            <p className="text-dark-300">
              Wrote influential textbooks on industrial mechanics, training a generation
              of French engineers.
            </p>
          </Card>
          <Card title="Fortification">
            <p className="text-dark-300">
              Applied geometry to military fortification, continuing the tradition of
              Vauban and Monge.
            </p>
          </Card>
          <Card title="École Polytechnique">
            <p className="text-dark-300">
              Served as commandant of the École Polytechnique (1848-1850), shaping
              French technical education.
            </p>
          </Card>
        </CardGrid>

        {/* Key Concepts */}
        <h2>Key Concepts</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Homogeneous Coordinates">
            <p className="text-dark-300 mb-2">
              Points represented by triples <Math math="[x:y:z]" /> where scaling doesn't matter:
            </p>
            <MathBlock math="[x:y:z] = [\lambda x : \lambda y : \lambda z]" />
            <p className="text-dark-400 text-sm mt-2">
              Points at infinity have z = 0
            </p>
          </Card>
          <Card title="Projective Line">
            <MathBlock math="\mathbb{P}^1 = \mathbb{R} \cup \{\infty\}" />
            <p className="text-dark-300">
              The real line plus a single point at infinity, forming a circle topologically.
            </p>
          </Card>
          <Card title="Projective Plane">
            <MathBlock math="\mathbb{P}^2 = \mathbb{R}^2 \cup \ell_\infty" />
            <p className="text-dark-300">
              The Euclidean plane plus a "line at infinity" where parallel lines meet.
            </p>
          </Card>
          <Card title="Conics in Projective Space">
            <MathBlock math="ax^2 + bxy + cy^2 + dxz + eyz + fz^2 = 0" />
            <p className="text-dark-300">
              All conics (ellipse, parabola, hyperbola) are projectively equivalent.
            </p>
          </Card>
        </div>

        {/* Bell's Assessment */}
        <h2>Bell's Assessment</h2>
        <p>
          Bell admires Poncelet both for his mathematical creativity and for the
          extraordinary circumstances of his discoveries. The story of the Russian
          prison exemplifies Bell's theme that great mathematics often emerges from
          adversity and isolation.
        </p>
        <p>
          Bell also emphasizes Poncelet's role in reviving synthetic (pure) geometry
          at a time when analysis dominated. While Poncelet's methods were eventually
          superseded by algebraic approaches, his vision of geometry as the study of
          invariant properties under transformation became central to modern mathematics.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-dark-300">
          "Poncelet was one of the most original geometers who ever lived... His work
          was the starting point for one of the major developments in nineteenth-century
          mathematics."
          <footer className="text-dark-500 mt-2">— E.T. Bell</footer>
        </blockquote>

        {/* Key Takeaways */}
        <Callout type="summary" title="Key Takeaways">
          <ul className="space-y-2">
            <li><strong>Projective Geometry:</strong> Studies properties invariant under projection, treating all points (including infinity) equally.</li>
            <li><strong>Cross-Ratio:</strong> The fundamental projective invariant—preserved under all projective transformations.</li>
            <li><strong>Duality:</strong> Points and lines can be interchanged, giving every theorem a dual.</li>
            <li><strong>Prison Mathematics:</strong> Poncelet developed these ideas while a POW in Russia, working from memory alone.</li>
            <li><strong>Poncelet-Steiner:</strong> Given one circle with center, all compass constructions can be done with straightedge alone.</li>
          </ul>
        </Callout>
      </div>
    </LessonLayout>
  );
}
