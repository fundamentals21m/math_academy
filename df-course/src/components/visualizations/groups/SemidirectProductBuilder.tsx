import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SemidirectExample = {
  name: string;
  N: { name: string; elements: string[]; operation: (a: number, b: number) => number };
  H: { name: string; elements: string[]; operation: (a: number, b: number) => number };
  phi: (h: number) => (n: number) => number; // phi(h) returns automorphism of N
  description: string;
  isNonTrivial: boolean;
};

const examples: SemidirectExample[] = [
  {
    name: 'S₃ ≅ Z₃ ⋊ Z₂',
    N: {
      name: 'Z/3Z',
      elements: ['0', '1', '2'],
      operation: (a, b) => (a + b) % 3,
    },
    H: {
      name: 'Z/2Z',
      elements: ['0', '1'],
      operation: (a, b) => (a + b) % 2,
    },
    phi: (h) => (n) => h === 0 ? n : (3 - n) % 3, // h=1 gives inversion
    description: 'Z/2Z acts on Z/3Z by inversion: 1 ↦ -1 ≡ 2 (mod 3)',
    isNonTrivial: true,
  },
  {
    name: 'Z₆ ≅ Z₃ × Z₂',
    N: {
      name: 'Z/3Z',
      elements: ['0', '1', '2'],
      operation: (a, b) => (a + b) % 3,
    },
    H: {
      name: 'Z/2Z',
      elements: ['0', '1'],
      operation: (a, b) => (a + b) % 2,
    },
    phi: (h) => (n) => n, // trivial action
    description: 'Trivial action: all h ∈ H act as identity on N',
    isNonTrivial: false,
  },
  {
    name: 'D₈ ≅ Z₄ ⋊ Z₂',
    N: {
      name: 'Z/4Z',
      elements: ['0', '1', '2', '3'],
      operation: (a, b) => (a + b) % 4,
    },
    H: {
      name: 'Z/2Z',
      elements: ['0', '1'],
      operation: (a, b) => (a + b) % 2,
    },
    phi: (h) => (n) => h === 0 ? n : (4 - n) % 4, // h=1 gives inversion
    description: 'Z/2Z acts on Z/4Z by inversion: r ↦ r⁻¹',
    isNonTrivial: true,
  },
  {
    name: 'D₁₀ ≅ Z₅ ⋊ Z₂',
    N: {
      name: 'Z/5Z',
      elements: ['0', '1', '2', '3', '4'],
      operation: (a, b) => (a + b) % 5,
    },
    H: {
      name: 'Z/2Z',
      elements: ['0', '1'],
      operation: (a, b) => (a + b) % 2,
    },
    phi: (h) => (n) => h === 0 ? n : (5 - n) % 5,
    description: 'Z/2Z acts on Z/5Z by inversion',
    isNonTrivial: true,
  },
  {
    name: 'Z₇ ⋊ Z₃',
    N: {
      name: 'Z/7Z',
      elements: ['0', '1', '2', '3', '4', '5', '6'],
      operation: (a, b) => (a + b) % 7,
    },
    H: {
      name: 'Z/3Z',
      elements: ['0', '1', '2'],
      operation: (a, b) => (a + b) % 3,
    },
    phi: (h) => (n) => (n * Math.pow(2, h)) % 7, // 2 has order 3 mod 7
    description: 'Z/3Z acts on Z/7Z by multiplication by 2 (since 2³ ≡ 1 mod 7)',
    isNonTrivial: true,
  },
];

