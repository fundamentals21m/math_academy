import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, Math as MathInline } from '../../components/common/MathBlock';

// Interactive Cartesian Coordinate System
function CartesianPlane() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Array<{ x: number; y: number }>>([
    { x: 2, y: 3 },
    { x: -1, y: 2 },
    { x: 3, y: -1 },
  ]);
  const [showGrid, setShowGrid] = useState(true);
  const [showCoordinates, setShowCoordinates] = useState(true);

  const scale = 40;
  const originX = 200;
  const originY = 200;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    if (showGrid) {
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.lineWidth = 1;
      for (let i = -5; i <= 5; i++) {
        // Vertical lines
        ctx.beginPath();
        ctx.moveTo(originX + i * scale, 0);
        ctx.lineTo(originX + i * scale, canvas.height);
        ctx.stroke();
        // Horizontal lines
        ctx.beginPath();
        ctx.moveTo(0, originY + i * scale);
        ctx.lineTo(canvas.width, originY + i * scale);
        ctx.stroke();
      }
    }

    // Draw axes
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;
    // X-axis
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(canvas.width, originY);
    ctx.stroke();
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, canvas.height);
    ctx.stroke();

    // Draw axis labels
    ctx.fillStyle = '#6366f1';
    ctx.font = '14px sans-serif';
    ctx.fillText('x', canvas.width - 15, originY - 10);
    ctx.fillText('y', originX + 10, 15);

    // Draw tick marks and numbers
    ctx.fillStyle = '#64748b';
    ctx.font = '11px sans-serif';
    for (let i = -4; i <= 4; i++) {
      if (i !== 0) {
        // X-axis ticks
        ctx.fillText(i.toString(), originX + i * scale - 4, originY + 15);
        // Y-axis ticks
        ctx.fillText((-i).toString(), originX + 5, originY + i * scale + 4);
      }
    }
    ctx.fillText('0', originX + 5, originY + 15);

    // Draw points
    points.forEach((point, index) => {
      const px = originX + point.x * scale;
      const py = originY - point.y * scale;

      // Draw dashed lines to axes
      if (showCoordinates) {
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, originY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(originX, py);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw point
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#10b981';
      ctx.fill();

      // Label
      ctx.fillStyle = '#10b981';
      ctx.font = '12px sans-serif';
      ctx.fillText(`P${index + 1}(${point.x}, ${point.y})`, px + 10, py - 10);
    });
  }, [points, showGrid, showCoordinates]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left - originX) / scale);
    const y = Math.round((originY - (e.clientY - rect.top)) / scale);

    if (x >= -4 && x <= 4 && y >= -4 && y <= 4) {
      setPoints([...points, { x, y }]);
    }
  };

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Cartesian Coordinate System</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className="bg-dark-900 rounded-lg cursor-crosshair"
            onClick={handleCanvasClick}
          />
          <p className="text-xs text-dark-500 mt-2 text-center">Click to add points</p>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={showGrid}
                onChange={(e) => setShowGrid(e.target.checked)}
                className="accent-primary-500"
              />
              Show grid
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={showCoordinates}
                onChange={(e) => setShowCoordinates(e.target.checked)}
                className="accent-primary-500"
              />
              Show coordinates
            </label>
          </div>

          <div className="bg-dark-800 p-4 rounded-lg">
            <h5 className="font-semibold text-primary-400 mb-2">Points</h5>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {points.map((p, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-dark-300">P{i + 1} = ({p.x}, {p.y})</span>
                  <button
                    onClick={() => setPoints(points.filter((_, j) => j !== i))}
                    className="text-red-400 hover:text-red-300 text-xs"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setPoints([])}
              className="mt-2 text-xs text-dark-400 hover:text-dark-300"
            >
              Clear all
            </button>
          </div>

          <div className="bg-dark-900 p-4 rounded-lg text-sm text-dark-400">
            <strong className="text-primary-400">Descartes's Revolution:</strong> Every point
            in the plane corresponds to a pair of numbers (x, y), and every equation in x and y
            corresponds to a curve. Algebra and geometry become one!
          </div>
        </div>
      </div>
    </div>
  );
}

