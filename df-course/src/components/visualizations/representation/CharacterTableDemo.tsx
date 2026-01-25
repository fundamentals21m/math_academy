import { useState } from 'react';
import { motion } from 'framer-motion';

interface CharacterTable {
  name: string;
  classes: string[];
  classSizes: number[];
  characters: { name: string; values: (number | string)[] }[];
}

const TABLES: CharacterTable[] = [
  {
    name: 'Z/3',
    classes: ['1', 'g', 'g²'],
    classSizes: [1, 1, 1],
    characters: [
      { name: 'χ₀', values: [1, 1, 1] },
      { name: 'χ₁', values: [1, 'ω', 'ω²'] },
      { name: 'χ₂', values: [1, 'ω²', 'ω'] },
    ],
  },
  {
    name: 'S₃',
    classes: ['(1)', '(12)', '(123)'],
    classSizes: [1, 3, 2],
    characters: [
      { name: 'trivial', values: [1, 1, 1] },
      { name: 'sign', values: [1, -1, 1] },
      { name: 'std', values: [2, 0, -1] },
    ],
  },
  {
    name: 'Z/4',
    classes: ['1', 'g', 'g²', 'g³'],
    classSizes: [1, 1, 1, 1],
    characters: [
      { name: 'χ₀', values: [1, 1, 1, 1] },
      { name: 'χ₁', values: [1, 'i', -1, '-i'] },
      { name: 'χ₂', values: [1, -1, 1, -1] },
      { name: 'χ₃', values: [1, '-i', -1, 'i'] },
    ],
  },
  {
    name: 'Q₈',
    classes: ['1', '-1', '±i', '±j', '±k'],
    classSizes: [1, 1, 2, 2, 2],
    characters: [
      { name: 'χ₁', values: [1, 1, 1, 1, 1] },
      { name: 'χ₂', values: [1, 1, 1, -1, -1] },
      { name: 'χ₃', values: [1, 1, -1, 1, -1] },
      { name: 'χ₄', values: [1, 1, -1, -1, 1] },
      { name: 'χ₅', values: [2, -2, 0, 0, 0] },
    ],
  },
  {
    name: 'S₄',
    classes: ['(1)', '(12)', '(123)', '(1234)', '(12)(34)'],
    classSizes: [1, 6, 8, 6, 3],
    characters: [
      { name: 'triv', values: [1, 1, 1, 1, 1] },
      { name: 'sign', values: [1, -1, 1, -1, 1] },
      { name: 'std', values: [3, 1, 0, -1, -1] },
      { name: 'std⊗sgn', values: [3, -1, 0, 1, -1] },
      { name: '2-dim', values: [2, 0, -1, 0, 2] },
    ],
  },
];

export function CharacterTableDemo() {
  const [selectedTable, setSelectedTable] = useState(1); // S₃
  const [showOrthogonality, setShowOrthogonality] = useState(false);

  const table = TABLES[selectedTable];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Character Tables
      </h4>

      {/* Table selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {TABLES.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelectedTable(i)}
            className={`px-3 py-1 rounded text-sm ${
              selectedTable === i
                ? 'bg-blue-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Character table */}
      <div className="bg-dark-900 rounded-lg p-4 mb-6 overflow-x-auto">
        <div className="text-center text-lg font-mono text-primary-400 mb-3">
          Character Table of {table.name}
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="py-2 pr-4 text-left text-dark-400"></th>
              {table.classes.map((cls, i) => (
                <th key={i} className="py-2 px-3 text-center">
                  <div className="font-mono text-blue-400">{cls}</div>
                  <div className="text-xs text-dark-500">|C|={table.classSizes[i]}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.characters.map((char, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-dark-700"
              >
                <td className="py-2 pr-4 font-mono text-amber-400">{char.name}</td>
                {char.values.map((val, j) => (
                  <td key={j} className="py-2 px-3 text-center font-mono text-dark-200">
                    {val}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Orthogonality relations */}
      <div className="bg-dark-900 rounded-lg p-4">
        <button
          onClick={() => setShowOrthogonality(!showOrthogonality)}
          className="text-sm text-dark-400 hover:text-dark-200 flex items-center gap-2"
        >
          <span>{showOrthogonality ? '▼' : '▶'}</span>
          Orthogonality Relations
        </button>

        {showOrthogonality && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 space-y-3"
          >
            <div className="bg-emerald-500/10 p-3 rounded border border-emerald-500/30">
              <div className="text-emerald-400 font-semibold mb-1">Row Orthogonality</div>
              <div className="font-mono text-sm">
                ⟨χᵢ, χⱼ⟩ = (1/|G|) Σ χᵢ(g)χⱼ(g)* = δᵢⱼ
              </div>
              <div className="text-xs text-dark-400 mt-1">
                Irreducible characters are orthonormal
              </div>
            </div>

            <div className="bg-blue-500/10 p-3 rounded border border-blue-500/30">
              <div className="text-blue-400 font-semibold mb-1">Column Orthogonality</div>
              <div className="font-mono text-sm">
                Σ χ(gᵢ)χ(gⱼ)* = (|G|/|Cᵢ|) δᵢⱼ
              </div>
              <div className="text-xs text-dark-400 mt-1">
                Summing over irreducible characters
              </div>
            </div>

            <div className="bg-dark-800 p-3 rounded">
              <div className="text-purple-400 font-semibold mb-1">Multiplicity Formula</div>
              <div className="font-mono text-sm">
                nᵢ = ⟨χ, χᵢ⟩ = (1/|G|) Σ χ(g)χᵢ(g)*
              </div>
              <div className="text-xs text-dark-400 mt-1">
                Decompose any character into irreducibles
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 text-xs text-dark-500">
        Characters determine representations up to isomorphism. The table encodes all representation theory.
      </div>
    </div>
  );
}
