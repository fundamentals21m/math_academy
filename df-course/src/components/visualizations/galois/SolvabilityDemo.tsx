import { useState } from 'react';
import { motion } from 'framer-motion';

interface SolvabilityExample {
  name: string;
  polynomial: string;
  galoisGroup: string;
  compositionSeries: string[];
  quotients: string[];
  isSolvable: boolean;
  radicalExpression?: string;
}

const EXAMPLES: SolvabilityExample[] = [
  {
    name: 'Quadratic',
    polynomial: 'x² + bx + c',
    galoisGroup: 'Z/2Z or {1}',
    compositionSeries: ['{1}', 'Z/2Z'],
    quotients: ['Z/2Z (abelian)'],
    isSolvable: true,
    radicalExpression: '(-b ± √(b²-4c))/2',
  },
  {
    name: 'x³ - 2',
    polynomial: 'x³ - 2',
    galoisGroup: 'S₃',
    compositionSeries: ['{1}', 'A₃', 'S₃'],
    quotients: ['Z/3Z', 'Z/2Z'],
    isSolvable: true,
    radicalExpression: '∛2 · ωᵏ (k=0,1,2)',
  },
  {
    name: 'x⁴ - 2',
    polynomial: 'x⁴ - 2',
    galoisGroup: 'D₄',
    compositionSeries: ['{1}', 'Z/2Z', 'V₄', 'D₄'],
    quotients: ['Z/2Z', 'Z/2Z', 'Z/2Z'],
    isSolvable: true,
    radicalExpression: '⁴√2 · iᵏ (k=0,1,2,3)',
  },
  {
    name: 'General quartic',
    polynomial: 'x⁴ + ax³ + bx² + cx + d',
    galoisGroup: 'S₄',
    compositionSeries: ['{1}', 'V₄', 'A₄', 'S₄'],
    quotients: ['V₄', 'Z/3Z', 'Z/2Z'],
    isSolvable: true,
    radicalExpression: 'Ferrari formula (nested radicals)',
  },
  {
    name: 'x⁵ - 6x + 3',
    polynomial: 'x⁵ - 6x + 3',
    galoisGroup: 'S₅',
    compositionSeries: ['{1}', 'A₅', 'S₅'],
    quotients: ['A₅ (SIMPLE!)', 'Z/2Z'],
    isSolvable: false,
  },
  {
    name: 'General quintic',
    polynomial: 'x⁵ + ax⁴ + bx³ + cx² + dx + e',
    galoisGroup: 'S₅',
    compositionSeries: ['{1}', 'A₅', 'S₅'],
    quotients: ['A₅ (non-abelian simple)', 'Z/2Z'],
    isSolvable: false,
  },
  {
    name: 'x⁵ - 2',
    polynomial: 'x⁵ - 2',
    galoisGroup: 'F₂₀ (Frobenius)',
    compositionSeries: ['{1}', 'Z/5Z', 'F₂₀'],
    quotients: ['Z/5Z', 'Z/4Z'],
    isSolvable: true,
    radicalExpression: '⁵√2 · ζ₅ᵏ',
  },
];

export function SolvabilityDemo() {
  const [selectedExample, setSelectedExample] = useState(0);

  const example = EXAMPLES[selectedExample];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Solvability by Radicals
      </h3>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {EXAMPLES.map((ex, i) => (
          <button
            key={ex.name}
            onClick={() => setSelectedExample(i)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              selectedExample === i
                ? ex.isSolvable
                  ? 'bg-emerald-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {ex.name}
          </button>
        ))}
      </div>

      <motion.div
        key={example.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Polynomial and group */}
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Polynomial
            </h4>
            <div className="text-lg font-mono text-white">
              f(x) = {example.polynomial}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Galois Group
            </h4>
            <div className="text-lg font-mono text-white">
              Gal(f) = {example.galoisGroup}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Composition Series
            </h4>
            <div className="flex items-center gap-2 flex-wrap">
              {example.compositionSeries.map((g, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-dark-700 rounded text-sm font-mono">
                    {g}
                  </span>
                  {i < example.compositionSeries.length - 1 && (
                    <span className="text-dark-400">◁</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Quotients
            </h4>
            <div className="space-y-1">
              {example.quotients.map((q, i) => (
                <div
                  key={i}
                  className={`text-sm font-mono ${
                    q.includes('SIMPLE') || q.includes('non-abelian')
                      ? 'text-red-400'
                      : 'text-emerald-400'
                  }`}
                >
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="space-y-4">
          <div
            className={`p-6 rounded-lg ${
              example.isSolvable
                ? 'bg-emerald-900/30 border border-emerald-700'
                : 'bg-red-900/30 border border-red-700'
            }`}
          >
            <h4 className="text-sm font-semibold mb-2">
              {example.isSolvable ? (
                <span className="text-emerald-400">✓ SOLVABLE BY RADICALS</span>
              ) : (
                <span className="text-red-400">✗ NOT SOLVABLE BY RADICALS</span>
              )}
            </h4>
            <p className="text-dark-300 text-sm">
              {example.isSolvable
                ? 'All quotients in the composition series are abelian.'
                : 'The composition series contains a non-abelian simple quotient (A₅).'}
            </p>
          </div>

          {example.radicalExpression && (
            <div className="bg-dark-900 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-primary-400 mb-2">
                Radical Expression
              </h4>
              <div className="text-lg font-mono text-amber-400">
                {example.radicalExpression}
              </div>
            </div>
          )}

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Galois's Theorem
            </h4>
            <p className="text-dark-300 text-sm">
              A polynomial f is solvable by radicals if and only if Gal(f) is
              a <strong>solvable group</strong> (has a composition series with
              abelian quotients).
            </p>
          </div>

          {!example.isSolvable && (
            <div className="bg-dark-900 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-red-400 mb-2">
                Why A₅ Blocks Solvability
              </h4>
              <p className="text-dark-300 text-sm">
                A₅ is simple (no proper normal subgroups) and non-abelian.
                It cannot appear in a composition series with abelian quotients.
              </p>
            </div>
          )}
        </div>
      </motion.div>

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-primary-400 mb-2">
          Summary: Solvability by Degree
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
          <div className="bg-emerald-900/30 p-2 rounded">
            <div className="text-emerald-400 font-bold">n ≤ 4</div>
            <div className="text-xs text-dark-300">Always solvable</div>
          </div>
          <div className="bg-amber-900/30 p-2 rounded">
            <div className="text-amber-400 font-bold">n = 5</div>
            <div className="text-xs text-dark-300">Depends on Gal(f)</div>
          </div>
          <div className="bg-red-900/30 p-2 rounded col-span-2 md:col-span-3">
            <div className="text-red-400 font-bold">n ≥ 5, Gal(f) = Sₙ or Aₙ</div>
            <div className="text-xs text-dark-300">NOT solvable</div>
          </div>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        Galois's theorem connects polynomial solvability to group theory:
        f is solvable by radicals iff Gal(f) is a solvable group.
      </p>
    </div>
  );
}
