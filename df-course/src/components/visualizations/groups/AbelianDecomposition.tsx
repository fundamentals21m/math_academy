import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function primeFactorization(n: number): Map<number, number> {
  const factors = new Map<number, number>();
  let num = n;
  for (let p = 2; p * p <= num; p++) {
    while (num % p === 0) {
      factors.set(p, (factors.get(p) || 0) + 1);
      num /= p;
    }
  }
  if (num > 1) {
    factors.set(num, 1);
  }
  return factors;
}

function partitions(n: number): number[][] {
  const result: number[][] = [];

  function partition(num: number, max: number, current: number[]) {
    if (num === 0) {
      result.push([...current]);
      return;
    }
    for (let i = Math.min(num, max); i >= 1; i--) {
      current.push(i);
      partition(num - i, i, current);
      current.pop();
    }
  }

  partition(n, n, []);
  return result;
}

function partitionCount(n: number): number {
  return partitions(n).length;
}

function getAbelianGroups(n: number): { invariantFactors: number[]; elementaryDivisors: number[] }[] {
  const factors = primeFactorization(n);
  const primes = Array.from(factors.keys()).sort((a, b) => a - b);

  // Get all partitions for each prime power
  const primePartitions: Map<number, number[][]> = new Map();
  for (const [p, exp] of factors.entries()) {
    primePartitions.set(p, partitions(exp));
  }

  // Generate all combinations of partitions
  const groups: { invariantFactors: number[]; elementaryDivisors: number[] }[] = [];

  function generateCombinations(primeIdx: number, currentPartitions: Map<number, number[]>) {
    if (primeIdx === primes.length) {
      // Compute elementary divisors from current partitions
      const elementaryDivisors: number[] = [];
      for (const [p, parts] of currentPartitions.entries()) {
        for (const exp of parts) {
          elementaryDivisors.push(Math.pow(p, exp));
        }
      }
      elementaryDivisors.sort((a, b) => a - b);

      // Compute invariant factors from elementary divisors
      const maxLen = Math.max(...Array.from(currentPartitions.values()).map(p => p.length));
      const invariantFactors: number[] = [];

      // Organize by position in partition and multiply
      for (let pos = 0; pos < maxLen; pos++) {
        let factor = 1;
        for (const [p, parts] of currentPartitions.entries()) {
          if (pos < parts.length) {
            factor *= Math.pow(p, parts[parts.length - 1 - pos]);
          }
        }
        if (factor > 1) {
          invariantFactors.push(factor);
        }
      }
      invariantFactors.sort((a, b) => a - b);

      groups.push({ invariantFactors, elementaryDivisors });
      return;
    }

    const p = primes[primeIdx];
    const parts = primePartitions.get(p)!;

    for (const part of parts) {
      currentPartitions.set(p, part);
      generateCombinations(primeIdx + 1, currentPartitions);
    }
  }

  generateCombinations(0, new Map());
  return groups;
}

