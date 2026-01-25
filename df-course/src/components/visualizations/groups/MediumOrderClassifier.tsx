import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function primeFactorization(n: number): [number, number][] {
  const factors: [number, number][] = [];
  let num = n;
  for (let p = 2; p * p <= num; p++) {
    let exp = 0;
    while (num % p === 0) {
      exp++;
      num /= p;
    }
    if (exp > 0) factors.push([p, exp]);
  }
  if (num > 1) factors.push([num, 1]);
  return factors;
}

function getDivisors(n: number): number[] {
  const divisors: number[] = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) divisors.push(n / i);
    }
  }
  return divisors.sort((a, b) => a - b);
}

type SylowAnalysis = {
  p: number;
  exp: number;
  sylowOrder: number;
  possibleNp: number[];
  constraints: string[];
  mustBeNormal: boolean;
};

function analyzeSylow(n: number): SylowAnalysis[] {
  const factors = primeFactorization(n);
  const analyses: SylowAnalysis[] = [];

  for (const [p, exp] of factors) {
    const sylowOrder = Math.pow(p, exp);
    const m = n / sylowOrder;
    const divisorsOfM = getDivisors(m);

    // n_p must divide m and n_p ≡ 1 (mod p)
    const possibleNp = divisorsOfM.filter(d => d % p === 1);

    const constraints: string[] = [
      `n_${p} | ${m}`,
      `n_${p} ≡ 1 (mod ${p})`,
    ];

    const mustBeNormal = possibleNp.length === 1 && possibleNp[0] === 1;

    analyses.push({
      p,
      exp,
      sylowOrder,
      possibleNp,
      constraints,
      mustBeNormal,
    });
  }

  return analyses;
}

type GroupClassification = {
  order: number;
  numGroups: number;
  groups: { name: string; isAbelian: boolean; structure: string }[];
  sylowAnalysis: SylowAnalysis[];
  notes: string;
};

function classifyOrder(n: number): GroupClassification {
  const factors = primeFactorization(n);
  const sylowAnalysis = analyzeSylow(n);

  // Special cases
  if (factors.length === 1) {
    const [p, exp] = factors[0];
    if (exp === 1) {
      return {
        order: n,
        numGroups: 1,
        groups: [{ name: `Z/${n}Z`, isAbelian: true, structure: 'cyclic' }],
        sylowAnalysis,
        notes: 'Prime order implies cyclic',
      };
    }
    if (exp === 2) {
      return {
        order: n,
        numGroups: 2,
        groups: [
          { name: `Z/${n}Z`, isAbelian: true, structure: 'cyclic' },
          { name: `Z/${p}Z × Z/${p}Z`, isAbelian: true, structure: 'elementary abelian' },
        ],
        sylowAnalysis,
        notes: 'Order p² implies abelian (both groups abelian)',
      };
    }
  }

  // pq case
  if (factors.length === 2 && factors[0][1] === 1 && factors[1][1] === 1) {
    const [p] = factors[0];
    const [q] = factors[1];
    const smaller = Math.min(p, q);
    const larger = Math.max(p, q);

    if ((larger - 1) % smaller !== 0) {
      return {
        order: n,
        numGroups: 1,
        groups: [{ name: `Z/${n}Z`, isAbelian: true, structure: 'cyclic' }],
        sylowAnalysis,
        notes: `${smaller} ∤ (${larger}-1), so only cyclic group exists`,
      };
    } else {
      return {
        order: n,
        numGroups: 2,
        groups: [
          { name: `Z/${n}Z`, isAbelian: true, structure: 'cyclic' },
          { name: `Z/${larger}Z ⋊ Z/${smaller}Z`, isAbelian: false, structure: 'non-abelian' },
        ],
        sylowAnalysis,
        notes: `${smaller} | (${larger}-1), so non-abelian semidirect product exists`,
      };
    }
  }

  // 2p case (simplified)
  if (factors.length === 2 &&
      ((factors[0][0] === 2 && factors[0][1] === 1 && factors[1][1] === 1) ||
       (factors[1][0] === 2 && factors[1][1] === 1 && factors[0][1] === 1))) {
    const p = factors[0][0] === 2 ? factors[1][0] : factors[0][0];
    return {
      order: n,
      numGroups: 2,
      groups: [
        { name: `Z/${n}Z`, isAbelian: true, structure: 'cyclic' },
        { name: `D_${n}`, isAbelian: false, structure: 'dihedral' },
      ],
      sylowAnalysis,
      notes: `Order 2p gives cyclic or dihedral`,
    };
  }

  // Generic fallback
  return {
    order: n,
    numGroups: -1,
    groups: [],
    sylowAnalysis,
    notes: 'Use Sylow theorems to analyze further',
  };
}

