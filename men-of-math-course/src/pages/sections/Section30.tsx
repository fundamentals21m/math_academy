import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, Math } from '@/components/common';

// Interactive Cantor Set Demo
function CantorSetDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [iterations, setIterations] = useState(0);
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

    const drawCantorLevel = (level: number, segments: [number, number][]) => {
      const y = 30 + level * 35;
      const segmentHeight = 20;

      // Draw level label
      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px monospace';
      ctx.fillText(`n=${level}`, 10, y + 14);

      // Draw segments
      segments.forEach(([start, end]) => {
        const x1 = 50 + start * (width - 70);
        const x2 = 50 + end * (width - 70);

        const gradient = ctx.createLinearGradient(x1, y, x2, y);
        gradient.addColorStop(0, '#8b5cf6');
        gradient.addColorStop(1, '#a78bfa');

        ctx.fillStyle = gradient;
        ctx.fillRect(x1, y, x2 - x1, segmentHeight);
      });
    };

    // Generate Cantor set segments
    const generateSegments = (n: number): [number, number][] => {
      if (n === 0) return [[0, 1]];

      const prevSegments = generateSegments(n - 1);
      const newSegments: [number, number][] = [];

      prevSegments.forEach(([start, end]) => {
        const third = (end - start) / 3;
        newSegments.push([start, start + third]);
        newSegments.push([end - third, end]);
      });

      return newSegments;
    };

    // Draw all levels up to current iteration
    for (let i = 0; i <= iterations; i++) {
      const segments = generateSegments(i);
      drawCantorLevel(i, segments);
    }

    // Draw info
    ctx.fillStyle = '#d1d5db';
    ctx.font = '14px system-ui';
    const segments = Math.pow(2, iterations);
    const length = Math.pow(2/3, iterations).toFixed(4);
    ctx.fillText(`Segments: ${segments}`, width - 150, 30);
    ctx.fillText(`Total length: ${length}`, width - 150, 50);

  }, [iterations]);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setIterations(prev => {
        if (prev >= 6) {
          setIsAnimating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">The Cantor Set</h4>
        <div className="flex gap-2">
          <button
            onClick={() => { setIterations(0); setIsAnimating(true); }}
            disabled={isAnimating}
            className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
          >
            Animate
          </button>
          <button
            onClick={() => setIterations(0)}
            className="px-3 py-1 bg-dark-700 text-dark-200 rounded hover:bg-dark-600"
          >
            Reset
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={600}
        height={280}
        className="w-full border border-dark-700 rounded"
      />
      <p className="text-sm text-dark-400 mt-2">
        Remove the middle third at each step. The set has uncountably many points but zero length!
      </p>
    </div>
  );
}

// Diagonal Argument Demo
function DiagonalArgumentDemo() {
  const [step, setStep] = useState(0);
  const [showDiagonal, setShowDiagonal] = useState(false);

  // Example "list" of reals between 0 and 1
  const numbers = [
    [0, '.', 5, 1, 4, 2, 9, '...'],
    [0, '.', 3, 3, 3, 3, 3, '...'],
    [0, '.', 7, 1, 8, 2, 8, '...'],
    [0, '.', 1, 4, 1, 5, 9, '...'],
    [0, '.', 9, 9, 9, 9, 9, '...'],
    [0, '.', 2, 7, 1, 8, 2, '...'],
  ];

  // Diagonal digits (0-indexed from after decimal)
  const diagonalPositions = [2, 3, 4, 5, 6, 7];
  const diagonalDigits = numbers.map((row, i) => row[diagonalPositions[i]]);

  // New number: add 1 to each diagonal digit (mod 10, avoiding 9->0)
  const newDigits = diagonalDigits.map(d => {
    const num = typeof d === 'number' ? d : 0;
    return (num + 1) % 10 === 0 ? 1 : (num + 1) % 10;
  });

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Diagonal Argument</h4>
        <div className="flex gap-2">
          <button
            onClick={() => { setShowDiagonal(!showDiagonal); setStep(showDiagonal ? 0 : 1); }}
            className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            {showDiagonal ? 'Hide' : 'Show'} Diagonal
          </button>
        </div>
      </div>

      <div className="font-mono text-sm mb-4">
        <div className="text-dark-400 mb-2">Suppose we could list ALL reals in [0,1]:</div>
        <div className="space-y-1">
          {numbers.map((row, rowIdx) => (
            <div key={rowIdx} className="flex items-center">
              <span className="text-dark-500 w-12">r{rowIdx + 1} =</span>
              {row.map((digit, colIdx) => {
                const isDiagonal = showDiagonal && colIdx === diagonalPositions[rowIdx];
                return (
                  <span
                    key={colIdx}
                    className={`w-5 text-center ${
                      isDiagonal
                        ? 'bg-red-500/30 text-red-400 font-bold rounded'
                        : 'text-dark-200'
                    }`}
                  >
                    {digit}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {showDiagonal && (
        <div className="mt-4 p-3 bg-dark-800 rounded">
          <div className="text-dark-300 mb-2">
            <span className="text-red-400">Diagonal digits:</span>{' '}
            {diagonalDigits.join(', ')}
          </div>
          <div className="text-dark-300 mb-2">
            <span className="text-green-400">Add 1 to each:</span>{' '}
            {newDigits.join(', ')}
          </div>
          <div className="text-dark-200">
            <span className="text-yellow-400">New number:</span>{' '}
            0.{newDigits.join('')}...
          </div>
          <div className="text-purple-400 mt-2 text-sm">
            This number differs from every r_n in the nth decimal place!
            <br />
            Therefore it cannot be in our "complete" list. Contradiction!
          </div>
        </div>
      )}

      <p className="text-sm text-dark-400 mt-3">
        No matter how you try to list all real numbers, the diagonal argument constructs one you missed.
      </p>
    </div>
  );
}

// Countable vs Uncountable Demo
function CountabilityDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<'naturals' | 'rationals' | 'reals'>('naturals');
  const [count, setCount] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    if (mode === 'naturals') {
      // Draw natural numbers being counted
      ctx.fillStyle = '#d1d5db';
      ctx.font = '14px system-ui';
      ctx.fillText('Natural Numbers N = {1, 2, 3, 4, ...}', 20, 30);

      const cols = 10;
      for (let i = 1; i <= Math.min(count, 50); i++) {
        const row = Math.floor((i - 1) / cols);
        const col = (i - 1) % cols;
        const x = 30 + col * 55;
        const y = 60 + row * 35;

        ctx.fillStyle = i === count ? '#22c55e' : '#8b5cf6';
        ctx.beginPath();
        ctx.arc(x + 15, y + 10, 15, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fff';
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(String(i), x + 15, y + 14);
      }
      ctx.textAlign = 'left';

      ctx.fillStyle = '#22c55e';
      ctx.font = '14px system-ui';
      ctx.fillText(`Count: ${count}`, width - 100, 30);
      ctx.fillText('COUNTABLE', width - 100, 50);

    } else if (mode === 'rationals') {
      // Draw rationals in diagonal enumeration
      ctx.fillStyle = '#d1d5db';
      ctx.font = '14px system-ui';
      ctx.fillText('Rational Numbers Q (positive)', 20, 30);

      // Draw grid with diagonal path
      const maxN = 6;
      const cellSize = 45;
      const offsetX = 60;
      const offsetY = 70;

      // Draw headers
      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px monospace';
      for (let i = 1; i <= maxN; i++) {
        ctx.fillText(String(i), offsetX + (i - 0.5) * cellSize - 3, offsetY - 10);
        ctx.fillText(String(i), offsetX - 25, offsetY + (i - 0.5) * cellSize + 5);
      }
      ctx.fillText('n', offsetX + maxN * cellSize + 10, offsetY - 10);
      ctx.fillText('d', offsetX - 40, offsetY + maxN * cellSize / 2);

      // Generate diagonal order
      const diagonalOrder: [number, number][] = [];
      for (let sum = 2; sum <= 2 * maxN; sum++) {
        for (let n = 1; n < sum && n <= maxN; n++) {
          const d = sum - n;
          if (d >= 1 && d <= maxN) {
            diagonalOrder.push([n, d]);
          }
        }
      }

      // Draw cells
      diagonalOrder.slice(0, count).forEach(([n, d], idx) => {
        const x = offsetX + (n - 1) * cellSize;
        const y = offsetY + (d - 1) * cellSize;

        ctx.fillStyle = idx === count - 1 ? '#22c55e' : '#8b5cf6';
        ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);

        ctx.fillStyle = '#fff';
        ctx.font = '11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${n}/${d}`, x + cellSize / 2, y + cellSize / 2 + 4);
      });
      ctx.textAlign = 'left';

      ctx.fillStyle = '#22c55e';
      ctx.font = '14px system-ui';
      ctx.fillText(`Count: ${count}`, width - 100, 30);
      ctx.fillText('COUNTABLE', width - 100, 50);

    } else {
      // Reals - show density
      ctx.fillStyle = '#d1d5db';
      ctx.font = '14px system-ui';
      ctx.fillText('Real Numbers R (interval [0, 1])', 20, 30);

      // Draw a line segment densely filled
      const lineY = height / 2;
      const lineStart = 50;
      const lineEnd = width - 50;

      // Draw the interval
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(lineStart, lineY);
      ctx.lineTo(lineEnd, lineY);
      ctx.stroke();

      // Draw endpoints
      ctx.fillStyle = '#8b5cf6';
      ctx.beginPath();
      ctx.arc(lineStart, lineY, 6, 0, Math.PI * 2);
      ctx.arc(lineEnd, lineY, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#d1d5db';
      ctx.font = '14px monospace';
      ctx.fillText('0', lineStart - 5, lineY + 25);
      ctx.fillText('1', lineEnd - 5, lineY + 25);

      // Show random points being "added"
      for (let i = 0; i < Math.min(count, 200); i++) {
        const x = lineStart + (Math.sin(i * 1.618) * 0.5 + 0.5) * (lineEnd - lineStart);
        ctx.fillStyle = `rgba(34, 197, 94, ${0.5 + 0.5 * Math.random()})`;
        ctx.beginPath();
        ctx.arc(x, lineY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#ef4444';
      ctx.font = '14px system-ui';
      ctx.fillText(`Points shown: ${Math.min(count, 200)}`, width - 150, 30);
      ctx.fillText('UNCOUNTABLE', width - 150, 50);

      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px system-ui';
      ctx.fillText('No matter how many points we mark, infinitely more remain...', 50, height - 30);
    }

  }, [mode, count]);

  useEffect(() => {
    setCount(0);
    let current = 0;
    const maxCount = mode === 'reals' ? 200 : 36;

    const animate = () => {
      current++;
      if (current <= maxCount) {
        setCount(current);
        animationRef.current = requestAnimationFrame(() => {
          setTimeout(animate, mode === 'reals' ? 30 : 150);
        });
      }
    };

    animationRef.current = requestAnimationFrame(() => setTimeout(animate, 500));

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mode]);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-dark-100">Countable vs Uncountable</h4>
        <div className="flex gap-2">
          {(['naturals', 'rationals', 'reals'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1 rounded ${
                mode === m
                  ? 'bg-purple-600 text-white'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {m === 'naturals' ? 'N' : m === 'rationals' ? 'Q' : 'R'}
            </button>
          ))}
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        className="w-full border border-dark-700 rounded"
      />
    </div>
  );
}

// Cardinality Comparison Demo
function CardinalityDemo() {
  const [selectedPair, setSelectedPair] = useState(0);

  const pairs = [
    {
      set1: 'N (naturals)',
      set2: 'Z (integers)',
      card1: 'ℵ₀',
      card2: 'ℵ₀',
      equal: true,
      bijection: 'n → 0, 1, -1, 2, -2, ...',
      explanation: 'Map 1→0, 2→1, 3→-1, 4→2, 5→-2, ...'
    },
    {
      set1: 'N (naturals)',
      set2: 'Q (rationals)',
      card1: 'ℵ₀',
      card2: 'ℵ₀',
      equal: true,
      bijection: 'Diagonal enumeration',
      explanation: 'List rationals by sum of numerator and denominator'
    },
    {
      set1: 'N (naturals)',
      set2: 'R (reals)',
      card1: 'ℵ₀',
      card2: 'c = 2^ℵ₀',
      equal: false,
      bijection: 'IMPOSSIBLE',
      explanation: 'Diagonal argument proves no bijection exists'
    },
    {
      set1: 'R (reals)',
      set2: 'P(N) (power set)',
      card1: 'c',
      card2: 'c',
      equal: true,
      bijection: 'Binary expansions',
      explanation: 'Each real in [0,1] ↔ subset of N via binary digits'
    },
    {
      set1: '[0,1] (interval)',
      set2: 'R (all reals)',
      card1: 'c',
      card2: 'c',
      equal: true,
      bijection: 'tan(π(x - 1/2))',
      explanation: 'Stretch finite interval to infinite line'
    },
  ];

  const pair = pairs[selectedPair];

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Comparing Infinities</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {pairs.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelectedPair(i)}
            className={`px-3 py-1 rounded text-sm ${
              selectedPair === i
                ? 'bg-purple-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {p.set1.split(' ')[0]} vs {p.set2.split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-dark-800 p-4 rounded text-center">
          <div className="text-dark-400 text-sm mb-1">Set A</div>
          <div className="text-xl text-purple-400">{pair.set1}</div>
          <div className="text-2xl font-bold text-dark-100 mt-2">{pair.card1}</div>
        </div>
        <div className="bg-dark-800 p-4 rounded text-center">
          <div className="text-dark-400 text-sm mb-1">Set B</div>
          <div className="text-xl text-blue-400">{pair.set2}</div>
          <div className="text-2xl font-bold text-dark-100 mt-2">{pair.card2}</div>
        </div>
      </div>

      <div className={`p-3 rounded ${pair.equal ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
        <div className={`text-lg font-bold mb-2 ${pair.equal ? 'text-green-400' : 'text-red-400'}`}>
          {pair.equal ? '|A| = |B| (Same cardinality!)' : '|A| < |B| (Different sizes!)'}
        </div>
        <div className="text-dark-300">
          <span className="text-dark-400">Bijection: </span>
          <span className={pair.equal ? 'text-green-300' : 'text-red-300'}>{pair.bijection}</span>
        </div>
        <div className="text-dark-400 text-sm mt-1">{pair.explanation}</div>
      </div>
    </div>
  );
}

// Transfinite Numbers Demo
function TransfiniteDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);

    // Draw the hierarchy of infinities
    const levels = [
      { y: height - 50, label: 'ℵ₀', desc: 'Countable infinity (N, Z, Q)', color: '#22c55e' },
      { y: height - 120, label: 'c = 2^ℵ₀', desc: 'Continuum (R, P(N))', color: '#8b5cf6' },
      { y: height - 190, label: '2^c', desc: 'Power set of reals', color: '#3b82f6' },
      { y: height - 260, label: '2^(2^c)', desc: 'And so on...', color: '#ec4899' },
    ];

    levels.forEach((level, i) => {
      // Draw expanding "wave" to show larger infinity
      const waveWidth = 100 + i * 80;

      ctx.strokeStyle = level.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(width / 2 - waveWidth, level.y);
      ctx.quadraticCurveTo(width / 2, level.y - 30, width / 2 + waveWidth, level.y);
      ctx.stroke();

      // Draw label
      ctx.fillStyle = level.color;
      ctx.font = 'bold 20px serif';
      ctx.textAlign = 'center';
      ctx.fillText(level.label, width / 2, level.y - 40);

      // Draw description
      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px system-ui';
      ctx.fillText(level.desc, width / 2, level.y + 20);

      // Draw arrow to next level
      if (i < levels.length - 1) {
        ctx.strokeStyle = '#4b5563';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(width / 2, level.y - 50);
        ctx.lineTo(width / 2, levels[i + 1].y + 30);
        ctx.stroke();
        ctx.setLineDash([]);

        // Arrow head
        ctx.fillStyle = '#4b5563';
        ctx.beginPath();
        ctx.moveTo(width / 2, levels[i + 1].y + 30);
        ctx.lineTo(width / 2 - 5, levels[i + 1].y + 40);
        ctx.lineTo(width / 2 + 5, levels[i + 1].y + 40);
        ctx.fill();
      }
    });

    // Title
    ctx.fillStyle = '#d1d5db';
    ctx.font = 'bold 16px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('The Tower of Infinities', width / 2, 25);

    // Cantor's theorem note
    ctx.fillStyle = '#f59e0b';
    ctx.font = '11px system-ui';
    ctx.fillText('Each level is STRICTLY LARGER than the one below (by Cantor\'s Theorem)', width / 2, height - 10);

  }, []);

  return (
    <div className="bg-dark-900 rounded-lg p-4">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Transfinite Cardinals</h4>
      <canvas
        ref={canvasRef}
        width={600}
        height={320}
        className="w-full border border-dark-700 rounded"
      />
      <p className="text-sm text-dark-400 mt-2">
        Cantor proved: for any set S, |P(S)| {'>'} |S|. There is no largest infinity!
      </p>
    </div>
  );
}

export default function Section30() {
  return (
    <LessonLayout
      title="Georg Cantor"
      subtitle="Paradise of the Infinite"
      sectionIndex={30}
      previousSection={{ path: '/section/29', title: 'Riemann' }}
      nextSection={{ path: '/section/31', title: 'Dedekind' }}
    >
      {/* Introduction */}
      <section className="mb-12">
        <Callout type="quote">
          "The essence of mathematics lies in its freedom." — Georg Cantor
        </Callout>

        <p className="text-lg text-dark-200 mt-6">
          <strong className="text-dark-100">Georg Ferdinand Ludwig Philipp Cantor</strong> (1845-1918)
          created an entirely new mathematical universe—the theory of infinite sets and transfinite
          numbers. His work revealed that infinity comes in different sizes, a concept so revolutionary
          that it drove some mathematicians to fury and Cantor himself to despair. Yet today, his
          ideas form the very foundation of modern mathematics.
        </p>

        <div className="mt-6 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <h4 className="text-lg font-semibold text-dark-100 mb-2">Why Cantor Matters</h4>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Founded set theory, now the basis of all mathematics</li>
            <li>Proved there are different sizes of infinity</li>
            <li>Invented the diagonal argument (used throughout mathematics and computer science)</li>
            <li>Created transfinite arithmetic for infinite numbers</li>
            <li>His Continuum Hypothesis remains one of the deepest open questions</li>
          </ul>
        </div>
      </section>

      {/* The Cantor Set */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">The Cantor Set</h2>

        <p className="text-dark-300 mb-4">
          One of Cantor's famous constructions begins with the interval [0,1]. Remove the middle
          third (1/3, 2/3). From each remaining piece, remove its middle third. Repeat forever.
        </p>

        <CantorSetDemo />

        <div className="mt-4 p-4 bg-dark-800 rounded-lg">
          <h4 className="text-lg font-semibold text-dark-100 mb-2">Paradoxical Properties</h4>
          <ul className="list-disc list-inside text-dark-300 space-y-2">
            <li>
              <strong className="text-dark-100">Zero length:</strong> After n steps, total length
              is <Math latex="(2/3)^n \to 0" /> as n → ∞
            </li>
            <li>
              <strong className="text-dark-100">Uncountably many points:</strong> The set has
              the same cardinality as [0,1] itself!
            </li>
            <li>
              <strong className="text-dark-100">Self-similar:</strong> Each piece looks like
              the whole (a fractal before fractals were named)
            </li>
            <li>
              <strong className="text-dark-100">Points:</strong> Include all numbers with
              ternary expansions using only 0s and 2s
            </li>
          </ul>
        </div>
      </section>

      {/* The Diagonal Argument */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">The Diagonal Argument</h2>

        <p className="text-dark-300 mb-4">
          Cantor's most famous proof shows that the real numbers cannot be listed—there are
          "more" reals than natural numbers. This simple but profound argument has been called
          one of the greatest ideas in human thought.
        </p>

        <DiagonalArgumentDemo />

        <MathBlock
          latex="|\mathbb{R}| > |\mathbb{N}|"
          description="The reals are uncountably infinite"
        />

        <Callout type="note" className="mt-4">
          The diagonal argument applies far beyond real numbers. It proves that no set can be
          put in one-to-one correspondence with its power set, establishing an endless hierarchy
          of infinities.
        </Callout>
      </section>

      {/* Countable vs Uncountable */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Countable vs Uncountable</h2>

        <p className="text-dark-300 mb-4">
          A set is <strong className="text-dark-100">countable</strong> if its elements can be
          listed: first, second, third, ... (matched with natural numbers). Cantor shocked the
          mathematical world by proving that some infinite sets are too large to be countable.
        </p>

        <CountabilityDemo />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/50">
            <h4 className="text-lg font-semibold text-green-400 mb-2">Countable Sets (ℵ₀)</h4>
            <ul className="text-dark-300 space-y-1">
              <li>• Natural numbers N</li>
              <li>• Integers Z</li>
              <li>• Rational numbers Q</li>
              <li>• Algebraic numbers</li>
              <li>• Computable numbers</li>
            </ul>
          </div>
          <div className="p-4 bg-red-900/20 rounded-lg border border-red-700/50">
            <h4 className="text-lg font-semibold text-red-400 mb-2">Uncountable Sets (c)</h4>
            <ul className="text-dark-300 space-y-1">
              <li>• Real numbers R</li>
              <li>• Complex numbers C</li>
              <li>• Irrational numbers</li>
              <li>• Transcendental numbers</li>
              <li>• Any interval [a,b]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cardinality */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Comparing Infinite Sets</h2>

        <p className="text-dark-300 mb-4">
          Two sets have the same <strong className="text-dark-100">cardinality</strong> if there
          exists a bijection (one-to-one correspondence) between them. For finite sets, this is
          obvious. For infinite sets, it leads to stunning paradoxes.
        </p>

        <CardinalityDemo />

        <MathBlock
          latex="|A| = |B| \iff \exists f: A \xrightarrow{\sim} B \text{ (bijection)}"
          description="Definition of equal cardinality"
        />

        <Callout type="insight" className="mt-4">
          A line segment and an infinite line have the same number of points! So do a square and
          a line segment. Cantor himself wrote "I see it, but I don't believe it!"
        </Callout>
      </section>

      {/* Transfinite Numbers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Transfinite Cardinals</h2>

        <p className="text-dark-300 mb-4">
          Cantor created an arithmetic of infinite numbers. The smallest infinity is
          <Math latex="\aleph_0" /> (aleph-null), the cardinality of the natural numbers.
          But there are infinitely many larger infinities!
        </p>

        <TransfiniteDemo />

        <div className="mt-4 p-4 bg-dark-800 rounded-lg">
          <h4 className="text-lg font-semibold text-dark-100 mb-3">Cantor's Theorem</h4>
          <MathBlock
            latex="|P(S)| > |S| \text{ for any set } S"
            description="The power set is always strictly larger"
          />
          <p className="text-dark-300 mt-3">
            This means there is no largest infinity! For any infinite set, its power set
            (set of all subsets) is strictly larger. We can always go higher.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Cardinal Arithmetic">
            <MathBlock latex="\aleph_0 + \aleph_0 = \aleph_0" />
            <MathBlock latex="\aleph_0 \cdot \aleph_0 = \aleph_0" />
            <MathBlock latex="2^{\aleph_0} = \mathfrak{c}" />
            <p className="text-sm text-dark-400 mt-2">
              Addition and multiplication of countable infinities stay countable,
              but exponentiation jumps to a new level.
            </p>
          </Card>
          <Card title="The Continuum Hypothesis">
            <MathBlock latex="\aleph_1 = 2^{\aleph_0} \text{ ?}" />
            <p className="text-sm text-dark-400 mt-2">
              Is there an infinity between ℵ₀ and c? Cantor conjectured no.
              Gödel (1940) and Cohen (1963) proved this is independent of standard axioms!
            </p>
          </Card>
        </div>
      </section>

      {/* The Set Theory Revolution */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Set Theory as Foundation</h2>

        <p className="text-dark-300 mb-4">
          Cantor's set theory became the language in which all of mathematics could be expressed.
          Every mathematical object—numbers, functions, spaces, structures—can be defined in
          terms of sets.
        </p>

        <CardGrid columns={2}>
          <Card title="Building Mathematics">
            <ul className="text-sm text-dark-300 space-y-2">
              <li><strong className="text-dark-200">0</strong> = ∅ (empty set)</li>
              <li><strong className="text-dark-200">1</strong> = {'{'}∅{'}'}</li>
              <li><strong className="text-dark-200">2</strong> = {'{'}∅, {'{'}∅{'}'}{'}'}</li>
              <li><strong className="text-dark-200">n+1</strong> = n ∪ {'{'}n{'}'}</li>
              <li className="pt-2 border-t border-dark-700">
                All of N, Z, Q, R can be constructed from sets!
              </li>
            </ul>
          </Card>
          <Card title="Opposition and Struggle">
            <p className="text-sm text-dark-300 mb-2">
              Cantor faced fierce opposition:
            </p>
            <ul className="text-sm text-dark-400 space-y-1">
              <li>• Kronecker: "God made the integers, all else is the work of man"</li>
              <li>• Poincaré called set theory a "disease"</li>
              <li>• Cantor suffered severe depression, died in a sanatorium</li>
            </ul>
            <p className="text-sm text-dark-300 mt-2">
              Yet Hilbert declared: "No one shall expel us from the Paradise that Cantor has created."
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Life and Career</h2>

        <div className="space-y-4">
          {[
            { year: '1845', event: 'Born in St. Petersburg, Russia' },
            { year: '1862', event: 'Family moves to Germany; studies at Zurich and Berlin' },
            { year: '1867', event: 'Doctorate on number theory (advised by Weierstrass)' },
            { year: '1874', event: 'First paper on uncountability of reals' },
            { year: '1878', event: 'Proves line and plane have same cardinality' },
            { year: '1883', event: 'Introduces transfinite ordinal numbers' },
            { year: '1884', event: 'First serious mental breakdown' },
            { year: '1891', event: 'Publishes diagonal argument in its modern form' },
            { year: '1895-97', event: 'Major papers on transfinite cardinal arithmetic' },
            { year: '1918', event: 'Dies in Halle sanatorium during WWI' },
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
          "Cantor's theory of the infinite is one of the most important contributions to mathematics
          in the past two thousand years... Before Cantor, infinity was either a source of
          contradictions and paradoxes or a theological concept. After Cantor, it became a
          mathematical tool of the highest precision."
        </Callout>

        <p className="text-dark-300 mt-4">
          Bell portrays Cantor as a tragic figure—a genius whose ideas were too revolutionary
          for his contemporaries. The relentless attacks from Kronecker and others took a
          devastating toll on his mental health. Yet Cantor persisted, driven by what he
          believed was divine inspiration to reveal the true nature of the infinite.
        </p>

        <p className="text-dark-300 mt-4">
          The irony is complete: the man who suffered so much for his ideas about infinity
          now has those ideas at the very heart of modern mathematics. Set theory is taught
          to every mathematics student. The diagonal argument is used throughout logic and
          computer science. And the question Cantor could never answer—the Continuum Hypothesis—
          turned out to be unanswerable in a profound way, revealing limits to mathematical
          knowledge itself.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-4">Key Takeaways</h2>

        <CardGrid columns={2}>
          <Card title="The Diagonal Argument">
            <p className="text-sm text-dark-300">
              A simple proof that no list can contain all reals. Construct a new real
              that differs from the nth list element in its nth digit. This number
              cannot be in the list—contradiction.
            </p>
          </Card>
          <Card title="Cardinality">
            <p className="text-sm text-dark-300">
              Two sets have the same "size" if their elements can be matched one-to-one.
              This leads to surprises: N and Q have the same cardinality, but R is larger.
            </p>
          </Card>
          <Card title="The Power Set Theorem">
            <p className="text-sm text-dark-300">
              For any set S, the set of all subsets P(S) is strictly larger. This
              generates an unending tower of infinities: ℵ₀ {'<'} 2^ℵ₀ {'<'} 2^(2^ℵ₀) {'<'} ...
            </p>
          </Card>
          <Card title="Set Theory Foundation">
            <p className="text-sm text-dark-300">
              All mathematical objects can be defined as sets. Numbers, functions, spaces—
              everything reduces to sets and membership. Cantor gave mathematics its language.
            </p>
          </Card>
        </CardGrid>
      </section>
    </LessonLayout>
  );
}
