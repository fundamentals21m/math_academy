import { useState } from 'react';
import { motion } from 'framer-motion';

interface FactorizationExample {
  ring: string;
  element: string;
  elementFact: string;
  idealFact: string;
  isUFD: boolean;
}

const FACTORIZATIONS: FactorizationExample[] = [
  {
    ring: 'Z',
    element: '60',
    elementFact: '60 = 2² × 3 × 5',
    idealFact: '(60) = (2)² (3) (5)',
    isUFD: true,
  },
  {
    ring: 'Z[√-5]',
    element: '6',
    elementFact: '6 = 2 × 3 = (1+√-5)(1-√-5)',
    idealFact: '(6) = p² q q̄ where p=(2,1+√-5)',
    isUFD: false,
  },
  {
    ring: 'Z[i]',
    element: '5',
    elementFact: '5 = (2+i)(2-i)',
    idealFact: '(5) = (2+i)(2-i)',
    isUFD: true,
  },
];

interface ClassGroupExample {
  field: string;
  ring: string;
  classNumber: number;
  isPID: boolean;
}

const CLASS_GROUPS: ClassGroupExample[] = [
  { field: 'Q(√-1)', ring: 'Z[i]', classNumber: 1, isPID: true },
  { field: 'Q(√-2)', ring: 'Z[√-2]', classNumber: 1, isPID: true },
  { field: 'Q(√-5)', ring: 'Z[√-5]', classNumber: 2, isPID: false },
  { field: 'Q(√-23)', ring: 'O_K', classNumber: 3, isPID: false },
  { field: 'Q(√5)', ring: 'Z[(1+√5)/2]', classNumber: 1, isPID: true },
];

export function DedekindDemo() {
  const [selectedFact, setSelectedFact] = useState(0);
  const [selectedClass, setSelectedClass] = useState(0);
  const [mode, setMode] = useState<'factorization' | 'class'>('factorization');

  const fact = FACTORIZATIONS[selectedFact];
  const cls = CLASS_GROUPS[selectedClass];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-primary-400">
          Dedekind Domains
        </h4>
        <div className="flex gap-2">
          <button
            onClick={() => setMode('factorization')}
            className={`px-3 py-1 rounded text-sm ${
              mode === 'factorization'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Ideal Factorization
          </button>
          <button
            onClick={() => setMode('class')}
            className={`px-3 py-1 rounded text-sm ${
              mode === 'class'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Class Groups
          </button>
        </div>
      </div>

      {mode === 'factorization' ? (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {FACTORIZATIONS.map((f, i) => (
              <button
                key={i}
                onClick={() => setSelectedFact(i)}
                className={`px-3 py-1 rounded text-sm ${
                  selectedFact === i
                    ? 'bg-amber-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {f.ring}
              </button>
            ))}
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <div className="text-sm text-dark-400 mb-4">
              Factoring {fact.element} in {fact.ring}:
            </div>

            <div className="space-y-4">
              {/* Element factorization */}
              <div className={`p-3 rounded ${
                fact.isUFD
                  ? 'bg-emerald-500/10 border border-emerald-500/30'
                  : 'bg-red-500/10 border border-red-500/30'
              }`}>
                <div className="text-xs text-dark-400 mb-1">Element factorization:</div>
                <div className="font-mono text-lg">
                  {fact.elementFact}
                </div>
                {!fact.isUFD && (
                  <div className="text-xs text-red-400 mt-1">
                    Not unique! (not a UFD)
                  </div>
                )}
              </div>

              {/* Ideal factorization */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 rounded bg-emerald-500/10 border border-emerald-500/30"
              >
                <div className="text-xs text-dark-400 mb-1">Ideal factorization:</div>
                <div className="font-mono text-lg text-emerald-400">
                  {fact.idealFact}
                </div>
                <div className="text-xs text-emerald-400 mt-1">
                  Always unique in Dedekind domains!
                </div>
              </motion.div>
            </div>

            <div className={`mt-4 p-2 rounded text-sm ${
              fact.isUFD
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'bg-amber-500/10 text-amber-400'
            }`}>
              {fact.ring} is {fact.isUFD ? 'a UFD (and PID)' : 'Dedekind but NOT a UFD'}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {CLASS_GROUPS.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedClass(i)}
                className={`px-3 py-1 rounded text-sm ${
                  selectedClass === i
                    ? 'bg-purple-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {c.field}
              </button>
            ))}
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-xs text-dark-400 mb-1">Number Field</div>
                <div className="text-xl text-purple-400 font-mono">{cls.field}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-dark-400 mb-1">Ring of Integers</div>
                <div className="text-xl text-blue-400 font-mono">{cls.ring}</div>
              </div>
            </div>

            <div className="text-center mb-4">
              <div className="text-xs text-dark-400 mb-1">Class Number h_K</div>
              <motion.div
                key={selectedClass}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-4xl font-bold text-amber-400"
              >
                {cls.classNumber}
              </motion.div>
            </div>

            <div className={`p-3 rounded text-center ${
              cls.isPID
                ? 'bg-emerald-500/10 border border-emerald-500/30'
                : 'bg-amber-500/10 border border-amber-500/30'
            }`}>
              <span className={cls.isPID ? 'text-emerald-400' : 'text-amber-400'}>
                {cls.isPID
                  ? 'h = 1 ⟹ PID (unique element factorization)'
                  : `h = ${cls.classNumber} > 1 ⟹ NOT a PID`
                }
              </span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-dark-900/50 rounded text-sm">
            <div className="text-dark-400 mb-2">The Class Group Cl(R):</div>
            <div className="text-dark-300">
              Cl(R) = {'{fractional ideals}'} / {'{principal ideals}'}
            </div>
            <div className="text-dark-400 text-xs mt-2">
              Measures "how far" R is from being a PID
            </div>
          </div>
        </div>
      )}

      {/* Dedekind properties */}
      <div className="mt-4 p-3 bg-dark-900/50 rounded text-sm">
        <div className="text-dark-400 mb-2">Dedekind Domain Characterization:</div>
        <ul className="space-y-1 text-dark-300">
          <li>• Noetherian + integrally closed + dim ≤ 1</li>
          <li>• Every nonzero ideal factors uniquely into primes</li>
          <li>• R_p is a DVR for every nonzero prime p</li>
          <li>• Every fractional ideal is invertible</li>
        </ul>
      </div>

      <div className="mt-4 text-xs text-dark-500">
        Dedekind domains rescue unique factorization at the ideal level.
        The class group measures the failure of element UFD.
      </div>
    </div>
  );
}
