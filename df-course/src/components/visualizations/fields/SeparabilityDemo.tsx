import { useState } from 'react';
import { motion } from 'framer-motion';

interface PolynomialCase {
  name: string;
  f: string;
  fPrime: string;
  characteristic: string;
  gcd: string;
  isSeparable: boolean;
  explanation: string;
  roots?: string;
}

const CASES: PolynomialCase[] = [
  {
    name: 'x² - 2 over Q',
    f: 'x² - 2',
    fPrime: '2x',
    characteristic: '0',
    gcd: '1',
    isSeparable: true,
    explanation: 'gcd(x² - 2, 2x) = 1, so no repeated roots',
    roots: '±√2 (distinct)',
  },
  {
    name: 'x³ - 2 over Q',
    f: 'x³ - 2',
    fPrime: '3x²',
    characteristic: '0',
    gcd: '1',
    isSeparable: true,
    explanation: 'gcd(x³ - 2, 3x²) = 1, so no repeated roots',
    roots: '∛2, ω∛2, ω²∛2 (distinct)',
  },
  {
    name: '(x - 1)² over Q',
    f: 'x² - 2x + 1',
    fPrime: '2x - 2',
    characteristic: '0',
    gcd: 'x - 1',
    isSeparable: false,
    explanation: 'gcd = x - 1, so x = 1 is a repeated root',
    roots: '1 (multiplicity 2)',
  },
  {
    name: 'x³ - 1 over Q',
    f: 'x³ - 1',
    fPrime: '3x²',
    characteristic: '0',
    gcd: '1',
    isSeparable: true,
    explanation: 'gcd(x³ - 1, 3x²) = 1, so no repeated roots',
    roots: '1, ω, ω² (distinct)',
  },
  {
    name: 'x^p - t over F_p(t)',
    f: 'xᵖ - t',
    fPrime: 'pxᵖ⁻¹ = 0',
    characteristic: 'p',
    gcd: 'xᵖ - t',
    isSeparable: false,
    explanation: 'f\' = 0 in char p! Root α has multiplicity p: (x - α)ᵖ = xᵖ - αᵖ = xᵖ - t',
    roots: 'α with αᵖ = t (multiplicity p)',
  },
  {
    name: 'x² + 1 over F_2',
    f: 'x² + 1',
    fPrime: '2x = 0',
    characteristic: '2',
    gcd: 'x² + 1',
    isSeparable: false,
    explanation: 'f\' = 0 in char 2. Note: x² + 1 = (x + 1)² in F_2',
    roots: '1 (multiplicity 2)',
  },
  {
    name: 'x³ + x + 1 over F_2',
    f: 'x³ + x + 1',
    fPrime: '3x² + 1 = x² + 1',
    characteristic: '2',
    gcd: '1',
    isSeparable: true,
    explanation: 'gcd(x³ + x + 1, x² + 1) = 1, separable despite char 2',
    roots: '3 distinct roots in F_8',
  },
];

export function SeparabilityDemo() {
  const [selectedCase, setSelectedCase] = useState(0);
  const [showDerivativeCalc, setShowDerivativeCalc] = useState(false);

  const caseData = CASES[selectedCase];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Separability Checker
      </h3>

      {/* Case selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CASES.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setSelectedCase(i)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              selectedCase === i
                ? c.isSeparable
                  ? 'bg-emerald-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <motion.div
        key={caseData.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {/* Result banner */}
        <div
          className={`p-4 rounded-lg ${
            caseData.isSeparable
              ? 'bg-emerald-900/30 border border-emerald-700'
              : 'bg-red-900/30 border border-red-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`text-2xl ${
                caseData.isSeparable ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {caseData.isSeparable ? '✓' : '✗'}
            </span>
            <div>
              <span className="text-lg font-mono text-white">
                {caseData.f}
              </span>
              <span className="text-dark-300 ml-2">
                is {caseData.isSeparable ? 'SEPARABLE' : 'INSEPARABLE'}
              </span>
            </div>
          </div>
        </div>

        {/* Characteristic */}
        <div className="bg-dark-900 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-2">
            Field Characteristic
          </h4>
          <div className="text-xl font-mono text-white">
            char = {caseData.characteristic}
          </div>
          {caseData.characteristic !== '0' && (
            <p className="text-amber-400 text-sm mt-1">
              Warning: In characteristic {caseData.characteristic}, derivative
              terms with coefficient divisible by {caseData.characteristic} vanish!
            </p>
          )}
        </div>

        {/* Derivative calculation */}
        <div className="bg-dark-900 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-semibold text-primary-400">
              Separability Test: gcd(f, f') = 1?
            </h4>
            <button
              onClick={() => setShowDerivativeCalc(!showDerivativeCalc)}
              className="text-xs text-primary-400 hover:text-primary-300"
            >
              {showDerivativeCalc ? 'Hide' : 'Show'} details
            </button>
          </div>

          {showDerivativeCalc && (
            <div className="mb-4 p-3 bg-dark-800 rounded text-sm">
              <div className="mb-2">
                <span className="text-dark-400">f(x) = </span>
                <span className="text-white font-mono">{caseData.f}</span>
              </div>
              <div className="mb-2">
                <span className="text-dark-400">f'(x) = </span>
                <span className="text-white font-mono">{caseData.fPrime}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-dark-400 text-sm">f(x)</span>
              <div className="font-mono text-white">{caseData.f}</div>
            </div>
            <div>
              <span className="text-dark-400 text-sm">f'(x)</span>
              <div className="font-mono text-white">{caseData.fPrime}</div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-dark-800 rounded">
            <span className="text-dark-400">gcd(f, f') = </span>
            <span
              className={`font-mono ${
                caseData.gcd === '1' ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {caseData.gcd}
            </span>
            <span className="text-dark-400 ml-2">
              {caseData.gcd === '1' ? '→ Separable' : '→ Has repeated roots'}
            </span>
          </div>
        </div>

        {/* Explanation */}
        <div className="bg-dark-900 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-2">
            Explanation
          </h4>
          <p className="text-dark-300">{caseData.explanation}</p>
          {caseData.roots && (
            <div className="mt-2">
              <span className="text-dark-400">Roots: </span>
              <span className="text-white font-mono">{caseData.roots}</span>
            </div>
          )}
        </div>

        {/* Perfect fields info */}
        <div className="bg-dark-900 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-2">
            Perfect Fields
          </h4>
          <p className="text-dark-300 text-sm">
            A field F is <span className="text-white">perfect</span> if every
            irreducible polynomial is separable.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-emerald-900/50 text-emerald-400 rounded text-sm">
              Q, R, C (char 0)
            </span>
            <span className="px-2 py-1 bg-emerald-900/50 text-emerald-400 rounded text-sm">
              Finite fields F_q
            </span>
            <span className="px-2 py-1 bg-red-900/50 text-red-400 rounded text-sm">
              F_p(t) NOT perfect
            </span>
          </div>
        </div>
      </motion.div>

      <p className="text-dark-400 text-sm mt-4">
        A polynomial f is separable iff gcd(f, f') = 1, meaning no repeated
        roots. In characteristic 0, every irreducible polynomial is separable.
        In characteristic p, inseparable polynomials have the form g(x^p).
      </p>
    </div>
  );
}
