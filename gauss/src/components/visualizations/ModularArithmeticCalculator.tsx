import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

export function ModularArithmeticCalculator({ className = '' }: Props) {
  const [a, setA] = useState(17);
  const [b, setB] = useState(5);
  const [m, setM] = useState(12);
  const [operation, setOperation] = useState<'+' | '-' | '*' | '^'>('+');

  const calculate = (): number => {
    let result: number;
    switch (operation) {
      case '+':
        result = (a + b) % m;
        break;
      case '-':
        result = ((a - b) % m + m) % m;
        break;
      case '*':
        result = (a * b) % m;
        break;
      case '^':
        result = modPow(a, b, m);
        break;
      default:
        result = 0;
    }
    return result;
  };

  const modPow = (base: number, exp: number, mod: number): number => {
    if (mod === 1) return 0;
    let result = 1;
    base = ((base % mod) + mod) % mod;
    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % mod;
      }
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
    }
    return result;
  };

  const result = calculate();
  const aResidue = ((a % m) + m) % m;
  const bResidue = ((b % m) + m) % m;

  const operationSymbol = operation === '^' ? '^' : operation;
  const operationName = operation === '^' ? 'exponentiation' :
    operation === '+' ? 'addition' :
    operation === '-' ? 'subtraction' : 'multiplication';

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Modular Arithmetic Calculator</h3>
      <p className="text-dark-400 text-sm mb-6">
        Explore modular {operationName}. See how numbers wrap around modulo m.
      </p>

      {/* Input controls */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">a</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">b</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">mod m</label>
          <input
            type="number"
            min="1"
            value={m}
            onChange={(e) => setM(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:border-primary-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Operation selector */}
      <div className="flex gap-2 mb-6">
        {(['+', '-', '*', '^'] as const).map((op) => (
          <button
            key={op}
            onClick={() => setOperation(op)}
            className={`flex-1 px-4 py-2 rounded-xl font-mono text-lg transition-colors ${
              operation === op
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {op === '^' ? 'a^b' : `a ${op} b`}
          </button>
        ))}
      </div>

      {/* Visual representation */}
      <div className="bg-dark-900/50 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-center gap-2 text-lg">
          <span className="text-amber-400 font-mono">{a}</span>
          <span className="text-dark-500">{operationSymbol}</span>
          <span className="text-purple-400 font-mono">{b}</span>
          <span className="text-dark-500">(mod</span>
          <span className="text-blue-400 font-mono">{m}</span>
          <span className="text-dark-500">)</span>
        </div>
      </div>

      {/* Result */}
      <motion.div
        key={`${a}-${b}-${m}-${operation}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 rounded-xl bg-gradient-to-r from-emerald-500/20 to-primary-500/20 border border-emerald-500/30"
      >
        <div className="text-center">
          <div className="text-4xl font-bold text-emerald-400 mb-2">{result}</div>
          <div className="text-dark-400 text-sm">
            Result: {a} {operationSymbol} {b} ≡ {result} (mod {m})
          </div>
        </div>
      </motion.div>

      {/* Explanation */}
      <div className="mt-6 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <h4 className="text-sm font-semibold text-dark-300 mb-2">Step by Step:</h4>
        <div className="text-sm text-dark-400 space-y-1">
          <p>1. {a} ≡ <span className="text-amber-400">{aResidue}</span> (mod {m})</p>
          <p>2. {b} ≡ <span className="text-purple-400">{bResidue}</span> (mod {m})</p>
          {operation === '+' && (
            <p>3. {aResidue} + {bResidue} = {aResidue + bResidue} ≡ <span className="text-emerald-400">{result}</span> (mod {m})</p>
          )}
          {operation === '-' && (
            <p>3. {aResidue} - {bResidue} = {aResidue - bResidue} ≡ <span className="text-emerald-400">{result}</span> (mod {m})</p>
          )}
          {operation === '*' && (
            <p>3. {aResidue} × {bResidue} = {aResidue * bResidue} ≡ <span className="text-emerald-400">{result}</span> (mod {m})</p>
          )}
          {operation === '^' && (
            <p>3. {aResidue}^{b} ≡ <span className="text-emerald-400">{result}</span> (mod {m})</p>
          )}
        </div>
      </div>
    </div>
  );
}