// Equation to Curve Visualization
function EquationToCurve() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [equation, setEquation] = useState<'line' | 'parabola' | 'circle' | 'ellipse'>('line');
  const [params, setParams] = useState({ a: 1, b: 0, c: 0, r: 2 });

  const scale = 30;
  const originX = 200;
  const originY = 200;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw axes
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(canvas.width, originY);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, canvas.height);
    ctx.stroke();

    // Draw curve
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.beginPath();

    const drawPoint = (x: number, y: number, isFirst: boolean) => {
      const px = originX + x * scale;
      const py = originY - y * scale;
      if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
        if (isFirst) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
        return true;
      }
      return false;
    };

    let isFirst = true;

    switch (equation) {
      case 'line':
        // y = ax + b
        for (let x = -7; x <= 7; x += 0.1) {
          const y = params.a * x + params.b;
          if (drawPoint(x, y, isFirst)) isFirst = false;
        }
        break;
      case 'parabola':
        // y = ax²
        for (let x = -7; x <= 7; x += 0.1) {
          const y = params.a * x * x;
          if (drawPoint(x, y, isFirst)) isFirst = false;
        }
        break;
      case 'circle':
        // x² + y² = r²
        for (let theta = 0; theta <= 2 * Math.PI; theta += 0.05) {
          const x = params.r * Math.cos(theta);
          const y = params.r * Math.sin(theta);
          if (drawPoint(x, y, isFirst)) isFirst = false;
        }
        break;
      case 'ellipse':
        // (x/a)² + (y/b)² = 1, using a=3, b=2
        for (let theta = 0; theta <= 2 * Math.PI; theta += 0.05) {
          const x = 3 * Math.cos(theta);
          const y = 2 * Math.sin(theta);
          if (drawPoint(x, y, isFirst)) isFirst = false;
        }
        break;
    }
    ctx.stroke();
  }, [equation, params]);

  const equations = {
    line: { label: 'Line', eq: `y = ${params.a}x + ${params.b}` },
    parabola: { label: 'Parabola', eq: `y = ${params.a}x²` },
    circle: { label: 'Circle', eq: `x² + y² = ${params.r * params.r}` },
    ellipse: { label: 'Ellipse', eq: `\\frac{x^2}{9} + \\frac{y^2}{4} = 1` },
  };

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">From Equations to Curves</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className="bg-dark-900 rounded-lg"
          />
        </div>

        <div className="flex-1 space-y-4">
          {/* Curve selector */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(equations).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setEquation(key as typeof equation)}
                className={`px-4 py-2 rounded text-sm ${
                  equation === key
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {value.label}
              </button>
            ))}
          </div>

          {/* Equation display */}
          <div className="bg-dark-800 p-4 rounded-lg">
            <p className="text-sm text-dark-400 mb-2">Equation:</p>
            {equation === 'ellipse' ? (
              <MathBlock>{equations[equation].eq}</MathBlock>
            ) : (
              <p className="text-xl font-mono text-emerald-400">{equations[equation].eq}</p>
            )}
          </div>

          {/* Parameter controls */}
          {(equation === 'line' || equation === 'parabola') && (
            <div className="space-y-2">
              <label className="text-sm text-dark-400 block">
                a = {params.a.toFixed(1)}
              </label>
              <input
                type="range"
                min={-2}
                max={2}
                step={0.1}
                value={params.a}
                onChange={(e) => setParams({ ...params, a: parseFloat(e.target.value) })}
                className="w-full accent-primary-500"
              />
              {equation === 'line' && (
                <>
                  <label className="text-sm text-dark-400 block">
                    b = {params.b.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min={-3}
                    max={3}
                    step={0.1}
                    value={params.b}
                    onChange={(e) => setParams({ ...params, b: parseFloat(e.target.value) })}
                    className="w-full accent-primary-500"
                  />
                </>
              )}
            </div>
          )}
          {equation === 'circle' && (
            <div className="space-y-2">
              <label className="text-sm text-dark-400 block">
                r = {params.r.toFixed(1)}
              </label>
              <input
                type="range"
                min={1}
                max={5}
                step={0.5}
                value={params.r}
                onChange={(e) => setParams({ ...params, r: parseFloat(e.target.value) })}
                className="w-full accent-primary-500"
              />
            </div>
          )}

          <div className="text-sm text-dark-400">
            <strong className="text-amber-400">Key Insight:</strong> Every algebraic equation
            defines a geometric curve. By studying equations, we study geometry!
          </div>
        </div>
      </div>
    </div>
  );
}

// Distance Formula Demo
function DistanceFormula() {
  const [p1, setP1] = useState({ x: 1, y: 1 });
  const [p2, setP2] = useState({ x: 4, y: 5 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scale = 40;
  const originX = 40;
  const originY = 280;

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw axes
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, canvas.height);
    ctx.moveTo(0, originY);
    ctx.lineTo(canvas.width, originY);
    ctx.stroke();

    const px1 = originX + p1.x * scale;
    const py1 = originY - p1.y * scale;
    const px2 = originX + p2.x * scale;
    const py2 = originY - p2.y * scale;

    // Draw right triangle
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(px1, py1);
    ctx.lineTo(px2, py1); // Horizontal leg
    ctx.lineTo(px2, py2); // Vertical leg
    ctx.stroke();
    ctx.setLineDash([]);

    // Label legs
    ctx.fillStyle = '#f59e0b';
    ctx.font = '12px sans-serif';
    ctx.fillText(`Δx = ${dx}`, (px1 + px2) / 2 - 15, py1 + 20);
    ctx.fillText(`Δy = ${Math.abs(dy)}`, px2 + 10, (py1 + py2) / 2);

    // Draw hypotenuse (distance)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(px1, py1);
    ctx.lineTo(px2, py2);
    ctx.stroke();

    // Label distance
    ctx.fillStyle = '#10b981';
    const midX = (px1 + px2) / 2;
    const midY = (py1 + py2) / 2;
    ctx.fillText(`d = ${distance.toFixed(2)}`, midX - 30, midY - 10);

    // Draw points
    [{ x: px1, y: py1, label: `(${p1.x}, ${p1.y})` }, { x: px2, y: py2, label: `(${p2.x}, ${p2.y})` }].forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = i === 0 ? '#3b82f6' : '#ef4444';
      ctx.fill();
      ctx.fillStyle = i === 0 ? '#3b82f6' : '#ef4444';
      ctx.fillText(p.label, p.x + 10, p.y - 10);
    });
  }, [p1, p2, dx, dy, distance]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Distance Formula (Pythagorean Theorem)</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={320}
            height={320}
            className="bg-dark-900 rounded-lg"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-800 p-3 rounded-lg">
              <p className="text-xs text-blue-400 mb-1">Point 1</p>
              <div className="flex gap-2">
                <div>
                  <label className="text-xs text-dark-500">x₁</label>
                  <input
                    type="number"
                    value={p1.x}
                    onChange={(e) => setP1({ ...p1, x: parseInt(e.target.value) || 0 })}
                    className="w-full bg-dark-700 rounded px-2 py-1 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-dark-500">y₁</label>
                  <input
                    type="number"
                    value={p1.y}
                    onChange={(e) => setP1({ ...p1, y: parseInt(e.target.value) || 0 })}
                    className="w-full bg-dark-700 rounded px-2 py-1 text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="bg-dark-800 p-3 rounded-lg">
              <p className="text-xs text-red-400 mb-1">Point 2</p>
              <div className="flex gap-2">
                <div>
                  <label className="text-xs text-dark-500">x₂</label>
                  <input
                    type="number"
                    value={p2.x}
                    onChange={(e) => setP2({ ...p2, x: parseInt(e.target.value) || 0 })}
                    className="w-full bg-dark-700 rounded px-2 py-1 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-dark-500">y₂</label>
                  <input
                    type="number"
                    value={p2.y}
                    onChange={(e) => setP2({ ...p2, y: parseInt(e.target.value) || 0 })}
                    className="w-full bg-dark-700 rounded px-2 py-1 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 p-4 rounded-lg">
            <MathBlock>
              {`d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} = \\sqrt{${dx}^2 + ${dy}^2} = \\sqrt{${dx*dx + dy*dy}} = ${distance.toFixed(4)}`}
            </MathBlock>
          </div>

          <p className="text-sm text-dark-400">
            The Pythagorean theorem, expressed algebraically through coordinates.
            Geometry becomes calculation!
          </p>
        </div>
      </div>
    </div>
  );
}

// Rule of Signs Demo
function RuleOfSigns() {
  const [coefficients, setCoefficients] = useState([1, -2, -3, 4]); // x³ - 2x² - 3x + 4

  // Count sign changes for positive roots
  const countSignChanges = (coeffs: number[]): number => {
    let changes = 0;
    let lastSign = Math.sign(coeffs[0]);
    for (let i = 1; i < coeffs.length; i++) {
      if (coeffs[i] !== 0) {
        const currentSign = Math.sign(coeffs[i]);
        if (currentSign !== lastSign) changes++;
        lastSign = currentSign;
      }
    }
    return changes;
  };

  // For negative roots, substitute -x
  const negativeCoeffs = coefficients.map((c, i) =>
    (coefficients.length - 1 - i) % 2 === 1 ? -c : c
  );

  const positiveChanges = countSignChanges(coefficients);
  const negativeChanges = countSignChanges(negativeCoeffs);

  const formatPolynomial = (coeffs: number[]): string => {
    const degree = coeffs.length - 1;
    return coeffs.map((c, i) => {
      const power = degree - i;
      if (c === 0) return '';
      const sign = c > 0 ? (i === 0 ? '' : ' + ') : ' - ';
      const absC = Math.abs(c);
      const coeff = absC === 1 && power > 0 ? '' : absC.toString();
      const variable = power === 0 ? '' : power === 1 ? 'x' : `x^${power}`;
      return `${sign}${coeff}${variable}`;
    }).filter(Boolean).join('');
  };

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Descartes's Rule of Signs</h4>

      <p className="text-sm text-dark-300 mb-4">
        The number of positive real roots of a polynomial equals the number of sign
        changes in its coefficients, or is less than that by an even number.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <p className="text-sm text-dark-400 mb-2">Polynomial:</p>
        <p className="text-xl font-mono text-emerald-400">
          f(x) = {formatPolynomial(coefficients)}
        </p>
      </div>

      {/* Coefficient editor */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {coefficients.map((c, i) => (
          <div key={i} className="bg-dark-800 p-2 rounded">
            <label className="text-xs text-dark-500 block mb-1">
              x^{coefficients.length - 1 - i}
            </label>
            <input
              type="number"
              value={c}
              onChange={(e) => {
                const newCoeffs = [...coefficients];
                newCoeffs[i] = parseInt(e.target.value) || 0;
                setCoefficients(newCoeffs);
              }}
              className="w-full bg-dark-700 rounded px-2 py-1 text-sm text-center"
            />
          </div>
        ))}
      </div>

      {/* Sign analysis */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h5 className="font-semibold text-blue-400 mb-2">Positive Roots</h5>
          <div className="flex gap-2 mb-2">
            {coefficients.map((c, i) => (
              <span
                key={i}
                className={`px-2 py-1 rounded text-sm ${
                  c > 0 ? 'bg-emerald-900/50 text-emerald-400' :
                  c < 0 ? 'bg-red-900/50 text-red-400' : 'bg-dark-700 text-dark-500'
                }`}
              >
                {c > 0 ? '+' : c < 0 ? '−' : '0'}
              </span>
            ))}
          </div>
          <p className="text-sm text-dark-300">
            Sign changes: <span className="text-primary-400 font-bold">{positiveChanges}</span>
          </p>
          <p className="text-xs text-dark-400 mt-1">
            Possible positive roots: {positiveChanges}, {positiveChanges - 2 >= 0 ? `${positiveChanges - 2}, ` : ''}{positiveChanges % 2 === 0 ? '0' : ''}
          </p>
        </div>

        <div className="bg-dark-800 p-4 rounded-lg">
          <h5 className="font-semibold text-amber-400 mb-2">Negative Roots (f(−x))</h5>
          <div className="flex gap-2 mb-2">
            {negativeCoeffs.map((c, i) => (
              <span
                key={i}
                className={`px-2 py-1 rounded text-sm ${
                  c > 0 ? 'bg-emerald-900/50 text-emerald-400' :
                  c < 0 ? 'bg-red-900/50 text-red-400' : 'bg-dark-700 text-dark-500'
                }`}
              >
                {c > 0 ? '+' : c < 0 ? '−' : '0'}
              </span>
            ))}
          </div>
          <p className="text-sm text-dark-300">
            Sign changes: <span className="text-primary-400 font-bold">{negativeChanges}</span>
          </p>
          <p className="text-xs text-dark-400 mt-1">
            Possible negative roots: {negativeChanges}, {negativeChanges - 2 >= 0 ? `${negativeChanges - 2}, ` : ''}{negativeChanges % 2 === 0 ? '0' : ''}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        With René Descartes, we enter the modern world. Philosopher, scientist, and
        mathematician, Descartes created analytic geometry—the marriage of algebra and
        geometry that would make calculus possible. His famous declaration "I think,
        therefore I am" launched modern philosophy, but his coordinates launched modern
        mathematics.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "I think, therefore I am."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — René Descartes, Discourse on Method (1637)
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Man and His Times</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            René Descartes (1596–1650) was born in La Haye en Touraine, France, to a
            family of minor nobility. Sickly as a child, he was allowed to stay in bed
            late at his Jesuit school—a habit he kept throughout his life and credited
            as the source of his best ideas.
          </p>
          <p className="mb-4">
            After studying law, he joined the army (more for travel than fighting) and
            spent years wandering Europe. In 1628, he settled in Holland, where
            intellectual freedom allowed him to work in peace for twenty years. There
            he produced his major philosophical and mathematical works.
          </p>
          <p>
            In 1649, Queen Christina of Sweden invited him to her court. Descartes,
            who loved sleeping late, was required to give philosophy lessons at 5 AM
            in a freezing library. He caught pneumonia and died within months, at age 53.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> March 31, 1596, France</li>
            <li><strong>Died:</strong> February 11, 1650, Sweden</li>
            <li><strong>Education:</strong> Jesuit college, Poitiers law</li>
            <li><strong>Residence:</strong> Holland (1628–1649)</li>
            <li><strong>Legacy:</strong> Father of modern philosophy & analytic geometry</li>
          </ul>
        </Card>
      </div>

      <Callout type="info">
        <p>
          <strong>The Dream:</strong> On November 10, 1619, Descartes had three vivid dreams
          that he interpreted as a divine sign to reform all knowledge. From this night,
          he dated his mission to find certain foundations for science and philosophy.
        </p>
      </Callout>

      {/* The Revolution */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Geometric Revolution</h2>

      <p className="mb-4">
        Before Descartes, algebra and geometry were separate disciplines. Geometers
        drew figures; algebraists manipulated symbols. In his <em>La Géométrie</em> (1637),
        Descartes unified them by introducing <strong>coordinates</strong>—a way to
        represent geometric points as pairs of numbers.
      </p>

      <Callout type="success">
        <p>
          <strong>The Key Insight:</strong> Every point in the plane can be specified
          by two numbers (x, y), its distances from two perpendicular axes. Every
          algebraic equation in x and y describes a geometric curve. Algebra and
          geometry become two languages for the same thing!
        </p>
      </Callout>

      <CartesianPlane />

      {/* Equations and Curves */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Equations Become Curves</h2>

      <p className="mb-4">
        The power of Descartes's method lies in the correspondence between algebraic
        equations and geometric curves. A linear equation gives a line; a quadratic
        gives a conic section. Complex curves that defied ancient geometers yield to
        simple equations.
      </p>

      <EquationToCurve />

      <p className="my-4">
        This correspondence works both ways:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Algebra → Geometry</h4>
          <p className="text-sm text-dark-300">
            Given an equation, plot its solutions to visualize the curve.
            Algebraic properties become visible.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Geometry → Algebra</h4>
          <p className="text-sm text-dark-300">
            Given a curve, find its equation. Geometric problems become
            algebraic calculations.
          </p>
        </Card>
      </CardGrid>

      {/* Distance Formula */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Power of Coordinates</h2>

      <p className="mb-4">
        With coordinates, geometric relationships become algebraic formulas. The
        distance between two points, the slope of a line, the equation of a circle—all
        reduce to arithmetic. The Pythagorean theorem becomes the distance formula:
      </p>

      <DistanceFormula />

      {/* Mathematical Contributions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Mathematical Innovations</h2>

      <p className="mb-6">
        Beyond the coordinate system, Descartes introduced notation and concepts
        we still use today:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Modern Notation</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• <MathInline>x, y, z</MathInline> for unknowns</li>
            <li>• <MathInline>a, b, c</MathInline> for constants</li>
            <li>• <MathInline>x^2, x^3</MathInline> for powers (exponential notation)</li>
            <li>• Equations written as we write them today</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Rule of Signs</h4>
          <p className="text-sm text-dark-300">
            A method to determine the number of positive and negative real roots
            of a polynomial by counting sign changes in its coefficients.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Algebraic Curves</h4>
          <p className="text-sm text-dark-300">
            Systematic classification of curves by the degree of their equations:
            conics (degree 2), cubics (degree 3), etc.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Tangent Lines</h4>
          <p className="text-sm text-dark-300">
            Methods to find tangent lines to curves—a problem that would lead
            directly to differential calculus.
          </p>
        </div>
      </div>

      {/* Rule of Signs */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Rule of Signs</h2>

      <p className="mb-4">
        One of Descartes's elegant results: you can bound the number of positive
        and negative roots of a polynomial just by looking at its coefficients.
      </p>

      <RuleOfSigns />

      {/* Philosophy Connection */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Method of Doubt</h2>

      <p className="mb-4">
        Descartes's mathematical work was part of a larger project: to rebuild all
        knowledge on certain foundations. His philosophical <em>method of doubt</em>—
        questioning everything until reaching something undoubtable—parallels his
        mathematical method of reducing complex problems to simple, clear steps.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Divide each difficulty into as many parts as is feasible and necessary
        to resolve it."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Descartes, Discourse on Method
        </footer>
      </blockquote>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">In Philosophy</h4>
          <p className="text-sm text-dark-300">
            Doubt everything → Find something certain (cogito) → Build up from there.
            Foundation: "I think, therefore I am."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">In Mathematics</h4>
          <p className="text-sm text-dark-300">
            Reduce geometry to algebra → Reduce algebra to arithmetic → Solve step by step.
            Foundation: coordinates and equations.
          </p>
        </Card>
      </CardGrid>

      {/* La Géométrie */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">La Géométrie (1637)</h2>

      <p className="mb-4">
        Descartes published his mathematical masterpiece as an appendix to his
        philosophical <em>Discourse on Method</em>. Though only about 100 pages,
        it revolutionized mathematics:
      </p>

      <div className="bg-dark-800 p-6 rounded-lg my-6">
        <h4 className="font-semibold text-primary-400 mb-3">Structure of La Géométrie</h4>
        <ol className="list-decimal list-inside space-y-2 text-sm text-dark-300">
          <li><strong>Book I:</strong> Problems solvable with ruler and compass—translated into algebraic equations</li>
          <li><strong>Book II:</strong> Classification of curves by degree; tangent methods</li>
          <li><strong>Book III:</strong> Solving equations; the Rule of Signs; roots of polynomials</li>
        </ol>
      </div>

      <Callout type="warning">
        <p>
          <strong>Deliberately Obscure:</strong> Descartes intentionally made his book
          difficult, leaving out steps and proofs. He boasted that only five or six
          people in Europe could understand it. This was partly intellectual pride,
          partly protection from controversy.
        </p>
      </Callout>

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell presents Descartes as a pivotal figure—the hinge between ancient
        and modern mathematics. While Bell admires the power of analytic geometry,
        he notes Descartes's limitations:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Descartes was one of the most original minds in history... but his influence
        on mathematics, though profound, was due more to his method than to any
        particular discovery."
      </blockquote>

      <p className="my-4">
        Bell emphasizes that Descartes's real contribution was showing how to reduce
        geometry to algebra—not solving every problem, but providing a universal method.
        After Descartes, mathematicians had a systematic way to attack problems that
        had stymied the ancients for two thousand years.
      </p>

      <Callout type="info">
        <p>
          <strong>Fermat's Parallel Discovery:</strong> Independently of Descartes,
          Pierre de Fermat developed analytic geometry around the same time. Fermat's
          approach was arguably cleaner, but Descartes published first and got the
          credit—hence "Cartesian" coordinates, not "Fermatian."
        </p>
      </Callout>

      {/* Legacy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Cartesian Legacy</h2>

      <p className="mb-6">
        Descartes's fusion of algebra and geometry made possible:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Calculus</h4>
          <p className="text-sm text-dark-300">
            Newton and Leibniz built on Cartesian geometry to create
            differential and integral calculus.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Higher Dimensions</h4>
          <p className="text-sm text-dark-300">
            The coordinate idea extends to 3D space (x, y, z) and beyond—
            even infinite-dimensional spaces.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Computer Graphics</h4>
          <p className="text-sm text-dark-300">
            Every pixel on your screen has Cartesian coordinates.
            3D graphics, CAD, and gaming all depend on Descartes's insight.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Physics</h4>
          <p className="text-sm text-dark-300">
            Mechanics, electromagnetism, and relativity all use coordinate
            systems to describe physical space.
          </p>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              René Descartes (1596–1650) created analytic geometry, unifying algebra
              and geometry through the coordinate system.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Every point becomes a pair of numbers (x, y); every equation becomes a curve.
              Geometric problems reduce to algebraic calculations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              Descartes introduced modern algebraic notation: <MathInline>x^2</MathInline>,
              variables x, y, z for unknowns, and equations as we write them today.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              His <em>La Géométrie</em> (1637), though deliberately obscure, provided
              the method that made calculus possible within a generation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              Descartes's philosophy ("I think, therefore I am") and mathematics share
              the same approach: build certain knowledge from clear, simple foundations.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
