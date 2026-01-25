/**
 * Supremum & Infimum Explorer
 * Explore the least upper bound property of real numbers
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface SetExample {
  id: string;
  name: string;
  description: string;
  elements: number[];
  hasSup: boolean;
  hasInf: boolean;
  sup?: number;
  inf?: number;
  supInSet: boolean;
  infInSet: boolean;
}

const sets: SetExample[] = [
  {
    id: 'finite',
    name: '{1, 2, 3, 4, 5}',
    description: 'Finite set - sup and inf are max and min',
    elements: [1, 2, 3, 4, 5],
    hasSup: true,
    hasInf: true,
    sup: 5,
    inf: 1,
    supInSet: true,
    infInSet: true,
  },
  {
    id: 'open-interval',
    name: '(0, 1)',
    description: 'Open interval - sup and inf exist but not in set',
    elements: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
    hasSup: true,
    hasInf: true,
    sup: 1,
    inf: 0,
    supInSet: false,
    infInSet: false,
  },
  {
    id: 'half-open',
    name: '[0, 1)',
    description: 'Half-open interval - inf in set, sup not in set',
    elements: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
    hasSup: true,
    hasInf: true,
    sup: 1,
    inf: 0,
    supInSet: false,
    infInSet: true,
  },
  {
    id: '1-over-n',
    name: '{1/n : n ∈ ℕ}',
    description: '1/n sequence - inf = 0 (not in set), sup = 1 (in set)',
    elements: [1, 0.5, 0.333, 0.25, 0.2, 0.167, 0.143, 0.125, 0.111, 0.1],
    hasSup: true,
    hasInf: true,
    sup: 1,
    inf: 0,
    supInSet: true,
    infInSet: false,
  },
];

export function SupremumInfimumExplorer() {
  const [selectedSet, setSelectedSet] = useState(sets[0]);
  const [testBound, setTestBound] = useState(3);

  const elements = selectedSet.elements;
  const minElement = Math.min(...elements);
  const maxElement = Math.max(...elements);
  const displayMin = selectedSet.inf !== undefined ? Math.min(selectedSet.inf, minElement) - 0.5 : minElement - 0.5;
  const displayMax = selectedSet.sup !== undefined ? Math.max(selectedSet.sup, maxElement) + 0.5 : maxElement + 0.5;
  const range = displayMax - displayMin;

  const isUpperBound = testBound >= (selectedSet.sup ?? maxElement);
  const isLeastUpperBound = testBound === selectedSet.sup;

  const getPosition = (value: number) => ((value - displayMin) / range) * 100;

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Supremum & Infimum Explorer
      </h4>

      {/* Set selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {sets.map((set) => (
          <button
            key={set.id}
            onClick={() => {
              setSelectedSet(set);
              setTestBound(set.sup ?? Math.max(...set.elements) + 1);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              selectedSet.id === set.id
                ? 'bg-indigo-500 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
            }`}
          >
            {set.name}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-400 mb-4">{selectedSet.description}</p>

      {/* Number line visualization */}
      <div className="relative h-32 bg-dark-800/50 rounded-lg mb-4 p-4">
        {/* Number line */}
        <div className="absolute left-4 right-4 top-1/2 h-0.5 bg-dark-600" />

        {/* Set elements */}
        {elements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-400"
            style={{ left: `calc(${getPosition(el)}% + 0.5rem - 6px)` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.05 }}
            title={el.toString()}
          />
        ))}

        {/* Supremum marker */}
        {selectedSet.sup !== undefined && (
          <div
            className="absolute top-1/2 -translate-y-full"
            style={{ left: `calc(${getPosition(selectedSet.sup)}% + 0.5rem - 8px)` }}
          >
            <div
              className={`w-4 h-4 border-2 border-emerald-400 ${
                selectedSet.supInSet ? 'bg-emerald-400' : 'bg-transparent'
              }`}
              style={{ transform: 'rotate(45deg)' }}
            />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-emerald-400 whitespace-nowrap">
              sup = {selectedSet.sup}
            </span>
          </div>
        )}

        {/* Infimum marker */}
        {selectedSet.inf !== undefined && (
          <div
            className="absolute top-1/2 translate-y-1"
            style={{ left: `calc(${getPosition(selectedSet.inf)}% + 0.5rem - 8px)` }}
          >
            <div
              className={`w-4 h-4 border-2 border-amber-400 ${
                selectedSet.infInSet ? 'bg-amber-400' : 'bg-transparent'
              }`}
              style={{ transform: 'rotate(45deg)' }}
            />
            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-amber-400 whitespace-nowrap">
              inf = {selectedSet.inf}
            </span>
          </div>
        )}

        {/* Test upper bound */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `calc(${getPosition(testBound)}% + 0.5rem - 1px)` }}
          animate={{ left: `calc(${getPosition(testBound)}% + 0.5rem - 1px)` }}
        >
          <div className="w-0.5 h-16 -translate-y-1/2 bg-purple-400" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs text-purple-400 whitespace-nowrap">
            test: {testBound.toFixed(2)}
          </span>
        </motion.div>
      </div>

      {/* Test bound slider */}
      <div className="mb-4">
        <label className="block text-sm text-dark-400 mb-1">
          Test Upper Bound: {testBound.toFixed(2)}
        </label>
        <input
          type="range"
          min={displayMin}
          max={displayMax}
          step="0.1"
          value={testBound}
          onChange={(e) => setTestBound(parseFloat(e.target.value))}
          className="w-full accent-purple-500"
        />
      </div>

      {/* Analysis */}
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`p-3 rounded-lg ${
            isUpperBound
              ? 'bg-emerald-500/10 border border-emerald-500/30'
              : 'bg-red-500/10 border border-red-500/30'
          }`}
        >
          <p className="text-sm font-medium">
            {isUpperBound ? '✓ Is an upper bound' : '✗ Not an upper bound'}
          </p>
          <p className="text-xs text-dark-400 mt-1">
            {isUpperBound
              ? 'All elements ≤ test value'
              : 'Some elements exceed test value'}
          </p>
        </div>
        <div
          className={`p-3 rounded-lg ${
            isLeastUpperBound
              ? 'bg-indigo-500/10 border border-indigo-500/30'
              : 'bg-dark-800/50 border border-dark-700/50'
          }`}
        >
          <p className="text-sm font-medium">
            {isLeastUpperBound ? '★ Is the LEAST upper bound' : 'Not the least upper bound'}
          </p>
          <p className="text-xs text-dark-400 mt-1">
            {isLeastUpperBound
              ? 'This is the supremum!'
              : isUpperBound
                ? 'A smaller upper bound exists'
                : 'Must be an upper bound first'}
          </p>
        </div>
      </div>

      {/* Key concepts */}
      <div className="mt-4 p-3 bg-dark-800/50 rounded-lg">
        <p className="text-xs text-dark-400">
          <strong className="text-dark-300">Key:</strong> ● Set element | ◆ Sup/Inf (filled = in set, hollow = not in set)
        </p>
        <p className="text-xs text-dark-400 mt-1">
          The <strong className="text-emerald-400">supremum</strong> is the least upper bound.
          The <strong className="text-amber-400">infimum</strong> is the greatest lower bound.
        </p>
      </div>
    </div>
  );
}
