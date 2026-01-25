/**
 * Sequence Limit Visualizer
 * Visualize the ε-N definition of sequence convergence
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface SequenceOption {
  id: string;
  name: string;
  fn: (n: number) => number;
  limit: number;
}

const sequences: SequenceOption[] = [
  { id: '1/n', name: '1/n → 0', fn: (n) => 1 / n, limit: 0 },
  { id: '(n+1)/n', name: '(n+1)/n → 1', fn: (n) => (n + 1) / n, limit: 1 },
  { id: '1-1/n', name: '1 - 1/n → 1', fn: (n) => 1 - 1 / n, limit: 1 },
  { id: 'n/(n+1)', name: 'n/(n+1) → 1', fn: (n) => n / (n + 1), limit: 1 },
  { id: '(-1)^n/n', name: '(-1)ⁿ/n → 0', fn: (n) => Math.pow(-1, n) / n, limit: 0 },
];

export function SequenceLimitVisualizer() {
  const [selectedSeq, setSelectedSeq] = useState(sequences[0]);
  const [epsilon, setEpsilon] = useState(0.2);
  const maxTerms = 25;

  const terms = useMemo(() => {
    return Array.from({ length: maxTerms }, (_, i) => ({
      n: i + 1,
      value: selectedSeq.fn(i + 1),
    }));
  }, [selectedSeq]);

  // Find the smallest N where |a_n - L| < ε for all n > N
  const requiredN = useMemo(() => {
    for (let N = 1; N <= maxTerms; N++) {
      let allSatisfy = true;
      for (let n = N + 1; n <= maxTerms; n++) {
        if (Math.abs(terms[n - 1].value - selectedSeq.limit) >= epsilon) {
          allSatisfy = false;
          break;
        }
      }
      if (allSatisfy) return N;
    }
    return maxTerms;
  }, [terms, selectedSeq.limit, epsilon]);

  const L = selectedSeq.limit;
  const minVal = Math.min(...terms.map((t) => t.value), L - epsilon - 0.1);
  const maxVal = Math.max(...terms.map((t) => t.value), L + epsilon + 0.1);
  const range = maxVal - minVal || 1;

  const getY = (value: number) => ((maxVal - value) / range) * 100;

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Sequence Limit Visualizer
      </h4>

      {/* Sequence selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {sequences.map((seq) => (
          <button
            key={seq.id}
            onClick={() => setSelectedSeq(seq)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              selectedSeq.id === seq.id
                ? 'bg-indigo-500 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
            }`}
          >
            {seq.name}
          </button>
        ))}
      </div>

      {/* Epsilon control */}
      <div className="mb-4">
        <label className="block text-sm text-dark-400 mb-1">
          ε (epsilon): {epsilon.toFixed(3)}
        </label>
        <input
          type="range"
          min="0.01"
          max="0.5"
          step="0.01"
          value={epsilon}
          onChange={(e) => setEpsilon(parseFloat(e.target.value))}
          className="w-full accent-indigo-500"
        />
      </div>

      {/* Visualization */}
      <div className="relative h-56 bg-dark-800/50 rounded-lg mb-4 overflow-hidden">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-dark-500 p-1">
          <span>{maxVal.toFixed(2)}</span>
          <span>{L.toFixed(2)}</span>
          <span>{minVal.toFixed(2)}</span>
        </div>

        {/* Plot area */}
        <div className="absolute left-10 right-2 top-2 bottom-6">
          {/* Epsilon band around limit */}
          <div
            className="absolute left-0 right-0 bg-emerald-500/10 border-t border-b border-emerald-500/30"
            style={{
              top: `${getY(L + epsilon)}%`,
              height: `${(2 * epsilon / range) * 100}%`,
            }}
          />

          {/* Limit line */}
          <div
            className="absolute left-0 right-0 h-0.5 bg-emerald-400"
            style={{ top: `${getY(L)}%` }}
          />
          <span
            className="absolute right-0 text-xs text-emerald-400 -translate-y-full"
            style={{ top: `${getY(L)}%` }}
          >
            L = {L}
          </span>

          {/* Upper epsilon bound */}
          <span
            className="absolute right-0 text-xs text-emerald-400/60"
            style={{ top: `${getY(L + epsilon)}%` }}
          >
            L + ε
          </span>

          {/* Lower epsilon bound */}
          <span
            className="absolute right-0 text-xs text-emerald-400/60"
            style={{ top: `${getY(L - epsilon)}%` }}
          >
            L - ε
          </span>

          {/* N threshold line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-amber-500/50"
            style={{ left: `${(requiredN / maxTerms) * 100}%` }}
          />

          {/* Terms */}
          {terms.map((term, i) => {
            const x = ((i + 1) / maxTerms) * 100;
            const y = getY(term.value);
            const isInBand = Math.abs(term.value - L) < epsilon;
            const isAfterN = term.n > requiredN;

            return (
              <motion.div
                key={term.n}
                className={`absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 ${
                  isAfterN && isInBand
                    ? 'bg-emerald-400'
                    : isInBand
                      ? 'bg-indigo-400'
                      : 'bg-red-400'
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.02 }}
                title={`a_${term.n} = ${term.value.toFixed(4)}, |a_${term.n} - L| = ${Math.abs(term.value - L).toFixed(4)}`}
              />
            );
          })}
        </div>

        {/* X-axis */}
        <div className="absolute bottom-0 left-10 right-2 text-xs text-dark-500 flex justify-between px-1">
          <span>1</span>
          <span className="text-amber-400">N = {requiredN}</span>
          <span>{maxTerms}</span>
        </div>
      </div>

      {/* Result */}
      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
        <p className="text-sm">
          <strong>ε-N Definition:</strong> For ε = {epsilon.toFixed(3)}, we need{' '}
          <strong className="text-amber-400">N = {requiredN}</strong>
        </p>
        <p className="text-xs text-dark-400 mt-1">
          For all n {'>'} {requiredN}: |aₙ - {L}| {'<'} {epsilon.toFixed(3)}
        </p>
      </div>

      {/* Legend */}
      <div className="mt-3 flex gap-4 text-xs text-dark-400">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400" /> In ε-band (n {'>'} N)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-indigo-400" /> In ε-band (n ≤ N)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-400" /> Outside ε-band
        </span>
      </div>
    </div>
  );
}
