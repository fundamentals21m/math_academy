import { useState } from 'react';
import { motion } from 'framer-motion';

interface ComputationStep {
  step: string;
  result: string;
  implication: string;
}

interface ComputationExample {
  name: string;
  polynomial: string;
  steps: ComputationStep[];
  conclusion: string;
  galoisGroup: string;
}

const EXAMPLES: ComputationExample[] = [
  {
    name: 'x³ - 2',
    polynomial: 'x³ - 2',
    steps: [
      {
        step: 'Check irreducibility',
        result: 'Eisenstein with p=2: irreducible',
        implication: 'Gal(f) acts transitively on 3 roots',
      },
      {
        step: 'Compute discriminant',
        result: 'Δ = -4(0)³ - 27(-2)² = -108',
        implication: '-108 is not a square',
      },
      {
        step: 'Apply discriminant test',
        result: 'Gal(f) ⊄ A₃',
        implication: 'Gal(f) = S₃',
      },
    ],
    conclusion: 'Transitive + not in A₃ + degree 3 → S₃',
    galoisGroup: 'S₃',
  },
  {
    name: 'x³ - 3x - 1',
    polynomial: 'x³ - 3x - 1',
    steps: [
      {
        step: 'Check irreducibility',
        result: 'No rational roots (check ±1)',
        implication: 'Irreducible over Q',
      },
      {
        step: 'Compute discriminant',
        result: 'Δ = -4(-3)³ - 27(-1)² = 108 - 27 = 81',
        implication: '81 = 9² is a perfect square',
      },
      {
        step: 'Apply discriminant test',
        result: 'Gal(f) ⊆ A₃',
        implication: 'Combined with transitivity: Gal(f) = A₃',
      },
    ],
    conclusion: 'Transitive + Δ square + degree 3 → A₃',
    galoisGroup: 'A₃ ≅ Z/3Z',
  },
  {
    name: 'x⁴ - 2',
    polynomial: 'x⁴ - 2',
    steps: [
      {
        step: 'Check irreducibility',
        result: 'Eisenstein with p=2: irreducible',
        implication: 'Degree 4 → |Gal(f)| divisible by 4',
      },
      {
        step: 'Find splitting field',
        result: 'K = Q(⁴√2, i)',
        implication: '[K:Q] = [Q(⁴√2):Q] · [Q(⁴√2,i):Q(⁴√2)] = 4 · 2 = 8',
      },
      {
        step: 'Identify group',
        result: '|Gal(f)| = 8, transitive on 4 elements',
        implication: 'Only D₄ has order 8 among transitive subgroups of S₄',
      },
    ],
    conclusion: 'Order 8 + transitive → D₄',
    galoisGroup: 'D₄',
  },
  {
    name: 'x⁵ - x + 1',
    polynomial: 'x⁵ - x + 1',
    steps: [
      {
        step: 'Check irreducibility',
        result: 'Mod 2: x⁵+x+1 = (x²+x+1)(x³+x²+1), but over Q it\'s irreducible',
        implication: 'Need more careful argument (or Dedekind)',
      },
      {
        step: 'Dedekind mod 2',
        result: 'Factors as (2)(3) → cycle types (2,3)',
        implication: 'Gal(f) contains element of type (2,3)',
      },
      {
        step: 'Dedekind mod 3',
        result: 'Irreducible mod 3',
        implication: 'Gal(f) contains a 5-cycle',
      },
      {
        step: 'Combine',
        result: '5-cycle + (2,3) element',
        implication: 'Together generate S₅ or A₅',
      },
    ],
    conclusion: 'Contains 5-cycle and transposition → S₅',
    galoisGroup: 'S₅',
  },
];

export function GaloisComputerDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const example = EXAMPLES[selectedExample];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Computing Galois Groups
      </h3>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {EXAMPLES.map((ex, i) => (
          <button
            key={ex.name}
            onClick={() => {
              setSelectedExample(i);
              setCurrentStep(0);
            }}
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

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <h4 className="text-sm font-semibold text-primary-400 mb-2">
          Polynomial
        </h4>
        <div className="text-xl font-mono text-white">
          f(x) = {example.polynomial}
        </div>
      </div>

      {/* Step-by-step computation */}
      <div className="space-y-4">
        {example.steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: i <= currentStep ? 1 : 0.3,
              x: 0,
            }}
            transition={{ delay: i * 0.1 }}
            className={`bg-dark-900 rounded-lg p-4 ${
              i <= currentStep ? '' : 'opacity-30'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 text-white text-sm flex items-center justify-center">
                {i + 1}
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-primary-400">
                  {step.step}
                </h4>
                <div className="text-white font-mono text-sm mt-1">
                  {step.result}
                </div>
                <div className="text-dark-400 text-sm mt-1">
                  → {step.implication}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 my-4">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentStep(Math.min(example.steps.length - 1, currentStep + 1))
          }
          disabled={currentStep === example.steps.length - 1}
          className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 disabled:opacity-50"
        >
          Next
        </button>
        <button
          onClick={() => setCurrentStep(example.steps.length - 1)}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
        >
          Show All
        </button>
      </div>

      {/* Conclusion */}
      {currentStep === example.steps.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-900/30 border border-emerald-700 rounded-lg p-4"
        >
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">
            Conclusion
          </h4>
          <div className="text-dark-300 text-sm mb-2">{example.conclusion}</div>
          <div className="text-xl font-mono text-white text-center">
            Gal(f) = {example.galoisGroup}
          </div>
        </motion.div>
      )}

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-primary-400 mb-2">
          General Algorithm
        </h4>
        <ol className="text-dark-300 text-sm space-y-1">
          <li>1. Check irreducibility (Eisenstein, rational roots)</li>
          <li>2. Compute |Gal(f)| = [splitting field : Q]</li>
          <li>3. Compute discriminant Δ (is Gal(f) ⊆ Aₙ?)</li>
          <li>4. Use Dedekind's theorem with several primes</li>
          <li>5. Count real/complex roots (for prime degree)</li>
          <li>6. Match against transitive subgroups of Sₙ</li>
        </ol>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        Computing Galois groups combines multiple techniques: irreducibility,
        discriminants, and reduction mod primes (Dedekind's theorem).
      </p>
    </div>
  );
}
