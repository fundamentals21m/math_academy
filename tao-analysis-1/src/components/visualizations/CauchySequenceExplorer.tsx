/**
 * Cauchy Sequence Explorer
 * Visualize how Cauchy sequences converge - adjust ε and see which terms are ε-close
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface SequenceOption {
  id: string;
  name: string;
  formula: string;
  fn: (n: number) => number;
  isCauchy: boolean;
}

const sequences: SequenceOption[] = [
  {
    id: '1/n',
    name: '1/n',
    formula: 'a_n = 1/n',
    fn: (n) => 1 / n,
    isCauchy: true,
  },
  {
    id: '1+(-1)^n/n',
    name: '1 + (-1)ⁿ/n',
    formula: 'a_n = 1 + (-1)^n/n',
    fn: (n) => 1 + Math.pow(-1, n) / n,
    isCauchy: true,
  },
  {
    id: 'partial-harmonic',
    name: 'Partial Harmonic',
    formula: 'a_n = Σₖ₌₁ⁿ 1/k',
    fn: (n) => {
      let sum = 0;
      for (let k = 1; k <= n; k++) sum += 1 / k;
      return sum;
    },
    isCauchy: false, // diverges
  },
  {
    id: 'sqrt-approx',
    name: '√2 Approximation',
    formula: 'a_n = (1 + 1/n)^n toward e',
    fn: (n) => Math.pow(1 + 1 / n, n),
    isCauchy: true,
  },
];

export function CauchySequenceExplorer() {
  const [selectedSeq, setSelectedSeq] = useState(sequences[0]);
  const [epsilon, setEpsilon] = useState(0.2);
  const [N, setN] = useState(5);
  const maxTerms = 20;

  const terms = useMemo(() => {
    return Array.from({ length: maxTerms }, (_, i) => ({
      n: i + 1,
      value: selectedSeq.fn(i + 1),
    }));
  }, [selectedSeq]);

  // Check if |a_m - a_n| < ε for all m, n > N
  const cauchyPairs = useMemo(() => {
    const pairs: { m: number; n: number; diff: number; satisfies: boolean }[] = [];
    for (let m = N + 1; m <= maxTerms; m++) {
      for (let n = m + 1; n <= maxTerms; n++) {
        const diff = Math.abs(terms[m - 1].value - terms[n - 1].value);
        pairs.push({ m, n, diff, satisfies: diff < epsilon });
      }
    }
    return pairs;
  }, [terms, N, epsilon]);

  const allSatisfy = cauchyPairs.every((p) => p.satisfies);
  const violatingPairs = cauchyPairs.filter((p) => !p.satisfies);

  // Find range for visualization
  const minVal = Math.min(...terms.map((t) => t.value));
  const maxVal = Math.max(...terms.map((t) => t.value));
  const range = maxVal - minVal || 1;

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-indigo-400">
          Cauchy Sequence Explorer
        </h4>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            selectedSeq.isCauchy
              ? 'bg-emerald-500/20 text-emerald-400'
              : 'bg-red-500/20 text-red-400'
          }`}
        >
          {selectedSeq.isCauchy ? 'Cauchy' : 'Not Cauchy'}
        </span>
      </div>

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

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-1">
            ε (epsilon): {epsilon.toFixed(3)}
          </label>
          <input
            type="range"
            min="0.01"
            max="1"
            step="0.01"
            value={epsilon}
            onChange={(e) => setEpsilon(parseFloat(e.target.value))}
            className="w-full accent-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-1">
            N (threshold): {N}
          </label>
          <input
            type="range"
            min="1"
            max={maxTerms - 2}
            step="1"
            value={N}
            onChange={(e) => setN(parseInt(e.target.value))}
            className="w-full accent-emerald-500"
          />
        </div>
      </div>

      {/* Sequence visualization */}
      <div className="relative h-48 bg-dark-800/50 rounded-lg mb-4 overflow-hidden">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-dark-500 p-1">
          <span>{maxVal.toFixed(2)}</span>
          <span>{((maxVal + minVal) / 2).toFixed(2)}</span>
          <span>{minVal.toFixed(2)}</span>
        </div>

        {/* Plot area */}
        <div className="absolute left-12 right-2 top-2 bottom-6">
          {/* N threshold line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-emerald-500/50"
            style={{ left: `${(N / maxTerms) * 100}%` }}
          />
          <div
            className="absolute bottom-full mb-1 text-xs text-emerald-400 -translate-x-1/2"
            style={{ left: `${(N / maxTerms) * 100}%` }}
          >
            N={N}
          </div>

          {/* Terms */}
          {terms.map((term, i) => {
            const x = ((i + 1) / maxTerms) * 100;
            const y = ((maxVal - term.value) / range) * 100;
            const isAfterN = term.n > N;

            return (
              <motion.div
                key={term.n}
                className={`absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 ${
                  isAfterN ? 'bg-indigo-400' : 'bg-dark-500'
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.03 }}
                title={`a_${term.n} = ${term.value.toFixed(4)}`}
              />
            );
          })}
        </div>

        {/* X-axis */}
        <div className="absolute bottom-0 left-12 right-2 text-xs text-dark-500 flex justify-between px-1">
          <span>1</span>
          <span>{Math.floor(maxTerms / 2)}</span>
          <span>{maxTerms}</span>
        </div>
      </div>

      {/* Cauchy condition result */}
      <div
        className={`p-3 rounded-lg ${
          allSatisfy
            ? 'bg-emerald-500/10 border border-emerald-500/30'
            : 'bg-red-500/10 border border-red-500/30'
        }`}
      >
        <p className="text-sm">
          <strong>Cauchy Condition:</strong> For all m, n {'>'} N = {N}, is |aₘ -
          aₙ| {'<'} ε = {epsilon.toFixed(3)}?
        </p>
        <p className={`mt-2 font-semibold ${allSatisfy ? 'text-emerald-400' : 'text-red-400'}`}>
          {allSatisfy
            ? `✓ Yes! All ${cauchyPairs.length} pairs satisfy the condition.`
            : `✗ No. ${violatingPairs.length} pair(s) violate the condition.`}
        </p>
        {violatingPairs.length > 0 && violatingPairs.length <= 3 && (
          <p className="text-xs text-dark-400 mt-1">
            Examples: {violatingPairs.slice(0, 3).map((p) => (
              `|a_${p.m} - a_${p.n}| = ${p.diff.toFixed(4)}`
            )).join(', ')}
          </p>
        )}
      </div>

      <p className="text-xs text-dark-500 mt-3">
        A sequence is <em>Cauchy</em> if for every ε {'>'} 0, there exists N
        such that |aₘ - aₙ| {'<'} ε for all m, n {'>'} N.
      </p>
    </div>
  );
}