export function AbelianDecomposition() {
  const [order, setOrder] = useState(12);
  const [viewMode, setViewMode] = useState<'invariant' | 'elementary'>('invariant');
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  const factors = useMemo(() => primeFactorization(order), [order]);
  const groups = useMemo(() => getAbelianGroups(order), [order]);

  const numGroups = useMemo(() => {
    let count = 1;
    for (const exp of factors.values()) {
      count *= partitionCount(exp);
    }
    return count;
  }, [factors]);

  const formatGroup = (factors: number[], prefix: string = 'Z/'): string => {
    if (factors.length === 0) return '{e}';
    return factors.map(f => `${prefix}${f}Z`).join(' × ');
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Finitely Generated Abelian Group Decomposition</h4>

      {/* Order Input */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div>
          <label className="text-dark-400 text-sm block mb-1">Group Order</label>
          <input
            type="number"
            min={1}
            max={200}
            value={order}
            onChange={(e) => {
              const val = Math.min(200, Math.max(1, parseInt(e.target.value) || 1));
              setOrder(val);
              setSelectedGroup(null);
            }}
            className="bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 w-24"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('invariant')}
            className={`px-4 py-2 rounded transition-all ${
              viewMode === 'invariant'
                ? 'bg-blue-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Invariant Factors
          </button>
          <button
            onClick={() => setViewMode('elementary')}
            className={`px-4 py-2 rounded transition-all ${
              viewMode === 'elementary'
                ? 'bg-purple-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Elementary Divisors
          </button>
        </div>
      </div>

      {/* Prime Factorization */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="text-dark-300 mb-2">
          Prime Factorization: <span className="text-blue-400 font-mono">{order}</span> = {' '}
          {Array.from(factors.entries()).map(([p, exp], idx) => (
            <span key={p}>
              {idx > 0 && ' · '}
              <span className="text-green-400">{p}</span>
              {exp > 1 && <sup className="text-green-400">{exp}</sup>}
            </span>
          ))}
        </div>
        <div className="text-dark-400 text-sm">
          Number of abelian groups: {' '}
          {Array.from(factors.entries()).map(([p, exp], idx) => (
            <span key={p}>
              {idx > 0 && ' × '}
              p({exp})
            </span>
          ))} = <span className="text-yellow-400 font-bold">{numGroups}</span>
        </div>
      </div>

      {/* Groups List */}
      <div className="space-y-3 mb-6">
        <div className="text-dark-400 text-sm">
          All abelian groups of order {order} ({viewMode === 'invariant' ? 'Invariant Factors' : 'Elementary Divisors'}):
        </div>
        {groups.map((group, idx) => (
          <motion.button
            key={idx}
            onClick={() => setSelectedGroup(selectedGroup === idx ? null : idx)}
            className={`w-full p-3 rounded-lg text-left transition-all ${
              selectedGroup === idx
                ? 'bg-blue-900/50 border border-blue-500'
                : 'bg-dark-700 hover:bg-dark-600 border border-transparent'
            }`}
            whileHover={{ scale: 1.01 }}
          >
            <div className="font-mono text-dark-200">
              {viewMode === 'invariant'
                ? formatGroup(group.invariantFactors)
                : formatGroup(group.elementaryDivisors)
              }
            </div>
            <div className="text-dark-500 text-sm mt-1">
              {viewMode === 'invariant'
                ? `Invariant factors: (${group.invariantFactors.join(', ') || 'trivial'})`
                : `Elementary divisors: (${group.elementaryDivisors.join(', ') || 'trivial'})`
              }
            </div>
          </motion.button>
        ))}
      </div>

      {/* Selected Group Details */}
      <AnimatePresence>
        {selectedGroup !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark-700 p-4 rounded-lg overflow-hidden"
          >
            <h5 className="text-dark-200 font-medium mb-3">Group Details</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-dark-400 text-sm mb-1">Invariant Factor Form:</div>
                <div className="text-blue-400 font-mono">
                  {formatGroup(groups[selectedGroup].invariantFactors)}
                </div>
                <div className="text-dark-500 text-xs mt-1">
                  Factors: {groups[selectedGroup].invariantFactors.join(' | ')} (each divides the next)
                </div>
              </div>
              <div>
                <div className="text-dark-400 text-sm mb-1">Elementary Divisor Form:</div>
                <div className="text-purple-400 font-mono">
                  {formatGroup(groups[selectedGroup].elementaryDivisors)}
                </div>
                <div className="text-dark-500 text-xs mt-1">
                  Prime powers: {groups[selectedGroup].elementaryDivisors.join(', ')}
                </div>
              </div>
            </div>

            {/* Properties */}
            <div className="mt-4 pt-4 border-t border-dark-600">
              <div className="text-dark-400 text-sm">Properties:</div>
              <ul className="text-dark-300 text-sm mt-2 space-y-1">
                <li>
                  • Cyclic: {' '}
                  <span className={groups[selectedGroup].invariantFactors.length <= 1 ? 'text-green-400' : 'text-red-400'}>
                    {groups[selectedGroup].invariantFactors.length <= 1 ? 'Yes' : 'No'}
                  </span>
                </li>
                <li>
                  • Exponent: {' '}
                  <span className="text-yellow-400">
                    {Math.max(1, ...groups[selectedGroup].invariantFactors)}
                  </span>
                </li>
                <li>
                  • Rank (number of cyclic factors): {' '}
                  <span className="text-blue-400">
                    {groups[selectedGroup].elementaryDivisors.length}
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Partition Breakdown */}
      <div className="mt-6 p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Counting via Partitions</h5>
        <div className="space-y-2">
          {Array.from(factors.entries()).map(([p, exp]) => (
            <div key={p} className="text-dark-400 text-sm">
              <span className="text-green-400">{p}^{exp}</span>: partitions of {exp} = {' '}
              {partitions(exp).map((part, idx) => (
                <span key={idx}>
                  {idx > 0 && ', '}
                  <span className="text-dark-300">({part.join('+')})</span>
                </span>
              ))}
              {' → '}<span className="text-yellow-400">{partitionCount(exp)}</span> options
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
