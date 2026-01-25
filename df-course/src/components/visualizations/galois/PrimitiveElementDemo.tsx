import { useState } from 'react';
import { motion } from 'framer-motion';

interface PrimitiveExample {
  name: string;
  alpha: string;
  beta: string;
  field: string;
  gamma: string;
  verification: string[];
  degree: number;
}

const EXAMPLES: PrimitiveExample[] = [
  {
    name: 'Q(√2, √3)',
    alpha: '√2',
    beta: '√3',
    field: 'Q(√2, √3)',
    gamma: '√2 + √3',
    verification: [
      'γ = √2 + √3',
      'γ² = 5 + 2√6',
      '√6 = (γ² - 5)/2 ∈ Q(γ)',
      'γ · √6 = 2√3 + 3√2',
      'Solving: √2 = (3γ - γ√6)/2, √3 = (2γ - γ√6)/2',
    ],
    degree: 4,
  },
  {
    name: 'Q(√2, √5)',
    alpha: '√2',
    beta: '√5',
    field: 'Q(√2, √5)',
    gamma: '√2 + √5',
    verification: [
      'γ = √2 + √5',
      'γ² = 7 + 2√10',
      '√10 = (γ² - 7)/2 ∈ Q(γ)',
      'From γ and √10, recover √2 and √5',
    ],
    degree: 4,
  },
  {
    name: 'Q(∛2, ω)',
    alpha: '∛2',
    beta: 'ω = e^(2πi/3)',
    field: 'Q(∛2, ω)',
    gamma: '∛2 + ω',
    verification: [
      'γ = ∛2 + ω where ω² + ω + 1 = 0',
      '[Q(∛2, ω) : Q] = 6',
      'γ generates the full splitting field',
    ],
    degree: 6,
  },
  {
    name: 'Q(i, √2)',
    alpha: 'i',
    beta: '√2',
    field: 'Q(i, √2)',
    gamma: 'i + √2',
    verification: [
      'γ = i + √2',
      'γ² = 2 + 2i√2 - 1 = 1 + 2i√2',
      'γ² - 1 = 2i√2, so i√2 = (γ² - 1)/2',
      'From γ and i√2, recover i and √2',
    ],
    degree: 4,
  },
];

export function PrimitiveElementDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [showVerification, setShowVerification] = useState(false);
  const [cValue, setCValue] = useState(1);

  const example = EXAMPLES[selectedExample];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Primitive Element Theorem
      </h3>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {EXAMPLES.map((ex, i) => (
          <button
            key={ex.name}
            onClick={() => {
              setSelectedExample(i);
              setShowVerification(false);
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

      <div className="grid md:grid-cols-2 gap-6">
        {/* Setup */}
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Extension: {example.field}
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-dark-400">α = </span>
                <span className="text-white font-mono">{example.alpha}</span>
              </div>
              <div>
                <span className="text-dark-400">β = </span>
                <span className="text-white font-mono">{example.beta}</span>
              </div>
              <div>
                <span className="text-dark-400">Degree: </span>
                <span className="text-amber-400">[K:Q] = {example.degree}</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-emerald-400 mb-2">
              Theorem Statement
            </h4>
            <p className="text-dark-300 text-sm">
              For a finite separable extension F(α, β)/F, there exists γ with:
            </p>
            <div className="text-white font-mono text-center my-3">
              F(α, β) = F(γ)
            </div>
            <p className="text-dark-400 text-xs">
              Moreover, γ = α + cβ works for all but finitely many c ∈ F.
            </p>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Try Different c Values
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-dark-300 text-sm">c = </span>
              <input
                type="range"
                min="-3"
                max="3"
                value={cValue}
                onChange={(e) => setCValue(parseInt(e.target.value))}
                className="flex-1"
              />
              <span className="text-white font-mono w-8">{cValue}</span>
            </div>
            <div className="mt-2 text-sm">
              <span className="text-dark-400">γ = α + {cValue}β = </span>
              <span className="text-amber-400 font-mono">
                {example.alpha} + {cValue === 1 ? '' : cValue === -1 ? '-' : cValue}
                {example.beta}
              </span>
            </div>
            <p className="text-dark-400 text-xs mt-2">
              For c = 1: γ = {example.gamma}
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="space-y-4">
          <div className="bg-emerald-900/30 border border-emerald-700 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-emerald-400 mb-2">
              Primitive Element
            </h4>
            <div className="text-xl font-mono text-white text-center my-2">
              γ = {example.gamma}
            </div>
            <div className="text-center text-emerald-400">
              {example.field} = Q(γ)
            </div>
          </div>

          <button
            onClick={() => setShowVerification(!showVerification)}
            className="w-full px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            {showVerification ? 'Hide' : 'Show'} Verification
          </button>

          {showVerification && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-dark-900 rounded-lg p-4"
            >
              <h4 className="text-sm font-semibold text-primary-400 mb-2">
                Proof that Q(γ) = {example.field}
              </h4>
              <ol className="space-y-1">
                {example.verification.map((step, i) => (
                  <li key={i} className="text-dark-300 text-sm font-mono">
                    {i + 1}. {step}
                  </li>
                ))}
              </ol>
            </motion.div>
          )}

          <div className="bg-dark-900 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-400 mb-2">
              Why It Works
            </h4>
            <p className="text-dark-300 text-sm">
              If α₁, ..., αᵣ are conjugates of α and β₁, ..., βₛ are conjugates of β,
              then γ = α + cβ fails only if αᵢ + cβⱼ = αₖ + cβₗ for some i≠k or j≠l.
              This gives only finitely many "bad" values of c.
            </p>
          </div>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        The Primitive Element Theorem: every finite separable extension is simple.
        This simplifies computations by reducing multi-generator extensions to single generators.
      </p>
    </div>
  );
}
