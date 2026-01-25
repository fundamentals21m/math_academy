import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SubgroupPair = {
  groupName: string;
  H: { name: string; elements: string[]; isNormal: boolean };
  K: { name: string; elements: string[]; isNormal: boolean };
  intersection: string[];
  productHK: string[];
  groupElements: string[];
  isDirectProduct: boolean;
  reason: string;
};

const examples: SubgroupPair[] = [
  {
    groupName: 'Z/6Z',
    H: { name: '⟨2⟩', elements: ['0', '2', '4'], isNormal: true },
    K: { name: '⟨3⟩', elements: ['0', '3'], isNormal: true },
    intersection: ['0'],
    productHK: ['0', '1', '2', '3', '4', '5'],
    groupElements: ['0', '1', '2', '3', '4', '5'],
    isDirectProduct: true,
    reason: 'H ⊴ G, K ⊴ G, H ∩ K = {0}, HK = G. So Z/6Z ≅ Z/3Z × Z/2Z',
  },
  {
    groupName: 'S₃',
    H: { name: 'A₃', elements: ['e', '(123)', '(132)'], isNormal: true },
    K: { name: '⟨(12)⟩', elements: ['e', '(12)'], isNormal: false },
    intersection: ['e'],
    productHK: ['e', '(12)', '(123)', '(132)', '(13)', '(23)'],
    groupElements: ['e', '(12)', '(13)', '(23)', '(123)', '(132)'],
    isDirectProduct: false,
    reason: 'H ⊴ G but K is NOT normal. This is a SEMIDIRECT product: S₃ ≅ A₃ ⋊ Z/2Z',
  },
  {
    groupName: 'Q₈',
    H: { name: '⟨i⟩', elements: ['1', '-1', 'i', '-i'], isNormal: true },
    K: { name: '⟨j⟩', elements: ['1', '-1', 'j', '-j'], isNormal: true },
    intersection: ['1', '-1'],
    productHK: ['1', '-1', 'i', '-i', 'j', '-j', 'k', '-k'],
    groupElements: ['1', '-1', 'i', '-i', 'j', '-j', 'k', '-k'],
    isDirectProduct: false,
    reason: 'H ⊴ G, K ⊴ G, HK = G, but H ∩ K = {±1} ≠ {1}. Q₈ is NOT a direct product!',
  },
  {
    groupName: 'Z/15Z',
    H: { name: '⟨5⟩ (Sylow 3)', elements: ['0', '5', '10'], isNormal: true },
    K: { name: '⟨3⟩ (Sylow 5)', elements: ['0', '3', '6', '9', '12'], isNormal: true },
    intersection: ['0'],
    productHK: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    groupElements: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    isDirectProduct: true,
    reason: 'Unique Sylow subgroups are normal. gcd(3,5) = 1 forces H ∩ K = {0}. So Z/15Z ≅ Z/3Z × Z/5Z',
  },
  {
    groupName: 'D₈',
    H: { name: '⟨r²⟩', elements: ['1', 'r²'], isNormal: true },
    K: { name: '⟨s⟩', elements: ['1', 's'], isNormal: false },
    intersection: ['1'],
    productHK: ['1', 's', 'r²', 'sr²'],
    groupElements: ['1', 'r', 'r²', 'r³', 's', 'sr', 'sr²', 'sr³'],
    isDirectProduct: false,
    reason: 'HK ≠ G (only 4 elements). Cannot form direct product with these subgroups.',
  },
  {
    groupName: 'V₄',
    H: { name: '⟨a⟩', elements: ['e', 'a'], isNormal: true },
    K: { name: '⟨b⟩', elements: ['e', 'b'], isNormal: true },
    intersection: ['e'],
    productHK: ['e', 'a', 'b', 'ab'],
    groupElements: ['e', 'a', 'b', 'ab'],
    isDirectProduct: true,
    reason: 'H ⊴ G, K ⊴ G (abelian), H ∩ K = {e}, HK = G. So V₄ ≅ Z/2Z × Z/2Z',
  },
];

