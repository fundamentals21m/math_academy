/**
 * Interactive Generated Subgroup Visualizer
 * Shows how to build subgroups from generators
 */
import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Z12 for additive group example
const Z12_ELEMENTS = Array.from({ length: 12 }, (_, i) => i.toString());

// S3 for non-abelian example
const S3_ELEMENTS = ['e', 'r', 'r²', 's', 'sr', 'sr²'];
const S3_MULT: Record<string, Record<string, string>> = {
  'e': { 'e': 'e', 'r': 'r', 'r²': 'r²', 's': 's', 'sr': 'sr', 'sr²': 'sr²' },
  'r': { 'e': 'r', 'r': 'r²', 'r²': 'e', 's': 'sr²', 'sr': 's', 'sr²': 'sr' },
  'r²': { 'e': 'r²', 'r': 'e', 'r²': 'r', 's': 'sr', 'sr': 'sr²', 'sr²': 's' },
  's': { 'e': 's', 'r': 'sr', 'r²': 'sr²', 's': 'e', 'sr': 'r', 'sr²': 'r²' },
  'sr': { 'e': 'sr', 'r': 'sr²', 'r²': 's', 's': 'r²', 'sr': 'e', 'sr²': 'r' },
  'sr²': { 'e': 'sr²', 'r': 's', 'r²': 'sr', 's': 'r', 'sr': 'r²', 'sr²': 'e' },
};
const S3_INV: Record<string, string> = {
  'e': 'e', 'r': 'r²', 'r²': 'r', 's': 's', 'sr': 'sr', 'sr²': 'sr²'
};

type GroupType = 'Z12' | 'S3';

