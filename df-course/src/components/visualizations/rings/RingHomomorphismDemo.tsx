import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type HomExample = {
  name: string;
  source: string;
  target: string;
  map: string;
  kernel: string;
  image: string;
  isInjective: boolean;
  isSurjective: boolean;
  quotient: string;
  description: string;
};

const examples: HomExample[] = [
  {
    name: 'Evaluation at 0',
    source: 'Z[x]',
    target: 'Z',
    map: 'f(x) ↦ f(0)',
    kernel: '(x) = {xg(x) : g ∈ Z[x]}',
    image: 'Z',
    isInjective: false,
    isSurjective: true,
    quotient: 'Z[x]/(x) ≅ Z',
    description: 'Evaluating a polynomial at x = 0 gives its constant term.',
  },
  {
    name: 'Reduction mod n',
    source: 'Z',
    target: 'Z/nZ',
    map: 'a ↦ a mod n',
    kernel: '(n) = nZ',
    image: 'Z/nZ',
    isInjective: false,
    isSurjective: true,
    quotient: 'Z/(n) ≅ Z/nZ',
    description: 'The canonical projection from integers to integers mod n.',
  },
  {
    name: 'Complex conjugation',
    source: 'C',
    target: 'C',
    map: 'a + bi ↦ a - bi',
    kernel: '{0}',
    image: 'C',
    isInjective: true,
    isSurjective: true,
    quotient: 'C/{0} ≅ C',
    description: 'An automorphism of C. Fixes R pointwise.',
  },
  {
    name: 'Inclusion Z → Q',
    source: 'Z',
    target: 'Q',
    map: 'n ↦ n/1',
    kernel: '{0}',
    image: 'Z ⊂ Q',
    isInjective: true,
    isSurjective: false,
    quotient: 'Z/{0} ≅ Z',
    description: 'Integers embed in rationals. Image is proper subset.',
  },
  {
    name: 'Polynomial quotient',
    source: 'R[x]',
    target: 'C',
    map: 'f(x) ↦ f(i)',
    kernel: '(x² + 1)',
    image: 'C',
    isInjective: false,
    isSurjective: true,
    quotient: 'R[x]/(x²+1) ≅ C',
    description: 'Constructing C from R by adjoining √(-1).',
  },
];

export function RingHomomorphismDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [showDiagram, setShowDiagram] = useState(true);

  const ex = examples[selectedExample];

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Ring Homomorphism Explorer</h4>

      {/* Example Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((e, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedExample(idx)}
            className={`px-4 py-2 rounded transition-all ${
              selectedExample === idx
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {e.name}
          </button>
        ))}
      </div>

      {/* Homomorphism Display */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-blue-400 font-mono text-lg">{ex.source}</span>
          <div className="flex items-center">
            <span className="text-dark-500 mr-2">φ:</span>
            <span className="text-dark-500">→</span>
          </div>
          <span className="text-purple-400 font-mono text-lg">{ex.target}</span>
        </div>
        <div className="text-center text-dark-300 font-mono mb-3">{ex.map}</div>
        <div className="text-dark-400 text-sm text-center">{ex.description}</div>
      </div>

      {/* Properties */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className={`p-4 rounded-lg ${ex.isInjective ? 'bg-green-900/20' : 'bg-dark-700'}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xl ${ex.isInjective ? 'text-green-400' : 'text-dark-500'}`}>
              {ex.isInjective ? '✓' : '✗'}
            </span>
            <span className="text-dark-200 font-medium">Injective</span>
          </div>
          <div className="text-dark-400 text-sm">
            {ex.isInjective
              ? 'ker(φ) = {0}'
              : `ker(φ) = ${ex.kernel} ≠ {0}`
            }
          </div>
        </div>

        <div className={`p-4 rounded-lg ${ex.isSurjective ? 'bg-green-900/20' : 'bg-dark-700'}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xl ${ex.isSurjective ? 'text-green-400' : 'text-dark-500'}`}>
              {ex.isSurjective ? '✓' : '✗'}
            </span>
            <span className="text-dark-200 font-medium">Surjective</span>
          </div>
          <div className="text-dark-400 text-sm">
            {ex.isSurjective
              ? `im(φ) = ${ex.target}`
              : `im(φ) = ${ex.image} ⊊ ${ex.target}`
            }
          </div>
        </div>
      </div>

      {/* Kernel and Image */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Kernel & Image</h5>
        <div className="space-y-2">
          <div className="flex">
            <span className="text-red-400 w-20">ker(φ):</span>
            <span className="text-dark-300 font-mono">{ex.kernel}</span>
          </div>
          <div className="flex">
            <span className="text-green-400 w-20">im(φ):</span>
            <span className="text-dark-300 font-mono">{ex.image}</span>
          </div>
        </div>
      </div>

      {/* First Isomorphism Theorem */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-purple-900/20 p-4 rounded-lg mb-6"
      >
        <h5 className="text-purple-400 font-medium mb-2">First Isomorphism Theorem</h5>
        <div className="text-center font-mono text-lg">
          <span className="text-blue-400">{ex.source}</span>
          <span className="text-dark-500">/</span>
          <span className="text-red-400">ker(φ)</span>
          <span className="text-dark-500 mx-2">≅</span>
          <span className="text-green-400">im(φ)</span>
        </div>
        <div className="text-center text-dark-400 text-sm mt-2">
          {ex.quotient}
        </div>
      </motion.div>

      {/* Diagram Toggle */}
      <button
        onClick={() => setShowDiagram(!showDiagram)}
        className="text-sm text-blue-400 hover:text-blue-300 mb-4"
      >
        {showDiagram ? '▼' : '▶'} Commutative Diagram
      </button>

      <AnimatePresence>
        {showDiagram && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-700 p-4 rounded-lg overflow-hidden"
          >
            <div className="text-center font-mono text-sm">
              <div className="flex justify-center items-center gap-8 mb-4">
                <span className="text-blue-400">{ex.source}</span>
                <span className="text-dark-500">—φ→</span>
                <span className="text-purple-400">{ex.target}</span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <span className="text-dark-500">↓ π</span>
                <span className="w-24"></span>
                <span className="text-dark-500">↑ inclusion</span>
              </div>
              <div className="flex justify-center items-center gap-8 mt-4">
                <span className="text-yellow-400">{ex.source}/ker(φ)</span>
                <span className="text-dark-500">—φ̄→</span>
                <span className="text-green-400">im(φ)</span>
              </div>
            </div>
            <div className="text-dark-500 text-xs text-center mt-4">
              φ = inclusion ∘ φ̄ ∘ π (factorization through quotient)
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
