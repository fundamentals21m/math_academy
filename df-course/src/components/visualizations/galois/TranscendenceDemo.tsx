import { useState } from 'react';
import { motion } from 'framer-motion';

interface TranscendenceExample {
  name: string;
  elements: string[];
  transcendenceDegree: string;
  basis: string;
  explanation: string;
}

const EXAMPLES: TranscendenceExample[] = [
  {
    name: 'Q(√2)/Q',
    elements: ['√2'],
    transcendenceDegree: '0',
    basis: '∅',
    explanation: '√2 is algebraic (root of x² - 2). The extension is algebraic, so tr.deg = 0.',
  },
  {
    name: 'Q(t)/Q',
    elements: ['t (indeterminate)'],
    transcendenceDegree: '1',
    basis: '{t}',
    explanation: 't satisfies no polynomial over Q. One transcendental element gives tr.deg = 1.',
  },
  {
    name: 'Q(s,t)/Q',
    elements: ['s, t (independent)'],
    transcendenceDegree: '2',
    basis: '{s, t}',
    explanation: 'Two algebraically independent transcendentals. Neither satisfies a polynomial over Q(other).',
  },
  {
    name: 'Q(π)/Q',
    elements: ['π'],
    transcendenceDegree: '1',
    basis: '{π}',
    explanation: 'Lindemann (1882) proved π transcendental. Q(π) ≅ Q(t), the rational function field.',
  },
  {
    name: 'Q(e)/Q',
    elements: ['e'],
    transcendenceDegree: '1',
    basis: '{e}',
    explanation: 'Hermite (1873) proved e transcendental. Q(e) ≅ Q(t).',
  },
  {
    name: 'R/Q',
    elements: ['all reals'],
    transcendenceDegree: '2^ℵ₀',
    basis: 'uncountable',
    explanation: 'R has cardinality 2^ℵ₀ but Q is countable. Must have uncountably many algebraically independent elements.',
  },
  {
    name: 'Q(t, √t)/Q',
    elements: ['t, √t'],
    transcendenceDegree: '1',
    basis: '{t}',
    explanation: '√t is algebraic over Q(t) (root of x² - t). The transcendence basis is just {t}.',
  },
];

export function TranscendenceDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [showDependence, setShowDependence] = useState(false);

  const example = EXAMPLES[selectedExample];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Transcendental Extensions
      </h3>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {EXAMPLES.map((ex, i) => (
          <button
            key={ex.name}
            onClick={() => setSelectedExample(i)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              selectedExample === i
                ? 'bg-primary-500 text-white'
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
        {/* Extension info */}
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Extension: {example.name}
            </h4>
            <div className="text-dark-300 text-sm">
              Elements: {example.elements.join(', ')}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Transcendence Degree
            </h4>
            <div className="text-2xl font-mono text-amber-400 text-center">
              tr.deg = {example.transcendenceDegree}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Transcendence Basis
            </h4>
            <div className="text-lg font-mono text-white">
              B = {example.basis}
            </div>
            <p className="text-dark-400 text-xs mt-2">
              Maximal algebraically independent subset
            </p>
          </div>
        </div>

        {/* Explanation and properties */}
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Explanation
            </h4>
            <p className="text-dark-300 text-sm">{example.explanation}</p>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Structure
            </h4>
            {example.transcendenceDegree === '0' ? (
              <p className="text-dark-300 text-sm">
                <span className="text-emerald-400">Algebraic extension</span>:
                Every element satisfies a polynomial over the base field.
              </p>
            ) : (
              <p className="text-dark-300 text-sm">
                <span className="text-amber-400">Transcendental extension</span>:
                Contains elements satisfying no polynomial.
                Isomorphic to a rational function field in {example.transcendenceDegree} variables
                over an algebraic extension of Q.
              </p>
            )}
          </div>

          {parseInt(example.transcendenceDegree) > 0 && parseInt(example.transcendenceDegree) < 10 && (
            <div className="bg-dark-900 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-primary-400 mb-2">
                Structure Theorem
              </h4>
              <p className="text-dark-300 text-sm">
                K/F factors as:
              </p>
              <div className="font-mono text-white text-center my-2">
                F ⊂ F(B) ⊂ K
              </div>
              <p className="text-dark-400 text-xs">
                where F(B) is purely transcendental and K/F(B) is algebraic.
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Algebraic independence illustration */}
      <button
        onClick={() => setShowDependence(!showDependence)}
        className="mt-4 px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
      >
        {showDependence ? 'Hide' : 'Show'} Algebraic Independence Concept
      </button>

      {showDependence && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 bg-dark-900 rounded-lg p-4"
        >
          <h4 className="text-sm font-semibold text-primary-400 mb-2">
            Algebraic Independence
          </h4>
          <p className="text-dark-300 text-sm mb-3">
            Elements α₁, ..., αₙ are <strong>algebraically independent</strong> over F
            if no nonzero polynomial f ∈ F[x₁,...,xₙ] satisfies f(α₁,...,αₙ) = 0.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-dark-800 p-3 rounded">
              <h5 className="text-emerald-400 font-semibold text-sm">Independent</h5>
              <p className="text-dark-300 text-xs mt-1">
                {'{'}s, t{'}'} in Q(s,t) - no polynomial relation
              </p>
            </div>
            <div className="bg-dark-800 p-3 rounded">
              <h5 className="text-red-400 font-semibold text-sm">Dependent</h5>
              <p className="text-dark-300 text-xs mt-1">
                {'{'}t, t²{'}'} - satisfies y - x² = 0
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-primary-400 mb-2">
          Tower Law for Transcendence Degree
        </h4>
        <div className="font-mono text-white text-center">
          tr.deg_F(L) = tr.deg_F(K) + tr.deg_K(L)
        </div>
        <p className="text-dark-400 text-xs mt-2 text-center">
          For F ⊆ K ⊆ L, transcendence degrees add
        </p>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        Transcendence degree measures "how transcendental" an extension is.
        It plays the role of dimension in algebraic geometry.
      </p>
    </div>
  );
}