export function GeneratorVisualizer() {
  const [groupType, setGroupType] = useState<GroupType>('Z12');
  const [generators, setGenerators] = useState<Set<string>>(new Set(['3']));
  const [showBuildSteps, setShowBuildSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const elements = groupType === 'Z12' ? Z12_ELEMENTS : S3_ELEMENTS;
  const identity = groupType === 'Z12' ? '0' : 'e';

  // Group operations
  const operate = useCallback((a: string, b: string): string => {
    if (groupType === 'Z12') {
      return String((parseInt(a) + parseInt(b)) % 12);
    }
    return S3_MULT[a][b];
  }, [groupType]);

  const inverse = useCallback((a: string): string => {
    if (groupType === 'Z12') {
      return String((12 - parseInt(a)) % 12);
    }
    return S3_INV[a];
  }, [groupType]);

  // Build generated subgroup step by step
  const buildSteps = useMemo(() => {
    const steps: { description: string; elements: Set<string>; newElement?: string }[] = [];
    const H = new Set<string>();

    // Step 1: Start with identity
    H.add(identity);
    steps.push({
      description: 'Start with identity element',
      elements: new Set(H),
      newElement: identity,
    });

    // Step 2: Add generators and their inverses
    generators.forEach(g => {
      if (!H.has(g)) {
        H.add(g);
        steps.push({
          description: `Add generator ${g}`,
          elements: new Set(H),
          newElement: g,
        });
      }
      const gInv = inverse(g);
      if (!H.has(gInv)) {
        H.add(gInv);
        steps.push({
          description: `Add ${g}⁻¹ = ${gInv}`,
          elements: new Set(H),
          newElement: gInv,
        });
      }
    });

    // Step 3+: Close under operation
    let changed = true;
    let iterCount = 0;
    while (changed && iterCount < 20) {
      changed = false;
      iterCount++;
      const currentElements = Array.from(H);
      for (const a of currentElements) {
        for (const b of currentElements) {
          const ab = operate(a, b);
          if (!H.has(ab)) {
            H.add(ab);
            steps.push({
              description: `${a} * ${b} = ${ab}`,
              elements: new Set(H),
              newElement: ab,
            });
            changed = true;
          }
        }
      }
    }

    steps.push({
      description: 'Closure complete!',
      elements: new Set(H),
    });

    return steps;
  }, [generators, identity, operate, inverse]);

  const generatedSubgroup = buildSteps[buildSteps.length - 1].elements;
  const visibleElements = showBuildSteps
    ? buildSteps[Math.min(currentStep, buildSteps.length - 1)].elements
    : generatedSubgroup;

  // Toggle generator
  const toggleGenerator = (el: string) => {
    if (el === identity) return; // Can't select identity as generator
    setGenerators(prev => {
      const newSet = new Set(prev);
      if (newSet.has(el)) {
        newSet.delete(el);
      } else {
        newSet.add(el);
      }
      return newSet;
    });
    setCurrentStep(0);
  };

  // Animation control
  const runAnimation = () => {
    setShowBuildSteps(true);
    setCurrentStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentStep(step);
      if (step >= buildSteps.length - 1) {
        clearInterval(interval);
      }
    }, 700);
  };

  // Check if generated subgroup equals whole group
  const generatesWholeGroup = generatedSubgroup.size === elements.length;

  // Order calculations for Z12
  const elementOrders = useMemo(() => {
    if (groupType !== 'Z12') return {};
    const orders: Record<string, number> = {};
    elements.forEach(el => {
      const n = parseInt(el);
      if (n === 0) {
        orders[el] = 1;
      } else {
        orders[el] = 12 / gcd(n, 12);
      }
    });
    return orders;
  }, [groupType, elements]);

  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Generated Subgroup Builder
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group:</label>
        <div className="flex gap-2">
          <button
            onClick={() => { setGroupType('Z12'); setGenerators(new Set(['3'])); setCurrentStep(0); }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              groupType === 'Z12'
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
            }`}
          >
            ℤ/12ℤ (additive)
          </button>
          <button
            onClick={() => { setGroupType('S3'); setGenerators(new Set(['r'])); setCurrentStep(0); }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              groupType === 'S3'
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
            }`}
          >
            S₃ (symmetric)
          </button>
        </div>
      </div>

      {/* Generator selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">
          Select Generators (click to toggle):
        </label>
        <div className="flex flex-wrap gap-2">
          {elements.map(el => {
            const isGenerator = generators.has(el);
            const isIdentity = el === identity;
            const isInSubgroup = visibleElements.has(el);
            const order = groupType === 'Z12' ? elementOrders[el] : null;

            return (
              <button
                key={el}
                onClick={() => toggleGenerator(el)}
                disabled={isIdentity}
                className={`w-12 h-12 rounded-lg font-mono font-bold transition-all relative ${
                  isGenerator
                    ? 'bg-amber-500/40 text-amber-400 border-2 border-amber-500 scale-110'
                    : isInSubgroup
                      ? 'bg-emerald-500/30 text-emerald-400 border-2 border-emerald-500'
                      : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
                } ${isIdentity ? 'cursor-not-allowed' : ''}`}
              >
                {el}
                {order && (
                  <span className="absolute -top-1 -right-1 text-xs bg-dark-700 px-1 rounded">
                    {order}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-dark-400 mt-2">
          Generators: {'{'}{Array.from(generators).join(', ') || '∅'}{'}'}
          {groupType === 'Z12' && <span className="text-dark-500 ml-2">(numbers show element order)</span>}
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={runAnimation}
          className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-500/30 transition-colors border border-indigo-500/50"
        >
          Build Step-by-Step
        </button>
        <button
          onClick={() => { setShowBuildSteps(false); setCurrentStep(buildSteps.length - 1); }}
          className="px-4 py-2 bg-dark-800 text-dark-400 rounded-lg text-sm hover:bg-dark-700 border border-dark-700"
        >
          Show Result
        </button>
        <button
          onClick={() => setGenerators(new Set())}
          className="px-4 py-2 bg-dark-800 text-dark-400 rounded-lg text-sm hover:bg-dark-700 border border-dark-700"
        >
          Clear
        </button>
      </div>

      {/* Build steps */}
      {showBuildSteps && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50 max-h-48 overflow-y-auto"
          >
            {buildSteps.slice(0, currentStep + 1).map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`py-1 text-sm font-mono ${
                  idx === currentStep ? 'text-amber-400' : 'text-dark-400'
                }`}
              >
                {idx + 1}. {step.description}
                {step.newElement && (
                  <span className="text-emerald-400 ml-2">
                    → H = {'{'}{ Array.from(step.elements).join(', ') }{'}'}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Result */}
      <div className={`p-4 rounded-lg border ${
        generatesWholeGroup
          ? 'bg-amber-500/10 border-amber-500/30'
          : 'bg-emerald-500/10 border-emerald-500/30'
      }`}>
        <h5 className={`text-sm font-semibold mb-2 ${
          generatesWholeGroup ? 'text-amber-400' : 'text-emerald-400'
        }`}>
          Generated Subgroup ⟨{Array.from(generators).join(', ') || '∅'}⟩:
        </h5>
        <p className="font-mono text-dark-200">
          {'{'}{ Array.from(generatedSubgroup).sort((a, b) => {
            if (groupType === 'Z12') return parseInt(a) - parseInt(b);
            return elements.indexOf(a) - elements.indexOf(b);
          }).join(', ') }{'}'}
        </p>
        <p className="text-sm text-dark-400 mt-2">
          |⟨{Array.from(generators).join(', ') || '∅'}⟩| = {generatedSubgroup.size}
          {generatesWholeGroup && (
            <span className="ml-2 text-amber-400">
              = |G| (generators produce the whole group!)
            </span>
          )}
        </p>
      </div>

      {/* Quick presets */}
      {groupType === 'Z12' && (
        <div className="mt-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
          <h5 className="text-sm font-semibold text-dark-200 mb-2">Try These:</h5>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '⟨1⟩ = ℤ₁₂', gens: ['1'] },
              { label: '⟨2⟩', gens: ['2'] },
              { label: '⟨3⟩', gens: ['3'] },
              { label: '⟨4⟩', gens: ['4'] },
              { label: '⟨6⟩', gens: ['6'] },
              { label: '⟨2,3⟩', gens: ['2', '3'] },
            ].map(preset => (
              <button
                key={preset.label}
                onClick={() => { setGenerators(new Set(preset.gens)); setCurrentStep(0); setShowBuildSteps(false); }}
                className="px-2 py-1 bg-dark-700 text-dark-300 rounded text-xs hover:bg-dark-600"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {groupType === 'S3' && (
        <div className="mt-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
          <h5 className="text-sm font-semibold text-dark-200 mb-2">Try These:</h5>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '⟨r⟩', gens: ['r'] },
              { label: '⟨s⟩', gens: ['s'] },
              { label: '⟨r,s⟩ = S₃', gens: ['r', 's'] },
              { label: '⟨sr⟩', gens: ['sr'] },
            ].map(preset => (
              <button
                key={preset.label}
                onClick={() => { setGenerators(new Set(preset.gens)); setCurrentStep(0); setShowBuildSteps(false); }}
                className="px-2 py-1 bg-dark-700 text-dark-300 rounded text-xs hover:bg-dark-600"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Generated Subgroup:</strong> ⟨S⟩ is the smallest subgroup containing all elements of S.
          It consists of all products of elements of S and their inverses. In ℤ/nℤ, ⟨k⟩ has order n/gcd(k,n).
          A group G is cyclic if G = ⟨g⟩ for some single element g.
        </p>
      </div>
    </div>
  );
}
