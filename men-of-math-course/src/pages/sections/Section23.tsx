import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, Math } from '@/components/common';

// Interactive Matrix Demo
function MatrixDemo() {
  const [matrix, setMatrix] = useState([
    [1, 2],
    [3, 4]
  ]);
  const [showTerms, setShowTerms] = useState(true);

  const det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  const trace = matrix[0][0] + matrix[1][1];

  const updateCell = (i: number, j: number, value: string) => {
    const newMatrix = matrix.map(row => [...row]);
    newMatrix[i][j] = parseInt(value) || 0;
    setMatrix(newMatrix);
  };

  const sylvesterTerms = [
    { term: 'Matrix', coined: '1850', meaning: 'From Latin "mater" (womb) - a rectangular array of numbers' },
    { term: 'Determinant', coined: 'Named by Sylvester', meaning: 'The scalar value computed from a square matrix' },
    { term: 'Discriminant', coined: '1851', meaning: 'Expression determining the nature of roots' },
    { term: 'Invariant', coined: '1851', meaning: 'Quantity unchanged under transformations' },
    { term: 'Covariant', coined: '1853', meaning: 'Expression transforming in a specific way' },
    { term: 'Jacobian', coined: '1852', meaning: 'Matrix of partial derivatives (named for Jacobi)' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Sylvester's "Matrix"</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Matrix brackets */}
            <div className="absolute -left-4 top-0 bottom-0 w-2 border-l-2 border-t-2 border-b-2 border-accent-500 rounded-l"></div>
            <div className="absolute -right-4 top-0 bottom-0 w-2 border-r-2 border-t-2 border-b-2 border-accent-500 rounded-r"></div>

            <div className="grid grid-cols-2 gap-2 p-4">
              {matrix.map((row, i) =>
                row.map((val, j) => (
                  <input
                    key={`${i}-${j}`}
                    type="number"
                    value={val}
                    onChange={e => updateCell(i, j, e.target.value)}
                    className="w-16 h-16 text-center text-2xl font-mono bg-dark-800 border border-dark-600 rounded text-dark-100 focus:border-accent-500 focus:outline-none"
                  />
                ))
              )}
            </div>
          </div>

          <div className="mt-4 space-y-2 text-center">
            <p className="text-dark-300">
              <span className="text-dark-500">Determinant:</span>{' '}
              <span className="text-accent-400 font-mono text-xl">{det}</span>
            </p>
            <p className="text-dark-300">
              <span className="text-dark-500">Trace:</span>{' '}
              <span className="text-green-400 font-mono text-xl">{trace}</span>
            </p>
          </div>
        </div>

        <div className="flex-1">
          <button
            onClick={() => setShowTerms(!showTerms)}
            className="mb-4 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded"
          >
            {showTerms ? 'Hide' : 'Show'} Sylvester's Terminology
          </button>

          {showTerms && (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {sylvesterTerms.map((item, i) => (
                <div key={i} className="p-2 bg-dark-800 rounded">
                  <div className="flex justify-between">
                    <span className="font-semibold text-accent-400">{item.term}</span>
                    <span className="text-xs text-dark-500">{item.coined}</span>
                  </div>
                  <p className="text-xs text-dark-400 mt-1">{item.meaning}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Invariant Theory Demo
function InvariantDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(1);
  const [rotation, setRotation] = useState(0);

  // Discriminant of ax² + bx + c
  const discriminant = b * b - 4 * a * c;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const scale = 20;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(width, cy);
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, height);
    ctx.stroke();

    // Apply rotation transformation to coefficients
    const theta = (rotation * Math.PI) / 180;
    const cos2 = Math.cos(theta) ** 2;
    const sin2 = Math.sin(theta) ** 2;
    const sincos = Math.sin(theta) * Math.cos(theta);

    // Transformed coefficients (simplified rotation)
    const aRot = a * cos2 + c * sin2 - b * sincos;
    const cRot = a * sin2 + c * cos2 + b * sincos;
    const bRot = 2 * (a - c) * sincos + b * (cos2 - sin2);

    // Draw original parabola
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = 0; px < width; px++) {
      const x = (px - cx) / scale;
      const y = a * x * x + b * x + c;
      const py = cy - y * scale;
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Draw rotated parabola
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = 0; px < width; px++) {
      const x = (px - cx) / scale;
      const y = aRot * x * x + bRot * x + cRot;
      const py = cy - y * scale;
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Draw roots if discriminant >= 0
    if (discriminant >= 0) {
      const sqrtDisc = Math.sqrt(discriminant);
      const x1 = (-b - sqrtDisc) / (2 * a);
      const x2 = (-b + sqrtDisc) / (2 * a);

      ctx.fillStyle = '#ef4444';
      [x1, x2].forEach(x => {
        ctx.beginPath();
        ctx.arc(cx + x * scale, cy, 5, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  }, [a, b, c, rotation]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Invariant Theory: The Discriminant</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={300}
          height={250}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-dark-400 mb-1">a</label>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={a}
                onChange={e => setA(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-accent-400 font-mono">{a}</span>
            </div>
            <div>
              <label className="block text-sm text-dark-400 mb-1">b</label>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={b}
                onChange={e => setB(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-accent-400 font-mono">{b}</span>
            </div>
            <div>
              <label className="block text-sm text-dark-400 mb-1">c</label>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={c}
                onChange={e => setC(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-accent-400 font-mono">{c}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm text-dark-400 mb-1">Rotation: {rotation}°</label>
            <input
              type="range"
              min="0"
              max="360"
              value={rotation}
              onChange={e => setRotation(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className={`p-3 rounded-lg ${discriminant >= 0 ? 'bg-green-900/30 border border-green-600' : 'bg-red-900/30 border border-red-600'}`}>
            <p className="text-sm text-dark-300">
              Discriminant: <Math tex={`b^2 - 4ac = ${discriminant.toFixed(2)}`} />
            </p>
            <p className="text-xs text-dark-400 mt-1">
              {discriminant > 0 ? '2 real roots (red dots)' :
               discriminant === 0 ? '1 repeated root' : 'No real roots'}
            </p>
          </div>

          <p className="text-xs text-dark-500">
            The discriminant is an <em>invariant</em>: its sign doesn't change under rotation.
            Purple = original, Cyan = rotated.
          </p>
        </div>
      </div>
    </div>
  );
}

// Partition Function Visualization
function PartitionDemo() {
  const [n, setN] = useState(5);

  // Generate partitions of n
  const generatePartitions = (num: number): number[][] => {
    const result: number[][] = [];

    const partition = (remaining: number, max: number, current: number[]) => {
      if (remaining === 0) {
        result.push([...current]);
        return;
      }
      for (let i = Math.min(remaining, max); i >= 1; i--) {
        current.push(i);
        partition(remaining - i, i, current);
        current.pop();
      }
    };

    partition(num, num, []);
    return result;
  };

  const partitions = generatePartitions(n);

  // Partition numbers (p(n) for small n)
  const partitionNumbers = [1, 1, 2, 3, 5, 7, 11, 15, 22, 30, 42, 56, 77];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Integer Partitions</h4>

      <div className="flex items-center gap-4 mb-6">
        <label className="text-dark-300">Partition of n =</label>
        <div className="flex gap-2">
          {[3, 4, 5, 6, 7, 8].map(num => (
            <button
              key={num}
              onClick={() => setN(num)}
              className={`w-10 h-10 rounded ${
                n === num ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {partitions.map((p, idx) => (
          <div key={idx} className="p-3 bg-dark-800 rounded">
            <div className="flex gap-1 mb-2 flex-wrap">
              {p.map((val, i) => (
                <div
                  key={i}
                  className="flex"
                >
                  {Array(val).fill(0).map((_, j) => (
                    <div
                      key={j}
                      className="w-4 h-4 bg-accent-500 border border-accent-600"
                    />
                  ))}
                </div>
              ))}
            </div>
            <p className="text-xs text-dark-400 font-mono">{p.join(' + ')}</p>
          </div>
        ))}
      </div>

      <div className="p-4 bg-dark-800 rounded-lg">
        <p className="text-dark-300 mb-2">
          <strong>p({n}) = {partitions.length}</strong> partitions
        </p>
        <p className="text-sm text-dark-400">
          Sylvester made deep contributions to partition theory, connecting it to invariant theory
          and developing graphical methods (Ferrers diagrams) for studying partitions.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-dark-400">
        <span>p(1)=1</span>
        <span>p(2)=2</span>
        <span>p(3)=3</span>
        <span>p(4)=5</span>
        <span>p(5)=7</span>
        <span>p(6)=11</span>
        <span>p(7)=15</span>
        <span>p(8)=22</span>
        <span>...</span>
      </div>
    </div>
  );
}

// Sylvester-Gallai Theorem Visualization
function SylvesterGallaiDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<[number, number][]>([
    [100, 150], [200, 80], [300, 150], [200, 220], [150, 120]
  ]);
  const [ordinaryLine, setOrdinaryLine] = useState<[[number, number], [number, number]] | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Find an ordinary line (passes through exactly 2 points)
    let found: [[number, number], [number, number]] | null = null;

    for (let i = 0; i < points.length && !found; i++) {
      for (let j = i + 1; j < points.length && !found; j++) {
        // Count how many points are collinear with points[i] and points[j]
        const [x1, y1] = points[i];
        const [x2, y2] = points[j];

        let collinearCount = 2;
        for (let k = 0; k < points.length; k++) {
          if (k === i || k === j) continue;
          const [x3, y3] = points[k];
          // Check collinearity using cross product
          const cross = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
          if (Math.abs(cross) < 1) {
            collinearCount++;
          }
        }

        if (collinearCount === 2) {
          found = [points[i], points[j]];
        }
      }
    }

    setOrdinaryLine(found);

    // Draw all lines through pairs of points (faint)
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[j];
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.sqrt(dx * dx + dy * dy);

        ctx.beginPath();
        ctx.moveTo(x1 - dx / len * 500, y1 - dy / len * 500);
        ctx.lineTo(x2 + dx / len * 500, y2 + dy / len * 500);
        ctx.stroke();
      }
    }

    // Highlight ordinary line
    if (found) {
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 3;
      const [x1, y1] = found[0];
      const [x2, y2] = found[1];
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.sqrt(dx * dx + dy * dy);

      ctx.beginPath();
      ctx.moveTo(x1 - dx / len * 500, y1 - dy / len * 500);
      ctx.lineTo(x2 + dx / len * 500, y2 + dy / len * 500);
      ctx.stroke();
    }

    // Draw points
    points.forEach(([x, y], i) => {
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${i + 1}`, x, y);
    });
  }, [points]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if clicking near existing point to remove it
    const clickedIndex = points.findIndex(([px, py]) =>
      Math.sqrt((px - x) ** 2 + (py - y) ** 2) < 15
    );

    if (clickedIndex >= 0 && points.length > 3) {
      setPoints(points.filter((_, i) => i !== clickedIndex));
    } else if (clickedIndex < 0 && points.length < 10) {
      setPoints([...points, [x, y]]);
    }
  };

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Sylvester-Gallai Theorem</h4>

      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="bg-dark-950 rounded-lg cursor-crosshair w-full"
        onClick={handleCanvasClick}
      />

      <p className="text-sm text-dark-400 mt-3">
        Click to add points (max 10). Click on a point to remove it.
      </p>

      <div className={`mt-4 p-3 rounded-lg ${ordinaryLine ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
        {ordinaryLine ? (
          <p className="text-green-400">
            ✓ Ordinary line found (green) — passes through exactly 2 points
          </p>
        ) : (
          <p className="text-amber-400">
            All points are collinear — no ordinary line exists
          </p>
        )}
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm text-dark-300">
        <p><strong>Theorem:</strong> Given a finite set of points in the plane, not all on a line,
        there exists an <em>ordinary line</em> — a line passing through exactly two points.</p>
        <p className="text-dark-500 mt-2">
          Sylvester posed this problem in 1893. It was finally proved by Gallai in 1944.
        </p>
      </div>
    </div>
  );
}

// Sylvester's Mathematical Vocabulary
function VocabularyDemo() {
  const [category, setCategory] = useState<'algebra' | 'geometry' | 'analysis'>('algebra');

  const vocabulary = {
    algebra: [
      { term: 'Matrix', year: 1850, context: 'From Latin mater (mother/womb) — a rectangular array' },
      { term: 'Determinant', year: 1853, context: 'The value that determines properties of a matrix' },
      { term: 'Discriminant', year: 1851, context: 'Determines the nature of polynomial roots' },
      { term: 'Invariant', year: 1851, context: 'Quantity unchanged under transformations' },
      { term: 'Covariant', year: 1853, context: 'Transforms in a predictable way' },
      { term: 'Contravariant', year: 1853, context: 'Transforms inversely' },
      { term: 'Nullity', year: 1884, context: 'Dimension of the null space' },
    ],
    geometry: [
      { term: 'Graph (in graph theory)', year: 1878, context: 'Network of vertices and edges' },
      { term: 'Totient', year: 1879, context: 'For Euler totient function' },
      { term: 'Atomic', year: 1876, context: 'For irreducible elements' },
    ],
    analysis: [
      { term: 'Jacobian', year: 1852, context: 'Matrix of partial derivatives' },
      { term: 'Hessian', year: 1851, context: 'Matrix of second derivatives' },
      { term: 'Bezoutiant', year: 1853, context: 'Related to resultants' },
    ]
  };

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Sylvester's Mathematical Vocabulary</h4>

      <div className="flex gap-2 mb-4">
        {(['algebra', 'geometry', 'analysis'] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded capitalize ${
              category === cat
                ? 'bg-accent-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {vocabulary[category].map((item, i) => (
          <div key={i} className="p-3 bg-dark-800 rounded flex justify-between items-start">
            <div>
              <span className="font-semibold text-accent-400">{item.term}</span>
              <p className="text-sm text-dark-400 mt-1">{item.context}</p>
            </div>
            <span className="text-xs text-dark-500 whitespace-nowrap ml-4">{item.year}</span>
          </div>
        ))}
      </div>

      <Callout type="note" className="mt-4">
        Sylvester coined more mathematical terms than perhaps any other mathematician. His love
        of language (he also wrote poetry) led him to create vivid, evocative terminology that
        we still use today.
      </Callout>
    </div>
  );
}

// Law of Inertia Visualization
function LawOfInertiaDemo() {
  const [matrix, setMatrix] = useState([[2, 1], [1, 2]]);

  // Calculate eigenvalues (for 2x2 symmetric matrix)
  const a = matrix[0][0];
  const b = matrix[0][1];
  const d = matrix[1][1];

  const trace = a + d;
  const det = a * d - b * b;
  const discriminant = trace * trace - 4 * det;

  let lambda1 = 0, lambda2 = 0;
  if (discriminant >= 0) {
    const sqrtDisc = Math.sqrt(discriminant);
    lambda1 = (trace + sqrtDisc) / 2;
    lambda2 = (trace - sqrtDisc) / 2;
  }

  const positive = (lambda1 > 0.001 ? 1 : 0) + (lambda2 > 0.001 ? 1 : 0);
  const negative = (lambda1 < -0.001 ? 1 : 0) + (lambda2 < -0.001 ? 1 : 0);
  const zero = 2 - positive - negative;

  const signature = `(${positive}, ${negative}, ${zero})`;
  const classification = positive === 2 ? 'Positive Definite' :
                        negative === 2 ? 'Negative Definite' :
                        positive === 1 && negative === 1 ? 'Indefinite' :
                        'Semidefinite';

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Sylvester's Law of Inertia</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <p className="text-sm text-dark-400 mb-2">Symmetric Matrix:</p>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              value={matrix[0][0]}
              onChange={e => setMatrix([[Number(e.target.value), matrix[0][1]], [matrix[0][1], matrix[1][1]]])}
              className="w-16 h-16 text-center text-xl font-mono bg-dark-800 border border-dark-600 rounded text-dark-100"
            />
            <input
              type="number"
              value={matrix[0][1]}
              onChange={e => setMatrix([[matrix[0][0], Number(e.target.value)], [Number(e.target.value), matrix[1][1]]])}
              className="w-16 h-16 text-center text-xl font-mono bg-dark-800 border border-dark-600 rounded text-dark-100"
            />
            <input
              type="number"
              value={matrix[1][0]}
              disabled
              className="w-16 h-16 text-center text-xl font-mono bg-dark-700 border border-dark-600 rounded text-dark-400"
            />
            <input
              type="number"
              value={matrix[1][1]}
              onChange={e => setMatrix([[matrix[0][0], matrix[0][1]], [matrix[0][1], Number(e.target.value)]])}
              className="w-16 h-16 text-center text-xl font-mono bg-dark-800 border border-dark-600 rounded text-dark-100"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-dark-800 rounded">
              <p className="text-sm text-dark-500">Eigenvalues</p>
              <p className="font-mono text-accent-400">
                λ₁ = {lambda1.toFixed(2)}<br />
                λ₂ = {lambda2.toFixed(2)}
              </p>
            </div>
            <div className="p-3 bg-dark-800 rounded">
              <p className="text-sm text-dark-500">Signature (p, n, z)</p>
              <p className="font-mono text-xl text-accent-400">{signature}</p>
            </div>
          </div>

          <div className={`p-3 rounded-lg ${
            classification === 'Positive Definite' ? 'bg-green-900/30 border border-green-600' :
            classification === 'Negative Definite' ? 'bg-red-900/30 border border-red-600' :
            'bg-amber-900/30 border border-amber-600'
          }`}>
            <p className="font-semibold">{classification}</p>
            <p className="text-sm text-dark-400 mt-1">
              {classification === 'Positive Definite' ? 'All eigenvalues positive' :
               classification === 'Negative Definite' ? 'All eigenvalues negative' :
               'Mixed signs — saddle point behavior'}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm text-dark-300">
        <p><strong>Sylvester's Law of Inertia (1852):</strong> The signature (p, n, z) — counts
        of positive, negative, and zero eigenvalues — is invariant under congruence transformations.</p>
      </div>
    </div>
  );
}

// Career Timeline
function CareerTimeline() {
  const events = [
    { year: '1814', event: 'Born in London to a Jewish family' },
    { year: '1831', event: 'Enters Cambridge; excels but cannot receive degree (religious restrictions)' },
    { year: '1838', event: 'Becomes professor at University College London' },
    { year: '1841', event: 'Brief, unhappy tenure at University of Virginia (resigns after incident with student)' },
    { year: '1845', event: 'Works as actuary in London; begins collaboration with Cayley' },
    { year: '1850', event: 'Coins the term "matrix"' },
    { year: '1855', event: 'Finally receives Cambridge degrees after religious tests abolished' },
    { year: '1876', event: 'At age 62, becomes first professor of mathematics at Johns Hopkins' },
    { year: '1878', event: 'Founds American Journal of Mathematics' },
    { year: '1883', event: 'Returns to Oxford as Savilian Professor' },
    { year: '1897', event: 'Dies in London, having transformed mathematics on two continents' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">A Transatlantic Career</h4>

      <div className="relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-accent-600"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative pl-24 pb-4">
            <div className="absolute left-0 w-12 text-right text-sm font-mono text-dark-400">
              {event.year}
            </div>
            <div className="absolute left-14 w-5 h-5 rounded-full bg-accent-600 border-4 border-dark-900"></div>
            <p className="text-dark-200">{event.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Section23() {
  return (
    <LessonLayout
      title="James Joseph Sylvester"
      sectionNumber={23}
      prevSection={22}
      nextSection={24}
    >
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-accent-900/50 text-accent-300 rounded-full text-sm mb-4">
          Chapter 23: The Poet of Mathematics
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4">
          James Joseph Sylvester
        </h1>
        <p className="text-xl text-dark-300">
          Inventor of mathematical language and founder of American research mathematics
        </p>
        <p className="text-dark-400 mt-2">1814 – 1897</p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <Card variant="primary">
          <p className="text-lg text-dark-200 leading-relaxed">
            James Joseph Sylvester was a force of nature — passionate, prolific, and poetic. He
            coined more mathematical terms than perhaps any other mathematician: matrix, discriminant,
            invariant, covariant, and dozens more. With his friend Arthur Cayley, he developed
            invariant theory into a major branch of algebra. And at age 62, he crossed the Atlantic
            to found the first genuine research mathematics program in America.
          </p>
        </Card>
      </section>

      {/* Career Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">A Life Against the Odds</h2>

        <CareerTimeline />

        <Callout type="note" className="mt-6">
          As a Jew in 19th-century England, Sylvester faced persistent discrimination. He completed
          his Cambridge examinations brilliantly but was denied his degree because he could not
          sign the Thirty-Nine Articles of the Church of England. He would wait 24 years for that
          degree.
        </Callout>
      </section>

      {/* The Matrix */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Birth of the Matrix</h2>

        <p className="text-dark-300 mb-6">
          In 1850, Sylvester introduced the word "matrix" (from Latin <em>mater</em>, meaning
          mother or womb) for rectangular arrays of numbers. He saw the matrix as the "mother"
          from which determinants are born. This terminology, along with Cayley's development
          of matrix algebra, became foundational to modern mathematics.
        </p>

        <MatrixDemo />

        <div className="mt-6">
          <MathBlock
            tex="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}, \quad \det(A) = ad - bc"
            description="A 2×2 matrix and its determinant"
          />
        </div>
      </section>

      {/* Invariant Theory */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Invariant Theory</h2>

        <p className="text-dark-300 mb-6">
          What properties of a mathematical object remain unchanged when we transform it? This
          question drove Sylvester and Cayley to develop invariant theory. The discriminant of
          a quadratic is a simple example: its <em>sign</em> tells us about the roots regardless
          of how we rotate or translate the parabola.
        </p>

        <InvariantDemo />

        <CardGrid columns={2} className="mt-6">
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Invariants</h4>
            <p className="text-sm text-dark-400">
              Quantities that stay exactly the same under a group of transformations
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Covariants</h4>
            <p className="text-sm text-dark-400">
              Quantities that transform in a predictable, controlled way
            </p>
          </Card>
        </CardGrid>

        <Callout type="theorem" title="Fundamental Problem of Invariant Theory" className="mt-6">
          Given a group acting on a polynomial ring, find a finite set of generators for all
          invariants. Hilbert's proof that such generators always exist (1890) used revolutionary
          non-constructive methods that initially shocked Sylvester's generation.
        </Callout>
      </section>

      {/* Law of Inertia */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Sylvester's Law of Inertia</h2>

        <p className="text-dark-300 mb-6">
          One of Sylvester's most important theorems concerns quadratic forms. The "inertia"
          of a symmetric matrix — the counts of positive, negative, and zero eigenvalues — is
          invariant under change of basis.
        </p>

        <LawOfInertiaDemo />

        <div className="mt-6">
          <MathBlock
            tex="Q(x) = x^T A x \quad \text{has signature } (p, n, z)"
            description="A quadratic form and its invariant signature"
          />
        </div>
      </section>

      {/* Partition Theory */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Partition Theory</h2>

        <p className="text-dark-300 mb-6">
          Sylvester made important contributions to the theory of partitions — ways of writing
          integers as sums of positive integers. He connected partitions to invariant theory
          and developed graphical methods (Ferrers diagrams) for their study.
        </p>

        <PartitionDemo />
      </section>

      {/* Mathematical Vocabulary */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Poet's Vocabulary</h2>

        <p className="text-dark-300 mb-6">
          Sylvester was also a literal poet, publishing "The Laws of Verse" in 1870. His love
          of language permeated his mathematics — he created vivid, evocative terms that have
          become standard. Here is a sampling of his linguistic contributions:
        </p>

        <VocabularyDemo />
      </section>

      {/* Sylvester-Gallai */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Sylvester-Gallai Theorem</h2>

        <p className="text-dark-300 mb-6">
          In 1893, near the end of his life, Sylvester posed a beautiful problem in combinatorial
          geometry that would take 50 years to solve:
        </p>

        <SylvesterGallaiDemo />
      </section>

      {/* Johns Hopkins */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Founding American Mathematics</h2>

        <p className="text-dark-300 mb-6">
          In 1876, at age 62, Sylvester accepted a position at the newly founded Johns Hopkins
          University. It was a bold venture: creating America's first research university on
          the German model.
        </p>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">American Journal of Mathematics</h4>
            <p className="text-sm text-dark-400">
              Founded by Sylvester in 1878, it was the first research mathematics journal in
              America and remains prestigious today.
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Research Culture</h4>
            <p className="text-sm text-dark-400">
              Sylvester trained the first generation of American research mathematicians,
              transforming the country from a mathematical backwater to a future powerhouse.
            </p>
          </Card>
        </CardGrid>

        <Callout type="note" className="mt-6">
          Sylvester's seven years at Johns Hopkins were among the most productive of his life.
          He published over 30 papers and built a vibrant mathematical community. When he left
          for Oxford in 1883, he had planted seeds that would flower into American mathematical
          leadership.
        </Callout>
      </section>

      {/* Cayley Collaboration */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Cayley-Sylvester Partnership</h2>

        <p className="text-dark-300 mb-6">
          Sylvester's most important collaboration was with Arthur Cayley, whom he met in the
          1840s when both were working as lawyers in London. Their partnership in developing
          invariant theory was one of the great mathematical collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="dark">
            <h4 className="font-semibold text-dark-100 mb-3">Sylvester</h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li>• Passionate, impulsive, poetic</li>
              <li>• Generated ideas in bursts of enthusiasm</li>
              <li>• Created terminology and concepts</li>
              <li>• Struggled with systematic exposition</li>
            </ul>
          </Card>
          <Card variant="dark">
            <h4 className="font-semibold text-dark-100 mb-3">Cayley</h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li>• Calm, methodical, precise</li>
              <li>• Steady, prolific output</li>
              <li>• Developed rigorous theory</li>
              <li>• Master of systematic calculation</li>
            </ul>
          </Card>
        </div>

        <blockquote className="mt-6 text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4">
          "Cayley, who habitually disclaimed any part in my discoveries, and I, who as
          habitually disclaimed any part in his, nevertheless were so much in the habit
          of talking over our ideas together that neither of us could always say where
          his work ended and the other's began."
          <footer className="text-sm text-dark-500 mt-2">— J. J. Sylvester</footer>
        </blockquote>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <Card variant="secondary">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Bell's Assessment</h3>

          <blockquote className="text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4 mb-4">
            "Sylvester's emotional temperament made him an inspiring teacher but an unreliable
            expositor... His papers are a jungle of brilliant ideas, often left undeveloped,
            buried in pages of rhapsodic prose."
          </blockquote>

          <p className="text-dark-400">
            Bell captures Sylvester's paradox: a mathematician of enormous creativity whose
            passion sometimes overwhelmed rigor. Yet this same passion inspired students,
            generated new fields, and enriched the language of mathematics permanently.
          </p>
        </Card>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Major Contributions</h2>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Matrix Theory</h4>
            <p className="text-sm text-dark-400">
              Named and developed the concept of the matrix, now fundamental to all of
              mathematics, physics, and computation.
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Invariant Theory</h4>
            <p className="text-sm text-dark-400">
              With Cayley, created the systematic study of invariants, which evolved into
              modern representation theory and algebraic geometry.
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Law of Inertia</h4>
            <p className="text-sm text-dark-400">
              Proved that the signature of a quadratic form is invariant — essential for
              classification in linear algebra and differential geometry.
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Partition Theory</h4>
            <p className="text-sm text-dark-400">
              Developed graphical and algebraic methods for studying integer partitions,
              anticipating later work by Ramanujan and Hardy.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <Card variant="dark">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-dark-300">
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                The term "matrix" was coined by Sylvester in 1850, from Latin for "womb" —
                the mother from which determinants are born
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Invariant theory studies quantities unchanged by transformations — the
                discriminant <Math tex="b^2 - 4ac" /> is a classical invariant
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Sylvester's Law of Inertia: the signature (p, n, z) of a quadratic form is
                invariant under change of basis
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                At Johns Hopkins (1876-1883), Sylvester founded American research mathematics
                and the American Journal of Mathematics
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                His partnership with Cayley was one of the most productive collaborations
                in mathematical history
              </span>
            </li>
          </ul>
        </Card>
      </section>
    </LessonLayout>
  );
}
