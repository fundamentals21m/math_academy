import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type GroupInfo = {
  name: string;
  altNames: string[];
  order: number;
  isAbelian: boolean;
  isCyclic: boolean;
  description: string;
  generators?: string;
  center?: string;
  numElements?: Record<number, number>; // order -> count
};

const smallGroups: Record<number, GroupInfo[]> = {
  1: [{
    name: 'Trivial',
    altNames: ['{e}', '1'],
    order: 1,
    isAbelian: true,
    isCyclic: true,
    description: 'The trivial group containing only the identity',
    center: '{e}',
  }],
  2: [{
    name: 'Z/2Z',
    altNames: ['C₂', 'Z₂'],
    order: 2,
    isAbelian: true,
    isCyclic: true,
    description: 'Cyclic group of order 2',
    generators: '⟨a | a² = 1⟩',
    numElements: { 1: 1, 2: 1 },
  }],
  3: [{
    name: 'Z/3Z',
    altNames: ['C₃', 'Z₃'],
    order: 3,
    isAbelian: true,
    isCyclic: true,
    description: 'Cyclic group of order 3 (prime order)',
    generators: '⟨a | a³ = 1⟩',
    numElements: { 1: 1, 3: 2 },
  }],
  4: [
    {
      name: 'Z/4Z',
      altNames: ['C₄', 'Z₄'],
      order: 4,
      isAbelian: true,
      isCyclic: true,
      description: 'Cyclic group of order 4',
      generators: '⟨a | a⁴ = 1⟩',
      numElements: { 1: 1, 2: 1, 4: 2 },
    },
    {
      name: 'V₄',
      altNames: ['Klein four-group', 'Z₂ × Z₂'],
      order: 4,
      isAbelian: true,
      isCyclic: false,
      description: 'Klein four-group - all non-identity elements have order 2',
      generators: '⟨a, b | a² = b² = (ab)² = 1⟩',
      numElements: { 1: 1, 2: 3 },
    },
  ],
  5: [{
    name: 'Z/5Z',
    altNames: ['C₅', 'Z₅'],
    order: 5,
    isAbelian: true,
    isCyclic: true,
    description: 'Cyclic group of order 5 (prime order)',
    numElements: { 1: 1, 5: 4 },
  }],
  6: [
    {
      name: 'Z/6Z',
      altNames: ['C₆', 'Z₆'],
      order: 6,
      isAbelian: true,
      isCyclic: true,
      description: 'Cyclic group of order 6',
      numElements: { 1: 1, 2: 1, 3: 2, 6: 2 },
    },
    {
      name: 'S₃',
      altNames: ['D₃', 'D₆', 'Sym(3)'],
      order: 6,
      isAbelian: false,
      isCyclic: false,
      description: 'Symmetric group on 3 elements - smallest non-abelian group',
      generators: '⟨r, s | r³ = s² = 1, srs = r⁻¹⟩',
      center: '{e}',
      numElements: { 1: 1, 2: 3, 3: 2 },
    },
  ],
  7: [{
    name: 'Z/7Z',
    altNames: ['C₇', 'Z₇'],
    order: 7,
    isAbelian: true,
    isCyclic: true,
    description: 'Cyclic group of order 7 (prime order)',
    numElements: { 1: 1, 7: 6 },
  }],
  8: [
    {
      name: 'Z/8Z',
      altNames: ['C₈', 'Z₈'],
      order: 8,
      isAbelian: true,
      isCyclic: true,
      description: 'Cyclic group of order 8',
      numElements: { 1: 1, 2: 1, 4: 2, 8: 4 },
    },
    {
      name: 'Z/4Z × Z/2Z',
      altNames: ['C₄ × C₂'],
      order: 8,
      isAbelian: true,
      isCyclic: false,
      description: 'Direct product of cyclic groups',
      numElements: { 1: 1, 2: 3, 4: 4 },
    },
    {
      name: 'Z/2Z³',
      altNames: ['C₂ × C₂ × C₂', 'Elementary abelian'],
      order: 8,
      isAbelian: true,
      isCyclic: false,
      description: 'Elementary abelian 2-group',
      numElements: { 1: 1, 2: 7 },
    },
    {
      name: 'D₈',
      altNames: ['D₄', 'Dihedral-8'],
      order: 8,
      isAbelian: false,
      isCyclic: false,
      description: 'Dihedral group - symmetries of a square',
      generators: '⟨r, s | r⁴ = s² = 1, srs = r⁻¹⟩',
      center: '{1, r²}',
      numElements: { 1: 1, 2: 5, 4: 2 },
    },
    {
      name: 'Q₈',
      altNames: ['Quaternion group'],
      order: 8,
      isAbelian: false,
      isCyclic: false,
      description: 'Quaternion group - unique element of order 2',
      generators: '⟨i, j | i⁴ = 1, i² = j², jij⁻¹ = i⁻¹⟩',
      center: '{1, -1}',
      numElements: { 1: 1, 2: 1, 4: 6 },
    },
  ],
  9: [
    {
      name: 'Z/9Z',
      altNames: ['C₉', 'Z₉'],
      order: 9,
      isAbelian: true,
      isCyclic: true,
      description: 'Cyclic group of order 9',
      numElements: { 1: 1, 3: 2, 9: 6 },
    },
    {
      name: 'Z/3Z × Z/3Z',
      altNames: ['C₃ × C₃', 'Elementary abelian 3-group'],
      order: 9,
      isAbelian: true,
      isCyclic: false,
      description: 'Direct product - order p² implies abelian',
      numElements: { 1: 1, 3: 8 },
    },
  ],
  10: [
    {
      name: 'Z/10Z',
      altNames: ['C₁₀', 'Z₁₀'],
      order: 10,
      isAbelian: true,
      isCyclic: true,
      description: 'Cyclic group of order 10',
      numElements: { 1: 1, 2: 1, 5: 4, 10: 4 },
    },
    {
      name: 'D₁₀',
      altNames: ['D₅', 'Dihedral-10'],
      order: 10,
      isAbelian: false,
      isCyclic: false,
      description: 'Dihedral group - symmetries of a regular pentagon',
      generators: '⟨r, s | r⁵ = s² = 1, srs = r⁻¹⟩',
      center: '{e}',
      numElements: { 1: 1, 2: 5, 5: 4 },
    },
  ],
  11: [{
    name: 'Z/11Z',
    altNames: ['C₁₁', 'Z₁₁'],
    order: 11,
    isAbelian: true,
    isCyclic: true,
    description: 'Cyclic group of order 11 (prime order)',
    numElements: { 1: 1, 11: 10 },
  }],
  12: [
    {
      name: 'Z/12Z',
      altNames: ['C₁₂', 'Z₁₂'],
      order: 12,
      isAbelian: true,
      isCyclic: true,
      description: 'Cyclic group of order 12',
      numElements: { 1: 1, 2: 1, 3: 2, 4: 2, 6: 2, 12: 4 },
    },
    {
      name: 'Z/6Z × Z/2Z',
      altNames: ['C₆ × C₂'],
      order: 12,
      isAbelian: true,
      isCyclic: false,
      description: 'Direct product of cyclic groups',
      numElements: { 1: 1, 2: 3, 3: 2, 6: 6 },
    },
    {
      name: 'A₄',
      altNames: ['Alternating group'],
      order: 12,
      isAbelian: false,
      isCyclic: false,
      description: 'Alternating group on 4 elements - has V₄ as normal subgroup',
      center: '{e}',
      numElements: { 1: 1, 2: 3, 3: 8 },
    },
    {
      name: 'D₁₂',
      altNames: ['D₆', 'Dihedral-12'],
      order: 12,
      isAbelian: false,
      isCyclic: false,
      description: 'Dihedral group - symmetries of a regular hexagon',
      generators: '⟨r, s | r⁶ = s² = 1, srs = r⁻¹⟩',
      center: '{1, r³}',
      numElements: { 1: 1, 2: 7, 3: 2, 6: 2 },
    },
    {
      name: 'Dic₃',
      altNames: ['Q₁₂', 'Dicyclic group'],
      order: 12,
      isAbelian: false,
      isCyclic: false,
      description: 'Dicyclic group (generalized quaternion)',
      generators: '⟨a, b | a⁶ = 1, b² = a³, bab⁻¹ = a⁻¹⟩',
      center: '{1, a³}',
      numElements: { 1: 1, 2: 1, 3: 2, 4: 6, 6: 2 },
    },
  ],
  13: [{
    name: 'Z/13Z',
    altNames: ['C₁₃', 'Z₁₃'],
    order: 13,
    isAbelian: true,
    isCyclic: true,
    description: 'Cyclic group of order 13 (prime order)',
    numElements: { 1: 1, 13: 12 },
  }],
  14: [
    {
      name: 'Z/14Z',
      altNames: ['C₁₄', 'Z₁₄'],
      order: 14,
      isAbelian: true,
      isCyclic: true,
      description: 'Cyclic group of order 14',
      numElements: { 1: 1, 2: 1, 7: 6, 14: 6 },
    },
    {
      name: 'D₁₄',
      altNames: ['D₇', 'Dihedral-14'],
      order: 14,
      isAbelian: false,
      isCyclic: false,
      description: 'Dihedral group - symmetries of a regular heptagon',
      center: '{e}',
      numElements: { 1: 1, 2: 7, 7: 6 },
    },
  ],
  15: [{
    name: 'Z/15Z',
    altNames: ['C₁₅', 'Z₁₅', 'Z₃ × Z₅'],
    order: 15,
    isAbelian: true,
    isCyclic: true,
    description: 'Cyclic group of order 15 - unique by Sylow theory (n₃ = n₅ = 1)',
    numElements: { 1: 1, 3: 2, 5: 4, 15: 8 },
  }],
};

