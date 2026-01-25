import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Letter = { symbol: string; inverse: boolean };

function parseWord(input: string): Letter[] {
  const letters: Letter[] = [];
  let i = 0;
  while (i < input.length) {
    const char = input[i].toLowerCase();
    if (char >= 'a' && char <= 'z') {
      const isInverse = i + 1 < input.length && input[i + 1] === "'";
      letters.push({ symbol: char, inverse: isInverse });
      i += isInverse ? 2 : 1;
    } else {
      i++;
    }
  }
  return letters;
}

function wordToString(word: Letter[]): string {
  if (word.length === 0) return '1';
  return word.map(l => l.symbol + (l.inverse ? "'" : '')).join('');
}

function reduceWord(word: Letter[]): Letter[] {
  let reduced = [...word];
  let changed = true;

  while (changed) {
    changed = false;
    for (let i = 0; i < reduced.length - 1; i++) {
      if (reduced[i].symbol === reduced[i + 1].symbol &&
          reduced[i].inverse !== reduced[i + 1].inverse) {
        reduced.splice(i, 2);
        changed = true;
        break;
      }
    }
  }

  return reduced;
}

function multiplyWords(w1: Letter[], w2: Letter[]): { concatenated: Letter[]; reduced: Letter[]; steps: string[] } {
  const concatenated = [...w1, ...w2];
  const steps: string[] = [];

  steps.push(`Concatenate: ${wordToString(w1)} · ${wordToString(w2)} = ${wordToString(concatenated)}`);

  let current = [...concatenated];
  let reduced = [...concatenated];
  let changed = true;

  while (changed) {
    changed = false;
    for (let i = 0; i < reduced.length - 1; i++) {
      if (reduced[i].symbol === reduced[i + 1].symbol &&
          reduced[i].inverse !== reduced[i + 1].inverse) {
        const cancelled = `${reduced[i].symbol}${reduced[i].inverse ? "'" : ''}${reduced[i + 1].symbol}${reduced[i + 1].inverse ? "'" : ''}`;
        reduced.splice(i, 2);
        steps.push(`Cancel ${cancelled}: ${wordToString(reduced) || '1'}`);
        changed = true;
        break;
      }
    }
  }

  return { concatenated, reduced, steps };
}

function computeInverse(word: Letter[]): Letter[] {
  return word.map(l => ({ symbol: l.symbol, inverse: !l.inverse })).reverse();
}

