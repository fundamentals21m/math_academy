/**
 * Interactive Subgroup Checker
 * Test if a subset forms a subgroup using the subgroup criterion
 */
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GroupDef {
  name: string;
  elements: string[];
  operation: (a: string, b: string) => string;
  inverse: (a: string) => string;
  identity: string;
}

// Predefined groups
const GROUPS: Record<string, GroupDef> = {
  Z6: {
    name: 'ℤ/6ℤ',
    elements: ['0', '1', '2', '3', '4', '5'],
    operation: (a, b) => String((parseInt(a) + parseInt(b)) % 6),
    inverse: (a) => String((6 - parseInt(a)) % 6),
    identity: '0',
  },
  Z8: {
    name: 'ℤ/8ℤ',
    elements: ['0', '1', '2', '3', '4', '5', '6', '7'],
    operation: (a, b) => String((parseInt(a) + parseInt(b)) % 8),
    inverse: (a) => String((8 - parseInt(a)) % 8),
    identity: '0',
  },
  S3: {
    name: 'S₃',
    elements: ['e', 'r', 'r²', 's', 'sr', 'sr²'],
    operation: (a, b) => {
      const table: Record<string, Record<string, string>> = {
        'e': { 'e': 'e', 'r': 'r', 'r²': 'r²', 's': 's', 'sr': 'sr', 'sr²': 'sr²' },
        'r': { 'e': 'r', 'r': 'r²', 'r²': 'e', 's': 'sr²', 'sr': 's', 'sr²': 'sr' },
        'r²': { 'e': 'r²', 'r': 'e', 'r²': 'r', 's': 'sr', 'sr': 'sr²', 'sr²': 's' },
        's': { 'e': 's', 'r': 'sr', 'r²': 'sr²', 's': 'e', 'sr': 'r', 'sr²': 'r²' },
        'sr': { 'e': 'sr', 'r': 'sr²', 'r²': 's', 's': 'r²', 'sr': 'e', 'sr²': 'r' },
        'sr²': { 'e': 'sr²', 'r': 's', 'r²': 'sr', 's': 'r', 'sr': 'r²', 'sr²': 'e' },
      };
      return table[a][b];
    },
    inverse: (a) => {
      const inverses: Record<string, string> = {
        'e': 'e', 'r': 'r²', 'r²': 'r', 's': 's', 'sr': 'sr', 'sr²': 'sr²'
      };
      return inverses[a];
    },
    identity: 'e',
  },
};

