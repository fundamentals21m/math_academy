import { useState } from 'react';
import { motion } from 'framer-motion';

interface SpecExample {
  name: string;
  ring: string;
  primes: { id: string; label: string; isMaximal: boolean; isGeneric: boolean }[];
  closedSets: { name: string; primes: string[] }[];
}

const SPEC_EXAMPLES: SpecExample[] = [
  {
    name: 'Spec(Z)',
    ring: 'Z',
    primes: [
      { id: '0', label: '(0)', isMaximal: false, isGeneric: true },
      { id: '2', label: '(2)', isMaximal: true, isGeneric: false },
      { id: '3', label: '(3)', isMaximal: true, isGeneric: false },
      { id: '5', label: '(5)', isMaximal: true, isGeneric: false },
      { id: '7', label: '(7)', isMaximal: true, isGeneric: false },
    ],
    closedSets: [
      { name: 'V(0) = Spec(Z)', primes: ['0', '2', '3', '5', '7'] },
      { name: 'V(6) = V(2) ∪ V(3)', primes: ['2', '3'] },
      { name: 'V(2)', primes: ['2'] },
    ],
  },
  {
    name: 'Spec(k[x])',
    ring: 'k[x]',
    primes: [
      { id: '0', label: '(0)', isMaximal: false, isGeneric: true },
      { id: 'x', label: '(x)', isMaximal: true, isGeneric: false },
      { id: 'x-1', label: '(x-1)', isMaximal: true, isGeneric: false },
      { id: 'x+1', label: '(x+1)', isMaximal: true, isGeneric: false },
    ],
    closedSets: [
      { name: 'V(0) = all', primes: ['0', 'x', 'x-1', 'x+1'] },
      { name: 'V(x)', primes: ['x'] },
      { name: 'V(x²-1)', primes: ['x-1', 'x+1'] },
    ],
  },
  {
    name: 'Spec(Z/6Z)',
    ring: 'Z/6Z',
    primes: [
      { id: '2', label: '(2)', isMaximal: true, isGeneric: false },
      { id: '3', label: '(3)', isMaximal: true, isGeneric: false },
    ],
    closedSets: [
      { name: 'V(0) = Spec', primes: ['2', '3'] },
      { name: 'V(2)', primes: ['2'] },
      { name: 'V(3)', primes: ['3'] },
    ],
  },
];

export function SpectrumDemo() {
  const [selectedSpec, setSelectedSpec] = useState(0);
  const [selectedClosed, setSelectedClosed] = useState(0);
  const [hoveredPrime, setHoveredPrime] = useState<string | null>(null);

  const spec = SPEC_EXAMPLES[selectedSpec];
  const closedSet = spec.closedSets[selectedClosed];

  const getPrimeColor = (prime: typeof spec.primes[0]) => {
    if (closedSet.primes.includes(prime.id)) {
      return prime.isMaximal ? '#10b981' : '#f59e0b';
    }
    return '#374151';
  };

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Prime Spectrum Spec(R)
      </h4>

      {/* Ring selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {SPEC_EXAMPLES.map((s, i) => (
          <button
            key={i}
            onClick={() => { setSelectedSpec(i); setSelectedClosed(0); }}
            className={`px-3 py-1 rounded text-sm ${
              selectedSpec === i
                ? 'bg-purple-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        {/* Spectrum visualization */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {spec.primes.map((prime) => (
            <motion.div
              key={prime.id}
              onMouseEnter={() => setHoveredPrime(prime.id)}
              onMouseLeave={() => setHoveredPrime(null)}
              animate={{
                scale: hoveredPrime === prime.id ? 1.1 : 1,
                backgroundColor: getPrimeColor(prime),
              }}
              className="relative"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                style={{ backgroundColor: getPrimeColor(prime) }}
              >
                <span className="text-white text-xs font-mono">{prime.label}</span>
              </div>
              {prime.isGeneric && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-xs">
                  η
                </div>
              )}
              {prime.isMaximal && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs text-dark-400">
                  max
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 text-xs mb-4">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-dark-400">Maximal (closed point)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-dark-400">Generic point</span>
          </div>
        </div>

        {/* Closed set selector */}
        <div className="border-t border-dark-700 pt-4">
          <div className="text-sm text-dark-400 mb-2">Closed sets (Zariski topology):</div>
          <div className="flex flex-wrap gap-2">
            {spec.closedSets.map((cs, i) => (
              <button
                key={i}
                onClick={() => setSelectedClosed(i)}
                className={`px-3 py-1 rounded text-sm ${
                  selectedClosed === i
                    ? 'bg-blue-500 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {cs.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Properties */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-dark-900 p-3 rounded">
          <div className="text-dark-400 mb-1">Points in closed set:</div>
          <div className="font-mono text-emerald-400">
            {'{' + closedSet.primes.map(id =>
              spec.primes.find(p => p.id === id)?.label
            ).join(', ') + '}'}
          </div>
        </div>
        <div className="bg-dark-900 p-3 rounded">
          <div className="text-dark-400 mb-1">Open complement D(f):</div>
          <div className="font-mono text-blue-400">
            {'{' + spec.primes
              .filter(p => !closedSet.primes.includes(p.id))
              .map(p => p.label)
              .join(', ') + '}' || '∅'}
          </div>
        </div>
      </div>

      {/* Key properties */}
      <div className="mt-4 p-3 bg-dark-900/50 rounded text-sm">
        <div className="text-dark-400 mb-2">Key Properties of Spec(R):</div>
        <ul className="space-y-1 text-dark-300">
          <li>• Quasi-compact but generally not Hausdorff</li>
          <li>• Closed points = maximal ideals</li>
          <li>• Generic point η has closure = whole space</li>
          <li>• D(f) ≅ Spec(R_f) as topological spaces</li>
        </ul>
      </div>

      <div className="mt-4 text-xs text-dark-500">
        The prime spectrum treats prime ideals as "points" with the Zariski topology.
        This is the foundation of scheme theory.
      </div>
    </div>
  );
}
