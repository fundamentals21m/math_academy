import { useState } from 'react';
import { motion } from 'framer-motion';

interface Correspondence {
  algebraic: string;
  geometric: string;
  description: string;
}

const CORRESPONDENCES: Correspondence[] = [
  { algebraic: 'Radical ideals', geometric: 'Algebraic sets', description: 'Perfect bijection via V and I' },
  { algebraic: 'Prime ideals', geometric: 'Irreducible varieties', description: 'X irreducible ⟺ I(X) prime' },
  { algebraic: 'Maximal ideals', geometric: 'Points', description: 'm = (x₁-a₁,...,xₙ-aₙ) ↔ (a₁,...,aₙ)' },
  { algebraic: 'I ∩ J', geometric: 'V(I) ∪ V(J)', description: 'Intersection ↔ Union' },
  { algebraic: 'I + J', geometric: 'V(I) ∩ V(J)', description: 'Sum ↔ Intersection' },
];

interface ExampleSystem {
  name: string;
  polynomials: string[];
  overR: { hasZeros: boolean; reason: string };
  overC: { hasZeros: boolean; reason: string };
}

const EXAMPLE_SYSTEMS: ExampleSystem[] = [
  {
    name: 'Circle',
    polynomials: ['x² + y² - 1'],
    overR: { hasZeros: true, reason: 'Many solutions: (1,0), (0,1), etc.' },
    overC: { hasZeros: true, reason: 'Same solutions, plus complex ones' },
  },
  {
    name: 'No real solution',
    polynomials: ['x² + 1'],
    overR: { hasZeros: false, reason: 'x² ≥ 0 for real x' },
    overC: { hasZeros: true, reason: 'x = ±i are solutions (algebraically closed!)' },
  },
  {
    name: 'Empty over both',
    polynomials: ['1'],
    overR: { hasZeros: false, reason: '1 ≠ 0 always' },
    overC: { hasZeros: false, reason: 'Ideal is (1) = whole ring' },
  },
  {
    name: 'Two equations',
    polynomials: ['x² - y', 'y - 1'],
    overR: { hasZeros: true, reason: 'y = 1, x = ±1' },
    overC: { hasZeros: true, reason: 'Same: (1,1) and (-1,1)' },
  },
];

export function NullstellensatzDemo() {
  const [selectedSystem, setSelectedSystem] = useState(0);
  const [showStrong, setShowStrong] = useState(false);

  const system = EXAMPLE_SYSTEMS[selectedSystem];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Hilbert's Nullstellensatz
      </h4>

      {/* The fundamental theorem */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setShowStrong(false)}
            className={`px-4 py-2 rounded ${
              !showStrong
                ? 'bg-blue-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Weak Form
          </button>
          <button
            onClick={() => setShowStrong(true)}
            className={`px-4 py-2 rounded ${
              showStrong
                ? 'bg-purple-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Strong Form
          </button>
        </div>

        <motion.div
          key={showStrong ? 'strong' : 'weak'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          {!showStrong ? (
            <div>
              <div className="text-xl text-blue-400 mb-2">Weak Nullstellensatz</div>
              <div className="text-dark-200">
                Over an algebraically closed field k:
              </div>
              <div className="text-lg mt-2 font-mono">
                I ⊊ k[x₁,...,xₙ] proper ⟹ <span className="text-emerald-400">V(I) ≠ ∅</span>
              </div>
              <div className="text-sm text-dark-400 mt-2">
                Every proper ideal has at least one common zero
              </div>
            </div>
          ) : (
            <div>
              <div className="text-xl text-purple-400 mb-2">Strong Nullstellensatz</div>
              <div className="text-dark-200">
                Over an algebraically closed field k:
              </div>
              <div className="text-lg mt-2 font-mono">
                <span className="text-purple-400">I(V(I)) = √I</span>
              </div>
              <div className="text-sm text-dark-400 mt-2">
                The ideal of the zero set equals the radical
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Example systems */}
      <div className="mb-6">
        <div className="text-sm text-dark-400 mb-2">Test polynomial systems:</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {EXAMPLE_SYSTEMS.map((sys, i) => (
            <button
              key={i}
              onClick={() => setSelectedSystem(i)}
              className={`px-3 py-1 rounded text-sm ${
                selectedSystem === i
                  ? 'bg-amber-500 text-white'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {sys.name}
            </button>
          ))}
        </div>

        <div className="bg-dark-900 rounded-lg p-4">
          <div className="text-center mb-4">
            <span className="text-dark-400">System: </span>
            {system.polynomials.map((p, i) => (
              <span key={i}>
                <span className="font-mono text-amber-400">{p}</span>
                {i < system.polynomials.length - 1 && <span className="text-dark-400"> = </span>}
              </span>
            ))}
            <span className="text-dark-400"> = 0</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className={`p-3 rounded ${
              system.overR.hasZeros
                ? 'bg-emerald-500/10 border border-emerald-500/30'
                : 'bg-red-500/10 border border-red-500/30'
            }`}>
              <div className="text-sm font-semibold mb-1">Over ℝ</div>
              <div className={system.overR.hasZeros ? 'text-emerald-400' : 'text-red-400'}>
                {system.overR.hasZeros ? '✓ Has zeros' : '✗ No zeros'}
              </div>
              <div className="text-xs text-dark-400 mt-1">{system.overR.reason}</div>
            </div>
            <div className={`p-3 rounded ${
              system.overC.hasZeros
                ? 'bg-emerald-500/10 border border-emerald-500/30'
                : 'bg-red-500/10 border border-red-500/30'
            }`}>
              <div className="text-sm font-semibold mb-1">Over ℂ (alg. closed)</div>
              <div className={system.overC.hasZeros ? 'text-emerald-400' : 'text-red-400'}>
                {system.overC.hasZeros ? '✓ Has zeros' : '✗ No zeros'}
              </div>
              <div className="text-xs text-dark-400 mt-1">{system.overC.reason}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Correspondence table */}
      <div className="bg-dark-900 rounded-lg p-4">
        <div className="text-sm text-dark-400 mb-3">Algebra-Geometry Dictionary:</div>
        <div className="space-y-2">
          {CORRESPONDENCES.map((corr, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-sm"
            >
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded min-w-[140px]">
                {corr.algebraic}
              </span>
              <span className="text-dark-400">↔</span>
              <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded min-w-[140px]">
                {corr.geometric}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-dark-500">
        The Nullstellensatz establishes a perfect correspondence between algebra and geometry
        over algebraically closed fields.
      </div>
    </div>
  );
}
