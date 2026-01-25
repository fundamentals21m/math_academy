import { useState } from 'react';
import { motion } from 'framer-motion';

type JordanExample = {
  name: string;
  charPoly: string;
  minPoly: string;
  blocks: { eigenvalue: number; size: number }[];
};

const examples: JordanExample[] = [
  {
    name: 'Diagonalizable',
    charPoly: '(λ-1)(λ-2)(λ-3)',
    minPoly: '(λ-1)(λ-2)(λ-3)',
    blocks: [
      { eigenvalue: 1, size: 1 },
      { eigenvalue: 2, size: 1 },
      { eigenvalue: 3, size: 1 }
    ]
  },
  {
    name: 'Single 3×3 block',
    charPoly: '(λ-2)³',
    minPoly: '(λ-2)³',
    blocks: [{ eigenvalue: 2, size: 3 }]
  },
  {
    name: 'Mixed blocks',
    charPoly: '(λ-1)²(λ-3)²',
    minPoly: '(λ-1)²(λ-3)',
    blocks: [
      { eigenvalue: 1, size: 2 },
      { eigenvalue: 3, size: 1 },
      { eigenvalue: 3, size: 1 }
    ]
  },
  {
    name: 'Two 2×2 blocks',
    charPoly: '(λ-0)⁴',
    minPoly: '(λ-0)²',
    blocks: [
      { eigenvalue: 0, size: 2 },
      { eigenvalue: 0, size: 2 }
    ]
  }
];

export function JordanFormDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [showMatrix, setShowMatrix] = useState(true);

  const ex = examples[selectedExample];

  // Generate Jordan matrix
  const generateJordanMatrix = () => {
    const size = ex.blocks.reduce((sum, b) => sum + b.size, 0);
    const matrix: (number | string)[][] = Array(size).fill(null).map(() => Array(size).fill(0));

    let row = 0;
    ex.blocks.forEach(block => {
      for (let i = 0; i < block.size; i++) {
        matrix[row + i][row + i] = block.eigenvalue;
        if (i < block.size - 1) {
          matrix[row + i][row + i + 1] = 1;
        }
      }
      row += block.size;
    });

    return matrix;
  };

  const jordanMatrix = generateJordanMatrix();
  const matrixSize = jordanMatrix.length;

  // Check if diagonalizable
  const isDiagonalizable = ex.blocks.every(b => b.size === 1);

  // Count geometric multiplicity
  const eigenvalues = [...new Set(ex.blocks.map(b => b.eigenvalue))];
  const eigenInfo = eigenvalues.map(ev => {
    const blocks = ex.blocks.filter(b => b.eigenvalue === ev);
    return {
      eigenvalue: ev,
      algebraic: blocks.reduce((sum, b) => sum + b.size, 0),
      geometric: blocks.length,
      blockSizes: blocks.map(b => b.size)
    };
  });

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Jordan Canonical Form</h4>

      {/* Example Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((e, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedExample(idx)}
            className={`px-4 py-2 rounded transition-all ${
              selectedExample === idx
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {e.name}
          </button>
        ))}
      </div>

      {/* Polynomials */}
      <motion.div
        key={selectedExample}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-700 p-4 rounded-lg mb-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-dark-500 text-sm mb-1">Characteristic Polynomial:</div>
            <div className="text-blue-400 font-mono">{ex.charPoly}</div>
          </div>
          <div>
            <div className="text-dark-500 text-sm mb-1">Minimal Polynomial:</div>
            <div className="text-purple-400 font-mono">{ex.minPoly}</div>
          </div>
        </div>
      </motion.div>

      {/* Jordan Matrix */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Jordan Form J</h5>
        <div className="flex items-center justify-center overflow-x-auto">
          <span className="text-dark-500 text-3xl mr-2">[</span>
          <div
            className="grid gap-0.5"
            style={{ gridTemplateColumns: `repeat(${matrixSize}, minmax(0, 1fr))` }}
          >
            {jordanMatrix.map((row, i) =>
              row.map((val, j) => (
                <div
                  key={`${i}-${j}`}
                  className={`w-8 h-8 flex items-center justify-center font-mono text-xs rounded ${
                    i === j
                      ? 'bg-green-900/30 text-green-400'
                      : j === i + 1 && val === 1
                      ? 'bg-yellow-900/30 text-yellow-400'
                      : 'text-dark-600'
                  }`}
                >
                  {val}
                </div>
              ))
            )}
          </div>
          <span className="text-dark-500 text-3xl ml-2">]</span>
        </div>
        <div className="flex gap-4 justify-center mt-3 text-sm">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-green-900/30 rounded"></span>
            <span className="text-dark-400">eigenvalues</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-yellow-900/30 rounded"></span>
            <span className="text-dark-400">superdiagonal 1s</span>
          </span>
        </div>
      </div>

      {/* Eigenvalue Info */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Eigenvalue Analysis</h5>
        <div className="space-y-3">
          {eigenInfo.map((info, idx) => (
            <div key={idx} className="bg-dark-800 p-3 rounded">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-green-400 font-mono">λ = {info.eigenvalue}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-dark-500">Algebraic mult.: </span>
                  <span className="text-blue-400">{info.algebraic}</span>
                </div>
                <div>
                  <span className="text-dark-500">Geometric mult.: </span>
                  <span className="text-purple-400">{info.geometric}</span>
                </div>
                <div>
                  <span className="text-dark-500">Block sizes: </span>
                  <span className="text-yellow-400">[{info.blockSizes.join(', ')}]</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diagonalizability */}
      <div className={`p-4 rounded-lg ${isDiagonalizable ? 'bg-green-900/20' : 'bg-yellow-900/20'}`}>
        <div className="flex items-center gap-2">
          <span className={isDiagonalizable ? 'text-green-400' : 'text-yellow-400'}>
            {isDiagonalizable ? '✓' : '!'}
          </span>
          <span className="text-dark-200 font-medium">
            {isDiagonalizable ? 'Diagonalizable' : 'Not Diagonalizable'}
          </span>
        </div>
        <div className="text-dark-400 text-sm mt-1">
          {isDiagonalizable
            ? 'All Jordan blocks are 1×1 (geometric = algebraic multiplicity)'
            : 'Some Jordan blocks have size > 1 (geometric < algebraic multiplicity)'
          }
        </div>
      </div>
    </div>
  );
}
