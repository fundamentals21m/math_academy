/**
 * Interactive Conjugacy Class and Class Equation Visualizer
 * Shows conjugacy classes and the class equation
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface GroupData {
  name: string;
  elements: string[];
  operation: (a: number, b: number) => number;
  inverse: (a: number) => number;
}

// S3 group
const S3_TABLE = [
  [0, 1, 2, 3, 4, 5],
  [1, 0, 4, 5, 2, 3],
  [2, 5, 0, 4, 3, 1],
  [3, 4, 5, 0, 1, 2],
  [4, 3, 1, 2, 5, 0],
  [5, 2, 3, 1, 0, 4],
];
const S3: GroupData = {
  name: 'S₃',
  elements: ['e', '(12)', '(13)', '(23)', '(123)', '(132)'],
  operation: (a, b) => S3_TABLE[a][b],
  inverse: (a) => [0, 1, 2, 3, 5, 4][a],
};

// D4 group
const D4_TABLE = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 0, 7, 4, 5, 6],
  [2, 3, 0, 1, 6, 7, 4, 5],
  [3, 0, 1, 2, 5, 6, 7, 4],
  [4, 5, 6, 7, 0, 1, 2, 3],
  [5, 6, 7, 4, 3, 0, 1, 2],
  [6, 7, 4, 5, 2, 3, 0, 1],
  [7, 4, 5, 6, 1, 2, 3, 0],
];
const D4: GroupData = {
  name: 'D₄',
  elements: ['e', 'r', 'r²', 'r³', 's', 'sr', 'sr²', 'sr³'],
  operation: (a, b) => D4_TABLE[a][b],
  inverse: (a) => [0, 3, 2, 1, 4, 5, 6, 7][a],
};

// Q8 quaternion group
const Q8_TABLE = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 0, 5, 6, 7, 4],
  [2, 3, 0, 1, 6, 7, 4, 5],
  [3, 0, 1, 2, 7, 4, 5, 6],
  [4, 7, 6, 5, 2, 1, 0, 3],
  [5, 4, 7, 6, 3, 2, 1, 0],
  [6, 5, 4, 7, 0, 3, 2, 1],
  [7, 6, 5, 4, 1, 0, 3, 2],
];
const Q8: GroupData = {
  name: 'Q₈',
  elements: ['1', 'i', '-1', '-i', 'j', 'k', '-j', '-k'],
  operation: (a, b) => Q8_TABLE[a][b],
  inverse: (a) => [0, 3, 2, 1, 6, 7, 4, 5][a],
};

const GROUPS: Record<string, GroupData> = { S3, D4, Q8 };

export function ConjugacyClassVisualizer() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof GROUPS>('S3');
  const [selectedElement, setSelectedElement] = useState(0);

  const group = GROUPS[selectedGroup];
  const n = group.elements.length;

  // Compute conjugate g⁻¹xg
  const conjugate = (x: number, g: number): number => {
    return group.operation(group.operation(group.inverse(g), x), g);
  };

  // Compute conjugacy class of selected element
  const conjugacyClass = useMemo(() => {
    const classSet = new Set<number>();
    for (let g = 0; g < n; g++) {
      classSet.add(conjugate(selectedElement, g));
    }
    return Array.from(classSet).sort((a, b) => a - b);
  }, [selectedElement, n, group]);

  // Compute all conjugacy classes
  const allClasses = useMemo(() => {
    const classes: number[][] = [];
    const visited = new Set<number>();

    for (let x = 0; x < n; x++) {
      if (visited.has(x)) continue;

      const classSet = new Set<number>();
      for (let g = 0; g < n; g++) {
        classSet.add(conjugate(x, g));
      }
      const classArray = Array.from(classSet).sort((a, b) => a - b);
      classArray.forEach(elem => visited.add(elem));
      classes.push(classArray);
    }
    return classes;
  }, [n, group]);

  // Compute centralizer of selected element
  const centralizer = useMemo(() => {
    const cent: number[] = [];
    for (let g = 0; g < n; g++) {
      // g is in C_G(x) iff gx = xg iff g⁻¹xg = x
      if (conjugate(selectedElement, g) === selectedElement) {
        cent.push(g);
      }
    }
    return cent;
  }, [selectedElement, n, group]);

  // Center of the group
  const center = useMemo(() => {
    const z: number[] = [];
    for (let x = 0; x < n; x++) {
      let inCenter = true;
      for (let g = 0; g < n && inCenter; g++) {
        if (conjugate(x, g) !== x) inCenter = false;
      }
      if (inCenter) z.push(x);
    }
    return z;
  }, [n, group]);

  // Class equation verification
  const classEquation = allClasses.map(c => c.length).join(' + ');
  const classSum = allClasses.reduce((sum, c) => sum + c.length, 0);

  // Colors for conjugacy classes
  const classColors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#a855f7', '#ec4899', '#14b8a6'];

  // Find which class the selected element is in
  const selectedClassIdx = allClasses.findIndex(c => c.includes(selectedElement));

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Conjugacy Classes & Class Equation
      </h4>

      {/* Group selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Group:</label>
        <div className="flex gap-2">
          {Object.entries(GROUPS).map(([key, g]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedGroup(key as keyof typeof GROUPS);
                setSelectedElement(0);
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

      {/* Element selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select element x:</label>
        <div className="flex gap-2 flex-wrap">
          {group.elements.map((elem, i) => {
            const classIdx = allClasses.findIndex(c => c.includes(i));
            const color = classColors[classIdx % classColors.length];
            return (
              <button
                key={i}
                onClick={() => setSelectedElement(i)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border-2 ${
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

      {/* Conjugacy class display */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div
          className="p-3 rounded-lg border"
          style={{
            backgroundColor: classColors[selectedClassIdx % classColors.length] + '10',
            borderColor: classColors[selectedClassIdx % classColors.length] + '50',
          }}
        >
          <p className="text-sm font-semibold mb-1" style={{ color: classColors[selectedClassIdx % classColors.length] }}>
            Conjugacy Class of {group.elements[selectedElement]}
          </p>
          <p className="text-sm font-mono text-dark-200">
            Cl({group.elements[selectedElement]}) = {'{'}{ conjugacyClass.map(i => group.elements[i]).join(', ') }{'}'}
          </p>
          <p className="text-xs text-dark-400 mt-1">
            |Cl(x)| = {conjugacyClass.length}
          </p>
        </div>

        <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
          <p className="text-sm text-emerald-400 font-semibold mb-1">
            Centralizer C_G({group.elements[selectedElement]})
          </p>
          <p className="text-sm font-mono text-dark-200">
            {'{'}{ centralizer.map(i => group.elements[i]).join(', ') }{'}'}
          </p>
          <p className="text-xs text-dark-400 mt-1">
            |C_G(x)| = {centralizer.length}
          </p>
        </div>
      </div>

      {/* Orbit-stabilizer check */}
      <div className="mb-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-sm text-amber-400 font-semibold mb-1">
          |G| = |Cl(x)| × |C_G(x)| (Orbit-Stabilizer)
        </p>
        <p className="text-lg font-mono text-center">
          <span className="text-indigo-400">{n}</span>
          <span className="text-dark-400"> = </span>
          <span style={{ color: classColors[selectedClassIdx % classColors.length] }}>{conjugacyClass.length}</span>
          <span className="text-dark-400"> × </span>
          <span className="text-emerald-400">{centralizer.length}</span>
          <span className="text-dark-400"> = </span>
          <span className="text-green-400">{conjugacyClass.length * centralizer.length} ✓</span>
        </p>
      </div>

      {/* All conjugacy classes */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-300 mb-2">All Conjugacy Classes:</p>
        <div className="flex gap-2 flex-wrap">
          {allClasses.map((cls, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-2 rounded-lg"
              style={{ backgroundColor: classColors[i % classColors.length] + '20' }}
            >
              <p className="text-xs" style={{ color: classColors[i % classColors.length] }}>
                Size {cls.length}
              </p>
              <p className="font-mono text-xs text-dark-200">
                {'{'}{ cls.map(x => group.elements[x]).join(', ') }{'}'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Class equation */}
      <div className="mb-4 p-4 bg-violet-500/10 rounded-lg border border-violet-500/30">
        <p className="text-sm text-violet-400 font-semibold mb-2">Class Equation</p>
        <p className="text-lg font-mono text-center text-dark-200">
          |G| = |Z(G)| + Σ [G : C_G(x_i)]
        </p>
        <p className="text-center mt-2">
          <span className="text-indigo-400 font-bold">{n}</span>
          <span className="text-dark-400"> = </span>
          <span className="text-dark-200">{classEquation}</span>
          <span className="text-dark-400"> = </span>
          <span className="text-green-400 font-bold">{classSum}</span>
        </p>
      </div>

      {/* Center */}
      <div className="mb-4 p-3 bg-pink-500/10 rounded-lg border border-pink-500/30">
        <p className="text-sm text-pink-400 font-semibold mb-1">
          Center Z(G)
        </p>
        <p className="text-sm font-mono text-dark-200">
          Z(G) = {'{'}{ center.map(i => group.elements[i]).join(', ') }{'}'}
        </p>
        <p className="text-xs text-dark-400 mt-1">
          |Z(G)| = {center.length} (elements with singleton conjugacy classes)
        </p>
      </div>

      {/* Key insight */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Insight:</strong> Two elements are conjugate iff they have the same "structure"
          (same cycle type in S_n). The class equation |G| = |Z(G)| + Σ|Cl(x_i)| where x_i are
          non-central class representatives, is key for proving results about p-groups.
        </p>
      </div>
    </div>
  );
}
