import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExtensionLevel {
  field: string;
  degree: number;
  basis: string[];
  element?: string;
}

const EXTENSION_EXAMPLES: { name: string; tower: ExtensionLevel[] }[] = [
  {
    name: 'Q(sqrt(2))/Q',
    tower: [
      { field: 'Q', degree: 1, basis: ['1'] },
      { field: 'Q(sqrt(2))', degree: 2, basis: ['1', 'sqrt(2)'], element: 'sqrt(2)' },
    ],
  },
  {
    name: 'Q(sqrt(2), sqrt(3))/Q',
    tower: [
      { field: 'Q', degree: 1, basis: ['1'] },
      { field: 'Q(sqrt(2))', degree: 2, basis: ['1', 'sqrt(2)'], element: 'sqrt(2)' },
      { field: 'Q(sqrt(2), sqrt(3))', degree: 2, basis: ['1', 'sqrt(3)'], element: 'sqrt(3)' },
    ],
  },
  {
    name: 'Q(cbrt(2))/Q',
    tower: [
      { field: 'Q', degree: 1, basis: ['1'] },
      { field: 'Q(cbrt(2))', degree: 3, basis: ['1', 'cbrt(2)', 'cbrt(4)'], element: 'cbrt(2)' },
    ],
  },
  {
    name: 'C/R',
    tower: [
      { field: 'R', degree: 1, basis: ['1'] },
      { field: 'C', degree: 2, basis: ['1', 'i'], element: 'i' },
    ],
  },
  {
    name: 'Q(zeta_5)/Q',
    tower: [
      { field: 'Q', degree: 1, basis: ['1'] },
      { field: 'Q(zeta_5)', degree: 4, basis: ['1', 'zeta', 'zeta^2', 'zeta^3'], element: 'zeta_5' },
    ],
  },
];

export function FieldExtensionDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [showBasis, setShowBasis] = useState(true);

  const example = EXTENSION_EXAMPLES[selectedExample];
  const tower = example.tower;

  // Calculate total degree using Tower Law
  const totalDegree = tower.slice(1).reduce((acc, level) => acc * level.degree, 1);

  // Calculate full basis over base field
  const fullBasis: string[] = [];
  if (tower.length === 2) {
    fullBasis.push(...tower[1].basis);
  } else if (tower.length === 3) {
    // Tensor product of bases
    for (const b1 of tower[1].basis) {
      for (const b2 of tower[2].basis) {
        if (b1 === '1' && b2 === '1') fullBasis.push('1');
        else if (b1 === '1') fullBasis.push(b2);
        else if (b2 === '1') fullBasis.push(b1);
        else fullBasis.push(`${b1} * ${b2}`);
      }
    }
  }

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Field Extension Tower
      </h3>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {EXTENSION_EXAMPLES.map((ex, i) => (
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

      {/* Tower visualization */}
      <div className="relative mb-6">
        <div className="flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            {tower.slice().reverse().map((level, i) => {
              const actualIndex = tower.length - 1 - i;
              const isBase = actualIndex === 0;

              return (
                <motion.div
                  key={level.field}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Extension arrow */}
                  {!isBase && (
                    <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 translate-y-full">
                      <div className="flex flex-col items-center">
                        <div className="h-6 w-0.5 bg-primary-400" />
                        <div className="text-xs text-primary-400 mt-1">
                          [{level.degree}]
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Field box */}
                  <div
                    className={`px-6 py-3 rounded-lg border-2 ${
                      isBase
                        ? 'bg-dark-900 border-dark-500'
                        : 'bg-dark-700 border-primary-500'
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-lg font-mono text-white">
                        {level.field}
                      </span>
                      {level.element && (
                        <span className="text-xs text-dark-400 ml-2">
                          (adjoined: {level.element})
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Tower Law calculation */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <h4 className="text-sm font-semibold text-primary-400 mb-2">
          Tower Law: [K : F] = [K : L] * [L : F]
        </h4>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-white font-mono">
            [{tower[tower.length - 1].field} : {tower[0].field}]
          </span>
          <span className="text-dark-400">=</span>
          {tower.slice(1).map((level, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-dark-400">×</span>}
              <span className="text-emerald-400 font-mono">{level.degree}</span>
            </span>
          ))}
          <span className="text-dark-400">=</span>
          <span className="text-xl text-amber-400 font-bold">{totalDegree}</span>
        </div>
      </div>

      {/* Basis display */}
      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={() => setShowBasis(!showBasis)}
          className={`px-3 py-1 rounded text-sm transition-all ${
            showBasis ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          {showBasis ? 'Hide Basis' : 'Show Basis'}
        </button>
      </div>

      <AnimatePresence>
        {showBasis && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-900 rounded-lg p-4"
          >
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Basis of {tower[tower.length - 1].field} over {tower[0].field}:
            </h4>
            <div className="flex flex-wrap gap-2">
              {fullBasis.map((b, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-dark-700 rounded text-sm font-mono text-white"
                >
                  {b}
                </span>
              ))}
            </div>
            <p className="text-dark-400 text-sm mt-2">
              Dimension: {fullBasis.length} (matches degree {totalDegree})
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-dark-400 text-sm mt-4">
        Field extensions form towers where degrees multiply. The Tower Law states
        [L:F] = [L:K][K:F] for F ⊆ K ⊆ L.
      </p>
    </div>
  );
}
