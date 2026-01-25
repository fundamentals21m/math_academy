/**
 * Interactive Cyclic Group Visualizer
 * Shows cyclic group structure, generators, and subgroups
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function CyclicGroupVisualizer() {
  const [n, setN] = useState(12);
  const [selectedElement, setSelectedElement] = useState(1);
  const [showSubgroups, setShowSubgroups] = useState(false);

  // Calculate element order
  const elementOrder = useMemo(() => {
    return n / gcd(selectedElement, n);
  }, [selectedElement, n]);

  // Generate subgroup from selected element
  const generatedSubgroup = useMemo(() => {
    const subgroup: number[] = [];
    let current = 0;
    do {
      subgroup.push(current);
      current = (current + selectedElement) % n;
    } while (current !== 0);
    return subgroup.sort((a, b) => a - b);
  }, [selectedElement, n]);

  // Check if element is a generator
  const isGenerator = elementOrder === n;

  // Get all divisors of n (subgroup orders)
  const divisors = useMemo(() => {
    const divs: number[] = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) divs.push(i);
    }
    return divs;
  }, [n]);

  // Get all generators (elements coprime to n)
  const generators = useMemo(() => {
    const gens: number[] = [];
    for (let i = 1; i < n; i++) {
      if (gcd(i, n) === 1) gens.push(i);
    }
    return gens;
  }, [n]);

  // SVG dimensions
  const cx = 150;
  const cy = 150;
  const radius = 120;

  // Get position on circle
  const getPosition = (value: number) => {
    const angle = (value / n) * 2 * Math.PI - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  };

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Cyclic Group ℤ/nℤ Visualizer
      </h4>

      {/* N selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">
          Order n = <span className="text-indigo-400 font-mono">{n}</span>
        </label>
        <input
          type="range"
          min={2}
          max={24}
          value={n}
          onChange={(e) => {
            const newN = Number(e.target.value);
            setN(newN);
            setSelectedElement(1);
          }}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
      </div>

      {/* Element selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">
          Element: <span className="text-emerald-400 font-mono">{selectedElement}</span>
        </label>
        <input
          type="range"
          min={1}
          max={n - 1}
          value={selectedElement}
          onChange={(e) => setSelectedElement(Number(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowSubgroups(!showSubgroups)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showSubgroups
              ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
          }`}
        >
          Show Subgroup Structure
        </button>
      </div>

      {/* Info display */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={`p-3 rounded-lg border ${
          isGenerator
            ? 'bg-amber-500/10 border-amber-500/30'
            : 'bg-dark-800/50 border-dark-700/50'
        }`}>
          <p className="text-sm text-dark-300">
            Order of <span className="text-emerald-400">{selectedElement}</span>:
          </p>
          <p className="text-2xl font-bold text-amber-400">
            {elementOrder}
          </p>
          {isGenerator && (
            <p className="text-xs text-amber-400 mt-1">
              ★ Generator of ℤ/{n}ℤ!
            </p>
          )}
        </div>

        <div className="p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
          <p className="text-sm text-dark-300">
            ⟨{selectedElement}⟩ has {generatedSubgroup.length} elements:
          </p>
          <p className="text-sm font-mono text-violet-400 mt-1">
            {'{'}{ generatedSubgroup.join(', ') }{'}'}
          </p>
        </div>
      </div>

      {/* Circle visualization */}
      <svg viewBox="0 0 300 300" className="w-full bg-dark-950 rounded-lg" style={{ maxHeight: '300px' }}>
        {/* Circle */}
        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#374151" strokeWidth={2} />

        {/* Subgroup connections */}
        {generatedSubgroup.length > 1 && (
          <motion.path
            d={generatedSubgroup.map((m, i) => {
              const pos = getPosition(m);
              return `${i === 0 ? 'M' : 'L'} ${pos.x} ${pos.y}`;
            }).join(' ') + ' Z'}
            fill="rgba(139, 92, 246, 0.1)"
            stroke="#8b5cf6"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Elements on circle */}
        {Array.from({ length: n }, (_, i) => {
          const pos = getPosition(i);
          const isInSubgroup = generatedSubgroup.includes(i);
          const isSelected = i === selectedElement;
          const elemIsGenerator = gcd(i, n) === 1 && i > 0;

          return (
            <g key={i}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={14}
                fill={isSelected ? '#10b981' : isInSubgroup ? '#8b5cf640' : '#1f2937'}
                stroke={isSelected ? '#6ee7b7' : isInSubgroup ? '#8b5cf6' : elemIsGenerator ? '#fbbf24' : '#4b5563'}
                strokeWidth={isSelected || isInSubgroup ? 3 : 1}
                className="cursor-pointer"
                onClick={() => i > 0 && setSelectedElement(i)}
              />
              <text
                x={pos.x}
                y={pos.y + 5}
                textAnchor="middle"
                fill={isSelected ? '#fff' : isInSubgroup ? '#c4b5fd' : '#9ca3af'}
                fontSize={11}
                fontWeight={isSelected ? 'bold' : 'normal'}
                className="pointer-events-none"
              >
                {i}
              </text>
            </g>
          );
        })}

        {/* Center label */}
        <text x={cx} y={cy + 5} textAnchor="middle" fill="#6b7280" fontSize={14}>
          ℤ/{n}ℤ
        </text>
      </svg>

      {/* Subgroups list */}
      {showSubgroups && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 p-4 bg-violet-500/10 rounded-lg border border-violet-500/30"
        >
          <h5 className="text-sm font-semibold text-violet-400 mb-2">
            Subgroups of ℤ/{n}ℤ (one for each divisor):
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {divisors.map(d => {
              const generator = n / d;
              const subgroup: number[] = [];
              for (let i = 0; i < d; i++) {
                subgroup.push((i * generator) % n);
              }
              subgroup.sort((a, b) => a - b);
              return (
                <div
                  key={d}
                  className="p-2 bg-dark-800/50 rounded border border-dark-700/50 cursor-pointer hover:bg-dark-700/50"
                  onClick={() => setSelectedElement(generator)}
                >
                  <p className="text-xs text-dark-400">Order {d}:</p>
                  <p className="text-xs font-mono text-violet-400">
                    ⟨{generator}⟩ = {'{'}{ subgroup.join(', ') }{'}'}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Generators info */}
      <div className="mt-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-sm text-amber-400">
          <strong>Generators:</strong> Elements coprime to {n} (order = {n})
        </p>
        <p className="text-sm font-mono text-dark-300 mt-1">
          {'{'}{ generators.join(', ') }{'}'} <span className="text-dark-500">(φ({n}) = {generators.length} generators)</span>
        </p>
      </div>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Facts:</strong> ℤ/nℤ has exactly one subgroup of each order d dividing n,
          generated by n/d. Element k has order n/gcd(k,n). k generates ℤ/nℤ iff gcd(k,n)=1.
        </p>
      </div>
    </div>
  );
}