export function SemidirectProductBuilder() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [element1, setElement1] = useState<[number, number] | null>(null);
  const [element2, setElement2] = useState<[number, number] | null>(null);
  const [showAutomorphism, setShowAutomorphism] = useState(false);

  const example = examples[selectedExample];
  const N = example.N;
  const H = example.H;

  // Generate all elements of semidirect product
  const productElements = useMemo(() => {
    const elements: { n: number; h: number; label: string }[] = [];
    for (let n = 0; n < N.elements.length; n++) {
      for (let h = 0; h < H.elements.length; h++) {
        elements.push({
          n,
          h,
          label: `(${N.elements[n]}, ${H.elements[h]})`,
        });
      }
    }
    return elements;
  }, [N, H]);

  // Semidirect product multiplication
  const multiply = (a: [number, number], b: [number, number]): [number, number] => {
    const [n1, h1] = a;
    const [n2, h2] = b;
    // (n1, h1) · (n2, h2) = (n1 + φ(h1)(n2), h1 + h2)
    const newN = N.operation(n1, example.phi(h1)(n2));
    const newH = H.operation(h1, h2);
    return [newN, newH];
  };

  const result = element1 && element2 ? multiply(element1, element2) : null;

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Semidirect Product Builder</h4>

      {/* Example Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((ex, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedExample(idx);
              setElement1(null);
              setElement2(null);
            }}
            className={`px-4 py-2 rounded transition-all ${
              selectedExample === idx
                ? ex.isNonTrivial ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {ex.name}
          </button>
        ))}
      </div>

      {/* Info Panel */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-blue-400 font-mono">{N.name}</span>
          <span className="text-dark-500">⋊</span>
          <span className="text-purple-400 font-mono">{H.name}</span>
          <span className={`ml-auto px-3 py-1 rounded text-sm ${
            example.isNonTrivial
              ? 'bg-purple-900/50 text-purple-300'
              : 'bg-blue-900/50 text-blue-300'
          }`}>
            {example.isNonTrivial ? 'Non-trivial action' : 'Trivial (= direct product)'}
          </span>
        </div>
        <div className="text-dark-400 text-sm">{example.description}</div>
        <div className="text-dark-500 text-xs mt-2">
          |N ⋊ H| = |N| × |H| = {N.elements.length} × {H.elements.length} = {productElements.length}
        </div>
      </div>

      {/* Automorphism Display */}
      <button
        onClick={() => setShowAutomorphism(!showAutomorphism)}
        className="mb-4 text-sm text-blue-400 hover:text-blue-300"
      >
        {showAutomorphism ? '▼' : '▶'} Show action φ: H → Aut(N)
      </button>

      <AnimatePresence>
        {showAutomorphism && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-700 p-4 rounded-lg mb-6 overflow-hidden"
          >
            <div className="text-dark-400 text-sm mb-2">Automorphism φ(h) for each h ∈ H:</div>
            <div className="space-y-2">
              {H.elements.map((h, hIdx) => (
                <div key={hIdx} className="flex items-center gap-2">
                  <span className="text-purple-400 font-mono w-12">φ({h}):</span>
                  <div className="flex gap-2">
                    {N.elements.map((n, nIdx) => (
                      <span key={nIdx} className="text-dark-300 font-mono">
                        {n} ↦ {N.elements[example.phi(hIdx)(nIdx)]}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elements Grid */}
      <div className="mb-6">
        <div className="text-dark-400 text-sm mb-2">
          Elements of N ⋊ H (click to select operands):
        </div>
        <div className="flex flex-wrap gap-2">
          {productElements.map(({ n, h, label }, idx) => {
            const isFirst = element1 && element1[0] === n && element1[1] === h;
            const isSecond = element2 && element2[0] === n && element2[1] === h;
            const isResult = result && result[0] === n && result[1] === h;

            return (
              <motion.button
                key={idx}
                onClick={() => {
                  if (!element1) {
                    setElement1([n, h]);
                  } else if (!element2) {
                    setElement2([n, h]);
                  } else {
                    setElement1([n, h]);
                    setElement2(null);
                  }
                }}
                className={`px-3 py-2 rounded font-mono text-sm transition-all ${
                  isFirst ? 'bg-blue-600 text-white ring-2 ring-blue-400' :
                  isSecond ? 'bg-purple-600 text-white ring-2 ring-purple-400' :
                  isResult ? 'bg-green-600 text-white ring-2 ring-green-400' :
                  'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Multiplication Display */}
      <AnimatePresence>
        {element1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-dark-700 p-4 rounded-lg"
          >
            <div className="text-center mb-4">
              <span className="text-blue-400 font-mono text-lg">
                ({N.elements[element1[0]]}, {H.elements[element1[1]]})
              </span>
              {element2 && (
                <>
                  <span className="text-dark-500 mx-3">·</span>
                  <span className="text-purple-400 font-mono text-lg">
                    ({N.elements[element2[0]]}, {H.elements[element2[1]]})
                  </span>
                </>
              )}
              {result && (
                <>
                  <span className="text-dark-500 mx-3">=</span>
                  <span className="text-green-400 font-mono text-lg">
                    ({N.elements[result[0]]}, {H.elements[result[1]]})
                  </span>
                </>
              )}
            </div>

            {result && (
              <div className="bg-dark-800 p-3 rounded text-sm">
                <div className="text-dark-400 mb-2">Step by step:</div>
                <div className="text-dark-300 font-mono">
                  <div>(n₁, h₁) · (n₂, h₂) = (n₁ + φ(h₁)(n₂), h₁ + h₂)</div>
                  <div className="mt-1">
                    ({N.elements[element1[0]]}, {H.elements[element1[1]]}) ·
                    ({N.elements[element2![0]]}, {H.elements[element2![1]]})
                  </div>
                  <div className="mt-1">
                    = ({N.elements[element1[0]]} + φ({H.elements[element1[1]]})({N.elements[element2![0]]}),
                    {H.elements[element1[1]]} + {H.elements[element2![1]]})
                  </div>
                  <div className="mt-1">
                    = ({N.elements[element1[0]]} + {N.elements[example.phi(element1[1])(element2![0])]},
                    {H.elements[H.operation(element1[1], element2![1])]})
                  </div>
                  <div className="mt-1 text-green-400">
                    = ({N.elements[result[0]]}, {H.elements[result[1]]})
                  </div>
                </div>
              </div>
            )}

            {!element2 && (
              <div className="text-dark-500 text-center">
                Select second element to compute product
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Formula Reference */}
      <div className="mt-6 p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Semidirect Product Formula</h5>
        <div className="text-dark-400 text-sm space-y-2">
          <p className="font-mono">(n₁, h₁) · (n₂, h₂) = (n₁ · φ(h₁)(n₂), h₁h₂)</p>
          <p>where φ: H → Aut(N) defines how H "twists" the multiplication in N.</p>
          <p className="text-yellow-400">
            If φ is trivial (all h map to identity), this reduces to the direct product.
          </p>
        </div>
      </div>
    </div>
  );
}