export function MediumOrderClassifier() {
  const [order, setOrder] = useState(21);

  const classification = useMemo(() => classifyOrder(order), [order]);
  const factors = useMemo(() => primeFactorization(order), [order]);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Group Order Classifier</h4>

      {/* Order Input */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div>
          <label className="text-dark-400 text-sm block mb-1">Group Order</label>
          <input
            type="number"
            min={1}
            max={100}
            value={order}
            onChange={(e) => setOrder(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
            className="bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 w-24"
          />
        </div>

        {/* Quick select buttons */}
        <div className="flex flex-wrap gap-2">
          {[15, 21, 30, 12, 20, 24, 36, 45].map(n => (
            <button
              key={n}
              onClick={() => setOrder(n)}
              className={`px-3 py-2 rounded text-sm ${
                order === n
                  ? 'bg-blue-600 text-white'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Prime Factorization */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <div className="text-dark-300 mb-2">
          Prime Factorization: <span className="text-blue-400 font-mono">{order}</span> = {' '}
          {factors.map(([p, exp], idx) => (
            <span key={p}>
              {idx > 0 && ' · '}
              <span className="text-green-400">{p}</span>
              {exp > 1 && <sup className="text-green-400">{exp}</sup>}
            </span>
          ))}
        </div>
      </div>

      {/* Sylow Analysis */}
      <div className="mb-6">
        <div className="text-dark-400 text-sm mb-3">Sylow Subgroup Analysis:</div>
        <div className="space-y-3">
          {classification.sylowAnalysis.map((analysis, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-700 p-4 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="text-dark-200 font-medium">
                  Sylow {analysis.p}-subgroup
                </span>
                <span className="text-dark-500 font-mono">
                  |P| = {analysis.p}^{analysis.exp} = {analysis.sylowOrder}
                </span>
                {analysis.mustBeNormal && (
                  <span className="px-2 py-1 bg-green-900/50 text-green-400 text-xs rounded">
                    MUST BE NORMAL
                  </span>
                )}
              </div>

              <div className="text-dark-400 text-sm mb-2">
                Constraints: {analysis.constraints.join(', ')}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-dark-500">n_{analysis.p} ∈ {' '}</span>
                <span className="font-mono">
                  {'{'}
                  {analysis.possibleNp.map((np, i) => (
                    <span key={i} className={np === 1 ? 'text-green-400' : 'text-yellow-400'}>
                      {i > 0 && ', '}{np}
                    </span>
                  ))}
                  {'}'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Classification Result */}
      <AnimatePresence mode="wait">
        <motion.div
          key={order}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-dark-700 p-4 rounded-lg mb-6"
        >
          <div className="text-dark-200 font-medium mb-3">
            Groups of Order {order}:
            {classification.numGroups > 0 && (
              <span className="text-yellow-400 ml-2">{classification.numGroups} group(s)</span>
            )}
          </div>

          {classification.groups.length > 0 ? (
            <div className="space-y-2 mb-4">
              {classification.groups.map((group, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2 bg-dark-800 rounded">
                  <span className={`px-2 py-1 rounded text-xs ${
                    group.isAbelian
                      ? 'bg-green-900/50 text-green-400'
                      : 'bg-purple-900/50 text-purple-400'
                  }`}>
                    {group.isAbelian ? 'Abelian' : 'Non-Abelian'}
                  </span>
                  <span className="text-dark-200 font-mono">{group.name}</span>
                  <span className="text-dark-500 text-sm">({group.structure})</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-dark-400 text-sm mb-4">
              Complex case - requires detailed Sylow analysis
            </div>
          )}

          <div className="text-dark-400 text-sm p-3 bg-dark-800 rounded">
            {classification.notes}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Quick Reference */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Classification Patterns</h5>
        <div className="text-dark-400 text-sm space-y-2">
          <div>
            <span className="text-blue-400">|G| = p (prime):</span> Only Z_p
          </div>
          <div>
            <span className="text-blue-400">|G| = p²:</span> Always abelian (Z_p² or Z_p × Z_p)
          </div>
          <div>
            <span className="text-blue-400">|G| = pq (p {'<'} q):</span>{' '}
            <span className="text-yellow-400">
              If p ∤ (q-1): only Z_pq. If p | (q-1): also Z_q ⋊ Z_p
            </span>
          </div>
          <div>
            <span className="text-blue-400">|G| = 2p:</span> Z_2p or D_2p
          </div>
        </div>
      </div>
    </div>
  );
}
