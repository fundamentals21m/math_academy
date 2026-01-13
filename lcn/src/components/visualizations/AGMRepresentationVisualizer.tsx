import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

interface BaseElement {
  name: string;
  coefficient: number;
}

/**
 * Visualization of group element representations in the Algebraic Group Model (AGM).
 */
export function AGMRepresentationVisualizer({ className = '' }: Props) {
  const [baseElements, setBaseElements] = useState<BaseElement[]>([
    { name: 'G', coefficient: 3 },
    { name: 'X*', coefficient: 2 },
    { name: 'R₁', coefficient: 1 },
  ]);
  const [outputName, setOutputName] = useState('Z');
  const [showBracket, setShowBracket] = useState(true);

  const addElement = () => {
    const newName = `R_${baseElements.length}`;
    setBaseElements([...baseElements, { name: newName, coefficient: 1 }]);
  };

  const removeElement = (index: number) => {
    if (baseElements.length > 1) {
      setBaseElements(baseElements.filter((_, i) => i !== index));
    }
  };

  const updateCoefficient = (index: number, value: number) => {
    setBaseElements(baseElements.map((el, i) =>
      i === index ? { ...el, coefficient: value } : el
    ));
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">
        AGM Representation Visualizer
      </h3>
      <p className="text-dark-400 text-sm mb-4">
        In the Algebraic Group Model, adversaries must provide linear representations for every group element they output.
      </p>

      {/* Output element name */}
      <div className="mb-4">
        <label className="block text-dark-300 text-sm mb-2">Output Element Name:</label>
        <input
          type="text"
          value={outputName}
          onChange={(e) => setOutputName(e.target.value)}
          className="w-32 px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 text-primary-400 font-mono font-bold focus:outline-none focus:border-primary-500"
        />
      </div>

      {/* Base elements */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-dark-300 text-sm">Base Elements (received so far):</label>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addElement}
            className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm hover:bg-emerald-500/30"
          >
            + Add Element
          </motion.button>
        </div>

        <div className="space-y-2">
          {baseElements.map((el, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-dark-700/30"
            >
              <span className="text-cyan-400 font-mono font-bold w-12">{el.name}</span>
              <span className="text-dark-500">×</span>
              <input
                type="range"
                min="-5"
                max="10"
                value={el.coefficient}
                onChange={(e) => updateCoefficient(index, parseInt(e.target.value))}
                className="flex-1 h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-primary-500"
              />
              <span className="text-primary-400 font-mono w-8 text-right">{el.coefficient}</span>
              {baseElements.length > 1 && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeElement(index)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  ✕
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visualization */}
      <div className="p-4 rounded-xl bg-dark-900/50 mb-4">
        <h4 className="text-dark-300 text-sm mb-3">Linear Combination:</h4>

        {/* Standard form */}
        <div className="flex flex-wrap items-center gap-1 font-mono text-lg mb-4">
          <span className="text-primary-400 font-bold">{outputName}</span>
          <span className="text-dark-500">=</span>
          {baseElements.map((el, i) => (
            <span key={i} className="flex items-center">
              {i > 0 && (
                <span className="text-dark-500 mx-1">
                  {el.coefficient >= 0 ? '+' : ''}
                </span>
              )}
              <motion.span
                key={`${el.name}-${el.coefficient}`}
                initial={{ scale: 1.2, color: '#6366f1' }}
                animate={{ scale: 1, color: '#d1d5db' }}
                className="text-dark-200"
              >
                {el.coefficient}
              </motion.span>
              <span className="text-dark-500">·</span>
              <span className="text-cyan-400">{el.name}</span>
            </span>
          ))}
        </div>

        {/* Bracket notation toggle */}
        <button
          onClick={() => setShowBracket(!showBracket)}
          className={`px-3 py-1 rounded-lg text-sm mb-3 ${
            showBracket
              ? 'bg-purple-500/20 text-purple-400'
              : 'bg-dark-700 text-dark-400'
          }`}
        >
          {showBracket ? 'Hide' : 'Show'} Bracket Notation
        </button>

        {/* Bracket notation */}
        <AnimatePresence>
          {showBracket && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="text-dark-400 text-sm mb-2">AGM Representation:</p>
                <p className="font-mono text-purple-400">
                  [{outputName}] = ({outputName}, {baseElements.map(el => `α_${el.name}`).join(', ')})
                </p>
                <p className="font-mono text-purple-300 text-sm mt-1">
                  [{outputName}] = ({outputName}, {baseElements.map(el => el.coefficient).join(', ')})
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SVG Visualization */}
      <svg viewBox="0 0 400 150" className="w-full h-auto bg-dark-900/30 rounded-xl mb-4">
        {/* Input elements */}
        {baseElements.map((el, i) => {
          const x = 50 + (i * 100) % 300;
          const y = 30 + Math.floor(i / 3) * 40;
          return (
            <g key={i}>
              <motion.circle
                cx={x}
                cy={y}
                r="15"
                fill="#06b6d420"
                stroke="#06b6d4"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              />
              <text x={x} y={y + 5} fill="#06b6d4" fontSize="10" textAnchor="middle" fontFamily="monospace">
                {el.name}
              </text>
              {/* Arrow to output */}
              <motion.line
                x1={x}
                y1={y + 18}
                x2="200"
                y2="110"
                stroke="#4b5563"
                strokeWidth="1"
                strokeDasharray="3,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: i * 0.1 }}
              />
              {/* Coefficient label */}
              <text x={x} y={y + 35} fill="#6b7280" fontSize="9" textAnchor="middle">
                ×{el.coefficient}
              </text>
            </g>
          );
        })}

        {/* Output element */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <circle cx="200" cy="120" r="20" fill="#6366f120" stroke="#6366f1" strokeWidth="3" />
          <text x="200" y="125" fill="#6366f1" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            {outputName}
          </text>
        </motion.g>

        {/* Sigma symbol */}
        <text x="200" y="85" fill="#9ca3af" fontSize="16" textAnchor="middle">
          Σ
        </text>
      </svg>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/30">
        <h4 className="text-dark-200 font-medium mb-2">Why AGM Matters</h4>
        <p className="text-dark-400 text-sm">
          In the AGM, when an adversary outputs a group element <span className="text-primary-400 font-mono">{outputName}</span>,
          they must also output coefficients showing how <span className="text-primary-400 font-mono">{outputName}</span> is
          a linear combination of all previously received elements. This constraint allows reductions to
          "track" the adversary's computation, enabling proofs of security for schemes like SeqMuSig.
        </p>
      </div>
    </div>
  );
}
