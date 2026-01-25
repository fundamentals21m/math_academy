import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Group = {
  name: string;
  elements: string[];
  operation: (a: number, b: number) => number;
};

const groups: Record<string, Group> = {
  'Z2': {
    name: 'Z/2Z',
    elements: ['0', '1'],
    operation: (a, b) => (a + b) % 2,
  },
  'Z3': {
    name: 'Z/3Z',
    elements: ['0', '1', '2'],
    operation: (a, b) => (a + b) % 3,
  },
  'Z4': {
    name: 'Z/4Z',
    elements: ['0', '1', '2', '3'],
    operation: (a, b) => (a + b) % 4,
  },
  'Z5': {
    name: 'Z/5Z',
    elements: ['0', '1', '2', '3', '4'],
    operation: (a, b) => (a + b) % 5,
  },
};

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

function getOrder(g: Group, element: number): number {
  if (element === 0) return 1;
  let current = element;
  let order = 1;
  while (current !== 0) {
    current = g.operation(current, element);
    order++;
    if (order > g.elements.length) return g.elements.length;
  }
  return order;
}

export function DirectProductBuilder() {
  const [group1Key, setGroup1Key] = useState<string>('Z2');
  const [group2Key, setGroup2Key] = useState<string>('Z3');
  const [selectedElement1, setSelectedElement1] = useState<number | null>(null);
  const [selectedElement2, setSelectedElement2] = useState<number | null>(null);
  const [operandA, setOperandA] = useState<[number, number] | null>(null);
  const [operandB, setOperandB] = useState<[number, number] | null>(null);

  const G = groups[group1Key];
  const H = groups[group2Key];

  const productElements = useMemo(() => {
    const elements: { g: number; h: number; label: string }[] = [];
    for (let g = 0; g < G.elements.length; g++) {
      for (let h = 0; h < H.elements.length; h++) {
        elements.push({
          g,
          h,
          label: `(${G.elements[g]}, ${H.elements[h]})`,
        });
      }
    }
    return elements;
  }, [G, H]);

  const computeProduct = (a: [number, number], b: [number, number]): [number, number] => {
    return [G.operation(a[0], b[0]), H.operation(a[1], b[1])];
  };

  const elementOrder = (g: number, h: number): number => {
    const orderG = getOrder(G, g);
    const orderH = getOrder(H, h);
    return lcm(orderG, orderH);
  };

  const result = operandA && operandB ? computeProduct(operandA, operandB) : null;

  const isGBar = (g: number, h: number) => h === 0;
  const isHBar = (g: number, h: number) => g === 0;

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Direct Product Builder</h4>

      {/* Group Selection */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="text-dark-400 text-sm block mb-1">First Group G</label>
          <select
            value={group1Key}
            onChange={(e) => {
              setGroup1Key(e.target.value);
              setOperandA(null);
              setOperandB(null);
            }}
            className="bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600"
          >
            {Object.entries(groups).map(([key, g]) => (
              <option key={key} value={key}>{g.name}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end text-dark-300 text-2xl pb-2">×</div>
        <div>
          <label className="text-dark-400 text-sm block mb-1">Second Group H</label>
          <select
            value={group2Key}
            onChange={(e) => {
              setGroup2Key(e.target.value);
              setOperandA(null);
              setOperandB(null);
            }}
            className="bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600"
          >
            {Object.entries(groups).map(([key, g]) => (
              <option key={key} value={key}>{g.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Info */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="text-dark-300 mb-2">
          <span className="text-blue-400">{G.name}</span> × <span className="text-purple-400">{H.name}</span>
          {' '}has order <span className="text-green-400">{G.elements.length * H.elements.length}</span>
        </div>
        <div className="text-dark-400 text-sm">
          {gcd(G.elements.length, H.elements.length) === 1 ? (
            <span className="text-green-400">
              ≅ Z/{G.elements.length * H.elements.length}Z (gcd({G.elements.length}, {H.elements.length}) = 1)
            </span>
          ) : (
            <span className="text-yellow-400">
              Not cyclic (gcd({G.elements.length}, {H.elements.length}) = {gcd(G.elements.length, H.elements.length)} ≠ 1)
            </span>
          )}
        </div>
      </div>

      {/* Product Elements Grid */}
      <div className="mb-6">
        <div className="text-dark-400 text-sm mb-2">Elements of G × H (click to select operands):</div>
        <div className="flex flex-wrap gap-2">
          {productElements.map(({ g, h, label }, idx) => {
            const order = elementOrder(g, h);
            const isA = operandA && operandA[0] === g && operandA[1] === h;
            const isB = operandB && operandB[0] === g && operandB[1] === h;
            const isResult = result && result[0] === g && result[1] === h;

            return (
              <motion.button
                key={idx}
                onClick={() => {
                  if (!operandA) {
                    setOperandA([g, h]);
                  } else if (!operandB) {
                    setOperandB([g, h]);
                  } else {
                    setOperandA([g, h]);
                    setOperandB(null);
                  }
                }}
                className={`px-3 py-2 rounded text-sm font-mono transition-all ${
                  isA ? 'bg-blue-600 text-white ring-2 ring-blue-400' :
                  isB ? 'bg-purple-600 text-white ring-2 ring-purple-400' :
                  isResult ? 'bg-green-600 text-white ring-2 ring-green-400' :
                  isGBar(g, h) && !isHBar(g, h) ? 'bg-blue-900/50 text-blue-300 hover:bg-blue-800/50' :
                  isHBar(g, h) && !isGBar(g, h) ? 'bg-purple-900/50 text-purple-300 hover:bg-purple-800/50' :
                  isGBar(g, h) && isHBar(g, h) ? 'bg-dark-600 text-dark-200 hover:bg-dark-500' :
                  'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div>{label}</div>
                <div className="text-xs opacity-70">|·| = {order}</div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-900/50 rounded"></div>
          <span className="text-dark-400">G̅ = G × {'{'}e{'}'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-900/50 rounded"></div>
          <span className="text-dark-400">H̅ = {'{'}e{'}'} × H</span>
        </div>
      </div>

      {/* Operation Display */}
      <AnimatePresence>
        {operandA && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-dark-700 p-4 rounded-lg"
          >
            <div className="text-dark-300 font-mono text-center text-lg">
              <span className="text-blue-400">({G.elements[operandA[0]]}, {H.elements[operandA[1]]})</span>
              {operandB && (
                <>
                  <span className="text-dark-500 mx-2">·</span>
                  <span className="text-purple-400">({G.elements[operandB[0]]}, {H.elements[operandB[1]]})</span>
                </>
              )}
              {result && (
                <>
                  <span className="text-dark-500 mx-2">=</span>
                  <span className="text-green-400">({G.elements[result[0]]}, {H.elements[result[1]]})</span>
                </>
              )}
            </div>
            {result && (
              <div className="text-dark-400 text-sm text-center mt-2">
                Componentwise: ({G.elements[operandA[0]]} + {G.elements[operandB![0]]}, {H.elements[operandA[1]]} + {H.elements[operandB![1]]})
                = ({G.elements[result[0]]}, {H.elements[result[1]]})
              </div>
            )}
            {!operandB && (
              <div className="text-dark-500 text-sm text-center mt-2">
                Select second element to compute product
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Formula */}
      <div className="mt-6 p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Order Formula</h5>
        <div className="text-dark-400 text-sm">
          For (g, h) ∈ G × H: <span className="text-green-400">|(g, h)| = lcm(|g|, |h|)</span>
        </div>
        {selectedElement1 !== null && selectedElement2 !== null && (
          <div className="mt-2 text-dark-300">
            |({G.elements[selectedElement1]}, {H.elements[selectedElement2]})| =
            lcm({getOrder(G, selectedElement1)}, {getOrder(H, selectedElement2)}) =
            <span className="text-green-400 font-bold"> {elementOrder(selectedElement1, selectedElement2)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
