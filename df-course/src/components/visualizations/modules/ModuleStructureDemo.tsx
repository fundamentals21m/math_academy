import { useState } from 'react';
import { motion } from 'framer-motion';

type ModuleExample = {
  name: string;
  ring: string;
  module: string;
  action: string;
  submodules: string[];
  isFree: boolean;
  basis?: string;
};

const examples: ModuleExample[] = [
  {
    name: 'Z-module (Abelian Group)',
    ring: 'Z',
    module: 'Z/6Z',
    action: 'n * [a] = [na]',
    submodules: ['{0}', '<2> = {0,2,4}', '<3> = {0,3}', 'Z/6Z'],
    isFree: false,
  },
  {
    name: 'Vector Space',
    ring: 'R',
    module: 'R^2',
    action: 'c * (x,y) = (cx, cy)',
    submodules: ['{0}', 'Lines through origin', 'R^2'],
    isFree: true,
    basis: '{(1,0), (0,1)}',
  },
  {
    name: 'Polynomial Module',
    ring: 'R',
    module: 'R[x]',
    action: 'c * f(x) = cf(x)',
    submodules: ['{0}', 'Degree <= n polynomials', 'R[x]'],
    isFree: true,
    basis: '{1, x, x^2, ...}',
  },
  {
    name: 'Ideal as Module',
    ring: 'Z',
    module: '(6) = 6Z',
    action: 'n * (6k) = 6nk',
    submodules: ['{0}', '(12)', '(6)'],
    isFree: true,
    basis: '{6}',
  },
];

export function ModuleStructureDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [scalar, setScalar] = useState(3);
  const [element, setElement] = useState(2);

  const ex = examples[selectedExample];

  // Compute action for Z/6Z
  const computeAction = () => {
    if (selectedExample === 0) {
      return ((scalar * element) % 6 + 6) % 6;
    }
    return scalar * element;
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Module Structure Explorer</h4>

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

      {/* Module Info */}
      <motion.div
        key={selectedExample}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-700 p-4 rounded-lg mb-6"
      >
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-dark-500 text-sm">Ring R = </span>
            <span className="text-blue-400 font-mono">{ex.ring}</span>
          </div>
          <div>
            <span className="text-dark-500 text-sm">Module M = </span>
            <span className="text-purple-400 font-mono">{ex.module}</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-dark-500 text-sm">Scalar Action: </span>
          <span className="text-dark-300 font-mono">{ex.action}</span>
        </div>
        <div className={`px-3 py-2 rounded inline-block text-sm ${
          ex.isFree ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'
        }`}>
          {ex.isFree ? `Free Module - Basis: ${ex.basis}` : 'Not Free (no basis exists)'}
        </div>
      </motion.div>

      {/* Interactive Action */}
      {selectedExample === 0 && (
        <div className="bg-dark-700 p-4 rounded-lg mb-6">
          <h5 className="text-dark-200 font-medium mb-3">Scalar Multiplication in Z/6Z</h5>
          <div className="flex items-center gap-4 mb-4">
            <div>
              <label className="text-dark-400 text-sm block mb-1">Scalar n:</label>
              <input
                type="number"
                value={scalar}
                onChange={(e) => setScalar(parseInt(e.target.value) || 0)}
                className="w-20 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono text-center"
              />
            </div>
            <span className="text-dark-500 text-xl mt-5">*</span>
            <div>
              <label className="text-dark-400 text-sm block mb-1">[a] where a =</label>
              <select
                value={element}
                onChange={(e) => setElement(parseInt(e.target.value))}
                className="w-20 bg-dark-800 text-dark-100 px-2 py-1 rounded border border-dark-600 font-mono"
              >
                {[0, 1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <span className="text-dark-500 text-xl mt-5">=</span>
            <div className="mt-5">
              <span className="text-green-400 font-mono text-lg">[{computeAction()}]</span>
            </div>
          </div>
          <div className="text-dark-500 text-sm">
            Computation: {scalar} * [{element}] = [{scalar * element}] = [{computeAction()}] (mod 6)
          </div>
        </div>
      )}

      {/* Submodule Lattice */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Submodules</h5>
        <div className="flex flex-wrap gap-2">
          {ex.submodules.map((sub, idx) => (
            <span key={idx} className="bg-dark-800 px-3 py-1 rounded text-dark-300 font-mono text-sm">
              {sub}
            </span>
          ))}
        </div>
      </div>

      {/* Key Concepts */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Module Axioms</h5>
        <ul className="text-dark-400 text-sm space-y-1">
          <li>1. r(m + n) = rm + rn (distributive over module)</li>
          <li>2. (r + s)m = rm + sm (distributive over ring)</li>
          <li>3. (rs)m = r(sm) (associativity)</li>
          <li>4. 1m = m (identity)</li>
        </ul>
      </div>
    </div>
  );
}
