import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, Math } from '@/components/common';

// Interactive Dedekind Cut Demo
function DedekindCutDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cutValue, setCutValue] = useState(Math.sqrt(2));
  const [showRationals, setShowRationals] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    const lineY = height / 2;
    const lineStart = 50;
    const lineEnd = width - 50;
    const lineWidth = lineEnd - lineStart;

    // Map value to position (showing -1 to 4)
    const minVal = -1;
    const maxVal = 4;
    const valueToX = (v: number) => lineStart + ((v - minVal) / (maxVal - minVal)) * lineWidth;
    const cutX = valueToX(cutValue);

    // Draw the number line
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(lineStart, lineY);
    ctx.lineTo(lineEnd, lineY);
    ctx.stroke();

    // Draw tick marks
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    for (let i = 0; i <= 4; i++) {
      const x = valueToX(i);
      ctx.beginPath();
      ctx.moveTo(x, lineY - 8);
      ctx.lineTo(x, lineY + 8);
      ctx.stroke();
      ctx.fillText(String(i), x, lineY + 25);
    }

    // Color the lower set (red) and upper set (blue)
    ctx.fillStyle = 'rgba(239, 68, 68, 0.3)';
    ctx.fillRect(lineStart, lineY - 30, cutX - lineStart, 60);

    ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
    ctx.fillRect(cutX, lineY - 30, lineEnd - cutX, 60);

    // Draw some rational points if enabled
    if (showRationals) {
      const rationals: [number, number][] = [];
      for (let d = 1; d <= 8; d++) {
        for (let n = -d; n <= 4 * d; n++) {
          const val = n / d;
          if (val >= minVal && val <= maxVal) {
            rationals.push([n, d]);
          }
        }
      }

      rationals.forEach(([n, d]) => {
        const val = n / d;
        const x = valueToX(val);
        const inLower = val < cutValue;

        ctx.fillStyle = inLower ? '#ef4444' : '#3b82f6';
        ctx.beginPath();
        ctx.arc(x, lineY, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Draw the cut line
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(cutX, lineY - 50);
    ctx.lineTo(cutX, lineY + 50);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw cut point
    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.arc(cutX, lineY, 8, 0, Math.PI * 2);
    ctx.fill();

    // Labels
    ctx.font = '14px system-ui';
    ctx.fillStyle = '#ef4444';
    ctx.textAlign = 'center';
    ctx.fillText('Lower Set L', lineStart + (cutX - lineStart) / 2, lineY - 45);
    ctx.fillText('{ q ∈ Q : q < α }', lineStart + (cutX - lineStart) / 2, lineY + 55);

    ctx.fillStyle = '#3b82f6';
    ctx.fillText('Upper Set U', cutX + (lineEnd - cutX) / 2, lineY - 45);
    ctx.fillText('{ q ∈ Q : q ≥ α }', cutX + (lineEnd - cutX) / 2, lineY + 55);

    // Show cut value
    ctx.fillStyle = '#a855f7';
    ctx.font = 'bold 16px system-ui';
    ctx.fillText(`α = ${cutValue.toFixed(4)}`, cutX, lineY - 65);

  }, [cutValue, showRationals]);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Dedekind Cut</h4>
        <label className="flex items-center gap-2 text-sm text-dark-300">
          <input
            type="checkbox"
            checked={showRationals}
            onChange={(e) => setShowRationals(e.target.checked)}
            className="rounded"
          />
          Show rationals
        </label>
      </div>
      <canvas
        ref={canvasRef}
        width={600}
        height={180}
        className="w-full border border-dark-700 rounded"
      />
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-4">
          <span className="text-dark-400 w-20">Cut at:</span>
          <input
            type="range"
            min="0.1"
            max="3.5"
            step="0.01"
            value={cutValue}
            onChange={(e) => setCutValue(parseFloat(e.target.value))}
            className="flex-1"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCutValue(Math.sqrt(2))}
            className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
          >
            √2 ≈ 1.414
          </button>
          <button
            onClick={() => setCutValue(Math.PI - 2)}
            className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
          >
            π-2 ≈ 1.142
          </button>
          <button
            onClick={() => setCutValue(Math.E - 1)}
            className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
          >
            e-1 ≈ 1.718
          </button>
          <button
            onClick={() => setCutValue(1.5)}
            className="px-3 py-1 bg-dark-700 text-dark-200 rounded hover:bg-dark-600 text-sm"
          >
            3/2 (rational)
          </button>
        </div>
      </div>
      <p className="text-sm text-dark-400 mt-3">
        A real number IS a cut: a partition of Q into lower and upper sets. Irrational cuts have no maximum in L and no minimum in U.
      </p>
    </div>
  );
}

