/**
 * Interactive Group Axiom Checker
 * Build a Cayley table and verify group axioms (closure, associativity, identity, inverses)
 */
import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AxiomResult {
  name: string;
  satisfied: boolean;
  details: string;
}

// Predefined example groups
const EXAMPLE_GROUPS = {
  Z3: {
    name: 'ℤ/3ℤ',
    elements: ['0', '1', '2'],
    table: [
      ['0', '1', '2'],
      ['1', '2', '0'],
      ['2', '0', '1'],
    ],
  },
  Z4: {
    name: 'ℤ/4ℤ',
    elements: ['0', '1', '2', '3'],
    table: [
      ['0', '1', '2', '3'],
      ['1', '2', '3', '0'],
      ['2', '3', '0', '1'],
      ['3', '0', '1', '2'],
    ],
  },
  Klein4: {
    name: 'V₄ (Klein 4)',
    elements: ['e', 'a', 'b', 'c'],
    table: [
      ['e', 'a', 'b', 'c'],
      ['a', 'e', 'c', 'b'],
      ['b', 'c', 'e', 'a'],
      ['c', 'b', 'a', 'e'],
    ],
  },
  S3: {
    name: 'S₃',
    elements: ['e', 'r', 'r²', 's', 'sr', 'sr²'],
    table: [
      ['e', 'r', 'r²', 's', 'sr', 'sr²'],
      ['r', 'r²', 'e', 'sr²', 's', 'sr'],
      ['r²', 'e', 'r', 'sr', 'sr²', 's'],
      ['s', 'sr', 'sr²', 'e', 'r', 'r²'],
      ['sr', 'sr²', 's', 'r²', 'e', 'r'],
      ['sr²', 's', 'sr', 'r', 'r²', 'e'],
    ],
  },
  NotGroup: {
    name: 'Not a Group',
    elements: ['a', 'b', 'c'],
    table: [
      ['a', 'b', 'c'],
      ['b', 'c', 'a'],
      ['c', 'a', 'c'], // Breaks associativity
    ],
  },
};

