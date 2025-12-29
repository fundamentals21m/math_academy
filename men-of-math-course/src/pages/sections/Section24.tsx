import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, Math } from '@/components/common';

// Cayley-Hamilton Theorem Demo
function CayleyHamiltonDemo() {
  const [matrix, setMatrix] = useState([[2, 1], [1, 2]]);

  const a = matrix[0][0];
  const b = matrix[0][1];
  const c = matrix[1][0];
  const d = matrix[1][1];

  // Characteristic polynomial: det(A - λI) = λ² - (a+d)λ + (ad-bc)
  const trace = a + d;
  const det = a * d - b * c;

  // A²
  const A2 = [
    [a * a + b * c, a * b + b * d],
    [c * a + d * c, c * b + d * d]
  ];

  // A² - trace*A + det*I should equal zero
  const result = [
    [A2[0][0] - trace * a + det, A2[0][1] - trace * b],
    [A2[1][0] - trace * c, A2[1][1] - trace * d + det]
  ];

  const isZero = Math.abs(result[0][0]) < 0.001 && Math.abs(result[0][1]) < 0.001 &&
                 Math.abs(result[1][0]) < 0.001 && Math.abs(result[1][1]) < 0.001;

  const updateCell = (i: number, j: number, value: string) => {
    const newMatrix = matrix.map(row => [...row]);
    newMatrix[i][j] = parseInt(value) || 0;
    setMatrix(newMatrix);
  };

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Cayley-Hamilton Theorem</h4>

      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <p className="text-sm text-dark-400 mb-2">Matrix A:</p>
          <div className="grid grid-cols-2 gap-2">
            {matrix.map((row, i) =>
              row.map((val, j) => (
                <input
                  key={`${i}-${j}`}
                  type="number"
                  value={val}
                  onChange={e => updateCell(i, j, e.target.value)}
                  className="w-14 h-14 text-center text-xl font-mono bg-dark-800 border border-dark-600 rounded text-dark-100 focus:border-accent-500 focus:outline-none"
                />
              ))
            )}
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <div className="p-3 bg-dark-800 rounded">
            <p className="text-sm text-dark-400">Characteristic polynomial:</p>
            <p className="font-mono text-accent-400">
              p(λ) = λ² - {trace}λ + {det}
            </p>
          </div>

          <div className="p-3 bg-dark-800 rounded">
            <p className="text-sm text-dark-400">Computing p(A) = A² - {trace}A + {det}I:</p>
            <div className="mt-2 grid grid-cols-2 gap-1 w-fit">
              {result.map((row, i) =>
                row.map((val, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`w-12 h-12 flex items-center justify-center font-mono ${
                      Math.abs(val) < 0.001 ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {val.toFixed(0)}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className={`p-3 rounded ${isZero ? 'bg-green-900/30 border border-green-600' : 'bg-red-900/30 border border-red-600'}`}>
            <p className={isZero ? 'text-green-400' : 'text-red-400'}>
              {isZero ? '✓ p(A) = 0 — The theorem holds!' : '✗ Computing...'}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm text-dark-300">
        <p><strong>Cayley-Hamilton Theorem:</strong> Every square matrix satisfies its own
        characteristic equation. If p(λ) = det(A - λI), then p(A) = 0.</p>
      </div>
    </div>
  );
}

// Cayley's Theorem (Groups as Permutations)
function CayleysTheoremDemo() {
  const [group, setGroup] = useState<'Z3' | 'Z4' | 'K4'>('Z3');

  const groups = {
    Z3: {
      name: 'ℤ₃ (cyclic group of order 3)',
      elements: ['0', '1', '2'],
      operation: '+₃',
      table: [
        ['0', '1', '2'],
        ['1', '2', '0'],
        ['2', '0', '1']
      ],
      permutations: [
        { element: '0', perm: '(0)(1)(2)', description: 'Identity' },
        { element: '1', perm: '(0 1 2)', description: 'Cycle by 1' },
        { element: '2', perm: '(0 2 1)', description: 'Cycle by 2' }
      ]
    },
    Z4: {
      name: 'ℤ₄ (cyclic group of order 4)',
      elements: ['0', '1', '2', '3'],
      operation: '+₄',
      table: [
        ['0', '1', '2', '3'],
        ['1', '2', '3', '0'],
        ['2', '3', '0', '1'],
        ['3', '0', '1', '2']
      ],
      permutations: [
        { element: '0', perm: 'e', description: 'Identity' },
        { element: '1', perm: '(0 1 2 3)', description: '4-cycle' },
        { element: '2', perm: '(0 2)(1 3)', description: 'Two 2-cycles' },
        { element: '3', perm: '(0 3 2 1)', description: 'Reverse 4-cycle' }
      ]
    },
    K4: {
      name: 'K₄ (Klein four-group)',
      elements: ['e', 'a', 'b', 'c'],
      operation: '·',
      table: [
        ['e', 'a', 'b', 'c'],
        ['a', 'e', 'c', 'b'],
        ['b', 'c', 'e', 'a'],
        ['c', 'b', 'a', 'e']
      ],
      permutations: [
        { element: 'e', perm: '(e)(a)(b)(c)', description: 'Identity' },
        { element: 'a', perm: '(e a)(b c)', description: 'Swap e↔a, b↔c' },
        { element: 'b', perm: '(e b)(a c)', description: 'Swap e↔b, a↔c' },
        { element: 'c', perm: '(e c)(a b)', description: 'Swap e↔c, a↔b' }
      ]
    }
  };

  const current = groups[group];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Cayley's Theorem: Every Group is a Permutation Group</h4>

      <div className="flex gap-2 mb-4">
        {(Object.keys(groups) as Array<keyof typeof groups>).map(g => (
          <button
            key={g}
            onClick={() => setGroup(g)}
            className={`px-4 py-2 rounded ${
              group === g ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <p className="text-dark-400 mb-4">{current.name}</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-dark-400 mb-2">Cayley Table ({current.operation}):</p>
          <div className="inline-block">
            <div className="flex">
              <div className="w-10 h-10 flex items-center justify-center text-dark-500">{current.operation}</div>
              {current.elements.map(el => (
                <div key={el} className="w-10 h-10 flex items-center justify-center text-dark-300 font-mono">
                  {el}
                </div>
              ))}
            </div>
            {current.table.map((row, i) => (
              <div key={i} className="flex">
                <div className="w-10 h-10 flex items-center justify-center text-dark-300 font-mono">
                  {current.elements[i]}
                </div>
                {row.map((val, j) => (
                  <div
                    key={j}
                    className="w-10 h-10 flex items-center justify-center bg-dark-800 border border-dark-700 font-mono text-accent-400"
                  >
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-dark-400 mb-2">As Permutations:</p>
          <div className="space-y-2">
            {current.permutations.map((p, i) => (
              <div key={i} className="p-2 bg-dark-800 rounded flex justify-between items-center">
                <span className="font-mono text-accent-400">{p.element} → {p.perm}</span>
                <span className="text-xs text-dark-500">{p.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Callout type="theorem" title="Cayley's Theorem" className="mt-4">
        Every group G is isomorphic to a subgroup of the symmetric group on G. The map
        g → (left multiplication by g) gives an embedding G → Sym(G).
      </Callout>
    </div>
  );
}

// Cayley Graph Visualization
function CayleyGraphDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [group, setGroup] = useState<'Z6' | 'D3' | 'Z2xZ2'>('Z6');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = 100;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    if (group === 'Z6') {
      // Cyclic group Z6 with generator 1
      const n = 6;
      const vertices: [number, number][] = [];

      for (let i = 0; i < n; i++) {
        const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
        vertices.push([cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]);
      }

      // Draw edges (generator +1)
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        ctx.beginPath();
        ctx.moveTo(vertices[i][0], vertices[i][1]);
        ctx.lineTo(vertices[j][0], vertices[j][1]);
        ctx.stroke();

        // Arrow
        const midX = (vertices[i][0] + vertices[j][0]) / 2;
        const midY = (vertices[i][1] + vertices[j][1]) / 2;
        const angle = Math.atan2(vertices[j][1] - vertices[i][1], vertices[j][0] - vertices[i][0]);
        ctx.fillStyle = '#8b5cf6';
        ctx.beginPath();
        ctx.moveTo(midX + 8 * Math.cos(angle), midY + 8 * Math.sin(angle));
        ctx.lineTo(midX + 8 * Math.cos(angle + 2.5), midY + 8 * Math.sin(angle + 2.5));
        ctx.lineTo(midX + 8 * Math.cos(angle - 2.5), midY + 8 * Math.sin(angle - 2.5));
        ctx.fill();
      }

      // Draw vertices
      vertices.forEach(([x, y], i) => {
        ctx.fillStyle = '#1e1e2e';
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#22d3ee';
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(i.toString(), x, y);
      });

    } else if (group === 'D3') {
      // Dihedral group D3 (symmetries of triangle)
      const labels = ['e', 'r', 'r²', 's', 'sr', 'sr²'];
      const positions: [number, number][] = [
        [cx, cy - radius],           // e (top)
        [cx + radius * 0.866, cy - radius * 0.5],  // r
        [cx + radius * 0.866, cy + radius * 0.5],  // r²
        [cx, cy + radius],           // s (bottom)
        [cx - radius * 0.866, cy + radius * 0.5],  // sr
        [cx - radius * 0.866, cy - radius * 0.5]   // sr²
      ];

      // Rotation edges (r generator) - purple
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      [[0, 1], [1, 2], [2, 0], [3, 4], [4, 5], [5, 3]].forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(positions[i][0], positions[i][1]);
        ctx.lineTo(positions[j][0], positions[j][1]);
        ctx.stroke();
      });

      // Reflection edges (s generator) - cyan
      ctx.strokeStyle = '#22d3ee';
      [[0, 3], [1, 5], [2, 4]].forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(positions[i][0], positions[i][1]);
        ctx.lineTo(positions[j][0], positions[j][1]);
        ctx.stroke();
      });

      // Draw vertices
      positions.forEach(([x, y], i) => {
        ctx.fillStyle = '#1e1e2e';
        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = i < 3 ? '#8b5cf6' : '#22d3ee';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labels[i], x, y);
      });

    } else {
      // Z2 x Z2 (Klein four-group)
      const positions: [number, number][] = [
        [cx - 60, cy - 60],  // (0,0)
        [cx + 60, cy - 60],  // (1,0)
        [cx - 60, cy + 60],  // (0,1)
        [cx + 60, cy + 60]   // (1,1)
      ];
      const labels = ['(0,0)', '(1,0)', '(0,1)', '(1,1)'];

      // Horizontal edges (first generator)
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      [[0, 1], [2, 3]].forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(positions[i][0], positions[i][1]);
        ctx.lineTo(positions[j][0], positions[j][1]);
        ctx.stroke();
      });

      // Vertical edges (second generator)
      ctx.strokeStyle = '#22d3ee';
      [[0, 2], [1, 3]].forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(positions[i][0], positions[i][1]);
        ctx.lineTo(positions[j][0], positions[j][1]);
        ctx.stroke();
      });

      // Draw vertices
      positions.forEach(([x, y], i) => {
        ctx.fillStyle = '#1e1e2e';
        ctx.beginPath();
        ctx.arc(x, y, 25, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#f472b6';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labels[i], x, y);
      });
    }
  }, [group]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Cayley Graphs</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setGroup('Z6')}
              className={`px-4 py-2 rounded ${group === 'Z6' ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              ℤ₆
            </button>
            <button
              onClick={() => setGroup('D3')}
              className={`px-4 py-2 rounded ${group === 'D3' ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              D₃
            </button>
            <button
              onClick={() => setGroup('Z2xZ2')}
              className={`px-4 py-2 rounded ${group === 'Z2xZ2' ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              ℤ₂×ℤ₂
            </button>
          </div>

          <div className="space-y-2 text-sm text-dark-300">
            {group === 'Z6' && (
              <>
                <p><strong>ℤ₆</strong> — cyclic group of order 6</p>
                <p>Generator: +1 (purple edges)</p>
                <p>The graph forms a single cycle.</p>
              </>
            )}
            {group === 'D3' && (
              <>
                <p><strong>D₃</strong> — dihedral group (symmetries of triangle)</p>
                <p>Generators: r (rotation, purple), s (reflection, cyan)</p>
                <p>Two triangles connected by reflections.</p>
              </>
            )}
            {group === 'Z2xZ2' && (
              <>
                <p><strong>ℤ₂×ℤ₂</strong> — Klein four-group</p>
                <p>Generators: (1,0) purple, (0,1) cyan</p>
                <p>Forms a square — each element has order 2.</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm text-dark-400">
        A Cayley graph represents a group with vertices for elements and colored edges for
        generators. The graph structure reveals group properties.
      </div>
    </div>
  );
}

// Cayley's Tree Formula
function CayleyTreeDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [n, setN] = useState(4);

  // n^(n-2) labeled trees on n vertices
  const treeCounts = [1, 1, 1, 3, 16, 125, 1296];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw example trees for small n
    if (n === 3) {
      // 3 labeled trees on 3 vertices
      const trees = [
        [[0, 1], [1, 2]],  // 1-2-3
        [[0, 1], [0, 2]],  // 2-1-3
        [[0, 2], [1, 2]]   // 1-3-2
      ];

      trees.forEach((edges, treeIdx) => {
        const offsetX = 50 + treeIdx * 140;
        const offsetY = 80;
        const positions = [
          [offsetX, offsetY],
          [offsetX + 40, offsetY + 60],
          [offsetX + 80, offsetY]
        ];

        // Draw edges
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 2;
        edges.forEach(([i, j]) => {
          ctx.beginPath();
          ctx.moveTo(positions[i][0], positions[i][1]);
          ctx.lineTo(positions[j][0], positions[j][1]);
          ctx.stroke();
        });

        // Draw vertices
        positions.forEach(([x, y], i) => {
          ctx.fillStyle = '#22d3ee';
          ctx.beginPath();
          ctx.arc(x, y, 15, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#0a0a0f';
          ctx.font = 'bold 12px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText((i + 1).toString(), x, y);
        });
      });

    } else if (n === 4) {
      // Show 4 of the 16 trees
      const sampleTrees = [
        { edges: [[0, 1], [1, 2], [2, 3]], type: 'Path' },
        { edges: [[0, 1], [0, 2], [0, 3]], type: 'Star' },
        { edges: [[0, 1], [1, 2], [1, 3]], type: 'Y-shape' },
        { edges: [[0, 2], [1, 2], [2, 3]], type: 'Another' }
      ];

      sampleTrees.forEach((tree, treeIdx) => {
        const offsetX = 30 + (treeIdx % 2) * 200;
        const offsetY = 30 + Math.floor(treeIdx / 2) * 120;

        const positions = [
          [offsetX + 30, offsetY + 20],
          [offsetX + 90, offsetY + 20],
          [offsetX + 60, offsetY + 70],
          [offsetX + 120, offsetY + 70]
        ];

        // Draw edges
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 2;
        tree.edges.forEach(([i, j]) => {
          ctx.beginPath();
          ctx.moveTo(positions[i][0], positions[i][1]);
          ctx.lineTo(positions[j][0], positions[j][1]);
          ctx.stroke();
        });

        // Draw vertices
        positions.forEach(([x, y], i) => {
          ctx.fillStyle = '#22d3ee';
          ctx.beginPath();
          ctx.arc(x, y, 12, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#0a0a0f';
          ctx.font = 'bold 10px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText((i + 1).toString(), x, y);
        });

        // Label
        ctx.fillStyle = '#6b7280';
        ctx.font = '10px sans-serif';
        ctx.fillText(tree.type, offsetX + 60, offsetY + 95);
      });

      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px sans-serif';
      ctx.fillText('(4 of 16 trees shown)', width / 2 - 50, height - 10);

    } else {
      // For larger n, just show the count
      ctx.fillStyle = '#9ca3af';
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${n}^${n - 2} = ${Math.pow(n, n - 2)} labeled trees`, width / 2, height / 2);
      ctx.fillText('(too many to display)', width / 2, height / 2 + 25);
    }
  }, [n]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Cayley's Formula: Counting Labeled Trees</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={400}
          height={200}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <label className="text-dark-300">Vertices n =</label>
            <div className="flex gap-2">
              {[3, 4, 5, 6].map(num => (
                <button
                  key={num}
                  onClick={() => setN(num)}
                  className={`w-10 h-10 rounded ${
                    n === num ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 bg-dark-800 rounded-lg">
            <p className="text-dark-300 mb-2">Number of labeled trees:</p>
            <p className="text-3xl font-mono text-accent-400">
              {n}<sup>{n - 2}</sup> = {Math.pow(n, n - 2)}
            </p>
          </div>

          <div className="mt-4 text-sm text-dark-400">
            <p>For n = 3: 3¹ = 3 trees</p>
            <p>For n = 4: 4² = 16 trees</p>
            <p>For n = 5: 5³ = 125 trees</p>
            <p>For n = 6: 6⁴ = 1,296 trees</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded text-sm text-dark-300">
        <p><strong>Cayley's Formula (1889):</strong> The number of labeled trees on n vertices
        is n<sup>n−2</sup>. This beautiful result can be proved using Prüfer sequences.</p>
      </div>
    </div>
  );
}

// n-Dimensional Geometry Visualization
function NDimensionalDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimension, setDimension] = useState(3);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const scale = 60;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    const theta = (rotation * Math.PI) / 180;

    if (dimension === 2) {
      // Square
      const vertices = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
      const edges = [[0, 1], [1, 2], [2, 3], [3, 0]];

      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(cx + vertices[i][0] * scale, cy + vertices[i][1] * scale);
        ctx.lineTo(cx + vertices[j][0] * scale, cy + vertices[j][1] * scale);
        ctx.stroke();
      });

      vertices.forEach(([x, y]) => {
        ctx.fillStyle = '#22d3ee';
        ctx.beginPath();
        ctx.arc(cx + x * scale, cy + y * scale, 5, 0, Math.PI * 2);
        ctx.fill();
      });

    } else if (dimension === 3) {
      // Cube with rotation
      const vertices = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
      ];
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ];

      // Rotate and project
      const project = (v: number[]) => {
        const [x, y, z] = v;
        const rx = x * Math.cos(theta) - z * Math.sin(theta);
        const rz = x * Math.sin(theta) + z * Math.cos(theta);
        const perspective = 3 / (3 - rz);
        return [cx + rx * scale * perspective, cy - y * scale * perspective, rz];
      };

      const projected = vertices.map(project);

      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      edges.forEach(([i, j]) => {
        const depth = (projected[i][2] + projected[j][2]) / 2;
        ctx.globalAlpha = 0.3 + 0.7 * ((depth + 1.5) / 3);
        ctx.beginPath();
        ctx.moveTo(projected[i][0], projected[i][1]);
        ctx.lineTo(projected[j][0], projected[j][1]);
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      projected.forEach((p, i) => {
        ctx.fillStyle = i < 4 ? '#f472b6' : '#22d3ee';
        ctx.beginPath();
        ctx.arc(p[0], p[1], 4, 0, Math.PI * 2);
        ctx.fill();
      });

    } else if (dimension === 4) {
      // Tesseract (4D hypercube) projected to 2D
      const vertices: number[][] = [];
      for (let i = 0; i < 16; i++) {
        vertices.push([
          (i & 1) * 2 - 1,
          ((i >> 1) & 1) * 2 - 1,
          ((i >> 2) & 1) * 2 - 1,
          ((i >> 3) & 1) * 2 - 1
        ]);
      }

      // Edges connect vertices differing in one coordinate
      const edges: [number, number][] = [];
      for (let i = 0; i < 16; i++) {
        for (let j = i + 1; j < 16; j++) {
          let diff = 0;
          for (let k = 0; k < 4; k++) {
            if (vertices[i][k] !== vertices[j][k]) diff++;
          }
          if (diff === 1) edges.push([i, j]);
        }
      }

      // 4D rotation and projection
      const project4D = (v: number[]) => {
        const [x, y, z, w] = v;
        // Rotate in xw plane
        const rx = x * Math.cos(theta) - w * Math.sin(theta);
        const rw = x * Math.sin(theta) + w * Math.cos(theta);
        // Rotate in yz plane
        const ry = y * Math.cos(theta * 0.7) - z * Math.sin(theta * 0.7);
        const rz = y * Math.sin(theta * 0.7) + z * Math.cos(theta * 0.7);

        const perspective = 3 / (3 - rz * 0.3 - rw * 0.3);
        return [cx + rx * scale * 0.7 * perspective, cy - ry * scale * 0.7 * perspective];
      };

      const projected = vertices.map(project4D);

      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;
      edges.forEach(([i, j]) => {
        // Color by which coordinate differs
        const w1 = vertices[i][3], w2 = vertices[j][3];
        ctx.strokeStyle = w1 !== w2 ? '#22d3ee' : '#8b5cf6';
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.moveTo(projected[i][0], projected[i][1]);
        ctx.lineTo(projected[j][0], projected[j][1]);
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      projected.forEach((p, i) => {
        ctx.fillStyle = vertices[i][3] > 0 ? '#f472b6' : '#22d3ee';
        ctx.beginPath();
        ctx.arc(p[0], p[1], 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    const names = ['', '', 'Square (2D)', 'Cube (3D)', 'Tesseract (4D)'];
    const counts = ['', '', '4 vertices, 4 edges', '8 vertices, 12 edges', '16 vertices, 32 edges'];
    ctx.fillText(names[dimension], cx, height - 25);
    ctx.fillText(counts[dimension], cx, height - 10);
  }, [dimension, rotation]);

  // Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(r => (r + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">n-Dimensional Geometry</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1">
          <div className="flex gap-2 mb-4">
            {[2, 3, 4].map(d => (
              <button
                key={d}
                onClick={() => setDimension(d)}
                className={`px-4 py-2 rounded ${
                  dimension === d ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'
                }`}
              >
                {d}D
              </button>
            ))}
          </div>

          <div className="space-y-3 text-sm text-dark-300">
            <p>Cayley was a pioneer of n-dimensional geometry, showing that geometric intuition
            could extend beyond 3 dimensions.</p>

            <div className="p-3 bg-dark-800 rounded">
              <p className="text-dark-400">n-cube has:</p>
              <p className="font-mono text-accent-400">2ⁿ vertices</p>
              <p className="font-mono text-accent-400">n · 2ⁿ⁻¹ edges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Productivity Timeline
function ProductivityDemo() {
  const decades = [
    { period: '1840s', papers: 50, note: 'Early work while a lawyer' },
    { period: '1850s', papers: 150, note: 'Intensive research period' },
    { period: '1860s', papers: 200, note: 'Sadleirian Professor' },
    { period: '1870s', papers: 180, note: 'Continued output' },
    { period: '1880s', papers: 150, note: 'Later career' },
    { period: '1890s', papers: 70, note: 'Final years' }
  ];

  const maxPapers = Math.max(...decades.map(d => d.papers));

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Nearly 1000 Papers</h4>

      <div className="space-y-3">
        {decades.map((d, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-16 text-sm text-dark-400">{d.period}</div>
            <div className="flex-1">
              <div
                className="h-8 bg-accent-600 rounded flex items-center px-2"
                style={{ width: `${(d.papers / maxPapers) * 100}%` }}
              >
                <span className="text-white text-sm font-semibold">{d.papers}</span>
              </div>
            </div>
            <div className="w-40 text-xs text-dark-500">{d.note}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-dark-800 rounded">
        <p className="text-2xl font-bold text-accent-400 text-center">~967 papers</p>
        <p className="text-sm text-dark-400 text-center mt-1">
          One of the most prolific mathematicians in history
        </p>
      </div>
    </div>
  );
}

export default function Section24() {
  return (
    <LessonLayout
      title="Arthur Cayley"
      sectionNumber={24}
      prevSection={23}
      nextSection={25}
    >
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-accent-900/50 text-accent-300 rounded-full text-sm mb-4">
          Chapter 24: The Lawyer Who Transformed Algebra
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4">
          Arthur Cayley
        </h1>
        <p className="text-xl text-dark-300">
          Nearly a thousand papers and the foundations of modern algebra
        </p>
        <p className="text-dark-400 mt-2">1821 – 1895</p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <Card variant="primary">
          <p className="text-lg text-dark-200 leading-relaxed">
            Arthur Cayley was a mathematical machine: methodical, prolific, and seemingly
            inexhaustible. He published nearly a thousand papers, founded the theory of matrices,
            proved fundamental theorems about groups, pioneered n-dimensional geometry, and
            developed invariant theory with his friend Sylvester. All while working as a lawyer
            for 14 years because no academic position was available.
          </p>
        </Card>
      </section>

      {/* Career Path */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Lawyer Mathematician</h2>

        <p className="text-dark-300 mb-6">
          After graduating from Cambridge as Senior Wrangler (top of his class), Cayley found
          no academic positions available. So he became a lawyer—and published 250 mathematical
          papers during his 14 years at the bar.
        </p>

        <CardGrid columns={3}>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">1842-1863</h4>
            <p className="text-sm text-dark-400">
              Works as a conveyancing lawyer in London while doing groundbreaking mathematics
              in his spare time
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">1863</h4>
            <p className="text-sm text-dark-400">
              Finally appointed Sadleirian Professor at Cambridge, taking a large pay cut to
              do mathematics full-time
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">1863-1895</h4>
            <p className="text-sm text-dark-400">
              32 years of uninterrupted mathematical output, publishing at an astonishing rate
            </p>
          </Card>
        </CardGrid>

        <Callout type="note" className="mt-6">
          Cayley chose mathematics over money. His Cambridge professorship paid far less than
          his legal practice, but he considered it "a release from a burden."
        </Callout>
      </section>

      {/* Cayley-Hamilton */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Cayley-Hamilton Theorem</h2>

        <p className="text-dark-300 mb-6">
          One of Cayley's most elegant results concerns matrices and their characteristic
          polynomials. The theorem states that every matrix satisfies its own characteristic
          equation—a result that seems almost magical.
        </p>

        <CayleyHamiltonDemo />

        <div className="mt-6">
          <MathBlock
            tex="p(\lambda) = \det(A - \lambda I) = 0 \implies p(A) = 0"
            description="Every matrix satisfies its characteristic polynomial"
          />
        </div>

        <Callout type="important" className="mt-6">
          The Cayley-Hamilton theorem has far-reaching consequences: it implies that powers
          of a matrix can always be expressed in terms of lower powers, and it's fundamental
          to control theory and linear systems.
        </Callout>
      </section>

      {/* Cayley's Theorem on Groups */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Cayley's Theorem on Groups</h2>

        <p className="text-dark-300 mb-6">
          Another result bearing Cayley's name reveals the hidden structure of all groups:
          every group, no matter how abstract, can be represented as permutations.
        </p>

        <CayleysTheoremDemo />
      </section>

      {/* Cayley Graphs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Cayley Graphs</h2>

        <p className="text-dark-300 mb-6">
          Cayley also introduced a beautiful way to visualize groups: draw vertices for elements
          and colored edges for generators. The resulting graphs reveal group structure at a glance.
        </p>

        <CayleyGraphDemo />
      </section>

      {/* Tree Formula */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Counting Labeled Trees</h2>

        <p className="text-dark-300 mb-6">
          In combinatorics, Cayley proved a beautiful formula for counting the number of
          labeled trees on n vertices. The answer is surprisingly simple.
        </p>

        <CayleyTreeDemo />

        <div className="mt-6">
          <MathBlock
            tex="T_n = n^{n-2}"
            description="The number of labeled trees on n vertices"
          />
        </div>
      </section>

      {/* n-Dimensional Geometry */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Pioneer of n-Dimensions</h2>

        <p className="text-dark-300 mb-6">
          Cayley was among the first to treat geometry in arbitrary dimensions with full rigor.
          He showed that the algebraic methods of coordinate geometry extend naturally beyond
          3D, laying groundwork for modern linear algebra and relativity.
        </p>

        <NDimensionalDemo />

        <CardGrid columns={2} className="mt-6">
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Analytic Geometry</h4>
            <p className="text-sm text-dark-400">
              Extended Cartesian coordinates to n dimensions, defining distance, angles, and
              geometric concepts algebraically
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Projective Geometry</h4>
            <p className="text-sm text-dark-400">
              United Euclidean and non-Euclidean geometries using projective coordinates,
              the "Cayley-Klein metrics"
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Invariant Theory */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Invariant Theory</h2>

        <p className="text-dark-300 mb-6">
          With Sylvester, Cayley developed invariant theory into a major field. While Sylvester
          named the concepts, Cayley systematically computed and classified invariants for
          polynomials of various degrees.
        </p>

        <Card variant="dark">
          <h4 className="font-semibold text-dark-100 mb-3">Key Results</h4>
          <ul className="space-y-2 text-dark-300">
            <li className="flex items-start gap-2">
              <span className="text-accent-400">•</span>
              <span>Classified invariants for binary forms up to high degree</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400">•</span>
              <span>Developed symbolic notation for computing invariants</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400">•</span>
              <span>Established the "algebra of quantics" (polynomial invariant theory)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400">•</span>
              <span>Connected invariants to geometry through the Cayley-Klein metrics</span>
            </li>
          </ul>
        </Card>

        <div className="mt-6">
          <MathBlock
            tex="I = b^2 - ac \quad \text{(discriminant of binary quadratic)}"
            description="The simplest invariant, unchanged under linear substitution"
          />
        </div>
      </section>

      {/* Productivity */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Prodigious Output</h2>

        <ProductivityDemo />

        <Callout type="note" className="mt-6">
          Cayley's collected works fill 13 large volumes and nearly 10,000 pages. His output
          was steady and relentless—he averaged about 20 papers per year for five decades.
        </Callout>
      </section>

      {/* Matrix Theory */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Founder of Matrix Theory</h2>

        <p className="text-dark-300 mb-6">
          While Sylvester named the matrix, it was Cayley who developed matrix algebra: showing
          that matrices could be added, multiplied, and inverted according to consistent rules,
          forming what we now call a ring.
        </p>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Matrix Operations</h4>
            <p className="text-sm text-dark-400">
              Defined addition, multiplication, and inverses for matrices, establishing them
              as algebraic objects in their own right
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Non-commutativity</h4>
            <p className="text-sm text-dark-400">
              Recognized that matrix multiplication is not commutative (AB ≠ BA in general),
              a key insight for abstract algebra
            </p>
          </Card>
        </CardGrid>

        <div className="mt-6">
          <MathBlock
            tex="(AB)^{-1} = B^{-1}A^{-1}"
            description="Matrix inverses multiply in reverse order"
          />
        </div>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <Card variant="secondary">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Bell's Assessment</h3>

          <blockquote className="text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4 mb-4">
            "Cayley was the ideal mathematician... He thought deeply about everything mathematical
            that came his way, worked it out completely, and passed on to the next problem."
          </blockquote>

          <p className="text-dark-400">
            Bell contrasts Cayley's calm, systematic productivity with Sylvester's passionate
            bursts of inspiration. Where Sylvester created and named, Cayley organized and
            computed. Together they were transformative; apart, each was merely extraordinary.
          </p>
        </Card>
      </section>

      {/* The Partnership */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Two Mathematical Temperaments</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="dark">
            <h4 className="font-semibold text-dark-100 mb-3">Cayley</h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li>• Calm, methodical, systematic</li>
              <li>• Steady, relentless output</li>
              <li>• Computed and classified exhaustively</li>
              <li>• Master of symbolic calculation</li>
              <li>• Published alone more often</li>
            </ul>
          </Card>
          <Card variant="dark">
            <h4 className="font-semibold text-dark-100 mb-3">Sylvester</h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li>• Passionate, impulsive, poetic</li>
              <li>• Bursts of creative energy</li>
              <li>• Generated concepts and terminology</li>
              <li>• Master of mathematical language</li>
              <li>• Inspired students and collaborators</li>
            </ul>
          </Card>
        </div>

        <p className="mt-6 text-dark-300">
          Their friendship began in the 1840s when both were working as lawyers in London. For
          decades they exchanged ideas, developed invariant theory together, and remained close
          friends despite their different temperaments.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Major Contributions</h2>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Matrix Algebra</h4>
            <p className="text-sm text-dark-400">
              Founded the algebraic theory of matrices, including the Cayley-Hamilton theorem
              and matrix inverses
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Group Theory</h4>
            <p className="text-sm text-dark-400">
              Proved Cayley's theorem (every group embeds in a symmetric group) and introduced
              Cayley graphs
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Invariant Theory</h4>
            <p className="text-sm text-dark-400">
              Systematically computed and classified invariants for polynomial forms with Sylvester
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">n-Dimensional Geometry</h4>
            <p className="text-sm text-dark-400">
              Pioneered rigorous treatment of geometry in arbitrary dimensions, anticipating
              modern linear algebra
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Combinatorics</h4>
            <p className="text-sm text-dark-400">
              Proved Cayley's formula for counting labeled trees: n^(n-2)
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Algebraic Geometry</h4>
            <p className="text-sm text-dark-400">
              Studied algebraic curves and surfaces, contributing to the classical theory
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
                <strong>Cayley-Hamilton Theorem:</strong> Every matrix satisfies its own
                characteristic polynomial — if p(λ) = det(A - λI), then p(A) = 0
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Cayley's Theorem:</strong> Every group G is isomorphic to a subgroup of
                the symmetric group Sym(G)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                <strong>Cayley's Formula:</strong> The number of labeled trees on n vertices
                is n^(n-2)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Cayley founded matrix algebra as a systematic theory, showing matrices form
                a non-commutative ring
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                With nearly 1000 papers, Cayley was one of the most prolific mathematicians
                in history — all while working as a lawyer for 14 years
              </span>
            </li>
          </ul>
        </Card>
      </section>
    </LessonLayout>
  );
}