// Ideal Demo
function IdealDemo() {
  const [ring, setRing] = useState<'Z' | 'Z[i]'>('Z');
  const [generator, setGenerator] = useState(3);

  const getIdealElements = () => {
    if (ring === 'Z') {
      const elements: number[] = [];
      for (let k = -5; k <= 5; k++) {
        elements.push(k * generator);
      }
      return elements;
    } else {
      // Z[i] - Gaussian integers, ideal generated by (1+i)
      const elements: [number, number][] = [];
      for (let a = -3; a <= 3; a++) {
        for (let b = -3; b <= 3; b++) {
          // (a + bi)(1 + i) = (a - b) + (a + b)i
          elements.push([a - b, a + b]);
        }
      }
      return elements;
    }
  };

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Ideals in Rings</h4>
        <div className="flex gap-2">
          <button
            onClick={() => setRing('Z')}
            className={`px-3 py-1 rounded ${
              ring === 'Z' ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            Z (integers)
          </button>
          <button
            onClick={() => setRing('Z[i]')}
            className={`px-3 py-1 rounded ${
              ring === 'Z[i]' ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            Z[i] (Gaussian)
          </button>
        </div>
      </div>

      {ring === 'Z' ? (
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-dark-300">Ideal generated by:</span>
            <select
              value={generator}
              onChange={(e) => setGenerator(parseInt(e.target.value))}
              className="bg-dark-800 text-dark-200 rounded px-3 py-1"
            >
              {[2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <span className="text-purple-400">({generator}) = {generator}Z</span>
          </div>

          <div className="bg-dark-800 p-4 rounded">
            <div className="text-dark-400 text-sm mb-2">Elements of ({generator}):</div>
            <div className="flex flex-wrap gap-2">
              {getIdealElements().map((el, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 rounded text-sm ${
                    el === 0 ? 'bg-yellow-600/30 text-yellow-400' : 'bg-purple-600/30 text-purple-300'
                  }`}
                >
                  {el}
                </span>
              ))}
              <span className="text-dark-500">...</span>
            </div>
          </div>

          <div className="mt-4 text-sm text-dark-300">
            <p>
              <strong className="text-dark-100">Key properties:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Closed under addition: {generator} + {generator} = {2*generator} ∈ ({generator})</li>
              <li>Absorbs multiplication: {generator} × any integer ∈ ({generator})</li>
              <li>Contains 0 (identity for addition)</li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-dark-300 mb-4">
            <span>Ideal generated by (1+i) in Z[i]</span>
          </div>

          <div className="bg-dark-800 p-4 rounded">
            <div className="text-dark-400 text-sm mb-2">
              The ideal (1+i) consists of Gaussian integers a+bi where a+b is even:
            </div>
            <div className="grid grid-cols-7 gap-1 text-xs text-center">
              {(getIdealElements() as [number, number][]).slice(0, 28).map(([re, im], i) => (
                <span
                  key={i}
                  className={`px-1 py-1 rounded ${
                    re === 0 && im === 0
                      ? 'bg-yellow-600/30 text-yellow-400'
                      : 'bg-purple-600/30 text-purple-300'
                  }`}
                >
                  {im === 0 ? re : im > 0 ? `${re}+${im}i` : `${re}${im}i`}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-dark-300">
            <p>
              <strong className="text-dark-100">Dedekind's insight:</strong> In algebraic number
              rings, unique factorization of elements may fail, but ideals always factor uniquely
              into prime ideals!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Dedekind Infinite Demo
function DedekindInfiniteDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Draw N = {1, 2, 3, 4, ...}
    const topY = 60;
    const bottomY = 150;
    const startX = 80;
    const spacing = 60;

    ctx.fillStyle = '#d1d5db';
    ctx.font = 'bold 14px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('N = {1, 2, 3, 4, 5, ...}', 20, topY - 25);
    ctx.fillText('N \\ {1} = {2, 3, 4, 5, 6, ...}', 20, bottomY + 40);

    // Draw elements
    const numElements = 7;
    for (let i = 0; i < numElements; i++) {
      const x = startX + i * spacing;

      // Top row (N)
      ctx.fillStyle = i === 0 && step >= 1 ? '#ef4444' : '#8b5cf6';
      ctx.beginPath();
      ctx.arc(x, topY, 20, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(String(i + 1), x, topY + 5);

      // Bottom row (N minus 1)
      if (i < numElements - 1) {
        const bottomX = startX + i * spacing;
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(bottomX, bottomY, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fff';
        ctx.fillText(String(i + 2), bottomX, bottomY + 5);

        // Draw arrow if step >= 2
        if (step >= 2) {
          const topX = startX + (i + 1) * spacing;
          ctx.strokeStyle = '#22c55e';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(topX, topY + 25);
          ctx.lineTo(bottomX, bottomY - 25);
          ctx.stroke();

          // Arrow head
          ctx.fillStyle = '#22c55e';
          ctx.beginPath();
          ctx.moveTo(bottomX, bottomY - 25);
          ctx.lineTo(bottomX - 5, bottomY - 35);
          ctx.lineTo(bottomX + 5, bottomY - 35);
          ctx.fill();
        }
      }
    }

    // Add "..." indicators
    ctx.fillStyle = '#6b7280';
    ctx.font = 'bold 20px serif';
    ctx.fillText('...', startX + numElements * spacing, topY);
    ctx.fillText('...', startX + (numElements - 1) * spacing, bottomY);

    // Explanation text
    if (step >= 1) {
      ctx.fillStyle = '#ef4444';
      ctx.font = '12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('Remove 1', startX - 30, topY + 45);
    }

    if (step >= 2) {
      ctx.fillStyle = '#22c55e';
      ctx.font = '12px system-ui';
      ctx.fillText('Bijection: f(n) = n - 1', width - 150, height / 2);
    }

    if (step >= 3) {
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('N ≅ N \\ {1} : A proper subset has the same cardinality!', width / 2, height - 20);
    }

  }, [step]);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= 3) {
          setIsAnimating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Dedekind Infinite</h4>
        <div className="flex gap-2">
          <button
            onClick={() => { setStep(0); setIsAnimating(true); }}
            disabled={isAnimating}
            className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
          >
            Animate
          </button>
          <button
            onClick={() => setStep(0)}
            className="px-3 py-1 bg-dark-700 text-dark-200 rounded hover:bg-dark-600"
          >
            Reset
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={550}
        height={210}
        className="w-full border border-dark-700 rounded"
      />
      <p className="text-sm text-dark-400 mt-2">
        Dedekind's definition: A set is infinite iff it can be put in bijection with a proper subset of itself.
      </p>
    </div>
  );
}

// Chain Demo
function ChainDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showChain, setShowChain] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Draw a lattice/chain structure
    const centerX = width / 2;
    const centerY = height / 2;

    // Nodes in the partial order
    const nodes = [
      { x: centerX, y: 40, label: '{a,b,c}', level: 3 },
      { x: centerX - 80, y: 100, label: '{a,b}', level: 2 },
      { x: centerX, y: 100, label: '{a,c}', level: 2 },
      { x: centerX + 80, y: 100, label: '{b,c}', level: 2 },
      { x: centerX - 80, y: 160, label: '{a}', level: 1 },
      { x: centerX, y: 160, label: '{b}', level: 1 },
      { x: centerX + 80, y: 160, label: '{c}', level: 1 },
      { x: centerX, y: 220, label: '∅', level: 0 },
    ];

    // Edges (Hasse diagram)
    const edges = [
      [0, 1], [0, 2], [0, 3], // top to level 2
      [1, 4], [1, 5], // {a,b} to {a}, {b}
      [2, 4], [2, 6], // {a,c} to {a}, {c}
      [3, 5], [3, 6], // {b,c} to {b}, {c}
      [4, 7], [5, 7], [6, 7], // level 1 to bottom
    ];

    // Draw edges
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    edges.forEach(([from, to]) => {
      ctx.beginPath();
      ctx.moveTo(nodes[from].x, nodes[from].y + 15);
      ctx.lineTo(nodes[to].x, nodes[to].y - 15);
      ctx.stroke();
    });

    // Highlight a chain if enabled
    if (showChain) {
      const chainIndices = [7, 4, 1, 0]; // ∅ ⊂ {a} ⊂ {a,b} ⊂ {a,b,c}
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 3;
      for (let i = 0; i < chainIndices.length - 1; i++) {
        const from = nodes[chainIndices[i]];
        const to = nodes[chainIndices[i + 1]];
        ctx.beginPath();
        ctx.moveTo(from.x, from.y - 15);
        ctx.lineTo(to.x, to.y + 15);
        ctx.stroke();
      }
    }

    // Draw nodes
    nodes.forEach((node, i) => {
      const isInChain = showChain && [0, 1, 4, 7].includes(i);

      ctx.fillStyle = isInChain ? '#22c55e' : '#8b5cf6';
      ctx.beginPath();
      ctx.arc(node.x, node.y, 15, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(node.label, node.x, node.y + 4);
    });

    // Labels
    ctx.fillStyle = '#d1d5db';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('Power set P({a,b,c})', 20, 25);
    ctx.fillText('ordered by ⊆', 20, 45);

    if (showChain) {
      ctx.fillStyle = '#22c55e';
      ctx.font = '12px system-ui';
      ctx.textAlign = 'right';
      ctx.fillText('Chain: ∅ ⊂ {a} ⊂ {a,b} ⊂ {a,b,c}', width - 20, height - 10);
    }

  }, [showChain]);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Chains and Lattices</h4>
        <label className="flex items-center gap-2 text-sm text-dark-300">
          <input
            type="checkbox"
            checked={showChain}
            onChange={(e) => setShowChain(e.target.checked)}
            className="rounded"
          />
          Highlight chain
        </label>
      </div>
      <canvas
        ref={canvasRef}
        width={500}
        height={250}
        className="w-full border border-dark-700 rounded"
      />
      <p className="text-sm text-dark-400 mt-2">
        Dedekind studied lattice structures and chains—totally ordered subsets of partially ordered sets.
      </p>
    </div>
  );
}

// Construction of Naturals Demo
function NaturalConstructionDemo() {
  const [showInduction, setShowInduction] = useState(false);

  const numbers = [
    { n: 0, set: '∅', meaning: 'Empty set' },
    { n: 1, set: '{∅}', meaning: 'Set containing empty set' },
    { n: 2, set: '{∅, {∅}}', meaning: 'Set containing 0 and 1' },
    { n: 3, set: '{∅, {∅}, {∅, {∅}}}', meaning: 'Set containing 0, 1, and 2' },
    { n: 4, set: '{∅, {∅}, {∅, {∅}}, ...}', meaning: 'And so on...' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Construction of Natural Numbers</h4>
        <button
          onClick={() => setShowInduction(!showInduction)}
          className={`px-3 py-1 rounded ${
            showInduction ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          {showInduction ? 'Hide' : 'Show'} Induction
        </button>
      </div>

      <div className="space-y-2">
        {numbers.map(({ n, set, meaning }) => (
          <div key={n} className="flex items-center gap-4 p-2 bg-dark-800 rounded">
            <span className="text-2xl font-bold text-purple-400 w-8">{n}</span>
            <span className="text-dark-200 font-mono text-sm flex-1">{set}</span>
            <span className="text-dark-400 text-sm">{meaning}</span>
          </div>
        ))}
      </div>

      {showInduction && (
        <div className="mt-4 p-4 bg-dark-800 rounded border border-purple-700/50">
          <h5 className="text-dark-100 font-semibold mb-2">Dedekind's Recursion Theorem</h5>
          <p className="text-dark-300 text-sm mb-2">
            Given any set A, element a ∈ A, and function f: A → A, there exists a unique
            function g: N → A such that:
          </p>
          <ul className="text-dark-300 text-sm space-y-1">
            <li>• g(0) = a</li>
            <li>• g(n+1) = f(g(n)) for all n ∈ N</li>
          </ul>
          <p className="text-purple-400 text-sm mt-2">
            This justifies definition by recursion and proof by induction!
          </p>
        </div>
      )}

      <div className="mt-4 text-sm text-dark-400">
        <p>
          <strong className="text-dark-200">Successor function:</strong> S(n) = n ∪ {'{'}n{'}'} = n + 1
        </p>
        <p className="mt-1">
          Each natural number is the set of all smaller natural numbers: n = {'{'}0, 1, 2, ..., n-1{'}'}
        </p>
      </div>
    </div>
  );
}

export default function Section31() {
  return (
    <LessonLayout
      title="Richard Dedekind"
      subtitle="Anatomy of the Number System"
      sectionIndex={31}
      previousSection={{ path: '/section/30', title: 'Cantor' }}
      nextSection={{ path: '/section/32', title: 'Poincaré' }}
    >
      {/* Introduction */}
      <section className="mb-12">
        <Callout type="quote">
          "Numbers are free creations of the human mind; they serve as a means of apprehending more
          easily and more sharply the difference of things." — Richard Dedekind
        </Callout>

        <p className="text-lg text-dark-200 mt-6">
          <strong className="text-dark-100">Julius Wilhelm Richard Dedekind</strong> (1831-1916)
          was one of the most profound mathematical thinkers of the nineteenth century. While
          teaching calculus, he realized that the foundations of analysis rested on intuition
          rather than rigorous definition—and set out to fix this. His constructions of the
          real numbers and natural numbers remain the standard today.
        </p>

        <div className="mt-6 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <h4 className="text-lg font-semibold text-dark-100 mb-2">Why Dedekind Matters</h4>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Gave the first rigorous construction of real numbers (Dedekind cuts)</li>
            <li>Founded ideal theory, saving unique factorization in algebraic number theory</li>
            <li>Provided set-theoretic foundations for natural numbers</li>
            <li>Defined infinite sets in terms of bijections with proper subsets</li>
            <li>Created the conceptual framework for abstract algebra</li>
          </ul>
        </div>
      </section>

      {/* Dedekind Cuts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Dedekind Cuts</h2>

        <p className="text-dark-300 mb-4">
          Before Dedekind, mathematicians used real numbers without ever defining what they were.
          Dedekind's insight: a real number can be defined as a "cut" in the rational numbers—
          a partition of Q into two sets where everything in the lower set is less than
          everything in the upper set.
        </p>

        <DedekindCutDemo />

        <MathBlock
          latex="\alpha = (L, U) \text{ where } L = \{q \in \mathbb{Q} : q < \alpha\}, \; U = \{q \in \mathbb{Q} : q \geq \alpha\}"
          description="A real number as a Dedekind cut"
        />

        <div className="mt-4 p-4 bg-dark-800 rounded-lg">
          <h4 className="text-lg font-semibold text-dark-100 mb-2">The Key Insight</h4>
          <ul className="list-disc list-inside text-dark-300 space-y-2">
            <li>
              <strong className="text-dark-100">Rational cuts:</strong> If α = p/q is rational,
              the lower set has a maximum OR the upper set has a minimum
            </li>
            <li>
              <strong className="text-dark-100">Irrational cuts:</strong> If α is irrational
              (like √2), L has no maximum and U has no minimum
            </li>
            <li>
              <strong className="text-dark-100">Completeness:</strong> Every cut defines a real
              number—this is the key property rational numbers lack
            </li>
          </ul>
        </div>

        <Callout type="note" className="mt-4">
          The cut for √2 is: L = {'{'}q ∈ Q : q² {'<'} 2 or q {'<'} 0{'}'}.
          There is no rational number that "creates" this cut—yet the cut itself exists,
          and we call it √2.
        </Callout>
      </section>

      {/* Ideal Theory */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Ideal Theory</h2>

        <p className="text-dark-300 mb-4">
          In the integers, every number factors uniquely into primes. But in other rings
          (like <Math latex="\mathbb{Z}[\sqrt{-5}]" />), this fails! Dedekind's solution:
          instead of factoring elements, factor <em>ideals</em>. Unique factorization is
          restored at this higher level.
        </p>

        <IdealDemo />

        <MathBlock
          latex="\text{An ideal } I \subseteq R \text{ satisfies: } a,b \in I \Rightarrow a+b \in I, \text{ and } r \in R, a \in I \Rightarrow ra \in I"
          description="Definition of an ideal in a ring R"
        />

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="The Problem">
            <p className="text-sm text-dark-300">
              In <Math latex="\mathbb{Z}[\sqrt{-5}]" />:
            </p>
            <MathBlock latex="6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})" />
            <p className="text-sm text-dark-400 mt-2">
              Two different "prime" factorizations! Unique factorization fails.
            </p>
          </Card>
          <Card title="Dedekind's Solution">
            <p className="text-sm text-dark-300">
              Factor into prime <em>ideals</em> instead:
            </p>
            <MathBlock latex="(6) = \mathfrak{p}_1^2 \cdot \mathfrak{p}_2 \cdot \mathfrak{p}_3" />
            <p className="text-sm text-dark-400 mt-2">
              Unique factorization of ideals always holds in Dedekind domains!
            </p>
          </Card>
        </div>
      </section>

      {/* Dedekind Infinite */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Defining Infinity</h2>

        <p className="text-dark-300 mb-4">
          How do you define "infinite" without circular reasoning? Dedekind found an elegant
          answer: a set is infinite if and only if it can be matched one-to-one with a
          proper subset of itself. This is impossible for finite sets!
        </p>

        <DedekindInfiniteDemo />

        <MathBlock
          latex="\text{S is Dedekind-infinite} \iff \exists \text{ bijection } f: S \to T \text{ where } T \subsetneq S"
          description="Dedekind's definition of infinite sets"
        />

        <Callout type="insight" className="mt-4">
          The natural numbers N can be matched with N\{'{'}1{'}'} via n ↦ n-1. But no finite set
          {'{'}1,2,...,k{'}'} can be matched with any of its proper subsets. This captures exactly
          what makes infinite sets "infinite."
        </Callout>
      </section>

      {/* Foundations of Natural Numbers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">What Are Numbers?</h2>

        <p className="text-dark-300 mb-4">
          In his famous 1888 essay "Was sind und was sollen die Zahlen?" (What are numbers
          and what should they be?), Dedekind constructed the natural numbers from pure
          set theory and established the logical basis for mathematical induction.
        </p>

        <NaturalConstructionDemo />

        <div className="mt-6 p-4 bg-dark-800 rounded-lg">
          <h4 className="text-lg font-semibold text-dark-100 mb-3">The Peano-Dedekind Axioms</h4>
          <ol className="list-decimal list-inside text-dark-300 space-y-2">
            <li>0 is a natural number</li>
            <li>Every natural number n has a successor S(n)</li>
            <li>0 is not the successor of any natural number</li>
            <li>Different numbers have different successors</li>
            <li>
              <strong className="text-dark-100">Induction:</strong> If a property holds for 0,
              and holding for n implies holding for S(n), then it holds for all natural numbers
            </li>
          </ol>
          <p className="text-dark-400 text-sm mt-3">
            Though named for Peano, these axioms were largely developed by Dedekind.
          </p>
        </div>
      </section>

      {/* Chains and Lattices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Chains and Structures</h2>

        <p className="text-dark-300 mb-4">
          Dedekind was a pioneer of the structural approach to mathematics. He studied
          abstract algebraic structures, lattices, and chains (totally ordered subsets
          of partially ordered sets), laying groundwork for modern algebra.
        </p>

        <ChainDemo />

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Modular Lattices">
            <p className="text-sm text-dark-300">
              Dedekind identified the modular law for lattices:
            </p>
            <MathBlock latex="a \leq c \Rightarrow a \vee (b \wedge c) = (a \vee b) \wedge c" />
            <p className="text-sm text-dark-400 mt-2">
              This property characterizes important algebraic structures.
            </p>
          </Card>
          <Card title="Abstract Algebra">
            <p className="text-sm text-dark-300">
              Dedekind pioneered the study of:
            </p>
            <ul className="text-sm text-dark-400 mt-2 space-y-1">
              <li>• Groups as abstract structures</li>
              <li>• Rings and fields axiomatically</li>
              <li>• Modules over rings</li>
              <li>• Lattice theory</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Life and Career</h2>

        <div className="space-y-4">
          {[
            { year: '1831', event: 'Born in Braunschweig, Germany' },
            { year: '1850', event: 'Studies at Göttingen under Gauss' },
            { year: '1852', event: 'Doctorate on Eulerian integrals' },
            { year: '1854', event: 'Habilitation; attends Riemann\'s groundbreaking lecture' },
            { year: '1858', event: 'While teaching calculus, conceives Dedekind cuts' },
            { year: '1862', event: 'Returns to Braunschweig, teaches at technical institute' },
            { year: '1871', event: 'Develops ideal theory for algebraic number fields' },
            { year: '1872', event: 'Publishes "Stetigkeit und irrationale Zahlen" (on cuts)' },
            { year: '1888', event: 'Publishes "Was sind und was sollen die Zahlen?"' },
            { year: '1916', event: 'Dies in Braunschweig at age 84' },
          ].map(({ year, event }) => (
            <div key={year} className="flex gap-4 items-start">
              <span className="text-purple-400 font-mono w-16 shrink-0">{year}</span>
              <span className="text-dark-300">{event}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Bell's Assessment</h2>

        <Callout type="quote">
          "Dedekind was one of the most original mathematicians of the nineteenth century...
          His abstract, conceptual approach to mathematics, his insistence on rigor and
          logical precision, helped shape the character of modern mathematics."
        </Callout>

        <p className="text-dark-300 mt-4">
          Bell emphasizes Dedekind's quiet, methodical genius—a man who lived modestly in
          his hometown for over fifty years while revolutionizing mathematics from the
          inside out. Unlike flashier mathematicians, Dedekind worked slowly and carefully,
          publishing only when he had achieved complete clarity.
        </p>

        <p className="text-dark-300 mt-4">
          His friendship and correspondence with Cantor was crucial to the development of
          set theory. While Cantor explored the wilderness of infinite sets, Dedekind
          provided the careful foundations that made the journey secure. Together they
          created the framework within which all of modern mathematics operates.
        </p>

        <p className="text-dark-300 mt-4">
          Dedekind famously outlived his own obituary—when a mathematical calendar listed
          him as having died on September 4, 1899, he wrote to the editor: "According to
          my own memorandum I passed this day in perfect health."
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Key Takeaways</h2>

        <CardGrid columns={2}>
          <Card title="Dedekind Cuts">
            <p className="text-sm text-dark-300">
              A real number is a partition of Q into a lower and upper set. This
              constructs R from Q rigorously, explaining why R is complete
              (has no "holes") while Q is not.
            </p>
          </Card>
          <Card title="Ideal Theory">
            <p className="text-sm text-dark-300">
              When unique factorization of elements fails in algebraic number rings,
              factor ideals instead. Every ideal factors uniquely into prime ideals
              in a Dedekind domain.
            </p>
          </Card>
          <Card title="Dedekind Infinite">
            <p className="text-sm text-dark-300">
              A set is infinite iff it bijects with a proper subset. This elegant
              definition captures the essence of infinity without circularity,
              using only the concept of one-to-one correspondence.
            </p>
          </Card>
          <Card title="Foundational Rigor">
            <p className="text-sm text-dark-300">
              Dedekind showed that natural numbers can be constructed from pure logic
              and set theory, and that mathematical induction is not just a technique
              but a fundamental property of N.
            </p>
          </Card>
        </CardGrid>
      </section>
    </LessonLayout>
  );
}