const orderCounts: Record<number, number> = {
  1: 1, 2: 1, 3: 1, 4: 2, 5: 1, 6: 2, 7: 1, 8: 5, 9: 2, 10: 2, 11: 1, 12: 5, 13: 1, 14: 2, 15: 1
};

export function SmallGroupGallery() {
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<GroupInfo | null>(null);
  const [filterAbelian, setFilterAbelian] = useState<boolean | null>(null);

  const filteredOrders = Object.keys(smallGroups)
    .map(Number)
    .filter(order => {
      if (filterAbelian === null) return true;
      return smallGroups[order].some(g => g.isAbelian === filterAbelian);
    });

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Groups of Small Order Gallery</h4>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilterAbelian(null)}
          className={`px-3 py-1 rounded text-sm ${
            filterAbelian === null ? 'bg-blue-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilterAbelian(true)}
          className={`px-3 py-1 rounded text-sm ${
            filterAbelian === true ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Abelian
        </button>
        <button
          onClick={() => setFilterAbelian(false)}
          className={`px-3 py-1 rounded text-sm ${
            filterAbelian === false ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Non-Abelian
        </button>
      </div>

      {/* Order Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filteredOrders.map(order => (
          <motion.button
            key={order}
            onClick={() => {
              setSelectedOrder(selectedOrder === order ? null : order);
              setSelectedGroup(null);
            }}
            className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center transition-all ${
              selectedOrder === order
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-bold">{order}</span>
            <span className="text-xs opacity-70">{orderCounts[order]}</span>
          </motion.button>
        ))}
      </div>

      {/* Groups for Selected Order */}
      <AnimatePresence mode="wait">
        {selectedOrder && (
          <motion.div
            key={selectedOrder}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6"
          >
            <div className="text-dark-400 text-sm mb-3">
              {orderCounts[selectedOrder]} group{orderCounts[selectedOrder] > 1 ? 's' : ''} of order {selectedOrder}:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {smallGroups[selectedOrder]
                .filter(g => filterAbelian === null || g.isAbelian === filterAbelian)
                .map((group, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedGroup(selectedGroup === group ? null : group)}
                  className={`p-4 rounded-lg text-left transition-all ${
                    selectedGroup === group
                      ? 'bg-blue-900/50 border border-blue-500'
                      : 'bg-dark-700 hover:bg-dark-600 border border-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-dark-100 font-medium">{group.name}</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      group.isAbelian ? 'bg-green-900/50 text-green-400' : 'bg-purple-900/50 text-purple-400'
                    }`}>
                      {group.isAbelian ? 'Abelian' : 'Non-Abelian'}
                    </span>
                    {group.isCyclic && (
                      <span className="px-2 py-0.5 rounded text-xs bg-yellow-900/50 text-yellow-400">
                        Cyclic
                      </span>
                    )}
                  </div>
                  <div className="text-dark-500 text-xs">
                    {group.altNames.join(', ')}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Group Details */}
      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-700 p-4 rounded-lg overflow-hidden"
          >
            <h5 className="text-dark-100 font-semibold text-lg mb-2">{selectedGroup.name}</h5>
            <p className="text-dark-300 mb-4">{selectedGroup.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-dark-500">Order:</span>
                <span className="text-dark-200 ml-2">{selectedGroup.order}</span>
              </div>
              <div>
                <span className="text-dark-500">Abelian:</span>
                <span className={`ml-2 ${selectedGroup.isAbelian ? 'text-green-400' : 'text-red-400'}`}>
                  {selectedGroup.isAbelian ? 'Yes' : 'No'}
                </span>
              </div>
              {selectedGroup.generators && (
                <div className="col-span-2">
                  <span className="text-dark-500">Presentation:</span>
                  <span className="text-blue-400 ml-2 font-mono">{selectedGroup.generators}</span>
                </div>
              )}
              {selectedGroup.center && (
                <div className="col-span-2">
                  <span className="text-dark-500">Center:</span>
                  <span className="text-purple-400 ml-2 font-mono">{selectedGroup.center}</span>
                </div>
              )}
              {selectedGroup.numElements && (
                <div className="col-span-2">
                  <span className="text-dark-500">Element orders:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {Object.entries(selectedGroup.numElements).map(([ord, count]) => (
                      <span key={ord} className="bg-dark-600 px-2 py-1 rounded text-dark-300">
                        {count} of order {ord}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary Stats */}
      <div className="mt-6 p-4 bg-dark-700/50 rounded-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400">
              {Object.values(smallGroups).flat().length}
            </div>
            <div className="text-dark-500 text-sm">Total groups (1-15)</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">
              {Object.values(smallGroups).flat().filter(g => g.isAbelian).length}
            </div>
            <div className="text-dark-500 text-sm">Abelian</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">
              {Object.values(smallGroups).flat().filter(g => !g.isAbelian).length}
            </div>
            <div className="text-dark-500 text-sm">Non-Abelian</div>
          </div>
        </div>
      </div>
    </div>
  );
}