export function GroupAxiomChecker() {
  const [elements, setElements] = useState<string[]>(['e', 'a', 'b']);
  const [table, setTable] = useState<string[][]>([
    ['e', 'a', 'b'],
    ['a', 'b', 'e'],
    ['b', 'e', 'a'],
  ]);
  const [showChecks, setShowChecks] = useState(false);
  const [highlightCell, setHighlightCell] = useState<[number, number] | null>(null);
  const [selectedExample, setSelectedExample] = useState<string>('');

  // Load example group
  const loadExample = useCallback((key: string) => {
    const example = EXAMPLE_GROUPS[key as keyof typeof EXAMPLE_GROUPS];
    if (example) {
      setElements([...example.elements]);
      setTable(example.table.map(row => [...row]));
      setSelectedExample(key);
      setShowChecks(false);
    }
  }, []);

  // Update table cell
  const updateCell = useCallback((row: number, col: number, value: string) => {
    setTable(prev => {
      const newTable = prev.map(r => [...r]);
      newTable[row][col] = value;
      return newTable;
    });
    setSelectedExample('');
  }, []);

  // Add element
  const addElement = useCallback(() => {
    const newName = String.fromCharCode(97 + elements.length); // a, b, c, ...
    setElements(prev => [...prev, newName]);
    setTable(prev => {
      const n = prev.length;
      const newTable = prev.map(row => [...row, newName]);
      newTable.push(Array(n + 1).fill(newName));
      return newTable;
    });
    setSelectedExample('');
  }, [elements.length]);

  // Remove element
  const removeElement = useCallback(() => {
    if (elements.length <= 2) return;
    setElements(prev => prev.slice(0, -1));
    setTable(prev => prev.slice(0, -1).map(row => row.slice(0, -1)));
    setSelectedExample('');
  }, [elements.length]);

  // Check all axioms
  const axiomResults = useMemo((): AxiomResult[] => {
    const n = elements.length;
    const results: AxiomResult[] = [];

    // 1. Closure: All products must be in the set
    let closureSatisfied = true;
    let closureDetails = '';
    for (let i = 0; i < n && closureSatisfied; i++) {
      for (let j = 0; j < n && closureSatisfied; j++) {
        if (!elements.includes(table[i][j])) {
          closureSatisfied = false;
          closureDetails = `${elements[i]} * ${elements[j]} = ${table[i][j]} is not in the set`;
        }
      }
    }
    results.push({
      name: 'Closure',
      satisfied: closureSatisfied,
      details: closureSatisfied ? 'All products are in the set' : closureDetails,
    });

    if (!closureSatisfied) {
      results.push({ name: 'Associativity', satisfied: false, details: 'Cannot check (closure failed)' });
      results.push({ name: 'Identity', satisfied: false, details: 'Cannot check (closure failed)' });
      results.push({ name: 'Inverses', satisfied: false, details: 'Cannot check (closure failed)' });
      return results;
    }

    // Helper: get product index
    const product = (i: number, j: number): number => {
      const result = table[i][j];
      return elements.indexOf(result);
    };

    // 2. Associativity: (a*b)*c = a*(b*c) for all a, b, c
    let assocSatisfied = true;
    let assocDetails = '';
    for (let i = 0; i < n && assocSatisfied; i++) {
      for (let j = 0; j < n && assocSatisfied; j++) {
        for (let k = 0; k < n && assocSatisfied; k++) {
          const left = product(product(i, j), k); // (a*b)*c
          const right = product(i, product(j, k)); // a*(b*c)
          if (left !== right) {
            assocSatisfied = false;
            assocDetails = `(${elements[i]}*${elements[j]})*${elements[k]} ≠ ${elements[i]}*(${elements[j]}*${elements[k]})`;
          }
        }
      }
    }
    results.push({
      name: 'Associativity',
      satisfied: assocSatisfied,
      details: assocSatisfied ? 'All triple products are associative' : assocDetails,
    });

    // 3. Identity: There exists e such that e*a = a*e = a for all a
    let identityIdx = -1;
    for (let i = 0; i < n; i++) {
      let isIdentity = true;
      for (let j = 0; j < n && isIdentity; j++) {
        if (product(i, j) !== j || product(j, i) !== j) {
          isIdentity = false;
        }
      }
      if (isIdentity) {
        identityIdx = i;
        break;
      }
    }
    results.push({
      name: 'Identity',
      satisfied: identityIdx !== -1,
      details: identityIdx !== -1
        ? `Identity element: ${elements[identityIdx]}`
        : 'No identity element found',
    });

    // 4. Inverses: For each a, there exists b such that a*b = b*a = e
    let inversesSatisfied = identityIdx !== -1;
    let inversesDetails = '';
    if (identityIdx !== -1) {
      for (let i = 0; i < n && inversesSatisfied; i++) {
        let hasInverse = false;
        for (let j = 0; j < n && !hasInverse; j++) {
          if (product(i, j) === identityIdx && product(j, i) === identityIdx) {
            hasInverse = true;
          }
        }
        if (!hasInverse) {
          inversesSatisfied = false;
          inversesDetails = `${elements[i]} has no inverse`;
        }
      }
    }
    results.push({
      name: 'Inverses',
      satisfied: inversesSatisfied,
      details: inversesSatisfied
        ? 'Every element has an inverse'
        : identityIdx === -1
          ? 'Cannot check (no identity)'
          : inversesDetails,
    });

    return results;
  }, [elements, table]);

  const isGroup = axiomResults.every(r => r.satisfied);

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Group Axiom Checker
      </h4>

      {/* Example selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Load Example:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(EXAMPLE_GROUPS).map(([key, group]) => (
            <button
              key={key}
              onClick={() => loadExample(key)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedExample === key
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>
      </div>

      {/* Element controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={addElement}
          disabled={elements.length >= 6}
          className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-500/30 transition-colors border border-emerald-500/50 disabled:opacity-50"
        >
          + Add Element
        </button>
        <button
          onClick={removeElement}
          disabled={elements.length <= 2}
          className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm font-medium hover:bg-red-500/30 transition-colors border border-red-500/50 disabled:opacity-50"
        >
          - Remove Element
        </button>
        <button
          onClick={() => setShowChecks(!showChecks)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showChecks
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
          }`}
        >
          {showChecks ? 'Hide Checks' : 'Check Axioms'}
        </button>
      </div>

      {/* Cayley Table */}
      <div className="mb-4 overflow-x-auto">
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="w-12 h-12 bg-dark-800 border border-dark-600 text-indigo-400 font-bold">
                *
              </th>
              {elements.map((el, j) => (
                <th key={j} className="w-12 h-12 bg-dark-800 border border-dark-600 text-blue-400 font-mono">
                  {el}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {elements.map((rowEl, i) => (
              <tr key={i}>
                <td className="w-12 h-12 bg-dark-800 border border-dark-600 text-center text-emerald-400 font-mono">
                  {rowEl}
                </td>
                {elements.map((_, j) => (
                  <td
                    key={j}
                    className={`w-12 h-12 border border-dark-600 p-0 ${
                      highlightCell && highlightCell[0] === i && highlightCell[1] === j
                        ? 'bg-amber-500/30'
                        : 'bg-dark-900'
                    }`}
                    onMouseEnter={() => setHighlightCell([i, j])}
                    onMouseLeave={() => setHighlightCell(null)}
                  >
                    <select
                      value={table[i][j]}
                      onChange={(e) => updateCell(i, j, e.target.value)}
                      className="w-full h-full bg-transparent text-center text-dark-100 font-mono cursor-pointer focus:outline-none focus:bg-dark-700"
                    >
                      {elements.map((el) => (
                        <option key={el} value={el} className="bg-dark-800">
                          {el}
                        </option>
                      ))}
                    </select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Highlight info */}
      {highlightCell && (
        <div className="mb-4 p-3 bg-dark-800/50 rounded-lg">
          <p className="text-sm text-dark-200 font-mono">
            <span className="text-emerald-400">{elements[highlightCell[0]]}</span>
            {' * '}
            <span className="text-blue-400">{elements[highlightCell[1]]}</span>
            {' = '}
            <span className="text-amber-400">{table[highlightCell[0]][highlightCell[1]]}</span>
          </p>
        </div>
      )}

      {/* Axiom checks */}
      <AnimatePresence>
        {showChecks && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            {axiomResults.map((result, idx) => (
              <motion.div
                key={result.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-3 rounded-lg border ${
                  result.satisfied
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-red-500/10 border-red-500/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={result.satisfied ? 'text-emerald-400' : 'text-red-400'}>
                    {result.satisfied ? '✓' : '✗'}
                  </span>
                  <span className={`font-medium ${result.satisfied ? 'text-emerald-400' : 'text-red-400'}`}>
                    {result.name}
                  </span>
                </div>
                <p className="text-sm text-dark-400 mt-1">{result.details}</p>
              </motion.div>
            ))}

            {/* Final verdict */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className={`p-4 rounded-lg border text-center ${
                isGroup
                  ? 'bg-emerald-500/20 border-emerald-500/50'
                  : 'bg-red-500/20 border-red-500/50'
              }`}
            >
              <p className={`text-lg font-bold ${isGroup ? 'text-emerald-400' : 'text-red-400'}`}>
                {isGroup ? '✓ This is a GROUP!' : '✗ This is NOT a group'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Group Axioms:</strong> A set G with binary operation * is a group if:
          (1) Closure: a*b ∈ G for all a,b ∈ G;
          (2) Associativity: (a*b)*c = a*(b*c);
          (3) Identity: ∃e such that e*a = a*e = a;
          (4) Inverses: ∀a, ∃b such that a*b = b*a = e.
        </p>
      </div>
    </div>
  );
}
