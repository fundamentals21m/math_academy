import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DomainType = 'field' | 'euclidean' | 'pid' | 'ufd' | 'domain' | 'ring';

type DomainExample = {
  name: string;
  notation: string;
  type: DomainType;
  properties: string[];
  failsAt?: string;
};

const examples: DomainExample[] = [
  {
    name: 'Rational numbers',
    notation: 'Q',
    type: 'field',
    properties: ['Every nonzero element is a unit', 'No zero divisors', 'PID (only ideals are (0) and (1))'],
  },
  {
    name: 'Integers',
    notation: 'Z',
    type: 'euclidean',
    properties: ['Euclidean function: |n|', 'PID: every ideal is (n)', 'UFD: unique prime factorization'],
    failsAt: 'Not every nonzero element is a unit',
  },
  {
    name: 'Polynomial ring over field',
    notation: 'F[x]',
    type: 'euclidean',
    properties: ['Euclidean function: degree', 'PID: every ideal is (f)', 'F[x]/(f) is field when f irreducible'],
    failsAt: 'x is not a unit',
  },
  {
    name: 'Z[(1+√-19)/2]',
    notation: 'Z[ω₁₉]',
    type: 'pid',
    properties: ['PID but no Euclidean function exists', 'UFD by PID ⟹ UFD', 'All ideals principal'],
    failsAt: 'No norm function satisfies Euclidean property',
  },
  {
    name: 'Polynomial ring over UFD',
    notation: 'Z[x]',
    type: 'ufd',
    properties: ['UFD by Gauss lemma', 'Not PID: (2,x) not principal', 'Noetherian'],
    failsAt: 'Ideal (2,x) needs two generators',
  },
  {
    name: 'Z[√-5]',
    notation: 'Z[√-5]',
    type: 'domain',
    properties: ['No zero divisors', 'Not UFD: 6 = 2·3 = (1+√-5)(1-√-5)', '2 is irreducible but not prime'],
    failsAt: 'Two different factorizations of 6',
  },
  {
    name: 'Z/6Z',
    notation: 'Z/6Z',
    type: 'ring',
    properties: ['Commutative with unity', 'Has zero divisors: 2·3 = 0', 'Not an integral domain'],
    failsAt: 'Zero divisors exist',
  },
];

const hierarchy: { type: DomainType; label: string; color: string }[] = [
  { type: 'field', label: 'Fields', color: 'bg-purple-600' },
  { type: 'euclidean', label: 'Euclidean Domains', color: 'bg-blue-600' },
  { type: 'pid', label: 'PIDs', color: 'bg-green-600' },
  { type: 'ufd', label: 'UFDs', color: 'bg-yellow-600' },
  { type: 'domain', label: 'Integral Domains', color: 'bg-orange-600' },
  { type: 'ring', label: 'Commutative Rings', color: 'bg-red-600' },
];

function getTypeIndex(type: DomainType): number {
  return hierarchy.findIndex(h => h.type === type);
}

export function DomainHierarchy() {
  const [selectedExample, setSelectedExample] = useState<number | null>(null);
  const [highlightedLevel, setHighlightedLevel] = useState<DomainType | null>(null);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Ring/Domain Hierarchy</h4>

      {/* Hierarchy Diagram */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="space-y-2">
          {hierarchy.map((h, idx) => {
            const matchingExamples = examples.filter(e => e.type === h.type);
            const isHighlighted = highlightedLevel === h.type;
            const isBelow = highlightedLevel && getTypeIndex(highlightedLevel) <= idx;

            return (
              <motion.div
                key={h.type}
                className={`p-3 rounded-lg transition-all cursor-pointer ${
                  isHighlighted ? h.color + ' text-white' :
                  isBelow ? 'bg-dark-600' : 'bg-dark-800'
                }`}
                style={{ marginLeft: `${idx * 16}px`, marginRight: `${idx * 16}px` }}
                onMouseEnter={() => setHighlightedLevel(h.type)}
                onMouseLeave={() => setHighlightedLevel(null)}
                animate={{ scale: isHighlighted ? 1.02 : 1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{h.label}</span>
                  <div className="flex gap-1">
                    {matchingExamples.map((e, i) => (
                      <span key={i} className="text-xs bg-dark-700 px-2 py-1 rounded">
                        {e.notation}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="text-dark-500 text-xs text-center mt-4">
          ⊂ indicates proper containment. Each level includes all levels below.
        </div>
      </div>

      {/* Example Selector */}
      <div className="text-dark-400 text-sm mb-2">Explore specific examples:</div>
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((e, idx) => {
          const h = hierarchy.find(h => h.type === e.type)!;
          return (
            <button
              key={idx}
              onClick={() => setSelectedExample(selectedExample === idx ? null : idx)}
              className={`px-3 py-2 rounded transition-all ${
                selectedExample === idx
                  ? h.color + ' text-white'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {e.notation}
            </button>
          );
        })}
      </div>

      {/* Selected Example Details */}
      <AnimatePresence>
        {selectedExample !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-700 p-4 rounded-lg overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-dark-100 font-medium text-lg">
                {examples[selectedExample].name}
              </span>
              <span className={`px-2 py-1 rounded text-sm text-white ${
                hierarchy.find(h => h.type === examples[selectedExample].type)?.color
              }`}>
                {hierarchy.find(h => h.type === examples[selectedExample].type)?.label}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-dark-400 text-sm mb-1">Properties:</div>
                <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
                  {examples[selectedExample].properties.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              {examples[selectedExample].failsAt && (
                <div className="bg-red-900/20 p-3 rounded">
                  <div className="text-red-400 text-sm font-medium mb-1">
                    Why not higher in hierarchy:
                  </div>
                  <div className="text-dark-300 text-sm">
                    {examples[selectedExample].failsAt}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key Implications */}
      <div className="mt-6 p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Key Implications</h5>
        <ul className="text-dark-400 text-sm space-y-1">
          <li>• <span className="text-blue-400">Euclidean</span> ⟹ <span className="text-green-400">PID</span> (ideal = (element of min norm))</li>
          <li>• <span className="text-green-400">PID</span> ⟹ <span className="text-yellow-400">UFD</span> (irreducible = prime in PID)</li>
          <li>• <span className="text-yellow-400">UFD</span> ⟹ <span className="text-orange-400">Domain</span> (unique factorization needs no zero divisors)</li>
          <li>• None of these implications reverse!</li>
        </ul>
      </div>
    </div>
  );
}