export function SubgroupChecker() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof GROUPS>('Z6');
  const [selectedElements, setSelectedElements] = useState<Set<string>>(new Set(['0', '2', '4']));
  const [showChecks, setShowChecks] = useState(false);

  const group = GROUPS[selectedGroup];

  // Toggle element selection
  const toggleElement = (el: string) => {
    setSelectedElements(prev => {
      const newSet = new Set(prev);
      if (newSet.has(el)) {
        newSet.delete(el);
      } else {
        newSet.add(el);
      }
      return newSet;
    });
  };

  // Select preset subgroups
  const selectPreset = (elements: string[]) => {
    setSelectedElements(new Set(elements));
    setShowChecks(false);
  };

  // Presets for current group
  const presets = useMemo(() => {
    if (selectedGroup === 'Z6') {
      return [
        { name: '{0}', elements: ['0'] },
        { name: '{0, 3}', elements: ['0', '3'] },
        { name: '{0, 2, 4}', elements: ['0', '2', '4'] },
        { name: 'ℤ/6ℤ', elements: ['0', '1', '2', '3', '4', '5'] },
        { name: '{0, 1} (not subgroup)', elements: ['0', '1'] },
      ];
    } else if (selectedGroup === 'Z8') {
      return [
        { name: '{0}', elements: ['0'] },
        { name: '{0, 4}', elements: ['0', '4'] },
        { name: '{0, 2, 4, 6}', elements: ['0', '2', '4', '6'] },
        { name: 'ℤ/8ℤ', elements: ['0', '1', '2', '3', '4', '5', '6', '7'] },
        { name: '{0, 1, 2} (not subgroup)', elements: ['0', '1', '2'] },
      ];
    } else {
      return [
        { name: '{e}', elements: ['e'] },
        { name: '⟨r⟩', elements: ['e', 'r', 'r²'] },
        { name: '⟨s⟩', elements: ['e', 's'] },
        { name: 'S₃', elements: ['e', 'r', 'r²', 's', 'sr', 'sr²'] },
        { name: '{e, r, s} (not subgroup)', elements: ['e', 'r', 's'] },
      ];
    }
  }, [selectedGroup]);

  // Check subgroup criteria
  const subgroupCheck = useMemo(() => {
    const H = Array.from(selectedElements);

    // Check 1: Non-empty
    const nonEmpty = H.length > 0;

    // Check 2: Contains identity
    const hasIdentity = selectedElements.has(group.identity);

    // Check 3: Closed under operation
    let closureFailed: [string, string, string] | null = null;
    for (const a of H) {
      for (const b of H) {
        const ab = group.operation(a, b);
        if (!selectedElements.has(ab)) {
          closureFailed = [a, b, ab];
          break;
        }
      }
      if (closureFailed) break;
    }
    const closedUnderOp = closureFailed === null;

    // Check 4: Closed under inverses
    let inverseFailed: [string, string] | null = null;
    for (const a of H) {
      const inv = group.inverse(a);
      if (!selectedElements.has(inv)) {
        inverseFailed = [a, inv];
        break;
      }
    }
    const closedUnderInv = inverseFailed === null;

    // Alternative: Two-step subgroup test (ab⁻¹ ∈ H)
    let twoStepFailed: [string, string, string] | null = null;
    for (const a of H) {
      for (const b of H) {
        const bInv = group.inverse(b);
        const abInv = group.operation(a, bInv);
        if (!selectedElements.has(abInv)) {
          twoStepFailed = [a, b, abInv];
          break;
        }
      }
      if (twoStepFailed) break;
    }
    const twoStepPassed = twoStepFailed === null;

    const isSubgroup = nonEmpty && hasIdentity && closedUnderOp && closedUnderInv;

    return {
      nonEmpty,
      hasIdentity,
      closedUnderOp,
      closureFailed,
      closedUnderInv,
      inverseFailed,
      twoStepPassed,
      twoStepFailed,
      isSubgroup,
    };
  }, [selectedElements, group]);

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Subgroup Checker
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(GROUPS).map(([key, g]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedGroup(key as keyof typeof GROUPS);
                setSelectedElements(new Set([g.identity]));
                setShowChecks(false);
              }}
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

      {/* Presets */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Try Preset:</label>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => selectPreset(preset.elements)}
              className="px-3 py-1.5 bg-dark-800 text-dark-400 rounded-lg text-sm hover:bg-dark-700 border border-dark-700"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Element selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">
          Select Subset H ⊆ {group.name}:
        </label>
        <div className="flex flex-wrap gap-2">
          {group.elements.map(el => {
            const isSelected = selectedElements.has(el);
            const isIdentity = el === group.identity;
            return (
              <button
                key={el}
                onClick={() => toggleElement(el)}
                className={`w-12 h-12 rounded-lg font-mono font-bold transition-all ${
                  isSelected
                    ? isIdentity
                      ? 'bg-amber-500/30 text-amber-400 border-2 border-amber-500'
                      : 'bg-emerald-500/30 text-emerald-400 border-2 border-emerald-500'
                    : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
                }`}
              >
                {el}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-dark-400 mt-2">
          H = {'{'}{ Array.from(selectedElements).join(', ') }{'}'}
          <span className="ml-2 text-dark-500">|H| = {selectedElements.size}</span>
        </p>
      </div>

      {/* Check button */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowChecks(true)}
          className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-500/30 transition-colors border border-indigo-500/50"
        >
          Check Subgroup Criteria
        </button>
        <button
          onClick={() => setSelectedElements(new Set([group.identity]))}
          className="px-4 py-2 bg-dark-800 text-dark-400 rounded-lg text-sm hover:bg-dark-700 border border-dark-700"
        >
          Clear
        </button>
      </div>

      {/* Results */}
      <AnimatePresence>
        {showChecks && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            {/* Non-empty check */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-3 rounded-lg border ${
                subgroupCheck.nonEmpty
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={subgroupCheck.nonEmpty ? 'text-emerald-400' : 'text-red-400'}>
                  {subgroupCheck.nonEmpty ? '✓' : '✗'}
                </span>
                <span className="text-dark-200">Non-empty</span>
              </div>
              <p className="text-xs text-dark-400 mt-1">H ≠ ∅</p>
            </motion.div>

            {/* Identity check */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={`p-3 rounded-lg border ${
                subgroupCheck.hasIdentity
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={subgroupCheck.hasIdentity ? 'text-emerald-400' : 'text-red-400'}>
                  {subgroupCheck.hasIdentity ? '✓' : '✗'}
                </span>
                <span className="text-dark-200">Contains Identity</span>
              </div>
              <p className="text-xs text-dark-400 mt-1">
                {group.identity} ∈ H? {subgroupCheck.hasIdentity ? 'Yes' : 'No'}
              </p>
            </motion.div>

            {/* Closure check */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`p-3 rounded-lg border ${
                subgroupCheck.closedUnderOp
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={subgroupCheck.closedUnderOp ? 'text-emerald-400' : 'text-red-400'}>
                  {subgroupCheck.closedUnderOp ? '✓' : '✗'}
                </span>
                <span className="text-dark-200">Closed Under Operation</span>
              </div>
              <p className="text-xs text-dark-400 mt-1">
                {subgroupCheck.closedUnderOp
                  ? '∀a,b ∈ H: ab ∈ H'
                  : `${subgroupCheck.closureFailed![0]} * ${subgroupCheck.closureFailed![1]} = ${subgroupCheck.closureFailed![2]} ∉ H`}
              </p>
            </motion.div>

            {/* Inverse check */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`p-3 rounded-lg border ${
                subgroupCheck.closedUnderInv
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={subgroupCheck.closedUnderInv ? 'text-emerald-400' : 'text-red-400'}>
                  {subgroupCheck.closedUnderInv ? '✓' : '✗'}
                </span>
                <span className="text-dark-200">Closed Under Inverses</span>
              </div>
              <p className="text-xs text-dark-400 mt-1">
                {subgroupCheck.closedUnderInv
                  ? '∀a ∈ H: a⁻¹ ∈ H'
                  : `${subgroupCheck.inverseFailed![0]}⁻¹ = ${subgroupCheck.inverseFailed![1]} ∉ H`}
              </p>
            </motion.div>

            {/* Final verdict */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className={`p-4 rounded-lg border text-center ${
                subgroupCheck.isSubgroup
                  ? 'bg-emerald-500/20 border-emerald-500/50'
                  : 'bg-red-500/20 border-red-500/50'
              }`}
            >
              <p className={`text-lg font-bold ${subgroupCheck.isSubgroup ? 'text-emerald-400' : 'text-red-400'}`}>
                {subgroupCheck.isSubgroup ? '✓ H is a SUBGROUP!' : '✗ H is NOT a subgroup'}
              </p>
              {subgroupCheck.isSubgroup && (
                <p className="text-sm text-dark-300 mt-1">
                  H ≤ {group.name}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Subgroup Criterion:</strong> A non-empty subset H ⊆ G is a subgroup iff
          (1) e ∈ H, (2) a, b ∈ H ⇒ ab ∈ H, and (3) a ∈ H ⇒ a⁻¹ ∈ H.
          <br />
          <strong>Two-Step Test:</strong> Equivalently, H ≤ G iff ∀a, b ∈ H: ab⁻¹ ∈ H.
        </p>
      </div>
    </div>
  );
}
