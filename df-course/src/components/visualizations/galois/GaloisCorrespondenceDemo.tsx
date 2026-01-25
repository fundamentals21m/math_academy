import { useState } from 'react';
import { motion } from 'framer-motion';

interface CorrespondenceExample {
  name: string;
  fields: { name: string; degree: number; level: number }[];
  subgroups: { name: string; order: number; level: number; isNormal: boolean }[];
  correspondences: [number, number][];
}

const EXAMPLES: CorrespondenceExample[] = [
  {
    name: 'Q(√2,√3)/Q',
    fields: [
      { name: 'Q(√2,√3)', degree: 4, level: 0 },
      { name: 'Q(√2)', degree: 2, level: 1 },
      { name: 'Q(√3)', degree: 2, level: 1 },
      { name: 'Q(√6)', degree: 2, level: 1 },
      { name: 'Q', degree: 1, level: 2 },
    ],
    subgroups: [
      { name: '{1}', order: 1, level: 0, isNormal: true },
      { name: '⟨σ⟩', order: 2, level: 1, isNormal: true },
      { name: '⟨τ⟩', order: 2, level: 1, isNormal: true },
      { name: '⟨στ⟩', order: 2, level: 1, isNormal: true },
      { name: 'V₄', order: 4, level: 2, isNormal: true },
    ],
    correspondences: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]],
  },
  {
    name: 'Splitting field of x³-2',
    fields: [
      { name: 'Q(∛2,ω)', degree: 6, level: 0 },
      { name: 'Q(∛2)', degree: 3, level: 1 },
      { name: 'Q(ω∛2)', degree: 3, level: 1 },
      { name: 'Q(ω²∛2)', degree: 3, level: 1 },
      { name: 'Q(ω)', degree: 2, level: 1 },
      { name: 'Q', degree: 1, level: 2 },
    ],
    subgroups: [
      { name: '{1}', order: 1, level: 0, isNormal: true },
      { name: '⟨τ₁⟩', order: 2, level: 1, isNormal: false },
      { name: '⟨τ₂⟩', order: 2, level: 1, isNormal: false },
      { name: '⟨τ₃⟩', order: 2, level: 1, isNormal: false },
      { name: 'A₃', order: 3, level: 1, isNormal: true },
      { name: 'S₃', order: 6, level: 2, isNormal: true },
    ],
    correspondences: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]],
  },
];

export function GaloisCorrespondenceDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [hoveredField, setHoveredField] = useState<number | null>(null);
  const [hoveredSubgroup, setHoveredSubgroup] = useState<number | null>(null);

  const example = EXAMPLES[selectedExample];

  // Get corresponding index
  const getCorrespondingSubgroup = (fieldIdx: number): number | null => {
    const corr = example.correspondences.find(([f]) => f === fieldIdx);
    return corr ? corr[1] : null;
  };

  const getCorrespondingField = (subgroupIdx: number): number | null => {
    const corr = example.correspondences.find(([, s]) => s === subgroupIdx);
    return corr ? corr[0] : null;
  };

  const highlightedSubgroup = hoveredField !== null ? getCorrespondingSubgroup(hoveredField) : null;
  const highlightedField = hoveredSubgroup !== null ? getCorrespondingField(hoveredSubgroup) : null;

  // Group by levels
  const fieldsByLevel: { [level: number]: typeof example.fields } = {};
  example.fields.forEach((f, i) => {
    if (!fieldsByLevel[f.level]) fieldsByLevel[f.level] = [];
    fieldsByLevel[f.level].push({ ...f, index: i } as typeof example.fields[0] & { index: number });
  });

  const subgroupsByLevel: { [level: number]: typeof example.subgroups } = {};
  example.subgroups.forEach((s, i) => {
    if (!subgroupsByLevel[s.level]) subgroupsByLevel[s.level] = [];
    subgroupsByLevel[s.level].push({ ...s, index: i } as typeof example.subgroups[0] & { index: number });
  });

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 mb-8">
      <h3 className="text-xl font-semibold text-primary-400 mb-4">
        Fundamental Theorem of Galois Theory
      </h3>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {EXAMPLES.map((ex, i) => (
          <button
            key={ex.name}
            onClick={() => {
              setSelectedExample(i);
              setHoveredField(null);
              setHoveredSubgroup(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              selectedExample === i
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {ex.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Fields lattice */}
        <div className="bg-dark-900 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-4">
            Intermediate Fields
          </h4>
          <div className="space-y-4">
            {Object.keys(fieldsByLevel)
              .sort((a, b) => Number(a) - Number(b))
              .map((level) => (
                <div key={level} className="flex justify-center gap-3 flex-wrap">
                  {(fieldsByLevel[Number(level)] as (typeof example.fields[0] & { index: number })[]).map((field) => (
                    <motion.div
                      key={field.name}
                      onMouseEnter={() => setHoveredField(field.index)}
                      onMouseLeave={() => setHoveredField(null)}
                      className={`px-3 py-2 rounded-lg cursor-pointer transition-all ${
                        highlightedField === field.index || hoveredField === field.index
                          ? 'bg-primary-500 text-white'
                          : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                      }`}
                    >
                      <div className="text-sm font-mono">{field.name}</div>
                      <div className="text-xs text-dark-400">
                        [K:Q] = {field.degree}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
          </div>
          <div className="text-center mt-4 text-dark-400 text-xs">
            ↑ Larger fields (higher degree)
          </div>
        </div>

        {/* Subgroups lattice */}
        <div className="bg-dark-900 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-4">
            Subgroups of Galois Group
          </h4>
          <div className="space-y-4">
            {Object.keys(subgroupsByLevel)
              .sort((a, b) => Number(a) - Number(b))
              .map((level) => (
                <div key={level} className="flex justify-center gap-3 flex-wrap">
                  {(subgroupsByLevel[Number(level)] as (typeof example.subgroups[0] & { index: number })[]).map((subgroup) => (
                    <motion.div
                      key={subgroup.name}
                      onMouseEnter={() => setHoveredSubgroup(subgroup.index)}
                      onMouseLeave={() => setHoveredSubgroup(null)}
                      className={`px-3 py-2 rounded-lg cursor-pointer transition-all ${
                        highlightedSubgroup === subgroup.index || hoveredSubgroup === subgroup.index
                          ? 'bg-amber-500 text-white'
                          : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                      } ${subgroup.isNormal ? 'border-2 border-emerald-500/50' : ''}`}
                    >
                      <div className="text-sm font-mono">{subgroup.name}</div>
                      <div className="text-xs text-dark-400">
                        |H| = {subgroup.order}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
          </div>
          <div className="text-center mt-4 text-dark-400 text-xs">
            ↓ Smaller subgroups (lower order)
          </div>
        </div>
      </div>

      {/* Correspondence info */}
      <div className="mt-4 bg-dark-900 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-primary-400 mb-2">
          The Correspondence
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-dark-300">
          <div>
            <strong>E ↔ Gal(K/E)</strong>
            <ul className="mt-1 space-y-1 text-xs">
              <li>• Larger field → smaller subgroup</li>
              <li>• [K:E] = |Gal(K/E)|</li>
            </ul>
          </div>
          <div>
            <strong>H ↔ K^H (fixed field)</strong>
            <ul className="mt-1 space-y-1 text-xs">
              <li>• Normal H ⇔ E/F Galois</li>
              <li>• <span className="border border-emerald-500 px-1 rounded">Green border</span> = normal subgroup</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-dark-400 text-sm mt-4">
        Hover over a field to see its corresponding subgroup (and vice versa).
        The correspondence reverses inclusion and relates degrees to indices.
      </p>
    </div>
  );
}
