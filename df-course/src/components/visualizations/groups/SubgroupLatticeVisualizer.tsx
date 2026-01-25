/**
 * Interactive Subgroup Lattice Visualizer
 * Shows Hasse diagram of subgroup inclusion
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface SubgroupInfo {
  name: string;
  order: number;
  elements: string[];
  generators: string;
  isNormal: boolean;
}

// Predefined subgroup lattices for common groups
const GROUP_DATA: Record<string, { name: string; subgroups: SubgroupInfo[]; edges: [number, number][] }> = {
  Z6: {
    name: 'ℤ/6ℤ',
    subgroups: [
      { name: '{0}', order: 1, elements: ['0'], generators: '⟨0⟩', isNormal: true },
      { name: '⟨3⟩', order: 2, elements: ['0', '3'], generators: '⟨3⟩', isNormal: true },
      { name: '⟨2⟩', order: 3, elements: ['0', '2', '4'], generators: '⟨2⟩', isNormal: true },
      { name: 'ℤ/6ℤ', order: 6, elements: ['0', '1', '2', '3', '4', '5'], generators: '⟨1⟩', isNormal: true },
    ],
    edges: [[0, 1], [0, 2], [1, 3], [2, 3]],
  },
  Z12: {
    name: 'ℤ/12ℤ',
    subgroups: [
      { name: '{0}', order: 1, elements: ['0'], generators: '⟨0⟩', isNormal: true },
      { name: '⟨6⟩', order: 2, elements: ['0', '6'], generators: '⟨6⟩', isNormal: true },
      { name: '⟨4⟩', order: 3, elements: ['0', '4', '8'], generators: '⟨4⟩', isNormal: true },
      { name: '⟨3⟩', order: 4, elements: ['0', '3', '6', '9'], generators: '⟨3⟩', isNormal: true },
      { name: '⟨2⟩', order: 6, elements: ['0', '2', '4', '6', '8', '10'], generators: '⟨2⟩', isNormal: true },
      { name: 'ℤ/12ℤ', order: 12, elements: ['0-11'], generators: '⟨1⟩', isNormal: true },
    ],
    edges: [[0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [3, 5], [4, 5]],
  },
  S3: {
    name: 'S₃',
    subgroups: [
      { name: '{e}', order: 1, elements: ['e'], generators: '⟨e⟩', isNormal: true },
      { name: '⟨(1 2)⟩', order: 2, elements: ['e', '(1 2)'], generators: '⟨(1 2)⟩', isNormal: false },
      { name: '⟨(1 3)⟩', order: 2, elements: ['e', '(1 3)'], generators: '⟨(1 3)⟩', isNormal: false },
      { name: '⟨(2 3)⟩', order: 2, elements: ['e', '(2 3)'], generators: '⟨(2 3)⟩', isNormal: false },
      { name: 'A₃', order: 3, elements: ['e', '(1 2 3)', '(1 3 2)'], generators: '⟨(1 2 3)⟩', isNormal: true },
      { name: 'S₃', order: 6, elements: ['all'], generators: '⟨r, s⟩', isNormal: true },
    ],
    edges: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 5], [2, 5], [3, 5], [4, 5]],
  },
  D8: {
    name: 'D₈',
    subgroups: [
      { name: '{e}', order: 1, elements: ['e'], generators: '⟨e⟩', isNormal: true },
      { name: '⟨r²⟩', order: 2, elements: ['e', 'r²'], generators: '⟨r²⟩', isNormal: true },
      { name: '⟨s⟩', order: 2, elements: ['e', 's'], generators: '⟨s⟩', isNormal: false },
      { name: '⟨sr⟩', order: 2, elements: ['e', 'sr'], generators: '⟨sr⟩', isNormal: false },
      { name: '⟨r⟩', order: 4, elements: ['e', 'r', 'r²', 'r³'], generators: '⟨r⟩', isNormal: true },
      { name: 'V₄', order: 4, elements: ['e', 'r²', 's', 'sr²'], generators: '⟨r², s⟩', isNormal: true },
      { name: "V₄'", order: 4, elements: ['e', 'r²', 'sr', 'sr³'], generators: '⟨r², sr⟩', isNormal: true },
      { name: 'D₈', order: 8, elements: ['all'], generators: '⟨r, s⟩', isNormal: true },
    ],
    edges: [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [1, 6], [2, 5], [3, 6], [4, 7], [5, 7], [6, 7]],
  },
};

export function SubgroupLatticeVisualizer() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof GROUP_DATA>('S3');
  const [hoveredSubgroup, setHoveredSubgroup] = useState<number | null>(null);

  const data = GROUP_DATA[selectedGroup];

  // Calculate positions for lattice nodes (layered by order)
  const positions = useMemo(() => {
    const subgroups = data.subgroups;
    const orders = [...new Set(subgroups.map(s => s.order))].sort((a, b) => a - b);

    // Group by order
    const layers: Map<number, number[]> = new Map();
    subgroups.forEach((s, i) => {
      if (!layers.has(s.order)) layers.set(s.order, []);
      layers.get(s.order)!.push(i);
    });

    // Position each node
    const width = 400;
    const height = 300;
    const pos: { x: number; y: number }[] = [];

    orders.forEach((order, layerIdx) => {
      const indices = layers.get(order)!;
      const y = height - 50 - (layerIdx / (orders.length - 1 || 1)) * (height - 100);

      indices.forEach((idx, i) => {
        const x = 50 + ((i + 0.5) / indices.length) * (width - 100);
        pos[idx] = { x, y };
      });
    });

    return pos;
  }, [data]);

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Subgroup Lattice Visualizer
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(GROUP_DATA).map(([key, g]) => (
            <button
              key={key}
              onClick={() => setSelectedGroup(key as keyof typeof GROUP_DATA)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedGroup === key
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>
      </div>

      {/* Lattice diagram */}
      <svg viewBox="0 0 400 300" className="w-full bg-dark-950 rounded-lg" style={{ maxHeight: '300px' }}>
        {/* Edges */}
        {data.edges.map(([from, to], i) => {
          const p1 = positions[from];
          const p2 = positions[to];
          const isHighlighted = hoveredSubgroup === from || hoveredSubgroup === to;
          return (
            <motion.line
              key={i}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke={isHighlighted ? '#6366f1' : '#4b5563'}
              strokeWidth={isHighlighted ? 3 : 1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
          );
        })}

        {/* Nodes */}
        {data.subgroups.map((sg, i) => {
          const pos = positions[i];
          const isHovered = hoveredSubgroup === i;
          return (
            <g
              key={i}
              onMouseEnter={() => setHoveredSubgroup(i)}
              onMouseLeave={() => setHoveredSubgroup(null)}
              className="cursor-pointer"
            >
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={isHovered ? 25 : 20}
                fill={sg.isNormal ? '#10b98130' : '#f5920830'}
                stroke={sg.isNormal ? '#10b981' : '#f59208'}
                strokeWidth={isHovered ? 3 : 2}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              />
              <text
                x={pos.x}
                y={pos.y + 4}
                textAnchor="middle"
                fill={sg.isNormal ? '#10b981' : '#f59208'}
                fontSize={11}
                fontWeight="bold"
              >
                {sg.order}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500/30 border-2 border-emerald-500"></div>
          <span className="text-xs text-dark-400">Normal subgroup</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-500/30 border-2 border-orange-500"></div>
          <span className="text-xs text-dark-400">Not normal</span>
        </div>
      </div>

      {/* Hovered subgroup info */}
      {hoveredSubgroup !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50"
        >
          <p className="text-sm text-indigo-400 font-semibold">
            {data.subgroups[hoveredSubgroup].name}
          </p>
          <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
            <p className="text-dark-400">
              Order: <span className="text-dark-200">{data.subgroups[hoveredSubgroup].order}</span>
            </p>
            <p className="text-dark-400">
              Generator: <span className="text-dark-200 font-mono">{data.subgroups[hoveredSubgroup].generators}</span>
            </p>
            <p className="text-dark-400 col-span-2">
              Elements: <span className="text-dark-200 font-mono">{'{'}{ data.subgroups[hoveredSubgroup].elements.join(', ') }{'}'}</span>
            </p>
          </div>
          <p className={`text-xs mt-2 ${data.subgroups[hoveredSubgroup].isNormal ? 'text-emerald-400' : 'text-orange-400'}`}>
            {data.subgroups[hoveredSubgroup].isNormal ? '✓ Normal subgroup' : '✗ Not normal'}
          </p>
        </motion.div>
      )}

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Hasse Diagram:</strong> Lines connect subgroups where H ⊂ K with no subgroup strictly between.
          Numbers show subgroup order. For abelian groups, all subgroups are normal.
          By Lagrange's Theorem, |H| divides |G| for any subgroup H.
        </p>
      </div>
    </div>
  );
}