export function ProductRecognizer() {
  const [selectedExample, setSelectedExample] = useState<number>(0);

  const example = examples[selectedExample];

  const criteria = [
    {
      name: 'H normal in G',
      check: example.H.isNormal,
      formula: 'H ⊴ G',
    },
    {
      name: 'K normal in G',
      check: example.K.isNormal,
      formula: 'K ⊴ G',
    },
    {
      name: 'Trivial intersection',
      check: example.intersection.length === 1 && example.intersection[0] === example.intersection[0],
      formula: 'H ∩ K = {e}',
    },
    {
      name: 'Product equals G',
      check: example.productHK.length === example.groupElements.length,
      formula: 'HK = G',
    },
  ];

  const allCriteriaMet = criteria.every(c => c.check);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Recognizing Direct Products</h4>

      {/* Example Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((ex, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedExample(idx)}
            className={`px-4 py-2 rounded transition-all ${
              selectedExample === idx
                ? ex.isDirectProduct ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {ex.groupName}
          </button>
        ))}
      </div>

      {/* Group Info */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="text-dark-200 font-medium mb-2">
          Group: <span className="text-blue-400">{example.groupName}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-dark-400 text-sm">Subgroup H = {example.H.name}:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {example.H.elements.map((el, idx) => (
                <span key={idx} className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-sm font-mono">
                  {el}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-dark-400 text-sm">Subgroup K = {example.K.name}:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {example.K.elements.map((el, idx) => (
                <span key={idx} className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-sm font-mono">
                  {el}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Criteria Checklist */}
      <div className="space-y-3 mb-6">
        <div className="text-dark-400 text-sm">Direct Product Criteria:</div>
        {criteria.map((criterion, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-3 rounded-lg flex items-center gap-3 ${
              criterion.check ? 'bg-green-900/30' : 'bg-red-900/30'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              criterion.check ? 'bg-green-600' : 'bg-red-600'
            }`}>
              {criterion.check ? '✓' : '✗'}
            </div>
            <div className="flex-1">
              <div className="text-dark-200">{criterion.name}</div>
              <div className="text-dark-500 text-sm font-mono">{criterion.formula}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Intersection and Product Display */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-700 p-3 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">H ∩ K:</div>
          <div className="flex flex-wrap gap-1">
            {example.intersection.map((el, idx) => (
              <span key={idx} className={`px-2 py-1 rounded text-sm font-mono ${
                example.intersection.length === 1
                  ? 'bg-green-900/50 text-green-300'
                  : 'bg-red-900/50 text-red-300'
              }`}>
                {el}
              </span>
            ))}
          </div>
          <div className="text-dark-500 text-xs mt-1">
            {example.intersection.length === 1 ? '= {e} ✓' : '≠ {e} ✗'}
          </div>
        </div>
        <div className="bg-dark-700 p-3 rounded-lg">
          <div className="text-dark-400 text-sm mb-2">HK:</div>
          <div className="flex flex-wrap gap-1">
            {example.productHK.slice(0, 8).map((el, idx) => (
              <span key={idx} className="bg-dark-600 text-dark-300 px-2 py-1 rounded text-sm font-mono">
                {el}
              </span>
            ))}
            {example.productHK.length > 8 && (
              <span className="text-dark-500 px-2 py-1">+{example.productHK.length - 8} more</span>
            )}
          </div>
          <div className="text-dark-500 text-xs mt-1">
            |HK| = {example.productHK.length}, |G| = {example.groupElements.length}
            {example.productHK.length === example.groupElements.length ? ' ✓' : ' ✗'}
          </div>
        </div>
      </div>

      {/* Result */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedExample}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`p-4 rounded-lg ${
            example.isDirectProduct ? 'bg-green-900/30 border border-green-600' : 'bg-red-900/30 border border-red-600'
          }`}
        >
          <div className={`font-semibold mb-2 ${example.isDirectProduct ? 'text-green-400' : 'text-red-400'}`}>
            {example.isDirectProduct ? '✓ IS a Direct Product' : '✗ NOT a Direct Product'}
          </div>
          <div className="text-dark-300 text-sm">{example.reason}</div>
        </motion.div>
      </AnimatePresence>

      {/* Quick Reference */}
      <div className="mt-6 p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Direct Product Recognition Theorem</h5>
        <div className="text-dark-400 text-sm space-y-1">
          <p>G = H × K (internal direct product) if and only if:</p>
          <ol className="list-decimal list-inside ml-2 text-dark-300">
            <li>H ⊴ G and K ⊴ G (both normal)</li>
            <li>H ∩ K = {'{'}e{'}'}</li>
            <li>HK = G</li>
          </ol>
          <p className="mt-2 text-yellow-400">
            Key insight: If gcd(|H|, |K|) = 1, condition 2 is automatic!
          </p>
        </div>
      </div>
    </div>
  );
}
