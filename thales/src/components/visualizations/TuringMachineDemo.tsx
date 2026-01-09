import { useState, useCallback } from 'react';

interface Props {
  className?: string;
}

type State = 'q0' | 'q1' | 'q2' | 'qH';
type Symbol = '0' | '1' | 'B';
type Direction = 'L' | 'R';

interface Transition {
  write: Symbol;
  move: Direction;
  nextState: State;
}

type TransitionTable = Record<State, Record<Symbol, Transition | null>>;

// Simple binary increment machine
const binaryIncrement: TransitionTable = {
  q0: {
    '0': { write: '0', move: 'R', nextState: 'q0' },
    '1': { write: '1', move: 'R', nextState: 'q0' },
    'B': { write: 'B', move: 'L', nextState: 'q1' },
  },
  q1: {
    '0': { write: '1', move: 'R', nextState: 'qH' }, // 0 + 1 = 1, done
    '1': { write: '0', move: 'L', nextState: 'q1' }, // 1 + 1 = 0, carry
    'B': { write: '1', move: 'R', nextState: 'qH' }, // overflow, add leading 1
  },
  q2: {
    '0': null,
    '1': null,
    'B': null,
  },
  qH: {
    '0': null,
    '1': null,
    'B': null,
  },
};

export function TuringMachineDemo({ className = '' }: Props) {
  const [tape, setTape] = useState<Symbol[]>(['B', '1', '0', '1', '1', 'B', 'B', 'B']);
  const [headPos, setHeadPos] = useState(1);
  const [state, setState] = useState<State>('q0');
  const [steps, setSteps] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const reset = useCallback(() => {
    setTape(['B', '1', '0', '1', '1', 'B', 'B', 'B']);
    setHeadPos(1);
    setState('q0');
    setSteps(0);
    setHistory([]);
    setIsRunning(false);
  }, []);

  const step = useCallback(() => {
    if (state === 'qH') return;

    const currentSymbol = tape[headPos];
    const transition = binaryIncrement[state][currentSymbol];

    if (!transition) {
      setState('qH');
      return;
    }

    // Record history
    const historyEntry = `${state}: read '${currentSymbol}' → write '${transition.write}', move ${transition.move}, go to ${transition.nextState}`;
    setHistory(h => [...h.slice(-5), historyEntry]);

    // Apply transition
    const newTape = [...tape];
    newTape[headPos] = transition.write;
    setTape(newTape);

    const newPos = headPos + (transition.move === 'R' ? 1 : -1);
    setHeadPos(Math.max(0, Math.min(newTape.length - 1, newPos)));

    setState(transition.nextState);
    setSteps(s => s + 1);
  }, [state, tape, headPos]);

  const run = useCallback(() => {
    setIsRunning(true);
  }, []);

  // Auto-run when isRunning
  useState(() => {
    if (isRunning && state !== 'qH') {
      const timer = setTimeout(() => {
        step();
      }, 500);
      return () => clearTimeout(timer);
    } else if (state === 'qH') {
      setIsRunning(false);
    }
  });

  // Manual run step for demo
  const runOneStep = () => {
    if (state !== 'qH') step();
  };

  // State descriptions
  const stateDescriptions: Record<State, string> = {
    q0: 'Moving right to find end of number',
    q1: 'Adding 1 (carrying if needed)',
    q2: 'Unused state',
    qH: 'HALT - computation complete!',
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Turing Machine</h3>

      <p className="text-dark-300 mb-6">
        A Turing machine has a tape, a head that reads/writes, and states with transition rules.
        This simple machine increments a binary number by 1.
      </p>

      {/* Tape visualization */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <div className="flex justify-center gap-1 mb-2">
          {tape.map((symbol, i) => (
            <div
              key={i}
              className={`
                w-12 h-12 flex items-center justify-center text-xl font-mono rounded
                ${i === headPos
                  ? 'bg-orange-500 text-white ring-2 ring-orange-300'
                  : 'bg-dark-700 text-dark-300'}
              `}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Head indicator */}
        <div className="flex justify-center gap-1">
          {tape.map((_, i) => (
            <div key={i} className="w-12 flex justify-center">
              {i === headPos && (
                <span className="text-orange-400">▲</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Machine state */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Current State</p>
          <p className={`font-mono text-lg ${state === 'qH' ? 'text-emerald-400' : 'text-blue-400'}`}>
            {state}
          </p>
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-dark-400 text-xs">Head Position</p>
          <p className="text-orange-400 font-mono text-lg">{headPos}</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Steps</p>
          <p className="text-emerald-400 font-mono text-lg">{steps}</p>
        </div>
      </div>

      {/* Status */}
      <div className={`p-3 rounded-xl mb-4 ${
        state === 'qH' ? 'bg-emerald-500/20 border border-emerald-500/50' : 'bg-dark-700/50 border border-dark-600'
      }`}>
        <p className={`text-sm ${state === 'qH' ? 'text-emerald-400' : 'text-dark-300'}`}>
          {stateDescriptions[state]}
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={runOneStep}
          disabled={state === 'qH'}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 disabled:opacity-50 transition-colors"
        >
          Step
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-dark-600 text-dark-300 font-medium hover:bg-dark-500 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="p-4 rounded-xl bg-dark-900 mb-4">
          <p className="text-dark-400 text-xs mb-2">Execution History:</p>
          <div className="space-y-1">
            {history.map((entry, i) => (
              <p key={i} className="text-dark-300 text-xs font-mono">
                {entry}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Transition table */}
      <div className="overflow-x-auto">
        <p className="text-dark-400 text-sm mb-2">Transition Table (δ):</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-700">
              <th className="p-2 text-left">State</th>
              <th className="p-2 text-left">Read 0</th>
              <th className="p-2 text-left">Read 1</th>
              <th className="p-2 text-left">Read B</th>
            </tr>
          </thead>
          <tbody>
            {(['q0', 'q1'] as State[]).map(s => (
              <tr key={s} className={`border-b border-dark-800 ${s === state ? 'bg-blue-500/10' : ''}`}>
                <td className="p-2 text-blue-400 font-mono">{s}</td>
                {(['0', '1', 'B'] as Symbol[]).map(sym => {
                  const trans = binaryIncrement[s][sym];
                  return (
                    <td key={sym} className="p-2 text-dark-300 font-mono text-xs">
                      {trans ? `(${trans.write}, ${trans.move}, ${trans.nextState})` : '-'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">What is Computation?</p>
        <p className="text-dark-300 text-sm mt-2">
          Turing showed that this simple model can compute anything computable.
          The Church-Turing thesis: any effective algorithm can be implemented on a Turing machine.
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Input: 1011 (binary for 11). Output after halting: 1100 (binary for 12).
        </p>
      </div>
    </div>
  );
}
