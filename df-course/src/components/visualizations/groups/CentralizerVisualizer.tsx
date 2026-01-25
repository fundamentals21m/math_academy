/**
 * Interactive Centralizer and Normalizer Visualizer
 * Demonstrates C_G(a), N_G(H), Z(G), and conjugacy classes
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// S4 subset for demonstration (we'll use S3 for simplicity)
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

function mult(a: string, b: string): string {
  return S3_MULT[a][b];
}

function conjugate(g: string, x: string): string {
  // gxg^{-1}
  return mult(mult(g, x), S3_INV[g]);
}

export function CentralizerVisualizer() {
  const [selectedElement, setSelectedElement] = useState('r');
  const [selectedSubset, setSelectedSubset] = useState<Set<string>>(new Set(['e', 'r', 'r²']));
  const [mode, setMode] = useState<'centralizer' | 'normalizer' | 'center' | 'conjugacy'>('centralizer');

  // Compute centralizer of selected element
  const centralizer = useMemo(() => {
    return S3_ELEMENTS.filter(g => mult(g, selectedElement) === mult(selectedElement, g));
  }, [selectedElement]);

  // Compute center of the group
  const center = useMemo(() => {
    return S3_ELEMENTS.filter(g => {
      return S3_ELEMENTS.every(h => mult(g, h) === mult(h, g));
    });
  }, []);

  // Compute normalizer of selected subset
  const normalizer = useMemo(() => {
    const H = Array.from(selectedSubset);
    return S3_ELEMENTS.filter(g => {
      // Check if gHg^{-1} = H
      const conjugatedH = new Set(H.map(h => conjugate(g, h)));
      if (conjugatedH.size !== H.length) return false;
      return H.every(h => conjugatedH.has(h));
    });
  }, [selectedSubset]);

  // Compute conjugacy class of selected element
  const conjugacyClass = useMemo(() => {
    const cls = new Set<string>();
    S3_ELEMENTS.forEach(g => {
      cls.add(conjugate(g, selectedElement));
    });
    return Array.from(cls);
  }, [selectedElement]);

  // All conjugacy classes
  const allConjugacyClasses = useMemo(() => {
    const visited = new Set<string>();
    const classes: string[][] = [];

    S3_ELEMENTS.forEach(x => {
      if (!visited.has(x)) {
        const cls = new Set<string>();
        S3_ELEMENTS.forEach(g => {
          cls.add(conjugate(g, x));
        });
        const clsArray = Array.from(cls);
        clsArray.forEach(el => visited.add(el));
        classes.push(clsArray.sort());
      }
    });

    return classes;
  }, []);

  // Toggle subset element
  const toggleSubsetElement = (el: string) => {
    setSelectedSubset(prev => {
      const newSet = new Set(prev);
      if (newSet.has(el)) {
        newSet.delete(el);
      } else {
        newSet.add(el);
      }
      return newSet;
    });
  };

  // Preset subgroups
  const subgroupPresets = [
    { name: '{e}', elements: ['e'] },
    { name: '⟨r⟩', elements: ['e', 'r', 'r²'] },
    { name: '⟨s⟩', elements: ['e', 's'] },
    { name: '⟨sr⟩', elements: ['e', 'sr'] },
    { name: 'S₃', elements: S3_ELEMENTS },
  ];

  const classColors = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899'];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Centralizers, Normalizers, and Conjugacy Classes in S₃
      </h4>

      {/* Mode selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Explore:</label>
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'centralizer', label: 'Centralizer C_G(a)' },
            { key: 'normalizer', label: 'Normalizer N_G(H)' },
            { key: 'center', label: 'Center Z(G)' },
            { key: 'conjugacy', label: 'Conjugacy Classes' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setMode(key as typeof mode)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                mode === key
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Element selector (for centralizer and conjugacy) */}
      {(mode === 'centralizer' || mode === 'conjugacy') && (
        <div className="mb-4">
          <label className="block text-sm text-dark-300 mb-2">Select Element a:</label>
          <div className="flex flex-wrap gap-2">
            {S3_ELEMENTS.map(el => (
              <button
                key={el}
                onClick={() => setSelectedElement(el)}
                className={`w-12 h-12 rounded-lg font-mono font-bold transition-all ${
                  selectedElement === el
                    ? 'bg-emerald-500/30 text-emerald-400 border-2 border-emerald-500'
                    : 'bg-dark-800 text-dark-300 border border-dark-700 hover:bg-dark-700'
                }`}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Subset selector (for normalizer) */}
      {mode === 'normalizer' && (
        <div className="mb-4">
          <label className="block text-sm text-dark-300 mb-2">Select Subset H:</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {S3_ELEMENTS.map(el => (
              <button
                key={el}
                onClick={() => toggleSubsetElement(el)}
                className={`w-12 h-12 rounded-lg font-mono font-bold transition-all ${
                  selectedSubset.has(el)
                    ? 'bg-violet-500/30 text-violet-400 border-2 border-violet-500'
                    : 'bg-dark-800 text-dark-300 border border-dark-700 hover:bg-dark-700'
                }`}
              >
                {el}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-dark-400">Presets:</span>
            {subgroupPresets.map(preset => (
              <button
                key={preset.name}
                onClick={() => setSelectedSubset(new Set(preset.elements))}
                className="px-2 py-1 bg-dark-800 text-dark-400 rounded text-xs hover:bg-dark-700"
              >
                {preset.name}
              </button>
            ))}
          </div>
          <p className="text-sm text-dark-400 mt-2">
            H = {'{'}{ Array.from(selectedSubset).join(', ') }{'}'}
          </p>
        </div>
      )}

      {/* Results */}
      <div className="space-y-4">
        {mode === 'centralizer' && (
          <motion.div
            key="centralizer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30"
          >
            <h5 className="text-sm font-semibold text-emerald-400 mb-2">
              Centralizer C_G({selectedElement}):
            </h5>
            <p className="font-mono text-dark-200 mb-2">
              C_S₃({selectedElement}) = {'{'}{ centralizer.join(', ') }{'}'}
            </p>
            <p className="text-sm text-dark-400">
              Elements that commute with {selectedElement}: ga = ag
            </p>
            <p className="text-xs text-dark-500 mt-2">
              |C_S₃({selectedElement})| = {centralizer.length}
            </p>

            {/* Show commutation */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {S3_ELEMENTS.map(g => {
                const commutes = mult(g, selectedElement) === mult(selectedElement, g);
                return (
                  <div
                    key={g}
                    className={`p-2 rounded text-xs font-mono ${
                      commutes ? 'bg-emerald-500/20 text-emerald-400' : 'bg-dark-800/50 text-dark-500'
                    }`}
                  >
                    {g}·{selectedElement} = {mult(g, selectedElement)}
                    {commutes ? ' ✓' : ''}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {mode === 'normalizer' && (
          <motion.div
            key="normalizer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-violet-500/10 rounded-lg border border-violet-500/30"
          >
            <h5 className="text-sm font-semibold text-violet-400 mb-2">
              Normalizer N_G(H):
            </h5>
            <p className="font-mono text-dark-200 mb-2">
              N_S₃(H) = {'{'}{ normalizer.join(', ') }{'}'}
            </p>
            <p className="text-sm text-dark-400">
              Elements g such that gHg⁻¹ = H
            </p>
            <p className="text-xs text-dark-500 mt-2">
              |N_S₃(H)| = {normalizer.length}
            </p>

            {/* Note if H is normal */}
            {normalizer.length === 6 && selectedSubset.size > 1 && (
              <p className="mt-2 text-amber-400 text-sm">
                ⚡ H is a normal subgroup! N_G(H) = G
              </p>
            )}
          </motion.div>
        )}

        {mode === 'center' && (
          <motion.div
            key="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/30"
          >
            <h5 className="text-sm font-semibold text-amber-400 mb-2">
              Center Z(S₃):
            </h5>
            <p className="font-mono text-dark-200 mb-2">
              Z(S₃) = {'{'}{ center.join(', ') }{'}'}
            </p>
            <p className="text-sm text-dark-400">
              Elements that commute with everything: Z(G) = {'{'}g ∈ G : gx = xg ∀x ∈ G{'}'}
            </p>
            <p className="text-xs text-dark-500 mt-2">
              |Z(S₃)| = {center.length}
            </p>
            <p className="mt-2 text-violet-400 text-sm">
              Note: Z(G) = ∩_{'{a∈G}'} C_G(a) and Z(G) is always a normal subgroup
            </p>
          </motion.div>
        )}

        {mode === 'conjugacy' && (
          <motion.div
            key="conjugacy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30 mb-4">
              <h5 className="text-sm font-semibold text-blue-400 mb-2">
                Conjugacy Class of {selectedElement}:
              </h5>
              <p className="font-mono text-dark-200 mb-2">
                cl({selectedElement}) = {'{'}{ conjugacyClass.join(', ') }{'}'}
              </p>
              <p className="text-sm text-dark-400">
                All elements gag⁻¹ for g ∈ G
              </p>
              <p className="text-xs text-dark-500 mt-2">
                |cl({selectedElement})| = {conjugacyClass.length} = |G|/|C_G({selectedElement})| = 6/{centralizer.length}
              </p>
            </div>

            <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
              <h5 className="text-sm font-semibold text-dark-200 mb-2">
                All Conjugacy Classes (Partition of S₃):
              </h5>
              <div className="flex flex-wrap gap-2">
                {allConjugacyClasses.map((cls, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 rounded-lg font-mono"
                    style={{
                      backgroundColor: classColors[idx % classColors.length] + '20',
                      borderColor: classColors[idx % classColors.length],
                      borderWidth: 2,
                      color: classColors[idx % classColors.length],
                    }}
                  >
                    {'{'}{ cls.join(', ') }{'}'}
                  </div>
                ))}
              </div>
              <p className="text-xs text-dark-400 mt-2">
                Class equation: |S₃| = Σ |cl(a)| = {allConjugacyClasses.map(c => c.length).join(' + ')} = 6
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Relationships:</strong>
          <br />• C_G(a) = {'{'}g ∈ G : ga = ag{'}'} (centralizer of element)
          <br />• N_G(H) = {'{'}g ∈ G : gHg⁻¹ = H{'}'} (normalizer of subgroup)
          <br />• Z(G) = ∩_a C_G(a) (center = elements commuting with all)
          <br />• |cl(a)| = [G : C_G(a)] (orbit-stabilizer for conjugation action)
        </p>
      </div>
    </div>
  );
}
