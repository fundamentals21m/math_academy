import { useState } from 'react';
import { motion } from 'framer-motion';

interface PolynomialExample {
  name: string;
  polynomial: string;
  degree: number;
  discriminant: string;
  discriminantValue: number;
  isSquare: boolean;
  galoisGroup: string;
  groupOrder: number;
  explanation: string;
}

const EXAMPLES: PolynomialExample[] = [
  {
    name: 'x³ - 2',
    polynomial: 'x³ - 2',
    degree: 3,
    discriminant: '-4(0)³ - 27(-2)² = -108',
    discriminantValue: -108,
    isSquare: false,
    galoisGroup: 'S₃',
    groupOrder: 6,
    explanation: 'Δ = -108 is not a square, so Gal(f) = S₃',
  },
  {
    name: 'x³ - 3x - 1',
    polynomial: 'x³ - 3x - 1',
    degree: 3,
    discriminant: '-4(-3)³ - 27(-1)² = 108 - 27 = 81',
    discriminantValue: 81,
    isSquare: true,
    galoisGroup: 'A₃ ≅ Z/3Z',
    groupOrder: 3,
    explanation: 'Δ = 81 = 9² is a square, so Gal(f) = A₃',
  },
  {
    name: 'x⁴ - 2',
    polynomial: 'x⁴ - 2',
    degree: 4,
    discriminant: '-2048',
    discriminantValue: -2048,
    isSquare: false,
    galoisGroup: 'D₄',
    groupOrder: 8,
    explanation: 'Splitting field has degree 8 = |D₄|',
  },
  {
    name: 'x⁴ + 1',
    polynomial: 'x⁴ + 1',
    degree: 4,
    discriminant: '256',
    discriminantValue: 256,
    isSquare: true,
    galoisGroup: 'V₄ (Klein)',
    groupOrder: 4,
    explanation: 'Roots are primitive 8th roots of unity',
  },
  {
    name: 'x⁵ - 6x + 3',
    polynomial: 'x⁵ - 6x + 3',
    degree: 5,
    discriminant: '(large negative)',
    discriminantValue: -1,
    isSquare: false,
    galoisGroup: 'S₅',
    groupOrder: 120,
    explanation: 'Has exactly 3 real roots, so contains transposition. Irreducible of prime degree → S₅',
  },
  {
    name: 'x⁵ - 2',
    polynomial: 'x⁵ - 2',
    degree: 5,
    discriminant: '(negative)',
    discriminantValue: -1,
    isSquare: false,
    galoisGroup: 'F₂₀ (Frobenius)',
    groupOrder: 20,
    explanation: 'Splitting field Q(⁵√2, ζ₅) has degree 20',
  },
];

export function PolynomialGaloisDemo() {
  const [selectedExample, setSelectedExample] = useState(0);

  const example = EXAMPLES[selectedExample];

  // Transitive subgroups info
  const transitiveSubgroups: { [n: number]: string[] } = {
    3: ['S₃ (6)', 'A₃ (3)'],
    4: ['S₄ (24)', 'A₄ (12)', 'D₄ (8)', 'V₄ (4)', 'Z/4Z (4)'],
    5: ['S₅ (120)', 'A₅ (60)', 'F₂₀ (20)', 'D₅ (10)', 'Z/5Z (5)'],
  };

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Galois Groups of Polynomials
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
        {/* Polynomial info */}
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Polynomial
            </h4>
            <div className="text-xl font-mono text-white">
              f(x) = {example.polynomial}
            </div>
            <div className="text-dark-300 text-sm mt-1">
              Degree: {example.degree}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Discriminant
            </h4>
            <div className="font-mono text-white text-sm">
              Δ = {example.discriminant}
            </div>
            <div className="mt-2">
              <span className="text-dark-400">Is Δ a square? </span>
              <span className={example.isSquare ? 'text-emerald-400' : 'text-red-400'}>
                {example.isSquare ? 'Yes' : 'No'}
              </span>
            </div>
            <p className="text-dark-400 text-xs mt-2">
              Gal(f) ⊆ Aₙ iff Δ is a square in the base field
            </p>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Transitive Subgroups of S_{example.degree}
            </h4>
            <div className="flex flex-wrap gap-2">
              {transitiveSubgroups[example.degree]?.map((g) => (
                <span
                  key={g}
                  className={`px-2 py-1 rounded text-xs ${
                    g.startsWith(example.galoisGroup.split(' ')[0])
                      ? 'bg-amber-900/50 text-amber-400'
                      : 'bg-dark-700 text-dark-300'
                  }`}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="space-y-4">
          <div className="bg-emerald-900/30 border border-emerald-700 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-emerald-400 mb-2">
              Galois Group
            </h4>
            <div className="text-2xl font-mono text-white text-center my-2">
              Gal(f) = {example.galoisGroup}
            </div>
            <div className="text-center text-dark-300">
              Order: {example.groupOrder}
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Reasoning
            </h4>
            <p className="text-dark-300 text-sm">{example.explanation}</p>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Solvability
            </h4>
            {example.groupOrder <= 24 || example.galoisGroup.includes('F₂₀') ? (
              <div className="text-emerald-400">
                ✓ Solvable group → f is solvable by radicals
              </div>
            ) : (
              <div className="text-red-400">
                ✗ {example.galoisGroup} is not solvable → f cannot be solved by radicals
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-primary-400 mb-2">
          Algorithm for Cubics
        </h4>
        <ol className="text-dark-300 text-sm space-y-1">
          <li>1. Check irreducibility (rational root test)</li>
          <li>2. Compute Δ = -4p³ - 27q² for x³ + px + q</li>
          <li>3. If Δ is a square: Gal(f) = A₃. Otherwise: Gal(f) = S₃</li>
        </ol>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        The discriminant determines if Gal(f) ⊆ Aₙ. For cubics, this
        completely determines the Galois group. For higher degrees,
        additional tools (resolvent polynomials, Dedekind's theorem) are needed.
      </p>
    </div>
  );
}
