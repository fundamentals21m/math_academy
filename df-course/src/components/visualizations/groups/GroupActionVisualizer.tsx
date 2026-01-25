/**
 * Interactive Group Action Visualizer
 * Demonstrates group actions on sets, orbits, and stabilizers
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface GroupAction {
  name: string;
  group: string[];
  set: string[];
  action: (g: string, x: string) => string;
  description: string;
}

// Predefined group actions
const GROUP_ACTIONS: Record<string, GroupAction> = {
  'Z4_rotation': {
    name: 'ℤ/4ℤ on Square Vertices',
    group: ['0', '1', '2', '3'],
    set: ['A', 'B', 'C', 'D'],
    action: (g, x) => {
      const vertices = ['A', 'B', 'C', 'D'];
      const idx = vertices.indexOf(x);
      return vertices[(idx + parseInt(g)) % 4];
    },
    description: 'Rotation by 90° × n',
  },
  'S3_triangle': {
    name: 'S₃ on Triangle Vertices',
    group: ['e', 'r', 'r²', 's', 'sr', 'sr²'],
    set: ['1', '2', '3'],
    action: (g, x) => {
      const actions: Record<string, Record<string, string>> = {
        'e': { '1': '1', '2': '2', '3': '3' },
        'r': { '1': '2', '2': '3', '3': '1' },
        'r²': { '1': '3', '2': '1', '3': '2' },
        's': { '1': '1', '2': '3', '3': '2' },
        'sr': { '1': '3', '2': '2', '3': '1' },
        'sr²': { '1': '2', '2': '1', '3': '3' },
      };
      return actions[g][x];
    },
    description: 'All symmetries of a triangle',
  },
  'Z2_coloring': {
    name: 'ℤ/2ℤ on {R, B}',
    group: ['0', '1'],
    set: ['R', 'B'],
    action: (g, x) => {
      if (g === '0') return x;
      return x === 'R' ? 'B' : 'R';
    },
    description: 'Swap red and blue',
  },
  'conjugation': {
    name: 'S₃ Conjugation Action',
    group: ['e', 'r', 'r²', 's', 'sr', 'sr²'],
    set: ['e', 'r', 'r²', 's', 'sr', 'sr²'],
    action: (g, x) => {
      // Simplified conjugation for S3
      const table: Record<string, Record<string, string>> = {
        'e': { 'e': 'e', 'r': 'r', 'r²': 'r²', 's': 's', 'sr': 'sr', 'sr²': 'sr²' },
        'r': { 'e': 'e', 'r': 'r', 'r²': 'r²', 's': 'sr²', 'sr': 's', 'sr²': 'sr' },
        'r²': { 'e': 'e', 'r': 'r', 'r²': 'r²', 's': 'sr', 'sr': 'sr²', 'sr²': 's' },
        's': { 'e': 'e', 'r': 'r²', 'r²': 'r', 's': 's', 'sr': 'sr²', 'sr²': 'sr' },
        'sr': { 'e': 'e', 'r': 'r²', 'r²': 'r', 's': 'sr', 'sr': 's', 'sr²': 'sr²' },
        'sr²': { 'e': 'e', 'r': 'r²', 'r²': 'r', 's': 'sr²', 'sr': 'sr', 'sr²': 's' },
      };
      return table[g][x];
    },
    description: 'g·x = gxg⁻¹ (conjugacy classes)',
  },
};

export function GroupActionVisualizer() {
  const [selectedAction, setSelectedAction] = useState<keyof typeof GROUP_ACTIONS>('Z4_rotation');
  const [selectedG, setSelectedG] = useState('0');
  const [selectedX, setSelectedX] = useState('A');
  const [showOrbits, setShowOrbits] = useState(false);
  const [animating, setAnimating] = useState(false);

  const action = GROUP_ACTIONS[selectedAction];

  // Reset selections when action changes
  const handleActionChange = (key: string) => {
    setSelectedAction(key as keyof typeof GROUP_ACTIONS);
    const newAction = GROUP_ACTIONS[key as keyof typeof GROUP_ACTIONS];
    setSelectedG(newAction.group[0]);
    setSelectedX(newAction.set[0]);
  };

  // Compute g·x
  const result = useMemo(() => action.action(selectedG, selectedX), [action, selectedG, selectedX]);

  // Compute orbit of selected element
  const orbit = useMemo(() => {
    const orb = new Set<string>();
    action.group.forEach(g => {
      orb.add(action.action(g, selectedX));
    });
    return Array.from(orb);
  }, [action, selectedX]);

  // Compute stabilizer of selected element
  const stabilizer = useMemo(() => {
    return action.group.filter(g => action.action(g, selectedX) === selectedX);
  }, [action, selectedX]);

  // Compute all orbits
  const allOrbits = useMemo(() => {
    const visited = new Set<string>();
    const orbits: string[][] = [];

    action.set.forEach(x => {
      if (!visited.has(x)) {
        const orb: string[] = [];
        action.group.forEach(g => {
          const gx = action.action(g, x);
          if (!visited.has(gx)) {
            orb.push(gx);
            visited.add(gx);
          }
        });
        orbits.push(orb.sort());
      }
    });

    return orbits;
  }, [action]);

  // Animate action
  const runAnimation = () => {
    setAnimating(true);
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setSelectedG(action.group[idx % action.group.length]);
      if (idx >= action.group.length * 2) {
        clearInterval(interval);
        setAnimating(false);
      }
    }, 500);
  };

  // Colors for orbits
  const orbitColors = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Group Action Visualizer
      </h4>

      {/* Action selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Action:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(GROUP_ACTIONS).map(([key, a]) => (
            <button
              key={key}
              onClick={() => handleActionChange(key)}
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
        <p className="text-sm text-dark-400 mt-2">{action.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Group element selector */}
        <div>
          <label className="block text-sm text-dark-300 mb-2">
            Group Element g ∈ {action.name.split(' on ')[0]}:
          </label>
          <div className="flex flex-wrap gap-1">
            {action.group.map(g => (
              <button
                key={g}
                onClick={() => setSelectedG(g)}
                className={`px-3 py-2 rounded-lg font-mono transition-all ${
                  selectedG === g
                    ? 'bg-emerald-500/30 text-emerald-400 border-2 border-emerald-500'
                    : 'bg-dark-800 text-dark-300 border border-dark-700 hover:bg-dark-700'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Set element selector */}
        <div>
          <label className="block text-sm text-dark-300 mb-2">
            Set Element x ∈ X:
          </label>
          <div className="flex flex-wrap gap-1">
            {action.set.map((x, idx) => {
              const orbitIdx = allOrbits.findIndex(orb => orb.includes(x));
              return (
                <button
                  key={x}
                  onClick={() => setSelectedX(x)}
                  className={`px-3 py-2 rounded-lg font-mono transition-all ${
                    selectedX === x
                      ? 'bg-blue-500/30 text-blue-400 border-2 border-blue-500'
                      : 'bg-dark-800 text-dark-300 border border-dark-700 hover:bg-dark-700'
                  }`}
                  style={showOrbits ? { borderColor: orbitColors[orbitIdx % orbitColors.length] } : {}}
                >
                  {x}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={runAnimation}
          disabled={animating}
          className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-500/30 transition-colors border border-indigo-500/50 disabled:opacity-50"
        >
          {animating ? 'Running...' : 'Animate Action'}
        </button>
        <button
          onClick={() => setShowOrbits(!showOrbits)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showOrbits
              ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
          }`}
        >
          Show Orbits
        </button>
      </div>

      {/* Result display */}
      <div className="mb-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <div className="text-center font-mono text-xl">
          <span className="text-emerald-400">{selectedG}</span>
          {' · '}
          <span className="text-blue-400">{selectedX}</span>
          {' = '}
          <motion.span
            key={result}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-amber-400 font-bold"
          >
            {result}
          </motion.span>
        </div>
      </div>

      {/* Orbit and Stabilizer */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 bg-violet-500/10 rounded-lg border border-violet-500/30">
          <h5 className="text-sm font-semibold text-violet-400 mb-1">
            Orbit of {selectedX}
          </h5>
          <p className="font-mono text-dark-200">
            Orb({selectedX}) = {'{'}{ orbit.join(', ') }{'}'}
          </p>
          <p className="text-xs text-dark-400 mt-1">
            |Orb({selectedX})| = {orbit.length}
          </p>
        </div>
        <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
          <h5 className="text-sm font-semibold text-amber-400 mb-1">
            Stabilizer of {selectedX}
          </h5>
          <p className="font-mono text-dark-200">
            Stab({selectedX}) = {'{'}{ stabilizer.join(', ') }{'}'}
          </p>
          <p className="text-xs text-dark-400 mt-1">
            |Stab({selectedX})| = {stabilizer.length}
          </p>
        </div>
      </div>

      {/* All orbits */}
      {showOrbits && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4"
        >
          <h5 className="text-sm font-semibold text-dark-200 mb-2">All Orbits (Partition of X):</h5>
          <div className="flex flex-wrap gap-2">
            {allOrbits.map((orb, idx) => (
              <div
                key={idx}
                className="px-3 py-2 rounded-lg font-mono"
                style={{
                  backgroundColor: orbitColors[idx % orbitColors.length] + '20',
                  borderColor: orbitColors[idx % orbitColors.length],
                  borderWidth: 2,
                  color: orbitColors[idx % orbitColors.length],
                }}
              >
                {'{'}{ orb.join(', ') }{'}'}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Orbit-Stabilizer Theorem verification */}
      <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30 mb-4">
        <h5 className="text-sm font-semibold text-emerald-400 mb-1">Orbit-Stabilizer Theorem</h5>
        <p className="text-sm text-dark-200 font-mono">
          |G| = |Orb(x)| × |Stab(x)|
        </p>
        <p className="text-sm text-dark-300 mt-1">
          {action.group.length} = {orbit.length} × {stabilizer.length} = {orbit.length * stabilizer.length}
          {action.group.length === orbit.length * stabilizer.length ? ' ✓' : ' ✗'}
        </p>
      </div>

      {/* Key insight */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Group Action:</strong> A group G acts on a set X if there's a map G × X → X where
          e·x = x and (gh)·x = g·(h·x). The action partitions X into orbits, and the
          Orbit-Stabilizer Theorem relates |G|, |Orb(x)|, and |Stab(x)|.
        </p>
      </div>
    </div>
  );
}
