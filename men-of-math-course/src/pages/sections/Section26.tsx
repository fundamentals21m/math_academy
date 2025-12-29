import { useState, useEffect, useRef } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid, MathBlock, Math } from '@/components/common';

// Interactive Boolean Operations Demo
function BooleanOperationsDemo() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);

  const operations = [
    { name: 'AND', symbol: '∧', result: a && b, description: 'True only if both are true' },
    { name: 'OR', symbol: '∨', result: a || b, description: 'True if at least one is true' },
    { name: 'NOT A', symbol: '¬', result: !a, description: 'Negation of A' },
    { name: 'XOR', symbol: '⊕', result: a !== b, description: 'True if exactly one is true' },
    { name: 'NAND', symbol: '↑', result: !(a && b), description: 'Not AND' },
    { name: 'NOR', symbol: '↓', result: !(a || b), description: 'Not OR' },
    { name: 'IMPLIES', symbol: '→', result: !a || b, description: 'If A then B' },
    { name: 'IFF', symbol: '↔', result: a === b, description: 'A if and only if B' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Boolean Operations</h4>

      <div className="flex gap-8 justify-center mb-6">
        <button
          onClick={() => setA(!a)}
          className={`w-20 h-20 rounded-lg text-2xl font-bold transition-all ${
            a ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          A = {a ? '1' : '0'}
        </button>
        <button
          onClick={() => setB(!b)}
          className={`w-20 h-20 rounded-lg text-2xl font-bold transition-all ${
            b ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          B = {b ? '1' : '0'}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {operations.map(op => (
          <div
            key={op.name}
            className={`p-3 rounded-lg border-2 ${
              op.result ? 'bg-green-900/30 border-green-600' : 'bg-dark-800 border-dark-600'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-mono text-lg">{op.symbol}</span>
              <span className={`text-xl font-bold ${op.result ? 'text-green-400' : 'text-dark-400'}`}>
                {op.result ? '1' : '0'}
              </span>
            </div>
            <p className="text-xs text-dark-400 mt-1">{op.name}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-dark-400 mt-4 text-center">
        Click A and B to toggle their values
      </p>
    </div>
  );
}

// Truth Table Generator
function TruthTableDemo() {
  const [expression, setExpression] = useState<'and' | 'or' | 'xor' | 'implies' | 'nand'>('and');

  const evaluate = (a: boolean, b: boolean) => {
    switch (expression) {
      case 'and': return a && b;
      case 'or': return a || b;
      case 'xor': return a !== b;
      case 'implies': return !a || b;
      case 'nand': return !(a && b);
    }
  };

  const symbols: Record<string, string> = {
    and: 'A ∧ B',
    or: 'A ∨ B',
    xor: 'A ⊕ B',
    implies: 'A → B',
    nand: 'A ↑ B'
  };

  const inputs: [boolean, boolean][] = [
    [false, false],
    [false, true],
    [true, false],
    [true, true]
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Truth Tables</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(symbols) as Array<keyof typeof symbols>).map(op => (
          <button
            key={op}
            onClick={() => setExpression(op as typeof expression)}
            className={`px-3 py-1 rounded ${
              expression === op ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {symbols[op]}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-center">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="px-4 py-2 text-dark-300">A</th>
              <th className="px-4 py-2 text-dark-300">B</th>
              <th className="px-4 py-2 text-accent-400">{symbols[expression]}</th>
            </tr>
          </thead>
          <tbody>
            {inputs.map(([a, b], i) => {
              const result = evaluate(a, b);
              return (
                <tr key={i} className="border-b border-dark-700">
                  <td className={`px-4 py-2 font-mono ${a ? 'text-green-400' : 'text-dark-400'}`}>
                    {a ? '1' : '0'}
                  </td>
                  <td className={`px-4 py-2 font-mono ${b ? 'text-green-400' : 'text-dark-400'}`}>
                    {b ? '1' : '0'}
                  </td>
                  <td className={`px-4 py-2 font-mono font-bold ${result ? 'text-green-400' : 'text-red-400'}`}>
                    {result ? '1' : '0'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Venn Diagram Visualization
function VennDiagramDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [operation, setOperation] = useState<'union' | 'intersection' | 'difference' | 'symmetric'>('intersection');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const r = 70;
    const offset = 45;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw universal set rectangle
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, width - 40, height - 40);
    ctx.fillStyle = '#374151';
    ctx.font = '12px sans-serif';
    ctx.fillText('U', 30, 35);

    // Helper to check if point is in circle
    const inCircle = (px: number, py: number, ccx: number, ccy: number) => {
      return Math.sqrt((px - ccx) ** 2 + (py - ccy) ** 2) <= r;
    };

    const inA = (px: number, py: number) => inCircle(px, py, cx - offset, cy);
    const inB = (px: number, py: number) => inCircle(px, py, cx + offset, cy);

    // Fill based on operation
    const imageData = ctx.createImageData(width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const a = inA(x, y);
        const b = inB(x, y);
        let fill = false;

        switch (operation) {
          case 'union': fill = a || b; break;
          case 'intersection': fill = a && b; break;
          case 'difference': fill = a && !b; break;
          case 'symmetric': fill = a !== b; break;
        }

        if (fill) {
          const i = (y * width + x) * 4;
          imageData.data[i] = 139;     // R
          imageData.data[i + 1] = 92;  // G
          imageData.data[i + 2] = 246; // B
          imageData.data[i + 3] = 150; // A
        }
      }
    }
    ctx.putImageData(imageData, 0, 0);

    // Draw circle outlines
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx - offset, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(cx + offset, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#22d3ee';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('A', cx - offset - 50, cy);
    ctx.fillStyle = '#f472b6';
    ctx.fillText('B', cx + offset + 40, cy);
  }, [operation]);

  const operations = [
    { id: 'union', label: 'A ∪ B', name: 'Union' },
    { id: 'intersection', label: 'A ∩ B', name: 'Intersection' },
    { id: 'difference', label: 'A \\ B', name: 'Difference' },
    { id: 'symmetric', label: 'A △ B', name: 'Symmetric Diff' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Set Operations as Boolean Algebra</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <canvas
          ref={canvasRef}
          width={300}
          height={220}
          className="bg-dark-950 rounded-lg"
        />

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {operations.map(op => (
              <button
                key={op.id}
                onClick={() => setOperation(op.id as typeof operation)}
                className={`px-3 py-2 rounded ${
                  operation === op.id ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'
                }`}
              >
                <span className="font-mono">{op.label}</span>
                <span className="text-xs block text-dark-400">{op.name}</span>
              </button>
            ))}
          </div>

          <div className="p-3 bg-dark-800 rounded text-sm text-dark-300">
            <p><strong>Boole's insight:</strong> Set operations and logical operations share the same algebraic structure!</p>
            <ul className="mt-2 space-y-1 text-xs text-dark-400">
              <li>Union (∪) ↔ OR (∨)</li>
              <li>Intersection (∩) ↔ AND (∧)</li>
              <li>Complement (') ↔ NOT (¬)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Logic Gate Simulator
function LogicGateDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const [gateType, setGateType] = useState<'AND' | 'OR' | 'XOR' | 'NAND'>('AND');

  const evaluate = () => {
    switch (gateType) {
      case 'AND': return inputA && inputB;
      case 'OR': return inputA || inputB;
      case 'XOR': return inputA !== inputB;
      case 'NAND': return !(inputA && inputB);
    }
  };

  const output = evaluate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);

    // Wire colors
    const onColor = '#22c55e';
    const offColor = '#374151';

    // Draw input wires
    ctx.strokeStyle = inputA ? onColor : offColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(100, 60);
    ctx.stroke();

    ctx.strokeStyle = inputB ? onColor : offColor;
    ctx.beginPath();
    ctx.moveTo(30, 120);
    ctx.lineTo(100, 120);
    ctx.stroke();

    // Draw gate body
    ctx.fillStyle = '#1f2937';
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;

    if (gateType === 'AND' || gateType === 'NAND') {
      ctx.beginPath();
      ctx.moveTo(100, 40);
      ctx.lineTo(100, 140);
      ctx.lineTo(150, 140);
      ctx.arc(150, 90, 50, Math.PI / 2, -Math.PI / 2, true);
      ctx.lineTo(100, 40);
      ctx.fill();
      ctx.stroke();
    } else if (gateType === 'OR' || gateType === 'XOR') {
      ctx.beginPath();
      ctx.moveTo(100, 40);
      ctx.quadraticCurveTo(130, 90, 100, 140);
      ctx.quadraticCurveTo(170, 130, 200, 90);
      ctx.quadraticCurveTo(170, 50, 100, 40);
      ctx.fill();
      ctx.stroke();

      if (gateType === 'XOR') {
        ctx.beginPath();
        ctx.moveTo(90, 40);
        ctx.quadraticCurveTo(120, 90, 90, 140);
        ctx.stroke();
      }
    }

    // NAND bubble
    if (gateType === 'NAND') {
      ctx.fillStyle = '#1f2937';
      ctx.beginPath();
      ctx.arc(205, 90, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Draw output wire
    ctx.strokeStyle = output ? onColor : offColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(gateType === 'NAND' ? 213 : 200, 90);
    ctx.lineTo(280, 90);
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px sans-serif';
    ctx.fillText('A', 15, 65);
    ctx.fillText('B', 15, 125);
    ctx.fillText('OUT', 250, 75);

    // Gate name
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(gateType, 150, 95);
    ctx.textAlign = 'left';
  }, [inputA, inputB, gateType, output]);

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Logic Gates: Boolean Algebra in Hardware</h4>

      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <canvas
            ref={canvasRef}
            width={300}
            height={180}
            className="bg-dark-950 rounded-lg"
          />

          <div className="flex gap-4 mt-4 justify-center">
            <button
              onClick={() => setInputA(!inputA)}
              className={`px-4 py-2 rounded ${inputA ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              A = {inputA ? '1' : '0'}
            </button>
            <button
              onClick={() => setInputB(!inputB)}
              className={`px-4 py-2 rounded ${inputB ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'}`}
            >
              B = {inputB ? '1' : '0'}
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {(['AND', 'OR', 'XOR', 'NAND'] as const).map(gate => (
              <button
                key={gate}
                onClick={() => setGateType(gate)}
                className={`px-3 py-2 rounded ${
                  gateType === gate ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'
                }`}
              >
                {gate}
              </button>
            ))}
          </div>

          <div className={`p-4 rounded-lg ${output ? 'bg-green-900/30 border-2 border-green-600' : 'bg-dark-800 border-2 border-dark-600'}`}>
            <p className="text-center">
              <span className="text-dark-400">Output: </span>
              <span className={`text-2xl font-bold ${output ? 'text-green-400' : 'text-dark-400'}`}>
                {output ? '1 (TRUE)' : '0 (FALSE)'}
              </span>
            </p>
          </div>

          <p className="text-xs text-dark-500 mt-4">
            Every computer processor is built from billions of these gates, implementing Boolean logic in silicon.
          </p>
        </div>
      </div>
    </div>
  );
}

// De Morgan's Laws Demo
function DeMorganDemo() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);

  // De Morgan's Laws
  const law1Left = !(a && b);
  const law1Right = !a || !b;
  const law2Left = !(a || b);
  const law2Right = !a && !b;

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">De Morgan's Laws</h4>

      <div className="flex gap-8 justify-center mb-6">
        <button
          onClick={() => setA(!a)}
          className={`w-16 h-16 rounded-lg text-xl font-bold ${
            a ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          A={a ? '1' : '0'}
        </button>
        <button
          onClick={() => setB(!b)}
          className={`w-16 h-16 rounded-lg text-xl font-bold ${
            b ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-400'
          }`}
        >
          B={b ? '1' : '0'}
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="text-dark-400 mb-2">First Law: ¬(A ∧ B) = ¬A ∨ ¬B</p>
          <div className="flex items-center justify-center gap-4 font-mono">
            <span className={law1Left ? 'text-green-400' : 'text-red-400'}>
              ¬({a ? '1' : '0'} ∧ {b ? '1' : '0'}) = {law1Left ? '1' : '0'}
            </span>
            <span className="text-dark-500">=</span>
            <span className={law1Right ? 'text-green-400' : 'text-red-400'}>
              {!a ? '1' : '0'} ∨ {!b ? '1' : '0'} = {law1Right ? '1' : '0'}
            </span>
            <span className={law1Left === law1Right ? 'text-green-400' : 'text-red-400'}>
              {law1Left === law1Right ? '✓' : '✗'}
            </span>
          </div>
        </div>

        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="text-dark-400 mb-2">Second Law: ¬(A ∨ B) = ¬A ∧ ¬B</p>
          <div className="flex items-center justify-center gap-4 font-mono">
            <span className={law2Left ? 'text-green-400' : 'text-red-400'}>
              ¬({a ? '1' : '0'} ∨ {b ? '1' : '0'}) = {law2Left ? '1' : '0'}
            </span>
            <span className="text-dark-500">=</span>
            <span className={law2Right ? 'text-green-400' : 'text-red-400'}>
              {!a ? '1' : '0'} ∧ {!b ? '1' : '0'} = {law2Right ? '1' : '0'}
            </span>
            <span className={law2Left === law2Right ? 'text-green-400' : 'text-red-400'}>
              {law2Left === law2Right ? '✓' : '✗'}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-400 mt-4 text-center">
        These laws show how to distribute negation over AND and OR — essential for simplifying Boolean expressions.
      </p>
    </div>
  );
}

// Boolean Algebra Laws
function BooleanLawsDemo() {
  const [selectedLaw, setSelectedLaw] = useState(0);

  const laws = [
    { name: 'Identity', and: 'A ∧ 1 = A', or: 'A ∨ 0 = A' },
    { name: 'Null', and: 'A ∧ 0 = 0', or: 'A ∨ 1 = 1' },
    { name: 'Idempotent', and: 'A ∧ A = A', or: 'A ∨ A = A' },
    { name: 'Inverse', and: 'A ∧ ¬A = 0', or: 'A ∨ ¬A = 1' },
    { name: 'Commutative', and: 'A ∧ B = B ∧ A', or: 'A ∨ B = B ∨ A' },
    { name: 'Associative', and: '(A ∧ B) ∧ C = A ∧ (B ∧ C)', or: '(A ∨ B) ∨ C = A ∨ (B ∨ C)' },
    { name: 'Distributive', and: 'A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)', or: 'A ∨ (B ∧ C) = (A ∨ B) ∧ (A ∨ C)' },
    { name: 'Absorption', and: 'A ∧ (A ∨ B) = A', or: 'A ∨ (A ∧ B) = A' },
    { name: 'De Morgan', and: '¬(A ∧ B) = ¬A ∨ ¬B', or: '¬(A ∨ B) = ¬A ∧ ¬B' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Laws of Boolean Algebra</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {laws.map((law, i) => (
          <button
            key={i}
            onClick={() => setSelectedLaw(i)}
            className={`px-3 py-1 rounded text-sm ${
              selectedLaw === i ? 'bg-accent-600 text-white' : 'bg-dark-700 text-dark-300'
            }`}
          >
            {law.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="text-sm text-dark-500 mb-2">AND form:</p>
          <p className="font-mono text-lg text-accent-400">{laws[selectedLaw].and}</p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="text-sm text-dark-500 mb-2">OR form:</p>
          <p className="font-mono text-lg text-accent-400">{laws[selectedLaw].or}</p>
        </div>
      </div>

      <p className="text-sm text-dark-400 mt-4">
        These laws form a complete algebraic system. Any Boolean expression can be simplified
        using these rules — the foundation of digital circuit optimization.
      </p>
    </div>
  );
}

// Binary Calculator
function BinaryCalculatorDemo() {
  const [bits, setBits] = useState([false, false, false, false, false, false, false, false]);

  const toggleBit = (index: number) => {
    const newBits = [...bits];
    newBits[index] = !newBits[index];
    setBits(newBits);
  };

  const decimal = bits.reduce((acc, bit, i) => acc + (bit ? Math.pow(2, 7 - i) : 0), 0);
  const binary = bits.map(b => b ? '1' : '0').join('');

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Binary Representation: Boolean Values as Numbers</h4>

      <div className="flex justify-center gap-1 mb-4">
        {bits.map((bit, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-xs text-dark-500 mb-1">2^{7 - i}</span>
            <button
              onClick={() => toggleBit(i)}
              className={`w-10 h-12 rounded font-mono text-lg font-bold ${
                bit ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-400'
              }`}
            >
              {bit ? '1' : '0'}
            </button>
            <span className="text-xs text-dark-500 mt-1">{Math.pow(2, 7 - i)}</span>
          </div>
        ))}
      </div>

      <div className="text-center space-y-2">
        <p className="font-mono text-xl">
          <span className="text-dark-400">Binary: </span>
          <span className="text-accent-400">{binary}</span>
        </p>
        <p className="font-mono text-3xl">
          <span className="text-dark-400">Decimal: </span>
          <span className="text-green-400">{decimal}</span>
        </p>
      </div>

      <p className="text-sm text-dark-400 mt-4 text-center">
        Click bits to toggle. Boole's algebra of 0 and 1 became the basis of digital computing.
      </p>
    </div>
  );
}

// Career Timeline
function CareerTimeline() {
  const events = [
    { year: '1815', event: 'Born in Lincoln, England, to a shoemaker' },
    { year: '1831', event: 'At 16, becomes assistant teacher to support his family' },
    { year: '1835', event: 'Opens his own school at age 20' },
    { year: '1838', event: 'First mathematical paper published' },
    { year: '1844', event: 'Medal from Royal Society for paper on differential equations' },
    { year: '1847', event: 'Publishes "Mathematical Analysis of Logic"' },
    { year: '1849', event: 'Appointed Professor at Queens College, Cork (no degree!)' },
    { year: '1854', event: 'Publishes masterwork "An Investigation of the Laws of Thought"' },
    { year: '1855', event: 'Marries Mary Everest (niece of George Everest)' },
    { year: '1864', event: 'Dies at 49 after walking in the rain to lecture' },
  ];

  return (
    <div className="bg-dark-900 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Self-Taught Genius</h4>

      <div className="relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-accent-600"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative pl-24 pb-4">
            <div className="absolute left-0 w-12 text-right text-sm font-mono text-dark-400">
              {event.year}
            </div>
            <div className={`absolute left-14 w-5 h-5 rounded-full border-4 border-dark-900 ${
              event.year === '1854' ? 'bg-green-500' : 'bg-accent-600'
            }`}></div>
            <p className="text-dark-200">{event.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Section26() {
  return (
    <LessonLayout
      title="George Boole"
      sectionNumber={26}
      prevSection={25}
      nextSection={27}
    >
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-accent-900/50 text-accent-300 rounded-full text-sm mb-4">
          Chapter 26: The Algebra of Logic
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4">
          George Boole
        </h1>
        <p className="text-xl text-dark-300">
          The self-taught genius who reduced thought to algebra
        </p>
        <p className="text-dark-400 mt-2">1815 – 1864</p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <Card variant="primary">
          <p className="text-lg text-dark-200 leading-relaxed">
            George Boole, the son of a shoemaker, taught himself mathematics, Latin, and Greek.
            He never attended university, yet became a professor. His great insight was to treat
            logic as algebra: TRUE and FALSE as 1 and 0, with AND, OR, and NOT as operations.
            This "Boolean algebra" seemed like a philosophical curiosity in 1854. A century
            later, it became the foundation of every digital computer on Earth.
          </p>
        </Card>
      </section>

      {/* Career */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">From Shoemaker's Son to Professor</h2>

        <CareerTimeline />

        <Callout type="note" className="mt-6">
          Boole never earned a university degree. He was entirely self-taught, learning mathematics
          from library books while running a school. Yet he was appointed professor at Queens
          College, Cork, on the strength of his published research.
        </Callout>
      </section>

      {/* Boolean Operations */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Boolean Operations</h2>

        <p className="text-dark-300 mb-6">
          Boole's fundamental insight: logical statements can be combined using operations that
          follow algebraic rules. TRUE is 1, FALSE is 0, and operations like AND, OR, NOT work
          like arithmetic operations.
        </p>

        <BooleanOperationsDemo />

        <div className="mt-6">
          <MathBlock
            tex="A \land B = AB, \quad A \lor B = A + B - AB, \quad \neg A = 1 - A"
            description="Boole's original notation used multiplication for AND and addition-like operations for OR"
          />
        </div>
      </section>

      {/* Truth Tables */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Truth Tables</h2>

        <p className="text-dark-300 mb-6">
          Any Boolean function can be completely specified by listing its output for every
          possible combination of inputs. This exhaustive listing is called a truth table.
        </p>

        <TruthTableDemo />
      </section>

      {/* Venn Diagrams */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Sets and Logic</h2>

        <p className="text-dark-300 mb-6">
          Boole recognized that set operations and logical operations have the same algebraic
          structure. Union corresponds to OR, intersection to AND, and complement to NOT.
        </p>

        <VennDiagramDemo />
      </section>

      {/* Boolean Laws */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Laws of Boolean Algebra</h2>

        <p className="text-dark-300 mb-6">
          Boolean algebra obeys a set of laws analogous to ordinary algebra, but with some
          surprising differences. These laws form the foundation for simplifying logical
          expressions and optimizing digital circuits.
        </p>

        <BooleanLawsDemo />
      </section>

      {/* De Morgan's Laws */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">De Morgan's Laws</h2>

        <p className="text-dark-300 mb-6">
          These fundamental laws show how negation distributes over AND and OR. They're
          essential for manipulating Boolean expressions and for digital circuit design.
        </p>

        <DeMorganDemo />

        <div className="mt-6">
          <MathBlock
            tex="\overline{A \cdot B} = \bar{A} + \bar{B}, \quad \overline{A + B} = \bar{A} \cdot \bar{B}"
            description="De Morgan's Laws in circuit notation"
          />
        </div>
      </section>

      {/* Logic Gates */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Logic Gates</h2>

        <p className="text-dark-300 mb-6">
          In the 20th century, engineers realized that Boolean operations could be implemented
          in electronic circuits. These "logic gates" became the building blocks of all digital
          computers — Boole's abstract algebra made physical.
        </p>

        <LogicGateDemo />

        <Callout type="important" className="mt-6">
          Every smartphone, laptop, and data center runs on Boolean logic. The CPU in your
          computer contains billions of logic gates, each implementing Boole's simple algebra
          of TRUE and FALSE.
        </Callout>
      </section>

      {/* Binary Numbers */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Binary Representation</h2>

        <p className="text-dark-300 mb-6">
          Boole's algebra of 1 and 0 connects naturally to binary numbers. Each bit is a
          Boolean value, and arithmetic operations can be built from Boolean gates.
        </p>

        <BinaryCalculatorDemo />
      </section>

      {/* The Laws of Thought */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">The Laws of Thought</h2>

        <p className="text-dark-300 mb-6">
          Boole's 1854 masterwork, "An Investigation of the Laws of Thought," aimed to reduce
          human reasoning itself to mathematical calculation. He saw his algebra as a key to
          understanding the mind.
        </p>

        <CardGrid columns={2}>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">The Goal</h4>
            <p className="text-sm text-dark-400">
              "To investigate the fundamental laws of those operations of the mind by which
              reasoning is performed; to give expression to them in the symbolic language of
              a Calculus."
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">The Method</h4>
            <p className="text-sm text-dark-400">
              Represent propositions by symbols, combine them algebraically, and derive
              conclusions by symbolic manipulation — reducing logic to calculation.
            </p>
          </Card>
        </CardGrid>

        <blockquote className="mt-6 text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4">
          "No general method for the solution of questions in the theory of probabilities can
          be established which does not explicitly recognise, not only the special numerical
          bases of the science, but also those universal laws of thought which are the basis
          of all reasoning."
          <footer className="text-sm text-dark-500 mt-2">— George Boole, "The Laws of Thought"</footer>
        </blockquote>
      </section>

      {/* Impact on Computing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">From Philosophy to Silicon</h2>

        <p className="text-dark-300 mb-6">
          For decades, Boolean algebra was seen as a curiosity of mathematical logic. Then
          Claude Shannon, in his 1937 master's thesis, showed that Boolean algebra was the
          perfect tool for designing electrical switching circuits.
        </p>

        <CardGrid columns={3}>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">1854</h4>
            <p className="text-sm text-dark-400">
              Boole publishes "The Laws of Thought" — seen as philosophy
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">1937</h4>
            <p className="text-sm text-dark-400">
              Shannon shows Boolean algebra describes switching circuits
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold text-dark-100 mb-2">Today</h4>
            <p className="text-sm text-dark-400">
              Billions of transistors implement Boolean logic in every chip
            </p>
          </Card>
        </CardGrid>

        <Callout type="note" className="mt-6">
          Shannon called his discovery "the most important master's thesis of the 20th century."
          He showed that Boole's abstract algebra was exactly what engineers needed to design
          digital computers systematically.
        </Callout>
      </section>

      {/* Bell's Assessment */}
      <section className="mb-12">
        <Card variant="secondary">
          <h3 className="text-xl font-semibold text-dark-100 mb-4">Bell's Assessment</h3>

          <blockquote className="text-lg text-dark-300 italic border-l-4 border-accent-500 pl-4 mb-4">
            "Boole's work was the first serious attempt to apply the methods of algebra to
            logic... He reduced the whole of traditional logic to a simple calculus, and opened
            the way for the symbolic logic which was to revolutionize the foundations of mathematics."
          </blockquote>

          <p className="text-dark-400">
            Bell wrote before the computer age, so he emphasized Boolean algebra's role in
            mathematical logic rather than digital computing. But he recognized Boole's
            originality in treating logic as algebra — the insight that would later transform
            technology.
          </p>
        </Card>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-dark-100 mb-6">Major Contributions</h2>

        <CardGrid columns={2}>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Boolean Algebra</h4>
            <p className="text-sm text-dark-400">
              The algebra of TRUE/FALSE (1/0) with AND, OR, NOT operations — foundation of
              digital logic and computer science
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Symbolic Logic</h4>
            <p className="text-sm text-dark-400">
              First systematic treatment of logic as mathematics, anticipating Frege, Russell,
              and modern mathematical logic
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Probability Theory</h4>
            <p className="text-sm text-dark-400">
              Applied algebraic methods to probability, connecting logic and chance in
              "The Laws of Thought"
            </p>
          </Card>
          <Card variant="primary">
            <h4 className="font-semibold text-dark-100 mb-2">Differential Equations</h4>
            <p className="text-sm text-dark-400">
              Made significant contributions to the theory of linear differential equations,
              winning Royal Society recognition
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
                Boolean algebra treats logic as algebra: TRUE = 1, FALSE = 0, with AND (∧),
                OR (∨), and NOT (¬) as operations
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                De Morgan's Laws: <Math tex="\neg(A \land B) = \neg A \lor \neg B" /> and
                <Math tex="\neg(A \lor B) = \neg A \land \neg B" />
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Set operations (∪, ∩, complement) and logical operations (∨, ∧, ¬) share
                the same algebraic structure
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Logic gates (AND, OR, NOT, XOR, NAND) implement Boolean operations in hardware —
                the basis of all digital computers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>
                Boole was entirely self-taught and never earned a degree, yet became a
                professor and revolutionized logic
              </span>
            </li>
          </ul>
        </Card>
      </section>
    </LessonLayout>
  );
}
