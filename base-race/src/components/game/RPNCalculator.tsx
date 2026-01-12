// =============================================================================
// RPN CALCULATOR
// =============================================================================
// Reverse Polish Notation calculator widget. Stack-based calculation where
// you enter numbers first, then operations act on the stack.
// Example: 47 7 div → pushes 47, pushes 7, then computes floor(47 / 7) = 6
// =============================================================================

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RPNCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RPNCalculator({ isOpen, onClose }: RPNCalculatorProps) {
  const [stack, setStack] = useState<number[]>([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const pushNumber = useCallback(() => {
    if (input.trim() === '') return;

    const num = parseFloat(input);
    if (isNaN(num)) {
      setError('Invalid number');
      return;
    }

    setStack(prev => [...prev, num]);
    setInput('');
    setError(null);
  }, [input]);

  const handleClear = useCallback(() => {
    setStack([]);
    setInput('');
    setError(null);
  }, []);

  const performOperation = useCallback((op: string) => {
    setError(null);

    if (op === 'clear') {
      handleClear();
      return;
    }

    if (op === 'drop') {
      setStack(prev => prev.slice(0, -1));
      return;
    }

    if (op === 'swap') {
      if (stack.length < 2) {
        setError('Need 2 numbers to swap');
        return;
      }
      setStack(prev => {
        const newStack = [...prev];
        const a = newStack.pop()!;
        const b = newStack.pop()!;
        return [...newStack, a, b];
      });
      return;
    }

    if (op === 'dup') {
      if (stack.length < 1) {
        setError('Need 1 number to duplicate');
        return;
      }
      setStack(prev => [...prev, prev[prev.length - 1]]);
      return;
    }

    if (op === 'floor') {
      if (stack.length < 1) {
        setError('Need 1 number');
        return;
      }
      setStack(prev => {
        const newStack = [...prev];
        const a = newStack.pop()!;
        return [...newStack, Math.floor(a)];
      });
      return;
    }

    // Binary operations need 2 numbers
    if (stack.length < 2) {
      setError('Need 2 numbers');
      return;
    }

    setStack(prev => {
      const newStack = [...prev];
      const b = newStack.pop()!;
      const a = newStack.pop()!;

      let result: number;
      switch (op) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          if (b === 0) {
            setError('Division by zero');
            return prev;
          }
          result = a / b;
          break;
        case '^':
          result = Math.pow(a, b);
          break;
        case 'div':
          if (b === 0) {
            setError('Division by zero');
            return prev;
          }
          result = Math.floor(a / b);
          break;
        default:
          return prev;
      }

      return [...newStack, result];
    });
  }, [stack, handleClear]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        pushNumber();
      }
    }
  }, [input, pushNumber]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed right-4 top-20 w-64 bg-dark-800 border border-dark-600 rounded-xl shadow-2xl z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-dark-600">
            <h3 className="text-sm font-bold text-white">RPN Calculator</h3>
            <button
              onClick={onClose}
              className="text-dark-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Stack Display */}
          <div className="p-3 border-b border-dark-600">
            <div className="text-xs text-dark-400 mb-1">Stack (bottom → top)</div>
            <div className="bg-dark-900 rounded-lg p-2 min-h-[60px] max-h-[100px] overflow-y-auto font-mono text-sm">
              {stack.length === 0 ? (
                <span className="text-dark-500">empty</span>
              ) : (
                <div className="flex flex-wrap gap-1">
                  {stack.map((n, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded ${
                        i === stack.length - 1
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'bg-dark-700 text-dark-300'
                      }`}
                    >
                      {Number.isInteger(n) ? n : n.toFixed(4)}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="px-3 py-2 text-xs text-red-400 bg-red-500/10">
              {error}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-b border-dark-600">
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                inputMode="numeric"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter number"
                className="flex-1 px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white text-sm font-mono focus:border-cyan-500 focus:outline-none"
              />
              <button
                onClick={pushNumber}
                disabled={!input.trim()}
                className="px-3 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:bg-dark-600 text-white text-sm font-bold rounded-lg transition-colors"
              >
                Push
              </button>
            </div>

            {/* Number Keypad */}
            <div className="grid grid-cols-3 gap-1">
              {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setInput(prev => prev + n.toString())}
                  className="py-2.5 bg-dark-700 hover:bg-dark-600 text-white font-bold rounded-lg transition-colors"
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setInput(prev => prev.slice(0, -1))}
                className="py-2.5 bg-dark-700 hover:bg-dark-600 text-dark-400 font-bold rounded-lg transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setInput(prev => prev + '0')}
                className="py-2.5 bg-dark-700 hover:bg-dark-600 text-white font-bold rounded-lg transition-colors"
              >
                0
              </button>
              <button
                onClick={() => setInput('')}
                className="py-2.5 bg-dark-700 hover:bg-dark-600 text-dark-400 text-sm rounded-lg transition-colors"
              >
                CLR
              </button>
            </div>
          </div>

          {/* Operations */}
          <div className="p-3 space-y-2">
            {/* Arithmetic */}
            <div className="grid grid-cols-4 gap-1">
              {['+', '-', '*', '/'].map((op) => (
                <button
                  key={op}
                  onClick={() => performOperation(op)}
                  className="py-2 bg-dark-700 hover:bg-dark-600 text-white font-bold rounded-lg transition-colors"
                >
                  {op}
                </button>
              ))}
            </div>

            {/* Special ops */}
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={() => performOperation('floor')}
                className="py-2 bg-dark-700 hover:bg-dark-600 text-white font-bold rounded-lg transition-colors"
              >
                floor
              </button>
              <button
                onClick={() => performOperation('div')}
                className="py-2 bg-dark-700 hover:bg-dark-600 text-white font-bold rounded-lg transition-colors"
              >
                div
              </button>
              <button
                onClick={() => performOperation('^')}
                className="py-2 bg-dark-700 hover:bg-dark-600 text-white font-bold rounded-lg transition-colors"
              >
                ^
              </button>
            </div>

            {/* Stack manipulation */}
            <div className="grid grid-cols-4 gap-1">
              <button
                onClick={() => performOperation('dup')}
                className="py-1.5 bg-dark-700 hover:bg-dark-600 text-dark-300 text-xs rounded-lg transition-colors"
              >
                dup
              </button>
              <button
                onClick={() => performOperation('swap')}
                className="py-1.5 bg-dark-700 hover:bg-dark-600 text-dark-300 text-xs rounded-lg transition-colors"
              >
                swap
              </button>
              <button
                onClick={() => performOperation('drop')}
                className="py-1.5 bg-dark-700 hover:bg-dark-600 text-dark-300 text-xs rounded-lg transition-colors"
              >
                drop
              </button>
              <button
                onClick={handleClear}
                className="py-1.5 bg-red-600/50 hover:bg-red-600 text-white text-xs rounded-lg transition-colors"
              >
                clear
              </button>
            </div>
          </div>

          {/* Help */}
          <div className="p-3 border-t border-dark-600">
            <div className="text-xs text-dark-500">
              <span className="text-dark-400">Example:</span> 47 Enter 7 Enter div → 6
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Toggle button to show/hide the calculator
export function RPNCalculatorToggle({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed right-4 bottom-4 w-12 h-12 bg-dark-700 hover:bg-dark-600 border border-dark-500 rounded-full shadow-lg flex items-center justify-center text-dark-300 hover:text-white transition-colors z-40"
      title="RPN Calculator"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </button>
  );
}
