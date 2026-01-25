/**
 * Advanced Group Action Visualizer
 * Shows orbits, stabilizers, and the orbit-stabilizer theorem
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface ActionData {
  name: string;
  group: string;
  set: string[];
  action: (g: number, x: number) => number;
  groupElements: string[];
}

// D4 acting on vertices of a square
const D4_ACTION: ActionData = {
  name: 'D₄ on Square Vertices',
  group: 'D₄',
  set: ['1', '2', '3', '4'],
  groupElements: ['e', 'r', 'r²', 'r³', 's', 'sr', 'sr²', 'sr³'],
  action: (g, x) => {
    // D4 action on {0,1,2,3} (vertices labeled 0-indexed)
    const rotations = [
      [0, 1, 2, 3], // e
      [3, 0, 1, 2], // r (rotate 90°)
      [2, 3, 0, 1], // r²
      [1, 2, 3, 0], // r³
      [1, 0, 3, 2], // s (reflect across vertical)
      [0, 3, 2, 1], // sr
      [3, 2, 1, 0], // sr²
      [2, 1, 0, 3], // sr³
    ];
    return rotations[g][x];
  },
};

// S3 acting on {1,2,3}
const S3_ACTION: ActionData = {
  name: 'S₃ on {1,2,3}',
  group: 'S₃',
  set: ['1', '2', '3'],
  groupElements: ['e', '(12)', '(13)', '(23)', '(123)', '(132)'],
  action: (g, x) => {
    const perms = [
      [0, 1, 2], // e
      [1, 0, 2], // (12)
      [2, 1, 0], // (13)
      [0, 2, 1], // (23)
      [1, 2, 0], // (123)
      [2, 0, 1], // (132)
    ];
    return perms[g][x];
  },
};

// Z4 acting on Z4 by rotation
const Z4_ACTION: ActionData = {
  name: 'ℤ/4ℤ on itself (left mult)',
  group: 'ℤ/4ℤ',
  set: ['0', '1', '2', '3'],
  groupElements: ['0', '1', '2', '3'],
  action: (g, x) => (g + x) % 4,
};

const ACTIONS: Record<string, ActionData> = {
  D4: D4_ACTION,
  S3: S3_ACTION,
  Z4: Z4_ACTION,
};

export function AdvancedGroupActionVisualizer() {
  const [selectedAction, setSelectedAction] = useState<keyof typeof ACTIONS>('D4');
  const [selectedElement, setSelectedElement] = useState(0);
  const [showOrbits, setShowOrbits] = useState(true);

  const actionData = ACTIONS[selectedAction];

  // Compute orbit of selected element
  const orbit = useMemo(() => {
    const orbitSet = new Set<number>();
    for (let g = 0; g < actionData.groupElements.length; g++) {
      orbitSet.add(actionData.action(g, selectedElement));
    }
    return Array.from(orbitSet).sort((a, b) => a - b);
  }, [actionData, selectedElement]);

  // Compute stabilizer of selected element
  const stabilizer = useMemo(() => {
    const stab: number[] = [];
    for (let g = 0; g < actionData.groupElements.length; g++) {
      if (actionData.action(g, selectedElement) === selectedElement) {
        stab.push(g);
      }
    }
    return stab;
  }, [actionData, selectedElement]);

  // Compute all orbits
  const allOrbits = useMemo(() => {
    const orbits: number[][] = [];
    const visited = new Set<number>();

    for (let x = 0; x < actionData.set.length; x++) {
      if (visited.has(x)) continue;

      const orbit: number[] = [];
      for (let g = 0; g < actionData.groupElements.length; g++) {
        const y = actionData.action(g, x);
        if (!orbit.includes(y)) {
          orbit.push(y);
          visited.add(y);
        }
      }
      orbit.sort((a, b) => a - b);
      orbits.push(orbit);
    }
    return orbits;
  }, [actionData]);

  // Orbit-stabilizer verification
  const groupOrder = actionData.groupElements.length;
  const orbitSize = orbit.length;
  const stabilizerSize = stabilizer.length;
  const productCheck = orbitSize * stabilizerSize === groupOrder;

  // Colors for orbits
  const orbitColors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#a855f7'];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Group Action Visualizer
      </h4>

      {/* Action selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Action:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(ACTIONS).map(([key, a]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedAction(key as keyof typeof ACTIONS);
                setSelectedElement(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedAction === key
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {a.name}
            </button>
          ))}
        </div>
      </div>

      {/* Element selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Element x ∈ X:</label>
        <div className="flex gap-2">
          {actionData.set.map((elem, i) => {
            // Find which orbit this element is in
            const orbitIdx = allOrbits.findIndex(o => o.includes(i));
            const color = orbitColors[orbitIdx % orbitColors.length];

            return (
              <button
                key={i}
                onClick={() => setSelectedElement(i)}
                className={`w-12 h-12 rounded-lg text-lg font-bold transition-colors border-2 ${
                  selectedElement === i
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-dark-900'
                    : ''
                }`}
                style={{
                  backgroundColor: color + '30',
                  borderColor: color,
                  color: selectedElement === i ? '#fff' : color,
                }}
              >
                {elem}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action table */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50 overflow-x-auto">
        <p className="text-sm text-dark-300 mb-2">Action of {actionData.group} on x = {actionData.set[selectedElement]}:</p>
        <div className="flex gap-2 flex-wrap">
          {actionData.groupElements.map((g, gi) => {
            const result = actionData.action(gi, selectedElement);
            const isInStab = result === selectedElement;
            return (
              <div
                key={gi}
                className={`p-2 rounded border text-center ${
                  isInStab
                    ? 'bg-emerald-500/20 border-emerald-500/50'
                    : 'bg-dark-700/50 border-dark-600'
                }`}
              >
                <p className="text-xs text-dark-400">{g}·{actionData.set[selectedElement]}</p>
                <p className={`text-sm font-mono ${isInStab ? 'text-emerald-400' : 'text-dark-200'}`}>
                  {actionData.set[result]}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Orbit and Stabilizer display */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 bg-violet-500/10 rounded-lg border border-violet-500/30">
          <p className="text-sm text-violet-400 font-semibold mb-1">
            Orbit O_x (|O_x| = {orbitSize})
          </p>
          <p className="text-sm font-mono text-dark-200">
            {'{'}{ orbit.map(i => actionData.set[i]).join(', ') }{'}'}
          </p>
        </div>
        <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
          <p className="text-sm text-emerald-400 font-semibold mb-1">
            Stabilizer G_x (|G_x| = {stabilizerSize})
          </p>
          <p className="text-sm font-mono text-dark-200">
            {'{'}{ stabilizer.map(i => actionData.groupElements[i]).join(', ') }{'}'}
          </p>
        </div>
      </div>

      {/* Orbit-Stabilizer Theorem */}
      <div className={`mb-4 p-4 rounded-lg border ${
        productCheck
          ? 'bg-amber-500/10 border-amber-500/30'
          : 'bg-red-500/10 border-red-500/30'
      }`}>
        <p className="text-sm font-semibold text-amber-400 mb-2">
          Orbit-Stabilizer Theorem
        </p>
        <p className="text-lg font-mono text-center">
          <span className="text-indigo-400">|G|</span>
          <span className="text-dark-400"> = </span>
          <span className="text-violet-400">|O_x|</span>
          <span className="text-dark-400"> × </span>
          <span className="text-emerald-400">|G_x|</span>
        </p>
        <p className="text-xl font-bold text-center mt-1">
          <span className="text-indigo-400">{groupOrder}</span>
          <span className="text-dark-400"> = </span>
          <span className="text-violet-400">{orbitSize}</span>
          <span className="text-dark-400"> × </span>
          <span className="text-emerald-400">{stabilizerSize}</span>
          <span className="text-dark-400"> = </span>
          <span className={productCheck ? 'text-green-400' : 'text-red-400'}>
            {orbitSize * stabilizerSize} {productCheck ? '✓' : '✗'}
          </span>
        </p>
      </div>

      {/* All orbits visualization */}
      {showOrbits && (
        <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
          <p className="text-sm text-dark-300 mb-2">All Orbits (X partitioned):</p>
          <div className="flex gap-3 flex-wrap">
            {allOrbits.map((orb, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-2 rounded-lg"
                style={{ backgroundColor: orbitColors[i % orbitColors.length] + '20' }}
              >
                <p className="text-xs mb-1" style={{ color: orbitColors[i % orbitColors.length] }}>
                  Orbit {i + 1}
                </p>
                <p className="font-mono text-sm text-dark-200">
                  {'{'}{ orb.map(x => actionData.set[x]).join(', ') }{'}'}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-dark-400 mt-2">
            {allOrbits.length === 1 ? 'Action is transitive (single orbit)' : `${allOrbits.length} orbits`}
          </p>
        </div>
      )}

      {/* Key insight */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Facts:</strong> G acts on X means φ: G × X → X with φ(e,x)=x and φ(g,φ(h,x))=φ(gh,x).
          Orbits partition X. The stabilizer G_x is a subgroup. The orbit-stabilizer theorem says
          |G| = |O_x| × |G_x|, relating orbit size to stabilizer index.
        </p>
      </div>
    </div>
  );
}
