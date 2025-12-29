import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, Math as MathInline } from '../../components/common/MathBlock';

// Pascal's Triangle Interactive
function PascalsTriangle() {
  const [rows, setRows] = useState(8);
  const [highlightPattern, setHighlightPattern] = useState<'none' | 'fibonacci' | 'powers2' | 'evens'>('none');
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  // Generate Pascal's Triangle
  const generateTriangle = (n: number): number[][] => {
    const triangle: number[][] = [[1]];
    for (let i = 1; i < n; i++) {
      const prevRow = triangle[i - 1];
      const newRow = [1];
      for (let j = 1; j < prevRow.length; j++) {
        newRow.push(prevRow[j - 1] + prevRow[j]);
      }
      newRow.push(1);
      triangle.push(newRow);
    }
    return triangle;
  };

  const triangle = generateTriangle(rows);

  // Calculate Fibonacci numbers from diagonals
  const getFibonacci = (row: number, col: number): boolean => {
    if (highlightPattern !== 'fibonacci') return false;
    // Diagonal sums give Fibonacci
    const diagSum = row - col;
    return diagSum >= 0 && diagSum <= 10;
  };

  // Check if number is even
  const isEven = (num: number): boolean => num % 2 === 0;

  // Get cell color based on pattern
  const getCellClass = (row: number, col: number, value: number): string => {
    const baseClass = 'w-10 h-10 flex items-center justify-center text-sm rounded transition-all duration-200';

    if (selectedRow === row) {
      return `${baseClass} bg-primary-600 text-white font-bold`;
    }

    switch (highlightPattern) {
      case 'evens':
        return isEven(value)
          ? `${baseClass} bg-amber-600/50 text-amber-200`
          : `${baseClass} bg-dark-700 text-dark-300`;
      case 'powers2':
        // Row sums are powers of 2
        return `${baseClass} bg-dark-700 text-dark-300 hover:bg-dark-600`;
      case 'fibonacci':
        // Highlight diagonals
        const diagIndex = row - col;
        const colors = ['bg-red-600/50', 'bg-orange-600/50', 'bg-yellow-600/50', 'bg-green-600/50', 'bg-blue-600/50', 'bg-purple-600/50'];
        return `${baseClass} ${colors[diagIndex % colors.length]} text-white`;
      default:
        return `${baseClass} bg-dark-700 text-dark-300 hover:bg-dark-600`;
    }
  };

  // Calculate row sum
  const rowSum = (row: number[]): number => row.reduce((a, b) => a + b, 0);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Pascal's Triangle</h4>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-1">Rows: {rows}</label>
          <input
            type="range"
            min={4}
            max={12}
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
            className="w-32 accent-primary-500"
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">Highlight Pattern</label>
          <select
            value={highlightPattern}
            onChange={(e) => setHighlightPattern(e.target.value as typeof highlightPattern)}
            className="bg-dark-700 rounded px-2 py-1 text-sm"
          >
            <option value="none">None</option>
            <option value="evens">Even Numbers</option>
            <option value="fibonacci">Fibonacci Diagonals</option>
          </select>
        </div>
      </div>

      {/* Triangle */}
      <div className="overflow-x-auto pb-4">
        <div className="flex flex-col items-center gap-1 min-w-fit">
          {triangle.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-1 cursor-pointer"
              onClick={() => setSelectedRow(selectedRow === rowIndex ? null : rowIndex)}
            >
              {row.map((value, colIndex) => (
                <div
                  key={colIndex}
                  className={getCellClass(rowIndex, colIndex, value)}
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Info panel */}
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h5 className="font-semibold text-primary-400 mb-2">Row Properties</h5>
          {selectedRow !== null ? (
            <div className="text-sm space-y-1">
              <p className="text-dark-300">Row {selectedRow}: [{triangle[selectedRow].join(', ')}]</p>
              <p className="text-dark-400">Sum = <span className="text-emerald-400">{rowSum(triangle[selectedRow])} = 2^{selectedRow}</span></p>
              <p className="text-dark-400">Binomial coefficients for (a+b)^{selectedRow}</p>
            </div>
          ) : (
            <p className="text-sm text-dark-500">Click a row to see details</p>
          )}
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h5 className="font-semibold text-primary-400 mb-2">Hidden Patterns</h5>
          <ul className="text-sm text-dark-400 space-y-1">
            <li>• Row sums: powers of 2</li>
            <li>• Diagonal sums: Fibonacci numbers</li>
            <li>• Even numbers form Sierpiński triangle</li>
            <li>• Entry = <MathInline>{'\\binom{n}{k} = \\frac{n!}{k!(n-k)!}'}</MathInline></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Binomial Expansion Demo
function BinomialExpansion() {
  const [n, setN] = useState(4);
  const [a, setA] = useState('x');
  const [b, setB] = useState('y');

  // Calculate binomial coefficient
  const binomial = (n: number, k: number): number => {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    let result = 1;
    for (let i = 0; i < k; i++) {
      result = result * (n - i) / (i + 1);
    }
    return Math.round(result);
  };

  // Generate expansion terms
  const generateExpansion = (): string[] => {
    const terms: string[] = [];
    for (let k = 0; k <= n; k++) {
      const coeff = binomial(n, k);
      const aPower = n - k;
      const bPower = k;

      let term = '';
      if (coeff !== 1 || (aPower === 0 && bPower === 0)) term += coeff;
      if (aPower > 0) term += a + (aPower > 1 ? `^${aPower}` : '');
      if (bPower > 0) term += b + (bPower > 1 ? `^${bPower}` : '');

      terms.push(term);
    }
    return terms;
  };

  const terms = generateExpansion();

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Binomial Theorem</h4>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k`}
        </MathBlock>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-1">n = {n}</label>
          <input
            type="range"
            min={1}
            max={8}
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">a =</label>
          <input
            type="text"
            value={a}
            onChange={(e) => setA(e.target.value || 'x')}
            className="w-full bg-dark-700 rounded px-2 py-1 text-sm"
            maxLength={3}
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">b =</label>
          <input
            type="text"
            value={b}
            onChange={(e) => setB(e.target.value || 'y')}
            className="w-full bg-dark-700 rounded px-2 py-1 text-sm"
            maxLength={3}
          />
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <p className="text-sm text-dark-400 mb-2">({a} + {b})^{n} =</p>
        <p className="text-lg font-mono text-emerald-400 break-all">
          {terms.join(' + ')}
        </p>
      </div>

      <div className="mt-4 p-4 bg-dark-900 rounded-lg">
        <h5 className="font-semibold text-primary-400 mb-2">Coefficients from Pascal's Triangle</h5>
        <p className="text-sm text-dark-400">
          Row {n}: [{Array.from({length: n + 1}, (_, k) => binomial(n, k)).join(', ')}]
        </p>
      </div>
    </div>
  );
}

// Probability - Coin Flips
function CoinFlipProbability() {
  const [flips, setFlips] = useState(5);
  const [targetHeads, setTargetHeads] = useState(3);

  // Calculate binomial coefficient
  const binomial = (n: number, k: number): number => {
    if (k > n || k < 0) return 0;
    if (k === 0 || k === n) return 1;
    let result = 1;
    for (let i = 0; i < k; i++) {
      result = result * (n - i) / (i + 1);
    }
    return Math.round(result);
  };

  const ways = binomial(flips, targetHeads);
  const totalOutcomes = Math.pow(2, flips);
  const probability = ways / totalOutcomes;

  // Generate distribution
  const distribution = Array.from({ length: flips + 1 }, (_, k) => ({
    heads: k,
    ways: binomial(flips, k),
    prob: binomial(flips, k) / totalOutcomes,
  }));

  const maxWays = Math.max(...distribution.map(d => d.ways));

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Probability and Pascal's Triangle</h4>

      <p className="text-sm text-dark-300 mb-4">
        Pascal realized that the entries in his triangle count combinations—and thus
        determine probabilities in games of chance.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-1">Number of flips: {flips}</label>
          <input
            type="range"
            min={1}
            max={10}
            value={flips}
            onChange={(e) => {
              const newFlips = parseInt(e.target.value);
              setFlips(newFlips);
              setTargetHeads(Math.min(targetHeads, newFlips));
            }}
            className="w-full accent-primary-500"
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">Target heads: {targetHeads}</label>
          <input
            type="range"
            min={0}
            max={flips}
            value={targetHeads}
            onChange={(e) => setTargetHeads(parseInt(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
      </div>

      {/* Distribution visualization */}
      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <h5 className="text-sm text-dark-400 mb-2">Distribution of Heads</h5>
        <div className="flex items-end justify-center gap-1 h-32">
          {distribution.map((d, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-8 rounded-t transition-all duration-300 ${
                  i === targetHeads ? 'bg-emerald-500' : 'bg-primary-600/50'
                }`}
                style={{ height: `${(d.ways / maxWays) * 100}%` }}
              />
              <span className="text-xs text-dark-500 mt-1">{d.heads}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-dark-500 text-center mt-2">Number of heads</p>
      </div>

      {/* Calculation */}
      <div className="bg-dark-800 p-4 rounded-lg">
        <h5 className="font-semibold text-primary-400 mb-2">
          P(exactly {targetHeads} heads in {flips} flips)
        </h5>
        <div className="space-y-2 text-sm">
          <p className="text-dark-300">
            Ways to get {targetHeads} heads: <MathInline>{'\\binom{' + flips + '}{' + targetHeads + '}'}</MathInline> = <span className="text-emerald-400 font-bold">{ways}</span>
          </p>
          <p className="text-dark-300">
            Total outcomes: 2^{flips} = <span className="text-amber-400">{totalOutcomes}</span>
          </p>
          <p className="text-dark-300">
            Probability: {ways}/{totalOutcomes} = <span className="text-primary-400 font-bold">{(probability * 100).toFixed(2)}%</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// The Pascaline Calculator
function PascalineDemo() {
  const [num1, setNum1] = useState(127);
  const [num2, setNum2] = useState(45);
  const [showCarry, setShowCarry] = useState(false);

  const sum = num1 + num2;
  const digits1 = num1.toString().padStart(4, '0').split('').map(Number);
  const digits2 = num2.toString().padStart(4, '0').split('').map(Number);
  const sumDigits = sum.toString().padStart(4, '0').split('').map(Number);

  // Calculate carries
  const carries: boolean[] = [];
  let carry = 0;
  for (let i = 3; i >= 0; i--) {
    const digitSum = digits1[i] + digits2[i] + carry;
    carries.unshift(digitSum >= 10);
    carry = digitSum >= 10 ? 1 : 0;
  }

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Pascaline (1642)</h4>

      <p className="text-sm text-dark-300 mb-4">
        At age 19, Pascal invented one of the first mechanical calculators to help
        his father with tax calculations. It used interlocking gears to perform
        addition and subtraction automatically.
      </p>

      <div className="bg-dark-800 p-6 rounded-lg mb-4">
        {/* Calculator display */}
        <div className="flex justify-center gap-8 mb-6">
          <div className="text-center">
            <p className="text-xs text-dark-500 mb-1">First number</p>
            <div className="flex gap-1">
              {digits1.map((d, i) => (
                <div key={i} className="w-10 h-12 bg-dark-900 rounded flex items-center justify-center text-xl font-mono text-emerald-400">
                  {d}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-dark-500 mb-1">Second number</p>
            <div className="flex gap-1">
              {digits2.map((d, i) => (
                <div key={i} className="w-10 h-12 bg-dark-900 rounded flex items-center justify-center text-xl font-mono text-amber-400">
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carry indicators */}
        {showCarry && (
          <div className="flex justify-center mb-2">
            <div className="flex gap-1">
              {carries.map((c, i) => (
                <div key={i} className={`w-10 h-6 flex items-center justify-center text-xs ${c ? 'text-red-400' : 'text-dark-600'}`}>
                  {c ? '↑1' : ''}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        <div className="flex justify-center">
          <div className="text-center">
            <p className="text-xs text-dark-500 mb-1">Sum</p>
            <div className="flex gap-1">
              {sumDigits.map((d, i) => (
                <div key={i} className="w-10 h-12 bg-primary-900/50 border-2 border-primary-500 rounded flex items-center justify-center text-xl font-mono text-primary-400">
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-1">First number</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Math.min(9999, Math.max(0, parseInt(e.target.value) || 0)))}
            className="w-full bg-dark-700 rounded px-3 py-2"
            max={9999}
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">Second number</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Math.min(9999, Math.max(0, parseInt(e.target.value) || 0)))}
            className="w-full bg-dark-700 rounded px-3 py-2"
            max={9999}
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-dark-400">
        <input
          type="checkbox"
          checked={showCarry}
          onChange={(e) => setShowCarry(e.target.checked)}
          className="accent-primary-500"
        />
        Show carry mechanism
      </label>

      <div className="mt-4 p-4 bg-dark-900 rounded-lg">
        <p className="text-sm text-dark-400">
          <strong className="text-amber-400">Historical Note:</strong> Pascal built around 50
          Pascalines, but they were too expensive for widespread use. The key innovation was
          the automatic carry mechanism—when a wheel passed 9, it would engage a lever to
          advance the next wheel by one.
        </p>
      </div>
    </div>
  );
}

// Pascal's Hexagon Theorem
function HexagonTheorem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw ellipse (conic section)
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radius * 1.3, radius * 0.9, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Calculate 6 points on the ellipse
    const points: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI / 3) + (rotation * Math.PI / 180);
      points.push({
        x: centerX + radius * 1.3 * Math.cos(angle),
        y: centerY + radius * 0.9 * Math.sin(angle),
      });
    }

    // Draw hexagon edges (1-2, 2-3, 3-4, 4-5, 5-6, 6-1)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(points[i].x, points[i].y);
      ctx.lineTo(points[(i + 1) % 6].x, points[(i + 1) % 6].y);
      ctx.stroke();
    }

    // Find intersection points of opposite sides
    // Sides: (1-2) & (4-5), (2-3) & (5-6), (3-4) & (6-1)
    const lineIntersection = (
      p1: { x: number; y: number }, p2: { x: number; y: number },
      p3: { x: number; y: number }, p4: { x: number; y: number }
    ): { x: number; y: number } | null => {
      const d = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);
      if (Math.abs(d) < 0.0001) return null;
      const t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / d;
      return {
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y),
      };
    };

    // Extended lines for opposite sides
    const extendLine = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
      ctx.beginPath();
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      ctx.moveTo(p1.x - dx * 3, p1.y - dy * 3);
      ctx.lineTo(p2.x + dx * 3, p2.y + dy * 3);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    extendLine(points[0], points[1]);
    extendLine(points[3], points[4]);
    extendLine(points[1], points[2]);
    extendLine(points[4], points[5]);
    extendLine(points[2], points[3]);
    extendLine(points[5], points[0]);

    // Calculate intersections
    const int1 = lineIntersection(points[0], points[1], points[3], points[4]);
    const int2 = lineIntersection(points[1], points[2], points[4], points[5]);
    const int3 = lineIntersection(points[2], points[3], points[5], points[0]);

    // Draw intersection points and Pascal line
    const intersections = [int1, int2, int3].filter(Boolean) as Array<{ x: number; y: number }>;

    intersections.forEach(int => {
      ctx.beginPath();
      ctx.arc(int.x, int.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ef4444';
      ctx.fill();
    });

    // Draw Pascal line through all three points
    if (intersections.length >= 2) {
      ctx.beginPath();
      ctx.moveTo(intersections[0].x - 200,
        intersections[0].y + (intersections[1].y - intersections[0].y) / (intersections[1].x - intersections[0].x) * (-200 - (intersections[0].x - intersections[0].x)));

      const dx = intersections[1].x - intersections[0].x;
      const dy = intersections[1].y - intersections[0].y;
      ctx.moveTo(intersections[0].x - dx * 5, intersections[0].y - dy * 5);
      ctx.lineTo(intersections[0].x + dx * 5, intersections[0].y + dy * 5);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Draw points on conic
    points.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#6366f1';
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = '12px sans-serif';
      ctx.fillText((i + 1).toString(), p.x + 10, p.y - 10);
    });
  }, [rotation]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Pascal's Hexagon Theorem</h4>

      <p className="text-sm text-dark-300 mb-4">
        At age 16, Pascal discovered: if a hexagon is inscribed in a conic section,
        the three pairs of opposite sides meet at three points that lie on a straight
        line (the Pascal line).
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <canvas
            ref={canvasRef}
            width={320}
            height={280}
            className="bg-dark-900 rounded-lg"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="text-sm text-dark-400 block mb-1">Rotate hexagon: {rotation}°</label>
            <input
              type="range"
              min={0}
              max={60}
              value={rotation}
              onChange={(e) => setRotation(parseInt(e.target.value))}
              className="w-full accent-primary-500"
            />
          </div>

          <div className="bg-dark-800 p-4 rounded-lg">
            <h5 className="font-semibold text-primary-400 mb-2">The Theorem</h5>
            <ul className="text-sm text-dark-400 space-y-1">
              <li>• Blue points: hexagon vertices on conic</li>
              <li>• Green lines: hexagon sides</li>
              <li>• Orange lines: extended opposite sides</li>
              <li>• Red points: intersections</li>
              <li>• Red line: Pascal line (collinear!)</li>
            </ul>
          </div>

          <p className="text-sm text-dark-500">
            This theorem, published in <em>Essay pour les coniques</em>, astounded
            Descartes, who refused to believe a 16-year-old had proved it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Blaise Pascal was a prodigy, mystic, and genius who lived intensely and died young.
        In his brief 39 years, he revolutionized geometry, invented the calculator, founded
        probability theory, and wrote prose so beautiful it shaped the French language itself.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "The heart has its reasons which reason knows not."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Blaise Pascal, Pensées
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Prodigy</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Blaise Pascal (1623–1662) was born in Clermont-Ferrand, France. His mother
            died when he was three, and his father Étienne, a tax official and amateur
            mathematician, educated him at home. Concerned that mathematics would
            distract from Latin and Greek, Étienne forbade mathematical study.
          </p>
          <p className="mb-4">
            The ban backfired spectacularly. At age 12, curious about geometry, Pascal
            independently rediscovered many of Euclid's propositions, including that
            the angles of a triangle sum to 180°. Astonished, his father relented and
            gave him Euclid's <em>Elements</em>.
          </p>
          <p>
            By 16, Pascal had written a treatise on conic sections that amazed the
            leading mathematicians of Paris. Descartes, when shown the manuscript,
            refused to believe it was written by a teenager.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> June 19, 1623, France</li>
            <li><strong>Died:</strong> August 19, 1662 (age 39)</li>
            <li><strong>Education:</strong> Home-schooled by father</li>
            <li><strong>Religion:</strong> Jansenist Catholic</li>
            <li><strong>Legacy:</strong> Triangle, calculator, probability, theology</li>
          </ul>
        </Card>
      </div>

      <Callout type="info">
        <p>
          <strong>The Night of Fire:</strong> On November 23, 1654, Pascal had an
          intense religious experience that changed his life. He sewed a record of
          it (the "Memorial") into his coat and wore it until his death. After this,
          he largely abandoned mathematics for theology, producing the <em>Pensées</em>,
          his unfinished defense of Christianity.
        </p>
      </Callout>

      {/* Pascal's Triangle */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Pascal's Triangle</h2>

      <p className="mb-4">
        Though known to Chinese and Persian mathematicians centuries earlier, the
        triangular array of binomial coefficients bears Pascal's name because of his
        systematic study in <em>Traité du triangle arithmétique</em> (1654).
      </p>

      <PascalsTriangle />

      {/* Binomial Theorem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Binomial Theorem</h2>

      <p className="mb-4">
        Pascal's Triangle directly gives the coefficients in the expansion of (a + b)^n.
        Each row corresponds to a power, each entry to a term in the expansion.
      </p>

      <BinomialExpansion />

      {/* Probability */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Birth of Probability</h2>

      <p className="mb-4">
        In 1654, Pascal corresponded with Fermat about gambling problems posed by
        the Chevalier de Méré. Their exchange created probability theory. Pascal
        realized that his triangle counts combinations—the key to calculating odds.
      </p>

      <CoinFlipProbability />

      <Callout type="success">
        <p>
          <strong>Pascal's Contribution:</strong> While Fermat preferred algebraic
          approaches, Pascal developed the "arithmetic triangle" method—visual,
          intuitive, and powerful. Together, they showed that chance could be
          mathematically understood and calculated.
        </p>
      </Callout>

      {/* The Pascaline */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Pascaline</h2>

      <p className="mb-4">
        At 19, to help his father with tedious tax calculations, Pascal invented
        one of the first mechanical calculators. His design used interlocking gears
        with an ingenious mechanism for automatic carries.
      </p>

      <PascalineDemo />

      {/* Projective Geometry */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Projective Geometry</h2>

      <p className="mb-4">
        Pascal's first major theorem, discovered at 16, concerns hexagons inscribed
        in conic sections. It established him as a serious mathematician and contributed
        to the development of projective geometry.
      </p>

      <HexagonTheorem />

      {/* Other Contributions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Other Mathematical Work</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">The Cycloid</h4>
          <p className="text-sm text-dark-300">
            In 1658, Pascal held a contest for problems about the cycloid (the curve
            traced by a point on a rolling wheel). He solved his own problems using
            methods anticipating integral calculus.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Fluid Mechanics</h4>
          <p className="text-sm text-dark-300">
            Pascal's Law: pressure in a confined fluid is transmitted equally in all
            directions. This principle underlies hydraulic systems, from car brakes
            to construction equipment.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Atmospheric Pressure</h4>
          <p className="text-sm text-dark-300">
            Pascal proved that atmospheric pressure decreases with altitude by having
            his brother-in-law carry a barometer up the Puy de Dôme mountain.
            The unit of pressure (Pa) is named for him.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Pascal's Wager</h4>
          <p className="text-sm text-dark-300">
            A famous argument for belief in God: if God exists and you believe, you
            gain eternal happiness. If not, you lose little. Therefore, it's rational
            to believe—an early application of decision theory.
          </p>
        </Card>
      </CardGrid>

      {/* The Pensées */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Turn to Religion</h2>

      <p className="mb-4">
        After his mystical experience in 1654, Pascal devoted himself primarily to
        religious writing. His <em>Pensées</em> (Thoughts), published posthumously,
        was intended as an apology for Christianity but remained unfinished at his death.
      </p>

      <div className="space-y-4 my-6">
        <blockquote className="border-l-4 border-amber-500 pl-4 py-2 bg-dark-800 rounded-r-lg">
          <p className="text-dark-300 italic">
            "Man is but a reed, the most feeble thing in nature; but he is a thinking
            reed."
          </p>
        </blockquote>

        <blockquote className="border-l-4 border-amber-500 pl-4 py-2 bg-dark-800 rounded-r-lg">
          <p className="text-dark-300 italic">
            "The eternal silence of these infinite spaces frightens me."
          </p>
        </blockquote>

        <blockquote className="border-l-4 border-amber-500 pl-4 py-2 bg-dark-800 rounded-r-lg">
          <p className="text-dark-300 italic">
            "I have discovered that all the unhappiness of men arises from one single
            fact, that they cannot stay quietly in their own chamber."
          </p>
        </blockquote>
      </div>

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell presents Pascal as a tragic figure—a brilliant mind torn between
        mathematics and religion, ultimately choosing faith over reason. Bell clearly
        regrets Pascal's turn away from mathematics:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Pascal might have become the greatest mathematician of the seventeenth century
        had not religion, ill health, and an early death taken him from mathematics
        when he was in his most productive years."
      </blockquote>

      <p className="my-4">
        Bell emphasizes Pascal's contributions to probability and the calculus of
        infinitesimals, noting that his work on the cycloid came tantalizingly close
        to integral calculus. Had Pascal continued, he might have anticipated Newton
        and Leibniz.
      </p>

      <Callout type="warning">
        <p>
          <strong>A Life of Suffering:</strong> Pascal suffered from poor health
          throughout his life—chronic pain, insomnia, and digestive problems. He
          died at 39, possibly from a brain tumor. Some historians suggest his turn
          to religion was partly driven by physical suffering and the prospect of
          early death.
        </p>
      </Callout>

      {/* Legacy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Pascal's Legacy</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-emerald-400 mb-2">In Mathematics</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Pascal's Triangle and binomial coefficients</li>
            <li>• Foundations of probability theory</li>
            <li>• Projective geometry (Pascal's theorem)</li>
            <li>• Methods anticipating calculus</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-emerald-400 mb-2">In Science & Technology</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• The Pascaline calculator</li>
            <li>• Pascal's Law (hydraulics)</li>
            <li>• Atmospheric pressure experiments</li>
            <li>• The Pascal (Pa) unit of pressure</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-emerald-400 mb-2">In Philosophy</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Pascal's Wager (decision theory)</li>
            <li>• Existentialist themes in <em>Pensées</em></li>
            <li>• Influence on Kierkegaard, Nietzsche</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-emerald-400 mb-2">In Computing</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Pascal programming language (1970)</li>
            <li>• Pioneer of mechanical computation</li>
            <li>• Inspiration for later calculators</li>
          </ul>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Blaise Pascal (1623–1662) was a child prodigy who rediscovered Euclidean
              geometry at 12 and proved a major theorem about conics at 16.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Pascal's Triangle organizes binomial coefficients and reveals many patterns:
              row sums are powers of 2, diagonal sums are Fibonacci numbers, and entries
              count combinations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              With Fermat, Pascal founded probability theory through their correspondence
              on the "problem of points" in gambling.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              The Pascaline (1642) was one of the first mechanical calculators,
              featuring an automatic carry mechanism.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              After a religious experience in 1654, Pascal largely abandoned mathematics
              for theology, producing the philosophical <em>Pensées</em> before his
              early death at 39.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
