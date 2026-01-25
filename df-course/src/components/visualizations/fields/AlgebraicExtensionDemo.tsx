import { useState } from 'react';
import { motion } from 'framer-motion';

interface AlgebraicElement {
  symbol: string;
  minPoly: string;
  minPolyDisplay: string;
  degree: number;
  basis: string[];
  field: string;
  isAlgebraic: boolean;
}

const ALGEBRAIC_ELEMENTS: AlgebraicElement[] = [
  {
    symbol: 'sqrt(2)',
    minPoly: 'x^2 - 2',
    minPolyDisplay: 'x² - 2',
    degree: 2,
    basis: ['1', 'sqrt(2)'],
    field: 'Q',
    isAlgebraic: true,
  },
  {
    symbol: 'sqrt(3)',
    minPoly: 'x^2 - 3',
    minPolyDisplay: 'x² - 3',
    degree: 2,
    basis: ['1', 'sqrt(3)'],
    field: 'Q',
    isAlgebraic: true,
  },
  {
    symbol: 'cbrt(2)',
    minPoly: 'x^3 - 2',
    minPolyDisplay: 'x³ - 2',
    degree: 3,
    basis: ['1', 'cbrt(2)', 'cbrt(4)'],
    field: 'Q',
    isAlgebraic: true,
  },
  {
    symbol: 'i',
    minPoly: 'x^2 + 1',
    minPolyDisplay: 'x² + 1',
    degree: 2,
    basis: ['1', 'i'],
    field: 'R',
    isAlgebraic: true,
  },
  {
    symbol: 'zeta_3',
    minPoly: 'x^2 + x + 1',
    minPolyDisplay: 'x² + x + 1',
    degree: 2,
    basis: ['1', 'zeta_3'],
    field: 'Q',
    isAlgebraic: true,
  },
  {
    symbol: 'phi (golden ratio)',
    minPoly: 'x^2 - x - 1',
    minPolyDisplay: 'x² - x - 1',
    degree: 2,
    basis: ['1', 'phi'],
    field: 'Q',
    isAlgebraic: true,
  },
  {
    symbol: 'pi',
    minPoly: 'none',
    minPolyDisplay: 'none (transcendental)',
    degree: Infinity,
    basis: [],
    field: 'Q',
    isAlgebraic: false,
  },
  {
    symbol: 'e',
    minPoly: 'none',
    minPolyDisplay: 'none (transcendental)',
    degree: Infinity,
    basis: [],
    field: 'Q',
    isAlgebraic: false,
  },
];

export function AlgebraicExtensionDemo() {
  const [selectedElement, setSelectedElement] = useState(0);

  const element = ALGEBRAIC_ELEMENTS[selectedElement];

  // Verify element satisfies minimal polynomial (for algebraic elements)
  const verifyMinPoly = (el: AlgebraicElement): string => {
    if (!el.isAlgebraic) return 'Transcendental - no polynomial relation';
    switch (el.symbol) {
      case 'sqrt(2)':
        return `(√2)² - 2 = 2 - 2 = 0 ✓`;
      case 'sqrt(3)':
        return `(√3)² - 3 = 3 - 3 = 0 ✓`;
      case 'cbrt(2)':
        return `(∛2)³ - 2 = 2 - 2 = 0 ✓`;
      case 'i':
        return `i² + 1 = -1 + 1 = 0 ✓`;
      case 'zeta_3':
        return `ζ³ = 1, so ζ² + ζ + 1 = (ζ³-1)/(ζ-1) = 0 ✓`;
      case 'phi (golden ratio)':
        return `φ² - φ - 1 = ((1+√5)/2)² - (1+√5)/2 - 1 = 0 ✓`;
      default:
        return '';
    }
  };

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Algebraic Elements & Minimal Polynomials
      </h3>

      {/* Element selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {ALGEBRAIC_ELEMENTS.map((el, i) => (
          <button
            key={el.symbol}
            onClick={() => setSelectedElement(i)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              selectedElement === i
                ? el.isAlgebraic
                  ? 'bg-primary-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {el.symbol}
          </button>
        ))}
      </div>

      {/* Element details */}
      <motion.div
        key={element.symbol}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {/* Status */}
        <div
          className={`p-4 rounded-lg ${
            element.isAlgebraic ? 'bg-emerald-900/30 border border-emerald-700' : 'bg-red-900/30 border border-red-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`text-2xl ${element.isAlgebraic ? 'text-emerald-400' : 'text-red-400'}`}
            >
              {element.isAlgebraic ? '✓' : '✗'}
            </span>
            <div>
              <span className="text-lg font-mono text-white">{element.symbol}</span>
              <span className="text-dark-300 ml-2">
                is {element.isAlgebraic ? 'algebraic' : 'transcendental'} over{' '}
                {element.field}
              </span>
            </div>
          </div>
        </div>

        {element.isAlgebraic ? (
          <>
            {/* Minimal polynomial */}
            <div className="bg-dark-900 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-primary-400 mb-2">
                Minimal Polynomial over {element.field}
              </h4>
              <div className="text-xl font-mono text-white mb-2">
                m(x) = {element.minPolyDisplay}
              </div>
              <div className="text-sm text-dark-400">
                Degree: {element.degree}
              </div>
            </div>

            {/* Verification */}
            <div className="bg-dark-900 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-primary-400 mb-2">
                Verification
              </h4>
              <div className="font-mono text-emerald-400">
                {verifyMinPoly(element)}
              </div>
            </div>

            {/* Simple extension */}
            <div className="bg-dark-900 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-primary-400 mb-2">
                Simple Extension: {element.field}({element.symbol.split(' ')[0]})
              </h4>
              <div className="mb-2">
                <span className="text-dark-400">Degree: </span>
                <span className="text-amber-400 font-bold">
                  [{element.field}({element.symbol.split(' ')[0]}) : {element.field}] = {element.degree}
                </span>
              </div>
              <div className="mb-2">
                <span className="text-dark-400">Basis: </span>
                <span className="text-white font-mono">
                  {'{'} {element.basis.join(', ')} {'}'}
                </span>
              </div>
              <div className="text-sm text-dark-400 mt-2">
                Every element can be written as a {element.field}-linear combination of basis elements
              </div>
            </div>

            {/* Isomorphism */}
            <div className="bg-dark-900 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-primary-400 mb-2">
                Structure Theorem
              </h4>
              <div className="font-mono text-white">
                {element.field}({element.symbol.split(' ')[0]}) ≅ {element.field}[x] / ({element.minPoly})
              </div>
            </div>
          </>
        ) : (
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-red-400 mb-2">
              Transcendental Element
            </h4>
            <p className="text-dark-300">
              {element.symbol} is not the root of any polynomial with coefficients
              in {element.field}. The extension {element.field}({element.symbol})/{element.field} is
              infinite-dimensional.
            </p>
            <p className="text-dark-400 mt-2 text-sm">
              {element.symbol === 'pi'
                ? 'Lindemann (1882) proved π is transcendental.'
                : 'Hermite (1873) proved e is transcendental.'}
            </p>
          </div>
        )}
      </motion.div>

      <p className="text-dark-400 text-sm mt-4">
        An element α is algebraic over F if f(α) = 0 for some polynomial f ∈ F[x].
        The minimal polynomial is the unique monic irreducible polynomial with α as a root.
      </p>
    </div>
  );
}