export function FreeGroupVisualizer() {
  const [generators, setGenerators] = useState('a,b');
  const [word1, setWord1] = useState("ab'a");
  const [word2, setWord2] = useState("a'ba");
  const [activeTab, setActiveTab] = useState<'reduce' | 'multiply' | 'inverse'>('multiply');

  const genSet = useMemo(() =>
    generators.split(',').map(g => g.trim()).filter(g => g.length === 1),
    [generators]
  );

  const parsed1 = useMemo(() => parseWord(word1), [word1]);
  const parsed2 = useMemo(() => parseWord(word2), [word2]);
  const reduced1 = useMemo(() => reduceWord(parsed1), [parsed1]);
  const reduced2 = useMemo(() => reduceWord(parsed2), [parsed2]);

  const multiplication = useMemo(() =>
    multiplyWords(reduced1, reduced2),
    [reduced1, reduced2]
  );

  const inverse1 = useMemo(() => computeInverse(reduced1), [reduced1]);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Free Group Explorer</h4>

      {/* Generator Input */}
      <div className="mb-6">
        <label className="text-dark-400 text-sm block mb-1">
          Generators (comma-separated)
        </label>
        <input
          type="text"
          value={generators}
          onChange={(e) => setGenerators(e.target.value)}
          className="bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 w-48"
          placeholder="a,b"
        />
        <div className="text-dark-500 text-xs mt-1">
          Free group F({genSet.join(', ')}) on {genSet.length} generator{genSet.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Word Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-dark-400 text-sm block mb-1">
            Word 1 (use ' for inverse)
          </label>
          <input
            type="text"
            value={word1}
            onChange={(e) => setWord1(e.target.value)}
            className="bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 w-full font-mono"
            placeholder="ab'a"
          />
          <div className="text-blue-400 font-mono text-sm mt-1">
            Parsed: {wordToString(parsed1)}
            {wordToString(parsed1) !== wordToString(reduced1) && (
              <span className="text-green-400"> → {wordToString(reduced1)}</span>
            )}
          </div>
        </div>
        <div>
          <label className="text-dark-400 text-sm block mb-1">
            Word 2
          </label>
          <input
            type="text"
            value={word2}
            onChange={(e) => setWord2(e.target.value)}
            className="bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 w-full font-mono"
            placeholder="a'ba"
          />
          <div className="text-purple-400 font-mono text-sm mt-1">
            Parsed: {wordToString(parsed2)}
            {wordToString(parsed2) !== wordToString(reduced2) && (
              <span className="text-green-400"> → {wordToString(reduced2)}</span>
            )}
          </div>
        </div>
      </div>

      {/* Tab Selection */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('multiply')}
          className={`px-4 py-2 rounded ${
            activeTab === 'multiply' ? 'bg-blue-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Multiply
        </button>
        <button
          onClick={() => setActiveTab('reduce')}
          className={`px-4 py-2 rounded ${
            activeTab === 'reduce' ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Reduce
        </button>
        <button
          onClick={() => setActiveTab('inverse')}
          className={`px-4 py-2 rounded ${
            activeTab === 'inverse' ? 'bg-purple-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Inverse
        </button>
      </div>

      {/* Operation Display */}
      <AnimatePresence mode="wait">
        {activeTab === 'multiply' && (
          <motion.div
            key="multiply"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-dark-700 p-4 rounded-lg"
          >
            <div className="text-dark-200 font-medium mb-3">
              Multiplication in F({genSet.join(', ')})
            </div>

            <div className="text-center font-mono text-lg mb-4">
              <span className="text-blue-400">{wordToString(reduced1)}</span>
              <span className="text-dark-500 mx-2">·</span>
              <span className="text-purple-400">{wordToString(reduced2)}</span>
              <span className="text-dark-500 mx-2">=</span>
              <span className="text-green-400">{wordToString(multiplication.reduced)}</span>
            </div>

            <div className="bg-dark-800 p-3 rounded text-sm space-y-1">
              {multiplication.steps.map((step, idx) => (
                <div key={idx} className="text-dark-300 font-mono">
                  {idx + 1}. {step}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'reduce' && (
          <motion.div
            key="reduce"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-dark-700 p-4 rounded-lg"
          >
            <div className="text-dark-200 font-medium mb-3">
              Word Reduction
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-dark-800 rounded">
                <div className="text-dark-400 text-sm mb-1">Word 1:</div>
                <div className="font-mono">
                  <span className="text-dark-500">{wordToString(parsed1)}</span>
                  <span className="text-dark-600 mx-2">→</span>
                  <span className={wordToString(parsed1) === wordToString(reduced1)
                    ? 'text-green-400'
                    : 'text-yellow-400'
                  }>
                    {wordToString(reduced1)}
                  </span>
                  {wordToString(parsed1) === wordToString(reduced1) && (
                    <span className="text-green-400 text-sm ml-2">(already reduced)</span>
                  )}
                </div>
              </div>

              <div className="p-3 bg-dark-800 rounded">
                <div className="text-dark-400 text-sm mb-1">Word 2:</div>
                <div className="font-mono">
                  <span className="text-dark-500">{wordToString(parsed2)}</span>
                  <span className="text-dark-600 mx-2">→</span>
                  <span className={wordToString(parsed2) === wordToString(reduced2)
                    ? 'text-green-400'
                    : 'text-yellow-400'
                  }>
                    {wordToString(reduced2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-dark-400 text-sm">
              A word is <span className="text-green-400">reduced</span> if it contains no subword
              of the form <span className="font-mono">xx'</span> or <span className="font-mono">x'x</span>.
            </div>
          </motion.div>
        )}

        {activeTab === 'inverse' && (
          <motion.div
            key="inverse"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-dark-700 p-4 rounded-lg"
          >
            <div className="text-dark-200 font-medium mb-3">
              Computing Inverses
            </div>

            <div className="p-3 bg-dark-800 rounded mb-4">
              <div className="text-dark-400 text-sm mb-2">
                Inverse of <span className="text-blue-400 font-mono">{wordToString(reduced1)}</span>:
              </div>
              <div className="font-mono text-lg">
                <span className="text-blue-400">({wordToString(reduced1)})</span>
                <sup className="text-dark-500">-1</sup>
                <span className="text-dark-500 mx-2">=</span>
                <span className="text-purple-400">{wordToString(inverse1)}</span>
              </div>
            </div>

            <div className="text-dark-400 text-sm mb-3">
              Formula: reverse the word and flip each exponent
            </div>

            <div className="p-3 bg-dark-800 rounded">
              <div className="text-dark-400 text-sm mb-2">Verification:</div>
              <div className="font-mono">
                <span className="text-blue-400">{wordToString(reduced1)}</span>
                <span className="text-dark-500"> · </span>
                <span className="text-purple-400">{wordToString(inverse1)}</span>
                <span className="text-dark-500"> = </span>
                <span className="text-green-400">1</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Word Tree Visualization */}
      <div className="mt-6">
        <div className="text-dark-400 text-sm mb-2">Reduced Word Visualization:</div>
        <div className="bg-dark-700 p-4 rounded-lg">
          <div className="flex justify-center items-center gap-1 flex-wrap">
            {reduced1.length === 0 ? (
              <span className="text-dark-500 font-mono text-xl">1 (identity)</span>
            ) : (
              reduced1.map((letter, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`w-10 h-10 rounded flex items-center justify-center font-mono text-lg ${
                    letter.inverse
                      ? 'bg-red-900/50 text-red-300'
                      : 'bg-blue-900/50 text-blue-300'
                  }`}
                >
                  {letter.symbol}
                  {letter.inverse && <sup className="text-xs">-1</sup>}
                </motion.div>
              ))
            )}
          </div>
          <div className="text-center text-dark-500 text-sm mt-2">
            Length: {reduced1.length}
          </div>
        </div>
      </div>

      {/* Properties */}
      <div className="mt-6 p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Free Group Properties</h5>
        <ul className="text-dark-400 text-sm space-y-1">
          <li>• <span className="text-green-400">Torsion-free</span>: no element (except 1) has finite order</li>
          <li>• <span className="text-blue-400">Universal property</span>: any function S → G extends to a homomorphism F(S) → G</li>
          <li>• <span className="text-purple-400">Nielsen-Schreier</span>: every subgroup of a free group is free</li>
          <li>• F({genSet.join(', ')}) is {genSet.length === 1 ? 'abelian (≅ Z)' : 'non-abelian'}</li>
        </ul>
      </div>
    </div>
  );
}
