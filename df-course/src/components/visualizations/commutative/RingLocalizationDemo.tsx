import { useState } from 'react';
import { motion } from 'framer-motion';

interface LocalizationExample {
  name: string;
  ring: string;
  multSet: string;
  localization: string;
  description: string;
  elements: string[];
}

const LOCALIZATIONS: LocalizationExample[] = [
  {
    name: 'Q from Z',
    ring: 'Z',
    multSet: 'Z \\ {0}',
    localization: 'Q',
    description: 'Fraction field of integers',
    elements: ['1/2', '3/4', '-5/7', '...'],
  },
  {
    name: 'Z at (p)',
    ring: 'Z',
    multSet: 'Z \\ (p)',
    localization: 'Z₍ₚ₎',
    description: 'Rationals with denominator coprime to p',
    elements: ['1/2', '3/7', '5/11', '...'],
  },
  {
    name: 'Dyadic rationals',
    ring: 'Z',
    multSet: '{1, 2, 4, 8, ...}',
    localization: 'Z[1/2]',
    description: 'Rationals with power-of-2 denominator',
    elements: ['1/2', '3/4', '5/8', '...'],
  },
  {
    name: 'k[x] at (x)',
    ring: 'k[x]',
    multSet: 'k[x] \\ (x)',
    localization: 'k[x]₍ₓ₎',
    description: 'Rational functions regular at 0',
    elements: ['1/(1+x)', 'x/(1-x)', '...'],
  },
];

export function RingLocalizationDemo() {
  const [selectedLoc, setSelectedLoc] = useState(0);
  const [numerator, setNumerator] = useState('3');
  const [denominator, setDenominator] = useState('4');
  const [showPrimeCorr, setShowPrimeCorr] = useState(false);

  const loc = LOCALIZATIONS[selectedLoc];

  const isValidFraction = () => {
    const num = parseInt(numerator);
    const den = parseInt(denominator);
    return !isNaN(num) && !isNaN(den) && den !== 0;
  };

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Localization
      </h4>

      {/* Localization examples */}
      <div className="flex flex-wrap gap-2 mb-4">
        {LOCALIZATIONS.map((l, i) => (
          <button
            key={i}
            onClick={() => setSelectedLoc(i)}
            className={`px-3 py-1 rounded text-sm ${
              selectedLoc === i
                ? 'bg-blue-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {l.name}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          <div>
            <div className="text-xs text-dark-400 mb-1">Ring R</div>
            <div className="text-lg text-blue-400 font-mono">{loc.ring}</div>
          </div>
          <div>
            <div className="text-xs text-dark-400 mb-1">Mult. Set S</div>
            <div className="text-lg text-amber-400 font-mono">{loc.multSet}</div>
          </div>
          <div>
            <div className="text-xs text-dark-400 mb-1">S⁻¹R</div>
            <div className="text-lg text-emerald-400 font-mono">{loc.localization}</div>
          </div>
        </div>

        <div className="text-dark-300 text-sm mb-4">{loc.description}</div>

        <div className="flex flex-wrap gap-2">
          <span className="text-dark-400 text-sm">Elements:</span>
          {loc.elements.map((el, i) => (
            <span key={i} className="px-2 py-1 bg-dark-700 rounded text-sm font-mono text-dark-200">
              {el}
            </span>
          ))}
        </div>
      </div>

      {/* Fraction constructor */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6">
        <div className="text-sm text-dark-400 mb-3">Build a fraction in S⁻¹R:</div>
        <div className="flex items-center justify-center gap-4">
          <div className="text-center">
            <input
              type="text"
              value={numerator}
              onChange={(e) => setNumerator(e.target.value)}
              className="w-20 px-3 py-2 bg-dark-700 rounded text-center font-mono text-dark-100"
              placeholder="r"
            />
            <div className="border-t border-dark-500 my-1" style={{ width: 80 }} />
            <input
              type="text"
              value={denominator}
              onChange={(e) => setDenominator(e.target.value)}
              className="w-20 px-3 py-2 bg-dark-700 rounded text-center font-mono text-dark-100"
              placeholder="s"
            />
          </div>
          <div className="text-dark-400">=</div>
          <motion.div
            key={`${numerator}/${denominator}`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className={`px-4 py-2 rounded font-mono ${
              isValidFraction()
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-red-500/20 text-red-400'
            }`}
          >
            {isValidFraction() ? `${numerator}/${denominator}` : 'invalid'}
          </motion.div>
        </div>
        <div className="text-xs text-dark-500 text-center mt-2">
          r/s where r ∈ R and s ∈ S
        </div>
      </div>

      {/* Prime correspondence */}
      <div className="bg-dark-900 rounded-lg p-4">
        <button
          onClick={() => setShowPrimeCorr(!showPrimeCorr)}
          className="text-sm text-dark-400 hover:text-dark-200 mb-3 flex items-center gap-2"
        >
          <span>{showPrimeCorr ? '▼' : '▶'}</span>
          Prime Ideal Correspondence
        </button>

        {showPrimeCorr && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className="text-sm mb-3">
              Primes in <span className="text-emerald-400">S⁻¹R</span> ↔
              Primes in <span className="text-blue-400">R</span> avoiding <span className="text-amber-400">S</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 bg-blue-500/10 p-3 rounded border border-blue-500/30">
                <div className="text-xs text-blue-400 mb-1">Primes P ⊂ R with P ∩ S = ∅</div>
                <div className="text-sm text-dark-300">
                  "Primes that don't touch S"
                </div>
              </div>
              <div className="text-dark-400 text-2xl">↔</div>
              <div className="flex-1 bg-emerald-500/10 p-3 rounded border border-emerald-500/30">
                <div className="text-xs text-emerald-400 mb-1">Primes Q ⊂ S⁻¹R</div>
                <div className="text-sm text-dark-300">
                  Q = S⁻¹P, P = ι⁻¹(Q)
                </div>
              </div>
            </div>

            <div className="mt-3 p-2 bg-dark-800 rounded text-sm">
              <strong className="text-purple-400">Key:</strong> Localizing at prime P gives a
              <span className="text-amber-400"> local ring</span> R_P with unique maximal ideal PR_P.
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 text-xs text-dark-500">
        Localization S⁻¹R formally inverts elements of S, generalizing fraction fields.
        It preserves exactness and the Noetherian property.
      </div>
    </div>
  );
}
