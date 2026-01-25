import { useState } from 'react';
import { motion } from 'framer-motion';

interface InductionExample {
  group: string;
  subgroup: string;
  index: number;
  subgroupChar: string;
  inducedChar: string;
  decomposition: string;
  explanation: string;
}

const EXAMPLES: InductionExample[] = [
  {
    group: 'S₃',
    subgroup: 'A₃ = Z/3',
    index: 2,
    subgroupChar: 'trivial (1)',
    inducedChar: 'Ind(1)',
    decomposition: 'trivial + sign',
    explanation: 'Permutation char on S₃/A₃ splits into two 1-dim reps',
  },
  {
    group: 'S₃',
    subgroup: 'A₃ = Z/3',
    index: 2,
    subgroupChar: 'ψ₁ (ω)',
    inducedChar: 'Ind(ψ₁)',
    decomposition: 'standard (2-dim)',
    explanation: 'Non-trivial A₃ char induces to the standard representation',
  },
  {
    group: 'S₄',
    subgroup: 'S₃',
    index: 4,
    subgroupChar: 'trivial (1)',
    inducedChar: 'Ind(1)',
    decomposition: 'trivial + standard',
    explanation: 'Permutation char on S₄/S₃ ≅ {1,2,3,4}',
  },
  {
    group: 'D₄',
    subgroup: 'Z/4 = ⟨r⟩',
    index: 2,
    subgroupChar: 'χ₁ (i)',
    inducedChar: 'Ind(χ₁)',
    decomposition: '2-dim irrep',
    explanation: 'Complex 1-dim char of Z/4 induces to 2-dim rep of D₄',
  },
];

export function InducedCharDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [showFrobenius, setShowFrobenius] = useState(false);

  const example = EXAMPLES[selectedExample];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Induced Characters
      </h4>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {EXAMPLES.map((ex, i) => (
          <button
            key={i}
            onClick={() => setSelectedExample(i)}
            className={`px-3 py-1 rounded text-sm ${
              selectedExample === i
                ? 'bg-blue-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {ex.subgroup} → {ex.group}
          </button>
        ))}
      </div>

      {/* Induction diagram */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <motion.div
          key={selectedExample}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <div className="text-xs text-dark-400 mb-1">Subgroup</div>
              <div className="px-4 py-2 bg-blue-500/20 rounded border border-blue-500/30">
                <div className="font-mono text-blue-400">{example.subgroup}</div>
              </div>
            </div>
            <div className="text-dark-400">⊆</div>
            <div className="text-center">
              <div className="text-xs text-dark-400 mb-1">Group</div>
              <div className="px-4 py-2 bg-emerald-500/20 rounded border border-emerald-500/30">
                <div className="font-mono text-emerald-400">{example.group}</div>
              </div>
            </div>
            <div className="text-sm text-dark-400">
              [G:H] = {example.index}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 my-4">
            <div className="text-center">
              <div className="text-xs text-dark-400 mb-1">H-character</div>
              <div className="px-3 py-1 bg-blue-500/10 rounded font-mono text-sm text-blue-400">
                {example.subgroupChar}
              </div>
            </div>
            <div className="text-xl text-dark-400">→</div>
            <div className="text-center">
              <div className="text-xs text-dark-400 mb-1">Induced G-character</div>
              <div className="px-3 py-1 bg-amber-500/10 rounded font-mono text-sm text-amber-400">
                {example.inducedChar}
              </div>
            </div>
            <div className="text-dark-400">=</div>
            <div className="px-3 py-1 bg-primary-500/10 rounded font-mono text-sm text-primary-400">
              {example.decomposition}
            </div>
          </div>

          <div className="text-center text-sm text-dark-400">
            {example.explanation}
          </div>
        </motion.div>
      </div>

      {/* Formulas */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-sm text-dark-400 mb-3">Induced Character Formula:</div>
        <div className="bg-dark-800 p-3 rounded font-mono text-center text-sm">
          Ind_H^G(ψ)(g) = (1/|H|) Σ_{'{x: x⁻¹gx ∈ H}'} ψ(x⁻¹gx)
        </div>
        <div className="text-center text-xs text-dark-500 mt-2">
          dim(Ind_H^G(W)) = [G:H] · dim(W)
        </div>
      </div>

      {/* Frobenius Reciprocity */}
      <div className="bg-dark-900 rounded-lg p-4">
        <button
          onClick={() => setShowFrobenius(!showFrobenius)}
          className="text-sm text-dark-400 hover:text-dark-200 flex items-center gap-2"
        >
          <span>{showFrobenius ? '▼' : '▶'}</span>
          Frobenius Reciprocity
        </button>

        {showFrobenius && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 space-y-3"
          >
            <div className="bg-primary-500/10 p-4 rounded border border-primary-500/30">
              <div className="font-mono text-center text-lg">
                ⟨Ind_H^G(ψ), χ⟩_G = ⟨ψ, Res_H^G(χ)⟩_H
              </div>
              <div className="text-center text-sm text-dark-400 mt-2">
                Induction is adjoint to restriction!
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-dark-800 p-3 rounded">
                <div className="text-blue-400 font-semibold text-sm mb-1">Meaning</div>
                <p className="text-xs text-dark-300">
                  Multiplicity of χ in Ind(ψ) equals multiplicity of ψ in Res(χ)
                </p>
              </div>
              <div className="bg-dark-800 p-3 rounded">
                <div className="text-emerald-400 font-semibold text-sm mb-1">Application</div>
                <p className="text-xs text-dark-300">
                  Decompose induced representations by computing inner products
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 text-xs text-dark-500">
        Induction builds G-representations from H-representations. Frobenius reciprocity is the key tool.
      </div>
    </div>
  );
}
