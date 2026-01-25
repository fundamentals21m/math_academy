/**
 * Interactive Modular Clock Visualizer
 * Demonstrates integers modulo n as positions on a clock face
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export function ModularClockVisualizer() {
  const [modulus, setModulus] = useState(12);
  const [valueA, setValueA] = useState(5);
  const [valueB, setValueB] = useState(8);
  const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply'>('add');
  const [showMultiples, setShowMultiples] = useState(false);
  const [selectedMultiple, setSelectedMultiple] = useState(1);

  // Calculate result based on operation
  const result = useMemo(() => {
    let r: number;
    switch (operation) {
      case 'add':
        r = (valueA + valueB) % modulus;
        break;
      case 'subtract':
        r = ((valueA - valueB) % modulus + modulus) % modulus;
        break;
      case 'multiply':
        r = (valueA * valueB) % modulus;
        break;
      default:
        r = 0;
    }
    return r;
  }, [valueA, valueB, modulus, operation]);

  // Calculate multiples of selected value
  const multiples = useMemo(() => {
    if (!showMultiples) return [];
    const mults: number[] = [];
    for (let i = 0; i < modulus; i++) {
      mults.push((selectedMultiple * i) % modulus);
    }
    return [...new Set(mults)];
  }, [showMultiples, selectedMultiple, modulus]);

  // Clock dimensions
  const cx = 200;
  const cy = 200;
  const radius = 150;
  const innerRadius = 120;

  // Calculate position on clock
  const getPosition = (value: number, r: number = radius) => {
    const angle = (value / modulus) * 2 * Math.PI - Math.PI / 2;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  // Operation symbols
  const opSymbols = { add: '+', subtract: '-', multiply: '×' };

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Modular Arithmetic Clock
      </h4>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">
            Modulus n = <span className="text-indigo-400 font-mono">{modulus}</span>
          </label>
          <input
            type="range"
            min={2}
            max={24}
            value={modulus}
            onChange={(e) => setModulus(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-300 mb-1">
            a = <span className="text-emerald-400 font-mono">{valueA}</span>
          </label>
          <input
            type="range"
            min={0}
            max={modulus - 1}
            value={Math.min(valueA, modulus - 1)}
            onChange={(e) => setValueA(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-300 mb-1">
            b = <span className="text-blue-400 font-mono">{valueB}</span>
          </label>
          <input
            type="range"
            min={0}
            max={modulus - 1}
            value={Math.min(valueB, modulus - 1)}
            onChange={(e) => setValueB(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Operation buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(['add', 'subtract', 'multiply'] as const).map((op) => (
          <button
            key={op}
            onClick={() => setOperation(op)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              operation === op
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
            }`}
          >
            {op === 'add' ? 'a + b' : op === 'subtract' ? 'a - b' : 'a × b'}
          </button>
        ))}
        <button
          onClick={() => setShowMultiples(!showMultiples)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showMultiples
              ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
          }`}
        >
          Show Subgroup
        </button>
      </div>

      {/* Subgroup selector */}
      {showMultiples && (
        <div className="mb-4">
          <label className="block text-sm text-dark-300 mb-1">
            Generator: <span className="text-violet-400 font-mono">{selectedMultiple}</span>
          </label>
          <input
            type="range"
            min={1}
            max={modulus - 1}
            value={selectedMultiple}
            onChange={(e) => setSelectedMultiple(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-violet-500"
          />
        </div>
      )}

      {/* SVG Clock */}
      <svg viewBox="0 0 400 400" className="w-full bg-dark-950 rounded-lg" style={{ maxHeight: '400px' }}>
        {/* Clock face */}
        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#374151" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={innerRadius} fill="none" stroke="#1f2937" strokeWidth={1} strokeDasharray="4,4" />

        {/* Tick marks and numbers */}
        {Array.from({ length: modulus }, (_, i) => {
          const pos = getPosition(i);
          const innerPos = getPosition(i, radius - 20);
          const isHighlighted = showMultiples && multiples.includes(i);

          return (
            <g key={i}>
              {/* Tick mark */}
              <line
                x1={innerPos.x}
                y1={innerPos.y}
                x2={pos.x}
                y2={pos.y}
                stroke={isHighlighted ? '#8b5cf6' : '#4b5563'}
                strokeWidth={isHighlighted ? 3 : 1}
              />
              {/* Number */}
              <text
                x={getPosition(i, radius + 20).x}
                y={getPosition(i, radius + 20).y + 5}
                textAnchor="middle"
                fill={isHighlighted ? '#8b5cf6' : '#9ca3af'}
                fontSize={14}
                fontWeight={isHighlighted ? 'bold' : 'normal'}
              >
                {i}
              </text>
            </g>
          );
        })}

        {/* Subgroup connections */}
        {showMultiples && multiples.length > 1 && (
          <motion.path
            d={multiples.map((m, i) => {
              const pos = getPosition(m, innerRadius - 10);
              return `${i === 0 ? 'M' : 'L'} ${pos.x} ${pos.y}`;
            }).join(' ') + ' Z'}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth={2}
            strokeDasharray="6,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        )}

        {/* Value A marker */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring' }}
        >
          <circle
            cx={getPosition(valueA, innerRadius - 30).x}
            cy={getPosition(valueA, innerRadius - 30).y}
            r={16}
            fill="#10b981"
            stroke="#6ee7b7"
            strokeWidth={2}
          />
          <text
            x={getPosition(valueA, innerRadius - 30).x}
            y={getPosition(valueA, innerRadius - 30).y + 5}
            textAnchor="middle"
            fill="white"
            fontSize={12}
            fontWeight="bold"
          >
            a
          </text>
        </motion.g>

        {/* Value B marker */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.1 }}
        >
          <circle
            cx={getPosition(valueB, innerRadius - 60).x}
            cy={getPosition(valueB, innerRadius - 60).y}
            r={16}
            fill="#3b82f6"
            stroke="#93c5fd"
            strokeWidth={2}
          />
          <text
            x={getPosition(valueB, innerRadius - 60).x}
            y={getPosition(valueB, innerRadius - 60).y + 5}
            textAnchor="middle"
            fill="white"
            fontSize={12}
            fontWeight="bold"
          >
            b
          </text>
        </motion.g>

        {/* Result marker */}
        <motion.g
          key={result}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
        >
          <circle
            cx={getPosition(result, 50).x}
            cy={getPosition(result, 50).y}
            r={20}
            fill="#fbbf24"
            stroke="#fef3c7"
            strokeWidth={3}
          />
          <text
            x={getPosition(result, 50).x}
            y={getPosition(result, 50).y + 6}
            textAnchor="middle"
            fill="#1f2937"
            fontSize={14}
            fontWeight="bold"
          >
            {result}
          </text>
        </motion.g>

        {/* Center label */}
        <text x={cx} y={cy + 5} textAnchor="middle" fill="#6b7280" fontSize={16}>
          Z/{modulus}Z
        </text>
      </svg>

      {/* Result display */}
      <div className="mt-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <div className="text-center font-mono text-lg">
          <span className="text-emerald-400">{valueA}</span>
          {' '}{opSymbols[operation]}{' '}
          <span className="text-blue-400">{valueB}</span>
          {' ≡ '}
          <span className="text-amber-400 font-bold">{result}</span>
          {' (mod '}
          <span className="text-indigo-400">{modulus}</span>
          {')'}
        </div>
        {operation === 'multiply' && (
          <div className="text-center text-sm text-dark-400 mt-2">
            {valueA} × {valueB} = {valueA * valueB} = {Math.floor((valueA * valueB) / modulus)} × {modulus} + {result}
          </div>
        )}
      </div>

      {/* Subgroup info */}
      {showMultiples && (
        <div className="mt-4 p-4 bg-violet-500/10 rounded-lg border border-violet-500/30">
          <h5 className="text-sm font-semibold text-violet-400 mb-2">
            Cyclic Subgroup ⟨{selectedMultiple}⟩:
          </h5>
          <p className="text-dark-200">
            {'{'} {multiples.sort((a, b) => a - b).join(', ')} {'}'}
          </p>
          <p className="text-sm text-dark-400 mt-2">
            Order: |⟨{selectedMultiple}⟩| = {multiples.length}
            {multiples.length === modulus && ' (generator of Z/nZ)'}
          </p>
        </div>
      )}

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Insight:</strong> Z/nZ is a cyclic group of order n under addition.
          An element g is a generator if and only if gcd(g, n) = 1. The number of
          generators equals φ(n) (Euler's totient function).
        </p>
      </div>
    </div>
  );
}
