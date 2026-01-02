import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';
import { MathBlock, InlineMath } from '../../components/common/MathBlock';

// Binary Number System Demo
function BinaryDemo() {
  const [decimal, setDecimal] = useState(42);
  const [showSteps, setShowSteps] = useState(true);

  const toBinary = (n: number): string => {
    if (n === 0) return '0';
    return n.toString(2);
  };

  const binary = toBinary(decimal);

  // Calculate conversion steps
  const getConversionSteps = (n: number): Array<{ quotient: number; remainder: number }> => {
    const steps: Array<{ quotient: number; remainder: number }> = [];
    let current = n;
    while (current > 0) {
      steps.push({
        quotient: Math.floor(current / 2),
        remainder: current % 2,
      });
      current = Math.floor(current / 2);
    }
    return steps;
  };

  const steps = getConversionSteps(decimal);

  // Binary to decimal expansion
  const getBinaryExpansion = (bin: string): Array<{ bit: string; power: number; value: number }> => {
    return bin.split('').reverse().map((bit, i) => ({
      bit,
      power: i,
      value: parseInt(bit) * Math.pow(2, i),
    })).reverse();
  };

  const expansion = getBinaryExpansion(binary);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Leibniz's Binary System</h4>

      <p className="text-sm text-dark-300 mb-4">
        Leibniz invented the binary number system in 1679—using only 0 and 1 to represent
        all numbers. He saw mystical significance in it: 1 represents God (unity), 0 represents
        the void (nothing), and from these, all of creation emerges.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-xs text-dark-400 mb-1">Decimal</p>
            <p className="text-4xl font-mono text-primary-400">{decimal}</p>
          </div>
          <div className="text-3xl text-dark-500">=</div>
          <div className="text-center">
            <p className="text-xs text-dark-400 mb-1">Binary</p>
            <p className="text-4xl font-mono text-emerald-400">{binary}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm text-dark-400 block mb-2">
          Decimal value: <span className="text-primary-400 font-bold">{decimal}</span>
        </label>
        <input
          type="range"
          min={0}
          max={255}
          value={decimal}
          onChange={(e) => setDecimal(parseInt(e.target.value))}
          className="w-full accent-primary-500"
        />
        <div className="flex justify-between text-xs text-dark-500">
          <span>0</span>
          <span>255</span>
        </div>
      </div>

      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={showSteps}
          onChange={(e) => setShowSteps(e.target.checked)}
          className="accent-primary-500"
        />
        <span className="text-sm text-dark-400">Show conversion steps</span>
      </label>

      {showSteps && decimal > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {/* Decimal to Binary */}
          <div className="bg-dark-800 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-400 mb-2">Decimal → Binary</h5>
            <p className="text-xs text-dark-400 mb-2">Repeatedly divide by 2:</p>
            <div className="space-y-1 font-mono text-sm">
              {steps.map((step, i) => {
                const current = i === 0 ? decimal : steps[i - 1].quotient;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-dark-400 w-12">{current}</span>
                    <span className="text-dark-500">÷ 2 =</span>
                    <span className="text-dark-400 w-12">{step.quotient}</span>
                    <span className="text-dark-500">R</span>
                    <span className="text-emerald-400 font-bold">{step.remainder}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-dark-500 mt-2">Read remainders bottom-up: {binary}</p>
          </div>

          {/* Binary to Decimal */}
          <div className="bg-dark-800 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-400 mb-2">Binary → Decimal</h5>
            <p className="text-xs text-dark-400 mb-2">Sum of powers of 2:</p>
            <div className="space-y-1 font-mono text-sm">
              {expansion.filter(e => e.bit === '1').map((e, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-emerald-400">{e.bit}</span>
                  <span className="text-dark-500">× 2^{e.power} =</span>
                  <span className="text-primary-400">{e.value}</span>
                </div>
              ))}
              <div className="border-t border-dark-600 pt-1 mt-2">
                <span className="text-dark-500">Total =</span>
                <span className="text-primary-400 ml-2">{decimal}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Callout type="info">
        <p>
          <strong>Foundation of Computing:</strong> Every modern computer uses binary at its core.
          Leibniz's 1679 invention wouldn't find practical application until electronic computers
          emerged 270 years later—but his insight that all information can be encoded in 0s and 1s
          was prophetic.
        </p>
      </Callout>
    </div>
  );
}

// Leibniz Notation vs Newton Notation
function NotationComparison() {
  const [selectedConcept, setSelectedConcept] = useState(0);

  const concepts = [
    {
      name: "First Derivative",
      leibniz: "\\frac{dy}{dx}",
      newton: "\\dot{y}",
      leibnizDesc: "Ratio of infinitesimals dy and dx",
      newtonDesc: "Fluxion (rate of change with time)",
      winner: "leibniz",
      reason: "Can manipulate like a fraction; chain rule is intuitive",
    },
    {
      name: "Second Derivative",
      leibniz: "\\frac{d^2y}{dx^2}",
      newton: "\\ddot{y}",
      leibnizDesc: "Derivative of the derivative",
      newtonDesc: "Second fluxion",
      winner: "leibniz",
      reason: "Clearly shows what variable we're differentiating with respect to",
    },
    {
      name: "Integral",
      leibniz: "\\int y\\,dx",
      newton: "[y]",
      leibnizDesc: "Elongated S for 'summa' (sum)",
      newtonDesc: "Bracket notation (rarely used)",
      winner: "leibniz",
      reason: "The ∫ symbol and dx clearly show what's being integrated",
    },
    {
      name: "Chain Rule",
      leibniz: "\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}",
      newton: "\\dot{y} = \\dot{y}_u \\cdot \\dot{u}",
      leibnizDesc: "Fractions 'cancel' naturally",
      newtonDesc: "Requires separate notation",
      winner: "leibniz",
      reason: "The du terms 'cancel'—beautifully mnemonic",
    },
    {
      name: "Partial Derivatives",
      leibniz: "\\frac{\\partial f}{\\partial x}",
      newton: "f_x",
      leibnizDesc: "Curly ∂ distinguishes from ordinary d",
      newtonDesc: "Subscript notation",
      winner: "tie",
      reason: "Both notations are used today depending on context",
    },
  ];

  const concept = concepts[selectedConcept];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Calculus Notation: Leibniz vs Newton</h4>

      <p className="text-sm text-dark-300 mb-4">
        While Newton and Leibniz both invented calculus independently, Leibniz's notation
        proved far superior for most purposes. The mathematical community eventually adopted
        Leibniz's symbols, which we still use today.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {concepts.map((c, i) => (
          <button
            key={i}
            onClick={() => setSelectedConcept(i)}
            className={`px-3 py-1 rounded text-sm ${
              selectedConcept === i
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className={`bg-dark-800 p-4 rounded-lg ${
          concept.winner === 'leibniz' ? 'ring-2 ring-emerald-500' : ''
        }`}>
          <div className="flex items-center justify-between mb-2">
            <h5 className="font-semibold text-emerald-400">Leibniz</h5>
            {concept.winner === 'leibniz' && (
              <span className="text-xs bg-emerald-600 px-2 py-0.5 rounded">Preferred</span>
            )}
          </div>
          <div className="bg-dark-900 p-3 rounded mb-2">
            <MathBlock>{concept.leibniz}</MathBlock>
          </div>
          <p className="text-sm text-dark-400">{concept.leibnizDesc}</p>
        </div>

        <div className={`bg-dark-800 p-4 rounded-lg ${
          concept.winner === 'newton' ? 'ring-2 ring-blue-500' : ''
        }`}>
          <div className="flex items-center justify-between mb-2">
            <h5 className="font-semibold text-blue-400">Newton</h5>
            {concept.winner === 'newton' && (
              <span className="text-xs bg-blue-600 px-2 py-0.5 rounded">Preferred</span>
            )}
          </div>
          <div className="bg-dark-900 p-3 rounded mb-2">
            <MathBlock>{concept.newton}</MathBlock>
          </div>
          <p className="text-sm text-dark-400">{concept.newtonDesc}</p>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg">
        <p className="text-sm">
          <span className="text-amber-400 font-semibold">Why it matters: </span>
          <span className="text-dark-300">{concept.reason}</span>
        </p>
      </div>
    </div>
  );
}

// Leibniz Formula for Pi
function LeibnizPi() {
  const [terms, setTerms] = useState(100);
  const [partialSums, setPartialSums] = useState<number[]>([]);

  useEffect(() => {
    const sums: number[] = [];
    let sum = 0;
    for (let n = 0; n < terms; n++) {
      sum += Math.pow(-1, n) / (2 * n + 1);
      if (n < 20 || n % 10 === 0 || n === terms - 1) {
        sums.push(sum * 4);
      }
    }
    setPartialSums(sums);
  }, [terms]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Draw π reference line
    const piY = height / 2;
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, piY);
    ctx.lineTo(width, piY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Label
    ctx.fillStyle = '#10b981';
    ctx.font = '12px monospace';
    ctx.fillText('π ≈ 3.14159...', 10, piY - 10);

    // Calculate scale
    const margin = 40;
    const graphWidth = width - margin * 2;
    const graphHeight = height - margin * 2;
    const yCenter = height / 2;
    const yScale = graphHeight / 1.5; // Range roughly 2.5 to 4

    // Draw convergence
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();

    let sum = 0;
    for (let n = 0; n < terms; n++) {
      sum += Math.pow(-1, n) / (2 * n + 1);
      const piApprox = sum * 4;
      const x = margin + (n / (terms - 1)) * graphWidth;
      const y = yCenter - (piApprox - Math.PI) * yScale;

      if (n === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Axes labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px monospace';
    ctx.fillText('Terms: 0', margin, height - 10);
    ctx.fillText(`${terms}`, width - margin - 30, height - 10);
  }, [terms]);

  const finalApprox = partialSums[partialSums.length - 1] || 0;
  const error = Math.abs(finalApprox - Math.PI);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Leibniz Formula for π</h4>

      <p className="text-sm text-dark-300 mb-4">
        Leibniz discovered this beautiful infinite series for π/4, independently of
        the earlier work by Madhava and Gregory:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-4">
        <MathBlock>
          {`\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\frac{1}{9} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{2n+1}`}
        </MathBlock>
      </div>

      <canvas
        ref={canvasRef}
        width={500}
        height={200}
        className="w-full bg-dark-900 rounded-lg mb-4"
      />

      <div className="mb-4">
        <label className="text-sm text-dark-400 block mb-2">
          Number of terms: <span className="text-primary-400 font-bold">{terms}</span>
        </label>
        <input
          type="range"
          min={10}
          max={1000}
          value={terms}
          onChange={(e) => setTerms(parseInt(e.target.value))}
          className="w-full accent-primary-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Approximation</p>
          <p className="text-xl font-mono text-blue-400">{finalApprox.toFixed(8)}</p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Actual π</p>
          <p className="text-xl font-mono text-emerald-400">{Math.PI.toFixed(8)}</p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg text-center">
          <p className="text-xs text-dark-400">Error</p>
          <p className="text-xl font-mono text-amber-400">{error.toFixed(8)}</p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>Beautiful but Slow:</strong> The Leibniz series converges very slowly—you need
          about 300 terms for just 2 decimal places! But its elegance is undeniable: the odd
          numbers 1, 3, 5, 7... and alternating signs combine to give π.
        </p>
      </Callout>
    </div>
  );
}

// Product Rule and Differentiation Rules
function DifferentiationRules() {
  const [rule, setRule] = useState('product');

  const rules: Record<string, { name: string; formula: string; example: string; expanded: string }> = {
    product: {
      name: "Product Rule",
      formula: "d(uv) = u\\,dv + v\\,du",
      example: "d(x^2 \\sin x)",
      expanded: "= x^2 \\cdot \\cos x\\,dx + \\sin x \\cdot 2x\\,dx",
    },
    quotient: {
      name: "Quotient Rule",
      formula: "d\\left(\\frac{u}{v}\\right) = \\frac{v\\,du - u\\,dv}{v^2}",
      example: "d\\left(\\frac{x}{\\sin x}\\right)",
      expanded: "= \\frac{\\sin x \\cdot dx - x \\cdot \\cos x\\,dx}{\\sin^2 x}",
    },
    chain: {
      name: "Chain Rule",
      formula: "\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}",
      example: "\\frac{d}{dx}\\sin(x^2)",
      expanded: "= \\cos(x^2) \\cdot 2x",
    },
    power: {
      name: "Power Rule",
      formula: "d(x^n) = nx^{n-1}\\,dx",
      example: "d(x^5)",
      expanded: "= 5x^4\\,dx",
    },
  };

  const currentRule = rules[rule];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Leibniz's Differentiation Rules</h4>

      <p className="text-sm text-dark-300 mb-4">
        Leibniz developed the rules for differentiating products, quotients, and compositions
        of functions. His notation makes these rules intuitive—you can almost manipulate
        the differentials algebraically.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(rules).map(([key, r]) => (
          <button
            key={key}
            onClick={() => setRule(key)}
            className={`px-3 py-1 rounded text-sm ${
              rule === key
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300'
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      <div className="bg-dark-800 p-6 rounded-lg">
        <h5 className="text-lg font-semibold text-primary-400 mb-4">{currentRule.name}</h5>

        <div className="mb-4">
          <p className="text-xs text-dark-500 uppercase mb-2">Formula</p>
          <div className="bg-dark-900 p-3 rounded">
            <MathBlock>{currentRule.formula}</MathBlock>
          </div>
        </div>

        <div>
          <p className="text-xs text-dark-500 uppercase mb-2">Example</p>
          <div className="bg-dark-900 p-3 rounded">
            <MathBlock>{currentRule.example}</MathBlock>
            <MathBlock>{currentRule.expanded}</MathBlock>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>Symbolic Manipulation:</strong> Leibniz's dream was a <em>calculus ratiocinator</em>—a
          universal symbolic language where reasoning could be reduced to calculation. His calculus
          notation was a step toward this: mechanical rules that anyone can apply.
        </p>
      </Callout>
    </div>
  );
}

// Stepped Drum Calculator (Leibniz Wheel)
function LeibnizWheel() {
  const [num1, setNum1] = useState(123);
  const [num2, setNum2] = useState(456);
  const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply'>('add');
  const [currentStep, setCurrentStep] = useState(0);

  const calculate = (): number => {
    switch (operation) {
      case 'add': return num1 + num2;
      case 'subtract': return num1 - num2;
      case 'multiply': return num1 * num2;
    }
  };

  const getMultiplicationSteps = (): Array<{ digit: number; partial: number; shifted: number }> => {
    const steps: Array<{ digit: number; partial: number; shifted: number }> = [];
    const digits = num2.toString().split('').reverse();
    digits.forEach((d, i) => {
      const digit = parseInt(d);
      const partial = num1 * digit;
      const shifted = partial * Math.pow(10, i);
      steps.push({ digit, partial, shifted });
    });
    return steps;
  };

  const multSteps = operation === 'multiply' ? getMultiplicationSteps() : [];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#1f2937';
    ctx.fillRect(0, 0, width, height);

    // Draw calculator body
    ctx.fillStyle = '#78350f';
    ctx.fillRect(20, 20, width - 40, height - 40);

    // Decorative border
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 3;
    ctx.strokeRect(25, 25, width - 50, height - 50);

    // Draw display windows
    const drawWindow = (x: number, y: number, w: number, label: string, value: string) => {
      ctx.fillStyle = '#fef3c7';
      ctx.fillRect(x, y, w, 35);
      ctx.strokeStyle = '#92400e';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, w, 35);

      ctx.fillStyle = '#78350f';
      ctx.font = '10px serif';
      ctx.fillText(label, x, y - 5);

      ctx.fillStyle = '#1f2937';
      ctx.font = 'bold 20px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(value, x + w - 8, y + 25);
      ctx.textAlign = 'left';
    };

    drawWindow(50, 50, 150, 'First Number', num1.toString());
    drawWindow(220, 50, 150, 'Second Number', num2.toString());
    drawWindow(135, 110, 150, 'Result', calculate().toString());

    // Draw stepped drums representation
    ctx.fillStyle = '#92400e';
    ctx.font = '11px serif';
    ctx.fillText('Stepped Drum Mechanism', 50, 175);

    // Draw simplified drum visualization
    const drumX = 50;
    const drumY = 185;
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = '#d97706';
      ctx.fillRect(drumX + i * 40, drumY, 35, 50);
      ctx.strokeStyle = '#78350f';
      ctx.strokeRect(drumX + i * 40, drumY, 35, 50);

      // Teeth representation
      ctx.fillStyle = '#92400e';
      for (let j = 0; j < 9; j++) {
        const teethHeight = (j + 1) * 4;
        ctx.fillRect(drumX + i * 40 + 5, drumY + 45 - teethHeight, 25, 2);
      }
    }

    // Label
    ctx.fillStyle = '#fef3c7';
    ctx.font = '10px serif';
    ctx.fillText('Each drum has 0-9 teeth of varying lengths', drumX, drumY + 70);
  }, [num1, num2, operation]);

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Stepped Drum Calculator (1694)</h4>

      <p className="text-sm text-dark-300 mb-4">
        Leibniz invented the stepped drum (Leibniz wheel)—a mechanical component that made
        multiplication and division possible in calculating machines. His design influenced
        calculators for the next 300 years.
      </p>

      <canvas
        ref={canvasRef}
        width={420}
        height={280}
        className="w-full bg-dark-800 rounded-lg mb-4"
      />

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-sm text-dark-400 block mb-1">First Number</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Math.min(999, Math.max(0, parseInt(e.target.value) || 0)))}
            className="w-full bg-dark-700 rounded px-3 py-2 text-lg font-mono"
          />
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">Operation</label>
          <select
            value={operation}
            onChange={(e) => {
              setOperation(e.target.value as 'add' | 'subtract' | 'multiply');
              setCurrentStep(0);
            }}
            className="w-full bg-dark-700 rounded px-3 py-2"
          >
            <option value="add">Add (+)</option>
            <option value="subtract">Subtract (−)</option>
            <option value="multiply">Multiply (×)</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-dark-400 block mb-1">Second Number</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Math.min(999, Math.max(0, parseInt(e.target.value) || 0)))}
            className="w-full bg-dark-700 rounded px-3 py-2 text-lg font-mono"
          />
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg text-center">
        <p className="text-sm text-dark-400">Result</p>
        <p className="text-3xl font-mono text-emerald-400">
          {num1} {operation === 'add' ? '+' : operation === 'subtract' ? '−' : '×'} {num2} = {calculate()}
        </p>
      </div>

      {operation === 'multiply' && (
        <div className="mt-4 bg-dark-800 p-4 rounded-lg">
          <h5 className="font-semibold text-amber-400 mb-2">How Multiplication Works</h5>
          <p className="text-sm text-dark-400 mb-2">
            The machine performs repeated additions, shifting the result for each digit:
          </p>
          <div className="space-y-1 font-mono text-sm">
            {multSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-dark-500">{num1} × {step.digit}</span>
                <span className="text-dark-500">=</span>
                <span className="text-primary-400">{step.partial}</span>
                <span className="text-dark-500">→ shifted:</span>
                <span className="text-emerald-400">{step.shifted}</span>
              </div>
            ))}
            <div className="border-t border-dark-600 pt-1">
              <span className="text-dark-500">Sum:</span>
              <span className="text-emerald-400 ml-2">{calculate()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Universal Characteristic Demo
function UniversalCharacteristic() {
  const [showSymbolic, setShowSymbolic] = useState(true);

  const examples = [
    {
      natural: "All humans are mortal. Socrates is human. Therefore, Socrates is mortal.",
      symbolic: "∀x(H(x) → M(x)), H(s) ⊢ M(s)",
      leibniz: "If A ⊂ B and B ⊂ C, then A ⊂ C",
    },
    {
      natural: "If it rains, the ground is wet. It is raining. Therefore, the ground is wet.",
      symbolic: "P → Q, P ⊢ Q",
      leibniz: "Modus Ponens: (P → Q) ∧ P → Q",
    },
    {
      natural: "No reptiles have fur. All snakes are reptiles. Therefore, no snakes have fur.",
      symbolic: "∀x(R(x) → ¬F(x)), ∀x(S(x) → R(x)) ⊢ ∀x(S(x) → ¬F(x))",
      leibniz: "If A ∩ B = ∅ and C ⊂ A, then C ∩ B = ∅",
    },
  ];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">The Universal Characteristic</h4>

      <p className="text-sm text-dark-300 mb-4">
        Leibniz dreamed of a <em>characteristica universalis</em>—a universal symbolic language
        that could represent all human thought. Combined with a <em>calculus ratiocinator</em>
        (a reasoning calculus), disputes could be settled by calculation: "Let us calculate!"
      </p>

      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showSymbolic}
            onChange={(e) => setShowSymbolic(e.target.checked)}
            className="accent-primary-500"
          />
          <span className="text-sm text-dark-400">Show symbolic form</span>
        </label>
      </div>

      <div className="space-y-4">
        {examples.map((ex, i) => (
          <div key={i} className="bg-dark-800 p-4 rounded-lg">
            <p className="text-dark-300 mb-2">{ex.natural}</p>
            {showSymbolic && (
              <>
                <div className="bg-dark-900 p-2 rounded mt-2">
                  <p className="text-xs text-dark-500 mb-1">Modern Logic:</p>
                  <p className="font-mono text-emerald-400 text-sm">{ex.symbolic}</p>
                </div>
                <div className="bg-dark-900 p-2 rounded mt-2">
                  <p className="text-xs text-dark-500 mb-1">Leibniz's Vision:</p>
                  <p className="font-mono text-amber-400 text-sm">{ex.leibniz}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <Callout type="info">
        <p>
          <strong>Ahead of His Time:</strong> Leibniz's vision anticipated formal logic (Boole,
          Frege), symbolic computation (Turing), and even artificial intelligence. He imagined
          a machine that could reason—an idea that wouldn't be seriously pursued for 250 years.
        </p>
      </Callout>
    </div>
  );
}

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Gottfried Wilhelm Leibniz was the last universal genius—a polymath who made
        fundamental contributions to mathematics, philosophy, physics, logic, linguistics,
        and engineering. While Newton may have invented calculus first, Leibniz invented
        it <em>better</em>: his notation and approach shaped how mathematics is done today.
      </p>

      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "It is unworthy of excellent men to lose hours like slaves in the labor of
        calculation which could safely be relegated to anyone else if machines were used."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Gottfried Wilhelm Leibniz
        </footer>
      </blockquote>

      {/* Historical Context */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Universal Genius</h2>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Gottfried Wilhelm Leibniz (1646–1716) was born in Leipzig to a professor of
            moral philosophy. A child prodigy, he taught himself Latin at age 8 and was
            reading advanced texts by 12. He earned his doctorate in law at 20 and could
            have become a professor, but chose instead the life of a courtier and diplomat.
          </p>
          <p className="mb-4">
            Leibniz served as librarian and advisor to the Duke of Hanover for 40 years.
            This position gave him time to pursue his vast intellectual interests while
            corresponding with over 600 scholars across Europe. His letters alone fill
            thousands of pages—a treasure trove still being edited today.
          </p>
          <p>
            Unlike Newton's solitary genius, Leibniz was gregarious and collaborative.
            He founded the Berlin Academy of Sciences, proposed the Russian Academy, and
            worked tirelessly to advance knowledge across all fields.
          </p>
        </div>
        <Card className="md:w-1/3">
          <h4 className="font-semibold text-primary-400 mb-2">Quick Facts</h4>
          <ul className="text-sm space-y-2 text-dark-300">
            <li><strong>Born:</strong> July 1, 1646, Leipzig</li>
            <li><strong>Died:</strong> November 14, 1716</li>
            <li><strong>Professions:</strong> Diplomat, librarian, philosopher</li>
            <li><strong>Languages:</strong> Latin, German, French, and more</li>
            <li><strong>Legacy:</strong> "The last universal genius"</li>
          </ul>
        </Card>
      </div>

      <Callout type="info">
        <p>
          <strong>Diplomatic Career:</strong> Leibniz spent much of his life on diplomatic
          missions and legal projects. He tried to reunite the Catholic and Protestant
          churches, proposed a French invasion of Egypt (to divert Louis XIV from Germany),
          and traced the genealogy of the House of Brunswick back to ancient times.
        </p>
      </Callout>

      {/* Calculus Notation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Superior Notation</h2>

      <p className="mb-4">
        Leibniz developed calculus independently of Newton in the 1670s. While Newton
        kept his methods secret, Leibniz published in 1684 and 1686, introducing the
        notation we use today: <InlineMath>dy/dx</InlineMath> for derivatives and{' '}
        <InlineMath>\int</InlineMath> for integrals.
      </p>

      <NotationComparison />

      <p className="my-4">
        The superiority of Leibniz's notation isn't just aesthetic—it makes calculus
        <em> easier to use</em>. The chain rule looks like fraction cancellation, integration
        by substitution works smoothly, and the relationship between derivatives and
        differentials is clear.
      </p>

      {/* Binary System */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Binary Number System</h2>

      <p className="mb-4">
        In 1679, Leibniz invented the binary system—representing all numbers using just
        0 and 1. He saw theological significance: from nothing (0) and God (1), all
        creation emerges. He would have been amazed to learn that binary would become
        the foundation of all modern computing.
      </p>

      <BinaryDemo />

      {/* Leibniz Formula for Pi */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Leibniz Series</h2>

      <p className="mb-4">
        Leibniz discovered a remarkably simple infinite series for π, using only odd
        numbers and alternating signs. Though impractical for calculation (it converges
        very slowly), its elegance captivated mathematicians.
      </p>

      <LeibnizPi />

      {/* Differentiation Rules */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Rules of Differentiation</h2>

      <p className="mb-4">
        Leibniz systematized the rules for finding derivatives—product rule, quotient rule,
        chain rule. His notation makes these rules almost self-evident, turning calculus
        into a mechanical procedure anyone can learn.
      </p>

      <DifferentiationRules />

      {/* Calculating Machine */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Calculating Machine</h2>

      <p className="mb-4">
        Leibniz built one of the first calculating machines capable of all four arithmetic
        operations. His key innovation was the stepped drum (Leibniz wheel), which remained
        the standard mechanism for mechanical calculators until the electronic age.
      </p>

      <LeibnizWheel />

      {/* Universal Characteristic */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Dream of Universal Language</h2>

      <p className="mb-4">
        Leibniz's grandest vision was a <em>characteristica universalis</em>—a formal
        symbolic language that could represent all knowledge and reasoning. Combined with
        a calculating machine, disputes could be settled by computation.
      </p>

      <UniversalCharacteristic />

      {/* Philosophy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Philosophy and the Calculus Dispute</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Monads</h4>
          <p className="text-sm text-dark-300">
            Leibniz's metaphysics proposed that reality consists of "monads"—simple,
            indivisible units of consciousness. This strange philosophy actually
            influenced his mathematical thinking about infinitesimals.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">"Best of All Possible Worlds"</h4>
          <p className="text-sm text-dark-300">
            Leibniz argued that God, being perfect, created the best possible world.
            This optimism was famously satirized by Voltaire in <em>Candide</em>—but
            reflected Leibniz's faith in rational order.
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          <strong>The Priority Dispute:</strong> Newton accused Leibniz of plagiarizing calculus.
          The Royal Society (controlled by Newton) ruled in Newton's favor. Modern historians
          agree both invented calculus independently—but the dispute poisoned relations between
          British and Continental mathematics for a century, to Britain's detriment.
        </p>
      </Callout>

      {/* Other Contributions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Other Contributions</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Determinants</h4>
          <p className="text-sm text-dark-300">
            Leibniz introduced determinants for solving systems of linear equations,
            50 years before Cramer's rule was published.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Symbolic Logic</h4>
          <p className="text-sm text-dark-300">
            His work on formal logic anticipated Boolean algebra and modern computer
            science by two centuries.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Physics</h4>
          <p className="text-sm text-dark-300">
            Leibniz introduced the concept of kinetic energy (vis viva), the principle
            of sufficient reason, and conservation laws.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-400 mb-2">Geology</h4>
          <p className="text-sm text-dark-300">
            His <em>Protogaea</em> proposed that Earth had a molten origin and cooled
            over time—remarkably prescient for the 17th century.
          </p>
        </div>
      </div>

      {/* Bell's Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bell's Assessment</h2>

      <p className="mb-4">
        E.T. Bell portrays Leibniz as a genius whose breadth of interest sometimes
        hindered depth, but whose mathematical contributions were transformative:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-dark-300">
        "Leibniz was one of the supreme intellects of all time... Had he concentrated
        on mathematics alone he might have produced the greatest body of mathematical
        work ever turned out by one man."
      </blockquote>

      <p className="my-4">
        Bell emphasizes that Leibniz's notation triumphed because it was simply <em>better</em>.
        While Newton hoarded his discoveries, Leibniz shared freely, trained students, and
        built institutions. The Continental mathematicians who learned from Leibniz—the
        Bernoullis, Euler, and others—dominated the 18th century.
      </p>

      <Callout type="info">
        <p>
          <strong>A Lonely End:</strong> Despite his brilliance, Leibniz died largely forgotten.
          His employer had become George I of England and was embarrassed by association with
          Newton's "plagiarist." At Leibniz's funeral, only his secretary attended.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Gottfried Wilhelm Leibniz (1646–1716) independently invented calculus and
              developed the notation (dy/dx, ∫) that we use today.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Leibniz's notation proved superior to Newton's because it makes calculus
              rules intuitive—the chain rule looks like fraction cancellation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              He invented the binary number system (1679), which became the foundation
              of all modern digital computing.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              Leibniz built calculating machines and dreamed of a universal symbolic
              language—anticipating formal logic and computer science.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              The Newton-Leibniz priority dispute poisoned British mathematics for a
              century, while Continental mathematicians using Leibniz's methods flourished.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
